import type { LocalityCard, LocalityCardList } from '@/api/locality';
import type { MarkerWithWindow } from '@/components/directory/DirectoryMap';
import type { UI_LocalityStatistics } from '@/shared/Connect_Geography_CS/lib/structures';
import {
  getLocalityLabel,
  getSkeletonList_UI_LocalityStatistics as getSkeletonList,
} from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';

/** The state of the BrowseDirectory screen and its reducer, and the pure parts of its flows: the skeleton rows, the
    markers of OnAfterFetch_GetLocalityStatistics, the text conversions and the locality label of
    Handler_StatisticsList_Clicked.
    @origin UBTConnect.Directory_Locality.BrowseDirectory */

/** The screen variables and the outputs of DataActionGetLocalityStatistics. The view cache keeps the record, so a back
    navigation shows the last list at once. */
export interface BrowseDirectoryState {
  /** MarkersList: one marker per locality, appended by each OnAfterFetch. */
  MarkersList: MarkerWithWindow[];
  /** Center: the coordinates of the first locality; empty until the first answer (the map shows its skeleton). */
  Center: number[];
  /** GetLocalityStatistics.Out_LocalitiesStatistics: the skeleton rows while the refresh runs. */
  localities: LocalityCard[];
  /** GetLocalityStatistics.CountryName. */
  countryName: string;
  /** GetLocalityStatistics.IsDataFetched. */
  isDataFetched: boolean;
}

/** The changes of the state. */
export type BrowseDirectoryAction =
  /** Action_RefreshData, first node: Out_LocalitiesStatistics = GetSkeletonList_UI_LocalityStatistics(10). */
  | { type: 'refreshStarted' }
  /** The answer of DataActionGetLocalityStatistics, then OnAfterFetch_GetLocalityStatistics. */
  | { type: 'localityStatisticsFetched'; data: LocalityCardList };

/** OnInitialize: the variables with their defaults; the data action has not answered. */
export const INITIAL_BROWSE_DIRECTORY_STATE: BrowseDirectoryState = {
  MarkersList: [],
  Center: [],
  localities: [],
  countryName: '',
  isDataFetched: false,
};

/** The count of skeleton rows of Action_RefreshData. */
const SKELETON_ROWS = 10;

/** A UI_LocalityStatistics record in the shape of the screen (an absent attribute takes its OutSystems default). */
const toLocality = (s: UI_LocalityStatistics): LocalityCard => ({
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

/** UBTConnect GetSkeletonList_UI_LocalityStatistics(ListLength), as the screen reads the rows. */
export function getSkeletonList_UI_LocalityStatistics(listLength?: number): LocalityCard[] {
  return getSkeletonList(listLength).map(toLocality);
}

/** The Local_MarkerWithTooltip of a row in OnAfterFetch_GetLocalityStatistics: a new record for each row. Tooltip and
    the other Popup fields keep their defaults. */
export const toMarker = (l: LocalityCard): MarkerWithWindow => ({
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

/** TextToLongInteger then LongIntegerToText: an integer text as it is (normalised), any other text "0". */
export const asLongText = (text: string): string =>
  /^\s*[-+]?\d+\s*$/.test(text) ? BigInt(text.trim()).toString() : '0';

/** The LocalityLabel of Handler_StatisticsList_Clicked: ListIndexOf gives the first row with that LocalityId; when no
    row has it (-1), the label stays "". */
export function localityLabelOf(state: BrowseDirectoryState, localityId: string): string {
  const row = state.localities.find((l) => l.localityId === localityId);
  return row ? getLocalityLabel(row.name, state.countryName) : '';
}

export function browseDirectoryReducer(
  state: BrowseDirectoryState,
  action: BrowseDirectoryAction,
): BrowseDirectoryState {
  switch (action.type) {
    case 'refreshStarted':
      return { ...state, localities: getSkeletonList_UI_LocalityStatistics(SKELETON_ROWS) };
    case 'localityStatisticsFetched': {
      const { localities, countryName } = action.data;
      // OnAfterFetch: Center = the coordinates of the Current row (row 0 outside a For Each; the Current of an empty
      // list is the default record), then one marker per row, appended to MarkersList. The result of the GetCallback
      // JavaScript node is not used.
      const current = localities.at(0);
      return {
        ...state,
        localities,
        countryName,
        isDataFetched: true,
        Center: [current?.latitude ?? 0, current?.longitude ?? 0],
        MarkersList: [...state.MarkersList, ...localities.map(toMarker)],
      };
    }
  }
}
