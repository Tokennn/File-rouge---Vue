import { useState } from '#app'

export type ContactRequestType = 'question' | 'custom'

export type ContactRequest = {
  id: string
  fullName: string
  email: string
  requestType: ContactRequestType
  subject: string
  message: string
  shoeModel?: string
  size?: string
  colors?: string
  budget?: string
  createdAt: string
}

const CONTACT_KEY = 'local_contact_requests'
const isClient = typeof window !== 'undefined'

const safeParse = (value: string | null) => {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

const readRequests = (): ContactRequest[] => {
  if (!isClient) return []
  const data = safeParse(localStorage.getItem(CONTACT_KEY))
  return Array.isArray(data) ? (data as ContactRequest[]) : []
}

const writeRequests = (items: ContactRequest[]) => {
  if (!isClient) return
  localStorage.setItem(CONTACT_KEY, JSON.stringify(items))
}

const createId = () => {
  if (isClient && typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `local-${Math.random().toString(36).slice(2, 10)}`
}

export const useContactStore = () => {
  const requests = useState<ContactRequest[]>('contactRequests', () => [])
  const loaded = useState('contactRequestsLoaded', () => false)

  const loadRequests = (force = false) => {
    if (!isClient) return
    if (loaded.value && !force) return
    requests.value = readRequests()
    loaded.value = true
  }

  const addRequest = (payload: Omit<ContactRequest, 'id' | 'createdAt'>) => {
    const newRequest: ContactRequest = {
      ...payload,
      id: createId(),
      createdAt: new Date().toISOString()
    }
    requests.value = [newRequest, ...requests.value]
    writeRequests(requests.value)
    loaded.value = true
    return newRequest
  }

  const removeRequest = (id: string) => {
    requests.value = requests.value.filter((request) => request.id !== id)
    writeRequests(requests.value)
  }

  const clearRequests = () => {
    requests.value = []
    writeRequests([])
  }

  return {
    requests,
    loadRequests,
    addRequest,
    removeRequest,
    clearRequests
  }
}
