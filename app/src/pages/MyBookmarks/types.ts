import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* Wire shapes of the contract (Connect2_MyBookmarks_IS structures, src/api/openapi.yaml), taken from the outputs of
   GetGroupSummaries: only mocks.ts uses them. */
type GetGroupSummariesOutput = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries'>
>;
export type GroupSummaryWire = GetGroupSummariesOutput['Bookmarks_Contacts'];
export type BookmarkItemWire = GroupSummaryWire['Bookmarks']['List'][number];

/* A bookmark of the block (Connect2_MyBookmarks_IS BookmarkItem, the fields the block reads), a group summary
   (GetGroupSummariesResponse), the outputs of GetGroupSummaries and of GetBookmarkById, and the local variables of
   ScreenBlock_MyBookmarks (which GetGroupSummaries sends) are domain types of api/bookmark. This module keeps the names
   that the block uses (rule 9: no `{ List }`, no "" as null). */
export type {
  BookmarkByIdResult,
  BookmarkGroupSummaries as GroupSummaries,
  BookmarkGroupSummary as GroupSummary,
  BookmarkSummariesVariables as MyBookmarksModel,
  GroupSummaryBookmark as BookmarkItem,
} from '@/api/bookmark';
