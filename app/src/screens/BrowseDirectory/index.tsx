import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { map_InvalidateSize } from '../../shared/Leaflet/lib/actions';
import {
  LeafletMap,
  type MapOptions,
  type MarkerWithWindow,
  type TileLayer,
  type ZoomControlOptions,
} from '../../shared/Leaflet/LeafletMap';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { hasAccessToRegion } from '../../shared/UBTConnect/lib/actions';
import { Connect_Entity } from '../../shared/UBTConnect/lib/staticEntities';
import { StatisticsList } from '../../shared/UBTConnect/StatisticsList';
import { SubLayout_Browse_Section } from '../../shared/UBTConnect/SubLayout_Browse_Section';
import { Connect_BottomBar_Items } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { Columns_Two } from '../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../shared/UBTConnectLibrary/IconText';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import { getClass_Color, getLookupConcepts } from '../../shared/UBTConnectLibrary/lib/actions';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Icons2,
  UBT_Size,
} from '../../shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions } from '../../shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '../../shared/UBTConnectLibrary/SkeletonSection';
import { UBT_Icons2 as UBTConnect_Icons2 } from '../../shared/UBTConnect/lib/staticEntities';
import { getLocalityStatistics } from './api';
import {
  directory_BrowseByCountry_TooltipBuilder,
  getLocalityLabel,
  getSkeletonList_UI_LocalityStatistics,
  map_FitBoundsAuto,
  map_Marker_OpenPopUp,
  map_SetPopupBindingCallback,
} from './components/actions';
import { UBT_Icons2_Add, UBT_Icons2_MyLocationFill, UBT_Icons2_Remove } from './components/staticEntities';
import type { LocalityStatistics } from './types';

/** Screen variables and the data action's outputs (BrowseDirectory.mvc.js model :24-54). */
interface Model {
  MarkersList: MarkerWithWindow[];
  Center: number[];
  /** GetLocalityStatistics.Out_LocalitiesStatistics (the skeleton list while refreshing). */
  localities: LocalityStatistics[];
  /** GetLocalityStatistics.CountryName. */
  countryName: string;
  /** GetLocalityStatistics.IsDataFetched. */
  isDataFetched: boolean;
}

const INITIAL: Model = { MarkersList: [], Center: [], localities: [], countryName: '', isDataFetched: false };

/** CustomContainer Options of the top section (mvc.js:226-241). */
const TOP_CONTAINER: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
};
/** CustomContainer Options around the statistics list (mvc.js:551-561). */
const LIST_CONTAINER: ContainerOptions = { Background: { BackgroundColor: UBT_Color.Neutral0 } };

/** LeafletMap TileLayer (mvc.js:391-408). */
const TILE_LAYER: TileLayer = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Options: { MinZoom: 2, MaxZoom: 20, Subdomains: ['a', 'b', 'c', 'd'] },
};

/** LeafletMap ZoomControlOptions (mvc.js:433-453). */
const ZOOM_CONTROL: ZoomControlOptions = {
  position: 'bottomright',
  zoomInTitle: 'Zoom in',
  zoomInClass: `ubt-icon ${UBT_Icons2_Add} ${getClass_Color(UBT_Color.Neutral8)}`,
  zoomOutTitle: 'Zoom out',
  zoomOutClass: `ubt-icon ${UBT_Icons2_Remove} ${getClass_Color(UBT_Color.Neutral8)}`,
  isAddGoToMyLocationButton: false,
  MyLocationButtonClass: `ubt-icon ${UBT_Icons2_MyLocationFill} ${getClass_Color(UBT_Color.Primary)}`,
  MyLocationButtonTitle: 'Your location',
  useCustomZoomControl: true,
};

/** LeafletMap MapOptions (mvc.js:411-432). */
const mapOptions = (center: number[]): MapOptions => ({
  Center: center,
  Zoom: 5,
  MinZoom: 2,
  MaxZoom: 20,
  MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 },
  AttributionControl: false,
  MaxBoundsViscosity: 0,
});

/** OnAfterFetch's Local_MarkerWithTooltip of a row (mvc.js:855-898): a new record each row (Tooltip and the other
    Popup fields keep their defaults). */
const toMarker = (l: LocalityStatistics): MarkerWithWindow => ({
  Marker: {
    Id: l.localityId,
    Type: Connect_Entity.Locality,
    ExtraData: l.statistics.Title ?? '',
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

/** TextToLongInteger then LongIntegerToText: an integer text as is (normalised), anything else "0". */
const asLongText = (text: string): string => (/^\s*[-+]?\d+\s*$/.test(text) ? BigInt(text.trim()).toString() : '0');

/** UBTConnect Directory_Locality.BrowseDirectory (BrowseDirectory.mvc.js: model :1-101, view :102-702, controller
    :703-1483). Captured dom/default.html, loading.html, offline.html. */
export default function BrowseDirectory() {
  const [params] = useSearchParams();
  const countryCode = params.get('CountryCode') ?? '';
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [model, setModel] = useViewState<Model>('Model', INITIAL);
  const modelRef = useRef(model);
  const localMapId = useRef('');
  const alive = useRef(true);
  const isReady = useRef(false);

  const set = (patch: Partial<Model> | ((m: Model) => Partial<Model>)) => {
    const next = { ...modelRef.current, ...(typeof patch === 'function' ? patch(modelRef.current) : patch) };
    modelRef.current = next;
    setModel(next);
  };

  /** OnAfterFetch_GetLocalityStatistics (mvc.js:811-917): Center = the Current row's coordinates (row 0 outside a For
      Each; an empty list's Current is the default record), then one marker per row appended to MarkersList. The
      GetCallback JS node's result is not used (:838-846). */
  const onAfterFetch = (localities: LocalityStatistics[]) => {
    const current = localities.at(0);
    set((m) => ({
      Center: [current?.latitude ?? 0, current?.longitude ?? 0],
      MarkersList: [...m.MarkersList, ...localities.map(toMarker)],
    }));
  };

  /** Action_RefreshData (mvc.js:994-1033): the skeleton list (10), then the data action and its OnAfterFetch. */
  const refreshData = async () => {
    set({ localities: getSkeletonList_UI_LocalityStatistics(10) });
    const data = await getLocalityStatistics(countryCode);
    if (!alive.current) return;
    set({ localities: data.localities, countryName: data.countryName, isDataFetched: true });
    onAfterFetch(data.localities);
  };

  /* ScreenEvent_OnReady (mvc.js:1308-1354): a view restored from the cache with its data fetched keeps it; otherwise
     Action_RefreshData. A failed fetch goes to the screen's handleError → the flow handler (Q1). */
  useEffect(() => {
    alive.current = true;
    // OnReady once per screen instance (React's development double effect must not fetch twice)
    if (!isReady.current) {
      isReady.current = true;
      if (!(restored && modelRef.current.isDataFetched)) refreshData().catch(raiseToFlowHandler);
    }
    return () => {
      alive.current = false;
    };
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Action_InvalidateMapSize (mvc.js:961-993). */
  const invalidateMapSize = () => {
    if (localMapId.current === '') return;
    map_InvalidateSize(localMapId.current);
    map_FitBoundsAuto(localMapId.current);
  };

  /** LeafletMapSetCallbacks (mvc.js:1064-1104, JavaScript1JS :1471-1478): the popup content is
      Directory_BrowseByCountry_TooltipBuilder(marker, Handler_StatisticsList_Clicked). */
  const clickedRef = useRef<(id: string) => Promise<void>>(() => Promise.resolve());
  const onSetCallbacks = (mapId: string) => {
    map_SetPopupBindingCallback(mapId, (marker) =>
      directory_BrowseByCountry_TooltipBuilder(marker, (id) => {
        clickedRef.current(id).catch(raiseToFlowHandler);
      }),
    );
  };

  /** Handler_LeafletMapOnInitialized (mvc.js:770-801): Local_MapId, then AsyncInvalidate (setTimeout 0, :1461-1465). */
  const onMapInitialized = (mapId: string) => {
    localMapId.current = mapId;
    setTimeout(() => {
      try {
        invalidateMapSize();
      } catch (error) {
        raiseToFlowHandler(error);
      }
    }, 0);
  };

  /** StatisticsListOnParametersChhanged (mvc.js:1034-1063). */
  const onStatisticsListParametersChanged = () => {
    try {
      invalidateMapSize();
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  /** Handler_BrowseCountries (mvc.js:937-960). */
  const onBrowseCountries = () => {
    navigate('/UBTConnect/BrowseCountries', {});
  };

  /** Handler_StatisticsList_Clicked (mvc.js:1123-1199). */
  const onStatisticsListClicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(asLongText(eventId), countryCode);
    if (!hasAccess) {
      await showUpgradePopUp();
      return;
    }
    const m = modelRef.current;
    // ListIndexOf (first row with that LocalityId); not found (-1) keeps LocalityLabel ""
    const row = m.localities.find((l) => l.localityId === eventId);
    const localityLabel = row ? getLocalityLabel(row.name, m.countryName) : '';
    navigate('/UBTConnect/Locality_Details', {
      LocalityId: asLongText(eventId),
      PreloadedLocalityLabel: localityLabel,
    });
  };

  useEffect(() => {
    clickedRef.current = onStatisticsListClicked;
  });

  return (
    <Layout_DetailPage
      id="$b1"
      placeholderHeaderTitle={
        <span data-expression="">{model.countryName === '' ? 'Browse Directory' : model.countryName}</span>
      }
      content={
        <SubLayout_Browse_Section
          id="$b2"
          placeholderTopSection={
            <CustomContainer id="$b3" options={TOP_CONTAINER}>
              <div data-container="" style={{ cursor: 'pointer' }} onClick={onBrowseCountries}>
                <Columns_Two
                  id="$b4"
                  columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                  extendedClasses="margin-left-base"
                  left={
                    <IconText id="$b5" text="Select another country to view" spacingSize={UBT_Size.Base}>
                      <Icon id="$b6" inIconId={UBTConnect_Icons2.BookClosed} />
                    </IconText>
                  }
                  right={<Icon id="$b7" inIconId={UBT_Icons2.ChevronRight} />}
                />
              </div>
            </CustomContainer>
          }
          placeholderBottomSection={
            <>
              {model.Center.length !== 0 ? (
                <LeafletMap
                  id="LeafletMap"
                  tileLayer={TILE_LAYER}
                  markersList={model.MarkersList}
                  useClustering
                  mapOptions={mapOptions(model.Center)}
                  zoomControlOptions={ZOOM_CONTROL}
                  onOnInitialized={onMapInitialized}
                  onSetCallbacks={onSetCallbacks}
                  // Handler_LeafletMapOnMarker_Clicked (mvc.js:1217-1250): Map_Marker_OpenPopUp(MarkerObj)
                  onOnMarkerClicked={(...args) => {
                    map_Marker_OpenPopUp(args[6]);
                  }}
                />
              ) : (
                <SkeletonSection id="$b9" inIsLoading>
                  <div className="leaflet-container" data-container="" />
                </SkeletonSection>
              )}
              <CustomContainer id="$b10" options={LIST_CONTAINER}>
                <StatisticsList
                  id="$b11"
                  inSearchPrompt={`Search ${getLookupConcepts(true).Locality.Singular}`}
                  inShowSubtitle
                  inIsLoading={!model.isDataFetched}
                  inStatistics={model.localities.map((l) => ({ Id: l.localityId, StatisticsOptions: l.statistics }))}
                  onEventClicked={(id) => {
                    onStatisticsListClicked(id).catch(raiseToFlowHandler);
                  }}
                  onOnParametersChangedEv={onStatisticsListParametersChanged}
                />
              </CustomContainer>
            </>
          }
        />
      }
      bottom={<BottomBarMenu id="$b12" activeItem={Connect_BottomBar_Items.Directory} />}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b13" />}
    />
  );
}
