import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/** Wire shapes (P-DATA): only mocks.ts uses them. */
type GetAllBookmarksByGroupOutput = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup'>
>;
export type BookmarkItemWire = GetAllBookmarksByGroupOutput['GetBookmarksGroupResponse']['Results']['List'][number];

/** Route inputs of UBTConnect.Legacy_MyBookmarks.BookmarksByGroup (BookmarksByGroup.mvc.js model, input BookmarkGroup
    Text, default ""). */
export interface BookmarksByGroupInputs {
  BookmarkGroup: string;
}

/* A bookmark of the block (Connect2_MyBookmarks_IS BookmarkItem with its DetailsJson fields, and DateCreatedUtc for the
   MyBookmarks cache: components/actions.ts, toCacheRecord), the outputs of DataActionGetAllBookmarksByGroup and of
   GetBookmarkById, and the block variables that the data action sends are domain types of api/bookmark. This module
   keeps the names that the block and its client actions use. */
export type {
  Bookmark as BookmarkItem,
  BookmarkByIdResult as GetBookmarkByIdResult,
  BookmarkDetails,
  BookmarkGroupList as BookmarksByGroupResult,
  BookmarkGroupListCallInputs as BookmarkGroupVariables,
} from '@/api/bookmark';

/** BookmarkNote (Connect2_LegacyShared.BookmarkNoteRec). */
export interface BookmarkNote {
  bookmarkId: string;
  note: string;
}
