# Recorded decisions and facts that name the elements of UI flow Directory_SupperMeetings

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:35` (SupperMeeting_Carousel): | SupperMeeting_Carousel | `/UBTConnect/SupperMeeting_Carousel` | 4 | 155 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-suppermeeting-carousel |
- `migration/board.md:36` (SupperMeeting_Details): | SupperMeeting_Details | `/UBTConnect/SupperMeeting_Details` | 4 | 127 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-suppermeeting-details |

## change requests

- `migration/change-requests/CR-Photobook-1.md:6` (SupperMeeting_Carousel): - Other routes using it (catalog/blocks.md): HomeFeed, HouseholdCarousel, SupperMeeting_Carousel, Photobook
- `migration/change-requests/CR-Photobook-1.md:41` (SupperMeeting_Carousel): HomeFeed clean; SupperMeeting_Carousel default style 52 / pseudo 6, loading class 4, offline 0 (fewer than the
- `migration/change-requests/CR-HouseholdCarousel-2.md:63` (SupperMeeting_Carousel): SupperMeeting_Carousel, OneSchoolGlobalDetails, HomeFeed.
- `migration/change-requests/CR-W2A-1.md:8` (SupperMeeting_Carousel): Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel,
- `migration/change-requests/CR-W2A-1.md:39` (SupperMeeting_Carousel): HouseholdCarousel 31, SupperMeeting_Carousel 24, …) and the fallback icon for others (HouseholdDetails 12,
- `migration/change-requests/CR-W2A-1.md:56` (SupperMeeting_Carousel): member avatars) or had no EntityId (2 SupperMeeting_Carousel slides never loaded: no call); a route mock reproduces
- `migration/change-requests/CR-SupperMeeting_Details-1.md:9` (SupperMeeting_Carousel): cards: SupperMeeting_Carousel, HouseholdDetails, Locality_Details…); SupperMeeting_Carousel (same household list)
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:1` (SupperMeeting_Carousel): # CR-SupperMeeting_Carousel-1: household list mock by subdivision id (captured counts per slide)
- `migration/change-requests/CR-W4A-1.md:5` (SupperMeeting_Details): (UBTConnect.controller.js:17107-, copy in migration/screens/SupperMeeting_Details/analysis/sources/raw/), which uses the
- `migration/change-requests/CR-HouseholdCarousel-2.md:62` (SupperMeeting_Details): - Regression parity 0: HouseholdDetails, Household_Relations, Locality_Details, Profile (spouse), SupperMeeting_Details,
- `migration/change-requests/CR-MyBookmarks-1.md:41` (SupperMeeting_Details): LocalityId, SupperMeeting_Details In_SubdivsionId, OneSchoolGlobalDetails In_OneSchoolGlobalId,
- `migration/change-requests/CR-W2A-1.md:9` (SupperMeeting_Details): SupperMeeting_Details, Updates_SingleList
- `migration/change-requests/CR-SupperMeeting_Details-1.md:1` (SupperMeeting_Details): # CR-SupperMeeting_Details-1: UBT_LazyImage parameter change + shared mocks for the supper meeting capture
- `migration/change-requests/CR-SupperMeeting_Details-1.md:4` (SupperMeeting_Details): - Raised by: SupperMeeting_Details, 2026-10-15
- `migration/change-requests/CR-SupperMeeting_Details-1.md:10` (SupperMeeting_Details): - Related question: SupperMeeting_Details decision question (`route.py questions SupperMeeting_Details`)
- `migration/change-requests/CR-SupperMeeting_Details-1.md:17` (SupperMeeting_Details): - Evidence: `migration/screens/SupperMeeting_Details/parity/default.json`: the subdivision photo shows the no-photo
- `migration/change-requests/CR-SupperMeeting_Details-1.md:22` (SupperMeeting_DetailsBlock): - Cause: SupperMeeting_DetailsBlock first renders UBT_LazyImage with the skeleton card (no SubdivisionId), then with
- `migration/change-requests/CR-SupperMeeting_Details-1.md:23` (SupperMeeting_DetailsBlock): `card.SubdivisionId` (`SupperMeeting_DetailsBlock.tsx:87-92`). The original OnParametersChanged
- `migration/change-requests/CR-SupperMeeting_Details-1.md:6` (SupperMeeting_HouseholdList): `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` / `SupperMeeting_HouseholdList/mocks.ts`;
- `migration/change-requests/CR-SupperMeeting_Details-1.md:51` (SupperMeeting_HouseholdList): - §2.1 `Directory_EntityDetailsActions/mocks.ts`: Supper Meetings answer empty phones / email. §2.2 `SupperMeeting_HouseholdList/mocks.ts`: ChildrenNames "" for households 3, 6, 7, 11.
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:5` (SupperMeeting_HouseholdList): - Blocks: `src/shared/UBTConnect/SupperMeeting_HouseholdList/mocks.ts` (DataActionGetSubdivisionHouseholds),
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:18` (SupperMeeting_HouseholdList): `In_SubdivisionId` (`SupperMeeting_HouseholdList/mocks.ts:8-12`, `sampleSubdivisionHouseholds(11)`), so slides 2 and 3
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:33` (SupperMeeting_HouseholdList): - Change (F4a foundation owner, 2026-10-15): `SupperMeeting_HouseholdList/mocks.ts` answers by In_SubdivisionId: any id

## ADRs (stack.md)

- `app/docs/reference/stack.md:237` (SupperMeeting_Carousel): - P4-5 differences from §3.1: `meta.flagRedirect` is on 6 routes (Notifications, Bookmarks, MyBookmarks, LDM_MyEvents_V2, HouseholdCarousel, SupperMeeting_Carousel), and `useOsNavigate` applies it. A URL that is opened directly is not redirected, the same as before. `capture-plan.json` has no flag v

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:68` (SupperMeeting_Carousel): | SupperMeeting_Carousel | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): mock-only fictional preload of 3 supper meetings (start id, 9202, 9203) registered by mocks.ts; real b |
- `migration/knowledge/auto-decisions-2026-10-15.md:69` (SupperMeeting_Carousel): | SupperMeeting_Carousel | Q2 | fact | by code | Capture timing artifact. EntitiesCarousel_Element.mvc.js:240-307 passes In_IsSkeletonOnly only to the HouseholdDetails branch, never to EntitiesCarouse_lSupperMeetingDeta |
- `migration/knowledge/auto-decisions-2026-10-15.md:70` (SupperMeeting_Details): | SupperMeeting_Details | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-SupperMeeting_Details-1 and CR-HouseholdDetails-1, re-run parity, then ready; 3 capture exemp |
- `migration/knowledge/navigation.md:36` (SupperMeeting_Details): OneSchoolGlobalDetails, PINRegister, SupperMeeting_Details.
- `migration/knowledge/audit-a1-empty-handlers.md:76` (SupperMeeting_DetailsBlock): - Rejection branches in Block_PINRegister_ContentWrapper.tsx:63 and SupperMeeting_DetailsBlock.tsx:54 (cited in place).
- `migration/knowledge/audit-a1-empty-handlers.md:92` (SupperMeeting_DetailsBlock): SupperMeeting_DetailsBlock users).
- `migration/knowledge/audit-a1-empty-handlers.md:91` (SupperMeeting_HouseholdList): ContactUsDetails, Household_Relations, HouseholdDetails_Block, SupperMeeting_HouseholdList,

## flags

- `migration/flags.md:49` (SupperMeeting_Carousel): | `action:toggleBookmarkItem` (gone) (candidate) | flag check action | AssembleDetail, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:59` (SupperMeeting_Carousel): | `action:toggleLocationPopup` (gone) (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:109` (SupperMeeting_Carousel): | `action:getHasPhotobookAccess` (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel | - | unavailable: mobilePhotobook: access to Photobook | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:138` (SupperMeeting_DetailsBlock): - `action:getHasCarouselEnabled`: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`, `UBTConnect.Directory_Locality.Locality_Subdivisions.mvc.js`, `UBTConnect.Directory_Photobook.Photobook.mvc.js`, `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`, `UBTConnect.Directory_

## parity exemptions

- `migration/parity-exemptions.json:568` (SupperMeeting_Carousel): "evidence": "migration/screens/SupperMeeting_Carousel/analysis/dom/default.html (24 data-masked-src=\"user-image\", data-rendered-size=\"390x260\"); parity/default.json (layout 390×26 → 390×260 under b3-l1-1164_0-b2-b1-b1-b3-LazyImage_Placeholder, 195×24 → 195×130 under …-b9-b1-l1-1258_N-b5-b1-LazyI
- `migration/parity-exemptions.json:580` (SupperMeeting_Carousel): "reason": "Follows from CAPTURE-MASKED-IMAGE-SMCAROUSEL on slide 1 only (11 households in capture and mock): the gallery rows are sized by the masked 24 px broken images (rows 178 px) while the clone shows the 130 px placeholder (rows 193 px). Slides 2 and 3 are left reported until CR-SupperMeeting_
- `migration/parity-exemptions.json:581` (SupperMeeting_Carousel): "evidence": "migration/screens/SupperMeeting_Carousel/parity/default.json (grid-template-rows 1148px → 1238px; 178px ×6 → 193px ×6 on b3-l1-1164_0-b2-b1-b1-b9-b1-b4-Content)"
- `migration/parity-exemptions.json:594` (SupperMeeting_Carousel): "evidence": "migration/screens/SupperMeeting_Carousel/analysis/dom/default.html:90-92 (masked tag text); parity/default.json (left 337.688px → 337.344px on b3-l1-1164_0-b2-b1-b1-b3-Placeholder_ImageTag)"
- `migration/parity-exemptions.json:609` (SupperMeeting_Carousel): "reason": "Off-screen slides 2 and 3 were snapshotted while SupperMeeting_DetailsBlock still showed GetSkeleton_UI_SubdivisionDetails (ubt-skeleton-section, 'Subdivision Name Example', counts 10) although their household lists had loaded; the clone shows the loaded card. Limited to the card and acti
- `migration/parity-exemptions.json:610` (SupperMeeting_Carousel): "evidence": "migration/screens/SupperMeeting_Carousel/analysis/dom/default.html (ubt-skeleton-section on b3-l1-1164_1/2-b2-b1-b1-b2/b6-Placeholder_LoadingSection only); SupperMeeting_DetailsBlock.mvc.js:188,302,660-680; parity/default.json (slides 1164_1/2, sections b2-b7)"
- `migration/parity-exemptions.json:676` (SupperMeeting_Carousel): "reason": "Follows from SupperMeeting_Carousel Q2 (answered by code: the default capture caught off-screen slides 2-3 mid-load). Their Directory_EntityDetailsActions (b8) was still in its loading look (grey circles, hidden icons) while its own FetchContactDetails answers were arriving; slide 1, load
- `migration/parity-exemptions.json:677` (SupperMeeting_Carousel): "evidence": "migration/screens/SupperMeeting_Carousel/parity/default.json (style 52 / pseudo 6, all under #b3-l1-1164_1|2-b2-b1-b1-b8); analysis/calls.md #4-#15 (FetchContactDetails answers until 5769 ms); CAPTURE-OFFSCREEN-SLIDE-SKELETON-SMCAROUSEL"
- `migration/parity-exemptions.json:523` (SupperMeeting_Details): "evidence": "migration/screens/SupperMeeting_Details/analysis/dom/default.html:63, :468 (data-rendered-size); parity/default.json; parity/default.expected.png"
- `migration/parity-exemptions.json:536` (SupperMeeting_Details): "evidence": "migration/screens/SupperMeeting_Details/parity/default.json (grid-template-rows 1148px → 1238px; 178px → 193px ×6)"
- `migration/parity-exemptions.json:546` (SupperMeeting_Details): "evidence": "migration/screens/SupperMeeting_Details/analysis/dom/loading.html (b3-b8-b1-Placeholder_LoadingSection without ubt-skeleton-section, list-error); parity/loading.json; Directory_EntityDetailsActions.tsx:348-350 (skeleton off on fetch error)"
- `migration/parity-exemptions.json:666` (SupperMeeting_Details): "evidence": "migration/screens/SupperMeeting_Details/parity/loading.json (4 class diffs b2/b8); Directory_EntityDetailsActions.mvc.js:1134-1150 (HandleFetchError); SupperMeeting_DetailsBlock mvc.js:370-371 (literal EnableNotes True); UBTConnectLibrary.model.js:4135-4156 (record defaults)"
- `migration/parity-exemptions.json:795` (SupperMeeting_Details): "evidence": "usePopupWidget re-applies disableScroll on every client-variable change as every OS controller does (OutSystems.js:530153 fireInitialize subscribes clientVariablesHandler; :527146 generation++ + scheduleFlush). TST's final html class then depends on whether an EntityDetailsActions model
- `migration/parity-exemptions.json:796` (SupperMeeting_Details): "routeRegex": "/UBTConnect/SupperMeeting_Details\\b"
- `migration/parity-exemptions.json:609` (SupperMeeting_DetailsBlock): "reason": "Off-screen slides 2 and 3 were snapshotted while SupperMeeting_DetailsBlock still showed GetSkeleton_UI_SubdivisionDetails (ubt-skeleton-section, 'Subdivision Name Example', counts 10) although their household lists had loaded; the clone shows the loaded card. Limited to the card and acti
- `migration/parity-exemptions.json:610` (SupperMeeting_DetailsBlock): "evidence": "migration/screens/SupperMeeting_Carousel/analysis/dom/default.html (ubt-skeleton-section on b3-l1-1164_1/2-b2-b1-b1-b2/b6-Placeholder_LoadingSection only); SupperMeeting_DetailsBlock.mvc.js:188,302,660-680; parity/default.json (slides 1164_1/2, sections b2-b7)"
- `migration/parity-exemptions.json:666` (SupperMeeting_DetailsBlock): "evidence": "migration/screens/SupperMeeting_Details/parity/loading.json (4 class diffs b2/b8); Directory_EntityDetailsActions.mvc.js:1134-1150 (HandleFetchError); SupperMeeting_DetailsBlock mvc.js:370-371 (literal EnableNotes True); UBTConnectLibrary.model.js:4135-4156 (record defaults)"

## Decision ids on the board rows of the flow's screens

V4a
