# Stack baseline: version set and probe results (2026-10-14)

ADR-2 (baseline), ADR-3 (third-party libraries), ADR-4 (contract + Storybook tooling). Status: **approved by the user
2026-10-14** and pinned with `stack.py dep add` (Virtual Select vendored: ADR-5).

## Rule (user, 2026-10-14: "stable, not latest")
- Major line released at least 9 months ago; inside it, the newest version released at least 60 days ago
  (cutoffs 2026-01-14 / 2026-08-15). 0.x packages: the minor line counts as the major.
- Exceptions:
  - Node follows the LTS line that the user chose.
  - Take a security fix at once (the newest patch that fixes the advisory).
  - Skip a line that is no longer supported.
  - Libraries that the original app ships keep the TST version.

## Versions
| Package | Version | Note |
|---|---|---|
| node | 24.21.0 (LTS Krypton) | user chose 24 LTS; `.nvmrc` |
| react, react-dom | 19.2.8 | 19.3 is newer than 60 days |
| @types/react / @types/react-dom | 19.2.18 / 19.2.4 | |
| react-router | 7.18.2 | 8.x is younger than 9 months; v7 has the data router of v6 under `react-router` |
| @tanstack/react-query | 5.101.4 | |
| vite / @vitejs/plugin-react | 7.3.6 / 5.2.0 | Vite 8 (Rolldown) is younger than 9 months |
| typescript | 5.9.3 | 6.0 / 7.0 blocked: typescript-eslint needs <6.1, openapi-typescript needs ^5 |
| @types/node | 24.13.3 | matches Node 24 |
| msw | 2.15.0 | 3.0 released 2026-09-28 |
| vitest | 4.1.11 | security fix GHSA-82fw-gwwq-j7x9 (4.1.10 vulnerable) |
| jsdom | 27.4.0 | |
| @testing-library/react / dom / jest-dom / user-event | 16.3.2 / 10.4.1 / 6.10.0 / 14.6.4 | |
| playwright | 1.62.1 | |
| eslint / @eslint/js | 10.8.1 / 10.0.1 | ESLint 9 is no longer supported (npm deprecation notice) |
| typescript-eslint / eslint-plugin-react-hooks / globals | 8.67.0 / 7.1.1 / 17.11.0 | |
| prettier | 3.9.6 | |
| storybook / @storybook/react-vite | 10.5.8 / 10.5.8 | telemetry to be disabled (`core.disableTelemetry`) |
| openapi-typescript / openapi-fetch | 7.13.0 / 0.15.2 | |
| leaflet / leaflet.markercluster | 1.9.4 / 1.5.3 | same as TST (file headers) |
| sortablejs | 1.15.7 | same as TST |
| @splidejs/splide | 4.1.3 | TST file identical to the npm 4.1.3 build (4.1.4 differs) |
| nouislider / wnumb | 15.8.1 / 1.2.0 | TST files identical to the npm builds |
| dompurify | 3.4.17 | security library: newest patch |
| @types/leaflet / leaflet.markercluster / sortablejs | 1.9.22 / 1.5.6 / 1.15.9 | |
| Virtual Select | v1.3.0 vendored (ADR-5) | TST bundles v1.3.0 (OSUI 2.23); npm `virtual-select-plugin` stops at 1.1.0 and no npm build matches the TST file |

## Probe (scratch project, Node 24.21.0, npm 11.19.0)
All green:
- openapi-typescript generation
- `tsc --noEmit` (strict)
- vitest + MSW node
- ESLint (strictTypeChecked + react-hooks)
- Prettier
- `vite build`
- `storybook build`
- `npm audit`: 0 vulnerabilities
- browser smoke test (the MSW worker answers, no console error)

## Facts for the foundation (scaffold adaptation)
- openapi-fetch: pass `fetch: (r) => globalThis.fetch(r)`; the default captures `fetch` at import, before MSW patches it,
  and calls then hang.
- The contract must describe error responses (`default`), otherwise the client types `error` as never.
- Splide 4.1.3 types are not reachable through its `exports` with `moduleResolution: bundler`: map them in `paths`
  (`./node_modules/@splidejs/splide/dist/types/index.d.ts`). wnumb has no types: a local `declare module`.
- npm 11 runs install scripts only for approved packages: `allowScripts` for esbuild and msw (`npm install-scripts approve`).
- tsconfig must list `.storybook/*.ts` explicitly for the ESLint project service.
- React Router 7: imports come from `react-router` (not `react-router-dom`).
