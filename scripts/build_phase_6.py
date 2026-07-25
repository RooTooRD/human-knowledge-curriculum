#!/usr/bin/env python

from collections import defaultdict
from pathlib import Path
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"

profiles = {
    "Architecture-and-Design": (
        "Architecture and Design",
        "Architecture and design turn human purposes, environmental conditions, materials, and cultural meanings into usable form. They educate judgment about the spaces, products, and systems that quietly organize everyday life.",
        "spatial synthesis, iterative design, representation, and evaluation under constraints",
        "built environments, artifacts, services, users, and material culture",
    ),
    "Art": (
        "Art",
        "Art develops visual literacy, disciplined making, historical awareness, and the capacity to interpret form without reducing it to decoration. It reveals how images and objects preserve, contest, and reshape human experience.",
        "visual analysis, material practice, composition, and critical interpretation",
        "images, objects, aesthetic experience, patronage, and visual cultures",
    ),
    "Artificial-Intelligence": (
        "Artificial Intelligence",
        "Artificial intelligence explains systems that perceive, predict, generate, plan, and act, while exposing the limits and social consequences of computational judgment. Educated use requires technical literacy, evaluation, governance, and the ability to refuse unjustified automation.",
        "machine learning, search, representation, evaluation, and sociotechnical governance",
        "intelligent systems, automated decisions, models, data, and human agency",
    ),
    "Astronomy": (
        "Astronomy",
        "Astronomy situates Earth and human history within a measurable universe. It joins observation, physics, computation, and inference to explain planets, stars, galaxies, cosmic history, and the conditions for life.",
        "remote observation, physical inference, scale reasoning, and cosmological modeling",
        "planetary systems, stars, galaxies, cosmic history, and astrobiological conditions",
    ),
    "Biology": (
        "Biology",
        "Biology explains living organization from molecules and cells to organisms, evolution, and ecosystems. It is indispensable for understanding health, agriculture, biotechnology, biodiversity, and humanity's place in nature.",
        "evolutionary reasoning, experiment, comparative analysis, and multiscale living-systems modeling",
        "cells, organisms, heredity, evolution, ecosystems, and biotechnology",
    ),
    "Business-and-Management": (
        "Business and Management",
        "Business and management study how people coordinate resources, information, incentives, and responsibility to create value through organizations. They help an educated person evaluate enterprises without confusing efficiency, profit, legality, and social value.",
        "organizational analysis, accounting, operations, strategy, and responsible execution",
        "firms, teams, ventures, value creation, stakeholders, and organizational change",
    ),
    "Chemistry": (
        "Chemistry",
        "Chemistry explains how composition, structure, energy, and reaction produce the material world. It connects fundamental physics to biology, medicine, environment, manufacturing, food, and modern materials.",
        "molecular explanation, quantitative experiment, synthesis, analysis, and laboratory reasoning",
        "atoms, molecules, reactions, materials, energy transformations, and chemical environments",
    ),
    "Cognitive-Science": (
        "Cognitive Science",
        "Cognitive science integrates computation, psychology, neuroscience, linguistics, and philosophy to investigate mind and intelligence. It helps distinguish useful models of cognition from metaphors that merely redescribe behavior.",
        "computational modeling, cognitive experimentation, representational analysis, and interdisciplinary synthesis",
        "perception, memory, language, reasoning, consciousness, and intelligent behavior",
    ),
    "Communication": (
        "Communication",
        "Communication develops the ability to listen, explain, persuade, deliberate, negotiate, and interpret media across differences. It makes knowledge socially usable and helps expose manipulation, misunderstanding, and failures of common ground.",
        "audience analysis, rhetoric, dialogue, presentation, negotiation, and media criticism",
        "messages, audiences, relationships, institutions, media, and public deliberation",
    ),
    "Computer-Science": (
        "Computer Science",
        "Computer science explains computation as an idea, a machine, and an infrastructure. It enables people to design software and reason about algorithms, data, operating systems, databases, networks, and the limits of computability.",
        "abstraction, algorithm design, programming, systems analysis, and computational experimentation",
        "programs, algorithms, data structures, operating systems, databases, and networks",
    ),
    "Earth-Climate-and-Energy": (
        "Earth, Climate, and Energy",
        "Earth, climate, and energy study the coupled physical, chemical, biological, and human systems that sustain civilization. They are essential for reasoning about resources, hazards, climate change, energy transitions, and environmental responsibility.",
        "Earth-system observation, energy accounting, climate modeling, risk analysis, and scenario evaluation",
        "geosphere, atmosphere, oceans, climate, resources, hazards, and energy systems",
    ),
    "Economics": (
        "Economics",
        "Economics studies choice, production, exchange, institutions, distribution, growth, and instability under scarcity and power. It equips learners to analyze markets and policy while recognizing externalities, measurement limits, and competing accounts of welfare.",
        "incentive analysis, equilibrium and causal modeling, institutional comparison, and welfare evaluation",
        "households, firms, markets, public goods, inequality, development, and macroeconomic systems",
    ),
    "Education": (
        "Education",
        "Education studies how people learn, how teaching and assessment shape opportunity, and how institutions transmit knowledge and culture. It enables a lifelong learner to design instruction while questioning inequity, hidden curricula, and unsupported learning claims.",
        "learning design, formative assessment, curriculum alignment, teaching, and institutional evaluation",
        "learners, classrooms, curricula, assessment, educational systems, and human development",
    ),
    "Engineering": (
        "Engineering",
        "Engineering transforms scientific knowledge and human requirements into reliable systems under real constraints. It develops design judgment about safety, failure, uncertainty, cost, maintenance, sustainability, and responsibility.",
        "requirements analysis, modeling, prototyping, testing, optimization, and safety engineering",
        "structures, machines, circuits, processes, infrastructure, and engineered systems",
    ),
    "Finance": (
        "Finance",
        "Finance studies decisions across time under uncertainty: saving, borrowing, valuation, investment, risk, and institutional intermediation. It supports personal agency and public judgment while making leverage, incentives, and model risk visible.",
        "cash-flow reasoning, valuation, portfolio analysis, risk measurement, and institutional scrutiny",
        "household finances, assets, firms, markets, credit, uncertainty, and financial institutions",
    ),
    "Foundations": (
        "Foundations",
        "Foundations make the curriculum genuinely start from zero by establishing language, number, observation, digital operation, practical measurement, and civic orientation. They prevent later disciplines from hiding essential entry knowledge behind assumed schooling.",
        "basic literacy, numeracy, observation, digital operation, measurement, and self-orientation",
        "ordinary claims, quantities, texts, tools, places, institutions, and daily decisions",
    ),
    "Geography": (
        "Geography",
        "Geography explains how physical environments, human populations, economies, cultures, and political power are organized across space. It develops map literacy and scale-sensitive judgment about place, movement, territory, and uneven development.",
        "spatial reasoning, field observation, cartography, geographic information systems, and regional comparison",
        "places, landscapes, populations, movement, regions, territories, and spatial inequality",
    ),
    "Health-and-Medicine": (
        "Health and Medicine",
        "Health and medicine provide the literacy needed to understand bodies, disease, evidence, prevention, care systems, and public health. The subject supports informed decisions while preserving the boundary between education and licensed clinical practice.",
        "physiological reasoning, clinical evidence appraisal, risk communication, prevention, and public-health analysis",
        "human bodies, illness, diagnosis, treatment, prevention, care systems, and populations",
    ),
    "History": (
        "History",
        "History reconstructs change over time through critical use of incomplete and contested evidence. It gives institutions, ideas, sciences, religions, and identities the chronology and context without which the modern world becomes unintelligible.",
        "source criticism, chronology, contextualization, comparison, and causal narrative",
        "past societies, institutions, events, ideas, material remains, memory, and historical change",
    ),
    "Islamic-Studies": (
        "Islamic Studies",
        "Islamic Studies examines revelation, interpretation, law, theology, spirituality, intellectual traditions, societies, and civilizations on their own terms and through critical scholarship. It prevents both devotional commitment and academic distance from being mistaken for the only legitimate mode of inquiry.",
        "textual interpretation, source criticism, legal and theological reasoning, and civilizational history",
        "Qur'an, Sunnah, law, theology, spirituality, Muslim societies, and Islamic civilizations",
    ),
    "Law": (
        "Law",
        "Law studies how authoritative rules are made, interpreted, justified, enforced, and contested across jurisdictions. It enables citizens to reason about rights, duties, institutions, remedies, and constitutional order without confusing legal literacy with professional advice.",
        "doctrinal analysis, case reasoning, statutory interpretation, institutional comparison, and rights-based argument",
        "constitutions, statutes, cases, rights, duties, procedures, remedies, and legal institutions",
    ),
    "Learning": (
        "Learning",
        "Learning develops deliberate control over attention, memory, practice, feedback, planning, and self-correction. It turns the rest of the curriculum from a reading list into a sustainable system for durable knowledge and transfer.",
        "retrieval practice, metacognition, deliberate practice, planning, feedback, and self-regulation",
        "attention, memory, skill, misconceptions, study systems, motivation, and long-term development",
    ),
    "Life-Skills": (
        "Life Skills",
        "Life skills convert knowledge into everyday agency: health and safety, relationships, household competence, work, civic participation, leadership, and meaning. They make practical judgment an explicit object of education rather than an assumed by-product.",
        "practical planning, decision-making, relationship skills, leadership, and reflective action",
        "households, emergencies, careers, relationships, civic life, leadership, and vocation",
    ),
    "Linguistics": (
        "Linguistics",
        "Linguistics studies language as sound, structure, meaning, cognition, history, and social practice. It improves analysis of grammar and communication while challenging myths about correctness, language change, identity, and linguistic ability.",
        "phonological, grammatical, semantic, historical, sociolinguistic, and corpus analysis",
        "sounds, words, grammar, meaning, discourse, language change, variation, and multilingualism",
    ),
    "Literature": (
        "Literature",
        "Literature trains sustained attention to language, form, imagination, voice, and the lives of others across cultures and periods. It deepens interpretation while preserving the difference between textual evidence, historical context, and personal response.",
        "close reading, genre analysis, comparison, contextual interpretation, and literary creation",
        "poetry, narrative, drama, essays, oral traditions, translation, and world literary cultures",
    ),
    "Logic": (
        "Logic",
        "Logic clarifies what follows from what, how arguments fail, and where certainty ends. It supports proof, scientific inference, law, philosophy, computation, public reasoning, and resistance to persuasive error.",
        "argument reconstruction, deduction, induction, formalization, counterexample, and fallacy diagnosis",
        "claims, inferences, proofs, explanations, decisions, paradoxes, and formal systems",
    ),
    "Mathematics": (
        "Mathematics",
        "Mathematics develops exact reasoning about quantity, structure, space, change, uncertainty, and abstraction. It supplies models and proof methods used throughout science, engineering, computation, economics, and disciplined decision-making.",
        "proof, abstraction, quantitative modeling, calculation, optimization, and structural reasoning",
        "number, structure, space, change, symmetry, infinity, and mathematical models",
    ),
    "Music": (
        "Music",
        "Music develops attentive listening, embodied timing, performance, composition, analysis, and historical understanding. It reveals how patterned sound carries identity, ritual, technology, emotion, and social organization.",
        "aural analysis, performance, composition, notation, production, and historical interpretation",
        "rhythm, melody, harmony, timbre, musical works, performances, technologies, and traditions",
    ),
    "Philosophy": (
        "Philosophy",
        "Philosophy examines knowledge, reality, mind, value, science, politics, and the assumptions beneath other inquiries. It trains conceptual precision and reasoned disagreement where evidence alone cannot select an answer without interpretation or values.",
        "conceptual analysis, argument, thought experiment, ethical reasoning, and critical comparison",
        "knowledge, reality, mind, value, science, action, justice, and meaning",
    ),
    "Physics": (
        "Physics",
        "Physics seeks economical, testable accounts of matter, motion, fields, energy, space, and time. It supplies foundational models for astronomy, chemistry, engineering, climate science, and modern technology while teaching the reach and limits of idealization.",
        "mathematical modeling, experiment, measurement, symmetry reasoning, and theory testing",
        "matter, motion, forces, fields, energy, waves, spacetime, and quantum phenomena",
    ),
    "Political-Science": (
        "Political Science",
        "Political science studies power, collective choice, states, regimes, policy, and relations among political communities. It equips citizens to compare institutions and evidence without reducing politics to personalities or moral slogans.",
        "institutional analysis, comparative method, policy evaluation, political theory, and strategic reasoning",
        "power, states, regimes, elections, public policy, collective action, conflict, and international order",
    ),
    "Psychology": (
        "Psychology",
        "Psychology studies behavior and experience through biological, cognitive, developmental, social, and clinical perspectives. It helps evaluate claims about people while revealing individual variation, measurement limits, and the danger of intuitive overconfidence.",
        "behavioral experiment, psychometrics, developmental and social analysis, and clinical evidence appraisal",
        "behavior, emotion, personality, development, relationships, mental health, and individual differences",
    ),
    "Research": (
        "Research",
        "Research provides the common architecture for asking answerable questions, finding evidence, choosing methods, managing uncertainty, and communicating reproducible conclusions. It also teaches when formal, empirical, historical, interpretive, or design inquiry requires different warrants.",
        "question formation, study design, source evaluation, measurement, synthesis, and transparent reporting",
        "evidence, methods, data, archives, experiments, interpretations, and scholarly claims",
    ),
    "Security": (
        "Security",
        "Security studies threats, vulnerabilities, controls, resilience, privacy, conflict, and recovery from personal to strategic scales. It replaces absolute-safety thinking with adversarial, risk-based judgment and responsible practice.",
        "threat modeling, adversarial reasoning, control design, incident analysis, privacy, and resilience planning",
        "people, information, devices, software, organizations, infrastructure, and strategic conflict",
    ),
    "Sociology-and-Anthropology": (
        "Sociology and Anthropology",
        "Sociology and anthropology explain how culture, institutions, inequality, identity, kinship, and social change shape lives. They make the familiar strange, the unfamiliar intelligible, and individual explanations accountable to social structure and ethnographic evidence.",
        "ethnography, social theory, institutional analysis, comparison, and reflexive fieldwork",
        "cultures, groups, institutions, inequality, identity, kinship, organizations, and social change",
    ),
    "Statistics-and-Data": (
        "Statistics and Data",
        "Statistics and data develop calibrated reasoning from variable, incomplete, and biased observations. They are essential for estimating uncertainty, designing studies, testing claims, drawing causal inferences, and communicating evidence without false precision.",
        "probability, measurement, statistical inference, causal analysis, computation, and data visualization",
        "variation, samples, populations, uncertainty, data-generating processes, estimates, and decisions",
    ),
    "Systems-Science": (
        "Systems Science",
        "Systems science studies feedback, accumulation, networks, adaptation, complexity, risk, and intervention across domains. It helps explain why local improvements can fail and why dynamic consequences differ from static intentions.",
        "boundary selection, feedback modeling, simulation, network analysis, scenario design, and decision theory",
        "interacting components, stocks, flows, networks, adaptation, risk, and complex interventions",
    ),
    "Theology-and-Comparative-Religion": (
        "Theology and Comparative Religion",
        "Theology and comparative religion develop literate, fair inquiry into religious texts, doctrines, practices, institutions, experiences, and truth claims. They distinguish internal theological reasoning from historical and social-scientific explanation while enabling disciplined comparison.",
        "textual interpretation, doctrinal reasoning, ritual analysis, comparison, and religion-sensitive history",
        "religious texts, beliefs, practices, institutions, experiences, communities, and traditions",
    ),
    "Writing": (
        "Writing",
        "Writing turns observation and thought into sentences, arguments, explanations, narratives, and durable public knowledge. It develops revision, style, citation, genre awareness, and the ability to discover weaknesses through composition.",
        "composition, revision, argument, explanation, narrative, citation, and editorial judgment",
        "sentences, documents, arguments, evidence, genres, audiences, and published discourse",
    ),
}

hours_by_difficulty = {
    "Beginner": (3, 4, 3, 2, 1),
    "Intermediate": (5, 7, 6, 3, 3),
    "Advanced": (9, 12, 18, 6, 5),
    "Expert": (14, 18, 50, 9, 9),
}


def parse_graph() -> tuple[dict[str, dict], dict[str, list[dict]], list[str]]:
    units = {}
    by_folder = {}
    folders = []
    pattern = re.compile(
        r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
        r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert); "
        r"(?P<status>Core|Extension)\]\s+←\s+(?P<prerequisites>.+)$"
    )
    for path in sorted(curriculum.glob("*/roadmap.md")):
        folder = path.parent.name
        folders.append(folder)
        records = []
        for rank, line in enumerate(path.read_text().splitlines()):
            match = pattern.match(line)
            if not match:
                continue
            record = match.groupdict()
            record["folder"] = folder
            record["rank"] = rank
            record["prerequisites"] = (
                []
                if record["prerequisites"] == "none"
                else [value.strip() for value in record["prerequisites"].split(",")]
            )
            units[record["id"]] = record
            records.append(record)
        by_folder[folder] = records
    return units, by_folder, folders


def possessive(value: str) -> str:
    return f"{value}'" if value.endswith("s") else f"{value}'s"


def count_syllabus_records(folder: str) -> tuple[int, int]:
    outcomes = 0
    checks = 0
    lines = (curriculum / folder / "syllabus.md").read_text().splitlines()
    for line in lines:
        if not line.startswith("| `"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        outcomes += len([value for value in cells[3].split(";") if value.strip()])
        checks += cells[5].count("☐")
    if outcomes:
        return outcomes, checks
    for line in lines:
        if line.startswith("**Learning outcomes:**"):
            outcomes += len(
                [
                    value
                    for value in line.removeprefix("**Learning outcomes:**").split(";")
                    if value.strip()
                ]
            )
        if line.startswith("**Mastery:**"):
            checks += line.count("- [ ]")
    return outcomes, checks


def pair_id(first: str, second: str, by_folder: dict[str, list[dict]]) -> str:
    first_prefix = by_folder[first][0]["id"].split("-")[0]
    second_prefix = by_folder[second][0]["id"].split("-")[0]
    return f"CONN-{first_prefix}-{second_prefix}"


def direct_edges(
    first: str,
    second: str,
    units: dict[str, dict],
    by_folder: dict[str, list[dict]],
) -> list[tuple[str, str]]:
    edges = []
    for dependent in by_folder[first] + by_folder[second]:
        for prerequisite in dependent["prerequisites"]:
            prerequisite_unit = units[prerequisite]
            if {dependent["folder"], prerequisite_unit["folder"]} == {first, second}:
                edges.append((prerequisite, dependent["id"]))
    return sorted(set(edges))


def pair_entry_units(
    first: str,
    second: str,
    units: dict[str, dict],
    by_folder: dict[str, list[dict]],
) -> tuple[list[str], list[str]]:
    edges = direct_edges(first, second, units, by_folder)
    first_ids = []
    second_ids = []
    for prerequisite, dependent in edges:
        for unit_id in (prerequisite, dependent):
            target = first_ids if units[unit_id]["folder"] == first else second_ids
            if unit_id not in target:
                target.append(unit_id)
    if not first_ids:
        first_ids = [next(unit["id"] for unit in by_folder[first] if unit["status"] == "Core")]
    if not second_ids:
        second_ids = [next(unit["id"] for unit in by_folder[second] if unit["status"] == "Core")]
    return first_ids[:3], second_ids[:3]


def format_unit_links(unit_ids: list[str], units: dict[str, dict], base: str = "") -> str:
    return ", ".join(
        f"[`{unit_id}`]({base}{units[unit_id]['folder']}/roadmap.md)"
        for unit_id in unit_ids
    )


def build_connection_atlas(
    units: dict[str, dict],
    by_folder: dict[str, list[dict]],
    folders: list[str],
) -> None:
    lines = [
        "# Cross-Disciplinary Connection Atlas",
        "",
        "This atlas contains one canonical record for every unordered pair of the 39",
        "disciplines: `39 × 38 ÷ 2 = 741`. A discipline-specific `connections.md` file",
        "is a navigational view over these records rather than a second editable account.",
        "",
        "A direct graph relation means that at least one Phase 1 unit in one discipline",
        "declares a unit in the other as a prerequisite. “Integrative only” means that",
        "the fields still illuminate one another, but no direct prerequisite edge is",
        "currently asserted.",
        "",
        "```mermaid",
        "flowchart LR",
        "    D[Discipline portal] --> V[38-connection view]",
        "    V --> C[Canonical pair record]",
        "    C --> U[Exact entry units]",
        "    C --> G[Direct graph edges or integrative-only label]",
        "```",
        "",
        "In prose: each discipline portal opens its 38-connection index; every index row",
        "resolves to one canonical pair record; that record names exact units and states",
        "whether the relationship is encoded as a prerequisite edge.",
        "",
        "## Pair index",
        "",
        "| First discipline | Pair records |",
        "|---|---:|",
    ]
    for index, folder in enumerate(folders):
        lines.append(f"| {profiles[folder][0]} | {len(folders) - index - 1} |")
    lines.append("")

    for first_index, first in enumerate(folders):
        first_name, _, first_lens, first_objects = profiles[first]
        lines.extend([f"## {first_name}", ""])
        pairs = folders[first_index + 1 :]
        if not pairs:
            lines.extend(
                [
                    "All pairs involving this final alphabetical discipline are",
                    "canonicalized under the earlier discipline headings.",
                    "",
                ]
            )
            continue
        for second in pairs:
            second_name, _, second_lens, second_objects = profiles[second]
            connection_id = pair_id(first, second, by_folder)
            anchor = connection_id.lower()
            first_entries, second_entries = pair_entry_units(
                first, second, units, by_folder
            )
            edges = direct_edges(first, second, units, by_folder)
            relationship = (
                f"{first_name} contributes {first_lens} to questions about "
                f"{second_objects}; {second_name} contributes {second_lens} to "
                f"questions about {first_objects}. Their integration makes assumptions, "
                "scales, and standards of evidence visible instead of treating either "
                "field as a complete explanation."
            )
            prompt = (
                f"Construct a case study or artifact that uses {possessive(first_name)} "
                f"{first_lens} and {possessive(second_name)} {second_lens} to investigate a real "
                f"problem involving {first_objects} and {second_objects}. State where "
                "the methods agree, conflict, or cannot be combined."
            )
            if edges:
                relation = "Direct prerequisite edges: " + ", ".join(
                    f"`{prerequisite}` → `{dependent}`"
                    for prerequisite, dependent in edges
                )
            else:
                relation = (
                    "Integrative only: Phase 1 declares no direct prerequisite edge "
                    "between these disciplines."
                )
            lines.extend(
                [
                    f'<a id="{anchor}"></a>',
                    f"### `{connection_id}` — {first_name} ↔ {second_name}",
                    "",
                    f"**Relationship.** {relationship}",
                    "",
                    "**Entry units.** "
                    f"{first_name}: {format_unit_links(first_entries, units)}. "
                    f"{second_name}: {format_unit_links(second_entries, units)}.",
                    "",
                    f"**Integration prompt.** {prompt}",
                    "",
                    f"**Graph relation.** {relation}",
                    "",
                ]
            )
    (curriculum / "connection-atlas.md").write_text("\n".join(lines))


def build_connections(
    units: dict[str, dict],
    by_folder: dict[str, list[dict]],
    folders: list[str],
) -> None:
    for folder in folders:
        name = profiles[folder][0]
        lines = [
            f"# {name} Connections",
            "",
            f"{name} connects to every other discipline through the canonical",
            "[connection atlas](../connection-atlas.md). The atlas owns each explanation;",
            "this page provides a complete subject-specific view without duplicating it.",
            "",
            "## How to read this map",
            "",
            "An entry unit is a practical starting point for integration, not a replacement",
            "for its declared prerequisites. A direct relation is an actual Phase 1",
            "prerequisite edge; an integrative relation is important but not encoded as",
            "a dependency.",
            "",
            "## Complete connection index",
            "",
            "| Other discipline | Canonical record | Entry units | Graph relation |",
            "|---|---|---|---|",
        ]
        for other in folders:
            if other == folder:
                continue
            first, second = sorted((folder, other))
            connection_id = pair_id(first, second, by_folder)
            current_entries, other_entries = pair_entry_units(
                folder, other, units, by_folder
            )
            edges = direct_edges(folder, other, units, by_folder)
            relation = "Direct" if edges else "Integrative only"
            entry_text = (
                f"{name}: {', '.join(f'`{value}`' for value in current_entries)}; "
                f"{profiles[other][0]}: "
                f"{', '.join(f'`{value}`' for value in other_entries)}"
            )
            lines.append(
                f"| {profiles[other][0]} | "
                f"[`{connection_id}`](../connection-atlas.md#{connection_id.lower()}) | "
                f"{entry_text} | {relation} |"
            )
        lines.extend(
            [
                "",
                "## Integration standard",
                "",
                "A satisfactory interdisciplinary artifact must use methods or evidence from",
                "both fields, state which field owns each claim, preserve incompatible standards",
                "of warrant where necessary, and identify what would change the conclusion.",
                "",
            ]
        )
        (curriculum / folder / "connections.md").write_text("\n".join(lines))


def build_portals(
    units: dict[str, dict],
    by_folder: dict[str, list[dict]],
    folders: list[str],
) -> None:
    ownership = {unit_id: unit["folder"] for unit_id, unit in units.items()}
    for folder in folders:
        records = by_folder[folder]
        name, why, _, _ = profiles[folder]
        core_count = sum(unit["status"] == "Core" for unit in records)
        extension_count = len(records) - core_count
        difficulty_counts = {
            difficulty: sum(unit["difficulty"] == difficulty for unit in records)
            for difficulty in hours_by_difficulty
        }
        core_hours = sum(
            sum(hours_by_difficulty[unit["difficulty"]])
            for unit in records
            if unit["status"] == "Core"
        )
        extension_hours = sum(
            sum(hours_by_difficulty[unit["difficulty"]])
            for unit in records
            if unit["status"] == "Extension"
        )
        outcome_count, mastery_count = count_syllabus_records(folder)
        roots = [
            unit["id"]
            for unit in records
            if not any(ownership[value] == folder for value in unit["prerequisites"])
        ]
        external_edges = []
        for unit in records:
            for prerequisite in unit["prerequisites"]:
                if ownership[prerequisite] != folder:
                    external_edges.append((prerequisite, unit["id"]))
        external_edges = sorted(set(external_edges))
        lines = [
            f"# {name}",
            "",
            "> [!NOTE]",
            "> This portal joins the subject's complete records. Stable unit IDs connect",
            "> prerequisites, lessons, resources, projects, assessment, and time without",
            "> duplicating the canonical detail.",
            "",
            "## Why this subject matters",
            "",
            why,
            "",
            "## Learning outcomes",
            "",
            f"The [complete syllabus](syllabus.md) contains {outcome_count} observable",
            f"outcome statements across all {len(records)} units. Each statement requires",
            "performance—such as explaining, solving, deriving, analyzing, evaluating,",
            "designing, creating, or defending—rather than exposure or resource completion.",
            "",
            "## Knowledge graph",
            "",
            "The [knowledge graph](roadmap.md) gives the binding dependency order.",
            "",
            "| Scope | Units |",
            "|---|---:|",
            f"| Core | {core_count} |",
            f"| Extension | {extension_count} |",
            f"| Beginner | {difficulty_counts['Beginner']} |",
            f"| Intermediate | {difficulty_counts['Intermediate']} |",
            f"| Advanced | {difficulty_counts['Advanced']} |",
            f"| Expert | {difficulty_counts['Expert']} |",
            f"| Total | {len(records)} |",
            "",
            "## Complete syllabus",
            "",
            "The [complete syllabus](syllabus.md) lists every unit's ordered lessons, exact",
            "prerequisites, observable outcomes, common misconception, and binary mastery",
            "checks. No lesson sequence in this portal overrides that canonical table.",
            "",
            "## Prerequisites",
            "",
            "Prerequisites are unit-specific. Begin with the subject entry units below and",
            "follow every arrow in the [roadmap](roadmap.md).",
            "",
            f"**Subject entry units:** {', '.join(f'`{value}`' for value in roots)}.",
            "",
        ]
        if external_edges:
            lines.extend(
                [
                    "The exact cross-disciplinary gateway edges are:",
                    "",
                    "| External prerequisite | Unlocks subject unit |",
                    "|---|---|",
                ]
            )
            for prerequisite, dependent in external_edges:
                prerequisite_folder = ownership[prerequisite]
                lines.append(
                    f"| [`{prerequisite}`](../{prerequisite_folder}/roadmap.md) | "
                    f"[`{dependent}`](roadmap.md) |"
                )
            lines.append("")
        else:
            lines.extend(
                [
                    "This subject has no external prerequisite edge at its entry point;",
                    "its internal unit prerequisites still apply.",
                    "",
                ]
            )
        lines.extend(
            [
                "## Estimated hours",
                "",
                "The [schedule](schedule.md) separates reading, exercises, projects, review,",
                "and mastery assessment for every unit.",
                "",
                "| Scope | Planned hours |",
                "|---|---:|",
                f"| Core | {core_hours:,} |",
                f"| Extension | {extension_hours:,} |",
                f"| Complete subject | {core_hours + extension_hours:,} |",
                "",
                "These are planning priors. Replace them with logged learner hours and retain",
                "the component-level evidence.",
                "",
                "## Mastery checklist",
                "",
                f"The [syllabus mastery column](syllabus.md) contains {mastery_count} binary",
                "checks. A learner should answer yes only after producing the specified",
                "evidence under the conditions in the assessment, then passing delayed review.",
                "",
                "## Resources",
                "",
                "The [resource catalog and unit matrix](resources.md) map every unit to a",
                "textbook, beginner book, advanced book, lecture notes, video course,",
                "university course, free resource, exercises, reference, and encyclopedia.",
                "",
                "## Projects",
                "",
                "The [project sequence](projects.md) contains Small, Medium, Large, and",
                "Capstone work with prerequisites, deliverables, milestones, evidence, rubric,",
                "constraints, and safety or ethics review.",
                "",
                "## Assessment",
                "",
                "The [assessment specification](assessment.md) gives every unit a formative",
                "check, aligned summative task, modes, conditions, pass evidence, and",
                "corrective reassessment rule.",
                "",
                "## Common misconceptions",
                "",
                "Every unit's misconception is recorded beside its lessons and outcomes in the",
                "[complete syllabus](syllabus.md). Assessment requires the learner to detect",
                "or avoid the misconception in an unfamiliar case.",
                "",
                "## Connections",
                "",
                f"The [subject connection map](connections.md) links {name} to all 38 other",
                "disciplines. Every explanation resolves to one record in the",
                "[canonical connection atlas](../connection-atlas.md), with exact entry units",
                "and direct dependency status.",
                "",
                "## Navigation",
                "",
                "- [Knowledge graph](roadmap.md)",
                "- [Complete syllabus](syllabus.md)",
                "- [Resources](resources.md)",
                "- [Glossary](glossary.md)",
                "- [Projects](projects.md)",
                "- [Assessment](assessment.md)",
                "- [Schedule](schedule.md)",
                "- [Connections](connections.md)",
                "- [Curriculum index](../README.md)",
                "- [Global knowledge graph](../global-graph.md)",
                "- [Lifelong pathways](../pathways.md)",
                "- [Learner guide](../learner-guide.md)",
                "- [Editorial policy](../editorial-policy.md)",
                "",
            ]
        )
        (curriculum / folder / "README.md").write_text("\n".join(lines))


def main() -> None:
    units, by_folder, folders = parse_graph()
    if set(folders) != set(profiles):
        missing = sorted(set(folders) - set(profiles))
        extra = sorted(set(profiles) - set(folders))
        raise SystemExit(f"Profile mismatch: missing={missing}, extra={extra}")
    build_connection_atlas(units, by_folder, folders)
    build_connections(units, by_folder, folders)
    build_portals(units, by_folder, folders)
    print(f"disciplines={len(folders)}")
    print(f"units={len(units)}")
    print(f"connection_pairs={len(folders) * (len(folders) - 1) // 2}")


if __name__ == "__main__":
    main()
