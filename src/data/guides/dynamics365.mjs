// Free reference guide for the Dynamics 365 Cert Prep companion page.
// Every exam code, status, date, duration and weighting below was read from
// learn.microsoft.com (and two Microsoft Skills Hub posts on techcommunity.microsoft.com)
// on 10 November 2026. Research log: review/app-guides-20261110/dynamics365-sources.md
export default {
	slug: 'dynamics365',
	nav: 'Study guide',
	title: 'Dynamics 365 certifications in 2026: which exam for which role',
	description:
		'Every current Dynamics 365 certification mapped to its role and exam, what retired in 2026 (MB-700, MB-240, PL-200, PL-400), prerequisites and renewal.',
	ogTitle: 'Dynamics 365 certifications in 2026: which exam for which role, after the retirements',
	ogDescription:
		'MB-910, MB-920, MB-700, MB-240, PL-200 and PL-400 are gone. AB-100, AB-210, AB-250, AB-400 and AB-410 arrived. The current map, checked exam by exam on Microsoft Learn.',
	eyebrow: 'Free reference',
	h1: 'Dynamics 365 certifications in 2026: which exam for which role',
	lede:
		'Between December 2025 and October 2026 Microsoft retired the Dynamics 365 fundamentals, the finance and operations solution architect, Field Service and the Power Platform functional consultant exams, and moved the Power Platform developer certification to a new exam. <strong>This is the current map</strong>: every role, the certification that fits it, the exam, and its status, checked against Microsoft Learn.',
	updated: '2026-11-10',
	checkedNote:
		'Checked against the Microsoft Learn certification, exam and study guide pages, the Learn exam retirement page and two Microsoft Skills Hub posts on 10 November 2026.',
	sections: [
		{
			id: 'at-a-glance',
			h2: 'Dynamics 365 certifications at a glance (November 2026)',
			html: `<p>If your picture of the Dynamics 365 certification map dates from 2024, a large part of it is out of date. Several exams people still put in job adverts and partner skills plans no longer exist, and the newer exams carry an <code>AB-</code> prefix rather than <code>MB-</code> or <code>PL-</code>. The table below is the map as Microsoft Learn shows it on 10 November 2026, organised by the role you actually do on a project.</p>
<div class="tbl"><table><thead><tr><th>Role</th><th>Certification</th><th>Exam</th><th>Status, 10 Nov 2026</th></tr></thead><tbody>
<tr><td>Business Central functional consultant</td><td>Dynamics 365 Business Central Functional Consultant Associate</td><td><code>MB-800</code></td><td>Active. Skills measured as of 30 Jun 2026</td></tr>
<tr><td>Business Central developer</td><td>Dynamics 365 Business Central Developer Associate</td><td><code>MB-820</code></td><td>Active. Skills measured as of 10 Jun 2025</td></tr>
<tr><td>Finance consultant (finance and operations apps)</td><td>Dynamics 365 Finance Functional Consultant Associate</td><td><code>MB-310</code></td><td>Active. Skills measured as of 14 Aug 2026</td></tr>
<tr><td>Supply chain consultant</td><td>Dynamics 365 Supply Chain Management Functional Consultant Associate</td><td><code>MB-330</code></td><td>Active. Skills measured as of 21 Oct 2026</td></tr>
<tr><td>Supply chain consultant, process-led</td><td>Supply Chain Management AI Consultant Associate</td><td><code>AB-330</code></td><td>Beta</td></tr>
<tr><td>Finance and operations developer</td><td>Dynamics 365: Finance and Operations Apps Developer Associate</td><td><code>MB-500</code></td><td>Active. Skills measured as of 30 Jan 2026</td></tr>
<tr><td>Customer service consultant</td><td>Dynamics 365 Customer Service Functional Consultant Associate</td><td><code>MB-230</code></td><td>Active. Skills measured as of 11 Mar 2026</td></tr>
<tr><td>Sales consultant</td><td>Dynamics 365 Sales AI Consultant Associate</td><td><code>AB-210</code></td><td>Active; the certification page still carries a beta notice</td></tr>
<tr><td>Contact centre engineer</td><td>Dynamics 365 Contact Center AI Engineer Associate</td><td><code>AB-250</code></td><td>Active</td></tr>
<tr><td>Power Platform app builder (the old PL-200 role)</td><td>Intelligent Applications Builder Associate</td><td><code>AB-410</code></td><td>Active</td></tr>
<tr><td>Power Platform developer</td><td>Power Platform Developer Associate</td><td><code>AB-400</code></td><td>Active. AB-400 took over from PL-400, which retired 30 Oct 2026</td></tr>
<tr><td>Copilot Studio agent developer</td><td>AI Agent Builder Associate</td><td><code>AB-620</code></td><td>Active</td></tr>
<tr><td>Solution architect</td><td>Agentic AI Business Solutions Architect Expert</td><td><code>AB-100</code> plus one associate certification</td><td>Active. New skills outline from 16 Nov 2026</td></tr>
<tr><td>Newcomer, presales, project manager</td><td>Power Platform Fundamentals</td><td><code>PL-900</code></td><td>Active. Skills measured as of 24 Jul 2026</td></tr>
</tbody></table></div>
<p>"Active" here means the exam can be booked and has no retirement date on Microsoft's retirement page, which on 10 November 2026 lists only one exam scheduled to retire in the next twelve months, and it is not a Dynamics exam. None of the associate certifications above requires another certification first. AB-100 is the only one that does.</p>
<div class="callout"><p><strong>Gone since December 2025:</strong> MB-910 and MB-920 (fundamentals), MB-700 and PL-600 (solution architect experts), MB-335 (supply chain expert), MB-240 (Field Service), MB-280 (customer experience analyst), PL-200 (Power Platform functional consultant) and the PL-400 exam. Dates and what Microsoft points to instead are in the next section.</p></div>`,
		},
		{
			id: 'what-retired',
			h2: 'What retired in 2025 and 2026, and what Microsoft points you to instead',
			html: `<p>Microsoft announced the Dynamics fundamentals retirements in August 2025 and most of the rest in a Skills Hub post on 31 March 2026, framed as making room for AI-focused business credentials. For some retirements it named a related new certification. For others it said plainly that no new certification is planned.</p>
<div class="tbl"><table><thead><tr><th>Exam</th><th>Certification</th><th>Retired</th><th>Microsoft's related new credential</th></tr></thead><tbody>
<tr><td><code>MB-910</code></td><td>Dynamics 365 Fundamentals (CRM)</td><td>31 Dec 2025</td><td>None named</td></tr>
<tr><td><code>MB-920</code></td><td>Dynamics 365 Fundamentals (ERP)</td><td>31 Dec 2025</td><td>None named</td></tr>
<tr><td><code>MB-700</code></td><td>Dynamics 365: Finance and Operations Apps Solution Architect Expert</td><td>30 Jun 2026</td><td>No new certification planned</td></tr>
<tr><td><code>PL-600</code></td><td>Power Platform Solution Architect Expert</td><td>30 Jun 2026</td><td>No new certification planned</td></tr>
<tr><td><code>MB-335</code></td><td>Dynamics 365 Supply Chain Management Functional Consultant Expert</td><td>30 Jun 2026</td><td>No new certification planned</td></tr>
<tr><td><code>MB-240</code></td><td>Dynamics 365 Field Service Functional Consultant Associate</td><td>30 Jun 2026</td><td>No new certification planned</td></tr>
<tr><td><code>PL-500</code></td><td>Power Automate RPA Developer Associate</td><td>30 Jun 2026</td><td>No new certification planned</td></tr>
<tr><td><code>MB-280</code></td><td>Dynamics 365 Customer Experience Analyst Associate</td><td>31 Jul 2026</td><td>Sales AI Consultant Associate (<code>AB-210</code>)</td></tr>
<tr><td><code>PL-200</code></td><td>Power Platform Functional Consultant Associate</td><td>31 Aug 2026</td><td>Intelligent Applications Builder Associate (<code>AB-410</code>)</td></tr>
<tr><td><code>PL-400</code></td><td>Exam for Power Platform Developer Associate</td><td>30 Oct 2026</td><td>Same certification, now earned with <code>AB-400</code></td></tr>
</tbody></table></div>
<p>For the five rows marked "no new certification planned", Microsoft's post adds a note: holders of the retiring expert-level certifications should consider the Agentic AI Business Solutions Architect Expert (AB-100) as their next step, while saying explicitly that it is not a direct replacement and covers a much broader scope.</p>
<p>Older retirements still turn up in skills matrices. MB-210 (Sales Functional Consultant) and MB-220 (Customer Insights Journeys) retired on 30 November 2024, the Customer Insights (Data) Specialty, MB-260, on the same date, and MB-300 (Core Finance and Operations) on 29 February 2024. If a role profile or a partner plan still asks for any of these, it was copied from an old template.</p>
<h3>What retirement does to a badge you already hold</h3>
<p>Retirement does not revoke anything. A retired certification stays valid until its expiry date and stays on your Learn transcript. What you lose is renewal: once a certification retires you cannot renew it, so it lapses at its next expiry. There is no conversion path either. Microsoft's own answer is that the new exams measure different skills, so you sit the new exam.</p>`,
		},
		{
			id: 'fundamentals',
			h2: 'Fundamentals: no Dynamics 365 exam left, PL-900 remains',
			html: `<p>MB-910 and MB-920 were the usual first step for anyone new to customer engagement or ERP. Both retired on 31 December 2025 and Microsoft named no Dynamics-specific replacement. If you passed one, it stays on your transcript, and fundamentals certifications do not expire, so there is nothing to renew. Microsoft also noted that neither was part of the partner programme's designation requirements.</p>
<p>The fundamentals exam that remains in this space is <strong>PL-900, Power Platform Fundamentals</strong>. It is 45 minutes, its skills outline was refreshed on 24 July 2026, Copilot Studio agents are 20–25% of it, and its own page says it is not a prerequisite for any role-based certification.</p>
<div class="tbl"><table><thead><tr><th>PL-900 skill area</th><th>Weight</th></tr></thead><tbody>
<tr><td>Describe the business value of Microsoft Power Platform</td><td>5–10%</td></tr>
<tr><td>Manage the Microsoft Power Platform environment</td><td>20–25%</td></tr>
<tr><td>Demonstrate the capabilities of Power Apps</td><td>20–25%</td></tr>
<tr><td>Demonstrate the capabilities of Power Automate</td><td>20–25%</td></tr>
<tr><td>Describe features and capabilities of agents in Copilot Studio</td><td>20–25%</td></tr>
</tbody></table></div>
<p>My view: for a consultant you have hired to deliver, a fundamentals badge is a detour. Point them straight at the associate exam for the product they will be staffed on. PL-900 earns its keep for presales, project managers and account people who need the vocabulary of environments, Dataverse and agents without configuring anything.</p>`,
		},
		{
			id: 'functional-consultant',
			h2: 'Functional consultant certifications: what each exam tests',
			html: `<p>These are the certifications that say "I can configure this product for a customer". Each is a single exam, each renews every twelve months, and on the cert pages the role-based exams run 100 or 120 minutes. The weights below are from the current study guide for each exam; they are ranges and do not have to add up to exactly 100.</p>
<div class="tbl"><table><thead><tr><th>Exam</th><th>Time</th><th>Skill areas and weights</th></tr></thead><tbody>
<tr><td><code>MB-800</code> Business Central</td><td>100 min</td><td>Set up Business Central 20–25%; Configure financials 30–35%; Configure sales and purchasing 10–15%; Perform Business Central operations 30–35%</td></tr>
<tr><td><code>MB-310</code> Finance</td><td>100 min</td><td>Implement financial management 35–40%; Accounts receivable, credit, collections and subscription billing 15–20%; Accounts payable and expenses 10–15%; Budgeting 10–15%; Fixed assets 10–15%</td></tr>
<tr><td><code>MB-330</code> Supply Chain Management</td><td>100 min</td><td>Product information management 25–30%; Inventory and asset management 20–25%; Supply chain processes 15–20%; Warehouse and transportation management 20–25%; Master planning 10–15%</td></tr>
<tr><td><code>AB-330</code> Supply Chain Management AI Consultant (beta)</td><td>100 min</td><td>Design to retire 5–10%; Forecast to plan 1–5%; Inventory to deliver 20–25%; Order to cash 20–25%; Plan to produce 1–5%; Source to pay 30–35%</td></tr>
<tr><td><code>MB-230</code> Customer Service</td><td>100 min</td><td>Manage cases in Customer Service 51–55%; Configure representative experience and routing 25–30%; Extend Customer Service 15–20%</td></tr>
<tr><td><code>AB-210</code> Sales AI Consultant</td><td>120 min</td><td>Configure Sales core features for AI 15–20%; Optimize AI-driven sales 20–25%; Qualify and prioritize leads by using AI 15–20%; Develop deals by using intelligent opportunity research 25–30%; Extend and enhance Sales 10–15%</td></tr>
<tr><td><code>AB-250</code> Contact Center AI Engineer</td><td>120 min</td><td>Deploy Contact Center 15–20%; Implement channels 30–35%; Configure agents and AI capabilities 10–15%; Configure work distribution 10–15%; Configure the representative experience 15–20%; Manage analytics 10–15%</td></tr>
</tbody></table></div>
<h3>Business Central: MB-800</h3>
<p>The exam for consultants implementing Business Central for small and mid-sized businesses: company setup, data migration, security, dimensions, posting groups, sales, purchasing, inventory and fixed assets. The 30 June 2026 revision matters if you studied from older material. One objective on describing integrations with other products was removed, "process inventory transactions" was added as a new objective, and setting up core functionality now includes enabling Copilot and agent capabilities. Financials and operations together are 60–70% of the exam, so it rewards people who can trace a document to the ledger. It is offered in eight languages.</p>
<h3>Finance and Supply Chain Management: MB-310 and MB-330</h3>
<p>MB-310 is the finance consultant's exam for the finance and operations apps: general ledger and financial dimensions first and foremost, then receivables, payables, budgeting and fixed assets. Its outline was revised on 14 August 2026, and its feature list includes subscription billing and agents. MB-330 covers product information management, inventory, procurement and sales processes, warehouse and transportation management, and master planning; its outline changed on 21 October 2026. Both exams are offered only in English and Japanese, which is worth knowing before you book a Norwegian or German consultant onto one.</p>
<p>AB-330 is new and different in shape. Instead of modules, it is organised around end-to-end business processes such as source to pay and order to cash, aligned with Microsoft's business process catalog. It is in beta, English only, and its page says there is no practice assessment yet; Microsoft usually adds one within about eight weeks of an exam leaving beta.</p>
<h3>Customer engagement: MB-230, AB-210 and AB-250</h3>
<p>MB-230 is the one long-standing customer engagement functional exam that survives. More than half of it is case management: queues, service-level agreements, knowledge and routing all hang off cases. Its outline was updated on 11 March 2026.</p>
<p>Sales no longer has a classic functional consultant exam. MB-210 retired in 2024 and MB-280 in July 2026, and Microsoft's related new credential is AB-210, which is about configuring Sales and then layering Copilot, agents and AI-driven lead and opportunity work on top. Its page strongly recommends intermediate Power Platform configuration training first and expects you to build model-driven apps and Power Automate cloud flows. AB-250 is the contact centre exam: channels, routing, the representative workspace, self-service agents, workforce management and analytics, with Copilot Studio, Power BI and Microsoft Foundry experience expected.</p>
<h3>Field Service and Customer Insights: no current certification</h3>
<p>MB-240 retired on 30 June 2026 with no new certification planned. The Customer Insights exams retired in 2024. If your practice delivers Field Service or Customer Insights, Microsoft no longer gives you a way to evidence that skill with an exam, and you will need your own.</p>`,
		},
		{
			id: 'developer',
			h2: 'Developer certifications: MB-820, MB-500 and AB-400',
			html: `<div class="tbl"><table><thead><tr><th>Exam</th><th>Time</th><th>Skill areas and weights</th></tr></thead><tbody>
<tr><td><code>MB-820</code> Business Central Developer</td><td>100 min</td><td>Describe Business Central 10–15%; Install, develop and deploy 10–15%; Develop by using AL objects 35–40%; Develop by using AL 15–20%; Work with development tools 10–15%; Integrate with other applications 10–15%</td></tr>
<tr><td><code>MB-500</code> Finance and Operations Apps Developer</td><td>100 min</td><td>Plan the architecture and solution design 5–10%; Apply developer tools 5–10%; Design and develop AOT elements 15–20%; Develop and test code 20–25%; Implement reporting 10–15%; Integrate and manage data solutions 15–20%; Implement security and optimize performance 10–15%</td></tr>
<tr><td><code>AB-400</code> Power Platform Developer</td><td>100 min</td><td>Build Power Platform solutions 15–20%; Extend the user experience 25–30%; Extend Power Platform 35–40%; Develop integrations 10–15%</td></tr>
</tbody></table></div>
<p><strong>MB-820</strong> is for developers building Business Central extensions in AL: objects, code, the development environment, upgrades that keep data current, and integration with Power Platform and other systems, with source control and CI/CD named in the profile. AL objects alone are 35–40%, so this exam is won or lost on knowing tables, pages, reports and their extension objects cold.</p>
<p><strong>MB-500</strong> is the X++ exam for finance and operations: AOT elements, business logic, reports and workspaces, data and integration, security and performance, and application lifecycle management through Azure DevOps and Lifecycle Services. Its outline was refreshed on 30 January 2026. Like the other finance and operations exams it is offered in English and Japanese only.</p>
<p><strong>AB-400</strong> is the developer exam for the Power Platform side of Dynamics 365, which in practice means customer engagement developers. The certification name did not change; the exam did. Registration for PL-400 closed on 16 October 2026, the day AB-400 became available, and PL-400 retired on 30 October 2026. One trap: on 10 November 2026 the certification page still lists six skill areas carried over from the old outline, while the AB-400 study guide lists the four above. Study from the study guide. AB-400 is offered in English only.</p>
<p>My advice for Business Central developers is to sit MB-800 as well. Developers who do not understand posting groups and dimensions write extensions that work in a demo and fail at month end.</p>`,
		},
		{
			id: 'power-platform-and-agents',
			h2: 'The Power Platform and agent certifications a Dynamics team now needs',
			html: `<p>Customer engagement apps are model-driven Power Apps on Dataverse, so the Power Platform exams have always been part of a Dynamics career, and PL-200 was the de facto baseline for customer engagement consultants. With PL-200 gone, two new associates fill that space.</p>
<div class="tbl"><table><thead><tr><th>Exam</th><th>Time</th><th>Skill areas and weights</th></tr></thead><tbody>
<tr><td><code>AB-410</code> Intelligent Applications Builder</td><td>120 min</td><td>Create a foundation for intelligent applications 25–30%; Create intelligent applications 25–30%; Build business application logic and automation 40–45%</td></tr>
<tr><td><code>AB-620</code> AI Agent Builder</td><td>120 min</td><td>Plan and configure agent solutions 30–35%; Integrate and extend agents in Copilot Studio 40–45%; Test and manage agents 20–25%</td></tr>
</tbody></table></div>
<p><strong>AB-410</strong> is Microsoft's related new credential for PL-200. It covers Dataverse data models, model-driven and canvas apps, Power Pages, cloud flows and business logic, and it expects you to use Copilot and natural language to build them and to put agents inside the apps you deliver. Automation and logic are the biggest block at 40–45%. Its page lists familiarity with Copilot in Power Apps, Power Automate, Power Pages and Dataverse, awareness of Copilot Studio, and Power Fx among the expected starting points.</p>
<p><strong>AB-620</strong> is for the developer or advanced builder who takes Copilot Studio beyond configuration: multi-agent solutions, integration with Microsoft Foundry, Model Context Protocol servers, custom connectors and APIs, enterprise knowledge sources and computer use. It is the closest thing in this list to an integration developer's exam for agents.</p>
<p>Both count as qualifying associate certifications for the AB-100 architect expert, which is a good reason for a customer engagement consultant to choose AB-410 over a second functional exam.</p>`,
		},
		{
			id: 'solution-architect',
			h2: 'Solution architect: MB-700 is retired, AB-100 is the expert path',
			html: `<p>MB-700 (finance and operations solution architect) and PL-600 (Power Platform solution architect) both retired on 30 June 2026, and Microsoft said no new certification is planned for either. The only expert-level certification left in the Dynamics 365 catalogue is the <strong>Agentic AI Business Solutions Architect Expert</strong>, earned by passing AB-100 and holding one qualifying associate certification.</p>
<p>The certification page lists thirteen qualifying associates: MB-230, MB-310, MB-330, MB-500, MB-800, MB-820, Power Platform Developer Associate (listed under PL-400), AB-210, AB-250, AB-410, AB-620, and two Azure ones, AI-103 (Azure AI Apps and Agents Developer) and AI-300 (Machine Learning Operations Engineer).</p>
<div class="callout"><p><strong>The two Learn pages disagree.</strong> On 10 November 2026 the AB-100 exam page also lists MB-280 and PL-200 as prerequisites; the certification page does not. Microsoft's transition FAQ says an associate certification that is a requirement and has not expired can still satisfy the expert requirement, so if you hold a current PL-200 or MB-280, check your own transcript against the certification page before you rely on it, and finish both halves before that associate expires.</p></div>
<div class="tbl"><table><thead><tr><th>AB-100 skill area (from 16 Nov 2026)</th><th>Weight</th></tr></thead><tbody>
<tr><td>Plan AI-powered business solutions</td><td>35–40%</td></tr>
<tr><td>Design AI-powered business solutions</td><td>30–35%</td></tr>
<tr><td>Deploy AI-powered business solutions</td><td>20–25%</td></tr>
</tbody></table></div>
<p>Microsoft has announced an update to AB-100 on 16 November 2026, and the study guide already shows the new outline. Planning covers requirements analysis, data readiness for grounding, AI strategy, when to build custom agents or extend Microsoft 365 Copilot, cost-benefit and ROI analysis, and build, buy or extend decisions. Design covers task, autonomous and prompt-and-response agents, Copilot and AI features in the Dynamics 365 apps for customer experience and service and for finance and supply chain, Copilot Studio and Foundry extensibility including Model Context Protocol, and the Power Platform Well-Architected Framework. Deployment covers monitoring and telemetry, testing, ALM for agents and for AI inside Dynamics 365, and security, governance and responsible AI.</p>
<p>My reading: AB-100 is a good test of what it tests, which is designing AI and agents into business applications. It does not ask you to prove you can design a finance and operations implementation end to end, and Microsoft does not claim it does. With MB-700 gone, a partner that wants to evidence ERP architecture depth now has to do it with its own assessment and reference projects. The exam can sit on top of that; it cannot replace it.</p>`,
		},
		{
			id: 'choosing-a-path',
			h2: 'Choosing a path: how I would plan it as a partner CTO',
			html: `<p>Start from the product the person will be staffed on, not from the badge. A certification plan that does not match the delivery pipeline produces certificates and no utilisation.</p>
<ul>
<li><strong>Business Central practice.</strong> MB-800 for every consultant, early, because it is the shared language of the team. MB-820 for developers, ideally after MB-800. Senior people who lead AI work then add AB-100, since MB-800 and MB-820 both qualify.</li>
<li><strong>Finance and operations practice.</strong> MB-310 for finance consultants, MB-330 for supply chain, MB-500 for developers. AB-330 is a sensible second exam for supply chain consultants who think in end-to-end processes, but it is in beta and English only, so I would not make it anyone's first.</li>
<li><strong>Customer engagement practice.</strong> MB-230 for service, AB-210 for sales, AB-250 for contact centre. AB-410 as the platform baseline for anyone configuring model-driven apps, and AB-400 for professional developers. AB-620 for whoever builds the agent integrations.</li>
<li><strong>Architects.</strong> One associate in the product you know best, then AB-100. Do not let anyone skip the associate: the certification is not awarded without it, and the associate is where product depth is tested.</li>
<li><strong>Field Service and Customer Insights.</strong> There is no current Microsoft exam. Build an internal accreditation with a practical assessment, and say so honestly in bids rather than quoting retired certifications as if they were current.</li>
</ul>
<h3>Three planning rules</h3>
<p><strong>Do not fund a retired exam.</strong> Nothing in the retirement table can be booked any more, and a certification earned shortly before retirement cannot be renewed afterwards, so its value runs out at its next expiry.</p>
<p><strong>Treat beta exams as optional.</strong> A beta exam can be taken only once during its beta period, the result arrives about ten days after the exam goes live, and Microsoft says that can mean waiting up to 14 weeks. Fine for an enthusiast, wrong for someone who needs the badge for a bid next month.</p>
<p><strong>Budget the renewals, not just the exams.</strong> Renewal is free, but it is time. A 20-person practice holding two certifications each has 40 renewal assessments a year to schedule. On the partner side, Microsoft says eligible certifications earned before they retire continue to count towards partner requirements for one year after the retirement date, and points to Partner Center for the current Solutions Partner for Business Applications requirements. Check those there; they change on their own schedule.</p>`,
		},
		{
			id: 'renewal',
			h2: 'Renewal, retakes and the scoring rules',
			html: `<p>Every associate and expert certification on this page renews every twelve months. Fundamentals certifications, including PL-900, do not expire.</p>
<ul>
<li><strong>Renewal is free and online.</strong> You get a six-month eligibility window before expiry, and Learn emails you when it opens. The renewal assessment is unproctored, open book and shorter than the exam, and focuses on recent product changes. Passing extends the certification by one year from its expiry date, so renewing early costs you nothing.</li>
<li><strong>Renewal retakes are unlimited.</strong> You can retry immediately after a fail; after the second attempt you wait at least 24 hours between tries. The only deadline that matters is the expiry date.</li>
<li><strong>Exam retakes are rationed.</strong> After a first fail you wait 24 hours, then 14 days between later attempts, with at most five attempts in twelve months. You pay for retakes, and you cannot resit an exam you have passed unless the certification has expired.</li>
<li><strong>The pass mark is 700 on a scale of 1 to 1,000.</strong> It is a scaled score, not 70% of the questions. Microsoft also warns that the section bars on a score report cannot be combined to work out the overall result, because each section has a different number of questions.</li>
<li><strong>Retirement ends renewal.</strong> If a certification you hold is retiring, renew it before the retirement date if you are eligible, because there is no renewal afterwards.</li>
</ul>`,
		},
		{
			id: 'preparing',
			h2: 'How to prepare for a Dynamics 365 exam',
			html: `<p>Experienced consultants fail these exams for reasons that have nothing to do with their competence: they study the wrong version of the outline, assume 70% of the questions is a pass, or misjudge the clock. Most of that is avoidable.</p>
<ol>
<li><strong>Read the study guide, then the change log.</strong> Each exam's study guide on Learn lists the skill areas, their weights and every objective, and during a transition it shows both the old and the new outline with a table of what changed. Most of these exams changed at least once in 2026. Weight your time by the percentages: MB-230 is more than half case management, MB-820 is more than a third AL objects.</li>
<li><strong>Work in the product, not only in the course.</strong> These are role-based exams written for people who have configured the product. The study guides note that questions mostly cover features that are generally available, but commonly used preview features can appear, which matters for products that change every release wave.</li>
<li><strong>Know the format.</strong> Most Microsoft exams have 40–60 questions. Role-based exams without labs run 100 minutes with 120 minutes of seat time; those that may contain labs run 120 minutes with 140 of seat time. Five minutes of break time is built in, but once you take a break you cannot go back to questions you have already seen. Try the exam sandbox first.</li>
<li><strong>Use Microsoft Learn during the exam, sparingly.</strong> Role-based exams give you access to Microsoft Learn in a split screen. It is there for looking up a detail, not for researching every question, and it is not available on fundamentals exams. Practise finding things on Learn quickly before the day.</li>
<li><strong>Take the free practice assessment where there is one.</strong> For MB-800 and AB-100 it now lives in AI Skills Navigator and needs a sign-in. AB-330 has none yet.</li>
<li><strong>Check the language.</strong> The finance and operations exams (MB-310, MB-330, MB-500) are offered in English and Japanese only, and AB-330 and AB-400 in English only. If the exam is not available in your preferred language you can request an extra 30 minutes, which is worth doing for non-native speakers facing long scenario questions.</li>
<li><strong>Register with a personal Microsoft account.</strong> Microsoft recommends it on the exam pages: certification records registered to a work account are lost if you leave the organisation.</li>
</ol>`,
		},
	],
	faq: [
		[
			'Are MB-910 and MB-920 still available?',
			'No. Both Dynamics 365 Fundamentals exams, MB-910 (CRM) and MB-920 (ERP), retired on 31 December 2025, and Microsoft named no Dynamics-specific replacement. If you passed one it stays on your transcript, and fundamentals certifications do not expire. The remaining fundamentals exam in this area is PL-900, Power Platform Fundamentals.',
		],
		[
			'What replaced MB-700, the Dynamics 365 solution architect exam?',
			'Nothing directly. MB-700 retired on 30 June 2026 and Microsoft said no new certification is planned. It suggests the Agentic AI Business Solutions Architect Expert (exam AB-100) as a next step for holders of the retired expert certifications, while stating it is not a direct replacement. To earn it you pass AB-100 and hold one qualifying associate certification, such as MB-800, MB-310, MB-330, MB-230 or MB-500.',
		],
		[
			'What replaced PL-200 and PL-400?',
			"PL-200 retired on 31 August 2026 and Microsoft's related new credential is the Intelligent Applications Builder Associate (exam AB-410). PL-400 retired on 30 October 2026, but the Power Platform Developer Associate certification continues: it is now earned with exam AB-400, available since 16 October 2026.",
		],
		[
			'Is there still a Dynamics 365 Field Service certification?',
			'No. MB-240, the Field Service Functional Consultant exam, retired on 30 June 2026, and Microsoft said no new certification is planned. A Field Service certification you already hold stays valid until it expires, but it can no longer be renewed.',
		],
		[
			'Which Dynamics 365 certification should I take first?',
			'The functional consultant or developer associate for the product you actually work on: MB-800 for Business Central, MB-310 or MB-330 for finance and operations, MB-230 for Customer Service, AB-210 for Sales. None requires another certification first. PL-900 is optional and is not a prerequisite for any of them.',
		],
		[
			'How do I renew a Dynamics 365 certification?',
			'Associate and expert certifications renew every twelve months through a free, unproctored, open-book online assessment on Microsoft Learn. You can take it any time in the six months before expiry, retry as often as you need, and a pass extends the certification by a year from its expiry date. Retired certifications cannot be renewed.',
		],
	],
	sources: [
		['Exam and assessment lab retirement, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams'],
		['The AI job boom continues: Build the skills that move business forward (31 Mar 2026), Microsoft Skills Hub Blog', 'https://techcommunity.microsoft.com/blog/skills-hub-blog/the-ai-job-boom-continues-build-the-skills-that-move-business-forward/4494139'],
		['Certifications refresh: AI-focused and fundamentals updates (28 Aug 2025), Microsoft Skills Hub Blog', 'https://techcommunity.microsoft.com/blog/skills-hub-blog/certifications-refresh-ai-focused-and-fundamentals-updates/4446638'],
		['Dynamics 365 Business Central Functional Consultant Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-functional-consultant-associate/'],
		['Exam MB-800 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-800'],
		['Dynamics 365 Business Central Developer Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-developer-associate/'],
		['Exam MB-820 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-820'],
		['Dynamics 365 Finance Functional Consultant Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-functional-consultant-financials/'],
		['Exam MB-310 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-310'],
		['Dynamics 365 Supply Chain Management Functional Consultant Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-functional-consultant-supply-chain-management/'],
		['Exam MB-330 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-330'],
		['Supply Chain Management AI Consultant Associate (beta), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/supply-chain-management-ai-consultant-associate/'],
		['Exam AB-330 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-330'],
		['Dynamics 365: Finance and Operations Apps Developer Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-finance-and-operations-apps-developer-associate/'],
		['Exam MB-500 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-500'],
		['Dynamics 365 Customer Service Functional Consultant Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-functional-consultant-customer-service-v3/'],
		['Exam MB-230 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-230'],
		['Dynamics 365 Sales AI Consultant Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-sales-ai-consultant-associate/'],
		['Exam AB-210 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-210'],
		['Dynamics 365 Contact Center AI Engineer Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-contact-center-ai-engineer-associate/'],
		['Exam AB-250 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-250'],
		['Power Platform Developer Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/'],
		['Exam AB-400 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-400'],
		['Exam PL-400: Microsoft Power Platform Developer (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/pl-400/'],
		['Intelligent Applications Builder Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/intelligent-applications-builder-associate/'],
		['Exam AB-410 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-410'],
		['AI Agent Builder Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/ai-agent-builder-associate/'],
		['Exam AB-620 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-620'],
		['Agentic AI Business Solutions Architect Expert, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/'],
		['Exam AB-100: Agentic AI Business Solutions Architect, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-100/'],
		['Exam AB-100 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100'],
		['Power Platform Fundamentals, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/'],
		['Exam PL-900 study guide, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-900'],
		['Exam MB-700 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/mb-700/'],
		['Exam PL-600 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/pl-600/'],
		['Exam MB-240 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/mb-240/'],
		['Exam PL-200 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/pl-200/'],
		['Exam MB-210 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/mb-210/'],
		['Exam MB-220 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/mb-220/'],
		['Exam MB-300 (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exams/mb-300/'],
		['Dynamics 365 Customer Insights (Data) Specialty (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/d365-customer-insights-data-specialty/'],
		['Microsoft Certification renewal, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification'],
		['Exam retake policy, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/support/retake-policy'],
		['Exam duration and exam experience, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience'],
		['Exam scoring and score reports, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'],
		['About beta exams, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/support/about-beta-exams'],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: '<p>Dynamics 365 Cert Prep is in development, with no release date yet. It is built on the same study engine as the TOGAF, ArchiMate and Azure AI apps: explanations on every answer, weakest-topic surfacing, timed mocks and per-topic stars, with an on-device tutor you can ask why an answer is right. The first exam it covers is MB-800, Business Central Functional Consultant, and you can <a href="/dynamics365/app/">practise it in your browser</a> today. Tell me which exam you need next and it moves up the list. It is an independent study aid, not affiliated with or endorsed by Microsoft.</p>',
	},
};
