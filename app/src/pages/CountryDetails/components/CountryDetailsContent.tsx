import type { LocalityStatistics } from '@/api/country';
import { DirectoryMap } from '@/components/directory/DirectoryMap';
import { StatisticsTypedItem } from '@/components/directory/StatisticsTypedItem';
import { BrowseSection } from '@/components/layout/BrowseSection';
import { OSList } from '@/components/ui/os/OSList';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import type L from '@/shared/Leaflet/lib/leaflet';
import type { MapOptions, MarkerWithWindow, TileLayer, ZoomControlOptions } from '@/shared/Leaflet/lib/structures';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import type { UI_TypedStatistics } from '@/shared/UBTConnect/lib/structures';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { Input } from '@/components/ui/Input';
import { getClass_Color } from '@/shared/UBTConnectLibrary/lib/actions';
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
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SearchInput } from '@/shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { imageEntityIdOf } from '@/pages/CountryDetails/hooks/countryDetailsState';
import { UBT_Icons2 } from './staticEntities';

export interface CountryDetailsContentProps {
  /** Out_LocalitiesStatistics: the answer of GetLocalityStatistics, or the skeleton rows. Its length is the locality
      count. */
  localities: LocalityStatistics[];
  /** Local_List: the rows of the list. */
  list: LocalityStatistics[];
  /** SearchString: the "no results" text and the image of the rows read it. */
  searchString: string;
  /** GetLocalityStatistics answered or failed: the skeletons go. */
  isLoaded: boolean;
  /** The map options: null until GetLocalityStatistics answers (the map skeleton shows). */
  mapOptions: MapOptions | null;
  markersList: MarkerWithWindow[];
  /** Handler_BrowseCountries: the "Select another country to view" row. */
  onSelectCountryClicked: () => void;
  /** OnMarker_Clicked of the map, with the marker object. */
  onMarkerClicked: (markerObj: L.Marker) => void;
  /** SetCallbacks of the map. */
  onMapSetCallbacks: (mapId: string) => void;
  /** OnInitialized of the map. */
  onMapInitialized: (mapId: string) => void;
  /** OnParametersChanged of the map. */
  onMapParametersChanged: () => void;
  /** The search input: OnChange, Submit, and "" on ClearString. */
  onSearchChanged: (currentString: string) => void;
  /** OnClick_LegendInfo: the info icon. */
  onLegendInfoClicked: () => void;
  /** A locality row, with its LocalityId. */
  onLocalityClicked: (localityId: string) => void;
}

/** The tile layer of the map. */
const TILE_LAYER: TileLayer = {
  Url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  Options: { MinZoom: 2, MaxZoom: 20, Subdomains: ['a', 'b', 'c', 'd'] },
};

/** The zoom control: a custom bottom-right control, with icons in the Primary colour. */
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

/** The search input options: enabled with more than one locality. */
const searchOptions = (count: number): SearchInput => ({
  IsEnabled: count > 1,
  SearchPrompt: 'Search locality',
  Debounce_DelayMS: 200,
  BorderRadius: Shape.Rounded,
});

/** The skeleton card of the loading section (three identical records). */
const LOADING_STATISTICS: UI_TypedStatistics = {
  UI_StatisticsTexts: { Members: '111', Households: '11', Brothers: '11', Sisters: '11', SupperMeetings: '123' },
  Name: 'Loading Name',
};

/** The Content placeholder of the screen: SubLayout_Browse_Section with the "Select another country to view" row on
    top; below, the map (a skeleton until GetLocalityStatistics answers), the search input, the "Browse by Locality"
    title with the legend info icon and the locality count, and the list of localities (three skeleton cards while
    loading). Props only.
    @origin UBTConnect.Directory_Locality.CountryDetails */
export function CountryDetailsContent({
  localities,
  list,
  searchString,
  isLoaded,
  mapOptions,
  markersList,
  onSelectCountryClicked,
  onMarkerClicked,
  onMapSetCallbacks,
  onMapInitialized,
  onMapParametersChanged,
  onSearchChanged,
  onLegendInfoClicked,
  onLocalityClicked,
}: CountryDetailsContentProps) {
  const localityCount = localities.length;
  return (
    <BrowseSection
      id="$b2"
      placeholderTopSection={
        <CustomContainer
          id="$b3"
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { GeneralSizeId: UBT_Size.Base },
          }}
        >
          <div data-container="" style={{ cursor: 'pointer' }} onClick={onSelectCountryClicked}>
            <ColumnsTwo
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
            <DirectoryMap
              id="LeafletMap"
              useClustering
              markersList={markersList}
              tileLayer={TILE_LAYER}
              mapOptions={mapOptions}
              zoomControlOptions={ZOOM_CONTROL_OPTIONS}
              onOnMarkerClicked={(_id, _mapId, _type, _extraData, _lat, _long, markerObj: L.Marker) => {
                onMarkerClicked(markerObj);
              }}
              onSetCallbacks={onMapSetCallbacks}
              onOnInitialized={onMapInitialized}
              onOnParametersChanged={onMapParametersChanged}
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
                onEventSubmit={onSearchChanged}
                onEventOnChange={onSearchChanged}
                onEventClearString={() => {
                  onSearchChanged('');
                }}
              />
            </CustomContainer>
            <CustomContainer id="Legend" options={{ PaddingSize: { VerticalSizeId: UBT_Size.Base } }}>
              <ColumnsTwo
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
                    onClick={onLegendInfoClicked}
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
                    <StatisticsTypedItem
                      id={id}
                      inImageEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions}
                      inHasImage
                      uICountryStatistics={LOADING_STATISTICS}
                    />
                  </div>
                ))}
              </SkeletonSection>
            ) : list.length === 0 && searchString !== '' ? (
              <NotCaptured name="ConnectPatterns.EmptyList $b24 (IconId search; not rendered in any captured state)">
                {`No results found for '${searchString}'`} Sorry, we couldn&apos;t find any results for your search.
                Please check your spelling or try different keywords.
              </NotCaptured>
            ) : (
              <OSList
                className="list list-group"
                animateItems
                positionRelative
                source={list}
                keyOf={(item, i) => `${item.localityId}_${i}`}
              >
                {(item, i) => (
                  <div
                    data-container=""
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      onLocalityClicked(item.localityId);
                    }}
                  >
                    <StatisticsTypedItem
                      id={`l1-122_${i}-$b25`}
                      inHasImage
                      uICountryStatistics={{ UI_StatisticsTexts: item.typedStatisticsTexts, Name: item.name }}
                      inImageEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions}
                      inImageEntityId={imageEntityIdOf(item, searchString, localities)}
                    />
                  </div>
                )}
              </OSList>
            )}
          </CustomContainer>
        </>
      }
    />
  );
}
