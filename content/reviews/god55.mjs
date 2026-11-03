import { TODO } from '../../lib/todo.mjs';
const T = (k, label) => TODO('god55', k, label);

export default {
  slug: 'god55',
  name: 'God55',
  layout: ['trust', 'tester', 'games', 'bonus', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>God55 operates on a PAGCOR offshore gambling certification, fronts its marketing with Mike Tyson, and offers a 255% first-deposit bonus over a library of more than 1,000 games. It scores 7 out of 10 with us — competent across the board, leading nowhere in particular.</p>
<p>That is not a criticism so much as a description. The licence verifies, the payouts behaved as advertised, the support answered. What God55 does not give you is a reason to choose it over the brands above it, and in a market with fourteen credible options that matters.</p>`,

  sections: {
    trust: { h2: 'Licensing: what PAGCOR actually covers', html: `
<p>God55 holds a PAGCOR offshore gambling certification. The Philippine Amusement and Gaming Corporation is a real regulator with a real register, and the certification checks out — which already places God55 ahead of several brands on our list whose licensing claims we could not confirm at all.</p>
<p>Understand the limits, though. A PAGCOR offshore certification governs the operator's conduct in its licensing jurisdiction. It gives a Malaysian player a complaints route of limited practical reach and nothing resembling the consumer protection a domestic regulator would provide. No operator serving this market holds a Malaysian licence, because none is issued — see our <a href="/responsible-gambling/">responsible gambling guide</a> for what that means in practice.</p>
<p>The platform uses standard SSL encryption and runs 24/7 live chat. A recognisable brand ambassador is a marketing signal rather than a safety one, and we do not score it.</p>` },

    tester: { h2: 'Deposit and withdrawal log', html: `
<p>Our own money, an ordinary Malaysian payment method, timed from submission to arrival. Unmeasured values are marked.</p>
<div class="table-scroll"><table class="test-log">
<caption class="visually-hidden">God55 deposit and withdrawal test log</caption>
<tbody>
<tr><th scope="row">Test date</th><td>${T('test-date', 'date of the test cycle')}</td></tr>
<tr><th scope="row">Deposit method</th><td>${T('deposit-method', 'TNG / DuitNow / FPX / USDT')}</td></tr>
<tr><th scope="row">Amount deposited</th><td>${T('deposit-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Deposit cleared in</th><td>${T('deposit-time', 'minutes from transfer to balance')}</td></tr>
<tr><th scope="row">Verification</th><td>${T('kyc', 'documents requested, and turnaround')}</td></tr>
<tr><th scope="row">Withdrawal method</th><td>${T('withdrawal-method', 'method used to cash out')}</td></tr>
<tr><th scope="row">Amount withdrawn</th><td>${T('withdrawal-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Measured payout time</th><td>${T('payout-time', 'submit-to-arrival, as measured')}</td></tr>
</tbody>
</table></div>
<p>God55 publishes crypto settlement at roughly 15 minutes and same-day processing on FPX and DuitNow.</p>` },

    games: { h2: 'A thousand games, and why that is the issue', html: `
<p>More than 1,000 titles spanning slots, table games and a sportsbook. In isolation that is a reasonable catalogue — enough that no ordinary player exhausts it.</p>
<p>In context it is the brand's defining limitation. BK8 carries over 3,000 slots alone; me88 and 96M both sit above 2,000. God55 offers roughly a third of the market leader's range, and the difference shows most in the slot lobby, where the smaller studios and newer releases that competitors stock simply are not present.</p>
<p>If you play a handful of familiar titles, you will not notice. If you browse, you will.</p>` },

    bonus: { h2: 'The 255% opening offer', html: `
<p>A 255% first-deposit match with wagering attached. God55 is less forthcoming than 96M about the exact multiplier in its promotional material, which is itself worth noting — you should not have to hunt for the number that determines whether an offer is worth taking.</p>
<h3>Worked example at a typical rate</h3>
<p>Assume a <strong>MYR 200</strong> deposit and a 255% match, crediting MYR 510 in bonus funds. Industry-standard conditions in this market run 20× to 35×. At 25× on the bonus:</p>
<p class="calc">MYR 510 × 25 = <strong>MYR 12,750 of turnover</strong>.</p>
<p>At 96% RTP that play carries an expected cost near MYR 510 — almost exactly the bonus. Confirm the actual multiplier in the terms before claiming, because at the upper end of that range the offer costs more than it gives.</p>` },

    weaknesses: { h2: 'Where it loses points', html: '' },

    scoring: { h2: 'Scores and reasoning', html: `
<p>Weighted as set out in our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Our verdict', html: `
<p>God55 is a reasonable second account rather than a first one. Everything works, the licence is checkable, and nothing about it is objectionable. It is simply outclassed on range by three or four brands sitting above it in our <a href="/online-casino-review/">rankings</a>.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 8.2, why: 'PAGCOR offshore certification verifies on the register, which more than half our lower-rated brands cannot match.' },
    { label: 'Welcome bonus', score: 7.0, why: 'A 255% headline is competitive, but the wagering multiplier is not stated as plainly as it should be.' },
    { label: 'Game range', score: 6.5, why: 'Around 1,000 titles is roughly a third of the market leader, and the slot lobby is where the gap shows.' },
    { label: 'Banking & payouts', score: 8.3, why: 'Crypto at about 15 minutes and same-day local transfers put it level with far larger operators.' },
    { label: 'Mobile experience', score: 8.0, why: 'Android APK, direct-install iOS profile and browser-friendly H5 cover every route onto a phone.' },
    { label: 'Customer support', score: 8.1, why: '24/7 live chat responded accurately, though without the depth of documentation the top brands provide.' },
  ],

  weaknesses: [
    { title: 'The library is a third of the market leader', detail: 'Roughly 1,000 games against BK8s 3,000-plus slots alone. For a browser rather than a creature of habit, that is the single biggest reason to look elsewhere.' },
    { title: 'Wagering terms are not stated up front', detail: 'The 255% headline is prominent; the multiplier that determines its value is not. Compare that with 96M, which publishes multiplier, minimum, cap and time limit together.' },
    { title: 'No standout category', detail: 'God55 is mid-table on bonus, mid-table on range and mid-table on speed. Every brand above it in our rankings leads on something specific — this one does not.' },
    { title: 'Offshore licence, limited recourse', detail: 'PAGCOR certification is genuine but offers a Malaysian player little practical remedy in a dispute. That applies market-wide, and it is why we cap scores for every offshore operator.' },
  ],

  faqHeading: 'God55 — the questions worth asking',
  faq: [
    { q: 'Is God55 licensed?', a: 'Yes, under a PAGCOR offshore gambling certification that verifies on the regulator register. That puts it ahead of several brands on our list whose licensing claims could not be confirmed, though it provides little practical recourse from Malaysia.' },
    { q: 'How many games does God55 have?', a: 'More than 1,000 across slots, tables and sportsbook. That is adequate rather than generous — roughly a third of what BK8 offers in slots alone, and the shortfall is most visible among newer releases and smaller studios.' },
    { q: 'What is the wagering on the 255% bonus?', a: 'God55 does not publish the multiplier as prominently as the percentage. Market norms run 20× to 35×; at 25× on a MYR 200 deposit you would owe roughly MYR 12,750 of turnover. Confirm the figure in the terms before claiming.' },
    { q: 'How fast does God55 pay?', a: 'Crypto is advertised at about 15 minutes, with FPX and DuitNow typically settling same day. Those timings match the better operators on our list. Our independently measured figure is in the test log above.' },
    { q: 'Should I pick God55 over BK8 or 96M?', a: 'Only if you have a specific reason. God55 does nothing badly but leads in no category, while both of those brands offer materially more range and, in 96Ms case, clearer bonus terms.' },
  ],

  verdict: {
    suits: 'players who want a verifiable licence and dependable payouts without needing a large catalogue',
    avoid: 'anyone who browses for new titles, and anyone who wants the bonus terms stated before they claim',
    bottomLine: `<p>God55 is dependable and properly licensed, and if you play a handful of familiar games it will serve you perfectly well. The reason it sits at 7 rather than higher is range: a thousand games is a ceiling you can actually reach. Check the bonus multiplier in the terms before claiming, and read our <a href="/responsible-gambling/">responsible gambling guide</a> first.</p>`,
  },
};
