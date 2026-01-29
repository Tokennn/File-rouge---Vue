<template>
  <div class="relative z-10">
    <CartHeader :total-items="totalItems" />

    <section class="max-w-6xl mx-auto px-6 pb-16">
      <CartItemsGrid
        v-if="cart.length"
        :cart="cart"
        :subtotal="subtotal"
        @increase="increment"
        @decrease="decrement"
        @remove="removeItem"
        @clear="clearCart"
      />

      <CartEmptyState v-else />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'data'
})

useHead({
  title: 'Panier | Projet File Rouge'
})

const { cart, subtotal, totalItems, increment, decrement, removeItem, clearCart } = useCartPage()
</script>
