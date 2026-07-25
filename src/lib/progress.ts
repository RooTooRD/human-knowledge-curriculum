const storage_key = "human-knowledge-progress-v1"

export function load_progress(): string[] {
  try {
    const stored = JSON.parse(localStorage.getItem(storage_key) ?? "[]")
    return Array.isArray(stored)
      ? stored.filter((value): value is string => typeof value === "string")
      : []
  } catch {
    return []
  }
}

export function save_progress(progress: string[]) {
  localStorage.setItem(storage_key, JSON.stringify([...new Set(progress)]))
}

export function export_progress(progress: string[]) {
  const payload = JSON.stringify(
    {
      schema: "human-knowledge-progress-v1",
      exported_at: new Date().toISOString(),
      mastered_units: [...new Set(progress)].sort()
    },
    null,
    2
  )
  const url = URL.createObjectURL(
    new Blob([payload], { type: "application/json" })
  )
  const link = document.createElement("a")
  link.href = url
  link.download = "human-knowledge-progress.json"
  link.click()
  URL.revokeObjectURL(url)
}
