import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import { NotCaptured } from '../../components/NotCaptured';
import { OSList } from '../../components/OSList';
import type L from '../../shared/Leaflet/lib/leaflet';
import { map_InvalidateSize } from '../../shared/Leaflet/lib/actions';
import type { MapOptions, MarkerWithWindow, TileLayer, ZoomControlOptions } from '../../shared/Leaflet/lib/structures';
import { LeafletMap } from '../../shared/Leaflet/LeafletMap';
import { bottomSheetOpen } from '../../shared/osui/lib/actions';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { Directory_LegendBottomSheet } from '../../shared/UBTConnect/Directory_LegendBottomSheet';
import { FilterSheet } from '../../shared/UBTConnect/FilterSheet';
import { hasAccessToRegion } from '../../shared/UBTConnect/lib/actions';
import { Choice, Connect_Entity } from '../../shared/UBTConnect/lib/staticEntities';
import type {
  Filter_Common,
  Filter_Common_Control_List,
  Filter_Common_Options,
  UI_TypedStatistics,
} from '../../shared/UBTConnect/lib/structures';
import { Statistics_TypedItem } from '../../shared/UBTConnect/Statistics_TypedItem';
import { SubLayout_Browse_Section } from '../../shared/UBTConnect/SubLayout_Browse_Section';
import { Connect_BottomBar_Items } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { Columns_Two } from '../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../shared/UBTConnectLibrary/CustomText';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../shared/UBTConnectLibrary/IconText';
import { Input } from '../../shared/UBTConnectLibrary/Input';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import { getClass_Color } from '../../shared/UBTConnectLibrary/lib/actions';
import {
  Shape,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons2 as UBT_Icons2_Library,
  UBT_Size,
  UBT_VerticalAlign,
} from '../../shared/UBTConnectLibrary/lib/staticEntities';
import type { SearchInput } from '../../shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '../../shared/UBTConnectLibrary/SkeletonSection';
import { jSUtils_String_RemoveAccents } from '../../shared/UBTJavaScriptUtils/lib/actions';
import { showUpgradePopUp } from '../../shell/dialogs';
import { raiseToFlowHandler } from '../../shell/exceptions';
import { useOsNavigate, useViewState } from '../../shell/navigation';
import { useGetLocalityStatistics } from './api';
import {
  directory_BrowseByCountry_TooltipBuilder,
  getLocalityLabel,
  getSkeletonList_UI_LocalityStatistics,
  map_FitBoundsAuto,
  map_Marker_OpenPopUp,
  map_SetPopupBindingCallback,
} from './components/actions';
import { UBT_Icons2 } from './components/staticEntities';
import type { LocalityStatistics } from './types';

/** Tile layer of the map (CountryDetails.mvc.js:431-447). */
const TILE_LAYER: TileLayer = {
  Url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  Options: { MinZoom: 2, MaxZoom: 20, Subdomains: ['a', 'b', 'c', 'd'] },
};

/** Zoom control (CountryDetails.mvc.js:471-490): custom bottom-right control, icons in the Primary colour. */
const ZOOM_CONTROL_OPTIONS: ZoomControlOptions = {
  position: 'bottomright',
  zoomInTitle: 'Zoom in',
  zoomInClass: `ubt-icon ${UBT_Icons2.Add} ${getClass_Color(UBT_Color.Primary)}`,
  zoomOutTitle: 'Zoom out',
  zoomOutClass: `ubt-icon ${UBT_Icons2.Remove} ${getClass_Color(UBT_Color.Primary)}`,
  isAddGoToMyLocationButton: false,
  MyLocationButtonClass: `ubt-icon ${UBT_Icons2.MyLocationFill} ${getClass_Color(UBT_Color.Primary)}`,
  MyLocationButtonTitle: 'Your location',
  useCustomZoomControl: true,
};

/** Search input options (CountryDetails.mvc.js:669-680): enabled with more than one locality. */
const searchOptions = (count: number): SearchInput => ({
  IsEnabled: count > 1,
  SearchPrompt: 'Search locality',
  Debounce_DelayMS: 200,
  BorderRadius: Shape.Rounded,
});

/** Skeleton card of the loading section (CountryDetails.mvc.js:1013-1028, three identical records). */
const LOADING_STATISTICS: UI_TypedStatistics = {
  UI_StatisticsTexts: { Members: '111', Households: '11', Brothers: '11', Sisters: '11', SupperMeetings: '123' },
  Name: 'Loading Name',
};

/** FilterSheet inputs (CountryDetails.mvc.js:1337-1349): the country list only, ordered first, without "All". */
const FILTER_OPTIONS: Filter_Common_Options = { HasCountries: { Enable: true, Order: 1, AddAllOptions: false } };

/** One marker per locality (OnAfterFetch_GetLocalityStatistics, CountryDetails.mvc.js:2105-2163). */
const toMarker = (l: LocalityStatistics): MarkerWithWindow => ({
  Marker: {
    Id: l.localityId,
    Type: Connect_Entity.Locality,
    ExtraData: l.statisticsTitle,
    Latlng: [l.latitude, l.longitude],
    Options: {
      Icon: {
        iconUrl: '/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg',
        iconSize: [20, 24],
        iconAnchor: [10, 24],
        popupAnchor: [0, -24],
      },
    },
  },
  Popup: { CloseButton: true, AutoClose: false, Interactive: true, Content: 'Dummy' },
});

/** Action_DefineList (CountryDetails.mvc.js:1723-1760): all localities, or those whose name contains the search
    (accents removed, case ignored: Index(…, 0, False, True)). */
function defineList(out: LocalityStatistics[], searchString: string): LocalityStatistics[] {
  if (searchString === '') return out;
  const search = jSUtils_String_RemoveAccents(searchString).toLowerCase();
  return out.filter((p) => jSUtils_String_RemoveAccents(p.name).toLowerCase().includes(search));
}

/** LongIntegerToText(TextToLongInteger(Text)): an invalid number is 0. */
function normalizeLongId(text: string): string {
  const trimmed = text.trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
}

/** UBTConnect Directory_Locality.CountryDetails (CountryDetails.mvc.js: model :1-125, view :126-1452, controller
    :1453-2752). Captured dom/default.html, loading.html, offline.html. */
export default function CountryDetails() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  // Screen variables the view cache brings back (P-BACK); OnInitialize: OriginalCountryCode = CountryCode (:2559-2575)
  const [countryCode, setCountryCode] = useViewState('CountryCode', params.get('CountryCode') ?? '');
  const [originalCountryCode] = useViewState('OriginalCountryCode', countryCode);
  const [searchString, setSearchString] = useViewState('SearchString', '');
  const [hasFiltersApplied, setHasFiltersApplied] = useViewState('HasFiltersApplied', false);
  /* Action_DefineList ran from a search event before any data arrived (it then lists the skeleton records). */
  const [searchTouched, setSearchTouched] = useState(false);

  /* Variables only handlers and the JS callbacks read. */
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

  /* OnReady: a view restored from the cache with its data keeps it; otherwise Action_RefreshData (:1588-1630, :1500-1527)
     — the query fetches on mount unless the view cache brought its data back. */
  const getLocalityStatistics = useGetLocalityStatistics(countryCode, () => ({
    ...fetchVariables.current,
    localMapId: localMapId.current,
  }));
  const fetched = getLocalityStatistics.data;
  const isDataFetched = fetched !== undefined;
  const hasFetchError = getLocalityStatistics.isError;
  const isLoaded = isDataFetched || hasFetchError;
  /* Action_RefreshData puts GetSkeletonList_UI_LocalityStatistics(10) in Out_LocalitiesStatistics before the refresh;
     a failed fetch keeps it (offline.html:177 "10 Localities"). */
  const skeletonOut = useMemo(() => getSkeletonList_UI_LocalityStatistics(10), []);
  const out = fetched?.localities ?? skeletonOut;
  const countryName = fetched?.countryName ?? '';

  /* OnAfterFetch (after a successful fetch): Action_DefineList, Center = Out.Current lat/long, MarkersList. */
  const localList = fetched
    ? defineList(fetched.localities, searchString)
    : searchTouched
      ? defineList(out, searchString)
      : [];
  const firstLat = fetched ? (fetched.localities[0]?.latitude ?? 0) : null;
  const firstLong = fetched ? (fetched.localities[0]?.longitude ?? 0) : null;
  const mapOptions = useMemo<MapOptions | null>(
    () =>
      firstLat === null || firstLong === null
        ? null
        : {
            Center: [firstLat, firstLong],
            Zoom: 5,
            MinZoom: 2,
            MaxZoom: 20,
            MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 },
            AttributionControl: false,
            MaxBoundsViscosity: 0,
          },
    [firstLat, firstLong],
  );
  const markersList = useMemo(() => (fetched ? fetched.localities.map(toMarker) : []), [fetched]);
  /* Statistics_TypedItem In_ImageEntityId reads Out_LocalitiesStatistics.Current (:1240): the row itself while
     Local_List is the Out list (SearchString ""), the first record once a search made Local_List a new list. */
  const imageEntityId = (item: LocalityStatistics) =>
    searchString === '' ? item.mainHallSubdivisionId : (out[0]?.mainHallSubdivisionId ?? '0');

  /* Handler_StatisticsList_Clicked (:2366-2440). */
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
  const latestStatisticsClicked = useRef(handler_StatisticsList_Clicked);
  useEffect(() => {
    latestStatisticsClicked.current = handler_StatisticsList_Clicked;
  });
  const statisticsListClicked = (id: string) => {
    latestStatisticsClicked.current(id).catch(raiseToFlowHandler);
  };

  /* Action_InvalidateMapSize (:2237-2262). */
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

  /* Action_ManuallyOpenFilterSheet (:1673-1712), from Handler_BrowseCountries. */
  const handler_BrowseCountries = async (): Promise<void> => {
    if (!bottomSheetIsLoaded.current) return;
    if (bottomSheetShowSubscription.current) await showUpgradePopUp();
    else bottomSheetOpen(filterBottomSheetId.current);
  };

  /* Handler_FilterSheetApplyFilters (:1793-1835): CountryCode from the first option list, HasFiltersApplied, refresh. */
  const handler_FilterSheetApplyFilters = (optionLists: Filter_Common_Control_List[], hasFilterApplied: boolean) => {
    const selectedIds = optionLists[0]?.SelectedIds ?? [];
    const first = selectedIds[0] ?? '';
    const next = selectedIds.length === 0 || first === Choice.None ? originalCountryCode : first;
    setHasFiltersApplied(hasFilterApplied);
    fetchVariables.current = { ...fetchVariables.current, countryCode: next, hasFiltersApplied: hasFilterApplied };
    if (next === countryCode) void getLocalityStatistics.refetch();
    else setCountryCode(next);
  };

  /* Handler_Search_OnChange (:2197-2220) / Handler_Search_ClearString (:2501-2520). */
  const handler_Search_OnChange = (event_CurrentString: string) => {
    setSearchString(event_CurrentString);
    setSearchTouched(true);
  };

  const startFilter = useMemo<Filter_Common>(() => ({ CountryIds: [originalCountryCode] }), [originalCountryCode]);
  const localityCount = out.length;

  return (
    <>
      <Layout_DetailPage
        id="$b1"
        placeholderHeaderTitle={<span data-expression="">{countryName === '' ? 'Browse Directory' : countryName}</span>}
        content={
          <SubLayout_Browse_Section
            id="$b2"
            placeholderTopSection={
              <CustomContainer
                id="$b3"
                options={{
                  Background: { BackgroundColor: UBT_Color.Neutral0 },
                  PaddingSize: { GeneralSizeId: UBT_Size.Base },
                }}
              >
                <div
                  data-container=""
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    handler_BrowseCountries().catch(raiseToFlowHandler);
                  }}
                >
                  <Columns_Two
                    id="$b4"
                    extendedClasses="margin-left-base"
                    columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                    left={
                      <IconText
                        id="$b5"
                        spacingSize={UBT_Size.Base}
                        text="Select another country to view"
                        textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}
                      >
                        <Icon id="$b6" inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons2.LocationOn} />
                      </IconText>
                    }
                    right={<Icon id="$b7" inIconId={UBT_Icons2_Library.ChevronRight} />}
                  />
                </div>
              </CustomContainer>
            }
            placeholderBottomSection={
              <>
                {mapOptions !== null && isLoaded ? (
                  <LeafletMap
                    id="LeafletMap"
                    useClustering
                    markersList={markersList}
                    tileLayer={TILE_LAYER}
                    mapOptions={mapOptions}
                    zoomControlOptions={ZOOM_CONTROL_OPTIONS}
                    onOnMarkerClicked={(_id, _mapId, _type, _extraData, _lat, _long, markerObj: L.Marker) => {
                      map_Marker_OpenPopUp(markerObj);
                    }}
                    onSetCallbacks={(mapId) => {
                      // LeafletMapSetCallbacks (:2270-2305): the popup content comes from the tooltip builder
                      map_SetPopupBindingCallback(mapId, (marker) =>
                        directory_BrowseByCountry_TooltipBuilder(marker, statisticsListClicked),
                      );
                    }}
                    onOnInitialized={(mapId) => {
                      // Handler_LeafletMapOnInitialized (:2460-2490): AsyncInvalidate = setTimeout(…, 0)
                      localMapId.current = mapId;
                      setTimeout(action_InvalidateMapSize, 0);
                    }}
                    onOnParametersChanged={action_InvalidateMapSize}
                  />
                ) : (
                  <SkeletonSection id="$b9" inIsLoading>
                    <div className="leaflet-container" data-container="" />
                  </SkeletonSection>
                )}
                <CustomContainer
                  id="$b10"
                  options={{
                    Background: { BackgroundColor: UBT_Color.Neutral0 },
                    PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
                  }}
                >
                  <CustomContainer id="Block_Search" options={{ MarginSize: { VerticalSizeId: UBT_Size.Small } }}>
                    <Input
                      id="Block_SearchInput"
                      inOptions={searchOptions(localityCount)}
                      onEventSubmit={handler_Search_OnChange}
                      onEventOnChange={handler_Search_OnChange}
                      onEventClearString={() => {
                        handler_Search_OnChange('');
                      }}
                    />
                  </CustomContainer>
                  <CustomContainer id="Legend" options={{ PaddingSize: { VerticalSizeId: UBT_Size.Base } }}>
                    <Columns_Two
                      id="Title"
                      columnOptions={{
                        ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
                        VerticalAlign: UBT_VerticalAlign.Center,
                      }}
                      left={
                        <CustomText
                          id="$b15"
                          inTextOptions={{
                            Color: UBT_Color.Neutral10,
                            FontSize: UBT_FontSize.Base,
                            FontWeight: UBT_FontWeight.SemiBold,
                          }}
                          inText="Browse by Locality"
                        />
                      }
                      right={
                        <Icon
                          id="$b16"
                          inColorId={UBT_Color.Primary}
                          inIconId={UBT_Icons2.Info}
                          inSizeId={UBT_IconSize.NonStandard_16}
                          onClick={() => {
                            // OnClick_LegendInfo (:1559-1585)
                            bottomSheetOpen(bottomSheetId.current);
                          }}
                        />
                      }
                    />
                    <CustomContainer id="LocalityCount" options={{ PaddingSize: { TopSizeId: UBT_Size.Base } }}>
                      <div data-container="" style={{ textAlign: 'right' }}>
                        <SkeletonSection id="$b18" inIsLoading={!isLoaded}>
                          <CustomText
                            id="$b19"
                            inText={`${localityCount}${localityCount === 1 ? ' Locality' : ' Localities'}`}
                            inJustifyText
                            inTextOptions={{
                              Color: UBT_Color.Neutral7,
                              FontSize: UBT_FontSize.Small,
                              FontWeight: UBT_FontWeight.Regular,
                            }}
                          />
                        </SkeletonSection>
                      </div>
                    </CustomContainer>
                  </CustomContainer>
                  {!isLoaded ? (
                    <SkeletonSection id="$b20" inIsLoading>
                      {(['$b21', '$b22', '$b23'] as const).map((id) => (
                        <div key={id} data-container="">
                          <Statistics_TypedItem
                            id={id}
                            inImageEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions}
                            inHasImage
                            uICountryStatistics={LOADING_STATISTICS}
                          />
                        </div>
                      ))}
                    </SkeletonSection>
                  ) : localList.length === 0 && searchString !== '' ? (
                    <NotCaptured name="ConnectPatterns.EmptyList $b24 (IconId search; not rendered in any captured state)">
                      {`No results found for '${searchString}'`} Sorry, we couldn&apos;t find any results for your
                      search. Please check your spelling or try different keywords.
                    </NotCaptured>
                  ) : (
                    <OSList
                      className="list list-group"
                      animateItems
                      positionRelative
                      source={localList}
                      keyOf={(item, i) => `${item.localityId}_${i}`}
                    >
                      {(item, i) => (
                        <div
                          data-container=""
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            statisticsListClicked(item.localityId);
                          }}
                        >
                          <Statistics_TypedItem
                            id={`l1-122_${i}-$b25`}
                            inHasImage
                            uICountryStatistics={{ UI_StatisticsTexts: item.typedStatisticsTexts, Name: item.name }}
                            inImageEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions}
                            inImageEntityId={imageEntityId(item)}
                          />
                        </div>
                      )}
                    </OSList>
                  )}
                </CustomContainer>
              </>
            }
          />
        }
        bottom={<BottomBarMenu id="$b26" activeItem={Connect_BottomBar_Items.Directory} />}
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b27" />}
      />
      <FilterSheet
        id="$b28"
        extendedClasses="bottom-sheet-higher-z-index"
        inStartFilter={startFilter}
        inOptions={FILTER_OPTIONS}
        onLoaded={(showSubscriptionOnClick) => {
          // Handler_FilterSheetLoaded (:2024-2050)
          bottomSheetIsLoaded.current = true;
          bottomSheetShowSubscription.current = showSubscriptionOnClick;
        }}
        onSheetInitialized={(id) => {
          filterBottomSheetId.current = id;
        }}
        onApplyFilters={(optionLists, _choices, _flatLists, _localities, _countries, _sortBy, hasFilters) => {
          handler_FilterSheetApplyFilters(optionLists, hasFilters);
        }}
      />
      <Directory_LegendBottomSheet
        id="$b29"
        showLocalities={false}
        onSheetInitialized={(id) => {
          bottomSheetId.current = id;
        }}
      />
    </>
  );
}
