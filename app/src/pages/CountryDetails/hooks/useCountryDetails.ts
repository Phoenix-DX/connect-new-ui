import { useEffect, useMemo, useRef, useState } from 'react';
import { useCountryLocalityStatisticsQuery, type LocalityStatistics } from '@/api/country';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useOsNavigate, useViewState } from '@/platform/navigation';
import {
  map_FitBoundsAuto,
  map_InvalidateSize,
  map_Marker_OpenPopUp,
  map_SetPopupBindingCallback,
} from '@/shared/Leaflet/lib/actions';
import type L from '@/shared/Leaflet/lib/leaflet';
import type { MapOptions, MarkerWithWindow } from '@/shared/Leaflet/lib/structures';
import { bottomSheetOpen } from '@/shared/osui/lib/actions';
import {
  directory_BrowseByCountry_TooltipBuilder,
  getLocalityLabel,
  hasAccessToRegion,
} from '@/shared/UBTConnect/lib/actions';
import type { Filter_Common, Filter_Common_Control_List } from '@/shared/UBTConnect/lib/structures';
import {
  appliedCountryCode,
  defineList,
  getSkeletonList_UI_LocalityStatistics,
  mapOptionsAt,
  normalizeLongId,
  toMarker,
} from './countryDetailsState';

/** The variables and the flows of the CountryDetails screen: the data action GetLocalityStatistics (a query of
    api/country), the variables that the view cache brings back, Action_DefineList, the map callbacks, the search, the
    two bottom sheets and Handler_StatisticsList_Clicked. The page calls this hook and passes the result to the
    components.
    @origin UBTConnect.Directory_Locality.CountryDetails */

export interface CountryDetailsFlows {
  /** CountryName of GetLocalityStatistics: "" until it answers. */
  countryName: string;
  /** Out_LocalitiesStatistics: the answer of GetLocalityStatistics, or 10 skeleton rows before it and after a
      failure. */
  localities: LocalityStatistics[];
  /** Local_List: the rows of the list (Action_DefineList). Empty until GetLocalityStatistics answers or a search
      event runs. */
  list: LocalityStatistics[];
  /** SearchString. */
  searchString: string;
  /** GetLocalityStatistics answered or failed: the skeletons go. */
  isLoaded: boolean;
  /** The map options: null until GetLocalityStatistics answers. */
  mapOptions: MapOptions | null;
  /** MarkersList: one marker per locality of the answer. */
  markersList: MarkerWithWindow[];
  /** StartFilter of the FilterSheet: the original country. */
  startFilter: Filter_Common;
  /** Handler_BrowseCountries: the "Select another country to view" row. */
  onSelectCountryClicked: () => void;
  /** OnMarker_Clicked of the map: opens the popup of the marker. */
  onMarkerClicked: (markerObj: L.Marker) => void;
  /** LeafletMapSetCallbacks: the popup content comes from the tooltip builder. */
  onMapSetCallbacks: (mapId: string) => void;
  /** Handler_LeafletMapOnInitialized: keeps the map id, then Action_InvalidateMapSize after a timeout of 0. */
  onMapInitialized: (mapId: string) => void;
  /** OnParametersChanged of the map: Action_InvalidateMapSize. */
  onMapParametersChanged: () => void;
  /** Handler_Search_OnChange (OnChange and Submit), and Handler_Search_ClearString with "". */
  onSearchChanged: (currentString: string) => void;
  /** OnClick_LegendInfo: opens the legend sheet. */
  onLegendInfoClicked: () => void;
  /** Handler_StatisticsList_Clicked(Event_Id): a locality row or the link of a map popup. */
  onLocalityClicked: (localityId: string) => void;
  /** Handler_FilterSheetLoaded. */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
  /** The FilterSheet gives the id of its bottom sheet. */
  onFilterSheetInitialized: (id: string) => void;
  /** Handler_FilterSheetApplyFilters(OptionLists, HasFilterApplied). */
  onApplyFilters: (optionLists: Filter_Common_Control_List[], hasFilterApplied: boolean) => void;
  /** The legend sheet gives the id of its bottom sheet. */
  onLegendSheetInitialized: (id: string) => void;
}

export function useCountryDetails(inputCountryCode: string): CountryDetailsFlows {
  const navigate = useOsNavigate();
  // The screen variables that the view cache brings back; OnInitialize: OriginalCountryCode = CountryCode.
  const [countryCode, setCountryCode] = useViewState('CountryCode', inputCountryCode);
  const [originalCountryCode] = useViewState('OriginalCountryCode', countryCode);
  const [searchString, setSearchString] = useViewState('SearchString', '');
  const [hasFiltersApplied, setHasFiltersApplied] = useViewState('HasFiltersApplied', false);
  // Action_DefineList ran from a search event before any data arrived (it then lists the skeleton records).
  const [searchTouched, setSearchTouched] = useState(false);

  // Variables that only the handlers and the JavaScript callbacks read.
  const localMapId = useRef('');
  const bottomSheetId = useRef('');
  const filterBottomSheetId = useRef('');
  const bottomSheetIsLoaded = useRef(false);
  const bottomSheetShowSubscription = useRef(false);
  const fetchVariables = useRef({ countryCode, originalCountryCode, searchString, hasFiltersApplied, localMapId: '' });
  useEffect(() => {
    fetchVariables.current = {
      countryCode,
      originalCountryCode,
      searchString,
      hasFiltersApplied,
      localMapId: localMapId.current,
    };
  });

  // OnReady: a view that the view cache restores with its data keeps it; otherwise Action_RefreshData. The query
  // fetches on mount unless the view cache brought its data back.
  const getLocalityStatistics = useCountryLocalityStatisticsQuery(countryCode, () => ({
    ...fetchVariables.current,
    localMapId: localMapId.current,
  }));
  const fetched = getLocalityStatistics.data;
  const isLoaded = fetched !== undefined || getLocalityStatistics.isError;
  // Action_RefreshData puts GetSkeletonList_UI_LocalityStatistics(10) in Out_LocalitiesStatistics before the
  // refresh; a failed fetch keeps it (the offline capture shows "10 Localities").
  const skeletonOut = useMemo(() => getSkeletonList_UI_LocalityStatistics(10), []);
  const out = fetched?.localities ?? skeletonOut;
  const countryName = fetched?.countryName ?? '';

  // OnAfterFetch (after a successful fetch): Action_DefineList, Center = Out.Current latitude and longitude,
  // MarkersList.
  const list = fetched
    ? defineList(fetched.localities, searchString)
    : searchTouched
      ? defineList(out, searchString)
      : [];
  const firstLat = fetched ? (fetched.localities[0]?.latitude ?? 0) : null;
  const firstLong = fetched ? (fetched.localities[0]?.longitude ?? 0) : null;
  const mapOptions = useMemo<MapOptions | null>(
    () => (firstLat === null || firstLong === null ? null : mapOptionsAt(firstLat, firstLong)),
    [firstLat, firstLong],
  );
  const markersList = useMemo(() => (fetched ? fetched.localities.map(toMarker) : []), [fetched]);

  /* Handler_StatisticsList_Clicked: without access to the region, the upgrade pop-up; else Locality_Details with the
     locality label. */
  const handler_StatisticsList_Clicked = async (event_Id: string): Promise<void> => {
    if (event_Id === '') return;
    const hasAccess = await hasAccessToRegion(normalizeLongId(event_Id), countryCode);
    if (!hasAccess) {
      await showUpgradePopUp();
      return;
    }
    const position = out.findIndex((p) => p.localityId === event_Id);
    const localityLabel = position !== -1 ? getLocalityLabel(out[position]?.name ?? '', countryName) : '';
    navigate('/UBTConnect/Locality_Details', {
      LocalityId: normalizeLongId(event_Id),
      PreloadedLocalityLabel: localityLabel,
    });
  };
  // The popup links of the map keep the first callback, so they call the newest handler through this ref.
  const latestStatisticsClicked = useRef(handler_StatisticsList_Clicked);
  useEffect(() => {
    latestStatisticsClicked.current = handler_StatisticsList_Clicked;
  });
  const statisticsListClicked = (id: string) => {
    latestStatisticsClicked.current(id).catch(raiseToFlowHandler);
  };

  /* Action_InvalidateMapSize. */
  const action_InvalidateMapSize = () => {
    try {
      if (localMapId.current !== '') {
        map_InvalidateSize(localMapId.current);
        map_FitBoundsAuto(localMapId.current);
      }
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  /* Action_ManuallyOpenFilterSheet, from Handler_BrowseCountries. */
  const handler_BrowseCountries = async (): Promise<void> => {
    if (!bottomSheetIsLoaded.current) return;
    if (bottomSheetShowSubscription.current) await showUpgradePopUp();
    else bottomSheetOpen(filterBottomSheetId.current);
  };

  /* Handler_FilterSheetApplyFilters: CountryCode from the first option list, HasFiltersApplied, refresh. */
  const handler_FilterSheetApplyFilters = (optionLists: Filter_Common_Control_List[], hasFilterApplied: boolean) => {
    const next = appliedCountryCode(optionLists, originalCountryCode);
    setHasFiltersApplied(hasFilterApplied);
    fetchVariables.current = { ...fetchVariables.current, countryCode: next, hasFiltersApplied: hasFilterApplied };
    if (next === countryCode) void getLocalityStatistics.refetch();
    else setCountryCode(next);
  };

  /* Handler_Search_OnChange and Handler_Search_ClearString. */
  const handler_Search_OnChange = (event_CurrentString: string) => {
    setSearchString(event_CurrentString);
    setSearchTouched(true);
  };

  const startFilter = useMemo<Filter_Common>(() => ({ CountryIds: [originalCountryCode] }), [originalCountryCode]);

  return {
    countryName,
    localities: out,
    list,
    searchString,
    isLoaded,
    mapOptions,
    markersList,
    startFilter,
    onSelectCountryClicked: () => {
      handler_BrowseCountries().catch(raiseToFlowHandler);
    },
    onMarkerClicked: (markerObj) => {
      map_Marker_OpenPopUp(markerObj);
    },
    onMapSetCallbacks: (mapId) => {
      map_SetPopupBindingCallback(mapId, (marker) =>
        directory_BrowseByCountry_TooltipBuilder(marker, statisticsListClicked),
      );
    },
    onMapInitialized: (mapId) => {
      // AsyncInvalidate = setTimeout(…, 0)
      localMapId.current = mapId;
      setTimeout(action_InvalidateMapSize, 0);
    },
    onMapParametersChanged: action_InvalidateMapSize,
    onSearchChanged: handler_Search_OnChange,
    onLegendInfoClicked: () => {
      bottomSheetOpen(bottomSheetId.current);
    },
    onLocalityClicked: statisticsListClicked,
    onFilterSheetLoaded: (showSubscriptionOnClick) => {
      bottomSheetIsLoaded.current = true;
      bottomSheetShowSubscription.current = showSubscriptionOnClick;
    },
    onFilterSheetInitialized: (id) => {
      filterBottomSheetId.current = id;
    },
    onApplyFilters: handler_FilterSheetApplyFilters,
    onLegendSheetInitialized: (id) => {
      bottomSheetId.current = id;
    },
  };
}
