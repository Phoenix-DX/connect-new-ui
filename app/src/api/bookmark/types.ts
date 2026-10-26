/* Domain types of the bookmark calls: the fields that the UI reads. The readers are the blocks ScreenBlock_BookmarkGroup
   (BookmarksByGroup) and ScreenBlock_MyBookmarks (MyBookmarks) of Connect2_MyBookmarks_MUI, the client action
   ToggleBookmarkItem of Connect2_Assemble_MUI (AssembleDetail) and the client action ToggleBookmarkItem_C2 of UBTConnect
   (Directory_EntityDetailsActions). Each type has the shape that its readers use today, so no caller changes: camelCase
   fields where a block mapped the record, the OutSystems names and nesting where the reader takes the record as it is.
   The wire types stay in src/api/schema.d.ts. Long Integer ids are text.
   There are two kinds of bookmark: the legacy bookmarks (Connect2_MyBookmarks_IS BookmarkItem: an object type, an
   object id, a group and a note) and the C2 bookmarks (Connect_Bookmarks_CS: a bookmark category and an item id). */

/* ---- Legacy bookmarks, as the blocks of Connect2_MyBookmarks_MUI read them ---- */

/** The DetailsJson fields of a legacy bookmark (Connect2_MyBookmarks_IS DetailsJson) that ScreenBlock_BookmarkGroup
    reads. */
export interface BookmarkDetails {
  areasServed: string;
  childrenNames: string;
  countryName: string;
  /** Long Integer, as text. */
  householdCount: string;
  isDeceased: boolean;
  isMainHall: boolean;
  /** LocalityID (Long Integer, as text). */
  localityId: string;
  localityName: string;
  shareObjectTypeId: string;
}

/** A legacy bookmark (Connect2_MyBookmarks_IS BookmarkItem) as ScreenBlock_BookmarkGroup reads it: a row of the group
    list, and the bookmark that the client action GetBookmarkById answers. The block puts its rows in the MyBookmarks
    memory cache as BookmarkItem records (pages/BookmarksByGroup/hooks/bookmarkGroupActions.ts, toCacheRecord), so the
    row also keeps DateCreatedUtc. */
export interface Bookmark {
  /** Id (Long Integer, as text): the bookmark id. */
  id: string;
  /** ObjectId (Text): the bookmarked household, locality, subdivision or entity. */
  objectId: string;
  /** MyBookmarks_ObjectType identifier. */
  objectType: string;
  title: string;
  image: string;
  note: string;
  recordDisabled: boolean;
  recordNotAvailable: boolean;
  /** DateCreatedUtc (Date Time, as text): the sort key of AddBookmarkToCache in the MyBookmarks cache. */
  dateCreatedUtc: string;
  details: BookmarkDetails;
}

/** The outputs of DataActionGetAllBookmarksByGroup: GetBookmarksGroupResponse (Results, Total) and WasSearched. */
export interface BookmarkGroupList {
  results: Bookmark[];
  /** Total (Long Integer, as text). */
  total: string;
  wasSearched: boolean;
}

/** The block variables that DataActionGetAllBookmarksByGroup sends, with their OutSystems names: the scalar variables
    of ScreenBlock_BookmarkGroup. A type alias, not an interface: the contract inputs have an index signature. */
export type BookmarkGroupListCallInputs = {
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
};

/** The outputs of the client action GetBookmarkById of Connect2_MyBookmarks_MUI: the bookmark (an empty record when it
    is gone) and IsBookmarkFound. */
export interface BookmarkByIdResult {
  item: Bookmark;
  isBookmarkFound: boolean;
}

/** A legacy bookmark of the group summaries (Connect2_MyBookmarks_IS BookmarkItem) as ScreenBlock_MyBookmarks reads
    it: the album of a group and the preload of the carousels. */
export interface GroupSummaryBookmark {
  /** Long Integer, as text. */
  id: string;
  /** MyBookmarks_Group identifier. */
  group: string;
  /** MyBookmarks_ObjectType identifier. */
  objectType: string;
  /** Text holding a Long Integer (as on the wire). */
  objectId: string;
  title: string;
  image: string;
  /** DetailsJson.IsDeceased. */
  isDeceased: boolean;
  recordDisabled: boolean;
  recordNotAvailable: boolean;
}

/** A group of the summaries (Connect2_MyBookmarks_IS GetGroupSummariesResponse): the group, its total and its most
    recent bookmarks. */
export interface BookmarkGroupSummary {
  group: string;
  /** Long Integer, as text. */
  totalCount: string;
  bookmarks: GroupSummaryBookmark[];
}

/** The outputs of DataActionGetGroupSummaries: a summary of each group and every bookmark of each group. */
export interface BookmarkGroupSummaries {
  contacts: BookmarkGroupSummary;
  locations: BookmarkGroupSummary;
  communityBusinesses: BookmarkGroupSummary;
  allContacts: GroupSummaryBookmark[];
  allLocations: GroupSummaryBookmark[];
  allCommunityBusiness: GroupSummaryBookmark[];
}

/** The local variables of ScreenBlock_MyBookmarks: the summaries and the state of the block. DataActionGetGroupSummaries
    sends every one of them. */
export interface BookmarkSummariesVariables extends BookmarkGroupSummaries {
  hasBookmarks: boolean;
  isFetchingBookmarks: boolean;
  countSize: number;
  isNavigationFromHistory: boolean;
  hasNetworkError: boolean;
}

/* ---- Legacy bookmarks, as the client action ToggleBookmarkItem of Connect2_Assemble_MUI reads them ---- */

/** Connect2_MyBookmarks_IS PhotoDetails. */
export interface LegacyBookmarkPhotoDetails {
  Bucket: string;
  Path: string;
  SignedPath: string;
  Type: string;
}

/** Connect2_MyBookmarks_IS DetailsJson, every field. Long Integers are text. */
export interface LegacyBookmarkDetailsJson {
  AreasServed: string;
  ChildrenNames: string;
  CountryCode: string;
  CountryName: string;
  HouseHolderId: string;
  HouseholdCount: string;
  HouseholderName: string;
  IsDeceased: boolean;
  IsMainHall: boolean;
  LocalityID: string;
  LocalityName: string;
  MemberID: string;
  ServiceType: string;
  ShareObjectTypeId: string;
  SubdivisionID: string;
  SubdivisionName: string;
}

/** A legacy bookmark (Connect2_MyBookmarks_IS BookmarkItem) with every field and the OutSystems names. The record stays
    whole: AddBookmarkToCache puts it in the memory cache of the bookmark group (DirectoryCacheType MyBookmarks), and
    the readers of that cache take the record as it is. */
export interface LegacyBookmarkRecord {
  /** Long Integer, as text. */
  Id: string;
  Group: string;
  ObjectType: string;
  ObjectId: string;
  Title: string;
  DateCreatedUtc: string;
  Image: string;
  PhotoDetails: LegacyBookmarkPhotoDetails;
  RecordDisabled: boolean;
  RecordNotAvailable: boolean;
  Note: string;
  DetailsJson: LegacyBookmarkDetailsJson;
  Type: string;
}

/** The outputs of AddBookmark of Connect2_Assemble_MUI: Success and the created bookmark. */
export interface AssembleBookmarkAdded {
  Success: boolean;
  CreatedBookmarkResponse: LegacyBookmarkRecord;
}

/** The output of a bookmark delete that a client action reads as it is (DeleteBookmarkByBookmarkId of
    Connect2_Assemble_MUI, DeleteBookmarkByBookmarkId2 of UBTConnect). */
export interface BookmarkDeleted {
  Success: boolean;
}

/* ---- C2 bookmarks, as the client action ToggleBookmarkItem_C2 of UBTConnect reads them ---- */

/** The fields of Connect_Bookmarks_CS UI_Bookmark_Added that ToggleBookmarkItem_C2 reads (Create_LocalBookmark). */
export interface C2BookmarkAddedRecord {
  /** Long Integer, as text. */
  Id: string;
  DateCreatedUtc: string;
}

/** The outputs of the service action AddBookmark2 of UBTConnect: Success and Bookmark_Added. */
export interface C2BookmarkAdded {
  Success: boolean;
  Bookmark_Added: C2BookmarkAddedRecord;
}
