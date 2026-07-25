#!/usr/bin/env python

from pathlib import Path
import json
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"
output = root / "src" / "lib" / "curriculum_index.ts"

difficulty_hours = {
    "Beginner": 13,
    "Intermediate": 24,
    "Advanced": 50,
    "Expert": 100,
}

groups = {
    "First principles": [
        "Foundations",
        "Learning",
        "Logic",
        "Writing",
        "Communication",
        "Mathematics",
        "Statistics-and-Data",
        "Research",
    ],
    "Computation and systems": [
        "Computer-Science",
        "Security",
        "Artificial-Intelligence",
        "Systems-Science",
        "Engineering",
        "Architecture-and-Design",
    ],
    "The natural world": [
        "Physics",
        "Astronomy",
        "Chemistry",
        "Earth-Climate-and-Energy",
        "Biology",
        "Health-and-Medicine",
        "Geography",
    ],
    "Society and institutions": [
        "Economics",
        "Finance",
        "Business-and-Management",
        "Political-Science",
        "Law",
        "Psychology",
        "Cognitive-Science",
        "Sociology-and-Anthropology",
        "Education",
        "Life-Skills",
    ],
    "Culture and meaning": [
        "History",
        "Philosophy",
        "Theology-and-Comparative-Religion",
        "Islamic-Studies",
        "Linguistics",
        "Literature",
        "Art",
        "Music",
    ],
}

graph_pattern = re.compile(
    r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
    r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert); "
    r"(?P<status>Core|Extension)\]\s+←\s+(?P<prerequisites>.+)$"
)


def paragraph_after_heading(text: str, heading: str) -> str:
    match = re.search(
        rf"^## {re.escape(heading)}\s*$\n+(.+?)(?=\n## |\Z)",
        text,
        re.MULTILINE | re.DOTALL,
    )
    if not match:
        return ""
    paragraphs = [
        re.sub(r"\s+", " ", value).strip()
        for value in match.group(1).split("\n\n")
        if value.strip() and not value.startswith((">", "|", "-", "**"))
    ]
    return paragraphs[0] if paragraphs else ""


def lesson_summaries(path: Path) -> dict[str, str]:
    text = path.read_text()
    summaries = {}
    for line in text.splitlines():
        if line.startswith("| `"):
            cells = [value.strip() for value in line.strip().strip("|").split("|")]
            unit_match = re.match(r"`([^`]+)`", cells[0])
            if unit_match and len(cells) > 2:
                lessons = re.sub(r"^\d+\.\s*", "", cells[2])
                summaries[unit_match.group(1)] = "; ".join(lessons.split(";")[:2])
    if summaries:
        return summaries
    sections = re.split(r"^## `([^`]+)`.*$", text, flags=re.MULTILINE)
    for index in range(1, len(sections), 2):
        unit_id = sections[index]
        body = sections[index + 1]
        match = re.search(r"^\*\*Lessons:\*\*\s*(.+)$", body, re.MULTILINE)
        if match:
            lessons = re.sub(r"^\d+\.\s*", "", match.group(1))
            summaries[unit_id] = "; ".join(lessons.split(";")[:2])
    return summaries


def main() -> None:
    folder_to_group = {
        folder: group for group, folders in groups.items() for folder in folders
    }
    folders = sorted(path.parent.name for path in curriculum.glob("*/roadmap.md"))
    if set(folders) != set(folder_to_group):
        raise SystemExit(
            "Discipline groups do not match curriculum folders: "
            f"missing={sorted(set(folders) - set(folder_to_group))}, "
            f"extra={sorted(set(folder_to_group) - set(folders))}"
        )

    disciplines = []
    all_units = []
    for folder in folders:
        readme = (curriculum / folder / "README.md").read_text()
        title_match = re.match(r"^# ([^\n]+)", readme)
        if not title_match:
            raise SystemExit(f"Missing title in {folder}/README.md")
        title = title_match.group(1)
        summaries = lesson_summaries(curriculum / folder / "syllabus.md")
        units = []
        for rank, line in enumerate(
            (curriculum / folder / "roadmap.md").read_text().splitlines()
        ):
            match = graph_pattern.match(line)
            if not match:
                continue
            record = match.groupdict()
            prerequisites = (
                []
                if record["prerequisites"] == "none"
                else [value.strip() for value in record["prerequisites"].split(",")]
            )
            unit = {
                "id": record["id"],
                "title": record["title"],
                "difficulty": record["difficulty"],
                "status": record["status"],
                "prerequisites": prerequisites,
                "discipline": folder,
                "discipline_title": title,
                "summary": summaries.get(record["id"], ""),
                "hours": difficulty_hours[record["difficulty"]],
                "rank": rank,
            }
            units.append(unit)
            all_units.append(unit)
        if not units:
            raise SystemExit(f"No units parsed for {folder}")
        disciplines.append(
            {
                "slug": folder,
                "title": title,
                "prefix": units[0]["id"].split("-")[0],
                "description": paragraph_after_heading(
                    readme, "Why this subject matters"
                ),
                "group": folder_to_group[folder],
                "unit_count": len(units),
                "core_count": sum(unit["status"] == "Core" for unit in units),
                "extension_count": sum(
                    unit["status"] == "Extension" for unit in units
                ),
                "core_hours": sum(
                    unit["hours"] for unit in units if unit["status"] == "Core"
                ),
                "extension_hours": sum(
                    unit["hours"] for unit in units if unit["status"] == "Extension"
                ),
            }
        )

    if len(disciplines) != 39 or len(all_units) != 634:
        raise SystemExit(
            f"Web index mismatch: disciplines={len(disciplines)}, units={len(all_units)}"
        )

    source = (
        "export type Difficulty = \"Beginner\" | \"Intermediate\" | \"Advanced\" | \"Expert\"\n"
        "export type UnitStatus = \"Core\" | \"Extension\"\n\n"
        "export interface CurriculumUnit {\n"
        "  id: string\n"
        "  title: string\n"
        "  difficulty: Difficulty\n"
        "  status: UnitStatus\n"
        "  prerequisites: string[]\n"
        "  discipline: string\n"
        "  discipline_title: string\n"
        "  summary: string\n"
        "  hours: number\n"
        "  rank: number\n"
        "}\n\n"
        "export interface Discipline {\n"
        "  slug: string\n"
        "  title: string\n"
        "  prefix: string\n"
        "  description: string\n"
        "  group: string\n"
        "  unit_count: number\n"
        "  core_count: number\n"
        "  extension_count: number\n"
        "  core_hours: number\n"
        "  extension_hours: number\n"
        "}\n\n"
        f"export const discipline_groups = {json.dumps(groups, indent=2, ensure_ascii=False)} as const\n\n"
        f"export const disciplines: Discipline[] = {json.dumps(disciplines, indent=2, ensure_ascii=False)}\n\n"
        f"export const units: CurriculumUnit[] = {json.dumps(all_units, indent=2, ensure_ascii=False)}\n"
    )
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(source)
    print(f"disciplines={len(disciplines)}")
    print(f"units={len(all_units)}")
    print(f"output={output.relative_to(root)}")


if __name__ == "__main__":
    main()
