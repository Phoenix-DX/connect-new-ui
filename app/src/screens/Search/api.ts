import { useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type { Tag } from '../../shared/UBTConnectLibrary/HorizontalTagList';
import type {
  SearchBirthdayOption,
  SearchBirthdayOptionWire,
  SearchResult,
  SearchResults,
  SearchResultWire,
  SearchVariables,
} from './types';

const toSearchResult = (w: SearchResultWire): SearchResult => ({
  id: w.Id,
  householderId: w.HouseholderId,
  name: w.Name,
  additionalInformation: w.AdditionalInformation,
  location: w.Location,
  type: w.Type,
  latitude: w.Latitude,
  longitude: w.Longitude,
  recordDisabled: w.RecordDisabled,
});

const toBirthdayOption = (w: SearchBirthdayOptionWire): SearchBirthdayOption => ({
  name: w.Connect_SearchBirthdayOptions.Name,
  searchName: w.Connect_SearchBirthdayOptions.SearchName,
  order: w.Connect_SearchBirthdayOptions.Order,
});

/** Get_SearchBirthdayOptions (ScreenDataSetGet_SearchBirthdayOptions, block controller :2106-2125): not fetched at
    start (refresh -1); OnReady refreshes it with MaxRecords 50, StartIndex 0 when the C2EnableSearchByBirthday check
    passes (:3253-3261). */
export function useSearchBirthdayOptions(enabled: boolean) {
  return useQuery({
    queryKey: ['Search', 'ScreenDataSetGet_SearchBirthdayOptions'],
    queryFn: async () => {
      const out = await callAction('UBTConnect', 'ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions', {
        MaxRecords: 50,
        StartIndex: 0,
      });
      return osList(out.List).map(toBirthdayOption);
    },
    enabled,
    retry: false,
  });
}

/** FetchSearchResults (DataActionFetchSearchResults, controller :2130-2150): refreshed only by Action_RefreshSearch
    (refresh -1, no fetch at start). OutSystems sends the block variables; the inputs keep their names. */
export async function fetchSearchResults(
  v: SearchVariables,
  tagList: Tag[],
  isLoading: boolean,
): Promise<SearchResults> {
  const out = await callAction('UBTConnect', 'ScreenBlock_Search/DataActionFetchSearchResults', {
    SearchKey_Current: v.searchKeyCurrent,
    SearchKey_LastSearched: v.searchKeyLastSearched,
    HasSearched: v.hasSearched,
    TagList: wireList(
      tagList.map((t) => ({
        Text: t.Text ?? '',
        Identifier: t.Identifier ?? '',
        IconId: t.IconId ?? '',
        IsSelected: t.IsSelected ?? true,
        Enabled: t.Enabled ?? true,
      })),
    ),
    SelectedCategory: v.selectedCategory,
    SelectedCountryIds: wireList(v.selectedCountryIds),
    IsLoading: isLoading,
    BottomSheetId_Filter: v.bottomSheetIdFilter,
    HasFiltersApplied: v.hasFiltersApplied,
    HasPeople: false,
    HasHouseholds: false,
    HasPlaces: false,
    isBirthdayKeyWord: v.isBirthdayKeyWord,
    isBirthdaySearchEnabled: v.isBirthdaySearchEnabled,
    BottomSheetId_Filter_IsLoaded: v.bottomSheetIdFilterIsLoaded,
    BottomSheetId_Filter_ShowSubscriptionOnClick: v.bottomSheetIdFilterShowSubscriptionOnClick,
    In_IsInScreenSearch: false,
    In_IsEventNavigation: false,
    In_SearchTargetId: v.inSearchTargetId,
  });
  return {
    households: osList(out.Households).map(toSearchResult),
    people: osList(out.People).map(toSearchResult),
    places: osList(out.Places).map(toSearchResult),
  };
}
