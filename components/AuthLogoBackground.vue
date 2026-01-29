<template>
  <div class="logo-layer absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <img
      v-for="logo in logoItems"
      :key="logo.name"
      :src="logo.src"
      :class="logo.class"
      class="logo-item"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import adidas from '~/asset/adidas.png'
import jordan from '~/asset/jordan.png'
import nb from '~/asset/nb.png'
import reebok from '~/asset/reebok.png'
import nike from '~/asset/nike.png'
import lacoste from '~/asset/lacoste.png'
import underarmor from '~/asset/underarmor.png'

const logoItems = [
  { name: 'adidas', src: adidas, class: 'logo-1' },
  { name: 'jordan', src: jordan, class: 'logo-2' },
  { name: 'nb', src: nb, class: 'logo-3' },
  { name: 'reebok', src: reebok, class: 'logo-4' },
  { name: 'nike', src: nike, class: 'logo-5' },
  { name: 'lacoste', src: lacoste, class: 'logo-6' },
  { name: 'underarmor', src: underarmor, class: 'logo-7' }
]
</script>

<style scoped>
.logo-layer {
  z-index: 1;
}

.logo-item {
  position: absolute;
  opacity: 0.22;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.35));
  border-radius: 18px;
  will-change: transform;
  --logo-scale: 1;
  transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
}

.logo-1 {
  top: 10%;
  left: 8%;
  width: 96px;
  --logo-scale: 1;
  animation: logo-drift-a 28s ease-in-out infinite;
  animation-delay: -4s;
}

.logo-2 {
  top: 8%;
  right: 12%;
  width: 120px;
  --logo-scale: 1.05;
  animation: logo-drift-b 32s ease-in-out infinite;
  animation-delay: -10s;
}

.logo-3 {
  bottom: 18%;
  left: 14%;
  width: 90px;
  --logo-scale: 0.95;
  animation: logo-drift-c 30s ease-in-out infinite;
  animation-delay: -7s;
}

.logo-4 {
  bottom: 12%;
  right: 16%;
  width: 104px;
  --logo-scale: 1;
  animation: logo-drift-a 36s ease-in-out infinite;
  animation-delay: -3s;
}

.logo-5 {
  top: 44%;
  left: 2%;
  width: 80px;
  --logo-scale: 0.9;
  animation: logo-drift-b 26s ease-in-out infinite;
  animation-delay: -12s;
}

.logo-6 {
  top: 52%;
  right: 4%;
  width: 86px;
  --logo-scale: 0.92;
  animation: logo-drift-c 24s ease-in-out infinite;
  animation-delay: -5s;
}

.logo-7 {
  top: 32%;
  left: 60%;
  width: 92px;
  --logo-scale: 0.98;
  animation: logo-drift-a 34s ease-in-out infinite;
  animation-delay: -9s;
}

@keyframes logo-drift-a {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
  }
  20% {
    transform: translate(22px, -14px) rotate(8deg) scale(var(--logo-scale));
  }
  45% {
    transform: translate(-18px, 18px) rotate(-10deg) scale(var(--logo-scale));
  }
  70% {
    transform: translate(16px, 8px) rotate(12deg) scale(var(--logo-scale));
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
  }
}

@keyframes logo-drift-b {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
  }
  25% {
    transform: translate(-20px, 12px) rotate(-8deg) scale(var(--logo-scale));
  }
  50% {
    transform: translate(18px, 20px) rotate(11deg) scale(var(--logo-scale));
  }
  75% {
    transform: translate(-12px, -16px) rotate(-12deg) scale(var(--logo-scale));
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
  }
}

@keyframes logo-drift-c {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
  }
  20% {
    transform: translate(14px, 18px) rotate(6deg) scale(var(--logo-scale));
  }
  40% {
    transform: translate(-16px, 6px) rotate(-9deg) scale(var(--logo-scale));
  }
  65% {
    transform: translate(10px, -18px) rotate(13deg) scale(var(--logo-scale));
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(var(--logo-scale));
  }
}

@media (max-width: 640px) {
  .logo-item {
    opacity: 0.16;
  }

  .logo-1 {
    width: 72px;
  }

  .logo-2 {
    width: 90px;
  }

  .logo-3 {
    width: 70px;
  }

  .logo-4 {
    width: 80px;
  }

  .logo-5 {
    width: 64px;
  }

  .logo-6 {
    width: 68px;
  }

  .logo-7 {
    width: 72px;
  }
}
</style>
