<template>
  <div class="text-center mb-16 animate-fade-in">
    <h1 class="text-5xl sm:text-6xl font-bold text-white mb-6">
      Shoes
      <span class="bg-gradient-to-r from-ocean-400 to-ocean-600 bg-clip-text text-transparent">
        Process
      </span>
    </h1>
    <p class="text-xl text-slate-300 max-w-2xl mx-auto">
      Une market place autour de l'univers des chaussures faites pour vous !
    </p>
    <div class="mt-8 flex justify-center">
      <NuxtLink
        to="/chaussures"
        class="px-6 py-3 rounded-full bg-gradient-to-r from-ocean-500 to-ocean-600 text-white transition-all duration-200 shadow-lg shadow-ocean-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-500/60 active:translate-y-0"
      >
        Découvrir la boutique
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
