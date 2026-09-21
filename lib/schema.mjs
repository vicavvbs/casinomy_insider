/* JSON-LD graphs, built per template. Every URL is absolute. */

import { SITE_URL, SITE, SOCIAL_PROFILES } from '../config.mjs';

export const abs = p => (/^https?:\/\//.test(p) ? p : SITE_URL + (p.startsWith('/') ? p : '/' + p));

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: SITE_URL + '/',
  description: SITE.tagline,
  ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: abs(SITE.logo),
    contentUrl: abs(SITE.logo),
    width: 512,
    height: 512,
    caption: SITE.name,
  },
  image: { '@id': `${SITE_URL}/#logo` },
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE_URL + '/',
  name: SITE.name,
  alternateName: SITE.alternateName,
  description: SITE.tagline,
  publisher: { '@id': ORG_ID },
  inLanguage: SITE.lang,
});

export const breadcrumbList = (url, crumbs) => ({
  '@type': 'BreadcrumbList',
  '@id': abs(url) + '#breadcrumb',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.href),
  })),
});

export const webPage = ({ url, title, description, datePublished, dateModified, image }) => ({
  '@type': 'WebPage',
  '@id': abs(url),
  url: abs(url),
  name: title,
  isPartOf: { '@id': SITE_ID },
  about: { '@id': ORG_ID },
  ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(image) } } : {}),
  description,
  breadcrumb: { '@id': abs(url) + '#breadcrumb' },
  inLanguage: SITE.lang,
  ...(datePublished ? { datePublished } : {}),
  ...(dateModified ? { dateModified } : {}),
});

export const faqPage = (url, faq) => ({
  '@type': 'FAQPage',
  '@id': abs(url) + '#faq',
  mainEntity: faq.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const itemList = (url, items) => ({
  '@type': 'ItemList',
  '@id': abs(url) + '#toplist',
  name: 'Top online casinos in Malaysia',
  itemListOrder: 'https://schema.org/ItemListOrderDescending',
  numberOfItems: items.length,
  itemListElement: items.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    url: abs(c.url),
  })),
});

export const person = a => ({
  '@type': 'Person',
  '@id': abs(`/author/${a.slug}/`) + '#person',
  name: a.name,
  url: abs(`/author/${a.slug}/`),
  jobTitle: a.role,
  ...(a.image ? { image: abs(a.image) } : {}),
  worksFor: { '@id': ORG_ID },
});

export const review = ({ url, casino, author, reviewer, image, description }) => ({
  '@type': 'Review',
  '@id': abs(url) + '#review',
  url: abs(url),
  name: casino.title,
  description,
  itemReviewed: {
    '@type': 'Organization',
    name: casino.name,
    ...(image ? { image: abs(image) } : {}),
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: casino.score,
    bestRating: 10,
    worstRating: 1,
  },
  author: author ? { '@id': abs(`/author/${author.slug}/`) + '#person' } : { '@id': ORG_ID },
  ...(reviewer ? { reviewedBy: { '@id': abs(`/author/${reviewer.slug}/`) + '#person' } } : {}),
  publisher: { '@id': ORG_ID },
  datePublished: casino.datePublished,
  dateModified: casino.dateModified,
  inLanguage: SITE.lang,
});

export const profilePage = ({ url, a, datePublished, dateModified }) => ({
  '@type': 'ProfilePage',
  '@id': abs(url),
  url: abs(url),
  name: a.name,
  isPartOf: { '@id': SITE_ID },
  mainEntity: { '@id': abs(url) + '#person' },
  breadcrumb: { '@id': abs(url) + '#breadcrumb' },
  inLanguage: SITE.lang,
  ...(datePublished ? { datePublished } : {}),
  ...(dateModified ? { dateModified } : {}),
});

/** Wraps a set of nodes in one @graph script tag. */
export function graph(nodes) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) })
    .replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}
