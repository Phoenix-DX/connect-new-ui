import { callAction } from '@/api/client/callAction';
import {
  toAssembleBookmarkAdded,
  toBookmarkByIdResult,
  toBookmarkDeleted,
  toBookmarkGroupList,
  toBookmarkGroupSummaries,
  toBookmarkSummariesVariablesWire,
  toC2BookmarkAdded,
} from './mapper';
import type {
  AssembleBookmarkAdded,
  BookmarkByIdResult,
  BookmarkDeleted,
  BookmarkGroupList,
  BookmarkGroupListCallInputs,
  BookmarkGroupSummaries,
  BookmarkSummariesVariables,
  C2BookmarkAdded,
} from './types';

/* The server calls of the bookmark domain, called with their OutSystems names and owners: the blocks
   ScreenBlock_BookmarkGroup and ScreenBlock_MyBookmarks and the server actions of Connect2_MyBookmarks_MUI, the bookmark
   server actions of Connect2_Assemble_MUI, and the bookmark service actions of UBTConnect. Each function makes one
   call. The callers decide when to call (block flows and client actions). The writes are mocked: the real server never
   gets them. */

/** DataActionGetAllBookmarksByGroup of ScreenBlock_BookmarkGroup: the bookmarks of a group. The block fetches it on
    demand only. The inputs are the scalar block variables. The record and list variables (BookmarkedItems,
    EditingBookmarkNote, ShareableObject_Generic) are not sent: they echo the client state, and the server answer does
    not depend on them. */
export async function fetchBookmarkGroup(inputs: BookmarkGroupListCallInputs): Promise<BookmarkGroupList> {
  return toBookmarkGroupList(
    await callAction('Connect2_MyBookmarks_MUI', 'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup', inputs),
  );
}

/** DataActionGetGroupSummaries of ScreenBlock_MyBookmarks: the summary of each bookmark group. The block fetches it on
    demand only. The call sends every block variable, as OutSystems does. */
export async function fetchBookmarkGroupSummaries(
  variables: BookmarkSummariesVariables,
): Promise<BookmarkGroupSummaries> {
  return toBookmarkGroupSummaries(
    await callAction(
      'Connect2_MyBookmarks_MUI',
      'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries',
      toBookmarkSummariesVariablesWire(variables),
    ),
  );
}

/** The client action GetBookmarkById(In_BookmarkId) of Connect2_MyBookmarks_MUI: when GetHasBookmarNote is true
    (`hasBookmarkNote`, the flag mobileDirectoryBookmarkNote, off on TST) the server action New_GetBookmarkById, else the
    server action GetBookmarkById. Both have the same inputs and outputs. */
export async function fetchBookmarkById(bookmarkId: string, hasBookmarkNote: boolean): Promise<BookmarkByIdResult> {
  return toBookmarkByIdResult(
    hasBookmarkNote
      ? await callAction('Connect2_MyBookmarks_MUI', 'ActionNew_GetBookmarkById', { BookmarkId: bookmarkId })
      : await callAction('Connect2_MyBookmarks_MUI', 'ActionGetBookmarkById', { BookmarkId: bookmarkId }),
  );
}

/** The server action DeleteBookmarkByBookmarkId of Connect2_MyBookmarks_MUI (ScreenBlock_BookmarkGroup). A write.
    Answers Success. */
export async function deleteBookmark(bookmarkId: string): Promise<boolean> {
  const out = await callAction('Connect2_MyBookmarks_MUI', 'ActionDeleteBookmarkByBookmarkId', {
    BookmarkId: bookmarkId,
  });
  return out.Success;
}

/** The server action New_UpdateBookmarkNote of Connect2_MyBookmarks_MUI (ScreenBlock_BookmarkGroup). The caller trims
    the note. A write. Answers Success. */
export async function updateBookmarkNote(bookmarkId: string, note: string): Promise<boolean> {
  const out = await callAction('Connect2_MyBookmarks_MUI', 'ActionNew_UpdateBookmarkNote', {
    BookmarkId: bookmarkId,
    Note: note,
  });
  return out.Success;
}

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
