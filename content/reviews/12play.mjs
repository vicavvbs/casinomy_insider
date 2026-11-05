
export default {
  slug: '12play',
  name: '12Play',
  layout: ['claims', 'tester', 'bonus', 'banking', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>12Play is a familiar name in Malaysia and presents well: a welcome bonus advertised up to MYR 588, withdrawals promised inside fifteen minutes, a catalogue past 1,000 titles, USDT support and one of the better-built interfaces we have used in this market. The Curaçao licence is genuine.</p>
<p>We rate it 5 out of 10, and the gap is between what the site claims and what it demonstrates. Nothing about the platform looks broken. But where the higher-rated brands publish numbers you can check — licence references, multipliers, per-rail payout figures — 12Play mostly publishes adjectives.</p>`,

  sections: {
    claims: { h2: 'Confident marketing, thin substantiation', html: `
<p>Line up 12Play's headline claims and the pattern becomes clear. "Up to MYR 588" does not say at what deposit, under what multiplier, or with what cap. "Withdrawals within 15 minutes" does not say on which rail, or for what share of requests — compare ECLBET, which states that roughly 90% of USDT cashouts clear in under half an hour. "Over 1,000 games" is the one figure that is straightforwardly checkable, and it is also the least important.</p>
<p>This is not evidence of wrongdoing, and we want to be precise about that. It is an absence of the documentation that brands like 96M and B9Casino provide as a matter of routine. In a market where several operators have been caught claiming regulators they are not registered with, specificity is the thing worth rewarding — and vagueness is the thing worth marking down.</p>
<p>The Curaçao licence does verify, which places 12Play above the genuinely opaque end of our list.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by 12Play', html: `
<p>Every figure below is published by 12Play itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">12Play published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>FPX, DuitNow QR, Touch ’n Go, GrabPay, Quick Pay, Visa/Mastercard, BTC, ETH, USDT</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 30 (up to MYR 5,000 per transaction)</td></tr>
<tr><th scope="row">Crypto payout speed</th><td>10–15 minutes (USDT)</td></tr>
<tr><th scope="row">Local payout speed</th><td>Same day for verified accounts; up to 48 hours over weekends and holidays</td></tr>
<tr><th scope="row">Minimum withdrawal</th><td>MYR 30</td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td>Up to MYR 50,000 or 5× deposit, by account level and method</td></tr>
<tr><th scope="row">Transaction fees</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Verification (KYC)</th><td>OTP plus a MyKad or passport scan</td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    bonus: { h2: 'What "up to MYR 588" leaves out', html: `
<p>The headline is a ceiling, not an entitlement. To evaluate it you need three numbers 12Play does not put next to it: the deposit required to reach MYR 588, the wagering multiplier, and the game weighting.</p>
<h3>Worked example at market norms</h3>
<p>Assume a <strong>MYR 200</strong> deposit producing a MYR 400 bonus, at a market-typical 25×:</p>
<p class="calc">MYR 400 × 25 = <strong>MYR 10,000 of turnover</strong>.</p>
<p>At 96% RTP that play carries an expected cost near MYR 400 — the whole bonus. Whether 12Play's actual terms are better or worse than this we cannot tell you from the promotional material, which is precisely the criticism. Read the live terms before claiming, and treat our figures as an illustration of the arithmetic rather than a statement of their conditions.</p>` },

    banking: { h2: 'Payment rails', html: `
<p>FPX, DuitNow and USDT. Standard coverage for this market, though without Touch 'n Go or GrabPay. Crypto support is a positive — it is the rail that actually delivers fast cashouts, and its presence makes the fifteen-minute claim at least plausible for USDT.</p>
<p>Deposit routes are standard for this market. The withdrawal side is where the published claim meets reality. The published figures are in the banking table above.</p>` },

    weaknesses: { h2: 'Three things we would want fixed', html: '' },

    scoring: { h2: 'Scores', html: `<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>Not a site we would warn you away from, and not one we would choose over better-documented alternatives. If you deposit, start small and verify early.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 7.0, why: 'The Curaçao offshore licence is genuine, which puts 12Play above the opaque end of our list.' },
    { label: 'Claim substantiation', score: 3.8, why: 'Headline figures are published without the multipliers, caps or per-rail detail that would make them checkable.' },
    { label: 'Welcome bonus', score: 5.5, why: 'A MYR 588 ceiling is respectable, but the terms determining its value are not published alongside it.' },
    { label: 'Banking & payouts', score: 7.2, why: 'FPX, DuitNow and USDT cover the essentials, and crypto support makes the speed claim plausible on that rail at least.' },
    { label: 'Game range', score: 7.0, why: 'Over 1,000 titles is adequate without approaching the leading catalogues.' },
    { label: 'Interface & usability', score: 8.4, why: 'Genuinely well built — one of the more polished front ends we have used in this market.' },
  ],

  weaknesses: [
    { title: 'Headline claims are not substantiated', detail: '"Up to MYR 588" and "withdrawals within 15 minutes" appear without the multiplier, cap, rail or success rate that would let you verify either. ECLBET publishes "90% of USDT withdrawals under 30 minutes" — that is the standard to compare against.' },
    { title: 'No published wagering multiplier', detail: 'The figure that determines whether a bonus is worth claiming is absent from the promotional material. You have to dig through the live terms to price the offer.' },
    { title: 'No Touch ’n Go or GrabPay', detail: 'The two e-wallets that dominate Malaysian casino deposits are both missing from the cashier, leaving FPX, DuitNow and crypto to carry everything.' },
  ],

  faqHeading: '12Play — what to verify yourself',
  faq: [
    { q: 'Is 12Play legitimate?', a: 'It holds a genuine Curaçao offshore licence. Our reservation is about documentation rather than conduct: the headline claims are published without the detail that would let you check them.' },
    { q: 'Does 12Play really pay out in 15 minutes?', a: 'That is the advertised figure, stated without specifying the rail or what share of withdrawals meet it. Crypto cashouts of that speed are plausible; bank transfers rarely are anywhere. The full published figures are in the banking table above.' },
    { q: 'How big is the 12Play welcome bonus?', a: 'Up to MYR 588 — a ceiling, not an entitlement. The deposit needed to reach it and the wagering attached are not published alongside the headline, so read the live terms before claiming.' },
    { q: 'Can I deposit with Touch ’n Go?', a: 'No. The cashier covers FPX, DuitNow and USDT. If TNG or GrabPay is your usual method, MB8 and BK8 both support them directly.' },
    { q: 'Why is 12Play rated 5 out of 10?', a: 'Because a review should reward evidence, not polish. The interface is among the best on our list and the licence is real, but the brand publishes considerably less verifiable detail than the operators rated above it.' },
  ],

  verdict: {
    suits: 'players who already know the brand and value a well-built interface',
    avoid: 'anyone choosing on published evidence, and Touch ’n Go users',
    bottomLine: `<p>12Play is competent and genuinely licensed, with one of the better front ends in this market. It simply does not give you the detail the higher-rated brands do, and when several operators in this sector have overstated their regulatory position, specificity is what deserves rewarding. Start small, read the live terms, and see our <a href="/responsible-gambling/">responsible gambling guide</a>.</p>`,
  },
};
