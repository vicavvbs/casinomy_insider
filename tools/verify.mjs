/* Post-build checks: unique title/description, exactly one H1,
   absolute canonical/og:url/og:image, and parseable JSON-LD on every page. */
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from '../config.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');
const files = execSync(`cd ${OUT} && find . -name '*.html'`, { encoding: 'utf8' }).trim().split('\n').sort();

const rows = [];
const titles = new Map(), descs = new Map();
let problems = 0;

for (const f of files) {
  const html = readFileSync(path.join(OUT, f), 'utf8');
  const url = '/' + f.replace(/^\.\//, '').replace(/index\.html$/, '');
  const one = re => (html.match(re) || [])[1] || '';
  const title = one(/<title>([\s\S]*?)<\/title>/);
  const desc = one(/<meta name="description" content="([^"]*)">/);
  const canonical = one(/<link rel="canonical" href="([^"]*)">/);
  const ogUrl = one(/<meta property="og:url" content="([^"]*)">/);
  const ogImg = one(/<meta property="og:image" content="([^"]*)">/);
  const robots = one(/<meta name="robots" content="([^"]*)">/);
  const h1s = [...html.matchAll(/<h1\b[^>]*>/g)].length;

  let ld = 0, ldOk = true;
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    ld++;
    try { JSON.parse(m[1]); } catch { ldOk = false; }
  }

  titles.set(title, [...(titles.get(title) || []), url]);
  descs.set(desc, [...(descs.get(desc) || []), url]);

  const abs = u => u.startsWith(SITE_URL);
  const ok = {
    h1: h1s === 1,
    title: !!title && title.length <= 60,
    desc: !!desc && desc.length <= 155,
    canonical: abs(canonical),
    og: abs(ogUrl) && abs(ogImg),
    ld: ld > 0 && ldOk,
  };
  if (Object.values(ok).some(v => !v)) problems++;
  rows.push({ url, title, tLen: title.length, dLen: desc.length, h1s, ld, robots: /noindex/.test(robots) ? 'noindex' : 'index', ok });
}

const dupT = [...titles].filter(([, v]) => v.length > 1);
const dupD = [...descs].filter(([, v]) => v.length > 1);

const mark = b => (b ? '✓' : '✗');
console.log('| URL | Title (len) | Desc len | H1 | Canonical | OG abs | JSON-LD | Robots |');
console.log('|---|---|---|---|---|---|---|---|');
for (const r of rows) {
  console.log(`| ${r.url} | ${r.title.slice(0, 52)} (${r.tLen}) ${mark(r.ok.title)} | ${r.dLen} ${mark(r.ok.desc)} | ${r.h1s} ${mark(r.ok.h1)} | ${mark(r.ok.canonical)} | ${mark(r.ok.og)} | ${r.ld} ${mark(r.ok.ld)} | ${r.robots} |`);
}
console.log(`\npages: ${rows.length} | pages with a problem: ${problems}`);
console.log(`duplicate titles: ${dupT.length} | duplicate descriptions: ${dupD.length}`);
dupT.forEach(([t, v]) => console.log('  ! title', JSON.stringify(t), v.join(', ')));
dupD.forEach(([d, v]) => console.log('  ! desc', JSON.stringify(d.slice(0, 50)), v.join(', ')));
process.exit(problems || dupT.length || dupD.length ? 1 : 0);
