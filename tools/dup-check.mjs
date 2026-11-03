/* Sentence-level duplication check: current review text vs the original
   Simply Static export in ./source/.
   Reports, per page: % of sentences unchanged, and the longest verbatim run
   (measured in words) shared with the source. */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');
const SRC = path.join(ROOT, 'source');

export const REVIEW_SLUGS = ['bk8', 'me88', 'maxim88', '96m', 'god55', 'winbox', 'mb8',
  'eclbet', 'bp9', 'gembet', 'b9casino', '12play', 'uea8', 'uwin33'];

const strip = html => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
  .replace(/<header[\s\S]*?<\/header>/gi, ' ')
  .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#8217;|&rsquo;|&#39;/g, "'")
  .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;|&quot;/g, '"')
  .replace(/&#8211;|&ndash;/g, '-').replace(/&#8212;|&mdash;/g, '-')
  .replace(/&nbsp;/g, ' ').replace(/&[a-z#0-9]+;/g, ' ')
  .replace(/\s+/g, ' ').trim();

/* normalise a sentence so trivial punctuation/case edits still count as duplicate */
const norm = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
const words = t => norm(t).split(' ').filter(Boolean);

const sentences = text => text
  .split(/(?<=[.!?])\s+(?=[A-Z0-9"'(])/)
  .map(s => s.trim())
  .filter(s => words(s).length >= 6);          // ignore fragments, headings, labels

/** longest run of consecutive words appearing verbatim in the source */
function longestRun(cur, src) {
  const a = words(cur), b = words(src);
  if (!a.length || !b.length) return 0;
  const index = new Map();
  const N = 5;                                  // seed length
  for (let i = 0; i + N <= b.length; i++) {
    const k = b.slice(i, i + N).join(' ');
    if (!index.has(k)) index.set(k, []);
    index.get(k).push(i);
  }
  let best = 0;
  for (let i = 0; i + N <= a.length; i++) {
    const starts = index.get(a.slice(i, i + N).join(' '));
    if (!starts) continue;
    for (const j of starts) {
      let n = N;
      while (i + n < a.length && j + n < b.length && a[i + n] === b[j + n]) n++;
      if (n > best) best = n;
    }
    if (best > a.length - i) break;
  }
  return best;
}

function sourceText(slug) {
  const f = path.join(SRC, 'online-casino', slug, 'index.html');
  if (!existsSync(f)) return '';
  const h = readFileSync(f, 'utf8');
  const region = h.slice(h.indexOf('<!-- Header End -->') + 19, h.indexOf('<!-- Footer Start -->'));
  return strip(region);
}

function currentText(slug) {
  const f = path.join(OUT, 'online-casino', slug, 'index.html');
  if (!existsSync(f)) return '';
  const h = readFileSync(f, 'utf8');
  const main = (h.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, ''])[1];
  return strip(main);
}

export function analyse(slug) {
  const cur = currentText(slug), src = sourceText(slug);
  const curS = sentences(cur), srcS = new Set(sentences(src).map(norm));
  const dup = curS.filter(s => srcS.has(norm(s)));
  const pct = curS.length ? Math.round(dup.length / curS.length * 1000) / 10 : 0;
  return {
    slug,
    sentences: curS.length,
    duplicate: dup.length,
    pct,
    longestRun: longestRun(cur, src),
    curWords: words(cur).length,
    srcWords: words(src).length,
    sample: dup.slice(0, 2).map(s => s.slice(0, 110)),
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const results = REVIEW_SLUGS.map(analyse);
  const flag = r => (r.pct > 30 ? 'REWRITE' : r.pct >= 20 ? 'borderline' : 'ok');

  const md = ['# Duplication report — reviews vs. the original WordPress export', '',
    `Generated: ${new Date().toISOString().slice(0, 10)}`, '',
    'Sentence overlap is the share of the live page\'s sentences (6+ words) that appear verbatim in',
    'the same page of `./source/`, ignoring case and punctuation. The longest verbatim run is the',
    'longest unbroken sequence of words shared with the source.', '',
    '| Review | Sentences | Duplicated | % unchanged | Longest verbatim run | Live words | Source words | Status |',
    '|---|---|---|---|---|---|---|---|'];
  for (const r of results) {
    md.push(`| \`/online-casino/${r.slug}/\` | ${r.sentences} | ${r.duplicate} | **${r.pct}%** | ${r.longestRun} words | ${r.curWords} | ${r.srcWords} | ${flag(r)} |`);
  }
  const over = results.filter(r => r.pct > 30);
  md.push('', `Pages over the 30% rewrite threshold: **${over.length} of ${results.length}**`,
    over.length ? over.map(r => `- \`${r.slug}\` — ${r.pct}%`).join('\n') : '- none', '');
  writeFileSync(path.join(ROOT, 'DUPLICATION-REPORT.md'), md.join('\n') + '\n');

  console.log('slug        sent  dup   %unchanged  longest-run  words');
  for (const r of results) {
    console.log(`${r.slug.padEnd(10)} ${String(r.sentences).padStart(5)} ${String(r.duplicate).padStart(4)} ${String(r.pct).padStart(10)}% ${String(r.longestRun).padStart(10)}w ${String(r.curWords).padStart(7)}   ${flag(r)}`);
  }
  console.log(`\nover 30%: ${over.length}/${results.length}  ->  DUPLICATION-REPORT.md`);
}
