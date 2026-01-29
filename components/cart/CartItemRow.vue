<template>
  <div class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center gap-4">
      <div class="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <img v-if="item.image" :src="item.image" :alt="item.name" class="h-full w-full object-cover" />
      </div>
      <div>
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ item.category }}</p>
        <p class="text-lg font-semibold text-white">{{ item.name }}</p>
        <p class="text-xs text-slate-400">Code {{ item.code }}</p>
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm text-slate-200">
        <button
          class="h-7 w-7 rounded-full border border-white/10 text-white/70 hover:border-white/40"
          @click="emit('decrease', item.id)"
        >
          -
        </button>
        <span class="min-w-[24px] text-center">{{ item.quantity }}</span>
        <button
          class="h-7 w-7 rounded-full border border-white/10 text-white/70 hover:border-white/40"
          @click="emit('increase', item.id)"
        >
          +
        </button>
      </div>
      <div class="text-lg font-semibold text-white">{{ formatPrice(item.price * item.quantity) }}</div>
      <button
        class="text-xs uppercase tracking-[0.3em] text-rose-300 hover:text-rose-200"
        @click="emit('remove', item.id)"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/stores/useCartStore'

defineProps<{ item: CartItem }>()

const emit = defineEmits<{
  (event: 'increase', id: number): void
  (event: 'decrease', id: number): void
  (event: 'remove', id: number): void
}>()

const { formatPrice } = usePrice()
</script>
