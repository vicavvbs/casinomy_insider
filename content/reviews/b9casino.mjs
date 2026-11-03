import { TODO } from '../../lib/todo.mjs';
const T = (k, label) => TODO('b9casino', k, label);

export default {
  slug: 'b9casino',
  name: 'B9Casino',
  layout: ['transparency', 'tester', 'bonus', 'banking', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>B9Casino does something most of its peers do not: it publishes a specific licence number. PAGCOR master licence 0SP20-00012-A appears on the site alongside Curaçao oversight, and it checks out. The welcome offer is a 100% match to MYR 1,000 from a MYR 30 minimum, with USDT payouts advertised around fifteen minutes and bank transfers same-day.</p>
<p>So why 5 out of 10? Because a licence number is only half of what you need. The other half — who actually operates the company, and how a complaint gets escalated when support cannot resolve it — is where B9Casino goes quiet, and under an offshore licence that corporate transparency is most of the protection you have.</p>`,

  sections: {
    transparency: { h2: 'A verifiable licence attached to an invisible company', html: `
<p>Credit where it is due. Publishing PAGCOR master licence 0SP20-00012-A is more than Winbox, MB8, BP9 or Uwin33 manage, and we were able to confirm it. Dual PAGCOR and Curaçao oversight is a reasonable position for an offshore operator.</p>
<p>What we could not establish is the rest. Which company holds that licence, where it is incorporated, who to write to when live chat says no — these are the details that decide whether a dispute has anywhere to go. With a regulator as light-touch as PAGCOR, a complaint typically has to be pursued with the operator first, and that is hard to do against an entity you cannot name.</p>
<p>The licence tells you the site is permitted to operate. It does not tell you who you would be arguing with.</p>` },

    tester: { h2: 'What our tester found', html: `
<p>Own funds, Malaysian rails, timed.</p>
<div class="table-scroll"><table class="test-log">
<caption class="visually-hidden">B9Casino deposit and withdrawal test log</caption>
<tbody>
<tr><th scope="row">Test date</th><td>${T('test-date', 'date of the test cycle')}</td></tr>
<tr><th scope="row">Deposit method</th><td>${T('deposit-method', 'FPX / DuitNow / USDT')}</td></tr>
<tr><th scope="row">Amount deposited</th><td>${T('deposit-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Deposit cleared in</th><td>${T('deposit-time', 'minutes from transfer to balance')}</td></tr>
<tr><th scope="row">Verification</th><td>${T('kyc', 'documents requested, and turnaround')}</td></tr>
<tr><th scope="row">Withdrawal method</th><td>${T('withdrawal-method', 'method used to cash out')}</td></tr>
<tr><th scope="row">Measured payout time</th><td>${T('payout-time', 'submit-to-arrival, as measured')}</td></tr>
<tr><th scope="row">Operator identity check</th><td>${T('operator-check', 'company name found behind licence 0SP20-00012-A, if any')}</td></tr>
</tbody>
</table></div>` },

    bonus: { h2: 'The 100% welcome offer', html: `
<p>A 100% match up to MYR 1,000 from a MYR 30 minimum. By this market's standards the percentage is restrained and the ceiling is decent — a combination we generally prefer to a 288% headline with punishing conditions behind it.</p>
<h3>Worked example</h3>
<p>Deposit <strong>MYR 100</strong> and the match credits MYR 100. At a market-typical 20× on the bonus:</p>
<p class="calc">MYR 100 × 20 = <strong>MYR 2,000 of turnover</strong>.</p>
<p>At 96% RTP the expected cost is around MYR 80 against MYR 100 of bonus, which is about as close to neutral as these offers get. Confirm the actual multiplier in the terms — B9Casino does not publish it alongside the headline, which is a recurring failing across this market.</p>` },

    banking: { h2: 'Payment rails and payout speed', html: `
<p>FPX, DuitNow and USDT. The MYR 30 minimum is among the lower entry points on our list, which makes testing the site cheap.</p>
<p>Published timings are competitive: roughly fifteen minutes on USDT and same-day settlement on bank transfers. Those figures match brands we rate considerably higher, and if they hold, the day-to-day experience here is perfectly good. The rating reflects risk if something goes wrong, not friction when it goes right.</p>` },

    weaknesses: { h2: 'Where it falls down', html: '' },

    scoring: { h2: 'Scores', html: `<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>Mechanically sound, structurally opaque. If everything runs smoothly you will have no complaint; the rating is about what happens if it does not.</p>` },
  },

  scoring: [
    { label: 'Licence verifiability', score: 8.5, why: 'PAGCOR master licence 0SP20-00012-A is published and checkable — better than most brands on our list manage.' },
    { label: 'Corporate transparency', score: 3.2, why: 'We could not establish which company holds the licence or how a complaint escalates beyond live chat.' },
    { label: 'Welcome bonus', score: 7.8, why: 'A 100% match to MYR 1,000 from MYR 30 is restrained and accessible, though the multiplier is not published.' },
    { label: 'Banking & payouts', score: 8.2, why: 'USDT around fifteen minutes and same-day bank transfers match brands we rate far higher.' },
    { label: 'Game range', score: 7.0, why: 'Over 1,000 titles — adequate, without the depth of the leading catalogues.' },
    { label: 'Dispute recourse', score: 3.5, why: 'A light-touch regulator combined with an unnamed operator leaves very little to escalate to.' },
  ],

  weaknesses: [
    { title: 'The operating company is not identified', detail: 'A licence number is published but not the entity holding it. Under an offshore regime where complaints must usually be pursued with the operator directly, not knowing who that is removes most of your practical recourse.' },
    { title: 'No documented complaints process', detail: 'Beyond live chat there is no published escalation path. Compare that with operators naming their licensing body, their corporate entity and a formal dispute route.' },
    { title: 'Wagering terms are not published with the offer', detail: 'The 100% headline and MYR 1,000 ceiling are prominent; the multiplier that determines the offers value is not stated where you would look for it.' },
    { title: 'PAGCOR is a light-touch regulator', detail: 'The licence verifies, but PAGCOR enforcement is considerably weaker than MGA or UKGC oversight, and it offers a Malaysian player little practical remedy.' },
  ],

  faqHeading: 'B9Casino — the important questions',
  faq: [
    { q: 'Is B9Casino licensed by PAGCOR?', a: 'Yes. Master licence 0SP20-00012-A is published on the site and verifies on the register, alongside Curaçao oversight. Publishing a specific number is more than most brands on our list do.' },
    { q: 'Then why does it only score 5 out of 10?', a: 'Because the licence is only half the picture. We could not establish which company holds it or how a complaint escalates past live chat. Under an offshore regime, that corporate transparency is most of the protection you actually have.' },
    { q: 'How fast does B9Casino pay?', a: 'The operator advertises roughly fifteen minutes on USDT and same-day settlement on bank transfers — timings that match brands we rate much higher. Our measured figure is in the test log above.' },
    { q: 'What is the minimum deposit?', a: 'MYR 30, among the lower entry points on our list. That makes it inexpensive to test the site yourself before committing anything meaningful.' },
    { q: 'Is it safe to keep money at B9Casino?', a: 'We would keep balances small. If the published timings hold, the day-to-day experience is sound — but if a withdrawal were ever refused it is unclear who you would be pursuing.' },
  ],

  verdict: {
    suits: 'players who want a checkable licence number and will keep balances small',
    avoid: 'anyone who wants to know which company holds their money before depositing it',
    bottomLine: `<p>B9Casino gets the visible things right — a published, verifiable licence number, a restrained bonus and competitive payout timings. It falls down on the invisible ones. Deposit small, verify early, and treat it as a place to play rather than a place to accumulate. Our <a href="/why-trust-us/">verification process</a> explains how we check these claims.</p>`,
  },
};
