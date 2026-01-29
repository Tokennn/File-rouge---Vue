<template>
  <section id="orders" class="scroll-mt-24 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Commandes récentes</h2>
        <button class="text-sm text-ocean-300 hover:text-ocean-200">Tout voir</button>
      </div>
      <div class="mt-6 space-y-4">
        <div
          v-for="order in orders"
          :key="order.id"
          class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm text-slate-400">Commande {{ order.id }}</p>
            <p class="text-lg font-semibold">{{ order.customer }}</p>
            <p class="text-xs text-slate-400">{{ order.items }}</p>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm text-slate-300">{{ order.total }}</span>
            <span
              class="rounded-full px-3 py-1 text-xs uppercase tracking-wide"
              :class="
                order.status === 'Expédiée'
                  ? 'bg-emerald-500/20 text-emerald-200'
                  : 'bg-amber-500/20 text-amber-200'
              "
            >
              {{ order.status }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 class="text-xl font-semibold">Actions rapides</h2>
      <div class="mt-6 space-y-4">
        <button class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:border-white/30 transition">
          Ajouter un nouveau modèle
        </button>
        <button class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:border-white/30 transition">
          Mettre à jour les stocks
        </button>
        <button class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:border-white/30 transition">
          Lancer une promotion flash
        </button>
      </div>
      <div class="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-ocean-500/20 via-transparent to-emerald-400/20 p-4">
        <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Alertes</p>
        <ul class="mt-4 space-y-3 text-sm text-slate-300">
          <li class="flex items-center justify-between">
            <span>Stock bas : Glide One</span>
            <span class="text-amber-300">3 restants</span>
          </li>
          <li class="flex items-center justify-between">
            <span>Retour client</span>
            <span class="text-rose-300">2 en attente</span>
          </li>
          <li class="flex items-center justify-between">
            <span>Nouveaux avis</span>
            <span class="text-emerald-300">+12</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  orders: Array<{
    id: string
    customer: string
    items: string
    total: string
    status: string
  }>
}>()
</script>

