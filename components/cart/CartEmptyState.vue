<template>
  <div class="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
    <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Panier vide</p>
    <h2 class="text-2xl font-semibold mt-3 font-display">Choisissez votre prochaine paire.</h2>
    <p class="text-slate-300 mt-3">
      Votre panier est vide. Explorez la collection pour ajouter vos coups de coeur.
    </p>
    <NuxtLink
      to="/chaussures"
      class="inline-flex mt-6 items-center justify-center rounded-full bg-white text-slate-950 px-6 py-3 font-medium"
    >
      Retourner à la boutique
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

