# Context pack: Login

- Route: `/UBTConnect/Login`; inputs: In_IsFromInvalidPermissions: Boolean, In_IsFromResetPIN: Boolean, CallbackType: Text, CallbackGUID: Text
- Tier: **lite**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.App_Common.Login.mvc.js`
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
- Packages allowed: @eslint/js, @splidejs/splide, @storybook/react-vite, @tanstack/react-query, @testing-library/dom, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, @types/leaflet, @types/leaflet.markercluster, @types/node, @types/react, @types/react-dom, @types/sortablejs, @vitejs/plugin-react, dompurify, eslint, eslint-plugin-react-hooks, globals, jsdom, leaflet, leaflet.markercluster, msw, nouislider, openapi-fetch, openapi-typescript, playwright, prettier, react, react-dom, react-router, sortablejs, storybook, typescript, typescript-eslint, vite, vitest, wnumb (nothing else)
- Forbidden in routes: NO-RAW-FETCH (server calls only through callAction in api.ts); NO-BROWSER-STORAGE (no tokens or personal data in browser storage; use the shell's stores); NO-ROUTE-CSS (the original CSS is global; routes add no CSS); NO-INLINE-COLOR (visual differences are fixed in markup, not inline styles (inline CSS variables from the capture are fine)); NO-RAW-HTML (HTML from data goes through the shared sanitizer component); NO-WIRE-IN-COMPONENTS (components see domain types only; wire shapes stay in api.ts/mocks.ts); NO-CONSOLE (no debug output left in routes)
Patterns (open the file of each pattern you use; follow its reference implementation):
- P-BACK Back navigation and view cache [accepted] when the original restores the view from cache on back; reference: none yet
- P-CALLS Same calls as the original [accepted] when the route has server calls; reference: none yet
- P-DATA Server data in a route [accepted] when the route calls data or server actions; reference: none yet
- P-DIALOG Popups, sheets and toasts [accepted] when the route opens a popup, bottom sheet or shows a feedback message; reference: none yet
- P-FLAGS Feature flags [accepted] when the route reads a feature flag (flags.py route <S>); reference: none yet
- P-FORM Forms [accepted] when the route has inputs the user edits; reference: none yet
- P-LIST Lists [accepted] when the route renders an OutSystems List; reference: none yet
- P-MOCKS Mocks and scenarios [accepted] when the route has server calls; reference: none yet
- P-MUTATION Mutations keep state [accepted] when the route creates, updates or deletes data, or reads data another route changes; reference: none yet
- P-OSUI OutSystems UI patterns [accepted] when the route renders an OutSystems UI pattern block (survey/osui.md); reference: none yet
- P-PARAMS Route inputs and navigation [accepted] when the route has inputs or navigates; reference: none yet
- P-STATES Loading, empty, error and not-captured states [accepted] when always (every route); reference: none yet

## Feature flags of this route

WARNING: 1 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks

## Block plan

```
Layouts.Layout_LoginFlow  [shell]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  Layouts.SVG_Background_LoginWrapper  [shell]
    Layouts.SVG_Background_Custom  [shell]
      Utilities.InlineSVG  [shared: src/shared/osui/InlineSVG/InlineSVG.tsx]
  ConnectPatterns.Tile  [BUILD here]
    BasePatterns.CustomContainer  [shell]
      App_Common.WelcomeToConnect  [shell]
        BasePatterns.CustomContainer  [shell]
      BasePatterns.CustomContainer  [shell]
        Utilities.ButtonLoading  [shared: src/shared/osui/ButtonLoading/ButtonLoading.tsx]
      BasePatterns.CustomContainer  [shell]
        Utilities.ButtonLoading  [shared: src/shared/osui/ButtonLoading/ButtonLoading.tsx]
  App_Common.Version_LoginWrapper  [BUILD here]
    BasePatterns.CustomContainer  [shell]
      App_Common.Version  [shared: src/shared/UBTConnect/Version/Version.tsx]
        BasePatterns.CustomText  [shell]
          ConnectPatterns.IconInline_Internal  [shell]
  App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation  [shared: src/shell/navigation/DialogExitConfirmation.tsx]
    ConfirmationDialogs.ExitConfirmationDialog  [shared: src/shell/navigation/DialogExitConfirmation.tsx]
      NavigationHandler.BackNavigationHandler  [shell]
  App_Common.OfflineDataSyncEvents  [shell]
    Private.OfflineDataSyncCore  [BUILD here]
      Private.NetworkStatusChanged  [BUILD here]
  Layouts.AppManager_Events  [BUILD here]
  ConfirmationDialogs.ActionConfirmationDialog  [shell]
  App_Common.CommonUI_InsideLayout  [shell]
    App_Common.OfflineDataSyncEvents  [shell]
      Private.OfflineDataSyncCore  [BUILD here]
        Private.NetworkStatusChanged  [BUILD here]
    CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction  [shell]
      ConfirmationDialogs.ActionConfirmationDialog  [shell]
    Legacy_Share.HandleOnResumeOpenLink  [shell]
      AndroidAppLinks.AndroidAppLinkOnResumeHandler  [BUILD here]
      EventfulDeeplinksPlugin.DeeplinkHandlerCentral  [BUILD here]
    Utility.HandleImageLoadError  [shell]
    NavigationHandler.BackNavigationHandler  [shell]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 11; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container slide-from-right-enter-done">
    <div class="OSBlockWidget" data-block="Layouts.Layout_LoginFlow" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="ubt-layout--login" data-container id="b1-Main">
      <div class="ubt-layout--login__svg" data-container>
       <div class="OSBlockWidget" data-block="Layouts.SVG_Background_LoginWrapper" id="b1-$b2">
        <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-b2-$b1">
         <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
          <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 13+"/>
         </div>
        </div>
       </div>
      </div>
      <div class="ubt-layout--login__header" id="b1-Placeholder_Header"></div>
      <div class="ubt-layout--login__content" id="b1-Placeholder_Content">
       <div class="connect-login-screen" data-container>
        <div class="connect-login-screen__content" data-container>
         <div class="OSBlockWidget" data-block="ConnectPatterns.Tile" id="$b2">
          <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="23 elements; dom lines 39+"/>
         </div>
         <div class="text-align-center" data-container>
          <div class="need-help-footer" data-container>
           Need help?
           <a class="font-regular text-underline" data-link data-original-href="/UBTConnect/ContactUsMenu" style="margin-left: 0px;">Contact Us</a>
          </div>
          <div class="OSBlockWidget" data-block="App_Common.Version_LoginWrapper" id="$b9">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="6 elements; dom lines 98+"/>
          </div>
         </div>
        </div>
       </div>
       <OSBlock data-block="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" from="src/shell/navigation/DialogExitConfirmation.tsx" elided="4 elements; dom lines 117+"/>
      </div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 129+"/>
       <div class="OSBlockWidget" data-block="Layouts.AppManager_Events" id="$b12"></div>
       <OSBlock data-block="ConfirmationDialogs.ActionConfirmationDialog" from="shell" elided="2 elements; dom lines 139+"/>
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b14">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 146+"/>
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
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 2632 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 3429 | `ActionSync_Info_GetMain` | 200 |
| 3 | 11214 | `ActionGet_RuntimeVersion` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `Login.OnInitialize` → `Login.onInitialize` → `Login.login` → `UBT_AppManager.appManager_Login` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`
- `onClick in Login` → `Login.login` → `UBT_AppManager.appManager_Login` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`
- `Login.OnReady` → `Login.onReady` → `UBT_AppManager.appManager_HandleDeviceAwarenessPopUp` → `UBT_AppManager.appManager_Login` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (2 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/ActionSync_Info_GetMain`
- `AppManager_Events.onCallbackAction` → `event onCallback of AppManager_Events` → `Login.appManager_Callback` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (2 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/ActionGet_RuntimeVersion`
- `Version.OnReady` → `Version.screenEvent_OnReady` → `UBTConnect_Utils.get_ConnectVersionDetails` → `server Get_RuntimeVersion`

## Declared and reachable from the rendered blocks, not observed

### `UBT_AppManager/ActionAppManager_ChangeDevice`
- `Login.OnReady` → `Login.onReady` → `UBT_AppManager.appManager_HandleDeviceAwarenessPopUp` → `server AppManager_ChangeDevice`

### `UBT_AppManager/ActionAppManager_Logout`
- `Login.OnInitialize` → `Login.onInitialize` → `UBT_AppManager.appManager_Logout` → `server AppManager_Logout`
- `Login.OnInitialize` → `Login.onInitialize` → `Login.login` → `UBTConnect.showExceptionMessage` → `UBTConnect.connect_Logout` → `UBT_AppManager.appManager_Logout` → `server AppManager_Logout`
- `onClick in Login` → `Login.login` → `UBTConnect.showExceptionMessage` → `UBTConnect.connect_Logout` → `UBT_AppManager.appManager_Logout` → `server AppManager_Logout`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `AppManager_Events.onCallbackAction` → `event onCallback of AppManager_Events` → `Login.appManager_Callback` → `UBTConnect.connect_SetLoggedContext` → `Connect2_LegacyShared.synchronizeNumberUnreadMessages` → `server GetNumberUnreadMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

Response types (types.ts, wire shape):
```ts
export interface AppManager_SynchAppContextResponse {
  AppManager_ClientConfig: AppManager_ClientConfig;
  isSuccess: boolean;
  PermissionList: PermissionList /* wire: { List: [...] } */;
  FirebaseRealTimeDB_Token: string /* "" in capture */;
}

export interface Sync_Info_GetMainResponse {
  OrbitStaticEntities: OrbitStaticEntities;
  LocalEntities_App: LocalEntities_App;
  Sync_SiteProperties: Sync_SiteProperties;
  MyEntertainingBaseURL: string;
  FeedBaseURL: string;
  B2CTenant: string;
}

export interface Get_RuntimeVersionResponse {
  Out_RuntimeVersion: number;
  Out_Name: string /* "" in capture */;
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

export interface PermissionList {
  List: unknown[] /* empty in capture */;
  EmptyListItem: string /* "" in capture */;
}

export interface OrbitStaticEntities {
  OrbitEventTypes: OrbitEventTypesItem[] /* wire: { List: [...] } */;
  OrbitMilestoneTypes: OrbitMilestoneTypesItem[] /* wire: { List: [...] } */;
  HostSurveyStep: HostSurveyStep;
  OrbitBedSize: OrbitBedSize;
  OrbitGenderPreference: OrbitGenderPreference;
  OrbitHouseFloor: OrbitHouseFloor;
  OrbitVehicleOwner: OrbitVehicleOwner;
  OrbitVehicleType: OrbitVehicleType;
  HelperStatus: HelperStatus;
  SurveyStatus: SurveyStatusItem[] /* wire: { List: [...] } */;
  MealType: MealType;
  HelperRoles: HelperRoles;
}

export interface LocalEntities_App {
  LocalBookmark: LocalBookmark;
  LocalBookmarksC2: LocalBookmarksC2;
  LocalNotes: LocalNotes;
}

export interface Sync_SiteProperties {
  UpdatesFeed_MonthsToShow: number;
}
```

## Logic in screen-specific blocks

- `UBTConnect.App_Common.Login.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/ContactUsMenu(); /UBTConnect/HomeFeed(); /UBTConnect/PINRegister()
  - JS nodes: UBTConnect.App_Common.Login.mvc$controller.OnInitialize.IsRestoredFromCacheJS
  - inputs: In_IsFromInvalidPermissions:Boolean, In_IsFromResetPIN:Boolean, CallbackType:Text, CallbackGUID:Text
- `UBTConnectLibrary.ConnectPatterns.Tile.mvc.js`
  - inputs: ExtendedClasses:Text
- `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
  - lifecycle: Initialize, Destroy
  - exceptions: SecurityException
  - JS nodes: OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS
- `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS, OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS
- `UBT_AppManager.Layouts.AppManager_Events.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnDestroy.RunDestroyCallbacksJS, UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnReady.GetHandlersJS
- `Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.ResumeNavigationHandler.GetEventPayloadJS, Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnDestroy.RemoveListenerForPlayerClosedJS, Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnReady.ResumeNavigationJS
- `EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`
  - lifecycle: Ready, Destroy
  - JS nodes: EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnDestroy.UnregisterPluginJS, EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnReady.RegisterPluginJS

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_PIN.Block_PINUnlock`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.Icon`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- image not captured: `img/Connect2_LegacyShared.User_rectangle.png`
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
<body class="phone portrait is-ltr">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Layouts.Layout_LoginFlow" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="ubt-layout--login" data-container id="b1-Main">
      <div class="ubt-layout--login__svg" data-container>
       <div class="OSBlockWidget" data-block="Layouts.SVG_Background_LoginWrapper" id="b1-$b2">
        <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-b2-$b1">
         <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
          <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 13+"/>
         </div>
        </div>
       </div>
      </div>
      <div class="ubt-layout--login__header" id="b1-Placeholder_Header"></div>
      <div class="ubt-layout--login__content" id="b1-Placeholder_Content">
       <div class="connect-login-screen" data-container>
        <div class="connect-login-screen__content" data-container>
         <div class="OSBlockWidget" data-block="ConnectPatterns.Tile" id="$b2">
          <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="23 elements; dom lines 39+"/>
         </div>
         <div class="text-align-center" data-container>
          <div class="need-help-footer" data-container>
           Need help?
           <a class="font-regular text-underline" data-link data-original-href="/UBTConnect/ContactUsMenu" style="margin-left: 0px;">Contact Us</a>
          </div>
          <div class="OSBlockWidget" data-block="App_Common.Version_LoginWrapper" id="$b9">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="6 elements; dom lines 98+"/>
          </div>
         </div>
        </div>
       </div>
       <OSBlock data-block="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" from="src/shell/navigation/DialogExitConfirmation.tsx" elided="4 elements; dom lines 116+"/>
      </div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 128+"/>
       <div class="OSBlockWidget" data-block="Layouts.AppManager_Events" id="$b12"></div>
       <OSBlock data-block="ConfirmationDialogs.ActionConfirmationDialog" from="shell" elided="2 elements; dom lines 138+"/>
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b14">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 145+"/>
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
</body>
```

### state `offline`
```html
<body class="phone portrait is-ltr">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="Layouts.Layout_LoginFlow" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="ubt-layout--login" data-container id="b1-Main">
      <div class="ubt-layout--login__svg" data-container>
       <div class="OSBlockWidget" data-block="Layouts.SVG_Background_LoginWrapper" id="b1-$b2">
        <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-b2-$b1">
         <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
          <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 13+"/>
         </div>
        </div>
       </div>
      </div>
      <div class="ubt-layout--login__header" id="b1-Placeholder_Header"></div>
      <div class="ubt-layout--login__content" id="b1-Placeholder_Content">
       <div class="connect-login-screen" data-container>
        <div class="connect-login-screen__content" data-container>
         <div class="OSBlockWidget" data-block="ConnectPatterns.Tile" id="$b2">
          <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="23 elements; dom lines 39+"/>
         </div>
         <div class="text-align-center" data-container>
          <div class="need-help-footer" data-container>
           Need help?
           <a class="font-regular text-underline" data-link data-original-href="/UBTConnect/ContactUsMenu" style="margin-left: 0px;">Contact Us</a>
          </div>
          <div class="OSBlockWidget" data-block="App_Common.Version_LoginWrapper" id="$b9">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="6 elements; dom lines 98+"/>
          </div>
         </div>
        </div>
       </div>
       <OSBlock data-block="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" from="src/shell/navigation/DialogExitConfirmation.tsx" elided="4 elements; dom lines 116+"/>
      </div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 128+"/>
       <div class="OSBlockWidget" data-block="Layouts.AppManager_Events" id="$b12"></div>
       <OSBlock data-block="ConfirmationDialogs.ActionConfirmationDialog" from="shell" elided="2 elements; dom lines 138+"/>
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b14">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 145+"/>
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
</body>
```

## Look up on demand

- `migration/screens/Login/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/Login/analysis/sources/pretty/UBTConnect.App_Common.Login.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.Tile.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/UBTConnect.App_Common.Version_LoginWrapper.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/UBT_AppManager.Layouts.AppManager_Events.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Login/analysis/css-relevant.md` only when a visual diff cannot be explained by markup
