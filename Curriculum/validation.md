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
