# AGENTS.md

Single-package Next.js 16 (pages router, static export) landing page. React 19, TypeScript 6, Tailwind 4, ESLint 10 (flat config). Not a monorepo; no test suite and no CI workflows (`.github/` is issue templates only) — verification is local.

## Commands (npm only; `yarn.lock` was removed)

- Install: `npm install` or `npm ci` — both work, no `--legacy-peer-deps` needed.
- Verify (run all three, in this order — pre-commit enforces the first two on staged files):
  1. `npm run lint` (`eslint .`, config in `eslint.config.mjs`)
  2. `npm run build-types` (`tsc --noEmit`)
  3. `npm run build` (Turbopack)
- Dev server: `npm run dev` → http://localhost:3000. Requires Node ≥ 20.9.
- Static export: `npm run build-prod` = `rimraf .next out` + `next build` → static site in `out/` (`next.config.mjs` sets `output: 'export'`; there is no `next export` or `next start` in this setup). `netlify.toml` publishes `out/` with `NODE_VERSION = "22"`.
- Bundle report: `npm run build-stats` → writes `.next/analyze/client.html`. It passes `--webpack` because `@next/bundle-analyzer` is incompatible with Turbopack builds.

## Where content lives

- `src/config/index.json` — nearly every component imports it; all copy, links, and image paths come from here. Edit content here, not in components.
- Image paths in that JSON are root-absolute (`/assets/...`) and map to `public/assets/...`. New images go in `public/assets/`.
- Theme: the `@theme` block in `src/styles/main.css` defines brand colors (`primary`, `secondary`, `tertiary`, `border`, `background`). There is no `tailwind.config.js` (Tailwind 4 CSS-first config).
- `src/utils/AppConfig.ts` — locale/SEO defaults used by `_document.tsx`.
- Page assembly: `src/pages/index.tsx` stacks `src/components/*` sections; extra routes are `src/pages/policy` and `src/pages/terms`.

## Env vars

`NEXT_PUBLIC_GOOGLE_ANALYTICS` and `NEXT_PUBLIC_GOOGLE_ADS_ID` (read in `src/lib/gtag.ts`, `src/lib/googleAds.ts`, rendered by `src/components/Analytics.tsx`). Build does not require them; when unset the script URLs render with `undefined` ids.

## Conventions that differ from defaults

- Lint stack is ESLint 10 flat config (`eslint.config.mjs`): `eslint-config-next` (core-web-vitals + typescript) plus `import-x/order` (react first, blank line between groups, alphabetical, parents before siblings), `unused-imports` (prefix intentionally unused args with `_`), and `eslint-plugin-prettier` with `singleQuote: true` from `.prettierrc`. The old airbnb configs are gone — they don't support ESLint 10.
- `tsconfig.json` is strict: `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`, `noImplicitReturns` — array/object indexing yields `T | undefined`. Next sets `jsx: react-jsx`, so a default `import React` is unused unless you reference `React.*`.
- Keep `<img>`: `@next/next/no-img-element` is deliberately off because `next/image` doesn't work with static export.
- Husky 9 pre-commit runs `lint-staged --concurrent false` (eslint `--fix` + eslint, then full `tsc` for `.ts/.tsx`, prettier for `.json`) — intentionally sequential so type errors surface after lint fixes. Prettier scope is code + JSON only (see `.prettierignore`); markdown/yaml are not formatted.
- React 19 hydration is strict: invalid HTML nesting such as `<ul>` inside `<p>` causes console error #418 (the browser reparents the list, so client render mismatches the server HTML). Wrap list-containing blocks in `<div>`, not `<p>`.
- `next.config.mjs` sets `trailingSlash: true`, so exported routes are `/policy/index.html` style URLs.
