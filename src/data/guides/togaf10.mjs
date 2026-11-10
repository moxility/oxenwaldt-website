// Free reference guide for the TOGAF 10 Practice companion page.
// Exam facts checked against The Open Group's own pages on 10 November 2026; research log:
// review/app-guides-20261110/togaf10-sources.md. Paraphrase only: never paste text from the standard.
export default {
	slug: 'togaf10',
	nav: 'Study guide',
	title: 'TOGAF 10 Study Guide: the ADM Phases, Exams and What Changed',
	description:
		'The TOGAF Standard, 10th Edition explained: each ADM phase with its outputs and traps, the content framework, and the EA Foundation and Practitioner exams.',
	ogTitle: 'TOGAF 10 study guide: the ADM phase by phase, and how the EA Foundation and Practitioner exams really work',
	ogDescription:
		'There is no exam called TOGAF 10 Foundation. What the 10th Edition changed, every ADM phase with its outputs and traps, and the exam formats from The Open Group’s own datasheets.',
	eyebrow: 'Free reference',
	h1: 'TOGAF 10 study guide: the ADM, the content framework and the exams',
	lede:
		'A practitioner’s reference to the TOGAF Standard, 10th Edition: what the Fundamental Content and Series Guides are, what each ADM phase is for and where candidates lose marks, and how the <strong>TOGAF Enterprise Architecture Foundation</strong> and <strong>Practitioner</strong> exams actually work. The exam facts come from The Open Group’s own datasheets, not from memory.',
	updated: '2026-11-10',
	checkedNote:
		'Checked against The Open Group’s TOGAF certification portfolio page and FAQ, the EA Foundation and EA Practitioner datasheets, the TOGAF Examinations summary and the C220 publication page for the 10th Edition on 10 November 2026.',
	sections: [
		{
			id: 'adm-at-a-glance',
			h2: 'The TOGAF ADM phases at a glance',
			html: `<p>The TOGAF Standard is The Open Group&rsquo;s framework for enterprise architecture, and the Architecture Development Method (ADM) is its engine: a cycle of phases that takes an organisation from a request for architecture work to governed, implemented change, with Requirements Management at the centre. The 10th Edition, launched in April 2022, kept the ADM phases and their names. What changed is how the standard around them is packaged, which matters more for your reading list than for your exam answers.</p>
<p>If you remember one thing, remember this table. A large share of Foundation questions about the ADM are a disguised version of &ldquo;which phase does this, and what does it produce?&rdquo;</p>
<div class="tbl"><table><thead><tr><th>Phase</th><th>What it is for</th><th>The output to remember</th></tr></thead><tbody>
<tr><td><strong>Preliminary</strong></td><td>Prepare the organisation to do architecture: the capability, the tailored framework, the principles and the governance.</td><td>Tailored Architecture Framework; Architecture Principles</td></tr>
<tr><td><strong>A. Architecture Vision</strong></td><td>Set the scope, find the stakeholders and their concerns, sketch baseline and target, and get approval to proceed.</td><td>Approved Statement of Architecture Work</td></tr>
<tr><td><strong>B. Business Architecture</strong></td><td>Describe the baseline and target business architecture and the gaps between them.</td><td>Business sections of the Architecture Definition Document</td></tr>
<tr><td><strong>C. Information Systems Architectures</strong></td><td>Do the same for data and applications, in either order.</td><td>Data and application sections of the Architecture Definition Document and Architecture Requirements Specification</td></tr>
<tr><td><strong>D. Technology Architecture</strong></td><td>Do the same for the technology platform that hosts it all.</td><td>Technology sections of both, and candidate roadmap components</td></tr>
<tr><td><strong>E. Opportunities and Solutions</strong></td><td>Consolidate the gaps, group them into work packages and define Transition Architectures.</td><td>First complete Architecture Roadmap; initial Implementation and Migration Plan</td></tr>
<tr><td><strong>F. Migration Planning</strong></td><td>Prioritise and sequence the work with the portfolio owners, by value, cost and risk.</td><td>Finalised Implementation and Migration Plan</td></tr>
<tr><td><strong>G. Implementation Governance</strong></td><td>Make sure the implementation projects build what was architected.</td><td>Signed Architecture Contracts; Compliance Assessments</td></tr>
<tr><td><strong>H. Architecture Change Management</strong></td><td>Keep the architecture fit for purpose and decide when a change needs a new cycle.</td><td>Change Requests; a new Request for Architecture Work</td></tr>
<tr><td><strong>Requirements Management</strong> (the centre)</td><td>Store requirements and route them to and from every phase. It does not prioritise them itself.</td><td>Requirements Impact Assessment</td></tr>
</tbody></table></div>
<div class="callout"><p><strong>TOGAF&reg; is a registered trademark of The Open Group.</strong> This page is an independent study reference written by a practising enterprise architect. It paraphrases the standard rather than reproducing it and is not affiliated with, endorsed by or sponsored by The Open Group. Use <a href="https://www.opengroup.org/togaf">the TOGAF Standard itself</a> as your primary source; see also the <a href="/togaf10/togaf-attribution.html">attribution note</a>.</p></div>`,
		},
		{
			id: 'what-changed',
			h2: 'What changed in the TOGAF Standard, 10th Edition',
			html: `<p>The Open Group launched the 10th Edition on 25 April 2022 with what it called a refreshed, modular structure. The standard now has two parts:</p>
<ul>
<li><strong>Fundamental Content:</strong> the core concepts and practices, meant to stay stable and long-lived.</li>
<li><strong>Series Guides:</strong> guidance on configuring and applying that core for a particular kind of organisation, architecture style or problem. These are the fast-moving part, and new ones appear between editions.</li>
</ul>
<p>The reason for the split is that the core no longer has to be reissued every time the guidance improves. The Open Group frames it as separating enduring, universal concepts from proven best practice and from emerging ideas. In my view this is the most useful change in the edition. TOGAF 9.x read as one enormous document that people were tempted to follow end to end; the 10th Edition makes it explicit that you take the core and configure it.</p>
<h3>The six Fundamental Content documents</h3>
<p>The right-hand column is my mapping to the published Part 1 syllabus areas, which mirror the document titles closely.</p>
<div class="tbl"><table><thead><tr><th>Document</th><th>What it covers</th><th>Closest Part 1 syllabus area</th></tr></thead><tbody>
<tr><td><strong>Introduction and Core Concepts</strong></td><td>What enterprise architecture and the TOGAF Standard are, the core concepts and the definitions.</td><td>Concepts (8 questions)</td></tr>
<tr><td><strong>Architecture Development Method</strong></td><td>The phases, their objectives, inputs, steps and outputs, and Requirements Management.</td><td>Introduction to the ADM (14 questions)</td></tr>
<tr><td><strong>ADM Techniques</strong></td><td>Techniques used inside the phases, among them architecture principles, stakeholder management, gap analysis, migration planning, business transformation readiness, risk management and capability-based planning.</td><td>Introduction to the ADM Techniques (6 questions)</td></tr>
<tr><td><strong>Applying the ADM</strong></td><td>Adapting the method: iteration, architecture levels, partitioning, and use in agile and digital settings.</td><td>Introduction to Applying the ADM (4 questions)</td></tr>
<tr><td><strong>Architecture Content</strong></td><td>The content framework and metamodel, artifacts, deliverables, building blocks, the Enterprise Continuum and the Architecture Repository.</td><td>Architecture Content (5 questions)</td></tr>
<tr><td><strong>Enterprise Architecture Capability and Governance</strong></td><td>Establishing an architecture capability, the Architecture Board, compliance, contracts and governance.</td><td>Introduction to Architecture Governance (3 questions)</td></tr>
</tbody></table></div>
<h3>The Series Guides</h3>
<p>The 10th Edition publication page listed 26 Series Guides when I checked, among them a practitioners&rsquo; approach to the ADM, a leader&rsquo;s guide to building an architecture capability, business capabilities, value streams, business scenarios, enterprise agility, agile sprints, the digital enterprise, risk and security, maturity models and the skills framework. The last two sat inside the core in TOGAF 9.2.</p>
<p>For the exam, treat the Series Guides as context unless your syllabus names them. For the job, they are where most of the practical value is: the business capabilities and value streams guides will improve a Phase B more than another reading of the phase description.</p>
<h3>What did not change, and what to watch for</h3>
<p>The ADM cycle and its phase names, the four architecture domains (Business, Data, Application, Technology) and the core vocabulary are all as you know them. The edition is maintained rather than frozen: the publication page shows Technical Corrigendum 1 applied in May 2025, and The Open Group added six Series Guides in 2023 and 2024. If your study material presents the Technical Reference Model (TRM) or the III-RM as core content, it is old. The Open Group marks its TRM guide as historical, based on a previous version of the standard, and neither model is named in the published Part 1 syllabus areas.</p>`,
		},
		{
			id: 'adm-phases',
			h2: 'The ADM phases one by one: purpose, inputs, outputs and mistakes',
			html: `<p>For each phase: what it is for, what goes in and comes out, and where people go wrong, in the exam and on real engagements. The inputs and outputs listed are the ones the exams lean on, not the complete lists in the standard.</p>
<h3>Preliminary phase</h3>
<p><strong>What it is for.</strong> Getting the organisation ready to do architecture at all. You decide what enterprise architecture capability the organisation wants, establish it, tailor TOGAF (and whatever other frameworks are already in use) to fit, agree architecture principles, and put governance, tools and a repository in place. It is about the capability, not about any one initiative.</p>
<p><strong>Key inputs.</strong> The TOGAF Library and other frameworks in use, the organisation&rsquo;s business principles, goals and drivers, existing governance and legal frameworks, and the current architecture capability, if there is one.</p>
<p><strong>Key outputs.</strong> The Organizational Model for Enterprise Architecture, the Tailored Architecture Framework (method, content, terminology and tools), the Architecture Principles, an initial Architecture Repository and the architecture governance framework.</p>
<p><strong>Where people go wrong.</strong> The common real-world failure is not skipping it but adopting the ADM untailored and producing every artifact in the book, because nobody decided which ones this organisation needs. In the exam, remember that architecture principles are established here and refined in Phase A, not invented in Phase B.</p>
<h3>Phase A: Architecture Vision</h3>
<p><strong>What it is for.</strong> Starting an ADM cycle properly. Phase A confirms scope and constraints, identifies the stakeholders and what they care about, sets out a high-level view of the baseline and target architectures, shows how the change creates business value, and obtains approval to go ahead.</p>
<p><strong>Key inputs.</strong> A Request for Architecture Work from the sponsoring organisation, plus the outputs of the Preliminary phase: the principles, the tailored framework and the repository.</p>
<p><strong>Key outputs.</strong> An approved Statement of Architecture Work, the Architecture Vision, refined business principles, goals and drivers, a Capability Assessment, a Communications Plan and the first draft of the Architecture Definition Document with high-level baseline and target views. Typical techniques here are stakeholder management, business scenarios, the Business Transformation Readiness Assessment and risk management.</p>
<p><strong>Where people go wrong.</strong> Confusing the Architecture Vision with the Statement of Architecture Work. The vision is the summary of where we are going; the Statement of Architecture Work is the agreement on scope, approach, plan and resources that the sponsor signs, and it is what is approved at the end of Phase A. On real engagements the classic failure is a persuasive vision with no sponsor signature, and a stakeholder list that names people but not their concerns.</p>
<h3>Phase B: Business Architecture</h3>
<p><strong>What it is for.</strong> Describing how the business works today and how it needs to work to deliver the vision: capabilities, value streams, organisation, processes and the information they use. Then identifying the gaps, and the candidate pieces of work that would close them.</p>
<p><strong>Key inputs and outputs.</strong> In come the approved Statement of Architecture Work, the Architecture Vision and the draft Architecture Definition Document. Out come the business sections of that document, a draft Architecture Requirements Specification and the business components of an Architecture Roadmap.</p>
<p><strong>Where people go wrong.</strong> Modelling the organisation chart and calling it business architecture. Structure changes every year; capabilities and value streams are what stay stable enough to plan against. The second failure is reaching for technology answers here. Phase B is about the business, and a target that already names products has skipped two phases.</p>
<h3>The steps that B, C and D share</h3>
<p>Phases B, C and D follow essentially the same sequence, and the exam expects you to know it: select reference models, viewpoints and tools; describe the baseline; describe the target; perform gap analysis; define candidate roadmap components; resolve impacts across the wider Architecture Landscape; hold a formal stakeholder review; finalise the architecture; and update the Architecture Definition Document. Gap analysis therefore happens three times, once per domain. The results are consolidated later, in Phase E.</p>
<h3>Phase C: Information Systems Architectures</h3>
<p><strong>What it is for.</strong> Developing the data architecture and the application architecture that support the target business architecture. They are two architectures inside one phase, and the standard lets either come first, or both run together, depending on the situation.</p>
<p><strong>Key inputs and outputs.</strong> The same shape as Phase B: the data and application sections of the Architecture Definition Document and the Architecture Requirements Specification, plus candidate roadmap components.</p>
<p><strong>Where people go wrong.</strong> Assuming a fixed order. In the exam, an option insisting that data must always precede applications (or the reverse) is wrong. In practice, an application inventory that is not traced to business capabilities is a spreadsheet, not an architecture.</p>
<h3>Phase D: Technology Architecture</h3>
<p><strong>What it is for.</strong> Describing the technology components and platforms, logical and physical, needed to host the applications and data. Same steps, same outputs pattern, for the technology domain.</p>
<p><strong>Where people go wrong.</strong> Starting here. Organisations with a strong infrastructure function often run Phase D first because it is the part they understand, then retrofit a business case. The ADM puts technology fourth for a reason: the platform should be chosen for what the business and the applications need, not the other way round.</p>
<h3>Phase E: Opportunities and Solutions</h3>
<p><strong>What it is for.</strong> Phase E is the first phase concerned directly with implementation. It takes the gaps from B, C and D, consolidates them, groups them into work packages, decides whether the change has to be delivered in increments and, if so, defines the Transition Architectures between baseline and target. It also identifies the delivery vehicles (projects, programmes, portfolios) and the broad approach: build, buy or reuse.</p>
<p><strong>Key inputs and outputs.</strong> In come the outputs of B to D, the Architecture Requirements Specification and the Business Transformation Readiness Assessment. Out come a first complete Architecture Roadmap, the Transition Architectures and an initial Implementation and Migration Plan.</p>
<p><strong>Where people go wrong.</strong> Treating Phase E as procurement. It is about sequencing change the business can absorb. The exam trap is the timing of Transition Architectures: they are first defined in Phase E and confirmed in Phase F.</p>
<h3>Phase F: Migration Planning</h3>
<p><strong>What it is for.</strong> Turning the roadmap into a plan the organisation will actually fund and run. Work packages are prioritised by business value, cost and risk, and the plan is coordinated with the enterprise&rsquo;s portfolio, project and change management.</p>
<p><strong>Key outputs.</strong> The finalised Architecture Roadmap and Implementation and Migration Plan, the finalised Architecture Definition Document and Architecture Requirements Specification, the Implementation Governance Model, and change requests for the architecture capability arising from what was learned.</p>
<p><strong>Where people go wrong.</strong> Building the migration plan inside the architecture team and presenting it to the portfolio office as finished. If the portfolio owners did not shape it, it will not survive the first budget round. Exam point: the Implementation Governance Model is produced in Phase F and used in Phase G.</p>
<h3>Phase G: Implementation Governance</h3>
<p><strong>What it is for.</strong> Making sure the implementation projects deliver what was architected. The architecture function does not build the solution; it governs it, through Architecture Contracts with the implementers, compliance reviews, and handling the change requests that implementation throws up.</p>
<p><strong>Key outputs.</strong> Signed Architecture Contracts, Compliance Assessments, Change Requests, and solutions deployed in conformance with the architecture.</p>
<p><strong>Where people go wrong.</strong> The architects leave after Phase F. When an organisation says its architecture was ignored, the usual cause is that nobody from architecture turned up during implementation. In the exam, be wary of options in which the architecture team designs the detailed solution or runs the project: in TOGAF terms that is the delivery team&rsquo;s job.</p>
<h3>Phase H: Architecture Change Management</h3>
<p><strong>What it is for.</strong> Keeping the architecture fit for purpose once it is in place. Phase H monitors business and technology change, manages change requests against the architecture, keeps the governance framework running, and decides when a change is big enough to start a new ADM cycle.</p>
<p><strong>How change is classified.</strong> A simplification change can normally be handled through ordinary change management. An incremental change may be handled the same way, or may need partial re-architecting. A re-architecting change needs a new pass through the ADM, which starts with a new Request for Architecture Work.</p>
<p><strong>Where people go wrong.</strong> Using Phase H as an IT change board that reviews every ticket, or not having it at all, so the architecture quietly decays. The skill being tested is triage: which change needs a new cycle and which does not.</p>`,
		},
		{
			id: 'requirements-management',
			h2: 'Requirements Management: why it sits in the middle',
			html: `<p>Requirements Management sits at the centre of the ADM diagram because every phase both consumes and produces requirements. It is not a phase you complete. It is a continuous process that identifies requirements, stores them, and feeds them into and out of the relevant phases as they change.</p>
<p>The most tested fact about it is a negative one. <strong>Requirements Management does not itself prioritise, address or dispose of requirements.</strong> That work happens inside the phase the requirement belongs to. Requirements Management keeps the record and assesses the impact of change.</p>
<ul>
<li><strong>Main output:</strong> the Requirements Impact Assessment, which looks at how a new or changed requirement affects the current phase and earlier ones, and whether to carry on, revisit a phase or start a new cycle.</li>
<li><strong>Where requirements live:</strong> the Architecture Requirements Specification for the work in hand, and the Architecture Requirements Repository inside the Architecture Repository.</li>
<li><strong>The distinction to keep straight:</strong> the Architecture Definition Document describes the architecture in qualitative terms and communicates the architects&rsquo; intent; the Architecture Requirements Specification states the measurable criteria an implementation must meet to comply.</li>
</ul>
<p>On real work, a requirement agreed in Phase B that is never traced into an Architecture Contract in Phase G is a requirement nobody will be held to. Make that trace explicit.</p>`,
		},
		{
			id: 'applying-the-adm',
			h2: 'Adapting the ADM: iteration, levels and partitioning',
			html: `<p>The ADM diagram looks sequential, and candidates who learn it as a waterfall lose marks. The standard expects you to adapt it, and the Foundation syllabus tests that under the heading of applying the ADM: iteration, partitioning, and use in an agile or digital enterprise.</p>
<h3>Iteration cycles</h3>
<ul>
<li><strong>Architecture Capability iteration:</strong> the Preliminary phase and Phase A, to establish or adjust the architecture capability itself.</li>
<li><strong>Architecture Development iteration:</strong> Phases B, C and D, cycling through the domains to build up the architecture content.</li>
<li><strong>Transition Planning iteration:</strong> Phases E and F, to produce and refine the roadmap and the plan.</li>
<li><strong>Architecture Governance iteration:</strong> Phases G and H, to govern change activity.</li>
</ul>
<p>Within development you can also choose to describe the baseline first or the target first. Baseline first suits a current state that is complex or poorly understood. Target first suits one that is already well understood, so the effort goes into the future state.</p>
<h3>Architecture levels</h3>
<p>The Architecture Landscape is divided into three levels of granularity. <strong>Strategic Architecture</strong> gives the long-horizon, enterprise-wide direction. <strong>Segment Architecture</strong> is a more detailed view for a portfolio, programme or business area. <strong>Capability Architecture</strong> describes in detail how a specific capability, or increment of change, will be delivered. ADM cycles run at different levels, and a strategic cycle typically spawns several segment and capability cycles.</p>
<h3>Partitioning, agile and digital</h3>
<p>Partitioning means dividing a large enterprise&rsquo;s architecture work into manageable pieces with clear ownership, so separate teams can run their own cycles without contradicting each other. The 10th Edition also treats agile delivery and the digital enterprise as mainstream use cases, with Series Guides for both. The exam message is consistent: the ADM is a framework to be tailored, and the right amount of architecture depends on its purpose.</p>`,
		},
		{
			id: 'content-framework',
			h2: 'The content framework, the Enterprise Continuum and the Architecture Repository',
			html: `<p>This is the vocabulary part of the exam, where the wrong options are usually near-synonyms of the right one.</p>
<h3>Deliverables, artifacts and building blocks</h3>
<div class="tbl"><table><thead><tr><th>Term</th><th>What it is</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Deliverable</strong></td><td>A work product that is contractually specified, then formally reviewed, agreed and signed off by stakeholders.</td><td>Statement of Architecture Work; Architecture Definition Document</td></tr>
<tr><td><strong>Artifact</strong></td><td>A finer-grained work product describing one aspect of the architecture. Artifacts come as catalogs (lists of things), matrices (relationships between things) and diagrams (pictures of things).</td><td>An application portfolio catalog; a stakeholder map matrix</td></tr>
<tr><td><strong>Building block</strong></td><td>A potentially reusable component of enterprise capability that can be combined with others to deliver architectures and solutions.</td><td>A customer identity service, first as a specification, later as a product</td></tr>
</tbody></table></div>
<p>Deliverables contain artifacts, and artifacts describe building blocks. That one sentence answers a surprising number of Foundation questions.</p>
<h3>Architecture Building Blocks and Solution Building Blocks</h3>
<p>An <strong>Architecture Building Block</strong> (ABB) captures requirements and describes a capability in architectural terms: what is needed, not how it is bought or built. A <strong>Solution Building Block</strong> (SBB) is a candidate implementation of it, aware of products and often of a specific vendor. ABBs sit with the Architecture Continuum and SBBs with the Solutions Continuum. The discipline that matters in practice is keeping the ABB stable while SBBs change, because that is what lets you replace a product without redesigning the architecture.</p>
<h3>The Enterprise Continuum</h3>
<p>The Enterprise Continuum is a classification scheme for architecture and solution assets, from the most generic to the most specific. It has two halves with four positions each.</p>
<div class="tbl"><table><thead><tr><th>Position</th><th>Architecture Continuum</th><th>Solutions Continuum</th></tr></thead><tbody>
<tr><td>Most generic</td><td>Foundation Architecture</td><td>Foundation Solutions</td></tr>
<tr><td>Shared across many systems</td><td>Common Systems Architectures</td><td>Common Systems Solutions</td></tr>
<tr><td>Specific to a sector</td><td>Industry Architectures</td><td>Industry Solutions</td></tr>
<tr><td>Most specific</td><td>Organization-Specific Architectures</td><td>Organization-Specific Solutions</td></tr>
</tbody></table></div>
<p>Moving from generic to specific is specialisation. Moving back is generalisation, which is how a good organisation-specific design becomes a reusable asset. At each level the Architecture Continuum guides and supports the Solutions Continuum. Exam questions typically describe an asset, such as an industry reference model or a vendor&rsquo;s shared platform, and ask where it sits.</p>
<h3>The Architecture Repository</h3>
<p>The Architecture Repository holds the outputs of architecture work, as one part of a wider enterprise repository. Its parts:</p>
<ul>
<li><strong>Architecture Metamodel:</strong> the organisation&rsquo;s tailored method and content metamodel.</li>
<li><strong>Architecture Capability:</strong> the parameters, structures and processes that support governance of the repository.</li>
<li><strong>Architecture Landscape:</strong> architectural descriptions of what is in use or planned, at the strategic, segment and capability levels.</li>
<li><strong>Standards Library:</strong> the standards that new architectures must comply with.</li>
<li><strong>Reference Library:</strong> reference architectures, models, patterns, templates and viewpoints to reuse.</li>
<li><strong>Governance Repository:</strong> the record of governance activity across the enterprise.</li>
<li><strong>Architecture Requirements Repository:</strong> the architecture requirements that have been authorised.</li>
<li><strong>Solutions Landscape:</strong> the Solution Building Blocks that support the Architecture Building Blocks.</li>
</ul>
<p>If your notes say Standards Information Base or Governance Log, they predate the 10th Edition, which uses Standards Library and Governance Repository instead.</p>`,
		},
		{
			id: 'governance',
			h2: 'Architecture governance: the Board, contracts and compliance',
			html: `<p>Governance is the smallest Foundation syllabus area, at three questions, but it drives Phase G and much of Phase H, so Practitioner scenarios lean on it heavily.</p>
<ul>
<li><strong>Architecture Board:</strong> the cross-organisational body that oversees the architecture. It keeps the sub-architectures consistent, enforces compliance, rules on escalations and grants dispensations.</li>
<li><strong>Architecture Contracts:</strong> joint agreements between the parties on the deliverables, quality and fitness for purpose of an architecture. The Statement of Architecture Work is one; the agreement between the architecture function and the implementation partners in Phase G is the one most people think of first.</li>
<li><strong>Dispensations:</strong> a recorded, time-limited permission for a solution not to comply, granted when the business case outweighs the cost of non-compliance. The point of a dispensation is that it expires.</li>
</ul>
<h3>The compliance levels</h3>
<p>The standard defines degrees of compliance between an implementation and its architecture specification. They turn up in exams because they are easy to confuse.</p>
<div class="tbl"><table><thead><tr><th>Level</th><th>What it means</th></tr></thead><tbody>
<tr><td><strong>Irrelevant</strong></td><td>The implementation has nothing in common with the specification.</td></tr>
<tr><td><strong>Consistent</strong></td><td>Some features in common, implemented as specified, but parts of the specification are missing and the implementation has features the specification does not cover.</td></tr>
<tr><td><strong>Compliant</strong></td><td>Parts of the specification are not implemented, but everything that is implemented is covered by the specification and done as specified.</td></tr>
<tr><td><strong>Conformant</strong></td><td>Everything in the specification is implemented as specified, but the implementation also has features the specification does not cover.</td></tr>
<tr><td><strong>Fully conformant</strong></td><td>Full correspondence: everything specified is implemented as specified, and nothing else.</td></tr>
<tr><td><strong>Non-conformant</strong></td><td>Any of the above where some feature is implemented in a way that does not follow the specification.</td></tr>
</tbody></table></div>
<p>A quick way to hold it: compliant means nothing extra, conformant means nothing missing, and fully conformant means both.</p>`,
		},
		{
			id: 'certification',
			h2: 'TOGAF certification: the EA Foundation and EA Practitioner exams',
			html: `<p>Start with the names. <strong>There is no &ldquo;TOGAF 10 Foundation&rdquo; or &ldquo;TOGAF 10 Practitioner&rdquo; certification.</strong> The Open Group deliberately decoupled certification names from the edition of the standard, so the standard can evolve without renaming the credentials. The certifications based on the 10th Edition are <strong>TOGAF Enterprise Architecture Foundation</strong> and <strong>TOGAF Enterprise Architecture Practitioner</strong>. Each is defined by a Body of Knowledge, a subset of the standard set out in The Open Group&rsquo;s conformance requirements, not by the whole standard.</p>
<h3>The exams</h3>
<div class="tbl"><table><thead><tr><th>Exam</th><th>Questions</th><th>Time</th><th>Pass mark</th><th>Book</th><th>Leads to</th></tr></thead><tbody>
<tr><td><strong>Part 1</strong> (OGEA-101)</td><td>40 simple multiple-choice questions, one point each</td><td>60 minutes</td><td>24 of 40 (60%)</td><td>Closed</td><td>EA Foundation, and credit towards Practitioner</td></tr>
<tr><td><strong>Part 2</strong> (OGEA-102)</td><td>8 complex scenario questions, gradient scored 5, 3, 1 or 0</td><td>90 minutes</td><td>24 of 40 points (60%)</td><td>Open: an electronic copy of the Body of Knowledge is built into the exam; no paper books</td><td>EA Practitioner. Requires EA Foundation, or a Part 1 pass on the same day at the same test centre</td></tr>
<tr><td><strong>Combined</strong> (OGEA-103)</td><td>48: the 40 Part 1 questions, then the 8 Part 2 scenarios</td><td>150 minutes (60 then 90), no break, no return to Part 1</td><td>60% in each section; both must be passed</td><td>Part 1 closed, Part 2 open</td><td>EA Practitioner, no prerequisite</td></tr>
<tr><td><strong>Bridge</strong> (OGEA-10B)</td><td>10 multiple-choice plus 4 gradient-scored scenarios</td><td>60 minutes (20 then 40)</td><td>18 of 30 points (60%)</td><td>Section 2 open</td><td>EA Practitioner, for TOGAF 9 Certified holders</td></tr>
</tbody></table></div>
<p>Fail one section of the combined exam and you get no certification, but you only retake the exam for the failed section. All the exams are supervised, at Pearson VUE test centres or online through OnVUE. Part 1 and Part 2 are offered in English, French and Simplified Chinese. Candidates whose first language is not English may get extra time on an English exam. The time limits are exam time only; the booked slot is typically about 15 minutes longer for registration, a tutorial and a survey.</p>
<h3>How Part 1 is weighted</h3>
<div class="tbl"><table><thead><tr><th>Syllabus area</th><th>Questions</th></tr></thead><tbody>
<tr><td>Concepts</td><td>8</td></tr>
<tr><td>Introduction to the ADM</td><td>14</td></tr>
<tr><td>Introduction to the ADM Techniques</td><td>6</td></tr>
<tr><td>Introduction to Applying the ADM</td><td>4</td></tr>
<tr><td>Introduction to Architecture Governance</td><td>3</td></tr>
<tr><td>Architecture Content</td><td>5</td></tr>
<tr><td><strong>Total</strong></td><td><strong>40</strong></td></tr>
</tbody></table></div>
<p>More than a third of the paper is the ADM. If your study time is short, that is where it goes.</p>
<h3>What Part 2 covers</h3>
<p>Part 2 questions are drawn from eight topic areas in the Level 2 syllabus: the context for enterprise architecture; stakeholder management; Phase A as the starting point; architecture development (Phases B, C and D); implementing the architecture (Phases E, F and G); architecture change management (Phase H); requirements management; and supporting the ADM work with techniques. A single question may draw on more than one area.</p>
<h3>Other facts worth knowing</h3>
<ul>
<li><strong>No expiry.</strong> Certification is to a given version of the Body of Knowledge and does not expire, so there is no renewal requirement.</li>
<li><strong>Applied Practitioner badge.</strong> Practitioners who also complete the learning studies in an accredited training course can earn an additional Applied TOGAF Enterprise Architecture Practitioner Open Badge.</li>
<li><strong>TOGAF 9 is still in the portfolio.</strong> TOGAF 9 Foundation and TOGAF 9 Certified, based on Version 9.2, are still listed, and The Open Group says it will continue to support them. It has set no withdrawal date for the bridge route and says it will give 18 months&rsquo; notice before withdrawing it.</li>
<li><strong>Business Architecture Foundation</strong> (OGBA-101) is a separate certification on the 10th Edition: 40 questions, 60 minutes, 24 of 40 to pass, closed book.</li>
</ul>
<p>Fees vary by country and change over time, so check the current fee schedule from <a href="https://www.opengroup.org/certifications/togaf-certification-portfolio">The Open Group&rsquo;s TOGAF certification portfolio page</a> before you book.</p>`,
		},
		{
			id: 'how-to-prepare',
			h2: 'How to prepare for Part 1 and Part 2',
			html: `<h3>Part 1: closed book, 90 seconds a question</h3>
<p>Sixty minutes for forty questions is a minute and a half each. That is enough time to read carefully and not enough to reason a definition out from first principles, so Part 1 rewards recall. Learn these cold:</p>
<ul>
<li>the objective of every phase and the one or two outputs that define it (the table at the top of this page);</li>
<li>the definitions: enterprise, architecture, deliverable, artifact, building block, ABB versus SBB;</li>
<li>the positions of the Enterprise Continuum and the parts of the Architecture Repository;</li>
<li>the iteration cycles and the three architecture levels;</li>
<li>what Requirements Management does, and the one thing it does not do.</li>
</ul>
<p>Most wrong answers in Part 1 are plausible activities placed in the wrong phase. When two options both sound right, ask which phase the question is really about.</p>
<h3>Part 2: open book, about eleven minutes a scenario</h3>
<p>Eleven minutes includes reading a long scenario. The open book helps you confirm a detail; it will not teach you the ADM in the exam room. A method that works:</p>
<ol>
<li>Read the question at the end first, so you know what is being asked before you read the story.</li>
<li>Place the scenario in the ADM: which phase, which iteration, which level.</li>
<li>Identify the stakeholders and their concerns. The best answer almost always addresses the concerns the scenario names.</li>
<li>Rank the four options. The best answer does what TOGAF would do in that phase for those stakeholders; the distractor usually jumps phases, ignores a stated constraint or does the delivery team&rsquo;s job.</li>
</ol>
<p>Gradient scoring changes the strategy. The second-best answer still earns three points, so eliminating the distractor matters as much as finding the best answer. Three best answers, three second-best and two misses is 15 plus 9, which is 24: exactly the pass mark.</p>
<p>Finally, answer as TOGAF, not as your employer. The scenario describes an organisation following the standard, and the answer your own company would choose is often the distractor.</p>`,
		},
	],
	faq: [
		[
			'Is there a TOGAF 10 certification?',
			'Not under that name. The Open Group decoupled certification names from the edition of the standard. The certifications based on the TOGAF Standard, 10th Edition are TOGAF Enterprise Architecture Foundation (the Part 1 exam) and TOGAF Enterprise Architecture Practitioner (Part 2, or the combined exam).',
		],
		[
			'How many questions are on the TOGAF Foundation exam, and what is the pass mark?',
			'The TOGAF Enterprise Architecture Part 1 exam (OGEA-101) has 40 multiple-choice questions in 60 minutes. You need 24 correct, which is 60%. It is closed book.',
		],
		[
			'Is the TOGAF Practitioner exam open book?',
			'Part 2 (OGEA-102) is open book: an electronic copy of the TOGAF Enterprise Architecture Body of Knowledge is built into the exam, and no paper books are allowed. Part 1 is closed book. In the combined exam the reference becomes available only in the Part 2 section.',
		],
		[
			'How is the TOGAF Practitioner exam scored?',
			'Eight scenario questions in 90 minutes. Each has four options scored 5, 3, 1 or 0 points: best answer, second best, third best and the distractor. The maximum is 40 points and the pass mark is 24 (60%).',
		],
		[
			'Do TOGAF certifications expire?',
			'No. The Open Group’s datasheets say certification is to a given version of the Body of Knowledge and does not expire, so there is no renewal requirement.',
		],
		[
			'I am TOGAF 9 Certified. Do I have to start again?',
			'No. The bridge exam (OGEA-10B) leads to TOGAF Enterprise Architecture Practitioner: 10 multiple-choice and 4 scenario questions in 60 minutes, with a pass mark of 18 of 30 points. Your TOGAF 9 certification itself does not expire.',
		],
	],
	sources: [
		['TOGAF Enterprise Architecture Foundation datasheet, The Open Group', 'https://certification.opengroup.org/docs/datasheets/datasheet_togaf_ea_foundation.pdf'],
		['TOGAF Enterprise Architecture Practitioner datasheet, The Open Group', 'https://certification.opengroup.org/docs/datasheets/datasheet_togaf_ea_practitioner.pdf'],
		['TOGAF Examinations summary, The Open Group', 'https://certification.opengroup.org/docs/datasheets/togaf-exams.pdf'],
		['TOGAF Certification Portfolio, The Open Group', 'https://www.opengroup.org/certifications/togaf-certification-portfolio'],
		['TOGAF Certification Portfolio FAQ, The Open Group', 'https://www.opengroup.org/certifications/togaf-portfolio-faq'],
		['The TOGAF Standard, 10th Edition (C220), The Open Group Publications', 'https://publications.opengroup.org/c220'],
		['The TOGAF Standard, The Open Group', 'https://www.opengroup.org/togaf'],
		['The Open Group announces launch of the TOGAF Standard, 10th Edition (25 April 2022), The Open Group', 'https://www.opengroup.org/open-group-announces-launch-togaf-standard-10th-edition'],
		['Navigating the TOGAF Standard, 10th Edition: updates and insights (1 July 2025), The Open Group Blog', 'https://blog.opengroup.org/2025/07/01/navigating-the-togaf-standard-10th-edition-updates-and-insights/'],
		['TOGAF Conformance Requirements (Multi-Level), Version 4.0 (X2202), The Open Group', 'https://publications.opengroup.org/x2202'],
		['TOGAF Series Guide: The TOGAF Technical Reference Model (G175), The Open Group', 'https://publications.opengroup.org/g175'],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: `<p>Reading the phases is the easy part. The exams test whether you can recall the right output under time pressure in Part 1, and pick the best of four plausible actions in a Part 2 scenario. TOGAF 10 Practice is built for that: practice questions for the Foundation and Practitioner levels with an explanation behind every answer, timed mock exams in the real format and on the real clock, and weakest-topic surfacing that puts your worst area in front of you first.</p>
<p>On iPhone, an on-device tutor (iOS 26 with Apple Intelligence) explains why an answer is right without your question leaving the phone. There is also a browser version, and an account keeps your progress. The free tier gives you 30 practice questions a day; Pro unlocks Practitioner, mock exams and unlimited practice. It is an independent study aid, so treat a mock score as practice evidence, not a prediction of your result.</p>`,
	},
};
