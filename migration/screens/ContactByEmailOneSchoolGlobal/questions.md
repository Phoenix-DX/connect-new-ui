# Questions: ContactByEmailOneSchoolGlobal

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock SendContactMemberEmail (answered)
- Question: SendContactMemberEmail is a write that was never recorded (guard). How should the mock answer it?
- Evidence: p:UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:425-434 (output record empty); openapi UBTConnect.ServiceAPISendContactMemberEmail x-os-writes true; mock-fixtures.md:13 (writes never recorded, P-MUTATION)
- OutSystems MCP: not asked (no MCP for route agents)
- Options: A: append the sent UI_ContactByEmailForm to an in-memory store collection (P-MUTATION) and answer {} (no output fields) | B: stateless {} answer (recommended: A)
- Answer (user, 2026-10-15T20:30:00): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): send mock stores the form in an in-memory collection and answers {}

## Q2 [decision] send error branch (answered)
- Question: When SendContactMemberEmail fails, what should the screen do? Compiled Handler_SubmitForm has no exception handler: IsLoading stays True and the error goes up to the ContactFlow flow handler (UBTConnect.ContactFlow.controller.js not in the local sources).
- Evidence: p:UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:474-528 (no catch besides debugger rethrow), :565-567 handleError → ContactFlow controller; shell raiseToFlowHandler (AcceptPendingPolicies Q2, Q-W3B-2)
- OutSystems MCP: not asked (no MCP for route agents)
- Options: A: as compiled: keep IsLoading True (fields disabled, button spinner) and call raiseToFlowHandler(error) | B: reset IsLoading to False after the message (recommended: A)
- Answer (user, 2026-10-15T20:30:00): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): on failure IsLoading stays on as compiled; error to raiseToFlowHandler (ContactFlow.handleError → App_Common handleError, UBTConnect.ContactFlow.controller.js fetched 2026-10-15)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): sent e-mails go to an in-memory collection; answer `{}`; never a real server.; Q2 → A (pending orchestrator answer): on a send error IsLoading stays True and the error goes to `raiseToFlowHandler`.; The application event EmailHousehold is written to `log.info` instead of Azure Insights (app-shell.spec U17).; `In_ContactName` of the capture ("Test School") is the fictional value of the capture plan (capture-plan note "Q3 a").; Not captured: the sending state and Dialog_Navigation (shared block, compiled view only); the sending, success and; Proposed capture-artifact exemptions CAPTURE-TEXTAREA-ROWS-CBEOSG (+ -GRID, -PSEUDO, -PIXEL): text-area `rows`
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:30:27): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q4 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): sent e-mails go to an in-memory collection; answer `{}`; never a real server.; Q2 → A (pending orchestrator answer): on a send error IsLoading stays True and the error goes to `raiseToFlowHandler`.; The application event EmailHousehold is written to `log.info` instead of Azure Insights (app-shell.spec U17).; `In_ContactName` of the capture ("Test School") is the fictional value of the capture plan (capture-plan note "Q3 a").; Not captured: the sending state and Dialog_Navigation (shared block, compiled view only); the sending, success and; Proposed capture-artifact exemptions CAPTURE-TEXTAREA-ROWS-CBEOSG (+ -GRID, -PSEUDO, -PIXEL): text-area `rows`
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T23:37:40): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
