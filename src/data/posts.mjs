/**
 * Essays versus short posts. About half of the blog is short LinkedIn posts imported
 * with the rest; they stay online, but the front page and the default /blog view lead
 * with the essays. `hidden: true` in frontmatter is for imported posts written by
 * someone else: the page stays (no broken links) but is noindexed and unlisted.
 */
export const ESSAY_MIN_WORDS = 150;

const bodyWords = (post) =>
	(post.body ?? '')
		.replace(/\n---\n\*Originally posted[\s\S]*$/, '')
		.split(/\s+/)
		.filter(Boolean).length;

export const isListed = (post) => !post.data.hidden;
export const isEssay = (post) => isListed(post) && !post.data.short && bodyWords(post) >= ESSAY_MIN_WORDS;
