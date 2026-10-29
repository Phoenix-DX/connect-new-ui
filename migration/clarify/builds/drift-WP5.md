# Drift wave, WP5: Notifications rework (2026-10-29)

Decisions: M-Q1 (a) port all, M-Q2 (a) 68-row mock. Rows: `../review/drift-triage-messages.md` A1, A2, B1. Source: live
TST code `migration/screens/Notifications/analysis/sources/pretty/` (publish of 2026-10-27); Notifications_ConfirmDialog
from the survey copy (`capture/survey-UBTConnect.json`, the popup is closed in every captured state).

## Files

- `app/src/api/notification/`: `types.ts` (BadgeNumber removed; `local_OnlyShowUnread`, `readCount`), `mapper.ts`
  (wire: Local_OnlyShowUnread, ReadCount, empty Screen_NotificationItemList; `toMessageListItemWire`),
  `repository.ts` + `index.ts` (new: `toggleNotificationRead` = ActionToggleRead, `deleteNotifications` =
  ServiceAPIDelete_Notifications, `markAllAsReadNotifications` = ActionMarkAllAsReadNotifications; all in the contract).
- `app/src/mocks/fictional/notifications.ts`: 68 rows as captured (3 / 1 / 64, 2 unread, avatar kinds, ages; the oldest
  rows are six calendar months old). Masked titles: fictional texts with the captured word lengths, made by a small
  script; the 2026-10-14 titles kept for the same rows. Ids keep 910019 (Test Noti 56) and 910003.
- `app/src/pages/Notifications/mocks.ts`: stateful ToggleRead, MarkAllAsReadNotifications, Delete_Notifications (and
  MarkAsRead); FetchNotifications answers only unread rows with Local_OnlyShowUnread and the oldest first with
  OrderByIsAscending (question Q1).
- `app/src/pages/Notifications/`: `NotificationsPage.tsx` (Badge = ReadCount, Search_PreScroll only before the
  scroll, EmptyList for an empty search, block ids $b14/$b15/$b19-$b22, new events), `hooks/notificationsState.ts`
  (ReadCount, Local_OnlyShowUnread, SelectedHistorySearch, OrderByIsAscending, SetBadgeCountsToZero,
  `updatedReadCount`), `hooks/useNotifications.ts` (OnlyShowUnread, UpdateReadCount, MarkAllAsRead, DeleteAll,
  ApplyFilters(IsNewestToOldest) without ScrollTop; NotificationDetail entry unchanged: MarkAsRead when unread, then
  navigate), `components/NotificationsList.tsx` (ListItemContainer > OSListItem with swipe read/delete, delete popup,
  OnParametersChanged refilter), `components/NotificationsListBreakpoints.tsx` (UpdateReadCount on its own copy),
  `components/Notifications_Action.tsx` (switch raises OnlyShowUnread), `components/MoreActionSheet.tsx`
  (`moreActionContainer`, delete-all confirm popup, mark-all closes the sheet, BackNavigationHandler $b13; only
  Notifications uses it), `components/SortSheet.tsx` (ApplySort passes the choice), new
  `components/Notifications_ConfirmDialog.tsx` (popup widget + dialog block), `components/actions.ts`
  (`toggleItemRead`, `applyReadCountUpdate`).
- Tests: new `components/actions.test.ts`; new reducer test in `hooks/notificationsState.test.ts`; updated
  `Notifications.test.tsx`, `NotificationDetailEntry.test.tsx`, `hooks/useNotifications.test.tsx`,
  `api/notification/{mapper,repository,hooks}.test.ts(x)`. The mocks file was written by Write; the other edits by
  exact-match replacement scripts (each match asserted once).

## Checks

- `tsc`: no error in WP5 files. Other agents' errors seen: `src/pages/Updates_SingleList/mocks.ts` (many TS2322/TS2304).
- `vitest` (Notifications, NotificationDetails, api/notification): 42 passed, 8 failed.
  - 4 come from the MessageList mock (B2, another package): `hooks.test.tsx` (unread 2 vs 16, TotalChange 2 vs 15),
    `repository.test.ts` markNotificationOpened (ids 81022/81021 vs 81019) and markAllNotificationsAsRead (2 vs 15).
  - 1 is WP5 data: `repository.test.ts` fetchNotifications expects Test Noti 56 unread; it is read in the new capture
    (fix: expect `isRead: true`). Not done (call budget).
  - 3 in `useNotifications.test.tsx` (the error paths of OnReady: the flow handler gets no call). Cause not found.
- `npm run arch`: no new violation. `npm run dup`: 36 clones in total (no baseline compared). `eslint` and
  `prettier --check` on the changed files: not run correctly (the file list was wrong); `prettier --write` was run.

## Parity (`route.py parity`, after the last change, http://localhost:5174)

| Route / state | Before | After |
|---|---|---|
| Notifications default | 54 (structure 27, layout 18, position 6, text 2, pixel 1) | 352 (style 340, position 12); structure, layout, text, pixel 0 |
| Notifications offline | structure 2 | 0 |
| Notifications loading | 0 | 0 |
| NotificationDetails default, loading, offline | 0 | 0 |

Left: Notifications default style 340 and position 12, class not set yet (probably A: the computed styles of the new
ListItem markup, for example the list-item container widths, or the asset files below; open
`migration/screens/Notifications/parity/default.json`). Missing assets (the mock uses the captured URLs):
`UBT_CW.logo_connect.jpg` and `UBT_CW.logo_LordDaysMeal.png` are not in `app/public/os-assets/UBT_CW/img/` (static GET
from TST under the standing approval, by the main session).

## Questions

- **Q1 (fact, MCP):** what DataActionFetchNotifications does with Local_OnlyShowUnread and OrderByIsAscending (server
  code). Options: (a) keep the mock (only unread rows; oldest first); (b) check on DEV with the MCP first.
  Recommendation: (b), then keep or fix the mock.
- **Q2 (fact):** Handler_ToggleRead passes IsRead = `ListFilter.FilteredList.Current.IsRead` after it changed
  `Local_MessageListItem` (assigned without clone, `NotificationsList.mvc.js:633-654`). If the runtime shares the record,
  IsRead is the new state and "Mark as read" does not lower the header count. Options: (a) the state before the toggle
  (built now: the count goes down); (b) the new state (1:1 with a reference copy, a probable TST bug); (c) test on TST.
  Recommendation: (c), then (a) or (b).
- **Q3 (decision):** Delete_Notifications sends MessageListItem records; React keeps only the listed fields, so the
  others go with default values. Options: (a) keep (the mock reads Id only); (b) carry the full records in
  NotificationItem. Recommendation: (a) for the mock phase; (b) before a real backend.

## Follow-up (2026-10-29, after the coordinator's notes)

This section replaces "Checks" and "Left" above.

### Parity (after the last change; the 2 images and the 11 live stylesheets in place)

| Route / state | After the first pass | Now |
|---|---|---|
| Notifications default | style 340, position 12 | 0 |
| Notifications loading, offline | 0 | 0 |
| NotificationDetails default, loading, offline | 0 | 0 |

How the rest was classified (`parity/default.json`, grouped by kind, property and element):
- style 340 = `cursor pointer → auto` on 68 items × 5 elements (`updates-list__list-item` and the blocks in it). TST
  renders the clickable Container with `style="cursor: pointer;"` (dom/default.html). Class A, React markup: fixed in
  `NotificationsList.tsx` (inline cursor on the item container).
- position 12 = 4 column offsets in Notification_ListItem rows and 8 bottom-sheet offsets that follow the page height
  (57 px). The cause is mock text: 4 fictional titles wrapped to one line more than the TST text (measured in the
  build with Playwright: 36 px instead of 18 px for one title, 72 px instead of 54 px for three). Class B: fixed in
  `mocks/fictional/notifications.ts` with narrower fictional titles that keep the captured word lengths. Each
  replacement was measured before it was used.
- The 11 stylesheets that the coordinator replaced: the parity after them is still 0.

### Tests and checks

- `npx vitest run src/pages/Notifications src/api/notification src/pages/NotificationDetails`: 9 files, 50 passed.
- WP5 data test: `repository.test.ts` fetchNotifications now expects what the 2026-10-29 capture shows: Test Noti 56 read
  at 10:50:23, and 2 unread with UnreadNotificationsCount 2. `hooks.test.tsx` now expects UnreadNotificationsCount 2.
- MessageList data (WP2): the MessageList TST capture has 2 unread messages, the first two items ("Test Noti 2",
  "test"; `background-blue-lightest` in `MessageList/analysis/dom/default.html`). The WP2 mock follows this, so I
  updated the tests to it:
  - markNotificationOpened opens the first unread id read from the store. The ids are not hard-coded, because
    they changed while WP2 worked (81022/81021, then 81021/81020).
  - TotalChange is 2 in `hooks.test.tsx` and 1 in `repository.test.ts`, where the test before it opened one message and
    the store is shared.
- The 3 OnReady error-path failures in `useNotifications.test.tsx` do not reproduce. The file passes alone (11/11),
  and it passes in the full set (above) with no change to it or to the hook. The flow handler is
  `raiseToFlowHandler` of `platform/feedback/flowErrors`, called from `flowScope.ts:96-99`, and the test mocks that
  module correctly. The most likely cause is a shared file that another agent was changing during the first run
  (`git status` shows changes in `app/src/platform/**` by other packages). This is not proven. No code or test was
  changed for it.
- `npx eslint` on the 24 changed files: clean. I fixed 2 errors:
  - `react-hooks/refs` in `MoreActionSheet.tsx`: the option helper is now a module component `MoreAction`, and the
    handler is passed as a JSX prop.
  - an `any` assignment in `mapper.test.ts`.
- `npx prettier --check`: clean. `npx tsc --noEmit`: no error, in any package.
- `npm run arch`: no new violation.
- `npm run dup`: 36 clones in total. One clone is in `api/notification/mapper.ts:81-91`, in the screen-variable lines
  that were there before WP5 (Filter_Updates); WP5 only removed BadgeNumber and added lines after them.

### Files changed in the follow-up

`components/NotificationsList.tsx` (cursor), `components/MoreActionSheet.tsx` (MoreAction component),
`mocks/fictional/notifications.ts` (4 titles), `api/notification/{repository,hooks,mapper}.test.ts(x)`.

### Questions

Q1 to Q3 above stay open for the user. There are no new questions.
