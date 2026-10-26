/** The route inputs of BookmarksByGroup, from the query string by their original names.
    @origin UBTConnect.Legacy_MyBookmarks.BookmarksByGroup */
export interface BookmarksByGroupInputs {
  /** BookmarkGroup (Text, a MyBookmarks_Group identifier): "" when it is absent. */
  BookmarkGroup: string;
}

/** BookmarkGroup ("" when absent) from the query string. */
export function readBookmarksByGroupInputs(params: URLSearchParams): BookmarksByGroupInputs {
  return { BookmarkGroup: params.get('BookmarkGroup') ?? '' };
}
