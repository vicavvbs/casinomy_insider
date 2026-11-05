
export default {
  slug: 'winbox',
  name: 'Winbox',
  layout: ['trust', 'tester', 'banking', 'bonus', 'games', 'weaknesses', 'verdict'],

  lead: `
<p>Winbox markets harder than almost anything else in this market. MotoGP rider Marc Márquez fronts the brand, iTech Labs RNG audits are displayed prominently, and the payout messaging promises cashouts in minutes. Most of that holds up under inspection.</p>
<p>One thing does not. Winbox displays a PAGCOR remote gaming seal alongside a Curaçao #365/JAZ claim, and the second of those did not check out cleanly when we looked it up. A licence you cannot verify is the one piece of documentation that actually matters when a payout goes wrong, and that single unresolved point is what holds the brand at 7 out of 10 rather than higher.</p>`,

  sections: {
    trust: { h2: 'The licensing problem, stated plainly', html: `
<p>Two claims appear on the site. The PAGCOR remote gaming seal is the stronger of them. The accompanying Curaçao #365/JAZ reference is the one we could not confirm against the register — and #365/JAZ is a master licence number shared by a number of brands, so seeing it quoted is not the same as seeing it verified for this operator.</p>
<p>What is genuinely verifiable is the technical side: iTech Labs conducts independent RNG testing, and that certification is real. Fair games and an accountable operator are different questions, though. RNG audits tell you the slot is not rigged; a licence tells you who answers when your withdrawal stalls.</p>
<p>We are not alleging anything improper. We are saying that a regulatory claim we cannot confirm has to be treated as unconfirmed, and priced accordingly. Our <a href="/why-trust-us/">verification process</a> explains how we check these.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by Winbox', html: `
<p>Every figure below is published by Winbox itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">Winbox published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>FPX, DuitNow, Touch ’n Go, USDT</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 30</td></tr>
<tr><th scope="row">Crypto payout speed</th><td>Within 15 minutes (USDT)</td></tr>
<tr><th scope="row">Local payout speed</th><td>E-wallet transfers within 15 minutes</td></tr>
<tr><th scope="row">Minimum withdrawal</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Transaction fees</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Verification (KYC)</th><td><span class="not-published">Not published</span></td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    banking: { h2: 'Payouts — the part that works', html: `
<p>FPX, DuitNow, Touch 'n Go and USDT are all supported. Winbox advertises USDT withdrawals landing in "a few minutes" and local bank or e-wallet cashouts in minutes to hours, which would place it among the quicker payers we cover if it holds consistently.</p>
<p>Speed is the brand's genuine strength and we do not want to undersell it. The caution is simply that fast routine payouts and reliable disputed payouts are different things, and it is the latter that an unverifiable licence puts in question.</p>` },

    bonus: { h2: 'The 200% welcome offer', html: `
<p>A 200% first-deposit bonus with a MYR 100 minimum, a 30× rollover and a 30-day window. Winbox publishes all four figures, which we credit.</p>
<h3>Worked example</h3>
<p>Deposit <strong>MYR 100</strong> and the match credits MYR 200. At 30× on the bonus:</p>
<p class="calc">MYR 200 × 30 = <strong>MYR 6,000 of turnover</strong> inside 30 days.</p>
<p>At 96% RTP the expected cost of that play is around MYR 240 against a MYR 200 bonus — marginally negative, which is normal, and considerably more achievable than the 35× offers elsewhere on our list. Of the large welcome bonuses in this market, this is one of the more realistic ones.</p>` },

    games: { h2: 'Library and mobile', html: `
<p>Over 2,000 slots with live tables and a sportsbook, delivered through a native Android APK, an iOS profile install and an HTML5 browser client branded Winbox H5. The browser route is useful: direct-install iOS profiles are a friction point several competitors still ignore.</p>
<p>The catalogue is mid-market — comfortably ahead of God55, behind BK8 and 96M. For most players the range is sufficient.</p>` },

    weaknesses: { h2: 'Four things holding it back', html: '' },

    verdict: { h2: 'Verdict', html: `
<p>Winbox is a fast, well-built platform with a documentation gap at its centre. Size your balance to what you would be comfortable arguing about, and use it for routine play rather than as the place you accumulate winnings.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 6.4, why: 'PAGCOR seal is credible but the accompanying Curaçao #365/JAZ claim did not verify, and unconfirmed is how we score it.' },
    { label: 'Game fairness', score: 8.8, why: 'Independent iTech Labs RNG testing is genuine and checkable, separate from the licensing question.' },
    { label: 'Welcome bonus', score: 8.0, why: 'A 200% match at 30× over 30 days is one of the more realistically clearable offers in this market.' },
    { label: 'Game range', score: 8.0, why: 'Over 2,000 slots plus live tables and a sportsbook puts it mid-table — sufficient, not exceptional.' },
    { label: 'Banking & payouts', score: 8.9, why: 'USDT advertised in minutes and local rails in minutes to hours, among the quicker figures we have seen published.' },
    { label: 'Mobile experience', score: 8.7, why: 'Native APK, iOS profile and an H5 browser client cover every route onto a phone.' },
    { label: 'Transparency', score: 5.8, why: 'Publishing a licence reference that cannot be confirmed is worse than publishing none, because it implies oversight that may not exist.' },
  ],

  weaknesses: [
    { title: 'The Curaçao licence claim does not verify', detail: 'The #365/JAZ reference shown alongside the PAGCOR seal could not be confirmed for this operator on the register. This is the single biggest reason Winbox is not rated higher.' },
    { title: 'Marketing spend outweighs disclosure', detail: 'A MotoGP sponsorship is prominent; the operating company behind the brand is not. Players consistently get told who endorses the site and not who runs it.' },
    { title: 'Payout claims are vague by design', detail: '"A few minutes" and "minutes to hours" are not commitments. Compare that with operators publishing a specific figure per rail.' },
    { title: 'No recourse if a dispute escalates', detail: 'With one licence seal credible and the other unconfirmed, it is unclear which regulator you would actually complain to. For routine play that never matters; for a disputed withdrawal it is the only thing that does.' },
  ],

  faqHeading: 'Winbox — what to check first',
  faq: [
    { q: 'Is Winbox properly licensed?', a: 'Partly. The PAGCOR remote gaming seal is credible. The Curaçao #365/JAZ claim displayed alongside it did not verify for this operator when we checked the register, and we score unconfirmed claims as unconfirmed.' },
    { q: 'Are Winbox games fair?', a: 'The RNG testing by iTech Labs is genuine and independently verifiable, so the games themselves are audited. That is a separate question from whether the operator is accountable, which is where the licensing concern sits.' },
    { q: 'How fast are Winbox withdrawals?', a: 'The operator advertises USDT in "a few minutes" and local bank or e-wallet cashouts in minutes to hours. Those are vaguer than we would like. The full published figures are in the banking table above.' },
    { q: 'Is the 200% bonus worth taking?', a: 'It is one of the more reasonable offers on our list. A MYR 100 deposit generates MYR 6,000 of required turnover at 30× — demanding, but far more achievable than the 35× offers elsewhere, and all four conditions are published together.' },
    { q: 'Should I keep a large balance at Winbox?', a: 'We would not. Routine payouts appear to work well, but with one licence claim unconfirmed it is unclear which regulator you would escalate to if a withdrawal were ever disputed. Keep balances to an amount you would accept losing.' },
  ],

  verdict: {
    suits: 'players who want quick routine cashouts and will keep balances modest',
    avoid: 'anyone who wants every regulatory claim to check out before depositing, or who plans to accumulate winnings on-site',
    bottomLine: `<p>Winbox performs well day to day — fast payouts, a reasonable bonus, solid mobile delivery. Weigh that against a licence reference we could not confirm, and treat it as a place to play rather than a place to hold money. Our <a href="/why-trust-us/">verification process</a> explains how we check these claims, and our <a href="/responsible-gambling/">responsible gambling guide</a> covers the wider risk.</p>`,
  },
};
