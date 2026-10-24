import { useRef } from 'react';
import { fetchEventsByMemberId, type Event_Screen, type Milestone_Screen, type YearItem } from '@/api/event';
import { fetchOrbitHouseholdMembers, type OrbitHouseholdMember } from '@/api/household';
import { getPopupMeasurements, onApplicationEvent_Orbit, scrollContentToTop } from '@/pages/OrbitLanding/actions';
import { OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  callInputsOf,
  canTogglePopup,
  canViewPassportDetails,
  currentMemberIdOf,
  eventsFetched,
  filtersApplied,
  INITIAL_ORBIT_LANDING_STATE,
  NULL_ID,
  orbitLandingReducer,
  RESET_FILTERS_AND_SORT,
  selectFirstMember,
  setAndSortEvents,
  type OrbitLandingPatch,
  type OrbitLandingState,
} from './orbitLandingState';

/** The events of ScreenBlock_OrbitLanding that the screen handles: the navigations. */
export interface OrbitLandingEvents {
  /** NavigateTo_EventDetail(EventId, EventName, MemberId). */
  onNavigateToEventDetail: (eventId: string, eventName: string, memberId: string) => void;
  /** NavigateTo_PassportScan(TargetId, LoginMemberId). */
  onNavigateToPassportScan: (targetId: string, loginMemberId: string) => void;
  /** NavigateTo_TransportDetail(MilestoneId, OrbitMilestoneTypeId, MilestoneName, MemberId, HeaderClass). */
  onNavigateToTransportDetail: (
    milestoneId: string,
    orbitMilestoneTypeId: string,
    milestoneName: string,
    memberId: string,
    headerClass: string,
  ) => void;
  /** NavigateTo_MyCalendarOrbit(MemberId). */
  onNavigateToMyCalendarOrbit: (memberId: string) => void;
}

/** What the page renders and the handlers of the events of the widgets and blocks. */
export interface OrbitLandingFlows {
  /** The block variables (rendered). */
  state: OrbitLandingState;
  /** The My calendar icon of HeaderRight. */
  onMyCalendarClicked: () => void;
  /** OnHandle_ClickedHouseholdMember: the ClickedHouseholdMember event of Household_Members_Selection. */
  onClickedHouseholdMember: (memberList: OrbitHouseholdMember[], memberId: string) => void;
  /** OnHandle_ViewPassportDetails: "View Passport details". */
  onViewPassportDetails: () => void;
  /** OnToggle_FilterPopup: the Upcoming / Past Events toggle and the ClosePopup event of the Filters popup. */
  onToggleFilterPopup: () => void;
  /** OnToggle_SortPopup: the Sort By toggle and the ClosePopup event of the Sort popup. */
  onToggleSortPopup: () => void;
  /** OnHandle_ApplyFilters: the ApplyFilters event of the Filters popup. */
  onApplyFilters: (selectedFilter: number, selectedYears: YearItem[]) => void;
  /** OnHandle_ApplySort: the ApplySort event of the Sort popup. */
  onApplySort: (isSortASC: boolean) => void;
  /** OnHandle_EventCardClicked: the ClickedEvent event of Card_Event. */
  onEventCardClicked: (eventSummary: Event_Screen) => void;
  /** OnHandle_MilestoneCardClicked: the ClickedMilestone event of Card_Milestone. */
  onMilestoneCardClicked: (milestoneSummary: Milestone_Screen) => void;
}

/** The flows of ScreenBlock_OrbitLanding (the block controller).
    - Both data actions are on demand. OnReady of a new visit: Refresh_GetHouseholdMembers → OnAfterFetch selects the
      first member → Refresh_GetEventsByMemberId → OnAfterFetch_Get_EventsByMemberId (FilterEvents, SetAndSortEvents
      (True, False): SortEventsASC is True after ResetFiltersAndSort, so it does not sort), then GetPopupMeasurements
      and CurrentMemberId from the cached user information. A view that the view cache restores does nothing (P-BACK).
    - A member click refreshes the events of that member. The Filters and Sort popups filter and sort the loaded
      answer again, without a server call.
    - Decision W23: after the unmount, a started flow writes no state. It goes on with its own copy of the variables,
      so its calls send the same variables, and its server calls, audit events and errors (to the flow handler) still
      happen, once.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding */
export function useOrbitLanding(events: OrbitLandingEvents): OrbitLandingFlows {
  /* OnReady runs once per block. StrictMode (dev) runs the mount effect again on the same block: the second call only
     replaces the liveness check, so the first flow writes the state while the block is there. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  /** The variables of the flows that go on after the unmount (W23); null while the block is there. */
  const afterUnmount = useRef<OrbitLandingState | null>(null);
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_OrbitLanding',
    reducer: orbitLandingReducer,
    initial: INITIAL_ORBIT_LANDING_STATE,
    parameters: null,
    events,
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      /* A restored view does nothing, unless the view was left before its first assignment was rendered: it then
         comes back with the initial variables and starts again. */
      if (restored && latest.current !== INITIAL_ORBIT_LANDING_STATE) return Promise.resolve();
      return onReady();
    },
  });

  /** The variables as the flows read them: the newest state, or the flows' own copy after the unmount. */
  const m = (): OrbitLandingState => afterUnmount.current ?? latest.current;
  /** An assignment of a flow: a state write while the block is there; after the unmount, only the flows' copy. */
  const set = (patch: OrbitLandingPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
    else afterUnmount.current = { ...m(), ...patch };
  };

  /** SetAndSortEvents, then ScrollContentToTop after a sort. */
  const setAndSort = (isSortASC: boolean, isForceSort: boolean) => {
    const sorted = setAndSortEvents(m(), isSortASC, isForceSort);
    if (!sorted) return;
    set(sorted);
    scrollContentToTop();
  };

  /** Refresh_GetEventsByMemberId: ResetFiltersAndSort, Get_EventsByMemberId, then OnAfterFetch_Get_EventsByMemberId
      (FilterEvents, SetAndSortEvents(True, False), YearsSelection and IsFetchingData False). */
  const refreshGetEventsByMemberId = async () => {
    set(RESET_FILTERS_AND_SORT);
    const out = await fetchEventsByMemberId(callInputsOf(m()));
    set(eventsFetched(m(), out.events));
    setAndSort(true, false);
    set({ yearsSelection: out.yearFilter, isFetchingData: false });
  };

  /** Refresh_GetHouseholdMembers and OnAfterFetch_Get_HouseholdMembers. */
  const refreshGetHouseholdMembers = async () => {
    set({ isFetchingData: true });
    const members = await fetchOrbitHouseholdMembers(callInputsOf(m()));
    const selected = selectFirstMember(members);
    if (!selected) {
      set({ isFetchingData: false });
      return;
    }
    set(selected);
    await refreshGetEventsByMemberId();
  };

  /** OnReady of a new visit: Refresh_GetHouseholdMembers, then GetPopupMeasurements and CurrentMemberId =
      TextToInteger(the cached user information's MemberId). useFlowState sends a rejection to the flow handler. */
  const onReady = async () => {
    await refreshGetHouseholdMembers();
    set({ popupMeasurements: getPopupMeasurements() });
    set({ currentMemberId: currentMemberIdOf(appManager_GetCachedUserInfo().MemberId) });
  };

  /** OnHandle_ClickedHouseholdMember: the list with the new selection; another member refreshes the events, then
      OnApplicationEvent_SwitchMember. */
  const clickedHouseholdMember = async (memberList: OrbitHouseholdMember[], memberId: string) => {
    set({ householdMembersList: memberList });
    if (memberId === m().selectedMemberId) return;
    set({ selectedMemberId: memberId, isFetchingData: true });
    await refreshGetEventsByMemberId();
    const selected = memberList.find((p) => p.isSelected);
    if (selected) onApplicationEvent_Orbit('SwitchMember', { MemberId: selected.memberId });
  };

  /** OnToggle_FilterPopup / OnToggle_SortPopup: only with data and not while fetching. */
  const toggleFilterPopup = () => {
    if (canTogglePopup(m())) set({ popup_FiltersOpened: !m().popup_FiltersOpened });
  };
  const toggleSortPopup = () => {
    if (canTogglePopup(m())) set({ popup_SortByOpened: !m().popup_SortByOpened });
  };

  return {
    state,
    onMyCalendarClicked: () => {
      eventsRef.current.onNavigateToMyCalendarOrbit(m().selectedMemberId);
    },
    onClickedHouseholdMember: (memberList, memberId) => {
      clickedHouseholdMember(memberList, memberId).catch(raiseToFlowHandler);
    },
    onViewPassportDetails: () => {
      // Nothing while fetching or without the signed-in member (Q3).
      if (!canViewPassportDetails(m())) return;
      eventsRef.current.onNavigateToPassportScan(m().selectedMemberId, m().currentMemberId);
    },
    onToggleFilterPopup: toggleFilterPopup,
    onToggleSortPopup: toggleSortPopup,
    onApplyFilters: (selectedFilter, selectedYears) => {
      // Close the popup, keep the choice, FilterEvents, SetAndSortEvents(Upcoming, True), then the audit event.
      toggleFilterPopup();
      set(filtersApplied(m(), selectedFilter, selectedYears));
      setAndSort(m().eventFilter === OrbitLandingFilter.UpcomingEvents, true);
      onApplicationEvent_Orbit('ApplyFilters', {
        Filter: String(selectedFilter),
        Years: selectedYears
          .filter((y) => y.isSelected)
          .map((y) => y.year)
          .join(','),
      });
    },
    onApplySort: (isSortASC) => {
      // Close the popup, SetAndSortEvents(In_IsSortASC, False), then the audit event.
      toggleSortPopup();
      setAndSort(isSortASC, false);
      onApplicationEvent_Orbit('ApplySortBy', { IsSortASC: String(isSortASC) });
    },
    onEventCardClicked: (eventSummary) => {
      eventsRef.current.onNavigateToEventDetail(
        eventSummary.EventId ?? NULL_ID,
        eventSummary.Title ?? '',
        m().selectedMemberId,
      );
      onApplicationEvent_Orbit('ClickEvent', { EventId: eventSummary.EventId ?? NULL_ID });
    },
    onMilestoneCardClicked: (milestoneSummary) => {
      const type = milestoneSummary.OrbitMilestoneType ?? {};
      eventsRef.current.onNavigateToTransportDetail(
        milestoneSummary.MilestoneId ?? '',
        type.Id ?? '',
        milestoneSummary.Title ?? '',
        m().selectedMemberId,
        type.TransportHeaderClass ?? '',
      );
      onApplicationEvent_Orbit('ClickMilestone', { MilestoneId: milestoneSummary.MilestoneId ?? '' });
    },
  };
}
