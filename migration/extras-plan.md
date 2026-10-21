# Work beyond the screen pipeline (user, 2026-10-14)

Goal: the React app replaces the OutSystems app running in production. No backend yet: the front end runs on mock
data that matches TST 1:1 in UI/UX and in how it calls the API (same calls, same moments, same inputs/outputs and
states). The user chose all four groups below. Stack items and dependencies they need go through Phase 4 or an ADR.

| Group | Work | When | Output | Status |
|---|---|---|---|---|
| A. API contract + BE spec | Typed contract for the 72 actions (from TST compiled types + captured call order); MSW validates against it | Phase 4 (format), Phase 5 (base), per route | `docs/api/` contract, `migration/knowledge/actions/` | planned |
| A | One BE spec page per action: inputs/outputs, server logic (MCP on DEV, read-only, TST differences noted), authorization | per route | `docs/backend/actions/<Action>.md` | planned |
| B. Mock close to TST | Anonymized fixtures recorded from TST (user reviews `REVIEW.md`); scope: no person data (`mock-scope.json`) | Phase 4 (`mocking`), before routes | `app/src/mocks/fixtures` | done 2026-10-14: 25 fixtures, 18/24 actions, reviewed by the user; 6 actions need plan steps |
| B | Mock latency from TST timings; scenario switcher (normal / empty / error / slow / offline) | Phase 5 | shell dev panel | planned |
| C. Ready for production | Swappable providers: Auth (mock → B2C), Flags (JSON → LaunchDarkly), ApiClient (MSW → BE), runtime config per environment, logging + error boundary | Phase 4 (decide), Phase 5 (build) | `src/lib/*` | planned |
| C | Inventory of non-visible behaviour: client variables, local storage, timers, app-start sync, push, deep links, analytics | Phase 4–5 | `docs/behaviour-inventory.md` | planned |
| C | Cutover plan: data kept on the device (PIN, biometric setting) when users move from the old app | before go-live | `docs/cutover.md` | planned |
| C | Web equivalent per native plugin (ADR-1: web / PWA only, no store app): push, WebAuthn, barcode, share, files, deep links, monitoring | Phase 5 (adapters `src/lib/device`), decisions per feature | behaviour inventory | planned |
| C | PROD flag values and per-user targeting; revisit default-only flags and the 5 `skip:variant` screens | before go-live | `flags.md`, board | planned |
| D. Sharing and quality | Single app; `src/shared` never imports routes or shell, so it can become a package later (user, 2026-10-14) | Phase 5 | folder rules | planned |
| D | Storybook catalog of the shared blocks with their captured states | Phase 5 | `app/.storybook`, stories | base done (scaffold, 2026-10-14); stories per block pending |
| D | CI: platform-neutral `npm run ci` (lint, typecheck, tests, parity; bundle and performance budgets not worse than the original); platform chosen later, `git init` only when the user asks (user, 2026-10-14) | Phase 5 | `npm run ci` | base done (contract types, typecheck, lint, format, tests, build); parity and budgets pending |
| D | Documentation site from `docs/`: C4, OutSystems → React map, patterns, ADRs; accessibility report (report only) | Phase 5 base, final at the end | `docs/` | planned |
