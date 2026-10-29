# Drift triage: group "messages" (2026-10-29)

Brief: `../builds/drift-triage-brief.md`. Routes: MessageList, MessageDetail, Notifications, LegacyShareObject, Menu,
Profile, Notes. Input: the parity reports of 2026-10-29 (`migration/screens/<S>/parity/*.json`). Old TST code: git
`62406f26:migration/screens/<S>/analysis/sources/pretty/`. New TST code: the same path in the working tree.

**Summary: 236 differences in 10 rows. A: 3 rows (32 differences). B: 4 rows (198). C: 2 rows (5, plus a pixel share).
D: 1 row (1).** Clean states: all `loading` states, MessageList `filter`, the `offline` states of MessageDetail,
MessageList, LegacyShareObject, Menu, Profile and Notes. 5 questions for the user (Q1-Q5).

## Rows

| Row | Block / cause | Routes and states | Differences | Class | Size | Risk | Decision |
|---|---|---|---|---|---|---|---|
| A1 | App_Notifications.NotificationsList and screen: new item actions (swipe read/delete, only-unread, read count) | Notifications default | structure 23 | A | L | medium-high | Q1 |
| A2 | App_CommonBlocks_Filter.MoreActionSheet: new `moreActionContainer` wrapper, delete-all confirm popup | Notifications default, offline | structure 4 | A | S-M | low | Q1 |
| A3 | Directory_EntityDetailsActions + CW_Notes.NotesSheet (shared, 8 routes; owner: the group of drift-table row "CW_Notes.NotesSheet") | Profile default | structure 3, call 1, class 1 | A | L | medium | owner group |
| B1 | Notifications mock: dates, groups, read state, list length | Notifications default | 29 (text 2, structure 2, layout 18, position 6, pixel 1) | B | M | low | Q2 |
| B2 | MessageList mock: 3 new messages, read state | MessageList default, search | 68 (default 48, search 20) | B | S | low | no |
| B3 | Share_UI.ProfileList: server answer of DataActionGetAvailableUsers | LegacyShareObject default | 52 (structure 49, text 1, layout 1, pixel 1) | B | M | low | Q4 (fact) |
| B4 | TST test account: role and household changed | Menu default, Profile default | 49 (Menu 13, Profile 36) | B | M | low-medium | Q3 |
| C1 | MessageDetail: the captured message is not available to the account now | MessageDetail default | 5 (structure 2, call 2, pixel 1) | C | S | low | Q5 |
| C2 | Bottom bar Updates badge text masked in the capture ("••" vs "9+") | Notes default (pixel share); offline states below threshold | 0 counted | C | none | none | no |
| D1 | Footer scroll shadow: first evaluation timing (shared scroll action) | Notes default | pixel 1 (0.58 %) | D | S | medium | no |

## Row details

### A1: Notifications list, new item actions (TST change)

- Differences: Notifications default, structure 23: 4 `ListItemContainer` missing in build, 19 `ConnectPatterns.SkeletonSection`
  extra in build at their place. The item counts also follow row B1.
- Evidence: `UBTConnect.App_Notifications.NotificationsList.mvc.js` 447 → 1144 lines. New: a `ListItemContainer` container
  (view :203-215) around an `OSWidgets.ListItem` with swipe actions (`handler_ToggleRead`, `handler_DeleteNotification`),
  a delete popup (`ShowDeleteNotificationPopup`, `popup-dialog`), text "Delete", server calls `ToggleRead`,
  `Delete_Notifications`. `UBTConnect.App_Notifications.Notifications.mvc.js` 3659 → 4217 lines: new handlers
  `OnlyShowUnread`, `UpdateReadCount`, `NotificationDetail` (`MarkAsRead`), `MoreActionSheetDeleteAll`
  (`Delete_Notifications`), `MoreActionSheetMarkAllAsRead` (`MarkAllAsReadNotifications`); variable `BadgeNumber` removed,
  `ReadCount` and `Local_OnlyShowUnread` added; `ApplyFilters` takes `IsNewestToOldest`; new `ConnectPatterns.EmptyList`;
  the search input moved. `Notifications_Action.mvc.js`: new `switch_IsOnlyShowUnReadOnChange`.
  `NotificationsListBreakpoints.mvc.js` 333 → 586 lines (event `UpdateReadCount`, `Breakpoint`). The screen block ids
  moved (b14 → b15, b21 → b22): one more block on the screen. React has none of this (no match for `ListItemContainer`,
  `OnlyShowUnread`, `toggleRead` in `app/src/pages/Notifications`).
- Fix: `app/src/pages/Notifications`: `components/NotificationsList.tsx` (wrapper, `OSListItem` swipe actions from
  `components/ui/os/OSList`, delete popup), `components/NotificationsListBreakpoints.tsx`, `components/Notifications_Action.tsx`
  (only-unread switch), `NotificationsPage.tsx`, `hooks/useNotifications.ts`, `hooks/notificationsState.ts` (new handlers,
  ReadCount, IsNewestToOldest, EmptyList), `app/src/api/notification` (4 new server actions, contract), `mocks.ts` (store
  writes). `Directory_Updates_RefreshBottomBarCount` touches the shared bottom bar count. Other routes: NotificationDetails
  only if MarkAsRead moves.

### A2: MoreActionSheet wrapper and delete-all confirm (TST change)

- Differences: Notifications default and offline, structure 2 each: `div.moreActionContainer` missing,
  `ConnectPatterns.BottomSheet` extra at its place.
- Evidence: `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js` view :226-236 (new): an `OSWidgets.Container` with
  style `moreActionContainer` around the BottomSheet. New variable `ShowConfirmDeleteAllPopup`, action
  `toggle_DeleteAllPopup` (`popup-dialog`). BottomSheet event `initialized$Action` → `onToggle$Action`. React:
  `app/src/pages/Notifications/components/MoreActionSheet.tsx:62` renders the BottomSheet directly in the block.
- Fix: `MoreActionSheet.tsx`: the wrapper div, the confirm popup before `onDeleteAllNotification`, the toggle event. Only
  Notifications uses this block (no other `blocks-tree.txt` has it).

### A3: EntityDetailsActions and NotesSheet (TST change, shared)

- Differences: Profile default: structure 3 (`CW_Notes.NotesSheet` extra in build), call 1 (`DataActionFetchNotes` not
  called), class 1 (`html.popup-disable-scroll` missing in build; cause not proven, re-check after the fix).
- Evidence: the old Profile tree has NotesSheet 3 times (old `blocks-tree.txt` lines 245, 291, 330); the new tree has none.
  `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`: new `IsOpen`, `In_Note`, `NoteText`, `IsSubmittingNote`,
  `handler_OnSubmitNote`, `bottomSheetOnToggle`; removed `handler_OnAddNoteRequested`.
  `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`: new `EntityNotes`, `FetchNoteId`,
  `In_LocalityId`, `onAfterFetch_FetchNotes`, `handler_AddNotesOnClick`; removed `EntityExtraDataJSON`,
  `Local_BookmarkGroup`. This corrects `../builds/item10-finish.md` (drift list: "not a new TST change"): the old capture
  rendered the sheet, the new capture does not.
- Fix: one fix in the shared React block (`useEntityDetailsActions.ts`, NotesSheet) by the owner group. Then run the
  Profile parity again.

### B1: Notifications mock data

- Differences: Notifications default: text 2 (group headers "Last 7 Days"/"Last 30 Days" vs "Last 30 Days"/"Older"),
  structure 2 (group container "Older" missing, one header Badge extra), layout 18, position 6 (4 of them are the
  BottomSheet offsets that follow the page height), pixel 1 (6.60 %).
- Evidence: new TST DOM: "Last 7 Days" 3 items (header with Badge), "Last 30 Days" 1, "Older" 64 (68 notifications).
  Old capture and mock: 9 "Last 30 Days" + 10 "Older" (`app/src/mocks/fictional/notifications.ts:8-10`, ROWS :32-55, ages
  before 2026-10-14). `Notifications_Header.mvc.js` and `Notification_ListItem.mvc.js` did not change; the badge number now
  comes from the new read-count logic (A1).
- Fix: `app/src/mocks/fictional/notifications.ts` ROWS: ages before 2026-10-29, groups 3 / 1 / 64, read state and avatar
  kind as captured, fictional titles with the captured lengths. The file shares its titles with the MessageList mock (B2):
  change both together. Do it after A1. Tests that count rows: `app/src/api/notification/*.test.ts*`,
  `pages/Notifications/hooks/*.test.ts*`.

### B2: MessageList mock data

- Differences: MessageList default 48 (structure 2, class 14, style 14, text 9, layout 8, pixel 4.69 %), search 20
  (structure 2, text 9, layout 8, pixel 5.07 %).
- Evidence: the TST blocks did not change (`MessageListItem`, `MessageListBlock`, `ScreenBlock_MessageList`: 0 diff lines).
  New capture: 20 items; 3 new items on top ("Test Noti 2", "test", "New Connect notification"), the old items move down
  by 3. Old capture: 19 items. `background-blue-lightest` (unread) on 2 items now, on 16 before. Item 18: its icon child is
  extra in build (data).
- Fix: `app/src/pages/MessageList/mocks.ts`: 20 rows in the new order, the three TST test labels as captured (rule Q3 of
  2026-10-15: test labels unmasked), `IsRead` per item (2 unread), item 18 icon as captured. Tests:
  `app/src/api/message/*.test.ts*`.

### B3: LegacyShareObject, GetAvailableUsers answer

- Differences: LegacyShareObject default: structure 49 (result rows missing), text 1 ("Locality Members" → "Contacts
  list"), layout 1, pixel 1 (7.23 %).
- Evidence: the client code did not change (`Share_UI.ProfileList`, `ScreenBlock_ShareObject`, `Result_Item_Image`,
  `LegacyShareObject.mvc.js`: only debugger ids). The title is `data.Label` of `DataActionGetAvailableUsers`
  (`analysis/calls.md`). Old capture: label masked, 8 + 4 letters ("Contacts list"), no rows. New capture: label
  "Locality Members" (unmasked), 49 rows with an empty search. React renders rows correctly
  (`pages/LegacyShareObject/components/ProfileList.tsx:75-76`); its mock answers Label "Contacts list" and one user only
  for a matching search (`pages/LegacyShareObject/mocks.ts:22`).
- Fix: `pages/LegacyShareObject/mocks.ts`: an empty search answers Label "Locality Members" and 49 fictional members
  (names, locality, country with the captured lengths). Update the tests that expect "Contacts list"
  (`LegacyShareObject.test.tsx:67`, `hooks/useProfileList.test.tsx:127`, `hooks/profileListState.test.ts:30`). Only this
  route. Wait for Q4.

### B4: TST test account role and household

- Differences: Menu default 13 (layout 6, structure 1, class 2, pseudo 2, text 2: the "Request Photo Update" row is extra
  in build, the rows below move up). Profile default 36 (structure 7: the two "Display … on your profile." notes, the two
  switch spans, 2 `Member_ListItem` missing, 1 `Directory_EntityDetailsActions` extra; layout 21; position 8, with the
  FixedFooter and BottomSheet offsets that follow the height).
- Evidence: Menu code did not change (`Menu.mvc.js`, `Menu_List.mvc.js`: debugger ids only). `Menu.mvc.js:840-856`
  removes "Request Photo Update" unless `IsHouseholder` or `SpouseIsHouseholder`: old capture kept it, new capture
  removed it. `App_Profile.Profile.mvc.js:1974` and `:2053` show the number switches and notes only when `IsHouseholder`
  or `IsSpouse`: old capture had them, new capture does not. Profile "ParentsAndChildren" has 2 more members on TST.
  Thus the account is no longer a householder or a householder's spouse. React mocks: Menu scenario `householder`
  (`pages/Menu/mocks.ts:13-18`), Profile scenario `spouse` (`pages/Profile/mocks.ts:19-24`), set in
  `migration/capture-plan.json` (`scenarios.default`).
- Fix (option a of Q3): a new scenario, for example `member` (not householder, not spouse, household relations as
  captured), as the default of Menu and Profile in `capture-plan.json`; `householder` and `spouse` stay as review
  scenarios. Files: `pages/Menu/mocks.ts`, `pages/Profile/mocks.ts`, `app/src/mocks/fictional/directory.ts`. The handlers
  are scenario-scoped, so other routes do not change.

### C1: MessageDetail, message not available

- Differences: MessageDetail default: structure 2 (`ScreenBlock_MessageList` missing, `ScreenBlock_MessageDetail` extra),
  call 2 (`DataActionGetMessages` not called; `ActionGetSignedImagesInBulk` 0× vs 1×), pixel 1 (7.89 %).
- Evidence: TST code did not change (`MessageDetail.mvc.js`, `ScreenBlock_MessageDetail.mvc.js`: 0 diff lines). The
  capture ended on MessageList (`analysis/digest.md`: "Digest: MessageList"; `calls.md`: `DataActionGetMessageInstance`
  200, then `DataActionGetMessages`). `ScreenBlock_MessageDetail.mvc.js:950-967` and `:1390-1404`: when the instance is
  not found, retracted or not the user's, the screen shows a feedback message and goes to MessageList. The id 5965247
  in `capture-plan.json` is not valid for the account now.
- Fix: no app change. Capture fix: Q5.

### C2: masked badge text

- Evidence: crop of `Notes/parity/default.{expected,build,diff}.png`, y 730-830: the TST Updates badge shows "••"
  (masked), the build "9+". The same hotspots (200,760-800, 9-35 px) are in the offline states of MessageDetail,
  MessageList, Menu and Notes, below the threshold.
- Fix: none. Optional: a parity mask for the bottom-bar badge (all groups).

### D1: footer scroll shadow on Notes

- Differences: Notes default, pixel 1 (0.58 %, worst tile 11.6 %): on TST a 9 px gradient band at y 778-786, above the
  bottom bar; none in build. DOM, styles and calls are equal.
- Evidence: TST CSS `.ubt-layout-main footer:before { … linear-gradient …; top: -9px; visibility:
  var(--footer-shadow-scroll) }` (`Notes/analysis/css-relevant.md:275-277`). TST DOM of Notes and Bookmarks:
  `--footer-shadow-scroll: visible` (`analysis/dom/default.raw.html`). TST sets the variable once after 200 ms
  (`window.setTimeout(shadowHandleScroll,200)`, `migration/runtime-sources/UBTConnectLibrary.ScrollAnimations.js:186-189`),
  then only on scroll. React sets it at the first animation frame (`app/src/lib/ubtConnectLibrary/actions.ts:516-519`,
  `:529`) and finds "at bottom", so "hidden". Likely cause: at 200 ms the Notes page still shows its loading cards
  (Notes_Loading = True first) and can scroll, so TST keeps "visible" after the empty state renders. Not proven in a
  browser.
- Fix: `actions.ts` (`initialize_SvgScroll`): first evaluation of the footer and header shadows after 200 ms, as in
  ScrollAnimations.js; keep the scroll listener. Shared: every route with this scroll action. Run parity on those routes
  (parity per change scope).

## Questions for the user

- **Q1 (decision, scope): Notifications new TST features (A1, A2).** Evidence: rows A1, A2. Options:
  (a) port all now: list wrapper, swipe read/delete, delete popup, only-unread switch, mark-all and delete-all with
  confirm, read count, mock writes in the store (size L, one build brief);
  (b) port the view structure now (wrappers, swipe-action markup, closed popups), the write flows later;
  (c) defer; record the drift as known.
  Recommendation: (a). The goal is a 1:1 replacement, and the mock store already supports writes (MarkAsRead). If time is
  short, (b).
- **Q2 (decision, mocks): Notifications list length (B1).** Options: (a) 68 rows as captured (3 / 1 / 64), fictional
  titles with captured lengths, made by a small script; (b) 19 rows with the new groups and badges, structure differences
  stay for the rest; (c) keep the 2026-10-14 shape. Recommendation: (a). Parity compares the full DOM.
- **Q3 (decision, mocks): account role (B4).** Options: (a) a new default scenario `member` for Menu and Profile;
  `householder` and `spouse` stay as review scenarios; (b) keep the scenarios and record the difference as known;
  (c) ask the TST account owner first if the role change is permanent. Recommendation: (a), because TST as captured now is
  the source of truth; tell the account owner (c) in parallel.
- **Q4 (fact, MCP on DEV, server logic of GetAvailableUsers / Share_UI): LegacyShareObject (B3).** What Label and rows does
  the server answer for a non-empty search, and for the other share object types? Is 49 a page size or all members of the
  locality? Recommendation: check before the mock change.
- **Q5 (decision, capture): MessageDetail baseline (C1).** Options: (a) put a message id that the account has today
  (from the new MessageList capture) in `capture-plan.json` and capture MessageDetail again, read-only guard on;
  (b) restore the 2026-10-14 MessageDetail analysis (git 62406f26) as the baseline and note the drift; (c) keep and
  accept. Recommendation: (a).
