// Free reference guide for the ArchiMate 3.2 Practice companion page.
// Facts checked 10 November 2026; the research log is
// review/app-guides-20261110/archimate-sources.md. Paraphrase only: no specification text is copied.

export default {
	slug: 'archimate',
	nav: 'Cheat sheet',
	title: 'ArchiMate 3.2 Cheat Sheet: Relationships, Layers and Exams',
	description:
		'ArchiMate 3.2 cheat sheet: every relationship and its notation, layers, elements, derivation rules, viewpoints, and the Foundation and Practitioner exams.',
	ogTitle: 'ArchiMate 3.2 cheat sheet: relationships, layers, derivation, viewpoints and the exams',
	ogDescription:
		'A practitioner reference to ArchiMate 3.2, checked against The Open Group: the relationship set, the framework, the common mistakes, the Part 1 and Part 2 exams, and where ArchiMate 4 fits.',
	eyebrow: 'Free reference',
	h1: 'ArchiMate 3.2 cheat sheet: relationships, layers, derivation and the exams',
	lede:
		'Everything a working architect needs on one page: the eleven relationships and the junction with their notation, the layers and aspects, the elements, how derivation actually works, and how the ArchiMate 3 Foundation and Practitioner exams are built. <strong>ArchiMate 4 was published in April 2026, but the certification still tests 3.2</strong>, so 3.2 is what this page covers.',
	updated: '2026-11-10',
	checkedNote:
		'Checked against The Open Group ArchiMate certification page and exam fact sheets, the ArchiMate 3.2 Specification and its Reference Cards, and the ArchiMate 4 publication record on 10 November 2026.',
	sections: [
		{
			id: 'relationships-cheat-sheet',
			h2: 'ArchiMate 3.2 relationships cheat sheet',
			html: `<p>ArchiMate 3.2 has eleven relationships in four families (structural, dependency, dynamic and other), plus one relationship connector, the junction. This is the table worth keeping next to the modelling tool: what each relationship means, how it is drawn, and how it reads aloud. Element and relationship names keep the specification's spelling.</p>
<div class="tbl"><table><thead><tr><th>Relationship</th><th>Family</th><th>How it is drawn</th><th>What it means</th><th>Reads as</th></tr></thead><tbody>
<tr><td><strong>Composition</strong></td><td>Structural</td><td>Solid line, filled diamond at the whole</td><td>The whole consists of the part, and the part does not exist without the whole</td><td>composed of / composed in</td></tr>
<tr><td><strong>Aggregation</strong></td><td>Structural</td><td>Solid line, hollow diamond at the whole</td><td>The whole combines parts that can exist on their own</td><td>aggregates / aggregated in</td></tr>
<tr><td><strong>Assignment</strong></td><td>Structural</td><td>Solid line, dot at the source, arrowhead at the target</td><td>Who or what performs, is responsible for, stores or executes something</td><td>assigned to / has assigned</td></tr>
<tr><td><strong>Realization</strong></td><td>Structural</td><td>Dotted line, hollow triangle at the more abstract element</td><td>A more concrete element brings a more abstract one into being, or achieves it</td><td>realizes / realized by</td></tr>
<tr><td><strong>Serving</strong></td><td>Dependency</td><td>Solid line, open arrowhead at the user</td><td>An element offers its functionality to another element</td><td>serves / served by</td></tr>
<tr><td><strong>Access</strong></td><td>Dependency</td><td>Dotted line, optional small arrowhead</td><td>Behaviour or active structure reads or writes a passive structure element; the arrowhead shows which way the data goes</td><td>accesses / accessed by</td></tr>
<tr><td><strong>Influence</strong></td><td>Dependency</td><td>Dashed line, open arrowhead, optional +/- label</td><td>Something helps or hinders a motivation element without being decisive for it</td><td>influences / influenced by</td></tr>
<tr><td><strong>Association</strong></td><td>Dependency</td><td>Plain solid line; a half arrowhead if directed</td><td>An unspecified link, or one that no other relationship covers</td><td>associated with</td></tr>
<tr><td><strong>Triggering</strong></td><td>Dynamic</td><td>Solid line, filled arrowhead</td><td>Time or cause: part of the source has to happen before the target can start</td><td>triggers / triggered by</td></tr>
<tr><td><strong>Flow</strong></td><td>Dynamic</td><td>Dashed line, filled arrowhead</td><td>Something (information, goods, money) passes from one behaviour to another, with no causality implied</td><td>flows to / flows from</td></tr>
<tr><td><strong>Specialization</strong></td><td>Other</td><td>Solid line, hollow triangle at the general element</td><td>The source is a particular kind of the target, of the same element type</td><td>specializes / specialized by</td></tr>
<tr><td><strong>Junction</strong></td><td>Connector</td><td>Filled dot (and junction) or hollow circle (or junction)</td><td>Joins relationships of one type to say "all of these together" or "at least one of these"</td><td>no role name</td></tr>
</tbody></table></div>
<p>Three facts settle a surprising number of exam questions. Composition, aggregation and specialization are always allowed between two elements of the same type. Association is always allowed between any two elements, and between an element and a relationship. Everything else is governed by the relationship tables in Appendix B of the specification, which list every permitted pair.</p>
<p>Direction matters more than people expect. Most arrows in a well-drawn ArchiMate view point upwards, towards the business and the user: a service serves a process, an application realizes a business behaviour, a technology service serves an application. If you come from UML, your instinct for dependency arrows runs the other way, and that instinct is wrong here.</p>`,
		},
		{
			id: 'archimate-4',
			h2: 'ArchiMate 3.2 or ArchiMate 4: which version to learn now',
			html: `<p>The Open Group published the ArchiMate 4 Specification (document C260) on 27 April 2026, and its publication record lists it as superseding the ArchiMate 3.2 Specification (C226, published 19 October 2022). So 3.2 is no longer the newest version of the language.</p>
<p>The certification has not moved. On 10 November 2026 The Open Group's certification page still says that the current program is the ArchiMate 3 certification, covering the 3.2 release of the specification, and its exam fact sheets describe the ArchiMate 3 Part 1 and Part 2 exams. No ArchiMate 4 exam is announced on that page. If you are studying for a certificate, study 3.2.</p>
<p>ArchiMate 4 is a restructuring rather than a point release. The Open Group's own publication page lists the main changes:</p>
<ul>
<li>The three interaction elements are gone, as are constraint, contract, gap and representation.</li>
<li>Behaviour is merged across layers into one set of service, process, function and event; the implementation event becomes a generic event.</li>
<li>Business, application and technology collaboration merge into a single collaboration, and business role becomes a generic role.</li>
<li>"Layer" becomes "domain", the generic metamodel chapter becomes a common domain chapter, and path moves into it.</li>
<li>Relationships can carry multiplicity, and the framework is drawn as a layered hexagon rather than a grid.</li>
</ul>
<p>The Open Group's announcement stresses strong user-level compatibility and retention of the core concepts, so time spent learning 3.2 properly is not wasted.</p>
<div class="callout"><p><strong>My advice:</strong> learn 3.2 if you need the certificate this year or maintain a repository built in 3.2. Check the certification page before you book, though. Given how much the element set changes in ArchiMate 4, expect the exam content to change substantially when a new exam arrives.</p></div>`,
		},
		{
			id: 'framework',
			h2: 'The ArchiMate framework: layers and aspects',
			html: `<p>The ArchiMate Core Framework is a grid of nine cells: three layers (Business, Application, Technology) crossed with three aspects. The aspects borrow the grammar of a sentence. <strong>Active structure</strong> is the subject, the thing that does the work (an actor, an application component, a device). <strong>Behaviour</strong> is the verb (processes, functions, events, services). <strong>Passive structure</strong> is the object that behaviour works on (business objects, data objects, artifacts).</p>
<p>The Full Framework adds the rest of the language around that core:</p>
<div class="tbl"><table><thead><tr><th>Part</th><th>What it models</th><th>Where it sits</th></tr></thead><tbody>
<tr><td>Strategy</td><td>Strategic direction and choices: capabilities, resources, value streams, courses of action</td><td>A layer above Business</td></tr>
<tr><td>Business</td><td>Business services offered to customers, realized by processes performed by actors</td><td>Core layer</td></tr>
<tr><td>Application</td><td>Application services that support the business, and the applications that realize them</td><td>Core layer</td></tr>
<tr><td>Technology</td><td>Information and operational technology: processing, storage, networks, system software</td><td>Core layer</td></tr>
<tr><td>Physical</td><td>Equipment, facilities, distribution networks and materials</td><td>Inside the Technology Layer in 3.2, so physical elements count as core elements</td></tr>
<tr><td>Implementation and Migration</td><td>Programmes, projects, deliverables, plateaus and gaps</td><td>A layer below Technology</td></tr>
<tr><td>Motivation</td><td>Why: stakeholders, drivers, goals, outcomes, principles, requirements</td><td>An extra aspect beside the other three, relating to every layer</td></tr>
</tbody></table></div>
<p>Two refinements run through every core layer. First, <strong>internal versus external</strong>: an interface is the external face of active structure (a point of access), a service is the external face of behaviour (what is exposed), and processes, functions and interactions are the internal behaviour that realizes it. Second, the <strong>event</strong>, a behaviour element that marks a state change and may carry a time.</p>
<p>Some elements deliberately span aspects. These are composite elements: <strong>grouping</strong> and <strong>location</strong> at the generic level, plus <strong>product</strong> in the Business Layer and <strong>plateau</strong> in Implementation and Migration.</p>
<h3>Notation conventions worth knowing</h3>
<ul>
<li>Corner shape carries meaning: square corners for structure, rounded corners for behaviour, cut (diagonal) corners for motivation.</li>
<li>Colour carries none. Yellow for business, blue for application and green for technology is a convention used in the specification's examples, not a rule.</li>
<li>An optional letter in the top-left corner (M, S, B, A, T, P or I) marks Motivation, Strategy, Business, Application, Technology, Physical or Implementation and Migration elements.</li>
<li>There is no information layer. Information runs through the layers as business object (conceptual), data object (logical) and artifact (physical), joined by realization.</li>
<li>ArchiMate models types and exemplars, not instances. One "Insurance Policy" business object stands for every policy the company issues.</li>
</ul>`,
		},
		{
			id: 'elements',
			h2: 'Core elements in each ArchiMate layer',
			html: `<p>The same pattern repeats in every core layer, which is the single most useful thing to notice when learning the element set. Once you know the generic shape, each layer is a specialization of it.</p>
<div class="tbl"><table><thead><tr><th>Layer</th><th>Active structure</th><th>Behaviour</th><th>Passive structure</th></tr></thead><tbody>
<tr><td>Strategy</td><td>Resource (structure, neither active nor passive)</td><td>Capability, Value Stream, Course of Action</td><td>No separate element</td></tr>
<tr><td>Business</td><td>Business Actor, Business Role, Business Collaboration, Business Interface</td><td>Business Process, Business Function, Business Interaction, Business Event, Business Service</td><td>Business Object, Contract, Representation (Product is a composite)</td></tr>
<tr><td>Application</td><td>Application Component, Application Collaboration, Application Interface</td><td>Application Process, Application Function, Application Interaction, Application Event, Application Service</td><td>Data Object</td></tr>
<tr><td>Technology</td><td>Node, Device, System Software, Technology Collaboration, Technology Interface, Path, Communication Network</td><td>Technology Process, Technology Function, Technology Interaction, Technology Event, Technology Service</td><td>Artifact</td></tr>
<tr><td>Physical (part of Technology)</td><td>Equipment, Facility, Distribution Network</td><td>No separate elements; technology behaviour is used</td><td>Material</td></tr>
</tbody></table></div>
<p><strong>Motivation elements (10):</strong> Stakeholder, Driver, Assessment, Goal, Outcome, Principle, Requirement, Constraint, Meaning, Value.</p>
<p><strong>Implementation and Migration elements (5):</strong> Work Package, Deliverable, Implementation Event, Plateau, Gap.</p>
<p><strong>Generic composite elements (2):</strong> Grouping, Location.</p>
<h3>The pairs that cause most wrong answers</h3>
<ul>
<li><strong>Business Actor versus Business Role.</strong> The actor is who (a person, team or organisation). The role is the responsibility, which actors are assigned to. Assign behaviour to roles and the model survives a reorganisation.</li>
<li><strong>Process versus function.</strong> A process is a sequence that reaches a defined result; you can draw triggering arrows between its steps. A function groups behaviour by a criterion such as competence or resources, and has no inherent order.</li>
<li><strong>Interaction versus collaboration.</strong> An interaction is behaviour that needs two or more performers; a collaboration is the aggregate of active structure elements that performs it together.</li>
<li><strong>Service versus interface.</strong> The service is the behaviour you expose; the interface is where it is reached. "Online claims submission" is a service; the customer portal is an interface.</li>
<li><strong>Capability, function and value stream.</strong> A capability is what the enterprise is able to do, stated at strategy level and realized by core elements. A value stream is the sequence of stages that creates value for a stakeholder. A business function is how the organisation groups its own behaviour. A value stream and a business process may look alike, but they sit at different levels of abstraction.</li>
<li><strong>Goal, outcome, principle, requirement, constraint.</strong> A goal states intent or direction. An outcome is an end result actually achieved. A principle applies to any system in a context; a requirement applies to a specific system. A constraint limits the architecture, its implementation or its realization.</li>
<li><strong>Driver versus assessment.</strong> The driver is the condition that motivates change (regulation, customer churn); the assessment is the result of analysing it.</li>
<li><strong>Node, device and system software.</strong> A device is physical IT hardware; system software provides the environment software runs in; a node is a computational or physical resource that hosts others, and is often composed of a device and system software.</li>
</ul>`,
		},
		{
			id: 'relationship-rules',
			h2: 'ArchiMate relationship rules that decide most diagrams',
			html: `<p>ArchiMate relationships are deliberately overloaded: the same relationship means slightly different things depending on what it connects. The rules below are the ones that decide whether a diagram is valid and whether it says what you intended.</p>
<h3>Hard restrictions</h3>
<ul>
<li>Every relationship has exactly one source and one target.</li>
<li>No relationship may connect two relationships.</li>
<li>A relationship from an element to another relationship can only be an association, or an aggregation or composition from a composite element (for example a grouping or plateau holding a relationship). The classic case is associating a business object with a flow to say what is transferred.</li>
<li>A junction joins relationships of one type only, and a path through junctions is valid only if a direct relationship of that type would be valid. You cannot use a junction to smuggle in a relationship the tables forbid.</li>
</ul>
<h3>Direction conventions</h3>
<ul>
<li><strong>Assignment</strong> runs from active structure to behaviour (the component to the function it performs), from an actor to a role, and from a node to the artifact it stores or executes.</li>
<li><strong>Serving</strong> runs from provider to consumer. It deliberately abstracts from who initiates the exchange; use triggering if the initiative is what you want to show.</li>
<li><strong>Access</strong> is always modelled from the behaviour or active structure element to the passive one. The arrowhead shows read or write, not the direction of the relationship, which matters when you derive.</li>
<li><strong>Realization</strong> runs from the concrete to the abstract: process to service, data object to business object, artifact to application component, core element to requirement.</li>
</ul>
<h3>Choosing between near neighbours</h3>
<ul>
<li><strong>Realization or influence?</strong> Realization when the source is critical to the target existing or being achieved; influence when it contributes, positively or negatively, without being decisive. Influence can carry a sign and strength such as ++ or -.</li>
<li><strong>Triggering or flow?</strong> Triggering is about order and cause. Flow is about something moving between behaviours and says nothing about which happens first.</li>
<li><strong>Two triggers or an or junction?</strong> Two triggering lines out of one process mean both targets follow. To show a choice, route them through an or junction and label the branches.</li>
<li><strong>Nesting or lines?</strong> Structural relationships may be shown by nesting one element inside another. The model stays unambiguous, but the view does not when more than one structural relationship would be legal. In any view someone else will reuse, I draw the line.</li>
</ul>
<h3>Across the layers</h3>
<p>Business-IT alignment in ArchiMate rests on two relationships. <strong>Serving</strong> links them behaviourally and structurally: an application service serves business behaviour, an application interface serves a business role, a technology service serves application behaviour. <strong>Realization</strong> links them by implementation: an application process or function realizes a business process or function, a data object realizes a business object, and an artifact realizes a data object or an application component. Applications never realize business actors or roles, because technology cannot realize people; it can realize the behaviour they perform.</p>
<p>The other extensions follow the same logic. Core behaviour realizes capabilities and value streams, and structure realizes resources. Deliverables realize core elements and requirements; plateaus aggregate the parts of the architecture valid in their time span (in 3.2 they may also aggregate outcomes); a gap is associated with the two plateaus it compares; implementation events trigger, or are raised by, work packages. Note one deprecation that catches people out: <strong>work package realizes deliverable is deprecated in 3.2</strong>, and the specification recommends an access relationship instead.</p>`,
		},
		{
			id: 'derivation',
			h2: 'ArchiMate derivation rules, explained for practitioners',
			html: `<p>Derivation is ArchiMate's most distinctive feature and its least understood. It lets you replace a chain of relationships with one summary relationship, so a CIO-level view can show "this application serves this business process" without the functions and services in between. Derivation always goes from more detail to less. It never works backwards: a derived relationship tells you nothing about which intermediate elements produced it.</p>
<p>Appendix B of the specification distinguishes two kinds. <strong>Valid derivations</strong> (rules DR 1 to DR 8) are always true in a well-formed model. <strong>Potential derivations</strong> (rules PDR 1 to PDR 12) might be true and might not, and the modeller decides. Here is the valid set, paraphrased:</p>
<div class="tbl"><table><thead><tr><th>Rule</th><th>When two relationships meet like this</th><th>You can derive</th></tr></thead><tbody>
<tr><td>DR 1</td><td>Specialization followed by specialization</td><td>Specialization: it is transitive</td></tr>
<tr><td>DR 2</td><td>Two structural relationships in a chain</td><td>The weaker of the two. Strength order: realization (weakest), assignment, aggregation, composition (strongest)</td></tr>
<tr><td>DR 3</td><td>A structural relationship from a to b, then a dependency from b to c</td><td>The dependency, from a to c</td></tr>
<tr><td>DR 4</td><td>A structural relationship from a to b, and a dependency from c into b</td><td>The dependency, from c to a</td></tr>
<tr><td>DR 5</td><td>A structural relationship from a to b, then a dynamic relationship from b to c</td><td>The dynamic relationship, from a to c</td></tr>
<tr><td>DR 6</td><td>A structural relationship from a to b, and a flow from c into b</td><td>A flow from c to a</td></tr>
<tr><td>DR 7</td><td>A triggering from a to b, then a structural relationship from b to c</td><td>A triggering from a to c</td></tr>
<tr><td>DR 8</td><td>Triggering followed by triggering</td><td>Triggering: it is transitive</td></tr>
</tbody></table></div>
<p>Put informally: a chain of structural relationships collapses to its weakest link, and the ends of a dependency or flow can slide back along a chain of structural relationships.</p>
<h3>A worked example</h3>
<p>The "Billing Engine" application component is assigned to the "Calculate Charges" application function, which realizes the "Charge Calculation" application service, which serves the "Issue Invoice" business process. Assignment followed by realization collapses to realization, the weaker of the two (DR 2), so Billing Engine realizes Charge Calculation. Realization followed by serving gives serving (DR 3), so Billing Engine serves Issue Invoice. That last relationship is the one the process owner wants to see, and it is valid without the two elements in the middle.</p>
<h3>Potential derivations and the limits</h3>
<p>The potential rules cover cases that are often, but not always, true: pushing a relationship onto a specialized or generalized element, copying a dependency from a whole onto its parts, chaining two dependencies (where the result is the weaker, in the order association, influence, access, serving), combining dynamic and structural relationships, chaining flows, and inferring relationships through a grouping. Treat every one as a question to answer, not a fact.</p>
<p>Derivation also has boundaries. The rules do not carry relationships between core elements and the motivation, strategy or implementation and migration elements, except for realization and influence. In general the intermediate element has to sit in the same domain as one of the two ends. The relationship tables in Appendix B already apply all of this, which is why they are the final word on what is allowed.</p>`,
		},
		{
			id: 'viewpoints',
			h2: 'Views and viewpoints in ArchiMate 3.2',
			html: `<p>A <strong>view</strong> is what you show; a <strong>viewpoint</strong> is the position you show it from: the stakeholders and concerns it addresses, and the conventions for building it. ArchiMate's mechanism follows ISO/IEC 42010. Defining a viewpoint takes two steps: select the subset of elements and relationships that answers the stakeholder's concern, then choose a representation they understand. That can be a standard diagram, a catalogue, a matrix or something else entirely; a view does not have to be a picture.</p>
<p>The specification classifies viewpoints along two dimensions:</p>
<ul>
<li><strong>Purpose:</strong> designing (architects and designers, usually diagrams), deciding (managers, usually cross-references, landscape maps, lists and reports) and informing (anyone who needs to understand or commit, usually illustrations).</li>
<li><strong>Content:</strong> details (one layer and one aspect), coherence (several layers or several aspects) and overview (several layers and several aspects).</li>
</ul>
<p>Appendix C lists example viewpoints. Since ArchiMate 3 they sit in an informative appendix precisely so that nobody mistakes them for a mandatory or complete set.</p>
<div class="tbl"><table><thead><tr><th>Group</th><th>Example viewpoints</th></tr></thead><tbody>
<tr><td>Basic: composition</td><td>Organization, Application Structure, Information Structure, Technology, Layered, Physical</td></tr>
<tr><td>Basic: support</td><td>Product, Application Usage, Technology Usage</td></tr>
<tr><td>Basic: cooperation</td><td>Business Process Cooperation, Application Cooperation</td></tr>
<tr><td>Basic: realization</td><td>Service Realization, Implementation and Deployment</td></tr>
<tr><td>Motivation</td><td>Stakeholder, Goal Realization, Requirements Realization, Motivation</td></tr>
<tr><td>Strategy</td><td>Strategy, Capability Map, Value Stream, Outcome Realization, Resource Map</td></tr>
<tr><td>Implementation and Migration</td><td>Project, Migration, Implementation and Migration</td></tr>
</tbody></table></div>
<p>Grouping and junctions may be used in every viewpoint. Do not confuse a grouping with a view: a grouping is part of the model and says its contents belong together; a view is a selection from the model for a stakeholder.</p>
<p>In practice, the Layered viewpoint is overused. It is the one everyone draws first, and it rarely answers anyone's actual question. Start from the concern ("what breaks if we retire this server?") and the right viewpoint usually picks itself.</p>`,
		},
		{
			id: 'mistakes',
			h2: 'Common ArchiMate modelling mistakes',
			html: `<p>These are the errors I see most often in real repositories and in exam answers. Several of them pass a tool's validation, which is exactly why they survive.</p>
<div class="tbl"><table><thead><tr><th>Mistake</th><th>Why it is wrong</th><th>What to do instead</th></tr></thead><tbody>
<tr><td>Serving arrow pointing at the provider</td><td>Serving runs from provider to user; the UML dependency habit reverses it</td><td>Read it aloud: "the service serves the process"</td></tr>
<tr><td>Assigning an application component to a business process</td><td>Not permitted since ArchiMate 3; assignment means an active structure element performing behaviour</td><td>Let the component realize the business process (through its function), or let an application service serve it</td></tr>
<tr><td>An application realizing a business actor or role</td><td>Technology cannot realize people</td><td>Realize the behaviour the role performs, or serve the role through an application interface</td></tr>
<tr><td>Association everywhere</td><td>Always legal, so it never fails validation, and it says nothing</td><td>Use it in early sketches, then replace it with the specific relationship</td></tr>
<tr><td>Modelling a function as a process, or the reverse</td><td>A process has order and a result; a function is a stable grouping of behaviour</td><td>If the steps can be joined by triggering arrows, it is a process</td></tr>
<tr><td>Treating capabilities as the organisation chart</td><td>A capability says what the enterprise is able to do, not how it is organised to do it</td><td>Realize capabilities with processes, functions, applications and resources</td></tr>
<tr><td>Modelling instances</td><td>ArchiMate models types and exemplars, not individual records or executions</td><td>One "Invoice" business object, not one per invoice</td></tr>
<tr><td>Letting colour carry meaning</td><td>Colour has no formal semantics in ArchiMate</td><td>Rely on the element type; use the letter notation or attribute-based colouring with a legend</td></tr>
<tr><td>A junction mixing relationship types</td><td>A junction connects one type only and cannot legalise a forbidden relationship</td><td>Split it into separate junctions per type</td></tr>
<tr><td>Two triggers for a decision</td><td>Without an or junction, both targets follow</td><td>Route the branches through an or junction and label them</td></tr>
<tr><td>Reading detail out of a derived relationship</td><td>Derivation summarises; it cannot be reversed</td><td>Model the intermediate elements where the detail matters</td></tr>
<tr><td>Work package realizes deliverable</td><td>Deprecated in 3.2</td><td>Use an access relationship from the work package to the deliverable</td></tr>
</tbody></table></div>
<p>A last one that no validator catches: diagrams with no stated concern. If you cannot say in one sentence which stakeholder question a view answers, it is decoration, however correct the notation.</p>`,
		},
		{
			id: 'certification',
			h2: 'ArchiMate 3 Foundation and Practitioner certification',
			html: `<p>The ArchiMate 3 certification program has two levels, both defined for the ArchiMate 3.2 Specification. <strong>Foundation</strong> validates knowledge and comprehension of the notation, terminology, structure and basic concepts, and is achieved by passing the Part 1 exam. <strong>Practitioner</strong> validates that you can analyse and apply that knowledge, and is achieved by passing the Part 2 exam. The syllabus is The Open Group's ArchiMate 3 Conformance Requirements (Multi-Level), Version 3.2.</p>
<div class="tbl"><table><thead><tr><th></th><th>Part 1 (OGA-031)</th><th>Part 2 (OGA-032)</th></tr></thead><tbody>
<tr><td>Leads to</td><td>ArchiMate 3 Foundation, plus partial credit towards Practitioner</td><td>ArchiMate 3 Practitioner</td></tr>
<tr><td>Questions</td><td>40, simple multiple choice</td><td>8 complex, scenario-based questions</td></tr>
<tr><td>Scoring</td><td>1 point per correct answer</td><td>Gradient: 5 points for the best answer, 3 for the second best, 1 for the third, 0 for the distractor</td></tr>
<tr><td>Pass mark</td><td>60% (24 of 40)</td><td>65% (26 of 40 points)</td></tr>
<tr><td>Time</td><td>60 minutes</td><td>90 minutes</td></tr>
<tr><td>Open book</td><td>No</td><td>Yes: an electronic copy of the ArchiMate 3 Specification is built into the exam; no paper books</td></tr>
<tr><td>Prerequisite</td><td>None</td><td>ArchiMate 3 Foundation, or a pass in Part 1 on the same day at the same test centre</td></tr>
<tr><td>Delivery</td><td>Pearson VUE test centres, or online through OnVUE</td><td>Pearson VUE test centres, or online through OnVUE</td></tr>
</tbody></table></div>
<p>Both exams are supervised. Extra time may be given to candidates sitting the English exam whose first language is not English, and the provider's booking may show a longer slot than the exam time because it includes registration, a tutorial and a survey (typically about 15 extra minutes). Accredited training courses include the exam in the course fee by voucher; you can also pay the exam provider directly when booking.</p>
<p>The Practitioner fact sheet lists what a certified Practitioner can apply: the language structure including its advanced concepts, the generic metamodel, the relationships, the motivation, strategy, business, application and technology elements, cross-layer modelling, implementation and migration, the viewpoint mechanism and the language customization mechanisms. That is the whole specification, so do not skip the last two chapters.</p>
<p>You will also see an ArchiMate Essentials 3.2 credential on The Open Group's site. It is aimed at accredited trainers, not a third level of practitioner certification.</p>
<h3>How I would prepare</h3>
<ul>
<li><strong>Part 1 is recall under time pressure.</strong> Forty questions in sixty minutes leaves no time to reason from first principles. Element names, their layer and aspect, the notation and the meaning of each relationship need to be instant.</li>
<li><strong>Part 2 rewards judgement, not memory.</strong> All four answers will look plausible, and gradient scoring pays for choosing the best one while still giving partial credit for the second best. Read the scenario's stakeholder and concern first, then check each option's relationships against the rules.</li>
<li><strong>Learn to navigate the specification before exam day.</strong> It is built into the Part 2 exam, so knowing where the Appendix B relationship tables, the derivation rules and the Appendix C viewpoints sit is worth more than memorising them.</li>
<li><strong>Do not study from ArchiMate 4 material</strong> for these exams. Elements that ArchiMate 4 removed, such as contract, gap and the interactions, are still part of 3.2, and 3.2 is what the exams cover.</li>
</ul>`,
		},
	],
	faq: [
		[
			'What are the relationships in ArchiMate 3.2?',
			'Eleven relationships in four families, plus a connector. Structural: composition, aggregation, assignment, realization. Dependency: serving, access, influence, association. Dynamic: triggering, flow. Other: specialization. The junction (and or or) connects relationships of the same type.',
		],
		[
			'Is ArchiMate 3.2 still current now that ArchiMate 4 is out?',
			'The Open Group published ArchiMate 4 (C260) on 27 April 2026 and lists it as superseding the 3.2 specification. The certification program, however, still covers ArchiMate 3.2 according to The Open Group certification page checked on 10 November 2026, so exam candidates should study 3.2.',
		],
		[
			'How many questions are in the ArchiMate 3 Foundation exam, and what is the pass mark?',
			'The ArchiMate 3 Part 1 exam (OGA-031), which leads to Foundation, has 40 simple multiple-choice questions in 60 minutes. The pass mark is 60%, which is 24 correct answers. It is closed book.',
		],
		[
			'Is the ArchiMate Practitioner exam open book?',
			'Yes. The ArchiMate 3 Part 2 exam (OGA-032) has an electronic copy of the ArchiMate 3 Specification built in; paper books are not allowed. It has 8 scenario questions in 90 minutes with gradient scoring (5, 3, 1 or 0 points) and a 65% pass mark, 26 of 40 points.',
		],
		[
			'What is a derived relationship in ArchiMate?',
			'A relationship that summarises a chain of modelled relationships. For example, a component assigned to a function that realizes a service that serves a process can be shown as the component serving the process. Valid derivations are always true; potential ones need the modeller to confirm them.',
		],
		[
			'What is the difference between a view and a viewpoint?',
			'A viewpoint defines the stakeholders, concerns and conventions; a view is the actual selection of model content built according to it. Put simply, the viewpoint is where you look from and the view is what you see.',
		],
	],
	sources: [
		['ArchiMate Certification, The Open Group', 'https://www.opengroup.org/certifications/archimate'],
		['ArchiMate Examinations fact sheet (Part 1 and Part 2), The Open Group', 'https://certification.opengroup.org/docs/datasheets/archimate-exams.pdf'],
		['ArchiMate 3 Certification Program Summary, The Open Group', 'https://certification.opengroup.org/docs/datasheets/ArchiMate3_cert_summary.pdf'],
		['ArchiMate 3 Practitioner fact sheet, The Open Group', 'https://certification.opengroup.org/docs/datasheets/ArchiMate3_practitioner.pdf'],
		['ArchiMate 3 Conformance Requirements (Multi-Level), Version 3.2 (X238), publication record, The Open Group', 'https://publications.opengroup.org/x238'],
		['ArchiMate 3.2 Specification (C226), publication record, The Open Group', 'https://publications.opengroup.org/c226'],
		['ArchiMate 4 Specification (C260), publication record, The Open Group', 'https://publications.opengroup.org/standards/archimate/c260'],
		['The Open Group Announces ArchiMate 4 Specification, The Open Group', 'https://www.opengroup.org/The-Open-Group-Announces-ArchiMate%C2%AE-4-Specification'],
		['ArchiMate 3.2 Specification Reference Cards (N221), The Open Group', 'https://www.opengroup.org/sites/default/files/docs/downloads/n221p.pdf'],
		['ArchiMate 3.2 Specification, chapter 3: Language Structure (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Language-Structure.html'],
		['ArchiMate 3.2 Specification, chapter 4: Generic Metamodel (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Generic-Metamodel.html'],
		['ArchiMate 3.2 Specification, chapter 5: Relationships and Relationship Connectors (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Relationships-and-Relationship-Connectors.html'],
		['ArchiMate 3.2 Specification, chapter 7: Strategy Layer (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Strategy-Layer.html'],
		['ArchiMate 3.2 Specification, chapter 11: Relationships Between Core Layers (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Relationships-Between-Core-Layers.html'],
		['ArchiMate 3.2 Specification, chapter 12: Implementation and Migration Layer (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Implementation-and-Migration-Layer.html'],
		['ArchiMate 3.2 Specification, chapter 13: Stakeholders, Architecture Views, and Viewpoints (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Stakeholders-Architecture-Views-and-Viewpoints.html'],
		['ArchiMate 3.2 Specification, Appendix B: Relationships (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-relationships-Normative.html'],
		['ArchiMate 3.2 Specification, Appendix C: Example Viewpoints (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Example-Viewpoints.html'],
		['ArchiMate 3.2 Specification, Appendix E: Changes from Version 2.1 to Version 3.2 (Open Group sign-in required)', 'https://pubs.opengroup.org/architecture/archimate32-doc/ch-Changes-from-previous-versions.html'],
	],
	practice: {
		heading: 'Practise it, not just read it',
		body: `<p>Reading a cheat sheet is not the same as spotting a misdrawn assignment against the exam clock. <a href="/archimate/index.html">ArchiMate 3.2 Practice</a> drills the layers, elements and relationships until the notation is second nature, with an explanation behind every answer: what the element actually means, and what the distractor confuses it with. It concentrates on the relationship rules people actually get wrong, tracks your accuracy and pace per topic so revision goes where it is needed, and on Pro runs timed mock exams in exam format. The AI tutor runs on your iPhone through Apple Intelligence (iOS 26), so your questions never leave the device. There is a free daily practice allowance, and a <a href="/archimate/app/">web version</a> too.</p>`,
	},
};
