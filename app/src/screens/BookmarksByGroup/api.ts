import type { BookmarksByGroupInputs } from './types';

/** Screen inputs from the query string with the original names (P-PARAMS; BookmarksByGroup.mvc.js model: BookmarkGroup
    Text, "" when absent). */
export function readInputs(params: URLSearchParams): BookmarksByGroupInputs {
  return { BookmarkGroup: params.get('BookmarkGroup') ?? '' };
}

/* The calls of ScreenBlock_BookmarkGroup are in the domain api/bookmark: the data action GetAllBookmarksByGroup (sent
   with the scalar block variables), the client action GetBookmarkById (GetHasBookmarNote → New_GetBookmarkById, else
   GetBookmarkById; CR-BookmarksByGroup-1) and the writes DeleteBookmarkByBookmarkId and New_UpdateBookmarkNote. The
   wire → row mapper is there too: the block uses it to map the BookmarkItem records of the MyBookmarks cache back to
   rows (components/actions.ts, fromCacheRecord). This module keeps the names that the block uses. */
export {
  deleteBookmark as deleteBookmarkByBookmarkId,
  fetchBookmarkById as getBookmarkById,
  fetchBookmarkGroup as getAllBookmarksByGroup,
  toBookmark as toBookmarkItem,
  updateBookmarkNote as new_UpdateBookmarkNote,
} from '@/api/bookmark';
