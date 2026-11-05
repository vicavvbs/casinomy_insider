
export default {
  slug: 'bp9',
  name: 'BP9',
  layout: ['rebrand', 'trust', 'tester', 'bonus', 'banking', 'weaknesses', 'verdict'],

  lead: `
<p>BP9 is BP77 under a new name, relaunched during 2026 with dual 100% welcome bonuses, a library past 1,000 titles and a claimed PAGCOR licence. Nothing about the platform itself looks broken.</p>
<p>It scores 6 out of 10 anyway, and the reason is evidence rather than any specific fault. A rebrand resets a casino's track record: the complaints history, the payout record and the reputational weight all start again from zero under the new name. BP9 has not yet accumulated enough of any of them to justify a higher rating, and we would rather say that than pretend otherwise.</p>`,

  sections: {
    rebrand: { h2: 'What a rebrand actually resets', html: `
<p>Operators rebrand for ordinary commercial reasons — new markets, new licensing structures, a fresh identity. They also rebrand to shed a reputation. From outside you usually cannot tell which, and that uncertainty is the thing to price in.</p>
<p>What carries over is the infrastructure: the platform, the game integrations, often the staff. What does not carry over is anything you could use to assess them. Search BP9 and you will find launch coverage; search for a two-year pattern of settled withdrawals under that name and there is nothing to find yet.</p>
<p>That is not an accusation. It is a reason to deposit small and watch, which is exactly our recommendation here.</p>` },

    trust: { h2: 'The licence position', html: `
<p>BP9 states that it is licensed by PAGCOR, the Philippine regulator. PAGCOR maintains a public register and is a genuine authority, though a lighter regime than the MGA or UKGC.</p>
<p>What we would want to see, and what the site does not make easy to find, is the licence number set against the operating company name, so the claim can be checked rather than taken on trust. Brands like B9Casino publish a specific number; BP9 is vaguer. We could not match BP9’s claim to a specific register entry.</p>
<p>No operator serving Malaysia holds a Malaysian licence, so the practical recourse question applies here as everywhere — see our <a href="/responsible-gambling/">responsible gambling guide</a>.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by BP9', html: `
<p>Every figure below is published by BP9 itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">BP9 published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>Local bank transfer and e-wallets; MYR wallet avoids conversion fees</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 100</td></tr>
<tr><th scope="row">Crypto payout speed</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Local payout speed</th><td>Within 24 hours (bank and e-wallet), per the operator’s stated policy</td></tr>
<tr><th scope="row">Minimum withdrawal</th><td>USD 200</td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td>USD 30,000; up to MYR 50,000 daily at Diamond tier</td></tr>
<tr><th scope="row">Transaction fees</th><td>No conversion fees when the wallet is set to MYR</td></tr>
<tr><th scope="row">Verification (KYC)</th><td>Two copies of MyKad or passport plus a utility bill or bank statement; 6–12 hours on weekdays, longer at weekends</td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    bonus: { h2: 'Two 100% bonuses rather than one big one', html: `
<p>BP9 runs dual 100% welcome offers rather than a single inflated percentage. A 100% match is modest by this market's standards, where 250% and 288% headlines are common — but those larger numbers come attached to 30× and 35× conditions, and a smaller bonus at a sane multiplier is frequently worth more.</p>
<h3>Worked example</h3>
<p>Deposit <strong>MYR 100</strong> against a 100% match, crediting MYR 100 in bonus funds. At a market-typical 20×:</p>
<p class="calc">MYR 100 × 20 = <strong>MYR 2,000 of turnover</strong>.</p>
<p>At 96% RTP that play costs roughly MYR 80 in expectation against MYR 100 of bonus — one of the few structures on our list where the arithmetic is close to neutral. BP9 does not publish its multiplier prominently, so confirm it in the terms; the calculation above assumes a market norm rather than a stated figure.</p>` },

    banking: { h2: 'Deposits and withdrawals', html: `
<p>Traditional bank routes dominate: ATM, CDM and FPX transfers, with most processing instantly on the way in. DuitNow is supported. The minimum sits around MYR 90 to MYR 220 depending on method, which is a high floor by current standards — MB8 starts at MYR 20 and GemBet at MYR 30.</p>
<p>Crypto does not feature prominently, which is unusual for a 2026 launch and means the fast lane most competitors offer is not really available here.</p>` },

    weaknesses: { h2: 'Four reasons for caution', html: '' },

    verdict: { h2: 'Verdict', html: `
<p>Functional, unremarkable and too new to assess properly. If you are curious, deposit the minimum and verify your account early. Otherwise there is no particular reason to choose BP9 over the better-documented brands in our <a href="/online-casino-review/">rankings</a>.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 6.2, why: 'A PAGCOR claim without a prominently published licence number set against the operating company name.' },
    { label: 'Track record', score: 4.5, why: 'The BP77 rebrand resets the evidence base, and there is not yet enough payout history under the new name to judge.' },
    { label: 'Welcome bonus', score: 7.6, why: 'Dual 100% offers are modest but structurally fairer than the 288% headlines carrying 35× conditions elsewhere.' },
    { label: 'Banking & payouts', score: 7.0, why: 'ATM, CDM and FPX transfers process instantly inbound, but the minimum deposit is high and crypto is largely absent.' },
    { label: 'Game range', score: 7.2, why: 'Over 1,000 titles is adequate without approaching the depth of the market leaders.' },
    { label: 'Transparency', score: 5.5, why: 'Neither the licence number nor the wagering multiplier is published where a player would reasonably look for them.' },
  ],

  weaknesses: [
    { title: 'No meaningful track record under the new name', detail: 'BP77 became BP9 in 2026. Reputation, complaints history and payout evidence do not transfer across a rebrand, and there is not yet enough accumulated to support a higher score.' },
    { title: 'The licence number is not easy to find', detail: 'A PAGCOR claim is made but not presented with a number against the operating company, which is what would let you verify it yourself. B9Casino, rated lower overall, does this better.' },
    { title: 'High minimum deposit', detail: 'Roughly MYR 90 to MYR 220 depending on method. For a brand asking players to take a chance on an unproven name, that is a steep entry — MB8 asks MYR 20.' },
    { title: 'Little crypto support', detail: 'For a 2026 launch, the absence of a prominent USDT route is odd, and it removes the fast withdrawal lane that competitors use to differentiate themselves.' },
  ],

  faqHeading: 'BP9 — what we would check',
  faq: [
    { q: 'Is BP9 the same as BP77?', a: 'Yes — BP9 is the 2026 rebrand of BP77. The platform and infrastructure carry over; the reputation and payout history do not, which is the main reason we rate it cautiously rather than on the strength of the older name.' },
    { q: 'Is BP9 licensed by PAGCOR?', a: 'It claims to be. PAGCOR is a genuine regulator with a public register, but BP9 does not publish its licence number alongside the operating company name where a player could easily verify it.' },
    { q: 'How much do I need to deposit at BP9?', a: 'Roughly MYR 90 to MYR 220 depending on the method — one of the higher entry points on our list. MB8 starts at MYR 20 and GemBet at MYR 30 if you want to test a site cheaply.' },
    { q: 'Are the dual 100% bonuses any good?', a: 'Structurally, yes. A 100% match at a sane multiplier is often worth more than a 288% headline carrying 35× wagering. BP9 does not publish its multiplier prominently, so confirm it in the terms before claiming.' },
    { q: 'Should I use BP9?', a: 'Only with a small deposit and early verification. An unproven name with a high minimum and a hard-to-verify licence is not where we would concentrate play.' },
  ],

  verdict: {
    suits: 'players already familiar with BP77 who want to see whether the rebrand holds up',
    avoid: 'anyone who wants a track record behind the licence claim, or a low-cost way to test a new site',
    bottomLine: `<p>BP9 works, but it has not yet earned the confidence the established brands have, and the high minimum deposit makes testing it more expensive than it should be. Deposit small, verify early, and re-read this review in six months — we will re-test and move the score as evidence accumulates. Our <a href="/responsible-gambling/">responsible gambling guide</a> applies regardless.</p>`,
  },
};
