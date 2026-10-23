# context-045 · Phase 6 groups G2 and G3 done; bundle fixes; W17–W24 (2026-10-24 night)

## Result
- Group G2 done (12 steps, gate W19, last commit 7c722883); P6-F15 (Login first load −6.2 kB) done.
- Group G3 done up to C: 10 page steps (HomeFeed split into a shared-block step and HomeFeed-Page, W22) and P6-F16
  (HomeFeed and Login first load −3 kB). Group gate: see the P6-G3-C commit and `app/docs/refactor/reports/P6-G3.md`.
- Prefetched and waiting as patches in `migration/refactor/prefetch/`: P6-G4-A, P6-G4-B-Shared, P6-G5-A,
  P6-G5-B-Shared, P6-G6-A, P6-G6-B-Shared (built on a chain of pending patches; apply in catalog order with --3way).

## Decisions (who, date)
- User 2026-10-23 evening: run every in-scope step (P6, P7) automatically; P8/P9 only on an explicit order.
- W17–W24 (Opus + Fable, all agree): `migration/refactor/auto-decisions-2026-10-22.md`, Window 4. Key rules:
  W17 `components/**/mocks.ts` glob; W18/W24 bundle fix steps (narrow modules on the app-start path, no limit
  raise); W20 P6-end deletes `screens/` only, P7-0 and P7-6 empty `shared/`; W21 tripwire (HomeFeed margin under
  1.0 kB or a step over +0.3 kB → stop and trim); W23 `isAlive` guards state writes only, side effects of a started
  flow run after unmount (rule in page-template.md).
- Master scheduling: G3 order puts prefetched steps first (gen_steps.py GROUP_ORDER); extra steps P6-F15, P6-F16,
  P6-G3-B-HomeFeed-Page, P7-0, P7-6 (gen_steps.py AFTER_GROUP, AFTER_ROUTE, STEPS).

## Facts learned (evidence)
- Rollup puts a whole `api/<domain>` into one chunk shared by its importers: a page that imports a domain used by a
  heavy screen pays for that screen's code (W24 breakdown).
- `arch_baseline.py check --move-step` maps old imports of modules that move in the same phase (G4 tool fix).
- Testers sometimes narrow `--changed` (all 64 routes when a platform file changes); the group gate runs `--all`.
- Parity has no states for ContactByEmailLDMCoordinator, ContactByEmailOrbitHost, EmailTarget, FeedItemDetail:
  unit tests and diff review cover them.

## Files changed
- pages/ of G2 and G3; `components/{contact,feed,filter,notification,search,share,layout}`, `containers/{FilterSheet,
  ShareSheet}`, `api/{policy,search,feed,service}`, `platform/session` hooks, `platform/feedback/bubbleErrors.ts`,
  `mocks/scenarioParams.ts`, `api/message/unreadMessages.ts`.

## Open issues
- Follow-ups F15 (EmailTarget remount test), F16 (mock clone), F17 (HomeFeed margin 4.20 kB), F18 (SearchView
  quirk), F19 (HouseholdDetails vs W23): `migration/refactor/followups.md`.

## Next
- `/refactor-master continue`: P6-G4-A and P6-G4-B-Shared (patches), then the 13 G4 page steps (prefetch 3–4 in
  parallel after B-Shared is committed), P6-G4-C; then G5, G6, P6-end, P7-0 … P7-5.
