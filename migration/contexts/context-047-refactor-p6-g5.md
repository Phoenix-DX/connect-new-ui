# context-047 · Phase 6 group G5 done; fix step P6-F17; W27–W31 (2026-10-24 midday)

## Result
- Fix step P6-F17 (opt-in `beforePaint` option of `useFlowState`, W28) and group G5 done: A (one formatting fix
  loop), B-Shared, 16 page steps, C. Group gate W31 confirmed; report `app/docs/refactor/reports/P6-G5.md`; entries in
  `app/docs/refactor/CHANGELOG.md`. Gate: parity visual --all 64/64 clean on both references, e2e:pwa 9/9, arch baseline
  69 rows (P7 68, pre-existing 1), HomeFeed 244.39/248.22 kB (margin 3.83), Login
  184.42/193.84 kB.
- Prefetched and waiting as patches in `migration/refactor/prefetch/` (git-ignored): the 7 G6 pages, G6-A, G6-B-Shared,
  P6-end, P7-0, P7-1, P7-2 (all built on a chain of pending patches; `.chain.patch` files are pre-resolved).

## Decisions (who, date)
- Opus + Fable (delegated, Window 4 of `migration/refactor/auto-decisions-2026-10-22.md`): W27 MilestoneDetail keeps the
  old-port restore (2 former crash paths: "old: crash, new: reload"); W28 `beforePaint` (fix step P6-F17); W29 G4 gate;
  W30 the 4 unused OSUI patterns stay in components/ui/ until the user decides at the P9 knip cleanup; W31 G5 gate.

## Facts learned (evidence)
- 10 old G5/G6 blocks ran OnReady in a `useLayoutEffect`; pages set `beforePaint: true` for those only.
- Tester prompts must say "run the brief's gate commands": a prompt that named `visual` instead of the brief's `strict`
  was caught at G5-B-Shared and covered by its strict --all re-run (`migration/refactor/log.md`).
- 6 G5 routes have no parity states; the developers' old-vs-new tests are their DOM evidence (manual review list in the
  group report).
- Test flakes under full-suite load (Updates_SingleList, EventBooklet, Services) and one parity render flake: F23.

## Files changed
- `pages/` of the 16 G5 routes; `platform/navigation/flowState.ts` (beforePaint); `api/{image,entertaining}` (new),
  `api/{event,household,locality,message}`; `containers/AssembleSummaryCard`; `components/{assemble,orbit}`.

## Open issues
- F22, F24, F26 (restored views differ from OutSystems; one user decision), F23 (flakes), F25 (HostSurvey back
  recursion, old and new): `migration/refactor/followups.md`. 6 G5 routes for a manual look (report).

## Next
- `/refactor-master continue`: P6-G6-A, P6-G6-B-Shared, 7 G6 pages (patches ready), P6-G6-C; P6-end; P7-0, P7-1, P7-2
  (patches ready), P7-3 (in dev), P7-4, P7-6, P7-5.
