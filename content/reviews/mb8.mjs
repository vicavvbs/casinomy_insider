import { TODO } from '../../lib/todo.mjs';
const T = (k, label) => TODO('mb8', k, label);

export default {
  slug: 'mb8',
  name: 'MB8',
  layout: ['banking', 'trust', 'tester', 'bonus', 'weaknesses', 'scoring', 'verdict'],

  lead: `
<p>MB8 is the rebranded MyBet88, now fronted by Ronaldinho and pitched squarely at Malaysian players who want to move small amounts quickly. On that narrow brief it is the best thing on our list: a MYR 20 minimum deposit, and FPX, DuitNow QR, Touch 'n Go and GrabPay all processing instantly.</p>
<p>The rating is 6 out of 10 because of what sits behind the cashier. MB8 claims a Malta Gaming Authority licence, and we could not find public verification of it. PAGCOR oversight does check out. An excellent payment experience does not compensate for not knowing who regulates the company holding your balance.</p>`,

  sections: {
    banking: { h2: 'The cashier is the reason to consider MB8', html: `
<p>Start with what works, because it genuinely does. The minimum deposit is MYR 20 — the lowest of the fourteen brands we cover, and less than half what most competitors ask. FPX, DuitNow QR and the two e-wallets that dominate this market, Touch 'n Go and GrabPay, all process instantly rather than "within minutes".</p>
<p>For someone cycling MYR 20 to MYR 50 through local rails a few times a week, that combination beats every higher-rated brand on our list. BK8 and 96M are better casinos; neither makes small, frequent local transactions this painless.</p>
<p>Check the withdrawal routes in the cashier before depositing. Instant inbound does not guarantee instant outbound, and the mismatch between the two is the most common complaint pattern across this entire market.</p>` },

    trust: { h2: 'The licence claim we could not verify', html: `
<p>MB8 advertises regulation by the Malta Gaming Authority. The MGA maintains a public register of licensees, and we could not locate public verification for this operator. We are not asserting the claim is false — we are reporting that it is unverifiable, which for scoring purposes amounts to the same caution.</p>
<p>PAGCOR oversight is the part that holds up. That is a genuine regulator with a genuine register.</p>
<p>The distinction matters because the MGA is one of the strictest regimes in the industry and PAGCOR is not. Claiming the former while demonstrably operating under the latter sets an expectation of protection that may not exist. If you only read one paragraph of this review, read this one.</p>` },

    tester: { h2: 'Our test cycle', html: `
<p>Own funds, local rails, timed. Nothing below is estimated.</p>
<div class="table-scroll"><table class="test-log">
<caption class="visually-hidden">MB8 deposit and withdrawal test log</caption>
<tbody>
<tr><th scope="row">Test date</th><td>${T('test-date', 'date of the test cycle')}</td></tr>
<tr><th scope="row">Deposit method</th><td>${T('deposit-method', 'TNG / DuitNow QR / FPX / GrabPay')}</td></tr>
<tr><th scope="row">Amount deposited</th><td>${T('deposit-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Deposit cleared in</th><td>${T('deposit-time', 'seconds or minutes to balance')}</td></tr>
<tr><th scope="row">Verification</th><td>${T('kyc', 'documents requested, and turnaround')}</td></tr>
<tr><th scope="row">Withdrawal method</th><td>${T('withdrawal-method', 'method used to cash out')}</td></tr>
<tr><th scope="row">Amount withdrawn</th><td>${T('withdrawal-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Measured payout time</th><td>${T('payout-time', 'submit-to-arrival, as measured')}</td></tr>
<tr><th scope="row">MGA register lookup</th><td>${T('mga-check', 'outcome of the MGA register search on the test date')}</td></tr>
</tbody>
</table></div>` },

    bonus: { h2: 'A 200% bonus split across three deposits', html: `
<p>MB8 spreads its welcome offer over your first three deposits rather than loading everything onto the first, with rollover between 16× and 22× depending on the tranche. That structure is fairer than a single large match with punishing terms, and we would rather see more operators do it.</p>
<h3>Worked example</h3>
<p>Three deposits of <strong>MYR 100</strong> each, with the 200% spread producing roughly MYR 600 in bonus funds across them. At the midpoint 19× rollover:</p>
<p class="calc">MYR 600 × 19 = <strong>MYR 11,400 of turnover</strong>.</p>
<p>At 96% RTP that play carries an expected cost near MYR 456 against MYR 600 of bonus — one of the few offers on our list where the arithmetic is not clearly against you. The lower 16× tranches are better still. This is a genuinely well-designed promotion, which makes the licensing ambiguity all the more frustrating.</p>` },

    weaknesses: { h2: 'What is wrong with MB8', html: '' },

    scoring: { h2: 'Scores', html: `
<p>Weighted per our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    verdict: { h2: 'Verdict', html: `
<p>A very good cashier attached to a company that will not tell you plainly who regulates it. Use it for small, frequent local play if that is what you want; do not make it the account where your balance accumulates.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 4.5, why: 'PAGCOR oversight verifies, but the advertised MGA licence could not be confirmed on the public register.' },
    { label: 'Local payments', score: 9.6, why: 'MYR 20 minimum with instant FPX, DuitNow QR, Touch ’n Go and GrabPay — the best cashier for small local transactions on our list.' },
    { label: 'Welcome bonus', score: 8.4, why: 'Splitting 200% across three deposits at 16–22× is fairer than any single-tranche offer we have reviewed.' },
    { label: 'Game range', score: 7.2, why: 'A reasonable mid-market catalogue, without the depth of the leading brands.' },
    { label: 'Banking & payouts', score: 8.5, why: 'Deposits are instant; withdrawal routes do not always mirror deposit routes, which costs it points.' },
    { label: 'Transparency', score: 4.0, why: 'A high-profile sponsorship sits alongside an unverifiable regulatory claim — exactly the wrong balance of disclosure.' },
  ],

  weaknesses: [
    { title: 'The MGA licence claim cannot be verified', detail: 'The Malta Gaming Authority publishes its licensees. We could not find MB8 on it. Claiming one of the industrys strictest regulators while operating under a lighter one misrepresents the protection a player actually has.' },
    { title: 'Deposit and withdrawal methods do not match', detail: 'Instant inbound transfers do not guarantee the same route out. Check the withdrawal side in the cashier before you deposit, because discovering the mismatch while holding a balance is the common failure mode here.' },
    { title: 'A rebrand with a short track record', detail: 'MB8 is MyBet88 renamed. A rebrand resets the evidence base, and the payout history that would justify a higher score has not yet accumulated under the new name.' },
    { title: 'Celebrity endorsement substitutes for disclosure', detail: 'Ronaldinho fronting the brand tells you about the marketing budget. It tells you nothing about the operating company, the complaints process or the regulator — all of which are harder to find than the sponsorship.' },
  ],

  faqHeading: 'MB8 — the things that matter',
  faq: [
    { q: 'Is MB8 licensed by the MGA?', a: 'MB8 claims it, and we could not verify it on the Malta Gaming Authority register. PAGCOR oversight does check out. Treat the MGA claim as unconfirmed, because the difference between those two regimes is substantial.' },
    { q: 'What is the minimum deposit at MB8?', a: 'MYR 20 — the lowest of the fourteen brands we cover. Combined with instant FPX, DuitNow QR, Touch ’n Go and GrabPay processing, it is the most accessible cashier on our list.' },
    { q: 'How does the three-deposit bonus work?', a: 'The 200% match is spread across your first three deposits instead of loading onto the first, with rollover between 16× and 22×. On MYR 300 total deposited you would owe roughly MYR 11,400 of turnover at the midpoint rate.' },
    { q: 'Can I withdraw to Touch ’n Go?', a: 'Not necessarily. Deposits process instantly through TNG and GrabPay, but withdrawal routes do not always mirror deposit routes. Confirm in the cashier before depositing — this is the most frequent complaint pattern across this market.' },
    { q: 'Is MB8 safe to hold a balance at?', a: 'We would keep it small. The payment experience is excellent, but with the stated regulator unverifiable it is unclear who you would escalate to if a withdrawal were refused.' },
  ],

  verdict: {
    suits: 'casual players cycling small amounts through Malaysian payment rails who value an instant cashier',
    avoid: 'anyone planning to hold a significant balance, or who needs to know which regulator actually covers them',
    bottomLine: `<p>MB8 has the best local cashier we have tested and one of the fairest bonus structures on this market. It also claims a regulator we could not find it registered with. Deposit small, withdraw often, and do not let a balance build. Our <a href="/why-trust-us/">verification process</a> sets out how we check these claims.</p>`,
  },
};
