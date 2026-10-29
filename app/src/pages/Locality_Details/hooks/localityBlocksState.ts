import type { LocalityHousehold } from '@/api/household';
import type {
  Interchange,
  OneSchoolCard,
  OneSchoolListCallInputs,
  SubdivisionCard,
  SubdivisionListCallInputs,
} from '@/api/locality';
import {
  getIconLabel_Interchange_Statistics,
  getSkeletonList_UI_OneSchoolGlobal_ListCard,
  getSkeletonList_UI_SubdivisionCard,
} from '@/pages/Locality_Details/components/actions';

/* The block variables of the four tag blocks of Locality_Details, their reducers and the pure parts of their flows.
   The flows are in the hooks of the blocks (useLocalityHouseholdList, useLocalitySubdivisions, useLocalityInterchange,
   useLocalityOneSchoolGlobal). Long Integers stay text. */

/** A row of a list with its record key. OutSystems keeps one key per appended record: the skeleton rows take the
    first keys, and the fetched rows appended after ListClear continue the count. */
export interface ListRow<T> {
  key: number;
  card: T;
}

/** ListAppendAll with record keys: `cards` after `rows`, keyed from `nextKey`. */
export const appendRows = <T>(rows: ListRow<T>[], nextKey: number, cards: T[]) => ({
  rows: [...rows, ...cards.map((card, i) => ({ key: nextKey + i, card }))],
  nextKey: nextKey + cards.length,
});

/* ---- Locality_Households_HouseholdList ---- */

/** GetLocalityHouseholds as the view reads it. */
export interface LocalityHouseholdListState {
  isDataFetched: boolean;
  list: LocalityHousehold[];
}

/** A skeleton record of ScreenEvent_OnInitialize ("Dumyy size"). */
const householdSkeleton = (): LocalityHousehold => ({
  householdId: '0',
  householdName: '',
  childrenNames: '',
  isBookmarked: false,
  localityName: 'Dumyy size',
  countryName: 'Dumyy size',
});

/** ScreenEvent_OnInitialize: an empty list gets three skeleton records. */
export const INITIAL_LOCALITY_HOUSEHOLD_LIST: LocalityHouseholdListState = {
  isDataFetched: false,
  list: [householdSkeleton(), householdSkeleton(), householdSkeleton()],
};

/** GetLocalityHouseholds answered, or OnAfterFetch_GetLocalityHouseholds_Bookmarks set the bookmarks of its rows. */
type LocalityHouseholdListAction = { type: 'householdsFetched'; list: LocalityHousehold[] };

export const localityHouseholdListReducer = (
  _state: LocalityHouseholdListState,
  action: LocalityHouseholdListAction,
): LocalityHouseholdListState => ({ isDataFetched: true, list: action.list });

/** IsBookmarked of a row from GetLocal_Bookmark: the same record when the value does not change. */
export const withBookmark = (household: LocalityHousehold, isBookmarked: boolean): LocalityHousehold =>
  isBookmarked === household.isBookmarked ? household : { ...household, isBookmarked };

/* ---- Locality_Subdivisions ---- */

/** The block variables of Locality_Subdivisions and what Get_Subdivision_List last returned. */
export interface LocalitySubdivisionsState {
  getSubdivisions_StartIndex: number;
  getSubdivisions_Offset: number;
  subdivision_Card_List: ListRow<SubdivisionCard>[];
  subdivision_Card_List_IsLoading: boolean;
  isPaginated: boolean;
  nextKey: number;
  isDataFetched: boolean;
  out_Subdivision_Card_List: SubdivisionCard[];
}

export const INITIAL_LOCALITY_SUBDIVISIONS: LocalitySubdivisionsState = {
  getSubdivisions_StartIndex: 0,
  getSubdivisions_Offset: 20,
  subdivision_Card_List: [],
  subdivision_Card_List_IsLoading: true,
  isPaginated: false,
  nextKey: 0,
  isDataFetched: false,
  out_Subdivision_Card_List: [],
};

type LocalitySubdivisionsAction =
  /** OnReady: ten skeleton cards (GetSkeletonList_UI_SubdivisionCard). */
  | { type: 'skeletonShown' }
  /** Get_Subdivision_List answered; OnAfterFetch: the first time ListClear and IsLoading False, then ListAppendAll. */
  | { type: 'subdivisionsFetched'; cards: SubdivisionCard[] }
  /** OnScrollEnding_RefreshSubdivisions: StartIndex += Offset. */
  | { type: 'nextPageRequested' };

export function localitySubdivisionsReducer(
  state: LocalitySubdivisionsState,
  action: LocalitySubdivisionsAction,
): LocalitySubdivisionsState {
  switch (action.type) {
    case 'skeletonShown': {
      const { rows, nextKey } = appendRows([], 0, getSkeletonList_UI_SubdivisionCard(10));
      return { ...state, subdivision_Card_List: rows, nextKey };
    }
    case 'subdivisionsFetched': {
      const cleared = state.subdivision_Card_List_IsLoading ? [] : state.subdivision_Card_List;
      const { rows, nextKey } = appendRows(cleared, state.nextKey, action.cards);
      return {
        ...state,
        isDataFetched: true,
        out_Subdivision_Card_List: action.cards,
        subdivision_Card_List_IsLoading: false,
        subdivision_Card_List: rows,
        nextKey,
      };
    }
    case 'nextPageRequested':
      return {
        ...state,
        getSubdivisions_StartIndex: state.getSubdivisions_StartIndex + state.getSubdivisions_Offset,
      };
  }
}

/** The block variables that DataActionGet_Subdivision_List sends. */
export const subdivisionListCallInputs = (
  state: LocalitySubdivisionsState,
  localityId: string,
): SubdivisionListCallInputs => ({
  getSubdivisions_StartIndex: state.getSubdivisions_StartIndex,
  getSubdivisions_Offset: state.getSubdivisions_Offset,
  subdivision_Card_List: state.subdivision_Card_List.map((r) => r.card),
  subdivision_Card_List_IsLoading: state.subdivision_Card_List_IsLoading,
  isPaginated: state.isPaginated,
  localityId,
});

/* ---- Locality_Interchange ---- */

/** GetInterchangesByLocalityId as the view reads it. */
export interface LocalityInterchangeState {
  isDataFetched: boolean;
  hasFetchError: boolean;
  out_InterchangeList: Interchange[];
}

export const INITIAL_LOCALITY_INTERCHANGE: LocalityInterchangeState = {
  isDataFetched: false,
  hasFetchError: false,
  out_InterchangeList: [],
};

/** OnReady's loading record: statistics Title and Subtitle "Loading", three statistics ("Loading", "11"),
    InterchangeDistance "111"; the other attributes keep their defaults. */
const loadingInterchange = (): Interchange => ({
  interchangeLocalityId: '0',
  interchangeLocalityName: '',
  interchangeCountryName: '',
  interchangeDistance: '111',
  isBookmarked: false,
  interchangeStatistics: {
    Title: 'Loading',
    Subtitle: 'Loading',
    AvatarURL: '',
    Statistics: [1, 2, 3].map(() => ({ Name: 'Loading', Value: '11', IconColorId: '', IconId: '' })),
  },
});

/** OnAfterFetch_GetInterchangesByLocalityId: every statistic's IconColorId and IconId from
    GetIconLabel_Interchange_Statistics(Name). */
export const withStatisticIcons = (list: Interchange[]): Interchange[] =>
  list.map((item) => ({
    ...item,
    interchangeStatistics: {
      ...item.interchangeStatistics,
      Statistics: (item.interchangeStatistics.Statistics ?? []).map((s) => {
        const icon = getIconLabel_Interchange_Statistics(s.Name ?? '');
        return { ...s, IconColorId: icon.color_Id, IconId: icon.iconId };
      }),
    },
  }));

type LocalityInterchangeAction =
  /** OnReady: three loading records appended (LoadingItems 3). */
  | { type: 'loadingShown' }
  /** GetInterchangesByLocalityId answered (the list with its statistic icons). */
  | { type: 'interchangesFetched'; list: Interchange[] }
  /** GetInterchangesByLocalityId failed. */
  | { type: 'interchangesFailed' };

export function localityInterchangeReducer(
  state: LocalityInterchangeState,
  action: LocalityInterchangeAction,
): LocalityInterchangeState {
  switch (action.type) {
    case 'loadingShown':
      return { ...state, out_InterchangeList: [...state.out_InterchangeList, ...[1, 2, 3].map(loadingInterchange)] };
    case 'interchangesFetched':
      return { isDataFetched: true, hasFetchError: false, out_InterchangeList: action.list };
    case 'interchangesFailed':
      return { ...state, hasFetchError: true };
  }
}

/* ---- Locality_OneSchoolGlobal ---- */

/** The block variables of Locality_OneSchoolGlobal and what Get_OneSchoolGlobal_List last returned. */
export interface LocalityOneSchoolGlobalState {
  getOneSchoolGlobal_List_StartIndex: number;
  getOneSchoolGlobal_List_Offset: number;
  get_OneSchoolGlobal_List_IsLoading: boolean;
  out_OneSchoolGlobal_List2: ListRow<OneSchoolCard>[];
  nextKey: number;
  isDataFetched: boolean;
  out_OneSchoolGlobal_List: OneSchoolCard[];
}

export const INITIAL_LOCALITY_ONESCHOOL_GLOBAL: LocalityOneSchoolGlobalState = {
  getOneSchoolGlobal_List_StartIndex: 0,
  getOneSchoolGlobal_List_Offset: 20,
  get_OneSchoolGlobal_List_IsLoading: true,
  out_OneSchoolGlobal_List2: [],
  nextKey: 0,
  isDataFetched: false,
  out_OneSchoolGlobal_List: [],
};

type LocalityOneSchoolGlobalAction =
  /** OnReady: three skeleton cards (GetSkeletonList_UI_OneSchoolGlobal_ListCard). */
  | { type: 'skeletonShown' }
  /** Get_OneSchoolGlobal_List answered; OnAfterFetch: the first time ListClear and IsLoading False, then
      ListAppendAll. */
  | { type: 'schoolsFetched'; cards: OneSchoolCard[] }
  /** Handler_OnScrollEnding: StartIndex += Offset. */
  | { type: 'nextPageRequested' };

export function localityOneSchoolGlobalReducer(
  state: LocalityOneSchoolGlobalState,
  action: LocalityOneSchoolGlobalAction,
): LocalityOneSchoolGlobalState {
  switch (action.type) {
    case 'skeletonShown': {
      const { rows, nextKey } = appendRows([], 0, getSkeletonList_UI_OneSchoolGlobal_ListCard(3));
      return { ...state, out_OneSchoolGlobal_List2: rows, nextKey };
    }
    case 'schoolsFetched': {
      const cleared = state.get_OneSchoolGlobal_List_IsLoading ? [] : state.out_OneSchoolGlobal_List2;
      const { rows, nextKey } = appendRows(cleared, state.nextKey, action.cards);
      return {
        ...state,
        isDataFetched: true,
        out_OneSchoolGlobal_List: action.cards,
        get_OneSchoolGlobal_List_IsLoading: false,
        out_OneSchoolGlobal_List2: rows,
        nextKey,
      };
    }
    case 'nextPageRequested':
      return {
        ...state,
        getOneSchoolGlobal_List_StartIndex:
          state.getOneSchoolGlobal_List_StartIndex + state.getOneSchoolGlobal_List_Offset,
      };
  }
}

/** The block variables and inputs that DataActionGet_OneSchoolGlobal_List sends. */
export const oneSchoolListCallInputs = (
  state: LocalityOneSchoolGlobalState,
  parameters: { localityId: string; localityTimezoneData: OneSchoolListCallInputs['in_LocalityTimezoneData'] },
): OneSchoolListCallInputs => ({
  getOneSchoolGlobal_List_StartIndex: state.getOneSchoolGlobal_List_StartIndex,
  getOneSchoolGlobal_List_Offset: state.getOneSchoolGlobal_List_Offset,
  get_OneSchoolGlobal_List_IsLoading: state.get_OneSchoolGlobal_List_IsLoading,
  out_OneSchoolGlobal_List2: state.out_OneSchoolGlobal_List2.map((r) => r.card),
  in_LocalityId: parameters.localityId,
  in_LocalityTimezoneData: parameters.localityTimezoneData,
});
