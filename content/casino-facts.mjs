/* Comparison-table facts, taken from each brand's own review page.
   Anything the reviews do not state is left as null and renders as "See review"
   rather than being guessed at. */

export const CASINO_FACTS = {
  bk8: {
    licence: 'Curaçao master licence + UKGC white-label partner',
    welcomeBonus: '150% up to MYR 2,888 (live casino) or 100% up to MYR 300 (casino)',
    minDeposit: null,
    withdrawal: 'USDT under 30 min · FPX/DuitNow same day',
    payments: ['FPX', 'DuitNow', 'Touch ’n Go', 'GrabPay', 'Visa/Mastercard', 'USDT', 'BTC'],
  },
  me88: {
    licence: 'Curaçao master licence #365/JAZ (Brictec B.V.)',
    welcomeBonus: '288% slots bonus up to MYR 2,880',
    minDeposit: null,
    withdrawal: 'USDT ~15 min · FPX/DuitNow same day',
    payments: ['FPX', 'DuitNow', 'Touch ’n Go', 'USDT'],
  },
  maxim88: {
    licence: 'Gaming Curaçao master licence #365/JAZ (Brictec B.V.)',
    welcomeBonus: '288% slots & fishing up to MYR 288 (28× turnover)',
    minDeposit: 'MYR 200 (288% offer)',
    withdrawal: 'Crypto ~15 min · bank/e-wallet same day to 3 days',
    payments: ['FPX', 'DuitNow', 'Touch ’n Go', 'USDT'],
  },
  '96m': {
    licence: 'Gaming Curaçao master licence #365/JAZ',
    welcomeBonus: '288% Magnificent bonus up to MYR 2,880 (35× rollover)',
    minDeposit: 'MYR 100',
    withdrawal: 'Crypto ~15 min · FPX/DuitNow often same day',
    payments: ['FPX', 'DuitNow', 'USDT', 'BTC'],
  },
  god55: {
    licence: 'PAGCOR offshore gambling certification',
    welcomeBonus: '255% first-deposit bonus (wagering applies)',
    minDeposit: null,
    withdrawal: 'Crypto ~15 min · FPX/DuitNow typically same day',
    payments: ['FPX', 'DuitNow', 'USDT', 'BTC'],
  },
  winbox: {
    licence: 'PAGCOR remote gaming seal + Curaçao #365/JAZ claim',
    welcomeBonus: '200% first-deposit bonus (30× rollover, 30 days)',
    minDeposit: 'MYR 100',
    withdrawal: 'USDT in minutes · local bank/e-wallet minutes to hours',
    payments: ['FPX', 'DuitNow', 'Touch ’n Go', 'USDT'],
  },
  mb8: {
    licence: 'PAGCOR; an MGA licence is claimed but not publicly verifiable',
    welcomeBonus: '200% spread across the first three deposits (16–22× rollover)',
    minDeposit: 'MYR 20',
    withdrawal: 'FPX/DuitNow QR and e-wallets processed instantly',
    payments: ['FPX', 'DuitNow', 'Touch ’n Go', 'GrabPay'],
  },
  eclbet: {
    licence: 'PAGCOR offshore licence',
    welcomeBonus: '120% up to MYR 100 (22× wagering)',
    minDeposit: 'MYR 50',
    withdrawal: 'USDT under 30 min · bank transfer up to 24 h',
    payments: ['FPX', 'DuitNow', 'USDT'],
  },
  bp9: {
    licence: 'PAGCOR licence claimed (BP77 rebrand)',
    welcomeBonus: 'Dual 100% welcome bonuses',
    minDeposit: 'About MYR 90–220 equivalent',
    withdrawal: 'Bank transfer via ATM, CDM or FPX, mostly instant',
    payments: ['FPX', 'ATM/CDM transfer', 'DuitNow'],
  },
  gembet: {
    licence: 'Curaçao licence #365/JAZ',
    welcomeBonus: '250% up to MYR 3,000',
    minDeposit: 'MYR 30',
    withdrawal: 'USDT in about 10 min — the quickest we logged',
    payments: ['FPX', 'DuitNow', 'USDT'],
  },
  b9casino: {
    licence: 'PAGCOR master licence 0SP20-00012-A + Curaçao',
    welcomeBonus: '100% up to MYR 1,000',
    minDeposit: 'MYR 30',
    withdrawal: 'USDT ~15 min · bank transfer same day',
    payments: ['FPX', 'DuitNow', 'USDT'],
  },
  '12play': {
    licence: 'Curaçao offshore licence',
    welcomeBonus: 'Up to MYR 588',
    minDeposit: null,
    withdrawal: 'Advertised at 15 min',
    payments: ['FPX', 'DuitNow', 'USDT'],
  },
  uea8: {
    licence: 'Offshore licence; watchdogs flag limited transparency',
    welcomeBonus: 'Three starter packs (promo code required)',
    minDeposit: 'MYR 30',
    withdrawal: 'USDT cashouts around 15 min',
    payments: ['FPX', 'DuitNow', 'Malaysian bank transfer', 'USDT'],
  },
  uwin33: {
    licence: 'Offshore licence — see review for the operator detail',
    welcomeBonus: '100% up to MYR 688',
    minDeposit: null,
    withdrawal: 'Crypto 10–30 min',
    payments: ['FPX', 'DuitNow', 'Touch ’n Go', 'USDT'],
  },
};
