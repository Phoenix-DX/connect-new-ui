# Context pack: MessageList

- Route: `/UBTConnect/MessageList`; inputs: none
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait connect-theme osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js`
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

WARNING: 5 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks

## Block plan

```
MyNotifications.ScreenBlock_MessageList  [BUILD here]
  Layout.Layout  [shared: src/shared/Connect2_LegacyShared/Layout/Layout.tsx]
    LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
    Layout.BaseLayout_UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI/BaseLayout_UpdatedOSUI.tsx]
      Layout.MenuIcon__UpdatedOSUI  [shared: src/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI/MenuIcon__UpdatedOSUI.tsx]
      Private.PullToRefresh  [BUILD here]
      MyNotifications.MessageListBlock  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
        MyNotifications.MessageListItem  [BUILD here]
      Reusable.Spinner  [shared: src/shared/Connect2_LegacyShared/Spinner/Spinner.tsx]
      Reusable.Spinner  [shared: src/shared/Connect2_LegacyShared/Spinner/Spinner.tsx]
      NavigationHandler.BackNavigationHandler  [shell]
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

Collapsed blocks: 10; folded identical rows: 14.
```html
<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container">
    <div class="OSBlockWidget" data-block="MyNotifications.ScreenBlock_MessageList" id="$b1">
     <div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="backwards-compatibility connect-theme" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay connect-theme" data-container id="b1-b1-b2-LayoutWrapper">
         <aside class="aside-navigation menu" data-advancedhtml role="complementary">
          <div id="b1-b1-b2-Navigation">
           <div id="b1-b1-Menu">
            <div id="b1-Menu_IfLoggedIn"></div>
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
                 <div class="text-align-center" data-container>
                  <span data-expression>My Notifications</span>
                 </div>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div class="display-flex align-items-center" id="b1-b1-HeaderRight">
                <div data-container>
                 <i class="icon padding-y-s padding-x-s fa fa-search fa-1x" data-icon id="b1-Search_Icon" style="margin-right: 0px; padding: 5px;"></i>
                 <i class="icon padding-y-s padding-x-s margin-left-base fa fa-filter fa-1x" data-icon id="b1-Filter_Icon" style="margin-left: 0px; margin-right: 0px; padding: 5px;"></i>
                 <div class="ThemeGrid_Width1" data-container></div>
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
          <div class="OSBlockWidget" data-block="Private.PullToRefresh" id="b1-b1-b2-$b1">
           <div aria-hidden="true" class="pull-to-refresh" data-container id="b1-b1-b2-b1-ptr">
            <div class="genericon" data-container>
             <i class="icon fa fa-angle-down fa-1x" data-icon id="b1-b1-b2-b1-Arrow"></i>
            </div>
            <div class="pull-to-refresh-loading" data-container>
             <i class="icon fa-spin fa fa-spinner fa-1x" data-icon id="b1-b1-b2-b1-Spinner"></i>
            </div>
           </div>
           <div aria-hidden="true" aria-live="assertive" class="pull-to-refresh-a11y wcag-hide-text" data-container id="b1-b1-b2-b1-ptrA11y" role="alert"></div>
          </div>
          <div class="content" data-container id="b1-b1-b2-ContentWrapper">
           <div class="main-content ThemeGrid_Container" data-container id="b1-b1-b2-MainContentWrapper" role="main">
            <div class="content-middle" id="b1-b1-b2-Content">
             <div id="b1-b1-Content">
              <div class="message-list" data-container>
               <div data-container id="b1-FilterDataBlock">
                <div class="OSBlockWidget" data-block="MyNotifications.MessageListBlock" id="b1-$b7">
                 <div class="OSInline" data-container style="width: 100%; background-color: var(--color-neutral-0); border-bottom: 1px solid var(--color-neutral-3); font-size: 0.9em; height: 46px; position: sticky; top: 0">
                  <div class="justify-content-flex-end text-primary-color bold" data-container style="cursor: pointer; height: 22px; position: absolute; right: var(--space-xl); transform: translateY(50%);">
                   <span data-expression>Mark All as Read</span>
                  </div>
                 </div>
                 <div data-container>
                  <div class="list list-group OSFillParent" data-animation-disabled data-list id="b1-b7-Messages_List" style="position: relative;">
                   <div data-container>
                    <div data-list-item data-not-scrollable id="b1-b7-l1-36_0-Messages_List_Item">
                     <div class="list-item-container list-item-float-left">
                      <div class="list-item-left-actions"></div>
                      <div class="list-item background-blue-lightest" data-list-item-content data-not-scrollable>
                       <div class="OSBlockWidget" data-block="MyNotifications.MessageListItem" id="b1-b7-l1-36_0-Messages_List_Item_Private">
                        <div class="display-flex full-width align-items-center" data-container id="b1-b7-l1-36_0-b1-Message_List_Item_Cont">
                         <div class="width15 display-flex justify-content-center margin-right5" data-container id="b1-b7-l1-36_0-b1-Message_List_Item_Image_Cont">
                          <img class="notification-list-icon-badge" data-image data-rendered-size="43x43" src="/UBT_CW/img/UBT_CW.directory_entity_logo.png">
                         </div>
                         <div class="width75" data-container id="b1-b7-l1-36_0-b1-Message_List_Item_Text_Cont">
                          <div class="bold text-ellipsis" data-container id="b1-b7-l1-36_0-b1-Message_List_Item_Title_Cont">
                           <span data-expression id="b1-b7-l1-36_0-b1-Message_List_Item_Title">Test Noti 56</span>
                          </div>
                          <div class="font-size-0-75em text-neutral-6" data-container id="b1-b7-l1-36_0-b1-Message_List_Item_Info_Cont">
                           <span data-expression id="b1-b7-l1-36_0-b1-Message_List_Item_Info">••• •••••••••• ••••• ••</span>
                          </div>
                         </div>
                         <div data-container id="b1-b7-l1-36_0-b1-Message_List_Item_Icon_Cont" style="margin-left: 0px;"></div>
                        </div>
                       </div>
                      </div>
                      <div class="list-item-right-actions"></div>
                     </div>
                    </div>
                   </div>
                   <div data-container>
                    <div data-list-item data-not-scrollable id="b1-b7-l1-36_1-Messages_List_Item">
                     <div class="list-item-container list-item-float-left">
                      <div class="list-item-left-actions"></div>
                      <div class="list-item background-blue-lightest" data-list-item-content data-not-scrollable>
                       <div class="OSBlockWidget" data-block="MyNotifications.MessageListItem" id="b1-b7-l1-36_1-Messages_List_Item_Private">
                        <div class="display-flex full-width align-items-center" data-container id="b1-b7-l1-36_1-b1-Message_List_Item_Cont">
                         <div class="width15 display-flex justify-content-center margin-right5" data-container id="b1-b7-l1-36_1-b1-Message_List_Item_Image_Cont">
                          <img class="notification-list-icon-badge" data-image data-rendered-size="43x43" src="/UBT_CW/img/UBT_CW.logo_assemble.svg">
                         </div>
                         <div class="width75" data-container id="b1-b7-l1-36_1-b1-Message_List_Item_Text_Cont">
                          <div class="bold text-ellipsis" data-container id="b1-b7-l1-36_1-b1-Message_List_Item_Title_Cont">
                           <span data-expression id="b1-b7-l1-36_1-b1-Message_List_Item_Title">•••••• •••••••• •••• •••••••• •••••••• •••••••••••• •••••••••••••</span>
                          </div>
                          <div class="font-size-0-75em text-neutral-6" data-container id="b1-b7-l1-36_1-b1-Message_List_Item_Info_Cont">
                           <span data-expression id="b1-b7-l1-36_1-b1-Message_List_Item_Info">••• •••••••••• •••• ••</span>
                          </div>
                         </div>
                         <div data-container id="b1-b7-l1-36_1-b1-Message_List_Item_Icon_Cont" style="margin-left: 0px;"></div>
                        </div>
                       </div>
                      </div>
                      <div class="list-item-right-actions"></div>
                     </div>
                    </div>
                   </div>
                   <!-- +14 more <div> with identical structure -->
                   <div data-container>
                    <div data-list-item data-not-scrollable id="b1-b7-l1-36_16-Messages_List_Item">
                     <div class="list-item-container list-item-float-left">
                      <div class="list-item-left-actions"></div>
                      <div class="list-item" data-list-item-content data-not-scrollable>
                       <div class="OSBlockWidget" data-block="MyNotifications.MessageListItem" id="b1-b7-l1-36_16-Messages_List_Item_Private">
                        <div class="display-flex full-width align-items-center" data-container id="b1-b7-l1-36_16-b1-Message_List_Item_Cont">
                         <div class="width15 display-flex justify-content-center margin-right5" data-container id="b1-b7-l1-36_16-b1-Message_List_Item_Image_Cont">
                          <img class="notification-list-icon-badge" data-error-placeholder-src="/UBTConnect/img/Connect2_LegacyShared.ubtlogo.png?Y3sBuVtzud9qD9_mle+j0g" data-image data-masked-src="user-image" data-rendered-size="43x43" id="b1-b7-l1-36_16-b1-Sending_User_Photo" src>
                         </div>
                         <div class="width75" data-container id="b1-b7-l1-36_16-b1-Message_List_Item_Text_Cont">
                          <div class="bold text-ellipsis" data-container id="b1-b7-l1-36_16-b1-Message_List_Item_Title_Cont">
                           <span data-expression id="b1-b7-l1-36_16-b1-Message_List_Item_Title">•••• •• •••••• •••</span>
                          </div>
                          <div class="font-size-0-75em text-neutral-6" data-container id="b1-b7-l1-36_16-b1-Message_List_Item_Info_Cont">
                           <span data-expression id="b1-b7-l1-36_16-b1-Message_List_Item_Info">••• •••••••••• •••• ••</span>
                          </div>
                         </div>
                         <div data-container id="b1-b7-l1-36_16-b1-Message_List_Item_Icon_Cont" style="margin-left: 0px;"></div>
                        </div>
                       </div>
                      </div>
                      <div class="list-item-right-actions"></div>
                     </div>
                    </div>
                   </div>
                   <div data-container>
                    <div data-list-item data-not-scrollable id="b1-b7-l1-36_17-Messages_List_Item">
                     <div class="list-item-container list-item-float-left">
                      <div class="list-item-left-actions"></div>
                      <div class="list-item" data-list-item-content data-not-scrollable>
                       <div class="OSBlockWidget" data-block="MyNotifications.MessageListItem" id="b1-b7-l1-36_17-Messages_List_Item_Private">
                        <div class="display-flex full-width align-items-center" data-container id="b1-b7-l1-36_17-b1-Message_List_Item_Cont">
                         <div class="width15 display-flex justify-content-center margin-right5" data-container id="b1-b7-l1-36_17-b1-Message_List_Item_Image_Cont">
                          <img class="notification-list-icon-badge" data-image data-rendered-size="43x43" src="/UBT_CW/img/UBT_CW.logo_assemble.svg">
                         </div>
                         <div class="width75" data-container id="b1-b7-l1-36_17-b1-Message_List_Item_Text_Cont">
                          <div class="bold text-ellipsis" data-container id="b1-b7-l1-36_17-b1-Message_List_Item_Title_Cont">
                           <span data-expression id="b1-b7-l1-36_17-b1-Message_List_Item_Title">•••••••••• ••••• •••••</span>
                          </div>
                          <div class="font-size-0-75em text-neutral-6" data-container id="b1-b7-l1-36_17-b1-Message_List_Item_Info_Cont">
                           <span data-expression id="b1-b7-l1-36_17-b1-Message_List_Item_Info">••• •••••••••• •••• ••</span>
                          </div>
                         </div>
                         <div data-container id="b1-b7-l1-36_17-b1-Message_List_Item_Icon_Cont" style="margin-left: 0px;"></div>
                        </div>
                       </div>
                      </div>
                      <div class="list-item-right-actions"></div>
                     </div>
                    </div>
                   </div>
                   <div data-container>
                    <div data-list-item data-not-scrollable id="b1-b7-l1-36_18-Messages_List_Item">
                     <div class="list-item-container list-item-float-left">
                      <div class="list-item-left-actions"></div>
                      <div class="list-item" data-list-item-content data-not-scrollable>
                       <div class="OSBlockWidget" data-block="MyNotifications.MessageListItem" id="b1-b7-l1-36_18-Messages_List_Item_Private">
                        <div class="display-flex full-width align-items-center" data-container id="b1-b7-l1-36_18-b1-Message_List_Item_Cont">
                         <div class="width15 display-flex justify-content-center margin-right5" data-container id="b1-b7-l1-36_18-b1-Message_List_Item_Image_Cont">
                          <img class="notification-list-icon-badge" data-image data-rendered-size="43x43" src="/UBT_CW/img/UBT_CW.directory_entity_logo.png">
                         </div>
                         <div class="width75" data-container id="b1-b7-l1-36_18-b1-Message_List_Item_Text_Cont">
                          <div class="bold text-ellipsis" data-container id="b1-b7-l1-36_18-b1-Message_List_Item_Title_Cont">
                           <span data-expression id="b1-b7-l1-36_18-b1-Message_List_Item_Title">•••••••• •••• ••• •••</span>
                          </div>
                          <div class="font-size-0-75em text-neutral-6" data-container id="b1-b7-l1-36_18-b1-Message_List_Item_Info_Cont">
                           <span data-expression id="b1-b7-l1-36_18-b1-Message_List_Item_Info">••• •••••••••• ••••• ••</span>
                          </div>
                         </div>
                         <div data-container id="b1-b7-l1-36_18-b1-Message_List_Item_Icon_Cont" style="margin-left: 0px;">
                          <div data-container style="text-align: center; margin-bottom: 5px;">
                           <i class="icon alert-text fa-33 fa fa-exclamation fa-1x" data-icon id="b1-b7-l1-36_18-b1-Message_List_Item_Icon" style="background-color: rgb(255, 255, 255); border-radius: 50px; border-style: solid; border-width: 2px; color: rgb(252, 0, 0); font-size: 12px; height: 20px; padding"></i>
                          </div>
                         </div>
                        </div>
                       </div>
                      </div>
                      <div class="list-item-right-actions"></div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                <OSBlock data-block="Reusable.Spinner" from="src/shared/Connect2_LegacyShared/Spinner/Spinner.tsx" elided="0 elements; dom lines 734+"/>
               </div>
               <OSBlock data-block="Reusable.Spinner" from="src/shared/Connect2_LegacyShared/Spinner/Spinner.tsx" elided="0 elements; dom lines 737+"/>
              </div>
              <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 740+"/>
             </div>
            </div>
           </div>
          </div>
          <footer class="content-bottom" data-advancedhtml role="contentinfo">
           <div class="footer ph bottom" id="b1-b1-b2-Bottom">
            <div id="b1-b1-BottomBar">
             <div id="b1-BottomBar">
              <div data-container>
               <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 751+"/>
              </div>
             </div>
            </div>
           </div>
          </footer>
          <div id="b1-b1-b2-CommonUI">
           <div id="b1-b1-CommonUI_Elements">
            <div id="b1-CommonUI_Elements">
             <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b3">
              <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 906+"/>
              <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 914+"/>
              <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 960+"/>
              <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 970+"/>
              <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 976+"/>
              <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 980+"/>
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
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 2868 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 4370 | `DataActionGetMessages` | 200 |
| 3 | 4830 | `ActionGetSignedImagesInBulk` | 200 |
| 4 | 5497 | `ActionAppManager_AfterInitialize` | 200 |
| 5 | 6057 | `ActionSync_Info_GetMain` | 200 |
| 6 | 6445 | `ActionGetUserInformation` | 200 |
| 7 | 6718 | `ActionGetNumberUnreadMessages` | 200 |
| 8 | 7362 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 9 | 7519 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessages`
- `onClick in MessageListBlock` → `event onClick_GoToMessageDetail of MessageListBlock` → `ScreenBlock_MessageList.onClick_GoToMessageDetail` → `ScreenBlock_MessageList.DataActionGetMessages`
- `ScreenBlock_MessageList.OnReady` → `ScreenBlock_MessageList.onReady` → `ScreenBlock_MessageList.DataActionGetMessages`
- `ScreenBlock_MessageList.onClick_ApplyFilters` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in MessageListBlock` → `event markAllRead of MessageListBlock` → `ScreenBlock_MessageList.onClick_MarkAllAsRead` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`
- `ScreenBlock_MessageList.onClick_ResetFilters` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `onClick in ScreenBlock_MessageList` → `ScreenBlock_MessageList.onClick_CloseSearchAndFilter` → `ScreenBlock_MessageList.onClickSearchClear` → `ScreenBlock_MessageList.onHandle_SearchHistorySelectedItem` → `ScreenBlock_MessageList.refreshMessages` → `ScreenBlock_MessageList.DataActionGetMessages`

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onAppl
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js`
  - lifecycle: Ready
  - navigation: /UBTConnect/MessageDetail(MessageInstanceId); /UBTConnect/Login()
- `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc.js`
  - lifecycle: Initialize, Ready, ParametersChanged
  - feedback: "This message is no longer available", /*Info*/ 0) | vars.value.successMessageInLocal, /*Success*/ 1)
  - JS nodes: Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnInitialize.FocusCursorJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_Search.FocusCursorJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.RefreshMessages.ScrollToTopJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClickSearchClear.SetScrollToTopJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_CloseSearchAndFilter.WasCurrentViewRestoredFromCacheJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_CloseSearchAndFilter.FocusCursorJS, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnKeyup_SearchMessages.CheckForEnterKeyJS
  - inputs: Trigg
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `BasePatterns.Columns_Two`
- not rendered in any captured state: `BasePatterns.CustomContainer`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `Interaction.Animate`
- not rendered in any captured state: `Interaction.InputWithIcon`
- not rendered in any captured state: `Layout.MenuIcon_Back`
- not rendered in any captured state: `MyNotifications.MessageList_Filter`
- not rendered in any captured state: `MyNotifications.MessageList_NoNotifications_Banner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
- not rendered in any captured state: `Reusable.MessageList_NoResults`
- not rendered in any captured state: `Reusable.Warning_PrivateMessage`
- not rendered in any captured state: `UtilityFlow.MessageSearchHistory`
- image not captured: `img/Connect2_LegacyShared.User_rectangle.png`
- image not captured: `img/Connect2_LegacyShared.ubtlogo.png`
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
    <div class="OSBlockWidget" data-block="MyNotifications.ScreenBlock_MessageList" id="$b1">
     <div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
      <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
      <div class="backwards-compatibility connect-theme" data-container>
       <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2">
        <div class="layout layout-side layout-native ios-bounce aside-overlay connect-theme" data-container id="b1-b1-b2-LayoutWrapper">
         <aside class="aside-navigation menu" data-advancedhtml role="complementary">
          <div id="b1-b1-b2-Navigation">
           <div id="b1-b1-Menu">
            <div id="b1-Menu_IfLoggedIn"></div>
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
                 <div class="text-align-center" data-container>
                  <span data-expression>My Notifications</span>
                 </div>
                </div>
               </div>
              </h1>
              <div class="header-right" id="b1-b1-b2-HeaderRight">
               <div class="display-flex align-items-center" id="b1-b1-HeaderRight">
                <div data-container>
                 <i class="icon padding-y-s padding-x-s fa fa-search fa-1x" data-icon id="b1-Search_Icon" style="margin-right: 0px; padding: 5px;"></i>
                 <i class="icon padding-y-s padding-x-s margin-left-base fa fa-filter fa-1x" data-icon id="b1-Filter_Icon" style="margin-left: 0px; margin-right: 0px; padding: 5px;"></i>
                 <div class="ThemeGrid_Width1" data-container></div>
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
          <div class="OSBlockWidget" data-block="Private.PullToRefresh" id="b1-b1-b2-$b1">
           <div aria-hidden="true" class="pull-to-refresh" data-container id="b1-b1-b2-b1-ptr">
            <div class="genericon" data-container>
             <i class="icon fa fa-angle-down fa-1x" data-icon id="b1-b1-b2-b1-Arrow"></i>
            </div>
            <div class="pull-to-refresh-loading" data-container>
             <i class="icon fa-spin fa fa-spinner fa-1x" data-icon id="b1-b1-b2-b1-Spinner"></i>
            </div>
           </div>
           <div aria-hidden="true" aria-live="assertive" class="pull-to-refr
… (truncated)

## Look up on demand

- `migration/screens/MessageList/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/MessageList/analysis/sources/pretty/UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/OutSystemsUI_2_23.Private.PullToRefresh.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/Connect2_LegacyShared.MyNotifications.MessageListItem.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/MessageList/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~3914 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~1311 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~3062 tokens; open the source files listed under 'Look up on demand'
