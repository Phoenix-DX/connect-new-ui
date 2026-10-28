import type { EventsSummaryItem, OrbitLandingCallInputs, YearItem } from '@/api/event';
import type { OrbitHouseholdMember } from '@/api/household';
import { OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';

/** The variables of ScreenBlock_OrbitLanding, the reducer and the client actions. Pure; the flows are in
    useOrbitLanding.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding */

/** Long Integer null identifier (Long Integers stay text). */
export const NULL_ID = '0';

/** PopupMeasurements (IntegerIntegerIntegerRecord): Top and Left of the popups and Bottom, in px. */
export interface PopupMeasurements {
  top: number;
  left: number;
  bottom: number;
}

/** The block variables and the fetch state of Get_EventsByMemberId that the view reads. */
export interface OrbitLandingState {
  householdMembersList: OrbitHouseholdMember[];
  selectedMemberId: string;
  isFetchingData: boolean;
  eventsSummary: EventsSummaryItem[];
  /** OrbitLandingFilter identifier; 0 = null identifier (the default). */
  eventFilter: number;
  sortEventsASC: boolean;
  yearsSelection: YearItem[];
  popup_SortByOpened: boolean;
  popup_FiltersOpened: boolean;
  popupMeasurements: PopupMeasurements;
  currentMemberId: string;
  /** Get_EventsByMemberId.IsDataFetched. */
  isEventsDataFetched: boolean;
  /** Get_EventsByMemberId.Response (FilterEvents filters it again on ApplyFilters). */
  eventsResponse: EventsSummaryItem[];
}

/** An assignment of one or more variables. */
type OrbitLandingPatch = Partial<OrbitLandingState>;

/** The variables after OnInitialize (the block has none: the defaults). A view that the view cache restores starts
    from its saved state instead. */
export const INITIAL_ORBIT_LANDING_STATE: OrbitLandingState = {
  householdMembersList: [],
  selectedMemberId: NULL_ID,
  isFetchingData: false,
  eventsSummary: [],
  eventFilter: 0,
  sortEventsASC: true,
  yearsSelection: [],
  popup_SortByOpened: false,
  popup_FiltersOpened: false,
  popupMeasurements: { top: 0, left: 0, bottom: 0 },
  currentMemberId: NULL_ID,
  isEventsDataFetched: false,
  eventsResponse: [],
};

/** The variables after an assignment. */
export const orbitLandingReducer = (state: OrbitLandingState, patch: OrbitLandingPatch): OrbitLandingState => ({
  ...state,
  ...patch,
});

/** The block variables that both data actions send (screenData.variables), in the order of the block. */
export const callInputsOf = (state: OrbitLandingState): OrbitLandingCallInputs => ({
  SelectedMemberId: state.selectedMemberId,
  IsFetchingData: state.isFetchingData,
  EventFilter: state.eventFilter,
  SortEventsASC: state.sortEventsASC,
  Popup_SortByOpened: state.popup_SortByOpened,
  Popup_FiltersOpened: state.popup_FiltersOpened,
  CurrentMemberId: state.currentMemberId,
});

/** ResetFiltersAndSort (the first step of Refresh_GetEventsByMemberId): SortEventsASC True, EventFilter
    UpcomingEvents, YearsSelection cleared. */
export const RESET_FILTERS_AND_SORT: OrbitLandingPatch = {
  sortEventsASC: true,
  eventFilter: OrbitLandingFilter.UpcomingEvents,
  yearsSelection: [],
};

/** OnAfterFetch_Get_HouseholdMembers: the first member is the selected one (SelectedMemberId and its IsSelected).
    null when the answer has no member: the flow then sets IsFetchingData False and stops. */
export function selectFirstMember(members: readonly OrbitHouseholdMember[]): OrbitLandingPatch | null {
  const [first] = members;
  if (!first) return null;
  return {
    selectedMemberId: first.memberId,
    householdMembersList: members.map((p, i) => (i === 0 ? { ...p, isSelected: true } : p)),
  };
}

/** OnAfterFetch_Get_EventsByMemberId, the assignments before SetAndSortEvents: the answer (IsDataFetched, Response)
    and EventsSummary = FilterEvents(Response, EventFilter, YearsSelection). */
export function eventsFetched(
  state: OrbitLandingState,
  events: EventsSummaryItem[],
  now: Date = new Date(),
): OrbitLandingPatch {
  return {
    isEventsDataFetched: true,
    eventsResponse: events,
    eventsSummary: filterEvents(events, state.eventFilter, state.yearsSelection, state.eventsSummary, now),
  };
}

/** OnHandle_ApplyFilters, the assignments before SetAndSortEvents: EventFilter and YearsSelection from the popup, and
    EventsSummary = FilterEvents of the loaded answer (no server call). */
export function filtersApplied(
  state: OrbitLandingState,
  selectedFilter: number,
  selectedYears: YearItem[],
  now: Date = new Date(),
): OrbitLandingPatch {
  return {
    eventFilter: selectedFilter,
    yearsSelection: selectedYears,
    eventsSummary: filterEvents(state.eventsResponse, selectedFilter, selectedYears, state.eventsSummary, now),
  };
}

/** SetAndSortEvents(IsSortASC, IsForceSort): null (nothing) when the order is unchanged and the sort is not forced;
    else SortEventsASC = IsSortASC and SortEvents' ListSort of EventsSummary. The flow then runs ScrollContentToTop. */
export function setAndSortEvents(
  state: OrbitLandingState,
  isSortASC: boolean,
  isForceSort: boolean,
): OrbitLandingPatch | null {
  if (isSortASC === state.sortEventsASC && !isForceSort) return null;
  return { sortEventsASC: isSortASC, eventsSummary: sortEvents(state.eventsSummary, isSortASC) };
}

/** The condition of OnToggle_FilterPopup and OnToggle_SortPopup: the members are loaded and no fetch runs. */
export const canTogglePopup = (state: OrbitLandingState): boolean =>
  !state.isFetchingData && state.householdMembersList.length > 0;

/** The condition of OnHandle_ViewPassportDetails: no fetch runs and the signed-in member is known (Q3). */
export const canViewPassportDetails = (state: OrbitLandingState): boolean =>
  !state.isFetchingData && state.currentMemberId !== NULL_ID;

/** HeaderRight: the My calendar icon shows only when the selected member is the signed-in member. */
export const showsMyCalendar = (state: OrbitLandingState): boolean =>
  state.selectedMemberId !== NULL_ID && state.selectedMemberId === state.currentMemberId;

/** CurrentMemberId = TextToInteger(the MemberId of the cached user information), as text. */
export const currentMemberIdOf = (cachedMemberId: string): string => String(textToInteger(cachedMemberId));

const DAY_MS = 24 * 60 * 60 * 1000;

/** AddDays(CurrDate(), -22): local midnight of today minus 22 days (the "Last8DaysAndFuture" filters use -22). */
const upcomingThreshold = (now: Date): number =>
  new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() - 22 * DAY_MS;

/** The date of a row the filters read; the OutSystems null date (empty here) is 1 Jan 1900. */
const rowDate = (value: string | null | undefined): Date => (value ? new Date(value) : new Date(Date.UTC(1900, 0, 1)));

/** GetFullYear: TimeFormat.getYear, the UTC year of the row's start (MilestoneStartDateTime / StartEventDate). */
const startYear = (p: EventsSummaryItem): number =>
  rowDate(
    p.isMilestone ? p.milestone.MilestoneInfo?.MilestoneStartDateTime : p.event.EventInfo?.StartEventDate,
  ).getUTCFullYear();

/** FilterEvents. With rows: UpcomingEvents → the rows whose end (MilestoneEndDateTime of a milestone, EndEventDate of
    an event) is on or after AddDays(CurrDate(), -22); PastEvents → the rows ending before it, and when years are
    selected, per selected year (in YearsSelection order) the rows starting in that year (GetFullYear), appended; any
    other filter keeps EventsSummary. Without rows: the empty answer. */
export function filterEvents(
  response: readonly EventsSummaryItem[],
  eventFilter: number,
  yearsSelection: readonly YearItem[],
  eventsSummary: readonly EventsSummaryItem[],
  now: Date = new Date(),
): EventsSummaryItem[] {
  if (response.length === 0) return [...response];
  const threshold = upcomingThreshold(now);
  const ends = (p: EventsSummaryItem) => rowDate(p.endDateTime).getTime();
  if (eventFilter === OrbitLandingFilter.UpcomingEvents) return response.filter((p) => ends(p) >= threshold);
  if (eventFilter !== OrbitLandingFilter.PastEvents) return [...eventsSummary];
  const moreThan22DaysAgo = response.filter((p) => ends(p) < threshold);
  const selectedYears = yearsSelection.filter((y) => y.isSelected);
  if (selectedYears.length === 0) return moreThan22DaysAgo;
  return selectedYears.flatMap((y) => moreThan22DaysAgo.filter((p) => startYear(p) === Number(y.year)));
}

/** SortEvents' ListSort: by OrbitSummaryItem.SequenceNo, ascending when SortEventsASC. */
export function sortEvents(eventsSummary: readonly EventsSummaryItem[], ascending: boolean): EventsSummaryItem[] {
  return [...eventsSummary].sort((a, b) => (ascending ? a.sequenceNo - b.sequenceNo : b.sequenceNo - a.sequenceNo));
}

/** TextToInteger: the number of a text, 0 when it is not one. */
export function textToInteger(text: string): number {
  const n = Number.parseInt(text.trim(), 10);
  return Number.isNaN(n) || !/^[-+]?\d+$/.test(text.trim()) ? 0 : n;
}
