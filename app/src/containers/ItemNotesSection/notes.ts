import type { Notes } from '@/lib/ubtConnectLibrary/structures';

/** The default of an EventNotes variable (UBTConnectLibrary Notes): Total 0, an empty list. */
export const NO_NOTES: Notes = { Total: 0, Note_Item_List: [] };

/** Handler_OnNoteDeleted of the two users of ItemNotesSection (ScreenBlock_EventDetail.mvc.js:1864-1910,
    ScreenBlock_EventDetail_V2.mvc.js:2563-2614): ListAppend of every note whose Id is not NoteId (an omitted Id is
    "0"), then Total = the length of the list. */
export function notesWithoutNote(notes: Notes, noteId: string): Notes {
  const list = (notes.Note_Item_List ?? []).filter((n) => (n.Id ?? '0') !== noteId);
  return { Total: list.length, Note_Item_List: list };
}
