# Context pack: Locality_Details

- Route: `/UBTConnect/Locality_Details`; inputs: LocalityId: LongInteger, PreloadedLocalityLabel: Text
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Directory_Locality.Locality_Details.mvc.js`
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

WARNING: 10 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasCarouselEnabled` (flag check action, candidate); MCP: unavailable: C2EnableCarousel: opens HouseholdCarousel instead of HouseholdDetails values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableCarousel, default on, branches default-only] read it with useFlag('C2EnableCarousel'); variants bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasExtendedShare` (flag check action, candidate); MCP: unavailable: C2ExtendedShare: extended share UI inside screens values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2ExtendedShare, default on, branches default-only] read it with useFlag('C2ExtendedShare'); variants bookmarksbygroup
- `action:getHasMapsEnabled` (flag check action, candidate); MCP: unavailable: C2EnableMaps: entry to Map (Map skipped) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2EnableMaps, default off, branches default-only] read it with useFlag('C2EnableMaps')
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasPhotobookAccess` (flag check action, candidate); MCP: unavailable: mobilePhotobook: access to Photobook values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key mobilePhotobook, default on, branches default-only] read it with useFlag('mobilePhotobook')
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_MainPages  [shared: src/shared/UBTConnectLibrary/Layout_MainPages/Layout_MainPages.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  BasePatterns.Columns_Two  [shell]
    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
  BasePatterns.Columns_Two  [shell]
    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
      ConnectPatterns.StaticInput  [shared: src/shared/UBTConnectLibrary/StaticInput/StaticInput.tsx]
        ConnectPatterns.Icon  [shell]
        ConnectPatterns.TextEllipsis  [shared: src/shared/UBTConnectLibrary/TextEllipsis/TextEllipsis.tsx]
  Layouts.SubHeader_MainPages  [BUILD here]
    BasePatterns.Columns_Two  [shell]
      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
        BasePatterns.Columns_Two  [shell]
          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
            ConnectPatterns.SkeletonSection  [shell]
              BasePatterns.CustomContainer  [shell]
            BasePatterns.CustomContainer  [shell]
              ConnectPatterns.Icon  [shell]
        ConnectPatterns.SkeletonSection  [shell]
          BasePatterns.CustomContainer  [shell]
            Directory_Locality.Locality_DateTimeLabel  [BUILD here]
              Utils.Timer  [BUILD here]
        ConnectPatterns.Icon  [shell]
  BasePatterns.CustomContainer  [shell]
    ConnectPatterns.SkeletonSection  [shell]
      ConnectPatterns.HorizontalTagList  [shared: src/shared/UBTConnectLibrary/HorizontalTagList/HorizontalTagList.tsx]
        ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
          BasePatterns.CustomContainer  [shell]
        ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
          BasePatterns.CustomContainer  [shell]
        ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
          BasePatterns.CustomContainer  [shell]
        ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
          BasePatterns.CustomContainer  [shell]
  Directory_Locality.Locality_Households  [BUILD here]
    BasePatterns.CustomContainer  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.CustomContainer  [shell]
          BasePatterns.CustomContainer  [shell]
            ConnectPatterns.IconText  [shell]
              BasePatterns.Columns_Two  [shell]
                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                  ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
          BasePatterns.CustomContainer  [shell]
            ConnectPatterns.IconText  [shell]
              BasePatterns.Columns_Two  [shell]
                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                  ConnectPatterns.Icon  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
      Directory_Locality.Locality_Households_HouseholdList  [BUILD here]
        BasePatterns.CustomContainer  [shell]
          ConnectPatterns.SkeletonSection  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
            Directory_Household_Blocks.Household_Card  [BUILD here]
              ConnectCorePatterns.ImageCard_LazyLoading  [shared: src/shared/UBTConnectLibrary/ImageCard_LazyLoading/ImageCard_LazyLoading.tsx]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                      ConnectPatterns.SkeletonSection  [shell]
                        ConnectPatterns.LazyImage  [shell]
                          ConnectPatterns.SkeletonSection  [shell]
                            BasePatterns.CustomContainer  [shell]
                  ConnectPatterns.SkeletonSection  [shell]
                    CW_Image.UBT_LazyImage_List  [BUILD here]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                        ConnectPatterns.SkeletonSection  [shell]
                          ConnectPatterns.LazyImage  [shell]
                            ConnectPatterns.SkeletonSection  [shell]
                              BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomContainer  [shell]
                    ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                      ConnectPatterns.IconText  [shell]
                        BasePatterns.Columns_Two  [shell]
                          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                            ConnectPatterns.Icon  [shell]
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
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 12; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 107px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_MainPages" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-main hide-header-on-scroll" data-container id="b1-LayoutWrapper_Main">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Locality_Details" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <div aria-hidden="true" class="sticky-observer" data-container></div>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-main__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="9 elements; dom lines 19+"/>
          </div>
          <div class="ubt-layout-main__search" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="14 elements; dom lines 42+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
         <div class="locality-subtitle" data-container>
          <div class="OSBlockWidget" data-block="Layouts.SubHeader_MainPages" id="$b4">
           <div class="ubt-sub-header-main-pages" data-container>
            <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="34 elements; dom lines 80+"/>
           </div>
          </div>
         </div>
         <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="21 elements; dom lines 155+"/>
        </div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" id="b1-Content">
          <div class="OSBlockWidget" data-block="Directory_Locality.Locality_Households" id="$b17">
           <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="1662 elements; dom lines 209+"/>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 3538+"/>
        </div>
       </footer>
      </div>
      <div class="offline-data-sync" data-container></div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b24">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 3691+"/>
        <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 3699+"/>
        <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 3745+"/>
        <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 3755+"/>
        <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 3761+"/>
        <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 3765+"/>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="dx-bottom-bar-slider dx-bottom-bar-slider-appear" style="--dx-bottom-bar-items: 5; --dx-bottom-bar-active-item: 1; --dx-bottom-bar-transition-duration: undefinedms;">
    <div></div>
   </div>
  </div>
 </div>
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 3566 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 4749 | `ActionGetUserInformation` | 200 |
| 3 | 5108 | `DataActionGet_LocalityDetails` | 200 |
| 4 | 5181 | `DataActionGetLocalityHouseholds` | 200 |
| 5 | 5457 | `DataActionGetMembers` | 200 |
| 6 | 5462 | `DataActionGetMembers` | 200 |
| 7 | 5464 | `DataActionGetMembers` | 200 |
| 8 | 5466 | `DataActionGetMembers` | 200 |
| 9 | 5469 | `DataActionGetMembers` | 200 |
| 10 | 5469 | `DataActionGetMembers` | 200 |
| 11 | 5472 | `DataActionGetMembers` | 200 |
| 12 | 5475 | `DataActionGetMembers` | 200 |
| 13 | 5478 | `DataActionGetMembers` | 200 |
| 14 | 5480 | `DataActionGetMembers` | 200 |
| 15 | 5487 | `DataActionGetMembers` | 200 |
| 16 | 5489 | `DataActionGetMembers` | 200 |
| 17 | 5491 | `DataActionGetMembers` | 200 |
| 18 | 5494 | `ActionGetSignedImagesInBulk` | 200 |
| 19 | 5497 | `DataActionGetMembers` | 200 |
| 20 | 5498 | `DataActionGetMembers` | 200 |
| 21 | 5499 | `DataActionGetMembers` | 200 |
| 22 | 5507 | `DataActionGetMembers` | 200 |
| 23 | 5509 | `DataActionGetMembers` | 200 |
| 24 | 5511 | `DataActionGetMembers` | 200 |
| 25 | 5514 | `ActionGetSignedImagesInBulk` | 200 |
| 26 | 5521 | `DataActionGetMembers` | 200 |
| 27 | 5656 | `DataActionGetMembers` | 200 |
| 28 | 5660 | `DataActionGetMembers` | 200 |
| 29 | 5664 | `DataActionGetMembers` | 200 |
| 30 | 5739 | `DataActionGetMembers` | 200 |
| 31 | 5749 | `ActionGetSignedImagesInBulk` | 200 |
| 32 | 5824 | `ActionGetSignedImagesInBulk` | 200 |
| 33 | 6683 | `ActionGetSignedImagesInBulk` | 200 |
| 34 | 6687 | `ActionGetSignedImagesInBulk` | 200 |
| 35 | 6715 | `ActionAppManager_AfterInitialize` | 200 |
| 36 | 7210 | `ActionGetSignedImagesInBulk` | 200 |
| 37 | 7295 | `ActionSync_Info_GetMain` | 200 |
| 38 | 7604 | `ActionGetNumberUnreadMessages` | 200 |
| 39 | 8363 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 40 | 10076 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils.cache_UserInfo_GetCallback` → `server GetUserInformation`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/Directory_Locality/Locality_Details/DataActionGet_LocalityDetails`
- `Locality_Details.OnReady` → `Locality_Details.screenEvent_OnReady` → `Locality_Details.DataActionGet_LocalityDetails`
- `Locality_Details fetch at start` → `Locality_Details.DataActionGet_LocalityDetails`

### `UBTConnect/Directory_Locality/Locality_Households_HouseholdList/DataActionGetLocalityHouseholds`
- `Locality_Households_HouseholdList.OnReady` → `Locality_Households_HouseholdList.scr
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.Directory_Locality.Locality_Details.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/CountryDetails(CountryCode); /UBTConnect/BrowseDirectory(CountryCode); /UBTConnect/Search(); /UBTConnect/OneSchoolGlobalDetails(In_OneSchoolGlobalId); /UBTConnect/Map(In_InitialLongitude, In_InitialLatitude); /UBTConnect/HouseholdDetails(HouseholdId)
  - JS nodes: UBTConnect.Directory_Locality.Locality_Details.mvc$controller.Handler_HorizontalTagListChanged.ScrollTopJS
  - inputs: LocalityId:LongInteger, PreloadedLocalityLabel:Text
- `UBTConnectLibrary.Layouts.SubHeader_MainPages.mvc.js`
  - inputs: In_IsShowSearchIcon:Boolean
- `UBTConnect.Directory_Locality.Locality_DateTimeLabel.mvc.js`
  - lifecycle: Initialize
  - inputs: In_TimezoneOffset:Integer
- `UBTConnect_Utils.Utils.Timer.mvc.js`
  - lifecycle: Initialize, Destroy
  - JS nodes: UBTConnect_Utils.Utils.Timer.mvc$controller.OnDestroy.RemoveIntervalJS, UBTConnect_Utils.Utils.Timer.mvc$controller.OnInitialize.StartIntervalJS
  - inputs: In_Delay:Integer
- `UBTConnect.Directory_Locality.Locality_Households.mvc.js`
  - inputs: In_LocalityId:LongInteger, In_BretherenCount:Integer, In_HouseholdCount:Integer
- `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`
  - lifecycle: Initialize, Ready
  - navigation: /UBTConnect/HouseholdCarousel(In_StartingHouseholdId)
  - JS nodes: UBTConnect.Di
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectPatterns.AvatarImage`
- not rendered in any captured state: `ConnectPatterns.ComingSoon`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `Directory_CommonBlocks.Directory_EmptyState`
- not rendered in any captured state: `Directory_Household.HouseholdDetails_Block`
- not rendered in any captured state: `Directory_Locality.Locality_Interchange`
- not rendered in any captured state: `Directory_Locality.Locality_OneSchoolGlobal`
- not rendered in any captured state: `Directory_Locality.Locality_Subdivisions`
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
<body class="phone portrait osx is-ltr" style="--header-size-content: 107px; --footer-height: 56px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_MainPages" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-main hide-header-on-scroll" data-container id="b1-LayoutWrapper_Main">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Locality_Details" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <div aria-hidden="true" class="sticky-observer" data-container></div>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-main__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="9 elements; dom lines 19+"/>
          </div>
          <div class="ubt-layout-main__search" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="14 elements; dom lines 42+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
         <div class="locality-subtitle" data-container>
          <div class="OSBlockWidget" data-block="Layouts.SubHeader_MainPages" id="$b4">
           <div class="ubt-sub-header-main-pages" data-container>
            <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="34 elements; dom lines 80+"/>
           </div>
          </div>
         </div>
         <OSBlock data-block="BasePatterns.CustomContainer" from="shell" elided="25 elements; dom lines 155+"/>
        </div>
       </header>
       <div class="content" data-container id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class=
… (truncated)

## Look up on demand

- `migration/screens/Locality_Details/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect.Directory_Locality.Locality_Details.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnectLibrary.Layouts.SubHeader_MainPages.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect.Directory_Locality.Locality_DateTimeLabel.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect_Utils.Utils.Timer.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect.Directory_Locality.Locality_Households.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect.Directory_Household_Blocks.Household_Card.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Locality_Details/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~2291 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~1335 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~3213 tokens; open the source files listed under 'Look up on demand'
- pack is still ~24383 tokens (budget 14000): the markup itself is large; consider splitting the screen task by block
