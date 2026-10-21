# context-023 · PWA phase 1 + shareable demo PWA (2026-10-16 evening, auto mode)

## Result
- **ADR-9 / ADR-10 accepted** (user). Stack `pwa` = "PWA with Workbox now (ADR-9)". Dependencies added with `dep add`:
  vite-plugin-pwa 1.3.0, workbox-* 7.4.1. `npm audit` reports 0.
- **Phase 1 (PWA-1).** Own SW (`app/src/sw/sw.ts`, injectManifest), registered only in production and demo builds.
  Scope `/UBTConnect/` (demo `/`). Caching follows table 3a. Silent update. The TST manifest is served at the original
  path `/UBTConnect/moduleservices/pwa/manifest`. The TST icons 48–512 are fetched (logged in `runtime-sources.md`).
  Docs: `app/docs/guides/pwa.md`.
- **Demo PWA (user goal: share with colleagues).** `npm --prefix app run build:demo` builds `app/dist-demo/` and
  `app/dist-demo.zip`: in-process mocks (MSW handlers through `getResponse`), the app SW precaching everything, installable,
  offline after one visit. Local servers `serve.mjs` / `serve.py`; hosting rules for Netlify/Cloudflare/GitHub Pages;
  `README-demo.md`. Nothing was published.
- **User reports fixed.** `<NotCaptured>` frames show on the dev server only (`app/src/shell/reviewMarkers.ts`,
  `?review=0`). Mock PIN `0223`. `?mocksession` is applied once per tab, so F5 keeps the lock.
- **QA dev vs demo, 64 routes.** All 64 match; the 4 early text differences came from QA timing (`networkidle` comes
  early with in-process mocks). CI passes with 1407 tests. Parity sweep 64/64 clean after the last change.
  Storybook builds.

## Decisions (who, date)
- User: ADR-9, ADR-10, the demo build script, PIN 0223. Auto window (until 2026-10-17 morning): demo = real PWA with
  in-process mocks (amends P16 for the demo only), review frames hidden in builds, `?mocksession` once per tab. Log:
  `migration/knowledge/auto-decisions-2026-10-16.md`.

## Open issues
- PWA-1 leftovers:
  - production still emits and precaches the mock chunks (~0.3 MB) because of the shell's mock sync import;
    recommendation: gate it with `MOCKS_BUILT` through a CR;
  - `mockServiceWorker.js` and `mock-*` folders are copied into production `dist/`;
  - navigations have no network timeout (phase 2);
  - the demo's first install downloads 13 MB.
- Dev-only React warnings (same on TST port): `<a>` inside `<a>` on Household_Relations, LDM_EventDetail_V2 and
  OrbitAdminEventDetail; setState during render on Photobook. Splash logs a `[mock] no recorded call` warning for
  `DataActionGetCacheInfo`.
- F2 (TST service worker) and the BFF host are still open. TO CONFIRM rows remain in the auto-decisions log.

## Next
The user shares `app/dist-demo.zip` or hosts `dist-demo/`. Then PWA phases 2–3 when the user wants them.
