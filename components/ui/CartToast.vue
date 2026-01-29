<template>
  <div class="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-6">
    <Transition
      enter-active-class="transform transition-all duration-300 ease-out"
      enter-from-class="translate-y-2 scale-95 opacity-0"
      enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transform transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 scale-100 opacity-100"
      leave-to-class="translate-y-2 scale-95 opacity-0"
    >
      <div
        v-if="visible"
        class="w-full max-w-md rounded-2xl border border-emerald-300/30 bg-emerald-400/15 px-5 py-4 text-emerald-100 shadow-2xl backdrop-blur-xl"
        role="status"
        aria-live="polite"
      >
        <div class="flex items-start gap-3">
          <div class="mt-0.5 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]"></div>
          <div class="text-sm">
            <p class="font-semibold text-emerald-100">{{ t('cart.toast.title') }}</p>
            <p class="mt-1 text-emerald-100/90">{{ message }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
  message: string
}>()

const { t } = useI18n()
</script>
