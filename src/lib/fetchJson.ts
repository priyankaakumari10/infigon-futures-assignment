import { buildApiUrl } from "@/config/api"

export async function fetchJson<T>(
  endpoint: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(buildApiUrl(endpoint), init)

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`)
  }

  const text = await res.text()

  if (!text) {
    throw new Error(`Empty response from url: ${endpoint}`)
  }

  return JSON.parse(text) as T
}


