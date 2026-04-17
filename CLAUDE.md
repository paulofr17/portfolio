# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server on port 3000 (uses polling-based file watching).
- `npm run build` — runs `tsc` type-check then `vite build`. Build fails if TypeScript has any error.
- `npm run lint` — ESLint over `ts,tsx`; `--max-warnings 0` means any warning fails the command.
- `npm run preview` — serve the production build locally.

There is no test runner configured.

## Architecture

Single-page personal portfolio built with Vite + React 18 + TypeScript, styled with Tailwind, animated with Framer Motion. Deploys to Vercel.

- `src/App.tsx` is the entire page: a vertical stack of `<section>` elements (`about`, `experience`, `projects`, `contact`) rendered inside a max-width container, plus `Header` and `Footer`. Navigation is in-page scrolling — there is no router.
- `src/hooks/useSectionScroll.tsx` owns scroll-to-section behavior. It queries `document.querySelectorAll('section')` after mount and offsets scroll by 96px to clear the fixed header. The header height must stay in sync with this offset.
- `src/models/types.ts` is the content source for the Projects section — editing the `projectsPortfolio` array is how projects are added/changed. Images are imported from `src/assets` and bundled by Vite.
- Components in `src/components/` are flat (no nesting); `Project.tsx` is the card used by `Projects.tsx`. `TextWriting.tsx`, `TextSwitchingAnimation.tsx`, and `CursorBlinker.tsx` are the typewriter/animation primitives used in the hero.

## Path aliases

Both `vite.config.ts` and `tsconfig.json` define the same aliases — when adding a new one, update **both** or imports will resolve at build but fail type-checking (or vice versa):

`@/*`, `@pages/*`, `@components/*`, `@hooks/*`, `@assets/*`, `@models/*`

Note: `@pages` is configured but `src/pages/` does not exist yet.

## Conventions

- ESLint extends `@rocketseat/eslint-config/react`. Prettier uses `printWidth: 100` with `prettier-plugin-tailwindcss` (Tailwind classes are auto-sorted — do not hand-order them).
- `tsconfig.json` has `strict`, `noUnusedLocals`, and `noUnusedParameters` all on, so unused imports/vars break the build via `npm run build`.