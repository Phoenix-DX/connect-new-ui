/* Domain types of the bookmark calls: the fields that the UI reads. The readers are the client action
   ToggleBookmarkItem of Connect2_Assemble_MUI (AssembleDetail) and the client action ToggleBookmarkItem_C2 of UBTConnect
   (Directory_EntityDetailsActions). They take the record as it is, so the types keep the OutSystems names and nesting.
   The types of the blocks of Connect2_MyBookmarks_MUI went with the retired routes BookmarksByGroup and MyBookmarks (TST
   removed them; user decision 2026-10-28). The wire types stay in src/api/schema.d.ts. Long Integer ids are text.
   There are two kinds of bookmark: the legacy bookmarks (Connect2_MyBookmarks_IS BookmarkItem: an object type, an
   object id, a group and a note) and the C2 bookmarks (Connect_Bookmarks_CS: a bookmark category and an item id). */

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
