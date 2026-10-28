import { fetchEventsByMemberId, type Event_Screen, type Milestone_Screen, type YearItem } from '@/api/event';
import { fetchOrbitHouseholdMembers, type OrbitHouseholdMember } from '@/api/household';
import { getPopupMeasurements, onApplicationEvent_Orbit, scrollContentToTop } from '@/pages/OrbitLanding/actions';
import { OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';
import { useFlowState } from '@/platform/navigation';
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
      and CurrentMemberId from the cached user information. A view that the view cache restores with the events
      answer does nothing (P-BACK); restored without it, OnReady runs again (F40).
    - A member click refreshes the events of that member. The Filters and Sort popups filter and sort the loaded
      answer again, without a server call.
    - Flow scope (item 8): Get_HouseholdMembers and Get_EventsByMemberId are data actions (R1, `flow.fetch`): after the
      unmount their answers and failures are dropped. So OnAfterFetch_Get_HouseholdMembers does not start
      Get_EventsByMemberId (ScreenBlock_OrbitLanding.js:1653, :1674), the `.then` of OnReady (GetPopupMeasurements,
      CurrentMemberId, :1729-1735) and the sort and scroll do not run, and a member refresh that answers after the
      unmount sends no SwitchMember audit event (:1139, :1153). The block events go through `flow.events` (R3).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding */
export function useOrbitLanding(events: OrbitLandingEvents): OrbitLandingFlows {
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_OrbitLanding',
    reducer: orbitLandingReducer,
    initial: INITIAL_ORBIT_LANDING_STATE,
    parameters: null,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_isAlive, restored) => {
      /* A view restored with the Get_EventsByMemberId answer does nothing. A view left before that answer comes back
         with its saved variables and runs OnReady again. */
      // restored without data: call again (F40; OutSystems keeps the skeleton)
      if (restored && latest.current.isEventsDataFetched) return Promise.resolve();
      return onReady();
    },
  });

  /** SetAndSortEvents, then ScrollContentToTop after a sort. */
  const setAndSort = (isSortASC: boolean, isForceSort: boolean) => {
    const sorted = setAndSortEvents(latest.current, isSortASC, isForceSort);
    if (!sorted) return;
    dispatch(sorted);
    scrollContentToTop();
  };

  /** Refresh_GetEventsByMemberId: ResetFiltersAndSort, Get_EventsByMemberId, then OnAfterFetch_Get_EventsByMemberId
      (FilterEvents, SetAndSortEvents(True, False), YearsSelection and IsFetchingData False). */
  const refreshGetEventsByMemberId = async () => {
    dispatch(RESET_FILTERS_AND_SORT);
    const out = await flow.fetch(fetchEventsByMemberId(callInputsOf(latest.current))); // R1
    dispatch(eventsFetched(latest.current, out.events));
    setAndSort(true, false);
    dispatch({ yearsSelection: out.yearFilter, isFetchingData: false });
  };

  /** Refresh_GetHouseholdMembers and OnAfterFetch_Get_HouseholdMembers. */
  const refreshGetHouseholdMembers = async () => {
    dispatch({ isFetchingData: true });
    const members = await flow.fetch(fetchOrbitHouseholdMembers(callInputsOf(latest.current))); // R1
    const selected = selectFirstMember(members);
    if (!selected) {
      dispatch({ isFetchingData: false });
      return;
    }
    dispatch(selected);
    await refreshGetEventsByMemberId();
  };

  /** OnReady of a new visit: Refresh_GetHouseholdMembers, then GetPopupMeasurements and CurrentMemberId =
      TextToInteger(the cached user information's MemberId). useFlowState sends a rejection to the flow handler. */
  const onReady = async () => {
    await refreshGetHouseholdMembers();
    dispatch({ popupMeasurements: getPopupMeasurements() });
    dispatch({ currentMemberId: currentMemberIdOf(appManager_GetCachedUserInfo().MemberId) });
  };

  /** OnHandle_ClickedHouseholdMember: the list with the new selection; another member refreshes the events, then
      OnApplicationEvent_SwitchMember. */
  const clickedHouseholdMember = async (memberList: OrbitHouseholdMember[], memberId: string) => {
    dispatch({ householdMembersList: memberList });
    if (memberId === latest.current.selectedMemberId) return;
    dispatch({ selectedMemberId: memberId, isFetchingData: true });
    await refreshGetEventsByMemberId();
    const selected = memberList.find((p) => p.isSelected);
    if (selected) onApplicationEvent_Orbit('SwitchMember', { MemberId: selected.memberId });
  };

  /** OnToggle_FilterPopup / OnToggle_SortPopup: only with data and not while fetching. */
  const toggleFilterPopup = () => {
    if (canTogglePopup(latest.current)) dispatch({ popup_FiltersOpened: !latest.current.popup_FiltersOpened });
  };
  const toggleSortPopup = () => {
    if (canTogglePopup(latest.current)) dispatch({ popup_SortByOpened: !latest.current.popup_SortByOpened });
  };

  return {
    state,
    onMyCalendarClicked: () => {
      flow.events.onNavigateToMyCalendarOrbit(latest.current.selectedMemberId);
    },
    onClickedHouseholdMember: (memberList, memberId) => {
      flow.run(() => clickedHouseholdMember(memberList, memberId));
    },
    onViewPassportDetails: () => {
      // Nothing while fetching or without the signed-in member (Q3).
      if (!canViewPassportDetails(latest.current)) return;
      flow.events.onNavigateToPassportScan(latest.current.selectedMemberId, latest.current.currentMemberId);
    },
    onToggleFilterPopup: toggleFilterPopup,
    onToggleSortPopup: toggleSortPopup,
    onApplyFilters: (selectedFilter, selectedYears) => {
      // Close the popup, keep the choice, FilterEvents, SetAndSortEvents(Upcoming, True), then the audit event.
      toggleFilterPopup();
      dispatch(filtersApplied(latest.current, selectedFilter, selectedYears));
      setAndSort(latest.current.eventFilter === OrbitLandingFilter.UpcomingEvents, true);
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
      flow.events.onNavigateToEventDetail(
        eventSummary.EventId ?? NULL_ID,
        eventSummary.Title ?? '',
        latest.current.selectedMemberId,
      );
      onApplicationEvent_Orbit('ClickEvent', { EventId: eventSummary.EventId ?? NULL_ID });
    },
    onMilestoneCardClicked: (milestoneSummary) => {
      const type = milestoneSummary.OrbitMilestoneType ?? {};
      flow.events.onNavigateToTransportDetail(
        milestoneSummary.MilestoneId ?? '',
        type.Id ?? '',
        milestoneSummary.Title ?? '',
        latest.current.selectedMemberId,
        type.TransportHeaderClass ?? '',
      );
      onApplicationEvent_Orbit('ClickMilestone', { MilestoneId: milestoneSummary.MilestoneId ?? '' });
    },
  };
}
