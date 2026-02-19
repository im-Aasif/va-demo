# Copilot Instructions for va-demo

## Package Manager

This project uses **pnpm** exclusively. Always use `pnpm` commands, never `npm` or `yarn`.

```bash
pnpm install              # Install dependencies
pnpm install <package>    # Add a dependency
pnpm add -D <package>     # Add a dev dependency
```

## Build, Test, and Lint Commands

### Development
```bash
pnpm dev                  # Start dev server (Vite HMR on http://localhost:5173)
pnpm build                # TypeScript check + production build
pnpm preview              # Preview production build (http://localhost:4173)
```

### Testing
```bash
# Unit tests (Vitest)
pnpm test                 # Run tests in watch mode
pnpm test run             # Run tests once (CI mode)
pnpm test:ui              # Open Vitest UI
pnpm test:coverage        # Run with coverage report

# E2E tests (Playwright)
pnpm test:e2e             # Run E2E tests (builds + runs preview server automatically)
pnpm test:e2e:ui          # Open Playwright UI
```

**Running single tests:**
- Unit: `pnpm test HelloWorld` (matches filename pattern)
- E2E: `pnpm test:e2e app.spec.ts` (specify file)

### Code Quality
```bash
pnpm lint                 # Run ESLint with auto-fix
pnpm format               # Run Prettier formatting
```

## Architecture

### GitHub Pages Deployment

This is a **static site** deployed to GitHub Pages with a specific configuration:

- **Base path**: `/va-demo/` configured in `vite.config.ts` - must match repo name
- **Router mode**: Uses `createWebHashHistory()` for SPA routing (URLs like `/#/about`)
- **Deployment**: Automated via GitHub Actions on push to `main`

**If repository is renamed**, update the `base` in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/new-repo-name/',
})
```

### Router Configuration

- Router uses **hash history mode** (`createWebHashHistory()`) for GitHub Pages compatibility
- All routes defined in `src/router/index.ts` with typed `RouteRecordRaw[]`
- Routes import views directly (no lazy loading currently)

### Test Setup

- **Unit tests**: Vitest with `happy-dom` environment, configured in `vite.config.ts`
  - Test files: `src/components/__tests__/*.spec.ts`
  - Uses `@vue/test-utils` for component testing
  - Excludes `e2e/` directory from unit test runs
- **E2E tests**: Playwright with preview server auto-start
  - Test files: `e2e/*.spec.ts`
  - Configured in `playwright.config.ts` to run against `http://localhost:4173`
  - Automatically runs `pnpm preview` before tests

## Key Conventions

### Component Structure

- Use `<script setup lang="ts">` with TypeScript
- Use Composition API (`ref`, `reactive`, `computed`, etc.)
- Define props with `defineProps<{ propName: type }>()`
- Place component tests in `__tests__` subdirectory alongside component

### TypeScript Configuration

- Strict mode enabled (`strict: true`)
- No unused locals/parameters enforced
- Project uses TypeScript project references:
  - `tsconfig.app.json` - Application code (`src/`)
  - `tsconfig.node.json` - Build tooling config files

### ESLint Rules

- Uses ESLint flat config (`eslint.config.js`)
- Prettier integration enforced with `prettier/prettier: error`
- `vue/multi-word-component-names` is disabled
- Unused vars allowed if prefixed with `_` (`argsIgnorePattern: '^_'`)
- `no-useless-assignment` disabled

### CI/CD Workflows

Two GitHub Actions workflows:

1. **`deploy.yml`** (main branch):
   - Runs full test suite (lint → unit → build → e2e)
   - Deploys to GitHub Pages on success

2. **`pr-validation.yml`** (PRs to main):
   - Same test suite but without deployment
   - Must pass before merging

Both use `pnpm install --frozen-lockfile` and install Playwright with `--with-deps chromium` only.
