# Contributing

Contributions should make the curriculum more accurate, navigable, accessible, or
empirically grounded without breaking its dependency architecture.

## Before editing

1. Read the [editorial policy](Curriculum/editorial-policy.md) and
   [Phase 6 schema](Curriculum/phase-6-schema.md).
2. Locate the canonical unit ID and every artifact that joins on it.
3. Verify factual and bibliographic claims against primary or authoritative sources.
4. Inspect the relevant builder before changing a generated file.

## Propose a change

Describe:

- the problem and affected learner;
- exact files and stable IDs;
- evidence or source;
- effect on prerequisites, outcomes, assessment, time, accessibility, and safety;
- migration needs;
- how the change will be validated.

Do not reuse or renumber a public unit ID. A split or merger needs a migration note and
an appended plan record.

## Generated artifacts

Phase 3–6 builders own repeated resource, project, assessment, schedule, portal, and
connection structures. Change the corresponding builder, regenerate the files, inspect
the resulting diff, and run the complete validation suite.

## Style

- Use semantic Markdown with one `#` title and descriptive headings.
- Use relative links inside the repository.
- Use tables for exact mappings, not visual layout.
- Give every diagram a prose equivalent.
- Define abbreviations and contested terms.
- Prefer concise language, but do not erase qualifications necessary for accuracy.

## Validation

Run the commands in the
[publication checklist](Curriculum/publication-checklist.md#release-commands). A clean
validator result establishes structural consistency only; request appropriate human
review for content, accessibility, cultural interpretation, and safety.
