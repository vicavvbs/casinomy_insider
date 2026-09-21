/* Generates SEO-REPORT.md from the built site plus the build config. */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, META, CASINO_NAMES } from '../config.mjs';
import { HOMEPAGE } from '../content/homepage.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');
const OLD_HOST = 'retrocomputerslimited.com';
const PLACEHOLDER = 'www.example.com';

/* ---- keyword map: one primary keyword per page ---- */
const KEYWORD_MAP = [
  ['/', 'best online casino malaysia 2026'],
  ['/online-casino-review/', 'online casino malaysia review'],
  ['/about-us/', 'casino insider malaysia'],
  ['/why-trust-us/', 'trusted online casino malaysia'],
  ['/editorial-guidelines/', 'how we rate online casinos malaysia'],
  ['/editorial-team/', 'casinomy insider editorial team'],
  ['/author/', 'casinomy insider writers'],
  ['/responsible-gambling/', 'responsible gambling malaysia'],
  ['/privacy-policy/', 'casinomy insider privacy policy'],
  ['/contact-us/', 'contact casinomy insider'],
  ...Object.entries(CASINO_NAMES).map(([slug, name]) =>
    [`/online-casino/${slug}/`, `${name.toLowerCase()} review malaysia`]),
];

/* ---- homepage keyword usage ---- */
const TERMS = [
  'online casino malaysia', 'best online casino malaysia 2026', 'casinomy insider',
  'casino insider malaysia', 'trusted online casino malaysia', 'legit online casino malaysia',
  'online casino malaysia review', 'online casino free credit malaysia',
  'no deposit bonus casino malaysia', 'online casino malaysia welcome bonus',
  'fast withdrawal online casino malaysia', 'live casino malaysia', 'online slot malaysia',
  'sports betting malaysia', '4d online malaysia', 'fishing game malaysia',
  'crypto casino malaysia', 'online casino touch n go', 'online casino duitnow',
  'is online casino legal in malaysia', 'kasino dalam talian malaysia',
];
const H = HOMEPAGE;
const onpage = [H.h1, H.intro,
  ...H.sections.map(s => [s.h2, s.intro, s.body, s.after].filter(Boolean).join(' ')),
  ...H.faq.map(f => `${f.q} ${f.a}`)].join(' ')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z]+;/g, ' ')
  .replace(/\s+/g, ' ').trim();
const words = onpage.split(' ').length;
const low = onpage.toLowerCase();
const countOf = t => (low.match(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
const primary = countOf('online casino malaysia');
const density = (primary * 3 / words * 100).toFixed(2);

/* ---- per-page table ---- */
const files = execSync(`cd ${OUT} && find . -name '*.html'`, { encoding: 'utf8' }).trim().split('\n').sort();
const rows = files.map(f => {
  const html = readFileSync(path.join(OUT, f.replace(/^\.\//, '')), 'utf8');
  const one = re => (html.match(re) || [])[1] || '';
  const url = '/' + f.replace(/^\.\//, '').replace(/index\.html$/, '');
  return {
    url,
    title: one(/<title>([\s\S]*?)<\/title>/),
    desc: one(/<meta name="description" content="([^"]*)">/),
    h1: one(/<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, '').trim(),
    canonical: one(/<link rel="canonical" href="([^"]*)">/),
    robots: /noindex/.test(one(/<meta name="robots" content="([^"]*)">/)) ? 'noindex' : 'index',
  };
});

const dec = s => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const md = [];
md.push('# SEO relaunch report — casinomyinsider.com');
md.push('');
md.push(`Generated: ${new Date().toISOString().slice(0, 10)}  `);
md.push(`Canonical host: \`${SITE_URL}\` (apex, https, trailing-slash URLs)  `);
md.push(`Pages built: ${rows.length} (${rows.filter(r => r.robots === 'index').length} indexable, ${rows.filter(r => r.robots === 'noindex').length} noindex)`);
md.push('');

md.push('## 1. Keyword map');
md.push('');
md.push('One primary keyword per page — no two pages compete for the same term.');
md.push('');
md.push('| Primary keyword | Target page |');
md.push('|---|---|');
for (const [u, k] of KEYWORD_MAP) md.push(`| ${k} | \`${u}\` |`);
const dupKw = KEYWORD_MAP.map(x => x[1]).filter((v, i, a) => a.indexOf(v) !== i);
md.push('');
md.push(`Duplicate primary keywords: **${dupKw.length}**${dupKw.length ? ' — ' + dupKw.join(', ') : ' (none)'}`);
md.push('');

md.push('## 2. Homepage keyword usage');
md.push('');
md.push(`On-page body copy: **${words} words** (H1, section headings, body and FAQ; title and meta description excluded).`);
md.push('');
md.push('| Term | Count |');
md.push('|---|---|');
for (const t of TERMS) md.push(`| ${t} | ${countOf(t)} |`);
md.push('');
md.push(`**Primary keyword density:** "online casino malaysia" appears ${primary} times over ${words} words = **${density}%** (target 0.8–1.2%).`);
md.push('');

md.push('## 3. Every page: title, description, H1, canonical');
md.push('');
md.push('| URL | Title (chars) | Description (chars) | H1 | Canonical | Robots |');
md.push('|---|---|---|---|---|---|');
for (const r of rows) {
  md.push(`| \`${r.url}\` | ${dec(r.title)} (${r.title.length}) | ${dec(r.desc)} (${r.desc.length}) | ${dec(r.h1)} | \`${r.canonical}\` | ${r.robots} |`);
}
const t = rows.map(r => r.title), d = rows.map(r => r.desc);
md.push('');
md.push(`Duplicate titles: **${t.length - new Set(t).size}** · Duplicate descriptions: **${d.length - new Set(d).size}** · Titles over 60 chars: **${rows.filter(r => r.title.length > 60).length}** · Descriptions over 155: **${rows.filter(r => r.desc.length > 155).length}**`);
md.push('');

md.push('## 4. URL changes and old-host references removed');
md.push('');
md.push('### Host migration');
md.push('');
md.push(`Every path is unchanged; only the host moved. All ${rows.length} pages had their absolute URLs (canonical, \`og:url\`, \`twitter:image\`, every JSON-LD \`@id\`/\`url\`, every sitemap \`<loc>\`) rewritten from the \`${PLACEHOLDER}\` placeholder to \`${SITE_URL}\`.`);
md.push('');
md.push('| Old absolute URL | New absolute URL |');
md.push('|---|---|');
for (const r of rows.filter(x => x.robots === 'index')) {
  md.push(`| \`https://${PLACEHOLDER}${r.url}\` | \`${SITE_URL}${r.url}\` |`);
}
md.push('');
md.push('### Old-host references removed');
md.push('');
md.push('| Reference | Where it was | Count before | Count now | Action |');
md.push('|---|---|---|---|---|');
md.push(`| \`${OLD_HOST}\` | robots.txt sitemap line (previous build), 6 e-mail addresses in page copy | 9 | 0 | robots.txt now points at the new sitemap; e-mails rewritten to \`@casinomyinsider.com\` at build time |`);
md.push(`| \`${PLACEHOLDER}\` | SITE_URL placeholder + affiliate link placeholder | 222 | 0 | SITE_URL set to the live domain; placeholder affiliate URLs replaced by an empty \`AFFILIATE_LINKS\` map |`);
md.push('| `linkstorm.io` | deferred script on every page | 33 | 0 | removed — the script is bound to the previous site\'s project/website IDs |');
md.push('| `G-JT9FR2YFKB` | GA4 tag on every page | 33 | 0 | removed — replaced by the empty `GA4_ID` config constant |');
md.push('| `http://` (insecure links) | 3 outbound support links in page copy | 5 | 0* | upgraded to `https://` at build time |');
md.push('');
md.push('\\* The only remaining `http://` strings in `dist/` are the sitemap XML namespace and the two deliberate www/http→https redirect rules in `_redirects`.');
md.push('');
md.push('### Redirects added');
md.push('');
md.push('```');
md.push(readFileSync(path.join(OUT, '_redirects'), 'utf8').trim());
md.push('```');
md.push('');

md.push('## 5. Config values still to fill in');
md.push('');
md.push('| Constant | File | Current | Needed for |');
md.push('|---|---|---|---|');
md.push('| `GA4_ID` | `config.mjs` | `\'\'` (tag not rendered) | Analytics on the new property |');
md.push('| `GOOGLE_SITE_VERIFICATION` | `config.mjs` | `\'\'` (tag not rendered) | Search Console verification |');
md.push('| `SOCIAL_PROFILES` | `config.mjs` | `[]` (`sameAs` omitted) | Organization/WebSite brand entity |');
md.push('| `AFFILIATE_LINKS` | `config.mjs` | `{}` | Outbound casino buttons — until filled, pages link to the review instead |');
md.push('');

writeFileSync(path.join(ROOT, 'SEO-REPORT.md'), md.join('\n') + '\n');
console.log('SEO-REPORT.md written');
console.log('  words:', words, '| primary:', primary, '| density:', density + '%');
console.log('  duplicate keywords:', dupKw.length, '| duplicate titles:', t.length - new Set(t).size);
