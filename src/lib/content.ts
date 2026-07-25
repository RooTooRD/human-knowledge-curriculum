const discipline_modules = import.meta.glob("../../Curriculum/*/*.md", {
  query: "?url",
  import: "default"
}) as Record<string, () => Promise<string>>

const global_modules = import.meta.glob("../../Curriculum/*.md", {
  query: "?url",
  import: "default"
}) as Record<string, () => Promise<string>>

export const document_tabs = [
  { key: "overview", label: "Overview", file: "README.md" },
  { key: "roadmap", label: "Roadmap", file: "roadmap.md" },
  { key: "syllabus", label: "Syllabus", file: "syllabus.md" },
  { key: "resources", label: "Resources", file: "resources.md" },
  { key: "glossary", label: "Glossary", file: "glossary.md" },
  { key: "projects", label: "Projects", file: "projects.md" },
  { key: "assessment", label: "Assessment", file: "assessment.md" },
  { key: "schedule", label: "Schedule", file: "schedule.md" },
  { key: "connections", label: "Connections", file: "connections.md" }
] as const

export type DocumentKey = (typeof document_tabs)[number]["key"]

export async function discipline_document(slug: string, key: DocumentKey) {
  const file = document_tabs.find((tab) => tab.key === key)?.file ?? "README.md"
  const loader = discipline_modules[`../../Curriculum/${slug}/${file}`]
  return loader ? fetch(await loader()).then((response) => response.text()) : ""
}

export async function global_document(key: string) {
  const loader = global_modules[`../../Curriculum/${key}.md`]
  return loader ? fetch(await loader()).then((response) => response.text()) : ""
}

export function markdown_headings(markdown: string) {
  return [...markdown.matchAll(/^##\s+(.+)$/gm)].map((match) => ({
    label: match[1].replace(/[`*_]/g, ""),
    anchor: slugify(match[1])
  }))
}

export function slugify(value: string) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function strip_first_heading(markdown: string) {
  return markdown.replace(/^# .+\n+/, "")
}
