/**
 * The named frameworks from Magnus's two books, for /frameworks.
 *
 * Generated on 7 Oct 2026 from review/frameworks-hub-20261007/FRAMEWORKS.md, which was
 * extracted from the final manuscripts (Book 1 V30, Book 2 MANUSCRIPT-V4). Quotes are
 * checked against print PDFs in review/frameworks-print-audit-20261007. Edit here,
 * not in the review file. Levels are explicit groups and steps, not parsed prose.
 * `original: true` marks Book 1's "Author's Formulations" list, which says they
 * "may be referenced and adapted with attribution to the author."
 */
export const FRAMEWORKS = [
	{
		"slug": "six-shifts",
		"name": "The Six Shifts",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Strategy Toolkit, Tool 1",
		"original": true,
		"definition": "\"The Six Shifts define what \"AI-first\" means in practice: six transformations that together create a new way of working, each building toward the endgame: a Digital Coworker for every employee, an industry-specific, memory-equipped AI with access to enterprise tools and autonomous capability within governed boundaries.\"",
		"summary": "The Six Shifts describe the target operating model of an AI-first organisation. Each shift is a movement from an old way of working to a new one. The book insists they are \"interdependent, not sequential\": you advance all six together, at different speeds in different teams, and the effort collapses if one is neglected. Which shift you talk about first is a communication choice, not a delivery order. Each shift has one metric that shows it is real, for example time from question to answer for Shift 1, and the human-to-AI ratio per function for Shift 6. The book singles out Shifts 3 and 4 as the most confused: Shift 3 is the intelligence, Shift 4 the plumbing, and Norvik's mid-year pricing crisis happened when the plumbing ran ahead of the intelligence.",
		"levelsLabel": "The shifts",
		"levels": [
			{
				"label": "",
				"steps": [
					"Commands to Conversations",
					"Fixed Projects to Iterative Value",
					"Silos to Unified Intelligence",
					"Integration to Orchestration",
					"Automation to Autonomous Action",
					"Solo Work to Hybrid Workforce"
				]
			}
		],
		"monday": "\"Read the Six Shifts aloud in a room with your leadership team. For each shift, ask: \"Where are we? What is blocking us? What do we do first?\"\""
	},
	{
		"slug": "three-ai-eras",
		"name": "The Three AI Eras",
		"aka": null,
		"book": 2,
		"chapter": "Book 2, Part Two, \"The eras, named once\". Book 1, Part 2, The Strategy Toolkit, Tool 2, covers the second and third",
		"original": true,
		"definition": "\"I keep saying this era, so let me name the eras once, here, and then use the names.\"",
		"summary": "The tool era is where all of us started and where most organisations still are: narrow machine learning, deterministic automation, and the first language models, \"which you prompted and which answered, and which forgot you the moment they had.\" The partnership era is the one we are in: jagged intelligence, brilliant and unreliable in the same breath, so a human has to be the half that decides. Book 1 draws the line that matters inside it: a capability can climb all the way to running a process end to end, but a named human stays accountable. \"Autonomy can be delegated, that is the entire point of building capabilities. Accountability cannot.\" Book 2 describes the era after as general intelligence, when the machine is right often enough that checking stops making sense. Book 1 draws its Beyond Partnership boundary differently: accountability is assigned to the AI itself, a governance decision rather than a model benchmark.",
		"levelsLabel": "The eras",
		"levels": [
			{
				"label": "",
				"steps": [
					"The tool era",
					"The partnership era",
					"The era after (Book 1: Beyond Partnership)"
				]
			}
		],
		"monday": "Check that every AI capability you run has the three things Book 1 says never come off: a name (a person who owns it), a trail (what it did and why) and a brake (someone who can stop it, and has rehearsed doing so).",
		"books": [
			1,
			2
		]
	},
	{
		"slug": "eight-dimension-readiness-assessment",
		"name": "The Eight-Dimension Readiness Assessment",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Assessment Toolkit, Tool 1",
		"original": false,
		"definition": "\"The assessment scores eight dimensions that together structure the diagnosis and the plan: where the foundation work is, what to sequence first, which conversations to have with which teams.\"",
		"summary": "Each dimension is scored 1 to 5 on the same anchored scale (Nascent, Emerging, Moderate, Advanced, Leading). The book is explicit that it does not predict timeline, cost or odds. The discipline that makes it work is honesty: \"An accurate 2 is infinitely more useful than a wishful 4\", and scores must rest on evidence, not impression. Data is called \"the single most predictive dimension\". Data and Skills & Talent carry anchored scales on the page because a weak score in either blocks the most first capabilities. Norvik's honest opening score of 1.7 is the story's version of this instrument.",
		"levelsLabel": "The dimensions",
		"levels": [
			{
				"label": "",
				"steps": [
					"Data",
					"Technology",
					"Skills & Talent",
					"Culture & Change Readiness",
					"Processes",
					"Business Capabilities",
					"Value Streams",
					"Operating Model"
				]
			}
		],
		"monday": "\"Run the 8-Dimension AI Readiness Assessment (Assessment Toolkit). Score every dimension honestly. Do not round up.\""
	},
	{
		"slug": "three-lens-prioritisation",
		"name": "Three-Lens Prioritisation",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Deployment Toolkit, Tool 1",
		"original": true,
		"definition": "\"The rule is an and-gate, not an average: strong on all three, it goes first; weak on any one, it waits.\"",
		"summary": "Every candidate capability is judged on business value, technical feasibility and organisational readiness, each with a floor it must clear. A capability enters the current wave only when it clears all three; a high-value idea on unusable data does not average its way through, it waits, and its foundation work becomes the readiness task that lets it back in. An optional 40/35/25 weighting may sort a long list, but \"A weighted score can never buy a capability past a failed floor.\"",
		"levelsLabel": "The lenses",
		"levels": [
			{
				"label": "",
				"steps": [
					"Business value",
					"Technical feasibility",
					"Organisational readiness"
				]
			}
		],
		"monday": "\"Identify 3-5 potential first-win use cases using Three-Lens Prioritisation.\""
	},
	{
		"slug": "ai-factory",
		"name": "The AI Factory",
		"aka": "the Agentic Framework",
		"book": 1,
		"chapter": "Part 2, The Deployment Toolkit, Tool 2",
		"original": true,
		"definition": "\"The AI Factory is how you build it: repeatedly, on a cadence, so that the tenth capability is faster and cheaper than the first. It is a production line, not a project.\"",
		"summary": "The factory is the delivery engine. Its five components are one operating method, not a strict order: discovery never stops, and value delivery runs throughout. Sprints are two to four weeks, one process each, and the short cycle is \"a forcing function\" that obliges the team to find the smallest piece that delivers value on its own. Each capability is owned by a standing team of four roles. The number to watch is not sprint velocity but Time to Value.",
		"levelsLabel": "Components",
		"levels": [
			{
				"label": "Components",
				"steps": [
					"Process Discovery",
					"AI Opportunity Backlog",
					"AI Sprints",
					"AI Teams",
					"Continuous Value Delivery"
				]
			},
			{
				"label": "AI Team roles",
				"steps": [
					"Industry Expert",
					"AI & Agent Expert",
					"Process Owner",
					"IT Representative"
				]
			}
		],
		"monday": "\"Begin the first sprint of the AI Factory: a 2-4 week iteration, one process, a four-role AI Team.\""
	},
	{
		"slug": "earned-autonomy-ladder",
		"name": "The Earned Autonomy Ladder",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Deployment Toolkit, Tool 5",
		"original": false,
		"definition": "\"The Earned Autonomy ladder is one instrument with two views: an org-wide view for how far a whole organisation or department has come, and a per-capability view for how much a specific capability is trusted to do on its own.\"",
		"summary": "No organisation earns trust by decree. The two views move independently: a Scaling department can still run a new capability on the most supervised rung. A capability climbs one rung at a time on evidence (golden-set evaluation, sustained agreement, complete audit trail, accepted residual risk) and can be demoted on the same evidence. Planning defaults: a golden set of roughly 150 to 200 cases per capability and a permanent sampled human-review floor of about 1 to 3%, both adjusted for the consequence class of the work. The riskier the tools in scope, the more evidence a capability needs before it climbs.",
		"levelsLabel": "Levels",
		"levels": [
			{
				"label": "Org-wide stages",
				"steps": [
					"Curious",
					"Experimenting",
					"Scaling",
					"Frontier"
				]
			},
			{
				"label": "Per-capability rungs",
				"steps": [
					"Assisted",
					"Supervised",
					"Bounded autonomy",
					"Audited autonomy"
				]
			}
		],
		"monday": "\"Complete the full assessment and stage every department on the Earned Autonomy ladder's org-wide view, Curious / Experimenting / Scaling / Frontier.\""
	},
	{
		"slug": "five-layer-context-hierarchy",
		"name": "The Five-Layer Context Hierarchy",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Governed Digital Coworker Architecture (Architecture Toolkit). **Author's formulation.**",
		"original": true,
		"definition": "\"An agent is only as good as the context it stands on. The author's integrated formulation organises that context into five layers.\"",
		"summary": "Context is the one part of the architecture the business rather than IT must own. Each layer has a named owner. \"You can buy scaffolding for the top layer; the content of all five is yours, and the lower four can only be earned inside the organisation.\" Fine-tuning does not create a context layer; facts, policy and authority boundaries stay explicit, versioned and outside the model's weights. Live transactional data sits outside the hierarchy, behind governed tools. The ownership model drives build versus buy, with one rule underneath: \"never buy the context layer.\" The book also names the role that does this work, the context engineer.",
		"levelsLabel": "Layers",
		"levels": [
			{
				"label": "",
				"steps": [
					"Company",
					"Market Unit",
					"Business Line",
					"Role",
					"Individual"
				]
			}
		],
		"monday": "\"Strategy's only job is to insist that each layer is assigned to a named human owner before any capability scales.\""
	},
	{
		"slug": "verification-map",
		"name": "The Verification Map",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Strategy Toolkit, \"Context Is an Architecture Decision\". **Author's formulation.**",
		"original": true,
		"definition": "\"Owning a layer means answering for the quality of what it supplies, and the check for that is the Verification Map, five questions asked of the context a layer feeds an agent, or of any AI-generated artefact built on it\"",
		"summary": "The map is a quality check, separate from the context hierarchy: the hierarchy says where context lives and who owns it, the map checks what each layer supplies. Each check is a question the layer owner must answer. The book's rule is short: a layer that cannot pass the map is not ready to scale, whoever owns it. The book credits the data-quality dimensions tradition it builds on.",
		"levelsLabel": "Checks",
		"levels": [
			{
				"label": "",
				"steps": [
					"Relevance",
					"Freshness",
					"Completeness",
					"Consistency",
					"Efficiency"
				]
			}
		],
		"monday": "\"A layer that cannot pass the map is not ready to scale, whoever owns it.\""
	},
	{
		"slug": "tool-risk-ladder",
		"name": "The Tool Risk Ladder",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Governed Digital Coworker Architecture",
		"original": true,
		"definition": "\"The Tool Risk Ladder classifies the *tools* an agent may call, what it can physically do in your systems.\"",
		"summary": "Every tool is classified before deployment by what it can do, with approval rising by level. What a tool can read is a second axis: a read-only tool over restricted data at whole-repository scope is not \"Low\" in any meaningful sense. Credentials are granted just in time and expire with the task. A tool is reclassified whenever it gains a data source, write access, new markets or a new model. The book's worked example is Norvik's pricing crisis: one retrieval tool misfiled as read-only, 410 customers quoted wrong prices, EUR 38,000 direct loss, and \"None of it required a bad model.\"",
		"levelsLabel": "Levels",
		"levels": [
			{
				"label": "",
				"steps": [
					"Low (read-only, no approval)",
					"Medium (creates, does not send; optional)",
					"High (publishes or commits externally; required)",
					"Critical (irreversible or high-impact; always explicit)"
				]
			}
		],
		"monday": "\"Tool risk is the argument to have in the design room\""
	},
	{
		"slug": "governance-tiers",
		"name": "Governance Tiers",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Governed Digital Coworker Architecture, \"Governance tiers, consequence, and explainability\". Not listed separately among the author's formulations",
		"original": false,
		"definition": "\"Governance Tiers 1 to 3 classify how consequential a capability's decisions are and how much human judgement must stay in the loop.\"",
		"summary": "Tiers classify the decision; the Tool Risk Ladder classifies the tool. They are independent and both are assessed for every capability, and \"confusing them is the single most common architecture mistake\". What moves a capability up is consequence and reversibility, not money: \"A high-value recommendation a human checks is Tier 2. A low-value decision about a person that nobody checks is Tier 3.\" The book also retires \"deploy at 95% accuracy\" and sets a transparency floor: explainable, confirmable, auditable, bounded, escalatable.",
		"levelsLabel": "Tiers",
		"levels": [
			{
				"label": "",
				"steps": [
					"Low (meeting summaries, data analysis)",
					"Medium (churn scoring, pricing recommendations)",
					"High (credit, hiring, regulatory decisions)"
				]
			}
		],
		"monday": "\"Governance you add later is governance you pay for twice.\""
	},
	{
		"slug": "agentic-development-lifecycle",
		"name": "The Agentic Development Lifecycle (ADLC) and the deployment gate",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Governed Digital Coworker Architecture",
		"original": true,
		"definition": "\"The Agentic Development Lifecycle (ADLC) is not a replacement for the Software Development Life Cycle; it is an extension of it, adding the steps a non-deterministic system needs on top of everything disciplined engineering already demands.\"",
		"summary": "Because an agent does not behave the same way every time, evaluation is \"a gate, not a stage\": automated, unattended and blocking, with golden-set and adversarial cases run on every proposed change. Online evaluation separately samples live traffic against the same rubric and compares the results with offline evaluation to detect drift. Human verification judges only what the suite cannot and cannot be skipped. Deployment is staged from Customer Zero to pilot to canary to full production. \"Every change to a system instruction is a deployment, and every deployment is measured.\" Every capability then passes one deployment gate of four questions.",
		"levelsLabel": "Steps",
		"levels": [
			{
				"label": "",
				"steps": [
					"Propose",
					"Evaluate",
					"Measure",
					"Verify",
					"Deploy",
					"Monitor"
				]
			},
			{
				"label": "Deployment gate",
				"steps": [
					"Right problem",
					"Right build",
					"Right proof",
					"Right to run"
				]
			}
		],
		"monday": ""
	},
	{
		"slug": "ai-heartbeat",
		"name": "The AI Heartbeat",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Measurement Toolkit, Tool 1. **Author's formulation.**",
		"original": true,
		"definition": "\"The AI Heartbeat is a single 1–10 health score for a capability, and the mean of three sub-scores, each also on a 1–10 scale\"",
		"summary": "The Heartbeat is the number a manager reads; the harder metrics are what they open when a sub-score moves. It carries a floor rule the average cannot supply: any sub-score below its consequence floor turns the capability red, whatever the mean says, so a capability scoring 10, 1, 10 is not \"healthy\". Sub-scores are anchored so two people land in the same place. It is reported per capability and rolled up monthly, with a stated weighting and never as a lone company number. It runs 1 to 10 and must never be blended with the 1 to 5 readiness scale. Norvik read 3.2 at month six and 5.4 at month twelve.",
		"levelsLabel": "Dimensions",
		"levels": [
			{
				"label": "",
				"steps": [
					"Usage",
					"Quality",
					"Efficiency"
				]
			}
		],
		"monday": "\"Its value is as an early-warning signal: a single sub-score sliding is visible long before it reaches the P&L.\""
	},
	{
		"slug": "five-category-value-model",
		"name": "The Five-Category Value Model",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Measurement Toolkit, Tool 2. **Author's formulation.**",
		"original": true,
		"definition": "\"Every claim of \"value\" in this programme resolves into exactly five categories, and they are never silently added together\"",
		"summary": "Categories are reported separately, and a total is allowed only with its summing rule stated beside it. Value is a metric-delta, not a story: the change in a defined metric against a frozen baseline, times agreed unit economics, times an attribution share agreed before deployment. Fixing that share in advance \"is what stops the number becoming an argument after the fact.\" Every ROI taxonomy elsewhere in the book folds into these five, and the discipline keeps the claims audit-ready.",
		"levelsLabel": "Categories",
		"levels": [
			{
				"label": "",
				"steps": [
					"Realised cash savings",
					"Avoided future cost",
					"Capacity unlocked",
					"Incremental gross margin",
					"Risk-adjusted avoided loss"
				]
			}
		],
		"monday": ""
	},
	{
		"slug": "time-to-value",
		"name": "Time to Value",
		"aka": "three clocks",
		"book": 1,
		"chapter": "Part 2, The Measurement Toolkit, Tool 3",
		"original": false,
		"definition": "\"Time to Value is not a project metric. A project metric asks how long *that* build took. Time to Value asks what the organisation is *capable of*, and it is the leading indicator of every other number in this toolkit.\"",
		"summary": "Time to Value is how long the organisation takes to turn a recognised opportunity into value people are actually receiving. It matters more in the AI era because \"the opportunity does not sit still\". It is measured as three clocks with different owners and different fixes, reported separately and as a sum. Halving it does not make you twice as competitive; it moves you onto a different curve, because you capture more opportunities and each starts from a higher floor. Norvik's first capability took three months, the second three weeks.",
		"levelsLabel": "Clocks",
		"levels": [
			{
				"label": "",
				"steps": [
					"Decision latency",
					"Build latency",
					"Absorption latency"
				]
			}
		],
		"monday": "\"Report all three separately and the sum together\""
	},
	{
		"slug": "ai-change-organisation",
		"name": "The AI Change Organisation",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The People Toolkit, Tool 1. **Author's formulation.**",
		"original": true,
		"definition": "\"The answer is a dedicated AI Change Organisation that sits alongside line management, not on top of it.\"",
		"summary": "Line management is busy running the business, so a transformation that loads the change work onto it runs at line management's spare capacity, \"usually zero\". The change organisation has three rings beside line management. The Centre of Excellence owns platform, standards, gates and measurement, and works by \"coaching, not command-and-control\". Enablement Partners own local adoption in each business line and market unit. Champions are \"not assigned by job title. They are noticed\", and need protected time, formal objectives and a manager's agreement. The author's note names the monthly forum as the single most important meeting of the transformation.",
		"levelsLabel": "Rings",
		"levels": [
			{
				"label": "",
				"steps": [
					"Ring 1 AI Centre of Excellence",
					"Ring 2 AI Enablement Partners",
					"Ring 3 AI Champions (alongside Line Management)"
				]
			}
		],
		"monday": "\"Recruit the CoE nucleus: 4-7 senior people. Operating rule: coaching, not command-and-control\""
	},
	{
		"slug": "customer-zero",
		"name": "Customer Zero",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, The Deployment Toolkit, Tool 3. The term predates the book; the staged-gate discipline is the author's extension",
		"original": false,
		"definition": "\"Before an AI capability faces a customer, it faces your own people.\"",
		"summary": "Use your own organisation as the proving ground: failure is cheap, feedback is honest, \"We run this ourselves\" earns credibility, and the unglamorous operational problems get solved first. The book warns that internal deployment can still do harm to employees. The four-stage list below follows the Deployment Toolkit, which separates an internal pilot from Customer Zero, a lead customer who agrees to co-create. The Architecture Toolkit uses Customer Zero for the first internal user instead. The passages use the name differently; both require staged testing before wider rollout.",
		"levelsLabel": "Stages",
		"levels": [
			{
				"label": "",
				"steps": [
					"Internal pilot",
					"Customer Zero",
					"Limited rollout",
					"Full production"
				]
			}
		],
		"monday": ""
	},
	{
		"slug": "your-first-90-days",
		"name": "Your First 90 Days",
		"aka": null,
		"book": 1,
		"chapter": "Part 2, Your First 90 Days",
		"original": false,
		"definition": "\"Week one is assess. Do not buy anything, do not hire anyone, do not start a pilot.\"",
		"summary": "The toolkit answers \"what do I actually do on Monday morning?\" by turning the frameworks into three periods, each with the evidence to hold at the end. Week one is assessment only, plus starting the long-pole clocks (vendor agreements, consultation obligations, impact assessments) because none of them compresses. The first month stages departments, picks first wins with Three-Lens, starts the first factory sprint and recruits the CoE nucleus. Day ninety ends with a 90-Day Evidence Check.",
		"levelsLabel": "Periods",
		"levels": [
			{
				"label": "",
				"steps": [
					"Week 1: Honest Assessment",
					"Weeks 2-4: First Month",
					"Months 2-3: First 90 Days"
				]
			}
		],
		"monday": "\"Week 1 rule: Do not buy anything. Do not hire anyone. Do not start a pilot. Assess.\""
	},
	{
		"slug": "four-ingredients",
		"name": "The Four Ingredients",
		"aka": null,
		"book": 2,
		"chapter": "Part Two, \"The Partnership\"",
		"original": false,
		"definition": "\"To get value from AI in this era you need four things: Human intelligence + AI + context + tools.\"",
		"summary": "The simplest model the author uses \"in every organisation I help\". The first three are like a fire's heat, fuel and air: take one away and there is no fire. A clever person with a model and no context gets a generic answer; a model with context and no human produces plausible work nobody can trust. Tools are what the fire burns on, the difference between an assistant that tells you what to do and a coworker that does it inside your mandate. Context is the ingredient most people neglect, and tools the one most organisations withhold. The same four later become the basis for valuing a person's work: how much of the value depended on this human's intelligence and this human's context.",
		"levelsLabel": "Ingredients",
		"levels": [
			{
				"label": "",
				"steps": [
					"Human intelligence",
					"AI",
					"Context",
					"Tools"
				]
			}
		],
		"monday": ""
	},
	{
		"slug": "last-mile",
		"name": "The Last Mile",
		"aka": null,
		"book": 2,
		"chapter": "Part Two, \"The Partnership\" (Onboarding), and \"Context Is the Craft\" (The layers)",
		"original": false,
		"definition": "\"The last mile is you.\"",
		"summary": "Treat a digital coworker like a new hire and onboard it. In a well-run enterprise the upper context layers (company, market unit, business line, role) arrive on their own; the bottom layer no company can supply. It is how you want to be worked with: your tempo, format, when to act and when to ask. It is non-transferable: someone else's would be \"worse than nothing\". The best last mile \"is not long. It is exact.\" The author's own is seven pages.",
		"levelsLabel": "",
		"levels": [],
		"monday": "\"Open the coworker ... and give it the last mile. Ten minutes.\""
	},
	{
		"slug": "twenty-seventy-ten",
		"name": "Twenty, Seventy, Ten",
		"aka": null,
		"book": 2,
		"chapter": "Part Two, \"The Partnership\"",
		"original": false,
		"definition": "\"Roughly twenty percent of the effort on any piece of work that matters is mine, at the start\"",
		"summary": "A rule for dividing effort inside the partnership. About twenty percent is the human's at the start: giving the coworker context, guidelines, intent, what good looks like and who it is for. About seventy percent is the coworker's: producing the artefact. About ten percent is the human's again at the end: reading, judging, changing what is not right, checking the claim you do not recognise. \"So about thirty percent of the effort inside the partnership is mine, and I get the whole result.\" It is a share of effort, not of hours; the example given is a forty-hour fact-finding task that became a two-hour one.",
		"levelsLabel": "Split",
		"levels": [
			{
				"label": "",
				"steps": [
					"20 (brief)",
					"70 (coworker)",
					"10 (review)"
				],
				"numbered": false
			}
		],
		"monday": "\"Put in the twenty and the ten. The briefing at the start, done properly; the reading at the end, done honestly.\""
	},
	{
		"slug": "human-half",
		"name": "The Human Half",
		"aka": null,
		"book": 2,
		"chapter": "Part Two, \"The Human Half\"",
		"original": false,
		"definition": "\"It is an inventory of what the human actually contributes.\"",
		"summary": "The human ingredient of the four, itemised in the order the author found the items to matter. The point is that almost everything that decides whether the output is worth anything happens on the human side of the desk, mostly invisibly, before the brief and after the result. The first item, knowing what good looks like, is \"the ability to tell a good result from a plausible one\".",
		"levelsLabel": "Items",
		"levels": [
			{
				"label": "",
				"steps": [
					"Knowing what good looks like",
					"Intent",
					"The memory bank",
					"Breadth",
					"Leadership communication",
					"Prioritisation and attention",
					"Accountability",
					"A moral compass",
					"Curiosity, and the appetite to keep learning"
				]
			}
		],
		"monday": ""
	},
	{
		"slug": "gate-dont-inspect",
		"name": "Gate, Don't Inspect",
		"aka": "and the dial",
		"book": 2,
		"chapter": "Part Two, \"Checking Work You Did Not Do\"",
		"original": false,
		"definition": "\"I do not inspect. I gate.\"",
		"summary": "Work you did not do is trusted the way leaders have always trusted others' work: by building a process that makes it trustworthy and reading what the process cannot decide. Three gates (automated testing, staging, and \"advisory\", several other models reviewing) produce a queue of exceptions. The human reads the output and the flagged exceptions, with sources when the material is unfamiliar. Customer zero runs everything internally first. The policy in one line: \"output always, sources when I do not already know the ground, reasoning never.\" How much to check is a dial set by what is at stake, and \"*trust more* is not *check less on the things that matter*.\"",
		"levelsLabel": "Gates",
		"levels": [
			{
				"label": "",
				"steps": [
					"Automated testing",
					"Staging",
					"Advisory"
				]
			}
		],
		"monday": "\"Keep out micromanagement. Do not read the reasoning.\""
	},
	{
		"slug": "your-first-thirty-days",
		"name": "Your First Thirty Days",
		"aka": null,
		"book": 2,
		"chapter": "Part Two, \"Your First Thirty Days\"",
		"original": false,
		"definition": "\"This is what I would tell them, and it is short, because the doing is the point.\"",
		"summary": "The personal counterpart to Book 1's first 90 days. First hour: write the last mile and hand over three long tasks. First day: read the results properly, tell the coworker what was wrong and why, route every weighty task through it. First week: put in parallelism (three streams, then five), the twenty and the ten, and abundance (ask for three versions); keep out micromanagement. By thirty days expect real value, \"Not ten x. Perhaps two; perhaps three\", and the first thing to have gone wrong, owned in a sentence with your name in it.",
		"levelsLabel": "Stages",
		"levels": [
			{
				"label": "",
				"steps": [
					"The first hour",
					"The first day",
					"The first week",
					"The thirty-day mark"
				]
			}
		],
		"monday": "\"Do not open your mail. Open the coworker\""
	}
];
