## Result
status: pass
summary: AssembleDetail is now a page. ScreenBlock_AssembleDetail is `hooks/useAssembleDetail.ts` (useFlowState) with the pure `assembleDetailState.ts` and the props-only view `components/AssembleDetailView.tsx` (move-map row 3). AssembleEventDetail uses `useAssembleEventDetail` (useFlowState, W23). The contact and hall blocks call their own hooks. Each block port has its own file with one `@origin`, and `api.ts`, `types.ts` and the 4 multi-block files are deleted. Main-tree pass: AssembleSummaryCard and VirtualMeetingUrl are props-only, the new `containers/AssembleSummaryCard` gives their actions to both pages, and the 6 owned baseline rows are deleted (69 rows, 0 new, 0 gone). Typecheck, lint, format and the full suite (608 files, 3666 tests) pass. Old-vs-new: AssembleDetail 139/139 and AssembleEvents 84/84 equal snapshots, 3 runs each. HomeFeed and Login did not change (244.39 and 184.42 kB gzip).

## Files changed
app/src/pages/AssembleDetail/AssembleDetailPage.tsx (rewritten: reads the inputs and the 3 flags; renders CommonUiLayout, the keyed block `AssembleDetailBlock` (useAssembleDetail + AssembleDetailView) and the page ShareSheet)
app/src/pages/AssembleDetail/inputs.ts (new: `AssembleDetailInputs` and `readAssembleDetailInputs`, formerly in types.ts and api.ts)
app/src/pages/AssembleDetail/api.ts (deleted)
app/src/pages/AssembleDetail/types.ts (deleted)
app/src/pages/AssembleDetail/AssembleDetail.test.tsx (new, page test, 6 tests)
app/src/pages/AssembleDetail/components/ScreenBlock_AssembleDetail.tsx (deleted; split into AssembleDetailView, FocusScrollAnchorOnBack and the hook)
app/src/pages/AssembleDetail/components/AssembleDetailView.tsx (new)
app/src/pages/AssembleDetail/components/FocusScrollAnchorOnBack.tsx (new; moved out of the ScreenBlock file)
app/src/pages/AssembleDetail/components/AssembleEventDetail.tsx (rewritten: calls useAssembleEventDetail; Section, __Error and the attendee skeleton are in their own files)
app/src/pages/AssembleDetail/components/AssembleEventDetail_Section.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail__Error.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivisionList_Skelet.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail_Contacts.tsx (deleted; split into the next 2 files)
app/src/pages/AssembleDetail/components/AssembleEventDetail_ContactList.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail_Localities.tsx (deleted; split into the next 3 files)
app/src/pages/AssembleDetail/components/AssembleEventDetail_LocalitiesList.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail_LocalitySubdivisionList.tsx (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivision.tsx (new)
app/src/pages/AssembleDetail/components/LegacySharedBlocks.tsx (deleted; split into the next 5 files, code unchanged)
app/src/pages/AssembleDetail/components/ShowMoreShowLessContainer.tsx (new)
app/src/pages/AssembleDetail/components/NC_Result_Item__Image__Skeleton.tsx (new)
app/src/pages/AssembleDetail/components/NC_Result_Item__Tag.tsx (new)
app/src/pages/AssembleDetail/components/ContextMenu.tsx (new)
app/src/pages/AssembleDetail/components/BookmarkNoteAddEdit.tsx (new)
app/src/pages/AssembleDetail/hooks/assembleDetailState.ts (new)
app/src/pages/AssembleDetail/hooks/assembleDetailState.test.ts (new)
app/src/pages/AssembleDetail/hooks/useAssembleDetail.ts (new)
app/src/pages/AssembleDetail/hooks/assembleEventDetailState.ts (new)
app/src/pages/AssembleDetail/hooks/assembleEventDetailState.test.ts (new)
app/src/pages/AssembleDetail/hooks/useAssembleEventDetail.ts (new)
app/src/pages/AssembleDetail/hooks/useAssembleEventDetail.test.tsx (new; contains the W23 tests)
app/src/pages/AssembleDetail/hooks/assembleEventContacts.ts (new)
app/src/pages/AssembleDetail/hooks/assembleEventContacts.test.ts (new)
app/src/pages/AssembleDetail/hooks/useAssembleEventContactList.ts (new)
app/src/pages/AssembleDetail/hooks/useAssembleEventContact.ts (new)
app/src/pages/AssembleDetail/hooks/attendeeSubdivisionState.ts (new)
app/src/pages/AssembleDetail/hooks/attendeeSubdivisionState.test.ts (new)
app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.ts (new)
app/src/pages/AssembleDetail/hooks/blockLifecycle.ts (new: `useIsAlive` and `useReadyOnce` for the blocks without a view cache)
migration/refactor/handoffs/P6-G5-B-AssembleDetail/dev.md (this report)

40 app files in the prefetch. The files of the main-tree pass are listed under "Main-tree pass". In the prefetch these files did not change: `mocks.ts`, `components/actions.ts`, `components/assemble/*`, `components/bookmark/*`, `components/contact/*`, `api/**` (no domain call changed; `api/image` is not needed), `shared/**`, `app/docs/**`, `arch-baseline.csv`, and the other routes of the group. No change to `openapi.yaml`, `src/mocks/**` or `public/UBTConnect/css/**`.

## Commands run
All commands ran in the worktree with Node 24 on the PATH.
- Bundle before: `npx vite build` + `node build/bundle-report.mjs HomeFeed Login AssembleDetail` → exit 0. HomeFeed 751.38 / 244.41 kB gzip, Login 601.33 / 184.42, AssembleDetail 765.53 / 243.54 (50 chunks).
- `npx depcruise src … --output-type err` (before) → 0 errors, 189 warnings. 5 warnings in the route: rule-9 from AssembleEventDetail, _Contacts and _Localities (×2) to `legacy/os`, and from mocks.ts.
- `npm --prefix app run typecheck` → exit 0
- `cd app && npx eslint src/pages/AssembleDetail` → exit 0, 0 problems
- `cd app && npx prettier --check src/pages/AssembleDetail` → clean (after `prettier --write`)
- `cd app && npx vitest run src/pages/AssembleDetail` → exit 0, 6 files, 36 tests
- `cd app && npx vitest run` (full suite) → exit 0, 526 files, 2984 tests
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "75 warnings, 75 baseline rows, 0 new, 0 gone"
- `npx depcruise …` (after) → 0 errors, 185 warnings. The 4 rule-9 warnings of the route's flow files are gone. Only `mocks.ts → legacy/os/os-wire` stays, as on the other pages. No new warning.
- `npx knip` → no unused file in the route. The unused exports are the exported Props/State/Flows/Patch types, as on the other pages, and `getUnavailableEventErrorMessage` in the unchanged `components/actions.ts`, which was already unused.
- Bundle after: build exit 0.
  - HomeFeed: 751.39 / 244.38 kB gzip, 40 chunks (-0.03). W21 holds.
  - Login: 601.33 / 184.41, 12 chunks (-0.01).
  - AssembleDetail: 769.87 / 244.89, 51 chunks (+1.35). The route chunk grows by 0.85 kB, and the page now loads the shared `flowState` chunk (0.53 kB).
- Temporary old-vs-new check:
  - Setup: the old route from the base index was copied to `pages/AssembleDetail_old/` with rewritten imports (`OldPage.tsx`, no mocks.ts), together with one vitest file. Each side ran in its own process (`AD_SIDE=old|new`), so the mock bookmark store of one side does not change the other. The folder was deleted after the runs. Tools are kept in the scratchpad: `ad-tools/compare.test.tsx`, `ad-tools/make_old.py`, `ad-tools/diff.py`.
  - Result: 16 scenarios, 119 snapshots. Each snapshot compares `document.body`, the `callAction` log, the request bodies, the location, the feedback message, the preload object, the navigation storage of FocusScrollAnchorOnBack and the flow-handler errors. 3 runs in a row: 119/119 equal.
  - The early runs showed differences that came from the harness and not from the code. A run of old against old showed the same differences. The causes were the mock bookmark store shared inside one process, and races of `settle(0)` against latency 0. The harness now waits for the rows and the feedback, and uses a latency of 20 ms for the re-visits.
  - Scenarios:
    - walk ×4 (StrictMode on and off, carousel flag on and off): preload title, then the meeting; locality and hall open; bookmark toggles on 2 rows; a contact row click (HasAccessToRegion → HouseholdDetails); back to the restored view; the restored hall
    - flags on ×2 (StrictMode on and off): Bookmark_Note dialog with SAVE (the trimmed note), share sheet open and close, household click → HouseholdCarousel
    - virtual meeting: Read more and Show less
    - Free plan: upgrade popup on the contact, household and bookmark clicks; call popup and Cancel; e-mail popup and Cancel; e-mail popup → Email → ContactByEmailMember with all inputs, then back
    - mock scenarios notfound, unavailable, error (500 → flow handler) and empty
    - unknown EventId with an empty Start
    - navigation away while GetAssembleEvent is pending (real and unavailable: the service interruption message still shows), then a new visit
    - same route with another EventId: the block restarts
- I did not run the parity, the e2e suite or the dev server: the tester runs them.

## Deviations from the brief
1. Branch: the worktree is on `rf/prefetch-P6-G5-B-AssembleDetail-66f01e66`, not on `refactor/architecture`. The master set up this prefetch worktree, and I worked in it as the master told me. I did not stage anything.
2. Shape: page + hooks + views, no container.
   - ScreenBlock_AssembleDetail follows move-map row 3 (`useAssembleDetail` + `AssembleDetailView`).
   - The page keeps the `key` (EventId, SeriesId, Start) on an inner `AssembleDetailBlock`, so only the block restarts, as before.
   - AssembleEventDetail and FocusScrollAnchorOnBack are slots of the view.
   - The nested blocks with flows (AssembleEventDetail, ContactList, Contact, AttendeeSubdivision) call their own hooks, as Locality_Details does. A hook in the page cannot run per list row.
   - The page now reads the flags `mobileDirectoryBookmarkNote` and `C2ExtendedShare` and passes them down as `flags`. AttendeeSubdivision read them before.
3. One file per block: every block port has its own file with one `@origin`. This includes the 5 Connect2_LegacyShared blocks of the former `LegacySharedBlocks.tsx`, the 3 helper blocks of AssembleEventDetail and FocusScrollAnchorOnBack. No `// @os-block` line and no compiled-line reference remains in the rewritten code. The unchanged `components/actions.ts` keeps its references. The split brings the step to 40 app files, at the limit of about 40.
4. State of the blocks:
   - ScreenBlock_AssembleDetail and AssembleEventDetail use `useFlowState`. The view cache already kept all their variables, now as one record per block. `beforePaint` is not set (W28), because the old blocks ran OnReady in `useEffect`. OnReady runs once per block in StrictMode (`readyStarted` / `newestReadyRun`).
   - ContactList, Contact, AttendeeSubdivision and LocalitySubdivisionList kept no variable in the view cache in the old port: a back navigation shows an empty contact list and collapsed halls. `useFlowState` would restore their records and change that behavior. So, as the page template allows for Notifications, these blocks keep React state: `useReducer` for AttendeeSubdivision, `useState` for the others. They use the page-local `hooks/blockLifecycle.ts` (`useReadyOnce`, `useIsAlive`). The handlers of AttendeeSubdivision read the variables of the render in which the user clicked, as the old port did.
   - Possible follow-up: OutSystems keeps these block variables on a restore, as in W27 and F22.
5. W23:
   - `isAlive` guards only the state writes after an await, and UpdateTitle, which only writes the parent's title. The service interruption message, the calls, ConfirmAction, the upgrade popup, the preload object and the navigation still run after the unmount.
   - `useAssembleEventDetail.test.tsx` covers this with 2 tests. They unmount while GetAssembleEvent is pending: the message shows once, there is no reducer call and no render.
   - As in the old port, the household click and "share to Connect" of AttendeeSubdivision send no rejection to the flow handler. This could be a follow-up.
6. Arch baseline rows that this step owns: 6 rows (rule 4) on `components/assemble/AssembleSummaryCard` and `components/assemble/VirtualMeetingUrl`.
   - In the prefetch they stayed open: the second caller, `pages/AssembleEvents/components/AssembleSummary_List.tsx`, was being rewritten in a parallel worktree.
   - Done in the main-tree pass (see "Main-tree pass"), after the AssembleEvents commit d1bbd3aa, as the master ordered.
7. Item 4 (api.ts → domain hooks):
   - GetAssembleEvent was already `fetchAssembleEvent` in `api/event`, and the hook now imports it directly.
   - The contact adapter calls the Connect2_LegacyShared client action GetCacheableMemberContactList. Rule 7 does not let `api/` import `shared/`, so the call is a private function of `useAssembleEventContactList`, and the mapper is the pure `toAssembleEventContact`.
   - No `api/` file changed. `calls-by-domain.md` needs no new row.
   - `householdRowsOf` reads `HouseholdListResponse.List` directly (the `api/locality` mapper always gives a list), so `legacy/os/os-wire` is no longer imported.
8. F21: this route has no copy of `getSubscribedCountries`. `fetchLegacySignedImageURL` (W8) is not needed, so `api/image` was not copied.
9. Git and edits: the old copies for the check were written by a Python script into a temporary folder and deleted after the runs. The files that stay were written with Write or Edit, and with `prettier --write`. No `sed -i`.
10. For the documenter:
    - `move-map.csv` row 3 (ScreenBlock_AssembleDetail): status `moved`; hook `pages/AssembleDetail/hooks/useAssembleDetail.ts`, state `hooks/assembleDetailState.ts`, view `components/AssembleDetailView.tsx`.
    - Row 268 (the page): its notes were copied from Household_Relations and need the AssembleDetail text: `inputs.ts` (was `api.ts` and `types.ts`), the hooks above, and one file per block.
    - The `blockLifecycle.ts` pattern (blocks without a view cache) could go into page-template.md next to the Notifications note.
    - The arch baseline did not change in the prefetch (75 rows). The main-tree pass deleted the 6 owned rows (69 rows).

## Main-tree pass

The master applied the prefetch to the main tree (branch `refactor/architecture`, on top of d1bbd3aa) and asked for the open part: make AssembleSummaryCard and VirtualMeetingUrl props-only, update both callers and delete the 6 owned baseline rows. The deleted files of the prefetch are staged as deletions in the main tree.

### Shape

- `components/assemble/VirtualMeetingUrl`: props only. It no longer imports `@/platform/feedback/dialogs`.
  - New props (`MeetingInfoActions`): `onMeetingInfoToggle(dialogId)` and the slot `renderMeetingInfoDialog(slot)`.
  - The slot (`MeetingInfoDialogSlot`) gets `dialogId` (`<scope>-MeetingInfo`, still made by the component with `useId`), `body` (VirtualMeetingDetails) and `dismissLabel` "Close". The component places it in the `backwards-compatibility assemble-meeting-info-popup` container, so ActionConfirmationDialog keeps its parent for CopyClassesAcrossPortal.
  - LinkVirtualAddressOnClick stays (it imports only `shared/`).
- `components/assemble/AssembleSummaryCard`: props only. `linkAddressOnClick` moved out, with its `platform/` and `legacy/os` imports. New prop `onAddressClick(summary)`. It passes the 2 MeetingInfo props to VirtualMeetingUrl.
- New `containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx`: renders AssembleSummaryCard and fills `onAddressClick` (`linkAddressOnClick`, moved code unchanged), `onMeetingInfoToggle` (`confirmAction`) and `renderMeetingInfoDialog` (ActionConfirmationDialog). Module functions, no hook, no state. Folder barrel `index.ts`, as FilterSheet and ShareSheet.
- Callers: `pages/AssembleDetail/components/AssembleEventDetail.tsx` and `pages/AssembleEvents/components/AssembleSummary_List.tsx` render `AssembleSummaryCardContainer` with the same props.
- `platform/feedback/flowErrors.ts` re-exports `UserException`, so the container raises it without a rule-9 import of `legacy/os`.
- Tests moved with the code: the 3 LinkAddressOnClick tests and the MeetingInfo open and close test are in `AssembleSummaryCardContainer.test.tsx` (plus 2 new: the error mapping, the rendered inputs). The component tests check the new props and the slot. The component stories fill the slot with a stand-in (the closed ActionConfirmationDialog block), as the EntitiesCarousel stories do.

### Files (main-tree pass)

app/src/components/assemble/VirtualMeetingUrl/VirtualMeetingUrl.tsx (changed: props-only, MeetingInfo props and slot; `@origin` moved into the JSDoc, `// @os-block` and the compiled-line references of the rewritten JSDoc removed)
app/src/components/assemble/VirtualMeetingUrl/VirtualMeetingUrl.test.tsx (changed: slot and toggle tests; the dialog open and close test moved to the container)
app/src/components/assemble/VirtualMeetingUrl/VirtualMeetingUrl.stories.tsx (changed: dialog stand-in in the slot)
app/src/components/assemble/VirtualMeetingUrl/README.md (changed)
app/src/components/assemble/AssembleSummaryCard/AssembleSummaryCard.tsx (changed: props-only, `onAddressClick`; `linkAddressOnClick` moved to the container)
app/src/components/assemble/AssembleSummaryCard/AssembleSummaryCard.test.tsx (changed: no `platform/` import; address-click and MeetingInfo prop tests; the LinkAddressOnClick tests moved to the container)
app/src/components/assemble/AssembleSummaryCard/AssembleSummaryCard.stories.tsx (changed: dialog stand-in in the slot)
app/src/components/assemble/AssembleSummaryCard/README.md (changed)
app/src/containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx (new)
app/src/containers/AssembleSummaryCard/AssembleSummaryCardContainer.test.tsx (new, 6 tests)
app/src/containers/AssembleSummaryCard/index.ts (new)
app/src/containers/AssembleSummaryCard/README.md (new)
app/src/pages/AssembleDetail/components/AssembleEventDetail.tsx (changed: renders AssembleSummaryCardContainer)
app/src/pages/AssembleEvents/components/AssembleSummary_List.tsx (changed: renders AssembleSummaryCardContainer)
app/src/platform/feedback/flowErrors.ts (changed: re-exports UserException)
app/docs/refactor/arch-baseline.csv (changed: the 6 rows of owner P6-G5-B-AssembleDetail deleted)
migration/refactor/handoffs/P6-G5-B-AssembleDetail/dev.md (this report)

All of them are staged with `git add`. Not staged (master files): `migration/metrics/ledger.csv`, `migration/refactor/log.md`, `migration/refactor/state.json`, `brief.md`.

### Commands run (main tree, Node 24)

- Before the change: `npx vite build` + `node build/bundle-report.mjs HomeFeed Login AssembleDetail AssembleEvents` → exit 0. HomeFeed 751.50 / 244.39 kB gzip, Login 601.44 / 184.42, AssembleDetail 769.98 / 244.86, AssembleEvents 741.89 / 232.11.
- `npx depcruise src …` before → 0 errors, 163 warnings; after → 0 errors, 158 warnings. Gone: the 4 rule-4 warnings of the 2 components and the rule-9 warning AssembleSummaryCard → `legacy/os/os-exceptions`. No new warning.
- `npm --prefix app run typecheck` → exit 0
- `npm --prefix app run lint` → exit 0, 0 errors, 70 warnings (all Rule 4, all in the baseline)
- `npm --prefix app run format:check` → exit 0
- `cd app && npx vitest run src/containers/AssembleSummaryCard src/components/assemble src/pages/AssembleDetail src/pages/AssembleEvents` → exit 0, 26 files, 119 tests
- `cd app && npx vitest run` (full suite) → 3 runs: exit 0 (608 files, 3666 tests); exit 1 (1 failure in `pages/Updates_SingleList/Updates_SingleList.test.tsx`, a route that this pass does not touch; the file passed 3 times alone); exit 0 (608 files, 3666 tests). The failure is a flaky timing test under load.
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "69 warnings, 69 baseline rows, 0 new, 0 gone"
- `npx knip` → no new finding in the changed files except the exported `AssembleSummaryCardContainerProps` type (the Props-type convention of the other containers). The 2 helper functions of the container are module-private.
- After the change: build exit 0.
  - HomeFeed: 751.50 / 244.39 kB gzip, 40 chunks (0.00). W21 holds.
  - Login: 601.44 / 184.42, 12 chunks (0.00).
  - AssembleDetail: 770.36 / 244.98, 51 chunks (+0.12 gzip). AssembleEvents: 742.27 / 232.20, 39 chunks (+0.09 gzip). The container module.
- Temporary old-vs-new checks. The old side is the HEAD (d1bbd3aa) version of each route and of the 2 components, written by `adm-tools/make_old.py` (scratchpad) into `pages/AssembleDetail_old/` and `pages/AssembleEvents_old/` with rewritten imports, and deleted after the runs. `pageRedirect` and `window.open` are recorded in every snapshot.
  - AssembleDetail (each side in its own process, harness of the prefetch): 20 scenarios, 139 snapshots, 3 runs: 139/139 equal. New scenarios: the address link on desktop, iPhone and offline (geo:, comgooglemapsurl://, the Google Maps directions URL and the offline message), StrictMode on and off; the virtual meeting with the info icon (the dialog opens with the details), Close, a back navigation while the dialog is open (the dialog closes, the route stays) and `[Tap here]` (window.open `_blank`), StrictMode on and off.
  - AssembleEvents (old then new in one process, harness of the AssembleEvents step): 15 scenarios, 84 snapshots, 3 runs: 84/84 equal. New scenario, StrictMode on and off: the list has 8 address links and 2 info icons; the address link (desktop, then iPhone); the info icon; Close; `[Tap here]`. In the list the row click also opens AssembleDetail, on both sides. A probe on `confirmAction` shows that both sides call it once with the `…-MeetingInfo` id of an existing dialog.
- I did not run the parity, the e2e suite or the dev server.

### Deviations (main-tree pass)

1. File count: the step now has 54 app files (40 in the prefetch, 14 in this pass), over the guideline of about 40. The master ordered this pass in the same step.
2. `containers/AssembleSummaryCard` does not meet the container criterion of plan §2.3 (no data hook). It exists because the actions call `platform/` and 2 pages need them (§2.4 rule 2: a second page → `components/`, `containers/` or `api/`). Pages already render containers inside page components (EntityDetailsActionsContainer in Locality_Details, ShareSheetContainer in AttendeeSubdivision).
3. `platform/feedback/flowErrors.ts` got one re-export (`UserException`), outside the 2 components and the 2 callers. Without it the moved `linkAddressOnClick` would add a rule-9 warning in `containers/`.
4. For the documenter:
   - `move-map.csv` rows 34 (AssembleCommon_VirtualMeetingURL) and 36 (AssembleSummaryCard): shape `component` stays; notes: props only, actions from `containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx`.
   - `page-template.md` could name the MeetingInfo slot next to the other slots (`renderMeetingInfoDialog`).
   - Arch baseline: 69 rows.

## Questions for the user
none
