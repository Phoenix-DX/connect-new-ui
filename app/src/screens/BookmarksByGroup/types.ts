import type { ActionOutputs, PathOf } from '../../lib/api';

/** Wire shapes (P-DATA): only api.ts and mocks.ts use them. */
type GetAllBookmarksByGroupOutput = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup'>
>;
export type BookmarkItemWire = GetAllBookmarksByGroupOutput['GetBookmarksGroupResponse']['Results']['List'][number];

/** Route inputs of UBTConnect.Legacy_MyBookmarks.BookmarksByGroup (BookmarksByGroup.mvc.js model, input BookmarkGroup
    Text, default ""). */
export interface BookmarksByGroupInputs {
  BookmarkGroup: string;
}

/** DetailsJson of a bookmark (Connect2_MyBookmarks_IS.DetailsJsonRec); Long Integers stay text. */
export interface BookmarkDetails {
  areasServed: string;
  childrenNames: string;
  countryName: string;
  householdCount: string;
  isDeceased: boolean;
  isMainHall: boolean;
  localityId: string;
  localityName: string;
  shareObjectTypeId: string;
}

/** BookmarkItem (Connect2_MyBookmarks_IS.BookmarkItemRec), the fields the block reads. */
export interface BookmarkItem {
  /** Id (Long Integer): the bookmark id. */
  id: string;
  /** ObjectId (Text): the bookmarked household, locality, subdivision or entity. */
  objectId: string;
  objectType: string;
  title: string;
  image: string;
  note: string;
  recordDisabled: boolean;
  recordNotAvailable: boolean;
  details: BookmarkDetails;
}

/** Output of DataActionGetAllBookmarksByGroup: GetBookmarksGroupResponse (Results, Total) and WasSearched. */
export interface BookmarksByGroupResult {
  results: BookmarkItem[];
  /** Total (Long Integer, text). */
  total: string;
  wasSearched: boolean;
}

/** The block variables DataActionGetAllBookmarksByGroup sends (screenData; see api.ts). */
export interface BookmarkGroupVariables {
  BookmarkGroup: string;
  ShowSearch: boolean;
  SearchString: string;
  SortColumn: string;
  IsFetchingBookmarks: boolean;
  UpdatedTotal: string;
  WasSearchDone: boolean;
  SearchString_SearchDone: string;
  IsFromNavigationHistory: boolean;
  IsShareOpen: boolean;
  ShareableObjectId: string;
  Type_ShareObjectId: string;
}

/** BookmarkNote (Connect2_LegacyShared.BookmarkNoteRec). */
export interface BookmarkNote {
  bookmarkId: string;
  note: string;
}

/** GetBookmarkById outputs (Connect2_MyBookmarks_MUI.GetBookmarkById$outVars): Out_BookmarkItem, IsBookmarkFound. */
export interface GetBookmarkByIdResult {
  item: BookmarkItem;
  isBookmarkFound: boolean;
}
