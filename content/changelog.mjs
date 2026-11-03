/* Ranking changelog shown on the homepage. Newest first.
   Each entry says what changed and why, so readers can see the rankings move. */

export const CHANGELOG = [
  {
    month: 'November 2026',
    summary: 'All fourteen reviews rewritten from scratch, and a measured-payout testing protocol introduced.',
    items: [
      'Every review was rewritten end to end. The previous text had been carried over from an older version of this site and no longer reflected how we assess operators.',
      'Added a published deposit-and-withdrawal test log to each review. Where we have not yet completed a timed test, the figure is marked as outstanding rather than filled with an operator claim — advertised speeds and measured speeds are now kept strictly separate.',
      'Every welcome bonus now carries a worked example in ringgit showing the turnover required and its expected cost at 96% RTP, instead of quoting the headline percentage.',
      'Each review now lists at least three specific weaknesses. A rating with no criticism attached is not a rating.',
    ],
  },
  {
    month: 'October 2026',
    summary: 'Licence verification pass across all brands; three operators marked down.',
    items: [
      'Winbox held at 7/10. Its PAGCOR seal is credible, but the Curaçao #365/JAZ reference shown alongside it could not be confirmed for this operator on the register.',
      'MB8 held at 6/10. The advertised Malta Gaming Authority licence could not be found on the MGA public register; PAGCOR oversight does verify.',
      'Uwin33 held at 5/10. The site describes regulation by "leading organisations" without naming a regulator or publishing a number, leaving nothing to verify.',
      'B9Casino credited for publishing PAGCOR master licence 0SP20-00012-A — a specific, checkable number — but kept at 5/10 because the operating company behind it remains unidentified.',
    ],
  },
  {
    month: 'September 2026',
    summary: 'Scoring weights rebalanced toward licensing and payouts.',
    items: [
      'Licensing and banking now carry 25% each, ahead of game range at 15%. A large catalogue does not compensate for an unverifiable licence or a slow withdrawal.',
      'BK8 retained the top position at 9/10 on the strength of its dual Curaçao and UKGC white-label arrangement.',
      'GemBet moved up on payout speed but remains at 6/10 — its slot library is materially thinner than the leading brands.',
    ],
  },
];
