<template>
  <article
    class="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-white/25 hover:-translate-y-1"
  >
    <div class="flex items-start justify-between">
      <div>
        <p class="text-xs uppercase tracking-wide text-slate-400">{{ product.category }}</p>
        <h3 class="text-xl font-semibold mt-1 font-display">{{ product.name }}</h3>
      </div>
      <span
        v-if="product.badge"
        class="px-3 py-1 rounded-full text-[10px] uppercase tracking-wide"
        :class="product.badge === 'Promo' ? 'bg-rose-500/20 text-rose-200' : 'bg-ocean-500/20 text-ocean-200'"
      >
        {{ product.badge }}
      </span>
    </div>

    <div class="mt-5 h-40 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden">
      <template v-if="product.image">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-950/25"></div>
      </template>
      <div v-else class="absolute inset-0 bg-slate-900/70"></div>
      <div
        class="absolute inset-0 opacity-80"
        :class="product.gradient"
      ></div>
      <div class="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/70">{{ product.code }}</div>
      <div class="absolute top-4 right-4 h-12 w-12 rounded-full border border-white/30 flex items-center justify-center text-sm text-white/80">
        {{ product.rating }}
      </div>
    </div>

    <p class="mt-4 text-sm text-slate-300 min-h-[48px]">
      {{ product.description }}
    </p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="color in product.colors"
        :key="color"
        class="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300"
      >
        {{ color }}
      </span>
    </div>

    <div class="mt-5 flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold font-display">{{ formatPrice(product.price) }}</p>
        <p class="text-xs text-slate-400">{{ product.stock }} en stock</p>
      </div>
      <button
        class="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-medium group-hover:bg-ocean-400 transition"
        @click="emit('add', product)"
      >
        Ajouter
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/stores/useProductsStore'

defineProps<{ product: Product }>()

const emit = defineEmits<{
  (event: 'add', product: Product): void
}>()

const { formatPrice } = usePrice()
</script>
