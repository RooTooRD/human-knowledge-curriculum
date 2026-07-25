# Empirical Evaluation and Revision Protocol

## What structural validation cannot prove

The repository validators establish coverage, identity, dependency order, arithmetic,
and internal alignment. They do not prove that the hour estimates are accurate, an
assessment measures its intended construct, two raters agree, a learner retains or
transfers knowledge, a resource is accessible in practice, or the curriculum improves
life outcomes.

## Evaluation questions

1. How do observed activity hours differ from planned hours by unit, difficulty,
   background, route, and access conditions?
2. Do formative checks predict the specific errors found in summative work?
3. Do independent raters reach consistent criterion-referenced decisions?
4. Does a passing learner retain the capability after 30, 90, 180, and 365 days?
5. Can the learner transfer it to an unfamiliar problem without hidden coaching?
6. Which tasks introduce construct-irrelevant barriers?
7. Which prerequisite edges are missing, unnecessary, or ordered too late?
8. Which resources produce completion, understanding, and durable use at reasonable
   cost and access burden?

## Minimum learner record

| Field | Type | Purpose |
|---|---|---|
| Pseudonymous learner ID | identifier | join repeated observations without publishing identity |
| Unit ID and route | categorical | locate the curriculum decision |
| Prior evidence | structured note | distinguish first learning from review or exemption |
| Activity hours | reading, exercises, projects, review, assessment | calibrate each time component |
| Attempt and review dates | ISO date | measure spacing and delay |
| Formative error codes | categorical plus note | test diagnosis and correction |
| Summative rubric decisions | ordinal by dimension | inspect mastery and rater consistency |
| Rater ID and independence | identifier and boolean | estimate agreement |
| Retention result | criterion decision | measure durable recall and performance |
| Transfer result | criterion decision | measure use in an unfamiliar case |
| Access conditions | structured note | identify construct-irrelevant barriers |
| Resource versions | identifiers and dates | separate curricular from source changes |
| Assistance disclosure | structured note | interpret authorship and tool effects |

Collect only data needed for the declared evaluation. Use informed consent, minimize
identifiers, define retention and deletion, restrict access, and obtain appropriate
ethics review before research intended to produce generalizable knowledge.

## Pilot sequence

### Stage 1: cognitive walkthrough

Two reviewers independently trace a diverse sample of prerequisite chains, attempting
to locate every instruction, source, task, pass rule, and next step. Repair navigation
and ambiguous language before recruiting learners.

### Stage 2: small feasibility pilot

Use a varied sample of Beginner, Intermediate, Advanced, and Expert units from formal,
empirical, interpretive, creative, and practical disciplines. Collect observed time,
missing-prerequisite reports, task completion, accessibility barriers, and interview
evidence. Publish the sample and missingness; do not generalize from convenience alone.

### Stage 3: assessment calibration

Have at least two independent raters score a stratified sample. Report agreement by
rubric dimension, adjudication rules, and confidence intervals where appropriate.
Revise criteria that permit systematic disagreement before changing pass thresholds.

### Stage 4: delayed retention and transfer

Reassess without copying the original task. Use parallel prompts at the planned review
delays and at least one unfamiliar application. Separate recognition, recall,
explanation, production, and performance.

### Stage 5: route-level evaluation

Study workload, attrition, interruptions, cumulative prerequisite retention, portfolio
quality, and learner-defined value across complete years. A ten- or twenty-year outcome
cannot be inferred from a short unit pilot.

## Analysis and revision

- Report sample size, selection, missing data, distributions, intervals, and practical
  consequences rather than only averages.
- Compare planned and observed component hours; do not collapse every discrepancy into
  one difficulty multiplier.
- Stratify cautiously by relevant prior preparation and access conditions without
  turning small groups into stereotypes.
- Preserve the previous estimate, new evidence, decision rule, and date.
- Change a prerequisite only after checking both learners who struggled without it and
  learners who succeeded with an exemption.
- Distinguish an inaccessible task from inability in the intended construct.
- Register major evaluation questions and analysis rules before examining outcomes when
  confirmatory claims are intended.

## Publication table

Every evidence-based revision should publish:

| Item | Required disclosure |
|---|---|
| Version | commit or release identifier and date |
| Scope | units, disciplines, routes, and learner population |
| Design | observational, experimental, qualitative, mixed, or audit |
| Measures | tasks, rubric, delay, transfer condition, accessibility checks |
| Results | estimates, uncertainty, missingness, and adverse or null findings |
| Decision | changed, retained, deprecated, or awaiting more evidence |
| Limits | plausible alternative explanations and boundary of generalization |
| Materials | lawful access to instruments, code, and de-identified data where possible |

Until such records exist, the hours in Phase 5 remain planning priors and the curriculum
is a carefully specified proposal, not an empirically validated universal intervention.
