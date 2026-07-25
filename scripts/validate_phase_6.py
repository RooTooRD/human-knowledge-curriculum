#!/usr/bin/env python

from collections import Counter
from pathlib import Path
from urllib.parse import unquote
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"
failures = []

required_portal_headings = [
    "Why this subject matters",
    "Learning outcomes",
    "Knowledge graph",
    "Complete syllabus",
    "Prerequisites",
    "Estimated hours",
    "Mastery checklist",
    "Resources",
    "Projects",
    "Assessment",
    "Common misconceptions",
    "Connections",
]

required_public_files = [
    root / "README.md",
    root / "CONTRIBUTING.md",
    curriculum / "learner-guide.md",
    curriculum / "editorial-policy.md",
    curriculum / "evaluation-protocol.md",
    curriculum / "publication-checklist.md",
    curriculum / "phase-6-schema.md",
    curriculum / "connection-atlas.md",
]

unit_pattern = re.compile(
    r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
    r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert); "
    r"(?P<status>Core|Extension)\]\s+←\s+(?P<prerequisites>.+)$"
)


def record_failure(message: str) -> None:
    if len(failures) < 100:
        failures.append(message)


def parse_graph() -> tuple[dict[str, dict], dict[str, list[str]], list[str]]:
    units = {}
    by_folder = {}
    folders = []
    for path in sorted(curriculum.glob("*/roadmap.md")):
        folder = path.parent.name
        folders.append(folder)
        ids = []
        for line in path.read_text().splitlines():
            match = unit_pattern.match(line)
            if not match:
                continue
            record = match.groupdict()
            record["folder"] = folder
            record["prerequisites"] = (
                []
                if record["prerequisites"] == "none"
                else [value.strip() for value in record["prerequisites"].split(",")]
            )
            if record["id"] in units:
                record_failure(f"Duplicate graph ID: {record['id']}")
            units[record["id"]] = record
            ids.append(record["id"])
        by_folder[folder] = ids
    return units, by_folder, folders


def direct_edges(
    first: str,
    second: str,
    units: dict[str, dict],
    by_folder: dict[str, list[str]],
) -> set[tuple[str, str]]:
    edges = set()
    for dependent_id in by_folder[first] + by_folder[second]:
        for prerequisite in units[dependent_id]["prerequisites"]:
            if {units[prerequisite]["folder"], units[dependent_id]["folder"]} == {
                first,
                second,
            }:
                edges.add((prerequisite, dependent_id))
    return edges


def github_slug(value: str) -> str:
    value = re.sub(r"<[^>]+>", "", value)
    value = value.replace("`", "").lower()
    value = re.sub(r"[^\w\-\s]", "", value)
    return re.sub(r"\s+", "-", value.strip())


def document_anchors(path: Path) -> set[str]:
    anchors = set(re.findall(r'<a\s+id="([^"]+)"\s*></a>', path.read_text()))
    counts = Counter()
    for line in path.read_text().splitlines():
        match = re.match(r"^#{1,6}\s+(.+?)\s*$", line)
        if not match:
            continue
        base = github_slug(match.group(1))
        suffix = counts[base]
        anchors.add(base if suffix == 0 else f"{base}-{suffix}")
        counts[base] += 1
    return anchors


def validate_public_files() -> None:
    for path in required_public_files:
        if not path.exists():
            record_failure(f"Missing public file: {path.relative_to(root)}")


def validate_portals(
    units: dict[str, dict],
    by_folder: dict[str, list[str]],
    folders: list[str],
) -> None:
    for folder in folders:
        portal = curriculum / folder / "README.md"
        connections = curriculum / folder / "connections.md"
        if not portal.exists():
            record_failure(f"Missing portal: {folder}/README.md")
            continue
        if not connections.exists():
            record_failure(f"Missing connections file: {folder}/connections.md")
            continue
        headings = re.findall(r"^## (.+)$", portal.read_text(), re.MULTILINE)
        positions = []
        for heading in required_portal_headings:
            count = headings.count(heading)
            if count != 1:
                record_failure(
                    f"{folder}/README.md heading {heading!r} occurs {count} times"
                )
            elif heading in headings:
                positions.append(headings.index(heading))
        if positions != sorted(positions) or len(positions) != len(required_portal_headings):
            record_failure(f"{folder}/README.md required headings are out of order")
        for required_link in [
            "roadmap.md",
            "syllabus.md",
            "resources.md",
            "projects.md",
            "assessment.md",
            "schedule.md",
            "connections.md",
        ]:
            if f"]({required_link})" not in portal.read_text():
                record_failure(f"{folder}/README.md does not expose {required_link}")

        connection_ids = re.findall(
            r"\[`(CONN-[A-Z]+-[A-Z]+)`\]\(\.\./connection-atlas\.md#[^)]+\)",
            connections.read_text(),
        )
        if len(connection_ids) != len(folders) - 1:
            record_failure(
                f"{folder}/connections.md has {len(connection_ids)} connection rows"
            )
        if len(set(connection_ids)) != len(connection_ids):
            record_failure(f"{folder}/connections.md has duplicate pair records")

        folder_prefix = by_folder[folder][0].split("-")[0]
        folder_rank = {value: index for index, value in enumerate(folders)}
        expected = set()
        for other in folders:
            if other == folder:
                continue
            first, second = (
                (folder, other)
                if folder_rank[folder] < folder_rank[other]
                else (other, folder)
            )
            expected.add(
                f"{by_folder[first][0].split('-')[0]}-"
                f"{by_folder[second][0].split('-')[0]}"
            )
        observed = {value.removeprefix("CONN-") for value in connection_ids}
        if observed != expected:
            record_failure(f"{folder}/connections.md does not cover all disciplines")

        row_ids = re.findall(r"`([A-Z]{3}-[BIAE]\d{2})`", connections.read_text())
        unknown = sorted(set(row_ids) - set(units))
        if unknown:
            record_failure(f"{folder}/connections.md has unknown units: {unknown}")


def validate_atlas(
    units: dict[str, dict],
    by_folder: dict[str, list[str]],
    folders: list[str],
) -> int:
    path = curriculum / "connection-atlas.md"
    text = path.read_text()
    matches = list(
        re.finditer(
            r'^### `(CONN-[A-Z]+-[A-Z]+)` — (.+?) ↔ (.+?)$\n',
            text,
            re.MULTILINE,
        )
    )
    pair_count = len(folders) * (len(folders) - 1) // 2
    if len(matches) != pair_count:
        record_failure(f"Atlas has {len(matches)} pair records, expected {pair_count}")
    ids = [match.group(1) for match in matches]
    if len(ids) != len(set(ids)):
        record_failure("Atlas has duplicate pair IDs")

    prefix_to_folder = {
        values[0].split("-")[0]: folder for folder, values in by_folder.items()
    }
    expected_ids = {
        "CONN-"
        + by_folder[first][0].split("-")[0]
        + "-"
        + by_folder[second][0].split("-")[0]
        for index, first in enumerate(folders)
        for second in folders[index + 1 :]
    }
    if set(ids) != expected_ids:
        record_failure("Atlas pair-ID set does not equal the complete discipline pairs")

    for index, match in enumerate(matches):
        connection_id = match.group(1)
        block_end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block = text[match.start() : block_end]
        first_prefix, second_prefix = connection_id.removeprefix("CONN-").split("-")
        first = prefix_to_folder[first_prefix]
        second = prefix_to_folder[second_prefix]
        anchor = f'<a id="{connection_id.lower()}"></a>'
        if anchor not in text[max(0, match.start() - 80) : match.start()]:
            record_failure(f"{connection_id} lacks its explicit anchor")
        for field in [
            "**Relationship.**",
            "**Entry units.**",
            "**Integration prompt.**",
            "**Graph relation.**",
        ]:
            if field not in block:
                record_failure(f"{connection_id} lacks {field}")
        entry_match = re.search(
            r"\*\*Entry units\.\*\*(.+?)\n\n", block, re.DOTALL
        )
        if not entry_match:
            record_failure(f"{connection_id} entry-unit field cannot be parsed")
            continue
        entry_ids = set(re.findall(r"`([A-Z]{3}-[BIAE]\d{2})`", entry_match.group(1)))
        if not any(units[value]["folder"] == first for value in entry_ids if value in units):
            record_failure(f"{connection_id} lacks an entry unit from {first}")
        if not any(units[value]["folder"] == second for value in entry_ids if value in units):
            record_failure(f"{connection_id} lacks an entry unit from {second}")
        unknown = entry_ids - set(units)
        if unknown:
            record_failure(f"{connection_id} has unknown entry units: {sorted(unknown)}")

        expected_edges = direct_edges(first, second, units, by_folder)
        graph_match = re.search(r"\*\*Graph relation\.\*\*(.+?)\n\n", block, re.DOTALL)
        if not graph_match:
            record_failure(f"{connection_id} graph relation cannot be parsed")
            continue
        relation = graph_match.group(1)
        observed_edges = set(
            re.findall(
                r"`([A-Z]{3}-[BIAE]\d{2})`\s+→\s+"
                r"`([A-Z]{3}-[BIAE]\d{2})`",
                relation,
            )
        )
        if observed_edges != expected_edges:
            record_failure(f"{connection_id} direct graph edges do not reconcile")
        if not expected_edges and "Integrative only" not in relation:
            record_failure(f"{connection_id} should be labeled integrative only")
    return len(matches)


def validate_unit_parity(
    units: dict[str, dict],
    by_folder: dict[str, list[str]],
    folders: list[str],
) -> None:
    artifacts = [
        "syllabus.md",
        "resources.md",
        "glossary.md",
        "projects.md",
        "assessment.md",
        "schedule.md",
    ]
    row_pattern = re.compile(r"^\| `([A-Z]{3}-[BIAE]\d{2})`", re.MULTILINE)
    section_pattern = re.compile(
        r"^## `([A-Z]{3}-[BIAE]\d{2})`", re.MULTILINE
    )
    for folder in folders:
        expected = set(by_folder[folder])
        for artifact in artifacts:
            path = curriculum / folder / artifact
            if not path.exists():
                record_failure(f"Missing required artifact: {folder}/{artifact}")
                continue
            text = path.read_text()
            ids = row_pattern.findall(text)
            if artifact == "syllabus.md" and not ids:
                ids = section_pattern.findall(text)
            if set(ids) != expected or len(ids) != len(expected):
                record_failure(
                    f"{folder}/{artifact} unit rows do not have exact one-to-one parity"
                )


def validate_markdown() -> tuple[int, int]:
    markdown_files = sorted(
        path for path in root.rglob("*.md") if ".git" not in path.parts
    )
    broken_links = 0
    checked_links = 0
    anchors_by_path = {}
    link_pattern = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
    image_pattern = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")

    for path in markdown_files:
        text = path.read_text()
        headings = [
            (len(match.group(1)), match.group(2))
            for match in re.finditer(r"^(#{1,6})\s+(.+?)\s*$", text, re.MULTILINE)
        ]
        if not headings or headings[0][0] != 1:
            record_failure(f"{path.relative_to(root)} lacks an opening level-one heading")
        if sum(level == 1 for level, _ in headings) != 1:
            record_failure(f"{path.relative_to(root)} does not have exactly one H1")
        for (previous, _), (current, heading) in zip(headings, headings[1:]):
            if current > previous + 1:
                record_failure(
                    f"{path.relative_to(root)} skips heading level before {heading!r}"
                )
        for alt, _ in image_pattern.findall(text):
            if not alt.strip():
                record_failure(f"{path.relative_to(root)} has empty image alt text")
        if "```mermaid" in text and "In prose:" not in text:
            record_failure(f"{path.relative_to(root)} lacks prose for Mermaid")

        table_lines = []
        in_code = False
        for line in text.splitlines() + [""]:
            if line.startswith("```"):
                in_code = not in_code
            if not in_code and line.startswith("|") and line.endswith("|"):
                table_lines.append(line)
                continue
            if table_lines:
                columns = [
                    len(re.split(r"(?<!\\)\|", value)) - 2 for value in table_lines
                ]
                if len(set(columns)) != 1:
                    record_failure(
                        f"{path.relative_to(root)} has inconsistent table columns"
                    )
                if len(table_lines) < 2 or not re.match(
                    r"^\|(?:\s*:?-+:?\s*\|)+$", table_lines[1]
                ):
                    record_failure(
                        f"{path.relative_to(root)} has a table without delimiter row"
                    )
                table_lines = []

        for target in link_pattern.findall(text):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            target = target.strip("<>")
            target = target.split(' "')[0]
            file_part, separator, fragment = target.partition("#")
            destination = path if not file_part else path.parent / unquote(file_part)
            checked_links += 1
            if not destination.exists():
                broken_links += 1
                record_failure(
                    f"Broken link in {path.relative_to(root)}: {target}"
                )
                continue
            if fragment and destination.suffix == ".md":
                resolved = destination.resolve()
                if resolved not in anchors_by_path:
                    anchors_by_path[resolved] = document_anchors(resolved)
                if unquote(fragment) not in anchors_by_path[resolved]:
                    broken_links += 1
                    record_failure(
                        f"Broken anchor in {path.relative_to(root)}: {target}"
                    )
    return checked_links, broken_links


def main() -> None:
    validate_public_files()
    units, by_folder, folders = parse_graph()
    validate_portals(units, by_folder, folders)
    atlas_pairs = validate_atlas(units, by_folder, folders)
    validate_unit_parity(units, by_folder, folders)
    checked_links, broken_links = validate_markdown()

    print(f"disciplines={len(folders)}")
    print(f"units={len(units)}")
    print(f"discipline_portals={len(list(curriculum.glob('*/README.md')))}")
    print(f"connection_views={len(list(curriculum.glob('*/connections.md')))}")
    print(f"canonical_connection_pairs={atlas_pairs}")
    print(f"directed_connection_views={len(folders) * (len(folders) - 1)}")
    print(f"markdown_files={len(list(root.rglob('*.md')))}")
    print(f"local_links_checked={checked_links}")
    print(f"broken_local_links={broken_links}")
    print(f"failures={len(failures)}")
    for failure in failures:
        print(f"- {failure}")
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
