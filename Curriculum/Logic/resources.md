# Logic Resources

Verified: **2026-07-25**

> [!NOTE]
> Each unit inherits ten explicit selections through a level bundle. The
> **Required focus** column is binding: use the named chapters, modules, or
> search topic rather than treating a broad book or platform as assigned in full.

## Discipline catalog

| ID | Resource | Edition/year | Format and use | Canonical link |
|---|---|---|---|---|
| `LOG.RES.001` | P. D. Magnus et al., forall x: Calgary | Living open edition; verified 2026-07-25 | Open formal-logic textbook | [Official or authoritative record](https://forallx.openlogicproject.org/) |
| `LOG.RES.002` | Brooke Noel Moore and Richard Parker, Critical Thinking | 13th ed., 2020 | McGraw Hill beginner text | [Official or authoritative record](https://www.mheducation.com/) |
| `LOG.RES.003` | Jon Barwise and John Etchemendy, Language, Proof and Logic | 2nd ed., 2011 | CSLI advanced text and software | [Official or authoritative record](https://ggweb.gradegrinder.net/lpl) |

Shared selections resolve through the [shared resource catalog](../resource-catalog.md).

## Resource bundles

| Bundle | T | B | A | L | V | U | F | E | R | N |
|---|---|---|---|---|---|---|---|---|---|---|
| `LOG.BUNDLE.CORE` | `LOG.RES.001` | `LOG.RES.002` | `LOG.RES.003` | `GLB.RES.002` | `GLB.RES.007` | `GLB.RES.002` | `GLB.RES.010` | `GLB.RES.009` | `LOG.RES.003` | `GLB.RES.009` |
| `LOG.BUNDLE.ADVANCED` | `LOG.RES.003` | `LOG.RES.002` | `LOG.RES.003` | `GLB.RES.002` | `GLB.RES.007` | `GLB.RES.002` | `GLB.RES.010` | `GLB.RES.009` | `LOG.RES.003` | `GLB.RES.009` |

Category order: **T** textbook, **B** beginner book, **A** advanced book,
**L** lecture notes, **V** video course, **U** university course, **F** free
resource, **E** exercises, **R** reference, **N** encyclopedia.

## Unit resource matrix

| Unit | Bundle | Required focus |
|---|---|---|
| `LOG-B01` Claims, questions, definitions, and arguments | `LOG.BUNDLE.CORE` | Declarative, interrogative, imperative, and expressive utterances; Claims and truth conditions; Lexical, stipulative, precising, and theoretical definitions |
| `LOG-B02` Premises, conclusions, inference indicators, and argument maps | `LOG.BUNDLE.CORE` | Explicit and implicit premises; Conclusion and premise indicators; Serial, convergent, linked, and divergent support |
| `LOG-B03` Validity, soundness, strength, cogency, and counterexample | `LOG.BUNDLE.CORE` | Necessary versus probable support; Validity and invalidating interpretations; Soundness and premise truth |
| `LOG-B04` Ambiguity, vagueness, equivocation, and operational definition | `LOG.BUNDLE.CORE` | Lexical and syntactic ambiguity; Borderline cases and sorites structure; Equivocation across an inference |
| `LOG-B05` Deduction, induction, abduction, and analogy | `LOG.BUNDLE.CORE` | Deductive entailment; Enumerative and statistical induction; Inference to the best explanation |
| `LOG-B06` Relevance, presumption, and common informal fallacies | `LOG.BUNDLE.CORE` | Relevance failures—ad hominem, appeal to emotion, red herring; Weak induction—hasty generalization, false cause, weak analogy; Presumption—begging the question, false dilemma, loaded question |
| `LOG-I01` Propositional syntax and truth tables | `LOG.BUNDLE.CORE` | Atomic propositions and connectives; Scope, parentheses, translation, and well-formed formulas; Truth tables and characteristic truth conditions |
| `LOG-I02` Natural deduction and semantic consequence | `LOG.BUNDLE.CORE` | Introduction and elimination rules; Conditional and indirect proof; Assumptions, subproofs, and discharge |
| `LOG-I03` Predicate logic, quantifiers, identity, and relations | `LOG.BUNDLE.CORE` | Predicates, names, variables, domains; Universal and existential quantification; Quantifier scope and multiple quantification |
| `LOG-A01` Soundness, completeness, compactness, and Löwenheim–Skolem orientation | `LOG.BUNDLE.ADVANCED` | Formal languages, structures, satisfaction, and consequence; Metalanguage and object language; Soundness and completeness proof architecture |
| `LOG-I04` Inductive logic, confirmation, and base-rate reasoning | `LOG.BUNDLE.CORE` | Sample-to-population and population-to-case inference; Prior probability, likelihood, and posterior direction; Confirmation, disconfirmation, and auxiliary assumptions |
| `LOG-I05` Causal argument, explanation, mechanisms, and rival hypotheses | `LOG.BUNDLE.CORE` | Correlation, temporal order, intervention, and counterfactual dependence; Mechanisms and causal chains; Confounding, reverse causation, selection, and common cause |
| `LOG-I06` Modal, deontic, temporal, and epistemic logic orientation | `LOG.BUNDLE.CORE` | Necessity, possibility, and possible-world semantics; Obligation, permission, and prohibition; Time, tense, and branching futures |
| `LOG-A02` Computability, proof systems, paradoxes, and limits of formalization | `LOG.BUNDLE.ADVANCED` | Effective procedure and equivalent computation models; Encoding, diagonalization, and self-reference; Halting and undecidability |
| `LOG-E01` Model theory, proof theory, and nonclassical logics | `LOG.BUNDLE.ADVANCED` | Elementary equivalence, definability, types, and saturation; Sequent calculi, normalization, and cut elimination; Intuitionistic and many-valued semantics |

## Use and maintenance

- Begin with B or V when diagnostic work shows a gap; otherwise use T as the spine.
- Complete E without solution-copying, then consult L or U for a second explanation.
- Use A and R for disputed, technical, or research-level questions.
- Verify living resources annually and edition-sensitive resources before replacement.
