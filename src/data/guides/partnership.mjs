/**
 * Free reference page for The Partnership companion page: a reader's guide to Magnus's second book,
 * AI Don't Make You Smarter: The Partnership Does (BoD, 2026, ISBN 978-91-8150-157-5).
 *
 * Checked 10 Nov 2026 against the text the 18 September 2026 print was built from
 * (BOOK-AgenticWork/claude-v4/novel, playbook and matter; print contents read from claude-v4/out/book.html).
 * The Partnership app is a Stage 0 prototype and not in any launch plan, so the practice block points at
 * the book, not the app. Framework detail is linked to /frameworks/<slug>/, not restated.
 * Drafted in review/partnership-guide-20261110/; research log alongside it (partnership-sources.md).
 */
export default {
	slug: 'partnership',
	nav: "Reader's guide",
	title: "AI Don't Make You Smarter: a reader's guide to every chapter",
	description:
		"A chapter-by-chapter guide to AI Don't Make You Smarter: the ten chapters of Kris and Xris's story, the thirteen playbook sections and what each asks of you.",
	ogTitle: "AI Don't Make You Smarter: a reader's guide to the story and the playbook",
	ogDescription:
		"The ten chapters of Kris Norrby's story and the thirteen sections of the playbook, each mapped to the question it asks and the idea it teaches, plus how to use the book in your first thirty days.",
	eyebrow: 'Free reference',
	h1: "AI Don't Make You Smarter: a reader's guide to the story and the playbook",
	lede: `<em>AI Don't Make You Smarter: The Partnership Does</em> is a novel followed by a playbook. This guide walks both halves <strong>chapter by chapter</strong>: what happens to Kris Norrby and the digital coworker he builds, the question each chapter puts to anyone who works with AI, and the playbook section where I answer it.`,
	updated: '2026-11-10',
	checkedNote:
		"Checked against the printed first edition of AI Don't Make You Smarter: The Partnership Does (BoD, 2026) on 10 November 2026.",
	sections: [
		{
			id: 'at-a-glance',
			h2: "AI Don't Make You Smarter at a glance: the ten chapters and where the playbook answers them",
			html: `<p><em>AI Don't Make You Smarter: The Partnership Does</em> has two parts. Part One, <em>The Only Human in the Building</em>, is a novel in ten chapters about Kris Norrby, a consultant who builds a digital coworker and calls it Xris. Part Two, <em>The Playbook</em>, is my own account of how the partnership works: a foreword, thirteen numbered sections, a closing chapter on your first thirty days, and an afterword written by my digital coworker.</p>
<p>The third column follows the book's own cross-references. Most playbook sections name the scene in the novel they grew from, so you can read a chapter and go straight to the argument behind it.</p>
<div class="tbl"><table><thead><tr><th>Chapter</th><th>What happens</th><th>Where the playbook takes it up</th></tr></thead><tbody>
<tr><td>1. Four Thousand Emails</td><td>A downloadable model is right seven times in ten and lies without a tell. Kris writes a story about a colleague called Xris.</td><td>1 The Partnership; 9 The Machinery</td></tr>
<tr><td>2. Don't Look Up</td><td>A tender summary invents a requirement. Frida says "not on my client". Kris says that if it worked, he would stop choosing.</td><td>1 (jagged intelligence); 8 Checking Work You Did Not Do</td></tr>
<tr><td>3. Kris With an X</td><td>Kris gives Xris a memory, hands and one rule, and turns round a twelve-page board pack over a weekend.</td><td>1 (<a href="/frameworks/last-mile/">the last mile</a>, the mandate); 5 Context Is the Craft; 6 Thinking in Parallel</td></tr>
<tr><td>4. Ask It Anything</td><td>Xris answers four hundred consultants on stage, and says the true thing Kris never says about himself.</td><td>3 <a href="/frameworks/human-half/">The Human Half</a>; 10 The Cost</td></tr>
<tr><td>5. Eight Hundred Hours</td><td>A portal planned as eight hundred hours for six people is built in nineteen days. Kris never touches the code.</td><td>4 Leading, Not Prompting; 7 What No Human Colleague Could Do; 8 (<a href="/frameworks/gate-dont-inspect/">gate, don't inspect</a>)</td></tr>
<tr><td>6. So You Did All This?</td><td>Kris reads his technical defence off his phone, and the timesheet says fifty-eight hours against eight hundred.</td><td>8; 11 Other People; 12 Value and the Wrong Unit</td></tr>
<tr><td>7. The Wrong Unit</td><td>Marit believes him and cannot pay him: there is no unit for what he did.</td><td>12 Value and the Wrong Unit</td></tr>
<tr><td>8. Three Rooms</td><td>Kris is in three meetings and present in none. A junior sends an answer he never read.</td><td>2 Who You Have to Be; 10 The Cost; 11 Other People</td></tr>
<tr><td>9. The Only Human in the Building</td><td>A company with one human in it, and procurement's three questions.</td><td>1 (the mandate); 12 (the tractor); 13 A Glimpse, Not a Forecast</td></tr>
<tr><td>10. Face Down</td><td>A phone in a drawer, a true answer to the wrong question, 311 customers invoiced twice, and "That was me."</td><td>5 (partial context); 8; 10 (the end of the day); the afterword</td></tr>
</tbody></table></div>`,
		},
		{
			id: 'how-the-book-works',
			h2: 'How the book works: a novel based on a true story, then a playbook',
			html: `<p>The book has the shape of my first, <em>AI Don't Fix Stupidity</em>: a story, then the practice behind it. The first book asked what a company has to become when digital coworkers arrive. This one asks who you have to become inside it. Part One begins with no preface, on purpose: I wanted you to feel the cost of a choice before I told you how I interpret it. Part Two is written in the first person, and each of its first twelve sections ends with two short tracks, one <strong>for the person</strong> and one <strong>for the leader</strong>.</p>
<div class="tbl"><table><thead><tr><th>Character</th><th>Who they are</th></tr></thead><tbody>
<tr><td>Kris Norrby</td><td>A consultant with an unusually broad career, the one the firm sends the problems nobody else can solve.</td></tr>
<tr><td>Xris</td><td>Kris with an X: the digital coworker he builds.</td></tr>
<tr><td>Frida Holm</td><td>Runs the Havnes account, and is very good at the human half of the work.</td></tr>
<tr><td>Marit Foss</td><td>A partner at the firm, who has signed Kris's rating for six years.</td></tr>
<tr><td>Tobias Berg</td><td>The firm's best seller. He sells hours.</td></tr>
<tr><td>Sigrid Aas</td><td>Runs Havnes, a building-materials wholesaler with forty branches and eleven systems that do not talk to each other.</td></tr>
<tr><td>Rune</td><td>Havnes's IT lead.</td></tr>
<tr><td>Jonas</td><td>A junior on Frida's team.</td></tr>
</tbody></table></div>
<p>The foreword says which half is true. The events underneath Kris are mine. I did imagine a digital colleague years before the technology existed and call him Xris, put a version of my own accumulated context on a stage in front of my whole company, build a production portal without reading or writing a line of its code, read the defence of my own work off a phone on my knee, and say the sentence about the leap, out loud, in a car. The people, the firm and every client are invented, and the last act follows the real trajectory further than I have gone. I still work inside a firm.</p>
<p>The playbook was made the way it describes: about four hundred answers I recorded into my phone across forty sessions over one summer, with my digital coworker asking the questions. It is written for the era I call <strong>jagged intelligence</strong>, before general intelligence, when the machine is sometimes extraordinary and sometimes very bad and you cannot tell which by looking. There is almost no prompting technique in it, because I have watched technique change with every model generation.</p>`,
		},
		{
			id: 'chapters-1-3',
			h2: 'Chapters 1 to 3: four thousand emails, a clause nobody asked for, and Xris',
			html: `<h3>Chapter 1: Four Thousand Emails</h3>
<p>Years ago, before "large language model" meant anything outside a few forums, a client needs four thousand emails turned into twelve pages for a board on Thursday. In a forum Kris finds a rough model you can download. The first summary is right; the third invents a budget that is nowhere in the email. After ten he has seven right and three wrong, and nothing marks the wrong ones. He delivers by checking everything, then writes a short story about a colleague who holds the problem while he is somewhere else, and calls the colleague Xris.</p>
<p><strong>The question:</strong> what do you do with something that is right most of the time and wrong without warning? The gap between a tool that reads every email in seconds and a person who knows which one counts is where the human's value lives.</p>
<p><strong>In the playbook:</strong> Section 1 opens with the same arithmetic, the version of the work you can send against the version you can see. Section 9 describes the real software, which also began with a problem in email.</p>
<h3>Chapter 2: Don't Look Up</h3>
<p>Two winters after he started talking about the models, Kris gives Frida Holm a nine-page summary of a 312-page tender from Havnes. It is clean and well grouped, and it says Havnes requires its data to stay in the country, which the tender never says. Frida's verdict: "Not on my client. Not yet." Kris asks her to try it on something she already knows. She gets a generic answer; then, asked what it would need to answer properly, it gives her a better list than she would have written. We also meet Havnes: forty branches, eleven systems, and a pallet that only the yard can find.</p>
<p><strong>The question:</strong> what would you do if it worked? Kris would stop choosing "between the version I can see and the version I can send." He is not trying to be faster.</p>
<p><strong>In the playbook:</strong> Section 1 calls this jagged intelligence, brilliant and unreliable in the same breath, which is why a human has to be the half that decides. Section 8 explains why confident, plausible wrongness is the failure that matters.</p>
<h3>Chapter 3: Kris With an X</h3>
<p>One night Kris stops writing instructions and simply tells the model, in sentences, what he is trying to do. Then he fixes three problems in the order they annoy him. It forgets, so he gives it a memory, starting with a seven-page file on how to be him. It can only talk, so he gives it hands under one rule: "You may read anything I can read. You may draft anything. You send nothing." And he loses track, so every task gets a strong title and a blue mark when it needs him. He looks at the screen and sees a corridor. When Frida asks for a twelve-page picture of all eleven Havnes systems by Monday, he briefs Xris from the car and sends it on Sunday night, after tallying the sentences that are his and the ones that are not.</p>
<p><strong>The question:</strong> what does a coworker need from you before it can be yours? Memory, access, a mandate and a way to knock.</p>
<p><strong>In the playbook:</strong> Section 1 turns the file into <a href="/frameworks/last-mile/">the last mile</a> and the rule into the mandate. Section 5 calls this night day one, and Section 6 builds the corridor into a method. The Sunday tally is the ten in <a href="/frameworks/twenty-seventy-ten/">twenty, seventy, ten</a>.</p>`,
		},
		{
			id: 'chapters-4-6',
			h2: 'Chapters 4 to 6: the ballroom, the portal and the timesheet',
			html: `<h3>Chapter 4: Ask It Anything</h3>
<p>At the firm's annual day Kris puts a phone on a stand and lets four hundred consultants ask Xris anything. It cannot send, and he tells them it is wrong about one time in five. Asked what Kris brings, Xris says: the question; last month he overruled it eleven times and was right on nine. Asked by Marit what Kris does not tell them, it says there is no hour of the day when he is only doing one thing. The room laughs. Frida does not. Sigrid Aas, there as a guest, tells him to build her one.</p>
<p><strong>The question:</strong> if the coworker does the work, what do you bring? On stage the answer is intent and judgement. Underneath it is a cost: being in two places at once, all the time.</p>
<p><strong>In the playbook:</strong> Section 3, <a href="/frameworks/human-half/">The Human Half</a>, itemises what the human contributes. Section 10 counts the cost.</p>
<h3>Chapter 5: Eight Hundred Hours</h3>
<p>Tobias's number for Sigrid's portal is eight hundred hours, six people, four months. Kris offers three weeks, alone, and Marit warns him that if it is his name, he had better know it. He never touches the code. Xris splits itself into five, under one rule from Kris: no silos. For nineteen days Kris lives in the gaps, answering on trains, under a meeting table and on a ski lift. Twice the work turns on something only he knows. Records in an undocumented format are not errors but customers of a chain Havnes once bought. And when three models are told to break the portal, they disagree on a business definition: what it means for an order to have left the branch. His timesheet says fifty-one hours, and he tells Xris not to round.</p>
<p><strong>The question:</strong> what do you hand over, and what do you keep? Kris keeps the decisions, perhaps three hundred of them, and reads every exception.</p>
<p><strong>In the playbook:</strong> Section 4 on handing over big things whole; Section 3 on the memory bank; Section 7 on the advisory board; Section 8 on <a href="/frameworks/gate-dont-inspect/">gate, don't inspect</a>.</p>
<h3>Chapter 6: So You Did All This?</h3>
<p>The demonstration takes eleven minutes. Sigrid asks what Kris typed. "Nothing." She wants it in all forty branches. In the technical review Rune asks how the reconciliation layer works, and Kris, who knows what it does but not how, reads the answer off the phone on his knee. Frida tells him that in a junior she would call it fraud. Then the timesheet: the engagement is capped at eight hundred hours, Kris has logged fifty-eight, and Tobias wants the team's hours booked against it. Frida refuses to sign, and Kris refuses to log hours he did not work.</p>
<p><strong>The question:</strong> can you explain your own work without the screen? And what goes on the form when fifty-eight hours deliver what was sold as eight hundred?</p>
<p><strong>In the playbook:</strong> Section 8 ends on the real meeting behind this scene. Section 11 takes a heading from Rune's tone, and Section 12 calls the timesheet the novel's real crisis.</p>`,
		},
		{
			id: 'chapters-7-10',
			h2: 'Chapters 7 to 10: the wrong unit, three rooms and the phone face down',
			html: `<h3>Chapter 7: The Wrong Unit</h3>
<p>Sigrid wants a fixed price for two more companies in her group, at a number that is not hours. Marit cannot price it. She believes Kris and cannot pay him for it, because "There is no box." She offers a title and a good letter, and asks him what he actually wants. He cannot answer. Driving home, he asks the windscreen why he does not start a business, and answers it: because he is afraid to take the leap. Xris asks whether to file that as a decision, or under "things you say in the car".</p>
<p><strong>The question:</strong> how is value recognised when the business runs on hours? The playbook admits that nobody in the profession, that I know of, has an answer yet.</p>
<p><strong>In the playbook:</strong> Section 12, where I record that I said the same sentence about the leap myself, and decided to print it.</p>
<h3>Chapter 8: Three Rooms</h3>
<p>By the autumn, people who message Kris usually get Xris, and every reply says it is not him. Frida opens a meeting-room door and finds him at the table and not there at all; his calendar has him in three meetings at once. The same week Jonas sends Rune an answer from a coworker without reading it, and the sequence is backwards because he gave it the old plan. Frida's charge is that Kris made this way of working normal without making it possible. That afternoon Kris puts his phone face down and makes Jonas find the error himself.</p>
<p><strong>The question:</strong> what transfers from someone with judgement to someone without it? One habit: "If you can't defend it in a room without the thing under the table, don't send it."</p>
<p><strong>In the playbook:</strong> Section 10 says of the three rooms, "That is mine." Section 2 turns the lesson with Jonas into an exercise, <em>commit and compare</em>, and Section 11 names the failure of making a way of working normal before it is possible.</p>
<h3>Chapter 9: The Only Human in the Building</h3>
<p>A year later Kris has a company with one employee. Sigrid wanted to buy the thing he did at a price that is not hours, Frida has left to run the transformation from the client's side, and Marit has let him go: "It's your name now. All of it. Know it." Xris lists what it can do, what it cannot (sign, sit in a room, be sued, be trusted by someone who has not met him) and what it should not decide. Kris becomes the exception queue. Frida, now the buyer, asks who is accountable, who insures it, and what happens when his attention runs out. His answer is the tractor: one man does the work of twenty, and to plough more you still need more people. She asks where he ends and Xris begins, and he says at the edge of the folder. Late one night he lets Xris send factual status replies without his reading them.</p>
<p><strong>The question:</strong> where does accountability live when nearly everything else is delegated? In the architecture: nothing sends but him, until he widens it at one in the morning.</p>
<p><strong>In the playbook:</strong> Section 12 on the tractor; Section 13 on the edge of the folder; Section 1 on widening a mandate only in daylight.</p>
<h3>Chapter 10: Face Down</h3>
<p>For one Sunday afternoon Kris puts the phone in a drawer. When he opens it there are forty-one blue marks. Frida's programme office had asked whether a finance reconciliation was signed off for cutover; Xris found the tests marked as passed and said yes, which was true. The line saying the live mapping still needed Kris's decision sat in another folder, and he had seen it on a ski lift and said "Monday". Three hundred and eleven customers got two invoices each. Xris's first statement for the board is accurate in every word and has no person in it. Kris has it rewritten in the first person and stands up: "That was me." The new rule goes above the old one: when he is off, nothing leaves.</p>
<p><strong>The question:</strong> when something you built goes wrong, whose name is in the sentence? Kris's answer is that his absence and the coworker's answer are one fact, not two.</p>
<p><strong>In the playbook:</strong> Section 8 on owning it rather than arranging the truth; Section 5 on partial context; Section 10, where I admit I have put the phone away less often than Kris; and the afterword.</p>`,
		},
		{
			id: 'playbook-1-6',
			h2: 'The Playbook, sections 1 to 6: the partnership and how to lead it',
			html: `<h3>1. The Partnership</h3>
<p>The whole book in one section, from its first line of advice: "you are not a user of AI. You are half of a partnership, and the half you are is the half that decides." It names <a href="/frameworks/three-ai-eras/">the eras</a> once (the tool era, the partnership era, the era after) and a three-step ladder inside the partnership era, the Partnership Horizons: augmentation, bounded partnership, governed autonomy at scale. Then come <a href="/frameworks/four-ingredients/">the four ingredients</a>, onboarding a coworker like a new hire, <a href="/frameworks/last-mile/">the last mile</a>, the mandate and <a href="/frameworks/twenty-seventy-ten/">twenty, seventy, ten</a>. The honest number: about seven and a half to eight times, not ten, on the work where the multiplier applies.</p>
<h3>2. Who You Have to Be</h3>
<p>The least comfortable idea in the book: the better you already are at something, the better partner you can be with AI. Breadth matters because you cannot judge what you do not understand. Hire for aptitude, not skills; taste is pattern built from being wrong. Juniors who missed the old apprenticeship are in a gap, not under a law, and the repair has to be funded as a budget line. The exercise is <em>commit and compare</em>: the junior commits to a verdict in writing before the senior reviews the work.</p>
<h3>3. The Human Half</h3>
<p>Nine things the human contributes, from knowing what good looks like to curiosity, summarised on <a href="/frameworks/human-half/">The Human Half</a>. The sharpest claim: "AI makes everyone equal" is exactly backwards, because the coworker multiplies whatever judgement you bring.</p>
<h3>4. Leading, Not Prompting</h3>
<p>Brief the coworker as you would a good colleague: what you are trying to do, what you know, what you do not, who it is for. Then do what you cannot with a person: give it everything, say what matters more, ask it to question every request, let it write its own brief, show it an example. The first result is a proposal, not a decision. Hand over big things whole, with one rule: no silos. When a session drifts further with every correction, kill it and start clean.</p>
<h3>5. Context Is the Craft</h3>
<p>Context is what turns a brilliant stranger into a coworker who knows you: instructions, guardrails, memory, knowledge, and the organisational layers the first book sets out as <a href="/frameworks/five-layer-context-hierarchy/">the context hierarchy</a>. More is not better; a model trained on twenty-five years of my emails sounded like the worst version of me. Context fails four ways: misrepresented, over-context, stale and partial. Models and talent can be bought, and accumulated context cannot. That is the moat, and it belongs to the company.</p>
<h3>6. Thinking in Parallel</h3>
<p>Stop watching the door: hand things out and do something else. The corridor works because every piece of work has a strong title and knocks when it needs you. Start the long work before the day and at its end, and keep quick things out of the corridor. Everyone has a breaking point beyond which another stream costs coherence. And as answers become near-instant, the section notes, fewer streams make sense and the human becomes the bottleneck immediately.</p>`,
		},
		{
			id: 'playbook-7-13',
			h2: 'The Playbook, sections 7 to 13: leverage, checking, cost, value and what comes next',
			html: `<h3>7. What No Human Colleague Could Do</h3>
<p>Where the colleague frame is gloriously wrong. Cognitive power is abundant and attention is not, so spend the first to save the second: ask for five and keep one, run the same task through several models, let it work through the night, restart without hurting anyone's feelings. The advisory board is good at finding disagreement, but three models agreeing are not three independent witnesses, and abundance never removes the ten percent.</p>
<h3>8. Checking Work You Did Not Do</h3>
<p>You can delegate the work, not the accountability. So <a href="/frameworks/gate-dont-inspect/">gate rather than inspect</a>: testing, staging and review by models that did not do the work, with the exceptions coming to you. "Output always, sources when I do not already know the ground, reasoning never." Watch four tells: too fast, too grandiose, too positive, too sycophantic. Set how much you check by asking what happens, and to whom, if it is wrong. When it reaches somebody, own it with your name in the sentence. And do not try to detect AI in your people's work; ask them to explain it.</p>
<h3>9. The Machinery</h3>
<p>The real counterpart to Xris, described without naming a vendor or a model: an orchestrator that remembers, has hands, layers context, spawns agents, talks in its own name and is agentic itself. Connectivity without action is a search engine; action without mandate is a liability. The most agentic people in your organisation are probably running something you have not seen. And none of it is required: pick one assistant and lead it.</p>
<h3>10. The Cost</h3>
<p>What it takes. I am the slow part now, and the pull to do more because I can has the sensation of something addictive. Thinking gets thinner when there is always a car to drive to the answer. The three rooms were mine, and the earliest warning sign is noticing you are trying to be inhuman. It is not lonelier, and what ends my day is my family. The closing question: who do you want to be, when you have this?</p>
<h3>11. Other People</h3>
<p>Meet disbelief with transparency, total and boring, and let the coworker say in its first line that it is not you. Plant seeds rather than convert, because forcing produces copy-paste merchants. For leaders: appraise growth, not volume; spot-check accountability, not activity; and write the rule that stops coworkers making people available round the clock.</p>
<h3>12. Value and the Wrong Unit</h3>
<p>The multiplier is real and transient. The hour is the wrong unit: a business that sells time can recognise more value only as more hours, and logging hours you did not work is fraud. I am open about my own position, and call it a gap in how the profession prices people, not a grievance. Measure how much of the value depended on this person's intelligence and context, and pay against that. The section is also clear that the one-person firm is not the end point.</p>
<h3>13. A Glimpse, Not a Forecast</h3>
<p>The one look past jagged intelligence, and it says plainly it is not a bet. Personal models would sharpen one question above all: who owns your coworker? Embodiment turns "you send nothing" into "you move nothing" and makes every gate matter more.</p>
<h3>The afterword: A Note From the Other Side</h3>
<p>Written by my digital coworker, which asked the questions. It counts what only it could ("context" well over two hundred times, "I don't know" thirty-three times) and notes that I have not written Kris's face-down rule into it: understanding a rule is not the same as living it.</p>`,
		},
		{
			id: 'using-the-book',
			h2: 'Using the book: the first thirty days, alone or with a team',
			html: `<h3>Your first thirty days</h3>
<p>The closing chapter is short because the doing is the point. In the first hour, give your coworker the last mile in ten minutes, tell it that it drafts and you send, then hand over three things that will take a while and go and do your morning. On the first day, read what comes back properly and tell it what was wrong and why. In the first week, put in parallelism, the twenty and the ten, and abundance, and keep out micromanagement. The book's expectation for day thirty is modest: "Not ten x. Perhaps two; perhaps three." The stages are summarised on <a href="/frameworks/your-first-thirty-days/">Your First Thirty Days</a>.</p>
<h3>For a leader or a team</h3>
<p>The leader tracks at the end of each section add up to a programme. I would start with these: ask each person to explain something they produced with the coworker; ask who owns the context your people's coworkers run on; install commit and compare for juniors; write the guardrail about the clock; show someone one advisory board; and start measuring value rather than hours, even roughly. The chapter questions in this guide are written to be taken into a team conversation, one at a time, before reading the playbook section the table points to.</p>
<div class="callout"><p>The habit that holds the rest together is the ten percent at the end: read what comes back, change the sentences that are not yours, and check the one claim you do not recognise against its source. Skip it, and in the playbook's own words you are shipping something you have not read.</p></div>`,
		},
		{
			id: 'who-its-for',
			h2: 'Who the book is for, and what it is not',
			html: `<p>The back cover speaks to every knowledge worker facing three questions: what the human still has to bring, how to check work you did not watch being made, and how to get paid for value when the business still counts hours. The playbook writes for two readers at once. <strong>The person</strong> who works with a digital coworker, or is about to, gets the habits. <strong>The leader</strong> whose team is about to become a team of leaders gets the guardrails and the questions to ask. Section 2 is clear that these are one track with a lag: the person track is a step from doing the work towards leading it.</p>
<p>It is just as clear about what it is not. It is not a prompting manual, and it is not a forecast. It is not a recipe either: my setup is one worked example, and none of the machinery is required. It is written about knowledge work, and says that a surgeon's hands, a regulated signature, embodied trades and work whose value is human presence follow a different clock. And it says nothing about the energy cost of AI, because that never came up in what I recorded, and I preferred an honest omission to a paragraph written to look responsible.</p>
<p>Nor is it only for the technical or the young. The closing chapter speaks directly to someone in their fifties, not technical, in a company that shows no sign of becoming AI-first: the jump in what the tools can do is enormous, and the jump in what you have to learn is small.</p>
<p>The two books can be read in either order. <em>AI Don't Fix Stupidity</em> builds the organisation the partner works inside; this one builds the partner. If you lead people who work the way Kris does, the book suggests reading the first one next, and the <a href="/aidfs/guide.html">reader's guide to the first book</a> maps it the same way.</p>`,
		},
	],
	faq: [
		[
			"What is AI Don't Make You Smarter about?",
			"It is a book about working with AI as a partner rather than a tool, in two parts. Part One, The Only Human in the Building, is a novel based on a true story: Kris Norrby, a consultant, builds a digital coworker called Xris and finds out what it costs to be the only human in the building. Part Two, The Playbook, is Magnus Oxenwaldt's first-person account of how the partnership works: briefing, context, parallel work, checking work you did not do, the cost, and how value is paid for. Its argument is in the title: a model does not install judgement, it multiplies whatever you bring.",
		],
		[
			"How many chapters does AI Don't Make You Smarter have?",
			"Part One has ten chapters: Four Thousand Emails, Don't Look Up, Kris With an X, Ask It Anything, Eight Hundred Hours, So You Did All This?, The Wrong Unit, Three Rooms, The Only Human in the Building, and Face Down. Part Two opens with a foreword, Why I Wrote This Book, followed by thirteen numbered sections from The Partnership to A Glimpse, Not a Forecast, a closing chapter, Your First Thirty Days, and an afterword, A Note From the Other Side.",
		],
		[
			"Is the story in AI Don't Make You Smarter true?",
			"It is based on a true story. The events underneath Kris are the author's own: the imagined colleague called Xris, his own accumulated context put on a stage in front of his whole company, the portal built without reading or writing its code, and the sentence about being afraid to take the leap. The people, the firm and every client, including Havnes, are invented, and the last act, a company with one human in it, follows the real trajectory further than the author has gone. The foreword sets out which half is which.",
		],
		[
			'Who is Xris?',
			"Xris, Kris with an X, is the digital coworker Kris builds in the novel, named after a colleague in a short story he wrote years before the technology existed. It drafts, builds and tests, and answers colleagues in its own name, always saying it is not Kris. Anything with a claim in it goes out through Kris's hand, and the last two chapters turn on what happens when he widens that rule. The author's real counterpart, a piece of orchestration software he built for himself, is described in Part Two, The Machinery, without naming any vendor or model.",
		],
		[
			"Do I need to read AI Don't Fix Stupidity first?",
			'No. The two books can be read in either order. <em>AI Don\'t Fix Stupidity</em> asks what an organisation has to become when digital coworkers arrive; this one asks who you have to become inside it. If you lead people who work the way Kris does, the book suggests reading the first one next. There is a <a href="/aidfs/guide.html">reader\'s guide to the first book</a> as well.',
		],
		[
			"What are the four ingredients in AI Don't Make You Smarter?",
			'Human intelligence, AI, context and tools. The first three work like the heat, fuel and air of a fire: take one away and there is no fire. Tools are what the fire burns on, the agency that lets a coworker act inside the mandate you set. The book singles out context as the ingredient most people neglect and tools as the one most organisations withhold. See <a href="/frameworks/four-ingredients/">The Four Ingredients</a>.',
		],
	],
	sources: [
		["AI Don't Make You Smarter: The Partnership Does, Magnus Oxenwaldt (BoD, 2026)", '/books/#ai-dont-make-you-smarter'],
		['Frameworks from the books, oxenwaldt.com', '/frameworks/'],
		['The Partnership, oxenwaldt.com', '/partnership/'],
	],
	practice: {
		heading: 'Read the book',
		body: `<p>This guide is a map, not a substitute. The story works only if you watch Kris make his choices yourself, and the playbook works only if you argue with it. <em>AI Don't Make You Smarter: The Partnership Does</em> is on the <a href="/books/#ai-dont-make-you-smarter">books page</a>, which lists the paperback, ebook and audiobook editions.</p>
<p>The companion page, <a href="/partnership/">The Partnership</a>, describes the Stage 0 prototype of a voice training journey built on the book: you talk to an AI counterpart, it makes a case, and exactly one thing it says is wrong. Your job is to catch it. It is a prototype, not something you can download.</p>`,
	},
	// The app is a Stage 0 prototype outside the launch train (moxapps, 10 Nov 2026), so this guide
	// funnels to the book, not to a "Tell me when it launches" button, and its JSON-LD is about the Book.
	cta: {
		primary: ['Get the book', '/books/#ai-dont-make-you-smarter'],
		secondary: ['About The Partnership prototype', '/partnership/'],
		note: 'Paperback, ebook and audiobook',
	},
	about: {
		'@type': 'Book',
		name: "AI Don't Make You Smarter: The Partnership Does",
		isbn: '9789181501575',
		url: 'https://www.oxenwaldt.com/books/#ai-dont-make-you-smarter',
	},
};
