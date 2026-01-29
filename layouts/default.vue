<template>
  <div class="min-h-screen bg-slate-950 text-white relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-32 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-ocean-500/20 via-slate-900/0 to-transparent blur-3xl"></div>
      <div class="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-emerald-400/10 via-slate-900/0 to-transparent blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-60 w-[70%] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_60%)]"></div>
    </div>

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
