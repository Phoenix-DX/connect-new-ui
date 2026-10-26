/* The service action AddNote of CW_Notes.NotesSheet (Handler_OnAddNoteRequested, ItemId as text) is in the domain
   api/note. A write: the mock adds to the notes collection (P-MUTATION), nothing is written for real. This module keeps
   the name that the block uses. */
export { addNote } from '@/api/note';
