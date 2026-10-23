# App shell

Build from `app-shell.spec.md`: layouts, header, bottom bar, feedback messages, shared dialogs, global logic. Shell mocks go in `src/platform/bootstrap/mocks.ts`.
Part A (session, app start, sign-in, PIN, inactivity lock) is described in `docs/guides/shell.md`.

- `localEntities/`: client entities (OutSystems local storage) on IndexedDB, database and stores named as the runtime
  does; `UBTConnect_Notes_MCS` LocalNote actions and aggregates (who reads them offline: header of `localNotes.ts`).
  Tests use `memoryDatabase`. `exceptions.ts`: UserException / system checks and `raiseToFlowHandler` (App_Common handler).
- `auth/`: the `AuthProvider` interface, `mockAuth` (behind `MOCKS_BUILT`) and `authProvider()`; `null` in a production build.
- `session/auth.ts`: `signOut()` and `signedOutRemotely()` (the single entry point for "the server ended the session") share one Connect_Logout body.
  The only caller of `signedOutRemotely()` is the forced-logout branch of `feedback/exceptionMessages.ts`. The 401 and SecurityException triggers wait for the BFF.
- `bootstrap/appStartSteps.ts`: the app start as 8 named steps (`fetchFlags` comes after `synchAppContext`); `bootstrap/postLogin.ts`: the post-login calls.
- `flags/`: the typed registry of 21 flags, `resolveFlags` (default < server < override), the store, `useFlag` and `flagValue`.
  `FLAG_OVERRIDES_BUILT` gates `?ff=` and `FlagPanel`. `flags.ts` is the adapter (`useFlagOn`, `isOn`, `setFlag`) for the old readers.
  OutSystems names: `legacy/os/flagNames.ts`. The routes with `meta.flagRedirect` redirect in `useOsNavigate`, not on a direct URL.
- `navigation/flowState.ts`: `useFlowState`, the state and the OnReady and OnParametersChanged flows of a flow hook (guide: `docs/guides/page-template.md`). It builds on `useViewState` (view cache) in `navigation/hooks.ts`.
- `startup.ts` exports `synchronizeNumberUnreadMessages()` (Connect2_LegacyShared `SynchronizeNumberUnreadMessages`):
  the app start uses it, and screens call it where the original does (MessageList Mark All as Read, Notifications;
  CR-MessageList-1).
