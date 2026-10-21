# Context pack: Household_Relations

- Route: `/UBTConnect/Household_Relations`; inputs: HouseholdId: LongInteger, MemberId: LongInteger
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Directory_Household.Household_Relations.mvc.js`
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

WARNING: 6 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_DetailPage  [shared: src/shared/UBTConnectLibrary/Layout_DetailPage/Layout_DetailPage.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  ConnectPatterns.Icon  [shell]
  BasePatterns.CustomText  [shell]
    ConnectPatterns.IconInline_Internal  [shell]
  Directory_Household.HouseholdRelations_Block  [BUILD here]
    ConnectPatterns.SkeletonSection  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
          CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
            ConnectPatterns.SkeletonSection  [shell]
              ConnectPatterns.LazyImage  [shell]
                ConnectPatterns.SkeletonSection  [shell]
                  BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.CustomText  [shell]
            ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.Columns_Two  [shell]
          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
            CW_Common.Button  [shell]
              ConnectPatterns.Button  [shell]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
            CW_Common.Button  [shell]
              ConnectPatterns.Button  [shell]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
    ConnectPatterns.SkeletonSection  [shell]
      SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
        BasePatterns.CustomContainer  [shell]
          Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomContainer  [shell]
                ConnectCorePatterns.MemberRelation_ListItem  [BUILD here]
                  BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                    Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.Icon  [shell]
                ConnectCorePatterns.MemberRelation_ListItem  [BUILD here]
                  BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                    Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.Icon  [shell]
      SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
        BasePatterns.CustomContainer  [shell]
          Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomContainer  [shell]
                ConnectCorePatterns.NonMember_ListItem  [shared: src/shared/UBTConnectLibrary/NonMember_ListItem/NonMember_ListItem.tsx]
                  BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                    Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.Icon  [shell]
                ConnectCorePatterns.NonMember_ListItem  [shared: src/shared/UBTConnectLibrary/NonMember_ListItem/NonMember_ListItem.tsx]
                  BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                    Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.HighlightSearch  [shell]
                          ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.Icon  [shell]
                ConnectCorePatterns.NonMember_ListItem  [shared: src/shared/UBTConnectLibrary/NonMember_ListItem/NonMember_ListItem.tsx]
                  BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                    Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.HighlightSearch  [shell]
                          ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.Icon  [shell]
                ConnectCorePatterns.NonMember_ListItem  [shared: src/shared/UBTConnectLibrary/NonMember_ListItem/NonMember_ListItem.tsx]
                  BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                    Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.HighlightSearch  [shell]
                          ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.Icon  [shell]
    CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
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

Collapsed blocks: 12; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 42px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Household_Relations" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">
            <OSBlock data-block="BasePatterns.CustomText" from="shell" elided="3 elements; dom lines 22+"/>
           </div>
          </div>
          <div class="header-right" id="b1-Placeholder_Header_Right"></div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="OSBlockWidget" data-block="Directory_Household.HouseholdRelations_Block" id="$b3">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="71 elements; dom lines 44+"/>
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="312 elements; dom lines 190+"/>
           <OSBlock data-block="CW_Notes.NotesSheet" from="src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx" elided="0 elements; dom lines 834+"/>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 842+"/>
        </div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b5">
       <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 994+"/>
       <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 1002+"/>
       <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 1048+"/>
       <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 1058+"/>
       <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 1064+"/>
       <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 1068+"/>
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
| 1 | 3311 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 4704 | `ActionGetSignedImagesInBulk` | 200 |
| 3 | 4716 | `ActionGetUserInformation` | 200 |
| 4 | 4996 | `DataActionGet_MemberDetails` | 200 |
| 5 | 5318 | `DataActionGet_ParentHouseholdDetails` | 200 |
| 6 | 5453 | `ActionGetSignedImagesInBulk` | 200 |
| 7 | 5701 | `ActionGetSignedImagesInBulk` | 200 |
| 8 | 5962 | `ActionAppManager_AfterInitialize` | 200 |
| 9 | 6745 | `ActionSync_Info_GetMain` | 200 |
| 10 | 7039 | `ActionGetNumberUnreadMessages` | 200 |
| 11 | 7951 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 12 | 8028 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/Directory_Household/HouseholdRelations_Block/DataActionGet_MemberDetails`
- `HouseholdRelations_Block.OnReady` → `HouseholdRelations_Block.screenEvent_OnReady` → `HouseholdRelations_Block.action_Refresh_Get_MemberDetails` → `HouseholdRelations_Block.DataActionGet_MemberDetails`
- `HouseholdRelations_Block fetch at start` → `HouseholdRelations_Block.DataActionGet_MemberDetails`

### `UBTConnect/Directory_Household/HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails`
- `HouseholdRelations_Block.OnReady` → `HouseholdRelations_Block.screenEvent_OnReady` → `HouseholdRelations_Block.action_Refresh_Get_MemberDetails` → `HouseholdRelations_Block.DataActionGet_MemberDetails` → `HouseholdRelations_Block.onAfterFetch_Get_MemberDetails` → `HouseholdRelations_Block.DataActionGet_ParentHouseholdDetails`
- `HouseholdRelations_Block fetch at start` → `HouseholdRelations_Block.DataActionGet_MemberDetails` → `HouseholdRelations_Block.onAfterFetch_Get_MemberDetails` → `HouseholdRelations_Block.DataActionGet_ParentHouseholdDetails`
- `HouseholdRelations_Block fetch at start` → `HouseholdRelations_Block.DataActionGet_ParentHouseholdDetails`

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

### `UBTConnect/Directory_Household/HouseholdRelations_Block/DataActionFetchNotes`
- `HouseholdRelations_Block fetch at start` → `HouseholdRelations_Block.DataActionFetchNotes`

### `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- `NotesSheet.handler_OnAddNoteRequested` → `server AddNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

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

export interface GetSignedImagesInBulkResponse {
  Results: ResultsItem[] /* wire: { List: [...] } */;
}

export interface GetUserInformationResponse {
  UserInformation: UserInformation;
}

export interface Get_MemberDetailsResponse {
  MemberName: string;
  FamilyName: string;
  Father: Father;
  Mother: Mother;
  FormerSpouses: FormerSpouses;
  ParentHouseholdId: string /* Long Integer as string */;
}

export interface Get_ParentHouseholdDetailsResponse {
  Out_siblingRelations: Out_siblingRelationsItem[] /* wire: { List: [...] } */;
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

export interface ResultsItem {
  Id: string /* Long Integer as string */;
  Type: string;
  Size: string;
  SignedURL: string;
  Error: string /* "" in capture */;
}

export interface UserInformation {
  Directory_UserCurrent: Directory_UserCurrent;
  HasPoliciesToAccept: boolean;
}

export interface Father {
  Id: string /* Long Integer as string */;
  HouseholdId: string /* Long Integer as string */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  Title: string;
  Initials: string /* "" in capture */;
  DateOfBirth: string /* "1900-01-01..." = no value */;
  IsDeceased: boolean;
  DeceasedDate: string /* "1900-01-01..." = no value */;
  DisplayAge: boolean;
  Description: string /* "" in capture */;
  DescriptionHighlight: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  MemberRole: string /* "" in capture */;
  LifeCycleText: string;
  LifeCycleText_IsItallic: boolean;
  MarriageText: string /* "" in capture */;
  MarriageHighlightText: string /* "" in capture */;
  MarriagePartnerTakenText: string /* "" in capture */;
  ContryCode: string /* "" in capture */;
  LocalityId: string /* "" in capture */;
  LocalityName: string;
  CountryName: string;
  FormattedLocality: string;
  HasNavigation: boolean;
  HasCTAs: boolean;
  Age: number /* 0 in capture */;
}

export interface Mother {
  Id: string /* Long Integer as string */;
  HouseholdId: string /* Long Integer as string */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  Title: string;
  Initials: string /* "" in capture */;
  DateOfBirth: string /* "1900-01-01..." = no value */;
  IsDeceased: boolean;
  DeceasedDate: string /* "1900-01-01..." = no value */;
  DisplayAge: boolean;
  Description: string /* "" in capture */;
  DescriptionHighlight: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  MemberRole: string /* "" in capture */;
  LifeCycleText: string;
  LifeCycleText_IsItallic: boolean;
  MarriageText: string /* "" in capture */;
  MarriageHighlightText: string /* "" in capture */;
  MarriagePartnerTakenText: string /* "" in capture */;
  ContryCode: string /* "" in capture */;
  LocalityId: string /* "" in capture */;
  LocalityName: string;
  CountryName: string;
  FormattedLocality: string;
  HasNavigation: boolean;
  HasCTAs: boolean;
  Age: number /* 0 in capture */;
}

export interface FormerSpouses {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Out_siblingRelationsItem {
  Id: string /* Long Integer as string */;
  HouseholdId: string /* Long Integer as string */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  Title: string;
  Initials: string /* "" in capture */;
  DateOfBirth: string /* "1900-01-01..." = no value */;
  IsDeceased: boolean;
  DeceasedDate: string /* "1900-01-01..." = no value */;
  DisplayAge: boolean;
  Description: string /* "" in capture */;
  DescriptionHighlight: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  MemberRole: string /* "" in capture */;
  LifeCycleText: string /* "" in capture */;
  LifeCycleText_IsItallic: boolean;
  MarriageText: string /* "" in capture */;
  MarriageHighlightText: string /* "" in capture */;
  MarriagePartnerTakenText: string /* "" in capture */;
  ContryCode: string /* "" in capture */;
  LocalityId: string /* "" in capture */;
  LocalityName: string;
  CountryName: string;
  FormattedLocality: string /* "" in capture */;
  HasNavigation: boolean;
  HasCTAs: boolean;
  Age: number /* 0 in capture */;
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

- `UBTConnect.Directory_Household.Household_Relations.mvc.js`
  - inputs: HouseholdId:LongInteger, MemberId:LongInteger
- `UBTConnect.Directory_Household.HouseholdRelations_Block.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/HouseholdDetails(HouseholdId)
  - JS nodes: UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS, UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS
  - inputs: HouseholdId:LongInteger, MemberId:LongInteger
- `UBTConnectLibrary.ConnectCorePatterns.MemberRelation_ListItem.mvc.js`
  - inputs: In_Title:Text, isEnabled:Boolean, In_DeceasedCaption:Text, In_Relation:Text, In_FormattedLocality:Text, In_IsDeceased:Boolean
- `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
  - lifecycle: Initialize, Destroy
  - exceptions: SecurityException
  - JS nodes: OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.G
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `CW_Notes.NoteListActions`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.AddNote`
- not rendered in any captured state: `ConnectPatterns.BottomSheet`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
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
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Household_Relations" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">
            <OSBlock data-block="BasePatterns.CustomText" from="shell" elided="3 elements; dom lines 22+"/>
           </div>
          </div>
          <div class="header-right" id="b1-Placeholder_Header_Right"></div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="OSBlockWidget" data-block="Directory_Household.HouseholdRelations_Block" id="$b3">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="75 elements; dom lines 43+"/>
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="191 elements; dom lin
… (truncated)

## Look up on demand

- `migration/screens/Household_Relations/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/Household_Relations/analysis/sources/pretty/UBTConnect.Directory_Household.Household_Relations.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdRelations_Block.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.MemberRelation_ListItem.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Household_Relations/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~2122 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~964 tokens; open the source files listed under 'Look up on demand'
