# Route spec: Splash

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/Splash` with inputs none [pack.md] |
| Tier | lite |
| Captured | 2026-10-14 (TST, session locked), viewport 390×844, states: default [states.json] |
| Shared/shell components used | `src/shared/NavigationHandler/LayoutRuntime_Top`, `src/shared/UBTConnectLibrary/SVG_Background_Custom` (with `src/shared/osui/InlineSVG`), `src/shared/UBTConnectLibrary/CustomText`, `src/shared/UBTConnect/HandleOnResumeOpenLink`, `src/shared/UBTConnect/OfflineDataSyncEvents`, `src/shared/NavigationHandler/NavigationHandler`; shell `pinCheck`, `setResumeLoginLink`, `getColdStartLinkURL`, client variables, `useOsNavigate`, `allowUpcomingNavigation`; shared `set_InitialClientVariables` (UBTConnect lib), `useScreenController_NavigateToPage` (UBTJavaScriptUtils lib) |
| Screen-specific components | `components/LayoutBlank.tsx` (App_Common.LayoutBlank), `components/LoadingDots.tsx` (ConnectPatterns.LoadingDots, gsap 3.13.0 + MorphSVGPlugin, ADR-6), `components/ApplicationLoadEvents.tsx` (OSUI Private.ApplicationLoadEvents) |

## Specification
### Structure
Block plan [pack.md "Block plan"; dom/default.html:5-74]:
- `App_Common.LayoutBlank` (built here): `LayoutRuntime_Top` [shell] + `div.layout.layout-native.blank` (`ExtendedClass`,
  `EnableAccessibilityFeatures` → ` has-accessible-features`) > `.content` > `#b1-Content.main-content[role=main]`
  placeholder; `.offline-data-sync` > `OfflineDataSyncEvents` [shared] [LayoutBlank.mvc.js view].
- `ConnectPatterns.LoadingDots` (built here, `$b2`): `SVG_Background_Custom` (In_Path = InitialD
  `M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50`, In_ExtendedClass `ubt-loading-svg `), `div.ubt-loading-dots`
  with 4 `div.ubt-loading-dots__dot`, `div.ubt-loading-text` > `CustomText` "Loading..." (Primary, Base, SemiBold)
  [LoadingDots.mvc.js:178-320].
- `Private.ApplicationLoadEvents` (`$b3`, empty wrapper, logic only); `Legacy_Share.HandleOnResumeOpenLink` (`$b4`) [shared];
  `NavigationHandler.NavigationHandler` (`$b5`) outside the layout [Splash.mvc.js:137-300].
- Native plugin blocks (AndroidAppLinkOnResumeHandler, DeeplinkHandlerCentral) and OfflineDataSyncCore /
  NetworkStatusChanged come with the shared blocks (empty wrappers on the web) [HandleOnResumeOpenLink README,
  OfflineDataSyncEvents README].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ActionSync_Info_GetMain` | server | `onApplicationReady` (app start, shell) [calls.md #3] | — | none in Splash | shell mock | shell |
| `ServiceAPIFetchData_CacheableHouseholds` | server | `get_Cacheable_MapHouseholds` (app start, shell) [calls.md #6] | — | none | shell mock | shell |
| `ServiceAPIFetchData_CacheableMapEntities` | server | `get_Cacheable_MapEntities` (app start, shell) [calls.md #7] | — | none | shell mock | shell |

Splash itself makes no server call [Splash.mvc.js controller: only client actions]; `mocks.ts` adds no handler.

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| LoadingDots OnReady | mount | `TriggerAnimation` False → AddBounce: dots get `ubt-bounce` [LoadingDots.mvc.js:404-467, 696-716] | — | — | — |
| ApplicationLoadEvents OnInitialize | mount | fake progress 10 × 150 ms → `OnUpgradeProgress` (Percentage, not rendered); load complete → wait `max(1500 - elapsed, 0)` → `OnLoadComplete(window.location.href)` [ALE:530-578; Splash.mvc.js:197, 364-390] (load complete = shell `appReady`, Q2 answered B) | — | — | — |
| Splash OnLoadComplete | event | `TriggerAnimation = True`; `LastURL = In_RedirectURL` unless a navigation was caught and LastURL ≠ "" [Splash.mvc.js:410-435] | — | — | — |
| LoadingDots ParametersChanged | isTriggerAnimation True | container ` ubt-loading-header-animation`, dots `transition: left 1s`; after 1×1000+200 ms: dots lose `ubt-bounce`, svg container `ubt-fall-expand`, dots and text `ubt-hide`; path tween 1.5+0.5+1 s then `AnimationComplete`; at +2000 ms svg container `ubt-loading-svg-complete`, `ubt-fall-expand` removed [LoadingDots.mvc.js:617-692] (path tween: GSAP as compiled, Q1 answered A) | — | — | — |
| Splash LoadingDotsAnimationComplete | AnimationComplete | `Set_InitialClientVariables` (PhotobookCarousel_SelectedSpeed = 8000), `PIN_Check`, `GetColdStartLinkURL` ("" on the web, U14), `AllowUpcomingNavigation`; link ≠ "" and (NeedRegister or NeedUnlock or signed out) → `SetResumeLoginLink(link)` [Splash.mvc.js:455-524] | — | signed in + NeedRegister → `/UBTConnect/PINRegister`; signed in + NeedUnlock → `/UBTConnect/PINUnlock`; else `ScreenController_NavigateToPage(link ≠ "" ? link : LastURL, replace)` (as compiled, Q3 answered A) | — |
| NavigationHandler | Navigation | `PreventNavigation` (stopPropagation + preventDefault) and `NavigationObject = event` [Splash.mvc.js:324-350; NavigationHandler.controller.js:1543-1548]; the shell does not dispatch the event yet [NavigationHandler README] | — | — | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | after load, mid-animation (fall-expand) [dom/default.html:13-48] | yes | real (`mocksession=locked`) |

## Patterns used
- P-PARAMS: navigation to PINRegister / PINUnlock through `useOsNavigate`, to the link or LastURL through the shared
  `useScreenController_NavigateToPage` with replace (no inputs).
- P-STATES: no loading or empty state (no data); nothing rendered as NotCaptured.
- P-CALLS: the three captured calls are the shell's app-start calls; the route adds none.

## Feature flags
- none [pack.md "Feature flags of this route"]

## Unclear points
- How to animate the SVG path without gsap / MorphSVGPlugin → Q1 (decision answered by user: A, gsap 3.13.0 via ADR-6, path animated as compiled)
- Which SPA moment is the runtime "load complete" for ApplicationLoadEvents → Q2 (decision answered by user: B, the shell's `appReady`)
- Final navigation when LastURL is the Splash URL itself → Q3 (decision answered by user: A, as compiled; TST observed `/UBTConnect/Splash` stays put)

## Decisions to confirm
- Q1 answered A: the LoadingDots path is animated with gsap 3.13.0 + MorphSVGPlugin exactly as AnimateJS (LoadingDots.mvc.js:612-692): scale 0→4 (1.5 s, power2.out), morph to `M0,0 H100 V100 H0 Z` (0.5 s), morph to `SVGHeader_GetPath(App_PIN_Header_FinalHeightPercentage ×2)` (1 s, transform cleared on start), then `AnimationComplete`; plugin registered on mount (OnReady JavaScript1); tweens are killed when the block unmounts (the original leaves them running).
- Q2 answered B: load complete = shell `appReady`, then `max(1500 - elapsed since mount, 0)` ms.
- Q3 answered A: navigate (replace) to LastURL as compiled; a same-origin absolute href becomes its path; a Splash URL keeps the user on the finished splash.
- PINRegister / PINUnlock destinations push a history entry (as the other routes' Destination nodes), ScreenController_NavigateToPage replaces (its `True` argument).
- CR-Splash-2 applied (2026-10-14): `Set_InitialClientVariables` runs (EightSeconds = 8000 from the MCP on DEV,
  migration/knowledge/static-entities.md; not cross-checked on TST), cold-start link from the shell (`""`, U14),
  `allowUpcomingNavigation` from `shell/navigation`, URL → path in the shared `useScreenController_NavigateToPage`; an
  href of another origin is loaded with `location.replace` (the runtime `navigateTo` is not in local code).
- Splash's layout (App_Common.LayoutBlank) has no CommonUI, so it tells the shell to mount no CommonUI stand-in (Access Restricted dialog, back handler): `useNoCommonUi()` (CR-Splash-3, applied by the foundation owner).
- `OnUpgradeProgress` Percentage is kept but not rendered (the original renders nothing with it: `$if(false…)` [Splash.mvc.js:191-195]).
- LoadingDots class changes on the shared `SVG_Background_Custom` container are applied with `classList`, as the original JS node does (the shared block has no class input).
- LayoutBlank OnReady LayoutReady / SetLang / AddFavicon and OnDestroy LayoutDestroy (OSUI runtime layout helpers) are not ported, like every other layout of the app.
- Exemption `SPLASH-LOADINGDOTS-ANIMATION-PHASE` (added by the orchestrator): the capture is a mid-animation snapshot, so animation-phase classes, styles and positions inside LoadingDots are not compared.

## Change requests
- CR-Splash-1: shell app-start PIN redirect must leave Splash alone (applied)
- CR-Splash-2: Set_InitialClientVariables, GetColdStartLinkURL, ScreenController_NavigateToPage, AllowUpcomingNavigation export (applied 2026-10-14)
- CR-Splash-3: shell CommonUI stand-ins must not mount on a screen without CommonUI (applied 2026-10-14)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real (`mocksession=locked`) | 0 | 0 | 0 | 0 | 0 | SPLASH-LOADINGDOTS-ANIMATION-PHASE×19, ignoreSubtrees×1 |

Text, pseudo, position, pixel (0.00%) and call differences: 0 (route.py parity, 2026-10-14, two runs after the last code change).

## Server-side notes
- none: Splash is anonymous and calls no server action of its own [Splash.mvc.js:577 empty checkPermissions; knowledge/navigation.md "Access"].
