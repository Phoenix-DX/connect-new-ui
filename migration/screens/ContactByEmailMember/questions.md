# Questions: ContactByEmailMember

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] submit flow (answered)
- Question: Send (Handler_SubmitForm) was not captured: the write is blocked on TST. Build it from the compiled code with SendContactMemberEmail mocked (P-MUTATION: the sent form is kept in an in-memory collection, no real server) and the app-event wrapper as a log entry (U17)?
- Evidence: UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:641-747 (Handler_SubmitForm); calls.md has no SendContactMemberEmail; CLAUDE.md rule 6
- OutSystems MCP: MCP not available to route agents
- Options: A: build from compiled code with the mock | B: render NotCaptured for the submit path (recommended: A)
- Answer (user, 2026-10-15T20:30:00): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): submit built from the compiled code, SendContactMemberEmail mocked (P-MUTATION)

## Q2 [fact] Orbit audit actions (answered)
- Question: What do Connect2_OrbitMobile_MUI client actions OnApplicationEvent_EmailHost (branch In_AuditEventId = OrbitApplicationEvent.EmailHost) and AddAuditEventDetailEvent (branch LDM event date/locality set) do: server write, telemetry only, navigation? Their controller (Connect2_OrbitMobile_MUI.controller.js) is not in the local sources. Built conservatively: both only write a log entry (no network); the EmailHost branch ends after it as compiled (no feedback, no navigateBack, IsLoading stays True).
- Evidence: mvc.js:684-704 (EmailHost branch, ends at :704), :708-720 (AddAuditEventDetailEvent); manifest /UBTConnect/scripts/Connect2_OrbitMobile_MUI.controller.js, not in migration/runtime-sources, contract/sources/raw or screens/*/analysis/sources/raw
- OutSystems MCP: MCP not available to route agents
- Answer (code, 2026-10-15T20:30:00): Connect2_OrbitMobile_MUI.controller.js (fetched read-only 2026-10-15): OnApplicationEvent_EmailHost serializes AuditPayload_EmailHost and calls zOnApplicationEvent_Wrapper; AddAuditEventDetailEvent sets EventInfo (dateLocalIso, logLevel 3, EventType LDM, guest household, event date/locality), serializes it and calls zOnApplicationEvent_Wrapper. Neither calls a server action itself; zOnApplicationEvent_Wrapper is the app-event wrapper the clone logs (U17). The build (log entries, EmailHost branch ends as compiled) matches.

## Q3 [fact] error handling (answered)
- Question: What does the ContactFlow UI flow's handleError do (OnException handler or delegate to App_Common)? UBTConnect.ContactFlow.controller.js is not in the local sources. Built conservatively as raiseToFlowHandler (App_Common behaviour, as App_Menu delegates: UBTConnect.App_Menu.controller.js:12-16); IsLoading stays True after an error as compiled.
- Evidence: mvc.js:846-848 (handleError → _flow_UBTConnect_ContactFlowController); manifest /UBTConnect/scripts/UBTConnect.ContactFlow.controller.js not local
- OutSystems MCP: MCP not available to route agents
- Answer (code, 2026-10-15T20:30:00): UBTConnect.ContactFlow.controller.js (fetched read-only 2026-10-15): ContactFlow.handleError logs a trace and delegates to the App_Common flow handleError. raiseToFlowHandler matches.

## Q4 [decision] parity difference (shared block) (answered)
- Question: The only parity difference (all 3 states) is the shared ContactByEmailForm message text area: rows=3 (358x81) vs captured no rows (358x60), plus the counter/footer offsets and 0.23% pixels it causes. The route cannot fix it (shared code): CR-ContactByEmailMember-2. Apply CR-2 in the foundation, then re-run parity, before the review?
- Evidence: parity/default.json layout/position diffs; dom/default.html:168; ContactUsDetails dom/default.html:106 (textLines 3, no rows)
- OutSystems MCP: MCP not available to route agents
- Options: A: foundation applies CR-2, then re-run parity before review | B: review with the difference, fix later (recommended: A)
- Answer (user, 2026-10-15T20:30:09): Auto-decided (user instruction 2026-10-15 16:59), NOT the recommended A, because the evidence contradicts it: CR-ContactByEmailMember-2 is rejected. TST renders rows (OutSystemsReactWidgets TextArea: rows = textLines); the capture stripped it (capture.js KEEP_ATTR line 285, fixed for future captures). The shared form keeps rows; the remaining diff is a capture artifact covered by CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL*. Listed for the user's review.

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): Send built from the compiled code; SendContactMemberEmail mocked in `mocks.ts` with collection `ContactByEmailMember.sentEmails`, empty output; never the real server.; Q2 (fact, conservative): OnApplicationEvent_EmailHost and AddAuditEventDetailEvent write a log entry only; the EmailHost branch ends without message or navigation and leaves IsLoading True, as compiled.; Q3 (fact, conservative): errors of Send go to `raiseToFlowHandler` (App_Common behaviour).; Q4 → A (pending orchestrator answer): foundation applies CR-ContactByEmailMember-2, then parity is re-run.; zOnApplicationEvent_Wrapper goes to the log (decision U17, no telemetry in the mock phase); the e-mail and sender name are not logged (privacy).; In_LDMEventDate: "" or 1900-01-01 counts as NullDate (OutSystems null date) (`api.ts`).
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:31:04): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q6 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): Send built from the compiled code; SendContactMemberEmail mocked in `mocks.ts` with collection `ContactByEmailMember.sentEmails`, empty output; never the real server.; Q2 (fact, conservative): OnApplicationEvent_EmailHost and AddAuditEventDetailEvent write a log entry only; the EmailHost branch ends without message or navigation and leaves IsLoading True, as compiled.; Q3 (fact, conservative): errors of Send go to `raiseToFlowHandler` (App_Common behaviour).; Q4 → A (pending orchestrator answer): foundation applies CR-ContactByEmailMember-2, then parity is re-run.; zOnApplicationEvent_Wrapper goes to the log (decision U17, no telemetry in the mock phase); the e-mail and sender name are not logged (privacy).; In_LDMEventDate: "" or 1900-01-01 counts as NullDate (OutSystems null date) (`api.ts`).
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T23:37:28): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
