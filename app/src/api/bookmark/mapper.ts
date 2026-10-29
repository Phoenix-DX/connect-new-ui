import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import type { AssembleBookmarkAdded, BookmarkDeleted, C2BookmarkAdded, LegacyBookmarkRecord } from './types';

/* The outputs of each call, as the contract describes them. The mappers of the blocks of Connect2_MyBookmarks_MUI
   (ScreenBlock_BookmarkGroup, ScreenBlock_MyBookmarks) went with the retired routes BookmarksByGroup and MyBookmarks
   (TST removed them; user decision 2026-10-28). */
/** The server action AddBookmark of Connect2_Assemble_MUI. */
export type AssembleBookmarkAddedWire = ActionOutputs<PathOf<'Connect2_Assemble_MUI', 'ActionAddBookmark'>>;
/** The service action AddBookmark2 of UBTConnect. */
export type C2BookmarkAddedWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPIAddBookmark2'>>;
/** Connect2_MyBookmarks_IS BookmarkItem as the server sends it. */
export type BookmarkItemWire = AssembleBookmarkAddedWire['CreatedBookmarkResponse'];

/** A legacy bookmark with every field (a copy of the record, the nested records too). */
export const toLegacyBookmarkRecord = (w: BookmarkItemWire): LegacyBookmarkRecord => ({
  Id: w.Id,
  Group: w.Group,
  ObjectType: w.ObjectType,
  ObjectId: w.ObjectId,
  Title: w.Title,
  DateCreatedUtc: w.DateCreatedUtc,
  Image: w.Image,
  PhotoDetails: {
    Bucket: w.PhotoDetails.Bucket,
    Path: w.PhotoDetails.Path,
    SignedPath: w.PhotoDetails.SignedPath,
    Type: w.PhotoDetails.Type,
  },
  RecordDisabled: w.RecordDisabled,
  RecordNotAvailable: w.RecordNotAvailable,
  Note: w.Note,
  DetailsJson: {
    AreasServed: w.DetailsJson.AreasServed,
    ChildrenNames: w.DetailsJson.ChildrenNames,
    CountryCode: w.DetailsJson.CountryCode,
    CountryName: w.DetailsJson.CountryName,
    HouseHolderId: w.DetailsJson.HouseHolderId,
    HouseholdCount: w.DetailsJson.HouseholdCount,
    HouseholderName: w.DetailsJson.HouseholderName,
    IsDeceased: w.DetailsJson.IsDeceased,
    IsMainHall: w.DetailsJson.IsMainHall,
    LocalityID: w.DetailsJson.LocalityID,
    LocalityName: w.DetailsJson.LocalityName,
    MemberID: w.DetailsJson.MemberID,
    ServiceType: w.DetailsJson.ServiceType,
    ShareObjectTypeId: w.DetailsJson.ShareObjectTypeId,
    SubdivisionID: w.DetailsJson.SubdivisionID,
    SubdivisionName: w.DetailsJson.SubdivisionName,
  },
  Type: w.Type,
});

/** Success and the created bookmark, with every field. */
export const toAssembleBookmarkAdded = (wire: AssembleBookmarkAddedWire): AssembleBookmarkAdded => ({
  Success: wire.Success,
  CreatedBookmarkResponse: toLegacyBookmarkRecord(wire.CreatedBookmarkResponse),
});

/** Success of a bookmark delete. */
export const toBookmarkDeleted = (wire: { Success: boolean }): BookmarkDeleted => ({ Success: wire.Success });

/** Success and the id and the creation time of the added C2 bookmark. */
export const toC2BookmarkAdded = (wire: C2BookmarkAddedWire): C2BookmarkAdded => ({
  Success: wire.Success,
  Bookmark_Added: { Id: wire.Bookmark_Added.Id, DateCreatedUtc: wire.Bookmark_Added.DateCreatedUtc },
});
