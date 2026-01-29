<template>
  <header class="max-w-6xl mx-auto px-6 pt-8 pb-10 lg:pt-12 lg:pb-16">
    <div class="mb-8 flex items-center justify-between">
      <NuxtLink
        to="/chaussures"
        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/40 transition"
      >
        <span aria-hidden="true">←</span>
        Retour à la boutique
      </NuxtLink>
      <div class="text-sm text-slate-300">{{ totalItems }} articles</div>
    </div>
    <div class="max-w-2xl">
      <p class="text-sm uppercase tracking-[0.3em] text-ocean-300/80">Panier</p>
      <h1 class="text-4xl md:text-5xl font-semibold leading-tight font-display">
        Vos sélections prêtes pour le checkout.
      </h1>
      <p class="text-lg text-slate-300 mt-4">
        Retouchez les quantités avant de passer commande. Les promos sont appliquées au paiement.
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  totalItems: number
}>()
</script>

