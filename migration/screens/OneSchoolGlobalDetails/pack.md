# Context pack: OneSchoolGlobalDetails

- Route: `/UBTConnect/OneSchoolGlobalDetails`; inputs: In_OneSchoolGlobalId: LongInteger
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`
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

WARNING: 8 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasExtendedShare` (flag check action, candidate); MCP: unavailable: C2ExtendedShare: extended share UI inside screens values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2ExtendedShare, default on, branches default-only] read it with useFlag('C2ExtendedShare'); variants bookmarksbygroup
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileStudentInformation` (static entity record); MCP: unavailable: mobileStudentInformation: student information section in OneSchoolGlobalDetails values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key mobileStudentInformation, default on, branches default-only] read it with useFlag('mobileStudentInformation')
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_DetailPage  [shared: src/shared/UBTConnectLibrary/Layout_DetailPage/Layout_DetailPage.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  ConnectPatterns.Icon  [shell]
  BasePatterns.CustomText  [shell]
    ConnectPatterns.IconInline_Internal  [shell]
  SubLayout.SubLayout_DirectoryDetailScreen  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen/SubLayout_DirectoryDetailScreen.tsx]
    ConnectPatterns.SkeletonSection  [shell]
      ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.CustomContainer  [shell]
            CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
              ConnectPatterns.SkeletonSection  [shell]
                ConnectPatterns.LazyImage  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    BasePatterns.CustomContainer  [shell]
          BasePatterns.CustomContainer  [shell]
            ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomContainer  [shell]
                CW_CTA_PopUps.AddressPopup_Wrapper  [shared: src/shared/UBTConnect_Utils/AddressPopup_Wrapper/AddressPopup_Wrapper.tsx]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.Icon  [shell]
                  CW_CTA_PopUps.AddressPopup  [shared: src/shared/UBTConnect_Utils/AddressPopup/AddressPopup.tsx]
                    CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                App_Common_Blocks.External_Link  [BUILD here]
                  ConnectPatterns.IconText  [shell]
                    BasePatterns.Columns_Two  [shell]
                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                        ConnectPatterns.Icon  [shell]
                        BasePatterns.CustomText  [shell]
                          ConnectPatterns.IconInline_Internal  [shell]
    BasePatterns.CustomContainer  [shell]
      Directory_CommonBlocks.Directory_EntityDetailsActions  [shared: src/shared/UBTConnect/Directory_EntityDetailsActions/Directory_EntityDetailsActions.tsx]
        ConnectPatterns.SkeletonSection  [shell]
          ConnectCorePatterns.ActionsMenu  [shared: src/shared/UBTConnectLibrary/ActionsMenu/ActionsMenu.tsx]
            BasePatterns.CustomContainer  [shell]
              ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                  ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                  ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                  ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                  ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                  ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
        CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
          CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
            CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
        CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
        CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
        CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
    ConnectPatterns.SkeletonSection  [shell]
      BasePatterns.CustomContainer  [shell]
        ConnectPatterns.ExpandableSection  [BUILD here]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.Columns_Two  [shell]
              Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                ConnectPatterns.Icon  [shell]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.CustomContainer  [shell]
              ConnectPatterns.ComingSoon  [shared: src/shared/UBTConnectLibrary/ComingSoon/ComingSoon.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
          ConnectPatterns.ComingSoon  [shared: src/shared/UBTConnectLibrary/ComingSoon/ComingSoon.tsx]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
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
CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 13; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div aria-hidden="true" id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail ubt-layout-detail--primary" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/OneSchoolGlobalDetails" data-showskipcontent="false">Skip to Content (Press Enter)</a>
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
          <div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="$b3">
           <div class="directory-detail-screen" data-container>
            <div id="b3-Placeholder_DetailCard">
             <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="66 elements; dom lines 46+"/>
            </div>
            <div class id="b3-Placeholder_CallToAction">
             <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="115 elements; dom lines 186+"/>
            </div>
            <div id="b3-Placeholder_Content">
             <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="69 elements; dom lines 425+"/>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 578+"/>
        </div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b28">
       <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 730+"/>
       <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 738+"/>
       <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 784+"/>
       <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 794+"/>
       <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 800+"/>
       <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 804+"/>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 <div class="portal-class" style="display: inline;">
  <div>
   <div class="popup-backdrop" data-popup-backdrop>
    <div aria-modal="true" class="popup-dialog popup-dialog connect-share-portal" data-popup role="dialog">
     <div class="popup-content">
      <OSBlock data-block="CW_Share.ShareSheet" from="src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx" elided="0 elements; dom lines 817+"/>
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
| 1 | 2116 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 4674 | `DataActionGetOneSchoolGlobalDetails` | 200 |
| 3 | 4676 | `DataActionFetchContactDetails` | 200 |
| 4 | 4680 | `DataActionFetchContactDetails` | 200 |
| 5 | 4988 | `DataActionFetchContactDetails` | 200 |
| 6 | 5230 | `ActionAppManager_AfterInitialize` | 200 |
| 7 | 5917 | `ActionSync_Info_GetMain` | 200 |
| 8 | 6261 | `ActionGetUserInformation` | 200 |
| 9 | 6532 | `ActionGetNumberUnreadMessages` | 200 |
| 10 | 7268 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 11 | 7368 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/Directory_OneSchoolGlobal/OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails`
- `OneSchoolGlobalDetails.OnReady` → `OneSchoolGlobalDetails.screenEvent_OnReady` → `OneSchoolGlobalDetails.DataActionGetOneSchoolGlobalDetails`
- `OneSchoolGlobalDetails fetch at start` → `OneSchoolGlobalDetails.DataActionGetOneSchoolGlobalDetails`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- `Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`

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

### `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect.get_Cacheable_MapHouseholds` → `server FetchData_CacheableHouseholds`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect.get_Cacheable_MapEntities` → `server FetchData_CacheableMapEntities`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of Ci
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`
  - lifecycle: Initialize, Ready
  - flags: launchDarkly_FF.mobileStudentInformation
  - JS nodes: UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS, UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS
  - inputs: In_OneSchoolGlobalId:LongInteger
- `UBTConnect.App_Common_Blocks.External_Link.mvc.js`
  - inputs: In_Link:Record, IsEnabled:Boolean, IconVisible:Boolean
- `UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js`
  - lifecycle: Ready
  - inputs: StartExpanded:Boolean, ExtendedClasses:Text
- `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
  - lifecycle: Initialize, Destroy
  - exceptions: SecurityException
  - JS nodes: OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS, OutSystemsUI_2_23.Private.OfflineDat
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `CW_Common.Button`
- not rendered in any captured state: `CW_Notes.NoteListActions`
- not rendered in any captured state: `CW_Search.SearchResult_Item`
- not rendered in any captured state: `CW_Share.ShareSheet_Section`
- not rendered in any captured state: `CW_Share.ShareSheet_SectionTitle`
- not rendered in any captured state: `CW_Share.ShareableObject_Generic`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.AddNote`
- not rendered in any captured state: `ConnectPatterns.BottomSheet`
- not rendered in any captured state: `ConnectPatterns.Button`
- not rendered in any captured state: `ConnectPatterns.EmptyList`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `ConnectPatterns.Input`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
- image not captured: `img/Connect2_LegacyShared.User_rectangle.png`
- image not captured: `img/UBTConnect.ConnectLogo.svg`
- image not captured: `img/UBTConnect.ConnectLogoWhite.svg`
- image not captured: `img/UBTConnectLibrary.OneSchoolGlobal.svg`
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
 <div class="feedback-message-wrapper" id="feedbackMessageContainer">
  <div class="feedback-message feedback-message-info feedback-message-autoclose feedback-message-autoclose" role="alert" tabindex="0">
   <i></i>
   <div class="feedback-message-text">
    <div class="feedback-message--title">Service Interruption</div>
    <div class="feedback-message--body">We’re currently experiencing unusually high traffic, which may affect access to some services. Our team is working to re…</div>
   </div>
  </div>
 </div>
 <div aria-hidden="true" id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail ubt-layout-detail--primary" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/OneSchoolGlobalDetails" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 35+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">
            <OSBlock data-block="BasePatterns.CustomText" from="shell" elided="3 elements; dom lines 40+"/>
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
          <div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="$b3">
           <div class="directory-detail-screen" data-container>
            <div id="b3-Placeholder_DetailCard">
             <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="56 elements; dom lines 64+"/>
            </div>
            <div c
… (truncated)

## Look up on demand

- `migration/screens/OneSchoolGlobalDetails/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/UBTConnect.App_Common_Blocks.External_Link.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/OneSchoolGlobalDetails/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~2703 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~942 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~4672 tokens; open the source files listed under 'Look up on demand'
