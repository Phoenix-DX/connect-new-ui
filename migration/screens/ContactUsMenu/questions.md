# Questions: ContactUsMenu

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] signed-out menu (answered)
- Question: ContactUsMenu is an Anonymous screen; the capture only shows the signed-in menu (3 sections, 4/1/2 rows). Get_ContactUsMenuSections and Get_LookupContactUsMenu also have a signed-out branch (GetUserId = NullIdentifier): same first two sections, 'General Inquiries' with one row 'General Questions or Suggestions' (icon BookOpen). Build the signed-out branch as compiled (not captured, no parity state)?
- Evidence: UBTConnect.controller.js get_ContactUsMenuSections$Action (ListAppendAll_LoggedOutMenuOptions) and get_LookupContactUsMenu$Action (else branch GeneralQuestionsOrSuggestions); knowledge/navigation.md:30 (Anonymous role); dom/default.html:333-418 (signed-in rows)
- Options: A: build both branches as compiled, signed-out one listed as not captured | B: build only the signed-in branch, render NotCaptured when signed out (recommended: A)
- Answer (user, 2026-10-15T20:09:00): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): both branches built as compiled; signed out shows the single row 'General Questions or Suggestions'

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): both branches of Get_ContactUsMenuSections / Get_LookupContactUsMenu built as compiled; the signed-out menu ("General Questions or Suggestions") has no captured state.; ContactUsDetails is not built yet: a row click navigates to its original path with the original parameters (`/UBTConnect/ContactUsDetails?In_ContactSubjectId=…&In_ContactSubjectTitle=…&In_ListMenuOptionLabel=…`).; The TST value "General Questions " (Type_ContactSubject.GeneralQuestions) keeps its trailing space as Id and Label, so the navigation parameter carries it [static-entities-tst.json].; UBT_Icons2 values UBT, PersonAdd, ShoppingBasket, AccountCircle, PersonPlay, BookOpen, Tooltip are not in the shared static-entity table; kept in `components/staticEntities.ts` with the TST values (no CR needed; the shared table may take them later). Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:13:38): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
