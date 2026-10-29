import { callAction } from '@/api/client/callAction';
import { toAssembleBookmarkAdded, toBookmarkDeleted, toC2BookmarkAdded } from './mapper';
import type { AssembleBookmarkAdded, BookmarkDeleted, C2BookmarkAdded } from './types';

/* The server calls of the bookmark domain, called with their OutSystems names: the bookmark server actions of
   Connect2_Assemble_MUI and the bookmark service actions of UBTConnect. Each function makes one call. The callers (client
   actions) decide when to call. The writes are mocked: the real server never gets them. The calls of the blocks of
   Connect2_MyBookmarks_MUI went with the retired routes BookmarksByGroup and MyBookmarks (TST removed them; user
   decision 2026-10-28). The screen Bookmarks has its calls in bookmarkCards.ts. */

/** The server action AddBookmark(ObjectType, ObjectId, Group, Note) of Connect2_Assemble_MUI (a Connect2_MyBookmarks_BL
    write, called by ToggleBookmarkItem). Answers Success and the created bookmark with every field. */
export async function addAssembleBookmark(
  objectType: string,
  objectId: string,
  group: string,
  note: string,
): Promise<AssembleBookmarkAdded> {
  return toAssembleBookmarkAdded(
    await callAction('Connect2_Assemble_MUI', 'ActionAddBookmark', {
      ObjectType: objectType,
      ObjectId: objectId,
      Group: group,
      Note: note,
    }),
  );
}

/** The server action DeleteBookmarkByBookmarkId(BookmarkId) of Connect2_Assemble_MUI (called by ToggleBookmarkItem).
    A write. Answers Success. */
export async function deleteAssembleBookmark(bookmarkId: string): Promise<BookmarkDeleted> {
  return toBookmarkDeleted(
    await callAction('Connect2_Assemble_MUI', 'ActionDeleteBookmarkByBookmarkId', { BookmarkId: bookmarkId }),
  );
}

/** The service action AddBookmark2(In_BookmarkCategoryId, In_ItemId) of UBTConnect (called by ToggleBookmarkItem_C2).
    In_ItemId is the item id as text. A write. Answers Success and the id and the creation time of the bookmark. */
export async function addC2Bookmark(bookmarkCategoryId: string, itemId: string): Promise<C2BookmarkAdded> {
  return toC2BookmarkAdded(
    await callAction('UBTConnect', 'ServiceAPIAddBookmark2', {
      In_BookmarkCategoryId: bookmarkCategoryId,
      In_ItemId: itemId,
    }),
  );
}

/** The service action DeleteBookmarkByBookmarkId2(BookmarkId) of UBTConnect (called by ToggleBookmarkItem_C2). A
    write. Answers Success. */
export async function deleteC2Bookmark(bookmarkId: string): Promise<BookmarkDeleted> {
  return toBookmarkDeleted(
    await callAction('UBTConnect', 'ServiceAPIDeleteBookmarkByBookmarkId2', { BookmarkId: bookmarkId }),
  );
}
