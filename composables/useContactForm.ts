import { computed, ref } from 'vue'
import { defineRule, useField, useForm } from 'vee-validate'
import { useContactStore } from '~/stores/useContactStore'
import type { ContactRequestType } from '~/stores/useContactStore'

let rulesDefined = false

const ensureRules = () => {
  if (rulesDefined) return

  defineRule('required', (value: unknown) => {
    if (Array.isArray(value)) return value.length > 0 || 'Champ requis'
    if (typeof value === 'string') return value.trim().length > 0 || 'Champ requis'
    return value ? true : 'Champ requis'
  })

  defineRule('email', (value: unknown) => {
    if (typeof value !== 'string' || !value.trim()) return 'Email requis'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value.trim()) || 'Email invalide'
  })

  defineRule('min', (value: unknown, [limit]: string[]) => {
    if (value === null || value === undefined) return true
    const size = typeof value === 'string' ? value.trim().length : String(value).length
    return size >= Number(limit) || `Minimum ${limit} caractères`
  })

  rulesDefined = true
}

export type ContactFormValues = {
  fullName: string
  email: string
  requestType: ContactRequestType
  subject: string
  message: string
  shoeModel: string
  size: string
  colors: string
  budget: string
}

export const useContactForm = () => {
  ensureRules()

  const store = useContactStore()
  const success = ref('')

  const { handleSubmit, errors, setFieldError, resetForm, isSubmitting, values } =
    useForm<ContactFormValues>({
      initialValues: {
        fullName: '',
        email: '',
        requestType: 'question',
        subject: '',
        message: '',
        shoeModel: '',
        size: '',
        colors: '',
        budget: ''
      }
    })

  const { value: fullName } = useField('fullName', 'required|min:2')
  const { value: email } = useField('email', 'required|email')
  const { value: requestType } = useField('requestType', 'required')
  const { value: subject } = useField('subject', 'required|min:4')
  const { value: message } = useField('message', 'required|min:10')
  const { value: shoeModel } = useField('shoeModel')
  const { value: size } = useField('size')
  const { value: colors } = useField('colors')
  const { value: budget } = useField('budget')

  const isCustomRequest = computed(() => requestType.value === 'custom')

  const submit = handleSubmit(async (formValues) => {
    success.value = ''

    if (formValues.requestType === 'custom') {
      let hasCustomErrors = false

      if (!formValues.shoeModel.trim()) {
        setFieldError('shoeModel', 'Modèle souhaité requis')
        hasCustomErrors = true
      }
      if (!formValues.size.trim()) {
        setFieldError('size', 'Pointure requise')
        hasCustomErrors = true
      }
      if (!formValues.colors.trim()) {
        setFieldError('colors', 'Couleurs souhaitées requises')
        hasCustomErrors = true
      }
      if (!formValues.budget.trim()) {
        setFieldError('budget', 'Budget requis')
        hasCustomErrors = true
      }

      if (hasCustomErrors) return
    }

    store.addRequest({
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim().toLowerCase(),
      requestType: formValues.requestType,
      subject: formValues.subject.trim(),
      message: formValues.message.trim(),
      shoeModel: formValues.shoeModel.trim() || undefined,
      size: formValues.size.trim() || undefined,
      colors: formValues.colors.trim() || undefined,
      budget: formValues.budget.trim() || undefined
    })

    success.value = 'Votre demande a bien été envoyée !'

    resetForm({
      values: {
        fullName: '',
        email: '',
        requestType: 'question',
        subject: '',
        message: '',
        shoeModel: '',
        size: '',
        colors: '',
        budget: ''
      }
    })
  })

  return {
    fullName,
    email,
    requestType,
    subject,
    message,
    shoeModel,
    size,
    colors,
    budget,
    isCustomRequest,
    errors,
    success,
    isSubmitting,
    values,
    submit
  }
}
