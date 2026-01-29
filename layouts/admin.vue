<template>
  <div class="min-h-screen bg-slate-950 text-white relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-ocean-500/20 via-slate-900/0 to-transparent blur-3xl"></div>
      <div class="absolute top-1/4 -left-32 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-emerald-400/10 via-slate-900/0 to-transparent blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-56 w-[70%] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_60%)]"></div>
    </div>

    <div class="relative z-10">
      <header class="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div class="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 shadow-lg shadow-ocean-500/40">
              <span class="text-white font-bold text-lg">A</span>
            </div>
            <div class="leading-tight">
              <div class="text-[10px] uppercase tracking-[0.35em] text-ocean-300">Admin</div>
              <div class="text-lg font-semibold">Shoes Process</div>
            </div>
          </NuxtLink>

          <div class="flex items-center gap-3">
            <div class="hidden sm:block text-right">
              <div class="text-xs text-slate-400">Connecté en tant que</div>
              <div class="text-sm font-medium text-white">{{ user?.email || 'Admin' }}</div>
            </div>
            <button
              @click="handleSignOut"
              :disabled="loading"
              class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/20 disabled:opacity-50"
            >
              {{ loading ? 'Déconnexion...' : 'Déconnexion' }}
            </button>
          </div>
        </div>
      </header>

      <aside class="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-white/10 bg-slate-950/80 backdrop-blur-xl lg:flex">
        <div class="pt-20 px-5">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Status</p>
            <div class="mt-3 flex items-center gap-2 text-sm text-slate-200">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Boutique en ligne
            </div>
            <p class="mt-2 text-xs text-slate-400">Dernière sync il y a 2 min</p>
          </div>
        </div>

        <nav class="mt-6 flex-1 px-4 space-y-1">
          <NuxtLink
            to="/admin"
            class="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 hover:border-white/30 hover:bg-white/10 transition"
          >
            <span>Dashboard</span>
            <span class="text-xs text-slate-400">Accueil</span>
          </NuxtLink>
          <a href="#stats" class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-white/30 hover:text-white transition">
            <span>Stats</span>
            <span class="text-xs text-slate-500">KPI</span>
          </a>
          <a href="#orders" class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-white/30 hover:text-white transition">
            <span>Commandes</span>
            <span class="text-xs text-slate-500">Live</span>
          </a>
          <a href="#performance" class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-white/30 hover:text-white transition">
            <span>Performance</span>
            <span class="text-xs text-slate-500">72h</span>
          </a>
          <a href="#products" class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-white/30 hover:text-white transition">
            <span>Produits</span>
            <span class="text-xs text-slate-500">Stock</span>
          </a>
          <a href="#users" class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-white/30 hover:text-white transition">
            <span>Utilisateurs</span>
            <span class="text-xs text-slate-500">Accès</span>
          </a>
          <a href="#contacts" class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-white/30 hover:text-white transition">
            <span>Contacts</span>
            <span class="text-xs text-slate-500">Inbox</span>
          </a>
        </nav>

        <div class="px-5 pb-6">
          <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-ocean-500/20 via-transparent to-emerald-400/20 p-4 text-xs text-slate-200">
            <p class="uppercase tracking-[0.3em] text-slate-400">Action</p>
            <p class="mt-3">Ouvrir une campagne promo ce soir.</p>
          </div>
        </div>
      </aside>

      <div class="pt-24 lg:pl-64">
        <div class="px-4 sm:px-6 lg:hidden">
          <div class="flex gap-2 overflow-x-auto pb-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            <a href="#stats" class="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/40 transition">Stats</a>
            <a href="#orders" class="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/40 transition">Commandes</a>
            <a href="#performance" class="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/40 transition">Performance</a>
            <a href="#products" class="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/40 transition">Produits</a>
            <a href="#users" class="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/40 transition">Utilisateurs</a>
            <a href="#contacts" class="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/40 transition">Contacts</a>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, signOut, loading } = useAuth()

const handleSignOut = async () => {
  await signOut()
  navigateTo('/login')
}
</script>
