<template>
  <section
    id="performance"
    class="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
  >
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-xl font-semibold">Performance de la collection</h2>
        <p class="text-sm text-slate-300">Dernières 72h sur les 5 modèles phares.</p>
      </div>
      <div class="flex items-center gap-2 text-sm text-slate-300">
        <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
        Conversion 3,6%
      </div>
    </div>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <div
        v-for="performance in performances"
        :key="performance.name"
        class="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
      >
        <p class="text-slate-400 text-xs uppercase tracking-wide">{{ performance.name }}</p>
        <p class="mt-3 text-lg font-semibold">{{ performance.sales }}</p>
        <p class="text-xs text-emerald-300">{{ performance.delta }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  performances: Array<{
    name: string
    sales: string
    delta: string
  }>
}>()
</script>

