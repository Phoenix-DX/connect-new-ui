# Auto-accepted decisions, window 2026-10-16 01:14 → 10:00 +07

| Item | Decision | Note |
|---|---|---|
| F8b task 2: bookmark 91001 vs Locality_Details household 91001 | **d (keep the mismatch, documented)**, NOT the recommended a | Option a was tried and broke MyBookmarks / BookmarksByGroup default parity (title wrap, children line); d is the conservative reversible choice. Comment in `app/src/shared/Connect2_MyBookmarks_MUI/mocks.ts`. For the user's review. |
| F8a: request timeout vs TST debug round trip (`checkrequestsuspended`, debugEnabled on TST) | **A (recommended)**: time out at exactly N s, no extra call | Matches production with debug off; the clone has no debugger. |
| F8a: request timeouts in `callAction` | done (user decision HomeFeed Q3 = A) | UBTConnect 20 s, other 7 modules 10 s; CommunicationException "The connection has timed out". |
| Docs | `app/docs` updated (new `guides/os-widgets.md`; shell, shared-code, api-and-mocks, overview); reference pages regenerated | no decision |
| Locality_Details Q6 | **A (recommended)** | Tag exemptions (masked photos, tag-row scroll, slider timing, time label, app-start call order) scoped to the `tag-*` states; capture-plan latency 600 ms for tag-interchange (footer shadow). |
| Locality_Details Q7 | **A (recommended)** | Screen instance keyed by history entry inside the route, so Interchange can open Locality_Details again with a new LocalityId. |
| Locality_Details F1 | tags built, route re-finished | Supper Meetings / Interchange / OneSchool Global captured read-only 2026-10-16 01:2x and built; My Household and Locality Contacts not on locality 252, still NotCaptured. Known: Locality cards show the captured 11/8/6 households while the shared SupperMeeting mocks hold 7/5 for 9202/9203 (TST data of two dates). |

**Reviewed by the user 2026-10-16 ("tôi ok")**: all items above accepted as they are, including ADR-8, CR-ContactByEmailMember-2 rejected, bookmark 91001 option d, and the conservative mocks for LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1.
| Auto window ON AGAIN (user, 2026-10-16 night, open-ended) | — | accept recommended options until the user changes it |
| Meaningful mocks B Q1 (TST test labels "Test Noti 56", "Notification 1/3/4/6"… unmasked in the capture) | **A (recommended)**: keep them | Parity compares unmasked text; MessageList Q4 / Notifications Q3 (user 2026-10-15) said reuse. |
| Meaningful mocks B Q2 (Feed CMS stand-in "Feed CMS (mock)") | **A (recommended)**: keep it | Decision D8 b; the iframe area is exempted. |
| Mocks A Q1: Locality card 1 vs bookmark 91001 (TST lengths show card 1 = household 42438) | **A (recommended)**: card 1 gets id 42438, bookmark row 2 its own id | Nothing visible changes; supersedes option d. |
| Mocks A Q2: school 1430 name (fixture "Oneschool 0322" vs Locality card "OneSchool Alem") | **B (recommended)**: override only the Name in the route mock, fixture untouched | |
| Mocks A Q3: Photobook households in "Green Valley" | **A (recommended)**: switch Photobook to the cast | |
| MyEntertaining (user, 2026-10-16: "update các màn hình như My Entertainment data vì tôi ko thấy có data nào" (English: "update the screens such as My Entertainment data, because I do not see any data")) | mock content for the embedded calendar | user request, no decision |
| MyEntertaining pixel after the stand-in content | **A (recommended)**: ignoreSubtrees MYENT-D8B-IFRAME-PIXEL (embed block, default) | |
| Stack osui:Accordion / AccordionItem / DEPRECATED_Accordion / DEPRECATED_AccordionItem / Tooltip (were "out of scope: NotCaptured") | **hand-written component with the captured DOM** (recommended, as Gallery/BottomSheet) | needed by Orbit/Assemble screens now in scope |
| Stack osui:DropdownTags | **original provider, Virtual Select v1.3.0 vendored** (as DropdownSearch) | |
| LDM V1 screens | skip (user, "những gì của V1 ko cần dựng" (English: "the V1 items do not need to be built")) | LDM_MyEvents, LDM_EventDetail, LDM_Email |
| 12 Orbit/LDM/Assemble screens not reachable read-only with the full account | no-capture, build from compiled code (user fallback decision) | see knowledge/orbit-assemble-ldm.md |
| O-B2: DropdownTags provider | **share DropdownSearch provider with a `tags` mode** (recommended) | no copy of Virtual Select |
| O-B2: LocalityListDetail capture variant | **full-depth DOM from AssembleEvents** (recommended) | pack copy was cut at depth 7 |
| O-B2: AccordionItem content id | **keep `<id>-Content`** so aria-controls matches (recommended) | |
| O-A1: DEPRECATED_AccordionItem JS nodes | **DOM functions on refs** (recommended) | keeps the measured height animation |
| O-A1: repeated keydown listener of the original | **one handler** (recommended by the agent) — deviation from 1:1, B6 in known-original-bugs, CONFIRMED (user, 2026-10-17) | |
| O-A1: ErrorScreen `margin-top:-27em !important` | not rendered (capture has no style there) | |
| O-A1: stories beside a stand-in native layout; new `osui/lib/deviceDetection.ts` | recommended | |
| Static files fetched (standing rule) | `Connect2_OrbitMobile_MUI.TimeFormat.js`, `OutSystemsUI_2_23.controller.js` | runtime-sources.md |
| O-A2: Admin* milestone types (GUIDs missing in TST moduleinfo) | kept undefined, admin branch ported but never renders (recommended) | |
| O-A2: LocalOrbitMilestoneType | in-memory store filled by `syncOrbitMilestoneTypes` (recommended); screens must call it | |
| O-A2: bugs B7 (Card_Template click propagation), B8 (hotel check by MilestoneId), B9 (Sync fills Name with Type) | **kept 1:1** (user rule 2026-10-14) | in known-original-bugs.md, for review |
| Process slip | O-A2 spawned 2 Sonnet subagents itself (4 agents at once, above the user's limit of 2) | briefs now say "do not spawn subagents" |
| O-B1 (no recommendation given; conservative choices, CONFIRMED (user, 2026-10-17)) | structure field names = attributes the compiled code reads (Assemble_CS model not in sources); Long Integer counts as number; Cordova-only branches (in-app browser, Android maps) not ported; `animate: true` containers plain; address link synchronous | agent choices |
| O-B1: Google Maps URL `?api=1?api=1&query=` | ported as is (original quirk) | |
| O-B3: no view cache in the clone → OnReady always fetches | recommended | |
| O-B3: GetLocalBookmarkedLocalityInformation not ported at first (locality passes unchanged) | **ported** in the O-B3 finish (2026-10-16): `getLocality` now applies it over the shell legacy local bookmarks (`getLocalBookmarksByObjectType`, new) | tests in `Connect2_Assemble_MUI/lib/actions.test.ts`, `shell/localEntities/localBookmarks.test.ts` |
| O-B3: bugs kept 1:1 | locality switch raises SelectedSubdivision with the previous locality's subdivision id; widget name `Input_SearchTearn` | for review |
| Contract regenerated with Connect2_Assemble_MUI and Connect2_OrbitMobile_MUI modules (10 s timeouts) | consequence of the scope change | |
| O-B3 finish: stories of the two Assemble filters (data loaded by the block) | **recommended**: a story loader `src/shared/test/mockApiSession.ts` starts the MSW worker as `main.tsx` does, then `applyTestSession` | no capture exists; DOM tests use the compiled view instead |
| F9: contract_gen now scans every compiled server call of build screens + block closure (newest TST source wins); 157 operations | done | |
| F9: TST added `SearchResult.DisplayAddress` / `DisplayHouseholdName` (Connect_Search_CS) after the survey | **not adopted yet** (no recommendation; conservative: finished Search/ShareSheet unchanged) | CONFIRMED (user, 2026-10-17): not adopted, Search/ShareSheet unchanged |
| F9: 9 server actions reached through Orbit/Assemble client actions not in the contract (GetEventViewInfo, GetBookletGuests/HelpersMaxRows, GetDirectoryAccess, SyncOrbit*, Assemble AddBookmark/DeleteBookmarkByBookmarkId) | add via CRs when routes need them | |
| OrbitLanding Q1-Q4 | **A (recommended)** each | Q2: popups captured read-only (popup-sort in a separate run, merged); Q4: popup top 30 px / radio checked = capture artifacts |
| EventDetail Q1-Q4 | **A (recommended)** each | flag mobileOrbitEventBooklet default-only on; CR-EventDetail-1 (shell Orbit static entities sync); GetAllApplicationEvents exemption; event 7301 = Host |
| EventDetail Q5 (LocalSurveyStatus labels) | fictional values (no source) | CONFIRMED (user, 2026-10-17) |
| LDM_MyEvents_V2 Q1 (filter popup content never captured) / Q2 (expanded guest list) | **A (recommended)**: NotCaptured / built from compiled code | |
| F10: CR-EventDetail-1 applied (shell app start SyncAllOrbitStaticEntities, UBTConnect.controller.js:16579-16583) | done | |
| F10: Orbit static entities stored **in memory, not IndexedDB** (agent choice) — deviation: data lost after a failed sync; missing id → empty record instead of Entity.get throwing | superseded by F12 (IndexedDB + in-memory mirror, row below) | `app/src/shell/localEntities/orbitStaticEntities.ts` |
| F10: only LocalSurveyStatus + LocalOrbitMilestoneType synced (10 other Orbit syncs not ported until a route needs them) | recommended | |
| F10: shared usePopupWidget re-render ported; OrbitLanding drop-in | done | other popups get the re-render, not the focus |
| EventDetail capture-artifact rules (masked title header 6 px, via back arrow pixel shift) | accepted (recommended) | |
| LDM_EventDetail_V2 Q1-Q3 | **A (recommended)** each | uncaptured host/published branches from compiled code; cloneQuery; 70415 pending as captured |
| CR-LDM_EventDetail_V2-1 (move LDM helpers to shared) | queued for a foundation batch | local copies until then |
| MilestoneDetail Q1-Q6 | **A (recommended)** each | guest → HouseholdDetails; call popup without timezone; notification branch NotCaptured; no document; other milestone types NotCaptured; cloneQuery |
| CR-MilestoneDetail-1..4 + CR-LDM_EventDetail_V2-1 | foundation F11, then finish MilestoneDetail | |
| LDM_Email_V2 Q1-Q3, ContactByEmailLDMCoordinator Q1, EmailTarget Q1 | **A (recommended)** each | sends mocked (P-MUTATION); compiled inline margin-top kept |
| CR-LDM_Email_V2-1 | applied: consistency_check accepts compiled-view inline styles on no-capture routes (cited .mvc.js) | skill tooling |
| F11: CR-MilestoneDetail-1..4, CR-LDM_EventDetail_V2-1 applied | subscribe API on the Orbit static store; directory access mock enables all; contacts only for hosted guests; generateScreenURL in shell/navigation; HandleDownload hook (web: open in new tab, U18) | recommended choices |
| F11: bugs kept 1:1 | B10 BuildMemberCallData Phone; B11 AddExtensionToFile without dot | known-original-bugs |
| HelpersDetail Q1-Q2, ContactByEmailOrbitHelpdesk Q1-Q2, ContactByEmailOrbitHost Q1-Q2 | **A (recommended)** each | cloneQueries; sends mocked; review URL for OrbitHost |
| HelpersDetail MOCK-LOADING-NO-SYNC (header 'Helper ()' in loading/offline) | **not exempted; CR-HelpersDetail-1 fix** (seed Orbit static entities in the mock session as the device DB keeps them on TST) | conservative: fix the deviation of F10 instead of masking |
| Assemble_BrowseByCountry Q1, AssembleEvents Q1/Q3 | **A (recommended)** each | CR-Assemble_BrowseByCountry-1 (mock user region), scenario nomeetings, CR-AssembleEvents-1 (memory cache in-flight miss) → F13 |
| AssembleEvents Q2 (Start URL DateTime format) | F13 to answer from the OutSystems runtime | |
| F12: CR-HelpersDetail-1 applied — Orbit static entities (LocalOrbitMilestoneType, LocalSurveyStatus) **in IndexedDB** with an in-memory mirror for first-render reads (loaded at app start, written through by each sync, read back after its transaction); Entity.get of a missing id raises DataBaseException; `unlocked` mock session seeds the rows. **Resolves the F10 deviation (row above).** | done (recommended option: persist + seed, no MOCK-LOADING-NO-SYNC exemption) | `app/src/shell/localEntities/orbitStaticEntities.ts`; HelpersDetail parity 0 in default/loading/offline |
| F13: CR-Assemble_BrowseByCountry-1 (mock user SubscriptionRegionId 1 'Americas'), CR-AssembleEvents-1 (memoryCache QueueJS: shared in-flight miss, timeout 10 s) | applied | |
| AssembleEvents Q2 (DateTime in URL) | answered by code: `yyyy-MM-ddTHH:mm:ss.fffZ` (UTC, toISOString) + encodeURIComponent | OutSystems.js lines 4/8/9 |
| AssembleEvents default: 89 diffs in the closed filter sheet = masked counts ('•' narrower than digits; rows inline-block outside .backwards-compatibility), proven by measurement | exemption CAPTURE-MASKED-COUNT-WIDTH-ASSEMBLEEVENTS-SHEET (recommended) | |
| HostSurvey Q1-Q4 | **A (recommended)** each | stand-in local rows until CR-HostSurvey-1; wizard/popups NotCaptured; cloneQuery; back-arrow rule |
| CR-HostSurvey-1 (9 Orbit local entities), CR-HostSurvey-2 (OSUI Accordion initial-expanded items) | foundation F14, then finish HostSurvey | |
| AssembleDetail Q1/Q2 | **A (recommended)** | CR-AssembleDetail-1 (GetBulkSubdivisions_V2), CR-AssembleDetail-2 (Assemble bookmark toggle) → F15; AssembleDetail finishes after F15 |
| F14: CR-HostSurvey-1 (10 Orbit local entities persisted), CR-HostSurvey-2 (evidence wrong: compiled HostSurvey passes MultipleItems true; route prop fix, shared Accordion unchanged) | applied | |
| HostSurvey pixel 9.26% (masked title wrap + via back arrow) | rule CAPTURE-VIA-MASK-SHIFT-HOSTSURVEY-PIXELS (recommended, as other Orbit routes) | |
| F15: CR-AssembleDetail-1 (GetBulkSubdivisions_V2), CR-AssembleDetail-2 (Assemble bookmark toggle) | applied | 3 contract entries via extra-actions.json |
| F15: bugs kept 1:1 | B12 RemoveBookmarkFromCache compares ObjectId with BookmarkId; B13 IsBookmarked = not IsItemBookmarked regardless of result | known-original-bugs |
| Mock gap | Assemble halls 9301/9401/9501 have HouseholdCount ≥ 4 but no households in the cast (skeleton, then empty list) | to fix in a mock pass |
| TransportDetail Q1, ViewDocuments Q1/Q2, QRCodeGenerate Q1/Q2 | **A (recommended)** each | mock itinerary/documents/QR pass; web: new tab; CR-QRCodeGenerate-1 → F16 |
| TransportDetail Q2 (transport icons/header classes, uncaptured) | conservative: OrbitTheme.css class names | CONFIRMED (user, 2026-10-17) |
| QRCodeGenerate: QR = server PNG (QRCodeAsBinary), no client library | no ADR needed | |
| OrbitAdminLanding Q1/Q2 A, Q3 B (recommended) | scenario noadminevents; scan-per-milestone False; header name waits for CR-OrbitAdminLanding-1 (F16), interim exemption not merged | |
| OrbitAdminEventDetail Q1 A; Q2 by code | browser: OS-PLUG-BARC-0011 'Cordova is not available.'; as PWA the original uses its web scanner (OSBarcodePlugin.js) → PWA discussion | BarcodePlugin scripts fetched |
| F16: CR-OrbitAdminLanding-1 + CR-QRCodeGenerate-1 (cached user identity merged at read time, mocks only, nothing persisted) | applied | TST does fill the variable (shell-facts updated) |
| F16: OrbitLanding My-calendar icon after the change | **A (recommended)**: signed-in user second in OrbitLanding's member mock (TST's selected first member is not the user); B (exempt) / C (no MemberId) rejected | replaces OrbitLanding Q3 premise |
| Assemble halls 9301/9401/9501 mock gap | fixed by the orchestrator: `OTHER_HALL_HOUSEHOLDS` (4 fictional households per hall, Monte Hermoso / Córdoba / Neuquén) in directory.ts, used by householdsOfSupperMeeting | meaningful mock data |
| User bug (2026-10-16): HomeFeed search input not clickable | fixed: OnSearchClick → navigate to /UBTConnect/Search (HomeFeed.mvc.js:708-723); route note "empty handler in the original" was wrong; HomeFeed re-finished | audit A1 queued for other empty handlers |
| Audit A1 (empty handlers vs compiled; `migration/knowledge/audit-a1-empty-handlers.md`) | 2 real gaps fixed 1:1: Feed_Embeded OnDownloaded → OpenInApp_TryOpenFileInApp; Block_PINUnlock_ContentWrapper policy links → OpenPolicy (moved to UBTConnect_Utils lib); EventCard_Box / MarkAllAsRead / DeleteAllNotification really empty (comments fixed) | recommended 1:1 ports |
| GuestArrangements Q1, EmailContact Q1/Q2, EventBooklet Q1/Q3/Q4 | **A (recommended)** each | review URLs; sends mocked; CR-EventBooklet-1/2 → F17 |
| EventBooklet Q2 (server-side booklet filtering/paging rules) | conservative mock as in the spec | CONFIRMED (user, 2026-10-17) |
| Static file fetched | `Connect2_OrbitMobile_MUI.clientVariables.js` (BookletGuests/HelpersMaxRows) | standing rule |
| F17 (CR-EventBooklet-1/2) agent choices | mock page sizes 10 guests / 5 helpers; client vars default 0 (no default in clientVariables.js); DropdownSearch shares the dropdown registry; duplicate id registration does not throw | recommended / conservative |
| F17 note | `ActionGetBookletGuests/HelpersMaxRows` tagged `x-os-writes` by the guard rule ("Book" in "Booklet"); they are reads. Guard rule left unchanged | CONFIRMED (user, 2026-10-17) (tooling) |

## Window 2026-10-16 evening → 2026-10-17 morning (user: auto-accept, goal = shareable PWA for colleagues)
| Item | Choice | Note |
|---|---|---|
| Demo build as a real PWA (amends P16 for the demo only) | in-process mocks (same MSW handlers via `getResponse`, no MSW worker) + app SW precaching everything, incl. mock fixtures; dev server unchanged (MSW worker, parity) | auto-accepted (user instruction 2026-10-16 evening, until 2026-10-17 morning); production keeps P16 |
| Sharing | `app/dist-demo/` + zip, static-host ready, zero-dependency local servers (`serve.mjs`, `serve.py`), README | auto-accepted; nothing is uploaded or hosted by Claude (the user uploads) |
| User report: Trove dialog "looks like an error" | `<NotCaptured>` review frames show on the dev server only (`?review=0` hides them there); built apps (demo, production) render the compiled content without the frame, nothing for an empty marker (`app/src/shell/reviewMarkers.ts`) | auto-accepted; parity unaffected (dev) |
| User request: mock PIN 0223 | `TEST_PIN = '0223'` (passes PIN_ValidateRules; 1234 would not); devices set up with the old PIN get 0223 on their next mock session | user instruction |
| User report: F5 on the lock screen got in | cause: the URL kept `?mocksession=unlocked`, re-applied on every load; now applied once per tab and value, so a reload keeps the lock (as the original) | auto-accepted |
| Trove "Continue" | toast "Not available — Sorry, this app is not available in the platform you are using." on Mac/iPhone/Android browsers: original web behaviour, kept | 1:1 |
| ADR-11 (vendored TST barcode web scanner) | accepted: implements the user's P7 choice; dev/demo keep the fictional scanner (Q1 = A), `?scanner=web` for the real one | auto-accepted (user instruction 2026-10-16 evening, until 2026-10-17 morning); CONFIRMED (user, 2026-10-17) |
| PWA-2 (phase 2) agent choices | nav timeout 4 s then precached index.html; API watcher (request override) only without mocks; online flag keeps its stored value until the first ping (as original); Orbit reference lists stay in page memory after logout until app start re-syncs; `persist()` on first DB open; unread NetworkDetection client vars not ported | auto-accepted |
| PWA-B (prod hygiene) | build fails on any mock code in production (`app/build/mockFree.ts`); allow-list keeps only `src/mocks/fictional/directory.ts` (mock sign-in user until the BFF); `?mock=unsupported-browser` gated by MOCKS_BUILT (orchestrator) | auto-accepted |
| PWA-3 (ADR-11) | Cordova present → 0012, native branch not ported (ADR-1); caller passes the feedback function (lib does not import shell); `?scanner=web|mock` read at adapter load; original quirks kept (no word-boundary cut, openScanner error leaves the scan waiting) | auto-accepted |
| FIX-D | Photobook client-var write moved to a mount effect (OnInitialize); `DataActionGetCacheInfo` (Policies) mock without input matching (anonymised inputs), duplicate shell entry removed; nested `<a>` in the bottom bar is 1:1 (TST captures) | auto-accepted |
| Re-stamps | OrbitAdminEventDetail, Photobook (finish with "confirm (auto-confirmed …)") | auto-confirmed |
| ADR-12 (PWA tests: Playwright e2e + Lighthouse CI @lhci/cli 0.15.1) | accepted: implements the user's P14(b); budgets start as warnings | auto-accepted (user instruction 2026-10-16 evening, until 2026-10-17 morning); CONFIRMED (user, 2026-10-17) |
| PWA-5T: @lhci/cli 0.15.1 fails npm audit (11 high, no fixed release) | ADR-13: `lighthouse` 13.4.1 (0 vulnerabilities) driven by a Node script, same scope as ADR-12 | auto-accepted (agent's recommendation); CONFIRMED (user, 2026-10-17) |
| PWA-5T e2e choices | system Chrome (`channel: 'chrome'`) else Playwright Chromium; `e2e:pwa` outside `ci` (needs a browser); update test = real second build with another `VITE_APP_ENV` | auto-accepted |
| Favicon (Lighthouse: `/favicon.ico` 404, console error) | `index.html` gets the original's `<link type="image/x-icon" rel="shortcut icon" href="/UBTConnect/favicon.png">` (the result of OSUI `AddFavicon("favicon.png")`, run by every layout) + TST `favicon.png`; the other OSUI layout helpers stay unported | auto-accepted 2026-10-17 08:15; CONFIRMED (user, 2026-10-17), option A (keep the link): amends the "AddFavicon not ported" line the user confirmed in Splash's review (wave 1). Undo = remove the link + file |
| Sweep 2026-10-17: EventDetail day digits "23/24/25" → "30/31/1" | cause: the Orbit mock world puts the meetings on the first Friday ≥ a week after today (`orbit.ts` meetingsFriday), so EventDetail parity matched only for runs 2026-10-10…16 (date rollover, not a code change). Exemption `MOCK-RELATIVE-DATES-EVENTDETAIL-DAYSELECTOR` (text/layout/position of the DaySelector digits, default state) | auto-accepted (conservative, reversible; precedent CAPTURE-MASKED-TEXT-LDM-EVENTDETAIL-V2-BANNER). user, 2026-10-17: option A (keep the exemption). Durable option for later = parity freezes the browser clock at the capture time (skill tooling change, all routes) |

**Window ended 2026-10-17 08:40 +07 by the user** ("từ giờ tôi sẽ ra quyết định chính" (English: "from now on, I make the main decisions")). Rows marked TO CONFIRM / TO DECIDE wait for the user.

**User review 2026-10-17 ~09:00:** confirmed the 7 open rows (B6, O-B1, SearchResult fields not adopted, EventDetail Q5, TransportDetail Q2, EventBooklet Q2, booklet guard tag), ADR-11/12/13, favicon (A) and the EventDetail exemption (A). Still open: nav timeout 4 s, demo SW scope `/`, the other PWA-2/PWA-3/PWA-B/FIX-D agent choices; mobile performance later (user).
**User, 2026-10-17:** the remaining agent choices (nav timeout 4 s, PWA-2/PWA-3/PWA-B; demo SW scope `/` noted for hosting) are deferred to the production phase; no decision needed for the colleague demo.
