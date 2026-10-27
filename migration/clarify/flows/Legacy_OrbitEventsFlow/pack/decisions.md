# Recorded decisions and facts that name the elements of UI flow Legacy_OrbitEventsFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:59` (EmailContact): | EmailContact | `/UBTConnect/EmailContact` |  | 73 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-3b |
- `migration/board.md:61` (EventBooklet): | EventBooklet | `/UBTConnect/EventBooklet` |  | 75 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-3b |
- `migration/board.md:62` (EventDetail): | EventDetail | `/UBTConnect/EventDetail` |  | 86 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-eventdetail |
- `migration/board.md:63` (GuestArrangements): | GuestArrangements | `/UBTConnect/GuestArrangements` |  | 68 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-3b |
- `migration/board.md:64` (HelpersDetail): | HelpersDetail | `/UBTConnect/HelpersDetail` |  | 72 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-1 |
- `migration/board.md:65` (HostSurvey): | HostSurvey | `/UBTConnect/HostSurvey` |  | 91 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-hostsurvey |
- `migration/board.md:74` (MilestoneDetail): | MilestoneDetail | `/UBTConnect/MilestoneDetail` |  | 107 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-milestonedetail |
- `migration/board.md:81` (OrbitLanding): | OrbitLanding | `/UBTConnect/OrbitLanding` |  | 83 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbitlanding |
- `migration/board.md:89` (TransportDetail): | TransportDetail | `/UBTConnect/TransportDetail` |  | 62 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-2 |
- `migration/board.md:90` (ViewDocuments): | ViewDocuments | `/UBTConnect/ViewDocuments` |  | 62 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-2 |

## change requests

- `migration/change-requests/CR-EventBooklet-1.md:1` (EventBooklet): # CR-EventBooklet-1: API contract + Orbit client variables — GetBookletGuestsMaxRows / GetBookletHelpersMaxRows and SetBookletMaxRows
- `migration/change-requests/CR-EventBooklet-1.md:4` (EventBooklet): - Raised by: EventBooklet, 2026-10-16
- `migration/change-requests/CR-EventBooklet-1.md:6` (EventBooklet): - Other routes using it (catalog/blocks.md): none (EventBooklet only)
- `migration/change-requests/CR-EventBooklet-1.md:7` (EventBooklet): - Related question: EventBooklet Q3 (page size until applied)
- `migration/change-requests/CR-EventBooklet-1.md:10` (EventBooklet): - No capture (no-capture.json). Handler: `migration/screens/EventBooklet/analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc.js` OnReady :3121-3194 (`setBookletMaxRows$Action` before ResetPaginationSettings(True)), ResetPaginationSettings :2744-2844
- `migration/change-requests/CR-EventBooklet-1.md:20` (EventBooklet): No UI part: `app/src/screens/EventBooklet/components/actions.ts` `bookletMaxRows` (10 / 10) and a `setBookletMaxRows()` stand-in that makes no call (EventBooklet Q3 → A).
- `migration/change-requests/CR-EventBooklet-1.md:35` (EventBooklet): - EventBooklet: stand-ins removed from `components/actions.ts`; `ScreenBlock_EventBooklet.tsx` calls the shared
- `migration/change-requests/CR-EventBooklet-1.md:37` (EventBooklet): - Regression parity run on: Profile, OrbitLanding, EventDetail (all 0, 2026-10-16). EventBooklet (no capture): headless
- `migration/change-requests/CR-OrbitLanding-1.md:6` (EventDetail): - Other routes using it: every Orbit screen calls Connect2_OrbitMobile_MUI data actions (EventDetail, MilestoneDetail, …):
- `migration/change-requests/CR-F18-1.md:13` (EventDetail): `active-screen screen-container slide-from-right-enter-done` (Login, PINUnlock, EventDetail… captures); the slider is
- `migration/change-requests/CR-EventBooklet-1.md:37` (EventDetail): - Regression parity run on: Profile, OrbitLanding, EventDetail (all 0, 2026-10-16). EventBooklet (no capture): headless
- `migration/change-requests/CR-HostSurvey-1.md:73` (EventDetail): EventDetail, MilestoneDetail, HelpersDetail, OrbitLanding clean.
- `migration/change-requests/CR-HelpersDetail-1.md:9` (EventDetail): - Related: CR-MilestoneDetail-4 (header re-reads the store per version), CR-EventDetail-1 (the store)
- `migration/change-requests/CR-HelpersDetail-1.md:46` (EventDetail): EventDetail 0, MilestoneDetail 0, OrbitLanding 0, HouseholdDetails 0, MyBookmarks 0, Locality_Details 0.
- `migration/change-requests/CR-MilestoneDetail-4.md:8` (EventDetail): - Related: CR-EventDetail-1 (the store), MilestoneDetail parity diagnostic 2026-10-16
- `migration/change-requests/CR-MilestoneDetail-4.md:32` (EventDetail): - Not changed (route edit outside this CR): `screens/EventDetail/components/HostAllocation_List.tsx` still reads the helper
- `migration/change-requests/CR-HelpersDetail-1.md:8` (GuestArrangements): (HelpersDetail now; TransportDetail, GuestArrangements, … later)
- `migration/change-requests/CR-MilestoneDetail-4.md:7` (GuestArrangements): - Other routes using it: every Orbit milestone screen with MilestoneHeader (TransportDetail, HelpersDetail, GuestArrangements, …)
- `migration/change-requests/CR-MilestoneDetail-2.md:8` (HelpersDetail): HelpersDetail, HouseholdDetails Orbit cards)
- `migration/change-requests/CR-HostSurvey-1.md:73` (HelpersDetail): EventDetail, MilestoneDetail, HelpersDetail, OrbitLanding clean.
- `migration/change-requests/CR-HelpersDetail-1.md:1` (HelpersDetail): # CR-HelpersDetail-1: shell/mocks — the loading scenario also stalls the app start's Sync_Info_GetMain (LocalOrbitMilestoneType empty)
- `migration/change-requests/CR-HelpersDetail-1.md:4` (HelpersDetail): - Raised by: HelpersDetail, 2026-10-16 (route-orbit-lite-1)
- `migration/change-requests/CR-HelpersDetail-1.md:8` (HelpersDetail): (HelpersDetail now; TransportDetail, GuestArrangements, … later)
- `migration/change-requests/CR-HelpersDetail-1.md:12` (HelpersDetail): - TST captures `loading` and `offline` (migration/screens/HelpersDetail/analysis/dom/loading.html, offline.html): the
- `migration/change-requests/CR-HelpersDetail-1.md:26` (HelpersDetail): (migration/screens/HelpersDetail/proposed-exemptions.json) until this CR lands.
- `migration/change-requests/CR-HelpersDetail-1.md:43` (HelpersDetail): - The proposed exemption `MOCK-LOADING-NO-SYNC-HELPERSDETAIL-HEADER` (screens/HelpersDetail/proposed-exemptions.json) is
- `migration/change-requests/CR-HostSurvey-1.md:1` (HostSurvey): # CR-HostSurvey-1: shell app start — the remaining Orbit local entities (host survey steps, floors, gender preferences, …)
- `migration/change-requests/CR-HostSurvey-1.md:4` (HostSurvey): - Raised by: HostSurvey (route-hostsurvey), 2026-10-16
- `migration/change-requests/CR-HostSurvey-1.md:7` (HostSurvey): - Other routes using it: every Orbit screen with GetLocal* aggregates on these tables (HostSurvey now; MealGuest,
- `migration/change-requests/CR-HostSurvey-1.md:9` (HostSurvey): - Related questions: HostSurvey Q1 (decision: stand-in rows in the route until applied)
- `migration/change-requests/CR-HostSurvey-1.md:18` (HostSurvey): - ScreenBlock_HostSurvey reads them through client aggregates (HS = `migration/screens/HostSurvey/analysis/sources/
- `migration/change-requests/CR-HostSurvey-1.md:26` (HostSurvey): - Captured facts the mock rows must keep (HostSurvey/default): summary step without data steps (header class
- `migration/change-requests/CR-HostSurvey-1.md:37` (HostSurvey): `app/src/screens/HostSurvey/components/localEntities.ts` are the proposal (captured labels kept, the rest
- `migration/change-requests/CR-HostSurvey-1.md:41` (HostSurvey): `app/src/screens/HostSurvey/components/localEntities.ts` holds stand-in rows (Q1) and ports the three aggregates the
- `migration/change-requests/CR-OrbitAdminLanding-1.md:47` (MilestoneDetail): MilestoneDetail sends UserMemberId 990001 (mock ignores it). ContactByEmail*, LDM_Email_V2 (shows Email only, still
- `migration/change-requests/CR-OrbitAdminLanding-1.md:52` (MilestoneDetail): Profile, Menu, MilestoneDetail: 0 unexempted differences; no exemption proposed. Menu showed a header-band pixel
- `migration/change-requests/CR-OrbitLanding-1.md:6` (MilestoneDetail): - Other routes using it: every Orbit screen calls Connect2_OrbitMobile_MUI data actions (EventDetail, MilestoneDetail, …):
- `migration/change-requests/CR-MilestoneDetail-2.md:1` (MilestoneDetail): # CR-MilestoneDetail-2: shared — Connect2_LegacyShared GetCacheableMemberContactList / GetCacheableTimezoneInfo (call popup data)
- `migration/change-requests/CR-MilestoneDetail-2.md:4` (MilestoneDetail): - Raised by: MilestoneDetail, 2026-10-16
- `migration/change-requests/CR-MilestoneDetail-2.md:9` (MilestoneDetail): - Related question: MilestoneDetail Q2
- `migration/change-requests/CR-MilestoneDetail-2.md:38` (MilestoneDetail): LocalityId (SB :1053). Q2 A interim behaviour removed. Parity: MilestoneDetail 0.
- `migration/change-requests/CR-MilestoneDetail-3.md:1` (MilestoneDetail): # CR-MilestoneDetail-3: shared — OpenInApp_TryOpenFileInApp and FileTransfer.HandleDownload (open an Orbit document)
- `migration/change-requests/CR-OrbitAdminLanding-1.md:6` (OrbitLanding): - Other routes using it: OrbitLanding (CurrentMemberId = cached MemberId), MessageDetail, ContactByEmail*, LDM_Email_V2
- `migration/change-requests/CR-OrbitAdminLanding-1.md:41` (OrbitLanding): - Regression (all callers in `app/src`): OrbitLanding (CurrentMemberId) would have shown the My-calendar icon on load
- `migration/change-requests/CR-OrbitAdminLanding-1.md:43` (OrbitLanding): auto mode (recommended A): keep the shell change and list the signed-in user second in OrbitLanding's
- `migration/change-requests/CR-OrbitAdminLanding-1.md:44` (OrbitLanding): Get_HouseholdMembers mock (`app/src/screens/OrbitLanding/mocks.ts`), so the selected first row is not the user, as
- `migration/change-requests/CR-OrbitAdminLanding-1.md:46` (OrbitLanding): of OrbitLanding Q3 (CurrentMemberId 0). MessageDetail reads GetUserInformation, not this action (unaffected).
- `migration/change-requests/CR-OrbitAdminLanding-1.md:51` (OrbitLanding): scenario noadminevents), OrbitLanding (5 states), MessageDetail, ContactByEmailMember, ContactByEmailOneSchoolGlobal,
- `migration/change-requests/CR-OrbitLanding-1.md:1` (OrbitLanding): # CR-OrbitLanding-1: API contract — add the two data actions of ScreenBlock_OrbitLanding (Connect2_OrbitMobile_MUI)
- `migration/change-requests/CR-OrbitLanding-1.md:4` (OrbitLanding): - Raised by: OrbitLanding, 2026-10-16
- `migration/change-requests/CR-HelpersDetail-1.md:8` (TransportDetail): (HelpersDetail now; TransportDetail, GuestArrangements, … later)
- `migration/change-requests/CR-MilestoneDetail-4.md:7` (TransportDetail): - Other routes using it: every Orbit milestone screen with MilestoneHeader (TransportDetail, HelpersDetail, GuestArrangements, …)
- `migration/change-requests/CR-MilestoneDetail-3.md:8` (ViewDocuments): - Other routes using it: Orbit screens with a document icon (ViewDocuments, EventBooklet, MealHost, …)

## ADRs (stack.md)

- `app/docs/reference/stack.md:252` (EmailContact): - Q6 (auto-accepted under the user's delegation, 2026-10-22): the 5 `ContactByEmail*` pages share a `ContactEmailForm` and two card components. Each page has a config object and one submit hook, and there is no container. `EmailContact`, `EmailTarget` and `LDM_Email_V2` stay separate.
- `app/docs/reference/stack.md:204` (OrbitLanding): - Decision: Replace @lhci/cli by lighthouse 13.4.1 (dev), driven by a small Node script (npm run lighthouse) with the ADR-12 scope: demo build served statically, HomeFeed / Search / OrbitLanding at mobile emulation, performance, accessibility, best practices, warning budgets, local filesystem output

## known original bugs

- `app/docs/known-original-bugs.md:15` (EventDetail): | B7  | `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template` click handlers (Card_Event, Card_Milestone)           | The frame and each placeholder trigger OnClick, with no stopPropagation: one click inside a placeholder raises ClickedEvent / ClickedMilestone twice                                  
- `app/docs/known-original-bugs.md:16` (EventDetail): | B8  | `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone` OnHandle_ClickedMilestone                            | "Accommodation Hotel?" compares MilestoneId (not the type Id) with `accommodation-hotel`, so hotel cards still raise ClickedMilestone                                                 
- `app/docs/known-original-bugs.md:18` (MilestoneDetail): | B10 | `MilestoneDetail` BuildMemberCallData                                                                       | The non-empty branch never sets Phone, so the call popup can open without a number                                                                                                    

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:3` (EmailContact): User, 2026-10-16: "Orbit không phải là embedded app" (English: "Orbit is not an embedded app") — implement the Orbit routes; LDM, EmailContact and Assemble too.
- `migration/knowledge/orbit-assemble-ldm.md:8` (EmailContact): `Connect2_OrbitMobile_MUI` (12 Orbit screens, 6 LDM screens, EmailContact; 99 blocks) and
- `migration/knowledge/orbit-assemble-ldm.md:13` (EmailContact): ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, EmailContact.
- `migration/knowledge/orbit-assemble-ldm.md:35` (EmailContact): EmailContact.
- `migration/knowledge/orbit-assemble-ldm.md:48` (EmailContact): EventBooklet, OrbitAdminEventDetail, ContactByEmailOrbitHost, EmailContact, LDM_Email_V2,
- `migration/knowledge/auto-decisions-2026-10-16.md:91` (EmailContact): | GuestArrangements Q1, EmailContact Q1/Q2, EventBooklet Q1/Q3/Q4 | **A (recommended)** each | review URLs; sends mocked; CR-EventBooklet-1/2 → F17 |
- `migration/knowledge/runtime-sources.md:66` (EmailContact): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/orbit-assemble-ldm.md:11` (EventBooklet): - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
- `migration/knowledge/orbit-assemble-ldm.md:33` (EventBooklet): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:48` (EventBooklet): EventBooklet, OrbitAdminEventDetail, ContactByEmailOrbitHost, EmailContact, LDM_Email_V2,
- `migration/knowledge/audit-a1-empty-handlers.md:81` (EventBooklet): - `screens/EventBooklet/components/PopUp_OrbitBookletFilters.tsx:98`: OnReady → DropdownTags_CloseOtherOnClick, a
- `migration/knowledge/audit-a1-empty-handlers.md:82` (EventBooklet): documented no-op until CR-EventBooklet-2; DropdownTags Initialized (→ OnInitialized_Dropdowns) is not passed either.
- `migration/knowledge/audit-a1-empty-handlers.md:83` (EventBooklet): For the EventBooklet route agent.
- `migration/knowledge/auto-decisions-2026-10-16.md:91` (EventBooklet): | GuestArrangements Q1, EmailContact Q1/Q2, EventBooklet Q1/Q3/Q4 | **A (recommended)** each | review URLs; sends mocked; CR-EventBooklet-1/2 → F17 |
- `migration/knowledge/auto-decisions-2026-10-16.md:92` (EventBooklet): | EventBooklet Q2 (server-side booklet filtering/paging rules) | conservative mock as in the spec | CONFIRMED (user, 2026-10-17) |
- `migration/knowledge/orbit-assemble-ldm.md:11` (EventDetail): - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
- `migration/knowledge/orbit-assemble-ldm.md:33` (EventDetail): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:44` (EventDetail): Captured (TST, read-only): OrbitLanding (1 event), OrbitAdminLanding (empty: NoInformation_Orbit), EventDetail,
- `migration/knowledge/auto-decisions-2026-10-16.md:49` (EventDetail): | EventDetail Q1-Q4 | **A (recommended)** each | flag mobileOrbitEventBooklet default-only on; CR-EventDetail-1 (shell Orbit static entities sync); GetAllApplicationEvents exemption; event 7301 = Host |
- `migration/knowledge/auto-decisions-2026-10-16.md:50` (EventDetail): | EventDetail Q5 (LocalSurveyStatus labels) | fictional values (no source) | CONFIRMED (user, 2026-10-17) |
- `migration/knowledge/auto-decisions-2026-10-16.md:52` (EventDetail): | F10: CR-EventDetail-1 applied (shell app start SyncAllOrbitStaticEntities, UBTConnect.controller.js:16579-16583) | done | |
- `migration/knowledge/auto-decisions-2026-10-16.md:56` (EventDetail): | EventDetail capture-artifact rules (masked title header 6 px, via back arrow pixel shift) | accepted (recommended) | |
- `migration/knowledge/auto-decisions-2026-10-16.md:116` (EventDetail): | Sweep 2026-10-17: EventDetail day digits "23/24/25" → "30/31/1" | cause: the Orbit mock world puts the meetings on the first Friday ≥ a week after today (`orbit.ts` meetingsFriday), so EventDetail parity matched only for runs 2026-10-10…16 (date rollover, not a code change). Exemption `MOCK-RELATI
- `migration/knowledge/orbit-assemble-ldm.md:12` (GuestArrangements): GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/orbit-assemble-ldm.md:33` (GuestArrangements): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:47` (GuestArrangements): No-capture (build from the compiled code): TransportDetail, GuestArrangements, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/audit-a1-empty-handlers.md:90` (GuestArrangements): MilestoneDetail, GuestArrangements) and SubLayout_Section (via SubLayout_DirectoryDetailScreen_Section:
- `migration/knowledge/auto-decisions-2026-10-16.md:91` (GuestArrangements): | GuestArrangements Q1, EmailContact Q1/Q2, EventBooklet Q1/Q3/Q4 | **A (recommended)** each | review URLs; sends mocked; CR-EventBooklet-1/2 → F17 |
- `migration/knowledge/runtime-sources.md:66` (GuestArrangements): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/orbit-assemble-ldm.md:12` (HelpersDetail): GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/orbit-assemble-ldm.md:33` (HelpersDetail): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:45` (HelpersDetail): HostSurvey (default only), MilestoneDetail (default only, Accommodation), HelpersDetail, ContactByEmailOrbitHelpdesk
- `migration/knowledge/audit-a1-empty-handlers.md:89` (HelpersDetail): - Comment only: LDM_MyEvents_V2, Notifications; shared comments in Card_MemberInformation (HelpersDetail,
- `migration/knowledge/auto-decisions-2026-10-16.md:65` (HelpersDetail): | HelpersDetail Q1-Q2, ContactByEmailOrbitHelpdesk Q1-Q2, ContactByEmailOrbitHost Q1-Q2 | **A (recommended)** each | cloneQueries; sends mocked; review URL for OrbitHost |
- `migration/knowledge/auto-decisions-2026-10-16.md:66` (HelpersDetail): | HelpersDetail MOCK-LOADING-NO-SYNC (header 'Helper ()' in loading/offline) | **not exempted; CR-HelpersDetail-1 fix** (seed Orbit static entities in the mock session as the device DB keeps them on TST) | conservative: fix the deviation of F10 instead of masking |
- `migration/knowledge/auto-decisions-2026-10-16.md:69` (HelpersDetail): | F12: CR-HelpersDetail-1 applied — Orbit static entities (LocalOrbitMilestoneType, LocalSurveyStatus) **in IndexedDB** with an in-memory mirror for first-render reads (loaded at app start, written through by each sync, read back after its transaction); Entity.get of a missing id raises DataBaseExce
- `migration/knowledge/orbit-assemble-ldm.md:12` (HostSurvey): GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/orbit-assemble-ldm.md:33` (HostSurvey): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:45` (HostSurvey): HostSurvey (default only), MilestoneDetail (default only, Accommodation), HelpersDetail, ContactByEmailOrbitHelpdesk
- `migration/knowledge/auto-decisions-2026-10-16.md:73` (HostSurvey): | HostSurvey Q1-Q4 | **A (recommended)** each | stand-in local rows until CR-HostSurvey-1; wizard/popups NotCaptured; cloneQuery; back-arrow rule |
- `migration/knowledge/auto-decisions-2026-10-16.md:74` (HostSurvey): | CR-HostSurvey-1 (9 Orbit local entities), CR-HostSurvey-2 (OSUI Accordion initial-expanded items) | foundation F14, then finish HostSurvey | |
- `migration/knowledge/auto-decisions-2026-10-16.md:76` (HostSurvey): | F14: CR-HostSurvey-1 (10 Orbit local entities persisted), CR-HostSurvey-2 (evidence wrong: compiled HostSurvey passes MultipleItems true; route prop fix, shared Accordion unchanged) | applied | |
- `migration/knowledge/auto-decisions-2026-10-16.md:77` (HostSurvey): | HostSurvey pixel 9.26% (masked title wrap + via back arrow) | rule CAPTURE-VIA-MASK-SHIFT-HOSTSURVEY-PIXELS (recommended, as other Orbit routes) | |
- `migration/knowledge/feature-flag-helpers.md:23` (HostSurvey): | GetHasOrbitHostSurvey | launchDarkly_FF.mobileOrbitHostSurvey | true | MyNotifications, Orbit_ScreenBlocks | probably: HostSurvey |
- `migration/knowledge/orbit-assemble-ldm.md:11` (MilestoneDetail): - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
- `migration/knowledge/orbit-assemble-ldm.md:33` (MilestoneDetail): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:45` (MilestoneDetail): HostSurvey (default only), MilestoneDetail (default only, Accommodation), HelpersDetail, ContactByEmailOrbitHelpdesk
- `migration/knowledge/shell-facts.md:149` (MilestoneDetail): - Readers: OrbitAdminLanding, QRCodeGenerate, OrbitLanding (CurrentMemberId), MilestoneDetail (UserMemberId),
- `migration/knowledge/audit-a1-empty-handlers.md:57` (MilestoneDetail): | `screens/MilestoneDetail/index.tsx:28` | NavigateTo_ContactHostByEmail | raised only by the meal / accommodation guest / helper blocks, not built (Q5) |
- `migration/knowledge/audit-a1-empty-handlers.md:65` (MilestoneDetail): | HandleDownload events (Feed_Embeded, ViewDocuments, MilestoneDetail AccommodationHost) | OnDownloadComplete / Error / Progress | raised only by the Cordova FileTransfer plugin |
- `migration/knowledge/audit-a1-empty-handlers.md:90` (MilestoneDetail): MilestoneDetail, GuestArrangements) and SubLayout_Section (via SubLayout_DirectoryDetailScreen_Section:
- `migration/knowledge/pwa-file-plugins.md:36` (MilestoneDetail): - FileTransfer.HandleDownload block (MilestoneDetail raw HandleDownload.mvc.js:297-350, :534-545): OnReady runs
- `migration/knowledge/orbit-assemble-ldm.md:11` (OrbitLanding): - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
- `migration/knowledge/orbit-assemble-ldm.md:16` (OrbitLanding): - Entry points in built screens already navigate to the original paths (HomeFeed FeedBlock_Services → OrbitLanding,
- `migration/knowledge/orbit-assemble-ldm.md:30` (OrbitLanding): - The test account has no Orbit events (OrbitLanding / OrbitAdminLanding captured empty).
- `migration/knowledge/orbit-assemble-ldm.md:44` (OrbitLanding): Captured (TST, read-only): OrbitLanding (1 event), OrbitAdminLanding (empty: NoInformation_Orbit), EventDetail,
- `migration/knowledge/shell-facts.md:140` (OrbitLanding): - The key is in localStorage (`screens/OrbitLanding/capture/runtime-OrbitLanding.json` environment.localStorageKeys).
- `migration/knowledge/shell-facts.md:149` (OrbitLanding): - Readers: OrbitAdminLanding, QRCodeGenerate, OrbitLanding (CurrentMemberId), MilestoneDetail (UserMemberId),
- `migration/knowledge/shell-facts.md:151` (OrbitLanding): - OrbitLanding with a real CurrentMemberId: TST shows no My-calendar icon on load although the cache is filled. So its
- `migration/knowledge/shell-facts.md:153` (OrbitLanding): - The OrbitLanding mock of the React app lists the signed-in user second (`screens/OrbitLanding/mocks.ts`).
- `migration/knowledge/shell-facts.md:155` (PassportScan): - View Passport details now navigates to PassportScan (CurrentMemberId ≠ 0), as compiled.
- `migration/knowledge/orbit-assemble-ldm.md:12` (TransportDetail): GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/orbit-assemble-ldm.md:33` (TransportDetail): EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
- `migration/knowledge/orbit-assemble-ldm.md:47` (TransportDetail): No-capture (build from the compiled code): TransportDetail, GuestArrangements, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/auto-decisions-2026-10-16.md:81` (TransportDetail): | TransportDetail Q1, ViewDocuments Q1/Q2, QRCodeGenerate Q1/Q2 | **A (recommended)** each | mock itinerary/documents/QR pass; web: new tab; CR-QRCodeGenerate-1 → F16 |
- `migration/knowledge/auto-decisions-2026-10-16.md:82` (TransportDetail): | TransportDetail Q2 (transport icons/header classes, uncaptured) | conservative: OrbitTheme.css class names | CONFIRMED (user, 2026-10-17) |
- `migration/knowledge/auto-decisions-2026-10-16.md:120` (TransportDetail): **User review 2026-10-17 ~09:00:** confirmed the 7 open rows (B6, O-B1, SearchResult fields not adopted, EventDetail Q5, TransportDetail Q2, EventBooklet Q2, booklet guard tag), ADR-11/12/13, favicon (A) and the EventDetail exemption (A). Still open: nav timeout 4 s, demo SW scope `/`, the other PWA
- `migration/knowledge/runtime-sources.md:66` (TransportDetail): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/orbit-assemble-ldm.md:12` (ViewDocuments): GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/orbit-assemble-ldm.md:34` (ViewDocuments): ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost,
- `migration/knowledge/orbit-assemble-ldm.md:47` (ViewDocuments): No-capture (build from the compiled code): TransportDetail, GuestArrangements, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/audit-a1-empty-handlers.md:22` (ViewDocuments): ViewDocuments).
- `migration/knowledge/audit-a1-empty-handlers.md:44` (ViewDocuments): | `screens/ViewDocuments/components/ScreenBlock_ViewDocuments.tsx:173` | HandleDownloadOnDownloadProgress | ScreenBlock_ViewDocuments.mvc.js:869-892: breakpoints only |
- `migration/knowledge/audit-a1-empty-handlers.md:65` (ViewDocuments): | HandleDownload events (Feed_Embeded, ViewDocuments, MilestoneDetail AccommodationHost) | OnDownloadComplete / Error / Progress | raised only by the Cordova FileTransfer plugin |
- `migration/knowledge/pwa-file-plugins.md:47` (ViewDocuments): - Callers: Feed_Embeded.tsx:65 (pdf, folder connect-feed-documents); ViewDocuments/ScreenBlock_ViewDocuments.tsx:153 + useHandleDownload :171;
- `migration/knowledge/auto-decisions-2026-10-16.md:81` (ViewDocuments): | TransportDetail Q1, ViewDocuments Q1/Q2, QRCodeGenerate Q1/Q2 | **A (recommended)** each | mock itinerary/documents/QR pass; web: new tab; CR-QRCodeGenerate-1 → F16 |

## flags

- `migration/flags.md:65` (EmailContact): | `action:toggleSideMenu` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact, EmailTarget, EventBooklet, EventDetail … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | open | - | **open** |
- `migration/flags.md:106` (EmailContact): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:147` (EmailContact): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:14` (EventBooklet): | `action:dropdownTogglePopup` (gone) (candidate) | flag check action | EventBooklet | - | open | - | **open** |
- `migration/flags.md:56` (EventBooklet): | `action:toggleFiltersPopUp` (gone) (candidate) | flag check action | EventBooklet | - | open | - | **open** |
- `migration/flags.md:61` (EventBooklet): | `action:toggleSearchMode` (gone) (candidate) | flag check action | EventBooklet | - | open | - | **open** |
- `migration/flags.md:65` (EventBooklet): | `action:toggleSideMenu` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact, EmailTarget, EventBooklet, EventDetail … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | open | - | **open** |
- `migration/flags.md:38` (EventDetail): | `action:onToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, EventDetail, FeedItemDetail … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:65` (EventDetail): | `action:toggleSideMenu` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact, EmailTarget, EventBooklet, EventDetail … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | open | - | **open** |
- `migration/flags.md:79` (EventDetail): | `launchDarkly_FF.mobileOrbitEventBooklet` | static entity record |  | - | open | - | default-only: TST value on (the EventDetail capture shows the booklet entry branch); auto-accepted (user instruction 2026-10-16 night) |
- `migration/flags.md:106` (EventDetail): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:107` (EventDetail): | `action:getHasOrbitEventBooklet` (candidate) | flag check action | EventDetail | - | unavailable: The Service Studio MCP (DEV) loads only UBTConnect and Connect2_Assemble_CS; the wrapper's module is not loaded, so it c | - | default-only: wraps launchDarkly_FF.mobileOrbitEventBooklet (decided on);
- `migration/flags.md:108` (EventDetail): | `action:getHasOrbitHostSurvey` (candidate) | flag check action | EventDetail, MessageDetail | - | unavailable: mobileOrbitHostSurvey: Orbit HostSurvey entry (external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:147` (EventDetail): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:106` (GuestArrangements): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:147` (GuestArrangements): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:106` (HelpersDetail): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:147` (HelpersDetail): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:40` (HostSurvey): | `action:onToggle_BottomSheet_Helpers` (gone) (candidate) | flag check action | HostSurvey | - | open | - | **open** |
- `migration/flags.md:66` (HostSurvey): | `action:toggleSingleResetMealData` (gone) (candidate) | flag check action | HostSurvey | - | open | - | **open** |
- `migration/flags.md:108` (HostSurvey): | `action:getHasOrbitHostSurvey` (candidate) | flag check action | EventDetail, MessageDetail | - | unavailable: mobileOrbitHostSurvey: Orbit HostSurvey entry (external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:106` (MilestoneDetail): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:147` (MilestoneDetail): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:41` (OrbitLanding): | `action:onToggle_FilterPopup` (gone) (candidate) | flag check action | OrbitLanding | - | open | - | **open** |
- `migration/flags.md:45` (OrbitLanding): | `action:onToggle_SortPopup` (gone) (candidate) | flag check action | OrbitLanding | - | open | - | **open** |
- `migration/flags.md:106` (OrbitLanding): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:147` (OrbitLanding): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:106` (TransportDetail): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:147` (TransportDetail): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or
- `migration/flags.md:147` (ViewDocuments): - `action:getHasOrbitAccess`: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js`, `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js`, `UBTConnect.Legacy_Or

## parity exemptions

- `migration/parity-exemptions.json:1210` (EventDetail): "routeRegex": "^/UBTConnect/EventDetail(\\?|$)",
- `migration/parity-exemptions.json:1217` (EventDetail): "reason": "ActionGetAllApplicationEvents was raised on TST by the shell block Utility.HandleImageLoadError (applicationEvent_ImageError → zOnApplicationEvent_Wrapper → cacheLocalApplicationEvents) for an image that failed during the transition from OrbitLanding; the screen itself never calls it (Eve
- `migration/parity-exemptions.json:1218` (EventDetail): "evidence": "migration/screens/EventDetail/analysis/call-sites.md (chain stops: runtime callback); analysis/calls.md #1; EventDetail Q3"
- `migration/parity-exemptions.json:1222` (EventDetail): "routeRegex": "^/UBTConnect/EventDetail(\\?|$)",
- `migration/parity-exemptions.json:1231` (EventDetail): "evidence": "migration/screens/EventDetail/analysis/states.json (via /UBTConnect/OrbitLanding); migration/screens/EventDetail/parity/default.json, loading.json, offline.json (class missing .back)"
- `migration/parity-exemptions.json:1235` (EventDetail): "routeRegex": "^/UBTConnect/EventDetail(\\?|$)",
- `migration/parity-exemptions.json:1245` (EventDetail): "evidence": "migration/screens/EventDetail/parity/loading.json, offline.json (style background-position on .orbit-skeleton-loading-item)"
- `migration/parity-exemptions.json:1302` (EventDetail): "routeRegex": "^/UBTConnect/EventDetail(\\?|$)",
- `migration/parity-exemptions.json:1389` (HelpersDetail): "routeRegex": "^/UBTConnect/HelpersDetail(\\?|$)",
- `migration/parity-exemptions.json:1398` (HelpersDetail): "evidence": "migration/screens/HelpersDetail/analysis/states.json (via); parity/default.json, loading.json, offline.json (class missing .back); same rule as VIA-BACK-MENUICON-EVENTDETAIL / -MILESTONEDETAIL"
- `migration/parity-exemptions.json:1402` (HelpersDetail): "routeRegex": "^/UBTConnect/HelpersDetail(\\?|$)",
- `migration/parity-exemptions.json:1413` (HelpersDetail): "routeRegex": "^/UBTConnect/HelpersDetail(\\?|$)",
- `migration/parity-exemptions.json:1427` (HelpersDetail): "routeRegex": "^/UBTConnect/HelpersDetail(\\?|$)",
- `migration/parity-exemptions.json:1433` (HelpersDetail): "reason": "Screenshot differences that follow from the artifacts above: the missing back arrow (via), the masked one-line title (16 px shift of the content), the skeleton shimmer phase and, in loading/offline, the empty sub-header type (CR-HelpersDetail-1). Auto-accepted in the user's auto mode 2026
- `migration/parity-exemptions.json:1503` (HostSurvey): "routeRegex": "^/UBTConnect/HostSurvey(\\?|$)",
- `migration/parity-exemptions.json:1512` (HostSurvey): "evidence": "migration/screens/HostSurvey/analysis/states.json (via); diagnostic parity default (class missing .back, 14 differences under the header); same rule as VIA-BACK-MENUICON-HELPERSDETAIL / -EVENTDETAIL / -MILESTONEDETAIL"
- `migration/parity-exemptions.json:1520` (HostSurvey): "routeRegex": "^/UBTConnect/HostSurvey(\\?|$)",
- `migration/parity-exemptions.json:1522` (HostSurvey): "detailRegex": "^[0-9]\\.\\d\\d% pixels differ .*migration/screens/HostSurvey/parity/default\\.diff\\.png$",
- `migration/parity-exemptions.json:1524` (HostSurvey): "evidence": "F14 report: HostSurvey default pixel 9.26%, all DOM kinds 0"
- `migration/parity-exemptions.json:1351` (MilestoneDetail): "routeRegex": "^/UBTConnect/MilestoneDetail(\\?|$)",
- `migration/parity-exemptions.json:1361` (MilestoneDetail): "evidence": "migration/screens/MilestoneDetail/analysis/states.json (via /UBTConnect/OrbitLanding); diagnostic parity run with the cloneQuery (class missing .back, HeaderLeft 41×38 → 20×0, h1 offset 56,10 → 35,0, HeaderRight 26×0 → 37×0)"
- `migration/parity-exemptions.json:1365` (MilestoneDetail): "routeRegex": "^/UBTConnect/MilestoneDetail(\\?|$)",
- `migration/parity-exemptions.json:1377` (MilestoneDetail): "routeRegex": "^/UBTConnect/MilestoneDetail(\\?|$)",
- `migration/parity-exemptions.json:1186` (OrbitLanding): "routeRegex": "^/UBTConnect/OrbitLanding(\\?|$)",
- `migration/parity-exemptions.json:1194` (OrbitLanding): "evidence": "migration/screens/OrbitLanding/parity/offline.json (6 rows, one per skeleton row); dom/offline.html:112-126; same kind as CAPTURE-SKELETON-SHIMMER-PHASE"
- `migration/parity-exemptions.json:1198` (OrbitLanding): "routeRegex": "^/UBTConnect/OrbitLanding(\\?|$)",
- `migration/parity-exemptions.json:1204` (OrbitLanding): "detailRegex": "^[4-7]\\.\\d\\d% pixels differ .*migration/screens/OrbitLanding/parity/popup-(filters|sort)\\.diff\\.png$",
- `migration/parity-exemptions.json:1206` (OrbitLanding): "evidence": "dom/popup-filters.raw.html, dom/popup-sort.raw.html (top: 204px); ScreenBlock_OrbitLanding.mvc.js :2200-2214; parity/popup-filters.diff.png, parity/popup-sort.diff.png; OutSystemsReactWidgets.js RadioButton (checked: isSelected); OrbitLanding Q4"
- `migration/parity-exemptions.json:1217` (OrbitLanding): "reason": "ActionGetAllApplicationEvents was raised on TST by the shell block Utility.HandleImageLoadError (applicationEvent_ImageError → zOnApplicationEvent_Wrapper → cacheLocalApplicationEvents) for an image that failed during the transition from OrbitLanding; the screen itself never calls it (Eve
- `migration/parity-exemptions.json:1230` (OrbitLanding): "reason": "MenuIcon__UpdatedOSUI with MenuAction Auto shows the back arrow when there is a screen to go back to: the states were captured via OrbitLanding (states.json via), parity opens the route by URL with no previous screen, so the clone shows no back arrow (missing .back, 41x38 → 20x0) and the 
- `migration/parity-exemptions.json:1231` (OrbitLanding): "evidence": "migration/screens/EventDetail/analysis/states.json (via /UBTConnect/OrbitLanding); migration/screens/EventDetail/parity/default.json, loading.json, offline.json (class missing .back)"
