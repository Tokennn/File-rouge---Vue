<template>
  <section class="max-w-6xl mx-auto px-6 pb-10">
    <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative">
            <input
              :value="query"
              type="text"
              placeholder="Rechercher un modèle ou une matière"
              class="w-full sm:w-72 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
              @input="emitQuery"
            />
            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">Ctrl+K</span>
          </div>
          <div class="flex items-center gap-2">
            <button
              v-for="tag in tags"
              :key="tag"
              type="button"
              @click="emit('update:activeTag', tag)"
              :class="[
                'px-4 py-2 rounded-full text-xs uppercase tracking-wide transition',
                activeTag === tag
                  ? 'bg-ocean-500 text-slate-950 shadow-lg shadow-ocean-500/30'
                  : 'border border-white/15 text-slate-300 hover:border-white/30'
              ]"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <label class="text-xs uppercase tracking-[0.2em] text-slate-400">Trier</label>
          <select
            :value="sort"
            class="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
            @change="emitSort"
          >
            <option value="featured">Sélection</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="rating">Meilleures notes</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-ocean-400"></span>
          {{ resultsCount }} modèles disponibles
        </div>
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Essai gratuit en boutique partenaire
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  query: string
  sort: string
  activeTag: string
  tags: string[]
  resultsCount: number
}>()

const emit = defineEmits<{
  (event: 'update:query', value: string): void
  (event: 'update:sort', value: string): void
  (event: 'update:activeTag', value: string): void
}>()

const emitQuery = (event: Event) => {
  emit('update:query', (event.target as HTMLInputElement).value)
}

const emitSort = (event: Event) => {
  emit('update:sort', (event.target as HTMLSelectElement).value)
}
</script>
