import { callAction } from '../../../lib/api';

/* Server actions of CW_Notes.NoteListActions (P-DATA / P-CALLS), sent with the original input names. Both are writes:
   the mocks change the notes collection (P-MUTATION), nothing is written for real. */

/** UpdateNote (ServiceAPIUpdateNote, NoteListActions.mvc.js:318-350): Handler_OnSaveEditRequested. */
export async function updateNote(noteId: string, note: string): Promise<{ success: boolean; isNotFound: boolean }> {
  const out = await callAction('UBTConnect_Utils', 'ServiceAPIUpdateNote', { NoteId: noteId, Note: note });
  return { success: out.success, isNotFound: out.IsNotFound };
}

/** DeleteNoteByNoteId (ServiceAPIDeleteNoteByNoteId, NoteListActions.mvc.js:351-380): Handler_OnDeleteNoteRequested. */
export async function deleteNoteByNoteId(noteId: string): Promise<{ success: boolean; wasFound: boolean }> {
  const out = await callAction('UBTConnect_Utils', 'ServiceAPIDeleteNoteByNoteId', { NoteId: noteId });
  return { success: out.Success, wasFound: out.WasFound };
}
