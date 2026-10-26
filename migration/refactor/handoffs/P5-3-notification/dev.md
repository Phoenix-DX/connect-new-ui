## Result
status: pass
summary: Added `app/src/api/notification` for the 4 notification calls of calls-by-domain.md (types, mapper, repository, keys, 2 query hooks and 2 mutation hooks with no caller, barrel, 3 test files: 20 tests). The 3 owner screens re-export the domain functions and types under their old names, so no caller code changes. Prefetch: the work is in the worktree `wt-notif` (branch `rf/prefetch-P5-3-notification`), as unstaged changes and untracked files on top of the staged P5-3-message diff. Nothing changed in the main tree `app/`.

## Files changed
app/src/api/notification/types.ts (added)
app/src/api/notification/mapper.ts (added)
app/src/api/notification/repository.ts (added)
app/src/api/notification/keys.ts (added)
app/src/api/notification/hooks.ts (added)
app/src/api/notification/index.ts (added)
app/src/api/notification/mapper.test.ts (added)
app/src/api/notification/repository.test.ts (added)
app/src/api/notification/hooks.test.tsx (added)
app/src/screens/Notifications/api.ts (changed: re-exports `fetchNotificationDateRanges as getDateRanges` and `fetchNotifications`)
app/src/screens/Notifications/types.ts (changed: keeps `MessageListItemWire` for mocks.ts; re-exports `Breakpoint`, `DateRange`, `FilterUpdates`, `NotificationItem`, `NotificationsVariables` from the domain)
app/src/screens/MessageDetail/api.ts (changed: re-exports `markNotificationOpened as wrapper_NotificationOpened`; the `callAction` import is removed)
app/src/screens/MessageList/api.ts (changed: `wrapper_MarkAllAsReadNotifications(v)` maps the four block variables to `markAllNotificationsAsRead`; the `callAction` import is removed)

## Commands run
All commands ran in the prefetch worktree, from `wt-notif/app`, with Node 24.
npm run typecheck → exit 0
npx vitest run --maxWorkers=2 src/api/notification → exit 0; 3 files, 20 tests passed
npx vitest run --maxWorkers=2 src/api/notification src/api/message → exit 0; 6 files, 87 tests passed
npx vitest run --maxWorkers=2 src/app/routes.test.ts src/legacy/os/StylesheetHost.test.tsx src/shared/UBTConnect/App_NotificationIcon src/shared/Connect2_LegacyShared/MessageList_NoResults → exit 0; 4 files, 20 tests passed (the 3 screens have no test files)
npx eslint src/api/notification src/screens/Notifications/api.ts src/screens/Notifications/types.ts src/screens/MessageDetail/api.ts src/screens/MessageList/api.ts → exit 0; 0 problems
npx prettier --check (the same files) → exit 0
npm run lint:arch → exit 0; depcruise 0 errors, 184 warnings; eslint 0 errors, 1 warning (OSPopup/usePopupWidget.ts, not in this step). No warning for `src/api/notification` or for the 4 changed screen files. The 4 warnings in `screens/Notifications` are in files that this step does not change (mocks.ts, index.tsx, Notification_ListItem.tsx). The old rule-9 imports of `legacy/os/os-wire` in `Notifications/api.ts` and `Notifications/types.ts` are gone.

## Deviations from the brief
- The brief has no "Read" list. The scope comes from `app/docs/refactor/calls-by-domain.md`, section notification: 3 files, 4 actions (DataActionFetchNotifications, DataActionGetDateRanges, Wrapper_NotificationOpened, Wrapper_MarkAllAsReadNotifications). The layout follows the committed domains `api/note` and `api/update`.
- `api/notification` does not import `api/message`. `markAllNotificationsAsRead` takes its own camelCase inputs (`NotificationReadFilter`). Because of this, `MessageList/api.ts` keeps a small adapter with the old name. The adapter maps the block variables (Filter_MessageTypePublic, Filter_MessageTypePrivate, DeviceHardwareId, SelectedHistorySearch) to these inputs, in the same order as before.
- The wire body of each call is the same as before: the same input names in the same order, and the same null-date mapping. The mapper tests check the key order of the screen variables. The repository tests check the sent bodies.
- The types that only the old `api.ts` used are not re-exported: FetchNotificationsInputsWire, GetDateRangesInputsWire, FetchNotificationsWire, GetDateRangesWire, Updates_DateRangesWire and FetchNotificationsResult. The step P5-3-note did the same.
- `app/src/api/README.md` and `calls-by-domain.md` are not updated: the documenter updates them.
- The step changes no mocks and no fixtures.

## Questions for the user
none
