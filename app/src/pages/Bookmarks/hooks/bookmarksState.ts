import type { BookmarkCardItem, BookmarkPill, BookmarksFilter } from '@/api/bookmark';
import { OS_NULL_DATE_TIME } from '@/lib/osDateTime';
import { APP_ID } from '@/platform/navigation/paths';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';

/* The screen variables of UBTConnect.Bookmarks.Bookmarks and the pure parts of its client actions
   (p = migration/screens/Bookmarks/analysis/sources/pretty/UBTConnect.Bookmarks.Bookmarks.mvc.js). */

/** UBTConnect BookmarkCategory (TST values, migration/knowledge/static-entities-tst.json). */
const BookmarkCategory = {
  AssembleEvent: 'Assemble Event',
  FeedItem: 'Feed Item',
  Household: 'Household',
  Interchange: 'Interchange',
  LDMEvent: 'LDM Event',
  Locality: 'Locality',
  LocalityContact: 'Locality Contact',
  Member: 'Member',
  OneSchoolGlobal2: 'OneSchool Global',
  OrbitEvent: 'Orbit Event',
  PersonalEvent: 'Personal Event',
  SupperMeeting: 'Supper Meeting',
  Update: 'Update',
} as const;

/** The screen variables (p:30-84) and isInitialized (OnInitialize has ended). */
export interface BookmarksState {
  headerIsScrolled: boolean;
  bookmarkPills: Tag[];
  bookmarksFilter: BookmarksFilter;
  hasFiltersApplied: boolean;
  filterBottomSheetId: string;
  bottomSheetIdFilterIsLoaded: boolean;
  bottomSheetIdFilterShowSubscription: boolean;
  years: string[];
  pageSize: number;
  pageNumber: number;
  /** Long Integer, as text. */
  maxRecords: string;
  bookmarksList: BookmarkCardItem[];
  /** GetBookmarks.Out_Bookmarks.BookmarkCardItemList: the cards of the last fetch. */
  getBookmarksList: BookmarkCardItem[];
  resetPillsValue: boolean;
  pillsLoaded: boolean;
  bookmarksLoading: boolean;
  isInitialized: boolean;
}

type BookmarksPatch = Partial<BookmarksState>;

export const bookmarksReducer = (state: BookmarksState, patch: BookmarksPatch): BookmarksState => ({
  ...state,
  ...patch,
});

const tag = (text: string): Tag => ({ Text: text, Identifier: text, IsSelected: false });

/** SkeletonLoader_Pills (p:776-832): "All" and three "Dumyy size" tags, as the skeleton of the pills. */
export const skeletonLoader_Pills = (): Tag[] => [tag('All'), tag('Dumyy size'), tag('Dumyy size'), tag('Dumyy size')];

const skeletonCard = (title: string, subtitle: string): BookmarkCardItem => ({
  itemId: '0',
  bookmarkCategoryId: '',
  channelName: '',
  channelLogo: '',
  publishedAt: OS_NULL_DATE_TIME,
  title,
  subtitle,
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: '' },
  notes: { Total: 0, Note_Item_List: [] },
});

/** SkeletonLoader_Bookmarks (p:1609-1702): six default cards, the first "Dumyy Dummy Dummy Dummy" / "Dummy Dummy",
    the others "Dumyy size" / "Dumyy size". */
export const skeletonLoader_Bookmarks = (): BookmarkCardItem[] => [
  skeletonCard('Dumyy Dummy Dummy Dummy', 'Dummy Dummy'),
  ...Array.from({ length: 5 }, () => skeletonCard('Dumyy size', 'Dumyy size')),
];

/** UBTConnect GetBookmarks_FilterYear (UBTConnect.controller.js:7412-7430): Get_RecentYears(3), the current year and
    the two years before it, as text. */
export const getBookmarks_FilterYear = (now: Date = new Date()): string[] =>
  [0, 1, 2].map((i) => String(now.getFullYear() - i));

/** OnInitialize of a new view (p:1372-1444, not restored from the cache): Bookmarks_Loading, the skeleton pills and
    cards, Years. */
export const initialBookmarksState = (): BookmarksState => ({
  headerIsScrolled: false,
  bookmarkPills: skeletonLoader_Pills(),
  bookmarksFilter: { bookmarkCategoryId: '', searchText: '', sortByNewest: '', years: [] },
  hasFiltersApplied: false,
  filterBottomSheetId: '',
  bottomSheetIdFilterIsLoaded: false,
  bottomSheetIdFilterShowSubscription: false,
  years: getBookmarks_FilterYear(),
  pageSize: 20,
  pageNumber: 1,
  maxRecords: '0',
  bookmarksList: skeletonLoader_Bookmarks(),
  getBookmarksList: [],
  resetPillsValue: true,
  pillsLoaded: false,
  bookmarksLoading: true,
  isInitialized: true,
});

/** UBTConnect GetBookmarks_Pills(In_SelectedPillId) (UBTConnect.controller.js:7461-7548): "All" (Identifier
    NullTextIdentifier, selected when the selected id is ""), then one enabled tag per dynamic pill, selected when its
    Identifier is the selected id. */
export const bookmarkPillTags = (pills: BookmarkPill[], selectedPillId: string): Tag[] => [
  { Text: 'All', Identifier: '', IsSelected: selectedPillId === '', Enabled: true },
  ...pills.map((p) => ({
    Text: p.text,
    Identifier: p.identifier,
    IsSelected: p.identifier === selectedPillId,
    Enabled: true,
  })),
];

/** Handler_OnClickPill: TextToIdentifier(ListFilter(UpdatedTagList, IsSelected).Current.Identifier); "" when none. */
export const selectedCategoryId = (updatedTagList: Tag[]): string =>
  updatedTagList.find((t) => t.IsSelected)?.Identifier ?? '';

/** Bookmarks_Card_ListOnLoadMore (p:1478-1516): a next page when the last fetch had cards and fewer than MaxRecords. */
export const canLoadMore = (state: BookmarksState): boolean =>
  state.getBookmarksList.length > 0 && state.getBookmarksList.length < Number(state.maxRecords);

/** Where a card goes (Handler_OnClickBookmarkCardItem, p:1000-1170), with the preload object to set before. */
interface BookmarkCardTarget {
  path: string;
  inputs: Record<string, string>;
  preload?: unknown;
}

const idsOf = (list: BookmarkCardItem[], category: string) =>
  list.filter((c) => c.bookmarkCategoryId === category).map((c) => c.itemId);

/** Handler_OnClickBookmarkCardItem(ObjectId, ObjectType):
    - OneSchool Global: PreloadedCarousel.CarouselItemIds = the item ids of the OneSchool Global cards of Bookmarks_List,
      SetPreloadObject, then OneSchoolGlobalCarousel(In_StartingObjectId). The TST publish of 2026-10-29 removed the
      second (never reached) OneSchoolGlobalDetails test; there is no direct detail link.
    - Supper Meeting: SupperMeeting_Details(In_SubdivsionId).
    - Household: HouseholdIdList.CarouselHouseholdItem = the household cards of Bookmarks_List, SetPreloadObject, then
      HouseholdCarousel(In_StartingHouseholdId) (its flag redirect opens HouseholdDetails when the carousel is off).
    - Every other category: nothing (empty branches). */
export function bookmarkCardTarget(
  objectId: string,
  objectType: string,
  list: BookmarkCardItem[],
): BookmarkCardTarget | null {
  if (objectType === BookmarkCategory.OneSchoolGlobal2) {
    return {
      path: `/${APP_ID}/OneSchoolGlobalCarousel`,
      inputs: { In_StartingObjectId: objectId },
      preload: { CarouselItemIds: idsOf(list, BookmarkCategory.OneSchoolGlobal2) },
    };
  }
  if (objectType === BookmarkCategory.SupperMeeting) {
    return { path: `/${APP_ID}/SupperMeeting_Details`, inputs: { In_SubdivsionId: objectId } };
  }
  if (objectType === BookmarkCategory.Household) {
    return {
      path: `/${APP_ID}/HouseholdCarousel`,
      inputs: { In_StartingHouseholdId: objectId },
      preload: {
        CarouselHouseholdItem: idsOf(list, BookmarkCategory.Household).map((household) => ({ Household: household })),
      },
    };
  }
  return null;
}
