import { useState } from '#app'

export type StoredUser = {
  id: string
  email: string
  password: string
  fullName: string
  createdAt: string
}

const USERS_KEY = 'local_auth_users'
const isClient = typeof window !== 'undefined'

const safeParse = (value: string | null) => {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

const readUsers = () => {
  if (!isClient) return []
  const data = safeParse(localStorage.getItem(USERS_KEY))
  return Array.isArray(data) ? (data as StoredUser[]) : []
}

const writeUsers = (items: StoredUser[]) => {
  if (!isClient) return
  localStorage.setItem(USERS_KEY, JSON.stringify(items))
}

const normalizeEmail = (value: string) => value.trim().toLowerCase()

const createId = () => {
  if (isClient && typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `local-${Math.random().toString(36).slice(2, 10)}`
}

export const useUsersStore = () => {
  const users = useState<StoredUser[]>('users', () => [])
  const loaded = useState('usersLoaded', () => false)

  const loadUsers = (force = false) => {
    if (!isClient) return
    if (loaded.value && !force) return
    users.value = readUsers()
    loaded.value = true
  }

  const addUser = (newUser: StoredUser) => {
    users.value = [...users.value, newUser]
    writeUsers(users.value)
    loaded.value = true
  }

  const removeUser = (id: string) => {
    users.value = users.value.filter((storedUser) => storedUser.id !== id)
    writeUsers(users.value)
  }

  const setUsers = (items: StoredUser[]) => {
    users.value = items
    writeUsers(items)
    loaded.value = true
  }

  return {
    users,
    loadUsers,
    addUser,
    removeUser,
    setUsers,
    normalizeEmail,
    createId
  }
}
