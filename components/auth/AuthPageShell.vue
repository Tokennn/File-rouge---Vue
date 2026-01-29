<template>
  <div
    class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
    :class="backgroundClass"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-full h-full rounded-full blur-3xl animate-pulse"
        :class="blobAClass"
      ></div>
      <div
        class="absolute w-full h-full rounded-full blur-3xl animate-pulse"
        :class="blobBClass"
        :style="blobBStyle"
      ></div>
    </div>

    <AuthLogoBackground />

    <div class="w-full max-w-md relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  backgroundClass: string
  blobAClass: string
  blobBClass: string
  blobBStyle?: Record<string, string>
}>()
</script>

