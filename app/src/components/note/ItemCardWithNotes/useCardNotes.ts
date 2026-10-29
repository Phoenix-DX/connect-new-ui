import { useState } from 'react';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';

/** The item of a card with notes: the hook reads and replaces only its notes. */
export interface ItemWithNotes {
  notes: Notes;
}

/** Handler_OnNoteDeleted of the cards with notes (Bookmarks_Card_Item.mvc.js :519-571, NoteCard_Item.mvc.js): the
    item without the note of that id (an omitted Id is "0"), Total = the length of the list. No note with the id: the
    same item. */
export function withoutNote<T extends ItemWithNotes>(item: T, noteId: string): T {
  const list = item.notes.Note_Item_List ?? [];
  const index = list.findIndex((n) => (n.Id ?? '0') === noteId);
  if (index === -1) return item;
  const next = list.filter((_, i) => i !== index);
  return { ...item, notes: { Total: next.length, Note_Item_List: next } };
}

/** The state of a card with notes (Bookmarks_Card_Item, NoteCard_Item): the block's own copy of the input item (a new
    input replaces it), IsAddNote (the NotesSheet is open), Handler_OnNotesChanged (replaces the notes) and
    `removeNote` (the local part of Handler_OnNoteDeleted). Each card decides when to call `removeNote`. */
export function useCardNotes<T extends ItemWithNotes>(input: T) {
  const [prevInput, setPrevInput] = useState(input);
  const [item, setItem] = useState(input);
  if (prevInput !== input) {
    setPrevInput(input);
    setItem(input);
  }
  const [isAddNote, setIsAddNote] = useState(false);
  const openNoteSheet = () => {
    setIsAddNote(true);
  };
  const closeNoteSheet = () => {
    setIsAddNote(false);
  };
  const handler_OnNotesChanged = (newNotes: Notes) => {
    setItem((prev) => ({ ...prev, notes: newNotes }));
  };
  const removeNote = (noteId: string) => {
    setItem((prev) => withoutNote(prev, noteId));
  };
  return { item, isAddNote, openNoteSheet, closeNoteSheet, handler_OnNotesChanged, removeNote };
}

export type CardNotes<T extends ItemWithNotes> = ReturnType<typeof useCardNotes<T>>;
