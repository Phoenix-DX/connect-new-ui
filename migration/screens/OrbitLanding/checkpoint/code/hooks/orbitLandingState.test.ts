import { describe, expect, it } from 'vitest';
import type { EventsSummaryItem, YearItem } from '@/api/event';
import { OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';
import {
  callInputsOf,
  canTogglePopup,
  canViewPassportDetails,
  currentMemberIdOf,
  eventsFetched,
  filterEvents,
  filtersApplied,
  INITIAL_ORBIT_LANDING_STATE,
  orbitLandingReducer,
  RESET_FILTERS_AND_SORT,
  selectFirstMember,
  setAndSortEvents,
  showsMyCalendar,
  sortEvents,
  textToInteger,
  type OrbitLandingState,
} from './orbitLandingState';

/* The variables and client actions of ScreenBlock_OrbitLanding. Fictional members and rows. "Now" is 15 Jun 2026,
   local time: the Upcoming / Past threshold is local midnight of 24 May 2026 (22 days before). */
const NOW = new Date(2026, 5, 15, 9, 30);

/** A row of the events of a member: an event, or a milestone when `milestone` is true. */
function row(id: string, sequenceNo: number, end: string | null, start: string, milestone = false): EventsSummaryItem {
  return {
    isMilestone: milestone,
    sequenceNo,
    endDateTime: end,
    event: {
      EventId: milestone ? '' : id,
      Title: `Event ${id}`,
      EventInfo: { StartEventDate: milestone ? '' : start },
    },
    milestone: {
      MilestoneId: milestone ? id : '',
      Title: `Milestone ${id}`,
      MilestoneInfo: { MilestoneStartDateTime: milestone ? start : '' },
    },
  };
}

const UPCOMING = row('e1', 2, '2026-07-04T18:00:00Z', '2026-07-03T08:00:00Z');
/** Ends on the threshold day: still upcoming. */
const RECENT = row('m1', 1, '2026-05-24T12:00:00', '2026-05-23T08:00:00Z', true);
const PAST_2025 = row('e2', 3, '2025-11-02T18:00:00Z', '2025-11-01T08:00:00Z');
const PAST_2024 = row('e3', 4, '2024-03-10T18:00:00Z', '2024-03-09T08:00:00Z');
/** The null end date (1 Jan 1900): past. */
const NO_END = row('e4', 5, null, '2024-01-05T08:00:00Z');
const ROWS = [UPCOMING, RECENT, PAST_2025, PAST_2024, NO_END];

const years = (...selected: string[]): YearItem[] =>
  ['2024', '2025', '2026'].map((year) => ({ year, isSelected: selected.includes(year), count: 1 }));

const state = (patch: Partial<OrbitLandingState> = {}): OrbitLandingState => ({
  ...INITIAL_ORBIT_LANDING_STATE,
  ...patch,
});

const MEMBERS = [
  { memberId: '7201', firstName: 'Iris', isSelected: false },
  { memberId: '7202', firstName: 'Tomás', isSelected: false },
];

describe('orbitLandingState', () => {
  it('starts with the defaults: nothing selected, no fetch, Upcoming not set, ascending', () => {
    expect(INITIAL_ORBIT_LANDING_STATE).toMatchObject({
      selectedMemberId: '0',
      currentMemberId: '0',
      isFetchingData: false,
      isEventsDataFetched: false,
      eventFilter: 0,
      sortEventsASC: true,
      popupMeasurements: { top: 0, left: 0, bottom: 0 },
    });
  });

  it('the reducer assigns the variables of a patch', () => {
    const next = orbitLandingReducer(INITIAL_ORBIT_LANDING_STATE, { isFetchingData: true, selectedMemberId: '7201' });
    expect(next).toEqual({ ...INITIAL_ORBIT_LANDING_STATE, isFetchingData: true, selectedMemberId: '7201' });
    expect(INITIAL_ORBIT_LANDING_STATE.isFetchingData).toBe(false);
  });

  it('callInputsOf sends the seven block variables in the order of the block', () => {
    const inputs = callInputsOf(state({ selectedMemberId: '7202', isFetchingData: true, eventFilter: 1 }));
    expect(inputs).toEqual({
      SelectedMemberId: '7202',
      IsFetchingData: true,
      EventFilter: 1,
      SortEventsASC: true,
      Popup_SortByOpened: false,
      Popup_FiltersOpened: false,
      CurrentMemberId: '0',
    });
    expect(Object.keys(inputs)).toEqual([
      'SelectedMemberId',
      'IsFetchingData',
      'EventFilter',
      'SortEventsASC',
      'Popup_SortByOpened',
      'Popup_FiltersOpened',
      'CurrentMemberId',
    ]);
  });

  it('ResetFiltersAndSort: ascending, Upcoming Events, no year', () => {
    expect(RESET_FILTERS_AND_SORT).toEqual({
      sortEventsASC: true,
      eventFilter: OrbitLandingFilter.UpcomingEvents,
      yearsSelection: [],
    });
  });

  it('selectFirstMember selects the first member; null without members', () => {
    expect(selectFirstMember(MEMBERS)).toEqual({
      selectedMemberId: '7201',
      householdMembersList: [
        { memberId: '7201', firstName: 'Iris', isSelected: true },
        { memberId: '7202', firstName: 'Tomás', isSelected: false },
      ],
    });
    expect(selectFirstMember([])).toBeNull();
  });

  it('eventsFetched keeps the answer and filters it with the current filter', () => {
    const patch = eventsFetched(state({ eventFilter: OrbitLandingFilter.UpcomingEvents }), ROWS, NOW);
    expect(patch.isEventsDataFetched).toBe(true);
    expect(patch.eventsResponse).toBe(ROWS);
    expect(patch.eventsSummary).toEqual([UPCOMING, RECENT]);
  });

  it('filtersApplied filters the loaded answer again with the choice of the popup', () => {
    const before = state({ eventsResponse: ROWS, eventFilter: OrbitLandingFilter.UpcomingEvents });
    const patch = filtersApplied(before, OrbitLandingFilter.PastEvents, years('2024'), NOW);
    expect(patch.eventFilter).toBe(OrbitLandingFilter.PastEvents);
    expect(patch.yearsSelection).toEqual(years('2024'));
    expect(patch.eventsSummary).toEqual([PAST_2024, NO_END]);
  });

  it('setAndSortEvents: nothing when the order is unchanged and not forced, else the sorted list', () => {
    const s = state({ eventsSummary: [PAST_2025, UPCOMING, RECENT], sortEventsASC: true });
    expect(setAndSortEvents(s, true, false)).toBeNull();
    expect(setAndSortEvents(s, true, true)).toEqual({
      sortEventsASC: true,
      eventsSummary: [RECENT, UPCOMING, PAST_2025],
    });
    expect(setAndSortEvents(s, false, false)).toEqual({
      sortEventsASC: false,
      eventsSummary: [PAST_2025, UPCOMING, RECENT],
    });
  });

  it('the popups open only with members and no fetch', () => {
    expect(canTogglePopup(state())).toBe(false);
    expect(canTogglePopup(state({ householdMembersList: MEMBERS }))).toBe(true);
    expect(canTogglePopup(state({ householdMembersList: MEMBERS, isFetchingData: true }))).toBe(false);
  });

  it('View Passport details needs the signed-in member and no fetch', () => {
    expect(canViewPassportDetails(state())).toBe(false);
    expect(canViewPassportDetails(state({ currentMemberId: '7202' }))).toBe(true);
    expect(canViewPassportDetails(state({ currentMemberId: '7202', isFetchingData: true }))).toBe(false);
  });

  it('the My calendar icon shows only for the signed-in member', () => {
    expect(showsMyCalendar(state())).toBe(false);
    expect(showsMyCalendar(state({ selectedMemberId: '7201', currentMemberId: '7202' }))).toBe(false);
    expect(showsMyCalendar(state({ selectedMemberId: '7202', currentMemberId: '7202' }))).toBe(true);
  });

  it('CurrentMemberId is TextToInteger of the cached MemberId', () => {
    expect(currentMemberIdOf('7202')).toBe('7202');
    expect(currentMemberIdOf(' 042 ')).toBe('42');
    expect(currentMemberIdOf('')).toBe('0');
    expect(currentMemberIdOf('12a')).toBe('0');
    expect(textToInteger('-7')).toBe(-7);
  });
});

describe('filterEvents', () => {
  it('Upcoming: the rows that end on or after 22 days ago', () => {
    expect(filterEvents(ROWS, OrbitLandingFilter.UpcomingEvents, [], [], NOW)).toEqual([UPCOMING, RECENT]);
  });

  it('Past without years: the rows that end before, in answer order', () => {
    expect(filterEvents(ROWS, OrbitLandingFilter.PastEvents, years(), [], NOW)).toEqual([PAST_2025, PAST_2024, NO_END]);
  });

  it('Past with years: per selected year in YearsSelection order, the rows that start in that year', () => {
    const selection: YearItem[] = [
      { year: '2025', isSelected: true, count: 1 },
      { year: '2024', isSelected: true, count: 2 },
    ];
    expect(filterEvents(ROWS, OrbitLandingFilter.PastEvents, selection, [], NOW)).toEqual([
      PAST_2025,
      PAST_2024,
      NO_END,
    ]);
  });

  it('another filter keeps EventsSummary; an empty answer gives an empty list', () => {
    expect(filterEvents(ROWS, 0, [], [RECENT], NOW)).toEqual([RECENT]);
    expect(filterEvents([], OrbitLandingFilter.UpcomingEvents, [], [RECENT], NOW)).toEqual([]);
  });
});

describe('sortEvents', () => {
  it('sorts by SequenceNo, ascending or descending, without changing the input', () => {
    const input = [PAST_2025, UPCOMING, RECENT];
    expect(sortEvents(input, true).map((p) => p.sequenceNo)).toEqual([1, 2, 3]);
    expect(sortEvents(input, false).map((p) => p.sequenceNo)).toEqual([3, 2, 1]);
    expect(input.map((p) => p.sequenceNo)).toEqual([3, 2, 1]);
  });
});
