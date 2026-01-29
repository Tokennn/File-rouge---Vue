<template>
  <section class="max-w-6xl mx-auto px-6 pb-16">
    <div class="rounded-3xl border border-white/10 bg-gradient-to-r from-ocean-500/20 via-slate-900/10 to-emerald-400/20 p-8 backdrop-blur-xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 class="text-2xl font-semibold font-display">{{ t('shoes.newsletter.title') }}</h3>
        <p class="text-slate-300 mt-2">{{ t('shoes.newsletter.description') }}</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          :placeholder="t('shoes.newsletter.emailPlaceholder')"
          class="w-full sm:w-64 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />
        <button class="px-5 py-2.5 rounded-full bg-white text-slate-950 font-medium">
          {{ t('shoes.newsletter.submit') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
