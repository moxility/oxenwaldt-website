// Free strategy guide for the AI Don't Fix Stupidity game companion page (/aidfsgame/).
// Mechanics read from the game's source (moxapps/game-aidfs, lib/game at HEAD b3bf9a4, engine
// unchanged since 5 Sep 2026) and checked against the App Store record on 10 November 2026.
// Research log: review/app-guides-20261110/aidfsgame-sources.md
export default {
	slug: 'aidfsgame',
	nav: 'Strategy guide',
	title: 'AI-first transformation in twelve weeks: decisions that matter',
	description:
		'Strategy guide to the Norvik simulation: where to start, people and change, governance, quick wins versus foundations, and how to play your first run.',
	ogTitle: 'Leading an AI-first transformation in twelve weeks: the decisions that matter',
	ogDescription:
		"What the AI Don't Fix Stupidity game rewards and punishes, why it mirrors real AI programmes, and how to play your first run at Norvik without losing the room.",
	eyebrow: 'Free strategy guide',
	h1: 'Leading an AI-first transformation in twelve weeks: the decisions that matter',
	lede:
		'You are Elena Lindqvist, VP of Operations at Norvik, with a CEO who wants the company AI-first and a competitor that has already shipped. This guide covers the decisions that decide the run: <strong>where to start, how to keep the room, when to govern and when to ship</strong>, and how to answer a rival that started first. It is written for players, and for anyone about to lead the real thing.',
	updated: '2026-11-10',
	checkedNote:
		"Checked against the App Store listing and Apple's lookup record for version 1.0.2, the game's own rules, Apple's Foundation Models announcement and the published book, on 10 November 2026.",
	sections: [
		{
			id: 'at-a-glance',
			h2: 'The twelve weeks at a glance',
			html: `<p>Thomas, the CEO, gives Elena twelve weeks. In the book that is the time until her first formal board review, with a plan expected after two. The game opens on the same line, "Twelve weeks to define it", and then lets the consequences run on. Its clock is in-game days: a quarter closes every 90 days, a chapter closes when its objective is met, and the competitor's lead grows every quarter, faster when you deliver nothing. So the twelve weeks are the opening of the run, not the whole of it, and the decisions you make in them set the terms for everything after.</p>
<p>The table follows the book's calendar for those first weeks and shows where the game makes you face each decision.</p>
<div class="tbl"><table><thead><tr><th>Weeks</th><th>Focus</th><th>The decision you face</th><th>Where the game puts it</th></tr></thead><tbody>
<tr><td>1</td><td>Measure, do not buy</td><td>Score the eight readiness dimensions on evidence, or plan on what leadership already believes</td><td>Chapter 1, The Mandate: assess at least three dimensions before committing to anything</td></tr>
<tr><td>2</td><td>Tell the truth upwards</td><td>Give the sponsor the measured number, and decide whether a public date goes with it</td><td>Chapter 2, The Reality Check: assess all eight. Early on, the CEO also wants to announce with a date attached</td></tr>
<tr><td>2–4</td><td>Choose what not to do</td><td>Which strategic shifts to commit to in public, knowing each wins one person and costs another</td><td>Chapter 3, The Vision: leave the offsite with the IT director's trust at 45 or more</td></tr>
<tr><td>3–6</td><td>The first capability</td><td>The boring one that holds or the headline one that is not ready; honour the deployment gate or buy a quarter</td><td>Chapter 4, First Blood: ship one capability that survives production</td></tr>
<tr><td>6–12</td><td>Adoption</td><td>Mandate usage or consult first; ban the workaround the floor built or absorb it</td><td>Chapter 5, The Resistance: adoption above 35%, with the floor's own workaround waiting for you</td></tr>
<tr><td>12</td><td>The board review</td><td>Show what was built, what it cost, what it produced and what comes next, or show a vision</td><td>Every quarter close: funding and the sponsor's patience follow what shipped</td></tr>
<tr><td>After 12</td><td>Scale, crisis, proof, compounding</td><td>Standardise before you scale; recover in public; convert sceptics with numbers they can check</td><td>Chapters 6 to 9</td></tr>
</tbody></table></div>
<div class="callout"><p><strong>The strategy in one line:</strong> measure honestly, build only on foundations that can carry the weight, keep something landing every quarter, and never let the four people who can stop you drift towards their breaking point.</p></div>`,
		},
		{
			id: 'norvik',
			h2: 'The Norvik scenario: what you inherit',
			html: `<p>Norvik is a Nordic furniture retailer with 12,000 employees and 340 stores, squeezed on margin from both sides. Hemvik, a 50-engineer AI-native competitor, has tripled its conversion and lifted average order value by 40% with a capability built in twelve weeks. The CEO took the shareholder call and handed the problem to you.</p>
<p>The company is described by the eight dimensions of the <a href="/frameworks/eight-dimension-readiness-assessment/">Eight-Dimension Readiness Assessment</a>, each scored from 1 to 5, and the readiness score is their plain average. Until you measure a dimension the game shows you what leadership <em>believes</em> it is, hazed on screen. At Norvik the belief is a great deal kinder than the evidence, and that gap is the first problem of the run. In the book, Data and Skills &amp; Talent are the two dimensions that most often carry the floor rule: a weak score in either blocks the most first capabilities, which is why the game gives both of them their own anchored scales.</p>
<h3>The four people who can end it</h3>
<p>There is no committee in this game. There are four people, each with a trust meter, a thing that moves them and a point below which they stop backing you.</p>
<div class="tbl"><table><thead><tr><th>Who</th><th>Opening stance</th><th>What moves them</th><th>If you lose them</th></tr></thead><tbody>
<tr><td><strong>Thomas</strong>, CEO</td><td>Your sponsor, impatient with abstraction</td><td>Something real he can repeat to the board</td><td>He withdraws the mandate and the run ends</td></tr>
<tr><td><strong>Jonas</strong>, IT</td><td>Unconvinced: "Define AI-first"</td><td>Measurement, rigour, the deployment gate, never being bypassed</td><td>Delivery quality collapses and failures go uncaught</td></tr>
<tr><td><strong>Marcus</strong>, commercial</td><td>Calls Hemvik's experience a gimmick</td><td>Conversion, average order value, margin</td><td>He blocks commercial access and no business case survives</td></tr>
<tr><td><strong>Katrine</strong>, union representative</td><td>Silent, taking notes, watching for headcount</td><td>Honesty about roles, consultation before announcement</td><td>The rollout stalls across every warehouse, whatever the architecture</td></tr>
</tbody></table></div>
<p>They do not start in the same place. The sponsor opens with most of his trust intact; the IT director and the commercial chief open well below half. Only losing the sponsor ends the run outright, but every person below their line counts against you at the end, and a lost person can stop the company being called AI-first at all.</p>
<p>Two rivals run alongside you: Hemvik, fast and loud, and Bergquist Hem, the steadier peer the book benchmarks Norvik against. Neither reacts to what you do. Their pace is a fact you plan around, which is exactly how it feels from inside a real programme.</p>`,
		},
		{
			id: 'where-to-start',
			h2: 'Where to start: measure before you spend',
			html: `<p>The book's rule for the first week is blunt: buy nothing, hire nobody, start no pilot. Assess. In the same week, start the long-pole clocks (vendor agreements, consultation obligations, impact assessments) because none of them shortens because you are in a hurry. The rest of the plan is in <a href="/frameworks/your-first-90-days/">Your First 90 Days</a>; the game turns the first part of it into mechanics.</p>
<h3>An assessment is the cheapest thing you can do</h3>
<p>Running an assessment costs one point of programme funding, less than anything else you can buy, and that is deliberate: measuring must never be the thing you cannot afford. It also earns the IT director's trust every time, and more when the gap between belief and evidence turns out to be large. Someone who has been promised transformations before wants to see the work done before the claims are made.</p>
<h3>You score it, and you live with the number</h3>
<p>The assessment is not a reveal button. For each dimension the game shows you the evidence (how many systems hold the customer record, which ones have usable APIs, whether anyone owns the data) and an anchored scale, and you commit a score yourself. The number you commit is the number the company plans against.</p>
<ul>
<li>Within half a point of the evidence counts as accurate.</li>
<li>Score higher than the evidence and the game calls it what it is: scored for comfort. This is the expensive miss.</li>
<li>Score lower and you were cautious. Cheaper, but still a misread.</li>
</ul>
<p>Read the anchors literally. For Data the probe tells you to take the worst-constrained view of access, quality, governance and architecture, not their average, and that one instruction is worth more than any amount of general optimism about the platform.</p>
<h3>Why honesty is the biggest lever in the game</h3>
<p>Behind the scenes the game rates the quality of your plan from your assessments. An accurately scored dimension counts in full, one that is a point out counts for half, two points out counts for almost nothing, and an unmeasured one counts as guesswork. Every quarter in which something ships, adoption rises, and that rise is multiplied by plan quality: about three times larger on an honest canvas than on a badly misread one. Score for comfort and the work still happens; people simply do not take up what it produces, because it solves problems the company does not have.</p>
<p>That is the book's argument made mechanical. At Norvik the honest number is what turned two-thirds of the first year's budget going to foundations from a fight into a fact. A flattering number buys you a pleasant board meeting and a programme aimed at a company that does not exist.</p>`,
		},
		{
			id: 'quick-wins-vs-foundations',
			h2: 'Quick wins versus foundations: the trade the game is built on',
			html: `<p>Every AI programme argues about this, and the game settles the terms of the argument without settling the answer for you.</p>
<h3>The floor rule</h3>
<p>When an initiative finishes, the engine looks at the weakest dimension it depends on. If that dimension is at 2 or below, the capability does not run late or underperform. It fails: it destroys value, the sponsor and the commercial chief lose trust, and it counts against your results far more heavily than shipping nothing would. Automate a chaotic process and you get chaotic automation, faster. At Norvik, where most dimensions start at the bottom of the scale, that one rule takes almost every headline idea off the table on day one.</p>
<p>The check happens on <em>delivery</em>, not when you start. You can put a build into the factory while foundation work lifts the dimension underneath it, as long as the foundation is above 2 when the capability lands. That is the book's "foundation work in parallel", and it is the most useful timing fact in the game.</p>
<h3>Strong on all three lenses, or it waits</h3>
<p>Each initiative carries scores for business value, technical feasibility and organisational readiness, the three lenses of <a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a>. Anything under 3 on any lens is held. You can override the hold, and the IT director's trust pays for it.</p>
<p>Overrides are not always wrong, and this is where the game gets interesting. Some of the most valuable change work, consulting the unions before a rollout for example, scores low on business value and gets held. The lens is doing its job and it is also missing something, which is the book's point that change management is the line most often underfunded. Override knowingly, for something that cannot fail, and you can be right. Override to push the headline capability through and you usually pay twice.</p>
<h3>How foundations actually rise</h3>
<ul>
<li><strong>Foundation initiatives.</strong> Some work raises dimensions when it ships: unifying the catalogue, standardising the service process before automating it, mapping what the company actually does. Several of them depend on nothing, so nothing can break underneath them.</li>
<li><strong>Strategic shifts.</strong> Each shift you commit to raises two dimensions immediately, at the price of one person's goodwill.</li>
<li><strong>Training.</strong> Skills rises one point for every four people through the literacy programme, capped at 4. At twelve thousand people you teach your way out of a skills gap; you do not hire your way out.</li>
<li><strong>A foundation sprint</strong>, bought with advisory coins, raises one dimension by a point and moves the quarter counter on, because foundation work costs real time.</li>
</ul>
<h3>But the clock does not care about your foundations</h3>
<p>Hemvik's pressure rises by 8 every quarter in which nothing ships successfully and by 3 in a quarter that delivers. At 100 they take the category and the run is lost. From the starting position that is about ten quarters of doing nothing visible. A capability that is still building does not count; the forecast on screen says so plainly.</p>
<p>So pure foundations loses as surely as pure quick wins. The book's planning default is 60–70% of year one on foundations at low readiness; the game gives you nothing for that spend until something ships on top of it. The winning shape is the book's: a small, boring first capability on the one clean dataset you have, delivered early, with foundation work running alongside it. The <a href="/frameworks/ai-factory/">AI Factory</a> is the engine for that, and in the game the home factory carries two builds at once. A third waits.</p>
<div class="callout"><p>Chapter 4's lesson, in the game's own words: the first thing you ship teaches the organisation what this programme is. Choose the boring one that works over the impressive one that fails.</p></div>`,
		},
		{
			id: 'people-and-change',
			h2: 'People and change: four people, four levers',
			html: `<p>Architecture is rarely the constraint in this game. People are, and the mechanics make that literal.</p>
<h3>Trust is income</h3>
<p>Programme funding arrives daily, and the rate is set by how much the whole room backs you. Each person contributes from their own breaking point upwards, so someone at the edge of walking contributes nothing, and the sponsor counts double because he holds the budget. With the room behind you, money arrives more than four times faster than at the edge of losing everyone. A quarter that ships also brings a one-off delivery bonus. You start with 10 points; an assessment costs 1, training one person 2, a strategic shift 2, and a digital coworker 3 for one zone in one store.</p>
<p>The consequence is the one real programmes learn slowly: a sponsor who has stopped believing signs off less, long before he cancels anything. Losing trust starves the programme first and ends it later.</p>
<h3>What moves each of them</h3>
<p>Conversations open with the other person speaking, and the screen states what you are trying to get out of the conversation before you type. You answer in your own words. The engine, not the language model, decides what your words were worth:</p>
<ul>
<li><strong>Jonas</strong> responds to evidence and measurement, and responds far more once you have actually measured a few dimensions.</li>
<li><strong>Marcus</strong> responds to conversion, order value and margin, and responds more once something has shipped that the numbers can come from.</li>
<li><strong>Katrine</strong> responds to honesty about roles, retraining and being consulted first.</li>
<li><strong>Thomas</strong> responds to being shown a result he can repeat upstairs. Having shipped is the precondition, not the argument.</li>
</ul>
<p>Management language (transformation journeys, synergies, world-class) costs you with all four. The same argument used twice lands at half strength, and a third time it does nothing. The game offers three suggested openers in each conversation, one of which is labelled as the mistake, so you can learn the levers without guessing.</p>
<h3>Every strategic shift costs someone</h3>
<p>The <a href="/frameworks/six-shifts/">Six Shifts</a> are commitments you make once and cannot take back. Each one wins over one of the four and costs you another, and no ordering keeps the whole room happy. Treat them as a trust budget: commit the shift whose cost lands on the person with the most headroom, and repair that relationship before the next one.</p>
<h3>Adoption follows people, not technology</h3>
<p>Every quarter that something ships, adoption rises in proportion to Culture and Skills, multiplied by the quality of your plan. A quarter with nothing shipped loses ground. Installing a capability is not the same as it being used, and the game will not let you pretend otherwise: one of the endings is a well-built estate nobody uses.</p>
<p>In the book, resistance has four sources (fear, comfort, distrust, a capability gap) and the wrong response to the wrong source is why most change efforts stall. The typical failure with employee representatives is mechanical: a rollout designed for six months, and three weeks before launch somebody asks whether the union was consulted. The structure that prevents it is the <a href="/frameworks/ai-change-organisation/">AI Change Organisation</a>; in the game, the cheap version is telling Katrine first.</p>`,
		},
		{
			id: 'governance',
			h2: 'Governance: what the deployment gate costs, and what skipping it buys',
			html: `<p>Funding any capability takes you through the deployment gate: four checks between "it works" and "it is live in front of customers". Is it strong on all three lenses? Can the foundations carry it? Is the organisation ready to use it? Who catches it when it is wrong? Two of those are fatal if they fail and two are not, and the gate marks which is which. A readiness shortfall means the capability may ship and not stick; a foundation at 2 or below means it will fail.</p>
<h3>The trade</h3>
<ul>
<li><strong>Honour the gate</strong> and the build takes its full time, with the IT director's team catching what goes wrong.</li>
<li><strong>Skip it</strong> and the capability lands a quarter sooner. The IT director loses trust immediately, and loses more if the capability then fails in exactly the way the gate exists to catch.</li>
</ul>
<p>Builds take one to three quarters. A one-quarter build cannot be shortened, so the game only offers the skip on longer ones. That leaves a narrow case where skipping is defensible: a multi-quarter build, foundations already above the floor, and a competitor close enough that one quarter genuinely matters. Outside that case, skipping is a debt with a due date.</p>
<h3>The morning the gate would have caught it</h3>
<p>Chapter 7 opens at 6:47 on a Tuesday, with a capability quoting different prices for identical products in different Nordic countries. In the book the cause was scaling a customer-service coworker to every market before the regional pricing, VAT and promotion data underneath it had been harmonised: the AI answered correctly from data that was wrong. The governance rebuilt afterwards (deployment gates, risk classification of every tool, deterministic controls wherever consequence is severe or irreversible) is what the second half of the transformation stands on. The book's instruments for it are the <a href="/frameworks/tool-risk-ladder/">Tool Risk Ladder</a>, <a href="/frameworks/governance-tiers/">Governance Tiers</a> and the <a href="/frameworks/agentic-development-lifecycle/">deployment gate in the ADLC</a>.</p>
<p>The game's options in that chapter are the real ones: roll back and publish the post-mortem, build the one enterprise control plane, or blame the vendor and move on. The last one will not even pass the lenses.</p>
<h3>Governance of the truth, too</h3>
<p>Not every governance decision is about a system. One of the quarter-close dilemmas is a board pack going out tonight with the pre-assessment readiness figure in it, two points too generous, that nobody has noticed. Correcting it costs you an uncomfortable meeting. Leaving it costs you something slower.</p>`,
		},
		{
			id: 'competitor',
			h2: 'Responding to a competitor that started first',
			html: `<p>The instinct when a competitor ships first is to copy the demo. The game is built to show why that is the wrong instinct, and what to do instead.</p>
<h3>The competitor is a clock, not an opponent</h3>
<p>Hemvik's rollout across the market is a function of time, nudged by the pressure you allow. Nothing you say slows it. The only things that change its effect on you are delivering (the pressure rises more slowly in a quarter that ships) and a few decisions taken at quarter close. Watch the dam line on screen: it projects your current pace honestly, and "building" is not "shipping".</p>
<h3>You cannot buy your way out</h3>
<p>Advisory coins buy what consulting money genuinely buys: information, time or goodwill. An audit gives you a dimension's true score, a single-entity test tells you whether a dimension can carry what you are about to build, an offsite with one person repairs a relationship, a foundation sprint raises a dimension you choose by a point, and earned autonomy lets the home factory carry more at once. None of them ships a capability, raises adoption or wins a chapter, and none of them lifts the floor rule.</p>
<h3>Reach has to be built where the stores are</h3>
<p>A capability shipped from one home factory reaches only part of the estate. To light the rest of the map you open further AI factories, and you can only open one in a market the rollout has already reached, for three advisory coins. So the network grows behind the frontier, country by country. This is why throughput alone never makes the company AI-first, which needs 85% of sites live: one team in the south building for the far north is how a capability ends up technically shipped and locally useless.</p>
<h3>Answer them on your own terms</h3>
<p>The AI shopping assistant that answers Hemvik directly is on the table in chapter 1, and it depends on Data and Technology, both of which are at the floor. The game offers you a direct answer to Hemvik on conversion much later, once the data and capabilities exist to carry it. In between sits the work that makes the answer possible.</p>
<p>The book's view of how an incumbent wins is the compounding gap: AI-first organisations pull away from AI-curious ones not by moving faster on any one thing, but because everything they build makes the next thing cheaper. Norvik has 340 stores, twenty years of customer relationships and a brand people trust. Hemvik has a head start and a demo built in twelve weeks. Competing on the demo is fighting on their ground.</p>
<p>Expect the competitor to come for your people too. When your most knowledgeable data person gets an offer from them, the obvious answer and the right answer are not the same, and the game makes you choose with the cost of each stated before you do.</p>`,
		},
		{
			id: 'rewards-and-punishments',
			h2: 'What the game rewards and punishes, and why it mirrors real programmes',
			html: `<h3>How you are scored</h3>
<p>Your programme score has three parts. <strong>Judgement</strong> (40%) is half how much you measured before committing and half how much of the room is still with you. <strong>Results</strong> (40%) is capabilities live and holding, adoption and readiness, with failed capabilities subtracting more than a successful one adds. <strong>Speed</strong> (20%) compares the quarters you took with a competent pace of about three quarters per chapter. The total lands you in one of four bands, from "First call", where the board consults you before decisions, down to "Removed".</p>
<p>There is no single win screen. The ending is assembled from whether the foundations were fixed, whether anyone adopted what you built, what failed on the way and who is still in the room. Separately, the game asks whether the company became <strong>AI-first</strong>, which needs five things at once: readiness of 4.0 or more, no dimension below 3, 85% of sites live, 70% adoption, and nobody lost. The public leaderboard compares how many quarters that took, per scenario.</p>
<h3>Why the rules are the right rules</h3>
<div class="tbl"><table><thead><tr><th>What the game does</th><th>Why</th><th>The real-programme equivalent</th></tr></thead><tbody>
<tr><td>A flattering assessment shrinks every later adoption gain</td><td>A plan aimed at a company that does not exist produces work nobody takes up</td><td>Present the honest score to the CEO in week one, and plan against it</td></tr>
<tr><td>Shipping onto a foundation at 2 or below destroys value</td><td>Automation amplifies whatever it stands on</td><td>Standardise the process and fix the data before you automate it</td></tr>
<tr><td>Pressure rises almost three times faster in a quarter with nothing shipped</td><td>The market does not wait for your roadmap</td><td>A small first capability in weeks, not a platform in a year</td></tr>
<tr><td>Funding follows trust</td><td>Sponsors sign off less long before they cancel</td><td>Release budget in tranches against proven value, with the signatory in the room from week one</td></tr>
<tr><td>A failure scores worse than shipping nothing</td><td>It burns budget and teaches the organisation that the programme breaks things</td><td>Contain before you scale; Customer Zero before customers</td></tr>
<tr><td>AI-first requires that nobody is lost</td><td>A transformation that burns every relationship leaves a company that will not try again</td><td>Fund the workforce transition before the first role changes</td></tr>
</tbody></table></div>
<p>Several rows have a book framework behind them: <a href="/frameworks/customer-zero/">Customer Zero</a> for proving a capability on your own organisation first, and the <a href="/frameworks/ai-heartbeat/">AI Heartbeat</a> and <a href="/frameworks/five-category-value-model/">Five-Category Value Model</a> for showing value against a frozen baseline rather than a story. The game's Heartbeat screen uses the same idea: adoption on one axis, value on the other, both measured from where you started.</p>
<h3>Where the simulation simplifies</h3>
<p>Be honest with yourself about what it does not model. Only the store you are looking at is simulated live; the others are caught up when you walk in. Assessment is a company-level act, so a store can still surprise you. Adoption and value are company-wide numbers. And the competitors follow fixed curves. Those are design choices made to keep the decisions sharp, and none of them changes the lessons.</p>`,
		},
		{
			id: 'first-run',
			h2: 'How to play your first run',
			html: `<p>Choose <strong>The Norvik campaign</strong> on the front screen. The first run opens with a short tutorial, and <em>How to play</em> brings it back any time. Then:</p>
<ol>
<li><strong>Pause while you read.</strong> The company keeps running whether or not you act. Reading is free while paused; committing to anything asks for the clock back. Speeds run from 1× to 3×.</li>
<li><strong>Learn the six tabs.</strong> Corp holds the company and its strategic commitments, Assess measures the foundations, Build holds delivery capacity and funded work, Deploy puts tooling and training where work jams, People is the four you can lose, and Status says whether you are winning.</li>
<li><strong>Measure three dimensions before you commit to anything.</strong> Start with the floor dimensions. Score from the evidence and the anchors, not from what the slide said.</li>
<li><strong>Talk to Jonas early, with evidence.</strong> Then talk to each person roughly once a quarter, with the thing that moves them, and vary the argument.</li>
<li><strong>Fund only what passes the gate.</strong> All three lenses at 3 or better, and every foundation it depends on above 2 by the time it lands. Early on that means foundation work that depends on nothing.</li>
<li><strong>Keep something landing every quarter</strong> once you can. Watch the dam line, and do not mistake a full factory for delivery.</li>
<li><strong>Spend coins on information before you build on a doubt.</strong> An audit or single-entity test on a dimension you are unsure of is cheaper than a failed capability.</li>
<li><strong>Answer the person standing in front of you.</strong> At a quarter close someone may bring you a decision. Each option states its honest cost before you choose, and declining to decide is scored as a decision against the person who asked.</li>
<li><strong>Read the ending against the book.</strong> Then try <strong>A new company</strong>: a different sector, a different leadership team and a different shape of weakness, with the same instruments.</li>
</ol>
<h3>The nine chapter objectives</h3>
<p>Each chapter states its objective under the title, and tapping it shows the target, your progress and the next step. Missing the pace does not end the run; it changes the position the next chapter starts from.</p>
<div class="tbl"><table><thead><tr><th>Chapter</th><th>Objective, as the game states it</th></tr></thead><tbody>
<tr><td>1. The Mandate</td><td>Assess at least three dimensions before committing to anything</td></tr>
<tr><td>2. The Reality Check</td><td>Assess all eight dimensions and tell the CEO the real number</td></tr>
<tr><td>3. The Vision</td><td>Leave the offsite with the IT director at 45+ trust</td></tr>
<tr><td>4. First Blood</td><td>Ship one capability that survives contact with production</td></tr>
<tr><td>5. The Resistance</td><td>Get adoption above 35%</td></tr>
<tr><td>6. The Rollout</td><td>Get Processes to 4 out of 5 before scaling</td></tr>
<tr><td>7. The Crisis</td><td>Contain the crisis and keep the room</td></tr>
<tr><td>8. The Turning Point</td><td>Bring the commercial chief to 60+ trust</td></tr>
<tr><td>9. The Compound</td><td>Reach 70% adoption with the operating model holding without you</td></tr>
</tbody></table></div>
<p>Two of the nine objectives are trust thresholds, and the commercial chief starts a long way below his. That is the book's argument in one design decision: architecture is rarely the constraint, people are.</p>`,
		},
	],
	faq: [
		[
			'How long does a game of AI Don\'t Fix Stupidity take?',
			'The mandate is twelve weeks, but the run is measured in in-game quarters of 90 days, and the speed part of your score assumes about three quarters per chapter across nine chapters. It is built for short sessions and saves at every quarter close.',
		],
		[
			'Why did my capability fail even though I funded it?',
			'Because a dimension it depends on was at 2 or below when it landed. The engine checks foundations on delivery, and shipping onto a weak foundation destroys value rather than merely underperforming. Raise the foundation while the build runs, or pick work that depends on nothing.',
		],
		[
			'Do I have to buy advisory coins?',
			'No. You start with three, earn more by closing chapters, and they are never needed to finish. They buy information, time or goodwill (an audit, an offsite, a foundation sprint), never a shipped capability or a won chapter.',
		],
		[
			'Should I ever skip the deployment gate?',
			'Rarely. Skipping saves one quarter on a build longer than a quarter, costs the IT director\'s trust at once, and costs more if the capability then fails. It is defensible only when the foundations already hold and the competitor is close enough that one quarter matters.',
		],
		[
			'Do I need to have read the book?',
			'No. The game tells its own story. Readers will recognise Norvik and Elena; everyone else just plays. The book explains why the rules are what they are.',
		],
		[
			'Can I play without an iPhone or Apple Intelligence?',
			'Yes. There is a <a href="/aidfsgame/app/">browser version</a>. The characters\' on-device replies need iOS 26 and Apple Intelligence; elsewhere they answer from scripted lines, and the engine scores what you say the same way either way.',
		],
	],
	sources: [
		["AI Don't Fix Stupidity Game, App Store, Apple", 'https://apps.apple.com/app/id6796604437'],
		["AI Don't Fix Stupidity Game, version and compatibility record, Apple iTunes Search API", 'https://itunes.apple.com/lookup?id=6796604437'],
		["Apple's Foundation Models framework unlocks new intelligent app experiences, Apple Newsroom", 'https://www.apple.com/newsroom/2025/09/apples-foundation-models-framework-unlocks-new-intelligent-app-experiences/'],
		["AI Don't Fix Stupidity: Transforming Your Business into an AI-First Operation, Magnus Oxenwaldt, BoD", 'https://bokshop.bod.se/ai-dont-fix-stupidity-magnus-oxenwaldt-9789181501186'],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: '<p>Knowing the rules is not the same as making the calls with the clock running. The game puts you in Elena\'s chair for the complete twelve-week campaign: eight dimensions you are scored on, a competitor that started first, and one thing you cannot buy your way out of. Choices compound across the twelve weeks, and the ending you get is the one your decisions earned. It is free, with no ads, and the advisory coins are optional and never needed to finish. Play in the <a href="/aidfsgame/app/">browser</a>, or on iPhone, where the characters respond through Apple Intelligence on the phone (iOS 26) and nothing you say to them is sent anywhere. Play without registering; sign in with an email only if you want your fastest run on the public leaderboard.</p>',
	},
};
