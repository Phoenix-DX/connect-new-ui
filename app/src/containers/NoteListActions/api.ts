/* The server actions of CW_Notes.NoteListActions, UpdateNote (Handler_OnSaveEditRequested) and DeleteNoteByNoteId
   (Handler_OnDeleteNoteRequested), are in the domain api/note. Both are writes: the mocks change the notes collection
   (P-MUTATION), nothing is written for real. This module keeps the names that the block uses. */
export { deleteNote as deleteNoteByNoteId, updateNote } from '@/api/note';
