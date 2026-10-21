# Context pack: OrbitAdminLanding

- Route: `/UBTConnect/OrbitAdminLanding`; inputs: none
- Tier: **lite**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait orbit-theme osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js`
- Rules: AGENTS.md. Do not edit src/shell or src/shared; file a change request instead. Markup below is the contract: element types, classes, nesting and data-block wrappers exactly as shown.

## Stack, conventions and patterns (same for every route)

Stack status: confirmed. Full text: migration/architecture.md.
- Language: TypeScript (strict)
- App framework / build: Vite + React SPA
- React version: React 19
- Routing: React Router 7 (data router)
- Server state: TanStack Query 5
- Client state: React context + hooks (no library)
- API layer: Generated client from an OpenAPI spec
- Mocking: MSW 2 in the browser, anonymized fixtures recorded from the real app (record_har.cjs + har_to_fixtures.py, reviewed by the user)
- Styling: Original OutSystems CSS unchanged + review-only CSS
- Forms and validation: Controlled components, no library
- Dates and numbers: Intl only
- Strings / i18n: Literal strings as captured (no i18n library)
- Testing: Vitest + Testing Library + parity_check
- Lint and format: ESLint 10 + Prettier
- Package manager: npm
- Node version: 24 LTS
- Authentication: Mocked sign-in now; real identity provider later through a BFF
- Tokens and personal data in the browser: Never in browser storage (BFF + HttpOnly cookie later)
- PWA / offline: No service worker in the mock phase
- Viewports to match: phone 390x844 only
- Browser support: Evergreen mobile (iOS Safari 16+, Chrome 110+)
- Folder conventions: src/screens/<Screen>/{index.tsx,types.ts,api.ts,mocks.ts,components/}; shared in src/shared/<Block>/; shell in src/shell/
- Target backend: Mock only now; adapters keep OutSystems action names
- OutSystems UI DEPRECATED_GalleryV2: hand-written component with the captured DOM and classes (no library)
- OutSystems UI Gallery: hand-written component with the captured DOM and classes (no library)
- OutSystems UI Accordion: hand-written component with the captured DOM and classes (no library)
- OutSystems UI AccordionItem: hand-written component with the captured DOM and classes (no library)
- OutSystems UI DEPRECATED_Accordion: hand-written component with the captured DOM and classes (no library)
- OutSystems UI DEPRECATED_AccordionItem: hand-written component with the captured DOM and classes (no library)
- OutSystems UI Tooltip: hand-written component with the captured DOM and classes (no library)
- OutSystems UI BottomSheet: hand-written component with the captured DOM and classes (no library)
- OutSystems UI Carousel: same provider library as the original, pinned to the version in the manifest (@splidejs/splide 4.1.3)
- OutSystems UI DropdownSearch: same provider library as the original, pinned to the version in the manifest (Virtual Select v1.3.0, vendored from TST)
- OutSystems UI DropdownTags: same provider library as the original, pinned to the version in the manifest (Virtual Select v1.3.0, vendored from TST, as DropdownSearch)
- OutSystems UI RangeSlider: same provider library as the original, pinned to the version in the manifest (noUiSlider + wNumb)
- OutSystems UI Sidebar: out of scope: render NotCaptured
- Web equivalent of FullCalendarReactive: out of scope: render NotCaptured
- Web equivalent of Leaflet: npm package leaflet 1.9.4 + leaflet.markercluster 1.5.3
- Web equivalent of ReactiveHtmlSanitizer: npm package dompurify 3 configured with the module's allow lists
- Web equivalent of SortableJS: npm package sortablejs 1.15.7
- Packages allowed: @eslint/js, @splidejs/splide, @storybook/react-vite, @tanstack/react-query, @testing-library/dom, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, @types/leaflet, @types/leaflet.markercluster, @types/node, @types/react, @types/react-dom, @types/sortablejs, @vitejs/plugin-react, dompurify, eslint, eslint-plugin-react-hooks, globals, gsap, jsdom, leaflet, leaflet.markercluster, msw, nouislider, openapi-fetch, openapi-typescript, playwright, prettier, react, react-dom, react-router, sortablejs, storybook, typescript, typescript-eslint, vite, vitest, wnumb (nothing else)
- Forbidden in routes: NO-RAW-FETCH (server calls only through callAction in api.ts); NO-BROWSER-STORAGE (no tokens or personal data in browser storage; use the shell's stores); NO-ROUTE-CSS (the original CSS is global; routes add no CSS); NO-INLINE-COLOR (visual differences are fixed in markup, not inline styles (inline CSS variables from the capture are fine)); NO-RAW-HTML (HTML from data goes through the shared sanitizer component); NO-WIRE-IN-COMPONENTS (components see domain types only; wire shapes stay in api.ts/mocks.ts); NO-CONSOLE (no debug output left in routes)
Patterns (open the file of each pattern you use; follow its reference implementation):
- P-BACK Back navigation and view cache [accepted] when the original restores the view from cache on back; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/index.tsx`
- P-CALLS Same calls as the original [accepted] when the route has server calls; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/api.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- P-DATA Server data in a route [accepted] when the route calls data or server actions; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/api.ts`, `app/src/screens/AcceptPendingPolicies/types.ts`
- P-DIALOG Popups, sheets and toasts [accepted] when the route opens a popup, bottom sheet or shows a feedback message; reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- P-FLAGS Feature flags [accepted] when the route reads a feature flag (flags.py route <S>); reference: route HomeFeed: `app/src/screens/HomeFeed/components/FeedBlock_Services.tsx`, `app/src/screens/HomeFeed/components/FeedBlock_Updates.tsx`
- P-FORM Forms [accepted] when the route has inputs the user edits; reference: none yet
- P-LIST Lists [accepted] when the route renders an OutSystems List; reference: foundation: `app/src/components/OSList/OSList.tsx` (README `app/src/components/OSList/README.md`; swipe not ported: OutSystemsReactWidgets.js missing)
- P-MOCKS Mocks and scenarios [accepted] when the route has server calls; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`
- P-MUTATION Mutations keep state [accepted] when the route creates, updates or deletes data, or reads data another route changes; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- P-OSUI OutSystems UI patterns [accepted] when the route renders an OutSystems UI pattern block (survey/osui.md); reference: route HomeFeed: `app/src/screens/HomeFeed/components/FeedBlock_Services.tsx`
- P-PARAMS Route inputs and navigation [accepted] when the route has inputs or navigates; reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- P-STATES Loading, empty, error and not-captured states [accepted] when always (every route); reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`

## Feature flags of this route

WARNING: 5 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks

## Block plan

```
Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding  [BUILD here]
  Layout_OrbitTheme.Layout_Orbit  [shared: src/shared/Connect2_LegacyShared/Layout_Orbit/Layout_Orbit.tsx]
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
    Layout.BaseLayout_UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI/BaseLayout_UpdatedOSUI.tsx]
      Layout.MenuIcon__UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI/MenuIcon__UpdatedOSUI.tsx]
      Orbit_Generic_Blocks.NoInformation_Orbit  [shared: src/shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit/NoInformation_Orbit.tsx]
      App_Common.BottomBarMenu  [shared: src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx]
        App_Common.BottomBarContent  [shared: src/shared/UBTConnect/BottomBarContent/BottomBarContent.tsx]
          Navigation.BottomBarItem  [shared: src/shared/osui/BottomBarItem/BottomBarItem.tsx]
            ConnectPatterns.Icon  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
          Navigation.BottomBarItem  [shared: src/shared/osui/BottomBarItem/BottomBarItem.tsx]
            ConnectPatterns.Icon  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
          Navigation.BottomBarItem  [shared: src/shared/osui/BottomBarItem/BottomBarItem.tsx]
            App_Common_Blocks.App_IconBadge  [shared: src/shared/UBTConnect/App_IconBadge/App_IconBadge.tsx]
              ConnectPatterns.SkeletonSection  [shell]
                OutSystemsUIOverrides.IconBadge  [shared: src/shared/UBTConnectLibrary/IconBadge/IconBadge.tsx]
                  ConnectPatterns.Icon  [shell]
                  OutSystemsUIOverrides.Badge  [shared: src/shared/UBTConnectLibrary/Badge/Badge.tsx]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
          Navigation.BottomBarItem  [shared: src/shared/osui/BottomBarItem/BottomBarItem.tsx]
            ConnectPatterns.Icon  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
          Navigation.BottomBarItem  [shared: src/shared/osui/BottomBarItem/BottomBarItem.tsx]
            ConnectPatterns.Icon  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
App_Common.CommonUI_InsideLayout  [shell]
  App_Common.OfflineDataSyncEvents  [shell]
    Private.OfflineDataSyncCore  [BUILD here]
      Private.NetworkStatusChanged  [BUILD here]
  App_PIN.Block_PINUnlock  [shell]
    Layouts.Layout_LoginFlow  [shell]
      Layouts.SVG_Background_LoginWrapper  [shell]
        Layouts.SVG_Background_Custom  [shell]
          Utilities.InlineSVG  [shared: src/shared/osui/InlineSVG/InlineSVG.tsx]
      App_PIN.Block_PINUnlock_ContentWrapper  [shell]
        Fingerprint.PinUnlock_MobileWrapper  [shell]
          PIN.Pincode_Unlock  [shell]
            PIN.InactivityTimer  [shell]
  CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction  [shell]
    ConfirmationDialogs.ActionConfirmationDialog  [shell]
  Legacy_Share.HandleOnResumeOpenLink  [shell]
    AndroidAppLinks.AndroidAppLinkOnResumeHandler  [BUILD here]
    EventfulDeeplinksPlugin.DeeplinkHandlerCentral  [BUILD here]
  Utility.HandleImageLoadError  [shell]
  NavigationHandler.BackNavigationHandler  [shell]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 8; folded identical rows: 0.
```html
<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 32.875px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding" id="$b1">
     <div class="OSBlockWidget" data-block="Layout_OrbitTheme.Layout_Orbit" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="orbit-theme backwards-compatibility" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay orbit-theme" data-container id="b1-b1-b2-LayoutWrapper">
         <aside class="aside-navigation menu" data-advancedhtml role="complementary">
          <div id="b1-b1-b2-Navigation">
           <div id="b1-b1-Menu">
            <div id="b1-Menu"></div>
           </div>
          </div>
         </aside>
         <div class="main screen" data-container>
          <header class="header" data-advancedhtml id="b1-b1-b2-Header" role="banner">
           <div class="header-top" data-container>
            <div class="header-content display-flex" data-container>
             <div class="display-flex align-items-center full-width" data-container>
              <div class="header-left" id="b1-b1-b2-HeaderLeft">
               <div id="b1-b1-HeaderLeft">
                <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                 <div class="app-menu-icon" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                  <div aria-label="Back to previous screen" class="menu-back" data-container role="button" style="cursor: pointer;" tabindex="0">
                   <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowReverse"></i>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title">
                 <i class="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon></i>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div id="b1-b1-HeaderRight"></div>
              </div>
             </div>
            </div>
           </div>
           <div class="header-content header-top-content ph" id="b1-b1-b2-HeaderContent">
            <div id="b1-b1-HeaderContent">
             <div class="orbit-admin-header-cont" data-container>
              <div class="orbit-admin-header-text-cont" data-container>
               <span class="orbit-admin-header-text" data-expression>••••••</span>
              </div>
             </div>
            </div>
           </div>
          </header>
          <div class="content" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Orbit_Generic_Blocks.NoInformation_Orbit" from="src/shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit/NoInformation_Orbit.tsx" elided="2 elements; dom lines 70+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar">
              <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 85+"/>
             </div>
            </div>
           </div>
          </footer>
          <div id="b1-b1-b2-CommonUI">
           <div id="b1-b1-CommonUI_Elements">
            <div id="b1-CommonUI_Elements"></div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b3">
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 248+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 256+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 302+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 312+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 318+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 322+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 2684 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 3611 | `DataActionGet_AdminEventsList` | 200 |
| 3 | 5712 | `ActionAppManager_AfterInitialize` | 200 |
| 4 | 6779 | `ActionSync_Info_GetMain` | 200 |
| 5 | 7184 | `ActionGetUserInformation` | 200 |
| 6 | 7542 | `ActionGetNumberUnreadMessages` | 200 |
| 7 | 9450 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |
| 8 | 12595 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/DataActionGet_AdminEventsList`
- `ScreenBlock_AdminLanding.OnReady` → `ScreenBlock_AdminLanding.onReady` → `ScreenBlock_AdminLanding.refresh_GetEventsByMemberId` → `ScreenBlock_AdminLanding.DataActionGet_AdminEventsList`
- `ScreenBlock_AdminLanding fetch at start` → `ScreenBlock_AdminLanding.DataActionGet_AdminEventsList`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.fCM_NotificationCallback` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect/Legacy_OrbitAdminFlow/OrbitAdminLanding/ActionGetMilestoneScanFF`
- `ScreenBlock_AdminLanding.onHandle_EventCardClicked` → `event navigateTo_EventDetail of ScreenBlock_AdminLanding` → `OrbitAdminLanding.onHandle_NavigateToEventDetail` → `server GetMilestoneScanFF`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

Response types (types.ts, wire shape):
```ts
export interface AppManager_SynchAppContextResponse {
  AppManager_ClientConfig: AppManager_ClientConfig;
  isSuccess: boolean;
  PermissionList: string[] /* wire: { List: [...] } */ /* wire: { List: [...] } */;
  FirebaseRealTimeDB_Token: string;
}

export interface Get_AdminEventsListResponse {
  Response: Response;
}

export interface AppManager_AfterInitializeResponse {
  isNotRegistered: boolean;
}

export interface Sync_Info_GetMainResponse {
  OrbitStaticEntities: OrbitStaticEntities;
  LocalEntities_App: LocalEntities_App;
  Sync_SiteProperties: Sync_SiteProperties;
  MyEntertainingBaseURL: string;
  FeedBaseURL: string;
  B2CTenant: string;
}

export interface GetUserInformationResponse {
  UserInformation: UserInformation;
}

export interface GetNumberUnreadMessagesResponse {
  NumberPublicUnreadMessages: string /* Long Integer as string */;
  NumberPrivateUnreadMessages: string /* Long Integer as string */;
}

export interface ServiceAPIFetchData_CacheableMapEntitiesResponse {
  Localities_Markers: Localities_MarkersItem[] /* wire: { List: [...] } */;
  Localities_GeoJSON: Localities_GeoJSON;
  Countries_GeoJSON: Countries_GeoJSONItem[] /* wire: { List: [...] } */;
  Countries_Markers: Countries_MarkersItem[] /* wire: { List: [...] } */;
  GlobalLocations_Markers: GlobalLocations_MarkersItem[] /* wire: { List: [...] } */;
}

export interface ServiceAPIFetchData_CacheableHouseholdsResponse {
  Household_Markers: Household_MarkersItem[] /* wire: { List: [...] } */;
}

export interface AppManager_ClientConfig {
  AppManager_ClientCache: AppManager_ClientCache;
  EspaceName: string;
  CurrentUTCTime: string /* ISO DateTime */;
  Firebase_RealTimeDatabase_URL: string;
  Firebase_RealTimeDatabase_APIKey: string;
  Firebase_CloudMessage_Use: boolean;
  AzureInsights_ConnectionString: string;
  DeviceAwareness_Use: boolean;
  Streamline_Use: boolean;
  CheckDeviceOnReady: boolean;
}

export interface Response {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitStaticEntities {
  OrbitEventTypes: OrbitEventTypesItem[] /* wire: { List: [...] } */;
  OrbitMilestoneTypes: OrbitMilestoneTypesItem[] /* wire: { List: [...] } */;
  HostSurveyStep: HostSurveyStepItem[] /* wire: { List: [...] } */;
  OrbitBedSize: OrbitBedSizeItem[] /* wire: { List: [...] } */;
  OrbitGenderPreference: OrbitGenderPreferenceItem[] /* wire: { List: [...] } */;
  OrbitHouseFloor: OrbitHouseFloorItem[] /* wire: { List: [...] } */;
  OrbitVehicleOwner: OrbitVehicleOwnerItem[] /* wire: { List: [...] } */;
  OrbitVehicleType: OrbitVehicleTypeItem[] /* wire: { List: [...] } */;
  HelperStatus: HelperStatusItem[] /* wire: { List: [...] } */;
  SurveyStatus: SurveyStatusItem[] /* wire: { List: [...] } */;
  MealType: MealTypeItem[] /* wire: { List: [...] } */;
  HelperRoles: HelperRolesItem[] /* wire: { List: [...] } */;
}

export interface LocalEntities_App {
  LocalBookmark: LocalBookmarkItem[] /* wire: { List: [...] } */;
  LocalBookmarksC2: LocalBookmarksC2;
  LocalNotes: LocalNotes;
}

export interface Sync_SiteProperties {
  UpdatesFeed_MonthsToShow: number;
}

export interface UserInformation {
  Directory_UserCurrent: Directory_UserCurrent;
  HasPoliciesToAccept: boolean;
}

export interface Localities_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  IsLocked: boolean;
}

export interface Localities_GeoJSON {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Countries_GeoJSONItem {
  GeoJSONFeatureList: GeoJSONFeatureList;
  IsLocked: boolean;
}

export interface Countries_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  IsLocked: boolean;
}

export interface GlobalLocations_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  MapExploreItem: MapExploreItem;
}

export interface Household_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  MapExploreItem: MapExploreItem;
}
```

## Logic in screen-specific blocks

- `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js`
  - navigation: /UBTConnect/OrbitAdminMilestones(EventId); /UBTConnect/OrbitAdminEventDetail(In_EventId, In_EventStartDate, In_EventLocation, In_EventName, In_EventEndDate, In_EventTypeFriendly)
- `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc.js`
  - lifecycle: Ready
  - JS nodes: Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS
- `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
  - lifecycle: Initialize, Destroy
  - exceptions: SecurityException
  - JS nodes: OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS
- `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS
- `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.ResumeNavigationHandler.GetEventPayloadJS, Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnDestroy.RemoveListenerForPlayerClosedJS, Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnReady.ResumeNavigationJS
- `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnDestroy.UnregisterPluginJS, EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnReady.RegisterPluginJS

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `BasePatterns.Columns_Two`
- not rendered in any captured state: `BasePatterns.CustomContainer`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `Orbit_Blocks.Card_Event`
- not rendered in any captured state: `Orbit_Generic_Blocks.Skeleton_Loading`
- not rendered in any captured state: `PIN.PinCode`
- not rendered in any captured state: `Private.PullToRefresh`
- image not captured: `img/Connect2_LegacyShared.User_rectangle.png`
- image not captured: `img/UBTConnect.ConnectLogo.svg`
- image not captured: `img/UBTConnect.ConnectLogoWhite.svg`
- image not captured: `img/UBTConnectLibrary.ar.png`
- image not captured: `img/UBT_CW.UK.png`
- image not captured: `img/UBT_CW.au.png`
- image not captured: `img/UBT_CW.bb.png`
- image not captured: `img/UBT_CW.ca.png`
- image not captured: `img/UBT_CW.ch.png`
- image not captured: `img/UBT_CW.de.png`
- image not captured: `img/UBT_CW.dk.png`
- image not captured: `img/UBT_CW.fr.png`
- image not captured: `img/UBT_CW.ie.png`
- image not captured: `img/UBT_CW.it.png`
- image not captured: `img/UBT_CW.jm.png`
- image not captured: `img/UBT_CW.nl.png`
- image not captured: `img/UBT_CW.nz.png`
- image not captured: `img/UBT_CW.se.png`
- image not captured: `img/UBT_CW.tt.png`
- image not captured: `img/UBT_CW.us.png`
- image not captured: `img/UBT_CW.vc.png`
- image not captured: `scripts/OutSystemsUI_2_23.MWO.js`
- image not captured: `scripts/OutSystemsUI_2_23.OutSystemsUI.js`

## Other captured states

### state `loading`
```html
<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 32.875px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding" id="$b1">
     <div class="OSBlockWidget" data-block="Layout_OrbitTheme.Layout_Orbit" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="orbit-theme backwards-compatibility" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay orbit-theme" data-container id="b1-b1-b2-LayoutWrapper">
         <aside class="aside-navigation menu" data-advancedhtml role="complementary">
          <div id="b1-b1-b2-Navigation">
           <div id="b1-b1-Menu">
            <div id="b1-Menu"></div>
           </div>
          </div>
         </aside>
         <div class="main screen" data-container>
          <header class="header" data-advancedhtml id="b1-b1-b2-Header" role="banner">
           <div class="header-top" data-container>
            <div class="header-content display-flex" data-container>
             <div class="display-flex align-items-center full-width" data-container>
              <div class="header-left" id="b1-b1-b2-HeaderLeft">
               <div id="b1-b1-HeaderLeft">
                <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                 <div class="app-menu-icon" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                  <div aria-label="Back to previous screen" class="menu-back" data-container role="button" style="cursor: pointer;" tabindex="0">
                   <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowReverse"></i>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title">
                 <i class="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon></i>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div id="b1-b1-HeaderRight"></div>
              </div>
             </div>
            </div>
           </div>
           <div class="header-content header-top-content ph" id="b1-b1-b2-HeaderContent">
            <div id="b1-b1-HeaderContent">
             <div class="orbit-admin-header-cont" data-container>
              <div class="orbit-admin-header-text-cont" data-container>
               <span class="orbit-admin-header-text" data-expression>••••••</span>
              </div>
             </div>
            </div>
           </div>
          </header>
          <div class="content" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Orbit_Generic_Blocks.Skeleton_Loading" from="src/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading/Skeleton_Loading.tsx" elided="8 elements; dom lines 70+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar">
              <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 96+"/>
             </div>
            </div>
           </div>
          </footer>
          <div id="b1-b1-b2-CommonUI">
           <div id="b1-b1-CommonUI_Elements">
            <div id="b1-CommonUI_Elements"></div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b3">
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 259+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 267+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 313+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 323+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 329+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 333+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

### state `offline`
```html
<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 32.875px; --footer-height: 56px; --viewport-height: 844px;">
 <div class="feedback-message-wrapper" id="feedbackMessageContainer">
  <div class="feedback-message feedback-message-info feedback-message-autoclose feedback-message-autoclose" role="alert" tabindex="0">
   <i></i>
   <div class="feedback-message-text">
    <div class="feedback-message--title">Service Interruption</div>
    <div class="feedback-message--body">We’re currently experiencing unusually high traffic, which may affect access to some services. Our team is working to re…</div>
   </div>
  </div>
 </div>
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding" id="$b1">
     <div class="OSBlockWidget" data-block="Layout_OrbitTheme.Layout_Orbit" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="orbit-theme backwards-compatibility" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay orbit-theme" data-container id="b1-b1-b2-LayoutWrapper">
         <aside class="aside-navigation menu" data-advancedhtml role="complementary">
          <div id="b1-b1-b2-Navigation">
           <div id="b1-b1-Menu">
            <div id="b1-Menu"></div>
           </div>
          </div>
         </aside>
         <div class="main screen" data-container>
          <header class="header" data-advancedhtml id="b1-b1-b2-Header" role="banner">
           <div class="header-top" data-container>
            <div class="header-content display-flex" data-container>
             <div class="display-flex align-items-center full-width" data-container>
              <div class="header-left" id="b1-b1-b2-HeaderLeft">
               <div id="b1-b1-HeaderLeft">
                <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                 <div class="app-menu-icon" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                  <div aria-label="Back to previous screen" class="menu-back" data-container role="button" style="cursor: pointer;" tabindex="0">
                   <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowReverse"></i>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title">
                 <i class="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon></i>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div id="b1-b1-HeaderRight"></div>
              </div>
             </div>
            </div>
           </div>
           <div class="header-content header-top-content ph" id="b1-b1-b2-HeaderContent">
            <div id="b1-b1-HeaderContent">
             <div class="orbit-admin-header-cont" data-container>
              <div class="orbit-admin-header-text-cont" data-container>
               <span class="orbit-admin-header-text" data-expression>••••••</span>
              </div>
             </div>
            </div>
           </div>
          </header>
          <div class="content" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Orbit_Generic_Blocks.Skeleton_Loading" from="src/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading/Skeleton_Loading.tsx" elided="8 elements; dom lines 88+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar">
              <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 114+"/>
             </div>
            </div>
           </div>
          </footer>
          <div id="b1-b1-b2-CommonUI">
           <div id="b1-b1-CommonUI_Elements">
            <div id="b1-CommonUI_Elements"></div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b3">
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 277+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 285+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 331+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 341+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 347+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 351+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Look up on demand

- `migration/screens/OrbitAdminLanding/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/OrbitAdminLanding/analysis/sources/pretty/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OrbitAdminLanding/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OrbitAdminLanding/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OrbitAdminLanding/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OrbitAdminLanding/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OrbitAdminLanding/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OrbitAdminLanding/analysis/css-relevant.md` only when a visual diff cannot be explained by markup
