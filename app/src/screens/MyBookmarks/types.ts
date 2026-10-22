import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* Wire shapes of the contract (Connect2_MyBookmarks_IS structures, src/api/openapi.yaml), taken from the outputs of
   GetGroupSummaries, and the domain types the components see (rule 9: no `{ List }`, no "" as null). */
export type GetGroupSummariesOutput = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries'>
>;
export type GroupSummaryWire = GetGroupSummariesOutput['Bookmarks_Contacts'];
export type BookmarkItemWire = GroupSummaryWire['Bookmarks']['List'][number];

/** Connect2_MyBookmarks_IS BookmarkItem: the fields the screen reads (A view, S NavigateTo_BookmarkedItem). */
export interface BookmarkItem {
  /** Long Integer as text. */
  id: string;
  group: string;
  objectType: string;
  /** Text holding a Long Integer (as on the wire). */
  objectId: string;
  title: string;
  image: string;
  isDeceased: boolean;
  recordDisabled: boolean;
  recordNotAvailable: boolean;
}

/** Connect2_MyBookmarks_IS GetGroupSummariesResponse (Group, TotalCount, Bookmarks). */
export interface GroupSummary {
  group: string;
  /** Long Integer as text. */
  totalCount: string;
  bookmarks: BookmarkItem[];
}

/** Outputs of GetGroupSummaries (S:9-34). */
export interface GroupSummaries {
  contacts: GroupSummary;
  locations: GroupSummary;
  communityBusinesses: GroupSummary;
  allContacts: BookmarkItem[];
  allLocations: BookmarkItem[];
  allCommunityBusiness: BookmarkItem[];
}

/** Local variables of ScreenBlock_MyBookmarks (S:40-80). */
export interface MyBookmarksModel extends GroupSummaries {
  hasBookmarks: boolean;
  isFetchingBookmarks: boolean;
  countSize: number;
  isNavigationFromHistory: boolean;
  hasNetworkError: boolean;
}

/** GetBookmarkById outputs (Connect2_MyBookmarks_MUI.controller.js GetBookmarkById). */
export interface BookmarkByIdResult {
  item: BookmarkItem;
  isBookmarkFound: boolean;
}
