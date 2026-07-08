# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server (with `--host`, served over HTTPS via `@vitejs/plugin-basic-ssl`)
- `npm run build` — typecheck (`tsc`) then build for production
- `npm run lint` — ESLint over `.ts`/`.tsx`, zero warnings allowed (`--max-warnings 0`)
- `npm run preview` — preview the production build
- `npm run deploy` — publish `dist/` to GitHub Pages via `gh-pages` (deployed at the `homepage` URL in `package.json`)

There is no test suite/framework configured in this repo.

## Architecture

Push Ups is a single-page PWA (Vite + React 19 + TypeScript + MUI) for logging push-up reps. It has no backend: all data is persisted client-side in `localStorage`.

- **Data model** (`src/types.ts`): the only domain type is `TrackItem { value, timestamp }` — one recorded set of reps at a point in time. `Section` is the `'track' | 'stats'` union driving top-level navigation.
- **Persistence** (`src/utils.ts`): `loadData`/`saveData` read/write the full `TrackItem[]` history as JSON under the `push-ups-v1` localStorage key. There's no incremental storage or migration logic — the whole array is read/written each time. Derived helpers (`getSum`, `getTodayValues`) operate on `TrackItem[]` and are reused across modules.
- **Navigation** (`src/App.tsx` + `src/components/shell.tsx`): `App` owns the current `Section` in state and conditionally renders one module. `Shell` is the MUI `AppBar`/`Drawer` chrome; it takes an `onChange(section)` callback rather than owning navigation state itself.
- **Modules** (`src/modules/*/module.tsx`): each top-level screen is a self-contained module with its own state, loading data independently via `loadData()` on mount. There is no shared app-level state store — modules don't communicate with each other.
  - `track`: the entry screen for logging a new set (slider + increment/decrement buttons + a circular submit button), and shows today's total.
  - `stats`: read-only aggregate view (totals, daily max/average, per-day breakdown) computed from the full history with local helper functions (`findLowestAndHighest`, `getTotalByDay`, `formatDate`).
- **Theming** (`src/theme.ts`): a single MUI `createTheme` call with custom primary/secondary colors; imported once in `App.tsx` and applied via `ThemeProvider`.
- **PWA config** (`vite.config.ts`): manifest, icons, and screenshots are defined here via `vite-plugin-pwa`; the app is served under the `/push-ups` base path (GitHub Pages subpath), so `base` is threaded into all manifest asset URLs.

## Conventions

- No semicolons, single quotes, trailing commas, 120 col width (Prettier — see `.prettierrc.json`).
- Import local modules with explicit `.ts`/`.tsx` extensions (matches existing style, e.g. `from '../../types.ts'`).
- ESLint runs with type-aware rules (`flat/recommended-type-checked`, `flat/stylistic-type-checked`) — lint failures include type errors, not just style.
