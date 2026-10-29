# Publish 2 gaps G1-G4: build (2026-10-29)

Decisions: `../review/drift-decisions-2026-10-29.md` § "User decisions, round 2". Analysis: `../review/publish2-diff.md`.
No commit. No TST access except one static GET (P2-Q3, logged in `../../knowledge/runtime-sources.md`). No MCP.

## Result

| Gap | Change | Tests |
|---|---|---|
| G4 | `pages/Bookmarks/BookmarksPage.tsx`: Input `InitalString` = `bookmarksFilter.searchText` (Bookmarks.mvc.js pretty:302), as Notes | JSX wiring only |
| G2 | `lib/ubtConnect/actions.ts`: `notes_InterchangeId_ExtractId` (UBTConnect.controller.js:15189-15260) and `notes_InterchangeId_ComposeId` (moved from `containers/EntityDetailsActions/entityDetailsActionsState.ts`; both are UBTConnect module actions). `Locality_Interchange` gives `inInterchangeLocalityId` down; `Directory_Interchange_StatisticsList` gives it as `inLocalityId` to `EntityDetailsActionsContainer` (survey :317-342). `pages/Notes/hooks/notesState.ts` `noteCardTarget`: Interchange → Locality_Details, `LocalityId` = TextToLongInteger(ExtractId(ObjectId).LocalityId) (Notes.mvc.js:1618-1628) | `lib/ubtConnect/actions.test.ts` (3), `pages/Notes/hooks/noteCardTarget.test.ts` (2), `notesState.test.ts` (updated), `pages/Locality_Details/components/Locality_Interchange.test.tsx` (new, 1) |
| G3 | `containers/ShareSheet/useShareSheet.ts`, `shareSheetState.ts`, `ShareSheetContainer.tsx`, `README.md`: handlers in TST order (NotRegistered; user exception CommunicationError and CommunicationException → flow handler as the user exception `UBTConnect_Utils.CommunicationError`, same message; AllExceptions → "Share failed. Please try again."; a system exception goes up). IsSubmitting (P2-Q1 a): True after Cache_UserInfo_Get, False after success and in each handler; Send `isDisabled` = no selection or IsSubmitting (survey :1759). Also "Household profile has been shared." for a household (see Q2) | `useShareSheet.test.tsx`: +4 (CommunicationError, CommunicationException, IsSubmitting, messages) |
| G1 | `components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx`: `inEventStartDateTime`, `inEventEndDateTime`; the time row `$b19` (clock icon extra small, neutral-7, extra small font, click = OnClickItemCard) only when both dates are not NullDate; text `formatDateForAssembleMeetings(start, isAllDay)`, isAllDay = start at 00:00:00 and DiffSeconds = 86400 (mvc.js:1035-1100). `lib/ubtConnectLibrary/actions.ts`: `formatDateForAssembleMeetings` (TST name); `lib/assemble/actions.ts`: `getAssembleEventSummaryDateTimeString` removed (TST removed it); `AssembleSummaryCard.tsx` uses the library action. Data: `api/bookmark/bookmarkCards.ts` and `api/note/{types,mapper}.ts` map `EventStartDate` / `EventEndDate` (NullDate default); `containers/CardWithNotes/CardWithNotesSheet.tsx` gives them to the card. Mocks keep null dates (P2-Q2 a) | `ItemCard_WithNotes.test.tsx` +5 (null dates, timed, all-day Sunday, midnight not all day, click); `lib/ubtConnectLibrary/actions.test.ts` +1 (moved from `lib/assemble/actions.test.ts`); mapper tests updated. Story: `ItemCard_WithNotes.stories.tsx` (NoEventDates, TimedEvent, AllDayEvent) |
| P2-Q4 | Comments fixed: `bookmarksState.ts` (no second OneSchoolGlobalDetails test since publish 2), `AssembleSummaryCard.tsx` (FormatDateForAssembleMeetings), `notesState.ts` (Q9 text), `Bookmarks_Card_Item.tsx`, `NoteCard_Item.tsx`, StatisticsList / Locality_Interchange headers | - |
| P2-Q3 | Nine (not twelve) changed manifest entries were unidentified. Result in `../review/publish2-diff.md` § "The unidentified manifest entries": the two `_CS.model.js` files add the G1 event dates; the other seven have no React impact. No new gap | - |

Notes Q9 (deferred): closed by G2 (the ExtractId code is in the re-capture copies). `migration/screens/Notes/questions.md`
is not changed. No mock change: the TST captures have no interchange note and no event dates.

## Files (app/src)

`pages/Bookmarks/BookmarksPage.tsx`, `pages/Bookmarks/hooks/bookmarksState.ts`, `pages/Bookmarks/components/Bookmarks_Card_Item.tsx`,
`pages/Notes/hooks/notesState.ts`, `pages/Notes/hooks/notesState.test.ts`, `pages/Notes/hooks/noteCardTarget.test.ts`,
`pages/Notes/components/NoteCard_Item.tsx`, `pages/Locality_Details/components/Locality_Interchange.tsx`,
`pages/Locality_Details/components/Locality_Interchange.test.tsx` (new),
`pages/Locality_Details/components/Directory_Interchange_StatisticsList.tsx`, `lib/ubtConnect/actions.ts`,
`lib/ubtConnect/actions.test.ts`, `lib/ubtConnectLibrary/actions.ts`, `lib/ubtConnectLibrary/actions.test.ts`,
`lib/assemble/actions.ts`, `lib/assemble/actions.test.ts`, `containers/EntityDetailsActions/entityDetailsActionsState.ts`,
`containers/EntityDetailsActions/useEntityDetailsActions.ts`, `containers/EntityDetailsActions/EntityDetailsActionsContainer.test.tsx`,
`containers/ShareSheet/{useShareSheet.ts,useShareSheet.test.tsx,shareSheetState.ts,ShareSheetContainer.tsx,README.md}`,
`containers/CardWithNotes/CardWithNotesSheet.tsx`, `components/note/ItemCardWithNotes/{ItemCard_WithNotes.tsx,ItemCard_WithNotes.test.tsx,ItemCard_WithNotes.stories.tsx (new)}`,
`components/assemble/AssembleSummaryCard/AssembleSummaryCard.tsx`, `api/bookmark/{bookmarkCards.ts,bookmarkCards.test.ts}`,
`api/note/{types.ts,mapper.ts,mapper.test.ts}`.
Docs: `../review/publish2-diff.md` (P2-Q3 section), `../../knowledge/runtime-sources.md` (GET log).

## Checks

- `npx vitest run` on the changed folders: 108 files, 895 tests pass.
- `npx tsc --noEmit`: no errors. `npx eslint` and `npx prettier --check` on the changed files: clean.
- `npm run arch`: no new violation (a first draft imported `legacy/os` from the container; fixed with `isUserException`
  of `platform/feedback/flowErrors`). `npm run dup`: no clone in the changed code (the one clone of
  `lib/ubtConnectLibrary/actions.ts` :750-832 was there before).

## Parity (after the last change, `--app http://localhost:5174`, this checkout)

Before: the drift sweep of commit f32ebfa1 (not re-run before this change). After:

| Route | States | Result |
|---|---|---|
| Bookmarks | default, loading, offline | clean |
| Notes | default, loading, offline | clean |
| Locality_Details | all states incl. tag-interchange | clean |
| EventDetail | default, loading, offline | clean |
| LDM_EventDetail_V2 | default, loading, offline | clean |
| HouseholdDetails | default, loading, offline | clean |
| LegacyShareObject (share route) | default, loading, offline | clean |

All counts 0; only existing exemptions. The G1 row is not visible in parity (null dates in every capture).

## Questions

| Id | Question | Options | Recommendation |
|---|---|---|---|
| P2F-Q1 | `api/openapi.yaml` is generated by `migration/tools/contract_gen.py` ("do not edit by hand"). The event dates are typed in the TST wire extensions (`NoteCardItemWireTst`, `BookmarkCardItemWire`), as the channel fields already are; the yaml and `schema.d.ts` are not changed | a: keep the wire extensions until the next contract regeneration; b: re-run contract_gen.py now (foundation owner, large generated diff) | a |
| P2F-Q2 | Not in G1-G4: the live `Action_SubmitShare` shows "Household profile has been shared." for a household (the older BookmarksByGroup copy does not). I ported it with G3 (one condition, unit test) | a: keep (TST 1:1); b: revert and track it apart | a |
| P2F-Q3 | TST 1:1 detail: after a system exception in `Action_SubmitShare` (`throw ex`), IsSubmitting stays True, so Send stays disabled until the sheet opens again. Ported as TST | a: keep TST; b: reset IsSubmitting also on a system exception (differs from TST) | a |

User answers (2026-10-29): P2F-Q1 (a) keep the wire extensions until the next contract regeneration; P2F-Q2 (a) keep
the "Household profile has been shared." message (verified in the live survey: `SubmitMessage + " profile"` for a
household, then `+ " has been shared."`); P2F-Q3 (a) keep the TST behaviour (IsSubmitting stays True after a system
exception).
