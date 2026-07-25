#!/usr/bin/env python

from collections import Counter
from pathlib import Path
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"
unit_pattern = re.compile(
    r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+.+?"
    r"\[(?:Beginner|Intermediate|Advanced|Expert);",
    re.M,
)
required_project_fields = {
    "Scale",
    "Prerequisites",
    "Purpose",
    "Brief",
    "Deliverables",
    "Milestones",
    "Constraints",
    "Evidence",
    "Rubric",
    "Safety and ethics",
    "Extension",
}
required_modes = {
    "written exam",
    "oral exam",
    "essay",
    "project",
    "proof",
    "presentation",
    "programming assignment",
    "research",
}


def parse_syllabus_outcomes(path: Path) -> dict[str, list[str]]:
    outcomes = {}
    text = path.read_text()
    for line in text.splitlines():
        if not line.startswith("| `"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        match = re.match(r"`([^`]+)`\s+(.+)", cells[0])
        if match and len(cells) >= 6:
            outcomes[match.group(1)] = [
                value.strip().rstrip(".") for value in cells[3].split(";")
            ]
    for section in re.split(r"(?=^## `)", text, flags=re.M):
        heading = re.match(r"## `([^`]+)` — .+", section)
        record = re.search(r"^\*\*Learning outcomes:\*\*\s*(.+?)(?:\s{2})?$", section, flags=re.M)
        if heading and record:
            outcomes[heading.group(1)] = [
                value.strip().rstrip(".") for value in record.group(1).split(";")
            ]
    return outcomes


def section_rows(text: str, heading: str) -> list[list[str]]:
    section = text.split(heading, 1)[1].split("\n## ", 1)[0]
    rows = []
    for line in section.splitlines():
        if not line.startswith("|") or line.startswith("|---"):
            continue
        rows.append([cell.strip() for cell in line.strip().strip("|").split("|")])
    if rows and rows[0][0] in {"Unit", "Field"}:
        return rows[1:]
    return rows


def relative_links(path: Path) -> list[str]:
    failures = []
    for target in re.findall(r"\[[^\]]+\]\(([^)]+)\)", path.read_text()):
        if re.match(r"^[a-z]+://", target) or target.startswith("#"):
            continue
        clean_target = target.split("#", 1)[0]
        if clean_target and not (path.parent / clean_target).exists():
            failures.append(f"{path.relative_to(root)} -> {target}")
    return failures


def normalized(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("&#124;", "|")).strip().lower()


def main() -> None:
    directories = sorted(path.parent for path in curriculum.glob("*/roadmap.md"))
    expected_units = []
    project_counts = Counter()
    assessment_counts = Counter()
    project_records = 0
    modes_seen = set()
    failures = []

    for directory in directories:
        units = unit_pattern.findall((directory / "roadmap.md").read_text())
        expected_units.extend(units)
        outcomes = parse_syllabus_outcomes(directory / "syllabus.md")
        projects_path = directory / "projects.md"
        assessment_path = directory / "assessment.md"
        readme_path = directory / "README.md"
        if not projects_path.exists() or not assessment_path.exists():
            failures.append(f"missing Phase 4 files in {directory.name}")
            continue

        projects_text = projects_path.read_text()
        prefix = units[0].split("-")[0]
        project_matches = list(
            re.finditer(
                rf"^## `({prefix}\.PRJ\.([SMLC]))` — .+?$",
                projects_text,
                flags=re.M,
            )
        )
        if {match.group(2) for match in project_matches} != {"S", "M", "L", "C"}:
            failures.append(f"missing project scale in {directory.name}")
        project_records += len(project_matches)
        for index, match in enumerate(project_matches):
            end = project_matches[index + 1].start() if index + 1 < len(project_matches) else projects_text.find(
                "\n## Unit contribution matrix", match.end()
            )
            section = projects_text[match.end():end]
            fields = {
                row_match.group(1)
                for row_match in re.finditer(r"^\| ([^|]+?) \| (.+?) \|$", section, flags=re.M)
                if row_match.group(1) != "Field"
            }
            missing_fields = required_project_fields - fields
            if missing_fields:
                failures.append(
                    f"{match.group(1)} missing fields: {sorted(missing_fields)}"
                )

        contribution_rows = section_rows(projects_text, "## Unit contribution matrix")
        for row in contribution_rows:
            if len(row) != 4:
                failures.append(f"bad project contribution row in {directory.name}: {row}")
                continue
            unit_match = re.match(r"`([^`]+)`", row[0])
            project_match = re.fullmatch(r"`([^`]+)`", row[1])
            if not unit_match or not project_match:
                failures.append(f"bad project identifiers in {directory.name}: {row}")
                continue
            unit_id = unit_match.group(1)
            project_id = project_match.group(1)
            project_counts[unit_id] += 1
            if project_id not in {match.group(1) for match in project_matches}:
                failures.append(f"unresolved project {project_id} for {unit_id}")
            if not row[2] or not row[3]:
                failures.append(f"missing contribution evidence for {unit_id}")

        assessment_text = assessment_path.read_text()
        assessment_rows = section_rows(assessment_text, "## Unit assessment matrix")
        for row in assessment_rows:
            if len(row) != 7:
                failures.append(f"bad assessment row in {directory.name}: {row}")
                continue
            unit_match = re.match(r"`([^`]+)`", row[0])
            if not unit_match:
                failures.append(f"bad assessment identifier in {directory.name}: {row[0]}")
                continue
            unit_id = unit_match.group(1)
            assessment_counts[unit_id] += 1
            if any(not value for value in row[1:]):
                failures.append(f"incomplete assessment fields for {unit_id}")
            modes_seen.update(mode.strip() for mode in row[3].split(","))
            task = normalized(row[2])
            for outcome in outcomes.get(unit_id, []):
                if normalized(outcome) not in task:
                    failures.append(f"outcome not represented in {unit_id}: {outcome}")

        if "[Projects](projects.md)" not in readme_path.read_text():
            failures.append(f"README missing project link in {directory.name}")
        if "[Assessment](assessment.md)" not in readme_path.read_text():
            failures.append(f"README missing assessment link in {directory.name}")
        for path in (projects_path, assessment_path, readme_path):
            failures.extend(relative_links(path))

    expected = set(expected_units)
    for label, counts in (("project", project_counts), ("assessment", assessment_counts)):
        missing = expected - set(counts)
        unknown = set(counts) - expected
        duplicates = sorted(unit for unit, count in counts.items() if count != 1)
        if missing:
            failures.append(f"{label} units missing: {sorted(missing)}")
        if unknown:
            failures.append(f"{label} units unknown: {sorted(unknown)}")
        if duplicates:
            failures.append(f"{label} duplicate units: {duplicates}")
    missing_modes = required_modes - modes_seen
    if missing_modes:
        failures.append(f"required assessment modes absent: {sorted(missing_modes)}")
    for path in curriculum.glob("*.md"):
        failures.extend(relative_links(path))

    print(f"disciplines={len(directories)}")
    print(f"units={len(expected_units)}")
    print(f"project_records={project_records}")
    print(f"project_mappings={sum(project_counts.values())}")
    print(f"assessment_mappings={sum(assessment_counts.values())}")
    print(f"assessment_modes={len(modes_seen)}")
    print(f"failures={len(failures)}")
    for failure in failures:
        print(f"FAIL {failure}")
    raise SystemExit(bool(failures))


if __name__ == "__main__":
    main()
