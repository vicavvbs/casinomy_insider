/* Build configuration for casinomyinsider.com.
   Values marked FILL IN are the ones to complete before/after launch. */

export const SITE_URL = 'https://casinomyinsider.com';   // apex, https, no www

/* Analytics — FILL IN with the new property's ID for the relaunched domain.
   The old property (G-JT9FR2YFKB) belonged to the previous host. */
export const GA4_ID = '';

/* Search Console verification token — FILL IN. Empty means the tag is not rendered. */
export const GOOGLE_SITE_VERIFICATION = '';

/* Brand profiles for Organization/WebSite sameAs — FILL IN (absolute https URLs). */
export const SOCIAL_PROFILES = [];

export const SITE = {
  name: 'CasinoMY Insider',
  alternateName: ['CasinoMY', 'Casino MY Insider'],
  tagline: 'Independent online casino reviews for Malaysian players',
  legalName: 'CasinoMY Insider',
  lang: 'en-MY',
  locale: 'en_MY',
  themeColor: '#101e22',
  logo: '/assets/img/casinomy-insider-logo.png',
  ogDefault: '/assets/img/casinomy-insider-logo.png',
  emailDomain: 'casinomyinsider.com',
  year: 2026,
};

/* The old site's email addresses are rewritten to the new domain at build time. */
export const OLD_EMAIL_DOMAIN = 'retrocomputerslimited.com';

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about-us/', label: 'About Us' },
  { href: '/online-casino-review/', label: 'Online Casino Review' },
];

export const FOOTER_MENUS = [
  {
    title: 'About',
    links: [
      { href: '/about-us/', label: 'About Us' },
      { href: '/contact-us/', label: 'Contact Us' },
      { href: '/responsible-gambling/', label: 'Responsible Gambling' },
      { href: '/privacy-policy/', label: 'Privacy Policy' },
      { href: '/why-trust-us/', label: 'Why Trust Us' },
      { href: '/editorial-guidelines/', label: 'Editorial Guidelines' },
      { href: '/editorial-team/', label: 'Editorial Team' },
      { href: '/author/', label: 'Our Writers' },
    ],
  },
  {
    title: 'Top Casinos',
    links: [
      { href: '/online-casino/bk8/', label: 'BK8' },
      { href: '/online-casino/me88/', label: 'me88' },
      { href: '/online-casino/maxim88/', label: 'Maxim88' },
      { href: '/online-casino/96m/', label: '96M' },
      { href: '/online-casino-review/', label: 'All casino reviews' },
    ],
  },
];

/* Outbound casino links — FILL IN. The WordPress export had empty hrefs on every
   "Play Now" button, so no real tracking URLs exist yet. Until a slug is given a
   URL here, the build renders an internal "Read review" link instead of an
   outbound button, so no placeholder or broken affiliate link ever ships.
   Example: bk8: 'https://track.example-network.com/bk8?aff=123' */
export const AFFILIATE_LINKS = {};
export const affiliateUrl = slug => AFFILIATE_LINKS[slug] || '';

/* Display names for the 14 reviewed casinos. */
export const CASINO_NAMES = {
  bk8: 'BK8', me88: 'me88', maxim88: 'Maxim88', '96m': '96M', god55: 'God55',
  mb8: 'MB8', winbox: 'Winbox', eclbet: 'ECLBET', bp9: 'BP9', gembet: 'GemBet',
  b9casino: 'B9Casino', '12play': '12Play', uea8: 'UEA8', uwin33: 'Uwin33',
};

/* Titles (<=60 chars) and descriptions (<=155 chars). The source left 16 pages with no
   description at all and 8 reviews with a placeholder "Name - CasinoMY Insider" title. */
export const META = {
  '/': {
    title: 'Best Online Casino Malaysia 2026 | Reviews & Ratings',
    description: 'Trusted by Malaysians — our 2026 online casino reviews and ratings highlight the top platforms for bonuses, payouts and secure gambling.',
    h1: 'Best Online Casinos in Malaysia for 2026',
  },
  '/about-us/': {
    title: 'About CasinoMY Insider | Independent Casino Reviews',
    description: 'Meet CasinoMY Insider: an independent Malaysian casino review portal that tests every site with real money. See who we are and how we work.',
  },
  '/contact-us/': {
    title: 'Contact CasinoMY Insider | Feedback & Enquiries',
    description: 'Contact the CasinoMY Insider team with questions, corrections, partnership enquiries or editorial feedback. We reply within 24–48 hours on weekdays.',
  },
  '/editorial-guidelines/': {
    title: 'Editorial Guidelines 2026 | CasinoMY Insider',
    description: 'How CasinoMY Insider rates casinos: licence checks, real-money payout tests, bonus terms, game audits and the weight behind every score.',
  },
  '/editorial-team/': {
    title: 'Editorial Team | CasinoMY Insider',
    description: 'The editors, writers and analysts behind CasinoMY Insider, what each of them covers, and how our write-then-verify review process works.',
    h1: 'Editorial Team',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | CasinoMY Insider',
    description: 'How CasinoMY Insider collects, uses and protects your data: analytics, cookies, third-party links, your rights and how to reach us.',
  },
  '/responsible-gambling/': {
    title: 'Responsible Gambling Malaysia | CasinoMY Insider',
    description: 'Responsible gambling help for Malaysian players: deposit limits, self-exclusion, warning signs and free support from Solace Asia and Gambling Therapy.',
  },
  '/why-trust-us/': {
    title: 'Why Trust CasinoMY Insider | Our Review Process',
    description: 'Real-money deposits, an independent second review, receipts and regulator links — why Malaysian players can trust our casino ratings.',
  },
  '/online-casino-review/': {
    title: 'Online Casino Malaysia Reviews 2026 | CasinoMY Insider',
    description: 'Expert online casino reviews from our ex-iGaming team. Compare 14 Malaysian casino sites on bonuses, payout speed, games and trust rating.',
    h1: 'Online Casino Malaysia Reviews 2026',
  },
  '/author/': {
    title: 'Our Writers & Reviewers | CasinoMY Insider',
    description: 'Meet the eight iGaming writers, analysts and reviewers behind CasinoMY Insider and see which Malaysian casino reviews each of them worked on.',
    h1: 'Meet Our Editorial Team',
  },
  '/online-casino/bk8/': {
    title: 'BK8 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'Our hands-on BK8 review for 2026: MYR 2,888 live casino bonus, USDT payouts under 30 minutes, 3,000+ slots and what its Curaçao licence covers.',
  },
  '/online-casino/me88/': {
    title: 'me88 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'me88 review 2026 for Malaysian players: the 288% welcome bonus, Pragmatic Play and Evolution game range, e-wallet payout times and support quality.',
  },
  '/online-casino/maxim88/': {
    title: 'Maxim88 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'Maxim88 review 2026: sub-15-minute e-wallet payouts, a 225% welcome bonus, exclusive Spadegaming slots and how its VIP cashback really pays.',
  },
  '/online-casino/96m/': {
    title: '96M Review Malaysia 2026: Bonus, Games & Payouts',
    description: '96M review 2026: we test the 288% Magnificent welcome bonus, weekly reloads, Curaçao licensing and crypto payouts that land in 2–15 minutes.',
  },
  '/online-casino/god55/': {
    title: 'God55 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'An independent God55 review for 2026: promotions, game quality, banking options, support and the trust signals Malaysian players should check first.',
  },
  '/online-casino/mb8/': {
    title: 'MB8 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'MB8 review 2026: the MyBet88 rebrand with Ronaldinho fronting it, a 200% welcome bonus across three deposits, PAGCOR and MGA licensing, and payout speed.',
  },
  '/online-casino/winbox/': {
    title: 'Winbox Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'A real-player Winbox audit for 2026: dual PAGCOR and Curaçao licensing, the MotoGP sponsorship, game library depth and how fast MYR withdrawals clear.',
  },
  '/online-casino/eclbet/': {
    title: 'ECLBET Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'ECLBET review 2026: a 120% welcome boost capped at MYR 100, 22x wagering, PAGCOR licensing and USDT withdrawals that clear in under 30 minutes.',
  },
  '/online-casino/bp9/': {
    title: 'BP9 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'BP9 review 2026: what changed in the BP77 rebrand, the dual 100% welcome bonuses, a 1,000+ game library and whether payouts hold up in testing.',
  },
  '/online-casino/gembet/': {
    title: 'GemBet Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'GemBet review 2026: the Luka Modrić-backed casino tested on bonus terms, game range, banking, support and its standing under Malaysian law.',
  },
  '/online-casino/b9casino/': {
    title: 'B9Casino Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'B9Casino review 2026: a 100% welcome bonus up to RM 1,000, PAGCOR and Curaçao licensing, 1,000+ games and how quickly MYR payouts actually arrive.',
  },
  '/online-casino/12play/': {
    title: '12Play Review Malaysia 2026: Bonus, Games & Payouts',
    description: '12Play review 2026: we test the MYR 588 welcome bonus, the promised 15-minute withdrawals, USDT support and a game library of more than 1,000 titles.',
  },
  '/online-casino/uea8/': {
    title: 'UEA8 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'UEA8 review 2026: three welcome packs for casual, bonus-hunting and high-rolling players, plus banking options, game range and support tested in full.',
  },
  '/online-casino/uwin33/': {
    title: 'Uwin33 Review Malaysia 2026: Bonus, Games & Payouts',
    description: 'Uwin33 review 2026: a 100% bonus up to MYR 688, seamless local banking, fast payouts and how the platform scores against Malaysia’s top casinos.',
  },
  '/404.html': {
    title: 'Page Not Found | CasinoMY Insider',
    description: 'That page does not exist. Browse our Malaysian online casino reviews, ratings and responsible gambling guides instead.',
  },
};

/* Author pages are noindex, follow and stay out of the sitemap (as in the source). */
export const AUTHOR_META = {
  andy_kwan: 'Andy Kwan reviews Malaysian casino sites and sportsbooks for CasinoMY Insider, focusing on bonus terms, odds quality and live betting markets.',
  dagmar_janssen: 'Dagmar Janssen is an iGaming expert who verifies CasinoMY Insider reviews, checking licensing claims, bonus maths and payout evidence.',
  daniel_pascoe: 'Daniel Pascoe is an iGaming expert at CasinoMY Insider, testing casino platforms end to end from sign-up and KYC through to withdrawal.',
  david_ojei: 'David E. Ojei writes in-depth Malaysian online casino reviews for CasinoMY Insider, covering games, banking, mobile apps and support.',
  funso_lawal: 'Funso Lawal writes casino and bonus guides for CasinoMY Insider, translating wagering requirements and promo terms into plain language.',
  mark_podd: 'Mark Podd is the iGaming analyst at CasinoMY Insider, tracking licensing, regulation and payout data across Malaysian casino sites.',
  ryan_bayani: 'Ryan Bayani is an iGaming expert who fact-checks CasinoMY Insider casino reviews against regulator records and real withdrawal receipts.',
  sarah_lee: 'Sarah Lee is a casino expert at CasinoMY Insider covering slots, live dealer tables and the local payment methods Malaysian players use.',
};

/* Pages that belong in sitemap.xml (24 URLs — no category or author-profile pages). */
export const NOINDEX_PREFIXES = ['/author/'];
