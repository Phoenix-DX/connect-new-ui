## Result
status: pass
summary: LDM_EventDetail_V2 is now a page. ScreenBlock_EventDetail_V2 is split into the hook `useLdmEventDetail` (on `useFlowState`, W23 once-guard), the pure `ldmEventDetailState` and the props-only `LdmEventDetailView`. The route's `api.ts` and `types.ts` are deleted: the inputs reader is in `inputs.ts`, the two data actions come from `api/event`, and the server action GetHouseholdCoordinates moved to `api/household`. A temporary old-vs-new probe gave the same result in 29 of 29 scenarios. Typecheck, lint, format and the full suite (523 files, 2990 tests) pass.

## Files changed
app/src/pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx (rewritten: reads the inputs and the flag, builds the 4 block events, renders a keyed inner component that calls the hook and renders LdmEventDetailView with BottomBar `$b2`, then CommonUiLayout `$b3`; `@origin` corrected to `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2`)
app/src/pages/LDM_EventDetail_V2/inputs.ts (added: `LdmEventDetailInputs`, `readLdmEventDetailInputs`, from the old `api.ts`)
app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts (added: the flows of the block)
app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.test.tsx (added: 24 tests, including W23 unmount tests, StrictMode and restored views)
app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.ts (added: state record, reducer, restore, pure client actions)
app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.test.ts (added: 15 tests)
app/src/pages/LDM_EventDetail_V2/components/LdmEventDetailView.tsx (added: the view of the block, props only)
app/src/pages/LDM_EventDetail_V2/LDM_EventDetail_V2.test.tsx (added: 10 page tests with the MSW mocks)
app/src/pages/LDM_EventDetail_V2/components/ScreenBlock_EventDetail_V2.tsx (deleted)
app/src/pages/LDM_EventDetail_V2/api.ts (deleted)
app/src/pages/LDM_EventDetail_V2/types.ts (deleted)
app/src/pages/LDM_EventDetail_V2/components/EventDetail_Banner.tsx (`// @os-block` changed to `@origin`)
app/src/pages/LDM_EventDetail_V2/components/EventDetail_HostCard.tsx (`// @os-block` changed to `@origin`)
app/src/pages/LDM_EventDetail_V2/components/EventDetail_ListItem.tsx (`// @os-block` changed to `@origin`; `DetailGuestItem` type now from `@/api/event`)
app/src/pages/LDM_EventDetail_V2/components/EventDetail_Section.tsx (`// @os-block` changed to `@origin`)
app/src/pages/LDM_EventDetail_V2/components/EventDetail_SpecialNeeds_ListItem.tsx (`// @os-block` changed to `@origin`)
app/src/pages/LDM_EventDetail_V2/components/EventsDetail_Content.tsx (`// @os-block` changed to `@origin`)
app/src/api/household/repository.ts (separate block at the end: `fetchHouseholdCoordinatesById`; 1 name added to the mapper import list)
app/src/api/household/mapper.ts (separate block at the end: wire type and `toHouseholdCoordinatesById`)
app/src/api/household/index.ts (separate export line at the end)
app/src/api/household/repository.test.ts (separate describe block at the end; 1 name added to the import list)
app/src/api/household/mapper.test.ts (separate describe block at the end; 1 name added to the import list)
migration/refactor/handoffs/P6-G5-B-LDM_EventDetail_V2/dev.md (added)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/LDM_EventDetail_V2 src/api/household src/api/event src/platform/navigation → exit 0; 25 files, 303 tests (route: 10 + 15 + 24; household: mapper 14, repository 13, hooks 5)
cd app && npx vitest run (full suite) → exit 0; 523 files, 2990 tests
cd app && npx eslint src/pages/LDM_EventDetail_V2 src/api/household → exit 0, 0 problems
cd app && npx prettier --check src/pages/LDM_EventDetail_V2 src/api/household → clean
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 75 warnings, 75 baseline rows, 0 new, 0 gone (the route had no row)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 188 warnings. Route warnings (all rule 9): 4 before (ScreenBlock → os-exceptions, os-assets, exceptions; EventDetail_ListItem → os-assets), 3 after (useLdmEventDetail → os-assets, exceptions; EventDetail_ListItem → os-assets). `UserException` now comes from `legacy/os/exceptions` (the same class) and `raiseToFlowHandler` from `platform/feedback/flowErrors`. No warning in `api/household`.
cd app && npx knip → no unused file of this step; the new unused-export finding `LdmEventDetailViewProps` follows the existing `*Props` pattern of the route (`EventDetail_BannerProps` and 4 others were already listed).
vite build (base and after, into the scratchpad) + build/bundle-report.mjs → HomeFeed 244.36 → 244.42 kB gzip (raw 751.38 → 751.39), Login 184.39 → 184.43 kB gzip (raw 601.33 → 601.33). Every first-load chunk of HomeFeed and Login has the same raw size; only the entry chunk grew by 7 bytes raw (the dependency list of the dynamic import of this route has 2 more chunks: `flowState` and the `api/household` repository). The other gzip differences (±3 bytes per chunk, +47 bytes on the entry) come from the changed chunk hashes. LDM_EventDetail_V2 217.51 → 219.57 kB gzip (not a gated first load).
Temporary old-vs-new probe (old page, ScreenBlock, api.ts and types.ts next to the new page, same MSW mocks; deleted after use) → 29 of 29 scenarios the same: guest meal pending, host meal with special needs, guest meal published, unknown meal, no query string, loading, error, coordinator popup then Email, coordinator popup then Cancel, host call popup, host email popup then Email, guest click (carousel on and off), host clicks a guest, guest contact links, host information (published and pending), directions, directions with "application not found for uri.", directions offline, disabled host and guest with a hidden guest and no main hall address, GetCoordinatorDetails failure, back navigation with an open popup, back after the coordinator email, leave while loading then back, leave while loading with an error, leave while loading with a success then back, a second meal then back. Compared: screen DOM, portal DOM (popups), called actions with input names, request bodies, URL, feedback message, flow handler errors, audit events, page redirects, upgrade popups and the preload object.

## Deviations from the brief
- Worktree: I worked in the master's prefetch worktree on branch `rf/prefetch-P6-G5-B-LDM_EventDetail_V2-b6241988`, as the master ordered, not on `refactor/architecture`. Nothing is staged or committed; deleted files were removed with `rm`.
- W28 / P6-F17: the old block and EventDetail_Banner run OnReady in `useEffect` (after paint). So I did not use `beforePaint`, did not copy `flowState.ts` and did not copy `useReadyBeforePaint`.
- api/image (W8 shared copy): not needed; the route does not call GetCacheableSignedImageURL.
- `@origin` of the page: step G5-A wrote `UBTConnect.Legacy_LDMEventsFlow.LDM_EventDetail_V2`; it is now `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2`, as in move-map.csv (master note).
- Domain of GetHouseholdCoordinates (W8, data ownership): the server action returns Directory_Coordinates of a household, so it is in `api/household` as `fetchHouseholdCoordinatesById(householdId)` (`fetchHouseholdCoordinates` already names the HouseholdDetails data action). It returns `Required<HouseholdCoordinates>`, the existing domain type with every attribute set. No query hook: the call runs on a click only.
- View cache: the old block saved its variables under the name `Model` from the first assignment on; a view left before that came back as a new visit and fetched again. The state record has the flag `isSaved` (set by every assignment) so that `restoreLdmEventDetail` and OnReady keep this behavior; the probe scenario "leave while loading then back" shows the same 2 calls. The view-cache name is now `LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2` (internal).
- W23: the OnReady flow writes state only while the block is mounted (`isAlive` of the newest run); the RequestAPI audit event and a failure to the flow handler still run after an unmount, as in the old port. The directions flow (GetHouseholdCoordinates, audit, NavigateTo_WebMaps) has no state write after its await and runs to its end after an unmount. Unit tests cover all three. StrictMode: each call and the audit event run once.
- A change of the inputs still mounts a new block: the page keys the inner component that calls the hook (as the old page keyed the block). CommonUiLayout stays outside the key, as before.
- The 6 other components of the route keep their names and their compiled-line comments; only their `// @os-block` line became `@origin` (rule 13: not rewritten).
- W21: HomeFeed +0.06 kB and Login +0.04 kB gzip (raw +0.01 and +0.00 kB), under the 0.3 kB tripwire; the cause is the entry's dependency list and the chunk hashes, see "Commands run".
- No browser check: the jsdom probe compared the DOM; the tester runs parity. No vite dev server or preview was started.
- For the documenter: `move-map.csv` row 15 (ScreenBlock_EventDetail_V2: hook+component, view `components/LdmEventDetailView.tsx`, hook `hooks/useLdmEventDetail.ts`, state `hooks/ldmEventDetailState.ts`; status moved) and row 301 (the page: `inputs.ts`; `api.ts`, `types.ts` and the ScreenBlock deleted). `calls-by-domain.md` lines 28 and 105 still name `screens/LDM_EventDetail_V2/api.ts`. `src/api/README.md`: the `event/` paragraph says the old `api.ts` and `types.ts` of these screens re-export it (no longer true for LDM_EventDetail_V2), and the `household/` paragraph needs the new call. The CHANGELOG needs the step.

## Questions for the user
none
