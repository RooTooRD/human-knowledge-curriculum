#!/usr/bin/env python

from collections import Counter, defaultdict
from heapq import heappop, heappush
from pathlib import Path
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"

hours_by_difficulty = {
    "Beginner": (3, 4, 3, 2, 1),
    "Intermediate": (5, 7, 6, 3, 3),
    "Advanced": (9, 12, 18, 6, 5),
    "Expert": (14, 18, 50, 9, 9),
}

folder_priority = [
    "Foundations",
    "Learning",
    "Logic",
    "Writing",
    "Communication",
    "Mathematics",
    "Statistics-and-Data",
    "Research",
    "Computer-Science",
    "Security",
    "Artificial-Intelligence",
    "Systems-Science",
    "Physics",
    "Astronomy",
    "Chemistry",
    "Earth-Climate-and-Energy",
    "Biology",
    "Health-and-Medicine",
    "Engineering",
    "Geography",
    "History",
    "Philosophy",
    "Theology-and-Comparative-Religion",
    "Islamic-Studies",
    "Sociology-and-Anthropology",
    "Economics",
    "Finance",
    "Business-and-Management",
    "Political-Science",
    "Law",
    "Psychology",
    "Cognitive-Science",
    "Linguistics",
    "Literature",
    "Art",
    "Music",
    "Architecture-and-Design",
    "Education",
    "Life-Skills",
]

specializations = [
    (
        "Mathematical Structures and Formal Reasoning",
        ["Mathematics", "Logic"],
        "Develop proof, abstraction, foundations, and research-level mathematical judgment.",
    ),
    (
        "Computing, AI, and Security",
        ["Computer-Science", "Artificial-Intelligence", "Security"],
        "Design, analyze, secure, and govern advanced computational and intelligent systems.",
    ),
    (
        "Physical Universe and Matter",
        ["Physics", "Astronomy", "Chemistry"],
        "Unify theoretical, experimental, and computational accounts of matter and the cosmos.",
    ),
    (
        "Life, Mind, and Health",
        ["Biology", "Health-and-Medicine"],
        "Study living mechanisms, evolution, disease, evidence, and responsible health intervention.",
    ),
    (
        "Earth, Climate, Geography, and Engineering",
        ["Earth-Climate-and-Energy", "Engineering", "Geography"],
        "Analyze coupled planetary systems and design resilient technical and spatial interventions.",
    ),
    (
        "Economics, Finance, and Enterprise",
        ["Economics", "Finance", "Business-and-Management"],
        "Integrate allocation, institutions, valuation, organizations, entrepreneurship, and risk.",
    ),
    (
        "Governance, Law, and Society",
        ["Political-Science", "Law", "Sociology-and-Anthropology"],
        "Explain power and institutions and design evidence-based, lawful public action.",
    ),
    (
        "Cognition, Psychology, Language, and Education",
        ["Cognitive-Science", "Psychology", "Linguistics", "Education"],
        "Connect mind, behavior, language, development, learning, and educational design.",
    ),
    (
        "History, Philosophy, and Comparative Religion",
        ["History", "Philosophy", "Theology-and-Comparative-Religion"],
        "Develop historically grounded judgment about knowledge, value, metaphysics, and religion.",
    ),
    (
        "Islamic Texts, Thought, and Civilization",
        ["Islamic-Studies"],
        "Pursue primary-source research across Islamic texts, disciplines, societies, and material cultures.",
    ),
    (
        "Literature, Arts, Music, and Design",
        ["Literature", "Art", "Music", "Architecture-and-Design", "Writing", "Communication"],
        "Integrate interpretation, creative practice, historical context, craft, and public communication.",
    ),
    (
        "Data, Research, Systems, and Practical Integration",
        ["Statistics-and-Data", "Research", "Systems-Science", "Learning", "Life-Skills"],
        "Build rigorous evidence, models, decisions, and interventions across complex real systems.",
    ),
]


def parse_graph() -> tuple[dict[str, dict], list[str]]:
    units = {}
    declaration_order = []
    pattern = re.compile(
        r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
        r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert); "
        r"(?P<status>Core|Extension)\]\s+←\s+(?P<prerequisites>.+)$"
    )
    for folder_rank, folder in enumerate(folder_priority):
        path = curriculum / folder / "roadmap.md"
        for local_rank, line in enumerate(path.read_text().splitlines()):
            match = pattern.match(line)
            if not match:
                continue
            record = match.groupdict()
            prerequisites = (
                []
                if record["prerequisites"] == "none"
                else [value.strip() for value in record["prerequisites"].split(",")]
            )
            hours = hours_by_difficulty[record["difficulty"]]
            record.update(
                {
                    "folder": folder,
                    "folder_rank": folder_rank,
                    "local_rank": local_rank,
                    "prerequisites": prerequisites,
                    "hours": hours,
                    "total": sum(hours),
                }
            )
            units[record["id"]] = record
            declaration_order.append(record["id"])
    return units, declaration_order


def topological_order(units: dict[str, dict], included: set[str]) -> list[str]:
    indegree = {unit_id: 0 for unit_id in included}
    children = defaultdict(list)
    for unit_id in included:
        for prerequisite in units[unit_id]["prerequisites"]:
            if prerequisite in included:
                indegree[unit_id] += 1
                children[prerequisite].append(unit_id)
    ready = []
    difficulty_rank = {"Beginner": 0, "Intermediate": 1, "Advanced": 2, "Expert": 3}
    for unit_id, degree in indegree.items():
        if degree == 0:
            unit = units[unit_id]
            heappush(
                ready,
                (
                    0 if unit["status"] == "Core" else 1,
                    unit["folder_rank"],
                    difficulty_rank[unit["difficulty"]],
                    unit["local_rank"],
                    unit_id,
                ),
            )
    order = []
    while ready:
        *_, unit_id = heappop(ready)
        order.append(unit_id)
        for child in children[unit_id]:
            indegree[child] -= 1
            if indegree[child] == 0:
                unit = units[child]
                heappush(
                    ready,
                    (
                        0 if unit["status"] == "Core" else 1,
                        unit["folder_rank"],
                        difficulty_rank[unit["difficulty"]],
                        unit["local_rank"],
                        child,
                    ),
                )
    if len(order) != len(included):
        raise SystemExit("Cannot schedule cyclic or unresolved graph")
    return order


def split_years(
    order: list[str],
    units: dict[str, dict],
    year_count: int,
    capacity: int,
) -> list[list[str]]:
    prefix = [0]
    for unit_id in order:
        prefix.append(prefix[-1] + units[unit_id]["total"])
    target = prefix[-1] / year_count
    states = [{0: None}]
    for group in range(1, year_count + 1):
        current = {}
        for end in range(group, len(order) + 1):
            candidates = [
                start
                for start in states[-1]
                if start < end and prefix[end] - prefix[start] <= capacity
            ]
            if candidates:
                current[end] = min(
                    candidates,
                    key=lambda start: abs((prefix[end] - prefix[start]) - target),
                )
        states.append(current)
    if len(order) not in states[-1]:
        raise SystemExit(
            f"Cannot partition {prefix[-1]} hours into {year_count} years at {capacity}"
        )
    boundaries = [len(order)]
    for group in range(year_count, 0, -1):
        boundaries.append(states[group][boundaries[-1]])
    boundaries.reverse()
    return [
        order[boundaries[index]:boundaries[index + 1]]
        for index in range(year_count)
    ]


def months(hours: int, weekly_hours: int) -> str:
    return f"{hours / (weekly_hours * 4.345):.1f}"


def years_text(hours: int, weekly_hours: int) -> str:
    return f"{hours / (weekly_hours * 48):.2f}"


def build_schedule(folder: str, units: dict[str, dict], order: list[str]) -> str:
    selected = [unit_id for unit_id in order if units[unit_id]["folder"] == folder]
    core_hours = sum(units[unit_id]["total"] for unit_id in selected if units[unit_id]["status"] == "Core")
    extension_hours = sum(
        units[unit_id]["total"] for unit_id in selected if units[unit_id]["status"] == "Extension"
    )
    full_hours = core_hours + extension_hours
    lines = [
        f"# {folder.replace('-', ' ')} Schedule",
        "",
        "This schedule is subordinate to [the knowledge graph](roadmap.md): do not begin a",
        "unit until every listed prerequisite has been mastered. Hours are planning priors;",
        "replace them with logged time after the first review cycle.",
        "",
        "## Discipline totals",
        "",
        "| Scope | Hours | Months at 10 h/week | Months at 15 h/week | Months at 20 h/week | Years at 15 h/week, 48 weeks/year |",
        "|---|---:|---:|---:|---:|---:|",
        f"| Core | {core_hours:,} | {months(core_hours, 10)} | {months(core_hours, 15)} | {months(core_hours, 20)} | {years_text(core_hours, 15)} |",
        f"| Extension | {extension_hours:,} | {months(extension_hours, 10)} | {months(extension_hours, 15)} | {months(extension_hours, 20)} | {years_text(extension_hours, 15)} |",
        f"| Full discipline | {full_hours:,} | {months(full_hours, 10)} | {months(full_hours, 15)} | {months(full_hours, 20)} | {years_text(full_hours, 15)} |",
        "",
        "> [!NOTE]",
        "> Project hours are the unit's allocated share of the discipline projects. Log the",
        "> actual time of a selected large or capstone project and revise the estimate when",
        "> its scope exceeds the allocation.",
        "",
        "## Unit time budget",
        "",
        "| Unit | Difficulty | Status | Reading | Exercises | Projects | Review | Mastery | Total | Review checkpoints |",
        "|---|---|---|---:|---:|---:|---:|---:|---:|---|",
    ]
    for unit_id in selected:
        unit = units[unit_id]
        reading, exercises, projects, review, mastery = unit["hours"]
        lines.append(
            f"| `{unit_id}` {unit['title'].replace('|', '&#124;')} | {unit['difficulty']} | "
            f"{unit['status']} | {reading} | {exercises} | {projects} | {review} | "
            f"{mastery} | **{unit['total']}** | 1d · 7d · 30d · 90d · 180d · 365d · annual |"
        )
    lines += [
        "",
        "## Weekly execution",
        "",
        "- Use 60–90 minute focused blocks; alternate first exposure, practice, and retrieval.",
        "- Keep at least one weekly block for cumulative review and one for project integration.",
        "- Stop adding new units when overdue review exceeds two weeks; clear the review debt first.",
        "- After a failed retention check, diagnose the error, use a different corrective",
        "  example or explanation, and attempt a parallel task before lengthening the interval.",
        "- Every 12 weeks, use one consolidation week with no more than half the normal new material.",
        "- Every year, reserve four weeks for leave, illness, catch-up, portfolio audit, and replanning.",
        "",
        "## Completion rule",
        "",
        "Calendar time does not establish mastery. A unit leaves active study only after its",
        "[assessment](assessment.md) passes; it leaves scheduled maintenance only when the",
        "annual transfer check remains successful.",
        "",
    ]
    return "\n".join(lines)


def dominant_folders(year_units: list[str], units: dict[str, dict]) -> str:
    counts = Counter(units[unit_id]["folder"] for unit_id in year_units)
    return ", ".join(folder.replace("-", " ") for folder, _ in counts.most_common(4))


def unit_list(year_units: list[str], units: dict[str, dict]) -> str:
    return ", ".join(f"`{unit_id}` ({units[unit_id]['total']}h)" for unit_id in year_units)


def route_section(
    title: str,
    description: str,
    years: list[list[str]],
    units: dict[str, dict],
    weekly_hours: int,
    fill_slack_as_reserve: bool = False,
) -> list[str]:
    capacity = weekly_hours * 48
    lines = [
        f"## {title}",
        "",
        description,
        "",
        f"**Load:** {weekly_hours} hours/week × 48 weeks/year = {capacity:,} hours/year.",
        "",
        "| Year | New units | Core hours | Extension or specialization reserve | Planned | Capacity | Slack | Dominant disciplines |",
        "|---:|---:|---:|---:|---:|---:|---:|---|",
    ]
    for year_number, year_units in enumerate(years, 1):
        core_hours = sum(
            units[unit_id]["total"] for unit_id in year_units if units[unit_id]["status"] == "Core"
        )
        extension_hours = sum(
            units[unit_id]["total"]
            for unit_id in year_units
            if units[unit_id]["status"] == "Extension"
        )
        extension_or_reserve = (
            capacity - core_hours if fill_slack_as_reserve else extension_hours
        )
        planned = core_hours + extension_or_reserve
        lines.append(
            f"| {year_number} | {len(year_units)} | {core_hours:,} | "
            f"{extension_or_reserve:,} | {planned:,} | {capacity:,} | "
            f"{capacity - planned:,} | {dominant_folders(year_units, units)} |"
        )
    lines.append("")
    for year_number, year_units in enumerate(years, 1):
        lines += [
            "<details>",
            f"<summary>Year {year_number}: exact prerequisite-safe unit order</summary>",
            "",
            unit_list(year_units, units),
            "",
            "</details>",
            "",
        ]
    return lines


def build_pathways(units: dict[str, dict], core_order: list[str], full_order: list[str]) -> str:
    core_hours = sum(units[unit_id]["total"] for unit_id in core_order)
    extension_hours = sum(
        units[unit_id]["total"] for unit_id in full_order if units[unit_id]["status"] == "Extension"
    )
    full_hours = core_hours + extension_hours
    ten_years = split_years(core_order, units, 10, 31 * 48)
    fifteen_years = split_years(core_order, units, 15, 23 * 48)
    twenty_years = split_years(full_order, units, 20, 23 * 48)
    lines = [
        "# Lifelong Pathways",
        "",
        "These are mastery routes, not degree plans. They preserve the graph's prerequisite",
        "order while allowing several disciplines to remain active in parallel.",
        "",
        "## Global budget",
        "",
        "| Scope | Units | Hours | Share |",
        "|---|---:|---:|---:|",
        f"| Common Core | {len(core_order)} | {core_hours:,} | {core_hours / full_hours:.1%} |",
        f"| Extension | {len(full_order) - len(core_order)} | {extension_hours:,} | {extension_hours / full_hours:.1%} |",
        f"| Full curriculum | {len(full_order)} | {full_hours:,} | 100% |",
        "",
        "The budgets already include reading, exercises, project contributions, review, and",
        "mastery assessment. They do not include ordinary school education, language",
        "remediation beyond this curriculum, maximum-scope versions of all 39 capstones,",
        "or professional licensure requirements.",
        "",
    ]
    lines += route_section(
        "10-year intensive Core",
        "Complete all 544 Core units. This route suits a learner able to sustain a near "
        "half-time intellectual workload and protect review time.",
        ten_years,
        units,
        31,
    )
    lines += route_section(
        "15-year balanced Core plus one specialization",
        "Complete all Core units while reserving the route's 2,100 total slack hours for "
        "one path from [Specializations](specializations.md). If the chosen path is shorter, "
        "use the remainder for its capstone, languages, supervision, or recovery.",
        fifteen_years,
        units,
        23,
        True,
    )
    lines += route_section(
        "20-year full polymath",
        "Complete every Core and Extension unit. Choose a small number of capstones for "
        "maximum scope; the unit budget cannot support 39 simultaneous 400-hour capstones.",
        twenty_years,
        units,
        23,
    )
    lines += [
        "## Calendar and overload rules",
        "",
        "- Use 48 active study weeks and four leave/audit weeks each year.",
        "- No route may move a unit before its listed prerequisites, even when the annual",
        "  hour total has spare capacity.",
        "- Run at most three demanding new disciplines concurrently; maintenance review may",
        "  continue in others.",
        "- When actual time exceeds estimates by 20% for two consecutive quarters, reduce",
        "  new-unit load and reforecast the completion date.",
        "- Illness, caregiving, disability, employment, and religious or civic obligations",
        "  are planning facts, not failures; use route slack and extend the calendar.",
        "- The yearly unit lists are a valid default ordering, not a prohibition on a",
        "  different topological ordering with the same prerequisites.",
        "",
    ]
    return "\n".join(lines)


def gateway_units(folders: list[str], units: dict[str, dict], full_order: list[str]) -> list[str]:
    gateways = []
    for folder in folders:
        candidates = [
            unit_id
            for unit_id in full_order
            if units[unit_id]["folder"] == folder and units[unit_id]["status"] == "Core"
        ]
        advanced = [
            unit_id for unit_id in candidates if units[unit_id]["difficulty"] == "Advanced"
        ]
        gateways.extend((advanced or candidates)[-2:])
    return gateways


def build_specializations(units: dict[str, dict], full_order: list[str]) -> str:
    extension_owners = {}
    lines = [
        "# Specializations",
        "",
        "A specialization follows the Common Core and adds a coherent Extension branch.",
        "The twelve paths partition the Extension units for planning: interdisciplinary",
        "work may reuse units, but hours are counted only once.",
        "",
        "| Path | Gateway Core | Required Extension | Added hours | 15-year weekly overlay | Recommended capstone |",
        "|---|---|---|---:|---:|---|",
    ]
    for name, folders, purpose in specializations:
        extensions = [
            unit_id
            for unit_id in full_order
            if units[unit_id]["folder"] in folders and units[unit_id]["status"] == "Extension"
        ]
        for unit_id in extensions:
            if unit_id in extension_owners:
                raise SystemExit(f"Extension {unit_id} assigned twice")
            extension_owners[unit_id] = name
        gateways = gateway_units(folders, units, full_order)
        added_hours = sum(units[unit_id]["total"] for unit_id in extensions)
        capstones = ", ".join(
            f"`{next(unit_id for unit_id in full_order if units[unit_id]['folder'] == folder).split('-')[0]}.PRJ.C`"
            for folder in folders[:2]
        )
        lines.append(
            f"| **{name}**<br>{purpose} | "
            f"{', '.join(f'`{unit_id}`' for unit_id in gateways)} | "
            f"{', '.join(f'`{unit_id}`' for unit_id in extensions) or 'No separate Extension; use capstone depth'} | "
            f"{added_hours:,} | {added_hours / (15 * 48):.1f} h/week | {capstones} |"
        )
    all_extensions = {
        unit_id for unit_id, unit in units.items() if unit["status"] == "Extension"
    }
    if set(extension_owners) != all_extensions:
        missing = sorted(all_extensions - set(extension_owners))
        raise SystemExit(f"Unassigned Extension units: {missing}")
    lines += [
        "",
        "## Selection rule",
        "",
        "Choose a path only after its Gateway Core survives the 4–8 week retention check.",
        "Within a path, follow each unit's prerequisites and use its recommended capstone as",
        "the integrative artifact. A second specialization adds its stated hours minus any",
        "units already completed.",
        "",
        "## Language and supervision overlays",
        "",
        "Primary-source work may require additional language study; laboratory, clinical,",
        "field, archival, security, and human-participant work may require qualified",
        "supervision or formal approval. These requirements extend the calendar and may not",
        "be waived merely to preserve a target completion date.",
        "",
    ]
    return "\n".join(lines)


def build_review_system() -> str:
    return """# Review and Retention System

The curriculum uses retrieval to maintain usable knowledge rather than familiarity
from rereading. The default intervals are conservative planning checkpoints and must
adapt to actual performance.

## Default sequence

| Checkpoint | Required evidence | If successful | If unsuccessful |
|---|---|---|---|
| End of session | Close materials and reconstruct the main idea, method, or performance | Schedule 1-day check | Correct immediately with a different example |
| 1 day | Brief free recall plus one representative item | Schedule 7-day check | Correct and retry next day |
| 7 days | Mixed retrieval with an adjacent unit | Schedule 30-day check | Return to targeted practice; retry in 2–3 days |
| 30 days | Unfamiliar transfer item | Schedule 90-day check | Diagnose concept, procedure, or retrieval failure |
| 90 days | Cumulative problem, source, case, or performance | Schedule 180-day check | Reopen the unit and use a parallel assessment |
| 180 days | Interleaved cross-disciplinary application | Schedule 365-day check | Shorten to 30–90 days after correction |
| 365 days | Phase 4 retention assessment at criterion standard | Move to annual maintenance | Restore the 90–180–365 day sequence |
| Annual | Authentic transfer or contribution to a larger project | Keep annual | Return to the last reliably passed interval |

## Review-hour allocation

The unit budgets assign 2 hours to Beginner, 3 to Intermediate, 6 to Advanced, and
9 to Expert review. Treat these as baseline active-retrieval hours. Source-heavy,
language-heavy, procedural, safety-critical, and rarely used knowledge may require
more.

## Interleaving

- Mix confusable methods only after each has an intelligible first representation.
- Ask the learner to choose the method before executing it.
- Combine conceptual explanation with calculation, source analysis, construction, or
  performance as the discipline requires.
- Include one old prerequisite whenever assessing a new dependent unit.

## Failure and relearning

1. Classify the failure: forgotten fact, misunderstood concept, procedure error,
   misselected method, weak transfer, communication failure, or unsafe judgment.
2. Consult feedback and one alternative explanation or worked example.
3. Produce the correction without copying.
4. Complete a new parallel item.
5. Record the error and new interval.

Repeated rereading, highlighting, or answer recognition does not demonstrate recovery.

## Annual audit

During the four non-expansion weeks:

1. sample every active discipline;
2. run retention checks on high-risk and high-dependency units;
3. archive completed project evidence;
4. identify review debt and fragile prerequisites;
5. compare planned with actual hours;
6. revise the next year's load;
7. schedule genuine leave.

## Evidence basis and limits

Retrieval practice and distributed practice have broad evidence for improving delayed
retention, but an ideal interval depends on material, learner, prior mastery, and desired
retention horizon. The fixed sequence above is therefore an adaptive default rather
than a biological law or universal optimum. See [standards and sources](sources.md)
for the research used to establish this policy.
"""


def update_readme(path: Path) -> None:
    text = path.read_text()
    if "[Schedule](schedule.md)" in text:
        return
    marker = "- [Assessment](assessment.md)"
    path.write_text(text.replace(marker, f"{marker}\n- [Schedule](schedule.md)"))


def main() -> None:
    units, _ = parse_graph()
    all_units = set(units)
    core_units = {unit_id for unit_id, unit in units.items() if unit["status"] == "Core"}
    core_order = topological_order(units, core_units)
    full_order = topological_order(units, all_units)
    for folder in folder_priority:
        directory = curriculum / folder
        (directory / "schedule.md").write_text(
            build_schedule(folder, units, full_order)
        )
        update_readme(directory / "README.md")
    (curriculum / "pathways.md").write_text(build_pathways(units, core_order, full_order))
    (curriculum / "specializations.md").write_text(
        build_specializations(units, full_order)
    )
    (curriculum / "review-system.md").write_text(build_review_system())


if __name__ == "__main__":
    main()
