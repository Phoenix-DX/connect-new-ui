# Questions: MyBookmarks

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] bookmark click (answered)
- Question: A click on an album item runs GetBookmarkById, whose server action ActionGetBookmarkById (Connect2_MyBookmarks_MUI) is not in the API contract. How to build it?
- Evidence: Connect2_MyBookmarks_MUI.controller.js GetBookmarkById (getHasBookmarNote off → getBookmarkById$ServerAction, BookmarkId Long Integer → GetBookmarkByIdResponse BookmarkItem, IsBookmarkFound); ScreenBlock_MyBookmarks.mvc.js:980-1140; app/src/api/openapi.yaml has no GetBookmarkById
- OutSystems MCP: unavailable (route agent has no MCP)
- Options: A: CR-MyBookmarks-1 (contract + mock); the route's handler is written in full and the click does nothing until the CR is applied | B: hold the route until the contract has the action (recommended: A)
- Answer (user, 2026-10-15T20:39:09): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): CR-MyBookmarks-1 adds ActionGetBookmarkById to the contract + mock (foundation F7); route waits for it before finish

## Q2 [decision] mock data (answered)
- Question: Legacy bookmarks mock: GetGroupSummaries (this route), GetAllBookmarksByGroup / DeleteBookmarkByBookmarkId (BookmarksByGroup) and GetBookmarkById should read one shared in-memory collection, consistent with the shell's mockLocalBookmarks. Where?
- Evidence: app/src/shell/mocks.ts:100-115 (2 legacy local bookmarks); capture dom/default.html: 4 contacts and 4 locations; P-MUTATION; contract x-mock-source fictional
- OutSystems MCP: unavailable
- Options: A: CR-MyBookmarks-2 (shared collection in src/shared or src/shell); until applied the route keeps its own collection 'Connect2_MyBookmarks.bookmarks' seeded with the captured counts (4 contacts, 4 locations) | B: route-local only, no CR (recommended: A)
- Answer (user, 2026-10-15T20:39:09): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): CR-MyBookmarks-2, one shared legacy-bookmarks mock collection (MyBookmarks, BookmarksByGroup, shell mockLocalBookmarks), foundation F7

## Q3 [fact] mock data (answered)
- Question: Does the legacy GetGroupSummaries (Connect2_MyBookmarks) also return bookmarks added through the C2 path (AddBookmark2, Connect_Bookmarks_CS) that Directory_EntityDetailsActions uses while C2NewBookmarks is off (known bug B4)?
- Evidence: app/docs/known-original-bugs.md B4; shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts bookmarksCollection; GetGroupSummaries is server-side
- OutSystems MCP: unavailable
- Answer (user, 2026-10-21T11:31:42): No source: GetGroupSummaries is server-side (Connect2_MyBookmarks, not in the local sources nor in the DEV MCP modules). Scope D2(a) builds the TST branch with C2NewBookmarks = false. Auto mode, no recommendation: keep the most conservative reversible answer (C2 bookmarks not included). To confirm with the user. auto-accepted (user instruction 2026-10-15 16:59) (answered 2026-10-15T20:39:09, user) | Confirmed (user, 2026-10-21): keep this mock for the demo (C2 bookmarks not included); check it again in the production phase.

## Q4 [decision] parity loading (answered)
- Question: Loading state: the capture held GetGroupSummaries until the module's 10 s request timeout (NetworkWarning + toast 'The connection has timed out'); the clone has no request timeout and its loading scenario never answers, so it shows the compiled fetching branch (Spinner). Accept?
- Evidence: dom/loading.html:2-10, :72-97; Connect2_MyBookmarks_MUI.controller.js defaultTimeout = 10; exemptions CAPTURE-LOADING-FETCH-TIMEOUT*, SLIDER-LOADING-TIMEOUT
- OutSystems MCP: n/a
- Options: A: exempt the loading state's content placeholder and the timeout toast (proposed-exemptions.json) | B: CR for request timeouts in lib/api first (recommended: A)
- Answer (user, 2026-10-15T20:39:09): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): loading request-timeout capture artifact exempted (route-scoped)

## Q5 [decision] parity offline (answered)
- Question: Offline state: the capture aborted the call (CommunicationException 'Request failed with an error' → toast 'No internet connection…'); the mock error scenario answers HTTP 500 ('Request failed with status 500'), which this screen would show as the toast text. How to mock it?
- Evidence: dom/offline.html:2-10; ScreenBlock_MyBookmarks.mvc.js:848-875; Connect2_LegacyShared IsRequestFailedExceptionMessage = (msg = 'Request failed with an error'); mocks/contract.ts:23; lib/api.ts:81
- OutSystems MCP: n/a
- Options: A: the route's mocks.ts answers GetGroupSummaries with a network error in the error scenario (an aborted call, as captured) | B: keep HTTP 500 and exempt the toast text (recommended: A)
- Answer (user, 2026-10-15T20:39:09): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): error scenario fails GetGroupSummaries as a network error

## Q6 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): CR-MyBookmarks-1, click inert until applied.; Q2 → A (pending): CR-MyBookmarks-2, route-local collection until applied.; Q4 → A (pending): loading-state exemption (proposed-exemptions.json).; Q5 → A (pending): network error for GetGroupSummaries in the error scenario.; Change requests: CR-MyBookmarks-1, CR-MyBookmarks-2. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T23:36:34): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
