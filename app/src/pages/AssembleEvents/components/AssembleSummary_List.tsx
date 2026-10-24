// @os-block Connect2_Assemble_MUI.Assemble.AssembleSummary_List
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { AssembleSummaryCard } from '@/shared/Connect2_Assemble_MUI/AssembleSummaryCard';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { setPreloadObject, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getAssembleEventTypes, getAssembleMeetingSummaryList, getUserSubdivision } from '@/pages/AssembleEvents/api';
import type { AssembleEventFilter, AssembleMeeting, TagItem } from '@/pages/AssembleEvents/types';
import {
  geAssembleSummaryListFilterLabel,
  getAssembleEventListDateRangeFilter,
  getAssembleHeaderDateString,
  getIANATimezone,
  offsetDateTimeByUserUTCOffset,
  ViewmodeType,
} from './actions';
import { AssembleSummary_FilterDrawer } from './AssembleSummary_FilterDrawer';
import { AssembleSummary_List__Header } from './AssembleSummary_List__Header';
import { AssembleSummary_SkeletonList } from './AssembleSummary_SkeletonList';
import { HorizontalTags } from './HorizontalTags';
import { NC_ErrorScreen } from './NC_ErrorScreen';

const POINTER = { cursor: 'pointer' };
const MAX_RECORDS = 10;
const SKELETON_LIST_LENGTH = 3;
/** BuildHeaderMenu (L:396-418): Upcoming Meetings and Past Meetings, Id = Label. */
const HEADER_MENU: TagItem[] = [
  { Id: ViewmodeType.UpcomingMeetings, Label: ViewmodeType.UpcomingMeetings },
  { Id: ViewmodeType.PastMeetings, Label: ViewmodeType.PastMeetings },
];

type FetchStatus = 'none' | 'fetching' | 'fetched' | 'error';

export interface AssembleSummary_ListProps {
  id: string;
  /** Input SubdivisionId (Long Integer; "0" = the user's own). */
  subdivisionId: string;
  /** Event NavigateTo_AssembleDetail(SeriesId, EventId, Start). */
  onNavigateToAssembleDetail: (seriesId: string, eventId: string, start: string) => void;
}

/** Share.StickyHeader (p:…/Connect2_LegacyShared.Share.StickyHeader.mvc.js view): the Content placeholder with
    "sticky absolute-top z-index1 background-neutral-0 " + ExtendedClass (empty here). */
function StickyHeader({ id, children }: { id: string; children: React.ReactNode }) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Share.StickyHeader" id={id}>
      <div className="sticky absolute-top z-index1 background-neutral-0" id={`${scope}-Content`}>
        {children}
      </div>
    </OSBlock>
  );
}

/** Assemble.AssembleSummary_List (p:…/Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc.js, cited as L:<line> in
    the condensed reading; view :135-281, controller :286-790). StickyHeader (HorizontalTags Upcoming / Past, the list
    header), NC_ErrorScreen when the fetched list is empty else List_AssembleSummaryCards (ScrollAnchor +
    AssembleSummaryCard per meeting), the skeleton list until the summary list is fetched, and the filter drawer.
    OnInitialize: Upcoming Meetings and its date range, header menu, filter label, device time zone. OnReady: restored
    from cache → fetch only what is missing; else SetLocalSubdivisonId (GetCacheableUserInfo when SubdivisionId is 0)
    and the FetchData JS (both data actions; errors to the screen's handler). The capture issued GetAssembleEventTypes
    before GetAssembleMeetingSummaryList (calls.json #6, #8), the order kept here. Not ported: RememberFocusedScrollAnchor
    (no shell helper; the ScrollAnchor block renders). */
export function AssembleSummary_List({ id, subdivisionId, onNavigateToAssembleDetail }: AssembleSummary_ListProps) {
  const scope = id.replace('$', '');
  const fromCache = useWasRestoredFromCache();
  // OnInitialize (L:629-644): Upcoming Meetings and its date range when no time option is set yet.
  const [init] = useState(() => {
    const f: AssembleEventFilter = { AssembleFilterTimeOptionId: ViewmodeType.UpcomingMeetings, AssembleEventType: [] };
    return { filter: f, range: getAssembleEventListDateRangeFilter(f.AssembleFilterTimeOptionId) };
  });
  const [eventList, setEventList] = useViewState<AssembleMeeting[]>('EventList', []);
  const [filter, setFilter] = useViewState<AssembleEventFilter>('EventList_Filter', init.filter);
  const [isShowFilterDrawer, setIsShowFilterDrawer] = useViewState('IsShow_FilterDrawer', false);
  const [filterLabel, setFilterLabel] = useViewState(
    'EventList_FilterLabel',
    geAssembleSummaryListFilterLabel(init.filter),
  );
  const [range, setRange] = useViewState('EventList_Range', init.range);
  const [pageNumber, setPageNumber] = useViewState('EventList_PageNumber', 1);
  const [isFiltered, setIsFiltered] = useViewState('EventList_IsFiltered', false);
  const [hasMoreRecords, setHasMoreRecords] = useViewState('EventList_HasMoreRecords', false);
  const [localSubdivisionId, setLocalSubdivisionId] = useViewState('LocalSubdivisionId', '0');
  const [deviceTimezone, setDeviceTimezone] = useViewState('DeviceTimezone', getIANATimezone());
  const [isHeaderLoading, setIsHeaderLoading] = useViewState('IsHeaderLoading', true);
  const [summaryStatus, setSummaryStatus] = useViewState<FetchStatus>('GetAssembleMeetingSummaryList', 'none');
  const [eventTypesStatus, setEventTypesStatus] = useViewState<FetchStatus>('GetAssembleEventTypes', 'none');

  /** Refresh GetAssembleMeetingSummaryList and its OnAfterFetch (L:596-621): append each meeting (DateTime through
      OffsetDateTimeByUserUTCOffset), HasMoreRecords = a full page, IsHeaderLoading False. */
  const refreshSummaryList = async (q: {
    filter: AssembleEventFilter;
    range: { StartDateTime: string; EndDateTime: string };
    page: number;
    local: string;
    timezone: string;
    append: boolean;
  }) => {
    setSummaryStatus('fetching');
    try {
      const page = await getAssembleMeetingSummaryList({
        SubdivisionId: subdivisionId,
        LocalSubdivisionId: q.local,
        EventList_Filter: q.filter,
        EventList_RangeFrom: offsetDateTimeByUserUTCOffset(q.range.StartDateTime),
        EventsList_RangeTo: offsetDateTimeByUserUTCOffset(q.range.EndDateTime),
        EventList_PageNumber: q.page,
        MaxRecords: MAX_RECORDS,
        DeviceTimezone: q.timezone,
      });
      const rows = page.map((m) => ({ ...m, DateTime: offsetDateTimeByUserUTCOffset(m.DateTime) }));
      setEventList((list) => (q.append ? [...list, ...rows] : rows));
      setHasMoreRecords(rows.length > 0 && !(rows.length < MAX_RECORDS));
      setIsHeaderLoading(false);
      setSummaryStatus('fetched');
    } catch (e) {
      setSummaryStatus('error');
      throw e;
    }
  };

  /** Refresh GetAssembleEventTypes and its OnAfterFetch (L:436-464): the filter's types, IsSelected from
      SelectedMettingTypeIds (never filled: False). */
  const refreshEventTypes = async () => {
    setEventTypesStatus('fetching');
    try {
      const types = await getAssembleEventTypes();
      setFilter((f) => ({
        ...f,
        AssembleEventType: types.map((t) => ({ AssembleEventType: t, IsSelected: false })),
      }));
      setEventTypesStatus('fetched');
    } catch (e) {
      setEventTypesStatus('error');
      throw e;
    }
  };

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    void (async () => {
      let fetchSummary = true;
      let fetchEventTypes = true;
      let local = localSubdivisionId;
      if (fromCache) {
        if (eventTypesStatus === 'fetched' && summaryStatus === 'fetched') return;
        fetchSummary = summaryStatus !== 'fetched';
        fetchEventTypes = filter.AssembleEventType.length === 0 && eventTypesStatus !== 'fetched';
      } else {
        // SetLocalSubdivisonId (L:480-494).
        local = subdivisionId === '0' || subdivisionId === '' ? (await getUserSubdivision()).Id : subdivisionId;
        setLocalSubdivisionId(local);
      }
      if (fetchEventTypes) refreshEventTypes().catch(raiseToFlowHandler);
      if (fetchSummary)
        refreshSummaryList({ filter, range, page: pageNumber, local, timezone: deviceTimezone, append: false }).catch(
          raiseToFlowHandler,
        );
    })().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Refresh_EventList (L:505-534): IsFiltered, ScrollToTop JS, filter label, list cleared, page 1, date range and
      time zone again, then the summary list. */
  const refreshEventList = async (f: AssembleEventFilter) => {
    setIsFiltered(f.AssembleEventType.some((t) => t.IsSelected));
    const content = document.querySelector('.content');
    if (content) content.scrollTop = 0;
    setFilterLabel(geAssembleSummaryListFilterLabel(f));
    setEventList([]);
    setPageNumber(1);
    const r = getAssembleEventListDateRangeFilter(f.AssembleFilterTimeOptionId);
    setRange(r);
    const tz = getIANATimezone();
    setDeviceTimezone(tz);
    await refreshSummaryList({ filter: f, range: r, page: 1, local: localSubdivisionId, timezone: tz, append: false });
  };

  /** Handler_ApplyFilters(In_AssembleMeetingFilter) (L:576-586). */
  const applyFilters = (f: AssembleEventFilter) => {
    setFilter(f);
    setIsShowFilterDrawer(false);
    refreshEventList(f).catch(raiseToFlowHandler);
  };

  const first = eventList[0];
  const listHeaderLabel =
    first === undefined
      ? ''
      : getAssembleHeaderDateString(
          first.DateTime === '' ? '' : `${first.DateTime.slice(0, 10)}T00:00:00`,
          filter.AssembleFilterTimeOptionId,
        );
  const summaryFetched = summaryStatus === 'fetched';

  return (
    <OSBlock name="Assemble.AssembleSummary_List" id={id}>
      <div data-container="" id={`${scope}-DIV_Root`}>
        <StickyHeader id={`${scope}-$b1`}>
          <div className="connect-pill-menu" data-container="">
            <HorizontalTags
              id={`${scope}-$b2`}
              tagList={HEADER_MENU}
              activeTagId={filter.AssembleFilterTimeOptionId}
              onClickTag={(tagId) => {
                // HorizontalTagsOnClickTag (L:645-653).
                applyFilters({ ...filter, AssembleFilterTimeOptionId: tagId });
              }}
            />
          </div>
          <AssembleSummary_List__Header
            id={`${scope}-$b3`}
            filterLabel={filterLabel}
            listHeaderLabel={listHeaderLabel}
            isLoading={isHeaderLoading}
            showClear={isFiltered}
            onClick={() => {
              setIsShowFilterDrawer((v) => !v);
            }}
            onClear={() => {
              // Handler_ClearFilters (L:419-435).
              const f = {
                ...filter,
                AssembleEventType: filter.AssembleEventType.map((t) => ({ ...t, IsSelected: false })),
              };
              setFilter(f);
              refreshEventList(f).catch(raiseToFlowHandler);
            }}
          />
        </StickyHeader>
        {eventList.length === 0 && summaryFetched ? (
          <NC_ErrorScreen
            id={`${scope}-$b4`}
            inErrorMessage="We were unable to find any meetings to display."
            placeholderIcon={<i className="icon connect-icon-calendar-cross fa fa-flag fa-4x" data-icon="" />}
          />
        ) : (
          <div data-container="" id={`${scope}-DIV_ResultList`}>
            <OSList
              id={`${scope}-List_AssembleSummaryCards`}
              source={eventList}
              keyOf={(m) => m.EventId}
              className="background-neutral-1 list list-group"
              animateItems
              disableVirtualization
              onScrollEnding={() => {
                // List_AssembleSummaryCardsOnScrollEnding (L:535-549).
                if (!summaryFetched || !hasMoreRecords) return;
                const page = pageNumber + 1;
                setPageNumber(page);
                refreshSummaryList({
                  filter,
                  range,
                  page,
                  local: localSubdivisionId,
                  timezone: deviceTimezone,
                  append: true,
                }).catch(raiseToFlowHandler);
              }}
            >
              {(m, index) => (
                <div
                  className="background-neutral-0 margin-bottom-s padding-top-s"
                  data-container=""
                  style={POINTER}
                  onClick={() => {
                    // OnClick_AssembleMeetingSummaryCard (L:550-566): nothing for an unavailable meeting; else the
                    // AssembleDetailsPreloading object, then NavigateTo_AssembleDetail(SeriesId, EventId, DateTime).
                    if (m.IsUnavailable) return;
                    setPreloadObject({ AssembleEventSummary: m, PreloadedFromListIndex: index });
                    onNavigateToAssembleDetail(m.SeriesId, m.EventId, m.DateTime);
                  }}
                >
                  <ScrollAnchor id={`${scope}-l1-${String(index)}-$b5`} idIn={m.EventId} />
                  <AssembleSummaryCard id={`${scope}-l1-${String(index)}-$b6`} assembleEventSummary={m} isListItem />
                </div>
              )}
            </OSList>
          </div>
        )}
        {!summaryFetched && (
          <AssembleSummary_SkeletonList id={`${scope}-$b7`} skeletonListLength={SKELETON_LIST_LENGTH} />
        )}
        <AssembleSummary_FilterDrawer
          id={`${scope}-$b8`}
          isOpen={isShowFilterDrawer}
          assembleMeetingFilter={filter}
          onApplyFilters={applyFilters}
          onClose={() => {
            setIsShowFilterDrawer((v) => !v);
          }}
        />
      </div>
    </OSBlock>
  );
}
