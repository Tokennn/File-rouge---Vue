<template>
  <AuthPageShell
    background-class="bg-gradient-to-br from-slate-900 via-emerald-900/40 to-slate-950"
    blob-a-class="-top-1/2 -left-1/2 bg-emerald-500/10"
    blob-b-class="-bottom-1/2 -right-1/2 bg-ocean-500/10"
    :blob-b-style="{ animationDelay: '1s' }"
  >
    <ContactFormCard />
  </AuthPageShell>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>
