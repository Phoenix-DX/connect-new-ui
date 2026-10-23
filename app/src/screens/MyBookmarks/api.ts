/* The calls of ScreenBlock_MyBookmarks are in the domain api/bookmark: the data action GetGroupSummaries (on demand
   only, sent with every block variable, HasBookmarks … HasNetworkError) and the client action GetBookmarkById
   (GetHasBookmarNote, the flag mobileDirectoryBookmarkNote, TST off → New_GetBookmarkById, else GetBookmarkById;
   CR-MyBookmarks-1). This module keeps the names that the block uses. */
export { fetchBookmarkById as getBookmarkById, fetchBookmarkGroupSummaries as getGroupSummaries } from '@/api/bookmark';
