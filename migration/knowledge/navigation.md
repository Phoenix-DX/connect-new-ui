# Navigation, start screens and deep links (UBTConnect)

Evidence: OutSystems MCP on the DEV source (`getSerializedObject` of module `UBTConnect`, 2026-10-13) cross-checked with
the compiled TST survey. Details and per-screen table: `migration/scope-review.md`.

## Start
- `DefaultScreen = HomeFeed`, `SplashScreen = Splash`. [MCP; manifest]
- In Splash, `LoadingDotsAnimationComplete` runs `Set_InitialClientVariables`, then `PIN_Check`, then
  `GetColdStartLinkURL`. [MCP]
  - A cold-start link can exist. If the user must register/unlock/sign in, Splash calls `SetResumeLoginLink(link)`.
  - Then Splash navigates by the first case that fits:
    - Signed in and `NeedRegister`: PINRegister.
    - Signed in and `NeedUnlock`: PINUnlock.
    - Otherwise: `ScreenController_NavigateToPage(link or Client.LastURL)`.
- More on sign-in and PIN: [auth.md](auth.md).

## Navigation graph
- DEV and TST agree once dead code is removed: 806 screen-to-screen edges, 14 screens with no way in. [MCP; survey]
- Dead code in DEV: [MCP]
  - Two orphan `Destination Notes` nodes in `App_Common.BottomBarMenu.Event_BottomBar_Clicked`.
  - Block `Locality_LocalityContacts` sits in the False branch of an `If[True]` in `Locality_Details`.
- Bottom bar: [MCP]
  - Home goes to HomeFeed.
  - Directory goes to CountryList when `GetHasC1DirectoryView()` is true. Otherwise it goes to `Locality_Details`.
  - Updates goes to Updates_SingleList.
  - Bookmarks: see scope-review D2.
  - Menu goes to Menu.
- The `NavigateTo_MyCalendar…` handlers (AssembleEvents, LDM_MyEvents, LDM_MyEvents_V2, OrbitLanding) open MyEntertaining. [MCP]

## Deep links (navigation by URL string, invisible to link analysis)
- Shared links `ConnectSharing/Details…`: `GetURLFromEventDataURL` rewrites them to `UBTConnect/ConnectShare`. [MCP]
  - `GetColdStartLinkURL` (Splash) calls it.
  - Block `HandleOnResumeOpenLink` calls it (`AndroidAppLinkOnResumeHandlerResumeNavigation`,
    `DeeplinkHandlerCentralOnDeeplinkOpen`).
  - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,
    OneSchoolGlobalDetails, PINRegister, SupperMeeting_Details.
- `DeeplinkHandlerCentralOnDeeplinkOpen` also opens AssembleDetail and MessageDetail. [MCP]
- Push notifications: the module client action `FCM_DeeplinkCallback` can open PINRegister or PINUnlock. [MCP]

## Access
- Screens with the Anonymous role: ContactUsDetails, ContactUsMenu, InvalidPermissions, Locality_Details, Login,
  MessageDetail, MessageList, PINBiometricsMenu, Splash. [MCP]
