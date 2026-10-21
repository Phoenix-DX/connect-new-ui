# Auto-accepted decisions (user auto mode, 2026-10-15 16:59 → all screens built)

Generated from `migration/screens/*/questions.json` (answers containing the auto-mode marker). Reviews auto-confirmed are not listed (every finished route since 16:59).

| Route | Q | Kind | Flag | Answer (start) |
|---|---|---|---|---|
| BookmarksByGroup | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): full click flow behind a null adapter until CR-BookmarksByGroup-1 (GetBookmarkById in the contract, fo |
| BookmarksByGroup | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): Locations and Entities lists from the compiled view with fictional rows; main-hall colours NotCaptured |
| BookmarksByGroup | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): legacy local-bookmark delete skipped until CR-BookmarksByGroup-2 (shell, foundation F7) |
| BookmarksByGroup | Q4 | fact | by code | MemoryClientCache.controller.js (fetched read-only 2026-10-15): UnlimitedTimeToLiveSeconds returns TimeToLiveSeconds = 604800 (7 days). The route now uses 604800 (compone |
| BrowseCountries | Q1 | decision |  | A (recommended): build the subscription upgrade popup with the shell's showUpgradePopUp — auto-accepted (user instruction 2026-10-15 16:59) |
| BrowseDirectory | Q1 | fact | by code | migration/runtime-sources/UBTConnect.Directory_Locality.controller.js:12-16 (fetched read-only): handleError delegates to App_Common.handleError, so raiseToFlowHandler is |
| BrowseDirectory | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the AR recording serves every CountryCode |
| BrowseDirectory | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): module client actions ported; moved to shared by CR-BrowseDirectory-1 / CR-CountryDetails-1 |
| BrowseDirectory | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): StatisticsList keys fixed in shared (CR-BrowseDirectory-2) |
| BrowseDirectory | Q5 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): markerJSON fixed in shared (CR-BrowseDirectory-3 = CR-CountryDetails-2) |
| ConnectShare | Q1 | fact | TO CONFIRM | No source: Get_ShareDetails is server-side and its message is masked in the capture. Auto mode, no recommendation: keep the conservative mock (ServerException 'Share not  |
| ConnectShare | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): fictional ShareIds 00000000-0000-0000-0000-000000000001…009, one per uncaptured branch |
| ConnectShare | Q3 | fact | by code | UBTConnect.Legacy_Share.controller.js (fetched read-only 2026-10-15): handleError logs a trace ('Legacy_Share') and delegates to the App_Common flow handleError; the shel |
| ConnectShare | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the loading-state #transitionContainer frame difference (invisible) is exempted narrowly |
| ContactByEmailMember | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): submit built from the compiled code, SendContactMemberEmail mocked (P-MUTATION) |
| ContactByEmailMember | Q2 | fact | by code | Connect2_OrbitMobile_MUI.controller.js (fetched read-only 2026-10-15): OnApplicationEvent_EmailHost serializes AuditPayload_EmailHost and calls zOnApplicationEvent_Wrappe |
| ContactByEmailMember | Q3 | fact | by code | UBTConnect.ContactFlow.controller.js (fetched read-only 2026-10-15): ContactFlow.handleError logs a trace and delegates to the App_Common flow handleError. raiseToFlowHan |
| ContactByEmailMember | Q4 | decision | NOT RECOMMENDED | Auto-decided (user instruction 2026-10-15 16:59), NOT the recommended A, because the evidence contradicts it: CR-ContactByEmailMember-2 is rejected. TST renders rows (Out |
| ContactByEmailOneSchoolGlobal | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): send mock stores the form in an in-memory collection and answers {} |
| ContactByEmailOneSchoolGlobal | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): on failure IsLoading stays on as compiled; error to raiseToFlowHandler (ContactFlow.handleError → App_ |
| ContactUsDetails | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): signed-out branch as one NotCaptured, logic kept, GetCountriesNames fictional empty list |
| ContactUsDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ContactUs_Rate NotCaptured; contacted-about-feedback checkbox built from shared IconText/Icon |
| ContactUsMenu | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): both branches built as compiled; signed out shows the single row 'General Questions or Suggestions' |
| CountryDetails | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): other countries serve the AR recording with a console warning |
| CountryDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): keep the original ArcGIS tile URL |
| CountryDetails | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): markers keep the compiled inputs; marker serialization fixed by CR-CountryDetails-2 |
| CountryList | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): DATA-DRIFT-MOCK-USER-COUNTRYLIST |
| CountryList | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYLIST (+ -SHEET) |
| HouseholdCarousel | Q1 | decision |  | A — mock-only seed (fictional Locality_Details-like preload, 23 households, In_StartingHouseholdId first); real builds keep the empty carousel. auto-accepted (user instru |
| HouseholdCarousel | Q2 | decision |  | A — CR-HouseholdCarousel-1 adds ActionUpdateItem_MarkAsRead to the contract + mock; until applied the swipe branch makes no call. auto-accepted (user instruction 2026-10- |
| HouseholdDetails | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the foundation applies CR-HouseholdDetails-1/2, then parity and ready |
| HouseholdDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): 3 capture/timing exemptions merged (…-HOUSEHOLDDETAILS-IMAGE, CAPTURE-MASKED-IMAGE-HOUSEHOLDDETAILS, C |
| Household_Relations | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the 3 capture-artifact exemptions are merged into parity-exemptions.json |
| LegacyShareObject | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the mock answers Label = the share type identifier for types other than Household |
| LegacyShareObject | Q2 | fact | TO CONFIRM | No source: GetAvailableUsers is server-side in Connect2_LegacyShared, which is not loaded in the Service Studio MCP (DEV: UBTConnect, Connect2_Assemble_CS only) and was r |
| LegacyShareObject | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ShareObject stored in the mock store collection; IsAllowed false with ?mockuser=expired raises Subscri |
| LegacyShareObject | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): Campus&Co / OneSchool Global and Feed cards built from the compiled code with fictional mocks |
| LegacyShareObject | Q5 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the never-captured shared check icon renders inside NotCaptured without the inline colour |
| Locality_Details | Q1 | decision |  | Recommended, auto-accepted recommendation (user instruction 2026-10-15 16:59): uncaptured tabs render NotCaptured now; capture one state per tag later and build them |
| Locality_Details | Q2 | decision |  | Recommended, auto-accepted recommendation (user instruction 2026-10-15 16:59): mobileDirectoryLocalityContacts default-only off (TST value) |
| Locality_Details | Q3 | decision |  | Recommended, auto-accepted recommendation (user instruction 2026-10-15 16:59): CR-Locality_Details-1 seeds one legacy Contact bookmark in the shell mock |
| Locality_Details | Q4 | decision |  | (a) + (b), auto-accepted recommendation (user instruction 2026-10-15 16:59): callOrderFree countFree CALL-COUNT-SIGNED-IMAGES-BATCH; offline error-scenario app start to t |
| Menu | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): Menu mocks.ts householder scenario (shell mock user as householder, neutral square photo); capture-pla |
| Menu | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): uncaptured branches built as compiled, RequestPhotoUpdate fictional Out_IsSuccess true; limits noted ( |
| MyBookmarks | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): CR-MyBookmarks-1 adds ActionGetBookmarkById to the contract + mock (foundation F7); route waits for it |
| MyBookmarks | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): CR-MyBookmarks-2, one shared legacy-bookmarks mock collection (MyBookmarks, BookmarksByGroup, shell mo |
| MyBookmarks | Q3 | fact | TO CONFIRM | No source: GetGroupSummaries is server-side (Connect2_MyBookmarks, not in the local sources nor in the DEV MCP modules). Scope D2(a) builds the TST branch with C2NewBookm |
| MyBookmarks | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): loading request-timeout capture artifact exempted (route-scoped) |
| MyBookmarks | Q5 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): error scenario fails GetGroupSummaries as a network error |
| OneSchoolGlobalDetails | Q1 | fact | by code | migration/runtime-sources/UBTConnect.Directory_OneSchoolGlobal.controller.js (fetched read-only): handleError delegates to App_Common.handleError, so raiseToFlowHandler i |
| OneSchoolGlobalDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59) |
| OneSchoolGlobalDetails | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59) |
| OneSchoolGlobalDetails | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59) |
| PINChange | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): unlocked branch built from the compiled code with the shared Block_PINRegister_ContentWrapper (mock PI |
| Photobook | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): vendor the TST PanZoom script (ADR-7) |
| Photobook | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-Photobook-1 (shared Carousel go-to, toggle-drag, starting position) before the review |
| Photobook | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): fictional caption per household in the skeleton caption format |
| Profile | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): householder-only address section rendered as NotCaptured (no DropdownSearch, no CacheControl_AllLocali |
| Profile | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): route scenario ?mock=spouse; capture-plan Profile scenarios.default = spouse |
| Profile | Q3 | fact | by code | Built-in validation exists in the runtime: InputWithVariableWidget.validate (OutSystemsReactView.js ~211900): empty+mandatory → 'Required Value!'; non-empty with HTML5 va |
| Profile | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): GetCountryInfo serves the US recording for any country; Save answers success and keeps requests in the |
| SupperMeeting_Carousel | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): mock-only fictional preload of 3 supper meetings (start id, 9202, 9203) registered by mocks.ts; real b |
| SupperMeeting_Carousel | Q2 | fact | by code | Capture timing artifact. EntitiesCarousel_Element.mvc.js:240-307 passes In_IsSkeletonOnly only to the HouseholdDetails branch, never to EntitiesCarouse_lSupperMeetingDeta |
| SupperMeeting_Details | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-SupperMeeting_Details-1 and CR-HouseholdDetails-1, re-run parity, then ready; 3 capture exemp |
| Search | (regression) | exemption | closing step | CAPTURE-FOCUS-BADGE-SEARCH-LOADING-PIXEL added and Search re-stamped by the orchestrator at 2026-10-15 23:48 (final sweep) |

**Reviewed by the user 2026-10-16 ("tôi ok")**: all items above accepted as they are, including ADR-8, CR-ContactByEmailMember-2 rejected, bookmark 91001 option d, and the conservative mocks for LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1.

**User, 2026-10-17:** the 3 TO CONFIRM rows (ConnectShare Q1, LegacyShareObject Q2, MyBookmarks Q3) are deferred to the production phase (BFF): the real server answers them.
