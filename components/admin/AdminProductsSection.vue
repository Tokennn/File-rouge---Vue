<template>
  <section id="products" class="scroll-mt-24 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Ajouter une paire</h2>
        <span class="text-xs uppercase tracking-[0.3em] text-slate-400">
          {{ products.length }} produits
        </span>
      </div>
      <form @submit.prevent="$emit('add-product')" class="mt-6 space-y-4">
        <div class="grid gap-4 sm:grid-cols-2">
          <input
            v-model="productForm.name"
            type="text"
            placeholder="Nom du modèle"
            class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
          />
          <select
            v-model="productForm.category"
            class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
          >
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <textarea
          v-model="productForm.description"
          rows="3"
          placeholder="Description courte"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        ></textarea>

        <div class="grid gap-4 sm:grid-cols-3">
          <input
            v-model="productForm.price"
            type="number"
            min="1"
            step="1"
            placeholder="Prix"
            class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
          />
          <input
            v-model="productForm.stock"
            type="number"
            min="0"
            step="1"
            placeholder="Stock"
            class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
          />
          <select
            v-model="productForm.badge"
            class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
          >
            <option value="">Badge</option>
            <option value="Nouveau">Nouveau</option>
            <option value="Promo">Promo</option>
          </select>
        </div>

        <input
          v-model="productForm.image"
          type="url"
          placeholder="URL de la photo"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />

        <input
          v-model="productForm.colors"
          type="text"
          placeholder="Couleurs (séparées par une virgule)"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            class="px-5 py-2.5 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-400 text-slate-950 font-medium shadow-lg shadow-ocean-500/30"
          >
            Ajouter la paire
          </button>
          <span v-if="productSuccess" class="text-sm text-emerald-300">{{ productSuccess }}</span>
          <span v-if="productError" class="text-sm text-rose-300">{{ productError }}</span>
        </div>
      </form>
    </div>

    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Produits en vente</h2>
        <button type="button" class="text-sm text-ocean-300 hover:text-ocean-200" @click="$emit('refresh-products')">
          Rafraîchir
        </button>
      </div>
      <div class="mt-6 space-y-4">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover"
              />
            </div>
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">{{ product.category }}</p>
              <p class="text-lg font-semibold">{{ product.name }}</p>
              <p class="text-xs text-slate-400">
                {{ formatPrice(product.price) }} · {{ product.stock }} en stock
              </p>
            </div>
          </div>
          <button
            type="button"
            @click="$emit('remove-product', product.id)"
            class="rounded-full border border-rose-400/30 px-4 py-2 text-xs uppercase tracking-wide text-rose-200 hover:border-rose-300/60"
          >
            Supprimer
          </button>
        </div>
        <p v-if="products.length === 0" class="text-sm text-slate-400">Aucun produit pour le moment.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '~/stores/useProductsStore'

defineProps<{
  products: Product[]
  categories: string[]
  productForm: {
    name: string
    category: string
    description: string
    price: string
    stock: string
    image: string
    colors: string
    badge: string
  }
  productError: string
  productSuccess: string
  formatPrice: (value: number) => string
}>()

defineEmits<{
  (e: 'add-product'): void
  (e: 'remove-product', id: number): void
  (e: 'refresh-products'): void
}>()
</script>

