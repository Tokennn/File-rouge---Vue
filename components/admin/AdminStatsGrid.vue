<template>
  <section id="stats" class="scroll-mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ stat.label }}</p>
      <div class="mt-3 flex items-baseline gap-2">
        <span class="text-2xl font-semibold">{{ stat.value }}</span>
        <span class="text-xs text-emerald-300">{{ stat.delta }}</span>
      </div>
      <p class="mt-3 text-sm text-slate-300">{{ stat.caption }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  stats: Array<{
    label: string
    value: string
    delta: string
    caption: string
  }>
}>()
</script>

