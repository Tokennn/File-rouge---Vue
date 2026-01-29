<template>
  <AuthPageShell
    background-class="bg-gradient-to-br from-ocean-900 via-slate-800 to-slate-900"
    blob-a-class="-top-1/2 -right-1/2 bg-ocean-500/10"
    blob-b-class="-bottom-1/2 -left-1/2 bg-ocean-600/10"
    :blob-b-style="{ animationDelay: '1s' }"
  >
    <RegisterFormCard />
  </AuthPageShell>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>
