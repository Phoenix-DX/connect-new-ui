# Questions: Notes

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data / default state (answered)
- Question: The default capture shows a user with no notes (EmptyList 'No Notes found', no year option, only the 'All' pill), but the shared notes mock collection (notesCollection, CW_Notes.notes) seeds 3 fictional notes (501-503, Household, item 1) that SyncNotes copies to the local cache at sign-in. With scenario 'real' the default state therefore shows 1 note card and a '2026' year option and cannot pass parity. Which data should the default state be compared with?
- Evidence: dom/default.html:187-259 (EmptyList), :640-660 (Filter by year list empty); states.json default scenario=real; app/src/shared/UBTConnect_Utils/NoteListActions/mocks.ts SEED; app/src/shell/mocks.ts mockLocalNotes
- OutSystems MCP: not available to the route agent
- Options: A: compare the default state with ?mock=empty (every list empty, as the captured user) by setting its scenario in states.json | B: keep scenario real with the seed; the default state is reviewed by the user instead of parity | C: change request: the seed starts empty for the mock user, notes only exist after adding one (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) parity of state default runs with the empty scenario (the TST user had no notes); the default mock keeps 3 fictional notes

## Q2 [fact] DataActionGetNotes server logic (answered)
- Question: What does the server side of Notes/DataActionGetNotes do: how notes become UI_Note_CardItem rows (one card per ItemId + NoteCategoryId?), what Title, Subtitle and SourceHeader (Label, ImageURL, Initials, IconId) hold per note category, how Notes_Filter is applied (SearchTerm on which fields, NoteCategoryId, Years, SortByNewest when empty), paging (PageNumber, PageSize 20) and what Out_Notes.Total counts?
- Evidence: UBTConnect.Notes.Notes.mvc.js:676-690 (callDataAction, server-side only); openapi.yaml UBTConnect__Notes__DataActionGetNotes__Input/Output; no recorded fixture (person data)
- OutSystems MCP: not available to the route agent; owning module UBTConnect (screen Notes), probably Connect_Notes_CS / UBTConnect_Notes_MCS server actions
- Answer (mcp, 2026-10-15T11:15:02): OutSystems MCP (DEV, 2026-10-15, getScreen Notes): DataAction GetNotes is a pass-through: ExecuteServerAction Connect_Notes_CS.GetNotes (service action) with PageNumber = PageNumber, FilterNote = Notes_Filter, PageSize = PageSize; assigns Out_Notes = GetNotes.Out_Notes (structure Connect_Notes_CS.UI_Notes). The filtering/paging logic lives in Connect_Notes_CS (not open in Service Studio): the mock's filter semantics are a mock decision.

## Q3 [decision] pills mock (answered)
- Question: Get_NotePills_ByNoteCategoryIds is recorded only for an empty category list (the TST user had no notes). With the seeded notes the app sends ['Household'] and the recorded handler falls back to the empty recording (console warning), so only the 'All' pill shows. Keep this, record the call with a TST user that has notes, or answer fictionally (Text = category label)?
- Evidence: app/src/mocks/fixtures/UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds/01-d17576a5.json (In_NoteCategoryIds empty); UBTConnect_Notes_MCS.controller.js:745-760
- OutSystems MCP: not available to the route agent
- Options: A: keep the recorded handler (fallback to the empty recording) | B: record the call in TST with a user that has notes | C: fictional answer: one pill per category id, Text = Identifier = the id (recommended: B)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) pills: mock answers with the categories of the fictional notes (no re-record possible: the test account has no notes)

## Q4 [decision] parity exemption (answered)
- Question: Loading and offline fail only on pixels (0.13% overall, worst 40px tile 5.5% > 3.0%): the capture masks digits as '•', so the total-notes IconText of the six skeleton cards shows '•' where the build shows '0' (text check already passes); the narrower glyph moves the right-aligned list_alt icon. The same masking hits the bell and Updates badges. Accept an exemption for the masked total-notes digit of ItemCard_WithNotes (pixel tiles of the IconText), like CAPTURE-BADGE-MASKED-TEXT-HOMEFEED?
- Evidence: migration/screens/Notes/parity/loading.diff.png and offline.diff.png (hotspots x≈338 at each card, y 225/370/515/660); dom/loading.html IconText text '•' (In_TotalNotes = Notes.Total = 0, NoteCard_Item.mvc.js)
- OutSystems MCP: not applicable
- Options: A: add an exemption for the masked total-notes digit (pixel) | B: no exemption; the user reviews the loading/offline pixels instead (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) accept a pixel exemption for the masked digits of the skeleton note-count IconText (loading/offline)

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Default state data (Q1, decided): parity compares state default with `?mock=empty`; `?mock=real` shows 1 fictional; DataActionGetNotes mock (Q2, decided): MOCK ASSUMPTION in mocks.ts: SearchTerm = case-insensitive contains on the card; Pills mock (Q3, decided): one pill per sent category id, Text = Identifier = the id (fictional); an empty list answers; Pills on a first `?mock=real` open: the local notes copy is filled by the app start's SyncNotes after the screen read; Notes_FilterSheet is mounted after OnInitialize finished (years read from the local cache), so its year list is; Parity exemption (Q4, decided): CAPTURE-NOTES-MASKED-COUNT, `idRegex ^b8-l1-61_\d+-b7-b1-\$b10$`, states; Change requests: CR-Notes-1 (open, not blocking). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getFlagURLByCountryCode → not a flag (false positive): country flag image URL; behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasNewNotifications → both branches, default off (TST); only the navigation target changes (Notifications / MessageList), both screens captured, so reference none (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T12:15:55): confirm (auto-confirmed: user instruction 2026-10-15 11:24, 3h window)
