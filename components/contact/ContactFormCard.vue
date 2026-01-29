<template>
  <div class="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-scale-in">
    <div class="text-center mb-8">
      <div
        class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-ocean-500 mb-4 shadow-lg shadow-emerald-500/40"
      >
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Contact</h1>
      <p class="text-slate-300">Questions, personnalisation, conseils : écrivez-nous.</p>
    </div>

    <form @submit.prevent="submit" class="space-y-5">
      <div v-if="success" class="bg-emerald-500/20 border border-emerald-500/40 text-emerald-100 px-4 py-3 rounded-xl animate-fade-in">
        {{ success }}
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="space-y-2">
          <label for="fullName" class="block text-sm font-medium text-slate-200">Nom complet</label>
          <input
            id="fullName"
            v-model="fullName"
            type="text"
            class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
            placeholder="Votre nom"
          />
          <p v-if="errors.fullName" class="text-xs text-rose-200">{{ errors.fullName }}</p>
        </div>

        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-slate-200">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
            placeholder="vous@email.com"
          />
          <p v-if="errors.email" class="text-xs text-rose-200">{{ errors.email }}</p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-[1fr,1fr]">
        <div class="space-y-2">
          <label for="requestType" class="block text-sm font-medium text-slate-200">Type de demande</label>
          <select
            id="requestType"
            v-model="requestType"
            class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-slate-900/60 text-white focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
          >
            <option value="question">Question / conseil</option>
            <option value="custom">Personnalisation d'une paire</option>
          </select>
          <p v-if="errors.requestType" class="text-xs text-rose-200">{{ errors.requestType }}</p>
        </div>

        <div class="space-y-2">
          <label for="subject" class="block text-sm font-medium text-slate-200">Sujet</label>
          <input
            id="subject"
            v-model="subject"
            type="text"
            class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
            placeholder="Ex: Besoin de conseils, custom premium..."
          />
          <p v-if="errors.subject" class="text-xs text-rose-200">{{ errors.subject }}</p>
        </div>
      </div>

      <div class="space-y-2">
        <label for="message" class="block text-sm font-medium text-slate-200">Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="4"
          class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
          placeholder="Expliquez votre demande en quelques lignes..."
        ></textarea>
        <p v-if="errors.message" class="text-xs text-rose-200">{{ errors.message }}</p>
      </div>

      <div v-if="isCustomRequest" class="space-y-4">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p class="text-sm text-slate-200 font-medium">Détails de personnalisation</p>
          <p class="text-xs text-slate-400">Aidez-nous à préparer une proposition sur-mesure.</p>

          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="shoeModel" class="block text-sm font-medium text-slate-200">Modèle souhaité</label>
              <input
                id="shoeModel"
                v-model="shoeModel"
                type="text"
                class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                placeholder="Ex: Aether Run"
              />
              <p v-if="errors.shoeModel" class="text-xs text-rose-200">{{ errors.shoeModel }}</p>
            </div>

            <div class="space-y-2">
              <label for="size" class="block text-sm font-medium text-slate-200">Pointure</label>
              <input
                id="size"
                v-model="size"
                type="text"
                class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                placeholder="Ex: 42"
              />
              <p v-if="errors.size" class="text-xs text-rose-200">{{ errors.size }}</p>
            </div>

            <div class="space-y-2">
              <label for="colors" class="block text-sm font-medium text-slate-200">Couleurs & matières</label>
              <input
                id="colors"
                v-model="colors"
                type="text"
                class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                placeholder="Ex: noir mat + accents ocre"
              />
              <p v-if="errors.colors" class="text-xs text-rose-200">{{ errors.colors }}</p>
            </div>

            <div class="space-y-2">
              <label for="budget" class="block text-sm font-medium text-slate-200">Budget</label>
              <input
                id="budget"
                v-model="budget"
                type="text"
                class="block w-full px-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                placeholder="Ex: 180 - 220 €"
              />
              <p v-if="errors.budget" class="text-xs text-rose-200">{{ errors.budget }}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full flex justify-center items-center py-3 px-4 border border-white/20 rounded-xl shadow-lg text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base"
      >
        {{ isSubmitting ? 'Envoi...' : 'Envoyer la demande' }}
      </button>

      <div class="grid gap-3 sm:grid-cols-2">
        <NuxtLink
          to="/"
          class="w-full flex justify-center items-center py-3 px-4 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-200 font-medium text-base"
        >
          Retour à l'accueil
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="w-full flex justify-center items-center py-3 px-4 border border-white/20 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium text-base"
        >
          Connexion admin
        </NuxtLink>
      </div>
    </form>
  </div>

  <div class="mt-8 text-center text-slate-400 text-sm">
    <p>Notre équipe répond sous 24-48h ouvrées.</p>
  </div>
</template>

<script setup lang="ts">
const {
  fullName,
  email,
  requestType,
  subject,
  message,
  shoeModel,
  size,
  colors,
  budget,
  isCustomRequest,
  errors,
  success,
  isSubmitting,
  submit
} = useContactForm()
</script>
