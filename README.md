# Test technique pour Les Echos

## Getting started

Hello there, you are a new recruit in our frontend team at Les Echos, and your first task is to implement our newsletter page.

You can find the design on our [figma](https://www.figma.com/file/u1hoAP9FOa1FHbBgkE346o/Entretient-Dev-2024?type=design&node-id=1-309&mode=design)

## What is your mission ?

### Styling

Regardless of point 1 and 2, the page should be responsive.

1. Implement the styling using what you like to use (chakra-ui, material-ui or something else)
2. Implement the styling yourself, using the library of your choice (we are using styled-components and pandaCSS for instance)

:warning: We are not asking for a pixel perfect copy of the figma, we just wanted to gave you a direction on where to go, it does not have to be the exact same thing really, surprise us :warning:

### Features

The current user will be representated by 3 different mock (`USER_WITH_ONE_SUBSCRIPTION`, `USER_WITH_MULTIPLE_SUBSCRIPTION`, `USER_WITHOUT_SUBSCRIPTION`), you can find these at `src/mocks/user.ts`.

What you need to look at is the `subscriptions` key, it represent the subscriptions that the user currently have active.

:warning: The app should be working with all these 3 types of profile in mind. :warning:

### Implement a list of newsletters, grouped by site.

You can find mocks of the items in `src/mocks/newsletters.ts`, you have to display the list of all the newsletters, but grouped by the `site` key.

### The CTA must be different regarding the user's status

In every newsletter object, you have a key `subscriptions`, which is an array of strings, it represents the right needed to access this newsletter.

If the field is an empty array, it means the newsletter can be accessed by everyone, otherwise, the user should have at least of the right listed in the array.

The label of the CTA (call to action) will be `S'inscrire` if the user has access to it, otherwise `S'abonner`

### Everything should be typed

Everything has to be typed with typescript, show us what you can do !

### The newsletter should come from a fetching function

Even if we don't provide an API to call, you have to simulate the fetching.
Also, the app should work in SSR.


## 🚀 Installation

Clonez le projet et installez les dépendances avec pnpm :

```bash
git clone <url-du-repo>
cd <nom-du-projet>
pnpm install
```

## 💻 Développement

Lancez le serveur de développement :

```bash
pnpm dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## 🏗️ Build et Production

Pour créer une version optimisée pour la production :

```bash
pnpm build
pnpm start
```

## 🛠️ Stack Technique

### Core
- **Next.js** - Framework React avec SSR/SSG
- **React** - Bibliothèque UI
- **TypeScript** - Typage statique pour plus de robustesse

### Authentification
- **jose** - Gestion des tokens JWT
- **Cookies** - Stockage sécurisé des tokens d'authentification

### Styling & UI
- **Tailwind CSS** - Framework CSS utility-first avec une gestion complète de la responsivité, en créant des variables custom façon design tokens
- **tailwind-merge** - Fusion intelligente des classes Tailwind
- **Radix Primitive** - Composants accessibles et non-stylés. Facilite la création des composants rapidement

### Qualité de Code
- **ESLint** - Linting JavaScript/TypeScript
    - `eslint-config-prettier` - Intégration avec Prettier
    - `eslint-plugin-better-tailwindcss` - Optimisation des classes Tailwind
    - `eslint-plugin-perfectionist` - Organisation et tri automatique
- **Prettier** - Formatage de code automatique

### Package Manager
- **pnpm** - Gestionnaire de paquets rapide et efficace

## 🎨 Design System

Le projet utilise un mini design system basé sur des design tokens personnalisés intégrés à Tailwind. Cette approche permet de maintenir une cohérence visuelle tout en gardant la flexibilité d'un framework utility-first.

## 🧹 Scripts Utiles

```bash
# Linter
pnpm lint

# Formatage
pnpm format
```

## 📁 Structure du Projet

```
├── src/
│   ├── app/           # App Router
│   │   ├── newsletter/    # Page newsletter
│   │   ├── api/          # Routes API
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Page d'accueil
│   ├── components/    # Composants réutilisables - Design system en atomique design (atomes - molecules - organims)
│   ├── lib/
│   │   └── utils.ts     # Helpers
│   ├── mocks/         # Fixtures et données de test
│   ├── globals.css    # Styles globaux + custom variables
│   └── types.ts       # Définitions TypeScript
└── public/            # Assets statiques
```
