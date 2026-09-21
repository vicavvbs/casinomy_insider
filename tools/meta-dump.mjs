import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
const files = execSync('cd source && find . -name index.html | sort', {encoding:'utf8'}).trim().split('\n');
const rx = (s, re) => { const m = s.match(re); return m ? m[1] : ''; };
const dec = s => s.replace(/&amp;/g,'&').replace(/&#8217;/g,'’').replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&#8211;/g,'–');
const out = [];
for (const f of files) {
  const h = readFileSync('source/' + f.replace(/^\.\//,''), 'utf8');
  const url = '/' + f.replace(/^\.\//,'').replace(/index\.html$/,'');
  const head = h.slice(0, h.indexOf('</head>'));
  out.push({
    url,
    title: dec(rx(head, /<title>([\s\S]*?)<\/title>/)),
    tlen: dec(rx(head, /<title>([\s\S]*?)<\/title>/)).length,
    desc: dec(rx(head, /<meta name="description" content="([\s\S]*?)">/)),
    dlen: dec(rx(head, /<meta name="description" content="([\s\S]*?)">/)).length,
    robots: rx(head, /<meta name="robots" content="([^"]*)">/),
    canonical: rx(head, /<link rel="canonical" href="([^"]*)">/),
    ogimg: rx(head, /<meta property="og:image" content="([^"]*)">/),
    pub: rx(head, /"datePublished":"([^"]*)"/),
    mod: rx(head, /"dateModified":"([^"]*)"/),
  });
}
console.log(JSON.stringify(out, null, 1));
