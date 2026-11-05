/* Replaces the placeholder "our own test" block in every review with a table of
   the operator's own published banking figures. Run: node tools/fill-banking.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { BANKING, BANKING_ROWS } from '../content/banking-facts.mjs';

const NAMES = {
  bk8: 'BK8', me88: 'me88', maxim88: 'Maxim88', '96m': '96M', god55: 'GOD55',
  winbox: 'Winbox', mb8: 'MB8', '12play': '12Play', b9casino: 'B9Casino',
  bp9: 'BP9', eclbet: 'ECLBET', gembet: 'GemBet', uea8: 'UEA8', uwin33: 'Uwin33',
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Matches the whole `tester: { ... }` property. The html is a template literal,
   so the first backtick after it is its terminator; no brace counting needed. */
const TESTER_RE = /tester:\s*\{[\s\S]*?`,?\s*\},/;

function renderBlock(slug) {
  const b = BANKING[slug];
  if (!b) throw new Error(`No banking facts for ${slug}`);
  const name = NAMES[slug] || slug;
  const rows = BANKING_ROWS.map(([key, label]) => {
    const v = b[key];
    const cell = v === null || v === undefined
      ? '<span class="not-published">Not published</span>'
      : esc(v);
    return `<tr><th scope="row">${esc(label)}</th><td>${cell}</td></tr>`;
  }).join('\n');

  const html = `
<p>Every figure below is published by ${esc(name)} itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">${esc(name)} published banking and payout figures</caption>
<tbody>
${rows}
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>`;

  return `tester: { h2: 'Banking and payout speeds, as published by ${name}', html: \`${html}\` },`;
}

const dir = path.join(process.cwd(), 'content/reviews');
let changed = 0;
const report = [];

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.mjs'))) {
  const slug = path.basename(file, '.mjs');
  if (!BANKING[slug]) continue;
  const p = path.join(dir, file);
  let src = fs.readFileSync(p, 'utf8');

  const matches = src.match(new RegExp(TESTER_RE.source, 'g')) || [];
  if (matches.length !== 1) { report.push([slug, `ABORT: ${matches.length} tester blocks`]); continue; }
  if (/\b(scoring|verdict|weaknesses|banking):/.test(matches[0])) {
    report.push([slug, 'ABORT: match over-ran into the next section']); continue;
  }

  src = src.replace(TESTER_RE, () => renderBlock(slug));

  /* Drop the now-unused TODO helper if nothing else in the file uses it. */
  if (!/\bT\(/.test(src)) {
    src = src
      .replace(/^import \{ TODO \} from '[^']*';\n/m, '')
      .replace(/^const T = \(k, label\) => TODO\('[^']*', k, label\);\n/m, '');
  }

  fs.writeFileSync(p, src);
  changed++;
  const missing = BANKING_ROWS.filter(([k]) => BANKING[slug][k] == null).map(([, l]) => l);
  report.push([slug, missing.length ? `filled, "Not published": ${missing.join(', ')}` : 'filled, all rows populated']);
}

console.log(`Rewrote ${changed} review files\n`);
for (const [s, m] of report) console.log(`  ${s.padEnd(10)} ${m}`);
