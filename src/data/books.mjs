/**
 * Magnus's books: the single source for /books, the home page strip, /about and llms.txt.
 *
 * Everything here is taken from the books themselves or from a live listing, never
 * written from memory:
 *   - title, subtitle and back-cover copy: the printed covers (BoD print file for
 *     book one, KDP cover file for book two). The copy is quoted as printed.
 *   - publication date, publisher, pages and ISBN for book one: the live BoD
 *     Bokshop listing.
 *   - page count and format for book two: the print interior.
 *
 * Add a retailer to `buy` only after opening the listing and seeing the book on it.
 * No endorsements go here unless the endorser has agreed in writing.
 */

export const BOOKS = [
	{
		slug: 'ai-dont-fix-stupidity',
		title: "AI Don't Fix Stupidity",
		subtitle: 'Transforming Your Business into an AI-First Operation',
		status: 'Out now',
		cover: '/images/books/ai-dont-fix-stupidity-cover.jpg',
		coverSize: [720, 1024],
		// Back cover, as printed. <em> marks the cover's own italics.
		headline: 'AI won’t fix your company',
		blurb: [
			'The question isn’t <em>Should we use AI?</em> The question is <em>What must our organisation become when intelligence is suddenly abundant?</em>',
			'If your strategy is unclear, your data is broken, your processes are inefficient, or your culture resists change, AI will simply help those problems scale faster.',
			'That’s the uncomfortable truth.',
			'But for organisations willing to rethink how they operate, AI represents the greatest business transformation since the internet. In <em>AI Don’t Fix Stupidity</em>, AI transformation leader Magnus Oxenwaldt combines a compelling business fable with a practical implementation playbook to show leaders how to build an AI-first organisation: from strategy and governance to architecture, deployment, adoption, and measurement.',
			'Clear, practical, and refreshingly honest, this book moves beyond hype to answer the questions every executive is now facing:',
		],
		questions: [
			'How do we become AI-first?',
			'How do we transform without losing our people?',
			'And how do we build an organisation where humans and AI create more value together than either could alone?',
		],
		after: [
			'This is not a book about technology. It is a book about leadership, organisational transformation, and building companies that will thrive in the AI era.',
		],
		close: ['The companies that succeed won’t simply adopt AI.', 'They will become AI-first.'],
		inside:
			'Part One, <em>The Shift</em>, is a business fable: Elena Lindqvist has twelve months to make Norvik, a fictional Nordic home-furnishings retailer, AI-first. Part Two, <em>The Playbook</em>, is the operating system behind the story, with toolkits for assessment, strategy, architecture, deployment, people and measurement, and a plan for your first ninety days.',
		details: [
			['Published', '25 September 2026'],
			['Publisher', 'BoD (Books on Demand)'],
			['Format', 'Paperback, 372 pages'],
			['Language', 'English'],
			['ISBN', '9789181501186'],
		],
		isbn: '9789181501186',
		datePublished: '2026-09-25',
		publisher: 'BoD - Books on Demand',
		numberOfPages: 372,
		buy: [
			{
				label: 'Buy the paperback',
				href: 'https://bokshop.bod.se/ai-dont-fix-stupidity-magnus-oxenwaldt-9789181501186',
				note: 'BoD Bokshop, Sweden',
			},
		],
		companions: ['aidfs', 'aidfsgame'],
	},
	{
		slug: 'ai-dont-make-you-smarter',
		title: "AI Don't Make You Smarter",
		subtitle: 'The Partnership Does',
		status: 'New',
		cover: '/images/books/ai-dont-make-you-smarter-cover.jpg',
		coverSize: [720, 1079],
		headline: 'AI won’t make you smarter',
		blurb: [
			'The question isn’t <em>Will AI take my job?</em> The question is <em>Who do I have to become when the work I used to do is done by a colleague that never sleeps?</em>',
			'If you hand a digital coworker your tasks and keep your old habits, you get faster versions of the same mistakes. Delegation without judgement is not leverage. That’s the uncomfortable truth.',
			'But for people willing to lead the work instead of operating it, the partnership with AI is the largest change to knowledge work in a generation. In <em>AI Don’t Make You Smarter</em>, Magnus Oxenwaldt tells the story of Kris, a consultant who builds a second self and finds out what it costs to be the only human in the building, and then hands over the playbook from his own working life: how to brief a coworker, how to read work you did not do, how to think in parallel, and how to stay the accountable half of the partnership.',
			'Honest about the numbers, the fatigue and the pay, this book takes on the questions every knowledge worker is now facing:',
		],
		questions: [
			'What does the human still have to bring?',
			'How do you check work you did not watch being made?',
			'And how do you get paid for value when the business still counts hours?',
		],
		after: [
			'The first book asked what the company has to become. This one asks who you have to become inside it.',
		],
		close: ['AI won’t make you smarter.', 'The partnership will.'],
		inside:
			'Part One, <em>The Only Human in the Building</em>, follows Kris Norrby and the digital coworker he builds, Xris. Part Two, <em>The Playbook</em>, is the practice behind the story.',
		details: [
			['Published', 'September 2026'],
			['Format', 'Paperback, 220 pages'],
			['Language', 'English'],
		],
		numberOfPages: 220,
		// Retail links are added once confirmed.
		buy: [],
		companions: ['partnership'],
	},
];

/** "Title: Subtitle", the form the copyright pages use. */
export const fullTitle = (book) => `${book.title}: ${book.subtitle}`;

/** Plain text of an HTML snippet from this file, for meta tags and llms.txt. */
export const plain = (html) =>
	html
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim();
