import { ref } from 'vue'
import { navigateTo } from '#app'

export const useRegisterForm = () => {
  const { signUp, loading } = useAuth()

  const fullName = ref('')
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const success = ref('')

  const handleRegister = async () => {
    error.value = ''
    success.value = ''

    if (password.value.length < 6) {
      error.value = 'Le mot de passe doit contenir au moins 6 caractères'
      return
    }

    const { error: authError } = await signUp(email.value, password.value, fullName.value)

    if (authError) {
      error.value = authError.message || "Erreur lors de l'inscription"
      return
    }

    success.value = 'Compte créé avec succès ! Vous pouvez vous connecter.'
    setTimeout(() => {
      navigateTo('/login')
    }, 2000)
  }

  return {
    fullName,
    email,
    password,
    error,
    success,
    loading,
    handleRegister
  }
}
