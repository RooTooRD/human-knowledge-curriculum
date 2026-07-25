# Security Resources

Verified: **2026-07-25**

> [!NOTE]
> Each unit inherits ten explicit selections through a level bundle. The
> **Required focus** column is binding: use the named chapters, modules, or
> search topic rather than treating a broad book or platform as assigned in full.

## Discipline catalog

| ID | Resource | Edition/year | Format and use | Canonical link |
|---|---|---|---|---|
| `SEC.RES.001` | Ross Anderson, Security Engineering | 3rd ed., 2020 | Wiley/open comprehensive text | [Official or authoritative record](https://www.cl.cam.ac.uk/~rja14/book.html) |
| `SEC.RES.002` | Michael E. Whitman and Herbert J. Mattord, Principles of Information Security | 7th ed., 2021 | Cengage introductory text | [Official or authoritative record](https://www.cengage.com/) |
| `SEC.RES.003` | NIST Computer Security Resource Center Publications | Living; verified 2026-07-25 | Standards and advanced reference | [Official or authoritative record](https://csrc.nist.gov/publications) |

Shared selections resolve through the [shared resource catalog](../resource-catalog.md).

## Resource bundles

| Bundle | T | B | A | L | V | U | F | E | R | N |
|---|---|---|---|---|---|---|---|---|---|---|
| `SEC.BUNDLE.CORE` | `SEC.RES.001` | `SEC.RES.002` | `SEC.RES.003` | `GLB.RES.001` | `GLB.RES.007` | `GLB.RES.003` | `GLB.RES.021` | `GLB.RES.021` | `SEC.RES.003` | `GLB.RES.021` |
| `SEC.BUNDLE.ADVANCED` | `SEC.RES.003` | `SEC.RES.002` | `SEC.RES.003` | `GLB.RES.001` | `GLB.RES.007` | `GLB.RES.003` | `GLB.RES.021` | `GLB.RES.021` | `SEC.RES.003` | `GLB.RES.021` |

Category order: **T** textbook, **B** beginner book, **A** advanced book,
**L** lecture notes, **V** video course, **U** university course, **F** free
resource, **E** exercises, **R** reference, **N** encyclopedia.

## Unit resource matrix

| Unit | Bundle | Required focus |
|---|---|---|
| `SEC-B01` Assets, threats, vulnerabilities, controls, risk, and adversaries | `SEC.BUNDLE.CORE` | Asset and mission; threat/hazard/adversary; vulnerability/exposure |
| `SEC-B02` Personal digital hygiene: authentication, updates, backup, phishing, privacy | `SEC.BUNDLE.CORE` | Password managers and MFA; updates and least privilege; backup/recovery |
| `SEC-B03` Physical, household, travel, and emergency security | `SEC.BUNDLE.CORE` | Situational awareness without hypervigilance; access, lighting, fire, valuables; travel documents/comms |
| `SEC-I01` Confidentiality, integrity, availability, authenticity, and accountability | `SEC.BUNDLE.CORE` | Security properties; identity/authentication/authorization; trust boundaries |
| `SEC-I02` Privacy, identity, surveillance, consent, and data protection | `SEC.BUNDLE.CORE` | Personal data and identity; collection, inference, linkage; surveillance actors/effects |
| `SEC-I03` Cryptographic concepts: encryption, hashing, signatures, keys, protocols | `SEC.BUNDLE.CORE` | Threat models and Kerckhoffs principle; symmetric/asymmetric encryption; hashes/MACs/signatures |
| `SEC-I04` System, application, network, cloud, and supply-chain security | `SEC.BUNDLE.CORE` | Hardening/isolation; input, auth, session, web flaws; segmentation/filtering |
| `SEC-A01` Threat modeling, secure design, testing, and vulnerability management | `SEC.BUNDLE.ADVANCED` | Assets/actors/abuse cases; trust/data-flow diagrams; secure patterns |
| `SEC-A02` Incident response, forensics, continuity, recovery, and crisis exercises | `SEC.BUNDLE.ADVANCED` | Preparation/roles; detection/triage/containment; evidence and forensics |
| `SEC-I05` Human factors, social engineering, insider risk, and security culture | `SEC.BUNDLE.CORE` | Attention, trust, urgency, authority; phishing/pretext/physical tactics; usable security |
| `SEC-A03` Governance, assurance, standards, audit, and security economics | `SEC.BUNDLE.ADVANCED` | Policy, ownership, risk appetite; control frameworks/standards; evidence, audit, certification |
| `SEC-A04` Intelligence, military strategy, deterrence, terrorism, and hybrid conflict | `SEC.BUNDLE.ADVANCED` | Intelligence cycle and uncertainty; force, strategy, operations; deterrence/coercion |
| `SEC-A05` Safety engineering, catastrophic risk, and critical infrastructure | `SEC.BUNDLE.ADVANCED` | Hazard analysis and defense-in-depth; human/technical/common-cause failure; infrastructure interdependence |
| `SEC-E01` Security research, red teaming, and strategic foresight | `SEC.BUNDLE.ADVANCED` | Research ethics/scope; adversarial hypothesis and attack path; controlled exploitation |

## Use and maintenance

- Begin with B or V when diagnostic work shows a gap; otherwise use T as the spine.
- Complete E without solution-copying, then consult L or U for a second explanation.
- Use A and R for disputed, technical, or research-level questions.
- Verify living resources annually and edition-sensitive resources before replacement.
