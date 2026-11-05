
export default {
  slug: 'gembet',
  name: 'GemBet',
  layout: ['payouts', 'tester', 'bonus', 'games', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>GemBet is built around one claim: that it pays faster than anyone else serving this market. USDT withdrawals are advertised at roughly ten minutes, which would be the quickest figure published by any of the fourteen brands we cover.</p>
<p>Around that sits a verifiable Curaçao licence (#365/JAZ), a 250% welcome bonus reaching MYR 3,000, a low MYR 30 entry and an endorsement from Luka Modrić. The rating of 6 out of 10 is not a judgement on any of that — it reflects a slot library noticeably thinner than the leaders, which is a real cost if variety matters to you.</p>`,

  sections: {
    payouts: { h2: 'Ten-minute withdrawals — the claim and the caveat', html: `
<p>GemBet publishes USDT settlement at around ten minutes. For context, BK8 advertises under 30, me88 and 96M around 15, and several brands on our list decline to give a number at all. If the figure holds consistently, it is the best in this market.</p>
<p>Two caveats. First, crypto payouts are fast everywhere — the rail does the work, not the operator — so a ten-minute USDT cashout is less remarkable than it sounds and tells you little about how a bank transfer behaves. Second, an advertised figure is an advertised figure. The table below reproduces what GemBet publishes; we have not independently timed a cashout, so treat it as the operator’s commitment rather than a verified result.</p>
<p>Speed also only matters at the moment of a dispute, which is precisely when it stops applying. A fast routine payout and a contested one are different processes.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by GemBet', html: `
<p>Every figure below is published by GemBet itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">GemBet published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>FPX, DuitNow, Touch ’n Go, USDT</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 50</td></tr>
<tr><th scope="row">Crypto payout speed</th><td>10 minutes (USDT)</td></tr>
<tr><th scope="row">Local payout speed</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Minimum withdrawal</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Transaction fees</th><td>Zero transaction fees</td></tr>
<tr><th scope="row">Verification (KYC)</th><td><span class="not-published">Not published</span></td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    bonus: { h2: 'A 250% bonus with a MYR 30 door', html: `
<p>The welcome offer runs to 250% and a MYR 3,000 ceiling from a MYR 30 minimum — the second-lowest entry point on our list. The combination of a high cap and a low door is genuinely unusual; most operators pairing a large ceiling with a large minimum deposit.</p>
<h3>Worked example</h3>
<p>Deposit <strong>MYR 100</strong>. The 250% match credits MYR 250. Assuming a market-typical 30× on the bonus:</p>
<p class="calc">MYR 250 × 30 = <strong>MYR 7,500 of turnover</strong>.</p>
<p>At 96% RTP the expected cost of that play is around MYR 300, against MYR 250 of bonus — negative, as almost all of these are, but not extravagantly so. GemBet does not publish its multiplier as prominently as 96M does, so confirm the exact figure in the terms before claiming rather than relying on our assumption.</p>` },

    games: { h2: 'Where the library runs out', html: `
<p>This is the brand's weak point and the main reason for its mid-table score. The slot catalogue is thinner than BK8's, me88's or 96M's, and the gap shows quickly if you browse rather than returning to a handful of familiar titles.</p>
<p>The core content is present — the major studios and the live tables this market expects — but depth of choice is where GemBet trades against its payout speed. That trade may well be worth it to you. It is a trade nonetheless, and the marketing does not mention it.</p>` },

    weaknesses: { h2: 'Three honest criticisms', html: '' },

    scoring: { h2: 'Category scores', html: `<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>If being paid quickly is what you optimise for, GemBet is the strongest candidate on our list and the low entry point makes it cheap to test. Accept that you are trading catalogue depth for that speed.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 8.0, why: 'Curaçao licence #365/JAZ verifies on the register — real oversight, if a lighter regime than MGA or UKGC.' },
    { label: 'Payout speed', score: 9.4, why: 'Roughly ten minutes on USDT is the quickest published figure among the fourteen brands we cover.' },
    { label: 'Welcome bonus', score: 8.2, why: 'A MYR 3,000 ceiling from a MYR 30 minimum is an unusually accessible pairing.' },
    { label: 'Bonus transparency', score: 6.0, why: 'The wagering multiplier is not published alongside the headline, so you have to dig for the figure that decides the offers value.' },
    { label: 'Game range', score: 5.8, why: 'The slot library is visibly thinner than the market leaders and is the main thing holding the overall score down.' },
    { label: 'Payment coverage', score: 7.5, why: 'FPX, DuitNow and USDT are supported; Touch ’n Go and GrabPay are not.' },
  ],

  weaknesses: [
    { title: 'The slot library is thin', detail: 'Noticeably smaller than BK8, me88 or 96M. If you browse for new titles rather than replaying favourites, you will exhaust the interesting part of this catalogue quickly.' },
    { title: 'Wagering terms are not published up front', detail: 'The 250% headline and MYR 3,000 ceiling are prominent; the multiplier that determines whether the offer is worth claiming is not. Compare 96M, which publishes all four conditions together.' },
    { title: 'The speed claim applies only to crypto', detail: 'Ten minutes refers to USDT. Most players cash out to a bank or e-wallet, where GemBet publishes no comparable figure — and the rail, not the operator, governs that timing.' },
  ],

  faqHeading: 'GemBet — common questions',
  faq: [
    { q: 'Is GemBet really the fastest payer?', a: 'It publishes the quickest figure we have seen — roughly ten minutes on USDT. That applies to crypto only, and crypto is fast across the board because the rail does the work. The full published figures are in the banking table above.' },
    { q: 'What licence does GemBet hold?', a: 'Curaçao #365/JAZ, which verifies on the register. Genuine oversight, though Curaçao enforcement is lighter than MGA or UKGC and offers limited practical recourse from Malaysia.' },
    { q: 'How much is the GemBet welcome bonus?', a: '250% up to MYR 3,000, from a MYR 30 minimum deposit. The combination of a high ceiling and a low entry point is unusual — most operators pair a big cap with a big minimum.' },
    { q: 'Why is GemBet only rated 6 out of 10?', a: 'The slot library. Payout speed, licensing and bonus accessibility all score well; catalogue depth is materially behind BK8, me88 and 96M, and game range carries real weight in our scoring.' },
    { q: 'Does GemBet accept Touch ’n Go?', a: 'No. The cashier covers FPX, DuitNow and USDT. If you rely on TNG or GrabPay, MB8 and BK8 both support them.' },
  ],

  verdict: {
    suits: 'crypto players who cash out often and value speed above selection',
    avoid: 'players who browse for new titles, and anyone who needs Touch ’n Go support',
    bottomLine: `<p>GemBet optimises for one thing and does it better than anyone else here, with a low MYR 30 entry that makes it cheap to test. The catalogue is the price you pay. Confirm the wagering multiplier in the terms before claiming the 250% offer, and read our <a href="/responsible-gambling/">responsible gambling guide</a> first.</p>`,
  },
};
