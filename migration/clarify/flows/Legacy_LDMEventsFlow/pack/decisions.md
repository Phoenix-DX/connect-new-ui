# Recorded decisions and facts that name the elements of UI flow Legacy_LDMEventsFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:60` (EmailTarget): | EmailTarget | `/UBTConnect/EmailTarget` |  | 73 | lite | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-forms |
- `migration/board.md:67` (LDM_Email): | LDM_Email | `/UBTConnect/LDM_Email` |  | 81 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |
- `migration/board.md:69` (LDM_EventDetail): | LDM_EventDetail | `/UBTConnect/LDM_EventDetail` |  | 95 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |
- `migration/board.md:71` (LDM_MyEvents): | LDM_MyEvents | `/UBTConnect/LDM_MyEvents` |  | 111 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:48` (EmailTarget): empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.
- `migration/change-requests/CR-LDM_Email_V2-1.md:7` (EmailTarget): (ContactByEmailLDMCoordinator, EmailTarget, the other F9 no-capture screens)
- `migration/change-requests/CR-LDM_Email_V2-1.md:33` (EmailTarget): - consistency_check.py: for a no-capture route, NO-INLINE-COLOR accepts the inline styles of the compiled .mvc.js files its route-spec cites (`style: "..."`). LDM_Email_V2, ContactByEmailLDMCoordinator, EmailTarget, HomeFeed check clean.
- `migration/change-requests/CR-QRCodeGenerate-1.md:48` (EmailTarget): empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.

## ADRs (stack.md)

- `app/docs/reference/stack.md:252` (EmailTarget): - Q6 (auto-accepted under the user's delegation, 2026-10-22): the 5 `ContactByEmail*` pages share a `ContactEmailForm` and two card components. Each page has a config object and one submit hook, and there is no container. `EmailContact`, `EmailTarget` and `LDM_Email_V2` stay separate.

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:14` (EmailTarget): - LDM_MyEvents(_V2), LDM_EventDetail(_V2), LDM_Email(_V2), ContactByEmailLDMCoordinator, EmailTarget.
- `migration/knowledge/orbit-assemble-ldm.md:49` (EmailTarget): ContactByEmailLDMCoordinator, EmailTarget, AssembleDetail. Capture-plan entries keep the tried `via` paths.
- `migration/knowledge/shell-facts.md:150` (EmailTarget): ContactByEmail*, LDM_Email_V2, EmailTarget, LegacyShareObject, OrbitAdminEventDetail (submit/scan paths).
- `migration/knowledge/auto-decisions-2026-10-16.md:61` (EmailTarget): | LDM_Email_V2 Q1-Q3, ContactByEmailLDMCoordinator Q1, EmailTarget Q1 | **A (recommended)** each | sends mocked (P-MUTATION); compiled inline margin-top kept |
- `migration/knowledge/runtime-sources.md:66` (EmailTarget): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/orbit-assemble-ldm.md:14` (LDM_Email): - LDM_MyEvents(_V2), LDM_EventDetail(_V2), LDM_Email(_V2), ContactByEmailLDMCoordinator, EmailTarget.
- `migration/knowledge/orbit-assemble-ldm.md:41` (LDM_Email): LDM_EventDetail and LDM_Email (V1) are `skip`; the app builds LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2.
- `migration/knowledge/auto-decisions-2026-10-16.md:24` (LDM_Email): | LDM V1 screens | skip (user, "những gì của V1 ko cần dựng" (English: "the V1 items do not need to be built")) | LDM_MyEvents, LDM_EventDetail, LDM_Email |
- `migration/knowledge/orbit-assemble-ldm.md:14` (LDM_EventDetail): - LDM_MyEvents(_V2), LDM_EventDetail(_V2), LDM_Email(_V2), ContactByEmailLDMCoordinator, EmailTarget.
- `migration/knowledge/orbit-assemble-ldm.md:41` (LDM_EventDetail): LDM_EventDetail and LDM_Email (V1) are `skip`; the app builds LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2.
- `migration/knowledge/auto-decisions-2026-10-16.md:24` (LDM_EventDetail): | LDM V1 screens | skip (user, "những gì của V1 ko cần dựng" (English: "the V1 items do not need to be built")) | LDM_MyEvents, LDM_EventDetail, LDM_Email |
- `migration/knowledge/orbit-assemble-ldm.md:14` (LDM_MyEvents): - LDM_MyEvents(_V2), LDM_EventDetail(_V2), LDM_Email(_V2), ContactByEmailLDMCoordinator, EmailTarget.
- `migration/knowledge/orbit-assemble-ldm.md:40` (LDM_MyEvents): TST runs the V2 LDM screens (GetHasNewLDM on: the V1 event card navigates to LDM_EventDetail_V2). LDM_MyEvents,
- `migration/knowledge/navigation.md:28` (LDM_MyEvents): - The `NavigateTo_MyCalendar…` handlers (AssembleEvents, LDM_MyEvents, LDM_MyEvents_V2, OrbitLanding) open MyEntertaining. [MCP]
- `migration/knowledge/auto-decisions-2026-10-16.md:24` (LDM_MyEvents): | LDM V1 screens | skip (user, "những gì của V1 ko cần dựng" (English: "the V1 items do not need to be built")) | LDM_MyEvents, LDM_EventDetail, LDM_Email |

## flags

- `migration/flags.md:65` (EmailTarget): | `action:toggleSideMenu` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact, EmailTarget, EventBooklet, EventDetail … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | open | - | **open** |
- `migration/flags.md:70` (LDM_EventDetail): | `action:toggle_IsFetching` (gone) (candidate) | flag check action | LDM_EventDetail, LDM_EventDetail_V2 | ldm_eventdetail | open | - | **open** |
- `migration/flags.md:97` (LDM_EventDetail): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens
- `migration/flags.md:138` (LDM_EventDetail): - `action:getHasCarouselEnabled`: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`, `UBTConnect.Directory_Locality.Locality_Subdivisions.mvc.js`, `UBTConnect.Directory_Photobook.Photobook.mvc.js`, `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`, `UBTConnect.Directory_
- `migration/flags.md:19` (LDM_MyEvents): | `action:expandToggled` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:36` (LDM_MyEvents): | `action:onHandle_ExpandToggled` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:37` (LDM_MyEvents): | `action:onHandle_ToggleView` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:54` (LDM_MyEvents): | `action:toggleEventFilters` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:57` (LDM_MyEvents): | `action:toggleGuestList` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:71` (LDM_MyEvents): | `action:toggle_IsShowList` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:97` (LDM_MyEvents): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens
- `migration/flags.md:104` (LDM_MyEvents): | `action:getHasNewLDM` (candidate) | flag check action | HomeFeed, LDM_MyEvents, MessageDetail, MyCalendar | ldm_myevents | unavailable: C2NewLDM: LDM V2 / V1 entry (LDM external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |

## Decision ids on the board rows of the flow's screens

V1, V2
