# Context pack: EventDetail

- Route: `/UBTConnect/EventDetail`; inputs: In_MemberId: LongInteger, In_EventId: LongInteger, In_EventName: Text, In_FromNotification: Boolean
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait orbit-theme osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`
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

WARNING: 4 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:getHasOrbitAccess` (flag check action, candidate); MCP: unavailable: mobileOrbitAccess: Orbit entry (external) values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key mobileOrbitAccess, default on, branches default-only] read it with useFlag('mobileOrbitAccess')
- `action:getHasOrbitEventBooklet` (flag check action, candidate); MCP: open; decision: OPEN
- `action:getHasOrbitHostSurvey` (flag check action, candidate); MCP: unavailable: mobileOrbitHostSurvey: Orbit HostSurvey entry (external) values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key mobileOrbitHostSurvey, default on, branches default-only] read it with useFlag('mobileOrbitHostSurvey')
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks

## Block plan

```
Orbit_ScreenBlocks.ScreenBlock_EventDetail  [BUILD here]
  Layout_OrbitTheme.Layout_Orbit  [shared: src/shared/Connect2_LegacyShared/Layout_Orbit/Layout_Orbit.tsx]
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
    Layout.BaseLayout_UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI/BaseLayout_UpdatedOSUI.tsx]
      Layout.MenuIcon__UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI/MenuIcon__UpdatedOSUI.tsx]
      Orbit_Blocks.HostSurvey_PillItem  [shared: src/shared/Connect2_OrbitMobile_MUI/HostSurvey_PillItem/HostSurvey_PillItem.tsx]
      Orbit_Generic_Blocks.Accordion_Orbit  [shared: src/shared/Connect2_OrbitMobile_MUI/Accordion_Orbit/Accordion_Orbit.tsx]
        Content.DEPRECATED_Accordion  [shared: src/shared/osui/DEPRECATED_Accordion/DEPRECATED_Accordion.tsx]
          Content.DEPRECATED_AccordionItem  [shared: src/shared/osui/DEPRECATED_AccordionItem/DEPRECATED_AccordionItem.tsx]
            Orbit_Blocks.HostAllocation_List  [BUILD here]
              Orbit_Blocks.HostAllocation_ListItem  [BUILD here]
              Orbit_Blocks.HostAllocation_ListItem  [BUILD here]
              Orbit_Blocks.HostAllocation_HelperItem  [BUILD here]
      Orbit_Blocks.EventDateSelection  [BUILD here]
        Orbit_Generic_Blocks.ListOfDaySelectors  [shared: src/shared/Connect2_OrbitMobile_MUI/ListOfDaySelectors/ListOfDaySelectors.tsx]
          Orbit_Generic_Blocks.DaySelector  [shared: src/shared/Connect2_OrbitMobile_MUI/DaySelector/DaySelector.tsx]
          Orbit_Generic_Blocks.DaySelector  [shared: src/shared/Connect2_OrbitMobile_MUI/DaySelector/DaySelector.tsx]
          Orbit_Generic_Blocks.DaySelector  [shared: src/shared/Connect2_OrbitMobile_MUI/DaySelector/DaySelector.tsx]
      Orbit_Blocks.Card_Milestone  [shared: src/shared/Connect2_OrbitMobile_MUI/Card_Milestone/Card_Milestone.tsx]
        Orbit_Blocks.Card_Template  [shared: src/shared/Connect2_OrbitMobile_MUI/Card_Template/Card_Template.tsx]
      Orbit_Blocks.Card_Milestone  [shared: src/shared/Connect2_OrbitMobile_MUI/Card_Milestone/Card_Milestone.tsx]
        Orbit_Blocks.Card_Template  [shared: src/shared/Connect2_OrbitMobile_MUI/Card_Template/Card_Template.tsx]
      Orbit_Blocks.ContactHelpdesk_Footer  [shared: src/shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer/ContactHelpdesk_Footer.tsx]
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

Collapsed blocks: 12; folded identical rows: 0.
```html
<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container slide-from-right-enter-done">
    <div class="OSBlockWidget" data-block="Orbit_ScreenBlocks.ScreenBlock_EventDetail" id="$b1">
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
          <header class="header orbit-detail orbit-header-center" data-advancedhtml id="b1-b1-b2-Header" role="banner">
           <div class="header-top" data-container>
            <div class="header-content display-flex" data-container>
             <div class="display-flex align-items-center full-width" data-container>
              <div class="header-left" id="b1-b1-b2-HeaderLeft">
               <div id="b1-b1-HeaderLeft">
                <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                 <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
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
                 <span data-expression>••••••• ••••• ••••••••••• • ••••• ••• ••••</span>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div id="b1-b1-HeaderRight">
                <div class="display-flex flex-direction-row align-content-space-evenly align-items-center padding-left-base" data-container></div>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="header-content header-top-content ph" id="b1-b1-b2-HeaderContent">
            <div id="b1-b1-HeaderContent"></div>
           </div>
          </header>
          <div class="content orbit-detail orbit-header-center" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <div class="font-size-0-9em padding-x-m padding-y-m" data-container>
               <div class="flex-center-vertical" data-container>
                <i class="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon></i>
                <span class="margin-left-base" data-expression>••• •• ••• •••• • ••• •• ••• ••••</span>
               </div>
               <div class="flex-center-vertical margin-top-m" data-container>
                <i class="icon orbit-icon-location fa fa-flag fa-1x" data-icon></i>
                <span class="margin-left-base" data-expression>••••••• •••••• •••••• ••••••</span>
               </div>
               <div class="flex-center-vertical margin-top-m" data-container>
                <i class="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon></i>
                <span class="margin-left-base" data-expression>Host</span>
               </div>
               <div class="flex-center-vertical margin-top-m" data-container>
                <i class="icon orbit-icon-window fa fa-flag fa-1x" data-icon></i>
                <span class="margin-left-base" data-expression>••••••• •••••••••• •••••••</span>
               </div>
              </div>
              <div class="full-width padding-m display-flex align-items-center justify-content-space-between" data-container>
               <div class="orbit-host-survey-link-new" data-container style="cursor: pointer;">
                <span class="white-space-nowrap" data-expression>View Host Survey</span>
                <i class="icon margin-left-m font-size-1-25em fa fa-angle-right fa-1x" data-icon></i>
               </div>
               <OSBlock data-block="Orbit_Blocks.HostSurvey_PillItem" from="src/shared/Connect2_OrbitMobile_MUI/HostSurvey_PillItem/HostSurvey_PillItem.tsx" elided="3 elements; dom lines 104+"/>
              </div>
              <OSBlock data-block="Orbit_Generic_Blocks.Accordion_Orbit" from="src/shared/Connect2_OrbitMobile_MUI/Accordion_Orbit/Accordion_Orbit.tsx" elided="34 elements; dom lines 114+"/>
              <div class="padding-x-m padding-y-m bold color-orbit-primary-7 font-size-1-1em" data-container>
               <span data-expression>Itinerary</span>
              </div>
              <div class="OSBlockWidget" data-block="Orbit_Blocks.EventDateSelection" id="b1-$b7">
               <div class="event-date-selector-list-cont" data-container>
                <OSBlock data-block="Orbit_Generic_Blocks.ListOfDaySelectors" from="src/shared/Connect2_OrbitMobile_MUI/ListOfDaySelectors/ListOfDaySelectors.tsx" elided="19 elements; dom lines 198+"/>
               </div>
              </div>
              <div class="list list-group orbit-card-list OSFillParent" data-list data-virtualization-disabled>
               <div class="orbit-card-list-cont" data-container>
                <OSBlock data-block="Orbit_Blocks.Card_Milestone" from="src/shared/Connect2_OrbitMobile_MUI/Card_Milestone/Card_Milestone.tsx" elided="20 elements; dom lines 248+"/>
               </div>
               <div class="orbit-card-list-cont" data-container>
                <OSBlock data-block="Orbit_Blocks.Card_Milestone" from="src/shared/Connect2_OrbitMobile_MUI/Card_Milestone/Card_Milestone.tsx" elided="15 elements; dom lines 296+"/>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <OSBlock data-block="Orbit_Blocks.ContactHelpdesk_Footer" from="src/shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer/ContactHelpdesk_Footer.tsx" elided="2 elements; dom lines 339+"/>
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
    <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b2">
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 362+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 370+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 416+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 426+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 432+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 436+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 542 | `ActionGetAllApplicationEvents` | 200 |
| 2 | 1775 | `DataActionGet_EventDetails` | 200 |
| 3 | 2065 | `DataActionGet_HostSurveyStatus` | 200 |
| 4 | 2609 | `DataActionGet_HasDocuments` | 200 |
| 5 | 2906 | `DataActionGet_HasQRCode` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_EventDetails`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_EventDetails`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_EventDetails`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_HostSurveyStatus`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_HostSurveyStatus`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_HasDocuments`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_HasDocuments`

### `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode`
- `ScreenBlock_EventDetail.OnReady` → `ScreenBlock_EventDetail.onReady` → `ScreenBlock_EventDetail.DataActionGet_HasQRCode`
- `ScreenBlock_EventDetail fetch at start` → `ScreenBlock_EventDetail.DataActionGet_HasQRCode`

## Declared and reachable from the rendered blocks, not observed

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

Response types (types.ts, wire shape):
```ts
export interface GetAllApplicationEventsResponse {
  EventList: EventListItem[] /* wire: { List: [...] } */;
}

export interface Get_EventDetailsResponse {
  Response: Response;
  Response_DateFilters: Response_DateFilters;
  IsNullResponse: boolean;
}

export interface Get_HostSurveyStatusResponse {
  Response: Response;
}

export interface Get_HasDocumentsResponse {
  Response_HasDocuments: boolean;
}

export interface Get_HasQRCodeResponse {
  Response_HasQRCode: boolean;
  Response_HasScanned: boolean;
}

export interface EventListItem {
  LocalConnectApplicationEvents: LocalConnectApplicationEvents;
}

export interface Response {
  EventId: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
  EventType: string;
  EventName: string;
  EventStartDate: string /* ISO DateTime */;
  EventEndDate: string /* ISO DateTime */;
  Location: string;
  TypeOfEvent: string;
  IsBookletVisible: boolean;
  SetUpMeals: boolean;
  Meals: boolean;
  Accommodations: boolean;
  Helpers: boolean;
  Transport: boolean;
  GuestTransport: boolean;
  HostSurvey: HostSurvey;
  OrbitEventType: OrbitEventType;
  Milestones: MilestonesItem[] /* wire: { List: [...] } */;
}

export interface Response_DateFilters {
  HasBefore: boolean;
  HasAfter: boolean;
  DayFilterList: DayFilterListItem[] /* wire: { List: [...] } */;
}
```

## Logic in screen-specific blocks

- `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`
  - navigation: /UBTConnect/QRCodeGenerate(In_EventId, In_MemberId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation); /UBTConnect/HomeFeed(); /UBTConnect/ContactByEmailOrbitHelpdesk(In_MilestoneId, In_EventId, In_Subject, In_EventName); /UBTConnect/ViewDocuments(In_EventEndDate, In_MemberId, In_EventName, In_EventId, In_EventLocation, In_EventStartDate); /UBTConnect/EventBooklet(In_EventName, In_EventId); /UBTConnect/MilestoneDetail(In_OrbitMilestoneTypeId, In_FromNotification, In_HostId, In_EventId, In_MilestoneId, In_EventName, In_MilestoneName); /UBTConnect/HelpersDetail(In_EventId, In_EventName, In_HostId, In_OrbitMilestoneTypeId, In_MilestoneName); /UBTConnect/TransportDetail(In_HeaderClass, In_MilestoneName, In_MilestoneId, In_TargetMemberId, In_OrbitMilestoneTypeId); /UBTConnect/HostSurvey(In_MemberId, In_EventStartDate, In_EventId, In_EventName, In_EventEndDate)
  - inputs: In_MemberId:LongInteger, In_EventId:LongInteger, In_EventName:Text, In_FromNotification:Boolean
- `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js`
  - lifecycle: Ready
  - feedback: "Only Householder is able to edit the survey.", /*Error*/ 3) | "You don\'t have access to this feature. Please contact your event organiser for more information.", /*Info*/ 0)
  - JS nodes: Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS
  - inputs: In_MemberId:LongInteger, In_EventId:LongInteger, In_EventName:Text, In_FromNotification:Boolean
- `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc.js`
  - inputs: In_HostAllocationList:RecordList
- `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_ListItem.mvc.js`
  - inputs: In_HostAllocationItem:Record
- `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc.js`
  - lifecycle: Ready
- `Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc.js`
  - lifecycle: Ready
  - JS nodes: Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS
  - inputs: In_DateList:Record
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
- not rendered in any captured state: `Orbit_Generic_Blocks.NoInformation_Orbit`
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
<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container slide-from-right-enter-done">
    <div class="OSBlockWidget" data-block="Orbit_ScreenBlocks.ScreenBlock_EventDetail" id="$b1">
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
          <header class="header orbit-detail orbit-header-center" data-advancedhtml id="b1-b1-b2-Header" role="banner">
           <div class="header-top" data-container>
            <div class="header-content display-flex" data-container>
             <div class="display-flex align-items-center full-width" data-container>
              <div class="header-left" id="b1-b1-b2-HeaderLeft">
               <div id="b1-b1-HeaderLeft">
                <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                 <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
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
                 <span data-expression>••••••• ••••• ••••••••••• • ••••• ••• ••••</span>
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
            <div id="b1-b1-HeaderContent"></div>
           </div>
          </header>
          <div class="content orbit-detail orbit-header-center" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Orbit_Generic_Blocks.Skeleton_Loading" from="src/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading/Skeleton_Loading.tsx" elided="11 elements; dom lines 64+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar"></div>
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
    <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b2">
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 111+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 119+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 165+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 175+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 181+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 185+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

### state `offline`
```html
<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
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
   <div class="active-screen screen-container slide-from-right-enter-done">
    <div class="OSBlockWidget" data-block="Orbit_ScreenBlocks.ScreenBlock_EventDetail" id="$b1">
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
          <header class="header orbit-detail orbit-header-center" data-advancedhtml id="b1-b1-b2-Header" role="banner">
           <div class="header-top" data-container>
            <div class="header-content display-flex" data-container>
             <div class="display-flex align-items-center full-width" data-container>
              <div class="header-left" id="b1-b1-b2-HeaderLeft">
               <div id="b1-b1-HeaderLeft">
                <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                 <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
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
                 <span data-expression>••••••• ••••• ••••••••••• • ••••• ••• ••••</span>
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
            <div id="b1-b1-HeaderContent"></div>
           </div>
          </header>
          <div class="content orbit-detail orbit-header-center" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <OSBlock data-block="Orbit_Generic_Blocks.Skeleton_Loading" from="src/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading/Skeleton_Loading.tsx" elided="11 elements; dom lines 82+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar"></div>
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
    <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b2">
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 129+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 137+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 183+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 193+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 199+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 203+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Look up on demand

- `migration/screens/EventDetail/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/EventDetail/analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_ListItem.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/EventDetail/analysis/css-relevant.md` only when a visual diff cannot be explained by markup
