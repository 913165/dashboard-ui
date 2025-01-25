// types/index.d.ts
export interface ApiKey {
  id: string
  key_name: string
  prefix: string
  created_at: string
  is_active: boolean
}

export interface User {
  id: string
  email: string
  first_name?: string
  last_name?: string
}