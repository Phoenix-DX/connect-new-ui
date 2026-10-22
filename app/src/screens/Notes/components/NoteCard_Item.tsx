// @os-block UBTConnect.Notes.NoteCard_Item
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { NoteListActions } from '../../../shared/UBTConnect_Utils/NoteListActions';
import { NotesSheet } from '../../../shared/UBTConnect_Utils/NotesSheet';
import type { Notes } from '../../../shared/UBTConnectLibrary/lib/structures';
import type { NoteCardItem } from '../types';
import { child, scopeOf } from './ids';
import { ItemCard_WithNotes } from './ItemCard_WithNotes';
import { ItemCardActions } from './ItemCardActions';

export interface NoteCard_ItemProps {
  id?: string;
  noteCardItem: NoteCardItem;
  inSearchString?: string;
  onOnClickCardItem?: () => void;
  /** Event UpdateNoteCardsList(NoteCard_Id, NoteCard_ItemId, NoteCard_NoteCategoryId). */
  onUpdateNoteCardsList?: (id: string, itemId: string, noteCategoryId: string) => void;
}

/** One note card (survey UBTConnect.Notes.NoteCard_Item.mvc.js): ItemCard_WithNotes with the note preview
    (NoteListActions, only when the card has notes), the Add Note action and the NotesSheet (IsAddNote). The block
    keeps its own copy of NoteCardItem: Handler_OnNotesChanged replaces its notes, Handler_OnNoteDeleted removes the
    note (Total = length) or, for the last note, raises UpdateNoteCardsList. */
export function NoteCard_Item({
  id,
  noteCardItem,
  inSearchString = '',
  onOnClickCardItem,
  onUpdateNoteCardsList,
}: NoteCard_ItemProps) {
  const p = scopeOf(id);
  const [input, setInput] = useState(noteCardItem);
  const [item, setItem] = useState(noteCardItem);
  if (input !== noteCardItem) {
    setInput(noteCardItem);
    setItem(noteCardItem);
  }
  const [isAddNote, setIsAddNote] = useState(false);
  const notes = item.notes;
  const openNoteSheet = () => {
    setIsAddNote(true);
  };
  const handler_OnNotesChanged = (newNotes: Notes) => {
    setItem((prev) => ({ ...prev, notes: newNotes }));
  };
  const handler_OnNoteDeleted = (noteId: string, wasLastNote: boolean) => {
    if (wasLastNote) {
      onUpdateNoteCardsList?.(item.id, item.itemId, item.noteCategoryId);
      return;
    }
    setItem((prev) => {
      const list = prev.notes.Note_Item_List ?? [];
      const index = list.findIndex((n) => (n.Id ?? '0') === noteId);
      if (index === -1) return prev;
      const next = list.filter((_, i) => i !== index);
      return { ...prev, notes: { Total: next.length, Note_Item_List: next } };
    });
  };
  return (
    <OSBlock name="Notes.NoteCard_Item" id={id}>
      <ItemCard_WithNotes
        id={child(p, 1)}
        inSearchString={inSearchString}
        inTotalNotes={String(notes.Total ?? 0)}
        inTitle={item.title}
        inSubtitle={item.subtitle}
        inLabel={item.sourceHeader.label}
        avatarImage={{
          URL: item.sourceHeader.imageURL,
          FallbackOptions: { Initials: item.sourceHeader.initials, IconId: item.sourceHeader.iconId },
        }}
        onOnClickItemCard={onOnClickCardItem}
        onOnClickTotalNotesIcon={openNoteSheet}
        notes={
          (notes.Note_Item_List ?? []).length > 0 && (
            <NoteListActions
              id={child(p, 2)}
              inNoteCategoryId={item.noteCategoryId}
              inSearchString={inSearchString}
              inItemId={item.itemId}
              notes={notes}
              inShowPreviewOnly
              onOnShowAllNotesRequested={openNoteSheet}
              onOnSaveEditNote={handler_OnNotesChanged}
              onOnNoteDeleted={handler_OnNoteDeleted}
            />
          )
        }
        actions={
          <ItemCardActions
            id={child(p, 3)}
            objectId={item.itemId}
            actionBarOptions={{ showUnbookmark: false, showAddNote: true, showShare: false }}
            onEventAddNote={openNoteSheet}
          />
        }
      />
      <NotesSheet
        id={child(p, 4)}
        inIsOpen={isAddNote}
        inItemId={item.itemId}
        inNotes={notes}
        inNoteCategoryId={item.noteCategoryId}
        onOnNoteSheetClosed={() => {
          setIsAddNote(false);
        }}
        onOnNoteDeleted={handler_OnNoteDeleted}
        onOnNotesChanged={handler_OnNotesChanged}
      />
    </OSBlock>
  );
}
