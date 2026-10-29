import type { ReactNode } from 'react';
import { child } from '@/components/ui/os/blockIds';
import { ItemCard_WithNotes } from '@/components/note/ItemCardWithNotes';
import type { CardNotes } from '@/components/note/ItemCardWithNotes/useCardNotes';
import { NotesSheet } from '@/components/note/NotesSheet';
import { NoteListActionsContainer } from '@/containers/NoteListActions';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';

/** The fields of a card item that the card with notes shows (BookmarkCardItem, NoteCardItem). */
export interface CardWithNotesItem {
  itemId: string;
  title: string;
  subtitle: string;
  sourceHeader: { label: string; imageURL: string; initials: string; iconId: string };
  channelName: string;
  channelLogo: string;
  publishedAt: string;
  notes: Notes;
}

interface CardWithNotesSheetProps extends Omit<CardNotes<CardWithNotesItem>, 'removeNote'> {
  /** Scope of the card block (`scopeOf(id)`): the children are `$b1` (ItemCard_WithNotes), `$b2` (NoteListActions)
      and `$b4` (NotesSheet); `$b3` is the `actions` slot of the card. */
  scope: string;
  /** Note category of the note blocks (Bookmarks: the bookmark category; Notes: the note category). */
  noteCategoryId: string;
  inSearchString: string;
  /** Event OnClickCardItem. */
  onOnClickCardItem?: () => void;
  /** Handler_OnNoteDeleted of the card (each card has its own: local delete, or UpdateNoteCardsList for the last). */
  onNoteDeleted: (noteId: string, wasLastNote: boolean) => void;
  /** Placeholder Actions of ItemCard_WithNotes (the ItemCardActions of the card). */
  actions: ReactNode;
}

/** The body of the cards with notes (Bookmarks_Card_Item.mvc.js view :160-430, NoteCard_Item.mvc.js view):
    ItemCard_WithNotes with the source header, title, subtitle, channel and total notes, the note preview
    (NoteListActions, only when the card has notes), the card actions, and the NotesSheet (IsAddNote). A container,
    because the note preview is the NoteListActions container (2 pages share it). */
export function CardWithNotesSheet({
  scope,
  item,
  isAddNote,
  openNoteSheet,
  closeNoteSheet,
  handler_OnNotesChanged,
  noteCategoryId,
  inSearchString,
  onOnClickCardItem,
  onNoteDeleted,
  actions,
}: CardWithNotesSheetProps) {
  const notes = item.notes;
  return (
    <>
      <ItemCard_WithNotes
        id={child(scope, 1)}
        inSearchString={inSearchString}
        inTotalNotes={String(notes.Total ?? 0)}
        inTitle={item.title}
        inSubtitle={item.subtitle}
        inLabel={item.sourceHeader.label}
        avatarImage={{
          URL: item.sourceHeader.imageURL,
          FallbackOptions: { Initials: item.sourceHeader.initials, IconId: item.sourceHeader.iconId },
        }}
        inChannelName={item.channelName}
        inChannelLogo={item.channelLogo}
        inPublishedAt={item.publishedAt}
        onOnClickItemCard={onOnClickCardItem}
        onOnClickTotalNotesIcon={openNoteSheet}
        notes={
          (notes.Note_Item_List ?? []).length > 0 && (
            <NoteListActionsContainer
              id={child(scope, 2)}
              inNoteCategoryId={noteCategoryId}
              inSearchString={inSearchString}
              inItemId={item.itemId}
              notes={notes}
              inShowPreviewOnly
              onOnShowAllNotesRequested={openNoteSheet}
              onOnSaveEditNote={handler_OnNotesChanged}
              onOnNoteDeleted={onNoteDeleted}
            />
          )
        }
        actions={actions}
      />
      <NotesSheet
        id={child(scope, 4)}
        inIsOpen={isAddNote}
        inItemId={item.itemId}
        inNotes={notes}
        inNoteCategoryId={noteCategoryId}
        onOnNoteSheetClosed={closeNoteSheet}
        onOnNoteDeleted={onNoteDeleted}
        onOnNotesChanged={handler_OnNotesChanged}
      />
    </>
  );
}
