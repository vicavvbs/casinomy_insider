/* Copies only the images the built pages reference, converts them to WebP and
   generates a small responsive set. Returns a Map keyed by image "key" (the
   WordPress filename with any -WxH size suffix removed). */

import { readdirSync, statSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { imageKey, imageExt } from './content.mjs';

const WIDTHS = [400, 768, 1200];

export async function buildImages({ srcRoot, outDir, urls, log = () => {} }) {
  mkdirSync(outDir, { recursive: true });

  /* Index every uploaded file by key so a -300x200 reference resolves to the original. */
  const index = new Map();
  const walk = dir => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(png|jpe?g|webp|gif|svg)$/i.test(e.name)) {
        const key = imageKey('/' + e.name);
        const prev = index.get(key);
        /* prefer the largest file (the original, not a WP size variant) */
        if (!prev || statSync(p).size > statSync(prev).size) index.set(key, p);
      }
    }
  };
  walk(path.join(srcRoot, 'wp-content/uploads'));

  const wanted = new Set([...urls].map(imageKey));
  const map = new Map();
  let bytesIn = 0, bytesOut = 0;

  for (const key of wanted) {
    const file = index.get(key);
    if (!file) { log(`  ! no source image for ${key}`); continue; }
    const ext = imageExt(file);
    const meta = await sharp(file).metadata();
    const w = meta.width || 800, h = meta.height || 600;
    bytesIn += statSync(file).size;

    if (ext === 'svg' || ext === 'gif') {
      const out = `/assets/img/${key}.${ext}`;
      copyFileSync(file, path.join(outDir, `${key}.${ext}`));
      map.set(key, { out, webp: out, width: w, height: h, srcsetWebp: '' });
      continue;
    }

    /* fallback original, re-encoded (capped at 1200px wide) */
    const capW = Math.min(w, 1200);
    const capH = Math.round(h * capW / w);
    const fbName = `${key}.${ext}`;
    const pipeline = sharp(file).resize({ width: capW, withoutEnlargement: true });
    await (ext === 'png' ? pipeline.png({ quality: 82, compressionLevel: 9 })
                         : pipeline.jpeg({ quality: 80, mozjpeg: true }))
      .toFile(path.join(outDir, fbName));

    /* webp variants */
    const variants = [];
    for (const target of WIDTHS) {
      if (target > capW && variants.length) continue;
      const vw = Math.min(target, capW);
      const name = vw === capW ? `${key}.webp` : `${key}-${vw}.webp`;
      if (!variants.some(v => v.name === name)) {
        await sharp(file).resize({ width: vw, withoutEnlargement: true })
          .webp({ quality: 78 }).toFile(path.join(outDir, name));
        variants.push({ name, w: vw });
      }
    }
    if (!variants.length) {
      await sharp(file).webp({ quality: 78 }).toFile(path.join(outDir, `${key}.webp`));
      variants.push({ name: `${key}.webp`, w: capW });
    }

    for (const v of variants) bytesOut += statSync(path.join(outDir, v.name)).size;
    bytesOut += statSync(path.join(outDir, fbName)).size;

    map.set(key, {
      out: `/assets/img/${fbName}`,
      webp: `/assets/img/${variants[variants.length - 1].name}`,
      width: capW,
      height: capH,
      srcsetWebp: variants.length > 1
        ? variants.map(v => `/assets/img/${v.name} ${v.w}w`).join(', ')
        : '',
    });
  }

  log(`  images: ${map.size} originals -> ${readdirSync(outDir).length} files ` +
      `(${(bytesIn / 1048576).toFixed(1)} MB source, ${(bytesOut / 1048576).toFixed(1)} MB built)`);
  return map;
}
