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
