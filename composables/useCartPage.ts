import { useCartStore } from '~/stores/useCartStore'
import { onMounted } from 'vue'
import { navigateTo } from '#app'

export const useCartPage = () => {
  const { user, getSession } = useAuth()
  const cartStore = useCartStore()
  const { formatPrice } = usePrice()

  const { cart, subtotal, totalItems, increment, decrement, removeItem, clearCart, loadForUser } =
    cartStore

  onMounted(async () => {
    await getSession()
    if (!user.value) {
      navigateTo('/login')
      return
    }
    loadForUser(user.value.id)
  })

  return {
    cart,
    subtotal,
    totalItems,
    increment,
    decrement,
    removeItem,
    clearCart,
    formatPrice
  }
}
