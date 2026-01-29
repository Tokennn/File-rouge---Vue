<template>
  <section id="contacts" class="scroll-mt-24 grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Demandes contact</h2>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="text-sm text-ocean-300 hover:text-ocean-200"
            @click="$emit('refresh-requests')"
          >
            Rafraîchir
          </button>
          <span class="text-xs uppercase tracking-[0.3em] text-slate-400">
            {{ requests.length }} demandes
          </span>
        </div>
      </div>

      <div class="mt-6 space-y-4">
        <div
          v-for="request in requests"
          :key="request.id"
          class="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">
                {{ request.requestType === 'custom' ? 'Personnalisation' : 'Question' }}
              </p>
              <p class="text-lg font-semibold">{{ request.subject }}</p>
              <p class="text-xs text-slate-400">Reçu le {{ formatDate(request.createdAt) }}</p>
            </div>
            <button
              type="button"
              class="rounded-full border border-rose-400/30 px-4 py-2 text-xs uppercase tracking-wide text-rose-200 hover:border-rose-300/60"
              @click="$emit('remove-request', request.id)"
            >
              Supprimer
            </button>
          </div>

          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-xs text-slate-400">Nom</p>
              <p class="text-sm text-white">{{ request.fullName }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-400">Email</p>
              <p class="text-sm text-white">{{ request.email }}</p>
            </div>
          </div>

          <div class="mt-4">
            <p class="text-xs text-slate-400">Message</p>
            <p class="text-sm text-slate-200">{{ request.message }}</p>
          </div>

          <div v-if="request.requestType === 'custom'" class="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-xs text-slate-400">Modèle souhaité</p>
              <p class="text-sm text-white">{{ request.shoeModel || '—' }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-400">Pointure</p>
              <p class="text-sm text-white">{{ request.size || '—' }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-400">Couleurs & matières</p>
              <p class="text-sm text-white">{{ request.colors || '—' }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-400">Budget</p>
              <p class="text-sm text-white">{{ request.budget || '—' }}</p>
            </div>
          </div>
        </div>

        <p v-if="requests.length === 0" class="text-sm text-slate-400">
          Aucune demande pour le moment.
        </p>
      </div>
    </div>

    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 class="text-lg font-semibold">Actions rapides</h3>
      <p class="mt-2 text-sm text-slate-300">
        Nettoyez les demandes une fois traitées, ou gardez l'historique local.
      </p>
      <div class="mt-6 space-y-3">
        <button
          type="button"
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 transition"
          @click="$emit('clear-requests')"
        >
          Vider toutes les demandes
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContactRequest } from '~/stores/useContactStore'

defineProps<{
  requests: ContactRequest[]
  formatDate: (value: string) => string
}>()

defineEmits<{
  (e: 'remove-request', id: string): void
  (e: 'clear-requests'): void
  (e: 'refresh-requests'): void
}>()
</script>
