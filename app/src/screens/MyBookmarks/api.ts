import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type {
  BookmarkByIdResult,
  BookmarkItem,
  BookmarkItemWire,
  GroupSummaries,
  GroupSummary,
  GroupSummaryWire,
  MyBookmarksModel,
} from './types';

const NULL_DATE_TIME = '1900-01-01T00:00:00';

const toItem = (w: BookmarkItemWire): BookmarkItem => ({
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

const toSummary = (w: GroupSummaryWire): GroupSummary => ({
  group: w.Group,
  totalCount: w.TotalCount,
  bookmarks: osList(w.Bookmarks).map(toItem),
});

/** The screen keeps only the fields it reads; the screen variables it sends back carry them in the BookmarkItem shape
    (the other fields at their defaults). */
const toWire = (b: BookmarkItem): BookmarkItemWire => ({
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

const summaryWire = (s: GroupSummary): GroupSummaryWire => ({
  Group: s.group,
  TotalCount: s.totalCount,
  Bookmarks: wireList(s.bookmarks.map(toWire)),
});

/** screenData.variables of ScreenBlock_MyBookmarks (S:40-80): OutSystems sends every block variable with its data
    actions (calls.md: HasBookmarks … HasNetworkError). */
const blockVariables = (m: MyBookmarksModel) => ({
  HasBookmarks: m.hasBookmarks,
  IsFetchingBookmarks: m.isFetchingBookmarks,
  CountSize: m.countSize,
  Contacts: summaryWire(m.contacts),
  Locations: summaryWire(m.locations),
  CommunityBusinesses: summaryWire(m.communityBusinesses),
  AllContacts: wireList(m.allContacts.map(toWire)),
  AllLocations: wireList(m.allLocations.map(toWire)),
  AllCommunityBusiness: wireList(m.allCommunityBusiness.map(toWire)),
  IsNavigationFromHistory: m.isNavigationFromHistory,
  HasNetworkError: m.hasNetworkError,
});

/** GetGroupSummaries (DataActionGetGroupSummaries, S:673-700): on demand only (S:662-664). */
export async function getGroupSummaries(m: MyBookmarksModel): Promise<GroupSummaries> {
  const out = await callAction(
    'Connect2_MyBookmarks_MUI',
    'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries',
    blockVariables(m),
  );
  return {
    contacts: toSummary(out.Bookmarks_Contacts),
    locations: toSummary(out.Bookmarks_Locations),
    communityBusinesses: toSummary(out.Bookmarks_CommunityBusinesses),
    allContacts: osList(out.Bookmarks_AllContacts).map(toItem),
    allLocations: osList(out.Bookmarks_AllLocations).map(toItem),
    allCommunityBusiness: osList(out.Bookmarks_AllCommunityBusiness).map(toItem),
  };
}

/** GetBookmarkById(In_BookmarkId) (client action, Connect2_MyBookmarks_MUI.controller.js prettified :1-75): GetHasBookmarNote
    (mobileDirectoryBookmarkNote, TST off, D2(a)) → the server action New_GetBookmarkById, else GetBookmarkById
    (ServerAction.GetBookmarkById :195-229, New_GetBookmarkById :230-264; BookmarkId Long Integer; out
    GetBookmarkByIdResponse BookmarkItem, IsBookmarkFound). CR-MyBookmarks-1. */
export async function getBookmarkById(bookmarkId: string, hasBookmarkNote: boolean): Promise<BookmarkByIdResult> {
  const out = hasBookmarkNote
    ? await callAction('Connect2_MyBookmarks_MUI', 'ActionNew_GetBookmarkById', { BookmarkId: bookmarkId })
    : await callAction('Connect2_MyBookmarks_MUI', 'ActionGetBookmarkById', { BookmarkId: bookmarkId });
  return { item: toItem(out.GetBookmarkByIdResponse), isBookmarkFound: out.IsBookmarkFound };
}
