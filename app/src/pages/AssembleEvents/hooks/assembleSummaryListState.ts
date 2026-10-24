import type {
  AssembleEventFilter,
  AssembleEventTypeItem,
  AssembleMeeting,
  AssembleMeetingListQuery,
} from '@/api/event';
import {
  geAssembleSummaryListFilterLabel,
  getAssembleEventListDateRangeFilter,
  getAssembleHeaderDateString,
  getIANATimezone,
  offsetDateTimeByUserUTCOffset,
  ViewmodeType,
} from '@/pages/AssembleEvents/components/actions';

/** The variables of the block AssembleSummary_List, the reducer and the pure parts of its actions. The flows are in
    useAssembleSummaryList.
    @origin Connect2_Assemble_MUI.Assemble.AssembleSummary_List */

/** MaxRecords of GetAssembleMeetingSummaryList: one page of meetings. */
export const MAX_RECORDS = 10;

/** The state of a data action of the block. */
export type FetchStatus = 'none' | 'fetching' | 'fetched' | 'error';

/** EventList_Range: the DateTimes ("yyyy-MM-ddTHH:mm:ss") of the date range filter. */
export interface DateRange {
  StartDateTime: string;
  EndDateTime: string;
}

/** The variables of the block. The view cache keeps all of them. */
export interface AssembleSummaryListState {
  /** EventList: the meetings that the list shows. */
  eventList: AssembleMeeting[];
  /** EventList_Filter: the time option and the meeting types. */
  filter: AssembleEventFilter;
  /** IsShow_FilterDrawer. */
  isShowFilterDrawer: boolean;
  /** EventList_FilterLabel: "All Meeting Types" or "Meeting Types (<n>)". */
  filterLabel: string;
  /** EventList_Range. */
  range: DateRange;
  /** EventList_PageNumber. */
  pageNumber: number;
  /** EventList_IsFiltered: a meeting type is selected (the Clear link shows). */
  isFiltered: boolean;
  /** EventList_HasMoreRecords: the last page was full. */
  hasMoreRecords: boolean;
  /** LocalSubdivisionId: the supper meeting of the list ("0" until OnReady sets it). */
  localSubdivisionId: string;
  /** DeviceTimezone: the IANA time zone of the device. */
  deviceTimezone: string;
  /** IsHeaderLoading: the list header shows a text skeleton. */
  isHeaderLoading: boolean;
  /** The state of GetAssembleMeetingSummaryList. */
  summaryStatus: FetchStatus;
  /** The state of GetAssembleEventTypes. */
  eventTypesStatus: FetchStatus;
}

export type AssembleSummaryListAction =
  /** SetLocalSubdivisonId. */
  | { type: 'localSubdivisionSet'; localSubdivisionId: string }
  /** Refresh GetAssembleMeetingSummaryList starts. */
  | { type: 'summaryFetching' }
  /** OnAfterFetch of GetAssembleMeetingSummaryList: the page, appended to the list or in its place. */
  | { type: 'summaryFetched'; rows: AssembleMeeting[]; append: boolean }
  /** GetAssembleMeetingSummaryList failed. */
  | { type: 'summaryFailed' }
  /** Refresh GetAssembleEventTypes starts. */
  | { type: 'eventTypesFetching' }
  /** OnAfterFetch of GetAssembleEventTypes: the meeting types of the filter, none selected. */
  | { type: 'eventTypesFetched'; types: AssembleEventTypeItem[] }
  /** GetAssembleEventTypes failed. */
  | { type: 'eventTypesFailed' }
  /** The assignments of Refresh_EventList for a filter. */
  | { type: 'eventListReset'; filter: AssembleEventFilter; range: DateRange; deviceTimezone: string }
  /** Handler_ApplyFilters: the new filter, the drawer closes. */
  | { type: 'filtersApplied'; filter: AssembleEventFilter }
  /** Handler_ClearFilters: no meeting type selected. */
  | { type: 'filtersCleared' }
  /** The drawer opens or closes (the header click and the Close event of the drawer). */
  | { type: 'filterDrawerToggled' }
  /** List_AssembleSummaryCardsOnScrollEnding: the next page. */
  | { type: 'nextPageRequested' };

/** The variables after OnInitialize: Upcoming Meetings and its date range from `now`, the filter label, the device time
    zone, and the defaults. */
export function initialAssembleSummaryListState(
  now = new Date(),
  deviceTimezone = getIANATimezone(),
): AssembleSummaryListState {
  const filter: AssembleEventFilter = {
    AssembleFilterTimeOptionId: ViewmodeType.UpcomingMeetings,
    AssembleEventType: [],
  };
  return {
    eventList: [],
    filter,
    isShowFilterDrawer: false,
    filterLabel: geAssembleSummaryListFilterLabel(filter),
    range: getAssembleEventListDateRangeFilter(filter.AssembleFilterTimeOptionId, now),
    pageNumber: 1,
    isFiltered: false,
    hasMoreRecords: false,
    localSubdivisionId: '0',
    deviceTimezone,
    isHeaderLoading: true,
    summaryStatus: 'none',
    eventTypesStatus: 'none',
  };
}

/** The filter with no meeting type selected. */
const withoutSelectedTypes = (filter: AssembleEventFilter): AssembleEventFilter => ({
  ...filter,
  AssembleEventType: filter.AssembleEventType.map((t) => ({ ...t, IsSelected: false })),
});

export function assembleSummaryListReducer(
  state: AssembleSummaryListState,
  action: AssembleSummaryListAction,
): AssembleSummaryListState {
  switch (action.type) {
    case 'localSubdivisionSet':
      return { ...state, localSubdivisionId: action.localSubdivisionId };
    case 'summaryFetching':
      return { ...state, summaryStatus: 'fetching' };
    case 'summaryFetched':
      // ListAppend of each meeting; HasMoreRecords = a full page; IsHeaderLoading False.
      return {
        ...state,
        eventList: action.append ? [...state.eventList, ...action.rows] : action.rows,
        hasMoreRecords: action.rows.length > 0 && !(action.rows.length < MAX_RECORDS),
        isHeaderLoading: false,
        summaryStatus: 'fetched',
      };
    case 'summaryFailed':
      return { ...state, summaryStatus: 'error' };
    case 'eventTypesFetching':
      return { ...state, eventTypesStatus: 'fetching' };
    case 'eventTypesFetched':
      // IsSelected comes from SelectedMettingTypeIds, which nothing fills: False.
      return {
        ...state,
        filter: {
          ...state.filter,
          AssembleEventType: action.types.map((t) => ({ AssembleEventType: t, IsSelected: false })),
        },
        eventTypesStatus: 'fetched',
      };
    case 'eventTypesFailed':
      return { ...state, eventTypesStatus: 'error' };
    case 'eventListReset':
      return {
        ...state,
        isFiltered: action.filter.AssembleEventType.some((t) => t.IsSelected),
        filterLabel: geAssembleSummaryListFilterLabel(action.filter),
        eventList: [],
        pageNumber: 1,
        range: action.range,
        deviceTimezone: action.deviceTimezone,
      };
    case 'filtersApplied':
      return { ...state, filter: action.filter, isShowFilterDrawer: false };
    case 'filtersCleared':
      return { ...state, filter: withoutSelectedTypes(state.filter) };
    case 'filterDrawerToggled':
      return { ...state, isShowFilterDrawer: !state.isShowFilterDrawer };
    case 'nextPageRequested':
      return { ...state, pageNumber: state.pageNumber + 1 };
  }
}

/** The variables of GetAssembleMeetingSummaryList for a page: the DateTimes of the range go through
    OffsetDateTimeByUserUTCOffset. */
export function meetingListQuery(
  subdivisionId: string,
  q: { filter: AssembleEventFilter; range: DateRange; page: number; local: string; timezone: string },
): AssembleMeetingListQuery {
  return {
    SubdivisionId: subdivisionId,
    LocalSubdivisionId: q.local,
    EventList_Filter: q.filter,
    EventList_RangeFrom: offsetDateTimeByUserUTCOffset(q.range.StartDateTime),
    EventsList_RangeTo: offsetDateTimeByUserUTCOffset(q.range.EndDateTime),
    EventList_PageNumber: q.page,
    MaxRecords: MAX_RECORDS,
    DeviceTimezone: q.timezone,
  };
}

/** OnAfterFetch: the DateTime of each meeting goes through OffsetDateTimeByUserUTCOffset. */
export const toListRows = (page: readonly AssembleMeeting[]): AssembleMeeting[] =>
  page.map((m) => ({ ...m, DateTime: offsetDateTimeByUserUTCOffset(m.DateTime) }));

/** The label of the list header: GetAssembleHeaderDateString of the first meeting's day ("" for an empty list). */
export function listHeaderLabel(state: AssembleSummaryListState): string {
  const first = state.eventList[0];
  if (first === undefined) return '';
  return getAssembleHeaderDateString(
    first.DateTime === '' ? '' : `${first.DateTime.slice(0, 10)}T00:00:00`,
    state.filter.AssembleFilterTimeOptionId,
  );
}
