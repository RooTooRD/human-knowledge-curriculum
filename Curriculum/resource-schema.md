# Resource and Glossary Schema

## Resource catalog

```markdown
| ID | Resource | Edition/year | Format and use | Canonical link |
```

Resource IDs use `DOMAIN.RES.NNN`; shared records use `GLB.RES.NNN`. The catalog row
is the canonical bibliographic record; unit mappings may reuse it. A selection resolves
against the discipline catalog first and then [the shared catalog](resource-catalog.md).

## Unit resource matrix

| Code | Required selection |
|---|---|
| T | Best comprehensive textbook |
| B | Best beginner book |
| A | Best advanced book |
| L | Best lecture notes |
| V | Best video or YouTube course |
| U | Best university course |
| F | Best free learning resource |
| E | Best exercises or problem bank |
| R | Best professional reference |
| N | Best encyclopedia or overview reference |

Each graph unit has one row:

```markdown
| `DOMAIN-B01` | `DOMAIN.RES.001` | ... ten selections ... |
```

“Best” means the committee's best-fit selection for this curriculum and learner level,
not an objective universal ranking. Selection weighs accuracy, pedagogy, scope,
exercises, accessibility, recency, and durability. A resource may fill more than one
role only when it genuinely excels in both.

## Resource bundles

A discipline may define reusable bundles:

```markdown
| Bundle | T | B | A | L | V | U | F | E | R | N |
```

Every bundle must contain all ten selections, and every selection must resolve to a
catalog record. The unit matrix then uses:

```markdown
| Unit | Bundle | Required focus |
```

The focus names the chapters, modules, or topics to use. Bundle mapping is semantically
equivalent to repeating the ten selections on every unit row, while keeping edition and
link maintenance centralized.

## Metadata rules

- Books include edition and publication year whenever editions exist.
- Living web references use “living” plus the access-verification date.
- University courses link to the official course page.
- Video courses link to the official institution or creator page.
- Free status is asserted only when the linked material is legally available without
  payment at verification time.
- Fast-changing resources are rechecked at least annually.

## Glossary

```markdown
## `DOMAIN-B01` — Unit name

- **Term:** Concise definition.
- **Term:** Concise definition.
```

For compact discipline glossaries, the equivalent one-row form is permitted:

```markdown
| Unit | Terms |
|---|---|
| `DOMAIN-B01` | **Term:** Concise definition.<br>**Term:** Concise definition. |
```

Terms are unique within a unit unless the repeated entry explicitly contrasts meanings.
