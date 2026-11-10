// Free reference guide for the Azure AI Exam Prep companion page (/azureai/).
// Facts checked on Microsoft Learn on 10 November 2026; research log:
// review/app-guides-20261110/azureai-sources.md
export default {
	slug: 'azureai',
	nav: 'Study guide',
	title: 'AI-102 retired: AI-103 study guide, skills and weightings',
	description:
		'AI-102 retired on 30 June 2026. AI-103 replaced it: the five skill areas and weightings, what each means on Microsoft Foundry, and how to prepare.',
	ogTitle: 'AI-102 has retired. The AI-103 skills measured, explained by a practitioner',
	ogDescription:
		'What replaced the Azure AI Engineer exam, how the weightings moved towards generative AI and agents, what each skill area means in practice on Microsoft Foundry, and how to prepare.',
	eyebrow: 'Free reference',
	h1: 'AI-102 has retired: the AI-103 skills measured and how to prepare',
	lede:
		'Exam AI-102 and the Azure AI Engineer Associate certification were retired on <strong>30 June 2026</strong>. Their successor is <strong>AI-103: Developing AI Apps and Agents on Azure</strong>. This is the current skills list with its weightings, what each area means when you actually build on Microsoft Foundry, and a way to prepare that does not waste weeks on retired material.',
	updated: '2026-11-10',
	checkedNote:
		'Checked against the Microsoft Learn study guides for AI-102 and AI-103, both credential pages, Microsoft Learn certification policy pages, Microsoft Foundry documentation and the Microsoft retirement announcement linked from Learn, on 10 November 2026.',
	sections: [
		{
			id: 'status',
			h2: 'Is AI-102 still available? The status in November 2026',
			html: `<p>No. Exam AI-102, <em>Designing and Implementing a Microsoft Azure AI Solution</em>, was retired on 30 June 2026 at 11:59 PM Central Standard Time. Microsoft Learn's AI-102 study guide now opens with that warning, and the Microsoft Certified: Azure AI Engineer Associate page states that the certification and its renewal assessment are both retired. If you arrived here searching for AI-102, the exam you can book today is <strong>AI-103</strong>, which earns <strong>Microsoft Certified: Azure AI Apps and Agents Developer Associate</strong>. Microsoft's own retirement table names it as the replacement.</p>
<div class="tbl"><table><thead><tr><th>Item</th><th>AI-102 (retired)</th><th>AI-103 (current)</th></tr></thead><tbody>
<tr><td>Exam title</td><td>Designing and Implementing a Microsoft Azure AI Solution</td><td>Developing AI Apps and Agents on Azure</td></tr>
<tr><td>Certification</td><td>Azure AI Engineer Associate</td><td>Azure AI Apps and Agents Developer Associate</td></tr>
<tr><td>Status on Learn</td><td>Exam retired 30 June 2026; certification and renewal assessment retired</td><td>Listed with scheduling through Pearson VUE</td></tr>
<tr><td>Skills measured as of</td><td>23 December 2025 (final version)</td><td>16 April 2026</td></tr>
<tr><td>Language expected</td><td>Python or C#</td><td>Python</td></tr>
<tr><td>Exam time</td><td>100 minutes</td><td>120 minutes</td></tr>
<tr><td>Passing score</td><td>700 (scaled, 1 to 1,000)</td><td>700 (scaled, 1 to 1,000)</td></tr>
<tr><td>Renewal</td><td>Retired</td><td>Annual, by a free online assessment on Learn</td></tr>
</tbody></table></div>
<h3>What to do now</h3>
<ul>
<li><strong>You have not sat AI-102.</strong> You can no longer take it. Prepare for AI-103. Microsoft's announcement told candidates who had not registered to prepare for the new exam instead, and that advice is now simply the only option.</li>
<li><strong>You already hold the Azure AI Engineer Associate.</strong> Microsoft says a retiring certification you have already earned stays valid and on your transcript until it expires; retirement does not revoke it. What you cannot do is renew it, because the renewal assessment has gone. If the credential matters to you or your employer, plan to pass AI-103 before your current expiry date.</li>
<li><strong>You were studying from AI-102 material.</strong> A good part of it still transfers, because the services underneath are largely the same. But the weighting moved hard towards generative and agentic work, several AI-102 topics are no longer in the list at all, and almost every product name changed. The comparison further down shows exactly what moved.</li>
</ul>
<div class="callout"><p><strong>The naming trap.</strong> Microsoft renamed Azure AI Studio and Azure AI Foundry to <strong>Microsoft Foundry</strong>, and Azure AI services to <strong>Foundry Tools</strong>. The AI-103 study guide uses the new names throughout: Azure Language in Foundry Tools, Azure OpenAI in Foundry Models, Azure Content Understanding in Foundry Tools. If your notes still say Azure AI Studio, they are two names out of date.</p></div>`,
		},
		{
			id: 'skills-measured',
			h2: 'AI-103 skills measured and weightings at a glance',
			html: `<p>The AI-103 study guide lists five skill areas, with the skills measured dated 16 April 2026. The page itself was last updated on 31 October 2026 and shows no newer version and no change log, so the April list is the one in force. The weightings are Microsoft's ranges for the share of the exam each area represents.</p>
<div class="tbl"><table><thead><tr><th>Skill area</th><th>Weight</th><th>Microsoft's sub-areas</th><th>What it means in practice</th></tr></thead><tbody>
<tr><td><strong>Plan and manage an Azure AI solution</strong></td><td>25–30%</td><td>Choose Foundry services for generative AI and agents; set up AI solutions in Foundry; manage, monitor and secure AI systems; implement responsible AI across generative and agentic systems</td><td>Picking the model and service, deploying it with the right deployment type and quota, locking it down with identity and networking, and wrapping guardrails and evaluation around it.</td></tr>
<tr><td><strong>Implement generative AI and agentic solutions</strong></td><td>30–35%</td><td>Build generative applications with Foundry; build agents with Foundry; optimise and operationalise generative AI systems</td><td>RAG applications, tool-using agents, multi-agent orchestration with approval steps, and the tracing and evaluation that keep them honest in production.</td></tr>
<tr><td><strong>Implement computer vision solutions</strong></td><td>10–15%</td><td>Image- and video-generation solutions; multimodal understanding workflows; responsible AI for multimodal content</td><td>Generating and editing images and video, captioning and visual question answering with multimodal models, visual extraction with Content Understanding, and defending against instructions hidden in images.</td></tr>
<tr><td><strong>Implement text analysis solutions</strong></td><td>10–15%</td><td>Apply language model text analysis; implement speech solutions</td><td>Extraction, sentiment and translation with language models plus Foundry Tools, and speech as an input and output channel for agents.</td></tr>
<tr><td><strong>Implement information extraction solutions</strong></td><td>10–15%</td><td>Build retrieval and grounding pipelines; extract content from documents</td><td>Indexing content for semantic, hybrid and vector search, and turning documents into clean Markdown or structured fields that agents and RAG can use.</td></tr>
</tbody></table></div>
<p>Do the arithmetic before you plan anything: the first two areas together are 55–65% of the exam. Plan your study time the same way. The temptation for anyone coming from AI-102 is to keep polishing the classic vision and language services because that is what they already know, and those areas are now 10–15% each.</p>
<p>Two notes in the study guide matter more than they look. First, the bullets under each skill are there to illustrate how a skill is assessed, and related topics can appear. Second, most questions cover generally available features, but preview features can appear if they are commonly used. A great deal of the agent surface in Foundry is still labelled preview in the documentation, so do not skip something just because it carries that label.</p>`,
		},
		{
			id: 'ai102-vs-ai103',
			h2: 'What changed from AI-102 to AI-103',
			html: `<p>The clearest way to see the shift is to set the final AI-102 weightings (December 2025) against the AI-103 ones (April 2026).</p>
<div class="tbl"><table><thead><tr><th>AI-102 skill area</th><th>AI-102 weight</th><th>AI-103 skill area</th><th>AI-103 weight</th></tr></thead><tbody>
<tr><td>Plan and manage an Azure AI solution</td><td>20–25%</td><td>Plan and manage an Azure AI solution</td><td>25–30%</td></tr>
<tr><td>Implement generative AI solutions</td><td>15–20%</td><td>Implement generative AI and agentic solutions (one merged area)</td><td>30–35%</td></tr>
<tr><td>Implement an agentic solution</td><td>5–10%</td><td>Merged into the row above</td><td>(see above)</td></tr>
<tr><td>Implement computer vision solutions</td><td>10–15%</td><td>Implement computer vision solutions</td><td>10–15%</td></tr>
<tr><td>Implement natural language processing solutions</td><td>15–20%</td><td>Implement text analysis solutions</td><td>10–15%</td></tr>
<tr><td>Implement knowledge mining and information extraction solutions</td><td>15–20%</td><td>Implement information extraction solutions</td><td>10–15%</td></tr>
</tbody></table></div>
<p>Agents went from a 5–10% afterthought to the centre of the largest skill area. Vision kept its weight but changed its meaning almost completely. Language and knowledge mining both shrank and were reframed around language models and grounding.</p>
<h3>No longer named in the AI-103 skills list</h3>
<ul>
<li>Training, labelling, publishing and consuming custom image classification and object detection models.</li>
<li>Azure AI Video Indexer and Spatial Analysis for detecting people in video.</li>
<li>Conversational language understanding as a trained model: intents, entities, utterances, backup and recovery.</li>
<li>Custom question answering: knowledge bases, multi-turn conversation, chit-chat and alternate phrasing.</li>
<li>Custom translation models, and Speech Synthesis Markup Language as a named skill.</li>
<li>Knowledge Store projections in Azure AI Search, and custom or composed Document Intelligence models.</li>
<li>Prompt flow, DALL-E by name, container deployment to edge devices, and managing account keys.</li>
</ul>
<p>Treat this list with the study guide's own caveat in mind: related topics can still appear. But if your revision time is limited, these are the topics to drop first.</p>
<h3>New to the list</h3>
<ul>
<li>Image and video generation and editing: inpainting, mask-based edits, prompt-driven changes, editing generated video.</li>
<li>Memory, tool and knowledge integration services for agents, multi-agent orchestration, and autonomous or semiautonomous workflows with approval controls.</li>
<li>Auditing through trace logging, provenance metadata and approval workflows; governing agents with oversight modes and tool-access controls.</li>
<li>Monitoring drift, safety events, grounding quality, ingestion quality and search index health; token analytics and latency breakdowns.</li>
<li>Indirect prompt injection through text embedded in images, and visual policy rules such as watermarks and brand usage.</li>
<li>Speech as an agent modality, multimodal reasoning from audio, and language-model-powered translation flows.</li>
<li>Keyless credentials in place of key management.</li>
</ul>
<h3>The vocabulary moved too</h3>
<p>Microsoft's own "What is Microsoft Foundry?" page maps the old concepts to the new ones. Learn these pairs, because a question written in the new vocabulary is hard to parse if you think in the old one.</p>
<div class="tbl"><table><thead><tr><th>Previously</th><th>Now</th></tr></thead><tbody>
<tr><td>Azure AI Studio / Azure AI Foundry</td><td>Microsoft Foundry</td></tr>
<tr><td>Azure AI services</td><td>Foundry Tools</td></tr>
<tr><td>Hub plus Azure OpenAI plus Azure AI services resources</td><td>A single Foundry resource, with projects</td></tr>
<tr><td>Assistants API (Agents v0.5 and v1)</td><td>Responses API (Agents v2)</td></tr>
<tr><td>Threads, messages, runs, assistants</td><td>Conversations, items, responses, agent versions</td></tr>
<tr><td>Several SDK packages against five or more endpoints</td><td>One project client (<code>azure-ai-projects</code> 2.x) plus the OpenAI client against one project endpoint</td></tr>
<tr><td>Azure AI User, Azure AI Owner, Azure AI Account Owner, Azure AI Project Manager roles</td><td>Foundry User, Foundry Owner, Foundry Account Owner, Foundry Project Manager (same role IDs and permissions)</td></tr>
</tbody></table></div>
<p>If you built for AI-102 in 2025 with hub-based projects and the Assistants API, that muscle memory is now a liability. Hub-based projects survive in the Foundry (classic) portal, and Microsoft says new investment goes into Foundry projects in the new portal. Study the new one.</p>`,
		},
		{
			id: 'plan-manage',
			h2: 'Plan and manage an Azure AI solution (25–30%)',
			html: `<p>This is the architect's skill area, and on a real project it is where most of the expensive mistakes are made. The exam tests four things: choosing the right model and service, setting the solution up, running it safely, and governing it.</p>
<h3>Choosing models and services</h3>
<p>The study guide asks you to choose between large language models, small language models, multimodal models and Foundry Tools for a given task, and to choose services for generation, grounding, vector search, agent workflows and multimodal processing. My working rule: use the smallest model that meets the quality bar, use a Foundry Tool when the task is narrow and the output must be predictable, and reach for a large model when the task genuinely needs reasoning across messy input. Questions in this area are usually a scenario with one constraint that decides it: cost, latency, data residency, or the need for a deterministic output.</p>
<h3>Deployment types and quota</h3>
<p>When you deploy a model through the serverless API option, the deployment type decides where your data is processed, how you pay and how predictable performance is. Microsoft groups them into three categories: <strong>standard</strong> (pay per token), <strong>provisioned</strong> (reserved capacity) and <strong>batch</strong> (discounted asynchronous processing), plus a Developer type for evaluating fine-tuned models. Within standard and provisioned you choose global, data zone or geography-based processing.</p>
<ul>
<li><strong>Global</strong> types may process inference data in any Azure region. Microsoft recommends starting with Global Standard for most workloads: it gets new models first, costs least and has the widest region coverage.</li>
<li><strong>Data Zone</strong> types keep processing inside a Microsoft-defined zone: the US, the EU or Asia Pacific.</li>
<li><strong>Standard and regional provisioned</strong> types process prompts and responses inside the Azure geography you specify.</li>
</ul>
<p>Data at rest stays in your designated geography whichever you pick. For a European client with a residency requirement, the Data Zone versus Global distinction is exactly the kind of constraint an exam scenario hangs on.</p>
<p>Quota is the other half. For Azure OpenAI in Foundry Models, quota is assigned to a subscription per region, per model and per deployment type, measured in tokens per minute (TPM). You then hand TPM out to deployments, and a requests-per-minute limit is set in proportion to it; you cannot set the two independently. Microsoft's own example: 240,000 TPM of quota for one model in one region can be one deployment of 240,000 or two of 120,000, as long as the total stays inside the quota. To view quota you need the <strong>Cognitive Services Usages Reader</strong> role at subscription scope; a resource-group assignment does not reach the subscription-level usage API.</p>
<h3>Security</h3>
<p>The study guide names managed identity, private networking, keyless credentials and role policies. In practice that means authenticating with Microsoft Entra ID and a managed identity rather than an API key, putting the resource behind network isolation, and granting the narrowest Foundry role that does the job. Foundry manages access control, networking and policy for agents, models and tools under one resource, which is a large simplification compared with the separate resources AI-102 assumed.</p>
<h3>Responsible AI across generative and agentic systems</h3>
<p>This is where AI-103 has real depth, and where the details are easy to get wrong. In Foundry, a <strong>guardrail</strong> is a named collection of <strong>controls</strong>. Each control defines a risk to detect, the intervention points where it scans, and the action to take.</p>
<ul>
<li><strong>Four intervention points:</strong> user input, tool call, tool response and output. Tool call and tool response apply to agents only and are in preview.</li>
<li><strong>Risks</strong> include hate, sexual, self-harm and violence, user prompt attacks, indirect attacks, protected material for code and text, and several preview risks such as personally identifiable information and task adherence.</li>
<li><strong>Blocking levels are counter-intuitive.</strong> For the four content-harm risks, Low blocks only high-severity content and is the least restrictive; Medium blocks medium and high; High blocks low, medium and high and is the most restrictive. Read the question twice.</li>
<li><strong>An agent's guardrail fully overrides its model's guardrail.</strong> A strict guardrail on the model deployment does not protect an agent that has been given a looser one.</li>
<li><strong>Actions differ:</strong> models can annotate or annotate and block; agents only annotate and block.</li>
<li><strong>Prompt Shields</strong> detect user prompt attacks and document attacks (instructions hidden in content). In Foundry, user prompt attack detection is on by default; <strong>document attack detection is off by default</strong> and has to be enabled. That default is worth memorising, and worth fixing in every real deployment that reads documents or tool output.</li>
</ul>
<p>Beyond filters, the study guide asks for evaluators and safety evaluations, auditing through trace logging, provenance metadata and approval workflows, and governing agents with oversight modes, constraints and tool-access controls. One dated detail from the guardrails page: groundedness detection (preview) in Azure OpenAI retires on 30 April 2027, and Microsoft points to its evaluation tooling or your own grounding validation instead.</p>`,
		},
		{
			id: 'genai-agents',
			h2: 'Implement generative AI and agentic solutions (30–35%)',
			html: `<p>The largest skill area, and the one that most clearly separates AI-103 from its predecessor. It has three parts: generative applications, agents, and operating both in production.</p>
<h3>Generative applications with Foundry</h3>
<p>Expect to deploy and consume language, small, code and multimodal models; implement retrieval-augmented generation; design tool-augmented flows and multistep reasoning; evaluate for fabrications, relevance, quality and safety; and connect an application to a Foundry project through the SDKs. Microsoft's learning path for this area builds a chat application with Foundry projects and the <strong>Responses API</strong>, then adds tools, then covers optimisation through prompt engineering, grounding with RAG and fine-tuning, including when to combine them.</p>
<p>The judgement the exam is really testing is that last one. Prompt engineering changes behaviour cheaply, RAG fixes missing or stale knowledge, and fine-tuning fixes consistent style or format that prompting cannot hold. A scenario that complains about out-of-date answers wants RAG, not fine-tuning, and on a real project getting that wrong can cost months.</p>
<h3>Agents with Foundry Agent Service</h3>
<p>Foundry Agent Service offers three agent types, and knowing which fits a scenario is core material:</p>
<div class="tbl"><table><thead><tr><th>Agent type</th><th>What you provide</th><th>Best for</th></tr></thead><tbody>
<tr><td><strong>Prompt agent</strong></td><td>Instructions, a model and tools, by configuration in the portal, SDK, REST API or Azure Developer CLI. Foundry runs it.</td><td>Getting started, internal tools, production agents with no custom orchestration.</td></tr>
<tr><td><strong>Voice-based prompt agent</strong></td><td>The same, plus audio settings and an optional greeting. Connected through Voice Live over a real-time WebSocket.</td><td>Customer-facing voice and call-centre scenarios.</td></tr>
<tr><td><strong>Hosted agent</strong></td><td>Your own code, built with Microsoft Agent Framework, LangGraph, the OpenAI Agents SDK or similar, shipped as a container or a .zip of source. Foundry runs it with a managed endpoint, scaling and its own Entra identity.</td><td>Custom code, custom orchestration and multi-agent systems where you need full control.</td></tr>
</tbody></table></div>
<p>Around those types sit the pieces the study guide expects you to wire together: <strong>toolboxes</strong> that curate tools such as web search, file search, code interpreter, MCP servers and custom functions once and share them across agents through a managed MCP endpoint; conversation memory; knowledge integration (Microsoft's learning path uses Foundry IQ for this); and publishing to Microsoft Teams, Microsoft Copilot and the Entra Agent Registry. For multi-agent work the learning path uses Microsoft Agent Framework, and Foundry also offers workflows for orchestrating agents and other components.</p>
<p>The bullet I would study hardest is "build autonomous or semiautonomous workflows with safeguards and approval flow controls". In every agent programme I have run, the design question that decides whether it reaches production is not what the agent can do but where a human approves before something irreversible happens. Design the approval point first and the rest of the architecture follows.</p>
<h3>Optimising and operationalising</h3>
<p>This part covers tuning generation (prompt engineering and model parameters), model reflection, chain-of-thought evaluation and self-critique loops, orchestrating several models or a hybrid of language model and rules engine, and observability. Foundry's observability has three capabilities: <strong>evaluation</strong> with built-in evaluators for quality (coherence, fluency), RAG (groundedness, relevance) and safety; <strong>monitoring</strong> through Azure Monitor Application Insights dashboards covering token consumption, latency, error rates and quality scores; and <strong>tracing</strong> built on OpenTelemetry, which captures model calls, tool invocations and agent decisions. Microsoft also describes evaluation as something to run at three stages (base model selection, pre-production evaluation and post-production monitoring) and as automated quality gates in CI/CD pipelines.</p>`,
		},
		{
			id: 'computer-vision',
			h2: 'Implement computer vision solutions (10–15%)',
			html: `<p>The weighting is unchanged from AI-102, but the content is almost entirely new. AI-102 vision meant analysing images, reading text and training custom classifiers. AI-103 vision means <strong>generating</strong> and <strong>understanding</strong> visual content with multimodal models, and keeping it safe.</p>
<h3>Generation and editing</h3>
<p>The study guide asks you to generate images and videos from text prompts and reference media, configure image-editing workflows (inpainting, mask-based edits, prompt-driven modifications), edit generated video, and choose the right generation and editing controls the platform provides. Know what a mask does in an edit, why reference media changes the result, and which controls trade fidelity against creativity.</p>
<h3>Multimodal understanding</h3>
<p>Expect scenarios that analyse visual context with a multimodal model, produce short or detailed captions for one or several images, answer questions grounded in visual evidence, generate alt text and extended descriptions to accessibility guidelines, identify objects or regions, and process video segments. Visual extraction runs through <strong>Azure Content Understanding in Foundry Tools</strong>. The study guide refers to "single-task and pro-mode" Content Understanding pipelines. The Content Understanding overview I read this session describes a generally available API version (2025-11-01) and an agentic mode in a 2026 preview, and does not use the term pro mode. Learn the study guide's terms for the exam, and expect the product documentation to describe the capability in its newer language.</p>
<h3>Responsible AI for visual content</h3>
<p>Three bullets: filter unsafe or disallowed visual content; detect and mitigate <strong>indirect prompt injection through text embedded in images</strong>; and enforce visual policy rules such as watermarks, prohibited symbols and brand usage. The injection point is the one to understand properly. A screenshot or scanned page can carry written instructions, and once a multimodal model reads them they arrive in the same context as your own. The defence is the same principle Prompt Shields applies to documents: text that came from content is data, never instruction, and anything an agent does on the strength of it should pass through a control.</p>
<p>A practical note for anyone carrying AI-102 knowledge: custom vision training is not named in the AI-103 list. If you have limited time, do not spend days labelling images.</p>`,
		},
		{
			id: 'text-analysis',
			h2: 'Implement text analysis solutions (10–15%)',
			html: `<p>AI-102's natural language processing area was about specific services and trained models. AI-103 reframes it around language models working alongside Foundry Tools, and adds speech as a way for agents to listen and talk.</p>
<h3>Language model text analysis</h3>
<p>The skills listed are extracting entities, topics, summaries and structured JSON through generative prompting and Foundry Tools; detecting sentiment, tone, safety issues and sensitive content; translating text with <strong>Azure Translator in Foundry Tools</strong> or a language-model translation flow; and customising model output for domain tasks such as compliance summaries. Microsoft's learning path covers Azure Language in Foundry Tools and building a text analysis agent with the <strong>Azure Language MCP server</strong>, for tasks such as language detection, entity recognition and redacting personal information.</p>
<p>The exam judgement here, and the real one, is when to use a dedicated tool and when to prompt a model. My rule: a dedicated tool when you need a stable, auditable result such as redacting personal data, a language model when the task is open-ended or the output schema is your own. Structured JSON output from a model is powerful, but in production you still validate it against a schema before anything downstream trusts it.</p>
<h3>Speech</h3>
<p>Speech is now framed as an agent modality: speech-to-text and text-to-speech for agent interactions, custom speech models, multimodal reasoning from audio input, and speech translation using language models and Foundry Tools. The learning path covers Azure Speech in Foundry Tools, an <strong>Azure Speech MCP server</strong> agent, and a <strong>Voice Live</strong> agent. Voice Live is also what voice-based prompt agents in Foundry Agent Service connect through, so this area and the agent area overlap; a question about a low-latency spoken agent may sit in either.</p>`,
		},
		{
			id: 'information-extraction',
			h2: 'Implement information extraction solutions (10–15%)',
			html: `<p>This is AI-102's knowledge mining area, slimmed down and pointed at one purpose: giving models and agents clean, grounded content. It has two halves.</p>
<h3>Retrieval and grounding pipelines</h3>
<p>The study guide lists ingesting and indexing documents, images, audio and video; configuring semantic, hybrid and vector search for grounding; enrichment with custom or built-in skills for text, images and layout; a RAG ingestion flow that includes OCR; and connecting retrieval directly to workflows and agent tools. Azure AI Search is the engine underneath, and Microsoft describes it as underpinning <strong>Foundry IQ</strong>, the managed knowledge layer that turns enterprise content into permission-aware knowledge bases for agents.</p>
<p>Know how hybrid search works, because it is the default answer to most grounding questions. A hybrid query is a single request carrying both a text search and vector queries. Azure AI Search runs them in parallel (BM25 ranking for text, HNSW or exhaustive k-nearest-neighbour for vectors) and merges the results with <strong>Reciprocal Rank Fusion</strong> into one result set. Vector search finds conceptually similar content without keyword matches; keyword search wins on exact strings such as product codes, specialist jargon, dates and people's names. Microsoft's guidance is that hybrid retrieval with the semantic ranker gives a significant relevance benefit. If a scenario mentions part numbers or names alongside natural-language questions, it is pointing you at hybrid.</p>
<h3>Extracting content from documents</h3>
<p>The second half is about <strong>Azure Content Understanding in Foundry Tools</strong>: multimodal pipelines that combine OCR, layout analysis and field extraction; clean, grounded representations for agents and RAG; and analysers that produce structured or Markdown output for downstream reasoning. The concepts to know:</p>
<ul>
<li>An <strong>analyser</strong> defines how content is processed: extraction settings, the field schema and the model deployments. There are prebuilt analysers for common scenarios and custom ones for your own.</li>
<li>Output can be Markdown, pages and paragraphs, or schema-aligned fields.</li>
<li>Each extracted field can carry a <strong>confidence score</strong> between 0 and 1 and <strong>source grounding</strong> that points to where the value came from.</li>
<li>Classification can sort documents first and route each type to the right analyser.</li>
</ul>
<p>On a real intelligent document processing project, the confidence score is what turns a demo into a process: above an agreed threshold the document goes straight through, below it a person reviews it. If you are coming from Document Intelligence, Microsoft offers Content Understanding Studio to ease the move, and the AI-102 skills on custom and composed Document Intelligence models are not in the AI-103 list.</p>`,
		},
		{
			id: 'how-to-prepare',
			h2: 'How to prepare for AI-103',
			html: `<p>Microsoft publishes four official resources worth using, all linked from the AI-103 credential page and study guide:</p>
<ul>
<li><strong>The study guide</strong>, which is the only authoritative list of what is examined.</li>
<li><strong>Course AI-103T00-A: Develop AI apps and agents on Azure</strong>, a four-day course you can take instructor-led or self-paced. Its self-paced learning paths include Develop generative AI apps in Azure, Develop AI agents on Azure, and Develop natural language solutions in Azure.</li>
<li><strong>A practice assessment</strong>, now offered through AI Skills Navigator, which Microsoft says more closely matches the exam experience. You sign in to reach it.</li>
<li><strong>The exam sandbox and the exam prep video</strong>, so the interface is not a surprise on the day.</li>
</ul>
<h3>A study plan that respects the weightings</h3>
<ol>
<li><strong>Turn the skills list into a checklist.</strong> Copy every bullet from the study guide and mark each one: can do, have read about, never touched. That is your gap map, and it is more honest than a practice score.</li>
<li><strong>Build, in Python, one thing per area.</strong> The audience profile asks for experience developing apps in Python. A RAG chat application on the Responses API; a prompt agent with a toolbox and then the same agent as a hosted agent; a two-agent workflow with an approval step; a Content Understanding analyser producing Markdown and fields with confidence scores; a hybrid search index. Five small builds teach more than five courses.</li>
<li><strong>Weight your time.</strong> Spend more than half of it on planning and managing, and on generative and agentic solutions, because that is 55–65% of the exam.</li>
<li><strong>Memorise the defaults and the traps.</strong> Blocking levels that read backwards, the four intervention points, document attack detection being off by default, agent guardrails overriding model guardrails, quota measured in TPM per region, model and deployment type, and the old-to-new names.</li>
<li><strong>Practise against the clock.</strong> The exam is 120 minutes. Timed practice tells you whether you can recognise the right service quickly, which is a different skill from knowing it eventually.</li>
<li><strong>If you fail, use the score report.</strong> It shows a bar per skill area. Microsoft's advice is to work on the weak areas and on the most heavily weighted ones, and you can retake after 24 hours.</li>
</ol>
<p>One opinion from experience. The hard part of a Microsoft role-based exam is rarely knowing a service exists. It is discrimination: knowing four services that could do the job and saying quickly which one the scenario wants. Practise choosing, not just recalling.</p>`,
		},
		{
			id: 'exam-format',
			h2: 'AI-103 exam format, scoring, retakes and renewal',
			html: `<div class="tbl"><table><thead><tr><th>Topic</th><th>What Microsoft Learn says</th></tr></thead><tbody>
<tr><td>Exam time</td><td>120 minutes (AI-103 credential page). Microsoft's duration table gives 120 minutes, with 140 minutes of seat time, for associate and expert role-based exams that may contain labs, and says it does not publish which exams have labs.</td></tr>
<tr><td>Number of questions</td><td>No AI-103 figure is published. Microsoft says most certification exams typically contain 40 to 60 questions and that the number varies.</td></tr>
<tr><td>Passing score</td><td>700 or greater on a scale of 1 to 1,000. It is a scaled score and may not equal 70% of the points.</td></tr>
<tr><td>Unscored questions</td><td>Some questions may not count towards your score, and you are not told which.</td></tr>
<tr><td>Breaks</td><td>Five minutes are built into the exam time. The clock keeps running during a break, and you cannot return to questions you saw before it.</td></tr>
<tr><td>Microsoft Learn during the exam</td><td>Available on associate and expert exams, in a split screen, restricted to learn.microsoft.com (not Q&amp;A, practice assessments or your profile). The timer keeps running.</td></tr>
<tr><td>Proctoring and booking</td><td>Proctored; scheduled through Pearson VUE. Price depends on the country or region where you sit it.</td></tr>
<tr><td>Languages</td><td>English, Chinese (Simplified), Chinese (Traditional), French, German, Japanese, Korean, Italian, Portuguese (Brazil) and Spanish. If your language is not offered you can request an extra 30 minutes.</td></tr>
<tr><td>Retakes</td><td>Wait 24 hours after a first failure; no more than five attempts in 12 months from the first; retakes are paid where applicable.</td></tr>
<tr><td>Renewal</td><td>Associate certifications expire annually. Renew free with an unproctored, open-book online assessment during a six-month eligibility window; passing extends the certification by one year from its expiry date.</td></tr>
</tbody></table></div>
<p>Two practical points. Microsoft Learn access is a safety net, not a strategy: Microsoft says plainly that looking everything up will run you out of time, by design. Use it for the one parameter or limit you cannot recall, and know where in the documentation it lives before the exam starts. Second, the AI-103 credential page strongly recommends registering with a personal Microsoft account rather than a work or school account, because exam records tied to an organisational account are lost, unrecoverably, if you leave that organisation.</p>`,
		},
	],
	faq: [
		[
			'Is the AI-102 exam still available?',
			'No. Microsoft retired Exam AI-102 on 30 June 2026 at 11:59 PM Central Standard Time. The Azure AI Engineer Associate certification and its renewal assessment are retired as well. The current exam in this role is AI-103.',
		],
		[
			'What replaced AI-102?',
			'AI-103: Developing AI Apps and Agents on Azure, which earns Microsoft Certified: Azure AI Apps and Agents Developer Associate. Its skills measured, dated 16 April 2026, put 30–35% on generative AI and agentic solutions.',
		],
		[
			'I already hold the Azure AI Engineer Associate. Is it still valid?',
			'Yes, until it expires. Microsoft says retirement does not revoke a certification you have earned, and it stays on your transcript until its expiry date. You cannot renew it, because the renewal assessment has been retired, so plan to pass AI-103 before it lapses if you need a current credential.',
		],
		[
			'What are the AI-103 skill areas and weightings?',
			'Plan and manage an Azure AI solution (25–30%), implement generative AI and agentic solutions (30–35%), implement computer vision solutions (10–15%), implement text analysis solutions (10–15%) and implement information extraction solutions (10–15%).',
		],
		[
			'How long is the AI-103 exam and what is the passing score?',
			'The AI-103 credential page gives 120 minutes. The passing score is 700 on a scaled range of 1 to 1,000, which Microsoft notes may not equal 70% of the points.',
		],
		[
			'Do I need Python or C# for AI-103?',
			'The AI-103 study guide asks for experience developing apps in Python. AI-102 listed Python and C#; AI-103 names only Python.',
		],
	],
	sources: [
		['Study guide for Exam AI-103: Developing AI Apps and Agents on Azure, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103'],
		['Microsoft Certified: Azure AI Apps and Agents Developer Associate, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/'],
		['Study guide for Exam AI-102: Designing and Implementing a Microsoft Azure AI Solution (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102'],
		['Microsoft Certified: Azure AI Engineer Associate (retired), Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/'],
		['The AI job boom is here. Are you ready to showcase your skills? (retirement announcement linked from the AI-102 study guide), Microsoft Tech Community', 'https://techcommunity.microsoft.com/blog/skills-hub-blog/the-ai-job-boom-is-here-are-you-ready-to-showcase-your-skills/4494128'],
		['Course AI-103T00-A: Develop AI apps and agents on Azure, Microsoft Learn', 'https://learn.microsoft.com/en-us/training/courses/ai-103t00'],
		['Develop generative AI apps in Azure (learning path), Microsoft Learn', 'https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps/'],
		['Develop AI agents on Azure (learning path), Microsoft Learn', 'https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/'],
		['Develop natural language solutions in Azure (learning path), Microsoft Learn', 'https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/'],
		['What is Microsoft Foundry?, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry'],
		['Agents in Microsoft Foundry (Foundry Agent Service), Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/foundry/agents/overview'],
		['Guardrails and controls overview in Microsoft Foundry, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview'],
		['Prompt Shields, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection'],
		['Deployment types for Microsoft Foundry Models, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types'],
		['Manage Azure OpenAI in Microsoft Foundry Models quota, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/quota'],
		['Observability in generative AI, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/foundry/concepts/observability'],
		['Hybrid search using vectors and full text in Azure AI Search, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview'],
		['What is Azure Content Understanding in Foundry Tools?, Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview'],
		['Exam scoring and score reports, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'],
		['Exam duration and exam experience, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience'],
		['Exam retake policy, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/support/retake-policy'],
		['Renew your Microsoft Certification, Microsoft Learn', 'https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification'],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: `<p>Reading a skills list is not the same as picking the right service under time pressure. Azure AI Exam Prep covers AI-103 and the rest of Microsoft’s 2026 AI lineup (AI-901, AI-300, DP-600 and DP-700), and turns the material into practice questions where every answer carries the reasoning: which service, why that one, and what the distractors get wrong. Timed mock exams mean the first timed exam you sit is not the one that counts, and accuracy and pace are tracked per topic so your revision goes where it is actually needed.</p>
<p>The free tier gives you 10 questions a day. Pro unlocks unlimited practice, mock exams and offline mode. On iPhone, an AI tutor answers questions about the material on the device through Apple Intelligence (it needs iOS 26), so your questions never leave the phone. It is an independent study aid, not affiliated with or endorsed by Microsoft.</p>`,
	},
};
