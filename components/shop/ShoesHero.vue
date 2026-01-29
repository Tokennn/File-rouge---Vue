<template>
  <header class="max-w-6xl mx-auto px-6 pt-8 pb-10 lg:pt-12 lg:pb-16">
    <div class="mb-8 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/40 transition"
      >
        <span aria-hidden="true">←</span>
        {{ t('shoes.hero.backHome') }}
      </NuxtLink>
      <div class="flex items-center gap-3">
        <label :for="localeSelectId" class="sr-only">{{ t('common.localeLabel') }}</label>
        <select
          :id="localeSelectId"
          v-model="locale"
          class="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs uppercase tracking-wide text-white/90 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        >
          <option v-for="option in localeOptions" :key="option.code" :value="option.code">
            {{ option.name ?? option.code.toUpperCase() }}
          </option>
        </select>
        <NuxtLink
          to="/panier"
          class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/40 transition"
        >
          {{ t('shoes.hero.cart') }}
          <span class="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">{{ totalItems }}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
      <div class="space-y-6 animate-slide-up">
        <p class="text-sm uppercase tracking-[0.3em] text-ocean-300/80">{{ t('shoes.hero.line') }}</p>
        <h1 class="text-4xl md:text-5xl font-semibold leading-tight font-display">
          {{ t('shoes.hero.title') }}
        </h1>
        <p class="text-lg text-slate-300 max-w-xl">
          {{ t('shoes.hero.subtitle') }}
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <button
            class="px-6 py-3 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-400 text-slate-950 font-medium shadow-lg shadow-ocean-500/30 hover:shadow-ocean-500/50 transition"
            @click="emit('scroll-to-products')"
          >
            {{ t('shoes.hero.discover') }}
          </button>
          <button
            class="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:border-white/40 transition"
            @click="emit('open-size-guide')"
          >
            {{ t('shoes.hero.sizes') }}
          </button>
        </div>
        <div class="flex flex-wrap gap-6 text-sm text-slate-300">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            {{ t('shoes.hero.benefits.delivery') }}
          </div>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-ocean-400"></span>
            {{ t('shoes.hero.benefits.returns') }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  totalItems: number
}>()

const { t, locale, locales } = useI18n()

const localeSelectId = 'locale-select'

const localeOptions = computed(
  () => locales.value as Array<{ code: string; name?: string }>
)

const emit = defineEmits<{
  (event: 'scroll-to-products'): void
  (event: 'open-size-guide'): void
}>()
</script>
