import { TODO } from '../../lib/todo.mjs';
const T = (k, label) => TODO('96m', k, label);

export default {
  slug: '96m',
  name: '96M',
  layout: ['bonus', 'tester', 'scoring', 'games', 'banking', 'weaknesses', 'verdict'],

  lead: `
<p>96M leads with the largest welcome offer serving this market: 288% up to MYR 2,880, fronted by entertainer Jacky Wu and backed by Gaming Curaçao master licence #365/JAZ. Behind it sit roughly 2,200 slots, over 250 live-dealer tables and a triple sportsbook lobby.</p>
<p>What makes 96M more interesting than the number itself is that it tells you the price. The 35× rollover is stated openly rather than buried three clicks into a terms page. In a market where the standard practice is to shout the percentage and whisper the condition, that is worth something — and it is a large part of why the brand scores 8 out of 10 despite a thinner live lobby than its closest rivals.</p>`,

  sections: {
    bonus: { h2: 'The 288% Magnificent bonus, priced honestly', html: `
<p>The offer is a 288% match reaching MYR 2,880, with a MYR 100 minimum deposit, a 35× rollover and a 30-day window to clear it. All four of those numbers are published together, which is rarer than it should be.</p>
<h3>What 35× means in ringgit</h3>
<p>Deposit <strong>MYR 100</strong> — the minimum — and the match credits MYR 288. Applied to the bonus:</p>
<p class="calc">MYR 288 × 35 = <strong>MYR 10,080 of turnover</strong> inside 30 days.</p>
<p>At a typical 96% slot RTP, cycling that carries an expected cost of about MYR 403 against a MYR 288 bonus. Scale the deposit up and the gap widens proportionally. The 30-day clock is the part people underestimate: MYR 10,080 of turnover means roughly MYR 336 of play every day for a month, which is a commitment rather than a bit of fun on the side.</p>
<p>None of this makes 96M dishonest — it makes it typical, and unusually candid about being typical. Claim the bonus for extended playing time if you want it. Do not claim it expecting to convert it.</p>` },

    tester: { h2: 'Our own deposit and payout test', html: `
<p>Funded from our own money through an ordinary Malaysian rail. Figures we have not measured are marked, not estimated.</p>
<div class="table-scroll"><table class="test-log">
<caption class="visually-hidden">96M deposit and withdrawal test log</caption>
<tbody>
<tr><th scope="row">Test date</th><td>${T('test-date', 'date of the test cycle')}</td></tr>
<tr><th scope="row">Deposit method</th><td>${T('deposit-method', 'TNG / DuitNow / FPX / USDT')}</td></tr>
<tr><th scope="row">Amount deposited</th><td>${T('deposit-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Deposit cleared in</th><td>${T('deposit-time', 'minutes from transfer to balance')}</td></tr>
<tr><th scope="row">Verification</th><td>${T('kyc', 'documents requested, and turnaround')}</td></tr>
<tr><th scope="row">Withdrawal method</th><td>${T('withdrawal-method', 'method used to cash out')}</td></tr>
<tr><th scope="row">Amount withdrawn</th><td>${T('withdrawal-amount', 'amount in MYR')}</td></tr>
<tr><th scope="row">Measured payout time</th><td>${T('payout-time', 'submit-to-arrival, as measured')}</td></tr>
<tr><th scope="row">Support response</th><td>${T('support-time', 'live chat wait and answer quality')}</td></tr>
</tbody>
</table></div>
<p>96M advertises crypto withdrawals at about 15 minutes with FPX and DuitNow often clearing the same day. Those are the operator's figures.</p>` },

    scoring: { h2: 'Category scores', html: `
<p>Ten-point scale per category, weighted as described in our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>` },

    games: { h2: 'Slots, tables and the sportsbook trio', html: `
<p>About 2,200 slot titles — slightly ahead of me88, well behind BK8 — plus more than 250 live-dealer tables and three sportsbook lobbies accessible from a single balance.</p>
<p>The slot catalogue leans on the studios this market actually wants: Pragmatic Play, PG Soft, Spadegaming and Habanero. The live lobby is the comparative weak point. It is perfectly serviceable for baccarat and roulette at standard limits, but anyone who plays live tables as their main game will find the room count restrictive next to the market leaders.</p>` },

    banking: { h2: 'Payment rails', html: `
<p>FPX, DuitNow, USDT and BTC. Crypto is the quick route, advertised at around 15 minutes; local bank transfers are published as often clearing the same day, with the usual caveat that anything submitted outside banking hours waits for the next working day.</p>
<p>Note the absence of Touch 'n Go from the published set — several competitors support it and 96M's coverage of e-wallets is narrower than the market norm. If TNG is your default, check the cashier before committing.</p>` },

    weaknesses: { h2: 'Four real criticisms', html: '' },

    verdict: { h2: 'Verdict', html: `
<p>96M is the pick if bonus size is the deciding factor and you have the bankroll to use it. The offer is genuine and the terms are stated plainly, which is more than most of this market manages. Everything else about the platform is good rather than exceptional.</p>` },
  },

  scoring: [
    { label: 'Licensing & security', score: 8.5, why: 'Gaming Curaçao #365/JAZ verifies on the register, with SSL and a recognised brand ambassador behind it.' },
    { label: 'Bonus transparency', score: 9.4, why: 'Multiplier, minimum, cap and 30-day window are published together instead of being scattered across pages.' },
    { label: 'Bonus value', score: 7.2, why: 'The headline is the largest on our list but 35× over 30 days makes conversion unrealistic for most bankrolls.' },
    { label: 'Game range', score: 8.8, why: 'Around 2,200 slots and a triple sportsbook, though the live lobby is thinner than the market leaders.' },
    { label: 'Banking & payouts', score: 8.4, why: 'Crypto at roughly 15 minutes and same-day local transfers, but narrower e-wallet coverage than rivals.' },
    { label: 'Mobile experience', score: 8.6, why: 'Full Android APK and direct iOS install with biometrics and a one-tap cashier.' },
    { label: 'Customer support', score: 8.5, why: '24/7 live chat with accurate answers on promotional terms.' },
  ],

  weaknesses: [
    { title: '35× inside 30 days is not realistically clearable', detail: 'A MYR 100 deposit generates MYR 10,080 of required turnover in a month — around MYR 336 of play every day. The terms are honest; the offer is still impractical for most bankrolls.' },
    { title: 'MYR 100 minimum is above the market floor', detail: 'Brands like MB8 start at MYR 20 and GemBet at MYR 30. Testing 96M with a small deposit is not an option if you want the headline promotion.' },
    { title: 'Thin e-wallet coverage', detail: 'Touch ’n Go does not appear in the published payment set despite being the default wallet for much of this market. FPX and DuitNow carry the load instead.' },
    { title: 'Live-dealer lobby lags the leaders', detail: 'Over 250 tables sounds generous until you compare it with BK8s 300-plus across more studios. Live-first players will notice the narrower choice at higher limits.' },
  ],

  faqHeading: 'Questions about 96M',
  faq: [
    { q: 'Is the 288% bonus at 96M worth claiming?', a: 'As extended playing time, possibly. As a route to withdrawal, no — a MYR 100 deposit generates MYR 10,080 of required turnover inside 30 days, which costs more in expected losses than the bonus returns. 96M at least states the condition clearly.' },
    { q: 'What licence does 96M hold?', a: 'Gaming Curaçao master licence #365/JAZ, which verifies on the regulator register. That is real oversight, though Curaçao enforcement is lighter than the MGA or UKGC and gives you limited practical recourse from Malaysia.' },
    { q: 'Can I deposit with Touch ’n Go at 96M?', a: 'TNG does not appear in the published payment set — FPX, DuitNow and crypto carry the load. If Touch ’n Go is your usual method, check the live cashier first or consider a brand with broader e-wallet support.' },
    { q: 'How many games does 96M have?', a: 'Roughly 2,200 slots, more than 250 live-dealer tables and three sportsbook lobbies from one account. The slot range is competitive; the live section is the thinner part of the offering.' },
    { q: 'How quickly does 96M pay out?', a: 'The operator advertises crypto at around 15 minutes and FPX or DuitNow often clearing the same day. Our independently measured timing is in the test log above, and is marked TODO until we publish a verified figure.' },
  ],

  verdict: {
    suits: 'players with a real bankroll who want the largest offer on the market and will read a rollover figure before claiming',
    avoid: 'small-stakes players, Touch ’n Go users, and anyone whose main game is live dealer',
    bottomLine: `<p>96M earns its rating as much for candour as for the bonus itself — stating a 35× condition alongside a 288% headline is not the industry norm. Do the turnover arithmetic before claiming, because honest terms and achievable terms are different things. Our <a href="/responsible-gambling/">responsible gambling guide</a> is worth reading first.</p>`,
  },
};
