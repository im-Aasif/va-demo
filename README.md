# Vue 3 + TypeScript + Vite Static Site

A modern static web application built with Vue 3, TypeScript, and Vite, deployed to GitHub Pages.

## 🚀 Features

- ⚡️ **Vite 7** - Lightning fast build tool with instant HMR
- 🎯 **Vue 3** - Progressive JavaScript framework with Composition API
- 📘 **TypeScript** - Type-safe development
- 🛣️ **Vue Router 5** - Client-side routing with hash mode for GitHub Pages
- 📦 **pnpm** - Fast, efficient package manager
- 🚀 **GitHub Actions** - Automated deployment with CI/CD
- 🎨 **Prettier** - Code formatting
- 🔍 **ESLint** - Code linting and quality checks
- ✅ **Vitest** - Unit and snapshot testing
- 🎭 **Playwright** - End-to-end testing

## 📦 Development

### Prerequisites

- Node.js (LTS version)
- pnpm (install with `npm i -g pnpm`)

### Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Format code
pnpm format

# Run unit tests
pnpm test

# Run unit tests with UI
pnpm test:ui

# Run E2E tests
pnpm test:e2e

# Run E2E tests with UI
pnpm test:e2e:ui
```

## 🌐 Deployment to GitHub Pages

The site automatically deploys to GitHub Pages on every push to `main` via GitHub Actions.

- Check the **Actions** tab to see deployment progress
- Once complete, your site will be live at `https://<username>.github.io/va-demo/`

### Configuration

The site is configured for GitHub Pages deployment:

- **Base path**: Set to `/va-demo/` in [vite.config.ts](vite.config.ts)
- **Router**: Uses hash history mode (`/#/`) for SPA routing compatibility
- **Workflow**: Automated build and deploy via [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## 📁 Project Structure

```
va-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── src/
│   ├── components/          # Vue components
│   ├── router/
│   │   └── index.ts        # Vue Router configuration
│   ├── views/              # Page components
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue             # Root component
│   └── main.ts             # Application entry point
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Customization

### Changing Repository Name

If you rename the repository, update the `base` path in [vite.config.ts](vite.config.ts):

```typescript
export default defineConfig({
  base: '/your-new-repo-name/',
})
```

### Adding Routes

1. Create a new component in `src/views/`
2. Add the route in `src/router/index.ts`
3. Add a navigation link in `src/App.vue`

## 📚 Learn More

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [pnpm Documentation](https://pnpm.io/)

## 📄 License

MIT
