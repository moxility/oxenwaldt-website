/**
 * Free reference page for the AI Don't Fix Stupidity companion app: a reader's guide to the book.
 *
 * Checked 10 Nov 2026 against the printed first edition (designer's final pages, extracted text in
 * agentic-book-builder-20251010-125547/audiobook/release-2026-09-16/source/extracted.txt) and the
 * app's shipped content (moxapps/app-the-shift/content). Framework detail is deliberately NOT
 * restated here: each framework links to its own page generated from src/data/frameworks.mjs.
 * Research log: review/app-guides-20261110/aidfs-sources.md.
 */
export default {
	slug: 'aidfs',
	nav: "Reader's guide",
	title: "AI Don't Fix Stupidity: a reader's guide to every chapter",
	description:
		"A chapter-by-chapter guide to AI Don't Fix Stupidity: what each chapter covers, the question it answers for a leader, and the framework it introduces.",
	ogTitle: "AI Don't Fix Stupidity: a reader's guide to the chapters and frameworks",
	ogDescription:
		'The nine chapters of the Norvik story and the bridge into the playbook, each mapped to the question it answers and the framework it puts to work, plus how to run the book as a programme.',
	eyebrow: 'Free reference',
	h1: "AI Don't Fix Stupidity: a reader's guide to the chapters and frameworks",
	lede:
		"The book is a business fable followed by a playbook. This guide walks the story <strong>chapter by chapter</strong>: what happens, the question each chapter answers for a leader, and which framework it puts to work, with a link to that framework rather than a second explanation of it.",
	updated: '2026-11-10',
	checkedNote:
		"Checked against the printed first edition of AI Don't Fix Stupidity (BoD, 2026) and the companion app's shipped content on 10 November 2026.",
	sections: [
		{
			id: 'at-a-glance',
			h2: "AI Don't Fix Stupidity at a glance: chapters and frameworks",
			html: `<p><em>AI Don't Fix Stupidity: Transforming Your Business into an AI-First Operation</em> has two parts. Part One, <em>The Shift</em>, is a story in nine chapters, followed by a short bridge called <em>The Story So Far, and What It Means</em>. Part Two, <em>The Playbook</em>, is ten sections of instruments: the operating system behind the story. This guide covers the ten stops of the story (the nine chapters and the bridge) and then maps the playbook.</p>
<p>The rule I used for the framework column: a framework sits against the chapter where the story first puts it to work. Every one of them is taught in full in Part Two, and each has its own summary page on this site, so the links below go there instead of repeating the definitions here.</p>
<div class="tbl"><table><thead><tr><th>Chapter</th><th>What it is about</th><th>Framework it introduces</th></tr></thead><tbody>
<tr><td>1. The Mandate</td><td>A competitor's AI launch, a twelve-month mandate, and a week on the shop floor that shows what AI-first would actually have to fix.</td><td>No named framework yet. It plants the warning signs that open the <a href="/frameworks/eight-dimension-readiness-assessment/">readiness assessment</a>, plus shadow AI and the three-layer problem.</td></tr>
<tr><td>2. The Reality Check</td><td>Norvik scores 1.7 out of 5. The Advisor arrives and turns the score from a verdict into a map.</td><td><a href="/frameworks/eight-dimension-readiness-assessment/">The Eight-Dimension Readiness Assessment</a>; the org-wide stages of the <a href="/frameworks/earned-autonomy-ladder/">Earned Autonomy Ladder</a>; the components of the <a href="/frameworks/ai-factory/">AI Factory</a>; the Partnership Era (<a href="/frameworks/three-ai-eras/">the AI eras</a>).</td></tr>
<tr><td>3. The Vision</td><td>A three-day offsite names the destination, the endgame and a twelve-month roadmap.</td><td><a href="/frameworks/six-shifts/">The Six Shifts</a>; the Digital Coworker; <a href="/frameworks/five-layer-context-hierarchy/">The Five-Layer Context Hierarchy</a>; five overlapping programme phases.</td></tr>
<tr><td>4. First Blood</td><td>The first capability goes from decision to production in eighteen days.</td><td><a href="/frameworks/ai-factory/">The AI Factory</a> in motion; <a href="/frameworks/customer-zero/">Customer Zero</a>; the simplest-architecture rule.</td></tr>
<tr><td>5. The Resistance</td><td>Sandbagging, fear on the warehouse floor, and a shadow chatbot quoting old prices.</td><td><a href="/frameworks/ai-change-organisation/">The AI Change Organisation</a>; the first sketch of <a href="/frameworks/ai-heartbeat/">the AI Heartbeat</a>.</td></tr>
<tr><td>6. The Rollout</td><td>Customer service goes next, a sprint gets killed on purpose, and a colleague stops calling it a tool.</td><td><a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a>; <a href="/frameworks/customer-zero/">Customer Zero</a> as a staged rollout; the factory's stop rule.</td></tr>
<tr><td>7. The Crisis</td><td>A capability scaled ahead of its data quotes 410 customers the wrong price.</td><td><a href="/frameworks/tool-risk-ladder/">The Tool Risk Ladder</a>; the deployment gate (<a href="/frameworks/agentic-development-lifecycle/">ADLC</a>); consequence, not technology, decides where controls must be deterministic (<a href="/frameworks/governance-tiers/">Governance Tiers</a>).</td></tr>
<tr><td>8. The Turning Point</td><td>Measurement holds up in front of a board member who wants to cap the spend.</td><td><a href="/frameworks/ai-heartbeat/">The AI Heartbeat</a>; <a href="/frameworks/five-category-value-model/">The Five-Category Value Model</a>; <a href="/frameworks/time-to-value/">Time to Value</a>.</td></tr>
<tr><td>9. The Compound</td><td>Speed creates its own friction, a rival collapses, and the twelve-month reckoning includes what is not working.</td><td>Organisational absorption; "fence, not gate", which becomes the pre-approved envelopes of Continuous Evolution.</td></tr>
<tr><td>The Story So Far, and What It Means</td><td>The ten-minute version of the story, and the bridge into the playbook.</td><td>The six load-bearing instruments, and the <a href="/frameworks/earned-autonomy-ladder/">Earned Autonomy Ladder</a> that runs through them.</td></tr>
</tbody></table></div>`,
		},
		{
			id: 'how-the-book-works',
			h2: 'How the book works: a fable first, then a playbook',
			html: `<p>Part One follows Elena Lindqvist, VP of Operations at Norvik, a fictional Nordic home-furnishings retailer with 340 stores, 12,000 employees and operations in eight countries. The board gives her twelve months to make the company AI-first. She starts from an honest readiness score of 1.7 out of 5 and ends the year with fourteen AI capabilities in production. In between are resistance, a crisis that nearly ends the programme, and a board that has to be won twice.</p>
<p>Part Two takes every instrument the characters used and sets it down on the bench: its parts, how to run it, Norvik's completed example as the template, and the failure modes. The introduction to Part Two says four things are worth knowing before you start, and I would put them on the first slide of any programme that uses the book:</p>
<ul>
<li><strong>It is one way, not the only way.</strong> The book says plainly that there is no golden path. It offers a route that worked, to be tailored rather than installed. What travels is the discipline underneath: assessment before strategy, foundation before deployment, people alongside technology, measurement from the start.</li>
<li><strong>Norvik is fictional, and so are its numbers.</strong> The 1.7, the eighteen-day first capability and the crisis cost are constructed to show how an instrument behaves. Do not carry them into a business case as evidence of what AI delivers. Carry the method.</li>
<li><strong>Every instrument is on the page.</strong> You can redraw any of them blank on a whiteboard. Nothing needs a companion volume to be usable.</li>
<li><strong>Every planning number comes with a range and a reason to move it.</strong> A default is an assumption about your situation, and the Assessment Toolkit shows once, concretely, how to move one.</li>
</ul>
<p>The book is also explicit about its scope. It is written for what it calls the <strong>Partnership Era</strong>: a capability can earn a great deal of autonomy, up to running a whole process with nobody watching, while a named human still answers for what it does. Autonomy is delegated; accountability is not.</p>
<p>Why the story comes first is worth a sentence. In the book's own words, almost every instrument in Part Two exists because something went wrong first. A framework you meet together with the failure that produced it is one you understand; a framework you meet as a diagram is one you install, and installed frameworks are how organisations end up with a maturity model on the wall and nothing in production.</p>`,
		},
		{
			id: 'chapters-1-3',
			h2: 'Chapters 1 to 3: the mandate, the reality check and the vision',
			html: `<h3>Chapter 1: The Mandate</h3>
<p>A competitor, Hemvik, launches an AI shopping experience built in twelve weeks, and its conversion triples. Norvik's CEO, Thomas Bergström, tells Elena to make the company AI-first. He also tells her the politics: the board has already written off two vendor-led AI pilots costing nine million kronor between them, so until she has results, she should call the work automation. She asks for two weeks to find out where Norvik really stands, and spends them walking the floor. A store associate needs eleven minutes and three systems to answer one question about a partially shipped order. A reconciliation team spends twenty person-hours a day matching three inventory numbers that should agree. Marketing has been using consumer AI tools for four months without approval, with company data flowing into tools nobody has reviewed.</p>
<p><strong>The question it answers:</strong> before anyone says "AI-first", what are we actually standing on? The chapter's finding is that the integrations handle the happy path and people handle everything else, across 47 applications. That gap, not a lack of technology, is what separates Norvik from Hemvik.</p>
<p><strong>Frameworks:</strong> none by name, deliberately. The observations Elena collects become the seven warning signs that open the Assessment Toolkit, the urgency scan you run before scoring <a href="/frameworks/eight-dimension-readiness-assessment/">readiness</a>. The chapter also gives you two ideas you will use constantly: shadow AI as an iceberg most executives never see, and the three-layer problem of applications, processes and data treated separately.</p>
<h3>Chapter 2: The Reality Check</h3>
<p>Priya, Norvik's most senior data person, scores the company across eight dimensions on a one-to-five scale. Data comes in at 1.4 (one customer, five records, five systems). Skills and talent comes in at 1.1. The overall figure is 1.7, against a peer she scored the same way from public information at 2.9. Elena had expected something closer to three. Then the Advisor arrives, and the chapter turns. He places each department on a four-stage stack (Curious, Experimenting, Scaling, Frontier), lays out a five-step delivery method, and refuses to treat the 1.7 as bad news: an honest low score is the advantage, because a plan built for an imaginary five collapses on contact with the real organisation. The chapter also carries Elena's own confession: short of time, she fed a redacted internal assessment into the same ungoverned tool she had been ready to shut down days earlier. What she concludes from it is the governance argument of the whole book in one line: make the safe path the fast path.</p>
<p><strong>The question it answers:</strong> how ready are we, really, and where do we start? The answer is a first win where the data is cleanest, not where the value is highest.</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/eight-dimension-readiness-assessment/">The Eight-Dimension Readiness Assessment</a>; the four org-wide stages, which Part Two teaches as one view of <a href="/frameworks/earned-autonomy-ladder/">the Earned Autonomy Ladder</a>; the five components of <a href="/frameworks/ai-factory/">the AI Factory</a>; and the Partnership Era, defined by who is accountable rather than by how capable the machine is (see <a href="/frameworks/three-ai-eras/">the AI eras</a>).</p>
<h3>Chapter 3: The Vision</h3>
<p>Fourteen people spend three days in a converted farmhouse north of Stockholm with a whiteboard wall and six index cards: Commands, Projects, Silos, Integration, Automation, Solo. Elena walks the room through each shift and lets the leadership team argue with it. The sceptical IT director ends up withdrawing his scepticism while keeping his questions. The Advisor names the endgame, a Digital Coworker for every employee, and explains what makes it the company's own: five layers of business context that the business, not IT and not a vendor, has to own. He separates the stable contracts of a platform from the components that change every six months, sketches five overlapping programme phases, and the room turns all of it into a twelve-month roadmap. The board line survives too: frame it as automation, build it as transformation, and know the difference.</p>
<p><strong>The question it answers:</strong> what are we transforming to, and how do we commit to it in a boardroom that has been burned before?</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/six-shifts/">The Six Shifts</a>; the Digital Coworker as the destination; <a href="/frameworks/five-layer-context-hierarchy/">The Five-Layer Context Hierarchy</a>; and the five programme phases (assessment and strategy, foundation building, initial capability deployment, scaling and optimisation, continuous innovation), which overlap rather than run in sequence.</p>`,
		},
		{
			id: 'chapters-4-6',
			h2: 'Chapters 4 to 6: first blood, the resistance and the rollout',
			html: `<h3>Chapter 4: First Blood</h3>
<p>The first capability is a returns classifier, chosen because returns data is the cleanest Norvik has. Priya sets the rule that governs the rest of the book: use the simplest architecture that reliably delivers the outcome, and match the model to the task. The first simulation agrees with the human team only 61% of the time, because a class of cross-border returns follows a different policy in Sweden and in Denmark. Elena moves the ship date rather than ship it, and three extra rules later it reaches 89%. Norvik's own returns team then runs it as the first user, side by side with their manual work, and an experienced colleague catches a distinction the model cannot see. Her correction goes into a reviewed set rather than straight into the model, which is the point. It goes live on day eighteen. A prediction model follows on the same pipeline, and the commercial director who called AI a gimmick phones to ask for one.</p>
<p><strong>The question it answers:</strong> how do we get one real capability into production quickly, without cutting the corners that sank the earlier pilots?</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/ai-factory/">The AI Factory</a> turning for the first time; <a href="/frameworks/customer-zero/">Customer Zero</a> as the internal proving ground; the simplest-architecture rule, taught in full in the Architecture Toolkit. Watch for the staircase (classify, then predict, then answer with tools): capabilities compound through reused services, and that is the method in miniature.</p>
<h3>Chapter 5: The Resistance</h3>
<p>Two months in, three problems arrive at once and turn out to be one. Engineers are quietly sandbagging integration work. A reconciliation specialist whose knowledge the programme depends on is looking for another job, because he has concluded his work is pointless. And a team in marketing has launched a customer chatbot on a stale catalogue, which tells customers a dining set is 20% off six months after the promotion ended. Elena's diagnosis is that Norvik built the technical foundation without the organisational one. The Advisor's is that adoption is a partnership problem, not a training problem: count partnerships, not deployments. Earlier in the chapter, Priya's elegant composite metric is rejected in four seconds by the person who has to act on it, and rebuilt as three plain numbers.</p>
<p><strong>The question it answers:</strong> why are people resisting, and what actually makes adoption happen?</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/ai-change-organisation/">The AI Change Organisation</a> (a coaching centre, enablement partners and champions, alongside line management rather than on top of it); and the first sketch of <a href="/frameworks/ai-heartbeat/">the AI Heartbeat</a>, introduced as a pulse check on whether the transformation is alive. The chapter also funds a workforce-transition budget before a single role has changed, which is one of the most transferable decisions in the book.</p>
<h3>Chapter 6: The Rollout</h3>
<p>Month four. A customer service agent spends most of her shift copying information between systems: just over four minutes a query, thirty times a shift, for work she was hired to do with judgement. Elena and the Advisor score fifteen candidate use cases against three lenses, and customer service goes next. It is deployed to Norvik's own people first. In the same month a supplier-invoice sprint fails to beat its baseline, and the team stops it in an afternoon with no post-mortem theatre. On the floor, the agent who used to copy and paste describes her digital coworker as a colleague rather than a tool. Near the end, IT warns that the platform was built for proof of concept and would fail if scaled as it is, and gets eight weeks to rebuild it for volume.</p>
<p><strong>The question it answers:</strong> what do we build next, and how do we take it towards customers without betting the brand?</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a> (strong on all three, or it waits); <a href="/frameworks/customer-zero/">Customer Zero</a> as a staged rollout with a review gate per wave; the <a href="/frameworks/ai-factory/">AI Factory's</a> stop discipline, beat the baseline or stop; and standing teams that keep what they build instead of handing it over and dissolving.</p>`,
		},
		{
			id: 'chapters-7-9',
			h2: 'Chapters 7 to 9: the crisis, the turning point and the compound',
			html: `<h3>Chapter 7: The Crisis</h3>
<p>Six months in, the customer-service coworker has performed well enough that scaling it to every store is approved. The regional pricing data underneath it has not been harmonised, so customers in different markets get different prices for the same product. The model behaves exactly as designed; the design assumed data that was not true. Elena contains it first, then fixes the data region by region, then builds a deployment gate with Jonas. At the board she owns the decision in the first sentence and gives the damage in numbers: of 4,200 interactions in the exposure window, about 1,300 touched a price-sensitive answer, 410 customers received an incorrect quotation, 57 transactions completed at a wrong price, 23 formal complaints, and a direct cost of thirty-eight thousand euros.</p>
<p><strong>The question it answers:</strong> what do we do when it goes wrong in front of customers, and how do we make sure it does not happen the same way twice?</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/tool-risk-ladder/">The Tool Risk Ladder</a>, because the pricing capability was treated as low-risk retrieval when it was in effect publishing prices; the deployment gate, taught in Part Two with <a href="/frameworks/agentic-development-lifecycle/">the Agentic Development Lifecycle</a>; and the rule that consequence, not technology, decides where a control must be deterministic, which the Architecture Toolkit formalises alongside <a href="/frameworks/governance-tiers/">Governance Tiers</a>. The deeper lesson is about the shifts: Shift 4, orchestration, ran ahead of Shift 3, unified intelligence. Advance them together.</p>
<h3>Chapter 8: The Turning Point</h3>
<p>Month eight. Demand forecasting has gone from a fight about attribution to a war room, and inventory waste is falling. The IT support coworker took three weeks to build where the customer-service coworker took three months. Henrik, from finance, brings two invoices, because the coworker's running cost rose sharply in its first full month, and the value model still clears it. At the board Elena opens with a company-wide AI Heartbeat of 3.2 out of 10, measured at month six, and explains why it is low. She presents value as five separate lines, never silently added, and argues for Time to Value as an organisational capability rather than a project metric. A director lists everything that has gone wrong and asks why the board should not cap the spend. Elena's answer is that every item on that list came from her own slides.</p>
<p><strong>The question it answers:</strong> how do we prove to a sceptical board that this is working, without flattering ourselves?</p>
<p><strong>Frameworks:</strong> <a href="/frameworks/ai-heartbeat/">The AI Heartbeat</a>; <a href="/frameworks/five-category-value-model/">The Five-Category Value Model</a>; <a href="/frameworks/time-to-value/">Time to Value</a>. Note that the Heartbeat runs from 1 to 10 and the readiness assessment from 1 to 5; the book is firm that the two are never blended.</p>
<h3>Chapter 9: The Compound</h3>
<p>Month nine. The cross-functional intelligence layer goes live, and a sprint goes from concept to production in eight days. That speed produces the next problem: the head of supply chain planning cannot absorb deployments into his warehouses as fast as they arrive. Build velocity is exponential and organisational absorption is linear, and something has to give. His answer is to agree the boundaries once, "fence, not gate", so that anything inside them ships without asking him. A competitor that bought expensive software and never fixed its foundations collapses, and the chapter is careful about why. Month twelve ends with fourteen capabilities in production and a Heartbeat of 5.4, and with a slide Elena fought to keep: what is not working, including a stalled market and nineteen people whose next role the company has not yet found.</p>
<p><strong>The question it answers:</strong> what happens when it works? How do we absorb our own speed, and what do we owe the people whose work changes?</p>
<p><strong>Frameworks:</strong> no new framework page, but two ideas that Continuous Evolution turns into instruments: organisational absorption as the binding constraint, with a target and a cap; and governance by pre-approved envelopes instead of approval of every deployment. The chapter also refuses the tidy ending. Zero involuntary separations is presented as that year's result, not the method's promise, and the book explains in plain arithmetic why.</p>`,
		},
		{
			id: 'the-bridge',
			h2: 'The Story So Far, and What It Means: the bridge into the playbook',
			html: `<p>The tenth stop is short and does a specific job. It is the ten-minute version of the story for readers who start with the playbook, and the hand-over for readers who have just finished Part One. It retells the year in one page, then names the <strong>six primary instruments</strong> of Part Two, the ones the book calls load-bearing because the operating model does not stand up without any one of them:</p>
<ol>
<li><a href="/frameworks/eight-dimension-readiness-assessment/">The Readiness Assessment</a>: eight dimensions, scored honestly. A map, not a verdict.</li>
<li><a href="/frameworks/six-shifts/">The Six Shifts</a>: what you are transforming to, and how the shifts depend on each other.</li>
<li><a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a>: what to build first.</li>
<li><a href="/frameworks/ai-factory/">The AI Factory</a>: the delivery engine.</li>
<li>The Governed Digital Coworker Architecture: owned context, <a href="/frameworks/tool-risk-ladder/">tool risk</a>, <a href="/frameworks/governance-tiers/">governance tiers</a> and an <a href="/frameworks/agentic-development-lifecycle/">evaluation-first development cycle</a>.</li>
<li><a href="/frameworks/ai-heartbeat/">The AI Heartbeat</a> and <a href="/frameworks/five-category-value-model/">the value model</a>: what the board watches, and how to count value without flattering yourself.</li>
</ol>
<p>Running through all six is <a href="/frameworks/earned-autonomy-ladder/">the Earned Autonomy Ladder</a>: how a capability, and an organisation, climbs from assisted to genuinely autonomous operation one earned step at a time. The bridge ends on what the book calls its hardest truth, and it is the sentence I would want every sponsor to read: the organisation that does the work to become ready wins, and the one that tries to shortcut readiness loses, regardless of budget or technology.</p>
<div class="callout"><p>If you are short of time, read the bridge first and the chapters second. It was written for exactly that reader, and the table at the top of this page tells you which chapter to open when a particular instrument matters to you now.</p></div>`,
		},
		{
			id: 'part-two-toolkits',
			h2: 'Part Two, toolkit by toolkit: where each framework is taught',
			html: `<p>Each section of Part Two opens with a short version: what it is for, what it contains, the one rule to carry out of it, and what you have if you stop there. That design is deliberate, and it is what makes the playbook usable by an executive who will never read the anchored scales. The order follows the work rather than the story: first establish position (where you stand, what your industry demands, where you are going, what you build on), then build, adopt, measure and compound.</p>
<div class="tbl"><table><thead><tr><th>Part Two section</th><th>What it is for</th><th>Framework pages</th></tr></thead><tbody>
<tr><td>Introduction: From Story to Action</td><td>The six load-bearing instruments, and one map that tells you which constructs are ladders, gates, sets or scores.</td><td>See the bridge, above.</td></tr>
<tr><td>The Assessment Toolkit</td><td>Where you actually stand, scored against evidence, with the warning-sign scan and a completed canvas.</td><td><a href="/frameworks/eight-dimension-readiness-assessment/">Eight-Dimension Readiness Assessment</a></td></tr>
<tr><td>Reading Your Own Industry</td><td>Six questions that locate your starting move in your own sector. The discipline is universal; the starting move is local.</td><td>None separately.</td></tr>
<tr><td>The Strategy Toolkit</td><td>Where you are going, how far you may go, and what to spend: the Six Shifts, AI Partnership Eras, the strategic blueprint and investment heuristics.</td><td><a href="/frameworks/six-shifts/">Six Shifts</a>, <a href="/frameworks/three-ai-eras/">AI eras</a>, <a href="/frameworks/verification-map/">Verification Map</a></td></tr>
<tr><td>The Governed Digital Coworker Architecture</td><td>What the coworker stands on: one enterprise control plane, owned context, tool risk, governance tiers and the development lifecycle.</td><td><a href="/frameworks/five-layer-context-hierarchy/">Five-Layer Context Hierarchy</a>, <a href="/frameworks/tool-risk-ladder/">Tool Risk Ladder</a>, <a href="/frameworks/governance-tiers/">Governance Tiers</a>, <a href="/frameworks/agentic-development-lifecycle/">ADLC</a></td></tr>
<tr><td>The Deployment Toolkit</td><td>Build: what goes first, how it is delivered, how it is tested on your own people, how far it may run on its own.</td><td><a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a>, <a href="/frameworks/ai-factory/">AI Factory</a>, <a href="/frameworks/customer-zero/">Customer Zero</a>, <a href="/frameworks/earned-autonomy-ladder/">Earned Autonomy Ladder</a></td></tr>
<tr><td>The People Toolkit</td><td>Adopt: the change organisation, adoption as partnership, workforce transition, champions, upskilling and skills for the agentic era.</td><td><a href="/frameworks/ai-change-organisation/">AI Change Organisation</a></td></tr>
<tr><td>The Measurement Toolkit</td><td>Measure: what the board sees, how value is counted, and the leading indicator underneath both.</td><td><a href="/frameworks/ai-heartbeat/">AI Heartbeat</a>, <a href="/frameworks/five-category-value-model/">Five-Category Value Model</a>, <a href="/frameworks/time-to-value/">Time to Value</a></td></tr>
<tr><td>Your First 90 Days</td><td>Monday morning: week one, weeks two to four, months two and three, and a day-ninety evidence check.</td><td><a href="/frameworks/your-first-90-days/">Your First 90 Days</a></td></tr>
<tr><td>Continuous Evolution</td><td>Compound: the evolution cadence, avoiding complacency, drift detection, governance at sprint speed, and when to stop.</td><td>None separately.</td></tr>
</tbody></table></div>
<p>The one-map page in the introduction is worth reading twice, because it settles an argument most programmes have badly. Layers belong to the context hierarchy, levels to tool risk, phases to the programme, stages to organisational maturity, tiers to governance and rungs to earned autonomy. Four of those are progressions at four different altitudes, and none is interchangeable with another. The commonest mistake, in the book's account and in my experience, is treating a ladder you climb as a checklist you complete, or a set you hold all at once as a sequence you march through.</p>`,
		},
		{
			id: 'book-as-programme',
			h2: 'Using the book as a programme: read, assess, plan',
			html: `<p>To use the book to start a transformation rather than to think about one, run it in this order.</p>
<h3>Read: one route per role</h3>
<p>Decide who reads what before anyone opens it. The book names three routes (see the next section), and making the whole leadership team read everything is the cheapest mistake to avoid. Agree a shared minimum, Part One plus the short versions, then take one chapter's question at a time into a leadership discussion: where are we on this, what is blocking us, what do we do first. The chapter questions in this guide are written to be used that way.</p>
<h3>Assess: score before you strategise</h3>
<p>Part Two is explicit that a transformation begins with an honest score, not a strategy. Run the warning-sign scan first, because it tells you how long you can afford to sit with the result. Then score the eight dimensions against evidence, not impression, and apply the floor rule so that a weak dimension cannot hide inside a respectable average. Place each department on its own stage rather than the company on one. Details are on the <a href="/frameworks/eight-dimension-readiness-assessment/">readiness assessment page</a>. The book's own line on this is the one to remember: a measured 1.7 you can act on beats a believed 4.0 you can only defend.</p>
<h3>Plan: the first ninety days</h3>
<p>Then use <a href="/frameworks/your-first-90-days/">Your First 90 Days</a> as the plan. Its week-one rule is blunt: do not buy anything, do not hire anyone, do not start a pilot; assess. In the same week, start the long-pole clocks such as vendor agreements, consultation obligations and impact assessments, because none of them compresses when you are in a hurry. The first month picks the first win with <a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a> and starts the first <a href="/frameworks/ai-factory/">factory</a> sprint. Day ninety ends with an evidence check, not a celebration. After that, re-score after every deployment; the Advisor makes the point in Chapter 2 that the assessment is not a document you file.</p>
<h3>When you are stuck mid-programme</h3>
<p>Go straight to the toolkit that matches the symptom. The book's own routing: delivery stalling belongs to Deployment, stalled adoption belongs to People, and a board that has stopped believing the numbers belongs to Measurement. Then reread the chapter where Norvik hit the same wall: Chapter 5 for adoption, Chapter 7 for a governance failure, Chapter 8 for the board.</p>
<div class="callout"><p>The single habit that makes the rest work is reporting what is not working before anyone asks. Elena does it at every board meeting from Chapter 7 onwards, and in Chapter 8 it is the reason a hostile question does not land.</p></div>`,
		},
		{
			id: 'who-its-for',
			h2: 'Who the book is for, and when it tells you to wait',
			html: `<p>The book says it is written for three readers, and that they should not read it the same way:</p>
<ul>
<li><strong>The executive deciding whether and how to commit.</strong> Read Part One, then the six instruments in Part Two's introduction, then the short version at the start of each toolkit. The book puts that at roughly sixty pages, and says it is enough to lead the conversation.</li>
<li><strong>The person leading the transformation.</strong> Read all of it, in order. Part Two follows the sequence the work actually happens in, and the order matters more than any single instrument.</li>
<li><strong>The people building the capabilities.</strong> Skim Part One for the decisions and the failures, because they explain why the architecture is shaped as it is, then live in the Architecture and Deployment toolkits, where the technical depth sits.</li>
</ul>
<p>It is not a technical manual for engineers, and it is not a book of inspiration about the future of work; its own introduction names both traps and sets out to avoid them. If you want a regulatory checklist, look elsewhere: the book deliberately leaves out specific legal tiers, thresholds and dates because they differ by jurisdiction and change on their own schedule, and it tells you to confirm current rules with qualified counsel.</p>
<p>What I value most in it, as someone who has sat on both sides of these boardrooms, is that it says when not to start. If there is no sponsor with real authority, no funded transition budget for your people, and no willingness to do foundation work before chasing visible wins, the honest answer is "not yet". A failed transformation is worse than a postponed one, because it teaches the organisation that this was tried and did not work. Continuous Evolution adds the programme-level signals for pausing or stopping, and it is unambiguous that sunk cost is a reason to stop, never a reason to continue. That is the title's promise, applied to the book itself.</p>`,
		},
	],
	faq: [
		[
			"What is AI Don't Fix Stupidity about?",
			"It is a book about becoming an AI-first organisation, in two parts. Part One is a business fable in which Elena Lindqvist has twelve months to make Norvik, a fictional Nordic home-furnishings retailer, AI-first, starting from a readiness score of 1.7 out of 5. Part Two is the playbook behind the story: toolkits for assessment, strategy, architecture, deployment, people and measurement, and a plan for the first ninety days. Its thesis is in the title: AI amplifies broken processes, bad data and unclear strategy rather than fixing them.",
		],
		[
			"How many chapters does AI Don't Fix Stupidity have?",
			"Part One has nine chapters (The Mandate, The Reality Check, The Vision, First Blood, The Resistance, The Rollout, The Crisis, The Turning Point and The Compound), followed by a bridge, The Story So Far, and What It Means. Part Two has ten sections: an introduction followed by nine toolkits, from the Assessment Toolkit to Your First 90 Days and Continuous Evolution. A glossary, an index and the references close the book.",
		],
		[
			'Is Norvik a real company?',
			'No. Norvik, its competitors and its people are fictional, and the book says so. The obstacles, frameworks and mistakes come from real transformations, but every Norvik number is constructed to show how an instrument behaves. Do not use the figures as evidence of what AI typically delivers; use the method that produced them.',
		],
		[
			'Can I skip the story and go straight to the playbook?',
			'Yes. The book is designed to be entered at several points, and the bridge between the parts is a ten-minute version of the story for readers who start with the playbook. The story is still worth reading eventually, because nearly every instrument in Part Two is presented together with the failure that produced it.',
		],
		[
			'What are the six instruments in Part Two?',
			'The book names six load-bearing instruments: the <a href="/frameworks/eight-dimension-readiness-assessment/">Readiness Assessment</a>, <a href="/frameworks/six-shifts/">the Six Shifts</a>, <a href="/frameworks/three-lens-prioritisation/">Three-Lens Prioritisation</a>, <a href="/frameworks/ai-factory/">the AI Factory</a>, the Governed Digital Coworker Architecture, and <a href="/frameworks/ai-heartbeat/">the AI Heartbeat</a> with the value model. <a href="/frameworks/earned-autonomy-ladder/">The Earned Autonomy Ladder</a> runs through all six.',
		],
		[
			'Where should a leadership team start?',
			'With an honest assessment, in week one, before buying, hiring or starting a pilot. The book is explicit that the transformation begins with an honest score on the first assessment. <a href="/frameworks/your-first-90-days/">Your First 90 Days</a> turns that into a plan for the first week, the first month and day ninety.',
		],
	],
	sources: [
		["AI Don't Fix Stupidity: Transforming Your Business into an AI-First Operation, Magnus Oxenwaldt (BoD, 2026)", '/books/#ai-dont-fix-stupidity'],
		['Frameworks from the books, oxenwaldt.com', '/frameworks/'],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: `<p>The free companion app puts the book on your iPhone and turns its first steps into something you do. Elena's twelve months at Norvik are there chapter by chapter, to read or to listen to, with every framework in the book one tap away. The eight-dimension assessment scores your own organisation and gives you a specific next step. The ninety-day plan runs from Week 1 to Month 3, and you mark what you have done as you go. An on-device Advisor, grounded in the book and the field, answers questions on your phone through Apple Intelligence (it needs iOS 26), so your conversations never leave the device. There is no account to create, no ads, no upsell and no leaderboards.</p>`,
	},
};
