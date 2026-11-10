// Free reference guide beside the BoardMemo companion page.
// Facts checked 10 November 2026 against the sources listed at the bottom; research log in
// review/app-guides-20261110/boardmemo-sources.md. Worked-example figures are fictional.

export default {
	slug: 'boardmemo',
	nav: 'Writing guide',
	title: 'How to write a board paper or board memo: structure and template',
	description:
		'How to write a board paper: the one-page executive summary, the explicit ask, structure section by section, options, risks, financials and a checklist.',
	ogTitle: 'How to write a board paper that gets a decision',
	ogDescription:
		'Structure and section lengths, the ask (decide, approve, note, discuss), options, risks and financials, what boards complain about, a checklist and a worked example.',
	eyebrow: 'Free reference',
	h1: 'How to write a board paper (or board memo) that gets a decision',
	lede: `A board paper has one job: to get a decision, or an informed view, from people who do not run the business and have a few hours to read the whole pack. This guide sets out the <strong>structure the governance bodies recommend</strong>, how long each section should be, how to frame the ask, and what boards complain about most, with a checklist and a worked example.`,
	updated: '2026-11-10',
	checkedNote:
		'Checked against the Chartered Governance Institute UK & Ireland, the Financial Reporting Council, the Governance Institute of Australia, the Australian Institute of Company Directors and the Institutes of Directors in Ireland and New Zealand on 10 November 2026.',
	sections: [
		{
			id: 'structure-at-a-glance',
			h2: 'Board paper structure at a glance',
			html: `<p>The bodies that publish board paper templates, the Chartered Governance Institute UK &amp; Ireland (CGI), the Governance Institute of Australia (GIA), the Australian Institute of Company Directors (AICD) and the Institute of Directors in Ireland (IoD Ireland), converge on almost the same spine. They differ on lengths, so the right-hand column gives the range their templates set, or my own working figure where they say nothing.</p>
<div class="tbl"><table><thead><tr><th>Section</th><th>What it is for</th><th>Typical length</th></tr></thead><tbody>
<tr><td><strong>Header block</strong></td><td>Agenda item, paper type, sponsor, author, date. Tells the director what this is and who owns it.</td><td>A few lines</td></tr>
<tr><td><strong>Proposed resolution</strong></td><td>The exact words the board is asked to adopt, written to stand alone in the minutes.</td><td>As short as precision allows</td></tr>
<tr><td><strong>Purpose and context</strong></td><td>Why this is at the board, why now, and what the board must do.</td><td>Five to ten lines at most (GIA)</td></tr>
<tr><td><strong>Executive summary</strong></td><td>Key messages, the questions the paper answers with their answers, the recommendation and the ask.</td><td>Four to five lines (IoD Ireland, AICD) up to one page (CGI)</td></tr>
<tr><td><strong>Background</strong></td><td>What the board has seen before and needs to know to follow the argument.</td><td>About 12 lines (IoD Ireland) to one page (AICD)</td></tr>
<tr><td><strong>Options considered</strong></td><td>The realistic alternatives, including doing nothing, compared on the same criteria.</td><td>Half a page, or one table</td></tr>
<tr><td><strong>Recommendation</strong></td><td>The preferred option, the reasons, the outcomes it should deliver.</td><td>12 lines (IoD Ireland) to one page (AICD)</td></tr>
<tr><td><strong>Strategic alignment</strong></td><td>Which agreed objective the proposal serves, and how.</td><td>10 lines (IoD Ireland) to half a page (AICD)</td></tr>
<tr><td><strong>Financial implications</strong></td><td>Cost, timing, cash flow, budgeted or not, and the assumptions behind the number.</td><td>12 lines (IoD Ireland) to half a page (AICD); detail in an appendix</td></tr>
<tr><td><strong>Risks and mitigations</strong></td><td>Principal risks of the proposal and of not doing it, with treatment and owner.</td><td>12 lines (IoD Ireland) to half a page (AICD); best as a table</td></tr>
<tr><td><strong>Governance, compliance, stakeholders</strong></td><td>Legal and regulatory implications, effect on the people involved, and how the board will be kept informed.</td><td>About 12 lines (IoD Ireland)</td></tr>
<tr><td><strong>Accountability and next steps</strong></td><td>Who delivers, who oversees, what happens after the decision and by when.</td><td>A few lines</td></tr>
<tr><td><strong>Appendices</strong></td><td>Evidence for directors who want to test the argument. Never a repeat of the body.</td><td>Only what the argument needs</td></tr>
<tr><td><strong>The whole paper</strong></td><td>One subject, one ask.</td><td>GIA suggests a limit of two, three or four pages for routine papers, with exemptions for major capital spend, acquisitions, strategy and financial reporting</td></tr>
</tbody></table></div>
<div class="callout"><p><strong>The first-page test.</strong> A director who reads only page one should know what you are asking for, what you recommend and why. The GIA's sample paper says so in terms: purpose, recommendation and executive summary belong on the first page. If a paper fails that test, no polish further down will save it.</p></div>`,
		},
		{
			id: 'what-a-board-paper-is-for',
			h2: 'What a board paper is for, and how it differs from a management report',
			html: `<p>Board papers are the main channel through which directors get what they need to take decisions and to oversee management. That makes a board paper a governance instrument, not a status report. In the UK, the Corporate Governance Code makes the chair responsible for ensuring directors receive accurate, timely and clear information, and the Financial Reporting Council's guidance on the Code says board papers should be accurate, clear, comprehensive and up to date, contain a summary, tell each director what is expected of them, and arrive far enough ahead of the meeting to be read properly. Those four tests are a fair definition of a good paper in any jurisdiction.</p>
<p>I spent eight years as a CTO and five as a Chief Commercial Officer writing papers for boards, and have read many more in executive committees and steering groups since. A handful of habits separates the papers that get decided from the ones that get deferred.</p>
<h3>Board paper, board memo, cover paper: one instrument</h3>
<p>UK and Australian organisations mostly say board paper; many companies say board memo, often for shorter notes, including those sent between meetings; public bodies talk about cover papers or submissions. The discipline does not change with the name: one subject, one clear ask, written for people who are not in the business every day.</p>
<h3>Who you are writing for</h3>
<p>Directors set direction and hold management to account. They are not there to run the operation. Non-executives may attend only a handful of meetings a year, often sit on other boards with their own vocabulary, and arrive with limited knowledge of your subject. The GIA names the commonest failure precisely: papers written for management rather than for the board, which hand directors too much detail and too little of the information a decision actually needs.</p>
<p>In my experience the giveaway is a paper that answers the questions the author finds interesting. A CTO wants to explain the architecture. The board wants to know what it costs, what it buys, what could go wrong and what happens if it says no. Write for the second set of questions, and put the first in an appendix if it belongs anywhere at all.</p>
<h3>Write as if a regulator will read it</h3>
<p>Board papers are part of the organisation's record, and the GIA reminds authors that regulators and courts may examine them later. Hence the advice to write in a formal, factual style, with fact and opinion clearly distinguished. That is not a licence to be bland. It is a reason to be precise: say what you know, what you believe and why, and what you do not yet know.</p>`,
		},
		{
			id: 'the-ask',
			h2: 'The ask: for decision, approval, noting or discussion',
			html: `<p>State the paper type at the top, before any argument, and make the purpose line match it. The bodies use slightly different labels. The AICD sample offers for decision, for discussion and for noting; IoD Ireland's template asks whether the paper is for decision, approval or information; the GIA adds for recommendation (used when a committee is advising the board) and for ratification. The CGI puts it most plainly: the paper must say whether the board is to note the information, approve or decide, or give input.</p>
<div class="tbl"><table><thead><tr><th>Paper type</th><th>What the board does</th><th>What the paper must contain</th><th>What the minutes record</th></tr></thead><tbody>
<tr><td><strong>For decision or approval</strong></td><td>Adopts the proposed resolution, amends it, defers it or rejects it</td><td>The exact resolution, the options considered, the recommendation, cost, risks and who will act</td><td>The resolution as passed</td></tr>
<tr><td><strong>For discussion or input</strong></td><td>Gives a view that shapes work not yet ready for decision</td><td>The specific questions you want answered, the options as they stand, and when it will come back</td><td>The board's guidance and any follow-up</td></tr>
<tr><td><strong>For noting or information</strong></td><td>Acknowledges that it has received and understood the information</td><td>Why the board needs to know, what has changed since it last saw the subject, and what would trigger a decision</td><td>That the paper was noted</td></tr>
<tr><td><strong>For ratification</strong></td><td>Confirms an action already taken under urgent or delegated authority</td><td>What was done, under which authority, and why it could not wait for a meeting</td><td>The ratification</td></tr>
</tbody></table></div>
<h3>Write the resolution you want minuted</h3>
<p>Where you want a decision, give the exact wording of the proposed resolution. If the board passes it unamended, that is what goes into the minutes, so it must make sense without the paper beside it. Be precise about amount, scope and authority, and where someone has to act, include the delegation: who may sign, and up to what limit. The GIA recommends both, with the company secretary checking every proposed resolution. The AICD's test is a good one: write it so the board can approve it without amendment.</p>
<div class="callout"><p><strong>Example resolution.</strong> That the Board (a) approves capital expenditure of up to €4.2 million to replace the warehouse management system, as set out in paper 7; and (b) authorises the Chief Operating Officer to sign the supplier contract and statement of work within that limit.</p></div>
<h3>Stop hiding decisions behind "for noting"</h3>
<p>For noting is the most abused label in the pack. Sometimes the paper needs no action at all and is there because it always has been; ask whether a dashboard or a reading-room section would do. Worse is a real decision dressed as an update so that it slides through. Among the factors the FRC's guidance lists as distorting board decisions is a tendency to bring matters to the board for sign-off rather than for debate. If you want the board's view, label the paper for discussion and write down the questions you want answered. The CGI suggests a section headed something like "Input sought" or "Questions to the reader" for exactly this purpose.</p>`,
		},
		{
			id: 'executive-summary',
			h2: 'The one-page executive summary',
			html: `<p>If the board reads one section properly, it is this one. The CGI's 2026 guidance on board reporting gives the clearest recipe I know, and it works best followed in order:</p>
<ol>
<li><strong>Why it matters.</strong> Tie the paper to something the board already cares about: the strategy, a target, a known risk.</li>
<li><strong>Why now.</strong> Is there a trigger (a deadline, a failure, an offer that expires), or is this a scheduled item?</li>
<li><strong>The questions the paper answers.</strong> Three to five of them, with no overlap and nothing important missing.</li>
<li><strong>The answer under each question.</strong> Directly beneath it, in a sentence or two. A board paper is not a detective story.</li>
<li><strong>What the board must do.</strong> Note, decide, approve or give input, matching the label at the top.</li>
</ol>
<p>The CGI's ceiling is one page. Other templates are tighter: the AICD sample allows a paragraph of four or five lines, IoD Ireland no more than four lines, the GIA two or three paragraphs. The short versions are really a purpose statement; the CGI's is a summary of the argument. Use both: a few lines that state the ask, then no more than a page that carries the reasoning. Whatever else you cut, never cut the first.</p>
<h3>Answer first</h3>
<p>Compare two openings for the same paper.</p>
<ul>
<li><em>Weak:</em> This paper provides background on the warehouse management system and summarises the work the project team has done since March.</li>
<li><em>Strong:</em> We ask the Board to approve up to €4.2 million to replace the warehouse management system. Vendor support for the current system ends in 21 months, and outages on it disrupted dispatch on 11 days last year.</li>
</ul>
<p>The first tells the director what the paper is about. The second tells them what to do and why, and every later section can be read as evidence for or against it.</p>
<h3>Headings that ask the board's questions</h3>
<p>The CGI makes a point I wish I had learned earlier: generic headings such as Background and Recommendations can be filled with anything, while headings phrased as the board's questions (what do we propose to do and why? what happens if we do nothing? what could go wrong?) force the author to answer them. They also let a director spot a missing question at a glance. Write the summary last, once the body has settled, and read it first when you review.</p>`,
		},
		{
			id: 'section-by-section',
			h2: 'Recommended board paper structure, section by section',
			html: `<p>A template for a decision paper, assembled from the published templates and trimmed by experience; update papers are covered at the end. Mark a section that does not apply as not applicable rather than deleting it, so the reader knows you considered it.</p>
<h3>1. Header block</h3>
<p>Organisation, forum (the board, or which committee), meeting date, agenda item number, a title that matches the agenda, the paper type, the executive sponsor, the author and the date the paper was finalised. The date matters more than it looks: it tells directors how current the numbers are.</p>
<h3>2. Proposed resolution, purpose and context</h3>
<p>The exact wording of the resolution (or a statement that the paper is for noting or discussion), then what the paper is for and why it is at the board at all: a legal or charter requirement, a matter reserved to the board, prior consideration by a committee. The GIA caps the purpose at five to ten lines.</p>
<h3>3. Executive summary</h3>
<p>The key messages, the questions and answers, the recommendation and the ask, in no more than a page.</p>
<h3>4. Background</h3>
<p>Only what a non-executive needs to follow the argument, plus a reference to any previous board paper on the subject with its date. Name any external advice that informed the paper; the AICD and IoD Ireland both ask for this. If it runs past a page, summarise here and move the rest to an appendix.</p>
<h3>5. Options and recommendation</h3>
<p>The realistic alternatives compared on the same criteria, then the preferred option, the reasons and the outcomes it should deliver. The AICD sample asks that the recommendation explain why the board should accept it without repeating earlier sections. Both are covered in depth below.</p>
<h3>6. Strategic alignment</h3>
<p>How the proposal serves the agreed strategy or business plan. A sentence saying it "supports our strategy" without naming the objective is filler.</p>
<h3>7. Financial implications and risks</h3>
<p>Cost, timing, cash flow, budget status and the assumptions behind the numbers; then the principal risks of the proposal, and of not doing it, each with its treatment and owner. The business case goes in an appendix.</p>
<h3>8. Governance, compliance and stakeholders</h3>
<p>Legal and regulatory implications, the effect on employees, customers, suppliers and communities where it is material, and how the board will be kept informed during and after implementation. The AICD sample adds environmental, social and economic impact for proposals where those matter.</p>
<h3>9. Accountability and next steps</h3>
<p>The executive accountable for delivery, any director with oversight, what happens after the board decides, who does it and by when.</p>
<h3>10. Sign-off and appendices</h3>
<p>The AICD and IoD Ireland templates both close with sign-off by the chief executive and the sponsor and a list of contributors, so the board knows who stands behind the paper. Appendices hold evidence for directors who want to test the argument, not material you would rather not discuss. The GIA is explicit that an attachment is still part of the paper and directors are expected to read it, so moving bulk to the back does not make the paper shorter.</p>
<h3>When the paper is an update rather than a decision</h3>
<p>A progress report needs a different shape: the purpose, a one-sentence headline on whether things are on track, progress against the plan with numbers, risks and issues, the outlook, and any support needed from the board. If an update uncovers a decision, take the decision out into its own paper rather than burying it on page three.</p>
<h3>One paper, several forums</h3>
<p>If the same material goes to a committee and then to the board, the CGI suggests a paper whose front section stands alone for the board and whose back section can be detached for committee use. It beats maintaining several versions of one paper.</p>
<p>The free <a href="/boardmemo/app/">memo builder</a> on this site uses compressed versions of these spines: its Decision brief runs Purpose, Background, Options Considered, Recommendation, Risks and Mitigations, The Ask, and its Board update runs Purpose, Headline, Progress, Risks and Issues, Outlook, Support Needed. Because The Ask closes the Decision brief, put a one-line version of it in the Purpose as well, so the first lines carry it.</p>`,
		},
		{
			id: 'options-and-recommendation',
			h2: 'Options and a recommendation the board can test',
			html: `<p>A paper that offers one course of action asks the board to approve rather than to decide, and directors notice. In a 2026 AICD article on reading board packs, an experienced director named two warning signs: a problem presented with no options for solving it, and a paper that only lets the board say yes or veto. The GIA asks for the advantages, disadvantages and material risks, financial and non-financial, of each alternative, and for the judgements behind the recommendation. The FRC's guidance suggests that papers on significant decisions describe how the proposal was developed and challenged before it reached the board.</p>
<h3>Three real options, one of them doing nothing</h3>
<p>My rule is three genuine options, one of which is to do nothing or defer, each judged on the same four or five criteria: cost, time, benefit, risk and fit with strategy. A straw man is worse than no option at all, because a board that spots one stops trusting the others. If there truly is only one credible route, say so, and say why the alternatives fell away.</p>
<div class="tbl"><table><thead><tr><th>Option</th><th>One-off cost</th><th>Time to go-live</th><th>Main risk</th><th>Assessment</th></tr></thead><tbody>
<tr><td><strong>A. Defer:</strong> two years of premium extended support, then replace</td><td>€0.9m, then the replacement cost on top</td><td>None now</td><td>Outages continue; vendor may still withdraw</td><td>Buys time at a price; solves nothing</td></tr>
<tr><td><strong>B. Replace with a cloud system</strong> (recommended)</td><td>€4.2m</td><td>14 months</td><td>Cut-over disrupting dispatch</td><td>Live with a seven-month margin; covers all required functions</td></tr>
<tr><td><strong>C. Extend the ERP's own warehouse module</strong></td><td>€3.1m</td><td>20 months</td><td>No cross-docking support; almost no margin</td><td>Cheaper, but too slow and a weaker fit</td></tr>
</tbody></table></div>
<p>The figures are illustrative; they belong to the worked example at the end of this page.</p>
<h3>What a good recommendation contains</h3>
<ul>
<li>Which option, in the first sentence.</li>
<li>The two or three reasons that carried it, tied to the criteria.</li>
<li>What you would have to believe for it to be wrong, and what would change your mind.</li>
<li>How confident you are, and where that confidence comes from. The CGI asks authors to show this explicitly.</li>
<li>The key judgements you made, kept visibly separate from the facts.</li>
</ul>
<p>The third point is the one that earns trust. A board that can see the load-bearing assumption can test it in two minutes instead of circling it for twenty.</p>`,
		},
		{
			id: 'risks-and-financials',
			h2: 'Risks and financials: the sections boards read twice',
			html: `<h3>Risks</h3>
<p>The risk section is about this proposal, not a copy of the corporate risk register. The GIA, the AICD and IoD Ireland all suggest a simple table: the risk, its likelihood, its impact and how it will be managed. The AICD version records the risk level before and after treatment, which is worth doing for anything material, because it shows what the mitigation actually buys.</p>
<div class="tbl"><table><thead><tr><th>Risk</th><th>Likelihood</th><th>Impact</th><th>Mitigation</th><th>Owner</th></tr></thead><tbody>
<tr><td>Cut-over disrupts dispatch</td><td>Medium</td><td>High</td><td>Go-live outside peak season; two-week parallel run</td><td>COO</td></tr>
<tr><td>Carrier integration slips</td><td>Medium</td><td>Medium</td><td>Carrier interfaces built and tested in phase one; fixed-price clause</td><td>CIO</td></tr>
<tr><td>Benefits not realised</td><td>Low</td><td>High</td><td>Baseline measures agreed now; post-implementation review to the board at 12 months</td><td>CFO</td></tr>
</tbody></table></div>
<p>Two habits make this section credible. Include the risk of not acting, often the largest. And give bad news its proper weight: the CGI warns against the temptation to hide it, and directors who find it later will reread everything else with suspicion.</p>
<h3>Financials</h3>
<p>Keep the body short and the numbers complete. State the cost, the timing of spend, the cash-flow effect and whether it is in the budget; IoD Ireland and the AICD both ask for the budgeted-or-unbudgeted question to be answered explicitly for significant spend. The GIA adds key assumptions and sensitivity analysis where the subject calls for them. Put the full business case in an appendix and summarise it in a few lines.</p>
<p>My test for a financial section: one number, one range, and the assumption that moves it most. "€4.2 million, between €3.9 and €4.8 million depending mainly on data migration effort" tells the board exactly where to probe. Then check that the figure is identical in the summary, the body and the appendix. Numbers that do not stack up are among the first things experienced directors look for, and a single inconsistency costs the whole paper its credibility.</p>`,
		},
		{
			id: 'what-boards-complain-about',
			h2: 'What boards complain about, and the fix',
			html: `<p>The CGI and Board Intelligence have researched board reporting since 2018, gathering data from 1,857 individuals and 1,676 organisations. Their 2026 report makes uncomfortable reading for anyone who writes papers: 63% of respondents are not confident the pack has been fully read and digested, and 42% say the materials actively limit board effectiveness. The FRC, for its part, lists poor quality papers, inadequate information or analysis, and insufficient notice among the factors that lead boards to poor decisions. The complaints are remarkably consistent.</p>
<div class="tbl"><table><thead><tr><th>Complaint</th><th>What the evidence says</th><th>The fix</th></tr></thead><tbody>
<tr><td><strong>Too long</strong></td><td>The average pack ran to 220 pages in 2025, up 27% since 2019. The CGI reckons that takes 7 to 20 hours to read properly; directors reportedly spend about four.</td><td>Page limits for routine papers, the first-page test, and appendices that do not repeat the body.</td></tr>
<tr><td><strong>The point is buried</strong></td><td>54% say the key messages are buried; 47% say packs are light on the implications of what they report (CGI).</td><td>Answer first. Say what the information means, not only what it is.</td></tr>
<tr><td><strong>No clear ask</strong></td><td>Experienced directors treat it as a red flag (AICD). The FRC's guidance says papers should tell directors what is expected of them.</td><td>Paper type at the top, a purpose line, and the exact resolution.</td></tr>
<tr><td><strong>No options</strong></td><td>A problem with no options, or a yes-or-veto choice, worries directors (AICD).</td><td>Three real options, one of them doing nothing.</td></tr>
<tr><td><strong>Too operational</strong></td><td>60% of organisations say their papers are too operational at the expense of strategy (CGI).</td><td>Template headings that start with the decision, not the background.</td></tr>
<tr><td><strong>Jargon and acronyms</strong></td><td>Plain English, few acronyms and a glossary where needed (GIA); directors may sit on several boards, each with its own jargon (CGI).</td><td>Write for a director who has never worked in your function.</td></tr>
<tr><td><strong>Opinion without evidence</strong></td><td>Unsubstantiated claims send directors digging into things that should have been settled (AICD).</td><td>Link each claim to data or a source, and separate fact from judgement.</td></tr>
<tr><td><strong>Late papers</strong></td><td>Only 48% of organisations always get papers five working days ahead; 17% rarely or never do (CGI).</td><td>Work back from the distribution date, and make a late paper an exception the chair agrees to.</td></tr>
</tbody></table></div>
<p>On timing, the guidance agrees. The GIA describes distribution about a week before the meeting as common practice; the CGI says no less than five working days ahead, except in exceptional circumstances. Documents tabled on the day should be rare, and the GIA adds that directors must have the chance to read one, even if the meeting adjourns so they can.</p>
<p>One more complaint, from the writer's side of the table: the paper that has been through five reviewers and kept everyone's paragraph. Every reviewer adds; nobody cuts. Make one person, usually the sponsor, responsible for removing material.</p>`,
		},
		{
			id: 'checklist',
			h2: 'Board paper checklist',
			html: `<p>Run this before the paper goes to the company secretary. It draws on the CGI's checklist and the published templates, reorganised the way I use it.</p>
<h3>The ask</h3>
<ul>
<li>The paper type (decision, discussion, noting, ratification) is at the top and matches the purpose line.</li>
<li>For a decision, the exact resolution is stated, stands alone, and includes any delegation of authority.</li>
<li>For a discussion, the questions you want the board to answer are written down.</li>
<li>It is clear why this is coming to the board, and why now.</li>
</ul>
<h3>The argument</h3>
<ul>
<li>The executive summary gives the answers up front, in no more than a page.</li>
<li>Headings signpost the argument, ideally as the questions the paper answers.</li>
<li>Where a decision is sought, the options, benefits, risks and costs of each are set out, including doing nothing.</li>
<li>The recommendation names the option in its first sentence and shows the key judgements.</li>
<li>It says what the information means, and is candid about bad news.</li>
</ul>
<h3>The numbers and risks</h3>
<ul>
<li>Cost, timing, cash flow and budget status are stated, with a range and its main driver.</li>
<li>Every figure matches across summary, body and appendices.</li>
<li>Risks are specific to the proposal, include the risk of not acting, and each has an owner.</li>
</ul>
<h3>The reader</h3>
<ul>
<li>It is pitched at board level, strategic rather than operational.</li>
<li>Jargon and acronyms are removed or explained.</li>
<li>Charts and tables carry a sentence saying what they show.</li>
<li>Page one alone tells a director what is asked, what is recommended and why.</li>
</ul>
<h3>The process</h3>
<ul>
<li>The sponsor has read it and is prepared to stand behind every sentence.</li>
<li>You left it for a day and reread it cold; IoD New Zealand's tips make the same point.</li>
<li>It reaches the company secretary in time for the pack to go out at least five working days before the meeting.</li>
</ul>
<h3>If you drafted it with AI</h3>
<p>The CGI's 2026 report devotes a chapter to this. AI is already used in board reporting, acknowledged or not, and it helps with first drafts, summaries and spotting gaps. But it changes how a paper is produced, not who is accountable for it: the executive who presents the paper owns its content. The report's principles are worth adopting as they stand: a human reviews every AI output before it reaches the board, AI use is disclosed, and confidential material goes only into tools whose data handling meets the organisation's standards, including whether it trains a model. Board papers carry some of the most sensitive information an organisation holds, so where the drafting happens matters.</p>`,
		},
		{
			id: 'worked-example',
			h2: 'A worked example: a short decision paper',
			html: `<p>A condensed decision paper for a fictional distribution company. The figures are illustrative. In practice the options, financials and risks would each have their own short section and an appendix; here the whole argument fits on about a page.</p>
<div class="callout">
<p><strong>Northwind Distribution. Board meeting, agenda item 7.</strong> Replacement of the warehouse management system. For decision. Sponsor: Chief Operating Officer. Author: Head of Logistics Systems. Paper finalised two weeks before the meeting.</p>
<p><strong>Proposed resolution.</strong> That the Board approves capital expenditure of up to €4.2 million to replace the warehouse management system and authorises the Chief Operating Officer to sign the supplier contract within that limit.</p>
<p><strong>Purpose.</strong> To seek approval to replace the warehouse management system before vendor support for the current system ends in 21 months. The spend is in the approved capital plan.</p>
<p><strong>Summary.</strong> <em>Why now?</em> Support ends in 21 months and replacement takes 14, so the decision is needed this quarter to leave a safe margin. <em>What are the options?</em> Defer with premium extended support (€0.9m, solves nothing), extend the ERP's warehouse module (€3.1m, 20 months, no cross-docking), or replace with a cloud system (€4.2m, 14 months). <em>What do we recommend?</em> Replacement: it is the only option live with a margin before support ends, and the only one covering every function we use. <em>What does it buy?</em> An end to the outages that disrupted dispatch on 11 days last year, and no hardware refresh next year. <em>What could go wrong?</em> Cut-over disrupting dispatch, managed by going live outside peak season with a two-week parallel run.</p>
<p><strong>Financials.</strong> €4.2m one-off, within a range of €3.9m to €4.8m depending mainly on data migration effort. Subscriptions of €0.35m a year, against €0.4m a year of current support and hosting costs that fall away. Business case in appendix A.</p>
<p><strong>Key risks.</strong> Cut-over (medium likelihood, high impact; off-peak go-live and parallel run; COO). Carrier integration slipping (medium, medium; interfaces tested in phase one, fixed-price clause; CIO). Benefits not realised (low, high; baseline measures agreed now, review at 12 months; CFO).</p>
<p><strong>Next steps.</strong> Contract signed within a month of approval; a progress line in each board update; a post-implementation review to the Board 12 months after go-live.</p>
</div>
<h3>Why it works</h3>
<ul>
<li>The ask, the amount and the authority sit in the first three lines.</li>
<li>The summary is written as the board's questions, each answered directly beneath.</li>
<li>Doing nothing for now is a priced option, so the board can see the cost of delay.</li>
<li>The money has a range and a named driver, and every risk has an owner.</li>
<li>The board knows when it will hear about this again, and what it will be shown.</li>
</ul>
<p>What it leaves out is just as deliberate: the vendor selection, the architecture and the project plan belong in appendices, or in the committee version of the paper.</p>`,
		},
	],
	faq: [
		[
			'How long should a board paper be?',
			`There is no universal limit, and the FRC's guidance sets none. The Governance Institute of Australia suggests a page limit of two, three or four pages can help for routine papers, with exemptions for large capital projects, acquisitions, strategy and financial reporting. The CGI recommends an executive summary of no more than one page. In practice: the shortest paper that lets the board decide, with evidence in appendices that do not repeat the body.`,
		],
		[
			'What is the difference between a board paper and a board memo?',
			`In substance, none. Board paper is the usual term in the UK and Australia; board memo is common in many companies and is often used for shorter notes, including those sent between meetings. Both should cover one subject, carry one clear ask, and give the board the information it needs to act on it.`,
		],
		[
			'What does "for noting" mean on a board paper?',
			`It means the board is asked to acknowledge that it has received and understood the information, not to take a decision. No resolution is proposed, and the minutes simply record that the paper was noted. If the board needs to decide or to give a view, label the paper <em>for decision</em> or <em>for discussion</em> instead.`,
		],
		[
			'What should the executive summary of a board paper include?',
			`Following the Chartered Governance Institute UK &amp; Ireland's 2026 guidance: why the paper matters, why it is coming to the board now, the three to five questions it answers with the answer directly under each, and what the board is asked to do. Ideally no more than one page, and on the first page together with the purpose and the proposed resolution.`,
		],
		[
			'How far in advance should board papers be sent?',
			`The CGI says papers should usually go out no less than five working days before the meeting, except in exceptional circumstances, and the Governance Institute of Australia describes about a week as common practice. The FRC's guidance asks for papers to be delivered sufficiently in advance of the meeting. Late and tabled papers should be the exception, clearly flagged, with time allowed to read them.`,
		],
		[
			'Who writes board papers?',
			`Usually management: the author is the person closest to the subject, and an executive sponsor owns the content. The company secretary sets the timetable, checks proposed resolutions and compiles the pack. Directors share the responsibility by saying what they need and giving feedback when papers fall short.`,
		],
	],
	sources: [
		[
			'Effective board reporting (July 2026), Chartered Governance Institute UK & Ireland and Board Intelligence',
			'https://www.cgi.org.uk/media/kagbmcd3/cgi_boardreporting_17july.pdf',
		],
		[
			'UK Corporate Governance Code 2024, Financial Reporting Council',
			'https://www.frc.org.uk/library/standards-codes-policy/corporate-governance/uk-corporate-governance-code/',
		],
		[
			'Corporate Governance Code Guidance, Financial Reporting Council',
			'https://www.frc.org.uk/library/standards-codes-policy/corporate-governance/corporate-governance-code-guidance/',
		],
		[
			'Board papers guidance (2021), Governance Institute of Australia',
			'https://governanceinstitute.com.au/app/uploads/2023/12/govinst_guidance-board_papers_2021-1.pdf',
		],
		[
			'An annotated sample board paper (2020), Australian Institute of Company Directors',
			'https://www.aicd.com.au/content/dam/aicd/pdf/tools-resources/director-resources/board%20papers_may%202020_final_%20appendix_an%20annotated%20sample%20board%20paper.pdf',
		],
		[
			'How to navigate board packs (February 2026), Australian Institute of Company Directors',
			'https://www.aicd.com.au/board-of-directors/career/how-to-navigate-board-packs.html',
		],
		[
			'Template for board paper preparation, Institute of Directors Ireland',
			'https://www.iodireland.ie/images/uploads/downloads/Template_for_board_paper_preparation.pdf',
		],
		[
			'Top ten tips for better board papers (2018), Institute of Directors New Zealand',
			'https://www.iod.org.nz/resources-and-insights/guides-and-resources/top-ten-tips-for-better-board-papers',
		],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: `<p>The free <a href="/boardmemo/app/">memo builder</a> gives you the same six templates and four audiences as the BoardMemo app. You write each section yourself, and a board-tone check flags hedging, vague numbers and buried points as you type. Nothing you type leaves the browser.</p>
<p>If you are starting from rough notes, the iPhone app does the writing: paste or dictate them and it drafts the memo in that structure, on the device. Where the notes are ambiguous it writes an explicit [TO CONFIRM: …] marker instead of a confident guess, and one tap will tighten the memo, make it more formal, sharpen the risks or halve its length. It needs an iPhone 15 Pro or newer on iOS 26 with Apple Intelligence enabled.</p>`,
	},
};
