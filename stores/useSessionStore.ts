import { useUsersStore } from '~/stores/useUsersStore'
import { useState } from '#app'

export type SessionUser = {
  id: string
  email: string
  fullName: string
  role: 'user' | 'admin'
}

const SESSION_KEY = 'local_auth_session'
const isClient = typeof window !== 'undefined'

const safeParse = (value: string | null) => {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

const normalizeSession = (value: unknown): SessionUser | null => {
  if (!value || typeof value !== 'object') return nullx 
  const session = value as Partial<SessionUser>
  if (!session.id || !session.email) return null
  const role = session.role === 'admin' ? 'admin' : 'user'
  return {
    id: session.id,
    email: session.email,
    fullName: session.fullName || '',
    role
  }
}

export const useSessionStore = () => {
  const { normalizeEmail } = useUsersStore()
  const user = useState<SessionUser | null>('user', () => null)

  const readSession = (): SessionUser | null => {
    if (!isClient) return null
    const data = safeParse(localStorage.getItem(SESSION_KEY))
    const session = normalizeSession(data)
    if (!session) return null
    session.email = normalizeEmail(session.email)
    return session
  }

  const writeSession = (session: SessionUser) => {
    if (!isClient) return
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    user.value = session
  }

  const clearSession = () => {
    if (!isClient) return
    localStorage.removeItem(SESSION_KEY)
    user.value = null
  }

  const getSession = () => {
    const session = readSession()
    user.value = session
    return session
  }

  return {
    user,
    readSession,
    writeSession,
    clearSession,
    getSession
  }
}
