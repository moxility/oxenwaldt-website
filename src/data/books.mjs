/**
 * Magnus's books: the single source for /books, the home page strip, /about and llms.txt.
 *
 * Everything here is taken from the books themselves or from a live listing, never
 * written from memory:
 *   - title, subtitle and back-cover copy: the printed covers (BoD print file for
 *     book one, KDP cover file for book two). The copy is quoted as printed.
 *   - publication date, publisher, pages and ISBN for book one: the live BoD
 *     Bokshop listing.
 *   - page count and format for book two: the print interior. Publication date and
 *     ISBN: the live Amazon listing of the KDP paperback.
 *
 * `buy` groups verified store listings by format. An empty list means no verified
 * store link is listed here; it is not a claim that the edition is unpublished.
 * Add links only from the distribution handoff, after checking book AND format.
 * Keep each listing's original verification timestamp; never substitute a search URL.
 * A listing without `href` renders as a dashed "Coming soon" row (optional `note`),
 * for a store the distribution handoff reports as submitted but not yet live.
 * When the URL lands, add `href` and `verifiedAt`; nothing else changes.
 * No endorsements go here unless the endorser has agreed in writing.
 */

export const BOOK_FORMATS = [
	{ id: 'paperback', label: 'Paperback' },
	{ id: 'hardcover', label: 'Hardcover' },
	{ id: 'ebook', label: 'Ebook' },
	{ id: 'audiobook', label: 'Audiobook' },
];

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
			['Format', 'Paperback, 374 pages'],
			['Language', 'English'],
			['ISBN', '9789181501186'],
		],
		isbn: '9789181501186',
		datePublished: '2026-09-25',
		publisher: 'BoD - Books on Demand',
		numberOfPages: 374,
		buy: {
			paperback: [{
				store: 'BoD Bokshop',
				href: 'https://bokshop.bod.se/ai-dont-fix-stupidity-magnus-oxenwaldt-9789181501186',
				market: 'Sweden',
				isbn: '9789181501186',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.de/dp/9181501188',
				market: 'Germany',
				edition: 'BoD edition',
				isbn: '9789181501186',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.com/dp/B0HMZCBMSY',
				market: 'United States',
				edition: 'KDP edition',
				isbn: '9798177582245',
				verifiedAt: '2026-10-15T07:30:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.co.uk/dp/B0HMZCBMSY',
				market: 'United Kingdom',
				edition: 'KDP edition',
				isbn: '9798177582245',
				verifiedAt: '2026-10-21T08:10:49+00:00',
			}],
			hardcover: [{
				store: 'Amazon',
				href: 'https://www.amazon.com/dp/B0HLNQBS99',
				market: 'United States',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.de/dp/B0HLNQBS99',
				market: 'Germany',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}],
			ebook: [{
				store: 'Amazon Kindle',
				href: 'https://www.amazon.com/dp/B0HNWNR4GF',
				market: 'United States',
				verifiedAt: '2026-10-23T07:52:00+00:00',
			}, {
				store: 'Amazon Kindle',
				href: 'https://www.amazon.co.uk/dp/B0HNWNR4GF',
				market: 'United Kingdom',
				verifiedAt: '2026-10-23T07:52:00+00:00',
			}, {
				store: 'Amazon Kindle',
				href: 'https://www.amazon.de/dp/B0HNWNR4GF',
				market: 'Germany',
				verifiedAt: '2026-10-23T07:52:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/se/book/ai-dont-fix-stupidity/id6815501318',
				market: 'Sweden',
				isbn: '9789181505238',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/us/book/ai-dont-fix-stupidity/id6815501318',
				market: 'United States',
				isbn: '9789181505238',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/gb/book/ai-dont-fix-stupidity/id6815501318',
				market: 'United Kingdom',
				isbn: '9789181505238',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/de/book/ai-dont-fix-stupidity/id6815501318',
				market: 'Germany',
				isbn: '9789181505238',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/no/book/ai-dont-fix-stupidity/id6815501318',
				market: 'Norway',
				isbn: '9789181505238',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/ca/book/ai-dont-fix-stupidity/id6815501318',
				market: 'Canada',
				isbn: '9789181505238',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Google Play Books',
				href: 'https://play.google.com/store/books/details/Magnus_Oxenwaldt_AI_Don_t_Fix_Stupidity?id=lisQEgAAQBAJ',
				market: 'Sweden, Norway',
				verifiedAt: '2026-10-06T22:50:00+00:00',
			}, {
				store: 'BoD Bokshop',
				href: 'https://bokshop.bod.se/ai-dont-fix-stupidity-magnus-oxenwaldt-9789168594927',
				market: 'Sweden',
				isbn: '9789168594927',
				verifiedAt: '2026-11-04T08:05:14.165902+00:00',
			}],
			audiobook: [{
				store: 'Spotify',
				href: 'https://open.spotify.com/show/3dB7n48lJo9RTzzXy9PiII',
				edition: 'Narrated by a digital voice · Norway availability unconfirmed',
				verifiedAt: '2026-10-06T00:00:00+00:00',
			}, {
				store: 'Google Play Books',
				href: 'https://play.google.com/store/audiobooks/details/Magnus_Oxenwaldt_AI_Don_t_Fix_Stupidity?id=AQAAAEBGIltiDM&gl=SE&hl=en',
				market: 'Sweden',
				edition: 'Narrated by a digital voice',
				verifiedAt: '2026-10-14T11:04:35.926Z',
			}, {
				store: 'Google Play Books',
				href: 'https://play.google.com/store/audiobooks/details/Magnus_Oxenwaldt_AI_Don_t_Fix_Stupidity?id=AQAAAEBGIltiDM&gl=NO&hl=en',
				market: 'Norway',
				edition: 'Narrated by a digital voice',
				verifiedAt: '2026-10-14T11:04:35.915Z',
			}, {
				store: 'Additional audiobook stores', note: 'Availability not yet verified.' }],
		},
		press: [{
			outlet: 'Columbus',
			title: 'New book challenges leaders to rethink organisations for the AI era',
			href: 'https://www.columbusglobal.com/news/new-book-challenges-leaders-to-rethink-organisations-for-the-ai-era/15207639/',
		}],
		// The video course taught from this book. Title, summary, audience and length are
		// quoted from the live Udemy listing, loaded signed out. The price is the euro
		// buyer price read from the course itself; Udemy sets a local price per market,
		// so name the market with it and re-check it whenever the Udemy price tier changes.
		course: {
			title: 'Lead an AI Transformation That Works',
			platform: 'Udemy',
			href: 'https://www.udemy.com/course/lead-an-ai-transformation-that-works/',
			summary:
				'A governed, evidence-led method for your first 90 days of AI, taught step by step from <em>AI Don’t Fix Stupidity</em>.',
			audience:
				'Business leaders asked to deliver results with AI, not just experiments; transformation owners and AI enablement leads; function heads who will carry AI into their own teams; and consultants who need a method they can defend in front of a client’s board.',
			facts: ['12 sections', '63 lectures', '17 h 18 min of video', 'English'],
			price: '€89.99',
			priceMarket: 'for buyers in the euro area',
			note: 'No need to own the book, and no coding. Every exercise comes with a supplied case if you can’t use your own organisation’s.',
			verifiedAt: '2026-10-30T11:40:00+00:00',
		},
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
			['Published', '25 September 2026'],
			['KDP paperback', '220 pages'],
			['Language', 'English'],
			['KDP ISBN', '9798176870732'],
		],
		isbn: '9798176870732',
		datePublished: '2026-09-25',
		numberOfPages: 220,
		buy: {
			paperback: [{
				store: 'BoD Bokshop',
				href: 'https://bokshop.bod.se/ai-dont-make-you-smarter-magnus-oxenwaldt-9789181501575',
				market: 'Sweden',
				edition: 'BoD edition · 238 pages',
				isbn: '9789181501575',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.com/dp/B0HL62NQ15',
				market: 'United States',
				edition: 'KDP edition · 220 pages',
				isbn: '9798176870732',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.de/dp/9181501579',
				market: 'Germany',
				edition: 'BoD edition · 238 pages',
				isbn: '9789181501575',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Bokus',
				href: 'https://www.bokus.com/bok/9789181501575/ai-dont-make-you-smarter-the-partnership-does',
				market: 'Sweden',
				edition: 'BoD edition · 238 pages',
				isbn: '9789181501575',
				verifiedAt: '2026-10-18T22:48:00+00:00',
			}, {
				store: 'Akademibokhandeln',
				href: 'https://www.akademibokhandeln.se/bok/ai-dont-make-you-smarter-the-partnership-does/9789181501575',
				market: 'Sweden',
				edition: 'BoD edition · 238 pages',
				isbn: '9789181501575',
				verifiedAt: '2026-10-18T22:48:00+00:00',
			}, {
				store: 'Adlibris',
				href: 'https://www.adlibris.com/sv/bok/ai-dont-make-you-smarter-the-partnership-does-9789181501575',
				market: 'Sweden',
				edition: 'BoD edition · 238 pages',
				isbn: '9789181501575',
				verifiedAt: '2026-10-18T22:48:00+00:00',
			}],
			hardcover: [{
				store: 'Amazon',
				href: 'https://www.amazon.com/dp/B0HLKX65FX',
				market: 'United States',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}, {
				store: 'Amazon',
				href: 'https://www.amazon.de/dp/B0HLKX65FX',
				market: 'Germany',
				verifiedAt: '2026-10-06T15:05:00+00:00',
			}],
			ebook: [{
				store: 'Amazon Kindle',
				href: 'https://www.amazon.com/dp/B0HN2BFQPR',
				market: 'United States',
				verifiedAt: '2026-10-23T08:05:00+00:00',
			}, {
				store: 'Amazon Kindle',
				href: 'https://www.amazon.co.uk/dp/B0HN2BFQPR',
				market: 'United Kingdom',
				verifiedAt: '2026-10-23T08:05:00+00:00',
			}, {
				store: 'Amazon Kindle',
				href: 'https://www.amazon.de/dp/B0HN2BFQPR',
				market: 'Germany',
				verifiedAt: '2026-10-23T08:05:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/se/book/ai-dont-make-you-smarter/id6822691587',
				market: 'Sweden',
				verifiedAt: '2026-10-14T21:16:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/no/book/ai-dont-make-you-smarter/id6822691587',
				market: 'Norway',
				verifiedAt: '2026-10-14T21:16:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/us/book/ai-dont-make-you-smarter/id6822691587',
				market: 'United States',
				verifiedAt: '2026-10-15T07:30:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/gb/book/ai-dont-make-you-smarter/id6822691587',
				market: 'United Kingdom',
				verifiedAt: '2026-10-15T07:30:00+00:00',
			}, {
				store: 'Apple Books',
				href: 'https://books.apple.com/de/book/ai-dont-make-you-smarter/id6822691587',
				market: 'Germany',
				verifiedAt: '2026-10-15T07:30:00+00:00',
			}, {
				store: 'Google Play Books',
				href: 'https://play.google.com/store/books/details/Magnus_Oxenwaldt_AI_Don_t_Make_You_Smarter?id=Z_UaEgAAQBAJ&gl=SE&hl=en',
				market: 'Sweden',
				isbn: '9789168594279',
				verifiedAt: '2026-10-21T22:25:37.157839+00:00',
			}, {
				store: 'BoD Bokshop',
				href: 'https://bokshop.bod.se/ai-dont-make-you-smarter-magnus-oxenwaldt-9789168594279',
				market: 'Sweden',
				isbn: '9789168594279',
				verifiedAt: '2026-10-14T21:16:00+00:00',
			}, {
				store: 'Bokus',
				href: 'https://www.bokus.com/bok/9789168594279/ai-dont-make-you-smarter-the-partnership-does',
				market: 'Sweden',
				isbn: '9789168594279',
				verifiedAt: '2026-10-18T22:48:00+00:00',
			}, {
				store: 'Adlibris',
				href: 'https://www.adlibris.com/sv/bok/ai-dont-make-you-smarter-the-partnership-does-9789168594279',
				market: 'Sweden',
				isbn: '9789168594279',
				verifiedAt: '2026-10-18T22:48:00+00:00',
			}],
			audiobook: [{
				store: 'Spotify',
				href: 'https://open.spotify.com/show/4ZD3RuwsdIDe7fezfHHtlA',
				edition: 'Narrated by a digital voice · Norway availability unconfirmed',
				verifiedAt: '2026-10-06T00:00:00+00:00',
			}, {
				store: 'Storytel',
				href: 'https://www.storytel.com/se/books/ai-don-t-make-you-smarter-the-partnership-does-15434767',
				market: 'Sweden',
				edition: 'Narrated by a digital voice',
				isbn: '6610001451141',
				verifiedAt: '2026-10-14T07:27:57.966Z',
			}, {
				store: 'Storytel',
				href: 'https://www.storytel.com/no/books/ai-don-t-make-you-smarter-the-partnership-does-15434767',
				market: 'Norway',
				edition: 'Narrated by a digital voice',
				isbn: '6610001451141',
				verifiedAt: '2026-10-14T07:27:58.643Z',
			}, {
				store: 'Google Play Books',
				href: 'https://play.google.com/store/audiobooks/details/Magnus_Oxenwaldt_AI_Don_t_Make_You_Smarter?id=AQAAAEBGCklKHM&gl=SE&hl=en',
				market: 'Sweden',
				edition: 'Narrated by a digital voice',
				verifiedAt: '2026-10-15T07:30:00+00:00',
			}, {
				store: 'Google Play Books',
				href: 'https://play.google.com/store/audiobooks/details/Magnus_Oxenwaldt_AI_Don_t_Make_You_Smarter?id=AQAAAEBGCklKHM&gl=NO&hl=en',
				market: 'Norway',
				edition: 'Narrated by a digital voice',
				verifiedAt: '2026-10-15T07:30:00+00:00',
			}, {
				store: 'Additional audiobook stores', note: 'Availability not yet verified.' }],
		},
		companions: ['partnership'],
	},
];

/** All four formats, including those still waiting for a verified store link. */
export const bookFormats = (book) =>
	BOOK_FORMATS.map((format) => ({ ...format, links: book.buy[format.id] ?? [] }));

/** "Title: Subtitle", the form the copyright pages use. */
export const fullTitle = (book) => `${book.title}: ${book.subtitle}`;

/** Plain text of an HTML snippet from this file, for meta tags and llms.txt. */
export const plain = (html) =>
	html
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim();
