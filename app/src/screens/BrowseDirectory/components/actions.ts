/* Module client actions this screen calls, from the shared libs (CR-BrowseDirectory-1): UBTConnect GetLocalityLabel,
   GetSkeletonList_UI_LocalityStatistics, Directory_BrowseByCountry_TooltipBuilder; Leaflet Map_FitBoundsAuto,
   Map_SetPopupBindingCallback, Map_Marker_OpenPopUp. */
import type { UI_LocalityStatistics } from '@/shared/Connect_Geography_CS/lib/structures';
import { getSkeletonList_UI_LocalityStatistics as getSkeletonList } from '@/shared/UBTConnect/lib/actions';
import type { LocalityStatistics } from '@/screens/BrowseDirectory/types';

export { map_FitBoundsAuto, map_Marker_OpenPopUp, map_SetPopupBindingCallback } from '@/shared/Leaflet/lib/actions';
export { directory_BrowseByCountry_TooltipBuilder, getLocalityLabel } from '@/shared/UBTConnect/lib/actions';

/** A UI_LocalityStatistics record in the screen's shape (absent attributes = their OutSystems default). */
const toLocality = (s: UI_LocalityStatistics): LocalityStatistics => ({
  localityId: s.LocalityId ?? '0',
  name: s.Name ?? '',
  latitude: s.Latitude ?? 0,
  longitude: s.Longitude ?? 0,
  statistics: {
    Title: s.Statistics?.Title ?? '',
    Subtitle: s.Statistics?.Subtitle ?? '',
    AvatarURL: s.Statistics?.AvatarURL ?? '',
    Statistics: (s.Statistics?.Statistics ?? []).map((r) => ({
      Name: r.Name ?? '',
      Value: r.Value ?? '',
      IconColorId: r.IconColorId ?? '',
      IconId: r.IconId ?? '',
    })),
  },
});

/** UBTConnect GetSkeletonList_UI_LocalityStatistics(ListLength = 4) (shared), as the screen reads the rows. */
export function getSkeletonList_UI_LocalityStatistics(listLength?: number): LocalityStatistics[] {
  return getSkeletonList(listLength).map(toLocality);
}
