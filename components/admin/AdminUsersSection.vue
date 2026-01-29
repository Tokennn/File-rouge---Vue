<template>
  <section id="users" class="scroll-mt-24 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Ajouter un utilisateur</h2>
        <span class="text-xs uppercase tracking-[0.3em] text-slate-400">
          {{ users.length }} utilisateurs
        </span>
      </div>
      <form @submit.prevent="$emit('add-user')" class="mt-6 space-y-4">
        <input
          v-model="userForm.fullName"
          type="text"
          placeholder="Nom complet"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />
        <input
          v-model="userForm.email"
          type="email"
          placeholder="Email"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />
        <input
          v-model="userForm.password"
          type="password"
          placeholder="Mot de passe (6 caracteres min)"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />
        <div class="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            class="px-5 py-2.5 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-400 text-slate-950 font-medium shadow-lg shadow-ocean-500/30"
          >
            Ajouter l'utilisateur
          </button>
          <span v-if="userSuccess" class="text-sm text-emerald-300">{{ userSuccess }}</span>
          <span v-if="userError" class="text-sm text-rose-300">{{ userError }}</span>
        </div>
      </form>
    </div>

    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Utilisateurs</h2>
        <button type="button" class="text-sm text-ocean-300 hover:text-ocean-200" @click="$emit('refresh-users')">
          Rafraîchir
        </button>
      </div>
      <div class="mt-6 space-y-4">
        <div
          v-for="storedUser in users"
          :key="storedUser.id"
          class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm text-slate-400">{{ storedUser.email }}</p>
            <p class="text-lg font-semibold">{{ storedUser.fullName }}</p>
            <p class="text-xs text-slate-400">Créé le {{ formatDate(storedUser.createdAt) }}</p>
          </div>
          <button
            type="button"
            @click="$emit('remove-user', storedUser.id)"
            class="rounded-full border border-rose-400/30 px-4 py-2 text-xs uppercase tracking-wide text-rose-200 hover:border-rose-300/60"
          >
            Supprimer
          </button>
        </div>
        <p v-if="users.length === 0" class="text-sm text-slate-400">
          Aucun utilisateur enregistre pour le moment.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { StoredUser } from '~/stores/useUsersStore'

defineProps<{
  users: StoredUser[]
  userForm: {
    fullName: string
    email: string
    password: string
  }
  userError: string
  userSuccess: string
  formatDate: (value: string) => string
}>()

defineEmits<{
  (e: 'add-user'): void
  (e: 'remove-user', id: string): void
  (e: 'refresh-users'): void
}>()
</script>

