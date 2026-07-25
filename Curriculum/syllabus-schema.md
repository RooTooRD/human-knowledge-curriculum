# Syllabus Record Schema

Each `syllabus.md` expands the stable units in its companion `roadmap.md`.

```markdown
## DOMAIN-LEVEL-NUMBER — Unit name

**Prerequisites:** `ID`, `ID`

### Lessons

1. Lesson title — concepts and subtopics.
2. Lesson title — concepts and subtopics.

### Learning outcomes

- Observable performance.
- Observable performance.

### Common misconceptions

- Specific mistaken model and its correction.

### Mastery

- [ ] Binary performance check.
- [ ] Binary performance check.
```

## Rules

- A lesson list is ordered; later lessons may depend on earlier lessons in the record.
- “Understand,” “know,” and “appreciate” are not sufficient outcome verbs by themselves.
- A mastery item tests performance, not confidence or time spent.
- Unit prerequisites must exactly match the Phase 1 graph.
- Beginner records remain explicit enough for a learner starting from the declared
  foundations.
- Expert records orient the learner to research questions and independent production;
  they do not claim that reading the record confers expertise.
- Misconceptions identify plausible errors, not generic warnings to “study carefully.”

For large discipline files, the five subsections may be written as five bold,
single-paragraph fields under the unit heading. The required information and ordering
do not change.

A discipline may instead use a syllabus table with one row per unit and columns for
prerequisites, ordered lessons, outcomes, misconceptions, and mastery. A table row is a
complete record; semicolon-separated lesson numbers preserve sequence.
