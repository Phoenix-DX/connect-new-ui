// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding
import { useEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { Card_Event } from '../../../shared/Connect2_OrbitMobile_MUI/Card_Event';
import { Card_Milestone } from '../../../shared/Connect2_OrbitMobile_MUI/Card_Milestone';
import { NoInformation_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { OrbitSkeletonLoading } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { Event_Screen, Milestone_Screen } from '../../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getEventsByMemberId, getHouseholdMembers } from '../api';
import type { EventsSummaryItem, HouseholdMember, OrbitLandingVariablesWire, YearItem } from '../types';
import {
  filterEvents,
  getPopupMeasurements,
  onApplicationEvent_Orbit,
  scrollContentToTop,
  sortEvents,
  textToInteger,
  type PopupMeasurements,
} from './actions';
import { OrbitLandingPopup } from './OrbitLandingPopup';
import { Popup_OrbitLanding_Filters } from './Popup_OrbitLanding_Filters';
import { Popup_OrbitLanding_Sort } from './Popup_OrbitLanding_Sort';
import { Household_Members_Selection } from './Household_Members_Selection';
import { MenuAction_Menu, OrbitLandingFilter } from './staticEntities';

/** Long Integer null identifier (Long Integers stay text). */
const NULL_ID = '0';

/** Block variables (SB model :46-87) and the fetch state of Get_EventsByMemberId the view reads. */
interface Model {
  householdMembersList: HouseholdMember[];
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

const INITIAL_MODEL: Model = {
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

/** The block variables both data actions send (screenData.variables, see OrbitLandingVariablesWire). */
const variablesOf = (m: Model): OrbitLandingVariablesWire => ({
  SelectedMemberId: m.selectedMemberId,
  IsFetchingData: m.isFetchingData,
  EventFilter: m.eventFilter,
  SortEventsASC: m.sortEventsASC,
  Popup_SortByOpened: m.popup_SortByOpened,
  Popup_FiltersOpened: m.popup_FiltersOpened,
  CurrentMemberId: m.currentMemberId,
});

const NO_EVENT_MESSAGE =
  'You currently have not been assigned to an event. Check with your locality invite coordinator if you have any questions.';

export interface ScreenBlock_OrbitLandingProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Event NavigateTo_EventDetail(EventId, EventName, MemberId). */
  onNavigateToEventDetail: (eventId: string, eventName: string, memberId: string) => void;
  /** Event NavigateTo_PassportScan(TargetId, LoginMemberId). */
  onNavigateToPassportScan: (targetId: string, loginMemberId: string) => void;
  /** Event NavigateTo_TransportDetail(MilestoneId, OrbitMilestoneTypeId, MilestoneName, MemberId, HeaderClass). */
  onNavigateToTransportDetail: (
    milestoneId: string,
    orbitMilestoneTypeId: string,
    milestoneName: string,
    memberId: string,
    headerClass: string,
  ) => void;
  /** Event NavigateTo_MyCalendarOrbit(MemberId). */
  onNavigateToMyCalendarOrbit: (memberId: string) => void;
}

/** Orbit landing (SB = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding
    .mvc.js; view :195-921, controller :1007-2060). Layout_Orbit with the back MenuIcon, the Orbit flag title, the My
    calendar icon (HeaderRight, only for the signed-in member, :271-303), the household bar, View Passport details and
    the Upcoming Events / Sort By toggles (HeaderContent, :304-523), then the events: skeleton while fetching, the card
    list (Card_Milestone for a milestone row, else Card_Event), or NoInformation_Orbit (Content, :524-711), and the two
    popup roots (:712-901).
    Both data actions are on demand: OnReady (:1703-1769) → Refresh_GetHouseholdMembers → OnAfterFetch selects the
    first member → Refresh_GetEventsByMemberId → OnAfterFetch_Get_EventsByMemberId (FilterEvents, SetAndSortEvents
    (True, False): SortEventsASC is True after ResetFiltersAndSort, so it returns without sorting, :1434-1493), then
    CurrentMemberId from the cached user info. A view restored from the cache does nothing (P-BACK).
    The toggles open the Filters / Sort popups (Q2, captured popup-filters / popup-sort), whose ApplyFilters /
    ApplySort filter and sort the loaded answer again without a server call. */
export function ScreenBlock_OrbitLanding({
  id,
  bottomBar,
  onNavigateToEventDetail,
  onNavigateToPassportScan,
  onNavigateToTransportDetail,
  onNavigateToMyCalendarOrbit,
}: ScreenBlock_OrbitLandingProps) {
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** Refresh_GetEventsByMemberId (:1007-1040): ResetFiltersAndSort (:1261-1304), Get_EventsByMemberId, then
      OnAfterFetch_Get_EventsByMemberId (:1200-1235). */
  const refreshGetEventsByMemberId = async () => {
    set({ sortEventsASC: true, eventFilter: OrbitLandingFilter.UpcomingEvents, yearsSelection: [] });
    const out = await getEventsByMemberId(variablesOf(m()));
    set({ isEventsDataFetched: true, eventsResponse: out.events });
    set({ eventsSummary: filterEvents(out.events, m().eventFilter, m().yearsSelection, m().eventsSummary) });
    setAndSortEvents(true, false);
    set({ yearsSelection: out.yearFilter, isFetchingData: false });
  };

  /** SetAndSortEvents (:1434-1493): nothing when the order is unchanged and not forced; else SortEventsASC = IsSortASC
      and SortEvents (:1573-1602: ListSort by SequenceNo, ScrollContentToTop). */
  const setAndSortEvents = (isSortASC: boolean, isForceSort: boolean) => {
    if (isSortASC === m().sortEventsASC && !isForceSort) return;
    set({ sortEventsASC: isSortASC });
    set({ eventsSummary: sortEvents(m().eventsSummary, m().sortEventsASC) });
    scrollContentToTop();
  };

  /** OnHandle_ApplyFilters (:1494-1572): close the popup, keep the choice, FilterEvents, SetAndSortEvents(Upcoming,
      True), then OnApplicationEvent_ApplyFilters with the selected years. */
  const onHandleApplyFilters = (selectedFilter: number, selectedYears: YearItem[]) => {
    onToggleFilterPopup();
    set({ eventFilter: selectedFilter, yearsSelection: selectedYears });
    set({ eventsSummary: filterEvents(m().eventsResponse, m().eventFilter, m().yearsSelection, m().eventsSummary) });
    setAndSortEvents(m().eventFilter === OrbitLandingFilter.UpcomingEvents, true);
    onApplicationEvent_Orbit('ApplyFilters', {
      Filter: String(selectedFilter),
      Years: selectedYears
        .filter((y) => y.isSelected)
        .map((y) => y.year)
        .join(','),
    });
  };

  /** OnHandle_ApplySort (:1603-1650): close the popup, SetAndSortEvents(In_IsSortASC, False), then
      OnApplicationEvent_ApplySortBy. */
  const onHandleApplySort = (isSortASC: boolean) => {
    onToggleSortPopup();
    setAndSortEvents(isSortASC, false);
    onApplicationEvent_Orbit('ApplySortBy', { IsSortASC: String(isSortASC) });
  };

  /** Refresh_GetHouseholdMembers (:1895-1929) and OnAfterFetch_Get_HouseholdMembers (:1651-1702). */
  const refreshGetHouseholdMembers = async () => {
    set({ isFetchingData: true });
    const members = await getHouseholdMembers(variablesOf(m()));
    const [first] = members;
    if (!first) {
      set({ isFetchingData: false });
      return;
    }
    set({
      selectedMemberId: first.memberId,
      householdMembersList: members.map((p, i) => (i === 0 ? { ...p, isSelected: true } : p)),
    });
    await refreshGetEventsByMemberId();
  };

  /* OnReady (:1703-1769): WasCurrentViewRestoredFromCache → nothing; else Refresh_GetHouseholdMembers, then
     GetPopupMeasurements and CurrentMemberId = TextToInteger(cached user info MemberId). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    void (async () => {
      try {
        await refreshGetHouseholdMembers();
        set({ popupMeasurements: getPopupMeasurements() });
        set({ currentMemberId: String(textToInteger(appManager_GetCachedUserInfo().MemberId)) });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnHandle_ClickedHouseholdMember (:1103-1199). */
  const onHandleClickedHouseholdMember = async (memberList: HouseholdMember[], memberId: string) => {
    set({ householdMembersList: memberList });
    if (memberId === m().selectedMemberId) return;
    set({ selectedMemberId: memberId, isFetchingData: true });
    await refreshGetEventsByMemberId();
    const selected = memberList.find((p) => p.isSelected);
    if (selected) onApplicationEvent_Orbit('SwitchMember', { MemberId: selected.memberId });
  };

  /** OnToggle_FilterPopup / OnToggle_SortPopup (:1041-1102): only with data and not while fetching. */
  const hasData = () => !m().isFetchingData && m().householdMembersList.length > 0;
  const onToggleFilterPopup = () => {
    if (hasData()) set({ popup_FiltersOpened: !m().popup_FiltersOpened });
  };
  const onToggleSortPopup = () => {
    if (hasData()) set({ popup_SortByOpened: !m().popup_SortByOpened });
  };

  /** OnHandle_ViewPassportDetails (:1985-2020): nothing while fetching or without the signed-in member (Q3). */
  const onHandleViewPassportDetails = () => {
    if (m().isFetchingData || m().currentMemberId === NULL_ID) return;
    onNavigateToPassportScan(m().selectedMemberId, m().currentMemberId);
  };

  /** OnHandle_EventCardClicked (:1930-1984): NavigateTo_EventDetail, then OnApplicationEvent_ClickEvent. */
  const onHandleEventCardClicked = (eventSummary: Event_Screen) => {
    onNavigateToEventDetail(eventSummary.EventId ?? NULL_ID, eventSummary.Title ?? '', m().selectedMemberId);
    onApplicationEvent_Orbit('ClickEvent', { EventId: eventSummary.EventId ?? NULL_ID });
  };

  /** OnHandle_MilestoneCardClicked (:1305-1362): NavigateTo_TransportDetail, then OnApplicationEvent_ClickMilestone. */
  const onHandleMilestoneCardClicked = (milestoneSummary: Milestone_Screen) => {
    const type = milestoneSummary.OrbitMilestoneType ?? {};
    onNavigateToTransportDetail(
      milestoneSummary.MilestoneId ?? '',
      type.Id ?? '',
      milestoneSummary.Title ?? '',
      m().selectedMemberId,
      type.TransportHeaderClass ?? '',
    );
    onApplicationEvent_Orbit('ClickMilestone', { MilestoneId: milestoneSummary.MilestoneId ?? '' });
  };

  const s = state;
  const prefix = id.replace('$', '');
  const filterLabel = s.eventFilter === OrbitLandingFilter.PastEvents ? 'Past Events' : 'Upcoming Events';
  const caret = (open: boolean) => <i className={`icon fa fa-caret-${open ? 'up' : 'down'} fa-1x`} data-icon="" />;

  /* Content (:524-711): If not fetching → (If fetched and not fetching → list or NoInformation_Orbit), else the
     OrbitLanding skeleton. */
  const events = s.isFetchingData ? (
    <Skeleton_Loading id={`${prefix}-$b7`} inSkeletonLoadingId={OrbitSkeletonLoading.OrbitLanding} />
  ) : !s.isEventsDataFetched ? null : s.eventsSummary.length > 0 ? (
    <OSList
      className="list list-group orbit-card-list"
      animateItems
      disableVirtualization
      source={s.eventsSummary}
      keyOf={(p, i) => `${p.isMilestone ? (p.milestone.MilestoneId ?? '') : (p.event.EventId ?? '')}-${String(i)}`}
    >
      {(p, i) => (
        <div className="orbit-card-list-cont" data-container="">
          {p.isMilestone ? (
            <Card_Milestone
              id={`${prefix}-l1-60_${String(i)}-$b4`}
              inMilestoneSummary={p.milestone}
              isSetUpMeals={false}
              onClickedMilestone={onHandleMilestoneCardClicked}
            />
          ) : (
            <Card_Event
              id={`${prefix}-l1-60_${String(i)}-$b5`}
              inEventSummary={p.event}
              onClickedEvent={onHandleEventCardClicked}
            />
          )}
        </div>
      )}
    </OSList>
  ) : (
    <NoInformation_Orbit id={`${prefix}-$b6`} message={NO_EVENT_MESSAGE} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_OrbitLanding" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MenuAction_Menu} />}
        title={<i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />}
        headerRight={
          s.selectedMemberId !== NULL_ID && s.selectedMemberId === s.currentMemberId ? (
            <i
              className="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x"
              data-icon=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onNavigateToMyCalendarOrbit(m().selectedMemberId);
              }}
            />
          ) : null
        }
        headerContent={
          <>
            <Household_Members_Selection
              id={`${prefix}-$b3`}
              inHouseholdMembersList={s.householdMembersList}
              onClickedHouseholdMember={(memberList, memberId) => {
                onHandleClickedHouseholdMember(memberList, memberId).catch(raiseToFlowHandler);
              }}
            />
            <div
              className="orbit-landing-passport-cont"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={onHandleViewPassportDetails}
            >
              <i className="icon orbit-icon-passport fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-m" data-expression="">
                View Passport details
              </span>
              <i className="icon orbit-icon-arrow margin-left-m fa fa-chevron-right fa-1x" data-icon="" />
            </div>
            <div className="orbit-landing-filters-cont" data-container="">
              <div
                className="orbit-landing-filters justify-content-flex-start"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={onToggleFilterPopup}
              >
                <span className="bold color-orbit-primary-7 text-no-wrap margin-right-s" data-expression="">
                  {filterLabel}
                </span>
                {caret(s.popup_FiltersOpened)}
              </div>
              <div
                className="orbit-landing-filters justify-content-flex-end"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={onToggleSortPopup}
              >
                <span className="bold color-orbit-primary-7 text-no-wrap margin-right-s">Sort By</span>
                {caret(s.popup_SortByOpened)}
              </div>
            </div>
          </>
        }
        content={
          <>
            {events}
            <div data-container="" id={`${prefix}-RootPlaceholder_Filters`}>
              <div
                className="backwards-compatibility orbit-landing-filters__popup-backdrop"
                data-container=""
                id={`${prefix}-Root_Filters`}
              >
                <OrbitLandingPopup
                  id={`${prefix}-Popup_Filters`}
                  showPopup={s.popup_FiltersOpened}
                  style={`top: ${String(s.popupMeasurements.top)}px;`}
                  rootClassName="backwards-compatibility orbit-landing-filters__popup-backdrop"
                >
                  <Popup_OrbitLanding_Filters
                    id={`${prefix}-$b8`}
                    inOrbitLandingFilter={s.eventFilter}
                    inYears={s.yearsSelection}
                    popupTopPlusBottom={s.popupMeasurements.bottom + s.popupMeasurements.top}
                    onApplyFilters={onHandleApplyFilters}
                    onClosePopup={onToggleFilterPopup}
                  />
                </OrbitLandingPopup>
              </div>
            </div>
            <div data-container="" id={`${prefix}-RootPlaceholder_Sort`}>
              <div
                className="backwards-compatibility orbit-landing-filters__popup-backdrop"
                data-container=""
                id={`${prefix}-Root_Sort`}
              >
                <OrbitLandingPopup
                  id={`${prefix}-Popup_Sort`}
                  showPopup={s.popup_SortByOpened}
                  style={`top: ${String(s.popupMeasurements.top)}px; left: ${String(s.popupMeasurements.left)}px;`}
                  rootClassName="backwards-compatibility orbit-landing-filters__popup-backdrop"
                >
                  <Popup_OrbitLanding_Sort
                    id={`${prefix}-$b9`}
                    inIsSortASC={s.sortEventsASC}
                    onApplySort={onHandleApplySort}
                    onClosePopup={onToggleSortPopup}
                  />
                </OrbitLandingPopup>
              </div>
            </div>
          </>
        }
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
