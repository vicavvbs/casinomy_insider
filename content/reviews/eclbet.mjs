
export default {
  slug: 'eclbet',
  name: 'ECLBET',
  layout: ['bonus', 'tester', 'banking', 'trust', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>ECLBET advertises a 120% welcome boost and a partnership with Malaysian singer-producer Namewee, operating under a PAGCOR offshore licence that verifies. Crypto withdrawals are quick and the platform is competently built.</p>
<p>The headline is also the problem. A 120% match sounds generous until you find the ceiling: the maximum bonus is MYR 100, on a MYR 50 minimum deposit, with 22× wagering attached. That is a meaningful amount of required play for a prize most people would consider trivial — and it is why ECLBET sits at 6 out of 10 despite doing several things well.</p>`,

  sections: {
    bonus: { h2: 'Why the 120% headline overstates the offer', html: `
<p>Percentages are the wrong unit for comparing bonuses. What matters is the cash ceiling and the turnover attached, and on both counts ECLBET's offer is small.</p>
<h3>The actual numbers</h3>
<p>Deposit <strong>MYR 50</strong>, the minimum. The 120% match credits MYR 60. Deposit more and the match keeps paying until it hits the MYR 100 cap — reached at a deposit of roughly MYR 84. Beyond that, extra deposits earn nothing extra.</p>
<p>Apply the 22× requirement to a maxed MYR 100 bonus:</p>
<p class="calc">MYR 100 × 22 = <strong>MYR 2,200 of turnover</strong> to clear MYR 100.</p>
<p>At 96% RTP the expected cost of that play is about MYR 88 — so clearing the bonus returns roughly MYR 12 in expectation. The 22× multiplier is actually below the market average, and the absolute turnover is modest. The offer is not predatory; it is simply too small to matter. Compare it against 96M's MYR 2,880 ceiling or GemBet's MYR 3,000 and the gap is obvious.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by ECLBET', html: `
<p>Every figure below is published by ECLBET itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">ECLBET published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>FPX, DuitNow, Touch ’n Go, USDT</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 30 (MYR 50 for the welcome offer)</td></tr>
<tr><th scope="row">Crypto payout speed</th><td>Under 30 minutes (USDT)</td></tr>
<tr><th scope="row">Local payout speed</th><td>Most within 30 minutes; major Malaysian banks usually within 24 hours</td></tr>
<tr><th scope="row">Minimum withdrawal</th><td>MYR 50</td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Transaction fees</th><td>No charges on standard transactions</td></tr>
<tr><th scope="row">Verification (KYC)</th><td>SMS or WhatsApp OTP plus photo ID (MyKad or passport)</td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    banking: { h2: 'Payment rails', html: `
<p>FPX, DuitNow and USDT. Narrower than brands supporting Touch 'n Go and GrabPay, but it covers the two local rails that carry most volume plus the crypto fast lane.</p>
<p>The published figures are specific: roughly 90% of USDT cashouts inside half an hour, bank transfers within a day. That specificity is worth something — "instant withdrawals" is a claim, "90% under 30 minutes" is a measurable commitment you could hold them to.</p>` },

    trust: { h2: 'Licensing and the legal position', html: `
<p>The PAGCOR offshore licence verifies on the register, which places ECLBET ahead of several brands on our list. PAGCOR is a lighter regime than the MGA or UKGC, and a Malaysian player's practical recourse through it is limited, but a confirmed licence beats an unconfirmed one every time.</p>
<p>ECLBET's own material is candid that Malaysian players should check local restrictions before depositing. It is unusual for an operator to say that, and we will credit it. The Betting Act 1953 and Common Gaming Houses Act 1953 restrict gambling here, a 2023 Court of Appeal ruling confirmed online play falls within scope, and Muslims are prohibited under Syariah law — see our <a href="/responsible-gambling/">responsible gambling guide</a>.</p>` },

    weaknesses: { h2: 'Three limitations', html: '' },

    scoring: { h2: 'Scores', html: `<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>A competent, verifiably licensed platform with fast crypto payouts and a welcome offer too small to be a reason to join. Use it for what it does well and ignore the promotion entirely.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 7.8, why: 'PAGCOR offshore licence verifies on the register, and the operator is unusually frank about Malaysian legal restrictions.' },
    { label: 'Welcome bonus', score: 4.6, why: 'A MYR 100 ceiling makes the 120% headline close to meaningless next to competitors offering ten to thirty times that cap.' },
    { label: 'Bonus fairness', score: 7.5, why: 'At 22×, the multiplier is below market average — the offer is small rather than punitive.' },
    { label: 'Banking & payouts', score: 8.3, why: 'Around 90% of USDT cashouts under 30 minutes is a specific, falsifiable claim rather than vague marketing.' },
    { label: 'Payment coverage', score: 6.5, why: 'FPX, DuitNow and USDT only — no Touch ’n Go or GrabPay, which most of this market expects.' },
    { label: 'Game range', score: 7.4, why: 'An adequate mid-market catalogue without the depth of the top-rated brands.' },
  ],

  weaknesses: [
    { title: 'The bonus caps at MYR 100', detail: 'Deposits above roughly MYR 84 earn no additional bonus at all. Against 96Ms MYR 2,880 or GemBets MYR 3,000 ceiling, the headline percentage is doing a lot of work to disguise a very small offer.' },
    { title: 'No Touch ’n Go or GrabPay', detail: 'The two e-wallets that dominate Malaysian casino deposits are both absent. FPX and DuitNow cover most needs, but the omission is noticeable against competitors supporting all four.' },
    { title: 'Bank withdrawals take up to a day', detail: 'Crypto is quick, but 24 hours on a local bank transfer is slower than several lower-rated brands on our list manage, and most players will use the bank rail rather than USDT.' },
  ],

  faqHeading: 'ECLBET — worth asking',
  faq: [
    { q: 'How big is the ECLBET welcome bonus really?', a: 'MYR 100 at most. The 120% rate applies only until you hit that ceiling, which happens at a deposit of roughly MYR 84. Larger deposits earn nothing further, making it one of the smallest offers on our list.' },
    { q: 'Is ECLBET licensed?', a: 'Yes — a PAGCOR offshore licence that verifies on the register. That is a genuine regulator, though a lighter regime than the MGA or UKGC and one offering limited practical recourse to Malaysian players.' },
    { q: 'How fast does ECLBET pay out?', a: 'The operator states roughly 90% of USDT withdrawals complete in under 30 minutes, and bank transfers within 24 hours. The percentage framing is more honest than the "instant" claims common elsewhere.' },
    { q: 'Can I use Touch ’n Go at ECLBET?', a: 'No. The cashier covers FPX, DuitNow and USDT. If TNG or GrabPay is your usual method, brands like MB8 or BK8 support them directly.' },
    { q: 'Is the 22× wagering requirement high?', a: 'It is below the market average — several rivals demand 35×. The issue with this offer is not the multiplier but the size of the prize it is attached to.' },
  ],

  verdict: {
    suits: 'crypto players who want quick, small cashouts on a verified licence and do not care about bonus size',
    avoid: 'bonus hunters, and anyone who relies on Touch ’n Go or GrabPay',
    bottomLine: `<p>ECLBET does the fundamentals properly: a licence that verifies, payout claims specific enough to hold it to, and candour about the Malaysian legal position. The welcome offer is simply too small to influence a decision. Judge it on the platform, not the promotion, and read our <a href="/responsible-gambling/">responsible gambling guide</a> first.</p>`,
  },
};
