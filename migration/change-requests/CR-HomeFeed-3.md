# CR-HomeFeed-3: shared bottom bar and bell — parity differences on HomeFeed

- Status: applied
- Raised by: HomeFeed, 2026-10-15
- Block: `App_Common.BottomBarMenu` / `BottomBarContent` / `Navigation.BottomBarItem` (`app/src/shared/UBTConnect/BottomBarMenu`,
  `BottomBarContent`, `app/src/shared/osui/BottomBarItem`), `App_Common_Blocks.App_IconBadge` / `App_NotificationRefresh`
  (`app/src/shared/UBTConnect/App_IconBadge`, `App_NotificationRefresh`)
- Other routes using it (catalog/blocks.md): every screen with the home layout bottom bar and bell
- Related question: none

## Evidence (route.py parity HomeFeed, 2026-10-15; reports `migration/screens/HomeFeed/parity/<state>.json`)
- [structure] `div#transitionContainer > div.dx-bottom-bar-slider.dx-bottom-bar-slider-appear`: missing in build (all
  states; captured `dom/default.html:385-387` with `--dx-bottom-bar-items: 5; --dx-bottom-bar-active-item: 0`).
- [structure] bottom bar item 3 (`b12-l1-67_2-$b2`, Updates with App_IconBadge): captured as a `div` directly in the list,
  the build wraps it in `a`; [layout]/[position] item widths 60/68/…/60 px captured vs 78 px each in the build.
- [structure] loading / offline: bell `b3-b1-b1-Placeholder_LoadingSection > a` missing in build (an Icon block instead);
  [class] offline: bell SkeletonSection has `ubt-skeleton-section` in the build, not in the capture.
- [call] default: extra `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` ×2 in the build (not called in the
  capture: the TST session had a recent `Directory_Updates_UnreadCount_LastCheck`).
- HomeFeed passes these blocks the captured inputs (`BottomBarMenu id="$b12" activeItem=Home isRootPage`,
  `App_NotificationIcon id="$b3"`), as the Layout_HomePage story V1 does.

## Expected change
The shared blocks render HomeFeed's captured markup in the default, loading and offline states (slider element, item
wrappers and widths, bell link in the skeleton), and the unread-count refresh follows the original rule for a session
whose last check is recent (or the mock session seeds the last check as the stories do).

## Workaround in the route until applied
None needed in the route (it renders the shared blocks with the captured inputs); the differences stay in its parity
report.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: (1) slider: `onApplicationReady_BottomBarSlider` (UBTConnectLibrary.controller.js:7800-7889, Initialize JS as is)
  in `UBTConnectLibrary/lib/actions.ts`, called by `shell/startup.ts` after AppManager_Mobile_OnAppReady as in
  UBTConnect.controller.js:15318-15326. (2) unread-count rule unchanged (already 1:1: call only when
  DiffMinutes(Directory_Updates_UnreadCount_LastCheck, CurrDateTime) >= CheckFrequency_Minut (5) or ForceRefresh,
  UC:2458-2470); BottomBarMenu OnReady now runs once per instance (StrictMode doubled the call); `?mocksession=unlocked`
  seeds the client variables the captured tab kept (recorded unread counts, last check now) in `shell/testSession.ts`.
  (3) bell: the loading/offline `> a` comes from the persisted UnreadNotificationsNumber (LocalNotifications default -1,
  App_NotificationIcon.mvc.js:12-13, OnReady :281-286): fixed by the seeding, block unchanged. (4) item wrappers/widths:
  NOT changed. The live original nests the Updates link inside item link 3 (capture text; the slider counted 5
  `.list > a`); parity loads the capture through the HTML parser, which splits nested `<a>` and leaves item 3's div outside
  any `.list > a` (`flex: 1; max-width: 150px`, Connect2_LegacyShared.UBTConnect.css), hence 60/68 px. No class, CSS variable
  or JS (OSUI SetBottomBarActiveElement, OutSystemsUI.js:17638-17650, adds only `active`) sets widths. BottomBarMenu v2 test
  now compares the browser's parse of the rendered tree and asserts the live nesting.
  Left: slider in the build (app start ends before the first screen renders; NavigationHandler transition events not
  ported), offline bell `ubt-skeleton-section` (app start in an aborted-calls reload), nested-`<a>` diffs (parity method).
- Follow-up (2026-10-15): (5) NavigationHandler TransitionEventsJS (NavigationHandler.controller.js:1288-1490) ported to
  `shell/navigation/transitionEvents.ts`, raised by ScreenFrame: first screen once per page (start + end, `{from: null, to:
  #transitionContainer.firstChild, duration: 0}`, :1461-1484), then start/end per navigation (duration =
  `--dx-screen-transition-duration` or the Root timeout, OutSystemsReactView.js Root `timeout: animate ? 300 : 0`; one reused
  screen container = from/to). (6) offline bell: an HTTP status other than 200/404/503 is a CommunicationException in the
  runtime (OutSystems.js:3), handled by AppManager_SynchAppContextInternal and SynchronizeNumberUnreadMessages, so the
  offline start reaches Connect_SetLoggedContext and sets Notifications_IsSynched True (UC:15278-15279, UC:1156-1157);
  `shell/startup.ts` isNetworkError follows that rule. HomeFeed offline: bell and slider now match.
  Left: default slider appended by the first transition (0 ms → appear class removed) where TST appended it with a later
  ForceRefresh (`undefinedms`, appear kept): the clone's app start finishes before the first screen renders; loading state:
  slider missing (app start never ends under held calls in the build).
- Regression parity run on: Login, PINUnlock, PINRegister, Splash (2026-10-15).
