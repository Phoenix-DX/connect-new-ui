/* Module client actions the screen calls, from the shared libs (CR-CountryDetails-1): UBTConnect GetLocalityLabel,
   GetSkeletonList_UI_LocalityStatistics, Directory_BrowseByCountry_TooltipBuilder; Leaflet Map_FitBoundsAuto,
   Map_Marker_OpenPopUp, Map_SetPopupBindingCallback. */
import type { UI_LocalityStatistics } from '@/shared/Connect_Geography_CS/lib/structures';
import { getSkeletonList_UI_LocalityStatistics as getSkeletonList } from '@/shared/UBTConnect/lib/actions';
import type { LocalityStatistics } from '@/pages/CountryDetails/types';

export { map_FitBoundsAuto, map_Marker_OpenPopUp, map_SetPopupBindingCallback } from '@/shared/Leaflet/lib/actions';
export { directory_BrowseByCountry_TooltipBuilder, getLocalityLabel } from '@/shared/UBTConnect/lib/actions';

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
