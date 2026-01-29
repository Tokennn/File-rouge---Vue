import type { Product } from '~/stores/useProductsStore'
import { computed } from 'vue'
import { useState } from '#app'
import { useAuth } from '~/composables/useAuth'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  code: string
  category: string
}

const isClient = typeof window !== 'undefined'

const safeParse = (value: string | null) => {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

const readCart = (key: string): CartItem[] => {
  if (!isClient) return []
  const data = safeParse(localStorage.getItem(key))
  return Array.isArray(data) ? (data as CartItem[]) : []
}

const writeCart = (key: string, items: CartItem[]) => {
  if (!isClient) return
  localStorage.setItem(key, JSON.stringify(items))
}

const cartKey = (userId: string) => `local_cart_${userId}`

export const useCartStore = () => {
  const { user } = useAuth()
  const cart = useState<CartItem[]>('cart', () => [])
  const ownerId = useState<string | null>('cartOwner', () => null)

  const loadForUser = (userId?: string | null) => {
    if (!isClient) return
    if (!userId) {
      cart.value = []
      ownerId.value = null
      return
    }

    const key = cartKey(userId)
    cart.value = readCart(key)
    ownerId.value = userId
  }

  const persist = () => {
    if (!ownerId.value) return
    writeCart(cartKey(ownerId.value), cart.value)
  }

  const ensureOwner = () => {
    const currentId = user.value?.id
    if (!currentId) return null
    if (ownerId.value !== currentId) {
      loadForUser(currentId)
    }
    return currentId
  }

  const addToCart = (product: Product, quantity = 1) => {
    const currentId = ensureOwner()
    if (!currentId) return false

    const existing = cart.value.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        code: product.code,
        category: product.category
      })
    }

    persist()
    return true
  }

  const removeItem = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id)
    persist()
  }

  const updateQuantity = (id: number, nextQuantity: number) => {
    if (nextQuantity <= 0) {
      removeItem(id)
      return
    }
    const item = cart.value.find((entry) => entry.id === id)
    if (!item) return
    item.quantity = nextQuantity
    persist()
  }

  const increment = (id: number) => {
    const item = cart.value.find((entry) => entry.id === id)
    if (!item) return
    updateQuantity(id, item.quantity + 1)
  }

  const decrement = (id: number) => {
    const item = cart.value.find((entry) => entry.id === id)
    if (!item) return
    updateQuantity(id, item.quantity - 1)
  }

  const clearCart = () => {
    cart.value = []
    persist()
  }

  const subtotal = computed(() =>
    cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
  )

  const totalItems = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0))

  return {
    cart,
    subtotal,
    totalItems,
    loadForUser,
    addToCart,
    removeItem,
    updateQuantity,
    increment,
    decrement,
    clearCart
  }
}
