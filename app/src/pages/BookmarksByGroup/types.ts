import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/** Wire shapes (P-DATA): only mocks.ts uses them. */
type GetAllBookmarksByGroupOutput = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup'>
>;
export type BookmarkItemWire = GetAllBookmarksByGroupOutput['GetBookmarksGroupResponse']['Results']['List'][number];

/** BookmarkNote (Connect2_LegacyShared.BookmarkNoteRec): the note of a bookmark that the note dialogs edit. */
export interface BookmarkNote {
  bookmarkId: string;
  note: string;
}
