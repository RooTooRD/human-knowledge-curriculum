# Curriculum Production Plan

> This file is append-only. New planning revisions must be added under a new dated heading.

## 2026-07-25 — Six-phase plan

The curriculum is produced in six phases so that content is not written before its
dependencies and scope are stable.

| Phase | Deliverable | Exit criterion |
|---:|---|---|
| 1 | Knowledge graph | Every knowledge unit has a stable ID, level, status, and prerequisite path; the graph is acyclic |
| 2 | Complete syllabi and learning outcomes | Every graph node expands into lessons and measurable outcomes |
| 3 | Resources and glossaries | Every graph node has current, edition-specific learning and reference resources |
| 4 | Projects and assessments | Every outcome is tested by exercises, projects, exams, or performance tasks |
| 5 | Schedules and lifelong pathways | Hours, review intervals, 10-, 15-, and 20-year routes, and specialization choices are complete |
| 6 | Editorial integration and publication | Links, coverage, consistency, accessibility, citations, and public-facing presentation pass review |

### Phase 1 scope

- Establish the zero-prerequisite entry point.
- Establish the global dependency layers.
- Define discipline boundaries that minimize duplicated teaching.
- Create stable IDs for all knowledge units.
- Mark each unit `Core` or `Extension`.
- Mark each unit `Beginner`, `Intermediate`, `Advanced`, or `Expert`.
- Record local and cross-disciplinary prerequisites.
- Validate that every prerequisite resolves and the graph contains no cycles.

### Phase 1 non-goals

The knowledge graph names coherent knowledge units, not every lesson. Exact lesson
sequences, learning outcomes, hours, resources, projects, assessments, misconceptions,
and full connection essays belong to Phases 2–5.

## 2026-07-25 — Phase 2 production plan

Phase 2 expands every Phase 1 knowledge unit without changing its stable ID.

### Required syllabus record

Every unit receives exactly one record in its discipline's `syllabus.md`:

1. explicit prerequisite IDs;
2. a sequenced list of lessons and subtopics;
3. observable learning outcomes using verbs such as solve, derive, compare, construct,
   interpret, evaluate, or defend;
4. common misconceptions specific to the content;
5. binary mastery checks.

### Phase 2 sequence

1. Foundations, learning, logic, writing, communication, mathematics, statistics,
   research, computer science, security, AI, and systems science.
2. Physics, astronomy, chemistry, Earth/climate/energy, biology, health, engineering,
   and geography.
3. Economics, finance, business, politics, law, psychology, cognitive science,
   sociology/anthropology, and life skills.
4. History, philosophy, comparative religion, Islamic Studies, linguistics,
   literature, art, music, architecture/design, and education.
5. Mechanical parity, prerequisite, outcome, misconception, checklist, and link checks.

### Phase 2 boundary

Hours, schedules, named resources and editions, projects, exam instruments, and
glossary definitions remain later-phase deliverables. Phase 2 defines what is learned
and what mastery means; it does not yet prescribe the resource or calendar.

## 2026-07-25 — Phase 3 production plan

Phase 3 attaches verified learning resources and terminology to every Phase 1 unit.

### Resource normalization

Each discipline receives `resources.md` with:

1. a catalog containing full title, author or institution, edition, year, format, and
   canonical link;
2. a unit matrix mapping every graph ID to ten required selections:
   textbook, beginner book, advanced book, lecture notes, video course, university
   course, free resource, exercises, reference, and encyclopedia;
3. a dated verification note for editions and links.

Catalog IDs prevent repeated bibliographic text from drifting between hundreds of unit
rows. Every matrix ID must resolve to a catalog entry in the same file or the global
catalog.

### Glossary normalization

Each discipline receives `glossary.md`. Every graph unit must own at least two defined
terms. Definitions must be:

- intelligible at the unit's declared level;
- technically accurate within the discipline;
- cross-referenced when another discipline owns the canonical meaning;
- explicit when a term has contested or tradition-specific uses.

### Phase 3 acceptance tests

- 39 resource files and 39 glossary files exist.
- All 634 graph IDs occur exactly once in each corresponding resource matrix.
- Every unit has all ten resource categories.
- Every resource ID resolves to complete bibliographic metadata.
- Every unit has at least two glossary definitions.
- Relative links resolve.
- Edition-sensitive metadata includes a year and a verification date.

### Phase 3 completion record

Completed 2026-07-25.

- Added a shared catalog of 30 living cross-disciplinary resources.
- Added 39 discipline catalogs with normalized beginner, core, advanced, reference,
  lecture, video, university, free, exercise, and encyclopedia selections.
- Mapped all 634 graph units exactly once to a ten-category bundle and required focus.
- Added 39 glossaries with two curriculum-scoped definitions for every graph unit.
- Added deterministic build and validation scripts.
- Validation result: 634 resource mappings, 634 glossary mappings, 78 bundles, and
  zero parity, resolution, metadata, glossary-count, or relative-link failures.
