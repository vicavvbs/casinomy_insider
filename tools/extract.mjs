import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { parse } from 'node-html-parser';

const SRC = new URL('../source/', import.meta.url).pathname;
const files = execSync(`cd ${SRC} && find . -name index.html | sort`, { encoding: 'utf8' }).trim().split('\n')
  .map(f => f.replace(/^\.\//, ''));

const decode = s => (s || '')
  .replace(/&#8217;/g, '’').replace(/&#8216;/g, '‘')
  .replace(/&#8220;/g, '“').replace(/&#8221;/g, '”')
  .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—')
  .replace(/&#8230;/g, '…').replace(/&#039;/g, "'").replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

const grab = (s, re) => { const m = s.match(re); return m ? decode(m[1]) : ''; };
const cleanQ = q => q.replace(/^\s*\d+[.)]\s*/, '').trim();
const txt = el => el ? decode(el.structuredText || el.text || '').replace(/\s+/g, ' ').trim() : '';

const pages = {};
for (const f of files) {
  const raw = readFileSync(SRC + f, 'utf8');
  const url = '/' + f.replace(/index\.html$/, '');
  const head = raw.slice(0, raw.indexOf('</head>'));
  const bodyRegion = raw.slice(raw.indexOf('<!-- Header End -->') + 19, raw.indexOf('<!-- Footer Start -->'));
  pages[url] = {
    url, file: f,
    title: grab(head, /<title>([\s\S]*?)<\/title>/),
    description: grab(head, /<meta name="description" content="([\s\S]*?)">/),
    robots: grab(head, /<meta name="robots" content="([^"]*)">/),
    ogImage: grab(head, /<meta property="og:image" content="([^"]*)">/),
    datePublished: grab(head, /"datePublished":"([^"]*)"/),
    dateModified: grab(head, /"dateModified":"([^"]*)"/) || grab(head, /"datePublished":"([^"]*)"/),
    root: parse(bodyRegion, { blockTextElements: { script: false, style: false } }),
    rawBody: bodyRegion,
  };
}

/* ---------- authors ---------- */
const authors = [];
{
  const hub = pages['/author/'].root;
  for (const u of hub.querySelectorAll('.author-list .user')) {
    const a = u.querySelector('a');
    const img = u.querySelector('img');
    const slug = (a?.getAttribute('href') || '').replace(/\/author\/|\//g, '');
    authors.push({
      slug,
      name: decode(a?.getAttribute('title') || txt(u.querySelector('.name'))),
      role: txt(u.querySelector('.biography')),
      avatar: img?.getAttribute('src') || '',
      avatarSrcset: img?.getAttribute('srcset') || '',
    });
  }
}

/* ---------- casinos ---------- */
const casinoSlugs = files.filter(f => f.startsWith('online-casino/')).map(f => f.split('/')[1]);
const casinos = [];
for (const slug of casinoSlugs) {
  const p = pages[`/online-casino/${slug}/`];
  const r = p.root;
  const ratingTxt = txt(r.querySelector('.head-rating-wrapper .rating-wrapper span'));
  const score = parseFloat(ratingTxt) || null;
  const authorLinks = r.querySelectorAll('.post-author');
  const byline = {};
  for (const el of authorLinks) {
    const label = txt(el.querySelector('strong')).replace(/:$/, '').trim();
    const a = el.querySelector('a');
    if (!a) continue;
    const key = /review/i.test(label) ? 'reviewedBy' : 'writtenBy';
    byline[key] = { name: txt(a), slug: (a.getAttribute('href') || '').replace(/\/author\/|\//g, '') };
  }
  const lastUpdated = txt(r.querySelector('.post-date')).replace(/^.*Last Updated On:\s*/i, '').trim();

  const sections = r.querySelectorAll('section.border-wrapper-white');
  const intro = sections[0];
  const logo = intro?.querySelector('.border-thumb img');
  const h1 = txt(intro?.querySelector('h1'));
  const introHtml = (intro?.querySelector('.border-content')?.innerHTML || '')
    .replace(/<h1[\s\S]*?<\/h1>/, '').replace(/<a[^>]*btn-gold[^>]*>[\s\S]*?<\/a>/, '').trim();

  // spec table + hero image: section[1] only when it actually holds a table
  const specSection = sections[1] && sections[1].querySelector('table') ? sections[1] : null;
  const hero = (specSection || sections[1])?.querySelector('img');
  const specRows = (specSection?.querySelectorAll('table tr') || []).map(tr => {
    const tds = tr.querySelectorAll('td');
    return { label: txt(tds[0]), value: txt(tds[1]) };
  }).filter(x => x.label);

  // pros / cons (two markup variants: <li> items, or <p><strong>Title</strong>Rest</p>)
  const prosSection = sections.find(s => /Pros\s*(&amp;|&|and)\s*Cons/i.test(s.innerHTML));
  const items = (root, sel) => {
    const col = root?.querySelector(sel);
    if (!col) return [];
    const lis = col.querySelectorAll('li');
    if (lis.length) return lis.map(li => ({ title: '', text: txt(li) }));
    return col.querySelectorAll('p').map(pEl => {
      const strong = pEl.querySelector('strong');
      const title = txt(strong);
      const clone = parse(pEl.innerHTML);
      clone.querySelectorAll('strong').forEach(x => x.remove());
      return { title, text: txt(clone) };
    }).filter(x => x.title || x.text);
  };
  const pros = items(prosSection, '.border-content-pros');
  const cons = items(prosSection, '.border-content-cons');

  // body: sections not used above
  const usedIdx = new Set([0]);
  if (specSection && specRows.length) usedIdx.add(1);
  if (prosSection) usedIdx.add(sections.indexOf(prosSection));
  const bodySections = sections.filter((s, i) => !usedIdx.has(i));
  const bodyHtml = bodySections.map(s => (s.querySelector('.border-content') || s).innerHTML).join('\n');

  // category scores from h2 texts containing "- n/10"
  const scores = [];
  for (const h of r.querySelectorAll('h2')) {
    const t = txt(h);
    const m = t.match(/^(.*?)\s*[\u2013\u2014-]\s*(\d+(?:\.\d+)?)\s*\/\s*10$/);
    if (m) scores.push({ label: m[1].trim(), score: parseFloat(m[2]) });
  }

  // FAQ: regex over the raw FAQ slice (markup varies: <li>, <h3>+<p>, <p><strong>+<p>)
  const faq = [];
  {
    const m = bodyHtml.match(/<h2[^>]*>(?:(?!<\/h2>)[\s\S])*?FAQ[\s\S]*?<\/h2>/i);
    if (m) {
      let slice = bodyHtml.slice(m.index + m[0].length);
      const nextH2 = slice.search(/<h2[\s>]/i);
      if (nextH2 > -1) slice = slice.slice(0, nextH2);
      const qre = /<h3[^>]*>([\s\S]*?)<\/h3>|<strong[^>]*>([\s\S]*?)<\/strong>/gi;
      const hits = [...slice.matchAll(qre)];
      for (let i = 0; i < hits.length; i++) {
        const h = hits[i];
        const qRaw = h[1] ?? h[2] ?? '';
        const q = cleanQ(decode(qRaw.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim());
        const from = h.index + h[0].length;
        const to = i + 1 < hits.length ? hits[i + 1].index : slice.length;
        const a = decode(slice.slice(from, to).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
        if (q && a && q.length < 160 && a.length > 10) faq.push({ q, a });
      }
    }
  }

  casinos.push({
    slug, h1,
    reviewTitle: txt(r.querySelector('.head-rating-wrapper .border-title')),
    title: p.title, description: p.description,
    datePublished: p.datePublished, dateModified: p.dateModified,
    lastUpdated, score,
    logo: logo?.getAttribute('src') || p.ogImage,
    logoAlt: decode(logo?.getAttribute('alt') || ''),
    hero: hero?.getAttribute('src') || '',
    heroAlt: decode(hero?.getAttribute('alt') || ''),
    ...byline,
    introHtml, specRows, pros, cons, scores, faq, bodyHtml,
  });
}

/* ---------- homepage ---------- */
const home = pages['/'];
const homeCards = home.root.querySelectorAll('.oc-table-wrapper .border-wrapper-white').map(c => ({
  img: c.querySelector('img')?.getAttribute('src') || '',
  score: parseFloat(txt(c.querySelector('.oc-rating-wrapper span'))) || null,
  highlight: txt(c.querySelector('.table-item-highlight')),
  href: c.querySelector('a')?.getAttribute('href') || '',
}));
const homeSections = home.root.querySelectorAll('main .home-wrapper').map(w => {
  const c = w.querySelector('.container');
  return { html: c ? c.innerHTML : '' };
});
const homeFaqLd = (() => {
  const raw = readFileSync(SRC + 'index.html', 'utf8');
  const m = [...raw.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const x of m) { try { const j = JSON.parse(x[1]); if (j['@type'] === 'FAQPage') return j.mainEntity.map(q => ({ q: q.name, a: q.acceptedAnswer.text })); } catch {} }
  return [];
})();

/* ---------- hub ---------- */
const hubCards = pages['/online-casino-review/'].root.querySelectorAll('.oc-grid-wrapper .border-wrapper-white').map(c => ({
  img: c.querySelector('img')?.getAttribute('src') || '',
  title: txt(c.querySelector('.border-title')),
  score: parseFloat(txt(c.querySelector('.oc-rating-wrapper span'))) || null,
  highlight: txt(c.querySelector('.item-highlight')),
  href: c.querySelectorAll('a').map(a => a.getAttribute('href')).find(h => h && h.startsWith('/online-casino/')) || '',
}));

/* ---------- static pages ---------- */
const staticUrls = ['/about-us/', '/contact-us/', '/editorial-guidelines/', '/editorial-team/',
  '/privacy-policy/', '/responsible-gambling/', '/why-trust-us/', '/author/'];
const statics = staticUrls.map(u => {
  const p = pages[u];
  const area = p.root.querySelector('.text-area.main-col') || p.root.querySelector('.container');
  const h1el = area?.querySelector('h1') || area?.querySelector('h2');
  const h1 = txt(h1el);
  let html = area ? area.innerHTML : '';
  if (h1el) html = html.replace(h1el.outerHTML, '');
  return { url: u, title: p.title, description: p.description, h1,
    datePublished: p.datePublished, dateModified: p.dateModified, html: html.trim() };
});

const out = {
  generatedAt: new Date().toISOString(),
  authors, casinos,
  home: { title: home.title, description: home.description, h1: txt(home.root.querySelector('h1')),
    bannerHtml: home.root.querySelector('.home-banner-content .container')?.innerHTML || '',
    datePublished: home.datePublished, dateModified: home.dateModified,
    cards: homeCards, sections: homeSections, faq: homeFaqLd },
  hub: { ...pages['/online-casino-review/'], root: undefined, rawBody: undefined, cards: hubCards,
    h1: txt(pages['/online-casino-review/'].root.querySelector('h1')) },
  statics,
  authorProfiles: authors.map(a => ({ ...a, title: pages[`/author/${a.slug}/`]?.title || '',
    robots: pages[`/author/${a.slug}/`]?.robots || 'noindex, follow',
    empty: !txt(pages[`/author/${a.slug}/`]?.root?.querySelector('.space-archive-loop')) })),
};

mkdirSync(new URL('../data/', import.meta.url).pathname, { recursive: true });
writeFileSync(new URL('../data/pages.json', import.meta.url).pathname, JSON.stringify(out, null, 2));

console.log('authors:', authors.length);
console.log('casinos:', casinos.length);
console.log('home cards:', homeCards.length, '| home sections:', homeSections.length, '| home faq:', homeFaqLd.length);
console.log('hub cards:', hubCards.length);
console.log('statics:', statics.length);
console.log('empty author profiles:', out.authorProfiles.filter(a => a.empty).length);
console.log('\nper-casino:');
for (const c of casinos) console.log(' ', c.slug.padEnd(10), 'score', String(c.score).padEnd(5), 'spec', String(c.specRows.length).padEnd(3), 'pros', String(c.pros.length).padEnd(3), 'cons', String(c.cons.length).padEnd(3), 'scores', String(c.scores.length).padEnd(3), 'faq', String(c.faq.length).padEnd(3), 'body', c.bodyHtml.length, c.writtenBy ? '' : 'NO-AUTHOR');
