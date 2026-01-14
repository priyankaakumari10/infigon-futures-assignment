import { buildApiUrl } from "@/config/api"

export async function fetchJson<T>(
  endpoint: string,
  init?: RequestInit
): Promise<T> {
  const url = buildApiUrl(endpoint)
  
  try {
    const res = await fetch(url, init)

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`)
    }

    const text = await res.text()

    if (!text) {
      throw new Error(`Empty response from ${url}`)
    }

    try {
      return JSON.parse(text) as T
    } catch (parseError) {
      throw new Error(`Invalid JSON response from ${url}: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`)
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error(`Unexpected error fetching ${url}: ${String(error)}`)
  }
}


