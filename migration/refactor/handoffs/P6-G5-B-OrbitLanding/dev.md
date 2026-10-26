## Result
status: pass
summary: OrbitLanding is now a page: the flow hook `hooks/useOrbitLanding.ts` (useFlowState, W23), the pure state file `hooks/orbitLandingState.ts`, the props-only view `components/OrbitLandingView.tsx` (from ScreenBlock_OrbitLanding) and the page actions file `actions.ts`. GetHouseholdMembers is in `api/household` (`fetchOrbitHouseholdMembers`); `api.ts` and `types.ts` are deleted. A temporary old-vs-new test gave equal results in 15 scenarios (stable in 3 runs). Quick checks and the full suite (2761 tests) pass. HomeFeed −0.02 and Login −0.02 kB gzip (W21 holds).

## Files changed
app/src/api/household/types.ts (appended: `OrbitHouseholdMembersCallInputs`, `OrbitHouseholdMember`)
app/src/api/household/mapper.ts (1 import name; appended: `toOrbitHouseholdMembers`)
app/src/api/household/repository.ts (2 import names; appended: `fetchOrbitHouseholdMembers`)
app/src/api/household/index.ts (1 export name)
app/src/api/household/mapper.test.ts (1 import name; 1 test appended)
app/src/api/household/repository.test.ts (1 import name; 2 tests appended)
app/src/pages/OrbitLanding/OrbitLandingPage.tsx (rewritten: navigation handlers, `useOrbitLanding`, `OrbitLandingView`)
app/src/pages/OrbitLanding/OrbitLanding.test.tsx (new, 7 tests)
app/src/pages/OrbitLanding/actions.ts (`git mv` from `components/actions.ts`, rewritten: the JavaScript nodes, the audit event and FeedbackMessageAfterTransition of the page)
app/src/pages/OrbitLanding/staticEntities.ts (`git mv` from `components/staticEntities.ts`, no content change)
app/src/pages/OrbitLanding/hooks/orbitLandingState.ts (new: state, reducer, client actions; FilterEvents, SortEvents and TextToInteger moved here from `components/actions.ts`)
app/src/pages/OrbitLanding/hooks/orbitLandingState.test.ts (new, 17 tests)
app/src/pages/OrbitLanding/hooks/useOrbitLanding.ts (new)
app/src/pages/OrbitLanding/hooks/useOrbitLanding.test.tsx (new, 14 tests, 3 of them W23)
app/src/pages/OrbitLanding/components/OrbitLandingView.tsx (`git mv` from `components/ScreenBlock_OrbitLanding.tsx`, rewritten as props-only view)
app/src/pages/OrbitLanding/components/OrbitLandingView.test.tsx (new, 6 tests)
app/src/pages/OrbitLanding/components/Household_Members_Selection.tsx (imports, `// @os-block` → `@origin`)
app/src/pages/OrbitLanding/components/Popup_OrbitLanding_Filters.tsx (imports, `// @os-block` → `@origin`)
app/src/pages/OrbitLanding/components/Popup_OrbitLanding_Sort.tsx (`// @os-block` → `@origin`)
app/src/pages/OrbitLanding/mocks.ts (the `./types` import replaced by local contract wire types; handlers and data unchanged)
app/src/pages/OrbitLanding/api.ts (deleted, not staged)
app/src/pages/OrbitLanding/types.ts (deleted, not staged)
migration/refactor/handoffs/P6-G5-B-OrbitLanding/dev.md (new)

Unchanged: `components/OrbitLandingPopup.tsx`, `api/event/*`, `components/orbit/*`, `components/layout/*`, the other G5 routes.

## Commands run
All from the worktree, Node 24 on PATH.
Bundle before (`npx vite build` + `node build/bundle-report.mjs HomeFeed Login OrbitLanding`) → exit 0. HomeFeed 751.29 / 244.39 kB gzip (40 chunks), Login 601.24 / 184.41 (12), OrbitLanding 687.76 / 214.11 (30)
`npm --prefix app run typecheck` → exit 0
`cd app && npx eslint src/pages/OrbitLanding src/api/household` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/OrbitLanding src/api/household` → all formatted
`cd app && npx vitest run src/pages/OrbitLanding src/api/household` → 7 files, 65 tests pass
`cd app && npx vitest run` (full suite) → exit 0, 497 files, 2761 tests
`npx depcruise src --config .dependency-cruiser.cjs --output-type err` → 0 errors, 209 warnings. The 2 rule-9 warnings of the old files are gone (`api.ts → legacy/os/os-wire`, `ScreenBlock_OrbitLanding.tsx → legacy/os/exceptions`; a run with the old copy present showed 211). No warning in `pages/OrbitLanding/` or `api/household/`.
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "83 warnings, 83 baseline rows, 0 new, 0 gone" (OrbitLanding had no row)
Bundle after → exit 0.
  - HomeFeed: 751.30 / 244.37 kB gzip, 40 chunks (−0.02). W21 holds.
  - Login: 601.24 / 184.39, 12 chunks (−0.02). W21 holds.
  - OrbitLanding: 692.54 / 215.75, 32 chunks (+1.64). The route now loads the shared `flowState` chunk (899 B raw) and the `api/household` repository chunk (2722 B raw), and its page chunk is 16191 → 17341 B raw (hook, state, view props).
  - Chunk diff: only the OrbitLanding page chunk, the household repository chunk (2492 → 2722 B raw, shared by the household routes) and the entry (+7 B, hash names) changed.
Temporary old-vs-new test (the base page copied to `pages/OrbitLanding_old/` without its mocks, and `compare.test.tsx`; both deleted; a copy is in the scratchpad `ol-tools/compare.test.tsx`) → 15 scenarios equal, 3 runs. Each scenario compares `document.body` (useId ids normalised), the class of `<html>`, the location, the call list and order, the request bodies of both actions, the audit events in the log, the feedback message and the scroll calls:
  - load (with latency: the skeleton step too) and load in StrictMode
  - switch to another member, the same member again, the signed-in member, My calendar
  - Filters (Past and a year, Upcoming), Sort (Newest, the same order again), the close icon
  - milestone card, event card and View Passport details with the flag on and with `mobileOrbitAccess` off (HomeFeed and the message after 500 ms)
  - mock scenarios `error` and `empty`
  - leave while the members call is pending, then back; leave after load, then back
  - leave while a member switch is pending (SwitchMember still logged once)
  - members call fails after leaving (normal and StrictMode); events call fails after leaving
  - PolicyChecker redirect at mount, then back (the view starts again)
Browser check: page on port 5176 at 390 × 844 with Playwright: 5 members, 1 card, the Filters popup, the second member with the My calendar icon. No new console error (the `<a>` in `<a>` warning of BottomBar is old). See "Deviations" item 1 about the dev server.

## Deviations from the brief
1. Dev server: I ran `npm --prefix app run dev -- --port 5176 --strictPort` in the worktree for the browser check, as the first prompt said, before the master note arrived. Vite printed "Re-optimizing dependencies because vite config has changed": it wrote the dependency cache in `app/node_modules/.vite`, which is the main tree's folder (symlink). I stopped the server (port 5176 free). Please check the main dev server on 5174 before the parity run (a restart may be needed). I did not start `vite preview`.
2. Branch: the worktree is on `rf/prefetch-P6-G5-B-OrbitLanding-892cf6c3`, as the master set it up. The P6-G5-A and P6-G5-B-Shared changes stay staged as they were.
3. Git index: I first used `git rm --cached` on `api.ts` and `types.ts`. That unstaged the base rename entries of P6-G5-A for these two files. I put the two index entries back with `git update-index --add --cacheinfo` (the base blobs), so the index is as before. Then I deleted the two files with `rm` only (not staged, as in G4). `git mv` staged the three moves inside the route.
4. Domain: GetHouseholdMembers goes to `api/household`, as `calls-by-domain.md` lists it and by the data that it owns (the members of the signed-in household). Its inputs type is a separate alias (`OrbitHouseholdMembersCallInputs`, same 7 fields as `OrbitLandingCallInputs` of `api/event`), because rule 7 does not let one domain import another. The household name `HouseholdMember` was taken, so the type is `OrbitHouseholdMember`. No query hook was added (as for the Photobook calls). New blocks are at the end of the shared household files; import lists grew by one name each, so a merge with another G5 step that touches `api/household` (for example LDM_EventDetail_V2) may need a hand merge.
5. Shape: page + hook + view, no container (one data source; the flows are in the hook). The view-cache key is now `Orbit_ScreenBlocks.ScreenBlock_OrbitLanding` (it was `Model`); the view cache saves the state when the screen is left, so this is not visible.
6. Restore rule kept from the old port: a restored view does nothing, except when the view was left before its first assignment was rendered (old: saved `Model` was null). The hook checks `restored && latest.current !== INITIAL_ORBIT_LANDING_STATE`. Without this, scenario 15 (PolicyChecker redirect at mount, then back) showed an empty landing; the old page fetched again.
7. W23: after the unmount the flows write no state. They continue with their own copy of the variables (`afterUnmount` ref), so the calls that a started flow still makes (GetEventsByMemberId after the members answer) send the same request body as before. Server calls, audit events (SwitchMember), the scroll and errors to the flow handler still run, once (OnReady once-guard for StrictMode). Unit tests: `useOrbitLanding.test.tsx` "useOrbitLanding and decision W23" (3 tests).
8. Effect order: OnReady now runs in the page, after the effects of CommonUiLayout (before, the block's effect ran first). The old-vs-new scenarios show the same calls, bodies and results, including the PolicyChecker redirect.
9. Faithful details kept: ClickEvent logs `{ EventId: <the event id> }` (the payload replaces the audit event id, as in the old port); with no members and a known signed-in member, View Passport details navigates with TargetId 0 (as before).
10. R4: new and rewritten files have `@origin` (`Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding` for the hook, state, view and actions; the screen origin on the page). The three block files got `@origin` in place of `// @os-block`; their compiled-line references stay because they were not rewritten. `OrbitLandingPopup.tsx` (the Popup widget) is unchanged.
11. Edits: test-file fixes used small Python string replacements (each match checked) in the new test files; the temporary compare files were made by a script in the scratchpad. All other edits used Edit or Write. No `sed -i`.
12. For the documenter:
    - `move-map.csv` row 25 (ScreenBlock_OrbitLanding): target `pages/OrbitLanding/components/OrbitLandingView.tsx`, hook `pages/OrbitLanding/hooks/useOrbitLanding.ts`, state `hooks/orbitLandingState.ts`; row 317 (OrbitLanding page): shape `page + hook`, no container.
    - `calls-by-domain.md` line 31 (household table, `screens/OrbitLanding/api.ts`, DataActionGet_HouseholdMembers) → `api/household/repository.ts` (`fetchOrbitHouseholdMembers`); line 110 (event table) → the hook calls `fetchEventsByMemberId` of `api/event` directly.
    - `app/src/api/README.md`: `household/` also holds DataActionGet_HouseholdMembers of OrbitLanding; the event paragraph says the old `api.ts`/`types.ts` of these screens re-export it: OrbitLanding has none now.
    - CHANGELOG entry; OrbitLanding bundle +1.64 kB gzip (not an entry route).

## Questions for the user
none
