import { ref } from 'vue'
import { navigateTo } from '#app'

export const useLoginForm = () => {
  const { signIn, signInAsAdmin, loading } = useAuth()

  const email = ref('')
  const password = ref('')
  const error = ref('')

  const handleLogin = async () => {
    error.value = ''

    const { error: authError } = await signIn(email.value, password.value)

    if (authError) {
      error.value = authError.message || 'Erreur de connexion'
      return
    }

    navigateTo('/')
  }

  const handleAdminLogin = async () => {
    error.value = ''

    const { error: authError } = await signInAsAdmin()

    if (authError) {
      error.value = authError.message || 'Erreur de connexion admin'
      return
    }

    navigateTo('/admin')
  }

  return {
    email,
    password,
    error,
    loading,
    handleLogin,
    handleAdminLogin
  }
}
