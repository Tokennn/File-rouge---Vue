<template>
  <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl h-fit">
    <h2 class="text-xl font-semibold">Résumé</h2>
    <div class="mt-6 space-y-3 text-sm text-slate-300">
      <div class="flex items-center justify-between">
        <span>Sous-total</span>
        <span class="text-white">{{ formatPrice(subtotal) }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Livraison</span>
        <span class="text-emerald-300">Offerte</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Estimation TVA</span>
        <span class="text-white">{{ formatPrice(vat) }}</span>
      </div>
    </div>
    <div class="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-lg">
      <span>Total</span>
      <span class="font-semibold text-white">{{ formatPrice(total) }}</span>
    </div>
    <button
      class="mt-6 w-full rounded-full bg-gradient-to-r from-ocean-500 to-emerald-400 px-5 py-3 text-slate-950 font-medium"
    >
      Passer la commande
    </button>
    <button
      class="mt-3 w-full rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white/40"
      @click="$emit('clear')"
    >
      Vider le panier
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  subtotal: number
}>()

defineEmits<{
  (e: 'clear'): void
}>()

const { formatPrice } = usePrice()

const vat = computed(() => props.subtotal * 0.2)
const total = computed(() => props.subtotal * 1.2)
</script>
