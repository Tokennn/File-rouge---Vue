import { useProductsStore } from '~/stores/useProductsStore'
import { useUsersStore } from '~/stores/useUsersStore'
import { useContactStore } from '~/stores/useContactStore'
import { onMounted, reactive, ref } from 'vue'
import { navigateTo } from '#app'

export const useAdminPage = () => {
  const { user, getSession } = useAuth()
  const ready = ref(false)

  const { stats, orders, performances } = useAdminDashboardData()

  const usersStore = useUsersStore()
  const productsStore = useProductsStore()
  const contactStore = useContactStore()

  const { users, loadUsers, addUser, removeUser: removeStoredUser, normalizeEmail, createId } =
    usersStore
  const { products, categories, loadProducts, addProduct, removeProduct: removeStoredProduct } =
    productsStore
  const { requests, loadRequests, removeRequest: removeStoredRequest, clearRequests } =
    contactStore

  const userForm = reactive({
    fullName: '',
    email: '',
    password: ''
  })

  const productForm = reactive({
    name: '',
    category: 'Running',
    description: '',
    price: '',
    stock: '',
    image: '',
    colors: '',
    badge: ''
  })

  const userError = ref('')
  const userSuccess = ref('')
  const productError = ref('')
  const productSuccess = ref('')

  const handleAddProduct = () => {
    productError.value = ''
    productSuccess.value = ''

    const name = productForm.name.trim()
    const description = productForm.description.trim()
    const category = productForm.category
    const price = Number(productForm.price)
    const stock = Number(productForm.stock)
    const image = productForm.image.trim()

    if (!name || !description) {
      productError.value = 'Nom et description requis.'
      return
    }
    if (!Number.isFinite(price) || price <= 0) {
      productError.value = 'Prix invalide.'
      return
    }
    if (!Number.isFinite(stock) || stock < 0) {
      productError.value = 'Stock invalide.'
      return
    }

    const colors = productForm.colors
      .split(',')
      .map((color) => color.trim())
      .filter(Boolean)

    addProduct({
      name,
      description,
      category,
      image,
      price,
      stock,
      colors,
      badge:
        productForm.badge === 'Nouveau' || productForm.badge === 'Promo'
          ? productForm.badge
          : undefined
    })

    productSuccess.value = 'Paire ajoutée.'
    productForm.name = ''
    productForm.description = ''
    productForm.price = ''
    productForm.stock = ''
    productForm.image = ''
    productForm.colors = ''
    productForm.badge = ''
  }

  const removeProduct = (id: number) => {
    removeStoredProduct(id)
  }

  const handleAddUser = () => {
    userError.value = ''
    userSuccess.value = ''

    const fullName = userForm.fullName.trim()
    const email = normalizeEmail(userForm.email)
    const password = userForm.password

    if (!fullName || !email || !password) {
      userError.value = 'Tous les champs sont requis.'
      return
    }
    if (password.length < 6) {
      userError.value = 'Mot de passe trop court.'
      return
    }

    const exists = users.value.some((storedUser) => storedUser.email === email)
    if (exists) {
      userError.value = 'Un utilisateur avec cet email existe déjà.'
      return
    }

    addUser({
      id: createId(),
      fullName,
      email,
      password,
      createdAt: new Date().toISOString()
    })

    userSuccess.value = 'Utilisateur ajouté.'
    userForm.fullName = ''
    userForm.email = ''
    userForm.password = ''
  }

  const removeUser = (id: string) => {
    userError.value = ''
    userSuccess.value = ''

    const target = users.value.find((storedUser) => storedUser.id === id)
    if (target && target.email === user.value?.email) {
      userError.value = 'Vous ne pouvez pas supprimer ce compte.'
      return
    }

    removeStoredUser(id)
  }

  const formatDate = (value: string) => {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value
    return date.toLocaleDateString('fr-FR')
  }

  const formatPrice = (value: number) => `${value.toFixed(0)} €`

  onMounted(async () => {
    await getSession()
    if (!user.value || user.value.role !== 'admin') {
      navigateTo('/login')
      return
    }
    ready.value = true
    loadUsers()
    loadProducts()
    loadRequests()
  })

  return {
    ready,
    stats,
    orders,
    performances,
    users,
    loadUsers,
    userForm,
    userError,
    userSuccess,
    handleAddUser,
    removeUser,
    formatDate,
    products,
    categories,
    loadProducts,
    productForm,
    productError,
    productSuccess,
    handleAddProduct,
    removeProduct,
    formatPrice,
    requests,
    loadRequests,
    removeRequest: removeStoredRequest,
    clearRequests
  }
}
