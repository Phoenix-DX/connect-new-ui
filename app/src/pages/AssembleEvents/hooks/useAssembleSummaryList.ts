import { useState } from 'react';
import { fetchAssembleEventTypes, fetchAssembleMeetings, type AssembleEventFilter } from '@/api/event';
import { setPreloadObject, useFlowState } from '@/platform/navigation';
import { getAssembleEventListDateRangeFilter, getIANATimezone } from '@/pages/AssembleEvents/components/actions';
import type { AssembleSummary_ListProps } from '@/pages/AssembleEvents/components/AssembleSummary_List';
import {
  assembleSummaryListReducer,
  initialAssembleSummaryListState,
  listHeaderLabel,
  meetingListQuery,
  toListRows,
} from './assembleSummaryListState';
import { fetchUserSubdivision, isUsersOwnSubdivision } from './userSubdivision';

/** The flows of the block AssembleSummary_List: OnInitialize, OnReady (the meeting types and the first page of
    meetings), the time tags, the filter drawer, the Clear link, the paging and the card click. The page calls this
    hook in a small component at the place of the block and gives the result to the view AssembleSummary_List.
    @origin Connect2_Assemble_MUI.Assemble.AssembleSummary_List */

/** The inputs of the block. */
export interface AssembleSummaryListInputs {
  /** SubdivisionId (Long Integer as text; "0" is the user's own). */
  subdivisionId: string;
}

/** The events of the block. */
export interface AssembleSummaryListEvents {
  /** Event NavigateTo_AssembleDetail(SeriesId, EventId, Start). */
  onNavigateToAssembleDetail: (seriesId: string, eventId: string, start: string) => void;
}

/** What the view of the block renders, and its event handlers: the props of AssembleSummary_List but its id. */
export type AssembleSummaryListFlows = Omit<AssembleSummary_ListProps, 'id'>;

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_Assemble_MUI.Assemble.AssembleSummary_List';

/** ScrollToTop JS of Refresh_EventList: the content scrolls to the top. */
const scrollContentToTop = () => {
  const content = document.querySelector('.content');
  if (content) content.scrollTop = 0;
};

/** The state and the flows of the block.
    - OnInitialize: Upcoming Meetings with its date range, the filter label and the device time zone.
    - OnReady: a view that the view cache restored with both data actions fetched does nothing; otherwise it fetches
      only what is missing. A new view sets LocalSubdivisionId (SubdivisionId 0: the Subdivision.Id of
      GetCacheableUserInfo), then refreshes GetAssembleEventTypes, then GetAssembleMeetingSummaryList (the order of the
      capture). The errors of both go to the flow handler.
    - The flows read the newest variables (`latest`), as OutSystems assigns them at once.
    - Flow scope (item 8): GetAssembleEventTypes and GetAssembleMeetingSummaryList are data actions (R1,
      `flow.fetch`): after the unmount their answers and failures are dropped. Their refreshes are own client actions
      of the block (R3, `flow.own`; TST `ensureControllerAlive`, AssembleSummary_List.js:1504, :1565): when the user
      leaves while OnReady waits for GetCacheableUserInfo (a module action), neither refresh starts. */
export function useAssembleSummaryList(
  inputs: AssembleSummaryListInputs,
  events: AssembleSummaryListEvents,
): AssembleSummaryListFlows {
  // OnInitialize: the variables of a new view (a restored view starts from its saved variables).
  const [initial] = useState(() => initialAssembleSummaryListState());
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
    flow,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: assembleSummaryListReducer,
    initial,
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });

  /** Refresh GetAssembleMeetingSummaryList for a page, with the newest filter, range and time zone, and its
      OnAfterFetch: the meetings (appended or in place of the list), HasMoreRecords, IsHeaderLoading False. An own
      client action of the block (R3). */
  const refreshSummaryList = flow.own(async (q: { page: number; local: string; append: boolean }) => {
    const v = latest.current;
    const query = meetingListQuery(parameters.current.subdivisionId, {
      filter: v.filter,
      range: v.range,
      page: q.page,
      local: q.local,
      timezone: v.deviceTimezone,
    });
    dispatch({ type: 'summaryFetching' });
    try {
      const page = await flow.fetch(fetchAssembleMeetings(query)); // R1
      dispatch({ type: 'summaryFetched', rows: toListRows(page), append: q.append });
    } catch (e) {
      dispatch({ type: 'summaryFailed' });
      throw e;
    }
  });

  /** Refresh GetAssembleEventTypes and its OnAfterFetch: the meeting types of the filter. An own client action of the
      block (R3). */
  const refreshEventTypes = flow.own(async () => {
    dispatch({ type: 'eventTypesFetching' });
    try {
      const types = await flow.fetch(fetchAssembleEventTypes()); // R1
      dispatch({ type: 'eventTypesFetched', types });
    } catch (e) {
      dispatch({ type: 'eventTypesFailed' });
      throw e;
    }
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  async function onReady(restored: boolean) {
    const v = latest.current;
    let fetchSummary = true;
    let fetchEventTypes = true;
    let local = v.localSubdivisionId;
    if (restored) {
      if (v.eventTypesStatus === 'fetched' && v.summaryStatus === 'fetched') return;
      fetchSummary = v.summaryStatus !== 'fetched';
      fetchEventTypes = v.filter.AssembleEventType.length === 0 && v.eventTypesStatus !== 'fetched';
    } else {
      // SetLocalSubdivisonId. GetCacheableUserInfo is a module action: not wrapped.
      const { subdivisionId } = parameters.current;
      local = isUsersOwnSubdivision(subdivisionId) ? (await fetchUserSubdivision()).id : subdivisionId;
      dispatch({ type: 'localSubdivisionSet', localSubdivisionId: local });
    }
    // The two refreshes are own actions (R3): after the unmount each one throws ControllerDisposedException at its
    // start, which the flow handler drops. The async wrappers turn that throw into a rejection for `flow.run`.
    if (fetchEventTypes) flow.run(async () => refreshEventTypes());
    if (fetchSummary)
      flow.run(async () => refreshSummaryList({ page: latest.current.pageNumber, local, append: false }));
  }

  /** Refresh_EventList(Filter): IsFiltered, ScrollToTop JS, the filter label, the list cleared, page 1, the date range
      and the time zone again, then the summary list. */
  const refreshEventList = async (filter: AssembleEventFilter) => {
    dispatch({
      type: 'eventListReset',
      filter,
      range: getAssembleEventListDateRangeFilter(filter.AssembleFilterTimeOptionId),
      deviceTimezone: getIANATimezone(),
    });
    scrollContentToTop();
    await refreshSummaryList({ page: 1, local: latest.current.localSubdivisionId, append: false });
  };

  /** Handler_ApplyFilters(In_AssembleMeetingFilter): the filter, the drawer closes, Refresh_EventList. */
  const applyFilters = (filter: AssembleEventFilter) => {
    dispatch({ type: 'filtersApplied', filter });
    flow.run(() => refreshEventList(filter));
  };

  return {
    eventList: state.eventList,
    filter: state.filter,
    filterLabel: state.filterLabel,
    listHeaderLabel: listHeaderLabel(state),
    isHeaderLoading: state.isHeaderLoading,
    isFiltered: state.isFiltered,
    isSummaryFetched: state.summaryStatus === 'fetched',
    isShowFilterDrawer: state.isShowFilterDrawer,
    // HorizontalTagsOnClickTag(TagId): the filter with the time option of the tag, then Handler_ApplyFilters.
    onClickTag: (tagId) => {
      applyFilters({ ...latest.current.filter, AssembleFilterTimeOptionId: tagId });
    },
    onToggleFilterDrawer: () => {
      dispatch({ type: 'filterDrawerToggled' });
    },
    // Handler_ClearFilters: no meeting type selected, then Refresh_EventList.
    onClearFilters: () => {
      dispatch({ type: 'filtersCleared' });
      flow.run(() => refreshEventList(latest.current.filter));
    },
    onApplyFilters: applyFilters,
    // List_AssembleSummaryCardsOnScrollEnding: when the list is fetched and the last page was full, the next page.
    onScrollEnding: () => {
      const v = latest.current;
      if (v.summaryStatus !== 'fetched' || !v.hasMoreRecords) return;
      const page = v.pageNumber + 1;
      dispatch({ type: 'nextPageRequested' });
      flow.run(() => refreshSummaryList({ page, local: v.localSubdivisionId, append: true }));
    },
    // OnClick_AssembleMeetingSummaryCard: nothing for an unavailable meeting; else the AssembleDetailsPreloading
    // object, then NavigateTo_AssembleDetail(SeriesId, EventId, DateTime).
    onClickMeeting: (meeting, index) => {
      if (meeting.IsUnavailable) return;
      setPreloadObject({ AssembleEventSummary: meeting, PreloadedFromListIndex: index });
      eventsRef.current.onNavigateToAssembleDetail(meeting.SeriesId, meeting.EventId, meeting.DateTime);
    },
  };
}
