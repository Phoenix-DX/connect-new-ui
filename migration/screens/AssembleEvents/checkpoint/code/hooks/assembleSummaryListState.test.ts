import { describe, expect, it } from 'vitest';
import type { AssembleEventFilter, AssembleMeeting } from '@/api/event';
import {
  assembleSummaryListReducer,
  initialAssembleSummaryListState,
  listHeaderLabel,
  MAX_RECORDS,
  meetingListQuery,
  toListRows,
  type AssembleSummaryListState,
} from './assembleSummaryListState';

/* The variables of AssembleSummary_List and the pure parts of its actions. The meeting types and the meetings are
   fictional. */
const NOW = new Date(2026, 9, 24, 12, 0, 0);
const TYPES = [
  { Id: 'lords-supper', Title: "Lord's Supper" },
  { Id: 'prayer', Title: 'Prayer Meeting' },
];
const meeting = (eventId: string, dateTime: string): AssembleMeeting => ({
  EventId: eventId,
  SeriesId: `series-${eventId}`,
  DateTime: dateTime,
  IsUnavailable: false,
});
const page = (n: number) =>
  Array.from({ length: n }, (_, i) => meeting(`e${String(i)}`, `2026-11-${String(10 + i)}T10:00:00`));
const initial = (): AssembleSummaryListState => initialAssembleSummaryListState(NOW, 'America/Argentina/Buenos_Aires');

describe('assembleSummaryListState', () => {
  it('OnInitialize: Upcoming Meetings from now to 36 months on, "All Meeting Types", the header loading', () => {
    expect(initial()).toEqual({
      eventList: [],
      filter: { AssembleFilterTimeOptionId: 'Upcoming Meetings', AssembleEventType: [] },
      isShowFilterDrawer: false,
      filterLabel: 'All Meeting Types',
      range: { StartDateTime: '2026-10-24T12:00:00', EndDateTime: '2029-10-24T23:59:59' },
      pageNumber: 1,
      isFiltered: false,
      hasMoreRecords: false,
      localSubdivisionId: '0',
      deviceTimezone: 'America/Argentina/Buenos_Aires',
      isHeaderLoading: true,
      summaryStatus: 'none',
      eventTypesStatus: 'none',
    });
  });

  it('the meetings: a full page has more records; an append keeps the list; the header stops loading', () => {
    let s = assembleSummaryListReducer(initial(), { type: 'summaryFetching' });
    expect(s.summaryStatus).toBe('fetching');
    s = assembleSummaryListReducer(s, { type: 'summaryFetched', rows: page(MAX_RECORDS), append: false });
    expect(s).toMatchObject({ hasMoreRecords: true, isHeaderLoading: false, summaryStatus: 'fetched' });
    s = assembleSummaryListReducer(s, { type: 'summaryFetched', rows: page(3), append: true });
    expect(s.eventList).toHaveLength(MAX_RECORDS + 3);
    expect(s.hasMoreRecords).toBe(false);
    s = assembleSummaryListReducer(s, { type: 'summaryFetched', rows: [], append: false });
    expect(s.eventList).toEqual([]);
    expect(s.hasMoreRecords).toBe(false);
    expect(assembleSummaryListReducer(s, { type: 'summaryFailed' }).summaryStatus).toBe('error');
  });

  it('the meeting types: none selected; a failure keeps the filter', () => {
    const s = assembleSummaryListReducer(initial(), { type: 'eventTypesFetched', types: TYPES });
    expect(s.filter.AssembleEventType).toEqual(TYPES.map((t) => ({ AssembleEventType: t, IsSelected: false })));
    expect(s.eventTypesStatus).toBe('fetched');
    expect(assembleSummaryListReducer(initial(), { type: 'eventTypesFetching' }).eventTypesStatus).toBe('fetching');
    expect(assembleSummaryListReducer(initial(), { type: 'eventTypesFailed' })).toMatchObject({
      eventTypesStatus: 'error',
      filter: initial().filter,
    });
  });

  it('Refresh_EventList: IsFiltered and the label of the filter, the list empty, page 1, the range and time zone', () => {
    const filter: AssembleEventFilter = {
      AssembleFilterTimeOptionId: 'Past Meetings',
      AssembleEventType: [
        { AssembleEventType: TYPES[0] ?? { Id: '', Title: '' }, IsSelected: true },
        { AssembleEventType: TYPES[1] ?? { Id: '', Title: '' }, IsSelected: false },
      ],
    };
    const range = { StartDateTime: '2023-10-24T00:00:00', EndDateTime: '2026-10-24T12:00:00' };
    let s = assembleSummaryListReducer(initial(), { type: 'summaryFetched', rows: page(4), append: false });
    s = assembleSummaryListReducer(s, { type: 'nextPageRequested' });
    s = assembleSummaryListReducer(s, { type: 'eventListReset', filter, range, deviceTimezone: 'Europe/London' });
    expect(s).toMatchObject({
      isFiltered: true,
      filterLabel: 'Meeting Types (1)',
      eventList: [],
      pageNumber: 1,
      range,
      deviceTimezone: 'Europe/London',
    });
  });

  it('the filter: Apply closes the drawer; Clear unselects every type; the drawer toggles; the next page', () => {
    const withTypes = assembleSummaryListReducer(initial(), { type: 'eventTypesFetched', types: TYPES });
    const selected: AssembleEventFilter = {
      ...withTypes.filter,
      AssembleEventType: withTypes.filter.AssembleEventType.map((t) => ({ ...t, IsSelected: true })),
    };
    let s = assembleSummaryListReducer(withTypes, { type: 'filterDrawerToggled' });
    expect(s.isShowFilterDrawer).toBe(true);
    s = assembleSummaryListReducer(s, { type: 'filtersApplied', filter: selected });
    expect(s).toMatchObject({ filter: selected, isShowFilterDrawer: false });
    s = assembleSummaryListReducer(s, { type: 'filtersCleared' });
    expect(s.filter.AssembleEventType.every((t) => !t.IsSelected)).toBe(true);
    expect(s.filter.AssembleFilterTimeOptionId).toBe('Upcoming Meetings');
    expect(assembleSummaryListReducer(s, { type: 'nextPageRequested' }).pageNumber).toBe(2);
    expect(assembleSummaryListReducer(s, { type: 'localSubdivisionSet', localSubdivisionId: '1210' })).toMatchObject({
      localSubdivisionId: '1210',
    });
  });

  it('the call variables of a page, and the rows as they come', () => {
    const s = initial();
    expect(
      meetingListQuery('0', { filter: s.filter, range: s.range, page: 2, local: '1210', timezone: s.deviceTimezone }),
    ).toEqual({
      SubdivisionId: '0',
      LocalSubdivisionId: '1210',
      EventList_Filter: s.filter,
      EventList_RangeFrom: '2026-10-24T12:00:00',
      EventsList_RangeTo: '2029-10-24T23:59:59',
      EventList_PageNumber: 2,
      MaxRecords: MAX_RECORDS,
      DeviceTimezone: 'America/Argentina/Buenos_Aires',
    });
    expect(toListRows(page(2))).toEqual(page(2));
  });

  it('the list header: From (upcoming) or Since (past) the month of the first meeting; nothing for an empty list', () => {
    const upcoming = assembleSummaryListReducer(initial(), {
      type: 'summaryFetched',
      rows: [meeting('a', '2026-11-08T10:00:00')],
      append: false,
    });
    expect(listHeaderLabel(upcoming)).toBe('From November 2026');
    const past = assembleSummaryListReducer(upcoming, {
      type: 'filtersApplied',
      filter: { ...upcoming.filter, AssembleFilterTimeOptionId: 'Past Meetings' },
    });
    expect(listHeaderLabel(past)).toBe('Since November 2026');
    expect(listHeaderLabel(initial())).toBe('');
    const nullDate = assembleSummaryListReducer(initial(), {
      type: 'summaryFetched',
      rows: [meeting('a', '')],
      append: false,
    });
    expect(listHeaderLabel(nullDate)).toBe('');
  });
});
