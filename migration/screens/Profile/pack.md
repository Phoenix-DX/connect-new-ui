# Context pack: Profile

- Route: `/UBTConnect/Profile`; inputs: none
- Tier: **full**; decision: build; status: spec
- Captured viewport {'width': 390, 'height': 844, 'dpr': 1}; body class `phone portrait osx is-ltr`; states: default, loading, offline
- Screen file: `UBTConnect.App_Profile.Profile.mvc.js`
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

WARNING: 5 feature flag(s) affect this route. Build only what the user decided; ask if undecided.
- `action:getHasExtendedShare` (flag check action, candidate); MCP: unavailable: C2ExtendedShare: extended share UI inside screens values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key C2ExtendedShare, default on, branches default-only] read it with useFlag('C2ExtendedShare'); variants bookmarksbygroup
- `action:getHasNewBookmarks` (flag check action, candidate); MCP: unavailable: C2NewBookmarks: selects the bookmarks branch (D2) values tst=off, prod=?; decision: default-only: TST value off (user, 2026-10-14) [key C2NewBookmarks, default off, branches default-only] read it with useFlag('C2NewBookmarks'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `action:getHasPhotobookAccess` (flag check action, candidate); MCP: unavailable: mobilePhotobook: access to Photobook values tst=on, prod=?; decision: default-only: TST value on (user, 2026-10-14) [key mobilePhotobook, default on, branches default-only] read it with useFlag('mobilePhotobook')
- `clientVar:App_PIN_BiometricEnabled` (client variable, candidate); MCP: unavailable: not a feature flag: user setting for biometric unlock, kept in a client variable; decision: not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14) [key App_PIN_BiometricEnabled, default on, branches none] read it with useFlag('App_PIN_BiometricEnabled'); variants bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks
- `registeredCallbackEvents.onToggle` (static entity record, candidate); MCP: unavailable: not a feature flag: bottom sheet toggle event; decision: not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14) [key onToggle, default on, branches none] read it with useFlag('onToggle'); variants bookmarksbygroup

## Block plan

```
Layouts.Layout_HomePage  [shared: src/shared/UBTConnectLibrary/Layout_HomePage/Layout_HomePage.tsx]
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top  [shell]
  BasePatterns.Columns_Two  [shell]
    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
      ConnectPatterns.IconText  [shell]
        BasePatterns.Columns_Two  [shell]
          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
            ConnectPatterns.Icon  [shell]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
  Layouts.SVG_Background_Custom  [shell]
    Utilities.InlineSVG  [shared: src/shared/osui/InlineSVG/InlineSVG.tsx]
  ConnectPatterns.SkeletonSection  [shell]
    BasePatterns.CustomContainer  [shell]
      CW_Image.UBT_LazyImage  [shared: src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx]
        ConnectPatterns.SkeletonSection  [shell]
          ConnectPatterns.LazyImage  [shell]
            ConnectPatterns.SkeletonSection  [shell]
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
    App_Common_Blocks.SectionSeparator  [shared: src/shared/UBTConnect/SectionSeparator/SectionSeparator.tsx]
      BasePatterns.CustomContainer  [shell]
    BasePatterns.CustomContainer  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      Interaction.InputWithIcon  [shared: src/shared/osui/InputWithIcon/InputWithIcon.tsx]
        ConnectPatterns.Icon  [shell]
    App_Common_Blocks.SectionSeparator  [shared: src/shared/UBTConnect/SectionSeparator/SectionSeparator.tsx]
      BasePatterns.CustomContainer  [shell]
    BasePatterns.CustomContainer  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.Columns_Two  [shell]
        Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
          BasePatterns.CustomText  [shell]
            ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
    App_Common_Blocks.SectionSeparator  [shared: src/shared/UBTConnect/SectionSeparator/SectionSeparator.tsx]
      BasePatterns.CustomContainer  [shell]
    BasePatterns.CustomContainer  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.Columns_Two  [shell]
          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomContainer  [shell]
        BasePatterns.Columns_Two  [shell]
          Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
            BasePatterns.CustomText  [shell]
              ConnectPatterns.IconInline_Internal  [shell]
      BasePatterns.CustomText  [shell]
        ConnectPatterns.IconInline_Internal  [shell]
  ConnectPatterns.FixedFooter  [shared: src/shared/UBTConnectLibrary/FixedFooter/FixedFooter.tsx]
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
          Utilities.ButtonLoading  [shared: src/shared/osui/ButtonLoading/ButtonLoading.tsx]
            CW_Common.Button  [shell]
              ConnectPatterns.Button  [shell]
                ConnectPatterns.IconText  [shell]
                  BasePatterns.Columns_Two  [shell]
                    Adaptive.Columns2  [shared: src/shared/osui/Columns2/Columns2.tsx]
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
App_Cache.CacheControl_UserInfo_Wrapper  [shared: src/shared/UBTConnect/CacheControl_UserInfo_Wrapper/CacheControl_UserInfo_Wrapper.tsx]
  CacheControl.CacheControl_UserInfo  [shared: src/shared/UBTConnect_Utils/CacheControl_UserInfo/CacheControl_UserInfo.tsx]
    CacheControl.CacheControl  [shell]
App_Profile.Profile_HouseholdPreview  [BUILD here]
  ConnectPatterns.BottomSheet  [shared: src/shared/UBTConnectLibrary/BottomSheet/BottomSheet.tsx]
    Interaction.BottomSheet  [shared: src/shared/osui/BottomSheet/BottomSheet.tsx]
      BasePatterns.Columns_Three  [shared: src/shared/UBTConnectLibrary/Columns_Three/Columns_Three.tsx]
        Adaptive.Columns3  [shared: src/shared/osui/Columns3/Columns3.tsx]
          ConnectPatterns.Icon  [shell]
          BasePatterns.CustomText  [shell]
            ConnectPatterns.IconInline_Internal  [shell]
          ConnectPatterns.Icon  [shell]
      Directory_Household.HouseholdDetails_Block  [shared: src/shared/UBTConnect/HouseholdDetails_Block/HouseholdDetails_Block.tsx]
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
                    BasePatterns.CustomContainer  [shell]
                      ConnectPatterns.HorizontalTagList  [shared: src/shared/UBTConnectLibrary/HorizontalTagList/HorizontalTagList.tsx]
                        ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                          BasePatterns.CustomContainer  [shell]
                        ConnectPatterns.TagToggle  [shared: src/shared/UBTConnectLibrary/TagToggle/TagToggle.tsx]
                          BasePatterns.CustomContainer  [shell]
                      ConnectCorePatterns.KebabButtonMenu  [shared: src/shared/UBTConnectLibrary/KebabButtonMenu/KebabButtonMenu.tsx]
                        BasePatterns.CustomContainer  [shell]
                          ConnectCorePatterns.ContextMenu  [shared: src/shared/UBTConnectLibrary/ContextMenu/ContextMenu.tsx]
                            ConnectPatterns.PopupMenu  [shared: src/shared/UBTConnectLibrary/PopupMenu/PopupMenu.tsx]
                              ConnectPatterns.CircleButton_IconPrimary  [shared: src/shared/UBTConnectLibrary/CircleButton_IconPrimary/CircleButton_IconPrimary.tsx]
                                ConnectPatterns.CircleButton_WithLabel  [shared: src/shared/UBTConnectLibrary/CircleButton_WithLabel/CircleButton_WithLabel.tsx]
                                  ConnectPatterns.CircleButton  [shared: src/shared/UBTConnectLibrary/CircleButton/CircleButton.tsx]
                                    BasePatterns.CustomContainer  [shell]
                                      ConnectPatterns.Icon  [shell]
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
              SubLayout.SubLayout_DirectoryDetailScreen_Section  [shared: src/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section/SubLayout_DirectoryDetailScreen_Section.tsx]
                BasePatterns.CustomContainer  [shell]
                  Layouts.SubLayout_Section  [shared: src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx]
                    BasePatterns.CustomContainer  [shell]
        CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
App_Common_Blocks_PopupDialogs.Dialog_CustomChoice  [shared: src/shared/UBTConnect/Dialog_CustomChoice/Dialog_CustomChoice.tsx]
  ConfirmationDialogs.ActionConfirmationDialog  [shell]
CW_Share.ShareSheet  [shared: src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx]
```

## Markup (dom/default.html, compacted)

Collapsed blocks: 14; folded identical rows: 0.
```html
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div aria-hidden="true" id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--header-shadow-scroll: hidden; --footer-shadow-scroll: visible;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_HomePage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-home ubt-profile-screen" data-container id="b1-LayoutWrapper_Home" style="--current-svg-height: calc(200px - var(--header-size));">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Profile" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-home__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="26 elements; dom lines 17+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content background-neutral-0 ubt-fixed-footer--content" data-container id="b1-ContentWrapper" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" data-container>
          <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-SVG">
           <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
            <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 83+"/>
           </div>
          </div>
          <div class="ubt-zindex-2" id="b1-Content">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="165 elements; dom lines 102+"/>
           <OSBlock data-block="ConnectPatterns.FixedFooter" from="src/shared/UBTConnectLibrary/FixedFooter/FixedFooter.tsx" elided="55 elements; dom lines 441+"/>
          </div>
         </div>
        </div>
       </div>
       <footer class="content-bottom" data-advancedhtml role="contentinfo">
        <div class="footer ph" id="b1-Bottom"></div>
       </footer>
      </div>
      <div id="b1-Placeholder_CommonUI_Inside_Layout">
       <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b55">
        <OSBlock data-block="App_Common.OfflineDataSyncEvents" from="shell" elided="3 elements; dom lines 566+"/>
        <OSBlock data-block="App_PIN.Block_PINUnlock" from="shell" elided="22 elements; dom lines 574+"/>
        <OSBlock data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" from="shell" elided="4 elements; dom lines 620+"/>
        <OSBlock data-block="Legacy_Share.HandleOnResumeOpenLink" from="shell" elided="2 elements; dom lines 630+"/>
        <OSBlock data-block="Utility.HandleImageLoadError" from="shell" elided="1 elements; dom lines 636+"/>
        <OSBlock data-block="NavigationHandler.BackNavigationHandler" from="shell" elided="0 elements; dom lines 640+"/>
       </div>
      </div>
     </div>
    </div>
    <OSBlock data-block="App_Cache.CacheControl_UserInfo_Wrapper" from="src/shared/UBTConnect/CacheControl_UserInfo_Wrapper/CacheControl_UserInfo_Wrapper.tsx" elided="2 elements; dom lines 646+"/>
    <div class="OSBlockWidget" data-block="App_Profile.Profile_HouseholdPreview" id="$b60">
     <OSBlock data-block="ConnectPatterns.BottomSheet" from="src/shared/UBTConnectLibrary/BottomSheet/BottomSheet.tsx" elided="561 elements; dom lines 653+"/>
    </div>
    <OSBlock data-block="App_Common_Blocks_PopupDialogs.Dialog_CustomChoice" from="src/shared/UBTConnect/Dialog_CustomChoice/Dialog_CustomChoice.tsx" elided="4 elements; dom lines 1798+"/>
   </div>
  </div>
 </div>
 <div class="portal-class" style="display: inline;">
  <div>
   <div class="popup-backdrop" data-popup-backdrop>
    <div aria-modal="true" class="popup-dialog popup-dialog connect-share-portal" data-popup role="dialog">
     <div class="popup-content">
      <OSBlock data-block="CW_Share.ShareSheet" from="src/shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx" elided="0 elements; dom lines 1816+"/>
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
| 1 | 2986 | `ActionAppManager_SynchAppContext` | 200 |
| 2 | 5681 | `DataActionGetCacheInfo` | 200 |
| 3 | 5724 | `ActionAppManager_AfterInitialize` | 200 |
| 4 | 6009 | `DataActionGetHousehold_Coordinates` | 200 |
| 5 | 6013 | `DataActionFetchContactDetails` | 200 |
| 6 | 6036 | `DataActionGetHousehold` | 200 |
| 7 | 6044 | `DataActionGetCountryInfo` | 200 |
| 8 | 6046 | `ActionGetSignedImagesInBulk` | 200 |
| 9 | 6213 | `ActionSync_Info_GetMain` | 200 |
| 10 | 6323 | `DataActionFetchContactDetails` | 200 |
| 11 | 6329 | `ActionGetSignedImagesInBulk` | 200 |
| 12 | 6347 | `DataActionGetHousehold` | 200 |
| 13 | 6352 | `DataActionFetchContactDetails` | 200 |
| 14 | 6375 | `DataActionFetchContactDetails` | 200 |
| 15 | 6376 | `DataActionFetchContactDetails` | 200 |
| 16 | 6382 | `DataActionFetchContactDetails` | 200 |
| 17 | 6402 | `DataActionFetchContactDetails` | 200 |
| 18 | 6437 | `DataActionFetchContactDetails` | 200 |
| 19 | 6530 | `DataActionFetchContactDetails` | 200 |
| 20 | 6534 | `ActionGetNumberUnreadMessages` | 200 |
| 21 | 6648 | `DataActionFetchContactDetails` | 200 |
| 22 | 6683 | `DataActionFetchContactDetails` | 200 |
| 23 | 6715 | `DataActionFetchContactDetails` | 200 |
| 24 | 6718 | `DataActionFetchContactDetails` | 200 |
| 25 | 7399 | `ServiceAPIFetchData_CacheableHouseholds` | 200 |
| 26 | 7486 | `ServiceAPIFetchData_CacheableMapEntities` | 200 |

Trigger chains (call-sites.md):
## Observed in the capture (this screen)

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- (5 chain(s) starting in blocks of other screens omitted)

### `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onNonCacheHit of CacheControl` → `CacheControl_UserInfo.cacheControlOnNonCacheHit` → `CacheControl_UserInfo.DataActionGetCacheInfo`
- `CacheControl_UserInfo fetch at start` → `CacheControl_UserInfo.DataActionGetCacheInfo`

### `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager.appManager_OnAppReady_Web` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBT_AppManager_Mobile.appManager_Mobile_OnAppReady` → `UBT_AppManager.appManager_InitializeWebComponents` → `UBT_AppManager.appManager_AfterInitialize` → `server AppManager_AfterInitialize`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold_Coordinates`
- `HouseholdDetails_Block.refresh_GetHouseholdCoordinates` → `HouseholdDetails_Block.DataActionGetHousehold_Coordinates`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `HouseholdDetails_Block fetch at start` → `HouseholdDetails_Block.DataActionGetHousehold_Coordinates`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- `Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`

### `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold`
- `HouseholdDetails_Block.refresh_GetHouseholdDetail` → `HouseholdDetails_Block.DataActionGetHousehold`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `HouseholdDetails_Block.OnParametersChanged` → `HouseholdDetails_Block.screenEvent_OnParametersChanged` → `HouseholdDetails_Block.DataActionGetHousehold`
- `HouseholdDetails_Block fetch at start` → `HouseholdDetails_Block.DataActionGetHousehold`

### `UBTConnect/App_Profile/Profile/DataActionGetCountryInfo`
- `CacheControl.OnInitialize` → `CacheControl.onInitialize` → `event onCacheHit of CacheControl` → `CacheControl_UserInfo.cacheControlOnCacheHit` → `event result of CacheControl_UserInfo` → `CacheControl_UserInfo_Wrapper.cacheControl_UserInfoResult` → `event result of CacheControl_UserInfo_Wrapper` → `Profile.cacheControl_UserInfo_WrapperResult` → `Profile.DataActionGetCountryInfo`
- `CacheControl_UserInfo.onAfterFetch` → `event result of CacheControl_UserInfo` → `CacheControl_UserInfo_Wrapper.cacheControl_UserInfoResult` → `event result of CacheControl_UserInfo_Wrapper` → `Profile.cacheControl_UserInfo_WrapperResult` → `Profile.DataActionGetCountryInfo`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Profile.onChange_LocalityDropdown` → `Profile.DataActionGetCountryInfo`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Profile fetch at start` → `Profile.DataActionGetCountryInfo`

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect.onApplicationReady` → `UBTConnect.connect_SetLoggedContext` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `UBTConnect.onApplicationReady` → `UBTConnect.sync_Info_Main` → `server Sync_Info_GetMain`  ⚠ c
… (truncated)

## Logic in screen-specific blocks

- `UBTConnect.App_Profile.Profile.mvc.js`
  - lifecycle: Ready
  - navigateBack ×1
  - exceptions: NotRegisteredException, CommunicationException, UserException
- `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
  - lifecycle: Initialize, Destroy
  - exceptions: SecurityException
  - JS nodes: OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS, OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS, Out
… (truncated)

## Gaps (render as NotCaptured)

- not rendered in any captured state: `App_Common.UnsupportedVersion_Wrapper`
- not rendered in any captured state: `App_Common_Blocks_PopupDialogs.Dialog_Navigation`
- not rendered in any captured state: `App_Policies.Policy_Checker`
- not rendered in any captured state: `CW_Notes.NoteListActions`
- not rendered in any captured state: `CW_Search.SearchResult_Item`
- not rendered in any captured state: `CW_Share.ShareSheet_Section`
- not rendered in any captured state: `CW_Share.ShareSheet_SectionTitle`
- not rendered in any captured state: `CW_Share.ShareableObject_Generic`
- not rendered in any captured state: `CacheControl.CacheControl_AllLocalities`
- not rendered in any captured state: `CacheControl.CacheControl_AllSubdivisions`
- not rendered in any captured state: `CacheControl.CacheControl_Policies`
- not rendered in any captured state: `ConnectCorePatterns.NonMember_ListItem`
- not rendered in any captured state: `ConnectPatterns.AddNote`
- not rendered in any captured state: `ConnectPatterns.ComingSoon`
- not rendered in any captured state: `ConnectPatterns.ContextMenu_Item`
- not rendered in any captured state: `ConnectPatterns.EmptyList`
- not rendered in any captured state: `ConnectPatterns.HighlightSearch`
- not rendered in any captured state: `ConnectPatterns.IconSVG`
- not rendered in any captured state: `ConnectPatterns.Input`
- not rendered in any captured state: `Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List`
- not rendered in any captured state: `Fingerprint.FingerprintScanner`
- not rendered in any captured state: `Interaction.DropdownSearch`
- not rendered in any captured state: `Layouts.SubLayout_HomePageSearch`
- not rendered in any captured state: `NavigationHandler.PreventBackNavigation`
- not rendered in any captured state: `PIN.PinCode`
- not rendered in any captured state: `Private.PullToRefresh`
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
<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;">
 <div id="reactContainer">
  <div id="transitionContainer">
   <div class="active-screen screen-container" style="--header-shadow-scroll: hidden; --footer-shadow-scroll: visible;">
    <div class="OSBlockWidget" data-block="Layouts.Layout_HomePage" id="$b1">
     <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"></div>
     <div class="layout layout-side layout-native ios-bounce ubt-layout-home ubt-profile-screen" data-container id="b1-LayoutWrapper_Home" style="--current-svg-height: calc(200px - var(--header-size));">
      <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link data-original-href="/UBTConnect/Profile" data-showskipcontent="false">Skip to Content (Press Enter)</a>
      <div class="main" data-container>
       <header class="header" data-advancedhtml id="b1-Header" role="banner">
        <div class="header-top" data-container>
         <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container>
          <div class="ubt-layout-home__title" data-container>
           <OSBlock data-block="BasePatterns.Columns_Two" from="shell" elided="26 elements; dom lines 17+"/>
          </div>
         </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
       </header>
       <div class="content background-neutral-0 ubt-fixed-footer--content" data-container id="b1-ContentWrapper" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
        <div class="main-content ThemeGrid_Container" data-container id="b1-MainContentWrapper" role="main">
         <div class="content-middle" data-container>
          <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-SVG">
           <div class="ubt-svg-container ubt-svg-container-full-height" data-container>
            <OSBlock data-block="Utilities.InlineSVG" from="src/shared/osui/InlineSVG/InlineSVG.tsx" elided="7 elements; dom lines 83+"/>
           </div>
          </div>
          <div class="ubt-zindex-2" id="b1-Content">
           <OSBlock data-block="ConnectPatterns.SkeletonSection" from="shell" elided="157 elements; dom lines 102+"/>
           <OSBlock data-block="ConnectPatterns.FixedFooter" from="s
… (truncated)

## Look up on demand

- `migration/screens/Profile/analysis/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)
- `migration/screens/Profile/analysis/sources/pretty/UBTConnect.App_Profile.Profile.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Profile/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Profile/analysis/sources/pretty/OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Profile/analysis/sources/pretty/Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Profile/analysis/sources/pretty/EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Profile/analysis/sources/pretty/UBTConnect.App_Profile.Profile_HouseholdPreview.mvc.js`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole
- `migration/screens/Profile/analysis/css-relevant.md` only when a visual diff cannot be explained by markup

## Cut to fit the budget

- Other captured states: truncated from ~2356 tokens; open the source files listed under 'Look up on demand'
- Logic in screen-specific blocks: truncated from ~812 tokens; open the source files listed under 'Look up on demand'
- Calls: truncated from ~5942 tokens; open the source files listed under 'Look up on demand'
- pack is still ~17362 tokens (budget 14000): the markup itself is large; consider splitting the screen task by block
