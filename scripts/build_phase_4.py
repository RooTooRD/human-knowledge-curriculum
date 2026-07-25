#!/usr/bin/env python

from pathlib import Path
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"

project_themes = {
    "Architecture-and-Design": [
        ("Accessible-space audit", "Document how one everyday space supports or obstructs human use, then propose one testable improvement.", "Measured drawings, observation notes, accessibility checklist, and one revised detail"),
        ("Room or service redesign", "Redesign a bounded interior, service touchpoint, or wayfinding system for a named user group.", "Research brief, alternatives, scale drawings or prototype, user test, and revision memo"),
        ("Neighborhood systems proposal", "Develop an evidence-based intervention connecting buildings, public space, mobility, climate, and community needs.", "Site analysis, stakeholder map, design set, lifecycle argument, and public presentation"),
        ("Resilient civic place", "Design and defend a socially inclusive, climate-resilient civic building or district intervention.", "Independent brief, research dossier, complete design package, model, review record, and oral defense"),
    ],
    "Art": [
        ("Slow-looking study", "Investigate one object through repeated observation, formal analysis, material experiment, and contextual research.", "Observation sheets, studies, source notes, finished response, and critique reflection"),
        ("Comparative micro-exhibition", "Curate a focused comparison across periods or cultures without flattening historical difference.", "Thesis, six-object checklist, labels, spatial plan, rights log, and visitor test"),
        ("Coherent body of work", "Create a technically controlled series responding to a researched question and revise it through critique.", "Proposal, process journal, eight or more works, installation plan, and critical statement"),
        ("Public exhibition and research defense", "Produce a public-facing exhibition or practice-led inquiry that contributes a defensible interpretation.", "Research paper, original work, catalog, public installation, documentation, and oral defense"),
    ],
    "Artificial-Intelligence": [
        ("AI claim benchmark", "Test a narrow everyday AI capability against a labeled set instead of relying on anecdotes.", "Task specification, test set, baseline, error taxonomy, and model-use disclosure"),
        ("Responsible learning system", "Train and evaluate a model for a bounded prediction or classification problem.", "Data card, reproducible notebook, baselines, evaluation report, model card, and demo"),
        ("Grounded AI application", "Build and red-team a retrieval, tool-using, or multimodal system under realistic constraints.", "Architecture, evaluation suite, threat model, ablations, working system, and incident analysis"),
        ("Frontier research or governance capstone", "Answer an original technical, safety, or institutional question about advanced AI.", "Proposal, literature review, preregistration, artifact or policy design, results, audit trail, and defense"),
    ],
    "Astronomy": [
        ("Night-sky field journal", "Observe and explain repeated changes in the sky using naked-eye or simulation data.", "Observation log, annotated charts, uncertainty notes, and explanatory presentation"),
        ("Stellar evidence notebook", "Infer properties of stars or planetary systems from public observations.", "Clean data, calculations, plots, physical interpretation, and error analysis"),
        ("Astrophysical inference pipeline", "Reproduce a published analysis of exoplanet, galactic, or cosmological data.", "Literature map, code, validated pipeline, figures, sensitivity analysis, and report"),
        ("Independent observing or archive study", "Conduct an original, bounded astronomical investigation with open or collected data.", "Proposal, observing/data plan, reproducible analysis, paper, public talk, and defense"),
    ],
    "Biology": [
        ("Living-systems evidence atlas", "Document one biological system from cell to environment using observation and verified sources.", "Annotated observations, diagrams, source record, mechanism explanation, and uncertainty list"),
        ("Heredity and evolution investigation", "Analyze a genetic, evolutionary, or physiological question with real or simulated data.", "Question, ethical data plan, analysis, competing explanations, figures, and report"),
        ("Ecosystem or molecular study", "Design and execute a controlled study of a biological process at an appropriate scale.", "Protocol, safety review, notebook, raw data, analysis, limitations, and poster"),
        ("Reproducible biological research", "Complete an original or replication study that connects mechanism, evolution, and system context.", "Proposal, approvals, preregistration, data/code, paper, peer review response, and defense"),
    ],
    "Business-and-Management": [
        ("Process and value audit", "Map how one small organization or household process creates value, cost, delay, and risk.", "Process map, interviews or observations, basic accounts, bottleneck diagnosis, and improvement test"),
        ("Evidence-based launch plan", "Develop and test a product, service, or internal initiative for a defined customer.", "Customer evidence, business model, operations plan, budget, experiment results, and pitch"),
        ("Organizational strategy diagnosis", "Analyze a real organization across finance, people, operations, marketing, and governance.", "Case dossier, financial model, stakeholder analysis, alternatives, implementation plan, and board presentation"),
        ("Venture or transformation capstone", "Launch, turn around, or rigorously simulate an organization through measurable milestones.", "Charter, validated demand, operating system, financials, risk register, outcomes report, and defense"),
    ],
    "Chemistry": [
        ("Molecular household audit", "Explain the composition, function, hazards, and disposal of selected household chemicals.", "Molecular profiles, label analysis, quantitative comparison, safety sheet, and public explanation"),
        ("Reaction and analysis study", "Design experiments that identify an unknown or quantify a reaction while controlling error.", "Risk assessment, protocol, notebook, spectra or measurements, calculations, and lab report"),
        ("Molecule or material design", "Relate structure, synthesis, properties, and lifecycle constraints for a proposed molecule or material.", "Literature review, design rationale, synthesis or simulation plan, characterization, and lifecycle analysis"),
        ("Independent chemical investigation", "Conduct an original experimental or computational chemistry project under formal safety review.", "Proposal, hazard review, reproducible methods, raw data, analysis, paper, and oral defense"),
    ],
    "Cognitive-Science": [
        ("Perception and memory demonstrations", "Reproduce safe classic demonstrations and explain what each can and cannot establish.", "Protocols, consent script, observations, model comparison, and limitations memo"),
        ("Computational account of cognition", "Implement and compare simple models of a cognitive task.", "Task analysis, model code, behavioral benchmark, parameter study, and interpretation"),
        ("Multimethod cognition study", "Connect behavioral, neural, linguistic, and computational evidence around one question.", "Literature synthesis, study design, model or pilot data, triangulation matrix, and presentation"),
        ("Independent cognitive-science inquiry", "Conduct a theoretically motivated replication, model, or empirical study.", "Ethics review, preregistration, materials, data/code, paper, and oral defense"),
    ],
    "Communication": [
        ("Explain one difficult idea", "Produce and revise a short explanation for a precisely defined audience.", "Audience profile, script, visual aid, recording, feedback evidence, and revision"),
        ("Public-information campaign", "Design a multi-channel campaign that informs without manipulating or obscuring uncertainty.", "Research dossier, message architecture, three media artifacts, user test, and ethics audit"),
        ("Facilitation and negotiation practicum", "Plan, conduct, and evaluate a consequential group discussion or negotiation.", "Stakeholder map, agenda, recording or observer notes, agreement, and reflective analysis"),
        ("Public communication capstone", "Lead a sustained communication initiative on a complex public issue.", "Strategy, evidence base, portfolio, accessibility tests, impact evaluation, and oral defense"),
    ],
    "Computer-Science": [
        ("Reliable command-line tool", "Build a small program that solves a real information-processing problem.", "Specification, source, tests, usage documentation, complexity note, and demo"),
        ("Data-backed application", "Design and implement an application with algorithms, persistent data, and a usable interface.", "Requirements, architecture, database, tested application, security review, and user evaluation"),
        ("Networked systems project", "Build or deeply analyze a concurrent, distributed, operating-system, database, or network service.", "Protocol and threat model, implementation, benchmarks, failure tests, and technical report"),
        ("Open computing capstone", "Create or research a substantial computing system with independent users or reproducible results.", "Proposal, repository history, design review, release, evaluation, maintenance plan, and defense"),
    ],
    "Earth-Climate-and-Energy": [
        ("Household Earth-systems audit", "Trace the water, material, energy, climate, and waste implications of one household activity.", "Flow map, measurements, calculations, source log, and feasible intervention"),
        ("Regional climate-risk profile", "Analyze hazards, exposure, vulnerability, uncertainty, and adaptation for one place.", "Map set, data notebook, scenario comparison, stakeholder analysis, and public brief"),
        ("Decarbonization and resilience plan", "Design a technically and politically feasible transition for a campus, firm, or municipality.", "Baseline inventory, energy model, option appraisal, finance, justice analysis, and roadmap"),
        ("Earth-systems capstone", "Conduct a field, modeling, policy, or design study addressing a coupled Earth-system problem.", "Proposal, data and methods, uncertainty analysis, intervention, paper, and public defense"),
    ],
    "Economics": [
        ("Incentives in everyday life", "Investigate a real allocation problem using opportunity cost, incentives, institutions, and distribution.", "Observation/data sheet, model, alternative explanations, welfare note, and short presentation"),
        ("Policy evaluation brief", "Assess a live economic policy using theory, data, incidence, and uncertainty.", "Causal diagram, descriptive analysis, model, distribution table, brief, and oral questioning"),
        ("Integrated economy model", "Build and stress-test a model linking households, firms, finance, government, trade, and environment.", "Assumptions, equations or simulation, calibration, scenarios, sensitivity analysis, and report"),
        ("Independent economic research", "Answer an original theoretical, empirical, historical, or institutional economic question.", "Proposal, literature review, identification strategy, data/code, paper, replication package, and defense"),
    ],
    "Education": [
        ("Micro-teaching cycle", "Teach one bounded concept, collect evidence of learning, and revise the lesson.", "Learner analysis, objectives, lesson, assessment, recording or observation, and revision memo"),
        ("Coherent learning unit", "Design and pilot a multi-lesson unit aligned across outcomes, instruction, and assessment.", "Curriculum map, materials, inclusive adaptations, rubric, pilot evidence, and revision"),
        ("Educational intervention study", "Implement and evaluate an intervention at classroom, program, or institutional scale.", "Theory of change, ethics review, implementation plan, evidence, analysis, and stakeholder report"),
        ("Teaching and learning capstone", "Produce a defensible curriculum, research study, or institutional design with field evidence.", "Proposal, literature synthesis, complete intervention, portfolio, evaluation, and oral defense"),
    ],
    "Engineering": [
        ("Reverse-engineer a device", "Disassemble or model a safe device to explain requirements, components, flows, and failure modes.", "Functional decomposition, measurements, drawings, calculations, risk notes, and redesign"),
        ("Tested prototype", "Design, build, and iterate a prototype under explicit performance and resource constraints.", "Requirements, alternatives, model, prototype, test data, failure analysis, and revision"),
        ("Multidisciplinary engineered system", "Integrate mechanical, electrical, computational, material, and human considerations.", "System architecture, interfaces, simulations, prototype, verification matrix, and lifecycle assessment"),
        ("Engineering design capstone", "Deliver a stakeholder-defined system from needs analysis through validated operation.", "Charter, reviews, technical file, verified system, safety case, user handoff, and defense"),
    ],
    "Finance": [
        ("Personal financial policy", "Create a decision policy for cash flow, emergencies, debt, insurance, and long-term saving.", "Net-worth statement, budget, scenario model, product comparison, policy, and risk disclosure"),
        ("Business or asset valuation", "Value a real asset using multiple methods and explicitly model uncertainty.", "Source data, forecasts, discount-rate rationale, valuation models, sensitivities, and recommendation"),
        ("Portfolio and risk mandate", "Design and backtest an investment or treasury mandate under realistic constraints.", "Investment policy, data/code, benchmark, attribution, stress tests, costs, and governance"),
        ("Financial decision capstone", "Solve a consequential household, corporate, market, or public-finance problem.", "Mandate, research record, full model, controls, decision memo, monitoring plan, and defense"),
    ],
    "Foundations": [
        ("Everyday evidence dossier", "Answer a practical question by reading instructions, measuring, checking sources, and explaining the result.", "Question, notes, measurements, source checks, answer, and correction log"),
        ("Navigate a real institution", "Complete a safe civic, health, financial, or administrative process and document its decision points.", "Process map, document checklist, communication record, privacy review, and lessons learned"),
        ("Independent problem-solving portfolio", "Resolve several unfamiliar practical problems by integrating literacy, numeracy, digital tools, and judgment.", "Four case records, calculations, source evaluations, artifacts, and reflective synthesis"),
        ("Foundational agency capstone", "Plan and complete a personally meaningful, socially responsible project from question to public explanation.", "Goal, schedule, evidence archive, completed artifact, feedback, revision, and oral defense"),
    ],
    "Geography": [
        ("Place evidence atlas", "Represent one place through physical, human, historical, and lived geographies.", "Field notes, sketch maps, data profiles, photographs or alternatives, and place narrative"),
        ("GIS story map", "Use geospatial data to explain a spatial pattern without confusing correlation and cause.", "Data provenance, cleaned layers, analysis, map series, uncertainty, and accessible story"),
        ("Regional vulnerability assessment", "Analyze linked environment, population, economy, infrastructure, and governance across scales.", "Spatial database, maps, scenarios, stakeholder analysis, intervention options, and briefing"),
        ("Independent geospatial inquiry", "Conduct an original field, remote-sensing, cartographic, or spatial-analysis project.", "Proposal, ethics and data plan, reproducible workflow, atlas or paper, and oral defense"),
    ],
    "Health-and-Medicine": [
        ("Health-claim verification", "Evaluate a common health claim without diagnosing or prescribing for an individual.", "Question, evidence hierarchy, source appraisal, absolute-risk explanation, and safety disclaimer"),
        ("Patient-pathway case", "Analyze prevention, presentation, diagnosis, treatment, rehabilitation, and system factors in a fictional case.", "Timeline, physiology map, differential reasoning, evidence plan, communication script, and reflection"),
        ("Public-health intervention", "Design and evaluate an equitable intervention for a defined population health problem.", "Needs assessment, causal model, ethics review, intervention, evaluation plan, budget, and briefing"),
        ("Health evidence capstone", "Complete a systematic evidence synthesis, quality-improvement design, or supervised research project.", "Protocol, approvals, search and appraisal record, analysis, report, implementation plan, and defense"),
    ],
    "History": [
        ("Primary-source dossier", "Reconstruct a bounded event or experience from several imperfect sources.", "Source descriptions, provenance table, chronology, corroboration map, narrative, and uncertainty note"),
        ("Comparative historical argument", "Explain a similarity and difference across societies or periods using explicit causal reasoning.", "Question, annotated bibliography, evidence matrix, essay, counterargument, and revision"),
        ("Digital public-history exhibition", "Interpret a major transformation for a public audience while preserving complexity and provenance.", "Curatorial thesis, object set, labels, timeline/map, rights record, peer test, and launch"),
        ("Original historical research", "Answer an archival, historiographical, oral-history, or digital-history question.", "Proposal, source protocol, chapter or article, source appendix, public presentation, and defense"),
    ],
    "Islamic-Studies": [
        ("Foundational source notebook", "Read selected translated primary passages with attention to genre, context, language, and interpretation.", "Passage notes, term glossary, context timelines, comparison, and interpretive cautions"),
        ("Tradition and method dossier", "Compare how two scholarly traditions reason about a shared textual, legal, theological, or spiritual question.", "Source set, method reconstruction, agreement/disagreement map, essay, and oral examination"),
        ("Islamic civilization exhibition", "Trace an institution, idea, art form, or network across multiple Muslim societies and periods.", "Research dossier, maps/timeline, material objects, historiographical note, and public exhibition"),
        ("Primary-source Islamic studies capstone", "Conduct supervised research in a defined Islamic scholarly or historical discipline.", "Language plan, source criticism, literature review, original study, translations or editions, and defense"),
    ],
    "Law": [
        ("Case and rule brief", "Extract facts, issue, rule, reasoning, holding, and uncertainty from a judicial decision or legal problem.", "Case brief, authority map, counterargument, client-language explanation, and citation check"),
        ("Moot court or negotiation", "Represent competing positions in a structured legal dispute and respond to questioning.", "Record, authorities, written submissions, oral argument, settlement analysis, and reflection"),
        ("Comparative law-reform memorandum", "Evaluate a legal problem across jurisdictions, rights, institutions, incentives, and implementation.", "Research trail, comparative table, constitutional analysis, options, draft provision, and briefing"),
        ("Legal research and advocacy capstone", "Develop a litigation, legislation, regulation, or access-to-justice project under jurisdictional limits.", "Question presented, authority dossier, full memorandum, advocacy artifact, ethics audit, and defense"),
    ],
    "Learning": [
        ("Personal learning experiment", "Compare two evidence-based study strategies on a small body of material.", "Baseline, protocol, retrieval data, confound log, analysis, and revised study rule"),
        ("Durable knowledge system", "Build and test a note, retrieval, scheduling, and review workflow for one discipline.", "Knowledge map, notes, prompts, review schedule, retention checks, and iteration log"),
        ("Twelve-week learning program", "Plan, execute, and evaluate a demanding independent learning objective.", "Diagnostic, dependency plan, weekly evidence, feedback, assessments, and retrospective"),
        ("Longitudinal learning capstone", "Demonstrate durable mastery and transfer across a year-long interdisciplinary question.", "Portfolio, spaced assessments, project artifacts, mentor feedback, synthesis, and oral defense"),
    ],
    "Life-Skills": [
        ("Household operating system", "Create safe, repeatable routines for documents, food, cleaning, maintenance, schedules, and emergencies.", "Inventories, checklists, calendar, budget, emergency card, test record, and revision"),
        ("Relationship and work practicum", "Resolve a realistic communication, negotiation, career, or coordination challenge.", "Situation analysis, plan, role-play or real artifact, feedback, outcome record, and reflection"),
        ("Personal systems portfolio", "Integrate health, money, work, relationships, household, civic duty, and risk into a reviewable system.", "Policies, dashboards, contingency plans, decision journal, quarterly review, and improvement log"),
        ("Leadership and service capstone", "Lead a bounded community or organizational initiative with accountable outcomes.", "Charter, stakeholder agreement, plan, delivery evidence, financial record, impact evaluation, and defense"),
    ],
    "Linguistics": [
        ("Language observation notebook", "Collect and analyze safe examples of speech sounds, words, sentences, meanings, and variation.", "Consent-aware samples, transcriptions, glosses, structural analyses, and hypothesis log"),
        ("Grammar sketch", "Describe a bounded variety using phonological, morphological, syntactic, semantic, and sociolinguistic evidence.", "Corpus, speaker/context notes, paradigms, rules, examples, and descriptive report"),
        ("Corpus or language-change study", "Test a linguistic hypothesis on a documented dataset.", "Question, data and annotation scheme, analysis code, results, theory comparison, and paper"),
        ("Language documentation or theory capstone", "Conduct an original descriptive, experimental, computational, historical, or theoretical study.", "Ethics plan, corpus/materials, reproducible analysis, grammar or paper, archive plan, and defense"),
    ],
    "Literature": [
        ("Close-reading portfolio", "Develop several interpretations from formal details while distinguishing evidence from impression.", "Annotated passages, three close readings, alternative reading, revision, and oral discussion"),
        ("Comparative literature essay", "Compare works across genre, period, language, or culture using an explicit method.", "Question, text matrix, contextual sources, substantial essay, counterreading, and revision memo"),
        ("Annotated world-literature anthology", "Curate a transhistorical or transcultural question without erasing translation and power.", "Selection rationale, permissions/status log, annotations, introduction, design, and reader testing"),
        ("Literary research or translation capstone", "Produce an original critical study, scholarly edition, or translation with commentary.", "Proposal, bibliography, sustained work, notes, methodology, public presentation, and defense"),
    ],
    "Logic": [
        ("Argument reconstruction portfolio", "Extract, standardize, map, and evaluate arguments from everyday and public discourse.", "Ten reconstructions, validity/strength tests, ambiguity notes, counterexamples, and corrections"),
        ("Formal proof portfolio", "Translate and prove claims across propositional, predicate, modal, or inductive systems.", "Symbolizations, truth or model analyses, natural-deduction proofs, metacommentary, and oral checks"),
        ("Reasoning audit", "Audit a consequential argument, model, policy, or decision for formal and informal failures.", "Argument graph, evidence appraisal, probabilistic analysis, fallacy diagnosis, repair, and briefing"),
        ("Advanced logic inquiry", "Investigate a result or application in metatheory, computation, decision, or philosophical logic.", "Problem statement, formal development, proofs or implementation, literature comparison, and defense"),
    ],
    "Mathematics": [
        ("Quantitative modeling notebook", "Translate several everyday situations into arithmetic, algebraic, geometric, and functional models.", "Assumptions, representations, solutions, unit checks, error analysis, and explanations"),
        ("Proof and computation portfolio", "Solve and prove connected results across discrete mathematics, calculus, and linear algebra.", "Definitions, conjectures, proofs, computations, counterexamples, and oral proof checks"),
        ("Advanced mathematical model", "Use analysis, algebra, geometry, optimization, or differential equations on a substantial problem.", "Literature orientation, derivation, proof, computation, validation, and exposition"),
        ("Theorem or mathematical-science capstone", "Develop an original theorem, counterexample, model, or rigorous synthesis.", "Proposal, research notebook, formal results, reproducible computation, paper, seminar, and defense"),
    ],
    "Music": [
        ("Listening and musicianship journal", "Connect repeated listening with rhythm, melody, harmony, form, timbre, and historical context.", "Listening maps, transcriptions, exercises, short performance, and reflection"),
        ("Performance or composition set", "Prepare a coherent short program or composition through analysis, practice, feedback, and revision.", "Scores or plan, rehearsal log, analysis, recording, audience notes, and self-critique"),
        ("Produced musical work", "Create and present a technically controlled performance, composition, arrangement, or production.", "Research, drafts, session files, final work, production notes, rights log, and presentation"),
        ("Recital or music-research capstone", "Deliver an expert performance, composition portfolio, edition, technology system, or scholarly study.", "Proposal, sustained portfolio, public event or paper, documentation, critical essay, and defense"),
    ],
    "Philosophy": [
        ("Argument map and dialogue", "Reconstruct a philosophical dispute charitably and test its premises, inferences, and implications.", "Text notes, argument maps, objections, revised positions, dialogue, and reflection"),
        ("Defended position paper", "Develop and revise a position in epistemology, metaphysics, ethics, mind, science, or politics.", "Question, literature map, thesis, argument, strongest objection, reply, and oral examination"),
        ("Advanced philosophical inquiry", "Compare traditions or develop an original argument with conceptual and historical precision.", "Research essay, formal or conceptual analysis, counterexamples, peer reviews, and revision"),
        ("Philosophy thesis and defense", "Produce a substantial original contribution or synthesis that survives expert objection.", "Proposal, bibliography, thesis, response-to-reviewers, public lecture, and oral defense"),
    ],
    "Physics": [
        ("Measurement and model lab", "Measure a familiar physical system, model it, and explain disagreement between prediction and data.", "Risk check, apparatus diagram, raw data, derivation, uncertainty, residuals, and report"),
        ("Experimental physics investigation", "Design an experiment spanning mechanics, waves, thermodynamics, electricity, or optics.", "Question, model, calibration, protocol, notebook, analysis, and poster defense"),
        ("Computational modern-physics study", "Simulate or analyze a nonlinear, quantum, statistical, relativistic, or continuum system.", "Derivation, code, verification tests, parameter study, physical interpretation, and paper"),
        ("Independent physics inquiry", "Conduct an original experimental, theoretical, or computational investigation.", "Proposal, literature review, safety review, notebook/repository, results, paper, and defense"),
    ],
    "Political-Science": [
        ("Institution comparison", "Compare how two political institutions allocate power, representation, accountability, and rights.", "Institution maps, constitutional or source evidence, comparison table, causal cautions, and briefing"),
        ("Policy memorandum", "Analyze a public problem through institutions, stakeholders, evidence, values, and implementation.", "Problem definition, stakeholder map, evidence appraisal, options, recommendation, and oral briefing"),
        ("Political simulation and analysis", "Model an election, negotiation, conflict, coalition, or policy process and evaluate the model.", "Rules, data, scenario runs, actor strategies, outcome analysis, limitations, and presentation"),
        ("Independent political research", "Answer an original comparative, theoretical, behavioral, policy, or international-relations question.", "Proposal, literature review, design, evidence/code, paper, public brief, and defense"),
    ],
    "Psychology": [
        ("Claim and replication audit", "Evaluate a popular psychological claim against measurement, design, statistics, and replication evidence.", "Claim trace, construct map, study appraisals, effect interpretation, and public correction"),
        ("Ethical behavioral study", "Design and pilot a low-risk observational, survey, or experimental study.", "Ethics protocol, operationalization, materials, pilot data, analysis, and debrief"),
        ("Intervention evaluation", "Evaluate a developmental, educational, organizational, social, or clinical intervention without overclaiming.", "Theory, evidence review, design, measurement plan, simulated or real analysis, and report"),
        ("Independent psychological research", "Complete a preregistered replication, meta-analysis, model, or supervised empirical study.", "Ethics approval, preregistration, materials, data/code, paper, and oral defense"),
    ],
    "Research": [
        ("Reproducibility audit", "Attempt to reconstruct the question, evidence, analysis, and claims of one published study.", "Study map, data/code audit, reproduced result or obstacle log, discrepancy report, and reflection"),
        ("Preregistered pilot study", "Design and execute a small ethical quantitative, qualitative, historical, or mixed-method pilot.", "Question, protocol, preregistration, materials, evidence, analysis, and limitations"),
        ("Integrated research project", "Complete a substantial study with justified method, transparent evidence, and peer revision.", "Proposal, review, approvals, data/source corpus, analysis, paper, and response to review"),
        ("Publication-ready capstone", "Produce a defensible original contribution and a complete reproducibility or source package.", "Registered plan, full study, artifact package, manuscript, public presentation, and oral defense"),
    ],
    "Security": [
        ("Personal threat model", "Model threats to a person's devices, accounts, data, safety, and recovery without collecting secrets.", "Asset map, adversaries, attack paths, controls, recovery drill, and residual-risk statement"),
        ("Defensive systems laboratory", "Harden and monitor an isolated system, then verify controls against safe test cases.", "Authorization statement, lab diagram, baseline, configuration, logs, tests, and incident report"),
        ("Red-team/blue-team exercise", "Assess a deliberately vulnerable scoped environment and improve its resilience.", "Rules of engagement, threat model, findings, evidence, fixes, retest, and executive briefing"),
        ("Authorized security capstone", "Complete a security assessment, protocol study, resilience program, or defensive research project.", "Written authorization, plan, isolated evidence, report, remediation, disclosure record, and defense"),
    ],
    "Sociology-and-Anthropology": [
        ("Social observation notebook", "Observe a public social setting or existing record using explicit ethics and reflexivity.", "Field protocol, notes, positionality statement, coding, pattern claims, and alternative interpretation"),
        ("Interview or survey inquiry", "Investigate a bounded social question with appropriate sampling and consent.", "Question, ethics materials, instrument, sample analysis, themes/statistics, and methods reflection"),
        ("Institution or community study", "Analyze culture, structure, inequality, networks, and change in one institution or community.", "Theory map, mixed evidence, field or archival record, analysis, community-facing output, and critique"),
        ("Independent social research", "Conduct an original ethnographic, comparative, historical, network, or demographic study.", "Approvals, proposal, evidence corpus, analysis, substantial report, return-of-results plan, and defense"),
    ],
    "Statistics-and-Data": [
        ("Data-quality audit", "Take a messy dataset from provenance through cleaning, description, visualization, and limitation.", "Data sheet, cleaning log, reproducible notebook, graphics, anomaly analysis, and short briefing"),
        ("Inference report", "Answer a real question with probability, estimation, testing, modeling, and diagnostics.", "Question, design, model, code, uncertainty, diagnostics, interpretation, and reproducibility package"),
        ("Causal and predictive comparison", "Compare predictive performance with a defensible causal analysis on the same domain.", "DAG, identification argument, feature/model pipeline, validation, robustness checks, and paper"),
        ("Independent statistical study", "Develop or apply advanced statistical methodology in a transparent research project.", "Proposal, simulation plan, data/code, theory or derivation, results, paper, and oral defense"),
    ],
    "Systems-Science": [
        ("Feedback map", "Explain a persistent problem using boundaries, stocks, flows, feedback, delay, and unintended effects.", "Boundary statement, causal-loop diagram, stock-flow sketch, evidence, and leverage hypothesis"),
        ("Dynamic-system simulation", "Build, calibrate, and challenge a model of a social, ecological, technical, or economic system.", "Model specification, code, validation, scenarios, sensitivity analysis, and stakeholder explanation"),
        ("Systems intervention portfolio", "Design a portfolio of interventions robust to uncertainty, adaptation, and distributional effects.", "System map, scenario set, option interactions, risk analysis, monitoring design, and decision memo"),
        ("Complex-systems capstone", "Conduct an original modeling, governance, resilience, or transformation project.", "Proposal, model and evidence, intervention, validation, implementation pathway, paper, and defense"),
    ],
    "Theology-and-Comparative-Religion": [
        ("Sacred-text comparison", "Compare selected passages with attention to genre, canon, interpretation, practice, and translation.", "Context notes, passage annotations, interpretive comparison, terminology, and reflexive caution"),
        ("Lived-religion study", "Study a ritual, community, institution, or material practice ethically and without essentializing.", "Consent plan, observation or source record, emic/etic distinction, analysis, and community-sensitive output"),
        ("Doctrinal and historical inquiry", "Compare a major theological question across traditions and historical settings.", "Primary and secondary source dossier, concept map, sustained essay, objections, and oral examination"),
        ("Comparative religion capstone", "Complete an original textual, historical, ethnographic, philosophical, or theological study.", "Proposal, language/method plan, source corpus, substantial study, positionality statement, and defense"),
    ],
    "Writing": [
        ("Revision portfolio", "Transform several weak drafts by diagnosing purpose, audience, structure, evidence, style, and correctness.", "Before/after drafts, annotations, feedback, revision decisions, and reflective letter"),
        ("Long-form argument", "Research, draft, test, and revise a substantial evidence-based argument for a real audience.", "Question, source trail, outline, draft, peer review, final essay, and fact-check"),
        ("Publication package", "Produce a coherent set of academic, public, and digital texts from one research base.", "Research dossier, three genre adaptations, editorial workflow, accessibility check, and submission plan"),
        ("Major writing capstone", "Complete and defend a book-length, thesis-length, journalistic, technical, or literary work.", "Proposal, sustained manuscript, source/rights record, editorial reviews, final publication artifact, and defense"),
    ],
}

mode_by_folder = {
    "Architecture-and-Design": "design review, portfolio, presentation",
    "Art": "portfolio, performance, oral exam",
    "Artificial-Intelligence": "programming assignment, research, oral exam",
    "Astronomy": "problem set, research, presentation",
    "Biology": "laboratory, research, oral exam",
    "Business-and-Management": "case analysis, project, presentation",
    "Chemistry": "problem set, laboratory, oral exam",
    "Cognitive-Science": "case analysis, research, oral exam",
    "Communication": "performance, presentation, oral exam",
    "Computer-Science": "programming assignment, written exam, oral exam",
    "Earth-Climate-and-Energy": "fieldwork, case analysis, research",
    "Economics": "problem set, case analysis, essay",
    "Education": "performance, portfolio, research",
    "Engineering": "design review, laboratory, presentation",
    "Finance": "problem set, case analysis, presentation",
    "Foundations": "written exam, performance, oral exam",
    "Geography": "fieldwork, portfolio, presentation",
    "Health-and-Medicine": "case analysis, written exam, oral exam",
    "History": "essay, research, oral exam",
    "Islamic-Studies": "essay, research, oral exam",
    "Law": "case analysis, essay, oral exam",
    "Learning": "portfolio, case analysis, oral exam",
    "Life-Skills": "performance, portfolio, simulation",
    "Linguistics": "problem set, fieldwork, research",
    "Literature": "essay, research, oral exam",
    "Logic": "proof, written exam, oral exam",
    "Mathematics": "problem set, proof, oral exam",
    "Music": "performance, portfolio, oral exam",
    "Philosophy": "essay, oral exam, research",
    "Physics": "problem set, laboratory, oral exam",
    "Political-Science": "case analysis, essay, presentation",
    "Psychology": "case analysis, research, written exam",
    "Research": "research, presentation, oral exam",
    "Security": "laboratory, case analysis, oral exam",
    "Sociology-and-Anthropology": "fieldwork, essay, research",
    "Statistics-and-Data": "programming assignment, problem set, research",
    "Systems-Science": "simulation, case analysis, presentation",
    "Theology-and-Comparative-Religion": "essay, research, oral exam",
    "Writing": "essay, portfolio, presentation",
}

condition_by_folder = {
    "Architecture-and-Design": "Open-resource design period; retain iterations; 12-minute critique",
    "Art": "Open-resource studio period; process record and live or recorded critique required",
    "Artificial-Intelligence": "Reproducible repository; fixed test set; assistance disclosure; live modification",
    "Astronomy": "Open-resource analysis; calculations or code retained; 10-minute oral check",
    "Biology": "Approved low-risk protocol; notebook and raw data retained; no unsupervised hazardous work",
    "Business-and-Management": "Open case packet; individual decision memo; team contributions disclosed",
    "Chemistry": "Approved supervised protocol; PPE and waste rules mandatory; notebook retained",
    "Cognitive-Science": "Open-resource; ethics-approved or simulated evidence; model and limitations defended",
    "Communication": "Prepared performance for a named audience; recording or observer evidence; accessibility required",
    "Computer-Science": "Version-controlled repository; automated tests; dependency disclosure; live code explanation",
    "Earth-Climate-and-Energy": "Open data and sources; uncertainty and justice analysis; reproducible calculations",
    "Economics": "Open-resource data/model task plus time-boxed individual policy explanation",
    "Education": "Transparent learner context; consent for observations; artifacts and feedback retained",
    "Engineering": "Documented constraints; supervised testing; safety review; design review with questions",
    "Finance": "Open public data; assumptions and conflicts disclosed; no personalized regulated advice",
    "Foundations": "Mixed closed-note check and open-resource practical task; accessibility tools permitted",
    "Geography": "Documented data/field provenance; privacy-preserving maps; reproducible spatial workflow",
    "Health-and-Medicine": "Fictional or de-identified case; open authoritative references; no independent diagnosis",
    "History": "Open-source dossier; traceable citations; 15-minute defense of source choices",
    "Islamic-Studies": "Open primary/secondary sources; tradition and translation identified; oral source defense",
    "Law": "Declared jurisdiction and date; open authorities; citation verification; oral questioning",
    "Learning": "Longitudinal evidence permitted; predeclared measures; reflection cannot replace performance",
    "Life-Skills": "Safe real-world or high-fidelity simulation; private data may be redacted; observer check",
    "Linguistics": "Open-resource analysis; consent and anonymization for speaker data; examples retained",
    "Literature": "Open primary texts and scholarship; edition/translation cited; oral passage analysis",
    "Logic": "Time-boxed individual proof plus open-resource application; oral proof reconstruction",
    "Mathematics": "Time-boxed individual problems plus open-resource investigation; oral proof check",
    "Music": "Prepared performance or portfolio; practice record; rights and borrowed material disclosed",
    "Philosophy": "Open-source essay plus oral objections; argument map and revisions retained",
    "Physics": "Supervised safe experiment or verified simulation; notebook, units, and uncertainty required",
    "Political-Science": "Open evidence packet; methods and values separated; individual oral briefing",
    "Psychology": "Ethics-approved, public, or simulated data; constructs and uncertainty explicitly defended",
    "Research": "Predeclared protocol; complete provenance trail; peer review and oral defense",
    "Security": "Written authorization and isolated environment mandatory; no real-target exploitation",
    "Sociology-and-Anthropology": "Ethics and consent required; positionality and data protection documented",
    "Statistics-and-Data": "Reproducible notebook; held-out or unseen data; assumptions and diagnostics defended",
    "Systems-Science": "Open-resource model; boundary and sensitivity audit; stakeholder-facing presentation",
    "Theology-and-Comparative-Religion": "Open primary/secondary sources; positionality and internal diversity explicit",
    "Writing": "Open-source drafting; complete revision and citation trail; genre-appropriate presentation",
}

safety_by_folder = {
    "Architecture-and-Design": "Accessibility, structural plausibility, privacy, community impact, and lifecycle review are mandatory.",
    "Art": "Document consent, cultural-property context, image rights, hazardous materials, and representation choices.",
    "Artificial-Intelligence": "Use lawful data; document privacy, bias, misuse, security, labor, and human-oversight risks.",
    "Astronomy": "Protect night vision and equipment; never observe the Sun without certified methods.",
    "Biology": "Use approved low-risk organisms/data only; require biosafety, welfare, consent, and ecological review.",
    "Business-and-Management": "Protect commercial and personal data; disclose conflicts; assess labor, consumer, and environmental harms.",
    "Chemistry": "A competent supervisor must approve hazards, quantities, PPE, ventilation, storage, and disposal before work.",
    "Cognitive-Science": "Use consent, minimal risk, privacy, debriefing, and non-clinical interpretation.",
    "Communication": "Avoid deception, harassment, manipulation, privacy invasion, and inaccessible communication.",
    "Computer-Science": "Use lawful data and systems; complete privacy, security, accessibility, licensing, and misuse review.",
    "Earth-Climate-and-Energy": "Review field safety, community consent, environmental disturbance, justice, and dual-use implications.",
    "Economics": "Disclose values, distributional effects, conflicts, data limitations, and risks of policy experimentation.",
    "Education": "Protect learners, privacy, consent, access, and power-sensitive participation; no harmful withholding.",
    "Engineering": "Safety case, applicable standards, failure containment, environmental impact, and user consent are mandatory.",
    "Finance": "Disclose uncertainty and conflicts; protect data; prohibit deceptive claims and unauthorized handling of funds.",
    "Foundations": "Protect personal information, physical safety, consent, and legal boundaries in every practical task.",
    "Geography": "Protect sensitive locations and identities; obtain field consent and document representational bias.",
    "Health-and-Medicine": "No unsupervised diagnosis or treatment; protect confidentiality and escalate emergencies to qualified care.",
    "History": "Respect archives, communities, trauma, privacy, cultural property, and uncertainty in attribution.",
    "Islamic-Studies": "Represent internal diversity, disclose translation and sectarian standpoint, and handle sacred materials respectfully.",
    "Law": "State jurisdiction; preserve confidentiality; avoid unauthorized practice; disclose adverse authority.",
    "Learning": "Avoid coercive self-experimentation, sleep deprivation, privacy violations, and measures that distort learning.",
    "Life-Skills": "Use simulations when real action risks health, money, rights, relationships, or emergency response.",
    "Linguistics": "Obtain speaker consent, anonymize sensitive data, share benefits, and avoid deficit framing.",
    "Literature": "Respect copyright, translation, attribution, trauma, cultural context, and contested representation.",
    "Logic": "Do not use analytic skill to facilitate fraud, coercion, discriminatory profiling, or deceptive persuasion.",
    "Mathematics": "Disclose assumptions and downstream risks when models affect people, safety, finance, or policy.",
    "Music": "Protect hearing, obtain performance consent, clear rights, and attribute traditions and collaborators.",
    "Philosophy": "Represent opponents charitably, distinguish critique from harm, and disclose real conflicts or vulnerable participants.",
    "Physics": "Require supervision for radiation, high voltage, pressure, vacuum, lasers, heat, cryogens, and projectiles.",
    "Political-Science": "Protect participants and sensitive political data; avoid intervention in live processes without approval.",
    "Psychology": "Human-participant ethics, consent, privacy, debriefing, and non-diagnostic boundaries are mandatory.",
    "Research": "Obtain all human, animal, biosafety, data, archival, and community approvals before collection.",
    "Security": "Written authorization, scope, isolation, data minimization, safe evidence handling, and disclosure rules are non-negotiable.",
    "Sociology-and-Anthropology": "Consent, reciprocity, positionality, confidentiality, community risk, and return of results are mandatory.",
    "Statistics-and-Data": "Protect privacy; document provenance, missingness, bias, uncertainty, and harmful downstream use.",
    "Systems-Science": "Document boundary choices, affected groups, distributional effects, intervention risk, and model misuse.",
    "Theology-and-Comparative-Religion": "Respect participants and sacred materials; preserve internal diversity and disclose positionality.",
    "Writing": "Fact-check, cite, protect sources, clear rights, disclose assistance, and minimize foreseeable publication harm.",
}

scale_info = {
    "S": ("Small", "2–8 hours", "Beginner"),
    "M": ("Medium", "15–40 hours", "Intermediate"),
    "L": ("Large", "60–150 hours", "Advanced"),
    "C": ("Capstone", "150–400 hours", "Expert"),
}

milestones = {
    "S": "1. question and evidence plan; 2. first artifact; 3. feedback check; 4. corrected submission",
    "M": "1. proposal; 2. method/design review; 3. pilot or draft; 4. critique; 5. revised delivery",
    "L": "1. charter; 2. literature/context review; 3. prototype or analysis; 4. midpoint review; 5. validation; 6. public delivery",
    "C": "1. prospectus; 2. ethics/method approval; 3. milestone defense; 4. complete draft/artifact; 5. external review; 6. final defense",
}


def parse_roadmap(path: Path) -> list[dict[str, str]]:
    units = []
    pattern = re.compile(
        r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
        r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert);",
    )
    for line in path.read_text().splitlines():
        match = pattern.match(line)
        if match:
            units.append(match.groupdict())
    return units


def parse_syllabus(path: Path) -> dict[str, dict[str, str]]:
    records = {}
    text = path.read_text()
    for line in text.splitlines():
        if not line.startswith("| `"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        match = re.match(r"`([^`]+)`\s+(.+)", cells[0])
        if match and len(cells) >= 6:
            records[match.group(1)] = {
                "title": match.group(2),
                "lessons": cells[2],
                "outcomes": cells[3],
                "mastery": cells[5],
            }
    for section in re.split(r"(?=^## `)", text, flags=re.M):
        heading = re.match(r"## `([^`]+)` — (.+)", section)
        lessons = re.search(r"^\*\*Lessons:\*\*\s*(.+?)(?:\s{2})?$", section, flags=re.M)
        outcomes = re.search(r"^\*\*Learning outcomes:\*\*\s*(.+?)(?:\s{2})?$", section, flags=re.M)
        mastery = re.search(r"^\*\*Mastery:\*\*\s*(.+?)(?:\s{2})?$", section, flags=re.M)
        if heading and lessons and outcomes and mastery:
            records[heading.group(1)] = {
                "title": heading.group(2),
                "lessons": lessons.group(1),
                "outcomes": outcomes.group(1),
                "mastery": mastery.group(1),
            }
    return records


def clean(value: str) -> str:
    return value.replace("|", "&#124;").replace("\n", " ").strip()


def unit_ids(units: list[dict[str, str]], difficulty: str) -> list[str]:
    selected = [unit["id"] for unit in units if unit["difficulty"] == difficulty]
    if selected:
        return selected
    if difficulty == "Expert":
        selected = [unit["id"] for unit in units if unit["difficulty"] == "Advanced"]
        if selected:
            return selected
        selected = [unit["id"] for unit in units if unit["difficulty"] == "Intermediate"]
        if selected:
            return selected
    return [unit["id"] for unit in units]


def build_projects(folder: str, units: list[dict[str, str]], syllabus: dict[str, dict[str, str]]) -> str:
    prefix = units[0]["id"].split("-")[0]
    themes = project_themes[folder]
    lines = [
        f"# {folder.replace('-', ' ')} Projects",
        "",
        "These projects convert unit mastery into cumulative, inspectable work. Complete",
        "the small and medium projects before attempting the large project; the capstone",
        "presumes the discipline's Core and the advanced units relevant to its question.",
        "When several units map to the same small or medium brief, repeat the brief with a",
        "new case or combine the required labeled sections into one coherent portfolio.",
        "",
        "## Common analytic rubric",
        "",
        "| Criterion | Weight | Mastery evidence |",
        "|---|---:|---|",
        "| Accuracy and reasoning | 40% | Claims, calculations, interpretations, and decisions are correct and justified |",
        "| Method and evidence | 25% | Methods fit the question; assumptions, sources, data, and uncertainty are traceable |",
        "| Artifact or performance | 20% | The result is complete, functional, usable, and tested against its purpose |",
        "| Communication and reflection | 15% | The learner explains choices, limitations, criticism, and consequential revisions |",
        "",
        "Mastery requires **75/100**, no criterion below **60%**, and passage of every",
        "non-compensable safety, ethics, attribution, and validity requirement.",
        "",
    ]
    for code, theme in zip(("S", "M", "L", "C"), themes):
        scale, hours, difficulty = scale_info[code]
        covered = unit_ids(units, difficulty)
        prerequisites = ", ".join(f"`{unit_id}`" for unit_id in covered)
        lines += [
            f"## `{prefix}.PRJ.{code}` — {theme[0]}",
            "",
            "| Field | Specification |",
            "|---|---|",
            f"| Scale | **{scale}** · {hours} |",
            f"| Prerequisites | {prerequisites} |",
            f"| Purpose | Demonstrate transfer from the {difficulty.lower()} unit cluster to one coherent, inspectable result. |",
            f"| Brief | {theme[1]} |",
            f"| Deliverables | {theme[2]} |",
            f"| Milestones | {milestones[code]} |",
            "| Constraints | Declare audience, tools, sources, collaborators, AI assistance, budget, and time; preserve intermediate evidence. |",
            "| Evidence | Final artifact plus dated process evidence, feedback received, validation against criteria, and a concise authorship defense. |",
            "| Rubric | Apply the common analytic rubric above; all four criteria and the criterion floor are binding. |",
            f"| Safety and ethics | {safety_by_folder[folder]} |",
            "| Extension | Repeat under a harder constraint, independent dataset/source set, rival method, or external stakeholder review. |",
            "",
        ]
    lines += [
        "## Unit contribution matrix",
        "",
        "| Unit | Primary project | Contribution | Required artifact |",
        "|---|---|---|---|",
    ]
    scale_for_difficulty = {
        "Beginner": "S",
        "Intermediate": "M",
        "Advanced": "L",
        "Expert": "C",
    }
    for unit in units:
        code = scale_for_difficulty[unit["difficulty"]]
        outcome = syllabus[unit["id"]]["outcomes"].split(";")[0].strip()
        lines.append(
            f"| `{unit['id']}` {clean(unit['title'])} | `{prefix}.PRJ.{code}` | "
            f"Apply this unit to a project decision, model, interpretation, or production step. | "
            f"A labeled artifact section demonstrating: {clean(outcome)}. |"
        )
    lines += [
        "",
        "## Portfolio rule",
        "",
        "Retain proposals, drafts, calculations, source/data records, feedback, revisions,",
        "and final artifacts. A polished final product without inspectable process evidence",
        "does not establish independent mastery.",
        "",
    ]
    return "\n".join(lines)


def build_assessment(folder: str, units: list[dict[str, str]], syllabus: dict[str, dict[str, str]]) -> str:
    lines = [
        f"# {folder.replace('-', ' ')} Assessment",
        "",
        "Assessment is criterion-referenced and aligned to the observable outcomes in",
        "[the syllabus](syllabus.md). Formative work is diagnostic; only the declared",
        "summative evidence establishes unit mastery.",
        "",
        "## Mastery decision",
        "",
        "| Rule | Requirement |",
        "|---|---|",
        "| Overall threshold | At least 75/100 |",
        "| Criterion floor | At least 60% in accuracy, method/evidence, artifact quality, and communication/reflection |",
        "| Non-compensable checks | Safety, ethics, attribution, authorship, and validity must all pass |",
        "| Retention check | A shorter parallel task 4–8 weeks later; failure returns the unit to review |",
        "| Reassessment limit | New parallel evidence after error analysis and targeted practice; never the unchanged task |",
        "",
        "## Unit assessment matrix",
        "",
        "| Unit | Formative check | Summative task | Mode | Conditions | Pass evidence | Reassessment |",
        "|---|---|---|---|---|---|---|",
    ]
    for unit in units:
        record = syllabus[unit["id"]]
        lessons = [
            re.sub(r"^\d+\.\s*", "", lesson.strip()).rstrip(".")
            for lesson in record["lessons"].split(";")
        ]
        outcomes = [outcome.strip().rstrip(".") for outcome in record["outcomes"].split(";")]
        mastery = record["mastery"].replace("☐", "").replace("- [ ]", "")
        formative = (
            f"From memory, map {lessons[0]} to {lessons[min(1, len(lessons) - 1)]}; "
            "complete one representative item, compare with criteria, and annotate the error."
        )
        numbered_outcomes = "; ".join(
            f"({number}) {outcome[:1].lower() + outcome[1:] if outcome else outcome}"
            for number, outcome in enumerate(outcomes, 1)
        )
        summative = (
            f"On an unfamiliar case or source, submit evidence that can: {numbered_outcomes} "
            "Then justify method choice, test one limitation, and answer a transfer question."
        )
        evidence = (
            f"{mastery}; accurate unfamiliar-case performance; traceable reasoning; "
            "no critical misconception or non-compensable failure."
        )
        reassessment = (
            "Submit a cause-of-error analysis, complete targeted practice, solve a new "
            "parallel task, and defend the corrected component orally."
        )
        lines.append(
            f"| `{unit['id']}` {clean(unit['title'])} | {clean(formative)} | "
            f"{clean(summative)} | {mode_by_folder[folder]} | "
            f"{condition_by_folder[folder]} | {clean(evidence)} | {reassessment} |"
        )
    lines += [
        "",
        "## Oral examination protocol",
        "",
        "Use three prompts: explain one submitted choice, handle one counterexample or",
        "changed condition, and identify one limitation. The examiner records criterion-level",
        "evidence rather than awarding marks for confidence, accent, speed, or rhetorical polish.",
        "",
        "## Written examination protocol",
        "",
        "Sample prerequisite knowledge, representative methods, an unfamiliar transfer task,",
        "and error diagnosis. Publish permitted resources, time, tools, and marking criteria",
        "before the attempt. Never let easily scored recall dominate outcomes requiring",
        "analysis, proof, evaluation, design, creation, or performance.",
        "",
        "## Integrity and accessibility",
        "",
        "- Cite sources, data, code, collaborators, and AI assistance.",
        "- Preserve drafts, calculations, notebooks, commits, or rehearsal records.",
        "- Replace an access barrier with an equivalent format only when it preserves the",
        "  construct being assessed.",
        "- Use a live explanation or modification to resolve authorship uncertainty.",
        "",
    ]
    return "\n".join(lines)


def update_readme(path: Path) -> None:
    text = path.read_text()
    if "[Projects](projects.md)" in text:
        return
    marker = "- [Glossary](glossary.md)"
    replacement = f"{marker}\n- [Projects](projects.md)\n- [Assessment](assessment.md)"
    path.write_text(text.replace(marker, replacement))


def main() -> None:
    folders = sorted(path.parent.name for path in curriculum.glob("*/roadmap.md"))
    missing_themes = sorted(set(folders) - set(project_themes))
    missing_modes = sorted(set(folders) - set(mode_by_folder))
    missing_conditions = sorted(set(folders) - set(condition_by_folder))
    missing_safety = sorted(set(folders) - set(safety_by_folder))
    if missing_themes or missing_modes or missing_conditions or missing_safety:
        raise SystemExit(
            f"Configuration mismatch: themes={missing_themes}, modes={missing_modes}, "
            f"conditions={missing_conditions}, safety={missing_safety}"
        )
    for folder in folders:
        directory = curriculum / folder
        units = parse_roadmap(directory / "roadmap.md")
        syllabus = parse_syllabus(directory / "syllabus.md")
        if set(unit["id"] for unit in units) != set(syllabus):
            raise SystemExit(f"Roadmap/syllabus mismatch in {folder}")
        (directory / "projects.md").write_text(build_projects(folder, units, syllabus))
        (directory / "assessment.md").write_text(build_assessment(folder, units, syllabus))
        update_readme(directory / "README.md")


if __name__ == "__main__":
    main()
