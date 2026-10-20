/* Author hub copy and per-writer bios.
   The hub was 148 words with no H2 at all; the eight profiles shared 22–39%
   of their text with each other. These give each person distinct copy. */

export const AUTHOR_HUB = {
  intro: `
<p>CasinoMY Insider is written by eight people with backgrounds across the iGaming industry — former operators, analysts and reviewers who have seen how these platforms work from the inside. Every review carries two of their names: one who wrote it, and one who independently re-ran the checks before it published.</p>`,
  body: `
<h2>How work is assigned</h2>
<p>Writers are matched to brands by specialism rather than availability. Payment and payout testing goes to the people who have run cashier operations; licensing and regulatory claims go to our analysts. Nobody reviews a brand they have a commercial relationship with, and nobody verifies their own work.</p>

<h2>What "fact-checked by" means here</h2>
<p>The second name on a review is not a proofreader. That person independently repeats the licence lookup against the regulator's register, re-does the bonus turnover arithmetic, and completes at least one deposit and withdrawal cycle of their own. Where the two disagree, the review does not publish until the discrepancy is resolved. The full standard is set out in our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>`,
};

export const AUTHOR_BIOS = {
  andy_kwan: {
    focus: 'Sportsbook markets and bonus terms',
    bio: `<p>Andy covers the betting side of Malaysian casino platforms — the sportsbook lobbies most review sites skip past. His testing concentrates on odds quality across the three-book setups common here, how live markets behave when a match turns, and the detail that catches people out most often: whether sportsbook turnover counts toward casino bonus wagering.</p>
<p>He is also the team's reference point on bonus arithmetic, and is responsible for the turnover calculations that appear in our reviews rather than the headline percentages operators prefer to lead with.</p>`,
  },
  dagmar_janssen: {
    focus: 'Licence verification and bonus-term audit',
    bio: `<p>Dagmar works almost entirely on verification. When a review claims an operator holds a particular licence, she is usually the person who looked the number up on the regulator's own register and recorded whether it matched. Several of the lower scores on this site exist because that check did not come back clean.</p>
<p>She also audits written bonus terms against what support tells players in live chat — a gap that turns up more often than operators would like.</p>`,
  },
  daniel_pascoe: {
    focus: 'End-to-end platform testing',
    bio: `<p>Daniel runs full-cycle tests: registration, identity verification, deposit, play, withdrawal, and the awkward support conversation in the middle. He is interested in the parts of the journey that only show up under pressure — what happens when documents are queried, or when a withdrawal is submitted late on a Friday.</p>
<p>Much of the weekend and public-holiday payout data in our reviews comes from his testing, because that is where operators quietly differ from their own advertised timings.</p>`,
  },
  david_ojei: {
    focus: 'Full-length casino reviews',
    bio: `<p>David writes the long-form reviews that make up most of this site, covering games, banking, mobile apps and support in a single assessment. He has written more of our published reviews than anyone else on the team, including BK8, me88 and MB8.</p>
<p>His approach is to treat the operator's own marketing as a claim to be tested rather than a description to be repeated — which is why his reviews tend to lead with what he measured rather than what the site advertises.</p>`,
  },
  funso_lawal: {
    focus: 'Bonuses, free credit and promotional terms',
    bio: `<p>Funso specialises in translating promotional terms into plain numbers. Rollover multipliers, game weightings, maximum-cashout caps and the difference between wagering applied to bonus alone versus deposit plus bonus — these decide whether an offer is worth claiming, and they are routinely presented in a way that obscures the answer.</p>
<p>He covers free credit and no-deposit promotions in particular, where the gap between the advertised figure and what a player can actually withdraw tends to be widest.</p>`,
  },
  mark_podd: {
    focus: 'Regulation, licensing and payout data',
    bio: `<p>Mark tracks the regulatory picture across the brands we cover: which regulator each operator actually answers to, what that regime requires, and what recourse a Malaysian player realistically has when a dispute arises. He is the author of our position that no site we review is "legal and safe" in Malaysia, because none of them holds a Malaysian licence.</p>
<p>He also maintains the payout timing dataset that sits behind our withdrawal-speed scores, and fact-checks the homepage rankings.</p>`,
  },
  ryan_bayani: {
    focus: 'Verification and evidence standards',
    bio: `<p>Ryan is one of the two team members who sign off reviews before publication. His job is to break the argument: re-run the licence check, repeat the withdrawal, and confirm that every figure in the text traces back to something recorded rather than something assumed.</p>
<p>He fact-checked our BK8, B9Casino and MB8 reviews, including the licence claims that cost two of those brands points.</p>`,
  },
  sarah_lee: {
    focus: 'Slots, live dealer and local payment methods',
    bio: `<p>Sarah covers the games Malaysian players actually open: slot lobbies from Pragmatic Play, PG Soft and Spadegaming, and the live baccarat and roulette tables that carry most of the live traffic here. She tests streams on mobile data rather than wi-fi, because a table that stutters mid-hand is a real problem and desktop testing hides it.</p>
<p>She also handles local payment coverage — Touch 'n Go, DuitNow and FPX — including the mismatches where a site accepts an e-wallet deposit but will only pay out to a bank account.</p>`,
  },
};
