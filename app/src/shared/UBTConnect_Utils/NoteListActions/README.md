# NoteListActions

OutSystems: `UBTConnect_Utils.CW_Notes.NoteListActions` · pack
`migration/blocks/UBTConnect_Utils.CW_Notes.NoteListActions.md` (compiled source
`migration/blocks/sources/UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js`)

| Input              | Type           | Prop                | Default |
| ------------------ | -------------- | ------------------- | ------- |
| Notes              | Notes (record) | `notes`             | `{}`    |
| In_ItemId          | Long Integer   | `inItemId`          | `'0'`   |
| In_NoteCategoryId  | Text           | `inNoteCategoryId`  | `''`    |
| In_ShowPreviewOnly | Boolean        | `inShowPreviewOnly` | `false` |
| In_SearchString    | Text           | `inSearchString`    | `''`    |

The pack lists no input; they are in the compiled model (:12-47). Events: `OnSaveEditNote(Notes)` →
`onOnSaveEditNote`, `On_EditingStateChanged(In_IsEditing)` → `onOnEditingStateChanged`, `On_NoteDeleted(NoteId,
IsLastNoteDeleted)` → `onOnNoteDeleted`, `On_ShowAllNotesRequested` → `onOnShowAllNotesRequested`. Placeholders: none.

Markup: Note_Item_List (In_ShowPreviewOnly, In_SearchString, In_EditingNoteId = EditingNoteId, Notes = NotesData).

Controller:

- NotesData = Notes on initialize and on every parameter change.
- Edit request → EditingNoteId, On_EditingStateChanged(True).
- Cancel → 0, False.
- Save → `UpdateNote(NoteId, Note)`:
  - Success → the text of the note and DateEditedUtc = CurrDateTime (after `CreateOrUpdate_LocalNote`), OnSaveEditNote,
    On_EditingStateChanged(False), "Note updated".
  - IsNotFound → `Delete_LocalNoteByNoteId`, the note removed, same events, "This note no longer exists".
  - Else → "Couldn't save your changes…".
- Delete → `DeleteNoteByNoteId(NoteId)`:
  - Success → `Delete_LocalNoteByNoteId`, On_NoteDeleted(NoteId, Notes has 1 note), "Note deleted".
  - Else → "Couldn't delete note…".

Messages: `Note_SendFeedbackMessages` (`../lib/actions.ts`). Local copy: `src/platform/storage/localEntities` (Q-W3B-1, user 2026-10-15).

Errors (Q-W3B-2, user 2026-10-15):

- Save catches UserException only (:600-618). Any other error goes to `raiseToFlowHandler` (`src/legacy/os/exceptions.ts`):
  communication → ShowCommunicationExceptionMessage, else ShowExceptionMessage(message, False).
- Delete catches every non-system error (:740-756) with "Couldn't delete note…".
- `callAction` raises the own exception of the server. Save catches a server UserException. A failed request is a
  CommunicationException and goes up.

## Data and writes

`api.ts`: UpdateNote (`ServiceAPIUpdateNote`) and DeleteNoteByNoteId (`ServiceAPIDeleteNoteByNoteId`), original input
names. `mocks.ts`: never recorded. Both mocks change the in-memory notes collection `CW_Notes.notes` (fictional seed, ids
501-503). Nothing is written for real.

## Not captured

No capture renders this block (the notes sheet is closed in every capture). Stories: `CompiledView`, `Preview`. Tests:
`NoteListActions.test.tsx` (edit, not found, delete, failure).

## Not settled

- NewNotes = NotesData: the React component also shows the change in its own NotesData (OutSystems shares the record).
