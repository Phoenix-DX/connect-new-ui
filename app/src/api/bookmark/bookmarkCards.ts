import { callAction, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';

/* The two calls of the screen Bookmarks (TST publish of 2026-10-27): the data action GetBookmarks of the screen
   (Bookmarks.mvc.js pretty:690-702, refresh only) and the server action Get_BookmarkPills_ByBookmarkCategoryIds of
   UBTConnect_Bookmarks_MCS (called by Get_LocalDynamicBookmarkPills, UBTConnect_Bookmarks_MCS.controller.js:1193).
   Own file, as notification/notificationDetail.ts. Both operations come from the contract (regenerated for I10-6).
   UI_Bookmark_CardItem (Connect_Bookmarks_CS, live model of 2026-11-05,
   migration/runtime-sources/live/Connect_Bookmarks_CS.model.js): ItemId is Text, with ItemId2 (the household of a
   member), HasDetailAccess and the channel fields ChannelName, ChannelLogo, PublishedAt; no event dates. */

/** Out_Bookmarks of DataActionGetBookmarks (Connect_Bookmarks_CS UI_Bookmarks): Total (Long Integer, as text) and the
    cards of the page. */
export type BookmarkCardsWire = ActionOutputs<PathOf<'UBTConnect', 'Bookmarks/DataActionGetBookmarks'>>;

/** Connect_Bookmarks_CS UI_Bookmark_CardItem of the contract. */
export type BookmarkCardItemWire = BookmarkCardsWire['Out_Bookmarks']['BookmarkCardItemList']['List'][number];

/** Out_BookmarkPills of Get_BookmarkPills_ByBookmarkCategoryIds: a pill for each bookmark category. */
type BookmarkPillsWire = ActionOutputs<
  PathOf<'UBTConnect_Bookmarks_MCS', 'ActionGet_BookmarkPills_ByBookmarkCategoryIds'>
>;

/** A bookmark card (UI_Bookmark_CardItem). */
export interface BookmarkCardItem {
  /** Text: a Long Integer, or "<LocalityId>:<InterchangeLocalityId>" for an Interchange. */
  itemId: string;
  /** Text: the household of a Member card (Household_Relations HouseholdId); "" for the other categories. */
  itemId2: string;
  /** False: a click shows "This <category> is no longer available." instead of the detail. */
  hasDetailAccess: boolean;
  /** A BookmarkCategory identifier ("Household", "OneSchool Global", "Supper Meeting", …). */
  bookmarkCategoryId: string;
  channelName: string;
  /** Image URL of the channel logo. */
  channelLogo: string;
  /** DateTime ("yyyy-MM-ddTHH:mm:ss"); NullDate when the card has no channel. */
  publishedAt: string;
  title: string;
  subtitle: string;
  sourceHeader: { iconId: string; imageURL: string; initials: string; label: string };
  notes: Notes;
}

/** Connect_Bookmarks_CS Bookmark_Filter: BookmarkCategoryId and SortByNewest are identifiers ("" = none). */
export interface BookmarksFilter {
  bookmarkCategoryId: string;
  searchText: string;
  sortByNewest: string;
  years: string[];
}

/** The screen variables that DataActionGetBookmarks sends (OutSystems sends every screen variable; these are the ones
    that the server reads: the filter and the page). */
interface BookmarksVariables {
  bookmarksFilter: BookmarksFilter;
  pageSize: number;
  pageNumber: number;
}

interface BookmarkCardPage {
  /** Long Integer, as text. */
  total: string;
  items: BookmarkCardItem[];
}

export interface BookmarkPill {
  text: string;
  identifier: string;
}

export const toBookmarkCardItem = (w: BookmarkCardItemWire): BookmarkCardItem => {
  const c = w.Bookmark_Card_Content;
  return {
    itemId: w.ItemId,
    itemId2: w.ItemId2,
    hasDetailAccess: w.HasDetailAccess,
    bookmarkCategoryId: w.BookmarkCategoryId,
    channelName: w.ChannelName,
    channelLogo: w.ChannelLogo,
    publishedAt: w.PublishedAt,
    title: c.Title,
    subtitle: c.Subtitle,
    sourceHeader: {
      iconId: c.SourceHeader.IconId,
      imageURL: c.SourceHeader.ImageURL,
      initials: c.SourceHeader.Initials,
      label: c.SourceHeader.Label,
    },
    notes: { Total: c.Notes.Total, Note_Item_List: osList(c.Notes.Note_Item_List) },
  };
};

/** DataActionGetBookmarks of the screen Bookmarks: a page of bookmark cards (Refresh_GetBookmarksData). */
export async function fetchBookmarkCards(v: BookmarksVariables): Promise<BookmarkCardPage> {
  const inputs = {
    Bookmarks_Filter: {
      BookmarkCategoryId: v.bookmarksFilter.bookmarkCategoryId,
      SearchText: v.bookmarksFilter.searchText,
      SortByNewest: v.bookmarksFilter.sortByNewest,
      Years: wireList(v.bookmarksFilter.years),
    },
    PageSize: v.pageSize,
    PageNumber: v.pageNumber,
  };
  const wire: BookmarkCardsWire = await callAction('UBTConnect', 'Bookmarks/DataActionGetBookmarks', inputs);
  const out = wire.Out_Bookmarks;
  return { total: out.Total, items: osList(out.BookmarkCardItemList).map(toBookmarkCardItem) };
}

/** The server action Get_BookmarkPills_ByBookmarkCategoryIds(In_BookmarkCategoryIds) of UBTConnect_Bookmarks_MCS. */
export async function fetchBookmarkPills(bookmarkCategoryIds: string[]): Promise<BookmarkPill[]> {
  const inputs = { In_BookmarkCategoryIds: wireList(bookmarkCategoryIds) };
  const wire: BookmarkPillsWire = await callAction(
    'UBTConnect_Bookmarks_MCS',
    'ActionGet_BookmarkPills_ByBookmarkCategoryIds',
    inputs,
  );
  return osList(wire.Out_BookmarkPills).map((p) => ({ text: p.Text, identifier: p.Identifier }));
}
