<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
    <div class="absolute inset-0 bg-slate-950/70" @click="emit('close')"></div>
    <div class="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/95 p-8 text-white shadow-2xl">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.35em] text-slate-400">Guide des tailles</p>
          <h2 class="text-2xl font-semibold font-display mt-2">Trouvez la pointure parfaite.</h2>
          <p class="text-sm text-slate-300 mt-3">
            Mesurez votre pied en cm et reportez-vous aux équivalences. Pour un fit plus ample, prenez une demi-pointure au-dessus.
          </p>
        </div>
        <button
          class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300 hover:border-white/40"
          @click="emit('close')"
        >
          Fermer
        </button>
      </div>

      <div class="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <div class="grid grid-cols-4 bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-300">
          <div class="px-4 py-3">EU</div>
          <div class="px-4 py-3">US</div>
          <div class="px-4 py-3">UK</div>
          <div class="px-4 py-3">CM</div>
        </div>
        <div class="divide-y divide-white/10 text-sm">
          <div v-for="row in sizeRows" :key="row.eu" class="grid grid-cols-4 px-4 py-3 text-slate-200">
            <div>{{ row.eu }}</div>
            <div>{{ row.us }}</div>
            <div>{{ row.uk }}</div>
            <div>{{ row.cm }}</div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <span>Besoin d'aide ? Contactez-nous pour un conseil personnalisé.</span>
        <span>Livraison + retours offerts sur cette collection.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const sizeRows = [
  { eu: '36', us: '4', uk: '3', cm: '22.5' },
  { eu: '37', us: '5', uk: '4', cm: '23.5' },
  { eu: '38', us: '6', uk: '5', cm: '24.2' },
  { eu: '39', us: '7', uk: '6', cm: '25' },
  { eu: '40', us: '8', uk: '6.5', cm: '25.6' },
  { eu: '41', us: '9', uk: '7.5', cm: '26.4' },
  { eu: '42', us: '10', uk: '8.5', cm: '27' },
  { eu: '43', us: '11', uk: '9.5', cm: '27.8' },
  { eu: '44', us: '12', uk: '10.5', cm: '28.4' },
  { eu: '45', us: '13', uk: '11.5', cm: '29.1' }
]
</script>
