import { fetchLocalityHouseholds, type LocalityHousehold } from '@/api/household';
import { BookmarkCategory } from '@/lib/ubtConnect/staticEntities';
import { getLocal_Bookmark, getLocal_Bookmark_C2 } from '@/pages/Locality_Details/components/actions';
import { MyBookmarks_ObjectType_Contact } from '@/pages/Locality_Details/components/staticEntities';
import { setPreloadObject, useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { INITIAL_LOCALITY_HOUSEHOLD_LIST, localityHouseholdListReducer, withBookmark } from './localityBlocksState';

/** The feature flags that the flows of the household list read. The page reads them and gives them here. */
export interface LocalityHouseholdListFlags {
  /** C2EnableCarousel (GetHasCarouselEnabled): a card opens HouseholdCarousel. */
  hasCarouselEnabled: boolean;
  /** C2NewBookmarks (GetHasNewBookmarks; decided default-only, off): on, IsBookmarked of each row comes from
      GetLocal_Bookmark_C2 (the C2 local bookmarks); off, from the legacy GetLocal_Bookmark. */
  hasNewBookmarks: boolean;
}

/** The events of the block, which Locality_Households raises as they are. */
export interface LocalityHouseholdListEvents {
  /** Event_NavigateToHouseholdDetails(HouseholdId). */
  onEventNavigateToHouseholdDetails?: (householdId: string) => void;
}

/** What the household list renders. */
export interface LocalityHouseholdListFlows {
  /** GetLocalityHouseholds is fetched. */
  isDataFetched: boolean;
  /** The households: three skeleton records until the first answer. */
  list: LocalityHousehold[];
  /** Household_CardEvent_OnClickHousehold(HouseholdId). */
  onClickHousehold: (householdId: string) => void;
}

/** The flows of the household list of a locality.
    - OnReady: a view that the view cache restored with the list keeps it (ReactiveInstance_ForceUpdate);
      ForceListUpdateOnScrollEnd is a virtualization helper with nothing to port. Else the refresh of
      GetLocalityHouseholds, then OnAfterFetch_GetLocalityHouseholds_Bookmarks: IsBookmarked of each row from
      GetLocal_Bookmark_C2(BookmarkCategory.Household, HouseholdId) when GetHasNewBookmarks, else from
      GetLocal_Bookmark(Contact, HouseholdId) (Locality_Households_HouseholdList.mvc.js:454-515).
    - Household_CardEvent_OnClickHousehold: GetHasCarouselEnabled → every row's HouseholdId as the preload object
      (CarouselPreloadedHouseholds) and HouseholdCarousel at the clicked row; else Event_NavigateToHouseholdDetails.
    Flow scope (item 8): GetLocalityHouseholds is a data action (R1, Locality_Households_HouseholdList.js:346) and its
    OnAfterFetch is in the same chain: after an unmount the answer, the bookmark reads and the failure are dropped.
    @origin UBTConnect.Directory_Locality.Locality_Households_HouseholdList */
export function useLocalityHouseholdList(
  localityId: string,
  events: LocalityHouseholdListEvents,
  flags: LocalityHouseholdListFlags,
): LocalityHouseholdListFlows {
  const navigate = useOsNavigate();
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
    flow,
  } = useFlowState({
    viewName: 'Locality_Households_HouseholdList',
    reducer: localityHouseholdListReducer,
    initial: INITIAL_LOCALITY_HOUSEHOLD_LIST,
    parameters: { localityId },
    events,
    onReady: (_isAlive, restored) => onReady(restored),
  });

  async function onReady(restored: boolean) {
    if (restored && latest.current.isDataFetched) return;
    const list = await flow.fetch(fetchLocalityHouseholds(localityId)); // R1
    dispatch({ type: 'householdsFetched', list });
    // OnAfterFetch_GetLocalityHouseholds_Bookmarks.
    const marked: LocalityHousehold[] = [];
    for (const household of list) {
      const isBookmarked = flags.hasNewBookmarks
        ? await getLocal_Bookmark_C2(BookmarkCategory.Household, household.householdId)
        : await getLocal_Bookmark(MyBookmarks_ObjectType_Contact, household.householdId);
      marked.push(withBookmark(household, isBookmarked));
    }
    dispatch({ type: 'householdsFetched', list: marked });
  }

  const onClickHousehold = (householdId: string) => {
    if (flags.hasCarouselEnabled) {
      setPreloadObject({ CarouselHouseholdItem: latest.current.list.map((h) => ({ Household: h.householdId })) });
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: householdId });
      return;
    }
    eventsRef.current.onEventNavigateToHouseholdDetails?.(householdId);
  };

  return { isDataFetched: state.isDataFetched, list: state.list, onClickHousehold };
}
