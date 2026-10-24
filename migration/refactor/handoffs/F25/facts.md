# F25 facts (OutSystems DEV via Service Studio MCP, 2026-10-24; TST compiled code where noted)

## OutSystems
1. Block Connect2_OrbitMobile_MUI.ScreenBlock_HostSurvey, screen action OnHandle_BackNavigation (handler of its
   BackNavigationHandler instance). First node: If `GetCurrentLocalSurveyStatus...Id = SurveyStatus.UnableToHost`
   → True: Trigger event `NavigateTo_Back` → End. NO PreventNavigation on this branch.
   Other branches: IsConfirmedSurvey → End (navigation goes on); open popup → PreventNavigation + close popups;
   data step → PreventNavigation + "return" popup; etc. (all those branches call NavigationHandler.PreventNavigation).
2. Screen UBTConnect.Legacy_OrbitEventsFlow.HostSurvey: handler OnHandle_NavigateTo_Back = Destination
   PreviousScreen, Transition UseHistory (a "navigate back").
3. NavigationHandler.BackNavigationHandler: OnInitialize adds TriggerBackNavigation to
   window.dx.Navigation.BeforeBackNavigation (queue of LayoutRuntime_Top); TriggerBackNavigation triggers the
   BackNavigation event. PreventNavigation = evt.stopPropagation(); evt.preventDefault().
4. LayoutRuntime_Top queue: on window event "dx-before-back-navigation", runs callbacks in priority order until
   evt.defaultPrevented.
5. NavigationHandler controller (TST compiled, migration/screens/BookmarksByGroup/analysis/sources/pretty/
   NavigationHandler.controller.js lines 900-945), Navigation.onBeforeNavigate override:
   ```
   var isHistoryNavigation = nextLocation.action == "POP";
   var isNavigatingAway = navigatingAwayFromScreen && navigatingAwayFromScreen.parentNode || !getActiveScreen();
   if (isHistoryNavigation && isNavigatingAway) {
       // Block any history navigation if we're expecting to navigate away from the current screen,
       // to give time for the OnInitialize of the new screen and the OnDestroy of the old screen.
       return false;
   }
   ... if (isBackNavigation) { dispatchBeforeBackNavigation; if prevented return false }
   ... dispatchBeforeNavigation; if prevented return false
   var navigating = onBeforeNavigate.call(this, ...);
   if (navigating) { navigatingAwayFromScreen = getActiveScreen(); observe its parent; dispatchNavigation }
   ```
   navigatingAwayFromScreen is cleared by a MutationObserver when the old screen node is removed (end of transition).
   The dispatch of dx-before-back-navigation runs block events synchronously (withSynchronousBlockEvents).
   So in OutSystems: device/browser back on an Unable-to-Host survey → handler triggers NavigateTo_Back → screen
   navigates back (history back, a second POP) → the original back is not prevented and navigates → the second POP
   arrives while the old screen is still in the DOM → blocked by the isNavigatingAway guard. Net: one back.
   (Inferred from code; not observed on TST: the guard depends on the transition timing.)

## React port (branch refactor/architecture)
- app/src/platform/navigation/navigationGate.ts `shouldBlockNavigation` ports NH:902-944 (back queue, dx-before-
  navigation, dx-navigation, view cache) but NOT the isNavigatingAway guard (no navigatingAwayFromScreen at all).
- app/src/platform/navigation/backQueue.ts ports the queue.
- app/src/pages/HostSurvey/hooks/useHostSurvey.ts onBackNavigation: `if (status === unableToHost) onNavigateToBack();`
  (no preventDefault, same as OutSystems). HostSurveyPage: onNavigateToBack = useNavigateBack() → navigate(-1).
- Test observation (P6-G5 HostSurvey step): with the memory router the blocker runs synchronously, the handler's
  navigate(-1) re-enters the queue, HostSurvey is still mounted, recursion → RangeError "Maximum call stack size
  exceeded". The old port did the same. In a browser, history.go(-1) is async: likely a double back (two screens),
  or a loop if HostSurvey is still mounted when the second POP arrives.
- The app has screen transitions (platform/navigation/screenTransition.ts): the old screen can stay in the DOM
  during the transition, like OutSystems.
- Refactor rule 4: no behavior change without the user; this is a user decision batch item (user asked: "consult
  MCP, Opus and Fable").

## Options
A. Port the OutSystems guard into navigationGate: block a POP while a navigation away from the current screen is in
   progress (until the old screen unmounts / transition ends). Platform-wide, faithful to NH:904-916; HostSurvey stays
   as OutSystems (no preventDefault).
B. Local fix in HostSurvey: on Unable-to-Host, preventDefault() then navigateBack() once (or resume()). Net effect one
   back; differs from the OutSystems model; other screens that trigger a back inside a back handler stay exposed.
C. A + B.
D. Keep as is (known bug; also in the old port).
