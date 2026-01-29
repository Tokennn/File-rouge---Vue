import { onMounted } from 'vue'
import { useState } from '#app'
import type { StoredUser } from '~/stores/useUsersStore'
import type { SessionUser } from '~/stores/useSessionStore'
import { useSessionStore } from '~/stores/useSessionStore'
import { useUsersStore } from '~/stores/useUsersStore'

export const useAuth = () => {
  const isClient = typeof window !== 'undefined'
  const loading = useState('authLoading', () => false)

  const usersStore = useUsersStore()
  const sessionStore = useSessionStore()
  const { user } = sessionStore

  const toSessionUser = (storedUser: StoredUser): SessionUser => ({
    id: storedUser.id,
    email: storedUser.email,
    fullName: storedUser.fullName,
    role: 'user'
  })

  const ensureUsersLoaded = () => {
    usersStore.loadUsers()
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    loading.value = true
    try {
      if (!isClient) throw new Error('Inscription disponible uniquement côté client')

      ensureUsersLoaded()

      const normalizedEmail = usersStore.normalizeEmail(email)
      const trimmedName = fullName.trim()

      if (!normalizedEmail || !password) {
        throw new Error('Email et mot de passe requis')
      }

      const alreadyExists = usersStore.users.value.some(
        (existing) => existing.email === normalizedEmail
      )
      if (alreadyExists) {
        throw new Error('Un compte existe déjà avec cet email')
      }

      const newUser: StoredUser = {
        id: usersStore.createId(),
        email: normalizedEmail,
        password,
        fullName: trimmedName,
        createdAt: new Date().toISOString()
      }

      usersStore.addUser(newUser)

      const sessionUser = toSessionUser(newUser)

      return { data: { user: sessionUser }, error: null }
    } catch (error: any) {
      return { data: null, error }
    } finally {
      loading.value = false
    }
  }

  const signIn = async (email: string, password: string) => {
    loading.value = true
    try {
      if (!isClient) throw new Error('Connexion disponible uniquement côté client')

      ensureUsersLoaded()

      const normalizedEmail = usersStore.normalizeEmail(email)
      const existing = usersStore.users.value.find(
        (storedUser) => storedUser.email === normalizedEmail
      )

      if (!existing || existing.password !== password) {
        throw new Error('Email ou mot de passe incorrect')
      }

      const sessionUser = toSessionUser(existing)
      sessionStore.writeSession(sessionUser)

      return { data: { user: sessionUser }, error: null }
    } catch (error: any) {
      return { data: null, error }
    } finally {
      loading.value = false
    }
  }

  const signInAsAdmin = async () => {
    loading.value = true
    try {
      if (!isClient) throw new Error('Connexion admin disponible uniquement côté client')

      const sessionUser: SessionUser = {
        id: 'admin-local',
        email: usersStore.normalizeEmail('admin@local'),
        fullName: 'Admin',
        role: 'admin'
      }

      sessionStore.writeSession(sessionUser)

      return { data: { user: sessionUser }, error: null }
    } catch (error: any) {
      return { data: null, error }
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    loading.value = true
    try {
      sessionStore.clearSession()
      return { error: null }
    } catch (error: any) {
      return { error }
    } finally {
      loading.value = false
    }
  }

  const getSession = async () => {
    return sessionStore.getSession()
  }

  onMounted(() => {
    if (!user.value) {
      sessionStore.getSession()
    }
  })

  return {
    user,
    loading,
    signUp,
    signIn,
    signInAsAdmin,
    signOut,
    getSession
  }
}
