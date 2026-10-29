# Context pack: Bookmarks

- Route: `/UBTConnect/Bookmarks`; inputs: none
- Tier: **?**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Bookmarks.Bookmarks.mvc.js`
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
- PWA / offline: PWA with Workbox now (ADR-9): installable online-first; app service worker only in non-mock builds
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
- OutSystems UI Sidebar: out of scope: render NotCaptured
- Web equivalent of FullCalendarReactive: out of scope: render NotCaptured
- Web equivalent of Leaflet: npm package leaflet 1.9.4 + leaflet.markercluster 1.5.3
- Web equivalent of ReactiveHtmlSanitizer: npm package dompurify 3 configured with the module's allow lists
- Web equivalent of SortableJS: npm package sortablejs 1.15.7
- Packages allowed: @eslint/js, @splidejs/splide, @storybook/react-vite, @tanstack/react-query, @testing-library/dom, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, @types/leaflet, @types/leaflet.markercluster, @types/node, @types/react, @types/react-dom, @types/sortablejs, @vitejs/plugin-react, @vitest/coverage-v8, adaptivecards, dependency-cruiser, dompurify, eslint, eslint-plugin-react-hooks, globals, gsap, jscpd, jsdom, knip, leaflet, leaflet.markercluster, lighthouse, msw, openapi-fetch, openapi-typescript, playwright, prettier, react, react-dom, react-router, sortablejs, storybook, ts-morph, typescript, typescript-eslint, vite, vite-plugin-pwa, vitest, workbox-build, workbox-core, workbox-expiration, workbox-precaching, workbox-routing, workbox-strategies, workbox-window (nothing else)
- Forbidden in routes: NO-RAW-FETCH (server calls only through callAction in api.ts); NO-BROWSER-STORAGE (no tokens or personal data in browser storage; use the shell's stores); NO-ROUTE-CSS (the original CSS is global; routes add no CSS); NO-INLINE-COLOR (visual differences are fixed in markup, not inline styles (inline CSS variables from the capture are fine)); NO-RAW-HTML (HTML from data goes through the shared sanitizer component); NO-WIRE-IN-COMPONENTS (components see domain types only; wire shapes stay in api.ts/mocks.ts); NO-CONSOLE (no debug output left in routes)
Patterns (open the file of each pattern you use; follow its reference implementation):
- P-BACK Back navigation and view cache [accepted] when the original restores the view from cache on back; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/index.tsx`
- P-CALLS Same calls as the original [accepted] when the route has server calls; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/api.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- P-DATA Server data in a route [accepted] when the route calls data or server actions; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/api.ts`, `app/src/screens/AcceptPendingPolicies/types.ts`
- P-DIALOG Popups, sheets and toasts [accepted] when the route opens a dialog or a bottom sheet, or shows a feedback message; reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
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
- `action:getFlagURLByCountryCode` (flag check action, candidate); MCP: unavailable: not a feature flag: country flag image URL; decision: not a flag (false positive): country flag image URL; behaviour built as in the original (user, 2026-10-14) [key getFlagURLByCountryCode, default on, branches none] read it with useFlag('getFlagURLByCountryCode')
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewNotifications` (flag check action, candidate); MCP: unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged values tst=off, prod=?; decision: both branches, default off (TST); only the navigation target changes (Notifications / MessageList), both screens captured, so reference none (user, 2026-10-14) [key C2NewNotifications, default off, branches both] read it with useFlag('C2NewNotifications')
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_MainPages_FixedTitle  [shared: src/shared/UBTConnectLibrary/Layout_MainPages_FixedTitle/Layout_MainPages_FixedTitle.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  BasePatterns.Columns_Two  [shell]
    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
      App_Common_Blocks.App_NotificationIcon  [shared: src/shared/UBTConnect/App_NotificationIcon/App_NotificationIcon.tsx]
        App_Common_Blocks.App_IconBadge  [shared: src/shared/UBTConnect/App_IconBadge/App_IconBadge.tsx]
          ConnectPatterns.SkeletonSection  [shell]
            OutSystemsUIOverrides.IconBadge  [shared: src/shared/UBTConnectLibrary/IconBadge/IconBadge.tsx]
              ConnectPatterns.Icon  [shell]
              OutSystemsUIOverrides.Badge  [shared: src/shared/UBTConnectLibrary/Badge/Badge.tsx]
        App_Common_Blocks.App_NotificationRefresh  [shared: src/shared/UBTConnect/App_NotificationRefresh/App_NotificationRefresh.tsx]
  BasePatterns.Columns_Two  [shell]
    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
      ConnectPatterns.Input  [shared: src/shared/UBTConnectLibrary/Input/Input.tsx]
        Interaction.InputWithIcon  [shared: src/shared/osui/InputWithIcon/InputWithIcon.tsx]
          ConnectPatterns.Icon  [shell]
          Interaction.InputWithIcon  [shared: src/shared/osui/InputWithIcon/InputWithIcon.tsx]
  BasePatterns.CustomContainer  [shell]
    ConnectPatterns.Horizontal_Filter_TagList  [BUILD here]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
          App_CommonBlocks_Filter.FilterSheet_Icon_Label  [BUILD here]
            ConnectPatterns.SkeletonSection  [shell]
              BasePatterns.CustomContainer  [shell]
                ConnectPatterns.Icon  [shell]
                BasePatterns.CustomText  [shell]
                  ConnectPatterns.IconInline_Internal  [shell]
                ConnectPatterns.Icon  [shell]
        ConnectPatterns.SkeletonSection  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
          ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
            BasePatterns.CustomContainer  [shell]
  Bookmarks.Bookmarks_Card_List  [BUILD here]
    BasePatterns.CustomContainer  [shell]
      ConnectPatterns.SkeletonSection  [shell]
        Bookmarks.Bookmarks_Card_Item  [BUILD here]
          ConnectPatterns.ItemCard_WithNotes  [BUILD here]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.AvatarImage  [shared: src/shared/UBTConnectLibrary/AvatarImage/AvatarImage.tsx]
                        BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                App_Common_Blocks.ItemCardActions  [BUILD here]
                  BasePatterns.CustomContainer  [shell]
                    ConnectCorePatterns.ItemCard_ActionBar  [BUILD here]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.IconText  [shell]
                          BasePatterns.Columns_Two  [shell]
                            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                              ConnectPatterns.Icon  [shell]
                              BasePatterns.CustomText  [shell]
                                ConnectPatterns.IconInline_Internal  [shell]
                        ConnectPatterns.IconText  [shell]
                          BasePatterns.Columns_Two  [shell]
                            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                              ConnectPatterns.Icon  [shell]
                              BasePatterns.CustomText  [shell]
                                ConnectPatterns.IconInline_Internal  [shell]
          CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
        Bookmarks.Bookmarks_Card_Item  [BUILD here]
          ConnectPatterns.ItemCard_WithNotes  [BUILD here]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.AvatarImage  [shared: src/shared/UBTConnectLibrary/AvatarImage/AvatarImage.tsx]
                        BasePatterns.CustomContainer  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                App_Common_Blocks.ItemCardActions  [BUILD here]
                  BasePatterns.CustomContainer  [shell]
                    ConnectCorePatterns.ItemCard_ActionBar  [BUILD here]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.IconText  [shell]
                          BasePatterns.Columns_Two  [shell]
                            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                              ConnectPatterns.Icon  [shell]
                              BasePatterns.CustomText  [shell]
                                ConnectPatterns.IconInline_Internal  [shell]
                        ConnectPatterns.IconText  [shell]
                          BasePatterns.Columns_Two  [shell]
                            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                              ConnectPatterns.Icon  [shell]
                              BasePatterns.CustomText  [shell]
                                ConnectPatterns.IconInline_Internal  [shell]
          CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
        Bookmarks.Bookmarks_Card_Item  [BUILD here]
          ConnectPatterns.ItemCard_WithNotes  [BUILD here]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.AvatarImage  [shared: src/shared/UBTConnectLibrary/AvatarImage/AvatarImage.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                            ConnectPatterns.IconSVG  [shell]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
              BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                App_Common_Blocks.ItemCardActions  [BUILD here]
                  BasePatterns.CustomContainer  [shell]
                    ConnectCorePatterns.ItemCard_ActionBar  [BUILD here]
                      BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.IconText  [shell]
                          BasePatterns.Columns_Two  [shell]
                            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                              ConnectPatterns.Icon  [shell]
                              BasePatterns.CustomText  [shell]
                                ConnectPatterns.IconInline_Internal  [shell]
                        ConnectPatterns.IconText  [shell]
                          BasePatterns.Columns_Two  [shell]
                            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                              ConnectPatterns.Icon  [shell]
                              BasePatterns.CustomText  [shell]
                                ConnectPatterns.IconInline_Internal  [shell]
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
Bookmarks.Bookmarks_FilterSheet  [BUILD here]
  App_CommonBlocks_Filter.FilterSheet  [shared: src/shared/UBTConnect/FilterSheet/FilterSheet.tsx]
    ConnectPatterns.BottomSheet  [shared: src/shared/UBTConnectLibrary/BottomSheet/BottomSheet.tsx]
      Interaction.BottomSheet  [shared: src/shared/osui/BottomSheet/BottomSheet.tsx]
        BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
          Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
            ConnectPatterns.Icon  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
            ConnectPatterns.Icon  [shell]
        ConnectPatterns.SkeletonSection  [shell]
          App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item  [shared: src/shared/UBTConnect/FilterSheet_OptionChoice_Item/FilterSheet_OptionChoice_Item.tsx]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.CustomText  [shell]
                  ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.SelectionOption_List  [shared: src/shared/UBTConnectLibrary/SelectionOption_List/SelectionOption_List.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.Icon  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.Icon  [shell]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.CustomContainer  [shell]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
            ConnectPatterns.SelectionOption_List  [shared: src/shared/UBTConnectLibrary/SelectionOption_List/SelectionOption_List.tsx]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
                    ConnectPatterns.Icon  [shell]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
                    ConnectPatterns.Icon  [shell]
              BasePatterns.CustomContainer  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
                    ConnectPatterns.Icon  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              ConnectPatterns.Button  [shell]
              ConnectPatterns.Button  [shell]
    NavigationHandler.BackNavigationHandler  [shell]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 12; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 47px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: visible; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_MainPages_FixedTitle" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll layout-gray-background" data-container id="b1-LayoutWrapper_Main">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Bookmarks" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <div aria-hidden="true" class="sticky-observer" data-container></div>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top-title" data-container id="b1-HeaderTitle">
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-main__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="23 elements; dom lines 19+"/>
          </div>
         </div>
        </div>
        <div class="header-top-search" data-container id="b1-HeaderSearch">
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-main__search" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="22 elements; dom lines 75+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
         <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="63 elements; dom lines 124+"/>
        </div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="OSBlockWidget" data-block="Bookmarks.Bookmarks_Card_List" id="$b8">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="307 elements; dom lines 269+"/>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 903+"/>
        </div>
       </footer>
      </div>
      <div class="offline-data-sync" data-container></div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b10">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 1056+"/>
        <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 1064+"/>
        <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 1110+"/>
        <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 1120+"/>
        <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 1126+"/>
        <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 1130+"/>
       </div>
      </div>
     </div>
    </div>
    <div class="OSBlockWidget" data-block="Bookmarks.Bookmarks_FilterSheet" id="$b11">
     <OSBlock data-block="App_CommonBlocks_Filter.FilterSheet" from="src/shared/UBTConnect/FilterSheet/FilterSheet.tsx" elided="155 elements; dom lines 1137+"/>
    </div>
   </div>
   <div class="dx-bottom-bar-slider dx-bottom-bar-slider-appear" style="--dx-bottom-bar-items: 5; --dx-bottom-bar-active-item: 3; --dx-bottom-bar-transition-duration: undefinedms;">
    <div></div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 3041 | `ActionAppManager_SynchAppContext` | 200 |
| 3 | 5285 | `DataActionGetBookmarks` | 200 |
| 5 | 6457 | `ActionAppManager_AfterInitialize` | 200 |
| 6 | 6935 | `ActionSync_Info_GetMain` | 200 |
| 7 | 7259 | `ActionGetUserInformation` | 200 |
| 8 | 7540 | `ActionGetNumberUnreadMessages` | 200 |
| 9 | 9314 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |
| 10 | 11855 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect/Bookmarks/Bookmarks/DataActionGetBookmarks`
- `Bookmarks_Card_List.bookmarksCardList_OnScrollEnding` → `event onLoadMore of Bookmarks_Card_List` → `Bookmarks.bookmarks_Card_ListOnLoadMore` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `event event_OnClick of Button` → `FilterSheet.onClick_ClearFilters` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `Bookmarks_FilterSheet.handler_FilterSheetApplyFilters` → `event applyFilters of Bookmarks_FilterSheet` → `Bookmarks.handler_ApplyFilters` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `onClick in Button` → `event event_OnClick of Button` → `FilterSheet.onClick_Apply` → `event applyFilters of FilterSheet` → `Bookmarks_FilterSheet.handler_FilterSheetApplyFilters` → `event applyFilters of Bookmarks_FilterSheet` → `Bookmarks.handler_ApplyFilters` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `event clicked of IconText` → `event onClickUnbookmark of ItemCard_ActionBar` → `ItemCardActions.handler_OnClickUnmark` → `event event_ItemUnbookmarked of ItemCardActions` → `event item_Unbookmarked of Bookmarks_Card_Item` → `event item_Unbookmarked of Bookmarks_Card_List` → `Bookmarks.handler_ItemUnbookmarked` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `onClick in CustomContainer` → `event clicked of CustomContainer` → `TagToggle.customContainerClicked` → `event event_Click of TagToggle` → `Horizontal_Filter_TagList.tagToggleToggle` → `event changed of Horizontal_Filter_TagList` → `Bookmarks.handler_OnClickPill` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`
- `onClick in Icon` → `event click of Icon` → `Input.onClick_ClearString` → `event event_ClearString of Input` → `Bookmarks.handler_SearchOnClear` → `Bookmarks.refresh_GetBookmarksData` → `Bookmarks.DataActionGetBookmarks`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.Bookmarks.Bookmarks.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/OneSchoolGlobalCarousel(In_StartingObjectId); /UBTConnect/SupperMeeting_Details(In_SubdivsionId); /UBTConnect/HouseholdCarousel(In_StartingHouseholdId)
  - JS nodes: UBTConnect.Bookmarks.Bookmarks.mvc$controller.ScreenEvent_OnInitialize.CheckRestoredJS
- `UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc.js`
  - inputs: In_TagToggleList:RecordList, In_IsSingleSelection:Boolean, In_IsMandatorySelection:Boolean, In_HorizontalPadding:Text, ExtendedClasses:Text, isEnabled:Boolean, In_TagsLoading:Boolean
- `UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc.js`
  - inputs: HaveFiltersApplied:Boolean, BottomSheetId:Text, isLoaded:Boolean, ShowSubscriptionOnClick:Boolean
- `UBTConnect.Bookmarks.Bookmarks_Card_List.mvc.js`
  - lifecycle: Initialize, Ready
  - inputs: In_Bookmarks:RecordList, In_IsLoading:Boolean, In_SearchString:Text
- `UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc.js`
  - inputs: Bookmark_CardItem:Record, In_SearchString:Text
- `UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js`
  - inputs: In_Title:Text, In_Subtitle:Text, In_TotalNotes:Text, In_Label:Text, AvatarImage:Record, In_SearchString:Text, In_ChannelName:Text, In_ChannelLogo:Text, In
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Cache.CacheControl_UserInfo_Wrapper`
- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_CommonBlocks_Filter.FilterSheet_OptionList_Item`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `CW_Notes.NoteListActions`
- not rendered in any captured state: `CacheControl.CacheControl_AllCountries`
- not rendered in any captured state: `CacheControl.CacheControl_AllLocalities`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.AddNote`
- not rendered in any captured state: `ConnectPatterns.EmptyList`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.LazyImage`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
- not rendered in any captured state: `Private.PullToRefresh`
- image not captured: `img/Connect2_LegacyShared.User_rectangle.png`
- image not captured: `img/UBTConnect.ConnectLogo.svg`
- image not captured: `img/UBTConnect.ConnectLogoWhite.svg`
- image not captured: `img/UBTConnectLibrary.CommunityCountries.svg`
- image not captured: `img/UBTConnectLibrary.CommunityHouseholds.svg`
- image not captured: `img/UBTConnectLibrary.CommunityLocalities.svg`
- image not captured: `img/UBTConnectLibrary.CommunityMembers.svg`
- image not captured: `img/UBTConnectLibrary.CommunityTradelink.svg`
- image not captured: `img/UBTConnectLibrary.ElGusto.svg`
- image not captured: `img/UBTConnectLibrary.HR100.svg`
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
<body class="phone portrait osx is-ltr" style="--header-size-content: 47px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: visible; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_MainPages_FixedTitle" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll layout-gray-background" data-container id="b1-LayoutWrapper_Main">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Bookmarks" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <div aria-hidden="true" class="sticky-observer" data-container></div>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top-title" data-container id="b1-HeaderTitle">
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-main__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="23 elements; dom lines 19+"/>
          </div>
         </div>
        </div>
        <div class="header-top-search" data-container id="b1-HeaderSearch">
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-main__search" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="22 elements; dom lines 75+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
         <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="39 elements; dom lines 124+"/>
        </div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="OSBlockWidget" data-block="Bookmarks.Bookmarks_Card_List" id="$b8">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="610 elements; dom lines 215+"/>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom
… (truncated)

## Look up on demand

- `migration/screens/Bookmarks/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.Bookmarks.Bookmarks.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.Bookmarks.Bookmarks_Card_List.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Bookmarks/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~2621 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~1245 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~3168 tokens; open the source files listed under 'Look up on demand'
- pack is still ~14075 tokens (budget 14000): the markup itself is large; consider splitting the screen task by block
