// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Magnus Oxenwaldt';
export const SITE_DESCRIPTION = 'AI & Digital Transformation Leader with 20+ years in enterprise architecture. Host of Future Bytes podcast. Practical insights on AI strategy, ERP, and making technology deliver real business results.';
export const SITE_URL = 'https://www.oxenwaldt.com';

// Identity graph for entity disambiguation in search engines and LLMs.
export const PERSON = {
	name: 'Magnus Oxenwaldt',
	jobTitle: 'VP Group AI',
	worksFor: 'Columbus Global',
	url: SITE_URL,
	image: `${SITE_URL}/images/magnus_portrait_casual.png`,
	email: 'magnus@oxenwaldt.com',
	sameAs: [
		'https://www.linkedin.com/in/magnusoxenwaldt/',
		'https://www.columbusglobal.com/about-us/columbus-leadership-group-executive-management-and-group-management/',
		'https://www.youtube.com/channel/UCbv63GS7XvEv-zjcxIFo8bQ',
		'https://open.spotify.com/show/2dUyQaG5wFvCPBkB2ErHKe',
		'https://podcasts.apple.com/no/podcast/future-bytes/id1784685801',
		'https://feeds.acast.com/public/shows/6710bd164114798e63e10fe5',
		'https://www.wikidata.org/wiki/Q139624321',
	],
	knowsAbout: [
		'Artificial Intelligence',
		'Agentic AI',
		'Enterprise AI strategy',
		'Digital transformation',
		'Microsoft Dynamics 365',
		'Microsoft Azure',
		'Power Platform',
		'AI governance',
		'AI in retail and e-commerce',
		'Enterprise architecture',
	],
	alumniOf: 'Columbus Global',
	nationality: 'NO',
};

export const PODCAST = {
	name: 'Future Bytes',
	tagline: 'Bits of business transformation',
	description:
		'Weekly podcast on AI strategy and real-world implementation, hosted by Magnus Oxenwaldt. Most episodes 5–10 minutes, with deeper guest interviews.',
	url: `${SITE_URL}/podcast/`,
	feedUrl: 'https://feeds.acast.com/public/shows/6710bd164114798e63e10fe5',
	spotifyUrl: 'https://open.spotify.com/show/2dUyQaG5wFvCPBkB2ErHKe',
	appleUrl: 'https://podcasts.apple.com/no/podcast/future-bytes/id1784685801',
	image: `${SITE_URL}/images/future_bytes_cover.jpg`,
};

export const NEWSLETTER_URL =
	'https://www.linkedin.com/newsletters/weekly-ai-news-for-business-7377233384185442304/';
