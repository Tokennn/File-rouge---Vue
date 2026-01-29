<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-cover opacity-45 bg-[position:center_20%]"
        :style="{ backgroundImage: `url(${runningImage})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/85"></div>
    </div>

    <div class="relative z-10">
      <HomeNav :user="user" :loading="loading" :running-image="runningImage" @sign-out="handleSignOut" />

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HomeHero />

        <HomeProfileCard v-if="user" :user="user" :profile-photo="profilePhoto" />
        <HomeGuestCards v-else />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const { runningImage, user, loading, profilePhoto, handleSignOut } = useHomeProfile()
</script>
