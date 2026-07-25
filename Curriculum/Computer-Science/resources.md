# Computer Science Resources

Verified: **2026-07-25**

> [!NOTE]
> Each unit inherits ten explicit selections through a level bundle. The
> **Required focus** column is binding: use the named chapters, modules, or
> search topic rather than treating a broad book or platform as assigned in full.

## Discipline catalog

| ID | Resource | Edition/year | Format and use | Canonical link |
|---|---|---|---|---|
| `CSC.RES.001` | David G. Wengrow, A Common-Sense Guide to Data Structures and Algorithms | 2nd ed., 2020 | Pragmatic Bookshelf beginner text | [Official or authoritative record](https://pragprog.com/) |
| `CSC.RES.002` | Randal E. Bryant and David R. O’Hallaron, Computer Systems: A Programmer’s Perspective | 3rd ed., 2015 | Pearson systems text | [Official or authoritative record](https://csapp.cs.cmu.edu/3e/home.html) |
| `CSC.RES.003` | Thomas H. Cormen et al., Introduction to Algorithms | 4th ed., 2022 | MIT Press advanced text/reference | [Official or authoritative record](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/) |

Shared selections resolve through the [shared resource catalog](../resource-catalog.md).

## Resource bundles

| Bundle | T | B | A | L | V | U | F | E | R | N |
|---|---|---|---|---|---|---|---|---|---|---|
| `CSC.BUNDLE.CORE` | `CSC.RES.001` | `CSC.RES.002` | `CSC.RES.003` | `GLB.RES.001` | `GLB.RES.006` | `GLB.RES.001` | `GLB.RES.008` | `GLB.RES.026` | `CSC.RES.003` | `GLB.RES.011` |
| `CSC.BUNDLE.ADVANCED` | `CSC.RES.003` | `CSC.RES.002` | `CSC.RES.003` | `GLB.RES.001` | `GLB.RES.006` | `GLB.RES.001` | `GLB.RES.008` | `GLB.RES.026` | `CSC.RES.003` | `GLB.RES.011` |

Category order: **T** textbook, **B** beginner book, **A** advanced book,
**L** lecture notes, **V** video course, **U** university course, **F** free
resource, **E** exercises, **R** reference, **N** encyclopedia.

## Unit resource matrix

| Unit | Bundle | Required focus |
|---|---|---|
| `CSC-B01` Information, representation, bits, data, and abstraction | `CSC.BUNDLE.CORE` | Information and encoding; bits, binary, hex; numbers, text, image, audio representation |
| `CSC-B02` Algorithms, state, control flow, and computational problem solving | `CSC.BUNDLE.CORE` | Problem specification; sequence, state, assignment; condition and iteration |
| `CSC-B03` Programming with values, functions, collections, input/output, and tests | `CSC.BUNDLE.CORE` | Values, types, expressions; functions and scope; conditionals/loops |
| `CSC-B04` Files, structured data, command line, version control, and debugging | `CSC.BUNDLE.CORE` | Paths, streams, permissions; shell navigation/pipelines; CSV/JSON and parsing |
| `CSC-I01` Data structures and algorithmic complexity | `CSC.BUNDLE.CORE` | ADTs and invariants; arrays/lists/stacks/queues; trees/heaps/hash tables |
| `CSC-I02` Core algorithms: search, sort, graph, string, numeric, and randomized | `CSC.BUNDLE.CORE` | Search/sort/select; traversal and shortest paths; spanning/flow orientation |
| `CSC-I03` Algorithm design: divide-and-conquer, greedy, dynamic programming, reductions | `CSC.BUNDLE.CORE` | Divide-and-conquer; greedy and exchange proofs; dynamic programming |
| `CSC-I04` Automata, formal languages, computability, and complexity | `CSC.BUNDLE.CORE` | Regular languages/finite automata; grammars/pushdown automata; Turing machines |
| `CSC-I05` Computer architecture: logic, instruction sets, memory, processors, input/output | `CSC.BUNDLE.CORE` | Boolean logic and circuits; data path/control and ISA; assembly and calling convention |
| `CSC-I06` Operating systems: processes, concurrency, memory, storage, and isolation | `CSC.BUNDLE.CORE` | Kernel, syscall, privilege; process/thread/scheduling; synchronization/deadlock |
| `CSC-A01` Parallel, concurrent, and distributed computing | `CSC.BUNDLE.ADVANCED` | Parallel decomposition and models; locks, actors, lock-free orientation; communication and clocks |
| `CSC-I07` Networks and the Internet: layers, routing, transport, naming, and web | `CSC.BUNDLE.CORE` | Signals, packets, layering; link/IP, addressing, routing; TCP/UDP/congestion |
| `CSC-I08` Databases: modeling, relational algebra, SQL, transactions, and indexes | `CSC.BUNDLE.CORE` | Conceptual/relational modeling; algebra and SQL; normalization/constraints |
| `CSC-A02` Distributed data, streaming, warehouses, and information retrieval | `CSC.BUNDLE.ADVANCED` | Partitioning/replication; consistency and distributed transactions; batch/stream processing |
| `CSC-I09` Programming languages: paradigms, types, semantics, compilation, and runtimes | `CSC.BUNDLE.CORE` | Syntax/semantics; scope, binding, closures; types and polymorphism |
| `CSC-I10` Software engineering: requirements, design, testing, maintenance, and teamwork | `CSC.BUNDLE.CORE` | Requirements/stakeholders; modular design/APIs; testing and review |
| `CSC-A03` Architecture, reliability, observability, performance, and operations | `CSC.BUNDLE.ADVANCED` | Architectural styles/interfaces; SLOs, redundancy, degradation; logs/metrics/traces |
| `CSC-I11` Human-computer interaction, accessibility, graphics, and interactive systems | `CSC.BUNDLE.CORE` | Users, tasks, context; perception/action and interaction principles; prototyping/usability studies |
| `CSC-A04` Compilers, virtual machines, and language implementation | `CSC.BUNDLE.ADVANCED` | Lexing/parsing; AST, types, semantic analysis; IR/optimization |
| `CSC-A05` Graphics, vision, robotics, embedded, and specialized platforms | `CSC.BUNDLE.ADVANCED` | Geometric transformations/rendering; image formation/features; perception/estimation |
| `CSC-A06` Social, ethical, environmental, and professional computing | `CSC.BUNDLE.ADVANCED` | Stakeholders and power; privacy/security/fairness; labor, access, and platforms |
| `CSC-E01` Computer science research frontiers | `CSC.BUNDLE.ADVANCED` | Frontier mapping and literature; formal/empirical/systems questions; benchmark and baseline design |

## Use and maintenance

- Begin with B or V when diagnostic work shows a gap; otherwise use T as the spine.
- Complete E without solution-copying, then consult L or U for a second explanation.
- Use A and R for disputed, technical, or research-level questions.
- Verify living resources annually and edition-sensitive resources before replacement.
