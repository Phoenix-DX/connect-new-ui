import type { LocalityStatistics } from '@/api/country';
import type { UI_LocalityStatistics } from '@/lib/geography/structures';
import type { MapOptions, MarkerWithWindow } from '@/lib/leaflet/structures';
import { getSkeletonList_UI_LocalityStatistics as getSkeletonList } from '@/lib/ubtConnect/actions';
import { Choice, Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import type { Filter_Common_Control_List } from '@/lib/ubtConnect/structures';
import { jSUtils_String_RemoveAccents } from '@/lib/jsUtils';

/** The client actions and the pure logic of the CountryDetails screen: the skeleton rows, Action_DefineList, the map
    options and markers of OnAfterFetch_GetLocalityStatistics, and the country that the FilterSheet selects. No React:
    useCountryDetails calls these functions.
    @origin UBTConnect.Directory_Locality.CountryDetails */

/** A UI_LocalityStatistics record in the screen's shape (absent attributes = their OutSystems default). */
const toLocality = (s: UI_LocalityStatistics): LocalityStatistics => ({
  localityId: s.LocalityId ?? '0',
  name: s.Name ?? '',
  latitude: s.Latitude ?? 0,
  longitude: s.Longitude ?? 0,
  statisticsTitle: s.Statistics?.Title ?? '',
  typedStatisticsTexts: s.UI_TypedStatisticsTexts ?? {},
  mainHallSubdivisionId: s.MainHallSubdivisionId ?? '0',
});

/** UBTConnect GetSkeletonList_UI_LocalityStatistics(ListLength) (shared), as the screen reads the rows. */
export function getSkeletonList_UI_LocalityStatistics(listLength: number): LocalityStatistics[] {
  return getSkeletonList(listLength).map(toLocality);
}

/** Action_DefineList: all the localities, or those whose name contains the search (accents removed, case ignored:
    Index(…, 0, False, True)). */
export function defineList(out: LocalityStatistics[], searchString: string): LocalityStatistics[] {
  if (searchString === '') return out;
  const search = jSUtils_String_RemoveAccents(searchString).toLowerCase();
  return out.filter((p) => jSUtils_String_RemoveAccents(p.name).toLowerCase().includes(search));
}

/** LongIntegerToText(TextToLongInteger(Text)): an invalid number is 0. */
export function normalizeLongId(text: string): string {
  const trimmed = text.trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
}

/** OnAfterFetch_GetLocalityStatistics: one marker per locality, with the member pin and a popup. */
export const toMarker = (l: LocalityStatistics): MarkerWithWindow => ({
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

/** OnAfterFetch_GetLocalityStatistics: the map options, centred on the first locality (Out.Current). */
export const mapOptionsAt = (latitude: number, longitude: number): MapOptions => ({
  Center: [latitude, longitude],
  Zoom: 5,
  MinZoom: 2,
  MaxZoom: 20,
  MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 },
  AttributionControl: false,
  MaxBoundsViscosity: 0,
});

/** Statistics_TypedItem In_ImageEntityId reads Out_LocalitiesStatistics.Current: the row itself while Local_List is
    the Out list (SearchString ""), the first record of Out once a search made Local_List a new list. */
export function imageEntityIdOf(item: LocalityStatistics, searchString: string, out: LocalityStatistics[]): string {
  return searchString === '' ? item.mainHallSubdivisionId : (out[0]?.mainHallSubdivisionId ?? '0');
}

/** Handler_FilterSheetApplyFilters: the first selected id of the first option list (the countries), or the original
    country when nothing or "None" is selected. */
export function appliedCountryCode(optionLists: Filter_Common_Control_List[], originalCountryCode: string): string {
  const selectedIds = optionLists[0]?.SelectedIds ?? [];
  const first = selectedIds[0] ?? '';
  return selectedIds.length === 0 || first === Choice.None ? originalCountryCode : first;
}
