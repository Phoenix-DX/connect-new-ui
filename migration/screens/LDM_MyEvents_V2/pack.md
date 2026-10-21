# Context pack: LDM_MyEvents_V2

- Route: `/UBTConnect/LDM_MyEvents_V2`; inputs: none
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait connect-theme osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js`
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

WARNING: 6 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasCarouselEnabled` (flag check action, candidate); MCP: unavailable: C2EnableCarousel: opens HouseholdCarousel instead of HouseholdDetails values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableCarousel, default on, branches default-only] read it with useFlag('C2EnableCarousel'); variants bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks

## Block plan

```
LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2  [BUILD here]
  Layout.Layout  [shared: src/shared/Connect2_LegacyShared/Layout/Layout.tsx]
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
    Layout.BaseLayout_UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI/BaseLayout_UpdatedOSUI.tsx]
      Layout.MenuIcon__UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI/MenuIcon__UpdatedOSUI.tsx]
      LDM_Blocks_V2.MyEvents_MyTimelineFilterButton  [BUILD here]
      LDM_Blocks_V2.MyTimeline_V2  [BUILD here]
        LDM_Blocks.EventDetail_SubSection  [shared: src/shared/Connect2_OrbitMobile_MUI/EventDetail_SubSection/EventDetail_SubSection.tsx]
          LDM_Blocks_V2.EventCard_V2  [BUILD here]
            LDM_Blocks.EventCard_Box  [BUILD here]
              LDM_Blocks_V2.EventCard_Info_V2  [BUILD here]
              LDM_Blocks.EventCard_Guests  [BUILD here]
                Widgets.OverlappingImages  [BUILD here]
          LDM_Blocks_V2.EventCard_V2  [BUILD here]
            LDM_Blocks.EventCard_Box  [BUILD here]
              LDM_Blocks_V2.EventCard_Info_V2  [BUILD here]
              LDM_Blocks.EventCard_Guests  [BUILD here]
                Widgets.OverlappingImages  [BUILD here]
          LDM_Blocks_V2.EventCard_V2  [BUILD here]
            LDM_Blocks.EventCard_Box  [BUILD here]
              LDM_Blocks_V2.EventCard_Info_V2  [BUILD here]
              LDM_Blocks.EventCard_Guests  [BUILD here]
                Widgets.OverlappingImages  [BUILD here]
          LDM_Blocks_V2.EventCard_V2  [BUILD here]
            LDM_Blocks.EventCard_Box  [BUILD here]
              LDM_Blocks_V2.EventCard_Info_V2  [BUILD here]
              LDM_Blocks.EventCard_Guests  [BUILD here]
                Widgets.OverlappingImages  [BUILD here]
          LDM_Blocks_V2.EventCard_V2  [BUILD here]
            LDM_Blocks.EventCard_Box  [BUILD here]
              LDM_Blocks_V2.EventCard_Info_V2  [BUILD here]
              LDM_Blocks.EventCard_Guests  [BUILD here]
                Widgets.OverlappingImages  [BUILD here]
      CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy  [shared: src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.tsx]
        CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction  [shell]
          ConfirmationDialogs.ActionConfirmationDialog  [shell]
      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
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

Collapsed blocks: 11; folded identical rows: 0.
```html
<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 46.875px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2" id="$b1">
     <div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="backwards-compatibility connect-theme" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay connect-theme my-events" data-container id="b1-b1-b2-LayoutWrapper">
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
                <div data-container style="align-items: center; display: flex;">
                 <div data-container style="flex: 1 0 20%;">
                  <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                   <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                    <div aria-label="Back to previous screen" class="menu-back" data-container role="button" style="cursor: pointer;" tabindex="0">
                     <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowReverse"></i>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div class="month-header ThemeGrid_Width1" data-container style="margin-left: 20px; flex: 1 0 80%;">My Timeline</div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title"></div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div class="display-flex align-items-center" id="b1-b1-HeaderRight">
                <div class="flex-center-vertical full-width flex-horizontal-right event-view" data-container>
                 <div class="margin-x-base" data-container>
                  <div class="OSBlockWidget" data-block="LDM_Blocks_V2.MyEvents_MyTimelineFilterButton" id="b1-$b4">
                   <i class="icon font-size-1-5em fa fa-filter fa-1x" data-icon></i>
                   <div data-container id="b1-b4-BlockPlaceholder">
                    <div class="backwards-compatibility" data-container id="b1-b4-SearchFiltersRoot"></div>
                   </div>
                  </div>
                 </div>
                 <i class="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x" data-icon></i>
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
              <div class="OSBlockWidget" data-block="LDM_Blocks_V2.MyTimeline_V2" id="b1-MyTimeline_V2">
               <div class="timeline-ldm-height" data-container id="b1-b9-MinHeight_Enforcer">
                <OSBlock data-block="LDM_Blocks.EventDetail_SubSection" from="src/shared/Connect2_OrbitMobile_MUI/EventDetail_SubSection/EventDetail_SubSection.tsx" elided="196 elements; dom lines 84+"/>
               </div>
              </div>
              <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy" from="src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.tsx" elided="5 elements; dom lines 491+"/>
              <OSBlock data-block="CW_CTA_PopUps.ContactPopup_ByPhone" from="src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx" elided="1 elements; dom lines 503+"/>
              <OSBlock data-block="CW_CTA_PopUps.ContactByMessage_Wrapper" from="src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx" elided="2 elements; dom lines 507+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar">
              <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 521+"/>
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
     <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 684+"/>
     <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 692+"/>
     <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 738+"/>
     <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 748+"/>
     <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 754+"/>
     <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 758+"/>
    </div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 3143 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 4525 | `DataActionGetEventLocalitiesForFilter` | 200 |
| 3 | 4590 | `DataActionGetEventsForMyTimeline` | 200 |
| 4 | 5799 | `ActionAppManager_AfterInitialize` | 200 |
| 5 | 6306 | `ActionSync_Info_GetMain` | 200 |
| 6 | 6656 | `ActionGetUserInformation` | 200 |
| 7 | 6936 | `ActionGetNumberUnreadMessages` | 200 |
| 8 | 8500 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |
| 9 | 11586 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_OrbitMobile_MUI/LDM_Blocks_V2/MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter`
- `MyEvents_MyTimelineFilterButton.OnReady` → `MyEvents_MyTimelineFilterButton.onReady` → `MyEvents_MyTimelineFilterButton.onParametersChanged` → `MyEvents_MyTimelineFilterButton.getEventLocalitiesData` → `MyEvents_MyTimelineFilterButton.DataActionGetEventLocalitiesForFilter`
- `MyEvents_MyTimelineFilterButton.OnParametersChanged` → `MyEvents_MyTimelineFilterButton.onParametersChanged` → `MyEvents_MyTimelineFilterButton.getEventLocalitiesData` → `MyEvents_MyTimelineFilterButton.DataActionGetEventLocalitiesForFilter`
- `MyEvents_MyTimelineFilterButton fetch at start` → `MyEvents_MyTimelineFilterButton.DataActionGetEventLocalitiesForFilter`

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline`
- `MyEvents_MyTimelineFilterButton.onHandle_Filter` → `event filter of MyEvents_MyTimelineFilterButton` → `ScreenBlock_MyEvents_V2.onHandle_MyTimelineFilter` → `ScreenBlock_MyEvents_V2.getMyTimelineData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `MyEvents_MyTimelineFilterButton.onHandle_Close` → `event resetFilters of MyEvents_MyTimelineFilterButton` → `ScreenBlock_MyEvents_V2.onHandle_ResetFilters` → `ScreenBlock_MyEvents_V2.getMyTimelineData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents_V2.OnReady` → `ScreenBlock_MyEvents_V2.onReady` → `ScreenBlock_MyEvents_V2.getMyTimelineData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForMyTimeline`
- `MyTimeline_V2.list_MyTimelineOnScrollEnding` → `event scrollEnding of MyTimeline_V2` → `ScreenBlock_MyEvents_V2.onScrollEnding_MyTimeline` → `ScreenBlock_MyEvents_V2.getMyTimelineData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `event tryAgain of MyTimeline_V2` → `ScreenBlock_MyEvents_V2.getMyTimelineData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForMyTimeline`
- `MyTimeline_V2.swipeEventSwipeUp` → `event eventsSwipeUp of MyTimeline_V2` → `ScreenBlock_MyEvents_V2.onHandle_SwipeUp` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForMyTimeline`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

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

### `Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/DataActionGetEventsForCalendar`
- `ScreenBlock_MyEvents_V2.onHandle_DateClicked` → `ScreenBlock_MyEvents_V2.checkDateBoundaries` → `ScreenBlock_MyEvents_V2.getEventCalendarData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForCalendar`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ScreenBlock_MyEvents_V2.OnReady` → `ScreenBlock_MyEvents_V2.onReady` → `ScreenBlock_MyEvents_V2.getEventCalendarData` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForCalendar`
- `ScreenBlock_MyEvents_V2 fetch at start` → `ScreenBlock_MyEvents_V2.DataActionGetEventsForCalendar`

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `Connect2_OrbitMobile_MUI/ActionGetEventViewInfo`
- `ScreenBlock_MyEvents_V2.onHandle_DateClicked` → `Connect2_OrbitMobile_MUI.addAuditCalendarEvent` → `Connect2_OrbitMobile_MUI.getEventViewInfo` → `server GetEventViewInfo`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

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

export interface GetEventLocalitiesForFilterResponse {
  EventLocalities: EventLocalitiesItem[] /* wire: { List: [...] } */;
}

export interface GetEventsForMyTimelineResponse {
  Out_PastEvents: Out_PastEventsItem[] /* wire: { List: [...] } */;
  Out_UpcomingEvents: Out_UpcomingEvents;
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

export interface EventLocalitiesItem {
  IdAsText: string;
  Name: string;
  IsSelected: boolean;
}

export interface Out_PastEventsItem {
  CurrentMonthDate: string;
  EventsCalendar: EventsCalendarItem[] /* wire: { List: [...] } */;
}

export interface Out_UpcomingEvents {
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

- `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js`
  - navigation: /UBTConnect/ContactByEmailMember(In_AvatarURL, In_ContactCountry, In_IsHousehold, In_HouseholdHeaderName, In_ContactName, In_ContactLocality, In_ContactSurname, In_EmailTo); /UBTConnect/LDM_EventDetail_V2(EventId, EventHostId); /UBTConnect/MyEntertaining(MyCalendarEventSourceId); /UBTConnect/HouseholdCarousel(In_StartingHouseholdId); /UBTConnect/HouseholdDetails(HouseholdId)
- `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc.js`
  - lifecycle: Initialize, Ready, Destroy
  - feedback: "Phone number is not available", /*Info*/ 0)
  - exceptions: NotRegisteredException, UserException
  - JS nodes: Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnDestroy.ExecuteScrollCallbackJS, Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetScrollAmount.GetScrollTopJS, Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnAfterFetch_GetEventsForMyTimeline.ScrollToTopJS, Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetViewContainerHeight.SetViewContainerHeightJS
- `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc.js`
  - lifecycle: Ready, ParametersChanged
  - inputs: In_HasLoaded:Boolean, In_DefaultDateRangeInMonths:Integ
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `BasePatterns.Columns_Two`
- not rendered in any captured state: `BasePatterns.CustomContainer`
- not rendered in any captured state: `CW_Image.UBT_LazyImage`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `Calendars.DayCalendar`
- not rendered in any captured state: `Calendars.EventCalendarWeekMonth`
- not rendered in any captured state: `Calendars.MonthCalendar`
- not rendered in any captured state: `ConnectPatterns.Button`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `ConnectPatterns.IconText`
- not rendered in any captured state: `ConnectPatterns.LazyImage`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `LDM_Blocks.MonthYearSelector`
- not rendered in any captured state: `LDM_Blocks.MyTimeline_Filters`
- not rendered in any captured state: `LDM_Blocks.WeekDataDisplay`
- not rendered in any captured state: `LDM_Blocks_V2.Agenda_V2`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
- not rendered in any captured state: `Private.PullToRefresh`
- not rendered in any captured state: `Reusable.Person_Contact_Options`
- not rendered in any captured state: `Utilities.SwipeEvents`
- not rendered in any captured state: `Utility.Result_Item_Image`
- not rendered in any captured state: `UtilityFlow.ErrorScreen`
- not rendered in any captured state: `Widgets.NetworkWarning`
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
<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2" id="$b1">
     <div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="backwards-compatibility connect-theme" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay connect-theme my-events" data-container id="b1-b1-b2-LayoutWrapper">
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
                <div data-container style="align-items: center; display: flex;">
                 <div data-container style="flex: 1 0 20%;">
                  <div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
                   <div class="app-menu-icon back" data-container id="b1-b2-MenuIcon" style="margin-top: 0px;">
                    <div aria-label="Back to previous screen" class="menu-back" data-container role="button" style="cursor: pointer;" tabindex="0">
                     <i class="icon fa fa-arrow-left fa-1x" data-icon id="b1-b2-ArrowReverse"></i>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div class="month-header ThemeGrid_Width1" data-container style="margin-left: 20px; flex: 1 0 80%;">My Timeline</div>
                </div>
               </div>
              </div>
              <div class="header-search OSInline" id="b1-b1-b2-HeaderSearch"></div>
              <h1 class="header-title text-align-center" data-advancedhtml>
               <div id="b1-b1-b2-Title">
                <div id="b1-b1-Title"></div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div class="display-flex align-items-center" id="b1-b1-HeaderRight">
                <div class="flex-center-vertical full-width flex-horizontal-right event-view" data-container>
                 <div class="margin-x-base" data-container>
                  <div class="OSBlockWidget" data-block="LDM_Blocks_V2.MyEvents_MyTimelineFilterButton" id="b1-$b4">
                   <i class="icon font-size-1-5em text-neutral-6 fa fa-filter fa-1x" data-icon></i>
                   <div data-container id="b1-b4-BlockPlaceholder">
                    <div class="backwards-compatibility" data-container id="b1-b4-SearchFiltersRoot"></div>
                   </div>
                  </div>
                 </div>
                 <i class="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x" data-icon></i>
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
             <div id="b1-b1-Co
… (truncated)

## Look up on demand

- `migration/screens/LDM_MyEvents_V2/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyTimeline_V2.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Box.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_Info_V2.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_LegacyShared.Widgets.OverlappingImages.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/LDM_MyEvents_V2/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~4046 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~1576 tokens; open the source files listed under 'Look up on demand'
