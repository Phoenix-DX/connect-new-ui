/** @origin UBTConnect.Notes.NoteCard_Item */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ItemCardActions } from '@/components/note/ItemCardActions';
import { useCardNotes } from '@/components/note/ItemCardWithNotes/useCardNotes';
import { CardWithNotesSheet } from '@/containers/CardWithNotes';
import type { NoteCardItem } from '@/api/note';
import { child, scopeOf } from './ids';

export interface NoteCard_ItemProps {
  id?: string;
  noteCardItem: NoteCardItem;
  inSearchString?: string;
  onOnClickCardItem?: () => void;
  /** Event UpdateNoteCardsList(NoteCard_Id, NoteCard_ItemId, NoteCard_NoteCategoryId). */
  onUpdateNoteCardsList?: (id: string, itemId: string, noteCategoryId: string) => void;
}

/** One note card (survey UBTConnect.Notes.NoteCard_Item.mvc.js): the card with notes (`containers/CardWithNotes`:
    ItemCard_WithNotes with the event dates of NoteCardContent (TST publish of 2026-10-29), the note preview and the
    NotesSheet), with the Add Note action. The block keeps its own copy of
    NoteCardItem (`useCardNotes`): Handler_OnNotesChanged replaces its notes, Handler_OnNoteDeleted removes the note
    (Total = length) or, for the last note, raises UpdateNoteCardsList. */
export function NoteCard_Item({
  id,
  noteCardItem,
  inSearchString = '',
  onOnClickCardItem,
  onUpdateNoteCardsList,
}: NoteCard_ItemProps) {
  const p = scopeOf(id);
  const { removeNote, ...card } = useCardNotes(noteCardItem);
  const { item } = card;
  const handler_OnNoteDeleted = (noteId: string, wasLastNote: boolean) => {
    if (wasLastNote) {
      onUpdateNoteCardsList?.(item.id, item.itemId, item.noteCategoryId);
      return;
    }
    removeNote(noteId);
  };
  return (
    <OSBlock name="Notes.NoteCard_Item" id={id}>
      <CardWithNotesSheet
        {...card}
        scope={p}
        noteCategoryId={item.noteCategoryId}
        inSearchString={inSearchString}
        onOnClickCardItem={onOnClickCardItem}
        onNoteDeleted={handler_OnNoteDeleted}
        actions={
          <ItemCardActions
            id={child(p, 3)}
            objectId={item.itemId}
            actionBarOptions={{ showUnbookmark: false, showAddNote: true, showShare: false }}
            onEventAddNote={card.openNoteSheet}
          />
        }
      />
    </OSBlock>
  );
}
