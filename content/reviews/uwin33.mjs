import { TODO } from '../../lib/todo.mjs';
const T = (k, label) => TODO('uwin33', k, label);

export default {
  slug: 'uwin33',
  name: 'Uwin33',
  layout: ['licence', 'tester', 'banking', 'bonus', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>Uwin33 is built for Malaysian players in a way many offshore sites are not. The cashier carries FPX, DuitNow and Touch 'n Go rather than defaulting to international methods, the welcome offer is a 100% match up to MYR 688, and crypto withdrawals are advertised at ten to thirty minutes. Day to day it is a convenient account to hold.</p>
<p>It scores 5 out of 10 for one reason. Uwin33 states that it is licensed by "leading organisations in the online casino industry" without naming a regulator or publishing a number. A licence claim you cannot look up is not a licence claim we can weigh — and it is the single most important piece of documentation an offshore casino can give you.</p>`,

  sections: {
    licence: { h2: 'A licence claim with nothing to check', html: `
<p>Compare how three brands on our list describe their regulation. B9Casino publishes "PAGCOR master licence 0SP20-00012-A" — a number you can search. 96M publishes "Gaming Curaçao master licence #365/JAZ". Uwin33 publishes a sentence about leading industry organisations.</p>
<p>The difference is not stylistic. A named regulator with a number gives you somewhere to verify the operator is permitted to trade and, if a withdrawal is refused, somewhere to complain. A general assurance gives you neither. It is the one disclosure that cannot reasonably be omitted, and omitting it is a decision rather than an oversight.</p>
<p>We are not alleging Uwin33 is unlicensed. We are saying we cannot confirm that it is, and an unverifiable claim has to be scored as unverified. Our <a href="/why-trust-us/">verification process</a> describes how we check these, and our tester's lookup is logged below.</p>` },

    tester: { h2: 'What our tester found', html: `
<p>Own funds, Malaysian rails, timed.</p>
<div class="table-scroll"><table class="test-log">
<caption class="visually-hidden">Uwin33 deposit and withdrawal test log</caption>
<tbody>
<tr><th scope="row">Test date</th><td>${T('test-date', 'date of the test cycle')}</td></tr>
<tr><th scope="row">Deposit method</th><td>${T('deposit-method', 'TNG / FPX / DuitNow / USDT')}</td></tr>
<tr><th scope="row">Amount deposited</th><td>${T('deposit-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Deposit cleared in</th><td>${T('deposit-time', 'minutes from transfer to balance')}</td></tr>
<tr><th scope="row">Verification</th><td>${T('kyc', 'documents requested, and turnaround')}</td></tr>
<tr><th scope="row">Withdrawal method</th><td>${T('withdrawal-method', 'method used to cash out')}</td></tr>
<tr><th scope="row">Measured payout time</th><td>${T('payout-time', 'submit-to-arrival, as measured')}</td></tr>
<tr><th scope="row">Regulator named on request</th><td>${T('licence-ask', 'what live chat said when asked to name the regulator and licence number')}</td></tr>
</tbody>
</table></div>
<p>That last row matters more than the rest. Asking support to name the regulator is a test any player can run in two minutes, and the answer is informative either way.</p>` },

    banking: { h2: 'The cashier is the strong point', html: `
<p>FPX, DuitNow and Touch 'n Go cover what Malaysians actually use, and USDT provides the fast lane. TNG support in particular puts Uwin33 ahead of 96M, ECLBET, GemBet and 12Play, none of which offer it.</p>
<p>Crypto withdrawals are advertised at ten to thirty minutes, which is competitive. Local rails are not given a published figure, which is a familiar gap across this market — the fast crypto number gets advertised and the rail most people use does not.</p>` },

    bonus: { h2: 'A 100% match up to MYR 688', html: `
<p>Restrained by this market's standards, where 250% and 288% headlines are routine. We generally prefer a modest percentage at a sane multiplier to a large one at 35×, and a MYR 688 ceiling is reasonable.</p>
<h3>Worked example</h3>
<p>Deposit <strong>MYR 200</strong> and the 100% match credits MYR 200. At a market-typical 20× on the bonus:</p>
<p class="calc">MYR 200 × 20 = <strong>MYR 4,000 of turnover</strong>.</p>
<p>At 96% RTP that play carries an expected cost around MYR 160, against MYR 200 of bonus. On those assumptions the offer is one of the better-value ones on our list. Uwin33 does not publish the multiplier alongside the headline, so confirm the real figure in the terms rather than relying on our illustration.</p>` },

    weaknesses: { h2: 'Three serious reservations', html: '' },

    scoring: { h2: 'Scores', html: `<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>Convenient, locally built, and missing the one disclosure that would let you trust it with anything substantial. Use it for small-stakes play if the cashier suits you, and keep the balance low.</p>` },
  },

  scoring: [
    { label: 'Licence verifiability', score: 2.0, why: 'No regulator named and no licence number published — the one disclosure an offshore operator cannot reasonably omit.' },
    { label: 'Local payment coverage', score: 9.0, why: 'FPX, DuitNow and Touch ’n Go together put it ahead of several higher-rated brands on cashier convenience.' },
    { label: 'Payout speed', score: 8.2, why: 'Crypto advertised at ten to thirty minutes, competitive with the faster operators we cover.' },
    { label: 'Welcome bonus', score: 7.8, why: 'A restrained 100% to MYR 688 is better value than the inflated headlines common in this market.' },
    { label: 'Bonus transparency', score: 5.0, why: 'The wagering multiplier is not published alongside the offer, so its value cannot be assessed from the promotional material.' },
    { label: 'Dispute recourse', score: 2.2, why: 'With no named regulator there is no external body to escalate a refused withdrawal to.' },
  ],

  weaknesses: [
    { title: 'No regulator named and no licence number published', detail: 'The site refers to "leading organisations" instead of naming an authority. Without a number there is nothing to verify and, more importantly, nobody to complain to if a payout is refused.' },
    { title: 'No published figure for local-rail withdrawals', detail: 'The ten-to-thirty-minute claim covers crypto. FPX, DuitNow and TNG payouts — the routes most players will actually use — have no stated timing at all.' },
    { title: 'Wagering terms are not published with the offer', detail: 'A 100% match to MYR 688 is advertised without the multiplier that determines whether it is worth claiming. You have to hunt through the terms to price it.' },
  ],

  faqHeading: 'Uwin33 — what we would ask them',
  faq: [
    { q: 'Who licenses Uwin33?', a: 'The site does not say. It refers to regulation by leading industry organisations without naming an authority or publishing a licence number. We could not verify any specific licence, and we score unverifiable claims as unverified.' },
    { q: 'Can I use Touch ’n Go at Uwin33?', a: 'Yes, alongside FPX, DuitNow and USDT. TNG support is genuinely useful and puts Uwin33 ahead of 96M, ECLBET, GemBet and 12Play, none of which accept it.' },
    { q: 'How fast are Uwin33 withdrawals?', a: 'Crypto is advertised at ten to thirty minutes. No figure is published for FPX, DuitNow or TNG withdrawals, which is the route most players will use. Our measured timing is in the test log above.' },
    { q: 'Is the MYR 688 bonus worth claiming?', a: 'Potentially — a 100% match is more realistic than the 288% headlines elsewhere. But the multiplier is not published alongside it, so confirm the figure in the terms before committing a session to clearing it.' },
    { q: 'Should I keep money at Uwin33?', a: 'We would not. The cashier is convenient, but with no named regulator there is no external body to escalate to if a withdrawal is ever refused. Keep balances small and withdraw regularly.' },
  ],

  verdict: {
    suits: 'players who want Malaysian payment rails including Touch ’n Go and will keep balances small',
    avoid: 'anyone who wants to verify a licence before depositing, or who plans to accumulate winnings on site',
    bottomLine: `<p>Uwin33 is convenient and pays quickly on crypto, and the Touch ’n Go support is a real advantage. What it does not give you is anywhere to turn if a payout is disputed, because no regulator is named. For small-stakes local play that may be an acceptable trade; for anything more, pick a brand from our <a href="/online-casino-review/">rankings</a> whose licence you can check yourself.</p>`,
  },
};
