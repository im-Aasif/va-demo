# Copilot Instructions for va-demo

## Repository Overview

This is a modern static web application built with Vue 3, TypeScript, and Vite. The site is deployed to GitHub Pages and serves as a demonstration of a Vue 3 single-page application with client-side routing.

**Repository Size**: Small (~30 source files)
**Type**: Frontend web application
**Primary Languages**: TypeScript (60%), Vue (30%), CSS (10%)
**Frameworks**: Vue 3 (Composition API), Vue Router 5, Vite 7
**Target Runtime**: Modern web browsers (ES2020+)
**Deployment**: GitHub Pages (automated via GitHub Actions)

## Build & Development Commands

### Prerequisites
- **Node.js**: LTS version required
- **Package Manager**: pnpm (version 10.x)
- **Install pnpm**: `npm install -g pnpm`

### Command Sequence

**ALWAYS run commands in this exact order:**

1. **Install dependencies** (required before any build/dev operation):
   ```bash
   pnpm install --frozen-lockfile
   ```
   - Time: ~5-10 seconds
   - Creates `node_modules/` directory
   - Must be run first after cloning or when dependencies change
   - The `--frozen-lockfile` flag ensures consistency with CI

2. **Development server** (for local testing):
   ```bash
   pnpm dev
   ```
   - Time: Instant startup
   - Runs on `http://localhost:5173`
   - Hot Module Replacement (HMR) enabled
   - Press Ctrl+C to stop

3. **Production build** (for validation):
   ```bash
   pnpm build
   ```
   - Time: ~3-5 seconds
   - Runs TypeScript compiler first (`vue-tsc -b`)
   - Then builds with Vite
   - Output: `dist/` directory
   - Build fails if TypeScript errors exist

4. **Preview production build** (optional):
   ```bash
   pnpm preview
   ```
   - Requires successful `pnpm build` first
   - Serves the `dist/` directory locally

### Validation Steps

**Always validate changes with:**
1. TypeScript compilation: `pnpm build` (includes type checking)
2. Visual inspection: `pnpm dev` and test in browser

**No linting or testing tools are currently configured** - do not attempt to add them unless required by the task.

## Project Architecture

### Directory Structure

```
va-demo/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions deployment workflow
│   └── copilot-instructions.md # This file
├── src/
│   ├── components/             # Reusable Vue components
│   │   └── HelloWorld.vue
│   ├── router/
│   │   └── index.ts           # Vue Router configuration (hash mode)
│   ├── views/                 # Page components (routes)
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── assets/                # Static assets (images, etc.)
│   ├── App.vue                # Root Vue component
│   ├── main.ts                # Application entry point
│   └── style.css              # Global styles
├── public/                    # Static files (copied as-is to dist/)
├── dist/                      # Build output (generated, not in git)
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript project references
├── tsconfig.app.json         # TypeScript config for app code
├── tsconfig.node.json        # TypeScript config for build tools
├── package.json              # Dependencies and scripts
├── pnpm-lock.yaml           # Dependency lock file
├── index.html               # HTML entry point
└── README.md                # Project documentation
```

### Key Configuration Files

1. **vite.config.ts**:
   - Base path is `/va-demo/` (matches GitHub repository name)
   - **IMPORTANT**: If repository is renamed, update `base` property
   - Vue plugin configured

2. **src/router/index.ts**:
   - Uses `createWebHashHistory()` for GitHub Pages compatibility
   - Hash mode required because GitHub Pages doesn't support SPA routing
   - Routes: `/` (Home), `/about` (About)

3. **tsconfig.app.json**:
   - Strict TypeScript mode enabled
   - Linting rules: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
   - Includes all `.ts`, `.tsx`, `.vue` files in `src/`

### Continuous Integration

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
- Triggers: Push to `main` branch or manual dispatch
- Steps:
  1. Checkout code
  2. Setup pnpm (version 10)
  3. Setup Node.js (LTS) with pnpm cache
  4. Install dependencies: `pnpm install --frozen-lockfile`
  5. Build: `pnpm build`
  6. Deploy `dist/` to GitHub Pages

**Common CI Failures:**
- Missing dependencies: Ensure `pnpm install` runs before build
- TypeScript errors: Build will fail - fix type issues
- Build artifacts missing: Ensure `dist/` directory exists after build

## Development Guidelines

### Adding New Components
1. Create component in `src/components/` (reusable) or `src/views/` (pages)
2. Use `.vue` extension with TypeScript: `<script setup lang="ts">`
3. Import in parent component or router

### Adding New Routes
1. Create page component in `src/views/`
2. Add route to `src/router/index.ts`
3. Add navigation link in `src/App.vue` (or other components)

### TypeScript Requirements
- All code must be type-safe (strict mode enabled)
- Use Vue 3 Composition API with `<script setup>`
- Import type definitions from `vue-router` when needed

### GitHub Pages Configuration
- **Base URL**: Always use `/va-demo/` prefix for assets
- **Router Mode**: Must use hash history (`createWebHashHistory`)
- **Build Output**: Always in `dist/` directory

## Important Notes

1. **Always use pnpm**, not npm or yarn
2. **Always run `pnpm install` first** before any development or build commands
3. **Build includes type checking** - TypeScript errors will fail the build
4. **No linting/testing tools** are configured - validation is via build only
5. **GitHub Pages requires hash routing** - don't change to browser history mode
6. **Base path must match repository name** - update `vite.config.ts` if repo is renamed

## Quick Reference

```bash
# Setup (once)
npm install -g pnpm
pnpm install --frozen-lockfile

# Development workflow
pnpm dev          # Start dev server (http://localhost:5173)
pnpm build        # Validate with production build
pnpm preview      # Preview production build locally

# File locations
Components:    src/components/
Pages:         src/views/
Router:        src/router/index.ts
Entry point:   src/main.ts
Root:          src/App.vue
Config:        vite.config.ts
```

**Trust these instructions** - they have been validated by running actual commands. Only explore further if information is incomplete or conflicts with observed behavior.
