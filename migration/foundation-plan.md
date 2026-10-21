# Phase 5 foundation: task list

Owner: main agent (foundation owner). Status per task; details in the linked files.

| # | Task | Output | Status |
|---|---|---|---|
| 1 | Adapt the scaffold to the ADR-2 baseline; create `app/` | `app/`, skill `scaffold_react_app.py`, `stack.py` | done 2026-10-14 (`npm run ci` green) |
| 2 | Record fixtures from TST (no person data), user review | `app/src/mocks/fixtures`, `mock-scope.json`, `mock-rules.json` | done 2026-10-14 (25 fixtures, reviewed); raw HAR deletion pending |
| 3a | App shell spec (global logic, auth mock flow, PIN, navigation, preload, toasts, shared dialogs, security) | `migration/app-shell.spec.md`, `knowledge/shell-observed.md`, `shell/client-variables.md` | done 2026-10-14: facts answered (shell-observed, shell-facts, client-variables), 12 decisions recorded in spec 12a; open U11 order, U20, U21 |
| 3b | API contract generator from TST compiled code (all actions of build screens) | `migration/tools/contract_gen.py`, `app/src/api/openapi.yaml`, `migration/catalog/contract-report.md` | done 2026-10-14: 95 operations (data actions per owner, user decision), 366 schemas from compiled code, 12 unknown (screen-variable inputs only), 0 unions |
| 3c | Providers: runtime config, logging + error boundary | `app/src/lib/config.ts`, `app/src/lib/log.ts`, `app/src/shell/ErrorBoundary.tsx`, `RouteError.tsx` | done 2026-10-14 (tests, lint green) |
| 3d | Docs skeleton: C4, OutSystems → React map, how-tos | `app/docs/` (+ `migration/tools/docs_gen.py` for reference pages) | done 2026-10-14 (base); filled per phase |
| 3e | Shell implementation in three sequential parts: A session, mock user, app start, sign-in/PIN mock, inactivity lock; B navigation, back queue, preload, view cache, Leave App; C feedback messages, shared dialogs, lock overlay host | `app/src/shell` | done 2026-10-14 (A, B, C; 125 shell tests) |
| 3f | Contract-typed mock handlers (fictional data checked against the contract at compile time; fixtures by `contract_gen.py --check-fixtures`) | `app/src/mocks/contract.ts` | done 2026-10-14 (`contractHandler`, compile-time shape check, tests) |
| 4 | Shared blocks: 147 queue + 43 shell-level = 190 (`migration/blocks/INDEX.md`, packs by `migration/tools/block_pack.py`), DOM test per captured state (`app/src/test/dom.ts`), Storybook story. **By wave** (user, 2026-10-14): wave 1 = 54 blocks, then the 5 wave-1 screens for review, then wave 2 (42), 3 (36), 4 (46), 5–7 (12). All block agents on Opus (user) | `app/src/shared` | wave 1 done 2026-10-14 (49 blocks, 4 batches); wave-1 screens finished; wave 2 done 2026-10-15 (42 blocks) + HomeFeed finished; **wave 3 (36 blocks, `migration/blocks/wave3.txt`) started 2026-10-15**: batches A ∥ B ∥ C |

## Backlog (user decisions)
- [x] Port the OutSystems request timeouts into `callAction` (HomeFeed Q3 = A, user 2026-10-15). Done (F8a, 2026-10-16): per-module `SERVER_REQUEST_TIMEOUT` in `app/src/lib/api.ts` (UBTConnect 20 s, the other 7 modules 10 s; every call kind), abort + CommunicationException 'The connection has timed out' (OutSystems.js:3/:17), tests in `app/src/lib/api.test.ts`, doc `app/docs/guides/api-and-mocks.md`.
- Capture one state per uncaptured Locality_Details tag (Supper Meetings, Interchange, OneSchool Global, My Household, Locality Contacts) read-only, then build them (Locality_Details Q1, auto-accepted 2026-10-15).
- Offline error-scenario app start shows Block_PINUnlock intermittently on Locality_Details (Q4 b): investigate in the foundation.

## Foundation batch F4 (started 2026-10-15; CR-HouseholdDetails-1, CR-OneSchoolGlobalDetails-1, CR-SupperMeeting_Details-1 done, CR-HouseholdDetails-2 partial)
- Split: **F4a** (data, bookmarks, mocks, contract: HD-2 §2, CR-Locality_Details-1, OSG/SMD default diffs, CR-HouseholdCarousel-1/2, CR-SupperMeeting_Carousel-1, offline PINUnlock flake) ∥ **F4b** (Photobook: ADR-7, CR-Photobook-1/2, masked-photo exemption, gallery scroll).
- CR-Photobook-1 (shared Carousel go-to, toggle-drag, starting position), CR-Photobook-2 (platform RadioGroup/RadioButton), ADR-7 vendoring of PanZoom into `app/src/vendor/panzoom/` and wiring, Photobook masked-photo exemption (`migration/screens/Photobook/proposed-exemptions.json`).
- CR-Locality_Details-1 (seed a LocalBookmark row in `app/src/shell/mocks.ts`).
- CR-HouseholdCarousel-1 (`ActionUpdateItem_MarkAsRead` in the contract + mock on the shared update items), CR-HouseholdCarousel-2 (shared household mocks: 6-member households 9003/9004, TST slide shapes).
- Lint `unbound-method` in `app/src/components/OSList/OSList.test.tsx:70` if the current batch leaves it.
- Then parity again on HouseholdDetails, OneSchoolGlobalDetails, SupperMeeting_Details, Locality_Details, Photobook, HouseholdCarousel (+ the carousel/relations routes running now).

## Waves 5–7 blocks (12, `migration/blocks/wave5.txt`; started 2026-10-15 in auto mode)
- **W5-A** dialogs: NavigationConfirmationDialog, Dialog_Navigation, Dialog_CustomChoice, Dialog_AccessRestrictedAction_Legacy, ConnectBlankSlate, NoBookmarks.
- **W5-B**: Menu_List, DynamicTextArea, ContactByEmailForm, DEPRECATED_GalleryV2, DropdownSearch (Virtual Select), RangeSlider (noUiSlider + wNumb).
- Routes started alongside (no queued block needed): PINChange (wave 5, lite), LegacyShareObject (wave 7, full).
- W5-A done 2026-10-15 (6 blocks, queue 0 after W5-B). Open point for the next foundation batch (F5, after F4a):
  shell `src/shell/navigation/navigationGate.ts` does not dispatch `dx-before-navigation`, so NavigationConfirmationDialog /
  Dialog_Navigation never open in the app. Port the NavigationHandler event (cancelable `dx-before-navigation` with
  location/replace/resume; resume = `allowUpcomingNavigation()` + go) from the compiled NavigationHandler code; Splash
  (prevents every navigation) must stay at parity 0. Needed before ContactUsDetails, Profile, ContactByEmailMember,
  ContactByEmailOneSchoolGlobal.
- F4a done 2026-10-15: HD-2 §2 (bookmark sync race → **ADR-8**, one transaction, auto-accepted, B5 in known-original-bugs), CR-Locality_Details-1, EnableOptions defaults, CR-HouseholdCarousel-1, CR-SupperMeeting_Carousel-1, CR-HouseholdCarousel-2 partly; offline PINUnlock flake not reproduced (closed).
- F4b done 2026-10-15: ADR-7 PanZoom vendored + wired, CR-Photobook-1 (Carousel goTo/toggleDrag/starting position), CR-Photobook-2 (`app/src/components/OSRadioGroup/`), Photobook exemptions merged; gallery 16 px = capture artifact.
- **F5** (started 2026-10-15): popup-disable-scroll lifecycle (OSG, SMD, SMC loading), SMC gallery list-loading, navigation gate `dx-before-navigation`, HouseholdDetails pixel 0.92%, rest of CR-HouseholdCarousel-2.
- F5 done 2026-10-15: popup re-render on client-var change (`usePopupWidget`), gallery list status, navigation gate `dx-before-navigation` (+ tests), HD footer shadow → capture-plan `latencies.default=600`; popup flush-order rules merged with new parity `routeRegex`. Left for **F6**: rest of CR-HouseholdCarousel-2 (non-member row, member without birth date, contact icons, 9003 birth date; loading/offline structure 56) and SupperMeeting_Carousel default style 4 (gallery grid-template-rows).
- **F6** (started 2026-10-15): rest of CR-HouseholdCarousel-2 and SupperMeeting_Carousel default grid rows. 32 routes finished at that point; 7 routes building (ContactUsDetails, Profile, ContactByEmailMember, ContactByEmailOneSchoolGlobal, MyBookmarks, BookmarksByGroup, ConnectShare).
- **F7 (queued; max 2 subagents in parallel, user 2026-10-15)**: CR-Profile-2 (platform widget validation: ValidateWidgets, Form.Valid, "Required Value!" / "Invalid Value!", createValidationElement markup; then Profile uses it). CR-ContactByEmailOneSchoolGlobal-1 + CR-ContactByEmailMember-1 (one shared SendContactMemberEmail mock; UBT_FontWeight in shared static entities). CR-ContactByEmailMember-2 rejected (textarea rows = capture artifact; capture.js now keeps rows/maxlength). CR-Profile-1 sent to F6.
- F7 also: CR-MyBookmarks-1 (ActionGetBookmarkById in the contract + mock) and CR-MyBookmarks-2 (one shared legacy-bookmarks mock collection for MyBookmarks, BookmarksByGroup and the shell). MyBookmarks waits for them before finish.
- F6 done 2026-10-15: CR-HouseholdCarousel-2 applied (slide 2 = 9005), SupperMeeting_Carousel clean (subtitle mocks), CR-Profile-1 applied; ci green; regression 0. **To do at resume:** merge `migration/screens/HouseholdCarousel/proposed-exemptions.json` (3 entries), reword reasons of CAPTURE-MASKED-IMAGE-SMCAROUSEL-GRID / -SUPPERMEETING-GRID (masked-text glyph widths), then finish_batch for ContactUsDetails (rows=3 restored + exemptions, spec-done done), SupperMeeting_Carousel, HouseholdCarousel. Profile and MyBookmarks wait for F7.
- 2026-10-15 ~21:xx: 38/41 routes finished (ContactUsDetails rows=3 restored, SMC, HouseholdCarousel, ConnectShare). **F7a** (CR-Profile-2 widget validation → Profile) ∥ **F7b** (GetBookmarkById, shared legacy bookmarks + shell delete, CR-BookmarksByGroup-3, shared SendContactMemberEmail mock, UBT_FontWeight) started — 2 subagents max (user). Then finish Profile, MyBookmarks, BookmarksByGroup.
- F7a done: CR-Profile-2 applied (`app/src/components/OSValidation/`; app messages "This field is required." / "Enter a valid email." from UBTConnect.languageResources). Profile finished (39/41). Follow-up backlog (not blocking): Login button built-in validation and ContactUsDetails Form_ContactUs.Valid could move onto OSValidation (both at parity 0 today); block instances as validation scopes.

## F8 (2026-10-16, after all 41 routes finished; decisions back to the user)
- **F8a** request timeouts in `callAction` (HomeFeed Q3 = A, user) ∥ **F8b** Login + ContactUsDetails onto OSValidation, bookmark 91001 fiction aligned with Locality mocks. Then: re-stamp changed routes, regression sweep, then the Locality_Details uncaptured tags (capture read-only, then build).
- 2026-10-16 01:2x (auto window until 10:00): Locality_Details tags Supper Meetings / Interchange / OneSchool Global captured read-only into the scratchpad (guard on, 3 step states). My Household (own locality only) and Locality Contacts (flag) are not on locality 252: they stay NotCaptured. Merge after F8b, then reopen the route (feedback todo) and build the 3 tags.
- F8 done 2026-10-16: request timeouts (F8a), OSValidation for Login/ContactUsDetails (F8b; 91001 alignment = option d, a broke parity), docs updated, reference pages regenerated, Locality_Details tags built (F1) and re-finished. Remaining by the user: review list in `migration/knowledge/auto-decisions-2026-10-15.md` and `-2026-10-16.md`.

## Wave 8: Orbit, Assemble, LDM (user, 2026-10-16) — 23 screens, 48 queued blocks (`migration/blocks/wave8.txt`)
- Batches (max 2 agents): round 1 **O-A1** Orbit layout/generic ∥ **O-B2** LegacyShared NC_* + OSUI patterns; round 2 **O-A2** Orbit cards ∥ **O-B1** Assemble blocks. Then routes (3 lite ready now, 20 after blocks), 2 at a time.
- Backlog (wave 8): shared `usePopupWidget` lacks the platform Popup's own re-render after ShowPopup changes (OrbitLanding worked around it in the route); fix in shared when a second route needs two popups.
- **F11** (wave 8): CR-MilestoneDetail-1 (GetDirectoryAccess, DataActionGetGmpMilestoneHost in the contract), -2 (GetCacheableMemberContactList, GetCacheableTimezoneInfo), -3 (OpenInApp_TryOpenFileInApp / FileTransfer.HandleDownload), -4 (MilestoneHeader reads LocalOrbitMilestoneType before sync), CR-LDM_EventDetail_V2-1 (LDM helpers to shared). MilestoneDetail finishes after F11.
- **F14** (wave 8): CR-HostSurvey-1 (port the 9 remaining Orbit local entities: sync, readers, mock rows, persisted like F12), CR-HostSurvey-2 (OSUI Accordion: items that start expanded must not close each other on init when MultipleItems is false; TST shows both open). HostSurvey finishes after F14.

## Paused 2026-10-16 night: weekly usage limit (resets 2026-10-20 19:00 +07)
- 59/64 routes finished. Left: GuestArrangements, EventBooklet, EmailContact (batch 3 interrupted, marked failed → reset and rebuild), QRCodeGenerate and OrbitAdminLanding (wait for **F16**).
- **F16**: CR-OrbitAdminLanding-1 + CR-QRCodeGenerate-1: `appManager_GetCachedUserInfo()` returns the mock user's FirstName, LastName, MemberId, Locality, Country in memory only. Check OrbitLanding (CurrentMemberId → My-calendar icon), MessageDetail, ContactByEmail*, LDM_Email_V2, OrbitAdminEventDetail; then regression sweep.
- Assemble halls mock gap fixed (orchestrator, OTHER_HALL_HOUSEHOLDS). Then the PWA discussion plan (memory project-next-pwa-discussion; include the BarcodePlugin web scanner of the PWA branch).
- **Audit A1 (queued, user bug 2026-10-16: HomeFeed search input did nothing):** HomeFeed fixed (OnSearchClick → Search). Audit every route/shared handler that is empty or `() => undefined` against the compiled event handlers; known suspects: LDM_MyEvents_V2 EventCard_Box onClick (original click_Card), Notifications MoreActionSheet onDeleteAllNotification (original triggers Loaded). Fix, re-stamp, regression.
