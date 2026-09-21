#!/usr/bin/env node
/* CasinoMY Insider static site build.
   Renders data/pages.json (extracted from the Simply Static WordPress export)
   into dist/ using the shared partials in lib/. */

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE_URL, SITE, META, AUTHOR_META, CASINO_NAMES, affiliateUrl } from './config.mjs';
import { esc, icon, rating, stars, slugify } from './lib/html.mjs';
import { HOMEPAGE } from './content/homepage.mjs';
import { CASINO_FACTS } from './content/casino-facts.mjs';
import { REVIEW_COPY } from './content/review-intros.mjs';
import { PAGE_COPY } from './content/page-copy.mjs';
import { createRewriter, demote, toText, imageKey } from './lib/content.mjs';
import sharp from 'sharp';
import { buildImages } from './lib/images.mjs';
import * as S from './lib/schema.mjs';
import { layout, authorBox, affiliateDisclaimer } from './lib/partials.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, 'source');
const OUT = path.join(ROOT, 'dist');
const data = JSON.parse(readFileSync(path.join(ROOT, 'data/pages.json'), 'utf8'));
const HOST = new URL(SITE_URL).host;
/* Reviews and the homepage carry the build date as dateModified. */
const BUILD_DATE = new Date().toISOString();
const log = (...a) => console.log(...a);

/* ---------------------------------------------------------------- helpers */
const HOME_CRUMB = { name: 'Home', href: '/' };
const fmtDate = iso => {
  if (!iso) return null;
  const d = new Date(iso);
  return { iso: d.toISOString().slice(0, 10),
    text: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) };
};
const authorBySlug = new Map(data.authors.map(a => [a.slug, a]));

/* Fix the two content bugs carried over from the export. */
function cleanH1(h1) {
  return h1.split(/Meta Description:/i)[0].trim();
}

/* Casinos ranked by score, then by how complete the review is. */
const casinos = data.casinos
  .map(c => ({
    ...c,
    h1: cleanH1(c.h1),
    name: CASINO_NAMES[c.slug] || c.slug,
    url: `/online-casino/${c.slug}/`,
    meta: META[`/online-casino/${c.slug}/`],
    lastUpdated: (c.lastUpdated || '').replace(/^(Published|Last Updated) On:\s*/i, '').trim(),
  }))
  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

const relatedFor = slug => {
  const i = casinos.findIndex(c => c.slug === slug);
  return [1, 2, 3, 4].map(n => casinos[(i + n) % casinos.length]);
};

/* ------------------------------------------------------- collect image URLs */
const imageUrls = new Set();
const harvest = html => {
  for (const m of String(html || '').matchAll(/(?:src|srcset)="([^"]+)"/g))
    for (const part of m[1].split(','))
      { const u = part.trim().split(' ')[0]; if (u.startsWith('/wp-content/uploads/')) imageUrls.add(u); }
};
for (const c of data.casinos) { harvest(c.introHtml); harvest(c.bodyHtml); if (c.logo) imageUrls.add(c.logo); if (c.hero) imageUrls.add(c.hero); }
for (const s of data.statics) harvest(s.html);
for (const s of data.home.sections) harvest(s.html);
for (const c of data.home.cards) if (c.img) imageUrls.add(c.img);
for (const c of data.hub.cards) if (c.img) imageUrls.add(c.img);
for (const a of data.authors) if (a.avatar) imageUrls.add(a.avatar);
imageUrls.add('/wp-content/uploads/2025/07/CasinoMY-Insider-Background-Removed.png');

/* --------------------------------------------------------------- templates */
function picture(img, alt, { width, cls = '', lcp = false } = {}) {
  if (!img) return '';
  const w = width || img.width;
  const h = Math.round(img.height * w / img.width);
  const loading = lcp ? 'eager' : 'lazy';
  const prio = lcp ? ' fetchpriority="high"' : '';
  return `<picture><source type="image/webp" srcset="${img.webp}">` +
    `<img src="${img.out}" alt="${esc(alt)}" width="${w}" height="${h}"` +
    `${cls ? ` class="${cls}"` : ''} loading="${loading}" decoding="async"${prio}></picture>`;
}

function faqBlock(faq, idPrefix) {
  if (!faq.length) return '';
  const items = faq.map((f, i) => {
    const id = `faq-${idPrefix}-${i + 1}`;
    return `<div class="faq-item">
      <h3 style="margin:0"><button type="button" class="faq-q" id="${id}-btn" aria-expanded="false" aria-controls="${id}">${esc(f.q)}</button></h3>
      <section class="faq-a" id="${id}" aria-labelledby="${id}-btn" hidden><p>${esc(f.a)}</p></section>
    </div>`;
  }).join('\n');
  return `<div class="faq">${items}</div>`;
}

/* Outbound button only when a real tracking URL is configured; otherwise the
   page links to the review instead of shipping a placeholder affiliate link. */
function ctaPair(c, { primaryLabel = 'Play now' } = {}) {
  const href = affiliateUrl(c.slug);
  const outbound = href
    ? `<a class="btn-gold" href="${esc(href)}" target="_blank" rel="sponsored nofollow noopener">${primaryLabel} <span class="visually-hidden">at ${esc(c.name)}</span></a>`
    : '';
  const readClass = outbound ? 'btn-ghost' : 'btn-gold';
  return `<div class="oc-cta">
    ${outbound}<a class="${readClass}" href="${c.url}">Read ${esc(c.name)} review</a>
  </div>`;
}

function relatedBlock(slug, images) {
  const rel = relatedFor(slug);
  const items = rel.map(r => {
    const img = images.get(imageKey(r.logo));
    return `<li><a href="${r.url}">${img ? picture(img, `${r.name} online casino logo`, { width: 72 }) : ''}<span>${esc(r.name)}</span><span class="rating">${stars(r.score)}</span></a></li>`;
  }).join('');
  return `<section class="panel" aria-labelledby="related-h">
    <h2 id="related-h">Compare with other Malaysian casinos</h2>
    <ul class="related-grid">${items}</ul>
  </section>`;
}

/* ------------------------------------------------------------------ pages */
const pages = [];   // { url, html, lastmod, indexable }

function buildHome(rewrite, images) {
  const url = '/';
  const H = HOMEPAGE;
  const author = authorBySlug.get(H.author);
  const checker = authorBySlug.get(H.factChecker);
  const updated = fmtDate(BUILD_DATE);

  /* --- comparison table --- */
  const cell = v => (v ? esc(v) : '<span class="muted">See review</span>');
  const tableRows = casinos.map((c, i) => {
    const f = CASINO_FACTS[c.slug] || {};
    const img = images.get(imageKey(c.logo));
    return `<tr>
      <th scope="row">
        <span class="rank">#${i + 1}</span>
        ${img ? picture(img, `${c.name} online casino logo`, { width: 64, lcp: i === 0 }) : ''}
        <span class="brand">${esc(c.name)}</span>
      </th>
      <td data-label="Rating">${rating(c.score, c.name)}</td>
      <td data-label="Welcome bonus">${cell(f.welcomeBonus)}</td>
      <td data-label="Min deposit">${cell(f.minDeposit)}</td>
      <td data-label="Withdrawal speed">${cell(f.withdrawal)}</td>
      <td data-label="Payments">${cell((f.payments || []).join(', '))}</td>
      <td data-label="Review"><a class="btn-ghost btn-sm" href="${c.url}">${esc(c.name)} review</a></td>
    </tr>`;
  }).join('\n');

  const comparison = `<div class="table-scroll"><table class="compare-table">
    <caption class="visually-hidden">Online casino Malaysia sites compared by rating, bonus, minimum deposit, withdrawal speed and payment methods</caption>
    <thead><tr>
      <th scope="col">Casino</th><th scope="col">Rating</th><th scope="col">Welcome bonus</th>
      <th scope="col">Min deposit</th><th scope="col">Withdrawal speed</th>
      <th scope="col">Payments</th><th scope="col">Review</th>
    </tr></thead>
    <tbody>${tableRows}</tbody>
  </table></div>`;

  /* --- sections --- */
  const rendered = H.sections.map(sec => {
    const hid = `h-${sec.id}`;
    const inner = [sec.intro, sec.table ? comparison : '', sec.body, sec.after]
      .filter(Boolean).join('\n');
    return `<section class="section" aria-labelledby="${hid}"><div class="container"><div class="panel">
  <h2 id="${hid}">${sec.h2}</h2>
  ${inner}
</div></div></section>`;
  }).join('\n');

  const faqSection = `<section class="section" aria-labelledby="h-faq"><div class="container"><div class="panel">
  <h2 id="h-faq">Online Casino Malaysia FAQ</h2>
  ${faqBlock(H.faq, 'home')}
</div></div></section>`;

  const byline = `<div class="article-meta home-byline">
    ${author ? `<span>${icon('user')} <strong>Written by:</strong> <a href="/author/${author.slug}/" rel="author">${esc(author.name)}</a>, ${esc(author.role)}</span>` : ''}
    ${checker ? `<span>${icon('check')} <strong>Fact-checked by:</strong> <a href="/author/${checker.slug}/">${esc(checker.name)}</a></span>` : ''}
    <span>${icon('calendar')} <strong>Last updated:</strong> <time datetime="${updated.iso}">${esc(updated.text)}</time></span>
  </div>`;

  const jsonld = S.graph([
    S.website(), S.organization(),
    S.breadcrumbList(url, [HOME_CRUMB]),
    S.webPage({ url, title: H.title, description: H.description, image: SITE.logo,
      datePublished: data.home.datePublished, dateModified: BUILD_DATE }),
    S.itemList(url, casinos.map(c => ({ name: c.name, url: c.url }))),
    S.faqPage(url, H.faq),
  ]);

  const body = `<div class="home-banner"><div class="container">
  <h1>${esc(H.h1)}</h1>
</div></div>
<section class="section"><div class="container"><div class="panel">
  ${byline}
  ${H.intro}
  <p class="brand-note">${icon('info')} <span>CasinoMY Insider is an independent review site funded by affiliate commission. Commission never changes a score — read <a href="/about-us/">about us</a> and <a href="/why-trust-us/">why trust us</a> for the full picture.</span></p>
</div></div></section>
${rendered}
${faqSection}`;

  pages.push({ url, indexable: true, lastmod: BUILD_DATE,
    html: layout({ url, title: H.title, description: H.description, image: SITE.logo, jsonld,
      crumbs: [HOME_CRUMB], body, bodyClass: 'is-home' }) });
}

const rewriteYear = t => String(t).replace(/\b2025\b/g, '2026');

function buildReview(c, rewrite, images) {
  const url = c.url;
  const m = c.meta;
  const logo = images.get(imageKey(c.logo));
  const heroImg = c.hero ? images.get(imageKey(c.hero)) : null;
  const copy = REVIEW_COPY[c.slug];
  const written = authorBySlug.get(c.writtenBy?.slug);
  const reviewer = authorBySlug.get(c.reviewedBy?.slug);
  const date = fmtDate(c.dateModified);

  const spec = c.specRows.length ? `<section class="panel" aria-labelledby="spec-h">
    <h2 id="spec-h">${esc(c.name)} at a glance</h2>
    <div class="table-scroll"><table class="spec-table"><tbody>
    ${c.specRows.map(r => `<tr><th scope="row">${esc(r.label)}</th><td>${esc(r.value)}</td></tr>`).join('\n    ')}
    </tbody></table></div>
  </section>` : '';

  const li = (item, ic) => `<li>${icon(ic)}<span>${item.title ? `<strong>${esc(item.title)}</strong> ` : ''}${esc(item.text)}</span></li>`;
  const proscons = (c.pros.length || c.cons.length) ? `<section class="panel" aria-labelledby="pc-h">
    <h2 id="pc-h">Pros &amp; cons</h2>
    <div class="proscons">
      <div class="pros"><h3>${icon('check')} Pros</h3><ul>${c.pros.map(p => li(p, 'check')).join('')}</ul></div>
      <div class="cons"><h3>${icon('cross')} Cons</h3><ul>${c.cons.map(p => li(p, 'cross')).join('')}</ul></div>
    </div>
  </section>` : '';

  const scorecard = c.scores.length ? `<section class="panel" aria-labelledby="sc-h">
    <h2 id="sc-h">How ${esc(c.name)} scores</h2>
    <dl class="scorecard">
    ${c.scores.map(s => `<div><dt>${esc(s.label)}</dt><dd>${s.score}/10<span class="scorebar"><span style="width:${s.score * 10}%"></span></span></dd></div>`).join('\n    ')}
    </dl>
  </section>` : '';

  /* body: drop the old TL;DR block — a freshly written one is rendered above */
  let bodyHtml = c.bodyHtml;
  const tldrH2 = bodyHtml.match(/<h2[^>]*>(?:(?!<\/h2>)[\s\S])*?TL;?DR[\s\S]*?<\/h2>/i);
  if (tldrH2) {
    const rest = bodyHtml.slice(tldrH2.index + tldrH2[0].length);
    const next = rest.search(/<h2[\s>]/i);
    bodyHtml = bodyHtml.slice(0, tldrH2.index) + (next > -1 ? rest.slice(next) : '');
  }

  /* body: strip the FAQ block (rendered as an accordion instead) */
  const faqH2 = bodyHtml.match(/<h2[^>]*>(?:(?!<\/h2>)[\s\S])*?FAQ[\s\S]*?<\/h2>/i);
  let tail = '';
  if (faqH2) {
    const after = bodyHtml.slice(faqH2.index + faqH2[0].length);
    const nextH2 = after.search(/<h2[\s>]/i);
    tail = nextH2 > -1 ? after.slice(nextH2) : '';
    bodyHtml = bodyHtml.slice(0, faqH2.index);
  }

  const jsonld = S.graph([
    S.website(), S.organization(),
    S.breadcrumbList(url, [HOME_CRUMB, { name: 'Online Casino Reviews', href: '/online-casino-review/' }, { name: `${c.name} Review`, href: url }]),
    S.webPage({ url, title: m.title, description: m.description, image: c.logo && logo ? logo.out : SITE.logo,
      datePublished: c.datePublished, dateModified: c.dateModified }),
    S.review({ url, casino: { ...c, title: m.title, dateModified: BUILD_DATE }, author: written, reviewer,
      image: logo ? logo.out : null, description: m.description }),
    written ? S.person({ ...written, image: images.get(imageKey(written.avatar))?.out }) : null,
    reviewer && reviewer.slug !== written?.slug ? S.person({ ...reviewer, image: images.get(imageKey(reviewer.avatar))?.out }) : null,
    c.faq.length ? S.faqPage(url, c.faq) : null,
  ]);

  const body = `<div class="container">
  <div class="review-head">
    <p class="kicker">${esc(c.reviewTitle.replace(/2025/, '2026'))}</p>
    ${rating(c.score, c.name)}
  </div>
  ${authorBox({ writtenBy: c.writtenBy, reviewedBy: c.reviewedBy, date })}
  ${affiliateDisclaimer()}

  <section class="panel">
    <div class="review-intro">
      <div class="review-logo">${logo ? picture(logo, `${c.name} online casino logo`, { width: 200, lcp: true }) : ''}</div>
      <div>
        <h1>${esc(rewriteYear(c.h1))}</h1>
        ${copy.intro}
        ${affiliateUrl(c.slug)
          ? `<div class="oc-cta"><a class="btn-gold" href="${esc(affiliateUrl(c.slug))}" target="_blank" rel="sponsored nofollow noopener">Play at ${esc(c.name)}</a></div>`
          : `<p class="cta-pending">${icon('info')}<span>We do not currently link out to ${esc(c.name)}. Our verdict is below, and you can <a href="/#h-shortlist">compare it against every casino we rate</a>.</span></p>`}
      </div>
    </div>
  </section>

  <section class="panel" aria-labelledby="tldr-h">
    <h2 id="tldr-h">TL;DR — key takeaways</h2>
    ${copy.tldr}
    <ul class="takeaways">${copy.bullets.map(b => `<li>${icon('check')}<span>${esc(b)}</span></li>`).join('')}</ul>
    <p class="compare-link"><a href="/#h-shortlist">Compare ${esc(c.name)} with every casino we rate &rarr;</a></p>
  </section>

  ${spec}
  ${proscons}
  ${scorecard}

  <div class="panel content">
    ${rewrite(bodyHtml, { fallbackAlt: `${c.name} online casino`, lcp: false })}
  </div>

  ${c.faq.length ? `<section class="panel" aria-labelledby="faq-h">
    <h2 id="faq-h">FAQs about ${esc(c.name)}</h2>
    ${faqBlock(c.faq, c.slug)}
  </section>` : ''}

  ${tail ? `<div class="panel content">${rewrite(tail)}</div>` : ''}

  ${relatedBlock(c.slug, images)}
</div>`;

  pages.push({ url, indexable: true, lastmod: c.dateModified,
    html: layout({ url, title: m.title, description: m.description,
      image: logo ? logo.out : SITE.logo, jsonld,
      preloadImage: logo ? logo.webp : null,
      crumbs: [HOME_CRUMB, { name: 'Online Casino Reviews', href: '/online-casino-review/' }, { name: `${c.name} Review`, href: url }],
      body }) });
}

function buildHub(rewrite, images) {
  const url = '/online-casino-review/';
  const m = META[url];
  const cards = casinos.map((c, i) => {
    const img = images.get(imageKey(c.logo));
    return `<article class="oc-card">
      ${img ? picture(img, `${c.name} online casino logo`, { width: 150, lcp: i === 0 }) : ''}
      <h2><a href="${c.url}">${esc(c.name)} review</a></h2>
      ${rating(c.score, c.name)}
      <p>${esc(toText(c.introHtml).slice(0, 120).replace(/\s\S*$/, ''))}…</p>
      ${ctaPair(c)}
    </article>`;
  }).join('\n');

  const jsonld = S.graph([
    S.website(), S.organization(),
    S.breadcrumbList(url, [HOME_CRUMB, { name: 'Online Casino Reviews', href: url }]),
    S.webPage({ url, title: m.title, description: m.description,
      datePublished: data.hub.datePublished, dateModified: data.hub.dateModified }),
    S.itemList(url, casinos.map(c => ({ name: c.name, url: c.url }))),
  ]);

  const body = `<div class="container">
  <div class="text-area">
    <h1>${esc(m.h1)}</h1>
    <p>Every casino below was opened with our own money, funded through a Malaysian payment method, played and then cashed out. We score licensing, bonus terms, game range, payout speed, mobile experience and support against the same <a href="/editorial-guidelines/">published criteria</a>, and each review names the writer and the second reviewer who checked it.</p>
  </div>
  <div class="oc-grid">${cards}</div>
</div>`;

  pages.push({ url, indexable: true, lastmod: data.hub.dateModified,
    html: layout({ url, title: m.title, description: m.description, jsonld,
      crumbs: [HOME_CRUMB, { name: 'Online Casino Reviews', href: url }], body }) });
}

function buildStatic(s, rewrite, images) {
  const url = s.url;
  const m = META[url];
  if (!m) return;
  const crumbs = [HOME_CRUMB, { name: m.h1 || s.h1, href: url }];
  const jsonld = S.graph([
    S.website(), S.organization(), S.breadcrumbList(url, crumbs),
    S.webPage({ url, title: m.title, description: m.description,
      datePublished: s.datePublished, dateModified: s.dateModified }),
  ]);
  const extra = PAGE_COPY[url] || {};
  const body = `<div class="container"><div class="text-area">
  <h1>${esc(m.h1 || s.h1)}</h1>
  ${extra.before || ''}
  ${rewrite(s.html)}
</div></div>`;
  pages.push({ url, indexable: true, lastmod: s.dateModified || s.datePublished,
    html: layout({ url, title: m.title, description: m.description, jsonld, crumbs, body }) });
}

function buildAuthorHub(rewrite, images) {
  const url = '/author/';
  const m = META[url];
  const src = data.statics.find(s => s.url === url);
  const intro = src ? rewrite(src.html.split('<div')[0]) : '';
  const cards = data.authors.map(a => {
    const img = images.get(imageKey(a.avatar));
    const wrote = casinos.filter(c => c.writtenBy?.slug === a.slug);
    const checked = casinos.filter(c => c.reviewedBy?.slug === a.slug);
    return `<li class="author-card">
      <a href="/author/${a.slug}/">${img ? picture(img, `${a.name}, ${a.role} at ${SITE.name}`, { width: 96 }) : ''}
      <span class="name">${esc(a.name)}</span></a>
      <p class="role">${esc(a.role)}</p>
      <p class="author-byline">${wrote.length} review${wrote.length === 1 ? '' : 's'} written &middot; ${checked.length} fact-checked</p>
    </li>`;
  }).join('\n');

  const crumbs = [HOME_CRUMB, { name: 'Our Writers', href: url }];
  const jsonld = S.graph([
    S.website(), S.organization(), S.breadcrumbList(url, crumbs),
    S.webPage({ url, title: m.title, description: m.description,
      datePublished: src?.datePublished, dateModified: src?.dateModified }),
    ...data.authors.map(a => S.person({ ...a, image: images.get(imageKey(a.avatar))?.out })),
  ]);
  const body = `<div class="container"><div class="text-area">
  <h1>${esc(m.h1)}</h1>
  ${intro}
</div>
<ul class="author-grid">${cards}</ul></div>`;
  pages.push({ url, indexable: true, lastmod: src?.dateModified,
    html: layout({ url, title: m.title, description: m.description, jsonld, crumbs, body }) });
}

function buildAuthorProfile(a, images) {
  const url = `/author/${a.slug}/`;
  const img = images.get(imageKey(a.avatar));
  const wrote = casinos.filter(c => c.writtenBy?.slug === a.slug);
  const checked = casinos.filter(c => c.reviewedBy?.slug === a.slug);
  const title = `${a.name} | ${a.role} at ${SITE.name}`;
  const description = AUTHOR_META[a.slug];
  const crumbs = [HOME_CRUMB, { name: 'Our Writers', href: '/author/' }, { name: a.name, href: url }];

  const list = (items, heading, verb) => items.length ? `<section class="panel">
    <h2>${heading}</h2>
    <ul>${items.map(c => `<li><a href="${c.url}">${esc(c.name)} review</a> — rated ${c.score}/10${c.lastUpdated ? `, updated ${esc(c.lastUpdated)}` : ''}</li>`).join('')}</ul>
  </section>` : '';

  const jsonld = S.graph([
    S.website(), S.organization(), S.breadcrumbList(url, crumbs),
    S.profilePage({ url, a }),
    S.person({ ...a, image: img?.out }),
  ]);

  const body = `<div class="container">
  <div class="text-area">
    <div class="author-profile">
      <div>${img ? picture(img, `${a.name}, ${a.role} at ${SITE.name}`, { width: 120 }) : ''}</div>
      <div>
        <h1>${esc(a.name)}</h1>
        <p class="role"><strong>${esc(a.role)}</strong> at ${esc(SITE.name)}</p>
        <p>${esc(description)}</p>
        <p class="author-byline">${wrote.length} review${wrote.length === 1 ? '' : 's'} written &middot; ${checked.length} review${checked.length === 1 ? '' : 's'} fact-checked. Every review is written by one team member and independently verified by another, as set out in our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>
      </div>
    </div>
  </div>
  ${list(wrote, `Reviews written by ${esc(a.name)}`)}
  ${list(checked, `Reviews fact-checked by ${esc(a.name)}`)}
</div>`;

  pages.push({ url, indexable: false, robots: 'noindex, follow',
    html: layout({ url, title, description, robots: 'noindex, follow',
      image: img?.out, jsonld, crumbs, body }) });
}

function buildEditorialTeam(rewrite, images) {
  const url = '/editorial-team/';
  const m = META[url];
  const src = data.statics.find(s => s.url === url);
  const crumbs = [HOME_CRUMB, { name: 'Editorial Team', href: url }];
  const roles = [...new Set(data.authors.map(a => a.role))];
  const byRole = roles.map(r => `<h3>${esc(r)}</h3><ul>${data.authors.filter(a => a.role === r)
    .map(a => `<li><a href="/author/${a.slug}/">${esc(a.name)}</a> — ${casinos.filter(c => c.writtenBy?.slug === a.slug).length} reviews written, ${casinos.filter(c => c.reviewedBy?.slug === a.slug).length} fact-checked</li>`).join('')}</ul>`).join('\n');

  const jsonld = S.graph([
    S.website(), S.organization(), S.breadcrumbList(url, crumbs),
    S.webPage({ url, title: m.title, description: m.description,
      datePublished: src?.datePublished, dateModified: src?.dateModified }),
    ...data.authors.map(a => S.person({ ...a, image: images.get(imageKey(a.avatar))?.out })),
  ]);

  const body = `<div class="container"><div class="text-area">
  <h1>${esc(m.h1)}</h1>
  <p>CasinoMY Insider is produced by a team of ${data.authors.length} iGaming writers, analysts and reviewers. Nobody publishes their own work unchecked: every casino review is written by one person and independently verified by a second, who repeats the deposit and withdrawal tests before the page goes live.</p>
  <h2>Who does what</h2>
  ${byRole}
  <h2>How we work</h2>
  <ul>
    <li><strong>Write.</strong> The writer opens an account with their own money, plays, requests a withdrawal and records what happens.</li>
    <li><strong>Verify.</strong> A second team member re-checks the licence number, bonus terms and payout timings against the operator's own pages and the regulator's register.</li>
    <li><strong>Date.</strong> Each review carries a visible last-updated date and the names of both people involved.</li>
    <li><strong>Revisit.</strong> Bonuses, banking limits and licences change, so pages are re-tested and re-dated rather than quietly edited.</li>
  </ul>
  <p>The full method, including how each scoring category is weighted, is set out in our <a href="/editorial-guidelines/">editorial guidelines</a>. Profiles for every team member are on the <a href="/author/">writers page</a>, and the reasoning behind our ratings is explained in <a href="/why-trust-us/">why trust us</a>.</p>
  <p>Spotted something out of date? <a href="/contact-us/">Tell us</a> — corrections are published with a new date stamp.</p>
</div></div>`;

  pages.push({ url, indexable: true, lastmod: src?.dateModified || src?.datePublished,
    html: layout({ url, title: m.title, description: m.description, jsonld, crumbs, body }) });
}

function build404(images) {
  const url = '/404.html';
  const m = META[url];
  const jsonld = S.graph([S.website(), S.organization()]);
  const top = casinos.slice(0, 4).map(c => `<li><a href="${c.url}">${esc(c.name)} review</a></li>`).join('');
  const body = `<div class="container"><div class="text-area notfound">
  <h1>404</h1>
  <p>We could not find that page. It may have moved, or the link may be out of date.</p>
  <p><a class="btn-gold" href="/">Back to the homepage</a></p>
  <h2>Popular pages</h2>
  <ul style="list-style:none;padding:0">
    <li><a href="/online-casino-review/">All online casino reviews</a></li>
    ${top}
    <li><a href="/responsible-gambling/">Responsible gambling</a></li>
    <li><a href="/contact-us/">Contact us</a></li>
  </ul>
</div></div>`;
  pages.push({ url, indexable: false, robots: 'noindex, follow',
    html: layout({ url: '/404.html', title: m.title, description: m.description,
      robots: 'noindex, follow', jsonld, crumbs: [], body }) });
}

/* ------------------------------------------------------------------- main */
async function main() {
  log('Building CasinoMY Insider ->', OUT);
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(path.join(OUT, 'assets/img'), { recursive: true });

  const images = await buildImages({ srcRoot: SRC, outDir: path.join(OUT, 'assets/img'), urls: imageUrls, log });
  /* site logo alias */
  const logoKey = imageKey('/CasinoMY-Insider-Background-Removed.png');
  const logo = images.get(logoKey);
  if (logo) {
    const logoFile = path.join(OUT, 'assets/img', path.basename(logo.out));
    cpSync(logoFile, path.join(OUT, 'assets/img/casinomy-insider-logo.png'));
    /* the source linked favicons that were never exported — regenerate them here */
    for (const [name, size] of [['favicon-32.png', 32], ['favicon-192.png', 192], ['apple-touch-icon.png', 180]]) {
      await sharp(logoFile).resize(size, size, { fit: 'contain', background: { r: 16, g: 30, b: 34, alpha: 1 } })
        .png().toFile(path.join(OUT, 'assets/img', name));
    }
  }

  const rewrite = createRewriter(images);

  buildHome(rewrite, images);
  buildHub(rewrite, images);
  for (const c of casinos) buildReview(c, rewrite, images);
  for (const s of data.statics) {
    if (s.url === '/author/' || s.url === '/editorial-team/') continue;
    buildStatic(s, rewrite, images);
  }
  buildAuthorHub(rewrite, images);
  buildEditorialTeam(rewrite, images);
  for (const a of data.authors) buildAuthorProfile(a, images);
  build404(images);

  /* write html */
  for (const p of pages) {
    const file = p.url === '/404.html' ? path.join(OUT, '404.html')
      : path.join(OUT, p.url.replace(/^\//, ''), 'index.html');
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, p.html);
  }

  /* static assets */
  cpSync(path.join(ROOT, 'src/assets/css'), path.join(OUT, 'assets/css'), { recursive: true });
  cpSync(path.join(ROOT, 'src/assets/js'), path.join(OUT, 'assets/js'), { recursive: true });
  cpSync(path.join(ROOT, 'src/assets/fonts'), path.join(OUT, 'assets/fonts'), { recursive: true });
  writeFileSync(path.join(OUT, 'site.webmanifest'), JSON.stringify({
    name: SITE.name, short_name: SITE.name, start_url: '/', display: 'standalone',
    background_color: '#ffffff', theme_color: SITE.themeColor,
    icons: [
      { src: '/assets/img/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }, null, 2));

  /* sitemap — indexable URLs only */
  const indexable = pages.filter(p => p.indexable);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${(p.lastmod || new Date().toISOString()).slice(0, 10)}</lastmod>
  </url>`).join('\n')}
</urlset>
`;
  writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);

  writeFileSync(path.join(OUT, 'robots.txt'),
`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);

  writeFileSync(path.join(OUT, '_headers'),
`/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=(), interest-cohort=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/sitemap.xml
  Cache-Control: public, max-age=3600
`);

  writeFileSync(path.join(OUT, '_redirects'),
`# canonical host: apex, https, no www
https://www.${HOST}/*      ${SITE_URL}/:splat   301!
http://www.${HOST}/*       ${SITE_URL}/:splat   301!
http://${HOST}/*           ${SITE_URL}/:splat   301!

# retired WordPress paths
/category/uncategorized/   /   301
/category/*                /   301
/author/*/feed/            /author/:splat/   301
/wp-admin/*                /   301
/wp-content/*              /   301
/wp-includes/*             /   301
/index.php                 /   301
/feed/                     /   301
/*.php                     /   301
`);

  /* report */
  log(`  pages: ${pages.length} (${indexable.length} indexable, ${pages.length - indexable.length} noindex)`);
  const titles = new Map(), descs = new Map();
  for (const p of pages) {
    const t = (p.html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    const d = (p.html.match(/<meta name="description" content="([^"]*)">/) || [])[1];
    titles.set(t, [...(titles.get(t) || []), p.url]);
    descs.set(d, [...(descs.get(d) || []), p.url]);
  }
  const dupT = [...titles].filter(([, v]) => v.length > 1);
  const dupD = [...descs].filter(([, v]) => v.length > 1);
  log(`  duplicate titles: ${dupT.length}  duplicate descriptions: ${dupD.length}`);
  dupT.forEach(([t, v]) => log('    ! title', JSON.stringify(t), v.join(', ')));
  dupD.forEach(([d, v]) => log('    ! desc', JSON.stringify(String(d).slice(0, 40)), v.join(', ')));
  log('  sitemap:', indexable.length, 'URLs');
  log('Done.');
}

main().catch(e => { console.error(e); process.exit(1); });
