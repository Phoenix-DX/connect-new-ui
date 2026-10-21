import { callAction } from '../../../lib/api';

/** AddNote (ServiceAPIAddNote, NotesSheet.mvc.js:432-460): Handler_OnAddNoteRequested, ItemId as text. A write: the
    mock adds to the notes collection (P-MUTATION), nothing is written for real. */
export async function addNote(noteCategoryId: string, itemId: string, note: string) {
  const out = await callAction('UBTConnect_Utils', 'ServiceAPIAddNote', {
    NoteCategoryId: noteCategoryId,
    ItemId: itemId,
    Note: note,
  });
  return { success: out.Success, noteAdded: out.Note_Added };
}
