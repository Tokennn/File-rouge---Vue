<template>
  <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
    <div class="space-y-4">
      <CartItemRow
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @increase="$emit('increase', item.id)"
        @decrease="$emit('decrease', item.id)"
        @remove="$emit('remove', item.id)"
      />
    </div>

    <CartSummary :subtotal="subtotal" @clear="$emit('clear')" />
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/stores/useCartStore'

defineProps<{
  cart: CartItem[]
  subtotal: number
}>()

defineEmits<{
  (e: 'increase', id: number): void
  (e: 'decrease', id: number): void
  (e: 'remove', id: number): void
  (e: 'clear'): void
}>()
</script>

