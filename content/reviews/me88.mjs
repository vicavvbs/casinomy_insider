
export default {
  slug: 'me88',
  name: 'me88',
  layout: ['verdict', 'tester', 'bonus', 'banking', 'games', 'weaknesses', 'scoring'],

  lead: `
<p>me88 is the account we hand to people who have never opened one before. Launched in 2019 and operating under Curaçao master licence #365/JAZ through Brictec B.V., it carries over 2,000 slots, more than 250 live-dealer tables and a triple sportsbook lobby — but the catalogue is not really why it earns its rating.</p>
<p>What me88 does better than larger rivals is remove friction. The cashier is legible, the promotional terms are written to be understood rather than skimmed past, and support answers awkward questions instead of deflecting them. For a first casino account, that matters more than having a thousand extra slot titles you will never open.</p>
<p>The headline 288% slots bonus is genuinely large. Parts of it also carry 35× wagering, and the promotional material does not make it obvious which parts. That gap is the main thing to understand before claiming.</p>`,

  sections: {
    verdict: { h2: 'Verdict first', html: `
<p>If this is your first Malaysian casino account, me88 is the sensible place to start. Nothing about the platform is designed to catch you out, verification is explained rather than sprung on you, and the licensing checks out. It is not the deepest library available and it is not the fastest payer — it is the one least likely to confuse you.</p>` },

    tester: { h2: 'Banking and payout speeds, as published by me88', html: `
<p>Every figure below is published by me88 itself — in its cashier terms, banking page or promotional material. We have reproduced them rather than paraphrasing them, and marked anything the operator does not state. These are advertised speeds, not times we have measured, so treat them as the operator’s commitment rather than an independent result.</p>
<div class="table-scroll"><table class="banking-table">
<caption class="visually-hidden">me88 published banking and payout figures</caption>
<tbody>
<tr><th scope="row">Deposit methods</th><td>FPX, DuitNow, Touch ’n Go, USDT</td></tr>
<tr><th scope="row">Minimum deposit</th><td>MYR 50</td></tr>
<tr><th scope="row">Crypto payout speed</th><td>About 15 minutes (USDT)</td></tr>
<tr><th scope="row">Local payout speed</th><td>Same day (FPX / DuitNow)</td></tr>
<tr><th scope="row">Minimum withdrawal</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Daily withdrawal cap</th><td><span class="not-published">Not published</span></td></tr>
<tr><th scope="row">Transaction fees</th><td>Deposits instant, no added fees</td></tr>
<tr><th scope="row">Verification (KYC)</th><td><span class="not-published">Not published</span></td></tr>
</tbody>
</table></div>
<p>Advertised payout windows assume a fully verified account and a withdrawal submitted inside banking hours. Requests made overnight, at weekends or on public holidays commonly take longer than the headline figure, whichever operator you are dealing with.</p>` },

    bonus: { h2: 'The 288% offer, and the part nobody reads', html: `
<p>me88's welcome package splits across several products: a 288% slots bonus reaching MYR 2,880, a 200% eSports offer up to MYR 1,000, and smaller matched deals on live casino. The slots figure is the one in the advertising.</p>
<p>Some portions carry a 35× requirement, which is above the market average and well above what the headline implies.</p>
<h3>What 35× costs, in ringgit</h3>
<p>Take a <strong>MYR 200</strong> deposit against the 288% slots offer. That credits MYR 576 in bonus funds, giving MYR 776 playable. With 35× applied to the bonus portion:</p>
<p class="calc">MYR 576 × 35 = <strong>MYR 20,160 of turnover</strong> required.</p>
<p>At a typical 96% slot RTP, cycling MYR 20,160 carries an expected cost of around MYR 806 — more than the bonus is worth. If the multiplier instead applies to deposit plus bonus, the figure climbs past MYR 27,000. Either way the honest conclusion is the same: this bonus is an entertainment extension, not a route to profit, and treating it as the latter is how people lose more than they planned.</p>
<p>Game weighting compounds it. Live dealer play typically contributes 10% or less toward clearing, so running the requirement on baccarat rather than slots multiplies the real turnover tenfold.</p>` },

    banking: { h2: 'Getting money in and out', html: `
<p>The cashier covers FPX, DuitNow, Touch 'n Go and USDT. For a Malaysian player that is the useful set — local rails for routine amounts, crypto when speed matters.</p>
<p>me88 publishes crypto settlement at around 15 minutes with FPX and DuitNow clearing the same day during banking hours. Weekend submissions behave the way they do everywhere: the bank, not the casino, decides when a Saturday transfer lands.</p>
<p>The one thing to check before depositing is the route out. Confirm in the cashier that your chosen method supports withdrawals as well as deposits — this is a recurring trap across the market, and discovering it while holding a balance is unpleasant.</p>` },

    games: { h2: 'What you can actually play', html: `
<p>Over 2,000 slots and 250-plus live tables, drawing on Pragmatic Play, PG Soft, Evolution and the regional studios Malaysian players look for. It is a solid catalogue rather than a remarkable one — BK8 carries roughly half again as many slot titles.</p>
<p>The live baccarat rooms are the busiest part, as they are everywhere in this market, and stream quality on mobile data rather than wi-fi is the thing to check before staking anything serious. The triple sportsbook lobby is a genuine advantage if you bet as well as spin, since you can compare lines without holding three accounts.</p>` },

    weaknesses: { h2: 'Three things working against it', html: '' },

    scoring: { h2: 'Scores, with reasoning', html: `
<p>Marked out of ten in each category, weighted as set out in our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 9.0, why: 'Curaçao #365/JAZ under a named operator, Brictec B.V., and the number checks out on the register.' },
    { label: 'Welcome bonus', score: 7.4, why: 'Large headline figure undercut by 35× conditions on portions of it that the promotional material does not clearly separate.' },
    { label: 'Game range', score: 8.6, why: 'Over 2,000 slots and 250-plus live tables is comfortably sufficient, though noticeably behind BK8 on depth.' },
    { label: 'Banking & payouts', score: 8.8, why: 'All the local rails plus crypto, with advertised 15-minute USDT settlement and same-day local transfers.' },
    { label: 'Mobile experience', score: 8.7, why: 'The app is stable and the cashier works properly on a phone rather than being a shrunken desktop layout.' },
    { label: 'Ease for newcomers', score: 9.4, why: 'Clearer guides and plainer promotional language than anything else we have reviewed for this market.' },
    { label: 'Customer support', score: 8.9, why: 'Answered an awkward bonus-weighting question accurately instead of deflecting, which several higher-profile brands failed to do.' },
  ],

  weaknesses: [
    { title: 'The 35× portions are not clearly signposted', detail: 'The 288% headline and the 35× condition appear in different places in the promotional material. A new player can reasonably claim the offer without understanding that MYR 20,000-plus of turnover is attached.' },
    { title: 'Smaller library than its direct rivals', detail: 'Around 2,000 slots against BK8s 3,000-plus. For most people that is academic, but if you chase specific titles from smaller studios you will notice gaps.' },
    { title: 'Deposit and withdrawal methods do not always match', detail: 'Some cashier routes accept money in but will not send it back the same way. It is checkable before you deposit, and it should not need checking.' },
    { title: 'Curaçao oversight is light', detail: 'The licence is real and verifiable, but Curaçao enforcement is weaker than the MGA or UKGC. If a dispute goes badly, the practical recourse is limited — a point that applies to most of this market, not just me88.' },
  ],

  faqHeading: 'Common questions about me88',
  faq: [
    { q: 'Is me88 a good first casino account?', a: 'It is the one we recommend most often for newcomers. The cashier is uncluttered, the guides assume no prior knowledge, and support explains bonus terms rather than reciting them. None of that makes gambling safe — it makes the mechanics easier to follow.' },
    { q: 'What is the real cost of the 288% bonus?', a: 'On a MYR 200 deposit the bonus is MYR 576, and a 35× requirement on that portion means roughly MYR 20,160 of turnover. At 96% RTP the expected cost of that play is around MYR 806 — more than the bonus itself.' },
    { q: 'Who operates me88?', a: 'Brictec B.V., under Curaçao master licence #365/JAZ. Having a named operating company matters: several brands we review describe their regulation only in general terms, which leaves you nowhere to escalate.' },
    { q: 'How fast are me88 withdrawals?', a: 'The operator advertises about 15 minutes on USDT and same-day settlement on FPX and DuitNow during banking hours. Those are the operator’s own published figures, reproduced in full in the banking table above.' },
    { q: 'Does me88 have a sportsbook?', a: 'Three of them, in a single lobby. That is genuinely useful if you bet as well as play casino games, since you can compare lines without maintaining separate accounts. Note that sportsbook turnover usually does not count toward casino bonus wagering.' },
  ],

  verdict: {
    suits: 'first-time players who want the sign-up, verification and withdrawal process explained rather than assumed',
    avoid: 'bonus-focused players, and anyone who wants the deepest slot library available',
    bottomLine: `<p>me88 is the least intimidating way into this market and the licensing is properly documented. Claim the welcome offer only once you have worked out which portion carries 35×, and treat it as extended playing time rather than a path to a payout. Read our <a href="/responsible-gambling/">responsible gambling guide</a> before depositing — the legal position in Malaysia applies regardless of which brand you choose.</p>`,
  },
};
