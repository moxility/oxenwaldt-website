/**
 * Verifies the `storeLive` flag in site/src/data/apps.mjs against the real
 * App Store, so no page links to a listing that 404s.
 *
 *   npm run apps:check-store
 *
 * An App Store Connect record is NOT evidence that the store serves a page —
 * an app sitting in PREPARE_FOR_SUBMISSION or WAITING_FOR_REVIEW has an ascId
 * and no public listing. itunes.apple.com/lookup is the authority.
 *
 * Exits non-zero when the flag and reality disagree, in either direction.
 */
import { APPS } from '../src/data/apps.mjs';

const problems = [];

for (const app of APPS) {
	if (!app.ascId) {
		if (app.storeLive) problems.push(`${app.name}: storeLive is set but there is no ascId.`);
		continue;
	}
	let live = false;
	try {
		const res = await fetch(`https://itunes.apple.com/lookup?id=${app.ascId}&country=us`);
		const json = await res.json();
		live = json.resultCount > 0;
	} catch (err) {
		console.error(`${app.name}: lookup failed (${err.message}) — skipping, not concluding.`);
		continue;
	}
	const flagged = Boolean(app.storeLive);
	const mark = live === flagged ? 'ok  ' : 'DIFF';
	console.log(`${mark} ${app.name.padEnd(34)} ascId=${app.ascId}  store=${live ? 'live' : 'not live'}  flag=${flagged}`);
	if (live && !flagged) problems.push(`${app.name}: now live on the App Store — set storeLive: true.`);
	if (!live && flagged) problems.push(`${app.name}: storeLive is true but the store has no listing — links would 404.`);
}

if (problems.length) {
	console.log('\n' + problems.join('\n'));
	process.exit(1);
}
console.log('\nEvery storeLive flag matches the App Store.');
