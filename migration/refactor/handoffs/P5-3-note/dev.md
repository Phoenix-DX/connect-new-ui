## Result
status: pass
summary: Added `app/src/api/note/` for the 6 note calls of `calls-by-domain.md`: types, mapper, repository, keys, 2 hooks with no caller, a barrel and 3 test files. The 5 caller files re-export the domain functions and types under their old names, so no caller code changes. The work is in the worktree `rf/prefetch-P5-3-note` (base 2c2c149). Typecheck, the tests of the changed code and of its callers, eslint, format:check and arch pass.

## Files changed
app/src/api/note/types.ts (new)
app/src/api/note/mapper.ts (new)
app/src/api/note/repository.ts (new)
app/src/api/note/keys.ts (new)
app/src/api/note/hooks.ts (new)
app/src/api/note/index.ts (new)
app/src/api/note/mapper.test.ts (new)
app/src/api/note/repository.test.ts (new)
app/src/api/note/hooks.test.tsx (new)
app/src/screens/Notes/api.ts
app/src/screens/Notes/types.ts
app/src/shared/UBTConnect/Directory_EntityDetailsActions/api.ts
app/src/shared/UBTConnect_Utils/NoteListActions/api.ts
app/src/shared/UBTConnect_Utils/NotesSheet/api.ts

Shared files changed (all 3 are `api.ts` files):
- `shared/UBTConnect/Directory_EntityDetailsActions/api.ts`
- `shared/UBTConnect_Utils/NoteListActions/api.ts`
- `shared/UBTConnect_Utils/NotesSheet/api.ts`

The event patch does not touch these 3 files. This step does not change an event screen or the files of the event patch (`shared/Connect2_Assemble_MUI/lib/structures.ts`, `shared/Connect2_OrbitMobile_MUI/lib/structures.ts` and `actions.ts`). It also does not change the files that the main tree has as uncommitted changes (HomeFeed, HouseholdCarousel, Menu, Updates_SingleList, `shared/UBTConnect/lib/actions.ts`).

## Commands run
All commands ran in the worktree with Node 24.21.0.
npm --prefix app run typecheck → exit 0 (first run: 2 errors in the new mapper.test.ts. The contract DynamicPill has no SearchResult field. Test fixed.)
npx vitest run src/api/note → exit 0 after one fix: 3 files, 21 tests. The error test expected the message of another handler; it now expects "Request failed with status 500".
npx vitest run src/api/note, NoteListActions, NotesSheet, Directory_EntityDetailsActions, containers/HouseholdDetails, components/household/HouseholdDetailsView, SupperMeeting_DetailsBlock, EntitiesCarouse_lSupperMeetingDetails, src/mocks/handlers.test.ts, localNotes.test.ts, src/app/routes.test.ts, src/api/client → exit 0; 18 files, 122 tests passed
npx vitest run --changed → exit 0; 14 files, 83 tests passed
npx vitest run src/app/RouteGuard.test.tsx and src/shared/UBTConnectLibrary/KebabButton_BookmarkNotes (in a combined run) → exit 0
npx eslint src/api/note and the 5 changed caller files → exit 0 (first run: 1 no-unsafe-assignment in mapper.test.ts. Nested expect.objectContaining replaced.)
npx prettier --write src/api/note → formatted 4 files (index.ts, repository.ts and the 2 test files)
npm --prefix app run format:check → exit 0, all files clean
npm --prefix app run arch → exit 0; 0 errors, 200 warnings. src/api/note has no warning. Two warnings of the base are gone: `screens/Notes/api.ts` and `Directory_EntityDetailsActions/api.ts` no longer import `legacy/os/os-wire` (rule 9). The changed folders still have 2 warnings from before: `screens/Notes/mocks.ts` and `screens/Notes/index.tsx`.
The full suite and parity were not run. The master asked for no full suite, and the worktree has no dev server. The tester runs them in the main tree.

## Deviations from the brief
- I worked in the prefetch worktree on branch `rf/prefetch-P5-3-note`, not on `refactor/architecture`, as the master asked. I made no commit.
- Domain contents: the 6 actions of the note table.
  - Notes: `Notes/DataActionGetNotes` → `fetchNoteCards`, re-exported as `fetchNotes`.
  - Notes: `UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds` → `fetchNotePills(ids)`.
  - Directory_EntityDetailsActions: `DataActionFetchNotes` → `fetchEntityNotes`, re-exported as `fetchNotes`.
  - NoteListActions: `ServiceAPIUpdateNote` → `updateNote`.
  - NoteListActions: `ServiceAPIDeleteNoteByNoteId` → `deleteNote`, re-exported as `deleteNoteByNoteId`.
  - NotesSheet: `ServiceAPIAddNote` → `addNote`.
- Not moved:
  - `DataActionFetchContactDetails` stays in `Directory_EntityDetailsActions/api.ts`. It is in the message table.
  - The client actions `Get_Note_DynamicPills` and `GetNotes_FilterYear` stay in `screens/Notes/api.ts`. They read the local notes and the session (`platform/`), and rule 7 does not let `api/note` import `platform/`. `Get_Note_DynamicPills` now calls `fetchNotePills`.
  - The contract also has `HouseholdRelations_Block/DataActionFetchNotes`. No app code calls it, so it is not in the domain.
- Plan §5.4: no call moved into a query, because every caller still calls the repository functions in its own flow. So the calls do not change, and no exemptions are needed: `exemptions.json` was not written. `hooks.ts` has 2 queries with no caller, as in bookmark: `useNoteCardsQuery` and `useEntityNotesQuery`, with staleTime 0, gcTime 0 and retry false.
- Types: `NoteItem` and `NoteList` are UBTConnectLibrary `Note_Item` and `Notes` with optional fields, as the blocks use them. `NoteCard_Item` puts a `Notes` record of the blocks back into the card. `NoteCardItem`, `NotesFilter` and `NotesVariables` keep the names and shapes of the screen. `EntityNotesCallInputs` is the contract input type, because the block sends its variables as they are; the precedent is `AfterInitializeCallInputs` in `api/app`. Its fields are the same as the FetchContactDetails inputs.
- Fields that the mappers drop, and the reader search (typecheck, grep, casts, JSON and storage):
  - AddNote drops `Note_Added.ItemId` and `Note_Added.NoteCategoryId`. The only reader of `noteAdded` is `NotesSheet.tsx:101-110`. It reads Id, DateCreatedUtc and DateEditedUtc, builds a new note record, and passes those fields to `createOrUpdate_LocalNote`. Nothing keeps the record as it is.
  - No other field is dropped. The note lists now copy the 4 fields of `Note_Item` one by one; before, they kept the wire objects. The contract and the mocks have only these 4 fields. DynamicPill has only Text and Identifier.
  - The GetNotes request sends the same keys in the same order, with the same values (a mapper test checks the key order).
- Unused exports removed from `screens/Notes/types.ts`: `GetNotesInput`, `NotesFilterWire`, `NotesPage` and `NoteCardSourceHeader`. Only the old `api.ts` used them. The file keeps `NoteCardItemWire` for `mocks.ts`.
- Compiled-line references were removed only in rewritten code: the old `fetchNotes`, `get_Note_DynamicPills`, the two NoteListActions functions and the NotesSheet function.
- Docs for the documenter (not changed here):
  - app/src/api/README.md
  - app/docs/refactor/calls-by-domain.md
  - app/docs/reference/api.md
  - app/docs/guides/api-and-mocks.md (the list of domain folders)
  - app/src/shared/UBTConnect_Utils/NoteListActions/README.md (line 47, `api.ts`)
  - app/src/shared/UBTConnect_Utils/NotesSheet/README.md (line 35, `api.ts`)
  - app/src/shared/UBTConnect/Directory_EntityDetailsActions/README.md (line 35, `DataActionFetchNotes` in `api.ts`)
- Parity strict `--changed` was not run. The tester runs it in the main tree. Affected routes:
  - Notes
  - HouseholdDetails
  - Household_Relations
  - OneSchoolGlobalDetails
  - SupperMeeting_Details and SupperMeeting_Carousel
  - Locality_Details (OneSchool Global list and interchange list)
  - Profile (household preview)

## Questions for the user
none
