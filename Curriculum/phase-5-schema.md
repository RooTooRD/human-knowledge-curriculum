# Phase 5 Time, Review, and Pathway Schema

## Unit time row

```markdown
| Unit | Difficulty | Status | Reading | Exercises | Projects | Review | Mastery | Total | Review checkpoints |
```

All hour columns contain non-negative integers. `Total` is the exact sum of the five
components. The estimate includes one ordinary mastery attempt and planned corrective
work, but not unlimited reassessment or maximum-scope capstone expansion.

## Discipline summary

Every `schedule.md` reports:

- Core hours;
- Extension hours;
- full-discipline hours;
- equivalent months at 10, 15, and 20 study hours per week;
- the unit order inherited from `roadmap.md`;
- review and overload rules.

A planning month is **4.345 weeks**. Calendar estimates assume 48 active study weeks
and four weeks for leave, illness, catch-up, and annual audit.

## Global route record

```markdown
| Year | New units | Core hours | Extension hours | Total planned | Capacity | Slack | Dominant disciplines |
```

The route is valid only if:

1. every included unit occurs once;
2. all included prerequisites occur in an earlier row or earlier in the same row;
3. no year exceeds capacity;
4. slack is non-negative;
5. every Core unit is included.

Units within a year retain a topological order. “Dominant disciplines” summarizes the
allocation; it does not authorize skipping listed prerequisites.

## Specialization record

```markdown
| Path | Gateway Core | Required Extension | Added hours | Recommended capstone |
```

Every Extension unit belongs to at least one specialization. A specialization may add
closely related Core gateways without recounting their hours. If several
specializations overlap, shared Extension hours are counted once.

## Review event

At each checkpoint:

1. attempt retrieval, reconstruction, solution, explanation, or performance before
   consulting notes;
2. score against the Phase 4 criteria;
3. inspect the error type;
4. correct with a different worked example, source, or method;
5. perform a parallel check;
6. schedule the next interval from observed performance.

Recognition or rereading alone does not count as review evidence.
