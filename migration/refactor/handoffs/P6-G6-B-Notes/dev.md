## Result
status: pass
summary: Notes is now a page. The flows moved to `hooks/useNotes.ts` (useFlowState) and the state, reducer and client actions to `hooks/notesState.ts`. `api.ts` and `types.ts` are deleted: the page uses `@/api/note` directly. The 8 block files have `@origin`. A temporary old-vs-new check gave the same screen frames, calls, request bodies, flow-handler calls and navigation in 26 runs (13 scenarios, normal and StrictMode). Typecheck, eslint, prettier and 86 tests pass. W21: HomeFeed 244.44 → 244.44 kB gzip; Login 184.47 → 184.49 kB gzip (+3 bytes raw in the entry, see "Commands run").

## Files changed
app/src/pages/Notes/NotesPage.tsx (rewritten: layout and blocks only, calls useNotes)
app/src/pages/Notes/hooks/useNotes.ts (added)
app/src/pages/Notes/hooks/useNotes.test.tsx (added)
app/src/pages/Notes/hooks/notesState.ts (added)
app/src/pages/Notes/hooks/notesState.test.ts (added)
app/src/pages/Notes/Notes.test.tsx (added)
app/src/pages/Notes/api.ts (deleted)
app/src/pages/Notes/types.ts (deleted)
app/src/pages/Notes/mocks.ts (the wire type NoteCardItemWire moved here from types.ts)
app/src/pages/Notes/components/FilterSheet_Icon_Label.tsx (tag line: `// @os-block` → `/** @origin */`)
app/src/pages/Notes/components/Horizontal_Filter_TagList.tsx (tag line)
app/src/pages/Notes/components/ItemCardActions.tsx (tag line)
app/src/pages/Notes/components/ItemCard_ActionBar.tsx (tag line)
app/src/pages/Notes/components/ItemCard_WithNotes.tsx (tag line)
app/src/pages/Notes/components/NoteCard_Item.tsx (tag line; type import `@/pages/Notes/types` → `@/api/note`)
app/src/pages/Notes/components/NoteCard_List.tsx (tag line; type import `@/pages/Notes/types` → `@/api/note`)
app/src/pages/Notes/components/Notes_FilterSheet.tsx (tag line; type import `@/pages/Notes/types` → `@/api/note`)
migration/refactor/handoffs/P6-G6-B-Notes/dev.md (added)

## Commands run
python3 migration/tools/refactor/os-block-to-origin.py app/src/pages/Notes/components → 8 files changed (tag line only)
npm --prefix app run typecheck → exit 0
cd app && npx eslint src/pages/Notes → exit 0
cd app && npx prettier --check src/pages/Notes → all files formatted
cd app && npx vitest run src/pages/Notes src/api/note src/mocks/handlers.test.ts src/containers/NoteListActions src/components/note src/containers/FilterSheet → 14 files, 86 tests pass (new: notesState 7, useNotes 16, Notes page 4)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 188 warnings, 0 errors (189 before: the warning NotesPage.tsx → legacy/os/exceptions is gone; mocks.ts → legacy/os/os-wire stays, as before)
Temporary old-vs-new check (app/src/pages/Notes/__old__/, deleted before this report): the old page and the new page in the app frame with the MSW mocks (latency 40 ms), local notes in memory. Compared: every DOM state of the Notes screen (layout and filter sheet; the bottom bar and the bell badge left out, they render from their own calls), the final DOM, the call order, the bodies of DataActionGetNotes and Get_NotePills_ByNoteCategoryIds, the flow-handler calls and the path. Scenarios: first load, two pill clicks, search (change, submit, clear), card click, back navigation, leave at once, leave during the first pills call, during GetNotes and during the second pills call, mock real, empty, error and loading (the 10 s timeout) → 26/26 equal, 2 full runs.
npm --prefix app run build && node app/build/bundle-report.mjs → exit 0; HomeFeed 751.62 kB / 244.44 kB gzip, Login 601.56 kB / 184.49 kB gzip
Base build (the old Notes folder put back for the build only, then the new folder restored) + bundle-report → HomeFeed 751.61 kB / 244.44 kB gzip, Login 601.56 kB / 184.47 kB gzip
Entry diff (base vs new, hashes masked) → +3 bytes: the preload list of the Notes route gets the shared `flowState` chunk (`useFlowState`). HomeFeed gzip equal; Login gzip +0.02 kB from these 3 bytes (raw size equal). Far below the W21 tripwire (0.3 kB per step).

## Deviations from the brief
1. OnInitialize and OnReady. The old page ran the local read of OnInitialize (GetNotes_FilterYear) in an effect after the first render, and OnReady in a second effect after the render in which OnInitialize ended. The new hook keeps that order: the `onReady` option of useFlowState runs the OnInitialize part, and one effect in useNotes runs OnReady once when `isInitialized` turns true. A first version ran OnReady straight after OnInitialize in the same flow: the old-vs-new check then showed DataActionGetNotes sending `Filter_BottomSheetId` "" (Notes_FilterSheet had not mounted yet), so I changed it back to the old order.
2. W23 guard. The flows check a mounted flag that a layout effect sets, not the `isAlive` of `onReady`. The flows that the events start (pill, search, filter, load more) need the same guard, and StrictMode turns the flag on again before the blocks' effects raise events. After the unmount, the flows' writes go to a copy of the variables (`afterUnmount`), so the calls after the unmount send the same variables as the old page did (for example Notes_Loading True and the new pills). The unit test "after the unmount…" checks the calls, the body, no view-cache write and no render.
3. View cache. The old page kept no variable on a back navigation. useFlowState saves the whole state, so the hook sets `restore: () => INITIAL_NOTES_STATE`: a restored view starts from OnInitialize, as before (the back-navigation scenario of the check is equal).
4. GetNotesOnAfterFetch, first page. The old page assigned MaxRecords and Notes_List, then ran the second ResetPillsVallues, and showed the new list only after that call (one render at the end). With useFlowState each assignment renders, so the hook makes the call first and assigns MaxRecords, Notes_List, PillsLoaded, ResetPillsValue and Notes_Loading after it, in one render. The frames and the call order are the same. One difference remains: during that call (first load only), the variables of the flow still hold the skeleton list and MaxRecords "0". Only a second GetNotes started during that call can send them (a search submit; the pills are inert then); the server action reads only PageNumber, Notes_Filter and PageSize (mock note, Notes Q2).
5. StrictMode (dev only): the old page read the local year options twice; the new page reads them once. No server call changes.
6. Docs are not changed (documenter). For page-template.md: the `restore` use of item 3 and the OnReady-after-OnInitialize effect of item 1 are new patterns.

## Questions for the user
none
