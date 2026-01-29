import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { Product } from '~/stores/useProductsStore'

export const useProductFilters = (products: Ref<Product[]>, tags: string[]) => {
  const query = ref('')
  const sort = ref('featured')
  const activeTag = ref(tags[0] || 'Tous')

  const filteredProducts = computed<Product[]>(() => {
    const search = query.value.trim().toLowerCase()
    let result = products.value.filter((product) => {
      const matchesTag = activeTag.value === 'Tous' || product.tags.includes(activeTag.value)
      if (!matchesTag) return false
      if (!search) return true
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      )
    })

    switch (sort.value) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  })

  return {
    query,
    sort,
    activeTag,
    tags,
    filteredProducts
  }
}
