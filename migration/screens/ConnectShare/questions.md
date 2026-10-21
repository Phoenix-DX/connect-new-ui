# Questions: ConnectShare

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [fact] Get_ShareDetails error message (answered)
- Question: Which exception (class and message) does Get_ShareDetails raise for a ShareId that does not exist (the captured ShareId 00000000-0000-0000-0000-000000000000)? The screen shows the message as its status (OnInitializeSharingScreen AllExceptions: StatusMessage = ExceptionMessage).
- Evidence: calls.md #1: ActionGet_ShareDetails answered data {} + exception {name, specificType, message}; dom/default.html:77 masked title, word lengths 7/5/3/36 (36 = the ShareId's length); UBTConnect.controller.js:15603-15700 (catch → StatusMessage = AllExceptions.ExceptionMessage)
- OutSystems MCP: not available to route agents (brief: no MCP); conservative choice: mock raises ServerException('Unknown share for ' + ShareId), fictional text with the captured word lengths, masked text is not compared by parity
- Answer (user, 2026-10-15T23:12:20): No source: Get_ShareDetails is server-side and its message is masked in the capture. Auto mode, no recommendation: keep the conservative mock (ServerException 'Share not found (mock message)'). To confirm with the user. auto-accepted (user instruction 2026-10-15 16:59)

## Q2 [decision] mock shares for uncaptured branches (answered)
- Question: Which mock data should exercise the branches of OnInitializeSharingScreen / Action_Redirect that the capture did not reach (share unavailable, ShareItem.Id empty, no access → upgrade popup, redirect to HouseholdDetails for Household / My Household / Update, OneSchoolGlobalDetails, FeedItemDetail, SupperMeeting_Details, unknown type)?
- Evidence: UBTConnect.controller.js:15603-15700 (OnInitializeSharingScreen branches); UBTConnect.Legacy_Share.ConnectShare.mvc.js Action_Redirect (navigations with HouseholdId / In_OneSchoolGlobalId / FeedItemId / In_SubdivsionId); capture reached only the exception branch (calls.md #1)
- OutSystems MCP: n/a
- Options: A: fictional ShareIds 00000000-0000-0000-0000-00000000000N (N=1..9), one per branch, redirecting to the ids the built target screens were captured with (HouseholdId 42438, In_OneSchoolGlobalId 1430, In_SubdivsionId 1210, a fictional FeedItemId); every other ShareId raises the captured exception | B: only the captured exception branch (every ShareId raises it); other branches reachable only in tests (recommended: A)
- Answer (user, 2026-10-15T23:12:20): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): fictional ShareIds 00000000-0000-0000-0000-000000000001…009, one per uncaptured branch

## Q3 [fact] Legacy_Share flow exception handler (answered)
- Question: What does the Legacy_Share flow's exception handler do (ConnectShare.handleError → UBTConnect.Legacy_Share.controller handleError)? Needed when OnInitialize raises (offline: AuditShareViewEvent's GetUserInformation_Wrapper fails, StatusMessage stays empty as in dom/offline.html).
- Evidence: ConnectShare.mvc.js controller handleError → _flow_UBTConnect_Legacy_ShareController.default.handleError; UBTConnect.Legacy_Share.controller.js is listed in the survey manifest but not in sources (not local)
- OutSystems MCP: not available; conservative choice: shell raiseToFlowHandler (CommunicationException → ShowCommunicationExceptionMessage, else ShowExceptionMessage), as LegacyShareObject (same flow) does
- Answer (code, 2026-10-15T23:12:20): UBTConnect.Legacy_Share.controller.js (fetched read-only 2026-10-15): handleError logs a trace ('Legacy_Share') and delegates to the App_Common flow handleError; the shell raiseToFlowHandler matches.

## Q4 [decision] loading state frame (answered)
- Question: In the loading state the original shows an empty #reactContainer (the screen view is created only after OnInitialize, which waits for Get_ShareDetails); the clone's shell always renders #transitionContainer, and ConnectShare renders nothing inside it until OnInitialize ends. Accept this invisible structural difference, or change the shell?
- Evidence: dom/loading.html:1-3; OutSystems.js:2 (screen controller fireInitialize awaited before the view); app/src/app/AppFrame.tsx:16-24; parity/loading.json (structure 1, pixels 0.00%)
- OutSystems MCP: n/a
- Options: A: accept as a narrow exemption (LOADING-FRAME-CONNECTSHARE in migration/screens/ConnectShare/proposed-exemptions.json): nothing visible differs | B: change request to the shell: hold #transitionContainer until the first screen's OnInitialize ends (recommended: A)
- Answer (user, 2026-10-15T23:12:20): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the loading-state #transitionContainer frame difference (invisible) is exempted narrowly

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → fictional exception message "Share not found (mock message)" (pending orchestrator answer); Q2 → A: ShareIds 00000000-0000-0000-0000-000000000001…009 = unavailable, empty item, no access (popup after 1 s), Household → HouseholdId 42438, Update → householder 42438, OneSchool Global → 1430, Feed → mock-feed-item-1, Supper Meeting → 1210, Locality (not routed → blank slate, empty status) (pending orchestrator answer); Q3 → shell raiseToFlowHandler for OnInitialize exceptions (pending orchestrator answer); Q4 → A: narrow exemption LOADING-FRAME-CONNECTSHARE (pending orchestrator answer); AuditShareViewEvent sends nothing (its JSON is built and dropped, UC:797-822): only its GetUserInformation_Wrapper read is kept.; The DelayedShowFreeSubscriptionAlert timer is cleared when the screen unmounts (the original's ensureControllerAlive stops a destroyed screen's action).; Proposed exemptions (capture/timing artifacts): CAPTURE-LINK-HREF-CURSOR-NAVIGATIONLANDING, CAPTURE-MASKED-TEXT-CONNECTSHARE-STATUS, CALL-ORDER-APPSTART-SHAREDETAILS in `migration/screens/ConnectShare/proposed-exemptions.json`. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T23:15:23): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q6 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → fictional exception message "Share not found (mock message)" (pending orchestrator answer); Q2 → A: ShareIds 00000000-0000-0000-0000-000000000001…009 = unavailable, empty item, no access (popup after 1 s), Household → HouseholdId 42438, Update → householder 42438, OneSchool Global → 1430, Feed → mock-feed-item-1, Supper Meeting → 1210, Locality (not routed → blank slate, empty status) (pending orchestrator answer); Q3 → shell raiseToFlowHandler for OnInitialize exceptions (pending orchestrator answer); Q4 → A: narrow exemption LOADING-FRAME-CONNECTSHARE (pending orchestrator answer); AuditShareViewEvent sends nothing (its JSON is built and dropped, UC:797-822): only its GetUserInformation_Wrapper read is kept.; The DelayedShowFreeSubscriptionAlert timer is cleared when the screen unmounts (the original's ensureControllerAlive stops a destroyed screen's action).; Proposed exemptions (capture/timing artifacts): CAPTURE-LINK-HREF-CURSOR-NAVIGATIONLANDING, CAPTURE-MASKED-TEXT-CONNECTSHARE-STATUS, CALL-ORDER-APPSTART-SHAREDETAILS in `migration/screens/ConnectShare/proposed-exemptions.json`. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T16:32:18): confirm (user, 2026-10-16: "Confirm cả hai" (English: "Confirm both"), after F18 added the compiled transition arguments)
