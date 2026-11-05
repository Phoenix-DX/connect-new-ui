import { callAction } from '@/api/client/callAction';
import { toBookmarkDeleted, toC2BookmarkAdded } from './mapper';
import type { BookmarkDeleted, C2BookmarkAdded } from './types';

/* The server calls of the bookmark domain, called with their OutSystems names: the bookmark service actions of
   UBTConnect_Utils (live module of 2026-11-05: TST moved them, with ToggleBookmarkItem_C2, from UBTConnect; the legacy
   writes of Connect2_Assemble_MUI are gone). Each function makes one call. The callers (client actions) decide when to
   call. The writes are mocked: the real server never gets them. The screen Bookmarks has its calls in
   bookmarkCards.ts. */

/** The service action AddBookmark2(In_BookmarkCategoryId, In_ItemId) of UBTConnect_Utils (UBTConnect_Utils
    .controller.js:5819-5835; called by ToggleBookmarkItem_C2). In_ItemId is the item id as text. A write. Answers
    Success and the id and the creation time of the bookmark. */
export async function addC2Bookmark(bookmarkCategoryId: string, itemId: string): Promise<C2BookmarkAdded> {
  return toC2BookmarkAdded(
    await callAction('UBTConnect_Utils', 'ServiceAPIAddBookmark2', {
      In_BookmarkCategoryId: bookmarkCategoryId,
      In_ItemId: itemId,
    }),
  );
}

/** The service action DeleteBookmarkByBookmarkId2(BookmarkId) of UBTConnect_Utils (UBTConnect_Utils
    .controller.js:5892-5906; called by ToggleBookmarkItem_C2). A write. Answers Success (WasFound has no reader). */
export async function deleteC2Bookmark(bookmarkId: string): Promise<BookmarkDeleted> {
  return toBookmarkDeleted(
    await callAction('UBTConnect_Utils', 'ServiceAPIDeleteBookmarkByBookmarkId2', { BookmarkId: bookmarkId }),
  );
}
