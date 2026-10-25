# Refactor final report (P9-4)

Branch `refactor/architecture`.

Plan: `docs/architecture/refactor-plan-v2.md`. Measured 2026-10-25 on commit `95f0bad3`, Node 24.21.0. Baseline: [baseline.md](../baseline.md) (P0-1, P0-4). Full change list: [CHANGELOG.md](../CHANGELOG.md).

The app has 64 routes. All 64 are pages in `src/pages/`. `src/shared/` and `src/screens/` no longer exist. The UI is unchanged: parity is 64/64 against OutSystems and against the self reference.

## 1. Metrics of plan v2 section 7

Evidence of the P9-4 run: `npm run ci` exit 0 (640 test files, 3,975 tests); parity `--level strict --all --ref both` ([P9-4.md](P9-4.md)); `npm run e2e:pwa` 9/9; `app/build/bundle-report.mjs`; coverage with the command of baseline.md; `migration/tools/refactor/measure-final.mjs` (new, see section 5).

| Metric | Baseline | Target | Result | Met | Evidence and reason |
| --- | --- | --- | --- | --- | --- |
| Import cycles | 1 | 0 | 0 | Yes | `depcruise` finds no `circular` violation (P3-3). |
| Boundary violations | 4,464 warnings (P1-1) | 0 | 0 new. 142 dependency-cruiser rows and 72 ESLint rows are frozen | Partly | All rules are errors since P9-1. The old rows are frozen in shrink-only baselines (W38), not fixed. Per rule: rule 9: 30, rule 6: 50, rule 4: 36 (+72 ESLint), rule 8: 20, rule 5: 6. Owners: section 3. |
| Duplicate code (`jscpd`) | 63 clones, 1.15 percent | half or less | 35 clones, 0.51 percent (644 lines; P0-3: 1,289 lines) | Yes | `npm run dup`, threshold 0.57 percent. |
| Files in `pages/` that import `platform/` | n/a | only through `platform/<area>` barrels | Held by the lint rule | Yes | P9-1 rules, no new row. |
| Files that call `callAction` outside `api/` | 70 (plan: 71) | 0 | 6 | No | `containers/ShareSheet/api.ts`, `legacy/os/cache/UserInfoCacheControl`, `lib/legacyShared/actions.ts`, `lib/orbit/actions.ts`, `lib/ubtConnectUtils/actions.ts`, `platform/session/userInfo.ts`. Four are the module client actions (F35) and the cache blocks (F37). Two have no follow-up yet (section 3.1, item N-A). |
| Users of `memoryCache` | 19 (plan: 27) | 0 | 0 | Yes | `memoryCache.ts` deleted in P5-4. |
| Users of `getClientVar` outside `platform/` | 37 (plan: 50) | 0 | 22 | No | 14 are page hooks and components, 5 are the cache blocks, 3 are `lib/*/actions.ts`. No step moved them to typed settings (P4-1 kept the adapter `legacy/os/clientVarNames.ts`). No follow-up yet (section 3.1, item N-B). |
| Readers of flags outside pages, hooks, containers | not measured | 0 | 4 = 1 by design + 3 owned | No | `app/routes.ts` is allowed by design (plan 3.1 rule 2). `lib/ubtConnectUtils/actions.ts` (F35), `components/bookmark/ItemOptionsMenu` (F51), `orbitStaticEntities` (F52) are frozen. The check fails on a new reader (W42). |
| Lines of the largest page or component file | 1,077 | 400 or less | 19 code files over 400 lines. Largest: `app/routes.css.generated.ts` 1,232 (generated), `api/event/types.ts` 1,001, `lib/ubtConnectLibrary/actions.ts` 916, `api/event/mapper.ts` 759, `FilterSheet.tsx` 695 (largest component) | Partly | The 1,077-line `ScreenBlock_EventBooklet` is gone (largest EventBooklet file 357). Files of mock data are not counted (`mocks/fictional/orbit.ts` 1,446). The remaining large files are ports of OutSystems logic. No follow-up splits them yet (section 3.1, item N-C). |
| Parity against OutSystems | 64/0 | 64/0 | 64/0, strict, all states | Yes | [P9-4.md](P9-4.md). 14 routes have no parity state, so 50 of 64 are checked (F27). |
| Self-parity | 64/0 | 64/0 | 64/0, strict | Yes | Same run. |
| Statement coverage | 49.22 percent | not below | 89.51 percent (19,594 / 21,888) | Yes | Branches 81.59, functions 89.97, lines 90.81. Tests: 1,457 -> 3,975. |
| First-load HomeFeed (kB gzip) | 236.40 | 248.22 or less | 244.87 (+3.6 percent) | Yes | Margin 3.35 kB. F17 stays on watch. |
| First-load Login (kB gzip) | 184.61 | 193.84 or less | 184.92 (+0.2 percent) | Yes | P6-F15 cut Login. |
| Total JS and CSS (kB gzip) | 974.55 (JS 974.16 + CSS 0.39) | not above | 1,014.23 (JS 1,011.69 in 212 files + CSS 2.54 in 1 file) | No (+4.1 percent; accepted by the user 2026-10-25) | The code split into more chunks (212 against 192 files; each chunk has its own module overhead), TanStack Query and the `api/` layer were added, and the one CSS file in `assets/` grew from 0.39 to 2.54 kB (design tokens and layers, P8-1; this is a likely cause, not measured per chunk). First loads stay in the limit. Not reduced by any step; no decision recorded. See question in section 3.1, item N-D. |
| Legacy CSS (kB) | 1,605.8 | smaller; report | 1,604.8 (-1.0 kB, -0.06 percent) | Yes, small | P8-2 pruned 3 stylesheets with conservative rules (W40). The relaxed rule (about -272 kB) waits for F27 and F45. |

Other results: `npm audit --omit=dev` finds 0 vulnerabilities. The full audit finds 2 in dev tools (1 low, 1 moderate; `serialize-javascript` and a fast-uri advisory set). They are new since the baseline. No package changed in P8 or P9; the user decides if the dev-tool advisories need a package update (ADR-2 exception).

## 2. What changed per phase

| Phase | Result (details in the CHANGELOG) |
| --- | --- |
| P0 | Baseline, self-parity reference and `refactor_parity.py`, architecture tools (dependency-cruiser, jscpd, knip, ts-morph codemod), code inventory, move map, ADR-15. Packages updated for security (audit 4 -> 0). |
| P1 | Boundary rules in warn mode. `shell/` split into `platform/` and `legacy/os/`; `lib/`, `components/` moved; `@/` alias everywhere. P1-fix restored the MSW handler order. |
| P2 | Pilot: HouseholdDetails as page, hooks, container, components and `api/household`. Page template. |
| P3 | `shared/` no longer imports `screens/` or `app/`. 0 import cycles. |
| P4 | `platform/`: typed settings store, session state machine, auth provider with 8 named app-start steps, route meta with one guard, typed flag registry. Fix steps P4-F4 (one hook for the flow state), P4-F6, P4-F5. |
| P5 | `api/`: `client/` (ApiError, `callAction`, QueryClient) and 11 domains with types, mapper, repository, keys and hooks. `memoryCache.ts` deleted (P5-4). Fix steps P5-F8 (parallel parity), P5-F9. |
| P6 | All 64 routes moved to `src/pages/` in 6 groups (G1 to G6): step A moves, step B rebuilds each route as page, hooks and components, step C prunes. `screens/` deleted (P6-end). Fix steps P6-F12, F15, F16, F17 (Login and HomeFeed first load, OnReady before paint). |
| P7 | `components/ui/` filled from `shared/osui` (27 patterns); dialogs, empty states and skeletons merged; the last 142 files of `shared/` moved to their owners; `shared/` deleted. |
| Fix steps after P7 | F29 (4 unused OSUI patterns deleted), F33 (one NetworkWarning), F25 (navigation gate), F22-26 (restored views as OutSystems), F39 (hall block OnParametersChanged), F40 (restored view without data), F43 (wire and asset helpers back to `lib/`). |
| P8 | P8-1: design tokens (238 variables) and cascade layers `legacy, app`. P8-2: unused legacy CSS deleted with conservative rules. |
| P9 | P9-1: all folder rules are errors with frozen baselines and a knip export gate. P9-2: flag check in `ci`. P9-3: docs (folder map, overview, ADR-15, guides). F54: date-dependent test fixed. P9-4: this report. |

## 3. Work not done

### 3.1 Findings of the P9-4 measurement without a follow-up (new)

| Id | Item | Waits for |
| --- | --- | --- |
| N-A (F57) | 2 files call `callAction` outside `api/` with no follow-up: `containers/ShareSheet/api.ts` and `platform/session/userInfo.ts`. | Done: F57, user 2026-10-25. The calls are in `api/share/shareSheet.ts` and `api/member/userInformation.ts`; the metric is 4. |
| N-B (F58) | 22 files call `getClientVar` or `setClientVar` outside `platform/` (target 0). | Decided (user, 2026-10-25): typed accessors in `platform/`; step F58 runs. |
| N-C (F59) | 19 code files over 400 lines. The largest component is `FilterSheet.tsx` (695). | Decided (user, 2026-10-25): split components, containers and pages over 400 lines (F59-a, F59-b, F59-c); accept generated files, api types and mappers, and lib actions (F35). |
| N-D (F60) | Total JS and CSS is +4.1 percent over the baseline. | Accepted by the user, 2026-10-25 (first loads in limits). |
| N-E (F61) | The P6 manual review list has 12 routes. The parity tool finds 14 routes without states: also `AcceptPendingPolicies` and `EmailContact`. | Done: both are on the manual review list (F61, user, 2026-10-25). |

N-B update (F58, 2026-10-25): step F58 brought the metric to 7 (4 cache blocks F37, 3 `lib/*/actions.ts` F35).

### 3.2 User decisions

| Id | Decision |
| --- | --- |
| F39/F40 follow-up | The advisors decided W34 to W37 (section 4). The user may reverse them. |
| F52 | Decided: by design (user, 2026-10-25). The metric is 4 = 2 by design + 2 owned. |
| F53 | Decided: keep it in the allow list (user, 2026-10-25). |
| F55 | Applied (user, 2026-10-25). |
| F18 | `SearchView` passes new `inOptions` and `inStartFilter` records to FilterSheet on each render. |
| F27 | Give the 14 routes without states parity states. The tool must print "N of 64 routes checked". |

### 3.3 Optional later steps

| Id | Item |
| --- | --- |
| F41 | OrbitLanding: re-run only the events refresh after a member switch and leave. |
| F42 | One restore-aware helper for the 23 hooks that repeat `restored && <data present>`. |
| F44 | A future CSP must allow `style-src data:` (StylesheetHost). |
| F45 | Rerun P8-2 with the relaxed rule (about -272 kB) after F27. |
| F31, F32 | Orbit client actions copied per page; PopupMenu and LegacyPopupMenu share 89 lines (need a verdict in `duplicates.md` first). |
| F15, F16 | A test for a new query string on the same route (EmailTarget); 11 duplicate mock lines in two ContactByEmail mocks. |
| F19 | Check the HouseholdDetails hook flows against W23. |
| F56 | Two stale path names: the comment in `app/index.html` and one row of `migration/tools/README.md`. |
| F11, F17 | Watch items: a rare `PopupMenu.test.tsx` flake; HomeFeed first load 3.35 kB under the limit. |

### 3.4 Debt frozen in baselines, with owners

Baselines only shrink; `npm run ci` fails on a new row. Files: `.dependency-cruiser-known-violations.json` (142), `docs/refactor/arch-baseline.csv` (72), `.knip-known-unused.json` (1,130 unused exports and types).

| Rows | Owner follow-up | Fix |
| --- | --- | --- |
| Rule 6 (50) in `lib/*/actions.ts` | F35 | Split module client actions by data owner. |
| Rule 4 (36 + 72 ESLint) in `components/` | F46, F36 | Pass `platform/` services by props or move the file to `containers/`; OSLink navigation by prop. |
| Rule 5 (6) in `components/ui` | F47 | Same method. |
| Rule 8 (20) `platform/` imports `components/ui` | F48 | Invert the dependency. |
| Rule 9 (30) `legacy/os/*` importers | F49, F37 | Move `exceptions.ts`, `os-exceptions.ts`, `bodyTheme.ts`; CacheControl blocks to api hooks. |
| Knip (1,130) | F50 | Remove or un-export. |
| Flag readers (3) and unread keys (3) | F51 to F53, F35 | See section 3.2. |
| Part of the rule-5 drop in P7-6 (122 -> 13) is a reclassification, not a fix | F38 | Note only. |

### 3.5 Tool gaps

| Item | Gap |
| --- | --- |
| `measure.mjs` (P0-4) | Reads the old `shared/` and `screens/` folders and stops with ENOENT. `measure-final.mjs` repeats the counts of section 1. The inventory files (`inventory.csv`, `routes.csv`, `calls-by-domain.md`) are from P0-4 and not regenerated. |
| `refactor_parity.py` | Counts routes with 0 states as clean (F27). |
| Date-dependent tests | A sweep after F54 found no other. |

## 4. Decisions of the advisors while the user was away (W34 to W43)

Opus and Fable decided together; the user can review each one. Source: `migration/refactor/auto-decisions-2026-10-22.md`.

| Id | Decision |
| --- | --- |
| W34 | F40: keep the port rule for a restored view without data (one extra read call); document it as an intended deviation from OutSystems. |
| W35 | F39: add OnParametersChanged to the hall block (local bookmark read, no server call). Done. |
| W36 | `useLdmEventDetail`: on the restored re-run, fetch but skip the second audit event. |
| W37 | Align 3 hooks (`useAdminLanding`, `useAdminEventDetail`, `useOrbitLanding`) with the F40 rule; no shared helper now (F42). |
| W38 | P9-1: rules to `error` with frozen shrink-only baselines, after fixing the cheap import-path part. |
| W39 | P9-1 cheap part: exempt mock handlers and tests from rule 9; move `os-wire` and `os-assets` back to `lib/`; `exceptions.ts`, `os-exceptions.ts`, `bodyTheme`, cache blocks stay in the baseline. |
| W40 | P8-2: keep the conservative CSS pruning (-0.06 percent); rerun relaxed after F27 (F45). |
| W41 | knip: add unused exports and types to the gate with a frozen shrink-only baseline (1,130 rows, F50). |
| W42 | P9-2: flag readers metric reported as 4 = 1 by design + 3 owned and frozen. |
| W43 | P9-2: keep 3 registry keys without a reader on an allow list with an owner and an exit condition. |

## 5. How to measure again

```
npm --prefix app run ci
python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174
npm --prefix app run e2e:pwa
npm --prefix app run build && node app/build/bundle-report.mjs
node migration/tools/refactor/measure-final.mjs
cd app && npx vitest run --coverage.enabled --coverage.include='src/**/*.{ts,tsx}' --coverage.exclude='**/*.stories.tsx' --coverage.reporter=text-summary
```
