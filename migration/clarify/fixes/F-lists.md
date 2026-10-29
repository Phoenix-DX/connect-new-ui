# Fix note: group F (lists and services)

Minor findings wave of 2026-10-27. Brief: `migration/clarify/FIX.md`. No commit.

## 1. App_Services F3: a failed move keeps the steps before the failure

Rows: App_Services-044, App_Services-057. No decision in `decisions.md` for this finding.

- TST evidence: `UBTConnect.App_Services.Services.mvc.js:1403-1520`. When NewOrder is not OldOrder, the action sets
  `HasChanges = True` first (:1409). Then ListRemove, ListInsert3, ListRemove2, ListRemove3 and ListInsert2 change
  `GetServices.CurrentServices` and `GetServices.AvailableServices` in place (:1471-1505).
- TST evidence, end of the action: the Foreach that numbers the Orders runs after the List actions. An exception
  stops the action, so the earlier steps stay and the Foreach does not run. Handler_SortableListOnDragEnd (:1694) stops when OldIndex = NewIndex.
- Files changed:
  - `app/src/pages/Services/hooks/servicesState.ts:44-118`: new type `ChangeOrderVariables` (the two lists and
    `hasChanges`). `action_ChangeOrderLocal` now changes these variables in place, in the TST order: `hasChanges = true`
    first (:74), then the List actions, then the Order numbers (:115). It returns nothing.
  - `app/src/pages/Services/hooks/useServices.ts:57-88`: `onDragEnd` gives copies of the lists and the current
    `HasChanges` to the action. It stores the variables after a success and also after a failure, then sends the error
    to `raiseBubbledToFlowHandler`.
- Known original bug B3 stays 1:1. Example: a touch drag to the top of the favourites gives OldIndex 3 and NewIndex 0.
  ListRemove2 removes the row at OldOrder - 1, then ListInsert2 fails at index -1. The row is lost, the Orders are not numbered again, and
  `HasChanges` is True.
- Tests: `servicesState.test.ts` (rewritten for the in-place action: HasChanges, the B3 touch drag to the top, the
  steps that stay before a failed ListInsert2, copies only). `useServices.test.tsx:83-129` (B3 touch drag through the
  hook; a failed drag sets HasChanges, so "Save changes" saves). `npx vitest run src/pages/Services`: 5 files, 33 tests
  pass.
- Proposed verdict: `match` for App_Services-044 and App_Services-057.
- Follow-up outside this group: the report asks to add the touch drag to the top to entry B3 of
  `app/docs/known-original-bugs.md`. That file is not in the areas of group F, so it is not changed.

## 2. App_Services F4: the text of a list index error

Row: App_Services-056.

- TST evidence: `OutSystems.js:1522` (`List.checkIndex`, `isValidIndex`). An index is valid when it is a whole number,
  not negative, and less than the length (length + 1 for an insert). Otherwise the runtime raises
  `Error("Index out of bounds. Index <n> for bounds [0, <length - 1>].")`, or `"... for empty list."` when the list is
  empty. `listInsert` calls `insert` (`checkIndex(n, true)`), `listRemove` calls `remove` (`checkIndex(n)`), and
  `getItem` calls `checkIndex(n)`.
- Files changed: `app/src/pages/Services/hooks/servicesState.ts:26-33`: `checkIndex` uses the same condition and
  raises the runtime text, with the index and the bounds.
- Tests: `servicesState.test.ts` (bounds text for GetServices.CurrentServices[-1], ListRemove at -1, ListInsert2 past
  the end, and the empty list text). `useServices.test.tsx` checks the text that goes to the flow handler.
- Proposed verdict: `match` for App_Services-056.
- Note: `app/src/platform/feedback/bubbleErrors.test.ts:33` uses "Index out of range" only as a free message for its
  own test. It does not need a change.

## 3. Notes F1: the trigger of OnLoadMore

Rows: Notes-047, Notes-087.

- TST evidence:
  - `UBTConnect.Notes.NoteCard_List.mvc.js:337-351`: OSWidgets List with `animateItems: true`, no extended properties
    (threshold 2000), and `onScrollEnding`. The handler NoteCardList_OnScrollEnding (:545-563) triggers OnLoadMore and
    returns its Promise.
  - `UBTConnect.Notes.Notes.mvc.js:506-514`: the OnLoadMore handler of the screen returns the Promise of
    Notes_CardListOnLoadMore. `:1123`: the condition is "not GetNotes list empty and its length < MaxRecords". It has
    no loading clause. The action ends after Refresh_GetNotes.
  - `OutSystemsReactWidgets.js:152-165`: `tryFireScrollEndingEvent` fires only on a downward (or rightward) scroll,
    within the threshold of the end, and not while `isScrollEndingEventHandlerRunning`. That flag stays set until the
    Promise of the handler settles (`tryFinally`). While the flag is set, the last scroll offset is not recorded.
- The shared `OSList` (`app/src/components/ui/os/OSList/OSList.tsx:91-203`) already ports this rule, so the block uses
  it. `OSList` itself is not changed.
- Files changed:
  - `app/src/pages/Notes/components/NoteCard_List.tsx:23, 91-107`: the list is now `OSList` (`list list-group
    list--gap-s`, `animateItems`, `positionRelative`, the same row keys) with `onScrollEnding` that calls
    `onOnLoadMore` and returns its Promise. The window scroll listener is removed. `onOnLoadMore` can return a Promise.
  - `app/src/pages/Notes/hooks/notesState.ts:85-89`: `canLoadMore` has no `notesLoading` clause.
  - `app/src/pages/Notes/hooks/useNotes.ts:41-43, 197-201`: `onLoadMore` returns a Promise that settles after the
    page fetch. An error still goes to `raiseToFlowHandler`.
- Tests: `NoteCard_List.test.tsx` (new). The first scroll only records the offset. A scroll far from the end, an
  upward scroll and a scroll while OnLoadMore runs do not fire. A downward scroll near the end fires. The List markup
  is the same.
- Tests of the hook: `notesState.test.ts:96-101` and `useNotes.test.tsx:290-339` (no loading clause; the Promise
  settles after the page fetch). `npx vitest run src/pages/Notes`: 4 files, 30 tests pass.
- Proposed verdict: `match` for Notes-047 and Notes-087.

## 4. Directory_Updates F3: the mock of DataActionFetchUpdates applies Filter_Updates

Row: Directory_Updates-007 (mock-only server action Get_UI_UpdateItems).

- Evidence: report row 007 and §5 F3 point to GetUpdateItems of Connect_Updates_CS, rules BR-C2SVC-320 to 332 (KB
  `ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/rules/`). The server code is
  not on TST, so the KB is the source.
- Files changed: `app/src/pages/Updates_SingleList/mocks.ts`:
  - `:14-16`: type of the Filter_Updates input. `:24-26`: the header comment says that the answer applies the filter.
  - `:157-213`: `NO_FILTER` is the default record for a call without the input. `prepareSearchWords` ports
    BR-C2SVC-332. `matchesFilter` ports the dates (BR-C2SVC-323), the search (BR-C2SVC-325), the type
    (BR-C2SVC-326) and the read status (BR-C2SVC-327). `getUpdateItems` adds the sort (BR-C2SVC-329).
  - `:216-219`: the handler answers the filtered rows, and UnreadCount counts the unread rows of the filtered list
    (BR-C2SVC-331).
  - The fixture rows are not changed.
- Mock choices that the KB does not settle (mock only, no effect on production code):
  - The search compares with `Name`, the title of the row. The entity field `DisplayTitle` is not in UI_UpdateItem.
    The compare ignores case, as a `LIKE` with a case-insensitive collation does (BR-C2SVC-325: the collation is not
    captured). `%` and `_` are not wildcards in the mock.
  - BR-C2SVC-329 does not record the direction of the second sort (UpdateItem.Id). Rows of one date keep the order of
    the fixture, for both directions.
  - The subscription, region, hidden, country and locality filters (BR-C2SVC-320, 321, 322, 328) are not applied: the
    fixture rows have no field for them.
- Tests: `mocks.test.ts` (new). It checks no filter, the type, the status (None, No, Yes, another value), the search
  ("&", case, a fifth word), the dates and oldest first. It also checks the handler: UnreadCount and an empty answer. `npx vitest run
  src/pages/Updates_SingleList src/api/update src/pages/HomeFeed` pass.
- Proposed verdict: Directory_Updates-007 stays `mock-only` (production needs the server action), with the note "the
  mock applies type, search, dates, status and sort of Filter_Updates". Finding F3 is closed. The empty state can now
  show in the demo, for example with a search that finds no row (F1 is a separate finding).
- Not changed: the mock of ServiceAPIAction_UI_UpdateItem_MarkAllAsRead still marks every row read (row 008,
  CR-Updates_SingleList-1, not part of F3).

## Checks

- `npx vitest run src/pages/Services src/pages/Notes src/pages/Updates_SingleList src/components/ui/os/OSList
  src/api/update src/pages/HomeFeed`: 25 files, 174 tests pass.
- `npx eslint src/pages/Services src/pages/Notes src/pages/Updates_SingleList/mocks.ts
  src/pages/Updates_SingleList/mocks.test.ts`: no problems. Prettier: no problems.
- `npm run typecheck`: no error in the files of group F. The only errors are in
  `app/src/pages/BookmarksByGroup/components/BookmarkGroupView.test.tsx`, a file of another group that changes in
  parallel.
