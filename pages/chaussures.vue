<template>
  <div class="relative z-10">
    <ShoesHero
      :total-items="totalItems ?? 0"
      @scroll-to-products="scrollToProducts"
      @open-size-guide="openSizeGuide"
    />

    <ProductFilters
      v-model:query="query"
      v-model:sort="sort"
      v-model:activeTag="activeTag"
      :tags="tags"
      :results-count="filteredProductsSafe.length"
    />

    <section ref="productGridRef" class="max-w-6xl mx-auto px-6 pb-16">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="(product, index) in filteredProductsSafe"
          :key="product.id"
          :product="product"
          :style="{ animationDelay: `${index * 80}ms` }"
          @add="handleAddToCart"
        />
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-20">
      <div class="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <DuoPackCard @add-duo-pack="addDuoPack" />
        <ReviewsPanel />
      </div>
    </section>

    <NewsletterCta />

    <CartToast :visible="toastVisible" :message="toastMessage" />

    <SizeGuideModal :open="sizeGuideOpen" @close="sizeGuideOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { definePageMeta, navigateTo, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { useAuth } from '~/composables/useAuth'
import { useProductFilters } from '~/composables/useProductFilters'
import { useCartStore } from '~/stores/useCartStore'
import { useProductsStore } from '~/stores/useProductsStore'
import type { Product } from '~/stores/useProductsStore'

definePageMeta({ layout: 'data' })

const { t } = useI18n()

useHead(() => ({
  title: `Boutique | ${t('shoes.hero.line')}`
}))

const { user } = useAuth()
const productsStore = useProductsStore()
const cartStore = useCartStore()
const { totalItems } = cartStore

const { tags, query, sort, activeTag, filteredProducts } = useProductFilters(
  productsStore.products,
  productsStore.shopTags
)

const filteredProductsSafe = computed(() => filteredProducts.value ?? [])

const productGridRef = ref<HTMLElement | null>(null)
const sizeGuideOpen = ref(false)
const toastVisible = ref(false)
const toastMessage = ref('')

let toastTimer: ReturnType<typeof setTimeout> | null = null

const showToast = (message: string) => {
  toastMessage.value = message
  toastVisible.value = true

  if (toastTimer) {
    clearTimeout(toastTimer)
  }

  toastTimer = setTimeout(() => {
    toastVisible.value = false
  }, 2200)
}

const scrollToProducts = () => {
  productGridRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const openSizeGuide = () => {
  sizeGuideOpen.value = true
}

const handleAddToCart = (product: Product) => {
  if (!user.value) {
    navigateTo('/login')
    return
  }
  const added = cartStore.addToCart(product, 1)
  if (added) {
    showToast(t('cart.toast.addedProduct', { name: product.name }))
  }
}

const addDuoPack = () => {
  if (!user.value) {
    navigateTo('/login')
    return
  }
  const duo = productsStore.products.slice(0, 2)
  let addedCount = 0
  duo.forEach((product) => {
    if (cartStore.addToCart(product, 1)) {
      addedCount += 1
    }
  })
  if (addedCount > 0) {
    showToast(t('cart.toast.addedCount', addedCount, { count: addedCount }))
  }
}

onMounted(() => {
  productsStore.loadProducts(true)
})

onBeforeUnmount(() => {
  if (toastTimer) {
    clearTimeout(toastTimer)
  }
})
</script>
