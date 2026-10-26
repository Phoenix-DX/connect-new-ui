# Brief · F52 · orbitStaticEntities flag read is by design

Tool step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-25 (question F52, answer "Coi là đúng thiết
kế (Recommended)"): the `mobileOrbitHostSurvey` read in `platform/storage/localEntities/orbitStaticEntities.ts`
(`syncAllOrbitStaticEntities`, the app-start sync; OutSystems reads `GetHasOrbitHostSurvey` at the same point of
`SyncAllOrbitStaticEntities`) is by design, like `app/routes.ts`.

| Field | Value |
|---|---|
| Kind | tool (check script only; no app code) |
| Parity level | none |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F52/` |

## Change

1. `app/build/check-flags.mjs`: move the entry from `OUTSIDE_OWNED` to the by-design list, keyed on file + flag
   (`platform/storage/localEntities/orbitStaticEntities.ts` → `mobileOrbitHostSurvey` only), with a comment: "app-start
   sync, same point as OutSystems SyncAllOrbitStaticEntities (user, 2026-10-25, F52)". `app/routes.ts` stays allowed
   for any flag (plan v2 §3.1 rule 2). A new flag read in orbitStaticEntities must still fail the check.
2. The metric line then prints "4 = 2 by design + 2 owned, target 0" (or the equivalent wording).
3. Prove: `npm --prefix app run flags` exits 0 and prints the new metric; a temporary read of another flag in
   orbitStaticEntities fails; remove it.

Another developer works on step F57 (ShareSheet and userInfo calls) at the same time: do not touch those files. Do not
run git add, stash or commit. Docs: the documenter.
