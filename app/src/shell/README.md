# App shell

Build from `app-shell.spec.md`: layouts, header, bottom bar, feedback messages, shared dialogs, global logic. Shell mocks go in `src/shell/mocks.ts`.
Part A (session, app start, sign-in, PIN, inactivity lock) is described in `docs/guides/shell.md`.

- `localEntities/`: client entities (OutSystems local storage) on IndexedDB, database and stores named as the runtime
  does; `UBTConnect_Notes_MCS` LocalNote actions and aggregates (who reads them offline: header of `localNotes.ts`).
  Tests use `memoryDatabase`. `exceptions.ts`: UserException / system checks and `raiseToFlowHandler` (App_Common handler).
- `startup.ts` exports `synchronizeNumberUnreadMessages()` (Connect2_LegacyShared `SynchronizeNumberUnreadMessages`):
  the app start uses it, and screens call it where the original does (MessageList Mark All as Read, Notifications;
  CR-MessageList-1).
