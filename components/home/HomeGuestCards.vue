<template>
  <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 animate-slide-up">
    <NuxtLink
      to="/login"
      class="group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
    >
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-ocean-500/50">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white mb-2">Se connecter</h3>
      <p class="text-slate-300">Accédez à votre compte existant</p>
    </NuxtLink>

    <NuxtLink
      to="/register"
      class="group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
    >
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-ocean-500/50">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white mb-2">Créer un compte</h3>
      <p class="text-slate-300">Rejoignez-nous en quelques secondes</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
