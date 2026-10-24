# App shell: session, app start, sign-in, PIN, lock, navigation, back, view cache

`src/platform` holds the app-wide logic of `migration/app-shell.spec.md`. Part A covers the mock session, the app-start
calls, mock sign-in and sign-out, the device PIN and the inactivity lock. Part B (below) covers navigation, back
handling, preload and the view cache. Part C covers feedback messages, shared dialogs and the lock overlay.
The shell depends on no screen. Screens call the APIs below.

## What runs on every page load

`<AppStart />` (mounted in `AppFrame`) runs `startApp()` (`platform/bootstrap/appStartSteps.ts`) once, in the order and with the conditions of TST
(spec section 10; `knowledge/shell-observed.md` U1/U3):

- Signed out: SynchAppContext, Sync_Info_GetMain.
- Signed in: SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation (user-info cache miss),
  GetNumberUnreadMessages, then CacheableMapEntities + CacheableHouseholds together (not awaited).
- Between GetUserInformation and GetNumberUnreadMessages, Connect_SetLoggedContext runs three syncs:
  - SynchBookmarks and SynchBookmarksC2 (UC:1135-1141, local bookmark copies = `LocalEntities_App.LocalBookmark` /
    `.LocalBookmarksC2`). The mock user has no local bookmarks.
  - SyncNotes (UC:1145): the local notes copy becomes the `LocalEntities_App.LocalNotes` of Sync_Info_GetMain.
    A sign-in fetches its own Sync_Info_GetMain first (UC:1121).
- The app start is a list of 8 named steps, `APP_START_STEPS`: `synchAppContext`, `fetchFlags`, `initializeWebComponents`,
  `bottomBarSlider`, `waitForFirstScreen`, `syncInfoMain`, `setLoggedContext` and `cacheableMapData`. Each step checks its
  own condition. `fetchFlags` makes no call in the mock phase: the flags keep the registry defaults. `postLogin.ts` holds the post-login calls
  (`Connect_SetLoggedContext`), which the app start and the sign-in share.
- The mock answers one local note per note of the notes mock collection (`notesCollection`).

The mock user answers GetUserInformation and the CacheControl_UserInfo cache call. The mock user is a fictional person
in Bahia Blanca, Argentina (a recorded locality). Then, from the URL that the user is on:

- The redirects below come from `src/app/RouteGuard.tsx` (one guard, mounted in `AppFrame`). It reads the session status
  (`getSessionStatus()`) and the `meta` of the route in `src/app/routes.ts`. `routes.ts` adds `meta.access`
  (`anonymous` or `member`) and `meta.lock` (`enforce` or `ignore`) to each generated route. A path that shows no screen
  has `NO_ROUTE_META` (anonymous, enforce). `LockHost` gets `ignoresLockScreen` from `AppLockHost` (a prop), because
  `platform/` does not import `app/`.
- Signed out (status `signedOut`) on a protected screen (`meta.access` is `member`): `OutSystems_LastURL` = the path, then `/UBTConnect/Login?In_IsFromInvalidPermissions=True`
  (U1). The check runs again on every later navigation.
  - An anonymous screen is Splash, Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu,
    ContactUsDetails, Locality_Details, MessageList, MessageDetail.
- Signed in, a local PIN, and this tab not unlocked yet (status `locked` at the first check): `/UBTConnect/PINUnlock` (U3),
  once per load. This does not happen on a route with `meta.lock` `ignore`: Login, PINUnlock, PINRegister, Splash.

`<LockHost />` runs the inactivity timer (spec 9, U6) and renders the lock container (part C) unless CommonUI hides it.

## APIs for screens

| Module              | API                                                                                                                                                                       | Original                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `session.ts`        | `useShellState()`, `getShellState()`, `useClientVar(name)`, `getClientVar` / `setClientVar`                                                                               | client variables (spec 9b), session                                   |
| `auth.ts`           | `signIn()` → destination path (through `authProvider()`); `useSignIn()` (navigates, replace); `signOut()`; `signedOutRemotely()`                                          | Login callback (U4), `Connect_Logout`                                 |
| `pin.ts`            | `pinCheck()`, `registerPin(pin)`, `verifyPin(pin)`, `isLocked()`, `lock()`                                                                                                | `PIN_Check`, `Pincode_Register/_Unlock`                               |
| `resume.ts`         | `setResumeLoginLink`, `getResumeLoginLink` (clears), `setAppCallback(url)`, `getColdStartLinkURL()` (`''` on the web, U14)                                                | resume link (U14), `AppManager_SetAppCallback`, `GetColdStartLinkURL` |
| `userInfo.ts`       | `getUserInformation()` (cached 7200 s)                                                                                                                                    | `GetUserInformation_Wrapper`                                          |
| `cachedUserInfo.ts` | `appManager_GetCachedUserInfo()`, `appManager_SetCachedUserInfo(rec)` (client variable `UBT_AppManager.AppManager_UserExtended`; the mock sign-in fills CountryCode only) | `AppManager_GetCachedUserInfo` / `_SetCachedUserInfo`                 |
| `memoryCache.ts`    | Deleted in P5-4. See `api/client/cache.ts`: `getCacheableObject`, `putCacheableObject`, `clearMemoryCache`; the entries are in `api/<domain>/keys.ts`                     | MemoryClientCache, `CacheControl_*` blocks                            |
| `mockUser.ts`       | `mockUserInformation()`, `mockDirectoryUser()`, `MOCK_USER_ID`                                                                                                            | fictional user (U7)                                                   |
| `paths.ts`          | `PATHS`, `screenOf(pathname)`                                                                                                                                             | screen URLs                                                           |

The PIN registration flow is in two hooks of `src/platform/session/`: `usePinCodeRegister` (first and second entry, rules,
`registerPin`) and `usePinRegisterContent` (name read, success routes, error messages). PINRegister and PINChange call
`usePinRegisterContent` and pass the result as props to the blocks `PinRegisterContent` and `PinCodeRegister`.
`PinCode` (in `src/components/auth/`) is props-only: the PreventBackNavigation block comes in `renderPreventBackNavigation`
and the event before SetPin in `onBeforeSetPin`, which the hooks `usePinCodeRegister` and `usePinCodeUnlock` supply.

Two more hooks of `src/platform/session/` serve props-only blocks of `src/components/`. `useNotificationIcon` (client
variables, flag C2NewNotifications, navigation) serves `NotificationIcon`. `useEmbeddedFeed(feedItemId)` (feed flags,
B2C tenant, feed configuration, download, share to Connect) serves `EmbeddedFeed`. The pages spread the result of the hook
into the block.

The PIN unlock flow is in two hooks of `src/platform/session/`: `usePinUnlockContent` (unlock result, policies, Forgot PIN,
error messages) and `usePinCodeUnlock` (lock state, `setPin`). `PinUnlockContentContainer` in
`src/platform/feedback/dialogs/` runs both hooks and renders the props-only blocks `PinUnlockContent`, `PinUnlockMobile`
and `PinCodeUnlock`. The lock dialog (`BlockPinUnlock`) and PINChange render the container. The PINUnlock page has its own
hook, `usePINUnlock`. The PINChange page has its own hook, `usePINChange` (the unlock state and the back link).

- Without a local PIN, `signIn()` goes to PINRegister. Otherwise it goes to the resume link, the sign-in callback that
  the gate keeps, or HomeFeed.
- `verifyPin` answers the original event texts (`Pin does not match`, `User not found`…). The screen maps them to its
  messages.
- Mock user toggles: `policies` = pending policies (`HasPoliciesToAccept`), `expired` = `SubscriptionActive` false,
  `householder` = `isHouseholder` true.
- The session status is in `src/platform/session/machine.ts` (plan v2 §3.2). The status lives in memory, so each page
  load starts at `starting`. The statuses are `starting`, `signedOut`, `signingIn`, `needPinRegister`, `locked`,
  `unlocked` and `policiesPending`. The pure `transition(state, event)` changes the status, `sendSessionEvent` applies
  an event, and `getSessionStatus` reads it. Each row has a test in `machine.test.ts`.
  - Events and senders: `appStartDone` (`session.ts markAppReady`, called by `runAppStart` in `appStartSteps.ts`), `signIn` and
    `postLoginDone` (`auth.ts signIn`), `pinRegistered` (`pin.ts registerPin`), `inactivityTimeout` (`pin.ts lock`,
    which LockHost calls at the timeout), `pinVerified` (`pin.ts verifyPin`), `signOut` (`auth.ts signOut`).
  - Differences from §3.2: `signOut` also applies from `signingIn` (a 401 during the post-login calls). The event
    `userChanged` exists only for the mock: when the stored session user changes (`setSignedInUser`, another tab), the
    status follows. No event leads to `policiesPending` yet; the pending policies stay in
    `UBTConnect.App_Policies_HasPolicyToAccept`.
  - The selectors keep their names and values. `isLocked()` and `hasUnlocked()` still read `PIN_IsLocked` and
    `PIN_HasUnlocked`, because the status `locked` also covers the app-start lock, where no lock overlay shows today.
    `isSignedIn()` and `currentUserId()` read the user of the status, and the stored session while the status is
    `starting` or `signingIn`.
- Client variable names are `<Module>.<Variable>`, with the compiled defaults of `migration/shell/client-variables.md`.
- The 11 server settings (`PIN_Use`, `PIN_IsInactivityEnabled`, and so on) are in the typed store `src/platform/settings`
  (`getSetting`, `setSettings`, `useSetting`). `synchAppContext` writes the store. The adapter
  `src/legacy/os/clientVarNames.ts` maps the OutSystems names to the settings, so `getClientVar`, `setClientVar` and
  `useClientVar` still work for them until their page moves.

## Storage (decision U5)

Mock values only. Keys start with `ubtc-mock:`.

- localStorage: session (`session`), hashed PIN with salt (`pin`), client variables (`cv:<name>`),
  the 11 server settings as one object (`settings`).
- sessionStorage: `PIN_HasUnlocked` (a new tab starts locked, a reload keeps the unlock) and remembered test switches
  (`param:<name>`).
- A logout resets every client variable except `*_IsPersistent`, and the settings.

Client entities (local storage entities, `src/platform/storage/localEntities`) use IndexedDB, as TST runs in a browser without
WebSQL (its runtime record holds the IndexedDB database `<environment key>-Users`). However, the served env params say
IndexedDBOffline = false, i.e. WebSQL. This is an open question (evidence in the header of `localEntities/database.ts`).
Client entities store DateTimes as DateTimeRevamp = false does: UTC `yyyy-MM-dd HH:mm:ss`, the null date
`1900-01-01 00:00:00`.

| Adapter                                    | Entities (table)                                                                                                                          | Module actions                                                                                                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localNotes.ts`                            | UBTConnect_Notes_MCS.LocalNote                                                                                                            | CreateOrUpdate_LocalNote, Delete_LocalNoteBy*, Get_LocalNoteByNoteId, year/category lookups, SyncNotes                                                                                               |
| `localBookmarks.ts`                        | UBTConnect_Bookmarks_MCS.LocalBookmark (`OSUSR_HCR_LOCALBOOKMARK`), Connect2_LegacyShared.LocalBookmark (`OSUSR_B3N_LOCALBOOKMARK`)       | GetLocalBookmarkByObjectId, GetLocalBookmarkByBookmarkId, Create_LocalBookmark, Delete_LocalBookmarkBy(Bookmark)Id, SynchBookmarksC2; legacy Get_LocalBookmarkByObjectId, SynchBookmarks (CR-W4A-1)  |
| `recentSearch.ts`, `localSearchHistory.ts` | ConnectSearch recent terms / clicked results, local search history                                                                        | see the files                                                                                                                                                                                        |
| `orbitStaticEntities.ts`                   | Connect2_OrbitMobile_MUI.LocalSurveyStatus (`OSUSR_HQ9_LOCALSURVEYSTATUS`), LocalOrbitMilestoneType (`OSUSR_HQ9_LOCALORBITMILESTONETYPE`) | SyncAllOrbitStaticEntities, SyncOrbitSurveyStatus, SyncOrbitMilestoneTypes, GetLocalOrbitMilestoneTypeById (Entity.get), aggregates by JSON_Name / Id; in-memory mirror for first-render reads (F12) |

Local entities in practice:

- Public API: `src/platform/storage/localEntities/index.ts`. Blocks and screens call the module actions that it exports
  (`createOrUpdate_LocalNote`, `saveRecentSearchTerm`, `create_LocalBookmark`, …). Nothing outside `src/platform` touches
  browser storage.
- One adapter per entity group: notes (`localNotes.ts`), recent search terms and clicked results (`recentSearch.ts`),
  local search history (`localSearchHistory.ts`), bookmarks (`localBookmarks.ts`), Orbit static entities
  (`orbitStaticEntities.ts`).
- **Orbit static entities (F12, CR-HelpersDetail-1).** They live in IndexedDB like the others, so rows of earlier app
  starts survive a page load whose Sync_Info_GetMain fails or never answers.
  - Blocks read them synchronously at first render, so the adapter keeps an in-memory mirror.
  - `loadOrbitStaticEntities()` fills the mirror at app start (`runAppStart` in `appStartSteps.ts`).
  - Each sync writes the mirror at once and reads the table back after its transaction.
  - `useOrbitStaticEntitiesVersion()` re-renders readers after every change.
  - `getLocalOrbitMilestoneTypeById` raises `DataBaseException` for a missing id, as Entity.get does.
  - The `unlocked` mock session seeds the rows like an earlier app start (`testSession.ts`).
- `entities.ts` holds the entity descriptions, record (de)serialisation and `entityService` (insert, upsert, update,
  delete, `replaceAll`). `database.ts` holds the IndexedDB layer: one database (`DATABASE_NAME`), one object store per
  table, one index per column.
- Each adapter has a `set<...>Database` function, so tests inject an in-memory database.
- **Bookmark sync (ADR-8).** `SynchBookmarks` and `SynchBookmarksC2` run at app start.
  - The original deletes all rows and then re-creates them in two transactions. A read in between sees no bookmark
    (known bug B5, see [known original bugs](../known-original-bugs.md)).
  - The React app does it in one transaction (`entityService.replaceAll`, used in `localBookmarks.ts`), so a read sees
    the old or the new rows, never none.
  - Keep it that way (decision: [ADR-8](../reference/stack.md)).

UBTConnect ToggleBookmarkItem_C2 (`src/shared/UBTConnect/lib/actions.ts`) uses the C2 bookmark actions. Its two server
calls (ServiceAPIAddBookmark2, ServiceAPIDeleteBookmarkByBookmarkId2) are not in the API contract yet
(`bookmarkServerActions` null, CR-W4A-1).

Device: `UBT_AppManager.DeviceInfo_IsNative` (Boolean, type default; UBT_AppManager.clientVariables.js:242-247) stays
false in the browser (the device context of the React app is never native). Read it with `appManager_GetIsNative()`
(`deviceContext.ts`, AppManager_GetIsNative).

## URL parameters for testing

| Parameter                                   | Effect                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------- |
| `?mocksession=unlocked\|out\|nopin\|locked` | start state of the tab (see Test session)                                       |
| `?mockuser=policies,expired,householder`    | mock user toggles (all off by default; `?mockuser=` turns them off again)       |
| `?locksecs=<seconds>`                       | inactivity timeout instead of 1200 s (the check still runs every 10 s)          |
| `?mock=…`, `?latency=…`                     | mock scenario and latency of every call ([API and mock data](api-and-mocks.md)) |

The tab remembers all of them.

## Mock data

`src/platform/bootstrap/mocks.ts`:

- SynchAppContext is fictional, with the TST settings of U2 (PIN on, 1200 s, overlay, no enforce on ready, device check
  on ready).
- AfterInitialize, GetNumberUnreadMessages, CacheControl_Policies, Get_RuntimeVersion and UpdateItems_UnreadCount are
  recorded.
- Sync_Info_GetMain, GetUserInformation and the map calls are fictional.
- CacheControl_UserInfo GetCacheInfo is recorded, with `Directory_UserCurrent` from the mock user.

## Tests

`src/platform/**/*.test.ts(x)` cover: call order signed in and out, redirects, sign-in branches, sign-out, PIN, lock timer,
mocks. `testSupport.ts` gives `freshPage()`, `reloadPage({ newTab })`, `calledActions()`, `recordBodies(path)`.

## Test session

- `?mocksession=unlocked` starts the page signed in as the mock user, with the tab unlocked, as the TST captures were
  taken. The local PIN is `0223` (`TEST_PIN` in `src/platform/session/testSession.ts`; user, 2026-10-16).
- `?mocksession=out` starts signed out.
- Parity runs use these parameters (`cloneQuery` in `migration/capture-plan.json`), also for Login and the PIN screens.
  The user decided on 2026-10-14 that review links and parity runs use them until the Login and PIN screens exist. These
  screens are built now (`migration/board.md`), and the parity runs still use the parameters. This end date is outdated.
- A parameter is applied once per tab and value. A reload of the same URL keeps what the tab did since, as a
  reload of the original keeps its lock. Examples: a PIN lock, a sign-out.
- A device set up with an older test PIN gets `0223` on its next mock session.

Review markers: the `<NotCaptured>` frames (pink, "Not captured: …") are off by default (user, 2026-10-17).

- On the dev server, `?review=1` shows them for the tab and `?review=0` hides them again.
- Tests and Storybook turn them on.
- Built apps (demo PWA, production) never show them and render the content without the frame
  (`src/legacy/os/reviewMarkers.ts`).

## Part B: navigation, back handling, preload, view cache

`src/platform/navigation` (import from `src/platform/navigation`).

- `<NavigationHost />` (AppFrame) owns the only blocker of the router.
- `<ScreenTransitionGroup />` (AppFrame) renders the screen containers and their transitions.
- `<ScreenFrame>` (router.tsx) wraps every screen.
- Do not call `useBlocker` in a screen.

| API                                                                                                   | Original (spec 9 "Back navigation", "View cache & preload")                                                |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `useOsNavigate()(path, params?, { replace?, transition? })`, `screenUrl(path, p)`                     | screen navigation with input names (P-PARAMS); True/False, ids as strings; `transition` below              |
| `replaceOnUpcomingNavigation()`, `resetReplaceOnUpcomingNavigation()`                                 | NavigationHandler actions of the same name (Login callback, Policy_Checker)                                |
| `allowUpcomingNavigation()`                                                                           | NavigationHandler `AllowUpcomingNavigation`: the next navigation skips the back handlers                   |
| `useScreenController_NavigateToPage()(url, replace)` (`src/shared/UBTJavaScriptUtils/lib/actions.ts`) | UBTJavaScriptUtils `ScreenController_NavigateToPage`: same-origin href or app path through `useOsNavigate` |
| `useNavigateBack()(transition?)`                                                                      | history back: runs the back queue like the device back button; `navigateBack(transition)`                  |
| `TransitionAnimation` (`None`, `Default`, `Fade`, `SlideFromLeft`, `SlideFromRight`, …)               | `OS.Transitions.TransitionAnimation`: pass what the compiled navigation passes                             |
| `setPreloadObject(obj)`, `usePreloadObject()` / `getPreloadObject()`                                  | `SetPreloadObject` / `GetPreloadObject` (`unknown`: narrow it)                                             |
| `useBackHandler(priority, handler, enabled?)`, `BACK_PRIORITY`                                        | `BackNavigationHandler` block in the `BeforeBackNavigation` queue                                          |
| `usePreventBackNavigation(enabled, onPrevented?)`                                                     | `PreventBackNavigation` block (lock-screen priority)                                                       |
| `<DialogExitConfirmation id="$b11" />`, `useExitConfirmation(force)`                                  | `Dialog_ExitConfirmation` of HomeFeed and Login (Force=True)                                               |
| `useWasRestoredFromCache()`, `useViewState(name, initial)`                                            | `wasCurrentViewRestoredFromCache`, screen variables kept by the cache                                      |

- **Screen transitions (F18, CR-F18-1).** `ScreenTransitionGroup` ports the TransitionGroup of the runtime Root
  (`migration/runtime-sources/OutSystemsReactView.js` Root render; `screenTransition.ts` cites each rule):
  - One `.screen-container` per history entry, keyed by `location.key`.
    - During a transition, the new container comes first and the container that leaves comes after it.
    - Both stay in the document until the container that leaves has left. Its DOM, state and own location are kept.
      It does not see the new URL.
    - `active-screen` is on the current container only.
  - Transition name:
    - A navigation stores the name in the history state (`{ transition }`).
    - `useOsNavigate` defaults to `Default` = `slide-from-right` (app definition).
    - Pass `transition` only where the compiled code passes another animation
      (`OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.X)`).
    - A back (POP) reverses the transition that entered the screen that the user leaves (`slide-from-right` ↔
      `slide-from-left`, bottom ↔ top, `fade`). `useNavigateBack()(TransitionAnimation.X)` overrides it.
    - No transition (`None`) still runs the sequence with `-enter` classes and timeout 0.
  - Classes (CSSTransition):
    - Enter: `<name>-enter` → reflow, `<name>-enter-active` → after the duration `<name>-enter-done`.
    - Leave: `active-screen` and the enter classes removed, `<name>-leave` → `<name>-leave-active` →
      `<name>-leave-done`, then removed.
    - Duration = `--dx-screen-transition-duration` (300ms in UBTConnectLibrary.css) or 300 / 0 ms.
    - The first screen of the page gets no class and no transition.
    - The CSS is the CSS of the original (public/UBTConnect/css).
  - Events (NavigationHandler TransitionEventsJS, `transitionEvents.ts`):
    - `dx-navigation-transition-start` `{ from: leaving container, to: entering container, duration }` fires right after
      `-enter-active`.
    - `dx-navigation-transition-end` `{ from: leaving, to: entering, duration }` fires before the leave classes become
      `-leave-done`.
    - The first screen raises start + end `{ from: null, to: #transitionContainer.firstChild, duration: 0 }` from
      `ScreenFrame`.
    - The bottom-bar slider and its `dx-bottom-bar-slider-reverse-direction` read these events.
  - A new screen loads its code before its transition starts (`src/app/screens.ts` `prepareScreen`, as the ScreenLoader
    of the runtime). The entering container is never empty.
  - `StylesheetHost` adds the stylesheets of the new screen at once and removes the old ones after the transition
    (CSSHelper).
  - Tests: `screenTransition.test.ts`, `ScreenTransitionGroup.test.tsx`. Mid-transition headless check: sample the
    classes at ~50 / ~150 ms after a bottom-bar click.
- **Back queue.** Priorities: lock screen 100000, modal 10000, drawer 1000, exit dialog −1, CommonUI −10000.
  - On a back navigation (browser back, `useNavigateBack`), handlers run from the highest priority. Handlers of the same
    priority run in order of mounting. They run until one calls `event.preventDefault()`.
  - A prevented back keeps the screen and URL.
  - `event.resume()` goes back later without the handlers.
  - `event.isInitialLocation()` is true when the back reaches the first entry of the tab.
- **Leave App (U15).**
  - Back on HomeFeed/Login opens the dialog (portal to `body`, classes copied as CopyClassesAcrossPortal does).
  - Back again or No closes the dialog.
  - Yes closes the dialog and calls `window.close()` (Cordova `navigator.app.exitApp()` when present).
  - Mounting the dialog empties the view cache (U19).
- **Preload.** One object for the next screen only: `ScreenFrame` deletes it after the first effects of that screen.
  Read it with `usePreloadObject()` (first render) or `getPreloadObject()` in a mount effect.
- **View cache (U19, P-BACK).**
  - The cache holds one saved view per history entry (`location.key`). The blocker writes it just before the entry is
    left (the old screen is still in the document).
  - A saved view holds:
    - the scroll offsets of every scrolled element under `.active-screen` (by DOM path) and of the window
    - a TanStack `dehydrate` of the successful queries that have an observer
    - the `useViewState` values
  - A back navigation to a saved entry runs `hydrate` on those queries before the router renders. The screen shows its
    data at once (no loading state) and refetches as its query options say (stale data refetches on mount).
  - `ScreenFrame` puts the scroll back in a layout effect.
  - Pushing drops the forward entries. Replacing drops the replaced one. HomeFeed and Login clear everything.
  - Screens only need stable query keys, `useViewState` for variables that the original keeps, and
    `useWasRestoredFromCache()` where the original tests it.

- **Navigation guard (`dx-before-navigation`).** `src/platform/navigation/navigationGate.ts` (`shouldBlockNavigation`) runs
  as the blocker of the router before every navigation. Unless `allowUpcomingNavigation()` was called, it does two
  things:
  1. For a back navigation, it runs the back queue.
  2. It dispatches the cancelable window event `dx-before-navigation` (`detail.location`, `detail.replace`,
     `detail.resume()`).
  - A listener that calls `preventNavigation(event)` stops the navigation (the URL is restored).
  - When nothing prevents it, the gate saves the view that it leaves, restores the target view and dispatches
    `dx-navigation`.
  - `resumeNavigation(event)` continues a prevented navigation later (`detail.resume()`: a back navigation goes back,
    a forward one navigates to the saved location).
  - Both actions live in `src/shared/NavigationHandler/lib/actions.ts`, together with `wasNavigationPrevented`.
  - How a screen asks the user: it renders `Dialog_Navigation` (`src/components/ui/Dialog/NavigationDialog.tsx`), which wraps
    `NavigationConfirmationDialog` (`src/shared/NavigationHandler/NavigationConfirmationDialog`).
    - The block raises the event to the caller (`onEventOnBackNavigation`).
    - The caller calls `preventNavigation`. The dialog opens and keeps the event.
    - Yes closes the dialog and calls `resumeNavigation`. No closes the dialog, forgets the event and dispatches
      `dx-navigation-cancelled-by-user`.
    - A back navigation while the dialog is open is prevented and runs No.
    - ContactUsDetails and Profile use it to confirm discarding changes.
  - Tests: `src/platform/navigation/navigationGate.test.tsx`.

Tests: `src/platform/navigation/*.test.tsx` (`testRouter.tsx` renders routes inside the same frame on a memory router).

## Part C: feedback messages, shared dialogs, lock overlay

`src/platform/feedback` and `src/platform/feedback/dialogs`. `<CommonUiHost />` (AppFrame) mounts the message container and the
online/offline listener. Per screen (remounted on each navigation), it also mounts Access Restricted and the CommonUI
back handler. It is a stand-in until the layouts render CommonUI in `Placeholder_CommonUI_Inside_Layout`.

| API                                                                                                                    | Original                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `feedbackMessageAutoClose({ title?, message, messageType?, encodedHtml?, extendedClass?, delayMs?, useDebounce? })`    | `UBTJavaScriptUtils.FeedbackMessage_AutoClose` (U9)                                 |
| `showFeedbackMessage(message, type, encodedHtml?, extraClasses?, closeOnClick?)`                                       | platform `FeedbackMessageShow` (type 0-3: info…error)                               |
| `showExceptionMessage(message, forceLogout)`, `showCommunicationExceptionMessage()`                                    | UBTConnect actions of the same name (U10)                                           |
| `useFeedback()`                                                                                                        | the four functions above, for components                                            |
| `confirmAction(dialogId)` → `Promise<boolean>`, `<ActionConfirmationDialog>`                                           | NavigationHandler `ConfirmAction`, `ActionConfirmationDialog`                       |
| `showUpgradePopUp()`, `navigateToUpgrade()`, `<DialogAccessRestrictedAction>`                                          | `App_Subscription_ShowUpgradePopUp` / `_NavigateToUpgrade`                          |
| `useCommonUiBackHandler()`, `<BlockPinUnlock inIsCommonBlock inForceVisible onUnlock placeholderCommonUIInsideLayout>` | CommonUI back handling, `App_PIN.Block_PINUnlock`                                   |
| `<PinUnlockContentContainer …>` (dialogs barrel)                                                                       | runs `usePinUnlockContent` and `usePinCodeUnlock` for the lock dialog and PINChange |

- **Messages.**
  - One message at a time shows in `#feedbackMessageContainer`. The first message creates the container before
    `#reactContainer`.
  - Auto-close is CSS only (5 s slide on `.phone`). A click closes the message. There is no JS timer.
  - The auto-close class appears twice, as captured.
  - A title makes the message HTML.
  - Debounce: 5 s since the last shown or scheduled message.
  - Bugs B1/B2 of the delayed path are reproduced. A type outside 0-3 (B1: `DelayMs - 1`) renders `NotCaptured`.
- **Exceptions.**
  - `showExceptionMessage` maps the server texts of the compiled action (timeouts and failed requests → communication
    message).
  - `forceLogout` → `signedOutRemotely()` (same end state as `signOut()`), then a full page load of `\UBTConnect\Login`.
  - The app start does not toast yet: App_Common toasts a `ScreenController_RaiseError` only if a plain `Error` is not
    "system" (open).
  - Server calls raise the OutSystems exceptions of `src/legacy/os/os-exceptions.ts` (see `api-and-mocks.md`).
  - A ported Handle Error tests them with `src/legacy/os/exceptions.ts`: `isUserException(e[, '<Module>.<Name>'])`,
    `isCommunicationException(e)`, `isInstanceOf(e, SecurityException)`, AllExceptions = `!isSystemException(e)`.
  - An unhandled exception goes to `raiseToFlowHandler(e)`, in the order of App_Common:
    - communication message for a `CommunicationException`;
    - `SecurityException` (and its subtypes `InvalidLoginException`, `NotRegisteredException`): signed in →
      `showExceptionMessage(message, true)`, that is, the forced-logout path above; anonymous → `osNavigateTo` to
      `/UBTConnect/Login?In_IsFromInvalidPermissions=True` after `setAppCallbackCurrentLocation()`;
    - every other error: `showExceptionMessage(message, false)`.
  - Try it by hand with `?mock=security` on ContactUsDetails (signed in and signed out).
- **Network (U11).**
  - `online`/`offline` events and `navigator.onLine` at start set `App_NetworkStatus_IsOnline_IsPersistent`. The variable
    only picks the communication text.
  - NetworkDetection is ported 1:1 (PWA-2, `src/platform/feedback/networkDetection.ts`). It pings the TST file
    `status/network-ping.txt` (served at its TST path in every build, never cached). It runs the online / offline
    callbacks on a transition. See `pwa.md`.
- **Dialogs.**
  - Closed markup is as captured. Open markup comes from the compiled view, in a `body` portal with the classes copied
    as `CopyClassesAcrossPortal` does.
  - Back while open = No (priority 100000).
  - Library blocks inside Access Restricted (CustomText, CustomContainer, Icon) are `NotCaptured` until the foundation
    queue builds them.
- **Lock.** The `.ubt-lock-screen` container stays mounted (CSS hides it). When locked, `.pincode-unlock` holds
  `NotCaptured "Block_PINUnlock content"`, and back is prevented at 100000.
- **CommonUI back (−10000).** `IsNavigateToHomeOnBack` (read once per screen, kept by the view cache):
  - Back goes to HomeFeed.
  - Otherwise, a back that reaches the first entry is prevented, and HomeFeed opens after 0 ms.

### Inactivity timer and screens without CommonUI (CR-Services-1)

`src/platform/session/inactivity.ts` ports the session-inactivity timer of the AppManager. `LockHost.tsx` plays the part of
`InactivityTimer` (inside `Pincode_Unlock` ← `Block_PINUnlock` ← CommonUI_InsideLayout / PINUnlock).

| API                                                                                                | Original                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pinSessionInactivityStart()`                                                                      | `PIN_SessionInactivity_Start` (AM:7894-7930): only with `PIN_SessionInactivity_Use`; destroys the running timer and starts a new one (one app-wide timer)                                                                                |
| `registerInactivityTimeoutHandler(handler)` → remove function                                      | `InactivityTimer` OnInitialize registers the `PIN_OnTimeout` handler (p:UBT_AppManager.PIN.InactivityTimer.mvc.js:186-197); its OnDestroy only removes it (:245-262)                                                                     |
| `onInactivityTimeout()`                                                                            | `PIN_SessionInactivty_OnTimeout` (AM:8040-8075): keeps the current path as callback; with `PIN_SessionInactivity_Navigate` (false on TST) a full page load of PINUnlock, otherwise dispatches `PIN_OnTimeout` to the registered handlers |
| `pinSessionInactivityDestroy()`, `startInactivityTimer(seconds, onTimeout)`, `inactivitySeconds()` | `PIN_SessionInactivity_Destroy`, `SetupTimersJS` (AM:7955-8036)                                                                                                                                                                          |

- **Who starts it.** Only `LockHost` (mounted by the shell while the screen has CommonUI) starts it. It registers a
  handler that calls `lock()`, then calls `pinSessionInactivityStart()`. Screens never call these functions.
- **Screens without CommonUI.** A screen whose layout has an empty `Placeholder_CommonUI_Inside_Layout` calls
  `useNoCommonUi()` from `src/platform/feedback/dialogs` (Services: Services.mvc.js:1207; Splash: App_Common.LayoutBlank, called by `SplashPage` since P6-G1-B).
  - The shell then mounts no Access Restricted dialog and no lock layer (`useIsCommonUiAbsent`).
  - `LockHost` skips its start in that commit (`isCommonUiAbsentNow`).
  - As in the original, the timer started on the previous screen keeps running.
  - On timeout, `PIN_OnTimeout` has no handler, so nothing locks there.
  - The next CommonUI screen starts a new timer.
- **Not affected.** The app-start PIN check (U3) is not CommonUI and still applies on these screens.
- **Known gap.** On a direct load of such a screen, the app-level host can start the timer once while the lazy screen
  chunk loads. No lock results. At timeout, only the app callback is set.

Tests: `src/platform/session/inactivity.test.ts`, `src/platform/navigation/LockHost.test.tsx`.

Tests: `src/platform/feedback/*.test.tsx`, `src/platform/feedback/dialogs/*.test.tsx`.

## Identity provider (`platform/auth`)

- `AuthProvider` (`auth/provider.ts`) is the interface of the identity provider. `authProvider()` (`auth/authProvider.ts`)
  returns `mockAuth` when `MOCKS_BUILT` is true, and `null` otherwise. `mockAuth` keeps the stored session and the cached
  user record of the mock user. `auth.ts signIn()` calls `provider.signIn` before the `signIn` event, so a provider
  failure leaves the status at `signedOut`. `signOut()` calls `provider.signOut()` before the session ends.
- A production build has no identity provider (`bffAuth` is not part of the refactor). `signIn()` then rejects with
  "Sign-in is not available: no identity provider is configured.", and Login shows it. Dev, mock and demo builds sign in
  as before.
- `mockUser.ts` stays in `platform/session` (more than 40 importers); a later move step moves it.
