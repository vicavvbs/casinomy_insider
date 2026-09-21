/* Shared page furniture: head, header, nav, breadcrumbs, author box, footer, scripts. */

import { SITE_URL, SITE, NAV, FOOTER_MENUS, GA4_ID, GOOGLE_SITE_VERIFICATION } from '../config.mjs';
import { esc, icon, ICON_SPRITE } from './html.mjs';
import { abs } from './schema.mjs';

export function head({ url, title, description, robots, image, jsonld, preloadImage }) {
  const canonical = abs(url);
  const og = abs(image || SITE.ogDefault);
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${esc(robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')}">
<link rel="canonical" href="${esc(canonical)}">
<meta name="theme-color" content="${SITE.themeColor}">
<meta property="og:type" content="${url === '/' ? 'website' : 'article'}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(og)}">
<meta property="og:image:alt" content="${esc(SITE.name)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(og)}">
${GOOGLE_SITE_VERIFICATION ? `<meta name="google-site-verification" content="${esc(GOOGLE_SITE_VERIFICATION)}">\n` : ''}<link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/assets/img/favicon-192.png" sizes="192x192" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/ibm-plex-sans-400.woff2" as="font" type="font/woff2" crossorigin>
${preloadImage ? `<link rel="preload" href="${esc(preloadImage)}" as="image" fetchpriority="high">\n` : ''}<link rel="stylesheet" href="/assets/css/style.css">
${jsonld}`;
}

export function header(currentUrl) {
  const links = NAV.map(n => {
    const cur = n.href === currentUrl ? ' aria-current="page"' : '';
    return `<li><a href="${n.href}"${cur}>${esc(n.label)}</a></li>`;
  }).join('');
  return `<a class="skip-link" href="#main">Skip to content</a>
<header>
  <div class="main-head">
    <a class="head-logo" href="/" aria-label="${esc(SITE.name)} — home">
      <img src="/assets/img/casinomy-insider-logo.png" alt="${esc(SITE.name)} logo" width="120" height="126" fetchpriority="high">
    </a>
    <nav class="head-menu nav-desktop" aria-label="Main">
      <ul>${links}</ul>
    </nav>
    <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
      <span class="visually-hidden">Open menu</span>
    </button>
  </div>
</header>
<div id="mobile-menu" class="mobile-menu" inert>
  <div class="mobile-menu-panel">
    <button type="button" class="mobile-menu-close" aria-label="Close menu">&times;</button>
    <nav aria-label="Mobile">
      <ul>${links}</ul>
    </nav>
  </div>
</div>`;
}

export function ageNotice() {
  return `<div class="age-notice">
  <div class="container">
    <p><span class="age-badge">18+</span> Gambling can be addictive. Play responsibly, never bet more than you can afford to lose and see our <a href="/responsible-gambling/">responsible gambling guide</a> for free help.</p>
  </div>
</div>`;
}

export function breadcrumbs(crumbs) {
  if (!crumbs || crumbs.length < 2) return '';
  const items = crumbs.map((c, i) => {
    const last = i === crumbs.length - 1;
    return last
      ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
      : `<li><a href="${c.href}">${esc(c.name)}</a></li>`;
  }).join('');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="container"><ol>${items}</ol></div></nav>`;
}

export function authorBox({ writtenBy, reviewedBy, date, dateLabel = 'Last updated' }) {
  const bits = [];
  if (writtenBy) bits.push(`<span>${icon('user')} <strong>Written by:</strong> <a href="/author/${writtenBy.slug}/" rel="author">${esc(writtenBy.name)}</a></span>`);
  if (reviewedBy) bits.push(`<span>${icon('check')} <strong>Reviewed by:</strong> <a href="/author/${reviewedBy.slug}/">${esc(reviewedBy.name)}</a></span>`);
  if (date) bits.push(`<span>${icon('calendar')} <strong>${esc(dateLabel)}:</strong> <time datetime="${esc(date.iso)}">${esc(date.text)}</time></span>`);
  return bits.length ? `<div class="article-meta">${bits.join('')}</div>` : '';
}

export function affiliateDisclaimer() {
  return `<p class="affiliate-disclaimer">${icon('info')}<span>We may earn a commission if you sign up through a link on this page. It never changes our scores — every casino is tested with our own money and rated against the same <a href="/editorial-guidelines/">published criteria</a>.</span></p>`;
}

export function footer() {
  const menus = FOOTER_MENUS.map(m => `<div class="footer-menu">
        <p class="footer-title">${esc(m.title)}</p>
        <ul>${m.links.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>
      </div>`).join('\n      ');
  return `<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-logo">
        <img src="/assets/img/casinomy-insider-logo.png" alt="${esc(SITE.name)} logo" width="110" height="115" loading="lazy">
        <p>${esc(SITE.tagline)}</p>
      </div>
      ${menus}
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      <p>&copy; ${SITE.year} ${esc(SITE.name)}. All rights reserved. 18+ &middot; Gamble responsibly.</p>
    </div>
  </div>
</footer>`;
}

export function scripts() {
  /* Linkstorm was removed at the relaunch: its script is bound to the previous
     site's project/website IDs and would fire on the new domain. */
  const ga = GA4_ID
    ? `\n<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>` +
      `\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
      `gtag('js',new Date());gtag('config','${GA4_ID}');</script>`
    : '';
  return `<script defer src="/assets/js/main.js"></script>${ga}
<script async src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"></script>`;
}

export function layout({ url, title, description, robots, image, jsonld, preloadImage, crumbs, body, bodyClass = '' }) {
  return `<!DOCTYPE html>
<html lang="${SITE.lang}">
<head>
${head({ url, title, description, robots, image, jsonld, preloadImage })}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
${ICON_SPRITE}
${header(url)}
${ageNotice()}
${breadcrumbs(crumbs)}
<main id="main">
${body}
</main>
${footer()}
${scripts()}
</body>
</html>`;
}

export { SITE_URL };
