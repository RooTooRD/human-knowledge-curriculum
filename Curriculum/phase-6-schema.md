# Phase 6 Editorial and Publication Schema

Phase 6 joins the graph, syllabus, resources, projects, assessments, and schedules into
one public reference. Stable unit IDs remain authoritative; editorial integration may
add navigation and explanation but may not silently change prerequisites or outcomes.

## Publication layers

| Layer | Canonical artifact | Publication responsibility |
|---|---|---|
| Repository orientation | [`../README.md`](../README.md) | purpose, audience, scope, entry routes, limitations |
| Learner operation | [`learner-guide.md`](learner-guide.md) | diagnostics, study loop, route choice, records, adaptation |
| Discipline portal | `<discipline>/README.md` | expose all twelve required subject sections |
| Cross-disciplinary integration | [`connection-atlas.md`](connection-atlas.md) | one canonical record for every discipline pair |
| Editorial governance | [`editorial-policy.md`](editorial-policy.md) | claims, sources, accessibility, disagreement, maintenance |
| Empirical revision | [`evaluation-protocol.md`](evaluation-protocol.md) | observed hours, assessment quality, retention, transfer |
| Release control | [`publication-checklist.md`](publication-checklist.md) | human and mechanical publication gates |

## Discipline portal contract

Every discipline portal contains these level-two headings in this order:

1. `Why this subject matters`
2. `Learning outcomes`
3. `Knowledge graph`
4. `Complete syllabus`
5. `Prerequisites`
6. `Estimated hours`
7. `Mastery checklist`
8. `Resources`
9. `Projects`
10. `Assessment`
11. `Common misconceptions`
12. `Connections`

Detailed unit records stay in their canonical files. A portal must link to the exact
record rather than reproduce a second editable copy.

## Canonical connection record

For 39 disciplines there are `39 × 38 ÷ 2 = 741` unordered pairs. Each pair owns one
stable ID of the form `CONN-<PREFIX>-<PREFIX>` and contains:

| Field | Requirement |
|---|---|
| Disciplines | two distinct, known disciplines |
| Relationship | reciprocal account of what each contributes |
| Entry units | at least one valid unit ID from each discipline |
| Integration prompt | a question or artifact that needs both disciplines |
| Graph relation | exact direct prerequisite edges, or an explicit statement that none exists |

Each discipline `connections.md` is a view over these records. It must contain all 38
other disciplines exactly once and link to the canonical atlas heading.

## Claim and evidence labels

| Claim class | Minimum warrant |
|---|---|
| Structural | validator output or direct inspection of repository records |
| Bibliographic | publisher, author, institution, DOI record, or authoritative catalog |
| Empirical descriptive | cited data with population, measurement, date, and uncertainty |
| Empirical causal | design capable of supporting the causal claim and stated limitations |
| Interpretive | cited primary evidence, method, context, and plausible alternatives |
| Normative | explicit premises, affected interests, counterarguments, and conclusion |
| Legal or policy | jurisdiction, date, authority, and warning when professional advice is required |
| Medical or safety | current authoritative guidance, scope limits, and escalation conditions |
| Theological | tradition, school, source type, interpretive method, and internal disagreement |
| Planning estimate | assumptions, components, uncertainty, and revision rule |

## Accessibility baseline

The source corpus targets portable, semantic Markdown:

- one descriptive level-one heading per file;
- no skipped heading levels;
- descriptive links that remain intelligible out of context;
- tables only for genuinely tabular relationships;
- a prose equivalent for Mermaid diagrams;
- non-empty alternative text for images;
- no meaning conveyed by color alone;
- expanded abbreviations and defined specialist terms;
- captions or transcripts for any future audio or video made by the project.

These rules support accessible rendering. Conformance of a published website must be
tested in that rendering environment against
[WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Versioning rules

- Unit IDs are permanent after public release.
- A renamed unit preserves its ID and records the rename.
- A split creates new IDs and a migration note; the old ID is deprecated, not reused.
- Prerequisite, outcome, resource, assessment, or hour changes require a dated record.
- Living resources are reviewed annually; law, health, AI, security, climate, finance,
  and software references receive priority.
- Generated files are changed through their builder, then rebuilt and validated.
