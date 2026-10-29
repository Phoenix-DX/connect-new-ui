# NotesSheet

OutSystems: `UBTConnect_Utils.CW_Notes.NotesSheet` · pack `migration/blocks/UBTConnect_Utils.CW_Notes.NotesSheet.md`
(compiled source `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`)

| Input             | Type           | Prop               | Default |
| ----------------- | -------------- | ------------------ | ------- |
| In_IsOpen         | Boolean        | `inIsOpen`         | `false` |
| ExtendedClasses   | Text           | `extendedClasses`  | `''`    |
| In_ItemId         | Text           | `inItemId`         | `''`    |
| In_NoteCategoryId | Text           | `inNoteCategoryId` | `''`    |
| In_Notes          | Notes (record) | `inNotes`          | `{}`    |

The pack lists no input; they are in the compiled model (:13-51). Events: `On_NotesChanged(Notes)` →
`onOnNotesChanged`, `On_NoteSheet_Closed` → `onOnNoteSheetClosed`, `On_NoteDeleted(NoteId, IsLastNoteDeleted)` →
`onOnNoteDeleted`. Placeholders: none.

Markup (view :196-410), while IsSheetOpen: ConnectPatterns.BottomSheet (Title "Note", ExtendedClasses, ShowHeader,
FooterHeight 72px; OnToggle → BottomSheetOnToggle; Initialized → BottomSheetId) > content NoteListActions (Notes =
In_Notes, In_ItemId, In_NoteCategoryId, In_ShowPreviewOnly False), footer (unless a note is being edited) a
CustomContainer `notes-sheet-footer` (stylesheet `css/UBTConnect_Utils.CW_Notes.NotesSheet.css`) with AddNote; and a
BackNavigationHandler (its flow is empty). TST code of 2026-10-27:
`migration/screens/HouseholdDetails/analysis/sources/pretty/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`.

Controller (:416-944):

- OnParametersChanged opens (IsSheetOpen, then BottomSheetOpen with the initialized sheet id) or closes
  (DelaySetIsOpen JS `jsNodes.ts`, BottomSheetClose).
- BottomSheetOnToggle(IsOpen): IsSheetOpen = IsOpen; a close while In_IsOpen is True runs Handler_OnNoteSheet_Closed
  (IsEditing False, On_NoteSheet_Closed).
- Handler_OnSubmitNote → `AddNote(NoteCategoryId, ItemId, Note)`:
  - Success → New_Notes = the added note (its Id and dates, the typed text) then In_Notes' notes, Total + 1,
    On_NotesChanged, "Note added".
  - Else / UserException: "Couldn't add note…".
  - CommunicationException: raises the UserException `UBTConnect_Utils.CommunicationError` ("NoteCommunicationError").
- OnSaveEditNote of the list → On_NotesChanged.

## Data and writes

`api.ts`: AddNote (`ServiceAPIAddNote`, original input names). `mocks.ts`: never recorded; adds the note to the
in-memory notes collection of `../NoteListActions/mocks.ts` (P-MUTATION), nothing is written for real.

## Captured variants (1 distinct in the pack; 2 tested)

| Capture | Source                    | What it shows             |
| ------- | ------------------------- | ------------------------- |
| v1      | HouseholdCarousel/default | closed: the root is empty |
| v2      | Notes/loading             | closed: the root is empty |

## Not captured / not settled

- The open sheet (story `Open`) is in no capture: tested from the compiled view in `NotesSheet.test.tsx`.
- Add calls `CreateOrUpdate_LocalNote` (`src/platform/storage/localEntities`); the TST code of 2026-10-27 calls
  UBTConnect_Notes_MCS Create_LocalNote (no React port yet; the same row for a new note id). Other errors go to
  `raiseToFlowHandler` (Q-W3B-1 / Q-W3B-2, user 2026-10-15; NoteListActions README).
- Not ported: NoteText and IsSubmittingNote, sent to AddNote as In_Note and IsSubmitting. The React AddNote has no such
  inputs, and the new TST AddNote source is not in the captured sources (drift-WP4.md).
