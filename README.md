# Projet File Rouge - Shoes Process

Application "e-commerce" front construite avec **Nuxt 3** et **Tailwind CSS**, avec données locales (localStorage).

## ✨ Caractéristiques

- **Design moderne et élégant** - Interface avec dégradés, glassmorphism et animations fluides
- **Authentification locale** - Session stockée en localStorage
- **Responsive** - Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations fluides** - Micro-interactions et transitions élégantes
- **TypeScript** - Code typé pour plus de sécurité
- **Admin local** - Gestion produits, utilisateurs, demandes contact (localStorage)
<!-- 
## 🎨 Design

L'application utilise un design moderne avec :

- **Palette de couleurs Ocean** - Bleus profonds et dégradés élégants
- **Glassmorphism** - Effets de verre dépoli (backdrop blur)
- **Animations CSS** - Fade in, slide up, scale in
- **Ombres portées** - Profondeur et dimension
- **Bordures subtiles** - Séparations délicates -->

## 🚀 Installation

```bash
npm install
```

## 📦 Démarrage

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 📱 Pages

### Page d'accueil (`/`)
- Présentation de l'application
- Boutons vers login et register
- Affichage des infos utilisateur si connecté
- Bouton de déconnexion

### Page de connexion (`/login`)
- Formulaire avec email et mot de passe
- Validation en temps réel
- Messages d'erreur clairs
- Animation de chargement
- Lien vers la page d'inscription

### Page d'inscription (`/register`)
- Formulaire avec nom complet, email et mot de passe
- Validation du mot de passe (minimum 6 caractères)
- Messages de succès et d'erreur
- Animation de chargement
- Lien vers la page de connexion

### Boutique (`/chaussures`)
- Catalogue + filtres + tri
- Ajout au panier (localStorage)

### Panier (`/panier`)
- Gestion quantités, suppression, total

### Contact (`/contact`)
- Formulaire questions / personnalisation
- Sauvegarde des demandes en localStorage

### Admin (`/admin`)
- Dashboard avec stats, produits, utilisateurs, contacts (localStorage)

## 🛠️ Technologies utilisées

- **Nuxt 3** - Framework Vue.js pour applications web
- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - JavaScript avec typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **vee-validate** - Validation des formulaires (contact)

## 🔐 Authentification (localStorage)

L'application gère l'authentification côté client :

- **Inscription** - Création de compte avec email/password (localStorage)
- **Connexion** - Authentification locale
- **Session** - Stockée en localStorage
- **Déconnexion** - Suppression de la session locale

### Composables principaux

- `useAuth()` - Inscription, connexion, déconnexion, session
- `useLoginForm()` / `useRegisterForm()` - Logique formulaires
- `useContactForm()` - Formulaire contact (vee-validate)

## 🎯 Structure du projet

```
project/
├── app.vue                      # Composant racine
├── nuxt.config.ts              # Configuration Nuxt
├── tailwind.config.js          # Configuration Tailwind
├── package.json                # Dépendances
├── .env.example                # Exemple d'env (optionnel)
├── composables/
│   ├── useAuth.ts             # Auth locale
│   ├── useContactForm.ts      # Contact (vee-validate)
│   └── useProductFilters.ts   # Filtres boutique
├── stores/
│   ├── useSessionStore.ts     # Session locale
│   ├── useUsersStore.ts       # Users locaux
│   ├── useProductsStore.ts    # Catalogue local
│   ├── useCartStore.ts        # Panier local
│   └── useContactStore.ts     # Demandes contact
└── pages/
    ├── index.vue              # Page d'accueil
    ├── login.vue              # Page de connexion
    ├── register.vue           # Page d'inscription
    ├── chaussures.vue         # Boutique
    ├── panier.vue             # Panier
    ├── contact.vue            # Contact
    └── admin.vue              # Admin
```

## 🧩 Architecture (stores / composables / composants)

### Stores (localStorage)
Les stores stockent l'état global et le persistant (localStorage). Ils exposent des getters/méthodes simples :
- `useSessionStore` : session utilisateur courante (clé `local_auth_session`).
- `useUsersStore` : liste des utilisateurs (clé `local_auth_users`).
- `useProductsStore` : catalogue + catégories (clé `local_shop_products`).
- `useCartStore` : panier par utilisateur (clé `local_cart_<userId>`).
- `useContactStore` : demandes de contact (clé `local_contact_requests`).

### Composables
Les composables orchestrent :
- `useAuth` : login/register/logout en s’appuyant sur `useUsersStore` + `useSessionStore`.
- `useLoginForm` / `useRegisterForm` : logique de formulaire (messages, submit, navigation).
- `useContactForm` : validation via vee-validate + enregistrement dans `useContactStore`.
- `useProductFilters` : recherche/tri/filtre côté client.
- `useAdminPage` : agrège les stores pour l’admin (users, produits, contacts).

### Composants
Les composants :
- Exemples auth : `components/auth/LoginFormCard.vue`, `RegisterFormCard.vue`.
- Boutique : `components/shop/*` (cartes produits, filtres, etc.).
- Admin : sections dédiées (users, produits, contacts…).

### Flux "typiques"
- Login : `LoginFormCard` → `useLoginForm` → `useAuth` → `useSessionStore`.
- Contact : `ContactFormCard` → `useContactForm` → `useContactStore`.
- Panier : pages → `useCartStore` (lié à l’utilisateur courant).

## 🌍 i18n

Le projet utilise `@nuxtjs/i18n` avec 2 langues :
- Français (`fr`)
- Anglais (`en`)

Fichiers de traduction :
- `locales/fr.json`
- `locales/en.json`

Exemple d’usage (dans `pages/chaussures.vue`) :
```ts
const { t } = useI18n()
```

Pour ajouter une clé :
1. Ajoute la clé dans `locales/fr.json` et `locales/en.json`.
2. Utilise `t('ma.cle')` dans les composants/pages.

<!-- ## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  ocean: {
    50: '#f0f9ff',
    // ... autres nuances
    950: '#082f49'
  }
}
```

### Animations

Les animations personnalisées sont également dans `tailwind.config.js` :

- `animate-fade-in` - Apparition en fondu
- `animate-slide-up` - Glissement vers le haut
- `animate-scale-in` - Agrandissement progressif -->

## 📦 Build pour production

```bash
npm run build
```

Le build sera généré dans le dossier `.output/`

## 🚀 Déploiement

Pour déployer/démarrer l'application :

```bash
npm run build
npm run preview
```

## 📝 Notes

- Le projet fonctionne sans backend (localStorage uniquement).
- Choix localStorage : Car c'est un projet orienté front, rapide à tester/démo sans infra, tout reste en local au navigateur.
<!-- - Le design utilise des couleurs bleues (ocean) au lieu de violet pour un look plus professionnel. -->
<!-- 
## 🎓 Pour aller plus loin

- Ajouter la réinitialisation de mot de passe
- Implémenter l'authentification sociale (Google, GitHub, etc.)
- Ajouter la gestion de profil utilisateur
- Créer un dashboard utilisateur
- Implémenter des routes protégées avec middleware -->

---
<!-- 
**Design moderne. Authentification sécurisée. Expérience utilisateur fluide.** -->
