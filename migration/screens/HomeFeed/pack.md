# Context pack: HomeFeed

- Route: `/UBTConnect/HomeFeed`; inputs: none
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Home.HomeFeed.mvc.js`
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
- P-FLAGS Feature flags [accepted] when the route reads a feature flag (flags.py route <S>); reference: none yet
- P-FORM Forms [accepted] when the route has inputs the user edits; reference: none yet
- P-LIST Lists [accepted] when the route renders an OutSystems List; reference: none yet
- P-MOCKS Mocks and scenarios [accepted] when the route has server calls; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`
- P-MUTATION Mutations keep state [accepted] when the route creates, updates or deletes data, or reads data another route changes; reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- P-OSUI OutSystems UI patterns [accepted] when the route renders an OutSystems UI pattern block (survey/osui.md); reference: none yet
- P-PARAMS Route inputs and navigation [accepted] when the route has inputs or navigates; reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- P-STATES Loading, empty, error and not-captured states [accepted] when always (every route); reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`

## Feature flags of this route

WARNING: 12 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasCarouselEnabled` (flag check action, candidate); MCP: unavailable: C2EnableCarousel: opens HouseholdCarousel instead of HouseholdDetails values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableCarousel, default on, branches default-only] read it with useFlag('C2EnableCarousel'); variants bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasCustomEvents` (flag check action, candidate); MCP: unavailable: C2EnableCustomServices: services part of HomeFeed values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableCustomServices, default on, branches default-only] read it with useFlag('C2EnableCustomServices')
- `action:getHasExtendedShare` (flag check action, candidate); MCP: unavailable: C2ExtendedShare: extended share UI inside screens values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2ExtendedShare, default on, branches default-only] read it with useFlag('C2ExtendedShare'); variants bookmarksbygroup
- `action:getHasFeedEnabled` (flag check action, candidate); MCP: unavailable: C2EnableFeed: Feed CMS part of HomeFeed values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableFeed, default on, branches default-only] read it with useFlag('C2EnableFeed')
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasNewLDM` (flag check action, candidate); MCP: unavailable: C2NewLDM: LDM V2 / V1 entry (LDM external) values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2NewLDM, default on, branches default-only] read it with useFlag('C2NewLDM'); variants ldm_myevents
- `action:getHasNewNotifications` (flag check action, candidate); MCP: unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged values tst=off, prod=?; decision: both branches, default off (TST); only the navigation target changes (Notifications / MessageList), both screens captured, so reference none (user, 2026-10-14) [key C2NewNotifications, default off, branches both] read it with useFlag('C2NewNotifications')
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_HomePage  [shared: src/shared/UBTConnectLibrary/Layout_HomePage/Layout_HomePage.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  BasePatterns.Columns_Two  [shell]
    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
      App_Common.AppLogo_White  [BUILD here]
      ConnectPatterns.Icon  [shell]
      App_Common_Blocks.App_NotificationIcon  [shared: src/shared/UBTConnect/App_NotificationIcon/App_NotificationIcon.tsx]
        App_Common_Blocks.App_IconBadge  [shared: src/shared/UBTConnect/App_IconBadge/App_IconBadge.tsx]
          ConnectPatterns.SkeletonSection  [shell]
            OutSystemsUIOverrides.IconBadge  [shared: src/shared/UBTConnectLibrary/IconBadge/IconBadge.tsx]
              ConnectPatterns.Icon  [shell]
              OutSystemsUIOverrides.Badge  [shared: src/shared/UBTConnectLibrary/Badge/Badge.tsx]
        App_Common_Blocks.App_NotificationRefresh  [shared: src/shared/UBTConnect/App_NotificationRefresh/App_NotificationRefresh.tsx]
  Layouts.SVG_Background_Custom  [shell]
    Utilities.InlineSVG  [shared: src/shared/osui/InlineSVG/InlineSVG.tsx]
  Layouts.SubLayout_HomePageSearch  [shared: src/shared/UBTConnectLibrary/SubLayout_HomePageSearch/SubLayout_HomePageSearch.tsx]
    BasePatterns.CustomContainer  [shell]
      ConnectPatterns.StaticInput  [shared: src/shared/UBTConnectLibrary/StaticInput/StaticInput.tsx]
        ConnectPatterns.Icon  [shell]
        ConnectPatterns.TextEllipsis  [shared: src/shared/UBTConnectLibrary/TextEllipsis/TextEllipsis.tsx]
  Home.Section_FeedWrapper  [BUILD here]
    App_Common_Blocks.Section  [BUILD here]
      BasePatterns.CustomContainer  [shell]
        Home.FeedBlock_Services  [BUILD here]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.Columns_Two  [shell]
              Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                BasePatterns.CustomText  [shell]
                  ConnectPatterns.IconInline_Internal  [shell]
                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.Icon  [shell]
            BasePatterns.CustomContainer  [shell]
              Interaction.Carousel  [shared: src/shared/osui/Carousel/Carousel.tsx]
                Adaptive.Gallery  [shared: src/shared/osui/Gallery/Gallery.tsx]
                  ConnectPatterns.SkeletonSection  [shell]
                    ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                      ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                      ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                      ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                      ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                      ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                      ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.Icon  [shell]
                      BasePatterns.CustomContainer  [shell]
          CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp  [BUILD here]
            ConfirmationDialogs.ActionConfirmationDialog  [shell]
  Home.Section_FeedWrapper  [BUILD here]
    App_Common_Blocks.Section  [BUILD here]
      BasePatterns.CustomContainer  [shell]
        Home.FeedBlock_CommunityPopulation  [shared: src/shared/UBTConnect/FeedBlock_CommunityPopulation/FeedBlock_CommunityPopulation.tsx]
          BasePatterns.CustomContainer  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
            ConnectPatterns.SkeletonSection  [shell]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
  Home.Section_FeedWrapper  [BUILD here]
    App_Common_Blocks.Section  [BUILD here]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.Columns_Two  [shell]
            Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
              BasePatterns.CustomText  [shell]
                ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.IconText  [shell]
                BasePatterns.Columns_Two  [shell]
                  Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                    ConnectPatterns.Icon  [shell]
                    BasePatterns.CustomText  [shell]
                      ConnectPatterns.IconInline_Internal  [shell]
        Home.FeedBlock_Updates  [BUILD here]
          ConnectPatterns.SkeletonSection  [shell]
            BasePatterns.CustomContainer  [shell]
              ConnectCorePatterns.Update_ListItem  [shared: src/shared/UBTConnectLibrary/Update_ListItem/Update_ListItem.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                            BasePatterns.CustomContainer  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                      ConnectCorePatterns.ContextMenu  [shared: src/shared/UBTConnectLibrary/ContextMenu/ContextMenu.tsx]
                        ConnectPatterns.PopupMenu  [shared: src/shared/UBTConnectLibrary/PopupMenu/PopupMenu.tsx]
                          ConnectPatterns.Icon  [shell]
            BasePatterns.CustomContainer  [shell]
              ConnectCorePatterns.Update_ListItem  [shared: src/shared/UBTConnectLibrary/Update_ListItem/Update_ListItem.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                            BasePatterns.CustomContainer  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                      ConnectCorePatterns.ContextMenu  [shared: src/shared/UBTConnectLibrary/ContextMenu/ContextMenu.tsx]
                        ConnectPatterns.PopupMenu  [shared: src/shared/UBTConnectLibrary/PopupMenu/PopupMenu.tsx]
                          ConnectPatterns.Icon  [shell]
            BasePatterns.CustomContainer  [shell]
              ConnectCorePatterns.Update_ListItem  [shared: src/shared/UBTConnectLibrary/Update_ListItem/Update_ListItem.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                      BasePatterns.CustomText  [shell]
                        ConnectPatterns.IconInline_Internal  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                      BasePatterns.Columns_Two  [shell]
                        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                          ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                            BasePatterns.CustomContainer  [shell]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                      ConnectCorePatterns.ContextMenu  [shared: src/shared/UBTConnectLibrary/ContextMenu/ContextMenu.tsx]
                        ConnectPatterns.PopupMenu  [shared: src/shared/UBTConnectLibrary/PopupMenu/PopupMenu.tsx]
                          ConnectPatterns.Icon  [shell]
  Home.Feed_Embeded  [shared: src/shared/UBTConnect/Feed_Embeded/Feed_Embeded.tsx]
    Blocks.Embedded_FeedCMS  [shared: src/shared/UBTConnect_EmbedFeed/Embedded_FeedCMS/Embedded_FeedCMS.tsx]
    CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
    FileTransfer.HandleDownload  [BUILD here]
  App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation  [shared: src/shell/navigation/DialogExitConfirmation.tsx]
    ConfirmationDialogs.ExitConfirmationDialog  [shared: src/shell/navigation/DialogExitConfirmation.tsx]
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
CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 16; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--header-shadow-scroll: hidden; --footer-shadow-scroll: visible;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_HomePage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-home" data-container id="b1-LayoutWrapper_Home" style="--current-svg-height: 260px;">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/HomeFeed" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-home__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="27 elements; dom lines 17+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content background-neutral-4" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" data-container>
          <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-SVG">
           <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
            <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 84+"/>
           </div>
          </div>
          <div class="OSBlockWidget" data-block="Layouts.SubLayout_HomePageSearch" id="b1-SearchInput">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="7 elements; dom lines 103+"/>
          </div>
          <div class="ubt-zindex-2" id="b1-Content">
           <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_Services">
            <div class="OSBlockWidget" data-block="App_Common_Blocks.Section" id="b4-$b1">
             <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="152 elements; dom lines 124+"/>
            </div>
           </div>
           <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_CommunityPopulation">
            <div class="OSBlockWidget" data-block="App_Common_Blocks.Section" id="b6-$b1">
             <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="17 elements; dom lines 441+"/>
            </div>
           </div>
           <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_Updates">
            <div class="OSBlockWidget" data-block="App_Common_Blocks.Section" id="b8-$b1">
             <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="211 elements; dom lines 483+"/>
            </div>
           </div>
           <OSBlock data-block="Home.Feed_Embeded" from="src/shared/UBTConnect/Feed_Embeded/Feed_Embeded.tsx" elided="5 elements; dom lines 923+"/>
           <OSBlock data-block="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" from="src/shell/navigation/DialogExitConfirmation.tsx" elided="4 elements; dom lines 935+"/>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 951+"/>
        </div>
       </footer>
      </div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b13">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 1102+"/>
        <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 1110+"/>
        <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 1156+"/>
        <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 1166+"/>
        <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 1172+"/>
        <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 1176+"/>
       </div>
      </div>
     </div>
    </div>
    <OSBlock data-block="CW_Share.ShareSheet" from="src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx" elided="0 elements; dom lines 1182+"/>
   </div>
   <div class="dx-bottom-bar-slider dx-bottom-bar-slider-appear" style="--dx-bottom-bar-items: 5; --dx-bottom-bar-active-item: 0; --dx-bottom-bar-transition-duration: undefinedms;">
    <div></div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 3799 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 5034 | `DataActionGetFeedConfig` | 200 |
| 3 | 5057 | `DataActionFetchUpdates` | 200 |
| 4 | 5062 | `DataActionFetchCount` | 200 |
| 5 | 5326 | `DataActionGetServices` | 200 |
| 6 | 7211 | `ActionAppManager_AfterInitialize` | 200 |
| 7 | 7961 | `ActionSync_Info_GetMain` | 200 |
| 8 | 8301 | `ActionGetUserInformation` | 200 |
| 9 | 8680 | `ActionGetNumberUnreadMessages` | 200 |
| 10 | 9806 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |
| 11 | 9812 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_EmbedFeed/Blocks/Embedded_FeedCMS/DataActionGetFeedConfig`
- `Embedded_FeedCMS fetch at start` → `Embedded_FeedCMS.DataActionGetFeedConfig`

### `UBTConnect/Home/FeedBlock_Updates/DataActionFetchUpdates`
- `FeedBlock_Updates fetch at start` → `FeedBlock_Updates.DataActionFetchUpdates`

### `UBTConnect/Home/FeedBlock_CommunityPopulation/DataActionFetchCount`
- `FeedBlock_CommunityPopulation fetch at start` → `FeedBlock_CommunityPopulation.DataActionFetchCount`

### `UBTConnect/Home/FeedBlock_Services/DataActionGetServices`
- `FeedBlock_Services fetch at start` → `FeedBlock_Services.DataActionGetServices`

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
- `UBTConnect.fCM_NotificationCall
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.Home.HomeFeed.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/Updates_SingleList(); /UBTConnect/Search()
- `UBTConnect.Home.Section_FeedWrapper.mvc.js`
  - inputs: isTransparentBackground:Boolean, ShowHeader:Boolean, showViewAll:Boolean, Title:Text, MarginTopSizeId:Text
- `UBTConnect.App_Common_Blocks.Section.mvc.js`
  - inputs: isTransparentBackground:Boolean, AddHorizontalPadding:Boolean, MarginTopSizeId:Text
- `UBTConnect.Home.FeedBlock_Services.mvc.js`
  - lifecycle: Initialize
  - navigation: /UBTConnect/OrbitLanding(); /UBTConnect/LDM_MyEvents_V2(); /UBTConnect/LDM_MyEvents(); /UBTConnect/MyEntertaining(); /UBTConnect/AssembleEvents(); /UBTConnect/OrbitAdminLanding(); /UBTConnect/Notes(); /UBTConnect/Services()
  - inputs: ItemPerPage:Integer, ForceAddService:Boolean
- `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc.js`
  - lifecycle: Ready
  - inputs: In_ExtendedClass:Text, ExternalApp_PopUpInfo:Record
- `UBTConnect.Home.FeedBlock_Updates.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/HouseholdCarousel(In_StartingHouseholdId); /UBTConnect/HouseholdDetails(HouseholdId)
  - feedback: "Send gift", /*Info*/ 0)
  - JS nodes: UBTConnect.Home.FeedBlock_Updates.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS, UBTConnect.Home.FeedBlock_Updates.mvc$cont
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `BasePatterns.Columns_Three`
- not rendered in any captured state: `CW_Common.Button`
- not rendered in any captured state: `CW_Image.UBT_LazyImage`
- not rendered in any captured state: `CW_Search.SearchResult_Item`
- not rendered in any captured state: `CW_Share.ShareSheet_Section`
- not rendered in any captured state: `CW_Share.ShareSheet_SectionTitle`
- not rendered in any captured state: `CW_Share.ShareableObject_Generic`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.AvatarDouble`
- not rendered in any captured state: `ConnectPatterns.AvatarImage`
- not rendered in any captured state: `ConnectPatterns.BottomSheet`
- not rendered in any captured state: `ConnectPatterns.Button`
- not rendered in any captured state: `ConnectPatterns.CircleButton_IconPrimary`
- not rendered in any captured state: `ConnectPatterns.ContextMenu_Item`
- not rendered in any captured state: `ConnectPatterns.EmptyList`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `ConnectPatterns.Input`
- not rendered in any captured state: `ConnectPatterns.LazyImage`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
- not rendered in any captured state: `Private.PullToRefresh`
- image not captured: `img/Connect2_LegacyShared.User_rectangle.png`
- image not captured: `img/UBTConnect.ConnectLogo.svg`
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
- image not captured: `scripts/FileTransferPlugin.osfiletransfer_bundle.js`
- image not captured: `scripts/FileTransferPlugin.wrapper.js`
- image not captured: `scripts/OutSystemsUI_2_23.MWO.js`
- image not captured: `scripts/OutSystemsUI_2_23.OutSystemsUI.js`

## Other captured states

### state `loading`
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--header-shadow-scroll: hidden; --footer-shadow-scroll: visible;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_HomePage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-home" data-container id="b1-LayoutWrapper_Home" style="--current-svg-height: 260px;">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/HomeFeed" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-home__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="27 elements; dom lines 17+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content background-neutral-4" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" data-container>
          <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-SVG">
           <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
            <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 84+"/>
           </div>
          </div>
          <div class="OSBlockWidget" data-block="Layouts.SubLayout_HomePageSearch" id="b1-SearchInput">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="7 elements; dom lines 103+"/>
          </div>
          <div class="ubt-zindex-2" id="b1-Content">
           <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_Services">
            <div class="OSBlockWidget" data-block="App_Common_Blocks.Section" id="b4-$b1">
             <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="134 elements; dom lines 124+"/>
            </div>
           </div>
           <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_CommunityPopulation">
            <div class="OSBlockWidget" data-block="App_Common_Blocks.Section" id="b6-$b1">
             <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="17 elements; dom lines 399+"/>
            </div>
           </div>
           <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_Updates">
            <div class="OSBlockWidget" data-block="App_Common_Blocks.Section" id="b8-$b1">
  
… (truncated)

## Look up on demand

- `migration/screens/HomeFeed/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.Home.HomeFeed.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.App_Common.AppLogo_White.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.Home.Section_FeedWrapper.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.App_Common_Blocks.Section.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.Home.FeedBlock_Services.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.Home.FeedBlock_Updates.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/FileTransferPlugin.FileTransfer.HandleDownload.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HomeFeed/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~3084 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~1297 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~3472 tokens; open the source files listed under 'Look up on demand'
