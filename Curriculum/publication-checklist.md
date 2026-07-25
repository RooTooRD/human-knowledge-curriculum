# Publication Checklist

Use this checklist for every public release. Mechanical checks support but do not replace
disciplinary, cultural, accessibility, safety, and learner review.

## Structure and coverage

- [ ] All stable IDs resolve and the prerequisite graph is acyclic.
- [ ] Every unit appears exactly once in each required unit-level artifact.
- [ ] Every discipline portal exposes all twelve required subject sections.
- [ ] Every discipline has exactly 38 connection views.
- [ ] All 741 canonical discipline pairs exist once.
- [ ] Core and Extension labels, difficulty labels, hours, and route totals reconcile.
- [ ] Required-coverage claims point to valid canonical units.

## Content and alignment

- [ ] Lessons have no unexplained prerequisite jump.
- [ ] Outcomes are observable and assessments elicit the same operation.
- [ ] Mastery checks are binary and specific.
- [ ] Projects declare prerequisites, deliverables, constraints, evidence, rubric, and
      safety or ethics review.
- [ ] Common misconceptions are content-specific rather than generic warnings.
- [ ] Cross-disciplinary claims preserve each field's standard of evidence.

## Sources and citations

- [ ] Bibliographic metadata matches an authoritative source.
- [ ] Edition-sensitive and living resources have a verification date.
- [ ] Adjacent citations support the actual claim.
- [ ] Quotations, translations, images, and data have lawful attribution.
- [ ] Fast-changing law, health, AI, security, climate, finance, standards, and software
      sources received priority review.
- [ ] Serious scholarly or tradition-internal disagreement is represented fairly.

## Accessibility

- [ ] Each file has one descriptive level-one heading and no skipped heading level.
- [ ] Link text describes its destination or purpose.
- [ ] Tables express tabular data and have consistent headers and columns.
- [ ] Each Mermaid diagram has an adjacent prose equivalent.
- [ ] Images have meaningful non-empty alternative text.
- [ ] Meaning does not depend on color, position, sound, or typography alone.
- [ ] Equations and symbols have enough prose context.
- [ ] Any project-created audio or video has captions or a transcript.
- [ ] The deployed rendering passes keyboard, reflow, zoom, contrast, mobile, and
      screen-reader checks; source Markdown alone is not called WCAG-conformant.

## Safety and integrity

- [ ] Hazardous, clinical, security, legal, and human-subject tasks have boundaries,
      supervision, and stop conditions.
- [ ] Professional-literacy content does not claim licensure or individualized advice.
- [ ] Personal, clinical, proprietary, or research data are protected.
- [ ] AI assistance and other material assistance are disclosed and verified.
- [ ] Assessment authorship is checked through process evidence or oral defense where
      appropriate.

## Empirical honesty

- [ ] Planned hours are distinguished from observed hours.
- [ ] Effectiveness, retention, transfer, reliability, and accessibility claims state
      their sample, method, uncertainty, and limitations.
- [ ] Null, adverse, and missing results are not silently removed.
- [ ] Substantive revisions record the prior state, evidence, decision, and date.

## Release commands

```bash
uv run python scripts/validate_phase_3.py
uv run python scripts/validate_phase_4.py
uv run python scripts/validate_phase_5.py
uv run python scripts/validate_phase_6.py
git diff --check
```

## Human sign-off

- [ ] At least one subject-matter reviewer examined every changed discipline.
- [ ] A learner unfamiliar with the repository completed a navigation walkthrough.
- [ ] Accessibility review included disabled users or qualified testing where feasible.
- [ ] Safety-sensitive content received domain-appropriate review.
- [ ] The release notes distinguish completed structural checks from pending empirical
      validation.
