# Context pack: Services

- Route: `/UBTConnect/Services`; inputs: none
- Tier: **lite**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.App_Services.Services.mvc.js`
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
- P-LIST Lists [accepted] when the route renders an OutSystems List; reference: none yet
- P-MOCKS Mocks and scenarios [accepted] when the route has server calls; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`
- P-MUTATION Mutations keep state [accepted] when the route creates, updates or deletes data, or reads data another route changes; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- P-OSUI OutSystems UI patterns [accepted] when the route renders an OutSystems UI pattern block (survey/osui.md); reference: route HomeFeed: `app/src/screens/HomeFeed/components/FeedBlock_Services.tsx`
- P-PARAMS Route inputs and navigation [accepted] when the route has inputs or navigates; reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- P-STATES Loading, empty, error and not-captured states [accepted] when always (every route); reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`

## Feature flags of this route

- no feature flag detected for this route

## Block plan

```
Layouts.Layout_DetailPage  [shared: src/shared/UBTConnectLibrary/Layout_DetailPage/Layout_DetailPage.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  ConnectPatterns.Icon  [shell]
  ConnectPatterns.SkeletonSection  [shell]
    Sortable.SortableList  [BUILD here]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomText  [shell]
          ConnectPatterns.IconInline_Internal  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              Sortable.SortableList_Draggable  [BUILD here]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                    ConnectPatterns.IconText  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.Icon  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              Sortable.SortableList_Draggable  [BUILD here]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                    ConnectPatterns.IconText  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.Icon  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              Sortable.SortableList_Draggable  [BUILD here]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                    ConnectPatterns.IconText  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.Icon  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              Sortable.SortableList_Draggable  [BUILD here]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                    ConnectPatterns.IconText  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.Icon  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.Icon  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              Sortable.SortableList_Draggable  [BUILD here]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                    ConnectPatterns.IconText  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.Icon  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.Icon  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              Sortable.SortableList_Draggable  [BUILD here]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                    ConnectPatterns.IconText  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.Icon  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.Icon  [shell]
    App_Common_Blocks.SectionSeparator  [shared: src/shared/UBTConnect/SectionSeparator/SectionSeparator.tsx]
      BasePatterns.CustomContainer  [shell]
    Sortable.SortableList  [BUILD here]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomText  [shell]
          ConnectPatterns.IconInline_Internal  [shell]
        Sortable.SortableList_Draggable  [BUILD here]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
              Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.Icon  [shell]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      ConnectPatterns.Icon  [shell]
                        ConnectPatterns.IconSVG  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                ConnectPatterns.Icon  [shell]
        Sortable.SortableList_Draggable  [BUILD here]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
              Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.Icon  [shell]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      ConnectPatterns.Icon  [shell]
                        ConnectPatterns.IconSVG  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                ConnectPatterns.Icon  [shell]
        Sortable.SortableList_Draggable  [BUILD here]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
              Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.Icon  [shell]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      ConnectPatterns.Icon  [shell]
                        ConnectPatterns.IconSVG  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                ConnectPatterns.Icon  [shell]
  ConnectPatterns.FixedFooter  [shared: src/shared/UBTConnectLibrary/FixedFooter/FixedFooter.tsx]
    BasePatterns.CustomContainer  [shell]
      Utilities.ButtonLoading  [shared: src/shared/osui/ButtonLoading/ButtonLoading.tsx]
        CW_Common.Button  [shell]
          ConnectPatterns.Button  [shell]
            ConnectPatterns.IconText  [shell]
              BasePatterns.Columns_Two  [shell]
                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                  ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 3; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail ubt-layout-detail--primary" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Services" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">Manage Services</div>
          </div>
          <div class="header-right" id="b1-Placeholder_Header_Right"></div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="ubt-fixed-footer--content" data-container id="ContentWrapper" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="367 elements; dom lines 36+"/>
          </div>
          <OSBlock data-block="ConnectPatterns.FixedFooter" from="src/shared/UBTConnectLibrary/FixedFooter/FixedFooter.tsx" elided="27 elements; dom lines 781+"/>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom"></div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Inside_Layout"></div>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 2 | 2866 | `DataActionGetServices` | 200 |
| 4 | 6771 | `ActionSync_Info_GetMain` | 200 |
| 5 | 7100 | `ActionGetUserInformation` | 200 |
| 7 | 8618 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 8 | 8625 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBTConnect/App_Services/Services/DataActionGetServices`
- `Services fetch at start` → `Services.DataActionGetServices`

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect/App_Services/Services/ServiceAPIService_ConnectServices_ChangeOrder_Bulk`
- `onClick in Button` → `event event_OnClick of Button` → `event buttonOnClick of Button` → `Services.onClick_SaveChanges` → `server Service_ConnectServices_ChangeOrder_Bulk`

Response types (types.ts, wire shape):
```ts
export interface GetServicesResponse {
  AvailableServices: AvailableServicesItem[] /* wire: { List: [...] } */;
  CurrentServices: CurrentServicesItem[] /* wire: { List: [...] } */;
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

export interface ServiceAPIFetchData_CacheableHouseholdsResponse {
  Household_Markers: Household_MarkersItem[] /* wire: { List: [...] } */;
}

export interface ServiceAPIFetchData_CacheableMapEntitiesResponse {

}

export interface AvailableServicesItem {
  Id: string;
  Label: string;
  Order: number;
  Is_Active: boolean;
  IconId: string;
  isMandatory: boolean;
  StartAsDefault: boolean;
}

export interface CurrentServicesItem {
  Connect_Services: Connect_Services;
  Connect_Service_User: Connect_Service_User;
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

export interface Household_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  MapExploreItem: MapExploreItem;
}
```

## Logic in screen-specific blocks

- `UBTConnect.App_Services.Services.mvc.js`
  - exceptions: NotRegisteredException, CommunicationException, UserException
- `SortableJS.Sortable.SortableList.mvc.js`
  - lifecycle: Ready, ParametersChanged
  - JS nodes: SortableJS.Sortable.SortableList.mvc$controller.OnReady.GetObjJS
  - inputs: Group:Text, DenyLists:RecordList, PreventDomMove:Boolean
- `SortableJS.Sortable.SortableList_Draggable.mvc.js`
  - lifecycle: Ready, ParametersChanged
  - JS nodes: SortableJS.Sortable.SortableList_Draggable.mvc$controller.OnReady.SetItemIdOnCustomDragHandleJS
  - inputs: Id:Text, UseCustomDragHandle:Boolean

## Gaps (render as NotCaptured)

- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- image not captured: `img/UBTConnectLibrary.OneSchoolGlobal.svg`
- image not captured: `img/UBTConnectLibrary.Pin_Country.svg`
- image not captured: `img/UBTConnectLibrary.Pin_House.svg`
- image not captured: `img/UBTConnectLibrary.Pin_Locality.svg`
- image not captured: `img/UBTConnectLibrary.Pin_Lock.svg`
- image not captured: `img/UBTConnectLibrary.Pin_Member.svg`
- image not captured: `img/UBTConnectLibrary.Pin_OneSchool.svg`
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
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail ubt-layout-detail--primary" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Services" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">Manage Services</div>
          </div>
          <div class="header-right" id="b1-Placeholder_Header_Right"></div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="ubt-fixed-footer--content" data-container id="ContentWrapper" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="10 elements; dom lines 36+"/>
          </div>
          <OSBlock data-block="ConnectPatterns.FixedFooter" from="src/shared/UBTConnectLibrary/FixedFooter/FixedFooter.tsx" elided="27 elements; dom lines 60+"/>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom"></div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Inside_Layout"></div>
    </div>
   </div>
  </div>
 </div>
</body>
```

### state `offline`
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail ubt-layout-detail--primary" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Services" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">Manage Services</div>
          </div>
          <div class="header-right" id="b1-Placeholder_Header_Right"></div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="ubt-fixed-footer--content" data-container id="ContentWrapper" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="10 elements; dom lines 36+"/>
          </div>
          <OSBlock data-block="ConnectPatterns.FixedFooter" from="src/shared/UBTConnectLibrary/FixedFooter/FixedFooter.tsx" elided="27 elements; dom lines 60+"/>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom"></div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Inside_Layout"></div>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Look up on demand

- `migration/screens/Services/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/Services/analysis/sources/pretty/UBTConnect.App_Services.Services.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Services/analysis/sources/pretty/SortableJS.Sortable.SortableList.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Services/analysis/sources/pretty/SortableJS.Sortable.SortableList_Draggable.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Services/analysis/css-relevant.md` only when a visual diff cannot be explained by markup
