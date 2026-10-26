## Result
status: pass
summary: Added app/build/check-flags.mjs (3 failure cases + the P9 metric) and the `flags` script in `npm run ci`. All 3 cases proven to fail. On the real tree the check FAILS: 3 registry keys have no reader. Decision needed.

## Files changed
app/build/check-flags.mjs (new; app/build holds the other checks, there is no scripts/ folder; .mjs like the P9-1 checks, it imports registry.ts directly with Node 24)
app/package.json (script `flags`, added to `ci` after `unused`)
migration/refactor/handoffs/P9-2/dev.md

## Commands run
node build/check-flags.mjs → exit 1: 21 keys, 18 with a reader, 0 unknown keys, 0 expired (today 2026-10-24). NO READER: mobileAssemble, mobileDirectoryUpdateFeedDeceasedProfile, getHasOrbitEventBooklet (only in registry.ts and legacy/os/flagNames.ts; routes ['MessageDetail'] x2, ['EventDetail'])
Case 1 (no reader): proven by the 3 real keys above.
Case 2 (unknown key): copy of src with useFlag("noSuchFlag") → exit 1, "UNKNOWN KEY pages/EmailContact/EmailContactPage.tsx: 'noSuchFlag'".
Case 3 (past removeBy): copy of registry with removeBy '2026-01-01' → exit 1, "EXPIRED mobilePhotobook"; with --today=2025-12-31 no EXPIRED. Temp copies deleted; no tracked file changed for the proofs.
Today: all removeBy are null (UNSET), so no real date is in the past.
Metric "readers of flags outside pages, hooks, containers": 4 (not 0): app/routes.ts (flagValue in flagRedirectTarget, by design §3.1 rule 2), components/bookmark/ItemOptionsMenu/ItemOptionsMenu.tsx (useFlagOn x2; lint rule 4 misses it: it imports platform/flags/flags, the adapter, not the barrel), lib/ubtConnectUtils/actions.ts (OutSystems helper wrappers over flagValue), platform/storage/localEntities/orbitStaticEntities.ts (isOn('mobileOrbitHostSurvey')). Measured by file path; tests, platform/flags, legacy, mocks excluded.
npm run typecheck → pass. eslint + prettier on build/check-flags.mjs → clean. (No vitest: no tested code changed.)

## Deviations from the brief
Script is .mjs, not scripts/check-flags.ts (convention of app/build). Reader = literal key in useFlag/useFlagOn/flagValue/isOn, `flag: 'K'` or `FLAG_x = 'K'`. The check also fails in `npm run ci` now until the 3 keys are settled.

## Questions for the user
1. The 3 unread keys (mobileAssemble, mobileDirectoryUpdateFeedDeceasedProfile, getHasOrbitEventBooklet): delete them from registry.ts (+ flagNames.ts, flags.generated.json consumers; the screens that would read them, MyNotifications/MessageDetail/Share_UI, do not read them in the port), or keep them with an allowlist of "no reader yet" keys in the check? Deleting changes no behavior (nothing reads them) but touches the registry; I did not do it.
2. The metric is 4, not 0. Accept as is (routes.ts and actions.ts are by design), or open a step to move ItemOptionsMenu's flags to props (§3.1 rule 1) and orbitStaticEntities' read to a hook/page?

## Resume (W42, W43)
Answers applied (advisors Opus + Fable, auto-accepted 2026-10-24; log rows W42, W43). Changed only app/build/check-flags.mjs (registry, flagNames.ts and the generated JSON untouched).
- Q1 (W43): the allow list is the const `UNREAD_ALLOWED` in app/build/check-flags.mjs, each key with reason, owner, exit: mobileAssemble and mobileDirectoryUpdateFeedDeceasedProfile (reader pending: MessageDetail Assemble/Sharing parts not built), getHasOrbitEventBooklet (alias of mobileOrbitEventBooklet). The check fails on any other unread key, and on STALE ALLOW (an allowed key gains a reader or leaves the registry).
- Q2 (W42): consts `OUTSIDE_BY_DESIGN` (app/routes.ts, comment cites plan 3.1 rule 2) and `OUTSIDE_OWNED` (exact file + flag: actions.ts x6 flags, owner F35; ItemOptionsMenu.tsx x2, follow-up flags via props; orbitStaticEntities.ts x1, follow-up read out of the storage layer). Fails on NEW OUTSIDE READER (a pair not listed) and STALE OWNED (a listed pair is gone). Prints "4 = 1 by design + 3 owned, target 0".
- Note: actions.ts `connect_LaunchDarkly_PermissionCheck(flag)` reads a non-literal key; not seen by the literal scan (key mobileDirectoryBookmarkNote has its own reader).
Proofs: node build/check-flags.mjs exit 0. Temp `useFlagOn('mobilePhotobook')` in ItemOptionsMenu.tsx -> "NEW OUTSIDE READER ... | mobilePhotobook", exit 1. Temp new component reading mobileAssemble -> "STALE ALLOW mobileAssemble" + "NEW OUTSIDE READER", exit 1. Temp changes removed (git status: only package.json, check-flags.mjs, handoff).
`npm --prefix app run ci` in the worktree -> exit 0 (after prettier --write on the script). eslint + prettier clean.
Questions: none.
