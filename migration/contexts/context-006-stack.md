# context-006 · Phase 4: architecture and stack

Date: 2026-10-14 · Phase: 4 done · Status: current

## Result
- `stack.py check`: OK. 40 items confirmed, 12 patterns accepted (P-BACK … P-STATES), ADR-1…5 accepted, 12 deps +
  26 devDeps pinned. Human view: [architecture.md](../architecture.md); versions and probe: [stack-baseline](../knowledge/stack-baseline.md).
- Extra work beyond the screen pipeline (groups A–D): [extras-plan.md](../extras-plan.md).

## Decisions (user, 2026-10-14)
- Goal: the React app **replaces the OutSystems app in production**; UI/UX 1:1, nothing invented; maintainable, clean,
  shareable code; full architecture docs. No backend yet: mock data, calls like TST (same calls, moments, inputs/outputs).
- Extras A (OpenAPI contract + BE spec per action), B (recorded anonymized fixtures, TST latency, scenarios),
  C (swappable Auth/Flags/Api/config/logging, behaviour inventory, cutover, PROD flags), D (Storybook, `npm run ci`, docs).
- ADR-1 web / PWA only (no store app); native plugins get web equivalents per feature. ADR-2 stable baseline
  ("stable, not latest": major ≥ 9 months, version ≥ 60 days; Node 24 LTS, React 19.2, RR 7, Vite 7, TS 5.9, MSW 2,
  Vitest 4.1.11, ESLint 10). ADR-3 same third-party libraries as TST. ADR-4 openapi-typescript + openapi-fetch, Storybook.
  ADR-5 Virtual Select v1.3.0 vendored from TST.
- apiLayer: client generated from OpenAPI, endpoints named Module/Action; auth mock now, B2C through a BFF later; tokens
  never in browser storage; mocking from recorded TST fixtures (user reviews REVIEW.md); single app, `src/shared`
  extractable; CI platform not chosen (`npm run ci`; `git init` only when the user asks).
- "Any library is fine as long as the UI stays 1:1" (third-party choices); 8 OSUI/library items only on skipped screens out of scope.

## Facts learned
- The original is a Cordova mobile app: 21 native plugins in the survey (FCM, Crashlytics, TouchId, Barcode, …).
- Original keeps PIN and tokens in localStorage, has App Insights + New Relic, no CSP (`screens/*/analysis/security.md`).
- Provider versions on TST: Leaflet 1.9.4, markercluster 1.5.3, Sortable 1.15.7, Splide 4.1.3, noUiSlider 15.8.x,
  wNumb 1.2.0 (byte-compared with npm builds), Virtual Select 1.3.0 (no npm match).
- Probe lessons for the scaffold (fetch lookup per call, error responses in the contract, Splide types path, npm 11
  allowScripts, RR 7 imports): see stack-baseline.md.
- Node 24.21.0 installed with nvm; machine default stays 22.

## Open issues
- PROD flag values and per-user targeting unknown (default-only flags, 5 `skip:variant` screens) → before go-live.
- Scaffold targets React 18 / RR 6 / MSW 2.4: the foundation owner adapts it (ADR-2).

## Next
- Phase 5 foundation: adapt scaffold, record fixtures from TST (read-only guard), shell, 147 shared blocks, Storybook,
  `npm run ci`, contract base, providers (group C), docs skeleton.
