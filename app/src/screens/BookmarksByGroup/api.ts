import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type {
  BookmarkGroupVariables,
  BookmarkItem,
  BookmarkItemWire,
  BookmarksByGroupInputs,
  BookmarksByGroupResult,
  GetBookmarkByIdResult,
} from './types';

/** Screen inputs from the query string with the original names (P-PARAMS; BookmarksByGroup.mvc.js model: BookmarkGroup
    Text, "" when absent). */
export function readInputs(params: URLSearchParams): BookmarksByGroupInputs {
  return { BookmarkGroup: params.get('BookmarkGroup') ?? '' };
}

/** Wire BookmarkItem → domain (DetailsJson fields the block reads; DateCreatedUtc for the MyBookmarks cache). */
export const toBookmarkItem = (w: BookmarkItemWire): BookmarkItem => ({
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

/** DataActionGetAllBookmarksByGroup (data action of ScreenBlock_BookmarkGroup, "only on demand": refreshed by
    RefreshBookmarkData and by the not-found branch of OnClick_BookmarkedItem; ScreenBlock_BookmarkGroup.mvc.js:1888-1917).
    OutSystems sends the block's variables (screenData); the scalar ones are sent with their names. The record and list
    variables (BookmarkedItems, EditingBookmarkNote, ShareableObject_Generic) are left out: they echo the client state
    and the server answer does not depend on them (mock-rules dropInputs). */
export async function getAllBookmarksByGroup(vars: BookmarkGroupVariables): Promise<BookmarksByGroupResult> {
  const out = await callAction(
    'Connect2_MyBookmarks_MUI',
    'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup',
    { ...vars },
  );
  return {
    results: osList(out.GetBookmarksGroupResponse.Results).map(toBookmarkItem),
    total: out.GetBookmarksGroupResponse.Total,
    wasSearched: out.WasSearched,
  };
}

/** DeleteBookmarkByBookmarkId (server action, OnHandle_BookmarkToggle; ScreenBlock_BookmarkGroup.mvc.js:1841-1862).
    A write: mocked only (P-MUTATION). Out: Success. */
export async function deleteBookmarkByBookmarkId(bookmarkId: string): Promise<boolean> {
  const out = await callAction('Connect2_MyBookmarks_MUI', 'ActionDeleteBookmarkByBookmarkId', {
    BookmarkId: bookmarkId,
  });
  return out.Success;
}

/** New_UpdateBookmarkNote (server action, UpdateNote; ScreenBlock_BookmarkGroup.mvc.js:1863-1887, Note trimmed by the
    caller). A write: mocked only (P-MUTATION). Out: Success. */
export async function new_UpdateBookmarkNote(bookmarkId: string, note: string): Promise<boolean> {
  const out = await callAction('Connect2_MyBookmarks_MUI', 'ActionNew_UpdateBookmarkNote', {
    BookmarkId: bookmarkId,
    Note: note,
  });
  return out.Success;
}

/** Connect2_MyBookmarks_MUI GetBookmarkById(In_BookmarkId) (client action; Connect2_MyBookmarks_MUI.controller.js raw,
    prettified :17-142): GetHasBookmarNote → New_GetBookmarkById, else GetBookmarkById (server actions
    screenservices/Connect2_MyBookmarks_MUI/ActionNew_GetBookmarkById and ActionGetBookmarkById, :313-378 and :379-).
    TST: GetHasBookmarNote off → GetBookmarkById. CR-BookmarksByGroup-1. */
export async function getBookmarkById(bookmarkId: string, hasBookmarkNote: boolean): Promise<GetBookmarkByIdResult> {
  const out = hasBookmarkNote
    ? await callAction('Connect2_MyBookmarks_MUI', 'ActionNew_GetBookmarkById', { BookmarkId: bookmarkId })
    : await callAction('Connect2_MyBookmarks_MUI', 'ActionGetBookmarkById', { BookmarkId: bookmarkId });
  return { item: toBookmarkItem(out.GetBookmarkByIdResponse), isBookmarkFound: out.IsBookmarkFound };
}
