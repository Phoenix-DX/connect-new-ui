# NotesSheet

OutSystems: `UBTConnect_Utils.CW_Notes.NotesSheet` · pack `migration/blocks/UBTConnect_Utils.CW_Notes.NotesSheet.md`
(compiled source `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`)

| Input             | Type           | Prop               | Default |
| ----------------- | -------------- | ------------------ | ------- |
| In_IsOpen         | Boolean        | `inIsOpen`         | `false` |
| ExtendedClasses   | Text           | `extendedClasses`  | `''`    |
| In_ItemId         | Long Integer   | `inItemId`         | `'0'`   |
| In_NoteCategoryId | Text           | `inNoteCategoryId` | `''`    |
| In_Notes          | Notes (record) | `inNotes`          | `{}`    |

The pack lists no input; they are in the compiled model (:13-51). Events: `On_NotesChanged(Notes)` →
`onOnNotesChanged`, `On_NoteSheet_Closed` → `onOnNoteSheetClosed`, `On_NoteDeleted(NoteId, IsLastNoteDeleted)` →
`onOnNoteDeleted`. Placeholders: none.

Markup (view :196-410), while IsSheetOpen: ConnectPatterns.BottomSheet (Title "Note", ExtendedClasses, ShowHeader,
FooterHeight 72px; OnClose → On_NoteSheet_Closed; Initialized → BottomSheetId) > content NoteListActions (Notes =
In_Notes, In_ItemId, In_NoteCategoryId, In_ShowPreviewOnly False), footer AddNote unless a note is being edited; and a
BackNavigationHandler (its flow is empty).

Controller (:416-944):

- OnParametersChanged opens (IsSheetOpen, then BottomSheetOpen with the initialized sheet id) or closes
  (DelaySetIsOpen JS `jsNodes.ts`, BottomSheetClose).
- Handler_OnAddNoteRequested → `AddNote(NoteCategoryId, ItemId, Note)`:
  - Success → New_Notes = the added note (its Id and dates, the typed text) then In_Notes' notes, Total + 1,
    On_NotesChanged, "Note added".
  - Else / error: "Couldn't add note…".
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
- Add calls `CreateOrUpdate_LocalNote` (:518-521, `src/platform/storage/localEntities`) and catches UserException only (:549-565);
  other errors go to `raiseToFlowHandler` (Q-W3B-1 / Q-W3B-2, user 2026-10-15; NoteListActions README).
