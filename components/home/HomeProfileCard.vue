<template>
  <div class="max-w-2xl mx-auto animate-slide-up">
    <div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
      <div class="flex items-center gap-4 mb-6">
        <img
          :src="profilePhoto"
          alt="Photo de profil"
          class="w-16 h-16 rounded-2xl object-cover shadow-lg shadow-black/30 ring-1 ring-white/20"
        />
        <div>
          <h2 class="text-2xl font-bold text-white">Bienvenue !</h2>
        </div>
      </div>

      <div class="space-y-4">
        <div class="bg-white/5 rounded-xl p-4 border border-white/10">
          <div class="text-sm text-slate-400 mb-1">Email</div>
          <div class="text-white font-medium">{{ user.email }}</div>
        </div>

        <div v-if="user.fullName" class="bg-white/5 rounded-xl p-4 border border-white/10">
          <div class="text-sm text-slate-400 mb-1">Nom complet</div>
          <div class="text-white font-medium">{{ user.fullName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SessionUser } from '~/stores/useSessionStore'

defineProps<{
  user: SessionUser
  profilePhoto: string
}>()
</script>
