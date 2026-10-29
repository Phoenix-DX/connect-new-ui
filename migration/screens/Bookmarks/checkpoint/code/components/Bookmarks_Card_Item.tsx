/** @origin UBTConnect.Bookmarks.Bookmarks_Card_Item */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { child, scopeOf } from '@/components/ui/os/blockIds';
import { ItemCardActions } from '@/components/note/ItemCardActions';
import { useCardNotes } from '@/components/note/ItemCardWithNotes/useCardNotes';
import { CardWithNotesSheet } from '@/containers/CardWithNotes';
import type { BookmarkCardItem } from '@/api/bookmark';

interface Bookmarks_Card_ItemProps {
  id?: string;
  bookmark_CardItem: BookmarkCardItem;
  inSearchString?: string;
  unbookmark?: (objectId: string, bookmarkType: string) => Promise<unknown>;
  /** Event OnClickCardItem. */
  onOnClickCardItem?: () => void;
  /** Event Item_Unbookmarked. */
  onItem_Unbookmarked?: () => void;
}

/** One bookmark card (Bookmarks_Card_Item.mvc.js view :160-430): the card with notes (`containers/CardWithNotes`:
    ItemCard_WithNotes with the source header, title, subtitle and total notes of Bookmark_Card_Content, the note
    preview and the NotesSheet), with ItemCardActions (Unmark and Add Note; ObjectId = ItemId, BookmarkType =
    BookmarkCategoryId). The block keeps its own copy of the card (`useCardNotes`): Handler_OnNotesChanged replaces its
    notes, Handler_OnNoteDeleted (:519-571) removes the note and sets Total to the length of the list. The note category
    of the note blocks is the bookmark category (the identifiers of both static entities are the same texts). */
export function Bookmarks_Card_Item({
  id,
  bookmark_CardItem,
  inSearchString = '',
  unbookmark,
  onOnClickCardItem,
  onItem_Unbookmarked,
}: Bookmarks_Card_ItemProps) {
  const p = scopeOf(id);
  const { removeNote, ...card } = useCardNotes(bookmark_CardItem);
  const { item } = card;
  return (
    <OSBlock name="Bookmarks.Bookmarks_Card_Item" id={id}>
      <CardWithNotesSheet
        {...card}
        scope={p}
        noteCategoryId={item.bookmarkCategoryId}
        inSearchString={inSearchString}
        onOnClickCardItem={onOnClickCardItem}
        onNoteDeleted={removeNote}
        actions={
          <ItemCardActions
            id={child(p, 3)}
            objectId={item.itemId}
            bookmarkType={item.bookmarkCategoryId}
            actionBarOptions={{ showUnbookmark: true, showAddNote: true, showShare: false }}
            toggleBookmarkItem_C2={unbookmark}
            onEventItemUnbookmarked={onItem_Unbookmarked}
            onEventAddNote={card.openNoteSheet}
          />
        }
      />
    </OSBlock>
  );
}
