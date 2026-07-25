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
resource_id_pattern = re.compile(r"`((?:[A-Z]{3}|GLB)\.RES\.\d{3})`")
bundle_id_pattern = re.compile(r"`([A-Z]{3}\.BUNDLE\.(?:CORE|ADVANCED))`")


def table_rows(text: str, heading: str) -> list[list[str]]:
    section = text.split(heading, 1)[1]
    section = section.split("\n## ", 1)[0]
    rows = []
    for line in section.splitlines():
        if not line.startswith("|") or line.startswith("|---"):
            continue
        rows.append([cell.strip() for cell in line.strip().strip("|").split("|")])
    if rows and rows[0][0] in {"ID", "Bundle", "Unit"}:
        return rows[1:]
    return rows


def relative_links(path: Path) -> list[str]:
    broken = []
    for target in re.findall(r"\[[^\]]+\]\(([^)]+)\)", path.read_text()):
        if re.match(r"^[a-z]+://", target) or target.startswith("#"):
            continue
        clean_target = target.split("#", 1)[0]
        if clean_target and not (path.parent / clean_target).exists():
            broken.append(f"{path.relative_to(root)} -> {target}")
    return broken


def main() -> None:
    discipline_dirs = sorted(path.parent for path in curriculum.glob("*/roadmap.md"))
    global_catalog = set(resource_id_pattern.findall((curriculum / "resource-catalog.md").read_text()))
    all_units = []
    failures = []
    resource_counts = Counter()
    glossary_counts = Counter()
    bundle_count = 0

    for directory in discipline_dirs:
        units = unit_pattern.findall((directory / "roadmap.md").read_text())
        all_units.extend(units)
        resources_path = directory / "resources.md"
        glossary_path = directory / "glossary.md"
        if not resources_path.exists() or not glossary_path.exists():
            failures.append(f"missing Phase 3 files in {directory.name}")
            continue

        resources_text = resources_path.read_text()
        local_catalog_rows = table_rows(resources_text, "## Discipline catalog")
        local_catalog = {
            match.group(1)
            for row in local_catalog_rows
            if (match := re.fullmatch(r"`([^`]+)`", row[0]))
        }
        for row in local_catalog_rows:
            if len(row) != 5 or not re.search(r"\b(?:19|20)\d{2}\b", row[2]):
                failures.append(f"incomplete catalog metadata: {directory.name}: {row}")
        bundle_rows = table_rows(resources_text, "## Resource bundles")
        bundles = {}
        for row in bundle_rows:
            if len(row) != 11:
                failures.append(f"bundle does not have ten categories: {directory.name}: {row}")
                continue
            bundle = row[0].strip("`")
            selections = [value.strip("`") for value in row[1:]]
            bundles[bundle] = selections
            bundle_count += 1
            for selection in selections:
                if selection not in local_catalog | global_catalog:
                    failures.append(f"unresolved resource {selection} in {bundle}")

        matrix_rows = table_rows(resources_text, "## Unit resource matrix")
        for row in matrix_rows:
            if len(row) != 3:
                failures.append(f"bad matrix row in {directory.name}: {row}")
                continue
            unit_match = re.match(r"`([^`]+)`", row[0])
            bundle_match = re.fullmatch(r"`([^`]+)`", row[1])
            if not unit_match or not bundle_match:
                failures.append(f"bad matrix identifiers in {directory.name}: {row}")
                continue
            unit_id = unit_match.group(1)
            bundle_id = bundle_match.group(1)
            resource_counts[unit_id] += 1
            if bundle_id not in bundles:
                failures.append(f"unresolved bundle {bundle_id} for {unit_id}")
            if not row[2]:
                failures.append(f"missing resource focus for {unit_id}")

        glossary_rows = table_rows(glossary_path.read_text(), "| Unit | Terms |")
        for row in glossary_rows:
            if len(row) != 2:
                failures.append(f"bad glossary row in {directory.name}: {row}")
                continue
            unit_match = re.fullmatch(r"`([^`]+)`", row[0])
            if not unit_match:
                failures.append(f"bad glossary identifier in {directory.name}: {row[0]}")
                continue
            unit_id = unit_match.group(1)
            glossary_counts[unit_id] += 1
            if len(re.findall(r"\*\*[^*]+:\*\*", row[1])) < 2:
                failures.append(f"fewer than two glossary terms for {unit_id}")

        for path in (resources_path, glossary_path, directory / "README.md"):
            failures.extend(relative_links(path))

    expected = set(all_units)
    for label, counts in (("resource", resource_counts), ("glossary", glossary_counts)):
        missing = expected - set(counts)
        unknown = set(counts) - expected
        duplicates = sorted(unit for unit, count in counts.items() if count != 1)
        if missing:
            failures.append(f"{label} units missing: {sorted(missing)}")
        if unknown:
            failures.append(f"{label} units unknown: {sorted(unknown)}")
        if duplicates:
            failures.append(f"{label} duplicate units: {duplicates}")

    for path in curriculum.glob("*.md"):
        failures.extend(relative_links(path))

    print(f"disciplines={len(discipline_dirs)}")
    print(f"units={len(all_units)}")
    print(f"resource_mappings={sum(resource_counts.values())}")
    print(f"glossary_mappings={sum(glossary_counts.values())}")
    print(f"resource_bundles={bundle_count}")
    print(f"shared_catalog_records={len(global_catalog)}")
    print(f"failures={len(failures)}")
    for failure in failures:
        print(f"FAIL {failure}")
    raise SystemExit(bool(failures))


if __name__ == "__main__":
    main()
