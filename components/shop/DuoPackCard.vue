<template>
  <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl">
    <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ t('shoes.duoPack.label') }}</p>
    <h2 class="text-3xl font-semibold mt-3 font-display">{{ t('shoes.duoPack.title') }}</h2>
    <p class="text-slate-300 mt-4">
      {{ t('shoes.duoPack.description') }}
    </p>
    <div class="mt-6 flex items-center gap-4">
      <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
        {{ t('shoes.duoPack.codeLabel') }} : <span class="text-white font-semibold">DUO15</span>
      </div>
      <button
        class="px-5 py-2.5 rounded-full border border-white/20 text-white/90 hover:border-white/40 transition"
        @click="emit('add-duo-pack')"
      >
        {{ t('shoes.duoPack.add') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  (event: 'add-duo-pack'): void
}>()
</script>
