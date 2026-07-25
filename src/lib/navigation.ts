import { disciplines, units } from "./curriculum_index"
import type { DocumentKey } from "./content"

export type AppRoute =
  | { name: "home" }
  | { name: "explore" }
  | { name: "pathways" }
  | { name: "progress" }
  | { name: "about" }
  | { name: "discipline"; slug: string; document: DocumentKey }
  | { name: "unit"; id: string }
  | { name: "document"; key: string }

const document_keys = new Set([
  "overview",
  "roadmap",
  "syllabus",
  "resources",
  "glossary",
  "projects",
  "assessment",
  "schedule",
  "connections"
])

export function parse_hash(hash: string): AppRoute {
  const path = hash.replace(/^#\/?/, "").split("?")[0]
  const parts = path.split("/").filter(Boolean)
  if (!parts.length) return { name: "home" }
  if (parts[0] === "explore") return { name: "explore" }
  if (parts[0] === "pathways") return { name: "pathways" }
  if (parts[0] === "progress") return { name: "progress" }
  if (parts[0] === "about") return { name: "about" }
  if (parts[0] === "unit" && units.some((unit) => unit.id === parts[1])) {
    return { name: "unit", id: parts[1] }
  }
  if (parts[0] === "document" && parts[1]) {
    return { name: "document", key: parts[1] }
  }
  if (
    parts[0] === "discipline" &&
    disciplines.some((discipline) => discipline.slug === parts[1])
  ) {
    const document = document_keys.has(parts[2]) ? parts[2] : "overview"
    return {
      name: "discipline",
      slug: parts[1],
      document: document as DocumentKey
    }
  }
  return { name: "home" }
}

export function route_title(route: AppRoute) {
  if (route.name === "discipline") {
    return disciplines.find((discipline) => discipline.slug === route.slug)?.title
  }
  if (route.name === "unit") {
    return units.find((unit) => unit.id === route.id)?.title
  }
  if (route.name === "document") {
    return route.key
      .split("-")
      .map((word) => word[0]?.toUpperCase() + word.slice(1))
      .join(" ")
  }
  const titles: Partial<Record<AppRoute["name"], string>> = {
    home: "The Human Knowledge Curriculum",
    explore: "Explore the curriculum",
    pathways: "Lifelong pathways",
    progress: "Your progress",
    about: "About the curriculum",
  }
  return titles[route.name] ?? "Human Knowledge"
}
