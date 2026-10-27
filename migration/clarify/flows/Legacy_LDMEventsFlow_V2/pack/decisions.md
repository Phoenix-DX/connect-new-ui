# Recorded decisions and facts that name the elements of UI flow Legacy_LDMEventsFlow_V2

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:68` (LDM_Email_V2): | LDM_Email_V2 | `/UBTConnect/LDM_Email_V2` |  | 81 | lite | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-forms |
- `migration/board.md:70` (LDM_EventDetail_V2): | LDM_EventDetail_V2 | `/UBTConnect/LDM_EventDetail_V2` |  | 95 | full | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-eventdetail-v2 |
- `migration/board.md:72` (LDM_MyEvents_V2): | LDM_MyEvents_V2 | `/UBTConnect/LDM_MyEvents_V2` |  | 110 | full | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-myevents-v2 |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:6` (LDM_Email_V2): - Other routes using it: OrbitLanding (CurrentMemberId = cached MemberId), MessageDetail, ContactByEmail*, LDM_Email_V2
- `migration/change-requests/CR-OrbitAdminLanding-1.md:47` (LDM_Email_V2): MilestoneDetail sends UserMemberId 990001 (mock ignores it). ContactByEmail*, LDM_Email_V2 (shows Email only, still
- `migration/change-requests/CR-OrbitAdminLanding-1.md:54` (LDM_Email_V2): QRCodeGenerate, LDM_Email_V2, OrbitAdminEventDetail have no captured states: unit test (CountryCode) and a headless
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:7` (LDM_Email_V2): - Other routes using it: LDM_MyEvents_V2 (`components/actions.ts`), LDM_Email_V2 (not built), the Assemble
- `migration/change-requests/CR-LDM_Email_V2-1.md:1` (LDM_Email_V2): # CR-LDM_Email_V2-1: consistency_check — accept compiled-view inline styles on no-capture routes
- `migration/change-requests/CR-LDM_Email_V2-1.md:4` (LDM_Email_V2): - Raised by: LDM_Email_V2, 2026-10-16
- `migration/change-requests/CR-LDM_Email_V2-1.md:8` (LDM_Email_V2): - Related question: LDM_Email_V2 Q3 (decision, recommended A)
- `migration/change-requests/CR-LDM_Email_V2-1.md:33` (LDM_Email_V2): - consistency_check.py: for a no-capture route, NO-INLINE-COLOR accepts the inline styles of the compiled .mvc.js files its route-spec cites (`style: "..."`). LDM_Email_V2, ContactByEmailLDMCoordinator, EmailTarget, HomeFeed check clean.
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:1` (LDM_EventDetail_V2): # CR-LDM_EventDetail_V2-1: shared Orbit / LDM client actions used by two LDM routes
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:4` (LDM_EventDetail_V2): - Raised by: LDM_EventDetail_V2, 2026-10-16
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:15` (LDM_EventDetail_V2): `screens/LDM_EventDetail_V2/components/actions.ts`).
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:21` (LDM_EventDetail_V2): `screens/LDM_EventDetail_V2/index.tsx`.
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:29` (LDM_EventDetail_V2): Local copies in `app/src/screens/LDM_EventDetail_V2/components/actions.ts` and `index.tsx` (same code as the shared
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:37` (LDM_EventDetail_V2): - LDM_EventDetail_V2 (EventDetail_ListItem, EventDetail_HostCard, ScreenBlock_EventDetail_V2, index.tsx) and LDM_MyEvents_V2
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:39` (LDM_EventDetail_V2): - Tests in the shared libs (flip, locality, generateScreenURL). Parity: LDM_EventDetail_V2 0, LDM_MyEvents_V2 0.
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:7` (LDM_MyEvents_V2): - Other routes using it: LDM_MyEvents_V2 (`components/actions.ts`), LDM_Email_V2 (not built), the Assemble
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:13` (LDM_MyEvents_V2): EventDetail_ListItem and ScreenBlock_EventDetail_V2 (OnHandle_ContactHost_Message / _Call), and by the LDM_MyEvents_V2
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:14` (LDM_MyEvents_V2): blocks: both routes keep an identical copy (`screens/LDM_MyEvents_V2/components/actions.ts:39`,
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:37` (LDM_MyEvents_V2): - LDM_EventDetail_V2 (EventDetail_ListItem, EventDetail_HostCard, ScreenBlock_EventDetail_V2, index.tsx) and LDM_MyEvents_V2
- `migration/change-requests/CR-LDM_EventDetail_V2-1.md:39` (LDM_MyEvents_V2): - Tests in the shared libs (flip, locality, generateScreenURL). Parity: LDM_EventDetail_V2 0, LDM_MyEvents_V2 0.

## ADRs (stack.md)

- `app/docs/reference/stack.md:252` (LDM_Email_V2): - Q6 (auto-accepted under the user's delegation, 2026-10-22): the 5 `ContactByEmail*` pages share a `ContactEmailForm` and two card components. Each page has a config object and one submit hook, and there is no container. `EmailContact`, `EmailTarget` and `LDM_Email_V2` stay separate.
- `app/docs/reference/stack.md:237` (LDM_MyEvents_V2): - P4-5 differences from §3.1: `meta.flagRedirect` is on 6 routes (Notifications, Bookmarks, MyBookmarks, LDM_MyEvents_V2, HouseholdCarousel, SupperMeeting_Carousel), and `useOsNavigate` applies it. A URL that is opened directly is not redirected, the same as before. `capture-plan.json` has no flag v

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:41` (LDM_Email_V2): LDM_EventDetail and LDM_Email (V1) are `skip`; the app builds LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2.
- `migration/knowledge/orbit-assemble-ldm.md:48` (LDM_Email_V2): EventBooklet, OrbitAdminEventDetail, ContactByEmailOrbitHost, EmailContact, LDM_Email_V2,
- `migration/knowledge/shell-facts.md:150` (LDM_Email_V2): ContactByEmail*, LDM_Email_V2, EmailTarget, LegacyShareObject, OrbitAdminEventDetail (submit/scan paths).
- `migration/knowledge/auto-decisions-2026-10-16.md:61` (LDM_Email_V2): | LDM_Email_V2 Q1-Q3, ContactByEmailLDMCoordinator Q1, EmailTarget Q1 | **A (recommended)** each | sends mocked (P-MUTATION); compiled inline margin-top kept |
- `migration/knowledge/auto-decisions-2026-10-16.md:62` (LDM_Email_V2): | CR-LDM_Email_V2-1 | applied: consistency_check accepts compiled-view inline styles on no-capture routes (cited .mvc.js) | skill tooling |
- `migration/knowledge/runtime-sources.md:66` (LDM_Email_V2): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/orbit-assemble-ldm.md:40` (LDM_EventDetail_V2): TST runs the V2 LDM screens (GetHasNewLDM on: the V1 event card navigates to LDM_EventDetail_V2). LDM_MyEvents,
- `migration/knowledge/orbit-assemble-ldm.md:41` (LDM_EventDetail_V2): LDM_EventDetail and LDM_Email (V1) are `skip`; the app builds LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2.
- `migration/knowledge/orbit-assemble-ldm.md:46` (LDM_EventDetail_V2): (default only), LDM_MyEvents_V2, LDM_EventDetail_V2, Assemble_BrowseByCountry, AssembleEvents.
- `migration/knowledge/auto-decisions-2026-10-16.md:57` (LDM_EventDetail_V2): | LDM_EventDetail_V2 Q1-Q3 | **A (recommended)** each | uncaptured host/published branches from compiled code; cloneQuery; 70415 pending as captured |
- `migration/knowledge/auto-decisions-2026-10-16.md:58` (LDM_EventDetail_V2): | CR-LDM_EventDetail_V2-1 (move LDM helpers to shared) | queued for a foundation batch | local copies until then |
- `migration/knowledge/auto-decisions-2026-10-16.md:60` (LDM_EventDetail_V2): | CR-MilestoneDetail-1..4 + CR-LDM_EventDetail_V2-1 | foundation F11, then finish MilestoneDetail | |
- `migration/knowledge/auto-decisions-2026-10-16.md:63` (LDM_EventDetail_V2): | F11: CR-MilestoneDetail-1..4, CR-LDM_EventDetail_V2-1 applied | subscribe API on the Orbit static store; directory access mock enables all; contacts only for hosted guests; generateScreenURL in shell/navigation; HandleDownload hook (web: open in new tab, U18) | recommended choices |
- `migration/knowledge/orbit-assemble-ldm.md:17` (LDM_MyEvents_V2): OrbitAdminLanding, LDM_MyEvents_V2, AssembleEvents; MessageDetail Orbit/Assemble handlers): they work once built.
- `migration/knowledge/orbit-assemble-ldm.md:41` (LDM_MyEvents_V2): LDM_EventDetail and LDM_Email (V1) are `skip`; the app builds LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2.
- `migration/knowledge/orbit-assemble-ldm.md:46` (LDM_MyEvents_V2): (default only), LDM_MyEvents_V2, LDM_EventDetail_V2, Assemble_BrowseByCountry, AssembleEvents.
- `migration/knowledge/navigation.md:28` (LDM_MyEvents_V2): - The `NavigateTo_MyCalendar…` handlers (AssembleEvents, LDM_MyEvents, LDM_MyEvents_V2, OrbitLanding) open MyEntertaining. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:35` (LDM_MyEvents_V2): | `app/src/screens/LDM_MyEvents_V2/components/EventCard_Box.tsx:28` | Container onClick | EventCard_Box.mvc.js:146-153 raises event Click_Card; its only parent on this route, EventCard_V2.mvc.js:176-180, binds only `_handleError`; the unbound event resolves (:236-238) | stays; comment cites the evid
- `migration/knowledge/audit-a1-empty-handlers.md:52` (LDM_MyEvents_V2): | `screens/LDM_MyEvents_V2/components/MyTimeline_V2.tsx` | EventCard_V2 CallPhoneEventCard (not passed) | EventCard_V2 never raises it (only its declaration, EventCard_V2.mvc.js:369) |
- `migration/knowledge/audit-a1-empty-handlers.md:53` (LDM_MyEvents_V2): | `screens/LDM_MyEvents_V2/components/MyEvents_MyTimelineFilterButton.tsx:26` | Filter / ResetFilters / Close | the filter popup is NotCaptured (Q1) |
- `migration/knowledge/audit-a1-empty-handlers.md:54` (LDM_MyEvents_V2): | `screens/LDM_MyEvents_V2/components/ScreenBlock_MyEvents_V2.tsx:83` | calendar events (EventCalendarWeekMonth, MonthYearSelector, DayCalendar, MonthCalendar, Agenda_V2) | CurrentEventView is always MyTimeline: those branches never render |

## flags

- `migration/flags.md:70` (LDM_EventDetail_V2): | `action:toggle_IsFetching` (gone) (candidate) | flag check action | LDM_EventDetail, LDM_EventDetail_V2 | ldm_eventdetail | open | - | **open** |
- `migration/flags.md:97` (LDM_EventDetail_V2): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens
- `migration/flags.md:19` (LDM_MyEvents_V2): | `action:expandToggled` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:36` (LDM_MyEvents_V2): | `action:onHandle_ExpandToggled` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:37` (LDM_MyEvents_V2): | `action:onHandle_ToggleView` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:54` (LDM_MyEvents_V2): | `action:toggleEventFilters` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:57` (LDM_MyEvents_V2): | `action:toggleGuestList` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:71` (LDM_MyEvents_V2): | `action:toggle_IsShowList` (gone) (candidate) | flag check action | LDM_MyEvents, LDM_MyEvents_V2 | ldm_myevents | open | - | **open** |
- `migration/flags.md:97` (LDM_MyEvents_V2): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens

## parity exemptions

- `migration/parity-exemptions.json:1332` (LDM_EventDetail_V2): "routeRegex": "^/UBTConnect/LDM_EventDetail_V2(\\?|$)",
- `migration/parity-exemptions.json:1343` (LDM_EventDetail_V2): "routeRegex": "^/UBTConnect/LDM_EventDetail_V2(\\?|$)",
- `migration/parity-exemptions.json:1256` (LDM_MyEvents_V2): "routeRegex": "^/UBTConnect/LDM_MyEvents_V2(\\?|$)",
- `migration/parity-exemptions.json:1259` (LDM_MyEvents_V2): "evidence": "migration/screens/LDM_MyEvents_V2/parity/default.json (16 style diffs, background-image only); migration/knowledge/mock-fixtures.md 'Person images in mocks'"
- `migration/parity-exemptions.json:1267` (LDM_MyEvents_V2): "routeRegex": "^/UBTConnect/LDM_MyEvents_V2(\\?|$)",
- `migration/parity-exemptions.json:1269` (LDM_MyEvents_V2): "detailRegex": "^0\\.\\d\\d% pixels differ .*migration/screens/LDM_MyEvents_V2/parity/default\\.diff\\.png$",
- `migration/parity-exemptions.json:1271` (LDM_MyEvents_V2): "evidence": "migration/screens/LDM_MyEvents_V2/parity/default.diff.png (hotspots 280-320,280-560 = the photo stacks)"
- `migration/parity-exemptions.json:1283` (LDM_MyEvents_V2): "routeRegex": "^/UBTConnect/LDM_MyEvents_V2(\\?|$)",
- `migration/parity-exemptions.json:1286` (LDM_MyEvents_V2): "evidence": "migration/screens/LDM_MyEvents_V2/parity/offline.json"
- `migration/parity-exemptions.json:1294` (LDM_MyEvents_V2): "routeRegex": "^/UBTConnect/LDM_MyEvents_V2(\\?|$)",
