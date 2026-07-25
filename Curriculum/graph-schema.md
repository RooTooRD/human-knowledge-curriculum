# Knowledge Graph Schema

## Unit syntax

Every knowledge unit uses:

```text
ID — Name [Difficulty; Status] ← prerequisite IDs or none
```

Example:

```text
MAT-B03 — Fractions and ratios [Beginner; Core] ← FND-B02, MAT-B02
```

The ID is permanent:

| Segment | Meaning |
|---|---|
| `MAT` | discipline code |
| `B`, `I`, `A`, `E` | Beginner, Intermediate, Advanced, Expert |
| `03` | stable ordinal within that discipline and level |

Renaming a unit does not change its ID. Splitting or merging units requires new IDs and
a migration note in this file.

Difficulty is **local to the discipline**, whereas global progression is represented by
the prerequisite graph and the layers in [global-graph.md](global-graph.md). Thus a
beginner unit in AI may reasonably require intermediate general information literacy:
it is the learner's entry point to AI, not a claim that it belongs at the curriculum's
absolute beginning.

## Edge semantics

`X ← Y` means that a learner should demonstrate the eventual mastery criteria for `Y`
before beginning `X`. It does not mean merely “related to.” Connections without a
prerequisite relationship belong in the later connections phase.

Each unit must satisfy all of these invariants:

1. its ID is globally unique;
2. its difficulty and status are present;
3. every prerequisite exists;
4. every prerequisite precedes it in a topological ordering;
5. it is reachable from at least one zero-prerequisite root;
6. no unit depends on itself, directly or transitively.

## Granularity

A Phase 1 unit is a coherent body of concepts that can later expand into one or more
modules. It is not necessarily a course. This follows the useful distinction between
knowledge areas, knowledge units, topics, and outcomes used in the
[ACM/IEEE-CS/AAAI CS2023 knowledge model](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm).

Phase 2 will expand each unit as:

```text
knowledge unit
  module
    lesson
      concept
      measurable learning outcome
```

## Core-selection test

A unit is `Core` only when omitting it would materially impair at least one of:

- autonomous learning and clear communication;
- quantitative, scientific, historical, or moral reasoning;
- understanding nature, persons, institutions, technology, or civilization;
- competent citizenship and personal agency;
- evaluating consequential claims in the modern world.

An `Extension` unit provides specialist depth, research orientation, or a powerful but
nonessential abstraction. Extension does not mean unimportant.

## Handling reciprocal influence

Real disciplines influence one another in both directions, but prerequisites cannot be
reciprocal. The graph therefore distinguishes:

- **learning dependency**, represented by `←`;
- **intellectual connection**, documented later without directing the graph;
- **spiral review**, which revisits an earlier node after later insight without making
  the earlier node depend on the later one.

## Change log

| Date | Change |
|---|---|
| 2026-07-25 | Schema established for Phase 1 |
