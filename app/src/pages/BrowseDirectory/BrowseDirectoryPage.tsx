import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import {
  DirectoryMap,
  type MapOptions,
  type TileLayer,
  type ZoomControlOptions,
} from '@/components/directory/DirectoryMap';
import { StatisticsList } from '@/components/directory/StatisticsList';
import { DetailLayout } from '@/components/layout';
import { BottomBar } from '@/components/layout/BottomBar';
import { BrowseSection } from '@/components/layout/BrowseSection';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useNavigateBack } from '@/platform/navigation';
import { UBT_Icons2 as UBTConnect_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { getClass_Color, getLookupConcepts } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_Color, UBT_ColumnBehaviour, UBT_Icons2, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { useBrowseDirectory } from './hooks/useBrowseDirectory';
import { readBrowseDirectoryInputs } from './inputs';
import { UBT_Icons2_Add, UBT_Icons2_MyLocationFill, UBT_Icons2_Remove } from './staticEntities';

/** Options of the CustomContainer of the top section. */
const TOP_CONTAINER: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
};
/** Options of the CustomContainer around the statistics list. */
const LIST_CONTAINER: ContainerOptions = { Background: { BackgroundColor: UBT_Color.Neutral0 } };

/** TileLayer of the LeafletMap. */
const TILE_LAYER: TileLayer = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Options: { MinZoom: 2, MaxZoom: 20, Subdomains: ['a', 'b', 'c', 'd'] },
};

/** ZoomControlOptions of the LeafletMap. */
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

/** MapOptions of the LeafletMap, centred on Center. */
const mapOptions = (center: number[]): MapOptions => ({
  Center: center,
  Zoom: 5,
  MinZoom: 2,
  MaxZoom: 20,
  MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 },
  AttributionControl: false,
  MaxBoundsViscosity: 0,
});

/** @origin UBTConnect.Directory_Locality.BrowseDirectory
    The localities of a country: the detail layout titled with the country name ("Browse Directory" before the first
    answer), with SubLayout_Browse_Section as content. Its top section links to BrowseCountries. Its bottom section
    has the LeafletMap with one marker per locality (a skeleton until Center is set) and the StatisticsList of the
    localities. The bottom bar has Directory active, and CommonUI_InsideLayout is in the layout. The flows are in
    useBrowseDirectory. Captured dom/default.html, loading.html, offline.html. */
export default function BrowseDirectory() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readBrowseDirectoryInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const {
    state,
    onBrowseCountries,
    onMapInitialized,
    onSetCallbacks,
    onMarkerClicked,
    onStatisticsListClicked,
    onStatisticsListParametersChanged,
  } = useBrowseDirectory(inputs);

  return (
    <DetailLayout
      id="$b1"
      onBack={navigateBack}
      headerTitle={<span data-expression="">{state.countryName === '' ? 'Browse Directory' : state.countryName}</span>}
      content={
        <BrowseSection
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
              {state.Center.length !== 0 ? (
                <DirectoryMap
                  id="LeafletMap"
                  tileLayer={TILE_LAYER}
                  markersList={state.MarkersList}
                  useClustering
                  mapOptions={mapOptions(state.Center)}
                  zoomControlOptions={ZOOM_CONTROL}
                  onOnInitialized={onMapInitialized}
                  onSetCallbacks={onSetCallbacks}
                  onOnMarkerClicked={onMarkerClicked}
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
                  inIsLoading={!state.isDataFetched}
                  inStatistics={state.localities.map((l) => ({ Id: l.localityId, StatisticsOptions: l.statistics }))}
                  onEventClicked={onStatisticsListClicked}
                  onOnParametersChangedEv={onStatisticsListParametersChanged}
                />
              </CustomContainer>
            </>
          }
        />
      }
      bottom={<BottomBar id="$b12" activeItem={Connect_BottomBar_Items.Directory} />}
      commonUI={<CommonUiLayout id="$b13" />}
    />
  );
}
