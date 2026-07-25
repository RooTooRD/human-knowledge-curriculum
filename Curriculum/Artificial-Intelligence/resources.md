# Artificial Intelligence Resources

Verified: **2026-07-25**

> [!NOTE]
> Each unit inherits ten explicit selections through a level bundle. The
> **Required focus** column is binding: use the named chapters, modules, or
> search topic rather than treating a broad book or platform as assigned in full.

## Discipline catalog

| ID | Resource | Edition/year | Format and use | Canonical link |
|---|---|---|---|---|
| `AIX.RES.001` | Stuart Russell and Peter Norvig, Artificial Intelligence: A Modern Approach | 4th ed., 2020 | Pearson textbook | [Official or authoritative record](https://aima.cs.berkeley.edu/) |
| `AIX.RES.002` | Aston Zhang et al., Dive into Deep Learning | Living edition; verified 2026-07-25 | Open interactive book | [Official or authoritative record](https://d2l.ai/) |
| `AIX.RES.003` | Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning | 2016 | MIT Press advanced text | [Official or authoritative record](https://www.deeplearningbook.org/) |

Shared selections resolve through the [shared resource catalog](../resource-catalog.md).

## Resource bundles

| Bundle | T | B | A | L | V | U | F | E | R | N |
|---|---|---|---|---|---|---|---|---|---|---|
| `AIX.BUNDLE.CORE` | `AIX.RES.001` | `AIX.RES.002` | `AIX.RES.003` | `GLB.RES.001` | `GLB.RES.027` | `GLB.RES.001` | `GLB.RES.008` | `GLB.RES.005` | `AIX.RES.003` | `GLB.RES.011` |
| `AIX.BUNDLE.ADVANCED` | `AIX.RES.003` | `AIX.RES.002` | `AIX.RES.003` | `GLB.RES.001` | `GLB.RES.027` | `GLB.RES.001` | `GLB.RES.008` | `GLB.RES.005` | `AIX.RES.003` | `GLB.RES.011` |

Category order: **T** textbook, **B** beginner book, **A** advanced book,
**L** lecture notes, **V** video course, **U** university course, **F** free
resource, **E** exercises, **R** reference, **N** encyclopedia.

## Unit resource matrix

| Unit | Bundle | Required focus |
|---|---|---|
| `AIX-B01` AI concepts, history, task types, capabilities, and limitations | `AIX.BUNDLE.CORE` | Intelligence and automation; symbolic/statistical history; prediction, generation, planning, perception |
| `AIX-B02` Everyday AI use, prompting, verification, privacy, and human oversight | `AIX.BUNDLE.CORE` | Task suitability and risk; context, instruction, examples, output format; iteration and tool use |
| `AIX-I01` Agents, search, constraint satisfaction, planning, and game playing | `AIX.BUNDLE.CORE` | State/action/goal; uninformed/heuristic search; constraint satisfaction |
| `AIX-I02` Knowledge representation, reasoning, uncertainty, and probabilistic models | `AIX.BUNDLE.CORE` | Logic/rules/ontologies; inference and defaults; graphical models |
| `AIX-I03` Machine-learning problem formulation and supervised/unsupervised learning | `AIX.BUNDLE.CORE` | Task, target, data, loss; features/labels/splits; classification/regression |
| `AIX-I04` Feature engineering, trees, ensembles, kernels, clustering, and dimensionality reduction | `AIX.BUNDLE.CORE` | preprocessing/feature design; trees and ensembles; distance/kernels |
| `AIX-I05` Neural networks, backpropagation, optimization, and representation learning | `AIX.BUNDLE.CORE` | Neuron/layer/activation; computation graph/backprop; loss/gradient/optimizer |
| `AIX-A01` Deep learning for language, vision, audio, and multimodal data | `AIX.BUNDLE.ADVANCED` | Convolution and spatial models; sequences/attention; audio/time-frequency |
| `AIX-I06` Reinforcement learning and sequential decision-making | `AIX.BUNDLE.CORE` | MDPs, return, policy; dynamic programming; Monte Carlo/TD |
| `AIX-A02` Foundation models, transformers, tokenization, pretraining, and scaling | `AIX.BUNDLE.ADVANCED` | Tokens/embeddings; self-attention/transformer; objectives and corpora |
| `AIX-A03` LLM inference, prompting, retrieval, tools, agents, fine-tuning, and evaluation | `AIX.BUNDLE.ADVANCED` | Decoding/context; structured prompting; embeddings/RAG |
| `AIX-A04` Generative-model failure modes, interpretability, robustness, and security | `AIX.BUNDLE.ADVANCED` | Hallucination/calibration; distribution shift/adversarial inputs; prompt injection/data poisoning/exfiltration |
| `AIX-A05` Fairness, accountability, transparency, labor, copyright, safety, and governance | `AIX.BUNDLE.ADVANCED` | Stakeholders/impact; fairness and discrimination; transparency/accountability |
| `AIX-A06` Robotics, perception, control, and embodied intelligence | `AIX.BUNDLE.ADVANCED` | Robot frames/kinematics; sensing/localization; mapping/planning |
| `AIX-E01` AI research methods and frontier architectures | `AIX.BUNDLE.ADVANCED` | Frontier literature/problem; baselines/ablations; architecture/training innovation |
| `AIX-E02` Advanced AI safety, alignment, evaluation science, and institutional design | `AIX.BUNDLE.ADVANCED` | Objective/oversight problems; scalable evaluation and monitoring; misuse/systemic/catastrophic risk |

## Use and maintenance

- Begin with B or V when diagnostic work shows a gap; otherwise use T as the spine.
- Complete E without solution-copying, then consult L or U for a second explanation.
- Use A and R for disputed, technical, or research-level questions.
- Verify living resources annually and edition-sensitive resources before replacement.
