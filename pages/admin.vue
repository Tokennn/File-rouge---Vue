<template>
  <main v-if="ready" class="max-w-6xl mx-auto px-6 pb-16 space-y-8">
    <AdminStatsGrid :stats="stats" />

    <AdminOrdersActionsSection :orders="orders" />

    <AdminPerformanceSection :performances="performances" />

    <AdminProductsSection
      :products="products"
      :categories="categories"
      :product-form="productForm"
      :product-error="productError"
      :product-success="productSuccess"
      :format-price="formatPrice"
      @add-product="handleAddProduct"
      @remove-product="removeProduct"
      @refresh-products="loadProducts(true)"
    />

    <AdminUsersSection
      :users="users"
      :user-form="userForm"
      :user-error="userError"
      :user-success="userSuccess"
      :format-date="formatDate"
      @add-user="handleAddUser"
      @remove-user="removeUser"
      @refresh-users="loadUsers(true)"
    />

    <AdminContactRequestsSection
      :requests="requests"
      :format-date="formatDate"
      @remove-request="removeRequest"
      @clear-requests="clearRequests"
      @refresh-requests="loadRequests(true)"
    />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Dashboard Admin | Projet File Rouge'
})

const {
  ready,
  stats,
  orders,
  performances,
  users,
  loadUsers,
  userForm,
  userError,
  userSuccess,
  handleAddUser,
  removeUser,
  formatDate,
  products,
  categories,
  loadProducts,
  productForm,
  productError,
  productSuccess,
  handleAddProduct,
  removeProduct,
  formatPrice,
  requests,
  loadRequests,
  removeRequest,
  clearRequests
} = useAdminPage()
</script>
