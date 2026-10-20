/* Full-site content audit.
   The headline metric for a relaunch is overlap with the previously indexed
   WordPress export: text that survived unchanged is text Google already saw
   on the old domain. Measured with 8-word shingles. */
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');
const SRC = path.join(ROOT, 'source');

const strip = html => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
  .replace(/<header[\s\S]*?<\/header>/gi, ' ')
  .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#39;|&rsquo;|&#8217;/g, "'")
  .replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&nbsp;/g, ' ')
  .replace(/&[a-z]+;/g, ' ')
  .replace(/\s+/g, ' ').trim();

const shingles = (text, n = 8) => {
  const w = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
};

const files = execSync(`cd ${OUT} && find . -name '*.html'`, { encoding: 'utf8' })
  .trim().split('\n').sort();

const rows = [];
for (const f of files) {
  const rel = f.replace(/^\.\//, '');
  const url = '/' + rel.replace(/index\.html$/, '');
  const html = readFileSync(path.join(OUT, rel), 'utf8');
  const main = (html.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, html])[1];
  const text = strip(main);
  const words = text.split(' ').filter(Boolean).length;

  const one = re => (html.match(re) || [])[1] || '';
  const h2 = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m => strip(m[1]));
  const h3 = [...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g)].map(m => strip(m[1]));

  const links = [...main.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => m[1]);
  const internal = links.filter(h => h.startsWith('/'));
  const external = links.filter(h => /^https?:/.test(h));

  /* overlap with the old indexed export */
  let overlap = null, srcWords = 0;
  const srcFile = path.join(SRC, rel);
  if (existsSync(srcFile)) {
    const srcHtml = readFileSync(srcFile, 'utf8');
    const region = srcHtml.slice(
      srcHtml.indexOf('<!-- Header End -->') + 19,
      srcHtml.indexOf('<!-- Footer Start -->'));
    const srcText = strip(region);
    srcWords = srcText.split(' ').filter(Boolean).length;
    const a = shingles(text), b = shingles(srcText);
    if (a.size) {
      let hit = 0;
      for (const s of a) if (b.has(s)) hit++;
      overlap = Math.round(hit / a.size * 100);
    }
  }

  rows.push({
    url, words, srcWords, overlap,
    title: one(/<title>([\s\S]*?)<\/title>/),
    desc: one(/<meta name="description" content="([^"]*)">/),
    h1: strip(one(/<h1[^>]*>([\s\S]*?)<\/h1>/)),
    h2n: h2.length, h3n: h3.length, h2,
    internal: internal.length,
    external: external.length,
    uniqInternal: new Set(internal).size,
    robots: /noindex/.test(one(/<meta name="robots" content="([^"]*)">/)) ? 'noindex' : 'index',
  });
}

/* inbound internal links across the site */
const inbound = new Map(rows.map(r => [r.url, 0]));
for (const f of files) {
  const html = readFileSync(path.join(OUT, f.replace(/^\.\//, '')), 'utf8');
  const seen = new Set([...html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)].map(m => m[1]));
  for (const h of seen) if (inbound.has(h)) inbound.set(h, inbound.get(h) + 1);
}
rows.forEach(r => { r.inbound = inbound.get(r.url) || 0; });

export { rows };

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const ind = rows.filter(r => r.robots === 'index');
  console.log('| URL | Words | Old-text overlap | H2 | H3 | Int.links | Inbound | Robots |');
  console.log('|---|---|---|---|---|---|---|---|');
  for (const r of rows.sort((a, b) => a.words - b.words)) {
    const ov = r.overlap === null ? '—' : r.overlap + '%';
    console.log(`| ${r.url} | ${r.words} | ${ov} | ${r.h2n} | ${r.h3n} | ${r.uniqInternal} | ${r.inbound} | ${r.robots} |`);
  }
  console.log('');
  console.log('indexable pages:', ind.length);
  console.log('median words:', ind.map(r => r.words).sort((a, b) => a - b)[Math.floor(ind.length / 2)]);
  console.log('thin (<400 words):', ind.filter(r => r.words < 400).map(r => r.url).join(', ') || 'none');
  const high = ind.filter(r => r.overlap !== null && r.overlap >= 50);
  console.log(`high old-text overlap (>=50%): ${high.length} pages`);
  high.sort((a,b)=>b.overlap-a.overlap).forEach(r => console.log(`   ${r.overlap}%  ${r.url}  (${r.words}w)`));
}
