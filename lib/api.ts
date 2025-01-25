// lib/api.ts
const API_URL = "http://localhost:8000/api/v1"

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token")
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        ...options.headers
      }
    })
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`)
    }
    return res
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

export async function login(email: string, password: string) {
  const res = await fetchWithAuth('/auth/token', {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`

  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`Login failed: ${res.status} - ${errorText}`)
  }

  const data = await res.json()
  localStorage.setItem("token", data.access_token)
  return data
}

export async function getApiKeys() {
  const res = await fetchWithAuth('/api-keys/')
  return res.json()
}

export async function createApiKey(name: string) {
  const res = await fetchWithAuth('/api-keys/', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key_name: name })
  })
  return res.json()
}

export async function deleteApiKey(id: string) {
  await fetchWithAuth(`/api-keys/${id}`, {
    method: "DELETE"
  })
}

export type { ApiKey } from '../types'