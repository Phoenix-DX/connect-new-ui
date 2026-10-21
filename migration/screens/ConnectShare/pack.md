# Context pack: ConnectShare

- Route: `/UBTConnect/ConnectShare`; inputs: ShareId: Text
- Tier: **lite**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait connect-theme osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Legacy_Share.ConnectShare.mvc.js`
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
- OutSystems UI Accordion: out of scope: render NotCaptured
- OutSystems UI AccordionItem: out of scope: render NotCaptured
- OutSystems UI DEPRECATED_Accordion: out of scope: render NotCaptured
- OutSystems UI DEPRECATED_AccordionItem: out of scope: render NotCaptured
- OutSystems UI Tooltip: out of scope: render NotCaptured
- OutSystems UI BottomSheet: hand-written component with the captured DOM and classes (no library)
- OutSystems UI Carousel: same provider library as the original, pinned to the version in the manifest (@splidejs/splide 4.1.3)
- OutSystems UI DropdownSearch: same provider library as the original, pinned to the version in the manifest (Virtual Select v1.3.0, vendored from TST)
- OutSystems UI DropdownTags: out of scope: render NotCaptured
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

WARNING: 1 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks

## Block plan

```
Share_UI.ScreenBlock_ShareDetail  [BUILD here]
  Layout.Layout  [shared: src/shared/Connect2_LegacyShared/Layout/Layout.tsx]
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
    Layout.BaseLayout_UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI/BaseLayout_UpdatedOSUI.tsx]
      Layout.MenuIcon_Back  [shared: src/shared/Connect2_LegacyShared/MenuIcon_Back/MenuIcon_Back.tsx]
      Reusable.NavigationLanding  [BUILD here]
      Reusable.ConnectBlankSlate  [shared: src/shared/Connect2_LegacyShared/ConnectBlankSlate/ConnectBlankSlate.tsx]
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
CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy  [shared: src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.tsx]
  CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction  [shell]
    ConfirmationDialogs.ActionConfirmationDialog  [shell]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 8; folded identical rows: 0.
```html
<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Share_UI.ScreenBlock_ShareDetail" id="$b1">
     <div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="backwards-compatibility connect-theme" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay connect-theme" data-container id="b1-b1-b2-LayoutWrapper">
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
                <div class="OSBlockWidget" data-block="Layout.MenuIcon_Back" id="b1-$b2">
                 <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                  <a class="app-menu-back OSFillParent" data-link data-original-href="#" id="b1-b2-Back">
                   <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowBack" style="font-size: 1.5em;"></i>
                  </a>
                 </div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title">
                 <div class="text-align-center" data-container>Connect Share</div>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div class="display-flex align-items-center" id="b1-b1-HeaderRight">
                <div class="OSBlockWidget" data-block="Reusable.NavigationLanding" id="b1-$b3">
                 <a data-link data-original-href="/UBTConnect/">
                  <i class="icon fa fa-home fa-2x" data-icon></i>
                 </a>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="header-content header-top-content ph" id="b1-b1-b2-HeaderContent">
            <div id="b1-b1-HeaderContent"></div>
           </div>
          </header>
          <div class="content" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Reusable.ConnectBlankSlate" from="src/shared/Connect2_LegacyShared/ConnectBlankSlate/ConnectBlankSlate.tsx" elided="6 elements; dom lines 70+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar"></div>
            </div>
           </div>
          </footer>
          <div id="b1-b1-b2-CommonUI">
           <div id="b1-b1-CommonUI_Elements">
            <div id="b1-CommonUI_Elements">
             <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b2">
              <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 100+"/>
              <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 108+"/>
              <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 154+"/>
              <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 164+"/>
              <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 170+"/>
              <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 174+"/>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy" from="src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.tsx" elided="5 elements; dom lines 186+"/>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 3110 | `ActionGet_ShareDetails` | 200 |
| 2 | 3115 | `ActionAppManager_SynchAppContext` | 200 |
| 3 | 3422 | `ActionGetUserInformation` | 200 |
| 4 | 6033 | `ActionAppManager_AfterInitialize` | 200 |
| 5 | 6588 | `ActionSync_Info_GetMain` | 200 |
| 6 | 6852 | `ActionGetNumberUnreadMessages` | 200 |
| 7 | 7834 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 8 | 7837 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBTConnect/ActionGet_ShareDetails`
- `ConnectShare.OnInitialize` → `ConnectShare.screenEvent_OnInitialize` → `UBTConnect.onInitializeSharingScreen` → `server Get_ShareDetails`

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.fCM_NotificationCallback` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

Response types (types.ts, wire shape):
```ts
export interface Get_ShareDetailsResponse {

}

export interface AppManager_SynchAppContextResponse {
  AppManager_ClientConfig: AppManager_ClientConfig;
  isSuccess: boolean;
  PermissionList: string[] /* wire: { List: [...] } */ /* wire: { List: [...] } */;
  FirebaseRealTimeDB_Token: string;
}

export interface GetUserInformationResponse {
  UserInformation: UserInformation;
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

export interface GetNumberUnreadMessagesResponse {
  NumberPublicUnreadMessages: string /* Long Integer as string */;
  NumberPrivateUnreadMessages: string /* Long Integer as string */;
}

export interface ServiceAPIFetchData_CacheableHouseholdsResponse {
  Household_Markers: Household_MarkersItem[] /* wire: { List: [...] } */;
}

export interface ServiceAPIFetchData_CacheableMapEntitiesResponse {

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

export interface UserInformation {
  Directory_UserCurrent: Directory_UserCurrent;
  HasPoliciesToAccept: boolean;
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

export interface Household_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  MapExploreItem: MapExploreItem;
}
```

## Logic in screen-specific blocks

- `UBTConnect.Legacy_Share.ConnectShare.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/HouseholdDetails(HouseholdId); /UBTConnect/OneSchoolGlobalDetails(In_OneSchoolGlobalId); /UBTConnect/FeedItemDetail(FeedItemId); /UBTConnect/SupperMeeting_Details(In_SubdivsionId)
  - navigateBack ×1
  - JS nodes: UBTConnect.Legacy_Share.ConnectShare.mvc$controller.ScreenEvent_OnInitialize.DelayedShowFreeSubscriptionAlertJS, UBTConnect.Legacy_Share.ConnectShare.mvc$controller.ScreenEvent_OnInitialize.WasCurrentViewRestoredFromCacheJS
  - inputs: ShareId:Text
- `Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail.mvc.js`
  - inputs: StatusMessage:Text
- `Connect2_LegacyShared.Reusable.NavigationLanding.mvc.js`
  - inputs: IsEnabled:Boolean
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
- not rendered in any captured state: `BasePatterns.CustomText`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.Icon`
- not rendered in any captured state: `ConnectPatterns.SkeletonSection`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
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
<body class="phone portrait">
 <div id="reactContainer"></div>
</body>
```

### state `offline`
```html
<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Share_UI.ScreenBlock_ShareDetail" id="$b1">
     <div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="backwards-compatibility connect-theme" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay connect-theme" data-container id="b1-b1-b2-LayoutWrapper">
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
                <div class="OSBlockWidget" data-block="Layout.MenuIcon_Back" id="b1-$b2">
                 <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                  <a class="app-menu-back OSFillParent" data-link data-original-href="#" id="b1-b2-Back">
                   <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowBack" style="font-size: 1.5em;"></i>
                  </a>
                 </div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title">
                 <div class="text-align-center" data-container>Connect Share</div>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div class="display-flex align-items-center" id="b1-b1-HeaderRight">
                <div class="OSBlockWidget" data-block="Reusable.NavigationLanding" id="b1-$b3">
                 <a data-link data-original-href="/UBTConnect/">
                  <i class="icon fa fa-home fa-2x" data-icon></i>
                 </a>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="header-content header-top-content ph" id="b1-b1-b2-HeaderContent">
            <div id="b1-b1-HeaderContent"></div>
           </div>
          </header>
          <div class="content" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Reusable.ConnectBlankSlate" from="src/shared/Connect2_LegacyShared/ConnectBlankSlate/ConnectBlankSlate.tsx" elided="6 elements; dom lines 70+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar"></div>
            </div>
           </div>
          </footer>
          <div id="b1-b1-b2-CommonUI">
           <div id="b1-b1-CommonUI_Elements">
            <div id="b1-CommonUI_Elements">
             <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b2">
              <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 99+"/>
              <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 107+"/>
              <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 153+"/>
              <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 163+"/>
              <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 169+"/>
              <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 173+"/>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy" from="src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.tsx" elided="5 elements; dom lines 185+"/>
   </div>
  </div>
 </div>
</body>
```

## Look up on demand

- `migration/screens/ConnectShare/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/ConnectShare/analysis/sources/pretty/UBTConnect.Legacy_Share.ConnectShare.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/sources/pretty/Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/sources/pretty/Connect2_LegacyShared.Reusable.NavigationLanding.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/ConnectShare/analysis/css-relevant.md` only when a visual diff cannot be explained by markup
