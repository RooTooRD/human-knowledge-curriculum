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

## 2026-07-25 — Phase 4 production plan

Phase 4 turns every observable outcome into evidence of mastery. It adds projects and
assessment instruments without changing graph IDs, prerequisites, or syllabus outcomes.

### Project normalization

Each discipline receives `projects.md` with four required scales:

1. **Small:** 2–8 hours; one bounded artifact and immediate feedback.
2. **Medium:** 15–40 hours; several connected units and at least one revision cycle.
3. **Large:** 60–150 hours; advanced integration, external constraints, and a public or
   inspectable artifact.
4. **Capstone:** 150–400 hours; independent question or design, proposal, milestone
   reviews, final artifact, oral defense, and reflective audit.

Every project specifies purpose, prerequisites, brief, deliverables, milestones,
constraints, evidence, rubric, safety/ethics checks, and extension options. Every graph
unit has a declared primary contribution to one project scale; capstones synthesize the
whole discipline.

### Assessment normalization

Each discipline receives `assessment.md`. Every graph unit receives exactly one
assessment specification containing:

1. a low-stakes formative check;
2. a summative performance task aligned to its observable outcomes;
3. assessment modes and permitted resources;
4. concrete evidence required for a pass;
5. a reassessment rule based on correcting the failed component.

Across the curriculum, modes include written exams, oral examinations, essays,
projects, proofs, presentations, programming assignments, laboratory or field
performance, and research. Selection follows the outcome: recall is not accepted as
evidence for an outcome requiring proof, design, evaluation, creation, or performance.

### Quality rules

- Assessments are criterion-referenced rather than curved.
- A global analytic rubric separates accuracy, method/evidence, artifact quality, and
  communication/reflection.
- A total score cannot compensate for a failed safety, ethics, validity, or provenance
  requirement.
- Formative work provides feedback before the summative attempt.
- Reassessment requires new evidence and an error analysis, not simple resubmission.
- Accommodations may change access conditions but not the target construct.
- Oral defense and process evidence are used where authorship or AI assistance must be
  verified.

### Phase 4 acceptance tests

- 39 project files and 39 assessment files exist.
- Every discipline has small, medium, large, and capstone specifications.
- All 634 graph IDs occur exactly once in a project contribution matrix.
- All 634 graph IDs occur exactly once in an assessment matrix.
- Every assessment declares formative work, summative evidence, mode, conditions,
  pass evidence, and reassessment.
- Every project has deliverables, milestones, rubric, and safety/ethics review.
- Every syllabus outcome is represented in its unit's summative task.
- Relative links resolve.

### Phase 4 completion record

Completed 2026-07-25.

- Added 39 `projects.md` files with small, medium, large, and capstone records.
- Added 156 discipline-specific project briefs with artifacts, milestones, rubrics,
  constraints, safety/ethics checks, and extension paths.
- Mapped all 634 graph units exactly once to a primary project contribution.
- Added 39 `assessment.md` files and 634 unit-level formative/summative specifications.
- Reproduced every syllabus outcome in the corresponding summative evidence task.
- Added 16 assessment modes, retention checks, corrective reassessment, process
  evidence, assistance disclosure, oral authorship checks, and accessibility rules.
- Validation result: zero project-field, unit-parity, outcome-alignment,
  assessment-field, mode-coverage, or relative-link failures.

## 2026-07-25 — Phase 5 production plan

Phase 5 converts the dependency graph and mastery specifications into feasible lifelong
calendars. Time estimates are planning priors, not promises: diagnostic performance,
language background, disability, access to supervision, and chosen project scope may
change actual time substantially.

### Unit time-budget model

Every graph unit receives five non-overlapping hour estimates:

1. **Reading/instruction:** first exposure, lectures, demonstrations, and source study.
2. **Exercises/practice:** problems, retrieval, drills, analysis, and deliberate practice.
3. **Projects/application:** the unit's allocated contribution to Phase 4 artifacts.
4. **Review:** spaced retrieval and cumulative maintenance after initial mastery.
5. **Mastery assessment:** summative attempt, feedback analysis, and one planned
   reassessment allowance.

Default planning budgets are:

| Difficulty | Reading | Exercises | Projects | Review | Mastery | Total |
|---|---:|---:|---:|---:|---:|---:|
| Beginner | 3 | 4 | 3 | 2 | 1 | 13 |
| Intermediate | 5 | 7 | 6 | 3 | 3 | 24 |
| Advanced | 9 | 12 | 18 | 6 | 5 | 50 |
| Expert | 14 | 18 | 50 | 9 | 9 | 100 |

Project allocations are amortized contributions to shared discipline projects. A
learner completing an especially ambitious capstone must replace the default with the
project's actual logged hours.

### Review protocol

The default retrieval checkpoints after initial mastery are:

`1 day → 7 days → 30 days → 90 days → 180 days → 365 days → annually`

This sequence is a practical adaptive heuristic, not a claim of universally optimal
intervals. A successful effortful retrieval keeps or lengthens the interval; a failed
retrieval triggers correction and a shorter parallel check. Every year includes a
cumulative audit and four buffer weeks.

### Global routes

- **10-year intensive Core:** 31 hours/week, 48 weeks/year.
- **15-year balanced Core plus one specialization:** 23 hours/week, 48 weeks/year;
  2,100 hours of capacity are reserved across the route for the selected Extension.
- **20-year full polymath:** 23 hours/week, 48 weeks/year.

All routes use the same prerequisite-safe topological order. The 15-year route reserves
hours alongside the Core for one declared Extension specialization. The 20-year route
includes every Extension unit; completing every discipline capstone at maximum scope
would require additional time beyond the default.

### Phase 5 acceptance tests

- 39 discipline `schedule.md` files exist.
- All 634 graph IDs occur exactly once in the unit time-budget tables.
- Every row has reading, exercises, projects, review, mastery, and total hours.
- Component sums and discipline/global totals reconcile exactly.
- Core and Extension totals are reported separately.
- 10-, 15-, and 20-year routes declare weekly load, annual weeks, capacity, and slack.
- Route unit order never precedes a prerequisite.
- Every Core unit appears in all three routes; every Extension unit appears in the
  20-year route and at least one specialization.
- Review intervals, failure adaptation, annual audit, leave, and buffer time are explicit.
- Specialization gateways and capstones list exact unit IDs.
- Relative links resolve.

### Phase 5 completion record

Completed 2026-07-25.

- Added 39 discipline `schedule.md` files and 634 exact unit time budgets.
- Separated reading, exercises, projects, spaced review, and mastery assessment.
- Reconciled 14,460 Core hours, 6,394 Extension hours, and 20,854 full hours.
- Added dependency-safe 10-year Core, 15-year Core-plus-specialization, and 20-year
  full-polymath routes with exact yearly unit lists and capacity accounting.
- Added twelve specialization paths assigning all 90 Extension units exactly once.
- Added adaptive retrieval checkpoints from one day through annual maintenance,
  failure correction, consolidation weeks, annual audit, leave, and overload rules.
- Validation result: zero time-component, total, coverage, duplication, prerequisite,
  annual-capacity, specialization, review-sequence, or relative-link failures.
