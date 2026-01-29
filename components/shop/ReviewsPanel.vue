<template>
  <div class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <div class="flex items-center justify-between">
      <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ t('shoes.reviews.label') }}</p>
      <span class="text-emerald-300 text-sm">{{ t('shoes.reviews.rating') }}</span>
    </div>
    <div class="mt-6 space-y-4 text-sm text-slate-300">
      <div v-for="key in reviewKeys" :key="key" class="rounded-2xl border border-white/10 bg-white/5 p-4">
        <p class="font-semibold text-white">"{{ t(`shoes.reviews.items.${key}.quote`) }}"</p>
        <p class="mt-2 text-xs text-slate-400">{{ t(`shoes.reviews.items.${key}.author`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const reviewKeys = ['marine', 'elliot', 'salma'] as const
</script>
