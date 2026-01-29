# Application d'Authentification Moderne

Une application d'authentification élégante construite avec **Nuxt 3**, **Tailwind CSS** et **Supabase**.

## ✨ Caractéristiques

- **Design moderne et élégant** - Interface avec dégradés, glassmorphism et animations fluides
- **Authentification sécurisée** - Gérée par Supabase (backend as a service)
- **Responsive** - Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations fluides** - Micro-interactions et transitions élégantes
- **TypeScript** - Code typé pour plus de sécurité

## 🎨 Design

L'application utilise un design moderne avec :

- **Palette de couleurs Ocean** - Bleus profonds et dégradés élégants
- **Glassmorphism** - Effets de verre dépoli (backdrop blur)
- **Animations CSS** - Fade in, slide up, scale in
- **Ombres portées** - Profondeur et dimension
- **Bordures subtiles** - Séparations délicates

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

## 🛠️ Technologies utilisées

- **Nuxt 3** - Framework Vue.js pour applications web
- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - JavaScript avec typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Supabase** - Backend as a service (authentification, base de données)
- **@supabase/supabase-js** - Client JavaScript pour Supabase

## 🔐 Authentification

L'application utilise Supabase pour gérer l'authentification :

- **Inscription** - Création de compte avec email/password
- **Connexion** - Authentification par email/password
- **Session** - Gestion automatique de la session
- **Déconnexion** - Suppression de la session

### Composables

#### `useSupabase()`
Initialise et retourne le client Supabase configuré.

#### `useAuth()`
Gère toutes les opérations d'authentification :
- `signUp(email, password, fullName)` - Créer un compte
- `signIn(email, password)` - Se connecter
- `signOut()` - Se déconnecter
- `getSession()` - Récupérer la session active
- `user` - Utilisateur connecté (reactive)
- `loading` - État de chargement (reactive)

## 🎯 Structure du projet

```
project/
├── app.vue                      # Composant racine
├── nuxt.config.ts              # Configuration Nuxt
├── tailwind.config.js          # Configuration Tailwind
├── package.json                # Dépendances
├── .env                        # Variables d'environnement
├── composables/
│   ├── useSupabase.ts         # Client Supabase
│   └── useAuth.ts             # Logique d'authentification
└── pages/
    ├── index.vue              # Page d'accueil
    ├── login.vue              # Page de connexion
    └── register.vue           # Page d'inscription
```

## 🎨 Personnalisation

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
- `animate-scale-in` - Agrandissement progressif

## 📦 Build pour production

```bash
npm run build
```

Le build sera généré dans le dossier `.output/`

## 🚀 Déploiement

Pour déployer l'application :

```bash
npm run build
npm run preview
```

## 🔒 Sécurité

- Authentification gérée par Supabase (infrastructure sécurisée)
- Pas de stockage de mots de passe en clair
- Validation côté client et serveur
- Protection CSRF automatique par Supabase

## 📝 Notes

- L'email de confirmation Supabase peut être désactivé dans les paramètres du projet
- Les sessions sont automatiquement gérées par Supabase
- Le design utilise des couleurs bleues (ocean) au lieu de violet pour un look plus professionnel

## 🎓 Pour aller plus loin

- Ajouter la réinitialisation de mot de passe
- Implémenter l'authentification sociale (Google, GitHub, etc.)
- Ajouter la gestion de profil utilisateur
- Créer un dashboard utilisateur
- Implémenter des routes protégées avec middleware

---

**Design moderne. Authentification sécurisée. Expérience utilisateur fluide.**
