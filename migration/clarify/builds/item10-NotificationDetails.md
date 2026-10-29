# Item 10 build: NotificationDetails

Route agent, 2026-10-29. Brief: `item10-route-brief.md`. Facts: `../review/item10-new-screens.md` §2. Spec:
`migration/screens/NotificationDetails/route-spec.md` (`route.py spec-done` done; `route.py ready` not run).

## Files

| Kind | File | Change |
|---|---|---|
| code | `app/src/components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx`, `index.ts` | Moved from `pages/Notifications/components/Layout_MainPages_Upgrade.tsx` (deleted). Props only: the back arrow calls the new prop `onBack` (the old file called `useNavigateBack`, which a component cannot import). Same markup. |
| code | `app/src/pages/NotificationDetails/NotificationDetailsPage.tsx`, `inputs.ts` | The new screen (`@origin UBTConnect.App_Notifications.NotificationDetails`). |
| code | `app/src/api/notification/notificationDetail.ts`, `index.ts` (barrel) | `fetchNotificationDetail` (data action, query `useNotificationDetailQuery`, no cache, no retry), `markNotificationAsRead` (server action), `EMPTY_NOTIFICATION_DETAIL`, hand wire type `MessageInstanceWire` (Q1). |
| code | `app/src/pages/Notifications/NotificationsPage.tsx`, `hooks/useNotifications.ts`, `components/NotificationsListBreakpoints.tsx`, `components/NotificationsList.tsx` | Layout import and `onBack={navigateBack}`; entry: the list item `onClick` raises `onNotificationDetail(id, isRead)` → `Handler_NotificationDetail`: `MarkAsRead` when not read (R2), then `navigate('/UBTConnect/NotificationDetails', { MessageInstanceId })` (R4), started with `flow.run` (R6). |
| code | `app/src/app/routes.generated.ts` | One row added by hand in the generator's format (Q2). Default meta: member, lock enforce (role Registered users, `NotificationDetails.mvc.js:577`). |
| mocks | `app/src/mocks/fictional/notifications.ts` (new) | The 19 notifications move here from `pages/Notifications/mocks.ts` as one store collection, plus the captured record (5496739, "Your Host on Wednesday", fictional date). |
| mocks | `app/src/pages/Notifications/mocks.ts` | FetchNotifications reads the collection (`olderread` kept); new stateful `ActionMarkAsRead` sets `IsRead`. |
| mocks | `app/src/pages/NotificationDetails/mocks.ts` | `statefulHandler` for `NotificationDetails/DataActionFetchMessageInstance` (the collection, then the captured record, else the empty record: Q3). |
| tests | `pages/NotificationDetails/NotificationDetails.test.tsx`, `pages/Notifications/NotificationDetailEntry.test.tsx`, `components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.test.tsx` | Written before the page, the entry and the move. |
| docs | `migration/screens/NotificationDetails/route-spec.md` | Lite spec. |

Not done: stories and `__captures__` for the moved layout; the `move-map.csv` row of the layout (refactor docs).

## Tests (written first)

- NotificationDetails: fetch at start (one call, owner `NotificationDetails`, input `MessageInstanceId`), title, summary,
  date `Wed 28/10/2026 09:30 AM`, calendar icon, separator, bottom bar; loading shows the empty record (null date
  `Mon 01/01/1900 00:00 AM`); a list id (910019) opens its own record.
- Entry: unread item → `ActionMarkAsRead` (input `MessageInstanceId`) then `?MessageInstanceId=910019`; read item → no
  MarkAsRead, `?MessageInstanceId=910003`.
- Layout: gray class, slots, back arrow calls `onBack`.

## Parity (`route.py parity … --app http://localhost:5174`, after the last code change)

| Route | default | loading | offline |
|---|---|---|---|
| NotificationDetails | clean | clean | clean |
| Notifications | clean | clean | clean |

All counts 0 (structure, class, attr, text, style, pseudo, layout, position, pixel, call); only the existing exemptions.

## Differences from TST

- None in the captured states. Mock only: the date of the captured record is fictional (masked in the capture,
  `dom/default.html:118`); the Summary is empty as captured.
- Not captured: the click on a Notifications item (the Notifications capture is of 2026-10-14, before TST added it).
  The entry follows the live survey copy (`Notifications.mvc.js:2986-3003`, `NotificationsList.mvc.js:329-341, 822-846`).

## Questions (`migration/screens/NotificationDetails/questions.json`)

| Id | Kind | Question | Options | Recommendation |
|---|---|---|---|---|
| Q1 | decision | The contract has no `NotificationDetails/DataActionFetchMessageInstance` and no `ActionMarkAsRead`. `contract_gen.py` adds the first only: the route copy of `Notifications.mvc.js` (2026-10-14) wins over the live survey copy. The same run removes the 4 `Connect2_MyBookmarks_MUI` operations that React MyBookmarks/BookmarksByGroup still call. Interim: one `@ts-expect-error` per call in `api/notification/notificationDetail.ts` (they fail as unused once the contract has the operations), hand type `MessageInstanceWire`, mocks with `statefulHandler`. | a: orchestrator fixes the source choice (or refreshes the Notifications route sources), regenerates with the MyBookmarks retirement, `npm run gen:api`, removes the 2 directives and the hand type · b: hand-add the 2 operations · c: no MarkAsRead until then | a |
| Q2 | decision | `routes.generated.ts` comes from `migration/survey` (2026-10-13), which has no NotificationDetails; `--update-routes` into the scratchpad gives 83 routes without it. Row added by hand. | a: refresh `migration/survey` with the 5 new screens and re-run `--update-routes` · b: keep the hand row | a |
| Q3 | fact (MCP) | What FetchMessageInstance answers for an unknown or foreign `MessageInstanceId` (empty record or an exception). Interim mock: empty record. | MCP: Connect2_Notification_CS action behind FetchMessageInstance | - |

## Checks (from `app/`)

- `npx tsc --noEmit`: pass. `npx eslint` (16 changed files): pass. `npx prettier --write`: 2 files formatted, all pass.
- `npx vitest run src/pages/NotificationDetails src/pages/Notifications src/components/layout/MainPagesUpgradeLayout src/api/notification src/mocks src/app`: 19 files, 87 tests passed, no "Errors" line.
- `npm run arch`: no dependency violations (144 known ignored).
- Edits to existing files were made with one exact-match script (each old text must occur once; no `sed -i`), to stay in
  the tool budget.

Tool calls: 60.
