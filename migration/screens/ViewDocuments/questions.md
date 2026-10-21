# Questions: ViewDocuments

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data (answered)
- Question: No TST capture and no documents on the test account: which documents does the mock world answer for DataActionGetEventDocuments, and how is the route reviewed?
- Evidence: no-capture.json (user 2026-10-16); EventDetail/default of event 7301 has HasDocuments false (orbit.ts detail, kept as captured); ScreenBlock_ViewDocuments.mvc.js :663 (data action), :1012-1043 (OnAfterFetch)
- Options: A: four PDF documents of event 7301 in orbit.ts (orbitEventDocuments: Conference Programme, Hosting Guidelines, Main Hall Map and Parking, Guest Arrival Schedule; links on example.com), any member, reviewed by direct URL; another event answers no document (NoInformation) | B: answer no document for every event (recommended: A)
- Answer (user, 2026-10-16T14:01:04): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [decision] web file opening (answered)
- Question: A document click runs OpenInApp_TryOpenFileInApp; on the web it opens the PDF link in a new tab (decision U18) and returns IsInApp False, so Action_OpenDoc marks it viewed at once (link colour text-neutral-7). Keep this web branch?
- Evidence: ScreenBlock_ViewDocuments.mvc.js :684-764 (OnClick_Document), :782-828 (Action_OpenDoc); shared/UBTConnect_Utils/lib/actions.ts openInApp_TryOpenFileInApp; FileTransfer HandleDownload events only in the native app (shared/FileTransferPlugin/lib/handleDownload.ts)
- Options: A: web branch as built (new tab, viewed at once; download events wired but never raised in the browser) | B: other (recommended: A)
- Answer (user, 2026-10-16T14:01:04): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A: four PDF documents of event 7301 (orbit.ts orbitEventDocuments, links on example.com), not reachable from; Q2 → A: a click opens the PDF in a new tab (U18) and marks the row viewed (text-neutral-7) at once; the native download; Markup not captured: built from the compiled view (SB, LS). Feature flags: action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T14:01:05): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
