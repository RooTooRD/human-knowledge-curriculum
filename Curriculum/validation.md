# Curriculum Validation

Validation date: 2026-07-25

## Phase 1 structural result

| Check | Result |
|---|---:|
| Discipline folders | 39 |
| Knowledge units | 634 |
| Zero-prerequisite roots | 4 |
| Core units | 544 |
| Extension units | 90 |
| Beginner units | 156 |
| Intermediate units | 274 |
| Advanced units | 163 |
| Expert units | 41 |
| Malformed unit declarations | 0 |
| Duplicate IDs | 0 |
| Unresolved prerequisites | 0 |
| Cyclic units | 0 |
| Units in topological ordering | 634 |

The only roots are `FND-B01`, `FND-B02`, `FND-B03`, and `FND-B04`: ordinary
language, quantity, observation, and agency. Every other unit is reachable through
declared prerequisite edges.

## Validation method

A parser scanned every `Curriculum/*/roadmap.md` declaration, extracted IDs and
prerequisite edges, checked schema conformity and referential integrity, and ran
Kahn's topological-sort algorithm over the resulting directed graph.

## What this validation does not claim

- It does not prove that every lesson-level concept is present; lessons are Phase 2.
- It does not prove that the Core/Extension judgment is final.
- It does not validate hours, books, editions, URLs, outcomes, or assessments, which
  are not Phase 1 artifacts.
- It does not erase scholarly disagreement over disciplinary boundaries.

## Phase 2 acceptance tests

Every one of the 634 units must gain:

1. a complete module and lesson sequence;
2. measurable learning outcomes;
3. explicit lesson-level prerequisites;
4. a misconception list;
5. at least one mastery check;
6. backward links to all prerequisite units.

## Phase 2 result

| Check | Result |
|---|---:|
| Discipline syllabi | 39 |
| Graph units expected | 634 |
| Syllabus unit records found | 634 |
| Missing syllabus records | 0 |
| Unknown syllabus IDs | 0 |
| Duplicate syllabus records | 0 |
| Prerequisite mismatches | 0 |
| Records missing required fields | 0 |
| Broken relative Markdown links | 0 |

Every unit record contains:

- its exact Phase 1 prerequisites;
- an ordered sequence of lessons and named subtopics;
- observable learning outcomes;
- at least one content-specific misconception;
- binary mastery checks.

Phase 2 therefore passes its acceptance tests at knowledge-unit granularity. The
syllabi are specifications for later content production: named resources, estimated
hours, projects, full exam instruments, and glossary definitions remain Phases 3–5.

## Phase 2 validation method

The validator parsed both supported syllabus forms:

1. heading records following [syllabus-schema.md](syllabus-schema.md);
2. six-column syllabus table records.

It then compared the record set with all `roadmap.md` graph IDs, checked uniqueness,
compared ordered prerequisite lists exactly, required all five syllabus fields, and
resolved every relative Markdown link.

## Phase 3 result

| Check | Result |
|---|---:|
| Discipline resource files | 39 |
| Discipline glossary files | 39 |
| Graph units expected | 634 |
| Unit resource mappings found | 634 |
| Unit glossary mappings found | 634 |
| Reusable resource bundles | 78 |
| Required categories per bundle | 10 |
| Shared living-resource records | 30 |
| Missing, unknown, or duplicate unit mappings | 0 |
| Unresolved resource or bundle IDs | 0 |
| Catalog rows missing edition/year metadata | 0 |
| Glossary units with fewer than two terms | 0 |
| Broken relative Markdown links | 0 |

Every unit now resolves to a textbook, beginner book, advanced book, lecture-note
source, video course, university-course source, free resource, exercise source,
professional reference, and encyclopedia through a declared bundle. Each matrix row
also names the lesson focus that must be located inside those sources.

Every unit has two curriculum-scoped working definitions. These definitions establish
the intended scope and mastery use of terms; specialist and contested definitions
remain the responsibility of the listed advanced reference.

## Phase 3 validation method

The validator:

1. parsed all Phase 1 graph IDs;
2. compared them with each resource matrix and glossary table;
3. required exact one-to-one unit parity;
4. resolved each bundle and all ten category selections against the local and shared
   catalogs;
5. required edition or verification-year metadata on catalog records;
6. required at least two definitions per glossary unit;
7. resolved all relative Markdown links.

External sites can reject automated clients or change without notice. Their links were
checked during production where access allowed; the dated annual-review rule remains
part of Phase 3 rather than being treated as a permanent guarantee.

## Phase 4 result

| Check | Result |
|---|---:|
| Discipline project files | 39 |
| Discipline assessment files | 39 |
| Small project specifications | 39 |
| Medium project specifications | 39 |
| Large project specifications | 39 |
| Capstone specifications | 39 |
| Total project specifications | 156 |
| Graph units expected | 634 |
| Unit project-contribution mappings | 634 |
| Unit assessment mappings | 634 |
| Distinct assessment modes | 16 |
| Syllabus outcomes absent from summative tasks | 0 |
| Projects missing required fields | 0 |
| Assessment rows missing required fields | 0 |
| Missing, unknown, or duplicate unit mappings | 0 |
| Broken relative Markdown links | 0 |

Every project declares scale, prerequisites, purpose, authentic brief, deliverables,
milestones, constraints, process evidence, rubric, safety/ethics review, and extension.
Every unit maps exactly once to a required project contribution.

Every assessment declares formative work, a summative unfamiliar-case task, modes,
conditions, pass evidence, and a corrective reassessment path. The summative text
reproduces every observable outcome from the corresponding syllabus record.

## Phase 4 validation method

The validator:

1. parsed the 634 Phase 1 graph IDs and corresponding Phase 2 outcomes;
2. required `.S`, `.M`, `.L`, and `.C` project records for every discipline;
3. required all project fields and exact one-to-one contribution-matrix coverage;
4. required exact one-to-one assessment-matrix coverage and all seven fields;
5. checked every semicolon-separated syllabus outcome against its summative task;
6. confirmed curriculum-wide presence of written exams, oral exams, essays, projects,
   proofs, presentations, programming assignments, and research;
7. resolved all relative Markdown links.

This validation establishes specification coverage and internal consistency. Actual
validity and reliability must also be reviewed from learner work: item difficulty,
inter-rater agreement, accessibility, unintended construct variance, and the quality
of transfer evidence are empirical Phase 6 concerns.

## Phase 5 result

| Check | Result |
|---|---:|
| Discipline schedule files | 39 |
| Graph units expected | 634 |
| Unit time-budget rows | 634 |
| Core units | 544 |
| Extension units | 90 |
| Core hours | 14,460 |
| Extension hours | 6,394 |
| Full curriculum hours | 20,854 |
| Ten-year route unit coverage | 544/544 Core |
| Fifteen-year route unit coverage | 544/544 Core |
| Twenty-year route unit coverage | 634/634 |
| Specializations | 12 |
| Extension units assigned to exactly one specialization | 90/90 |
| Component-sum or discipline/global-total mismatches | 0 |
| Route prerequisite-order violations | 0 |
| Route annual-capacity violations | 0 |
| Missing, unknown, or duplicate schedule units | 0 |
| Broken relative Markdown links | 0 |

Every unit has distinct reading, exercise, project, review, and mastery hours. The
discipline summaries, global totals, annual route tables, and specialization totals
reconcile to those same rows.

## Phase 5 validation method

The validator:

1. parsed every Phase 1 unit, difficulty, status, and prerequisite;
2. compared each discipline schedule with the declared difficulty-based hour model;
3. recomputed component, discipline, Core, Extension, and global totals;
4. parsed every yearly unit list in the 10-, 15-, and 20-year routes;
5. checked exact route coverage, uniqueness, prerequisite order, and annual capacity;
6. required twelve specialization records, Core gateways, Extension-only requirements,
   correct added hours, and exact one-to-one Extension coverage;
7. checked the complete review sequence and all relative Markdown links.

The hour estimates remain hypotheses until real learners log time. Phase 6 should
compare planned and observed time by unit, revise difficulty multipliers, and publish
the sample size and uncertainty rather than presenting point estimates as universal.

## Phase 6 result

| Check | Result |
|---|---:|
| Public discipline portals | 39 |
| Required subject sections per portal | 12 |
| Discipline connection views | 39 |
| Connections per discipline | 38 |
| Directed discipline views | 1,482 |
| Canonical unordered discipline pairs | 741 |
| Graph units retained | 634 |
| Markdown files audited | 374 |
| Local links and fragments checked | 6,178 |
| Broken local links or fragments | 0 |
| Portal, pair, reciprocal-view, entry-unit, or graph-edge failures | 0 |
| Heading, table, image-alternative, or Mermaid-prose failures | 0 |
| Cross-artifact unit-parity failures | 0 |

Every discipline portal exposes why the subject matters, outcomes, graph, syllabus,
prerequisites, hours, mastery checks, resources, projects, assessment, misconceptions,
and connections. Detailed records remain canonical in their dedicated files.

The connection atlas contains `39 × 38 ÷ 2 = 741` canonical pair records. Each record
states a reciprocal relationship, valid entry units from both disciplines, an
integration prompt, and either the exact direct prerequisite edges or an explicit
integrative-only label. The 39 subject views resolve to those records rather than
duplicating their explanations.

## Phase 6 validation method

The validator:

1. parsed all 634 Phase 1 units, ownership, and prerequisite edges;
2. required the twelve portal headings in order for all 39 disciplines;
3. checked exact 38-discipline coverage in every subject connection view;
4. reconstructed all 741 unordered discipline pairs from graph ownership;
5. compared every atlas direct-edge claim with the actual prerequisite graph;
6. required valid entry units from both disciplines and reciprocal canonical IDs;
7. rechecked exact unit-row parity across syllabus, resources, glossary, projects,
   assessment, and schedule, supporting both established Phase 2 syllabus formats;
8. resolved local Markdown paths and fragments;
9. checked one level-one heading, unskipped heading hierarchy, consistent Markdown
   table columns, image alternatives, and prose equivalents for Mermaid diagrams.

This is a source-level structural audit. It does not establish accessibility of every
renderer, scholarly consensus, resource availability in every country, assessment
validity, learning effectiveness, or accurate universal hours. The
[editorial policy](editorial-policy.md), [publication checklist](publication-checklist.md),
and [evaluation protocol](evaluation-protocol.md) define the human and empirical work
required for those claims.
