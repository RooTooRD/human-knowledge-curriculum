#!/usr/bin/env python

from collections import Counter
from pathlib import Path
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"
hour_model = {
    "Beginner": (3, 4, 3, 2, 1, 13),
    "Intermediate": (5, 7, 6, 3, 3, 24),
    "Advanced": (9, 12, 18, 6, 5, 50),
    "Expert": (14, 18, 50, 9, 9, 100),
}
unit_pattern = re.compile(
    r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
    r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert); "
    r"(?P<status>Core|Extension)\]\s+←\s+(?P<prerequisites>.+)$",
    re.M,
)


def parse_graph() -> dict[str, dict]:
    units = {}
    for path in curriculum.glob("*/roadmap.md"):
        for match in unit_pattern.finditer(path.read_text()):
            record = match.groupdict()
            record["folder"] = path.parent.name
            record["prerequisites"] = (
                []
                if record["prerequisites"] == "none"
                else [value.strip() for value in record["prerequisites"].split(",")]
            )
            units[record["id"]] = record
    return units


def section_rows(text: str, heading: str) -> list[list[str]]:
    section = text.split(heading, 1)[1].split("\n## ", 1)[0]
    rows = []
    for line in section.splitlines():
        if not line.startswith("|") or line.startswith("|---"):
            continue
        rows.append([cell.strip() for cell in line.strip().strip("|").split("|")])
    if rows and rows[0][0] in {"Unit", "Scope", "Year", "Path"}:
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


def integer(value: str) -> int:
    return int(value.replace(",", "").replace("**", ""))


def route_units(text: str, heading: str) -> tuple[list[str], list[list[str]]]:
    section = text.split(heading, 1)[1].split("\n## ", 1)[0]
    details = re.findall(
        r"<summary>Year \d+: exact prerequisite-safe unit order</summary>\s+(.+?)\s+</details>",
        section,
        flags=re.S,
    )
    ordered = []
    yearly = []
    for detail in details:
        ids = re.findall(r"`([^`]+)` \(\d+h\)", detail)
        yearly.append(ids)
        ordered.extend(ids)
    return ordered, yearly


def validate_route(
    name: str,
    ordered: list[str],
    expected: set[str],
    units: dict[str, dict],
    failures: list[str],
) -> None:
    counts = Counter(ordered)
    if set(counts) != expected:
        failures.append(
            f"{name} coverage mismatch: missing={sorted(expected - set(counts))}, "
            f"unknown={sorted(set(counts) - expected)}"
        )
    duplicates = sorted(unit_id for unit_id, count in counts.items() if count != 1)
    if duplicates:
        failures.append(f"{name} duplicate units: {duplicates}")
    completed = set()
    for unit_id in ordered:
        missing_prerequisites = set(units[unit_id]["prerequisites"]) - completed
        if missing_prerequisites:
            failures.append(
                f"{name} schedules {unit_id} before {sorted(missing_prerequisites)}"
            )
        completed.add(unit_id)


def main() -> None:
    units = parse_graph()
    expected = set(units)
    core = {unit_id for unit_id, unit in units.items() if unit["status"] == "Core"}
    extensions = expected - core
    schedule_counts = Counter()
    component_totals = Counter()
    discipline_core_total = 0
    discipline_extension_total = 0
    failures = []

    directories = sorted(path.parent for path in curriculum.glob("*/roadmap.md"))
    for directory in directories:
        schedule_path = directory / "schedule.md"
        readme_path = directory / "README.md"
        if not schedule_path.exists():
            failures.append(f"missing schedule in {directory.name}")
            continue
        text = schedule_path.read_text()
        rows = section_rows(text, "## Unit time budget")
        observed_core = 0
        observed_extension = 0
        for row in rows:
            if len(row) != 10:
                failures.append(f"bad schedule row in {directory.name}: {row}")
                continue
            match = re.match(r"`([^`]+)`", row[0])
            if not match:
                failures.append(f"bad schedule ID in {directory.name}: {row[0]}")
                continue
            unit_id = match.group(1)
            schedule_counts[unit_id] += 1
            if unit_id not in units:
                failures.append(f"unknown schedule unit {unit_id}")
                continue
            unit = units[unit_id]
            if row[1] != unit["difficulty"] or row[2] != unit["status"]:
                failures.append(f"metadata mismatch for {unit_id}")
            numeric = tuple(integer(value) for value in row[3:9])
            if numeric != hour_model[unit["difficulty"]]:
                failures.append(
                    f"hour model mismatch for {unit_id}: {numeric} != "
                    f"{hour_model[unit['difficulty']]}"
                )
            if sum(numeric[:5]) != numeric[5]:
                failures.append(f"component sum mismatch for {unit_id}")
            for label, value in zip(
                ("reading", "exercises", "projects", "review", "mastery", "total"),
                numeric,
            ):
                component_totals[label] += value
            if unit["status"] == "Core":
                observed_core += numeric[5]
            else:
                observed_extension += numeric[5]
            if row[9] != "1d · 7d · 30d · 90d · 180d · 365d · annual":
                failures.append(f"review sequence mismatch for {unit_id}")
        summary = section_rows(text, "## Discipline totals")
        if len(summary) != 3:
            failures.append(f"bad discipline summary in {directory.name}")
        else:
            reported_core = integer(summary[0][1])
            reported_extension = integer(summary[1][1])
            reported_full = integer(summary[2][1])
            if (reported_core, reported_extension, reported_full) != (
                observed_core,
                observed_extension,
                observed_core + observed_extension,
            ):
                failures.append(f"discipline total mismatch in {directory.name}")
        discipline_core_total += observed_core
        discipline_extension_total += observed_extension
        if "[Schedule](schedule.md)" not in readme_path.read_text():
            failures.append(f"README missing schedule link in {directory.name}")
        failures.extend(relative_links(schedule_path))
        failures.extend(relative_links(readme_path))

    if set(schedule_counts) != expected:
        failures.append(
            f"schedule coverage mismatch: missing={sorted(expected - set(schedule_counts))}, "
            f"unknown={sorted(set(schedule_counts) - expected)}"
        )
    duplicates = sorted(unit_id for unit_id, count in schedule_counts.items() if count != 1)
    if duplicates:
        failures.append(f"duplicate schedule units: {duplicates}")
    if (discipline_core_total, discipline_extension_total) != (14460, 6394):
        failures.append(
            f"global hour mismatch: core={discipline_core_total}, "
            f"extension={discipline_extension_total}"
        )

    pathways_path = curriculum / "pathways.md"
    pathways = pathways_path.read_text()
    route_specs = [
        ("10-year", "## 10-year intensive Core", core, 10, 31 * 48),
        ("15-year", "## 15-year balanced Core plus one specialization", core, 15, 23 * 48),
        ("20-year", "## 20-year full polymath", expected, 20, 23 * 48),
    ]
    for name, heading, route_expected, year_count, capacity in route_specs:
        ordered, yearly = route_units(pathways, heading)
        year_rows = section_rows(pathways, heading)
        if len(yearly) != year_count:
            failures.append(f"{name} has {len(yearly)} years, expected {year_count}")
        if len(year_rows) != year_count:
            failures.append(f"{name} has {len(year_rows)} year-table rows, expected {year_count}")
        validate_route(name, ordered, route_expected, units, failures)
        route_reserve = 0
        for year_number, year_units in enumerate(yearly, 1):
            core_hours = sum(
                hour_model[units[unit_id]["difficulty"]][5]
                for unit_id in year_units
                if units[unit_id]["status"] == "Core"
            )
            extension_hours = sum(
                hour_model[units[unit_id]["difficulty"]][5]
                for unit_id in year_units
                if units[unit_id]["status"] == "Extension"
            )
            actual_hours = core_hours + extension_hours
            if actual_hours > capacity:
                failures.append(
                    f"{name} year {year_number} exceeds capacity: {actual_hours}>{capacity}"
                )
            if year_number <= len(year_rows):
                row = year_rows[year_number - 1]
                if len(row) != 8:
                    failures.append(f"bad {name} year row: {row}")
                    continue
                reported = [integer(value) for value in row[:7]]
                reserve_or_extension = reported[3]
                expected_fourth = (
                    capacity - core_hours if name == "15-year" else extension_hours
                )
                expected_values = [
                    year_number,
                    len(year_units),
                    core_hours,
                    expected_fourth,
                    core_hours + expected_fourth,
                    capacity,
                    capacity - core_hours - expected_fourth,
                ]
                if reported != expected_values:
                    failures.append(
                        f"{name} year {year_number} accounting mismatch: "
                        f"{reported} != {expected_values}"
                    )
                if name == "15-year":
                    route_reserve += reserve_or_extension
        if name == "15-year" and route_reserve != 2100:
            failures.append(f"15-year specialization reserve={route_reserve}, expected 2100")

    specialization_text = (curriculum / "specializations.md").read_text()
    specialization_rows = section_rows(specialization_text, "| Path |")
    specialization_extensions = []
    if len(specialization_rows) != 12:
        failures.append(f"specialization count={len(specialization_rows)}, expected 12")
    for row in specialization_rows:
        if len(row) != 6:
            failures.append(f"bad specialization row: {row}")
            continue
        gateways = re.findall(r"`([^`]+)`", row[1])
        required = re.findall(r"`([^`]+)`", row[2])
        if any(unit_id not in core for unit_id in gateways):
            failures.append(f"non-Core specialization gateway: {row[0]}")
        if any(unit_id not in extensions for unit_id in required):
            failures.append(f"non-Extension specialization requirement: {row[0]}")
        added_hours = sum(hour_model[units[unit_id]["difficulty"]][5] for unit_id in required)
        if integer(row[3]) != added_hours:
            failures.append(f"specialization hour mismatch: {row[0]}")
        specialization_extensions.extend(required)
    extension_counts = Counter(specialization_extensions)
    if set(extension_counts) != extensions:
        failures.append(
            f"specialization coverage mismatch: missing="
            f"{sorted(extensions - set(extension_counts))}"
        )
    duplicate_extensions = sorted(
        unit_id for unit_id, count in extension_counts.items() if count != 1
    )
    if duplicate_extensions:
        failures.append(f"specialization duplicates: {duplicate_extensions}")

    review_text = (curriculum / "review-system.md").read_text()
    for checkpoint in ("1 day", "7 days", "30 days", "90 days", "180 days", "365 days", "Annual"):
        if checkpoint not in review_text:
            failures.append(f"review checkpoint missing: {checkpoint}")
    for path in curriculum.glob("*.md"):
        failures.extend(relative_links(path))

    print(f"disciplines={len(directories)}")
    print(f"units={len(expected)}")
    print(f"core_units={len(core)}")
    print(f"extension_units={len(extensions)}")
    print(f"core_hours={discipline_core_total}")
    print(f"extension_hours={discipline_extension_total}")
    print(f"full_hours={discipline_core_total + discipline_extension_total}")
    print(f"specializations={len(specialization_rows)}")
    print(f"failures={len(failures)}")
    for failure in failures:
        print(f"FAIL {failure}")
    raise SystemExit(bool(failures))


if __name__ == "__main__":
    main()
