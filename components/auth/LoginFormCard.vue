<template>
  <div class="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-scale-in">
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 mb-4 shadow-lg shadow-ocean-500/50">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Bienvenue</h1>
      <p class="text-slate-300">Connectez-vous à votre compte</p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-5">
      <div v-if="error" class="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl animate-fade-in">
        {{ error }}
      </div>

      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-slate-200">Email</label>
        <div class="relative group">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-slate-400 group-focus-within:text-ocean-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div class="space-y-2">
        <label for="password" class="block text-sm font-medium text-slate-200">Mot de passe</label>
        <div class="relative group">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-slate-400 group-focus-within:text-ocean-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
            placeholder="••••••••"
          />
        </div>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-white bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base"
      >
        <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {{ loading ? 'Connexion...' : 'Se connecter' }}
      </button>

      <div class="flex items-center gap-3 text-xs text-slate-400">
        <span class="h-px flex-1 bg-white/10"></span>
        ou
        <span class="h-px flex-1 bg-white/10"></span>
      </div>

      <button
        type="button"
        :disabled="loading"
        @click="handleAdminLogin"
        class="w-full flex justify-center items-center py-3 px-4 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base"
      >
        Se connecter en admin
      </button>
    </form>

    <div class="mt-6 text-center">
      <p class="text-slate-300 text-sm">
        Pas encore de compte ?
        <NuxtLink to="/register" class="text-ocean-400 hover:text-ocean-300 font-medium transition-colors ml-1">
          S'inscrire
        </NuxtLink>
      </p>
    </div>
  </div>

  <div class="mt-8 text-center text-slate-400 text-sm">
    <p>Commencez l'aventure chez Shoes Process</p>
  </div>
</template>

<script setup lang="ts">
const { email, password, error, loading, handleLogin, handleAdminLogin } = useLoginForm()
</script>

