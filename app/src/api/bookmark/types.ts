/* Domain types of the bookmark calls: the fields that the UI reads. The reader is the client action
   ToggleBookmarkItem_C2 of UBTConnect_Utils (Directory_EntityDetailsActions, ItemCardActions, AssembleDetail attendee
   subdivision, Bookmarks). It takes the record as it is, so the types keep the OutSystems names and nesting. The wire
   types stay in src/api/schema.d.ts. Long Integer ids are text (BookmarkId too, although the delete input is a Long
   Integer on TST). The C2 bookmarks are Connect_Bookmarks_CS rows: a bookmark category and an item id. The legacy
   bookmark writes (Connect2_Assemble_MUI AddBookmark / DeleteBookmarkByBookmarkId) are gone from TST (live survey
   2026-11-05). */

/** The output of DeleteBookmarkByBookmarkId2 of UBTConnect_Utils that ToggleBookmarkItem_C2 reads. */
export interface BookmarkDeleted {
  Success: boolean;
}

/** The fields of Connect_Bookmarks_CS UI_Bookmark_Added that ToggleBookmarkItem_C2 reads (Create_LocalBookmark). */
export interface C2BookmarkAddedRecord {
  /** Long Integer, as text. */
  Id: string;
  DateCreatedUtc: string;
}

/** The outputs of the service action AddBookmark2 of UBTConnect_Utils: Success and Bookmark_Added. */
export interface C2BookmarkAdded {
  Success: boolean;
  Bookmark_Added: C2BookmarkAddedRecord;
}
