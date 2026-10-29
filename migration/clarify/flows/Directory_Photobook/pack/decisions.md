# Recorded decisions and facts that name the elements of UI flow Directory_Photobook

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:34` (Photobook): | Photobook | `/UBTConnect/Photobook` | 4 | 74 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-photobook |

## app-shell.spec

- `migration/app-shell.spec.md:35` (Photobook): - The captures of PINRegister, PINChange and Photobook have no `osx` (their digest.md:4).
- `migration/app-shell.spec.md:220` (Photobook): | App start | `UBTConnect.OnApplicationReady` (registered UC:18593) | resets `IsNavigateToHomeOnBack`, `Bookmarks/Notifications/Notes_IsSynched` = False (UC:15272-15282); registers FRD/online/offline/FCM callbacks (15284-15316); `AppManager_Mobile_OnAppReady` → `AppManager_SynchAppContext` → `Initia
- `migration/app-shell.spec.md:258` (Photobook): | `PhotobookCarousel_SelectedSpeed` | `Set_InitialClientVariables` (UC:16015-16016) | Photobook |
- `migration/app-shell.spec.md:350` (Photobook): | U18 | decision | Other native features: keyboard detection, Photobook landscape lock, in-app browser (`OpenInApp_OpenExternalLink`, policies) | Layout classes and link opening | (a) `visualViewport` for keyboard class, no orientation lock, external links in a new tab; **Recommend (a)** |

## change requests

- `migration/change-requests/CR-Photobook-1.md:1` (Photobook): # CR-Photobook-1: OSUI Carousel provider API — CarouselGoTo, CarouselToggleDrag, set StartingPosition
- `migration/change-requests/CR-Photobook-1.md:4` (Photobook): - Raised by: Photobook, 2026-10-15
- `migration/change-requests/CR-Photobook-1.md:6` (Photobook): - Other routes using it (catalog/blocks.md): HomeFeed, HouseholdCarousel, SupperMeeting_Carousel, Photobook
- `migration/change-requests/CR-Photobook-1.md:7` (Photobook): - Related question: Photobook Q2
- `migration/change-requests/CR-Photobook-1.md:10` (Photobook): - `migration/screens/Photobook/analysis/sources/pretty/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js`:
- `migration/change-requests/CR-Photobook-1.md:24` (Photobook): `Photobook_Carousel.tsx` marks the call sites (comments "CR-Photobook-1") and calls nothing: thumbnail click and Replay do
- `migration/change-requests/CR-Photobook-1.md:39` (Photobook): - Regression parity run on: 2026-10-15 after the last change — Photobook default 345 differences (all masked-photo /
- `migration/change-requests/CR-W2A-1.md:8` (Photobook): Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel,
- `migration/change-requests/CR-Photobook-1.md:10` (Photobook_Carousel): - `migration/screens/Photobook/analysis/sources/pretty/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js`:
- `migration/change-requests/CR-Photobook-1.md:24` (Photobook_Carousel): `Photobook_Carousel.tsx` marks the call sites (comments "CR-Photobook-1") and calls nothing: thumbnail click and Replay do
- `migration/change-requests/CR-Photobook-1.md:35` (Photobook_Carousel): (UBTConnect.controller.js:908, SetCurrentPositionJS; errors only logged, as the JS catch). Photobook_Carousel calls
- `migration/change-requests/CR-Photobook-2.md:10` (Photobook_Options_Right): - `sources/pretty/UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js` view: BottomSheet_Speed content =
- `migration/change-requests/CR-Photobook-2.md:33` (Photobook_Options_Right): Photobook_Options_Right: the NotCaptured is replaced by RadioGroup_SpeedOptions (Five / Eight / Fifteen, 5000 /

## ADRs (stack.md)

- `app/docs/reference/stack.md:118` (Photobook): | ADR-7 | Vendor the TST PanZoom (anvaka panzoom) script for Photobook | accepted | 2026-10-15 |
- `app/docs/reference/stack.md:143` (Photobook): - Context: Build screens use Leaflet (BrowseDirectory, CountryDetails), SortableJS (Services), ReactiveHtmlSanitizer (MessageDetail, Notifications, Photobook) and OSUI patterns with provider libraries: Carousel (Splide), DropdownSearch (Virtual Select), RangeSlider (noUiSlider + wNumb). Versions rea
- `app/docs/reference/stack.md:165` (Photobook): ### ADR-7: Vendor the TST PanZoom (anvaka panzoom) script for Photobook
- `app/docs/reference/stack.md:167` (Photobook): - Context: Photobook's zoom block (Photobook Q1) uses PanZoom.anvaka_panzoom_js.js shipped by the original app; it is not an npm dependency of the clone

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:61` (Photobook): | Photobook | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): vendor the TST PanZoom script (ADR-7) |
- `migration/knowledge/auto-decisions-2026-10-15.md:62` (Photobook): | Photobook | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-Photobook-1 (shared Carousel go-to, toggle-drag, starting position) before the review |
- `migration/knowledge/auto-decisions-2026-10-15.md:63` (Photobook): | Photobook | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): fictional caption per household in the skeleton caption format |
- `migration/knowledge/auto-decisions-2026-10-16.md:19` (Photobook): | Mocks A Q3: Photobook households in "Green Valley" | **A (recommended)**: switch Photobook to the cast | |
- `migration/knowledge/auto-decisions-2026-10-16.md:110` (Photobook): | FIX-D | Photobook client-var write moved to a mount effect (OnInitialize); `DataActionGetCacheInfo` (Policies) mock without input matching (anonymised inputs), duplicate shell entry removed; nested `<a>` in the bottom bar is 1:1 (TST captures) | auto-accepted |
- `migration/knowledge/auto-decisions-2026-10-16.md:111` (Photobook): | Re-stamps | OrbitAdminEventDetail, Photobook (finish with "confirm (auto-confirmed …)") | auto-confirmed |
- `migration/knowledge/feature-flag-helpers.md:20` (Photobook): | GetHasPhotobookAccess | launchDarkly_FF.mobilePhotobook | true | Directory_Household | probably: access to Photobook |
- `migration/knowledge/runtime-sources.md:34` (Photobook): | `PanZoom.anvaka_panzoom_js.js` | 46 kB | PanZoom block script (customised anvaka panzoom, `?DkjKuM8SUDMWxmXWUXZevg`): vendored as-is in `app/src/vendor/panzoom/` (ADR-7, Photobook Q1); listed by F4b 2026-10-15 |

## flags

- `migration/flags.md:13` (Photobook): | `action:carouselToggleDrag` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:25` (Photobook): | `action:handler_ToggleInfoSheet` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:27` (Photobook): | `action:handler_TogglePlay` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:29` (Photobook): | `action:handler_ToggleSpeedSheet` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:48` (Photobook): | `action:toggleAutoplay` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:58` (Photobook): | `action:toggleInfoSheet` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:67` (Photobook): | `action:toggleSpeedSheet` (gone) (candidate) | flag check action | Photobook | - | open | - | **open** |
- `migration/flags.md:109` (Photobook): | `action:getHasPhotobookAccess` (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel | - | unavailable: mobilePhotobook: access to Photobook | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:126` (Photobook_Carousel): - `action:carouselToggleDrag`: `UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js`
- `migration/flags.md:182` (Photobook_Carousel): - `action:toggleAutoplay`: `UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js`
- `migration/flags.md:157` (Photobook_Options_Left): - `action:handler_ToggleInfoSheet`: `UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js`
- `migration/flags.md:192` (Photobook_Options_Left): - `action:toggleInfoSheet`: `UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js`
- `migration/flags.md:159` (Photobook_Options_Player): - `action:handler_TogglePlay`: `UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js`
- `migration/flags.md:161` (Photobook_Options_Right): - `action:handler_ToggleSpeedSheet`: `UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js`
- `migration/flags.md:201` (Photobook_Options_Right): - `action:toggleSpeedSheet`: `UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:125` (Photobook): "reason": "The loading and offline states were captured via Locality_Details (states.json `via`), so on TST the app start had finished and the user-info cache was filled: HouseholdDetails_Block's OnReady passed GetUserInformation_Wrapper (mvc.js:2700-2710), set the skeleton household ('Example & Exa
- `migration/parity-exemptions.json:688` (Photobook): "evidence": "migration/screens/Photobook/analysis/dom/default.html:98 (DIV_BackgroundImage of slide 0), :107 (img data-masked-src=\"user-image\", src=\"\", data-rendered-size 390x259 on TST; same on every slide), :117 (DIV_ForegroundImage), :144 (Title_Background, name masked as bullets); migration/
- `migration/parity-exemptions.json:699` (Photobook): "evidence": "migration/screens/Photobook/analysis/dom/default.html:98 (DIV_BackgroundImage of slide 0), :107 (img data-masked-src=\"user-image\", src=\"\", data-rendered-size 390x259 on TST; same on every slide), :117 (DIV_ForegroundImage), :144 (Title_Background, name masked as bullets); migration/
- `migration/parity-exemptions.json:712` (Photobook): "evidence": "migration/screens/Photobook/analysis/dom/default.html:98 (DIV_BackgroundImage of slide 0), :107 (img data-masked-src=\"user-image\", src=\"\", data-rendered-size 390x259 on TST; same on every slide), :117 (DIV_ForegroundImage), :144 (Title_Background, name masked as bullets); migration/
- `migration/parity-exemptions.json:726` (Photobook): "evidence": "migration/screens/Photobook/analysis/dom/default.html:98 (DIV_BackgroundImage of slide 0), :107 (img data-masked-src=\"user-image\", src=\"\", data-rendered-size 390x259 on TST; same on every slide), :117 (DIV_ForegroundImage), :144 (Title_Background, name masked as bullets); migration/
- `migration/parity-exemptions.json:737` (Photobook): "evidence": "migration/screens/Photobook/analysis/dom/default.html:98 (DIV_BackgroundImage of slide 0), :107 (img data-masked-src=\"user-image\", src=\"\", data-rendered-size 390x259 on TST; same on every slide), :117 (DIV_ForegroundImage), :144 (Title_Background, name masked as bullets); migration/
- `migration/parity-exemptions.json:748` (Photobook): "evidence": "migration/screens/Photobook/analysis/sources/pretty/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js:247-252 (componentdidmount), :578-589 (ScrollIntoPosition parameters; :587 SelectedItemPosition = SelectedPosition + 1), :703-727 (ScrollIntoPositionJS); .claude/skills/outsystems
- `migration/parity-exemptions.json:748` (Photobook_Gallery): "evidence": "migration/screens/Photobook/analysis/sources/pretty/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js:247-252 (componentdidmount), :578-589 (ScrollIntoPosition parameters; :587 SelectedItemPosition = SelectedPosition + 1), :703-727 (ScrollIntoPositionJS); .claude/skills/outsystems
- `migration/parity-exemptions.json:745` (Photobook_Gallery_Item): "pathRegex": "div#b4-b6-Photobook_Gallery_List\\.OSFillParent\\.list\\.list-group > div#b4-b6-l1-43_\\d+-\\$b3\\.OSBlockWidget\\[Directory_Photobook\\.Photobook_Gallery_Item\\]$",
- `migration/parity-exemptions.json:685` (Photobook_Item): "pathRegex": "\\[Directory_Photobook\\.Photobook_Item\\] > div#b4-l1-37_\\d+-b2-CarouselItem\\.OSBlockWidget\\[BasePatterns\\.CustomContainer\\] > div#b4-l1-37_\\d+-b2-b1-Content\\.align-items-center\\.display-flex\\.justify-content-center > div#b4-l1-37_\\d+-b2-DIV_BackgroundImage\\.photobook-carou
- `migration/parity-exemptions.json:687` (Photobook_Item): "reason": "Household photos are person data: the capture masks every Photobook_Item background image (data-masked-src=\"user-image\", src=\"\"), so the replayed reference's empty img is 27 px high and DIV_BackgroundImage, the UBT_LazyImage chain and the img are 410×27; the build shows the neutral pl
- `migration/parity-exemptions.json:696` (Photobook_Item): "pathRegex": "\\[Directory_Photobook\\.Photobook_Item\\] > div#b4-l1-37_\\d+-b2-CarouselItem\\.OSBlockWidget\\[BasePatterns\\.CustomContainer\\] > div#b4-l1-37_\\d+-b2-b1-Content\\.align-items-center\\.display-flex\\.justify-content-center > div#b4-l1-37_\\d+-b2-DIV_BackgroundImage\\.photobook-carou
- `migration/parity-exemptions.json:710` (Photobook_Item): "pathRegex": "\\[Directory_Photobook\\.Photobook_Item\\] > div#b4-l1-37_\\d+-b2-CarouselItem\\.OSBlockWidget\\[BasePatterns\\.CustomContainer\\] > div#b4-l1-37_\\d+-b2-b1-Content\\.align-items-center\\.display-flex\\.justify-content-center > div#b4-l1-37_\\d+-b2-DIV_BackgroundImage\\.photobook-carou
- `migration/parity-exemptions.json:724` (Photobook_Item): "pathRegex": "\\[Directory_Photobook\\.Photobook_Item\\] > div#b4-l1-37_\\d+-b2-CarouselItem\\.OSBlockWidget\\[BasePatterns\\.CustomContainer\\] > div#b4-l1-37_\\d+-b2-b1-Content\\.align-items-center\\.display-flex\\.justify-content-center > div#b4-l1-37_\\d+-b2-DIV_ForegroundImage\\.photobook-carou
- `migration/parity-exemptions.json:734` (Photobook_Item): "pathRegex": "\\[Directory_Photobook\\.Photobook_Item\\] > div#b4-l1-37_\\d+-b2-CarouselItem\\.OSBlockWidget\\[BasePatterns\\.CustomContainer\\] > div#b4-l1-37_\\d+-b2-b1-Content\\.align-items-center\\.display-flex\\.justify-content-center > div#b4-l1-37_\\d+-b2-Title_Cont\\.OSBlockWidget\\[BasePatt

## Decision ids on the board rows of the flow's screens

V4a
