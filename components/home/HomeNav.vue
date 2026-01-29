<template>
  <nav class="border-b border-white/10 bg-white/5 backdrop-blur-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="w-10 h-10 rounded-xl bg-cover bg-center shadow-lg shadow-ocean-500/40 border border-white/10"
              :style="{ backgroundImage: `url(${runningImage})` }"
              aria-hidden="true"
            ></div>
          </div>
          <span class="ml-3 text-white font-semibold text-lg">Shoes Process</span>
        </div>

        <div class="flex items-center gap-4">
          <NuxtLink
            to="/contact"
            class="px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
          >
            Contact
          </NuxtLink>
          <template v-if="user">
            <span class="text-slate-300 text-sm hidden sm:block">{{ user.email }}</span>
            <button
              @click="$emit('sign-out')"
              :disabled="loading"
              class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/20 disabled:opacity-50"
            >
              {{ loading ? 'Déconnexion...' : 'Déconnexion' }}
            </button>
          </template>
          <template v-else>
            <NuxtLink
              to="/login"
              class="px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
            >
              Se connecter
            </NuxtLink>
            <NuxtLink
              to="/register"
              class="px-4 py-2 rounded-lg bg-gradient-to-r from-ocean-500 to-ocean-600 text-white hover:from-ocean-600 hover:to-ocean-700 transition-all duration-200 shadow-lg shadow-ocean-500/50"
            >
              S'inscrire
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { SessionUser } from '~/stores/useSessionStore'

defineProps<{
  user: SessionUser | null
  loading: boolean
  runningImage: string
}>()

defineEmits<{
  (e: 'sign-out'): void
}>()
</script>
