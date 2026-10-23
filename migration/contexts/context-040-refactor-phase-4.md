# context-040 · Refactor Phase 4 (platform: settings, session, auth, guard, flags) done (2026-10-23)

## Result
- P4-1 to P4-5 committed: a9d0226 (settings store), 61189b3 (session state machine), d015386 (AuthProvider and
  app-start steps), a0c4553 (route meta and one guard), c6db947 (flag registry). Entries and the Phase 4 summary:
  `app/docs/refactor/CHANGELOG.md`.
- Every step: ci pass; parity strict `--all` 64/0 on both references (port 5174), except the known flake (F6);
  `e2e:pwa` 8/8, then 9/9 with the new journey "deep link signed out"; bundle within +5 percent (+1.0 percent).
- A production build has no mock code and no identity provider (plan §3); dev, mock and demo builds sign in as before.

## Decisions (who, date)
- Q12 (Opus, high): the settings move to one object `ubtc-mock:settings`; old demo tabs read the defaults once.
- M2 (master): F4 is its own step after P4-5. M3 (master, tester agreed): `@origin` only for screens and blocks.
- M4 (master): F4, F6, F5 run as hand-written steps before P5. M5 (master): F5 is an interaction test, no capture.
- M6 (master): `architecture.md` is generated from `stack.json`, but ADR-15 was edited by hand: step P4-F7 syncs it.
- All rows: `migration/refactor/auto-decisions-2026-10-22.md` (Window 3).

## Facts learned (evidence)
- `appStart.ts` clashes with `AppStart.tsx` on the case-insensitive Mac file system: the module is `appStartSteps.ts`.
- `capture-plan.json` has no flag variants: parity covers the flag defaults only; unit tests cover the on and off paths.
- No old code redirected a directly opened URL of the 6 flag routes; `meta.flagRedirect` acts on navigation only.
- EventDetail/default flake: sub-pixel text of the "View Guests" button (F6 evidence).

## Files changed
- See the commits. Follow-ups: `migration/refactor/followups.md`; briefs `migration/refactor/handoffs/P4-F4/`, `P4-F6/`,
  `P4-F5/`.

## Open issues
- The user reviews Q12 and M2 to M5. Flag fields `kind`, `owner`, `removeBy` are null (P9-2 needs `removeBy`).

## Next
- P4-F4 (flow state hook), P4-F6 (flake), P4-F5 (preview test), P4-F7 (ADR-15 into `stack.json`), then P5-1.
