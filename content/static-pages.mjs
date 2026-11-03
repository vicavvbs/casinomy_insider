/* Rewritten static pages for the casinomyinsider.com relaunch.
   The previous versions carried 81–99% of the text Google already indexed on
   the old domain, and none of them linked anywhere. These replace that copy
   and add internal links. Legal substance in the policy pages is preserved. */

const REVIEWED = 'October 2026';
const NEXT_REVIEW = 'April 2027';

const stamp = `<p class="review-stamp">Last reviewed: ${REVIEWED} · Next scheduled review: ${NEXT_REVIEW}</p>`;

export const STATIC_PAGES = {
  '/about-us/': {
    html: `
<p>CasinoMY Insider is an independent review site covering real-money online casinos available to players in Malaysia. We are not an operator, we do not run games, and we do not take bets. We test the platforms other people are about to hand money to, and we publish what we find.</p>

<h2>Why we exist</h2>
<p>Most casino "reviews" aimed at Malaysian players are rewritten press material. The bonus percentage gets repeated, the licence badge gets copied across, and nobody says what happens when you actually ask for your money back. That gap is the entire reason this site exists. Our scores come from accounts we open ourselves, deposits we fund ourselves and withdrawals we time end to end.</p>
<p>Being useful sometimes means being unflattering. Four of the fourteen brands we currently cover score 5 out of 10, and we explain exactly why rather than quietly leaving them off the list. A ranking where everyone wins tells you nothing.</p>

<h2>What we actually do</h2>
<ul>
  <li><strong>Test with our own money.</strong> Every review starts with a funded account and ends with a completed withdrawal, timed from the moment we hit submit.</li>
  <li><strong>Check licences at source.</strong> We look up the number on the regulator's own register instead of trusting a footer badge. Where a claim does not check out, the review says so.</li>
  <li><strong>Read the terms properly.</strong> Rollover multipliers, game weightings and maximum-cashout caps decide whether a bonus is worth claiming. We do that arithmetic so you do not have to.</li>
  <li><strong>Re-test and re-date.</strong> Bonuses and banking limits change. When they do, the page gets a new date and the change is described rather than silently edited.</li>
</ul>
<p>The full method, including how each scoring category is weighted, is set out in our <a href="/editorial-guidelines/">editorial guidelines</a>, and the evidence behind our ratings is explained in <a href="/why-trust-us/">why trust us</a>.</p>

<h2>Who writes this</h2>
<p>The site is produced by a team of eight writers, analysts and reviewers with backgrounds across the iGaming industry. Nobody publishes their own work unchecked: each review is written by one person and independently verified by a second who repeats the deposit and withdrawal tests. Both names appear on every review. You can see who does what on our <a href="/editorial-team/">editorial team</a> page and read individual profiles via our <a href="/author/">writers index</a>.</p>

<h2>How we make money</h2>
<p>We earn affiliate commission when a reader opens an account through one of our links. That funds the testing — the deposits we lose, the time spent in support queues, the accounts we verify. It does not buy a score. No operator sees a review before publication, no operator can pay to be listed, and we do not sell placements, backlinks or guest posts. If commission ever conflicted with an honest rating, the rating wins, because a review nobody trusts is worth nothing to anyone.</p>

<h2>What we are not</h2>
<p>We are not lawyers and nothing here is legal advice. Online gambling sits in a restricted legal position in Malaysia, and Muslims are prohibited from gambling under Syariah law — we cover that honestly rather than glossing over it. We are also not a support service: if gambling has stopped being entertainment, our <a href="/responsible-gambling/">responsible gambling guide</a> lists free, confidential help.</p>

<h2>Get in touch</h2>
<p>Corrections, questions and partnership enquiries all go through our <a href="/contact-us/">contact page</a>. If you have spotted something out of date in a review, tell us — we publish corrections with a fresh date stamp rather than editing quietly.</p>
${stamp}`,
  },

  '/contact-us/': {
    html: `
<p>Readers, operators and partners are all welcome to get in touch. Corrections matter most to us: if something on this site is wrong or out of date, telling us is the fastest way to get it fixed.</p>

<h2>Editorial corrections</h2>
<p>Spotted an outdated bonus, a broken link, a licence number that no longer checks out or a payout time that does not match your experience? Email <strong>editorial@casinomyinsider.com</strong>. Include the page URL and what you saw, and we will verify it ourselves before changing anything. Confirmed corrections are published with a new "last updated" date rather than edited silently, so the change is visible.</p>

<h2>General questions</h2>
<p>For questions about our reviews, scores or how we rank casinos, email <strong>info@casinomyinsider.com</strong>. We reply within 24 to 48 hours on weekdays. Before you write, our <a href="/editorial-guidelines/">editorial guidelines</a> explain how the scoring works and <a href="/why-trust-us/">why trust us</a> covers the evidence behind each rating — most questions are answered there.</p>

<h2>Operators and partnerships</h2>
<p>For affiliate or business development enquiries, email <strong>partners@casinomyinsider.com</strong>.</p>
<p>Three things are worth saying up front, because they save everyone time:</p>
<ul>
  <li>We do not sell backlinks, guest posts or sponsored placements.</li>
  <li>Commercial terms do not affect a score, a ranking position or whether a review is published at all.</li>
  <li>Operators do not get to preview, approve or veto a review before it goes live.</li>
</ul>
<p>Operators who believe a review contains a factual error should use the editorial address above. We will check the evidence and correct genuine mistakes. We will not remove accurate criticism.</p>

<h2>What we cannot help with</h2>
<p>We are an independent review site, not an operator and not a regulator. We cannot access your casino account, release a pending withdrawal, resolve a bonus dispute or recover a lost balance. Those go to the operator's support team first and, if that fails, to the licensing body named on their site — our individual <a href="/online-casino-review/">casino reviews</a> list which regulator each brand answers to.</p>
<p>If gambling has stopped being fun, free and confidential support is listed on our <a href="/responsible-gambling/">responsible gambling page</a>.</p>
${stamp}`,
  },

  '/why-trust-us/': {
    html: `
<p>Trust in this industry should be earned with evidence, not asserted in a banner. Here is exactly what sits behind every score we publish, and what you should check before believing any casino review — including ours.</p>

<h2>We pay for our own accounts</h2>
<p>Every review begins with a real account funded with our own ringgit, opened with ordinary Malaysian details through an ordinary Malaysian payment method. We do not accept press accounts, pre-loaded balances or VIP handling, because an account the operator knows is being watched does not behave like yours. When verification asks for documents, we send them and time how long the response takes.</p>

<h2>Two people, not one</h2>
<p>One team member writes the review. A second, named on the page alongside the author, independently repeats the critical checks — the licence lookup, the bonus arithmetic and at least one deposit and withdrawal cycle. If the two disagree, the review does not publish until the discrepancy is resolved. Both names and roles are listed on our <a href="/editorial-team/">editorial team</a> page.</p>

<h2>We time the whole payout, not the convenient part</h2>
<p>"Instant withdrawal" usually describes the moment an operator approves a request, not the moment money reaches you. We record both: the timestamp we hit submit and the timestamp funds actually land, repeated across different days because weekend and public-holiday behaviour is where sites quietly differ. Each review separates the two explicitly: a measured test log, and the operator's advertised figures alongside it. Where a test is still outstanding, the review says so rather than quoting the operator's number as though it were ours.</p>

<h2>We verify licences at the register</h2>
<p>A licence badge in a footer is an image, not a credential. We look the number up on the regulator's own register. Where a claim cannot be confirmed, we say so plainly and the score reflects it — that is precisely why Winbox sits at 7 out of 10 despite genuinely fast payouts, and why MB8's unverifiable claim costs it points.</p>

<h2>We publish the bad news</h2>
<p>Four of the fourteen casinos we currently cover score 5 out of 10. We still publish them in full, because knowing why a site ranks poorly is more useful than not finding it at all. Unresolved withdrawal complaints, thin corporate disclosure and licence claims we could not match to evidence all appear in the reviews rather than being edited out.</p>

<h2>We tell you how we are paid</h2>
<p>We earn affiliate commission when readers open accounts through our links, and we say so on every page carrying one. Commission rates play no part in ranking order. No operator previews a review, pays for placement or buys a score. Our <a href="/about-us/">about page</a> sets out the funding model in full.</p>

<h2>We date everything and correct in public</h2>
<p>Every review carries a visible last-updated date and the names of both people involved. When bonus terms, banking limits or licensing change, we re-test and re-date rather than quietly amending the text. Corrections sent in by readers are verified and published the same way — the <a href="/contact-us/">contact page</a> explains how to report one.</p>

<h2>What we do not claim</h2>
<p>We cannot make an offshore casino safe, and we do not pretend otherwise. No site we cover holds a Malaysian licence, because none is issued for online casino play. We are not lawyers, nothing here is legal advice, and no bonus or strategy can guarantee a win. Our <a href="/responsible-gambling/">responsible gambling guide</a> covers the risks honestly, and the method behind the numbers is in our <a href="/editorial-guidelines/">editorial guidelines</a>.</p>
${stamp}`,
  },
  '/editorial-guidelines/': {
    html: `
<p>These guidelines describe how a casino gets a score on this site, who decides it and what would make us change it. They apply to every review we publish, and we expect readers to hold us to them.</p>

<h2>The six-step review protocol</h2>
<ol>
  <li><strong>Register as an ordinary player.</strong> Malaysian details, a Malaysian payment method, no press account and no operator contact. If the site asks for verification documents, we submit them and time the response.</li>
  <li><strong>Fund the account with our own money.</strong> Typically MYR 100–300, through whichever rails the cashier offers — FPX, DuitNow, an e-wallet or USDT. Every fee, failed attempt and rejected card is recorded.</li>
  <li><strong>Verify the licence at the register.</strong> We look up the stated number with the named regulator rather than trusting a footer image. Unverifiable claims are reported as unverifiable and cost the brand points.</li>
  <li><strong>Play the bonus through.</strong> We calculate the true turnover requirement, identify which games are excluded or weighted down, and check whether a maximum-cashout clause caps what the offer can ever return.</li>
  <li><strong>Withdraw and time it end to end.</strong> The clock starts when we submit the request and stops when funds arrive, repeated on different days of the week so weekend and holiday behaviour is captured.</li>
  <li><strong>Test support under pressure.</strong> One straightforward question and one awkward one about bonus terms. We log the wait, the language handling and whether the answer matched the written terms.</li>
</ol>

<h2>How the score is weighted</h2>
<p>Every brand is marked out of ten in six categories. The weighting reflects what costs players real money when it goes wrong, which is why licensing and payouts outrank game count:</p>
<div class="table-scroll"><table>
<thead><tr><th scope="col">Category</th><th scope="col">Weight</th><th scope="col">What moves the number</th></tr></thead>
<tbody>
<tr><th scope="row">Licensing &amp; security</th><td>25%</td><td>Verifiable licence number, named operating company, encryption, independent RNG audits</td></tr>
<tr><th scope="row">Banking &amp; payout speed</th><td>25%</td><td>Measured withdrawal times, method coverage, fees, minimum thresholds, pending periods</td></tr>
<tr><th scope="row">Bonus fairness</th><td>20%</td><td>Rollover multiplier, game weighting, maximum cashout caps, clarity of the written terms</td></tr>
<tr><th scope="row">Game range &amp; providers</th><td>15%</td><td>Studio quality, published RTP figures, depth across slots, live tables and sportsbook</td></tr>
<tr><th scope="row">Mobile experience</th><td>8%</td><td>App stability, stream quality on mobile data, cashier usability on a phone</td></tr>
<tr><th scope="row">Customer support</th><td>7%</td><td>Response time, accuracy against the terms, availability and language handling</td></tr>
</tbody>
</table></div>
<p>A large bonus never rescues a weak payout record. A site that pays reliably and documents its licence will always outrank one offering a bigger headline percentage it makes hard to claim.</p>

<h2>What disqualifies a brand</h2>
<p>We will not recommend a casino that refuses a verified withdrawal without a term to point to, publishes a licence number that does not exist on the regulator's register, alters bonus terms retroactively, or has unresolved payout complaints we can substantiate. Such brands still get reviewed — they simply score accordingly, and the reasons appear in the text.</p>

<h2>Independence and funding</h2>
<p>We earn affiliate commission through links on this site. Commission rates are not a scoring input, operators cannot buy placement, and no brand sees a review before publication. We do not sell backlinks, guest posts or ranking positions. The funding model is set out in full on our <a href="/about-us/">about page</a>.</p>

<h2>Authorship and verification</h2>
<p>Every review names the writer and a second team member who independently re-ran the licence lookup, the bonus arithmetic and at least one withdrawal cycle. Where the two disagree, publication waits. Roles and specialisms are listed on our <a href="/editorial-team/">editorial team</a> page.</p>

<h2>Updates and corrections</h2>
<p>Reviews are re-tested when bonus terms, banking options or licensing change, and at least twice a year regardless. Each carries a visible last-updated date. Readers who spot an error can report it through our <a href="/contact-us/">contact page</a>; we verify every report ourselves and publish confirmed corrections with a fresh date rather than editing quietly. The evidence standards behind all of this are described in <a href="/why-trust-us/">why trust us</a>.</p>
${stamp}`,
  },

  '/responsible-gambling/': {
    html: `
<p>Every casino we review is designed to retain more money than it pays out over time. That is the business model, not a flaw in your play, and no system, bonus or strategy changes it. This page is about keeping gambling as entertainment — and recognising when it has stopped being that.</p>

<h2>Set limits before you play, not after</h2>
<p>Decide what a session costs you the way you would decide a restaurant budget, and fix the number before you open the cashier. Deposit caps and loss limits are far easier to set on a calm evening than halfway through a losing run, which is exactly when they matter most. Most of the platforms we review offer deposit caps, loss limits, session reminders, cooling-off periods and self-exclusion in the account settings. Use them early.</p>
<ul>
  <li>Never gamble with money needed for rent, bills, food or debt repayment.</li>
  <li>Never borrow to gamble, including credit cards, payday lenders or money from family.</li>
  <li>Never increase stakes to recover a loss — chasing is the single most expensive habit in gambling.</li>
  <li>Treat any win as a good evening, not as income or a strategy that works.</li>
  <li>Take real breaks. Long unbroken sessions are where limits get abandoned.</li>
</ul>

<h2>Warning signs worth taking seriously</h2>
<p>Problem gambling rarely announces itself. These are the patterns that tend to show up first:</p>
<ul>
  <li>Playing longer or depositing more than you planned, repeatedly.</li>
  <li>Hiding how much you play, or lying about it to people close to you.</li>
  <li>Gambling to escape stress, boredom, loneliness or low mood rather than for enjoyment.</li>
  <li>Borrowing, selling possessions or moving money around to fund play.</li>
  <li>Feeling restless or irritable when you try to cut down.</li>
  <li>Returning the same day to win back what you lost.</li>
</ul>
<p>If several of these sound familiar, that is a reason to stop and talk to someone, not a reason to try harder.</p>

<h2>Where to get help in Malaysia</h2>
<p>Support is free, confidential and available whether or not you are ready to stop:</p>
<ul>
  <li><a href="https://www.solaceasia.org/our-center/problem-gambling-rehab" target="_blank" rel="noopener">Solace Asia</a> — Malaysia-based addiction treatment including problem gambling programmes.</li>
  <li><a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener">Gambling Therapy</a> — free multilingual online support, available internationally.</li>
  <li><a href="https://www.gamblersanonymous.org/" target="_blank" rel="noopener">Gamblers Anonymous</a> — peer support groups and self-assessment questions.</li>
  <li><a href="https://www.begambleaware.org/" target="_blank" rel="noopener">GambleAware</a> — practical guidance for players and for family members.</li>
</ul>
<p>If someone close to you is affected, the same services support families. You do not need the person gambling to agree before you seek advice.</p>

<h2>Self-exclusion and blocking</h2>
<p>Self-exclusion at account level is the strongest tool an operator offers, but it only covers that one site. If you want a harder barrier, blocking software applied at device or network level covers gambling sites generally, and most Malaysian banks will let you flag or restrict gambling-related transactions on request. Combining the two is far more effective than relying on willpower alone.</p>

<h2>Age restriction and the legal position</h2>
<p>Online gambling is strictly for adults aged 18 and over. Nothing on CasinoMY Insider is directed at anyone younger, and we do not use imagery, language or offers aimed at minors.</p>
<p>Gambling is also prohibited for Muslims in Malaysia under Syariah law, and state enactments apply regardless of where a website is hosted. More broadly, the Betting Act 1953 and the Common Gaming Houses Act 1953 restrict gambling in Malaysia, and a 2023 Court of Appeal ruling confirmed online play falls within scope. None of the sites we review holds a Malaysian licence, so you have no local regulator to escalate a dispute to. We set that out in full on our <a href="/about-us/">about page</a> and in each <a href="/online-casino-review/">casino review</a>.</p>

<h2>No guarantees, ever</h2>
<p>We do not publish winning systems, guaranteed strategies or "sure things", and we treat any site that does as a warning sign. Every game carries a house edge. Our <a href="/editorial-guidelines/">editorial guidelines</a> explain how we weigh responsible gambling tools when scoring a brand.</p>
${stamp}`,
  },

  '/privacy-policy/': {
    html: `
<p>This policy explains what CasinoMY Insider collects when you visit this website, why we collect it, and what rights you have over it. By using the site you accept the practices described here. We handle personal data in line with Malaysia's Personal Data Protection Act 2010 (PDPA).</p>

<h2>1. What we collect</h2>
<p>We collect two kinds of information:</p>
<ul>
  <li><strong>Technical data gathered automatically</strong> — browser type and version, device type, approximate location derived from IP address, referring source, and the pages you view. This is used in aggregate for analytics and traffic monitoring.</li>
  <li><strong>Information you choose to give us</strong> — your name, email address and message content when you contact us about a correction, question or partnership enquiry.</li>
</ul>
<p>We do not collect or store payment card details, banking credentials, casino account passwords or any other financial data. We never ask for them, and no page on this site requests them. Any message claiming to be from us and asking for such details is not from us.</p>

<h2>2. Why we use it</h2>
<p>We use data only to reply to enquiries and corrections, to understand which pages are read so we know what to update, to keep the site working and secure, and to meet legal obligations. We do not build advertising profiles, and we do not sell, rent or trade personal information to anyone.</p>

<h2>3. Cookies and analytics</h2>
<p>The site uses cookies to remember display preferences and to measure traffic through Google Analytics, which records visits in aggregate. You can block or delete cookies in your browser settings; some conveniences may stop working, but the content remains fully readable. We also embed a Trustpilot widget, which may set its own cookies under Trustpilot's policy.</p>

<h2>4. Links to casino operators</h2>
<p>This site links out to third-party online casinos. Once you follow one of those links you are on their platform and subject to their privacy policy and data practices, not ours. We have no control over and accept no responsibility for what they collect. Read their policies before registering or submitting identity documents to them.</p>

<h2>5. Affiliate disclosure</h2>
<p>Some outbound links are affiliate links, meaning we may receive a commission if you open an account through them. The operator may record that the referral came from us. Commission has no bearing on our ratings, rankings or whether a review is published — see our <a href="/editorial-guidelines/">editorial guidelines</a> for how scoring actually works.</p>

<h2>6. Storage, retention and security</h2>
<p>We apply reasonable technical and organisational measures to protect the limited data we hold against loss, misuse and unauthorised access, and access is restricted to team members who need it. Correspondence is retained only as long as needed to handle the matter and keep a record of published corrections. No transmission over the internet can be guaranteed completely secure.</p>

<h2>7. Your rights</h2>
<p>Under the PDPA and other applicable law you may request access to the personal data we hold about you, ask for it to be corrected or deleted, withdraw consent where processing relies on it, limit how it is used, or complain to a data protection authority. Email <strong>info@casinomyinsider.com</strong> and we will respond within 30 days. We may ask you to confirm your identity before acting on a request.</p>

<h2>8. Children</h2>
<p>This site is intended for adults aged 18 and over. We do not knowingly collect data from anyone under 18. If you believe a minor has sent us personal information, contact us and we will delete it.</p>

<h2>9. Changes to this policy</h2>
<p>We may update this policy as the site or the law changes. Revisions are posted here with a new review date. Questions about anything above can go through our <a href="/contact-us/">contact page</a>.</p>
${stamp}`,
  },
};
