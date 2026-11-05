
export default {
  slug: 'uea8',
  name: 'UEA8',
  layout: ['bonus', 'complaint', 'tester', 'banking', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>UEA8 has the most intelligently designed welcome offer on our list. Instead of one promotion that suits nobody particularly well, it runs three starter packs aimed at casual players, bonus hunters and high rollers, each claimed with its own promo code at deposit. The cashier is properly localised around FPX, DuitNow and Malaysian banks, the minimum is a reasonable MYR 30, and USDT cashouts are advertised around fifteen minutes.</p>
<p>It scores 5 out of 10, and the bonus design has nothing to do with it. External watchdogs have flagged limited transparency, and an unresolved withdrawal complaint from 2023 still stands against the brand. Good promotional thinking does not offset an outstanding payout dispute.</p>`,

  sections: {
    bonus: { h2: 'Three welcome packs — a genuinely good idea', html: `
<p>Most operators force one offer on everyone, which means it fits almost no one. UEA8 splits the welcome into three tracks: a smaller, lighter-wagering pack for casual players; a larger-percentage pack for people who intend to grind a bonus; and a high-roller option with a bigger ceiling. You select the matching promo code from a dropdown when depositing.</p>
<p>We would like to see more of this. A casual player taking the low-wagering option gets a bonus they might actually clear, instead of the 35× monster that competitors apply universally.</p>
<h3>Worked example</h3>
<p>Take the casual track with a <strong>MYR 100</strong> deposit at a 100% match, crediting MYR 100, at a market-typical 20×:</p>
<p class="calc">MYR 100 × 20 = <strong>MYR 2,000 of turnover</strong>.</p>
<p>At 96% RTP the expected cost is roughly MYR 80 against MYR 100 of bonus. Each pack carries its own multiplier, so check the one attached to the code you are selecting — the whole point of the structure is that they differ.</p>
<p>One practical trap: selecting the wrong promo code at deposit is usually irreversible for that transaction. Read the dropdown before confirming.</p>` },

    complaint: { h2: 'The 2023 withdrawal complaint', html: `
<p>This is the reason for the rating, so we will not bury it.</p>
<p>An unresolved withdrawal complaint from 2023 remains outstanding against UEA8, and independent watchdogs have separately rated the brand poorly on transparency — low enough that it would be dishonest to treat it as noise. We have not been able to establish that the matter was settled.</p>
<p>Context matters in both directions. One complaint against an operator processing many thousands of transactions is not proof of systemic failure, and we make no claim of having had a problem ourselves. But an <em>unresolved</em> complaint is different from a resolved one: it suggests either a dispute process that does not conclude, or a decision the player disputes and cannot escalate. Under an offshore licence, neither has a good remedy.</p>
<p>Our recommendation follows directly from that: deposit small, verify early, and withdraw regularly rather than letting a balance accumulate.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by UEA8', html: `
<p>Every figure below is published by UEA8 itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">UEA8 published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>FPX, DuitNow, e-wallets, bank transfer, USDT</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 50 (MYR 30 for bonus eligibility), up to MYR 30,000 per transaction</td></tr>
<tr><th scope="row">Crypto payout speed</th><td>10–15 minutes (USDT)</td></tr>
<tr><th scope="row">Local payout speed</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Minimum withdrawal</th><td>MYR 50</td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td>MYR 50,000 per day for bank transfer and crypto; MYR 5,000 per day for e-wallets</td></tr>
<tr><th scope="row">Transaction fees</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Verification (KYC)</th><td><span class="not-published">Not published</span></td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    banking: { h2: 'A properly localised cashier', html: `
<p>FPX, DuitNow, Malaysian bank transfers and USDT. This is one of the better-localised payment setups we have reviewed — UEA8 has clearly built for this market rather than bolting Malaysian rails onto an international template.</p>
<p>USDT withdrawals are advertised around fifteen minutes, in line with the stronger brands on our list. The MYR 30 minimum keeps the cost of testing the site low, which given our other reservations is just as well.</p>` },

    weaknesses: { h2: 'What holds UEA8 back', html: '' },

    scoring: { h2: 'Scores', html: `<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>Smart promotional design and a well-built local cashier, undercut by an outstanding payout dispute and poor transparency ratings. Worth using carefully, not worth trusting with a balance.</p>` },
  },

  scoring: [
    { label: 'Bonus design', score: 9.0, why: 'Three packs matched to different player types is the most thoughtful welcome structure on our list.' },
    { label: 'Payment coverage', score: 8.6, why: 'FPX, DuitNow, Malaysian bank transfers and USDT — genuinely built for this market rather than adapted to it.' },
    { label: 'Payout speed', score: 8.0, why: 'USDT cashouts advertised around fifteen minutes, matching the stronger operators we cover.' },
    { label: 'Transparency', score: 2.5, why: 'Independent watchdogs rate the brand poorly on disclosure, and we could not improve on their findings ourselves.' },
    { label: 'Dispute record', score: 3.0, why: 'An unresolved 2023 withdrawal complaint remains outstanding, which is the single largest factor in the overall score.' },
    { label: 'Game range', score: 7.0, why: 'An adequate catalogue, without the depth of the market leaders.' },
  ],

  weaknesses: [
    { title: 'An unresolved withdrawal complaint from 2023', detail: 'Still outstanding at the time of review. An unresolved dispute is materially worse than a resolved one, because it implies either a process that does not conclude or an outcome the player cannot escalate.' },
    { title: 'Poor independent transparency ratings', detail: 'External watchdogs rate UEA8 low on disclosure. We were unable to establish better information about the operating company than they were.' },
    { title: 'Promo code selection is unforgiving', detail: 'Choosing the wrong pack from the dropdown at deposit generally cannot be undone for that transaction. A good structure is undermined by an interface that punishes a misclick.' },
    { title: 'Each pack has different wagering', detail: 'The flexibility that makes the structure clever also means there is no single figure to quote. You must check the multiplier attached to the specific code you select.' },
  ],

  faqHeading: 'UEA8 — read before depositing',
  faq: [
    { q: 'How do UEA8s three welcome packs work?', a: 'Three separate offers aimed at casual players, bonus hunters and high rollers, each with its own promo code selected from a dropdown at deposit. Each carries different wagering, so check the terms for the specific code you pick.' },
    { q: 'Is the 2023 withdrawal complaint still open?', a: 'It was unresolved at the time of this review, and we could not establish that it had been settled. The current status as at our test date is recorded in the log above.' },
    { q: 'Is UEA8 safe to use?', a: 'The cashier is one of the better-localised ones we have reviewed. But an outstanding payout dispute plus poor independent transparency ratings is enough for us to recommend small deposits and frequent withdrawals rather than holding a balance.' },
    { q: 'What is the minimum deposit at UEA8?', a: 'MYR 30, which keeps the cost of testing the site low. Given our reservations, that is the amount we would suggest starting with.' },
    { q: 'Can I change my promo code after depositing?', a: 'Generally not for that transaction. The code is selected at the point of deposit and the choice is usually locked in, so read the dropdown carefully before confirming.' },
  ],

  verdict: {
    suits: 'players who want an offer matched to how they actually play, and who will withdraw regularly rather than accumulate',
    avoid: 'anyone uncomfortable with an unresolved withdrawal complaint, or who wants to hold a balance on site',
    bottomLine: `<p>UEA8 thinks about promotions more carefully than almost anyone on this list, and the local payment coverage is genuinely good. An outstanding withdrawal dispute and weak transparency ratings are exactly the exposure an offshore licence leaves you with. Deposit the MYR 30 minimum, verify early, cash out often — and compare against the better-documented brands in our <a href="/online-casino-review/">rankings</a>.</p>`,
  },
};
