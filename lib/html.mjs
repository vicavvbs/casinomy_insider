/* Small HTML helpers + the inline icon set that replaces the Font Awesome 6 CDN. */

export const esc = s => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export const attr = s => esc(s);

export const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const STAR = 'M12.00 2.10L14.41 8.98L21.70 9.15L15.90 13.57L18.00 20.55L12.00 16.40L6.00 20.55L8.10 13.57L2.30 9.15L9.59 8.98Z';

/* One sprite per page; icons are referenced with <use>. */
export const ICON_SPRITE = `<svg class="svg-sprite" aria-hidden="true" focusable="false" width="0" height="0" style="position:absolute">
<defs><linearGradient id="i-half-grad" x1="0" x2="1" y1="0" y2="0"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>
<symbol id="i-star" viewBox="0 0 24 24"><path d="${STAR}" fill="currentColor"/></symbol>
<symbol id="i-star-o" viewBox="0 0 24 24"><path d="${STAR}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
<symbol id="i-star-half" viewBox="0 0 24 24"><path d="${STAR}" fill="url(#i-half-grad)"/><path d="${STAR}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18M8 3v4M16 3v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 11v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1.2" fill="currentColor"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M4.5 12.5l5 5 10-11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-cross" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></symbol>
<symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
</svg>`;

export const icon = (name, cls = '') =>
  `<svg class="icon${cls ? ' ' + cls : ''}" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;

/* 0–10 score rendered as five stars. */
export function stars(score) {
  const out = [];
  const half = score / 2;
  for (let i = 1; i <= 5; i++) {
    if (half >= i) out.push(icon('star'));
    else if (half >= i - 0.5) out.push(icon('star-half'));
    else out.push(icon('star-o'));
  }
  return `<span class="stars">${out.join('')}</span>`;
}

export function rating(score, label) {
  const text = `${score}/10`;
  return `<span class="rating"><span class="score-pill">${esc(text)}</span>${stars(score)}` +
    `<span class="visually-hidden">Rated ${esc(text)}${label ? ' for ' + esc(label) : ''}</span></span>`;
}
