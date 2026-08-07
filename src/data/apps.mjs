/**
 * The moxapps portfolio — single source of truth for every companion web page
 * on oxenwaldt.com.
 *
 * Consumed by:
 *   - scripts/build-app-pages.mjs  → generates site/public/<slug>/*.html
 *   - src/pages/apps.astro         → the portfolio hub at /apps
 *
 * Identity fields (name, bundleId, ascId) are copied from each app's app.json /
 * eas.json in E:/Dev/repos/moxapps. `state` mirrors the App Store Connect
 * appStoreState verified via the ASC API — re-check it before a release rather
 * than trusting this file.
 *
 * URL SHAPE MATTERS. Apple's listings already point at
 * https://www.oxenwaldt.com/<slug>/privacy.html — extensionless URLs 404 on this
 * host (PLAYBOOK §9b), so every cross-link must keep its .html suffix.
 */

export const OWNER = {
	name: 'Magnus Oxenwaldt',
	email: 'magnus@oxenwaldt.com',
	site: 'https://www.oxenwaldt.com',
	linkedin: 'https://www.linkedin.com/in/magnusoxenwaldt',
	podcast: 'https://www.oxenwaldt.com/podcast',
	bio:
		'Magnus Oxenwaldt is VP Group AI at Columbus Global. Two decades in enterprise ' +
		'architecture — ERP, integration, customer engagement, and now AI. He hosts the ' +
		'Future Bytes podcast, speaks at executive forums and board off-sites, and writes ' +
		'at oxenwaldt.com.',
};

/** Store state → how the page presents itself. */
export const STATES = {
	live: { label: 'On the App Store', tone: 'good', cta: 'download' },
	review: { label: 'In review with Apple', tone: 'wait', cta: 'notify' },
	prep: { label: 'Preparing for submission', tone: 'wait', cta: 'notify' },
	building: { label: 'In development', tone: 'idle', cta: 'notify' },
	internal: { label: 'Internal — TestFlight only', tone: 'idle', cta: 'none' },
};

/**
 * Privacy archetypes. Each app names one; the generator expands it into the
 * policy body. Keeps thirteen policies factually consistent instead of thirteen
 * separately-drifting documents.
 */
export const PRIVACY_ARCHETYPES = {
	/** Supabase account + practice history + subscription + on-device tutor. */
	'account-study': 'account-study',
	/** No account, no server, nothing leaves the device. */
	'on-device-only': 'on-device-only',
	/** Anonymous session minted on launch; progress synced, no email. */
	'anon-progress': 'anon-progress',
	/** As above, but onboarding optionally asks for email/name/company/role. */
	'anon-optional-profile': 'anon-optional-profile',
	/** Corporate SSO wrapper around an internal web portal. */
	'internal-sso': 'internal-sso',
};

const PRO_PRICING = {
	free: { name: 'Free', amount: 'Free', per: 'forever', points: [] },
	pro: {
		name: 'Pro',
		amount: '$19.99',
		per: 'per month, or $99.99/year — auto-renewing via the App Store',
		points: [],
	},
};

export const APPS = [
	// ────────────────────────────────────────────────────────────── live ──
	{
		slug: 'boardmemo',
		name: 'BoardMemo',
		tagline: 'From rough notes to board-ready. Entirely on your device.',
		category: 'Executive tools',
		state: 'live',
		ascId: '6792707318',
		storeLive: true, // verified 2026-08-07 via itunes lookup
		bundleId: 'com.moxapps.boardmemo',
		version: '1.1',
		generated: true,
		accent: '#C9A227',
		accent2: '#6FA8FF',
		glyph: 'M28,30 H72 V44 H28 Z M28,52 H72 V58 H28 Z M28,64 H58 V70 H28 Z',
		lede:
			'Paste or dictate rough meeting notes and get a polished one-page memo in board ' +
			'tone — decision memo, status update, proposal, or briefing note. Inference runs ' +
			"on Apple's Foundation Models, so nothing you write ever leaves the phone.",
		sub:
			'No server. No account. Works in airplane mode. Requires iPhone 15 Pro or newer ' +
			'on iOS 26 with Apple Intelligence enabled.',
		stats: [
			['6', 'memo templates, board to 1:1'],
			['4', 'audiences — Board, ExCo, Steering, manager'],
			['0', 'bytes of your notes leave the device'],
			['✈', 'writes with no network at all'],
		],
		features: [
			['Compose', 'Pick a template — Board update, Exec weekly, Investor memo, War-room brief, 1:1 prep, Decision brief — choose the audience, paste or dictate your notes, tap Draft board memo.'],
			['Board paper, not chat output', 'The memo renders as a fixed-section board paper in serif, with the section skeleton the audience expects rather than whatever the model felt like producing.'],
			['One-tap refinement', 'Tighten. More formal. Sharpen risks. Halve length. Regenerate. Each pass rewrites in place — no prompt engineering.'],
			['It never invents facts', 'Ambiguities come back as explicit [TO CONFIRM: …] markers instead of confident guesses. Declarative, no hedging, numbers over adjectives.'],
			['Library', 'Every memo stored locally on the phone. Long-press to delete. Deleting the app deletes them permanently — there is no copy anywhere else.'],
			['Dictation on device', "Apple's on-device speech recognition. The audio and the transcript both stay on the phone; nothing is written to a file or uploaded."],
		],
		privacy: 'on-device-only',
		pricing: [
			{ name: 'Free', amount: 'Free', per: 'three memos per calendar month', points: ['Every template and audience', 'Full refinement controls', 'Local library', 'Dictation'] },
			{ name: 'Pro', amount: '$19.99', per: 'per month, auto-renewing via the App Store', pro: true, points: ['Unlimited memos', 'Everything in Free', 'No ads, ever', 'Cancel any time in iPhone Settings'] },
		],
		faq: [
			['Where are my memos stored?', 'Only on your iPhone, in the standard app storage. There is no account and no server, so memos cannot be recovered if you delete the app or lose the device.'],
			['Does it work offline?', 'Yes. BoardMemo writes in airplane mode — the model runs on the phone.'],
			['Which devices?', 'iPhone 15 Pro or newer running iOS 26 with Apple Intelligence enabled. Apple Foundation Models does not exist on older hardware.'],
			['Do you train on my notes?', 'No. We never receive them, so there is nothing to train on.'],
		],
	},

	// ──────────────────────────────────────────────────────── in review ──
	{
		slug: 'togaf10',
		name: 'TOGAF 10 Practice',
		tagline: 'Pass TOGAF 10. On your iPhone, in the gaps in your day.',
		category: 'Certification',
		// 1.3.6 is with Apple, but an earlier version is already on sale — so the
		// store page is real and the page should say "on the App Store".
		state: 'live',
		ascId: '6767255018',
		storeLive: true, // verified 2026-08-07 via itunes lookup
		bundleId: 'com.moxapps.togaf10',
		version: '1.3.6',
		generated: true,
		accent: '#4FA3D1',
		accent2: '#FFC81E',
		glyph: 'M50,18 L78,34 V66 L50,82 L22,66 V34 Z M50,32 L36,40 V56 L50,64 L64,56 V40 Z',
		lede:
			'Practice questions for the TOGAF 10 Foundation and Practitioner exams, with an ' +
			'explanation behind every answer and a tutor that runs on the phone rather than ' +
			'in someone else\u2019s data centre.',
		sub: 'Free tier gives you 30 practice questions a day. Pro unlocks Practitioner, mock exams and unlimited practice.',
		stats: [
			['2', 'levels — Foundation and Practitioner'],
			['30', 'free practice questions a day'],
			['∞', 'Pro practice, timed mocks, full explanations'],
			['0', 'tutor questions leave your device'],
		],
		features: [
			['Every exam domain', 'The ADM cycle, architecture governance, content framework, capability framework, and the Practitioner-level scenario questions — with an explanation on every answer, not just a right/wrong mark.'],
			['Timed mock exams', 'The real format, the real clock. Find out whether you are ready before Open Group tells you.'],
			['Weakest-topic surfacing', 'The app tracks accuracy and pace per topic and puts your worst one in front of you first. Progress per topic survives reinstalling.'],
			['On-device AI tutor', 'Ask why an answer is right. The tutor runs on your iPhone via Apple Intelligence — your questions never leave the device, and there is no server-side fallback.'],
			['Daily streak reminder', 'Scheduled locally on the phone. No push token is collected; we could not push you a notification if we wanted to.'],
			['Study in the gaps', 'Built for the ten minutes before a meeting, not for a desk. Every session is resumable.'],
		],
		privacy: 'account-study',
		pricing: [
			{ name: 'Free', amount: 'Free', per: '30 practice questions a day', points: ['Foundation question bank', 'Explanations on every answer', 'Progress tracking', 'Streak reminder'] },
			{ name: 'Pro', amount: '$19.99', per: 'per month, or $99.99/year — auto-renewing', pro: true, points: ['Unlimited practice', 'Practitioner level', 'Timed mock exams', 'Full explanations and AI tutor', 'Offline mode'] },
		],
		faq: [
			['Is this an official Open Group product?', 'No. TOGAF Practice is an independent study aid. It is not affiliated with, endorsed by, or sponsored by The Open Group.'],
			['Do I need an account?', 'Yes — so your progress and stars survive reinstalling the app. You can delete the account and everything attached to it from Settings at any time.'],
			['Does the AI tutor need a network?', 'No. It runs on the device via Apple Intelligence, on iPhone 15 Pro and newer. On older hardware it reports as unavailable rather than sending your question to a server.'],
		],
		trademark:
			'TOGAF is a registered trademark of The Open Group. TOGAF 10 Practice is an independent ' +
			'study app and is not affiliated with, endorsed by, or sponsored by The Open Group.',
	},
	{
		slug: 'azureai',
		name: 'Azure AI Exam Prep',
		tagline: 'Pass the Microsoft AI Engineer exam. In your browser or on your iPhone.',
		category: 'Certification',
		state: 'review',
		ascId: '6792709057',
		bundleId: 'com.moxapps.azureai',
		version: '1.1.0',
		generated: true,
		// Static expo-router export, served from public/azureai/app/. Deep links need the
		// rewrite in vercel.json — client-side routing plus a host that 404s extensionless
		// URLs means a hard refresh on /azureai/app/session would otherwise die.
		webApp: '/azureai/app/',
		extraLinks: [['Open the web app', '/azureai/app/']],
		accent: '#3FA9F5',
		accent2: '#8FD14F',
		glyph: 'M50,20 L74,64 H60 L50,44 L40,64 H26 Z M32,72 H68 L64,80 H36 Z',
		lede:
			'Practice questions, explanations and timed mock exams for AI-102 — plan and manage ' +
			'Azure AI, generative AI, agentic solutions, computer vision, natural language and ' +
			'knowledge mining.',
		sub: 'Free tier gives you 10 questions a day. Pro unlocks unlimited practice, mock exams and offline mode.',
		stats: [
			['6', 'AI-102 domains covered'],
			['10', 'free questions a day'],
			['∞', 'Pro practice and timed mocks'],
			['0', 'tutor questions leave your device'],
		],
		features: [
			['Every AI-102 domain', 'Plan and manage an Azure AI solution, generative AI, agentic solutions, computer vision, natural language processing, knowledge mining and document intelligence.'],
			['Explanations, not just answers', 'Every question carries the reasoning — which service, why that one, and what the distractors get wrong.'],
			['Timed mock exams', 'The real format and the real clock, so the first timed exam you sit is not the one that counts.'],
			['On-device AI tutor', 'Ask anything about the material. Runs on your iPhone via Apple Intelligence — your questions never leave the device.'],
			['Weakest-topic surfacing', 'Accuracy and pace tracked per topic, so revision goes where it is actually needed.'],
			['Offline mode', 'Pro downloads the bank for practice with no network at all.'],
		],
		privacy: 'account-study',
		pricing: [
			{ name: 'Free', amount: 'Free', per: '10 questions a day', points: ['All six domains', 'Explanations on every answer', 'Progress tracking'] },
			{ name: 'Pro', amount: '$19.99', per: 'per month, or $99.99/year — auto-renewing', pro: true, points: ['Unlimited questions', 'Timed mock exams', 'Full explanations and AI tutor', 'Offline mode', '7-day free trial'] },
		],
		faq: [
			['Is this a Microsoft product?', 'No. It is an independent study aid, not affiliated with or endorsed by Microsoft.'],
			['Which exam does it cover?', 'Microsoft Certified: Azure AI Engineer Associate (AI-102).'],
			['Does the tutor work offline?', 'Yes, on iPhone 15 Pro and newer with Apple Intelligence. It runs on the device.'],
		],
		trademark:
			'Microsoft, Azure and Microsoft Fabric are trademarks of the Microsoft group of ' +
			'companies. Azure AI Exam Prep is an independent study app and is not affiliated ' +
			'with, endorsed by, or sponsored by Microsoft.',
	},
	{
		slug: 'archimate',
		name: 'ArchiMate 3.2 Practice',
		tagline: 'Learn the notation properly. Then pass the exam.',
		category: 'Certification',
		state: 'review',
		ascId: '6795196951',
		bundleId: 'com.moxapps.archimate',
		version: '1.0',
		generated: true,
		accent: '#F2A65A',
		accent2: '#7EC8E3',
		glyph: 'M24,30 H46 V48 H24 Z M54,30 H76 V48 H54 Z M39,58 H61 V76 H39 Z M35,48 V54 H65 V48',
		lede:
			'The ArchiMate 3.2 layers, elements and relationships — practised until the notation ' +
			'is second nature, with an explanation behind every answer.',
		sub: 'Business, application, technology, motivation and strategy layers, plus the relationship rules people actually get wrong.',
		stats: [
			['3.2', 'the current specification'],
			['5', 'layers plus motivation and strategy'],
			['∞', 'Pro practice and timed mocks'],
			['0', 'tutor questions leave your device'],
		],
		features: [
			['All the layers', 'Business, application, technology, physical, motivation, strategy and implementation — with the viewpoints that connect them.'],
			['Relationship rules', 'The part that fails people: which relationships are legal between which elements, and why derived relationships behave the way they do.'],
			['Explanations on every answer', 'Not a right/wrong mark. What the element actually means, and what the distractor confuses it with.'],
			['Timed mock exams', 'Exam format, exam clock.'],
			['On-device AI tutor', 'Ask why. Runs on your iPhone via Apple Intelligence — your questions never leave the device.'],
			['Weakest-topic surfacing', 'Per-topic accuracy and pace, so revision goes where it is needed.'],
		],
		privacy: 'account-study',
		// Carried over verbatim in substance from the live policy — both are material
		// disclosures Apple has already seen, and must not be dropped by a rewrite.
		sessionReplay: true,
		promoCodes: true,
		pricing: [
			{ name: 'Free', amount: 'Free', per: 'daily practice allowance', points: ['Core notation bank', 'Explanations on every answer', 'Progress tracking'] },
			{ name: 'Pro', amount: '$19.99', per: 'per month, or $99.99/year — auto-renewing', pro: true, points: ['Unlimited practice', 'Timed mock exams', 'Full explanations and AI tutor', 'Offline mode'] },
		],
		faq: [
			['Is this an official Open Group product?', 'No. It is an independent study aid, not affiliated with or endorsed by The Open Group.'],
			['Which version?', 'ArchiMate 3.2, the current specification.'],
		],
		trademark:
			'ArchiMate is a registered trademark of The Open Group. ArchiMate 3.2 Practice is an ' +
			'independent study app and is not affiliated with, endorsed by, or sponsored by The Open Group.',
	},
	{
		slug: 'aidfs',
		name: "AI Don't Fix Stupidity",
		tagline: 'The mobile companion to the book. The move from apps to agents, in ninety days.',
		category: 'The book',
		state: 'review',
		ascId: '6767744319',
		bundleId: 'com.moxapps.theshift',
		version: '0.13.0',
		generated: true,
		accent: '#FFC81E',
		accent2: '#4C8DFF',
		glyph: 'M50,20 L57.6,43.5 H82.3 L62.4,58 L70,81.5 L50,67 L30,81.5 L37.7,58 L17.7,43.5 H42.4 Z',
		lede:
			'Elena\u2019s twelve months at Norvik, rendered as ten chapters you can read or listen ' +
			'to — with every framework from the book one tap away, and a plan for your own first ' +
			'ninety days.',
		sub: 'Free. Zero ads, zero upsell, zero leaderboards.',
		stats: [
			['10', 'chapters, readable or listenable'],
			['6', 'shifts, scored across 8 dimensions'],
			['90', 'days, as a concrete plan'],
			['Free', 'no ads, no upsell'],
		],
		features: [
			['The book, made walkable', "Elena's twelve months at Norvik as ten chapters you can read or listen to. Every framework in the book, one tap away."],
			['The Six Shifts, mapped to you', 'Commands to conversations. Fixed projects to iterative value. Automation to autonomous action. Score your organisation across eight dimensions and get a specific next step.'],
			['On-device Advisor', 'An AI mentor grounded in the book and the field. Runs on your iPhone via Apple Intelligence — your conversations never leave your device.'],
			['The first ninety days', 'A concrete plan — Week 1, Month 1, Month 3. Mark what you have done. Streaks, XP, honest progress from Curious to AI-first.'],
			['No account to create', 'A session is minted anonymously on first launch. There is no email to hand over and no password to forget.'],
			['Free', 'Zero ads, zero upsell, zero leaderboards. Just the book, the framework, and ninety days.'],
		],
		privacy: 'anon-optional-profile',
		pricing: [{ name: 'Free', amount: 'Free', per: 'the whole app', pro: true, points: ['All ten chapters', 'The assessment and the ninety-day plan', 'On-device Advisor', 'No ads, no upsell, no leaderboards'] }],
		faq: [
			['Do I need the book?', 'No. The app stands on its own — but it is the same material, and they reinforce each other.'],
			['Is there an account?', 'Not one you create. The app mints an anonymous session on first launch so progress survives, with no email and no password.'],
			['Is it really free?', 'Yes. No ads, no subscription, no upsell.'],
		],
	},

	// ────────────────────────────────────────── preparing / building ──
	{
		slug: 'aiact',
		name: 'EU AI Act Navigator',
		tagline: 'Assess your AI estate on your iPhone. Article 50 is already live.',
		category: 'Governance',
		state: 'prep',
		ascId: '6798673382',
		bundleId: 'com.moxapps.aiact',
		version: '1.0',
		/** Bespoke pages already exist (index.html + the act.html reader) — do not generate over them. */
		generated: false,
		accent: '#FFC81E',
		accent2: '#4C8DFF',
		// Scales, not the AIDFS star — the star is the book's mark and the two collided on /apps.
		glyph: 'M50,22 V78 M28,34 H72 M28,34 L18,54 H38 Z M72,34 L62,54 H82 Z M34,78 H66',
		lede:
			'Find the AI in your organisation, classify it, map the obligations on the ' +
			'post-Omnibus timeline, and export the registry — entirely on your iPhone. ' +
			'No account, no server.',
		sub: 'Includes a full, searchable reader for the Act itself.',
		privacy: 'on-device-only',
		extraLinks: [['The Act, in full', '/aiact/act.html']],
	},
	{
		slug: 'aidfsgame',
		name: "AI Don't Fix Stupidity — the Game",
		tagline: 'Twelve weeks to make Norvik AI-first. A competitor has already started.',
		category: 'The book',
		state: 'prep',
		ascId: '6796604437',
		bundleId: 'com.moxapps.aidfsgame',
		version: '1.0',
		generated: true,
		accent: '#E8564B',
		accent2: '#FFC81E',
		glyph: 'M30,34 H70 V44 H30 Z M30,50 H70 V60 H30 Z M38,66 H62 V76 H38 Z M46,24 H54 V34 H46 Z',
		lede:
			'You are Elena Lindqvist, VP of Operations at Norvik — a Nordic furniture retailer ' +
			'with 12,000 employees, 340 stores and margins squeezed from both sides. The CEO ' +
			'wants you AI-first. You have twelve weeks.',
		sub:
			'A management simulation drawn from the book, not invented for it. Part 1 supplies the ' +
			'campaign; Part 2 supplies the mechanics.',
		stats: [
			['12', 'weeks on the clock'],
			['50', 'engineers at the competitor who started first'],
			['8', 'dimensions you are scored on'],
			['1', 'thing you cannot buy your way out of'],
		],
		features: [
			['The premise', 'Hemvik, a 50-engineer AI-native competitor, tripled conversion and lifted average order value 40% — built in twelve weeks on a technology layer that did not exist when Norvik\u2019s architecture was designed. They are the clock.'],
			['You cannot buy your way out', 'Procurement does not win this. You win by changing how the organisation works before the market changes it for you — and the simulation scores you on exactly that.'],
			['Drawn from the book', 'Every mechanic traces to the manuscript. The campaign is Part 1 (the novel); the systems underneath are Part 2 (the playbook).'],
			['Decisions with consequences', 'Choices compound across the twelve weeks. The ending you get is the one your decisions earned, not one of three canned outcomes.'],
			['On-device reasoning', 'Characters respond through Apple Intelligence on the phone. Nothing you say to them is sent anywhere.'],
			['No account, no server', 'There is nothing to register for and no backend to hold your save. Everything you do stays on the iPhone.'],
			['Plays in short sessions', 'Built for a commute, not an evening.'],
		],
		// The live policy is explicit: no accounts, no sign-in, no servers.
		privacy: 'on-device-only',
		pricing: [{ name: 'Free', amount: 'Free', per: 'the full campaign', pro: true, points: ['The complete twelve-week campaign', 'All eight scoring dimensions', 'On-device characters', 'No ads, no leaderboards'] }],
		faq: [
			['Do I need to have read the book?', 'No. The game tells its own story. Readers will recognise Norvik and Elena; everyone else just plays.'],
			['Is this the same as the AI Don\u2019t Fix Stupidity app?', 'No — that one is the book companion with the chapters, assessment and ninety-day plan. This is the simulation. They share a world, not a codebase.'],
		],
		siblings: ['aidfs'],
	},
	{
		slug: 'pmp',
		name: 'PMP Exam Practice',
		tagline: 'Pass the PMP. In the gaps in your day.',
		category: 'Certification',
		state: 'prep',
		ascId: null,
		bundleId: 'com.moxapps.pmp',
		version: '1.0',
		generated: true,
		accent: '#5B8DEF',
		accent2: '#F2A65A',
		glyph: 'M30,26 H62 L70,34 V74 H30 Z M38,44 H62 M38,54 H62 M38,64 H54',
		lede:
			'Practice questions across the full PMP exam content outline — people, process and ' +
			'business environment — with an explanation behind every answer and a tutor that ' +
			'runs on the phone.',
		sub: 'Predictive, agile and hybrid approaches, the way the current exam actually tests them.',
		stats: [
			['3', 'domains — People, Process, Business Environment'],
			['∞', 'Pro practice and timed mocks'],
			['0', 'tutor questions leave your device'],
			['EU', 'data stored in Frankfurt'],
		],
		features: [
			['The full content outline', 'People, Process and Business Environment — with predictive, agile and hybrid approaches weighted the way the current exam weights them.'],
			['Situational questions', 'The PMP tests judgement, not recall. The bank is written as scenarios, and the explanation says why the best answer beats the merely-correct one.'],
			['Timed mock exams', 'Exam format, exam clock, exam fatigue.'],
			['On-device AI tutor', 'Ask why an answer is right. Runs on your iPhone via Apple Intelligence — your questions never leave the device.'],
			['Weakest-topic surfacing', 'Best score and pace per topic, so revision goes where it is needed. Stars survive reinstalling the app.'],
			['Delete everything, from inside the app', 'Settings → Delete account removes your practice history, sessions, progress and login immediately and permanently.'],
		],
		privacy: 'account-study',
		sessionReplay: true,
		promoCodes: true,
		pricing: [
			{ name: 'Free', amount: 'Free', per: 'daily practice allowance', points: ['Question bank across all three domains', 'Explanations on every answer', 'Progress tracking'] },
			{ name: 'Pro', amount: '$19.99', per: 'per month, or $99.99/year — auto-renewing', pro: true, points: ['Unlimited practice', 'Timed mock exams', 'Full explanations and AI tutor', 'Offline mode'] },
		],
		faq: [
			['Is this a PMI product?', 'No. It is an independent study aid, not affiliated with or endorsed by the Project Management Institute.'],
			['Do you share my practice data?', 'No — with anyone, including PMI.'],
		],
		trademark:
			'PMP, PMI and PMBOK are registered trademarks of the Project Management Institute, Inc. ' +
			'PMP Exam Practice is an independent study app and is not affiliated with, endorsed by, ' +
			'or sponsored by PMI.',
	},
	{
		slug: 'partnership',
		name: 'The Partnership',
		tagline: 'Becoming a better partner to AI. By voice, one drill at a time.',
		category: 'The book',
		state: 'prep',
		ascId: '6798724590',
		bundleId: 'com.moxapps.partnership',
		version: '1.0',
		generated: true,
		accent: '#7FB069',
		accent2: '#FFC81E',
		// Two interlocking rings. An earlier two-circles-and-a-line version read as a sad face.
		glyph: 'M42,50 m-16,0 a16,16 0 1,0 32,0 a16,16 0 1,0 -32,0 M58,50 m-16,0 a16,16 0 1,0 32,0 a16,16 0 1,0 -32,0',
		lede:
			'A voice training journey built on Magnus\u2019s second book, <em>AI Don\u2019t Make You ' +
			'Smarter — The Partnership Does</em>. You talk to an AI counterpart, it makes a case, ' +
			'and exactly one thing it says is wrong. Your job is to catch it.',
		sub:
			'Currently the Stage 0 prototype — one unit, three difficulty bands, scored on verification. ' +
			'Nothing more gets built until that gate passes on real testers.',
		stats: [
			['3', 'difficulty bands — visible, plausible, load-bearing'],
			['1', 'planted error per scenario, always authored'],
			['0–3', 'scored against an anchor table, with evidence'],
			['On device', 'speech in, reasoning, speech out'],
		],
		features: [
			['Catch the planted error', 'Each scenario contains exactly one error. It is authored, never improvised by the model — so the drill is the same drill for everyone, and the score means something.'],
			['Three bands', 'Visible, plausible, and load-bearing. The load-bearing band is designed to catch out people who comfortably beat the visible one.'],
			['Scored on verification', 'A separate model session grades 0–3 against a published anchor table, citing the evidence it used. Not vibes.'],
			['By voice', 'Hold to talk. Speech recognition, reasoning and speech synthesis all run on the phone — the counterpart answers in character, out loud.'],
			['Nothing leaves the device', 'No transcript, no audio, no scores are transmitted. There is no server to transmit them to.'],
			['An honest gate', 'The prototype records its own evidence — score, whether the tester agreed, time to catch, whether the plant leaked — and exports a go/no-go report. If the scoring is arbitrary, the project stops.'],
		],
		privacy: 'on-device-only',
		pricing: [{ name: 'Prototype', amount: 'Not yet on sale', per: 'Stage 0 gate in progress', pro: true, points: ['Requires iPhone 15 Pro or newer on iOS 26', 'Apple Intelligence must be enabled', 'Foundation Models does not run on simulators'] }],
		faq: [
			['Can I try it?', 'Not yet. It is a prototype being run against a small number of testers to decide whether the concept survives.'],
			['What is the book?', "AI Don't Make You Smarter — The Partnership Does, Magnus's second book."],
		],
	},
	{
		slug: 'interview',
		name: 'The Interview',
		tagline: 'You are the hiring manager. The candidate is an AI with a hidden persona.',
		category: 'Games',
		state: 'building',
		ascId: null,
		bundleId: 'com.moxapps.interview',
		version: '1.0',
		generated: true,
		accent: '#B57EDC',
		accent2: '#4C8DFF',
		// Two speech bubbles facing each other — the interview is a conversation.
		glyph: 'M20,26 H58 V52 H36 L26,62 V52 H20 Z M80,42 H64 V64 H70 L76,72 V64 H80 Z',
		lede:
			'Each candidate is an on-device AI with a hidden persona — genuinely brilliant, ' +
			'plausibly fraudulent, quietly burnt out, or brilliant-but-toxic. You interview them ' +
			'by voice, asking whatever you like. They answer in character. Then you hire, and ' +
			'three months later you find out what you actually got.',
		sub: 'The score is how accurately you read people, not how many questions you asked.',
		stats: [
			['4', 'hidden personas, none of them labelled'],
			['3', 'months later, you learn the truth'],
			['~4s', 'the dead air a conversation dies at'],
			['On device', 'speech in, reasoning, speech out'],
		],
		features: [
			['Interview by voice', 'Hold to talk and ask whatever you want. There is no question list and no branching script — the candidate answers in character.'],
			['Hidden personas', 'Brilliant. Plausibly fraudulent. Quietly burnt out. Brilliant but toxic. You are not told which, and the good ones are hard to tell apart from the dangerous ones.'],
			['The consequence, three months later', 'You hire. Then the app shows you what you actually got. The score is the accuracy of your read.'],
			['Built to feel like a conversation', 'A voice conversation dies at about four seconds of dead air, so the whole design attacks latency: hold-to-talk removes end-of-speech detection, the reply streams and is spoken sentence by sentence, and the model is prewarmed while you are still talking.'],
			['Nothing leaves the phone', 'Speech recognition, reasoning and speech all run on device. Nothing a candidate says or hears is transmitted anywhere.'],
			['Honest about where it is', 'Milestone 0 is the latency spike. Nothing else gets built until the measured number says the concept survives.'],
		],
		privacy: 'on-device-only',
		pricing: [{ name: 'In development', amount: 'Not yet on sale', per: 'Milestone 0 — the latency spike', pro: true, points: ['Requires iPhone 15 Pro or newer on iOS 26', 'Apple Intelligence must be enabled', 'No release date yet'] }],
		faq: [
			['When can I play it?', 'No date. The first milestone is a measured latency spike on real hardware — if a conversation cannot feel like a conversation, the idea does not survive.'],
			['Is my voice recorded?', 'No. Speech is transcribed on the device and never written to a file or uploaded.'],
		],
	},

	// ─────────────────────────────────────────────────────────── planned ──
	{
		slug: 'dynamics365',
		name: 'Dynamics 365 Cert Prep',
		tagline: 'The Dynamics 365 certifications, practised on your phone.',
		category: 'Certification',
		state: 'building',
		ascId: null,
		bundleId: 'com.moxapps.dynamics365',
		version: '1.0',
		generated: true,
		accent: '#0078D4',
		accent2: '#FFC81E',
		glyph: 'M30,32 L50,24 L70,32 V68 L50,76 L30,68 Z M50,24 V76 M30,50 H70',
		lede:
			'Practice questions, explanations and timed mock exams for the Microsoft Dynamics 365 ' +
			'certification track — from the same study engine behind the TOGAF, ArchiMate and ' +
			'Azure AI apps.',
		sub: 'In development. No release date yet.',
		stats: [
			['—', 'exam coverage being scoped'],
			['∞', 'Pro practice and timed mocks, at launch'],
			['0', 'tutor questions will leave your device'],
			['Soon', 'no date committed'],
		],
		features: [
			['The same study engine', 'The one already carrying TOGAF 10, ArchiMate 3.2, Azure AI and PMP: explanations on every answer, weakest-topic surfacing, timed mocks, and per-topic stars that survive reinstalling.'],
			['Written by a practitioner', 'Two decades of Dynamics 365 delivery behind the question bank, not a scrape of an exam dump.'],
			['On-device AI tutor', 'Ask why an answer is right. Runs on the phone via Apple Intelligence — questions never leave the device.'],
			['Study in the gaps', 'Built for the ten minutes before a meeting, not for a desk.'],
		],
		privacy: 'account-study',
		pricing: [{ name: 'Not yet on sale', amount: 'In development', per: 'no release date committed', pro: true, points: ['Expected to match the rest of the range: free daily allowance, Pro at $19.99/mo or $99.99/yr'] }],
		faq: [
			['Which exams?', 'The scope is still being set. Tell me which one you need and it moves up the list.'],
			['Is this a Microsoft product?', 'No. It is an independent study aid, not affiliated with or endorsed by Microsoft.'],
		],
		trademark:
			'Microsoft and Dynamics 365 are trademarks of the Microsoft group of companies. ' +
			'Dynamics 365 Cert Prep is an independent study app and is not affiliated with, ' +
			'endorsed by, or sponsored by Microsoft.',
	},
	{
		slug: 'archsim',
		name: 'Architect Simulator',
		tagline: 'Run the architecture. Live with the decisions.',
		category: 'Games',
		state: 'building',
		ascId: null,
		bundleId: 'com.moxapps.archsim',
		version: '1.0',
		generated: true,
		accent: '#9AA7B8',
		accent2: '#4FA3D1',
		glyph: 'M22,72 V44 L38,34 V72 M44,72 V28 L60,20 V72 M66,72 V48 L78,42 V72 M18,76 H82',
		lede:
			'A management simulation for architects and business leaders — where the trade-off you ' +
			'take in week two is the constraint you are living with in month nine.',
		sub: 'In development. No release date yet.',
		stats: [
			['—', 'scenarios being authored'],
			['0', 'right answers guaranteed'],
			['Soon', 'no date committed'],
			['On device', 'reasoning stays on the phone'],
		],
		features: [
			['Decisions that compound', 'Architecture is not a quiz. The interesting part is what the shortcut costs you six months later, and that is what the simulation models.'],
			['For architects and the people who fund them', 'The same scenario, played from the architect\u2019s chair and from the sponsor\u2019s, does not produce the same decisions. Both views are in scope.'],
			['On-device reasoning', 'Characters and consequences are generated on the phone via Apple Intelligence. Nothing you decide is transmitted anywhere.'],
			['Plays in short sessions', 'Built for a commute, not an evening.'],
		],
		privacy: 'account-study',
		pricing: [{ name: 'Not yet on sale', amount: 'In development', per: 'no release date committed', pro: true, points: ['Follow along at oxenwaldt.com or on LinkedIn'] }],
		faq: [
			['How is this different from the AI Don\u2019t Fix Stupidity game?', 'That one runs a specific twelve-week campaign from the book. This one is a broader architecture simulation, not tied to Norvik.'],
			['When?', 'No date. It is early.'],
		],
	},

	// ────────────────────────────────────────────────────────── internal ──
	{
		slug: 'czportal',
		name: 'Customer Zero Portal',
		tagline: 'The Columbus AI-First Customer Zero control panel, on iPhone.',
		category: 'Internal',
		state: 'internal',
		ascId: '6798668237',
		bundleId: 'com.moxapps.czportal',
		version: '1.0.0',
		generated: true,
		unlisted: true,
		accent: '#02018C',
		accent2: '#6FA8FF',
		glyph: 'M26,30 H74 V64 H26 Z M32,70 H68 M46,64 V70 M54,64 V70',
		lede:
			'An internal iPhone client for the Columbus AI-First Customer Zero control panel. ' +
			'Distributed to Columbus colleagues through TestFlight — it is not a public app and ' +
			'is not sold.',
		sub: 'Sign-in is your ordinary Columbus Entra ID account. There is no separate registration.',
		stats: [
			['SSO', 'Columbus Entra ID, in-app'],
			['2', 'environments — production and staging'],
			['Voice', 'realtime voice agents work in-app'],
			['0', 'consumer availability'],
		],
		features: [
			['Entra ID sign-in, in the app', 'The Azure App Service authentication chain stays in-app, and session cookies persist across launches so you are not signing in every morning.'],
			['Voice agents work', 'Microphone access, inline media playback and WebRTC are configured so the realtime voice agents run inside the app rather than bouncing you to Safari.'],
			['Sensible link routing', 'Portal and workshop origins stay in the app; Teams, DevOps and SharePoint links open in the system browser where they belong.'],
			['Environment toggle', 'Long-press the logo on the splash screen to switch between production and staging. The choice persists, and a STAGING badge shows when it is active.'],
		],
		privacy: 'internal-sso',
		pricing: [{ name: 'Internal', amount: 'Not for sale', per: 'Columbus colleagues, via TestFlight', pro: true, points: ['No public App Store listing', 'No subscription, no purchase', 'Access controlled by Columbus Entra ID'] }],
		faq: [
			['Can I get access?', 'Only if you are a Columbus colleague on the Customer Zero programme. Ask in the programme channel.'],
			['Which environments?', 'Production and staging, switchable from the splash screen.'],
		],
	},
];

/** Everything that should appear on the public /apps hub. */
export const PUBLIC_APPS = APPS.filter((a) => !a.unlisted);

/** Everything the generator owns. aiact is bespoke and excluded by `generated: false`. */
export const GENERATED_APPS = APPS.filter((a) => a.generated);

export const CATEGORY_ORDER = ['Certification', 'Executive tools', 'The book', 'Governance', 'Games', 'Internal'];

/**
 * An App Store link, or null.
 *
 * Gated on `storeLive`, NOT on `ascId`. Having an App Store Connect record means
 * the listing exists internally — it does not mean the store serves a page, and
 * linking a not-yet-released app gives visitors a 404. `storeLive` is set only
 * after `https://itunes.apple.com/lookup?id=<ascId>` returns resultCount 1;
 * re-verify with `node scripts/check-store-links.mjs` after any release.
 */
export function appStoreUrl(app) {
	return app.storeLive && app.ascId ? `https://apps.apple.com/app/id${app.ascId}` : null;
}

export function bySlug(slug) {
	return APPS.find((a) => a.slug === slug) ?? null;
}
