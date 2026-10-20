/* Cross-page duplication: do our own pages repeat each other? */
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');
const strip = h => h.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ')
  .replace(/<svg[\s\S]*?<\/svg>/gi,' ').replace(/<nav[\s\S]*?<\/nav>/gi,' ')
  .replace(/<header[\s\S]*?<\/header>/gi,' ').replace(/<footer[\s\S]*?<\/footer>/gi,' ')
  .replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ').replace(/\s+/g,' ').trim();
const sh = (t,n=8)=>{const w=t.toLowerCase().replace(/[^a-z0-9\s]/g,'').split(/\s+/).filter(Boolean);const s=new Set();for(let i=0;i+n<=w.length;i++)s.add(w.slice(i,i+n).join(' '));return s;};
const files=execSync(`cd ${OUT} && find . -name 'index.html'`,{encoding:'utf8'}).trim().split('\n');
const pages=files.map(f=>{const rel=f.replace(/^\.\//,'');const h=readFileSync(path.join(OUT,rel),'utf8');
  const m=(h.match(/<main[^>]*>([\s\S]*)<\/main>/)||[,h])[1];
  return {url:'/'+rel.replace(/index\.html$/,''),set:sh(strip(m))};}).filter(p=>p.set.size>50);
const pairs=[];
for(let i=0;i<pages.length;i++)for(let j=i+1;j<pages.length;j++){
  const a=pages[i].set,b=pages[j].set;let hit=0;
  const [sm,lg]=a.size<b.size?[a,b]:[b,a];
  for(const s of sm) if(lg.has(s)) hit++;
  const pct=Math.round(hit/sm.size*100);
  if(pct>=8) pairs.push([pct,pages[i].url,pages[j].url]);
}
pairs.sort((x,y)=>y[0]-x[0]);
console.log('page pairs sharing >=8% of the smaller page\'s 8-grams:', pairs.length);
pairs.slice(0,20).forEach(p=>console.log(`  ${String(p[0]).padStart(3)}%  ${p[1]}  <->  ${p[2]}`));
