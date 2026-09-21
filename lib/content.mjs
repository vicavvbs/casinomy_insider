/* Normalises the WordPress content HTML that was extracted from the export:
   rewrites image URLs, strips WP/plugin classes, adds a11y + perf attributes,
   makes tables scrollable and marks outbound links up correctly. */

import { parseFragment, serialize } from 'parse5';
import { esc } from './html.mjs';
import { OLD_EMAIL_DOMAIN, SITE } from '../config.mjs';

/* Re-parse a fragment with the HTML5 tree-construction algorithm so that the
   malformed markup in the WordPress export (unclosed <ul>/<div>, <p> and <h2>
   nested directly inside <ul>) comes out as a well-formed tree. */
export function repair(html) {
  const frag = parseFragment(String(html || ''));
  liftListStrays(frag);
  return serialize(frag);
}

/* The export contains unclosed <ul> elements, so the HTML parser nests whole
   runs of <p>/<h2>/<ul> inside the list. Move anything that is not an <li>
   out of the list and place it after it, which is what the author meant. */
function liftListStrays(node) {
  const kids = node.childNodes || [];
  for (let i = 0; i < kids.length; i++) {
    const child = kids[i];
    if (!child.tagName) continue;
    liftListStrays(child);
    if (child.tagName !== 'ul' && child.tagName !== 'ol') continue;
    const inner = child.childNodes || [];
    const cut = inner.findIndex(n => n.tagName && n.tagName !== 'li' && n.tagName !== 'script' && n.tagName !== 'template');
    if (cut < 0) continue;
    const moved = inner.splice(cut);
    for (const m of moved) m.parentNode = node;
    kids.splice(i + 1, 0, ...moved);
    if (!inner.some(n => n.tagName === 'li')) {   // list left with no items at all
      kids.splice(i, 1);
      i--;
    }
  }
}

const UPLOAD_RX = /\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\//g;

/** '/wp-content/uploads/2025/07/bk8-logo-sample-300x200.png' -> 'bk8-logo-sample' */
export function imageKey(url) {
  const base = url.split('/').pop().replace(/\.[a-z0-9]+$/i, '');
  return base.replace(/-\d+x\d+$/, '');
}
export function imageExt(url) {
  return (url.split('.').pop() || 'jpg').toLowerCase().replace('jpeg', 'jpg');
}

export function createRewriter(images) {
  /* images: Map key -> { out, webp, width, height, ext, srcsetWebp, sizes } */
  return function rewrite(html, opts = {}) {
    if (!html) return '';
    let out = repair(html);

    /* --- domain migration: old-host e-mails and insecure external links --- */
    out = out
      .split('@' + OLD_EMAIL_DOMAIN).join('@' + SITE.emailDomain)
      .replace(/\bhttps?:\/\/(www\.)?(begambleaware\.org|gamblersanonymous\.org|ncpg\.org\.sg|gamblingtherapy\.org|solaceasia\.org)/gi,
        (m, w, host) => 'https://' + (w || '') + host.toLowerCase())
      .replace(/http:\/\//g, 'https://');

    /* --- strip WP cruft --- */
    out = out
      .replace(/<span style="font-weight:\s*400;?"[^>]*>([\s\S]*?)<\/span>/gi, '$1')
      .replace(/\sdecoding="async"/gi, '')
      .replace(/\ssizes="[^"]*"/gi, '')
      .replace(/\sfetchpriority="[^"]*"/gi, '')
      .replace(/\sloading="[^"]*"/gi, '')
      .replace(/\ssrcset="[^"]*"/gi, '')
      .replace(/\sstyle=""/gi, '')
      .replace(/ class="(?:attachment-|size-|wp-|alignnone)[^"]*"/gi, m =>
        / aligncenter/.test(m) ? ' class="aligncenter"' : '');

    /* --- images --- */
    let first = true;
    out = out.replace(/<img\b[^>]*>/gi, tag => {
      const src = (tag.match(/\ssrc="([^"]+)"/i) || [])[1] || '';
      if (!src.startsWith('/wp-content/uploads/')) return tag;
      const key = imageKey(src);
      const img = images.get(key);
      if (!img) return tag;
      let alt = (tag.match(/\salt="([^"]*)"/i) || [])[1] || '';
      alt = alt.trim() || opts.fallbackAlt || '';
      const cls = (tag.match(/\sclass="([^"]*)"/i) || [])[1] || '';
      const eager = first && opts.lcp;
      first = false;
      const loading = eager ? 'eager' : 'lazy';
      const prio = eager ? ' fetchpriority="high"' : '';
      const sizes = img.srcsetWebp ? ' sizes="(max-width: 900px) 100vw, 860px"' : '';
      const source = img.srcsetWebp
        ? `<source type="image/webp" srcset="${img.srcsetWebp}"${sizes}>`
        : `<source type="image/webp" srcset="${img.webp}">`;
      return `<picture>${source}` +
        `<img src="${img.out}" alt="${esc(alt)}" width="${img.width}" height="${img.height}"` +
        `${cls ? ` class="${esc(cls)}"` : ''} loading="${loading}" decoding="async"${prio}></picture>`;
    });

    /* any remaining upload paths (inline styles, hrefs) */
    out = out.replace(UPLOAD_RX, '/assets/img/');

    /* --- tables: give header-less tables a row header, then make them scroll --- */
    out = out.replace(/<table\b[\s\S]*?<\/table>/gi, tbl => {
      if (/<th\b/i.test(tbl)) return tbl;
      return tbl.replace(/<tr\b([^>]*)>\s*<td\b([^>]*)>([\s\S]*?)<\/td>/gi,
        (m, trAttrs, tdAttrs, cell) => `<tr${trAttrs}><th scope="row"${tdAttrs}>${cell}</th>`);
    });
    out = out.replace(/<table\b/gi, '<div class="table-scroll"><table')
             .replace(/<\/table>/gi, '</table></div>');

    /* --- links --- */
    out = out.replace(/<a\b([^>]*)>/gi, (tag, attrs) => {
      const href = (attrs.match(/href="([^"]*)"/i) || [])[1] || '';
      if (!href || href.startsWith('#')) return tag;
      if (/^https?:\/\//i.test(href)) {
        const rel = /casino|bet|bk8|me88|maxim88|96m|god55|winbox|gembet|uwin|uea8|12play|b9/i.test(href)
          ? 'sponsored nofollow noopener' : 'noopener';
        let a = attrs.replace(/\srel="[^"]*"/i, '').replace(/\starget="[^"]*"/i, '');
        return `<a${a} target="_blank" rel="${rel}">`;
      }
      return tag;
    });

    /* --- tidy --- */
    out = out
      .replace(/<p>\s*(?:&nbsp;)?\s*<\/p>/gi, '')
      .replace(/<h([1-6])>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h\1>/gi, '<h$1>$2</h$1>')
      .replace(/\n{3,}/g, '\n\n');

    return repair(out).trim();
  };
}

/** Demote every heading in a fragment by n levels (keeps one H1 per page). */
export function demote(html, n = 1) {
  return html.replace(/<(\/?)h([1-6])([^>]*)>/gi, (m, slash, lvl, rest) =>
    `<${slash}h${Math.min(6, Number(lvl) + n)}${rest}>`);
}

/** Plain text from an HTML fragment. */
export const toText = html => String(html || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();
