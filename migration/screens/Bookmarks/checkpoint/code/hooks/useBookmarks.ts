import { fetchBookmarkCards, fetchBookmarkPills, type BookmarksFilter } from '@/api/bookmark';
import { setPreloadObject, useFlowState, useOsNavigate } from '@/platform/navigation';
import { currentUserId } from '@/platform/session/session';
import { LOCAL_BOOKMARK, localBookmarksDatabase, type LocalBookmark } from '@/platform/storage/localEntities';
import { entityService } from '@/platform/storage/localEntities/entities';
import { bookmarkServerActions, scrollTop, toggleBookmarkItem_C2 } from '@/lib/ubtConnect/actions';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import {
  bookmarkCardTarget,
  bookmarkPillTags,
  bookmarksReducer,
  canLoadMore,
  initialBookmarksState,
  selectedCategoryId,
  type BookmarksState,
} from './bookmarksState';

/** What the page renders and the handlers of the events of its blocks. */
interface BookmarksFlows {
  state: BookmarksState;
  /** Handler_OnHeaderScrolled(Event_IsHeaderScrolled). */
  onHeaderScrolled: (isHeaderScrolled: boolean) => void;
  /** IconClick_SearchIcon: ScrollTop(".active-screen", "instant"). */
  onScrollToTop: () => void;
  /** Handler_SearchOnChange(CurrentString). */
  onSearchChange: (text: string) => void;
  /** Handler_SearchOnClear. */
  onSearchClear: () => void;
  /** Handler_SearchOnSubmit. */
  onSearchSubmit: () => void;
  /** Handler_OnClickPill(UpdatedTagList). */
  onClickPill: (updatedTagList: Tag[]) => void;
  /** Handler_ApplyFilters(Event_Filter_Bookmarks, Event_HasFiltersApplied). */
  onApplyFilters: (filter: BookmarksFilter, hasFiltersApplied: boolean) => void;
  /** Bookmarks_Card_ListOnLoadMore: the Promise settles when the action ends. */
  onLoadMore: () => Promise<void>;
  /** Handler_OnClickBookmarkCardItem(ObjectId, ObjectType). */
  onClickBookmarkCardItem: (objectId: string, objectType: string) => void;
  /** Handler_ItemUnbookmarked: Refresh_GetBookmarksData. */
  onItemUnbookmarked: () => void;
  /** ToggleBookmarkItem_C2(ObjectId, BookmarkType, True) of ItemCardActions (the Unmark action). */
  unbookmark: (objectId: string, bookmarkType: string) => Promise<unknown>;
  /** Handler_FilterSheetSheetInilialized(SheetId). */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** Handler_FilterSheetLoaded(ShowSubscriptionOnClick). */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
}

/** The local bookmark entity (the database of localBookmarks.ts; a test swaps it with setLocalBookmarksDatabase). */
const bookmarkEntities = entityService(localBookmarksDatabase);

/** UBTConnect_Bookmarks_MCS Get_LocalDynamicBookmarkPills (UBTConnect_Bookmarks_MCS.controller.js:352-…): the aggregate
    GetLocalBookmarkCategoryIds_ByUserId (the distinct BookmarkCategoryId of the user's local bookmarks, with a count),
    then the server action Get_BookmarkPills_ByBookmarkCategoryIds with those ids. */
async function get_LocalDynamicBookmarkPills() {
  const userId = Number(currentUserId() ?? 0);
  /* Through the entity service, as localBookmarks.ts reads the entity: the IndexedDB store is the entity's tableName
     (OSUSR_HCR_LOCALBOOKMARK) and its rows are serialised. A raw transaction on the entity name has no store: it
     rejected, so OnReady stopped before the pills call and the skeleton stayed (skeleton fix, 2026-10-29). */
  const rows = await bookmarkEntities.getAllByIndex<LocalBookmark>(LOCAL_BOOKMARK, 'UserId', userId);
  return fetchBookmarkPills([...new Set(rows.map((r) => r.BookmarkCategoryId))]);
}

/** The flows of the screen Bookmarks (p = analysis/sources/pretty/UBTConnect.Bookmarks.Bookmarks.mvc.js).
    - OnInitialize (p:1372-1444): Bookmarks_Loading, the skeleton pills and cards, Years = GetBookmarks_FilterYear. The
      port keeps no variable on a back navigation, so a restored view starts from OnInitialize too.
    - OnReady (p:1576-1608): Reset_PillsValues, then Refresh_GetBookmarksData.
    - Refresh_GetBookmarksData (p:1703-1760): Bookmarks_Loading, the refresh of DataActionGetBookmarks, then
      GetBookmarksOnAfterFetch (p:717-775): the first page replaces the list (and the pills load on the first fetch),
      a next page is appended.
    - The pills, the search input, the filter sheet, Unmark and the end of the list change the filter or the page,
      then refresh. A card opens its screen (bookmarkCardTarget).
    Flow scope (item 8): DataActionGetBookmarks is a data action (R1, `flow.fetch`); Refresh_GetBookmarksData is an own
    action (R3, `flow.own`); block events and widget handlers run through `flow.run`.
    @origin UBTConnect.Bookmarks.Bookmarks */
export function useBookmarks(): BookmarksFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Bookmarks.Bookmarks',
    reducer: bookmarksReducer,
    initial: initialBookmarksState(),
    restore: () => initialBookmarksState(),
    parameters: null,
    /* OnReady runs once, after the first render (the filter sheet has raised SheetInilialized by then). */
    onReady: async () => {
      onReady();
      await Promise.resolve();
    },
  });

  /** Reset_PillsValues (p:1292-1331): GetBookmarks_Pills(Bookmarks_Filter.BookmarkCategoryId) (a module action), then
      BookmarkPills = its Out_Pills. */
  const reset_PillsValues = async () => {
    const pills = await get_LocalDynamicBookmarkPills();
    dispatch({ bookmarkPills: bookmarkPillTags(pills, latest.current.bookmarksFilter.bookmarkCategoryId) });
  };

  /** Refresh_GetBookmarksData (own action, R3), then GetBookmarksOnAfterFetch. */
  const refresh_GetBookmarksData = flow.own(async () => {
    dispatch({ bookmarksLoading: true });
    const out = await flow.fetch(fetchBookmarkCards(latest.current)); // R1
    dispatch({ getBookmarksList: out.items });
    if (latest.current.pageNumber !== 1) {
      dispatch({ bookmarksList: [...latest.current.bookmarksList, ...out.items], bookmarksLoading: false });
      return;
    }
    if (latest.current.resetPillsValue) await reset_PillsValues();
    dispatch({
      maxRecords: out.total,
      bookmarksList: out.items,
      pillsLoaded: true,
      resetPillsValue: false,
      bookmarksLoading: false,
    });
  });

  const onReady = () => {
    flow.run(async () => {
      await reset_PillsValues();
      await refresh_GetBookmarksData();
    });
  };

  const refresh = () => {
    flow.run(refresh_GetBookmarksData);
  };

  return {
    state,
    onHeaderScrolled: (headerIsScrolled) => {
      dispatch({ headerIsScrolled });
    },
    onScrollToTop: () => {
      scrollTop('.active-screen', 'instant');
    },
    onSearchChange: (searchText) => {
      dispatch({ bookmarksFilter: { ...latest.current.bookmarksFilter, searchText } });
    },
    onSearchClear: () => {
      dispatch({ bookmarksFilter: { ...latest.current.bookmarksFilter, searchText: '' } });
      refresh();
    },
    onSearchSubmit: refresh,
    onClickPill: (updatedTagList) => {
      dispatch({
        bookmarksFilter: { ...latest.current.bookmarksFilter, bookmarkCategoryId: selectedCategoryId(updatedTagList) },
        pageNumber: 1,
        resetPillsValue: false,
      });
      refresh();
    },
    /* Handler_ApplyFilters (p:940-999): SortByNewest and Years of the event's filter, HasFiltersApplied. */
    onApplyFilters: (filter, hasFiltersApplied) => {
      dispatch({
        bookmarksFilter: { ...latest.current.bookmarksFilter, sortByNewest: filter.sortByNewest, years: filter.years },
        hasFiltersApplied,
      });
      refresh();
    },
    onLoadMore: async () => {
      if (!canLoadMore(latest.current)) return;
      dispatch({ pageNumber: latest.current.pageNumber + 1 });
      await flow.runAwaited(refresh_GetBookmarksData);
    },
    onClickBookmarkCardItem: (objectId, objectType) => {
      const target = bookmarkCardTarget(objectId, objectType, latest.current.bookmarksList);
      if (!target) return;
      if (target.preload !== undefined) setPreloadObject(target.preload);
      navigate(target.path, target.inputs);
    },
    onItemUnbookmarked: refresh,
    unbookmark: (objectId, bookmarkType) =>
      bookmarkServerActions
        ? toggleBookmarkItem_C2(objectId, bookmarkType, true, bookmarkServerActions)
        : Promise.resolve(undefined),
    onFilterSheetInitialized: (filterBottomSheetId) => {
      dispatch({ filterBottomSheetId });
    },
    onFilterSheetLoaded: (showSubscriptionOnClick) => {
      dispatch({ bottomSheetIdFilterIsLoaded: true, bottomSheetIdFilterShowSubscription: showSubscriptionOnClick });
    },
  };
}
