import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type {
  AssembleBookmarkAdded,
  Bookmark,
  BookmarkByIdResult,
  BookmarkDeleted,
  BookmarkGroupList,
  BookmarkGroupSummaries,
  BookmarkGroupSummary,
  BookmarkSummariesVariables,
  C2BookmarkAdded,
  GroupSummaryBookmark,
  LegacyBookmarkRecord,
} from './types';

/** OutSystems NullDate() as a DateTime on the wire. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

type GroupSummariesPath = PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries'>;

/* The inputs and the outputs of each call, as the contract describes them. */
/** DataActionGetAllBookmarksByGroup of ScreenBlock_BookmarkGroup. */
export type BookmarkGroupListWire = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup'>
>;
/** DataActionGetGroupSummaries of ScreenBlock_MyBookmarks. */
export type BookmarkGroupSummariesWire = ActionOutputs<GroupSummariesPath>;
/** The block variables that DataActionGetGroupSummaries sends. */
export type BookmarkSummariesVariablesWire = ActionInputs<GroupSummariesPath>;
/** The server actions GetBookmarkById and New_GetBookmarkById of Connect2_MyBookmarks_MUI (the same outputs). */
export type BookmarkByIdWire = ActionOutputs<PathOf<'Connect2_MyBookmarks_MUI', 'ActionGetBookmarkById'>>;
/** The server action AddBookmark of Connect2_Assemble_MUI. */
export type AssembleBookmarkAddedWire = ActionOutputs<PathOf<'Connect2_Assemble_MUI', 'ActionAddBookmark'>>;
/** The service action AddBookmark2 of UBTConnect. */
export type C2BookmarkAddedWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPIAddBookmark2'>>;
/** Connect2_MyBookmarks_IS BookmarkItem as the server sends it. */
export type BookmarkItemWire = BookmarkGroupListWire['GetBookmarksGroupResponse']['Results']['List'][number];
type GroupSummaryWire = BookmarkGroupSummariesWire['Bookmarks_Contacts'];

/** A legacy bookmark as ScreenBlock_BookmarkGroup reads it: the bookmark fields and the DetailsJson fields of the
    rows and of the share sheet, and DateCreatedUtc for the MyBookmarks cache. The block also maps the records of that
    cache back to rows with this function (the cache record is the wire structure). */
export const toBookmark = (w: BookmarkItemWire): Bookmark => ({
  id: w.Id,
  objectId: w.ObjectId,
  objectType: w.ObjectType,
  title: w.Title,
  image: w.Image,
  note: w.Note,
  recordDisabled: w.RecordDisabled,
  recordNotAvailable: w.RecordNotAvailable,
  dateCreatedUtc: w.DateCreatedUtc,
  details: {
    areasServed: w.DetailsJson.AreasServed,
    childrenNames: w.DetailsJson.ChildrenNames,
    countryName: w.DetailsJson.CountryName,
    householdCount: w.DetailsJson.HouseholdCount,
    isDeceased: w.DetailsJson.IsDeceased,
    isMainHall: w.DetailsJson.IsMainHall,
    localityId: w.DetailsJson.LocalityID,
    localityName: w.DetailsJson.LocalityName,
    shareObjectTypeId: w.DetailsJson.ShareObjectTypeId,
  },
});

/** The bookmarks of a group, with the list unwrapped, the total and WasSearched. */
export const toBookmarkGroupList = (wire: BookmarkGroupListWire): BookmarkGroupList => ({
  results: osList(wire.GetBookmarksGroupResponse.Results).map(toBookmark),
  total: wire.GetBookmarksGroupResponse.Total,
  wasSearched: wire.WasSearched,
});

/** The bookmark that GetBookmarkById answers (an empty record when it is gone) and IsBookmarkFound. */
export const toBookmarkByIdResult = (wire: BookmarkByIdWire): BookmarkByIdResult => ({
  item: toBookmark(wire.GetBookmarkByIdResponse),
  isBookmarkFound: wire.IsBookmarkFound,
});

/** A legacy bookmark as ScreenBlock_MyBookmarks reads it. */
const toGroupSummaryBookmark = (w: BookmarkItemWire): GroupSummaryBookmark => ({
  id: w.Id,
  group: w.Group,
  objectType: w.ObjectType,
  objectId: w.ObjectId,
  title: w.Title,
  image: w.Image,
  isDeceased: w.DetailsJson.IsDeceased,
  recordDisabled: w.RecordDisabled,
  recordNotAvailable: w.RecordNotAvailable,
});

const toBookmarkGroupSummary = (w: GroupSummaryWire): BookmarkGroupSummary => ({
  group: w.Group,
  totalCount: w.TotalCount,
  bookmarks: osList(w.Bookmarks).map(toGroupSummaryBookmark),
});

/** The summary of each group and every bookmark of each group, with the lists unwrapped. */
export const toBookmarkGroupSummaries = (wire: BookmarkGroupSummariesWire): BookmarkGroupSummaries => ({
  contacts: toBookmarkGroupSummary(wire.Bookmarks_Contacts),
  locations: toBookmarkGroupSummary(wire.Bookmarks_Locations),
  communityBusinesses: toBookmarkGroupSummary(wire.Bookmarks_CommunityBusinesses),
  allContacts: osList(wire.Bookmarks_AllContacts).map(toGroupSummaryBookmark),
  allLocations: osList(wire.Bookmarks_AllLocations).map(toGroupSummaryBookmark),
  allCommunityBusiness: osList(wire.Bookmarks_AllCommunityBusiness).map(toGroupSummaryBookmark),
});

/** A bookmark of the block variables back in the BookmarkItem shape: the fields that the block keeps, the other fields
    at their defaults. */
const toGroupSummaryBookmarkWire = (b: GroupSummaryBookmark): BookmarkItemWire => ({
  Id: b.id,
  Group: b.group,
  ObjectType: b.objectType,
  ObjectId: b.objectId,
  Title: b.title,
  DateCreatedUtc: NULL_DATE_TIME,
  Image: b.image,
  PhotoDetails: { Bucket: '', Path: '', SignedPath: '', Type: '' },
  RecordDisabled: b.recordDisabled,
  RecordNotAvailable: b.recordNotAvailable,
  Note: '',
  DetailsJson: {
    AreasServed: '',
    ChildrenNames: '',
    CountryCode: '',
    CountryName: '',
    HouseHolderId: '0',
    HouseholdCount: '0',
    HouseholderName: '',
    IsDeceased: b.isDeceased,
    IsMainHall: false,
    LocalityID: '0',
    LocalityName: '',
    MemberID: '0',
    ServiceType: '',
    ShareObjectTypeId: '',
    SubdivisionID: '0',
    SubdivisionName: '',
  },
  Type: '',
});

const toBookmarkGroupSummaryWire = (s: BookmarkGroupSummary): GroupSummaryWire => ({
  Group: s.group,
  TotalCount: s.totalCount,
  Bookmarks: wireList(s.bookmarks.map(toGroupSummaryBookmarkWire)),
});

/** The variables of ScreenBlock_MyBookmarks as OutSystems sends them with its data action (screenData.variables), with
    their OutSystems names. */
export const toBookmarkSummariesVariablesWire = (v: BookmarkSummariesVariables): BookmarkSummariesVariablesWire => ({
  HasBookmarks: v.hasBookmarks,
  IsFetchingBookmarks: v.isFetchingBookmarks,
  CountSize: v.countSize,
  Contacts: toBookmarkGroupSummaryWire(v.contacts),
  Locations: toBookmarkGroupSummaryWire(v.locations),
  CommunityBusinesses: toBookmarkGroupSummaryWire(v.communityBusinesses),
  AllContacts: wireList(v.allContacts.map(toGroupSummaryBookmarkWire)),
  AllLocations: wireList(v.allLocations.map(toGroupSummaryBookmarkWire)),
  AllCommunityBusiness: wireList(v.allCommunityBusiness.map(toGroupSummaryBookmarkWire)),
  IsNavigationFromHistory: v.isNavigationFromHistory,
  HasNetworkError: v.hasNetworkError,
});

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
