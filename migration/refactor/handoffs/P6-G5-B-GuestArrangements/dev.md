## Result
status: pass
summary: GuestArrangements is now a page: the hook `useGuestArrangements` (on `useFlowState` with `beforePaint: true`), a pure state file, the client actions file, `inputs.ts`, and the props-only `GuestArrangementsView`. The photo call uses `fetchLegacySignedImageURL` of `@/api/image`. `api.ts` and `types.ts` are deleted. A temporary old-vs-new check gave the same results in 32 of 32 scenarios on 3 runs. The quick checks and the full suite (515 files, 2913 tests) pass. HomeFeed and Login did not grow.

## Files changed
app/src/pages/GuestArrangements/GuestArrangementsPage.tsx (rewritten: page, block wrapper `GuestArrangementsBlock`, events of the screen)
app/src/pages/GuestArrangements/inputs.ts (added: route inputs, `readGuestArrangementsInputs`, `toGuestArrangementsBlockInputs`)
app/src/pages/GuestArrangements/components/ScreenBlock_GuestArrangements.tsx → app/src/pages/GuestArrangements/components/GuestArrangementsView.tsx (git mv, then rewritten as the props-only view)
app/src/pages/GuestArrangements/components/actions.ts → app/src/pages/GuestArrangements/hooks/guestArrangementsActions.ts (git mv; header JSDoc with `@origin`, one dangling "SB" line reference removed)
app/src/pages/GuestArrangements/hooks/guestArrangementsState.ts (added: block inputs, state, reducer, call inputs)
app/src/pages/GuestArrangements/hooks/useGuestArrangements.ts (added: OnReady, OnHandle_ClickedMember, OnHandle_ContactHelpdesk)
app/src/pages/GuestArrangements/mocks.ts (changed: the 3 wire types of the deleted `types.ts` are local types now; the handlers do not change)
app/src/pages/GuestArrangements/api.ts (deleted)
app/src/pages/GuestArrangements/types.ts (deleted)
app/src/pages/GuestArrangements/GuestArrangements.test.tsx (added)
app/src/pages/GuestArrangements/components/GuestArrangementsView.test.tsx (added)
app/src/pages/GuestArrangements/hooks/guestArrangementsActions.test.ts (added)
app/src/pages/GuestArrangements/hooks/guestArrangementsState.test.ts (added)
app/src/pages/GuestArrangements/hooks/useGuestArrangements.test.tsx (added, with the W23 unmount and StrictMode tests)
app/src/api/image/repository.ts (added: byte-for-byte copy from wt-OrbitAdminEventDetail, decision W8)
app/src/api/image/repository.test.ts (added: byte-for-byte copy from wt-OrbitAdminEventDetail)
app/src/api/image/index.ts (changed: byte-for-byte copy from wt-OrbitAdminEventDetail, exports `fetchLegacySignedImageURL`)
app/src/platform/navigation/flowState.ts (changed: byte-for-byte copy of the P6-F17 file from wt-F17b, option `beforePaint`)
migration/refactor/handoffs/P6-G5-B-GuestArrangements/dev.md (this report)

## Commands run
npx vite build + node build/bundle-report.mjs (before the change) → exit 0; HomeFeed 244.38 kB gzip, Login 184.39, GuestArrangements 204.69
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/GuestArrangements src/api/image src/platform/navigation/flowState.test.tsx → 7 files, 58 tests passed
npx eslint src/pages/GuestArrangements src/api/image src/platform/navigation/flowState.ts → exit 0, no problem
npx prettier --check (same files) → all files use Prettier code style
temporary old-vs-new test (old route copied to pages/GuestArrangements_old/, deleted after the check; kept outside the repo as scratchpad/ga-compare.test.tsx.kept) → 32/32 passed on 3 runs with the final code (16 scenarios, each without and with StrictMode): real data (2 families), no data, no query, empty query values, mock empty, mock error, mock loading (2 milestone types), member click with and without directory access, member click then leave, leave during the call then back, helpdesk with and without Orbit access, back navigation. Compared: body DOM after each step, final URL, called actions, request bodies, ApplicationEvent logs, console errors
npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; GuestArrangements warnings 3 → 1 (the old one of mocks.ts → legacy/os/os-wire stays; api.ts and the block → legacy/os are gone)
python3 migration/tools/refactor/arch_baseline.py check → 83 warnings, 83 baseline rows, 0 new, 0 gone
npx vite build + node build/bundle-report.mjs (after) → exit 0; HomeFeed 244.38 kB gzip (raw 751.29 → 751.30), Login 184.39 (unchanged), GuestArrangements 205.56 (route chunk, no limit)
vite preview --port 5178 + headless Chromium (390 × 844) on the Herrera query → the page renders the header, the name, the 4 sections and the footer, no console error; the preview server is stopped
npx vitest run (full suite) → exit 0; 515 files, 2913 tests passed

## Deviations from the brief
- Work tree: as the master ordered, the step is made in the prefetch worktree (branch `rf/prefetch-P6-G5-B-GuestArrangements-9faeb9e6`, base 9faeb9e6 with P6-G5-A and P6-G5-B-Shared staged), not on `refactor/architecture`. Nothing is committed or unstaged.
- Before-paint OnReady (decision W28): the old block ran OnReady in a `useLayoutEffect`, so the skeleton was in the first frame. First I used a byte-for-byte copy of MilestoneDetail's `useReadyBeforePaint.ts`; after the master's update I deleted it, copied the P6-F17 `flowState.ts` byte for byte, and use `useFlowState({ ..., onReady, beforePaint: true })`. A hook test checks that the call starts before the passive effects of the first commit.
- W23: OnReady writes the state only while the block is there (`isAlive` of beforePaint is true until the unmount); a failure after the unmount still goes to the flow handler, as in the old port. OnHandle_ClickedMember writes no state and runs to its end after an unmount (NavigateTo_HouseholdDetail and the application event, or the upgrade popup), as in the old port; no liveness check is needed there. Unit tests: unmount during GetGuestArrangements (no state write; a failure goes once to the flow handler), unmount during CheckDirectoryAccess (the event, the application event or the popup run once, no state write), StrictMode (one call).
- The view cache name of the block state is `Orbit_ScreenBlocks.ScreenBlock_GuestArrangements` instead of the shared name `Model` (11 other Orbit blocks still use `Model`). The restored check is `restored` only: the old `restored && saved` was always true for a restored view, because OnReady writes the state at the mount.
- The block is rendered by a local component `GuestArrangementsBlock` in the page, as in Household_Relations, so that OnReady keeps its order before CommonUI_InsideLayout.
- In the view, the arrival/departure and meal rows are small components (`TransportRow`, `MealRow`) instead of render functions. The DOM is the same (the old-vs-new check compares it).
- The old-vs-new harness: the image calls (GetSignedImagesInBulk, 10 ms bulk window) are compared without order, and an empty `#feedbackMessageContainer` is ignored. It came from the 10 s timeout of a "loading" scenario that fires in a later test, for the old and the new page alike.
- For the documenter: the move-map row (shape hook+component, target GuestArrangementsView, hook useGuestArrangements), the CHANGELOG, `api/README.md` (the sentence on the old `api.ts`/`types.ts` re-exports of the event screens), `calls-by-domain.md` (GuestArrangements now calls Connect2_LegacyShared GetSignedImagesInBulk through `api/image`), and the caller comment of `fetchLegacySignedImageURL` (it names only OrbitAdminEventDetail). The comment at the end of `pages/GuestArrangements/mocks.ts` says that "shared/Connect2_LegacyShared" answers the photos. The handler is in `pages/MilestoneDetail/mocks.ts`. I did not change that comment.

## Questions for the user
none
