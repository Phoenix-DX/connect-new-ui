# Context pack: HouseholdCarousel

- Route: `/UBTConnect/HouseholdCarousel`; inputs: In_StartingHouseholdId: LongInteger
- Tier: **wait**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.Directory_Household.HouseholdCarousel.mvc.js`
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

WARNING: 9 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:connect_LaunchDarkly_PermissionCheck` (flag check action, candidate); MCP: unavailable: not a feature flag: shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); decision: not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14) [key connect_LaunchDarkly_PermissionCheck, default on, branches none] read it with useFlag('connect_LaunchDarkly_PermissionCheck'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasC1DirectoryView` (flag check action, candidate); MCP: unavailable: C2EnableC1DirectoryView: Directory tab opens CountryList (on) or Locality_Details values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableC1DirectoryView, default on, branches default-only] read it with useFlag('C2EnableC1DirectoryView'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasCarouselEnabled` (flag check action, candidate); MCP: unavailable: C2EnableCarousel: opens HouseholdCarousel instead of HouseholdDetails values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2EnableCarousel, default on, branches default-only] read it with useFlag('C2EnableCarousel'); variants bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasExtendedShare` (flag check action, candidate); MCP: unavailable: C2ExtendedShare: extended share UI inside screens values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2ExtendedShare, default on, branches default-only] read it with useFlag('C2ExtendedShare'); variants bookmarksbygroup
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasPhotobookAccess` (flag check action, candidate); MCP: unavailable: mobilePhotobook: access to Photobook values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key mobilePhotobook, default on, branches default-only] read it with useFlag('mobilePhotobook')
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `launchDarkly_FF.mobileDirectoryBookmarkNote` (static entity record); MCP: unavailable: mobileDirectoryBookmarkNote: bookmark note branch, read directly by the bottom bar (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key mobileDirectoryBookmarkNote, default off, branches default-only] read it with useFlag('mobileDirectoryBookmarkNote'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_DetailPage  [shared: src/shared/UBTConnectLibrary/Layout_DetailPage/Layout_DetailPage.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  ConnectPatterns.Icon  [shell]
  ConnectPatterns.SkeletonSection  [shell]
  Directory_Caroussel.EntitiesCarousel  [shared: NOT BUILT → change request]
    Interaction.Carousel  [shared: src/shared/osui/Carousel/Carousel.tsx]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
        Directory_Caroussel.EntitiesCarousel_HouseholdDetails  [shared: NOT BUILT → change request]
          Directory_Household.HouseholdDetails_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Block (name match)]
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
                      Directory_Caroussel.CarouselTag  [shared: src/shared/UBTConnect/CarouselTag/CarouselTag.tsx]
                        ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                          BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.HorizontalTagList  [shared: src/shared/UBTConnectLibrary/HorizontalTagList/HorizontalTagList.tsx]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                          CW_CTA_PopUps.AddressPopup_Wrapper  [shared: src/shared/UBTConnect_Utils/AddressPopup_Wrapper/AddressPopup_Wrapper.tsx]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                                ConnectPatterns.Icon  [shell]
                            CW_CTA_PopUps.AddressPopup  [shared: src/shared/UBTConnect_Utils/AddressPopup/AddressPopup.tsx]
                              CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                        ConnectPatterns.SeeMoreSection  [shared: src/shared/UBTConnectLibrary/SeeMoreSection/SeeMoreSection.tsx]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.SkeletonSection  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
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
                    CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                      CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
              Directory_Household_Blocks.HouseholdDetails_Members_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Members_Block/HouseholdDetails_Members_Block.tsx]
                ConnectPatterns.SkeletonSection  [shell]
                  BasePatterns.CustomContainer  [shell]
                    SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                      BasePatterns.CustomContainer  [shell]
                        Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                  SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                    BasePatterns.CustomContainer  [shell]
                      Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                        BasePatterns.CustomContainer  [shell]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
        Directory_Caroussel.EntitiesCarousel_HouseholdDetails  [shared: NOT BUILT → change request]
          Directory_Household.HouseholdDetails_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Block (name match)]
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
                      Directory_Caroussel.CarouselTag  [shared: src/shared/UBTConnect/CarouselTag/CarouselTag.tsx]
                        ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                          BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.HorizontalTagList  [shared: src/shared/UBTConnectLibrary/HorizontalTagList/HorizontalTagList.tsx]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                          CW_CTA_PopUps.AddressPopup_Wrapper  [shared: src/shared/UBTConnect_Utils/AddressPopup_Wrapper/AddressPopup_Wrapper.tsx]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                                ConnectPatterns.Icon  [shell]
                            CW_CTA_PopUps.AddressPopup  [shared: src/shared/UBTConnect_Utils/AddressPopup/AddressPopup.tsx]
                              CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                        ConnectPatterns.SeeMoreSection  [shared: src/shared/UBTConnectLibrary/SeeMoreSection/SeeMoreSection.tsx]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.SkeletonSection  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
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
                    CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                      CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
              Directory_Household_Blocks.HouseholdDetails_Members_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Members_Block/HouseholdDetails_Members_Block.tsx]
                ConnectPatterns.SkeletonSection  [shell]
                  BasePatterns.CustomContainer  [shell]
                    SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                      BasePatterns.CustomContainer  [shell]
                        Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
                              BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                                Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                                  CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                                    ConnectPatterns.SkeletonSection  [shell]
                                      ConnectPatterns.LazyImage  [shell]
                                        ConnectPatterns.SkeletonSection  [shell]
                                          BasePatterns.CustomContainer  [shell]
                                          BasePatterns.CustomContainer  [shell]
                                            ConnectPatterns.Icon  [shell]
                                  BasePatterns.CustomText  [shell]
                                    ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomText  [shell]
                                    ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                  SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                    BasePatterns.CustomContainer  [shell]
                      Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
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
                                BasePatterns.CustomText  [shell]
                                  ConnectPatterns.HighlightSearch  [shell]
                                    ConnectPatterns.IconInline_Internal  [shell]
                                BasePatterns.CustomContainer  [shell]
                                  ConnectPatterns.Icon  [shell]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
        Directory_Caroussel.EntitiesCarousel_HouseholdDetails  [shared: NOT BUILT → change request]
          Directory_Household.HouseholdDetails_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Block (name match)]
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
                      Directory_Caroussel.CarouselTag  [shared: src/shared/UBTConnect/CarouselTag/CarouselTag.tsx]
                        ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                          BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.HorizontalTagList  [shared: src/shared/UBTConnectLibrary/HorizontalTagList/HorizontalTagList.tsx]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                          CW_CTA_PopUps.AddressPopup_Wrapper  [shared: src/shared/UBTConnect_Utils/AddressPopup_Wrapper/AddressPopup_Wrapper.tsx]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                                ConnectPatterns.Icon  [shell]
                            CW_CTA_PopUps.AddressPopup  [shared: src/shared/UBTConnect_Utils/AddressPopup/AddressPopup.tsx]
                              CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                        ConnectPatterns.SeeMoreSection  [shared: src/shared/UBTConnectLibrary/SeeMoreSection/SeeMoreSection.tsx]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.SkeletonSection  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
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
                    CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                      CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
              Directory_Household_Blocks.HouseholdDetails_Members_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Members_Block/HouseholdDetails_Members_Block.tsx]
                ConnectPatterns.SkeletonSection  [shell]
                  BasePatterns.CustomContainer  [shell]
                    SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                      BasePatterns.CustomContainer  [shell]
                        Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
                              BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
                                Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
                                  CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
                                    ConnectPatterns.SkeletonSection  [shell]
                                      ConnectPatterns.LazyImage  [shell]
                                        ConnectPatterns.SkeletonSection  [shell]
                                          BasePatterns.CustomContainer  [shell]
                                          BasePatterns.CustomContainer  [shell]
                                            ConnectPatterns.Icon  [shell]
                                  BasePatterns.CustomText  [shell]
                                    ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomText  [shell]
                                    ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                  SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                    BasePatterns.CustomContainer  [shell]
                      Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                        BasePatterns.CustomContainer  [shell]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
        Directory_Caroussel.EntitiesCarousel_HouseholdDetails  [shared: NOT BUILT → change request]
          Directory_Household.HouseholdDetails_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Block (name match)]
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
                      Directory_Caroussel.CarouselTag  [shared: src/shared/UBTConnect/CarouselTag/CarouselTag.tsx]
                        ConnectPatterns.TagContent  [shared: src/shared/UBTConnectLibrary/TagContent/TagContent.tsx]
                          BasePatterns.CustomContainer  [shell]
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.ImageCard__Content  [shared: src/shared/UBTConnectLibrary/ImageCard__Content/ImageCard__Content.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectPatterns.HorizontalTagList  [shared: src/shared/UBTConnectLibrary/HorizontalTagList/HorizontalTagList.tsx]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                            ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                              BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                        BasePatterns.CustomContainer  [shell]
                          CW_CTA_PopUps.AddressPopup_Wrapper  [shared: src/shared/UBTConnect_Utils/AddressPopup_Wrapper/AddressPopup_Wrapper.tsx]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                                ConnectPatterns.Icon  [shell]
                            CW_CTA_PopUps.AddressPopup  [shared: src/shared/UBTConnect_Utils/AddressPopup/AddressPopup.tsx]
                              CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                        ConnectPatterns.SeeMoreSection  [shared: src/shared/UBTConnectLibrary/SeeMoreSection/SeeMoreSection.tsx]
                          BasePatterns.CustomText  [shell]
                            ConnectPatterns.IconInline_Internal  [shell]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
                            BasePatterns.CustomContainer  [shell]
                              BasePatterns.Columns_Two  [shell]
                                Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                  ConnectPatterns.IconText  [shell]
                                    BasePatterns.Columns_Two  [shell]
                                      Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
                                        ConnectPatterns.Icon  [shell]
                                        BasePatterns.CustomText  [shell]
                                          ConnectPatterns.IconInline_Internal  [shell]
                                  BasePatterns.CustomContainer  [shell]
                                    BasePatterns.CustomText  [shell]
                                      ConnectPatterns.IconInline_Internal  [shell]
              ConnectPatterns.SkeletonSection  [shell]
                BasePatterns.CustomContainer  [shell]
                  BasePatterns.CustomText  [shell]
                    ConnectPatterns.IconInline_Internal  [shell]
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
                    CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                      CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                      CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                    CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
              Directory_Household_Blocks.HouseholdDetails_Members_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Members_Block/HouseholdDetails_Members_Block.tsx]
                ConnectPatterns.SkeletonSection  [shell]
                  BasePatterns.CustomContainer  [shell]
                    SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                      BasePatterns.CustomContainer  [shell]
                        Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                          BasePatterns.CustomContainer  [shell]
                            BasePatterns.CustomText  [shell]
                              ConnectPatterns.IconInline_Internal  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                            ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                              ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                                ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                                  BasePatterns.CustomContainer  [shell]
                                                    ConnectPatterns.Icon  [shell]
                                                BasePatterns.CustomContainer  [shell]
                                      CW_CTA_PopUps.ContactByMessage_Wrapper  [shared: src/shared/UBTConnect_Utils/ContactByMessage_Wrapper/ContactByMessage_Wrapper.tsx]
                                        CW_CTA_PopUps.ContactPopup_ByMessage  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByMessage/ContactPopup_ByMessage.tsx]
                                          CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.ContactPopup_ByPhone  [shared: src/shared/UBTConnect_Utils/ContactPopup_ByPhone/ContactPopup_ByPhone.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_CTA_PopUps.SharePopup  [shared: src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx]
                                        CW_CTA_PopUps.ContactPopup  [shared: src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx]
                                      CW_Notes.NotesSheet  [shared: src/shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                            ConnectCorePatterns.Member_ListItem  [shared: src/shared/UBTConnectLibrary/Member_ListItem/Member_ListItem.tsx]
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
                                  BasePatterns.CustomContainer  [shell]
                  SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                    BasePatterns.CustomContainer  [shell]
                      Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                        BasePatterns.CustomContainer  [shell]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
      Directory_Caroussel.EntitiesCarousel_Element  [shared: NOT BUILT → change request]
    Directory_Caroussel.EntitiesCarousel_HeaderGenerator  [shared: NOT BUILT → change request]
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
CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 12; folded identical rows: 2.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
 <div aria-hidden="true" id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container slide-from-right-enter-done" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="DetailPage">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/HouseholdCarousel" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">
            <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="2 elements; dom lines 22+"/>
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
          <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel" id="$b3">
           <OSBlock data-block="Interaction.Carousel" from="src/shared/osui/Carousel/Carousel.tsx" elided="2305 elements; dom lines 42+"/>
           <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_HeaderGenerator" id="b3-$b3"></div>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 4756+"/>
        </div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b6">
       <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 4908+"/>
       <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 4916+"/>
       <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 4962+"/>
       <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 4972+"/>
       <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 4978+"/>
       <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 4982+"/>
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
      <OSBlock data-block="CW_Share.ShareSheet" from="src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx" elided="0 elements; dom lines 4995+"/>
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
      <OSBlock data-block="CW_Share.ShareSheet" from="src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx" elided="0 elements; dom lines 5007+"/>
     </div>
    </div>
   </div>
  </div>
 </div>
 <!-- +2 more <div> with identical structure -->
</body>
```

## Calls

| # | t ms | action | status |
|---|---|---|---|
| 1 | 2693 | `DataActionGetHousehold` | 200 |
| 2 | 2724 | `DataActionGetHousehold` | 200 |
| 3 | 2725 | `DataActionFetchContactDetails` | 200 |
| 4 | 2763 | `DataActionGetHousehold` | 200 |
| 5 | 2764 | `DataActionFetchContactDetails` | 200 |
| 6 | 2780 | `DataActionGetHousehold` | 200 |
| 7 | 2792 | `DataActionFetchContactDetails` | 200 |
| 8 | 2794 | `DataActionFetchContactDetails` | 200 |
| 9 | 2795 | `DataActionGetHousehold_Coordinates` | 200 |
| 10 | 2799 | `DataActionGetHousehold_Coordinates` | 200 |
| 11 | 2839 | `DataActionGetHousehold_Coordinates` | 200 |
| 12 | 2873 | `DataActionGetHousehold_Coordinates` | 200 |
| 13 | 2984 | `DataActionFetchContactDetails` | 200 |
| 14 | 2992 | `ActionGetSignedImagesInBulk` | 200 |
| 15 | 3068 | `ActionGetSignedImagesInBulk` | 200 |
| 16 | 3069 | `DataActionFetchContactDetails` | 200 |
| 17 | 3091 | `DataActionFetchContactDetails` | 200 |
| 18 | 3097 | `DataActionFetchContactDetails` | 200 |
| 19 | 3491 | `ActionGetSignedImagesInBulk` | 200 |
| 20 | 4644 | `DataActionFetchContactDetails` | 200 |
| 21 | 4647 | `DataActionFetchContactDetails` | 200 |
| 22 | 4660 | `DataActionFetchContactDetails` | 200 |
| 23 | 4684 | `DataActionFetchContactDetails` | 200 |
| 24 | 4724 | `DataActionFetchContactDetails` | 200 |
| 25 | 4727 | `DataActionFetchContactDetails` | 200 |
| 26 | 4818 | `DataActionFetchContactDetails` | 200 |
| 27 | 5332 | `DataActionFetchContactDetails` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold`
- `HouseholdDetails_Block.refresh_GetHouseholdDetail` → `HouseholdDetails_Block.DataActionGetHousehold`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `HouseholdDetails_Block.OnParametersChanged` → `HouseholdDetails_Block.screenEvent_OnParametersChanged` → `HouseholdDetails_Block.DataActionGetHousehold`
- `HouseholdDetails_Block fetch at start` → `HouseholdDetails_Block.DataActionGetHousehold`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- `Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`

### `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold_Coordinates`
- `HouseholdDetails_Block.refresh_GetHouseholdCoordinates` → `HouseholdDetails_Block.DataActionGetHousehold_Coordinates`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `HouseholdDetails_Block fetch at start` → `HouseholdDetails_Block.DataActionGetHousehold_Coordinates`

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Notes of ActionsMenu` → `Directory_EntityDetailsActions.handler_AddNotes` → `Directory_EntityDetailsActions.action_RefreshFetchNotes` → `Directory_EntityDetailsActions.DataActionFetchNotes`
- `Directory_EntityDetailsActions.OnReady` → `Directory_EntityDetailsActions.onReady` → `Directory_EntityDetailsActions.action_RefreshFetchNotes` → `Directory_EntityDetailsActions.DataActionFetchNotes`
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchNotes`

### `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- `NotesSheet.handler_OnAddNoteRequested` → `server AddNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.Directory_Household.HouseholdCarousel.mvc.js`
  - lifecycle: Initialize
  - inputs: In_StartingHouseholdId:LongInteger
- `UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js`
  - lifecycle: Initialize
  - JS nodes: UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller.Handler_EntitiesCarousel_Initialized.GetSplideCallbacksJS, UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller.Action_UpdateCarouselInternalPosition.SetInternalPositionJS
  - inputs: In_EntitiesCarousel_Items:RecordList, In_StartingPosition:Integer, In_ConnectEntityTypeId:Text
- `UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js`
  - lifecycle: Ready, ParametersChanged
  - inputs: In_ConnectEntityTypeId:Text, In_EntityId:LongInteger, In_CarouselLength:Integer, In_Index_ActiveElement:Integer, In_Index_NextActiveElement:Integer, In_Index_CurrentElement:Integer, In_RenderBuffer:Integer
- `UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js`
  - inputs: In_HouseholdId:LongInteger, In_IsSkeletonOnly:Boolean
- `UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js`
  - lifecycle: Pa
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
- not rendered in any captured state: `ConnectCorePatterns.KebabButtonMenu`
- not rendered in any captured state: `ConnectPatterns.AddNote`
- not rendered in any captured state: `ConnectPatterns.BottomSheet`
- not rendered in any captured state: `ConnectPatterns.Button`
- not rendered in any captured state: `ConnectPatterns.ComingSoon`
- not rendered in any captured state: `ConnectPatterns.EmptyList`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `ConnectPatterns.Input`
- not rendered in any captured state: `Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails`
- not rendered in any captured state: `Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List`
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
 <div aria-hidden="true" id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container slide-from-right-enter-done" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_DetailPage" id="DetailPage">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-detail" data-container id="b1-LayoutWrapper_Detail">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/HouseholdCarousel" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content" data-container>
          <div class="ubt-layout-detail__left" data-container>
           <OSBlock data-block="ConnectPatterns.Icon" from="shell" elided="1 elements; dom lines 17+"/>
           <div class="header-title text-align-center OSInline" id="b1-Placeholder_Header_Title">
            <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="2 elements; dom lines 22+"/>
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
          <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel" id="$b3">
           <OSBlock data-block="Interaction.Carousel" from="src/shared/osui/Carousel/Carousel.tsx" elided="1234 elements; dom lines 42+"/>
           <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_HeaderGenerator" id="b3-$b3"></div>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
         <OSBlock data-block="App_Common.BottomBarMenu" from="src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx" elided="69 elements; dom lines 2588+"/>
        </div>
       </footer>
      </div>
     </div>
     <div id="b1-Placeholder_CommonUI_Insi
… (truncated)

## Look up on demand

- `migration/screens/HouseholdCarousel/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/HouseholdCarousel/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~2630 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~1088 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~4099 tokens; open the source files listed under 'Look up on demand'
- pack is still ~37490 tokens (budget 14000): the markup itself is large; consider splitting the screen task by block
