# Developer report: P6-G6-B-LegacyShareObject

## Result
status: pass
summary: LegacyShareObject is a page: the props-only views ShareObjectView and ProfileList, the flow hooks useShareObject and useProfileList (useFlowState, W23), pure state files, and inputs.ts. The route's api.ts, types.ts and ScreenBlock_ShareObject.tsx are deleted, and its 5 calls are in api/share, api/household and api/locality. A temporary old-vs-new check of 20 scenarios gave the same DOM, calls, request bodies, locations and feedback. Typecheck, lint, format and the full suite (528 files, 3004 tests) pass. Bundle: HomeFeed 244.44 → 244.49 kB, Login 184.47 → 184.50 kB (see Deviations 5).

## Files changed
app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx (changed: page, OnInitialize, ProfileListBlock binding)
app/src/pages/LegacyShareObject/LegacyShareObject.test.tsx (added)
app/src/pages/LegacyShareObject/inputs.ts (added)
app/src/pages/LegacyShareObject/api.ts (deleted)
app/src/pages/LegacyShareObject/types.ts (deleted)
app/src/pages/LegacyShareObject/mocks.ts (changed: wire types from @/api/share; handlers unchanged)
app/src/pages/LegacyShareObject/components/ScreenBlock_ShareObject.tsx (deleted)
app/src/pages/LegacyShareObject/components/ShareObjectView.tsx (added)
app/src/pages/LegacyShareObject/components/ProfileList.tsx (rewritten: props only)
app/src/pages/LegacyShareObject/components/HighlightSearch.tsx (changed: @origin instead of @os-block, doc comment only)
app/src/pages/LegacyShareObject/components/ListBlankSlate.tsx (changed: @origin instead of @os-block, doc comment only)
app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/UpgradeSubscriptionDialog.tsx (changed: the `// @os-block` line removed)
app/src/pages/LegacyShareObject/hooks/shareObjectState.ts (added)
app/src/pages/LegacyShareObject/hooks/shareObjectState.test.ts (added)
app/src/pages/LegacyShareObject/hooks/useShareObject.ts (added)
app/src/pages/LegacyShareObject/hooks/useShareObject.test.tsx (added)
app/src/pages/LegacyShareObject/hooks/profileListState.ts (added)
app/src/pages/LegacyShareObject/hooks/profileListState.test.ts (added)
app/src/pages/LegacyShareObject/hooks/useProfileList.ts (added)
app/src/pages/LegacyShareObject/hooks/useProfileList.test.tsx (added)
app/src/api/share/index.ts (ConnectShare file copied byte for byte, then one block appended at the end)
app/src/api/share/types.ts (ConnectShare file copied byte for byte, then one block appended at the end)
app/src/api/share/mapper.ts (ConnectShare file copied byte for byte, then one block appended at the end)
app/src/api/share/repository.ts (ConnectShare file copied byte for byte, then one block appended at the end)
app/src/api/share/mapper.test.ts (ConnectShare file copied byte for byte, then one block appended at the end)
app/src/api/share/repository.test.ts (ConnectShare file copied byte for byte, then one block appended at the end)
app/src/api/share/keys.ts (added; ConnectShare has none)
app/src/api/share/hooks.ts (added; ConnectShare has none)
app/src/api/share/hooks.test.tsx (added; ConnectShare has none)
app/src/api/household/types.ts (block appended)
app/src/api/household/mapper.ts (block appended, 1 import name)
app/src/api/household/repository.ts (block appended, 3 import names)
app/src/api/household/index.ts (1 export name)
app/src/api/household/repository.test.ts (block appended, 2 import lines)
app/src/api/locality/types.ts (block appended)
app/src/api/locality/mapper.ts (block appended, 1 import name)
app/src/api/locality/repository.ts (block appended, 2 import names)
app/src/api/locality/index.ts (block appended)
app/src/api/locality/repository.test.ts (block appended, 1 import name)
migration/refactor/handoffs/P6-G6-B-LegacyShareObject/dev.md (this report)

39 app files. 6 of them (api/share) start with the exact bytes of the ConnectShare worktree's files (checked with a byte-prefix comparison; the ConnectShare files did not change since the copy).

## Commands run
`npm --prefix app run typecheck` → exit 0
`npx vitest run src/pages/LegacyShareObject src/api/share src/api/household src/api/locality` → 14 files, 129 tests pass (4 runs, all green)
`npx vitest run` (full suite) → exit 0, 528 files, 3004 tests pass
`npx eslint src/pages/LegacyShareObject src/api/share src/api/household src/api/locality` → exit 0, no warning
`npx prettier --check` (same folders) → all files formatted
`npx depcruise src --config .dependency-cruiser.cjs --output-type err` → 189 → 184 warnings; the route had 6 rule-9 warnings (legacy/os imports), now 1 (`ShareObjectView.tsx → legacy/os/os-assets.ts`, the `osImage` call of the old block); no warning in api/share, api/household or api/locality
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0 (75 warnings, 75 rows, 0 new, 0 gone)
`npx vite build` + `node build/bundle-report.mjs HomeFeed Login LegacyShareObject` → before: HomeFeed 244.44, Login 184.47, LegacyShareObject 202.71 kB gzip; after: HomeFeed 244.49, Login 184.50, LegacyShareObject 205.16 kB gzip
Temporary old-vs-new check (old route copied to `src/__lso_old__/`, deleted after the run; script kept in the scratchpad) → 20 tests pass, 5 runs: Household, unknown id, Campus&Co (`+17`), OneSchool Global, Feed, Update, no inputs, each without and with StrictMode; the expired user (ShareObject not allowed → SubscriptionDenied dialog); mock error; mock empty; unmount while OnReady is pending. Steps: first render, settled, search + Enter, clear, no result, other key, two quick searches, share click, navigate away and back. Same DOM, `__osCalls` order, request bodies, location and feedback at every step. In the first-render snapshots, the 10 ms bulk timer of UBT_LazyImage (unchanged shared code) races the snapshot in both versions, so its call and markup are left out there only.

## Deviations from the brief
1. Worktree: I worked in the prefetch worktree on the branch `rf/prefetch-P6-G6-B-LegacyShareObject-f29b7bd0`, as the master said, not on `refactor/architecture`. I did not stage, commit or use `git mv`.
2. api/share (master note): I copied the 6 files of the ConnectShare worktree byte for byte and added my blocks at the end. `mapper.ts`, `repository.ts`, `mapper.test.ts` and `repository.test.ts` need more imports. To keep ConnectShare's lines unchanged, these `import` declarations are at the start of my end block (valid ES modules; lint and format pass). The master may move them to the top when it merges. `index.ts` gets one block of 4 export lines (hooks, keys, wire types for the mocks, repository functions); the types come through ConnectShare's `export type * from './types'`.
3. Domains (W8): ScreenDataSetGetShareObjectTypeById and ActionShareObject are in `api/share` (share object types and share records). ServiceAPIGetHouseholdDetails is in `api/household` (`fetchHouseholdShareCard`). Get_UI_CommunityBusinessShareCard is in `api/locality` (`fetchCommunityBusinessShareCard`), next to the OneSchool Global calls. ProfileList/DataActionGetAvailableUsers is in `api/share`, not in `api/member`. Its inputs are the share object (ShareObjectId, ShareObjectTypeId), and it answers the share-target list with its Label. Also, the hooks and repository chunks of `api/member` are in the HomeFeed first load, so adding the call there would grow HomeFeed (W21).
4. View cache: the old port kept no ScreenBlock_ShareObject or ProfileList variable in the view cache. Both hooks use `useFlowState` with `restore: () => INITIAL_…`, and OnReady ignores `restored`. So a back navigation starts from OnInitialize again, as before (precedent W27: keep the old-port behavior). `beforePaint` is not set (W28): both old blocks ran OnReady in a `useEffect`.
5. Bundle (W21): HomeFeed grew 244.44 → 244.49 kB gzip (+0.05) and Login 184.47 → 184.50 kB (+0.03). The entry chunk grew by 29 bytes gzip. The Vite preload map in the entry now lists 2 more chunks for the LegacyShareObject route: `flowState` (useFlowState) and the `api/household` repository chunk. The rest is gzip noise from changed chunk hashes (±1–13 bytes in unchanged chunks). The growth comes from the domain layout and the standard flow hook. I found no way to avoid it without breaking W8 or the page template. It is far under the W21 tripwire (0.3 kB per step); the HomeFeed margin is 3.73 kB. After the merge with ConnectShare, `api/share` can become its own shared chunk and add one more preload entry (about 0.01 kB).
6. Call order: the flows of ProfileList stay in the place of the block. A small binding `ProfileListBlock` in the page file calls `useProfileList` and renders the view (HomeFeed precedent), so the old effect and call order is kept: GetAvailableUsers, the type label, the card call, GetUserInformation. The screen OnInitialize effect stays in the page, after `useShareObject`, for the same reason.
7. `textToLongInteger` stays a page-local helper in `hooks/shareObjectState.ts`. It differs from `shared/UBTConnect_Utils/lib/actions.ts` `textToLongInteger` for "+17" ("17" here, "0" there), so a merge would change behavior. The documenter can add it to `duplicates.md`.
8. Tests: the two page-local views (ShareObjectView, ProfileList) have no separate test or stories. The page test `LegacyShareObject.test.tsx` covers what they render: the cards, title, list, highlight, blank slates, share icon, the SubscriptionDenied dialog and back navigation. The hooks and the state files have unit tests, including the W23 unmount tests for both hooks.
9. UpgradeSubscriptionDialog (move-map row 41, shape hook+component): only the `// @os-block` line is removed. Its user-information read on confirm stays inside the page-local component; splitting it out adds no value and is not needed for rule 4.
10. No browser check with `vite preview`: the old-vs-new check covers the DOM, and the tester runs the parity.

Notes for the documenter: move-map row 17 (ScreenBlock_ShareObject → `components/ShareObjectView.tsx` + `hooks/useShareObject.ts` + `hooks/shareObjectState.ts`) and row 303 (page) can be set to `moved`. calls-by-domain: the 4 LegacyShareObject actions of the "app" table and the 1 of the "household" table moved as in Deviation 3. api/README: the share domain has 3 more calls and the 2 query hooks `useShareObjectTypeLabelQuery` and `useAvailableUsersQuery` (keepPreviousData, no retry, library default cache times, as the old block queries; `requestId` in the users key).

## Questions for the user
none
