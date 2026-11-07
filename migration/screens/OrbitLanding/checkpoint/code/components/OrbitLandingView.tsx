import type { ReactNode } from 'react';
import type { Event_Screen, EventsSummaryItem, Milestone_Screen, YearItem } from '@/api/event';
import type { OrbitHouseholdMember } from '@/api/household';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { MilestoneCard } from '@/components/orbit/MilestoneCard';
import { OrbitEventCard } from '@/components/orbit/OrbitEventCard';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import type { PopupMeasurements } from '@/pages/OrbitLanding/hooks/orbitLandingState';
import { MenuAction_Menu, OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { Household_Members_Selection } from './Household_Members_Selection';
import { OrbitLandingPopup } from './OrbitLandingPopup';
import { Popup_OrbitLanding_Filters } from './Popup_OrbitLanding_Filters';
import { Popup_OrbitLanding_Sort } from './Popup_OrbitLanding_Sort';

const NO_EVENT_MESSAGE =
  'You currently have not been assigned to an event. Check with your locality invite coordinator if you have any questions.';

export interface OrbitLandingViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** HouseholdMembersList. */
  householdMembers: OrbitHouseholdMember[];
  /** HeaderRight: the My calendar icon (the selected member is the signed-in member). */
  showMyCalendar: boolean;
  /** IsFetchingData: the skeleton instead of the events. */
  isFetchingData: boolean;
  /** Get_EventsByMemberId.IsDataFetched. */
  isEventsDataFetched: boolean;
  /** EventsSummary: the cards. */
  eventsSummary: EventsSummaryItem[];
  /** EventFilter (OrbitLandingFilter identifier): the label of the filter toggle and the Filters popup choice. */
  eventFilter: number;
  /** SortEventsASC: the choice of the Sort popup. */
  sortEventsASC: boolean;
  /** YearsSelection: the years of the Filters popup. */
  yearsSelection: YearItem[];
  /** Popup_FiltersOpened. */
  isFiltersPopupOpen: boolean;
  /** Popup_SortByOpened. */
  isSortPopupOpen: boolean;
  /** PopupMeasurements: the position of the popups and the max-height of the filter options. */
  popupMeasurements: PopupMeasurements;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** The My calendar icon. */
  onMyCalendarClicked: () => void;
  /** ClickedHouseholdMember(MemberList, MemberId) of the member bar. */
  onClickedHouseholdMember: (memberList: OrbitHouseholdMember[], memberId: string) => void;
  /** "View Passport details". */
  onViewPassportDetails: () => void;
  /** The filter toggle and ClosePopup of the Filters popup. */
  onToggleFilterPopup: () => void;
  /** The Sort By toggle and ClosePopup of the Sort popup. */
  onToggleSortPopup: () => void;
  /** ApplyFilters(SelectedFilter, SelectedYears) of the Filters popup. */
  onApplyFilters: (selectedFilter: number, selectedYears: YearItem[]) => void;
  /** ApplySort(IsSortASC) of the Sort popup. */
  onApplySort: (isSortASC: boolean) => void;
  /** ClickedEvent of a Card_Event. */
  onEventCardClicked: (eventSummary: Event_Screen) => void;
  /** ClickedMilestone of a Card_Milestone. */
  onMilestoneCardClicked: (milestoneSummary: Milestone_Screen) => void;
}

/** The view of ScreenBlock_OrbitLanding: Layout_Orbit with the back MenuIcon, the Orbit flag title, the My calendar
    icon (HeaderRight), the household member bar, View Passport details and the Upcoming Events / Sort By toggles
    (HeaderContent), then the events: the skeleton while fetching, the card list (Card_Milestone for a milestone row,
    else Card_Event), or NoInformation_Orbit (Content), and the roots of the Filters and Sort popups (captured
    popup-filters / popup-sort). Props only; the flows are in useOrbitLanding.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding */
export function OrbitLandingView({
  id,
  householdMembers,
  showMyCalendar,
  isFetchingData,
  isEventsDataFetched,
  eventsSummary,
  eventFilter,
  sortEventsASC,
  yearsSelection,
  isFiltersPopupOpen,
  isSortPopupOpen,
  popupMeasurements,
  bottomBar,
  onMyCalendarClicked,
  onClickedHouseholdMember,
  onViewPassportDetails,
  onToggleFilterPopup,
  onToggleSortPopup,
  onApplyFilters,
  onApplySort,
  onEventCardClicked,
  onMilestoneCardClicked,
}: OrbitLandingViewProps) {
  const prefix = id.replace('$', '');
  const filterLabel = eventFilter === OrbitLandingFilter.PastEvents ? 'Past Events' : 'Upcoming Events';
  const caret = (open: boolean) => <i className={`icon fa fa-caret-${open ? 'up' : 'down'} fa-1x`} data-icon="" />;

  /* Content: If not fetching → (If fetched and not fetching → list or NoInformation_Orbit), else the OrbitLanding
     skeleton. */
  const events = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b7`} inSkeletonLoadingId={OrbitSkeletonLoading.OrbitLanding} />
  ) : !isEventsDataFetched ? null : eventsSummary.length > 0 ? (
    <OSList
      className="list list-group orbit-card-list"
      animateItems
      disableVirtualization
      source={eventsSummary}
      keyOf={(p, i) => `${p.isMilestone ? (p.milestone.MilestoneId ?? '') : (p.event.EventId ?? '')}-${String(i)}`}
    >
      {(p, i) => (
        <div className="orbit-card-list-cont" data-container="">
          {p.isMilestone ? (
            <MilestoneCard
              id={`${prefix}-l1-60_${String(i)}-$b4`}
              inMilestoneSummary={p.milestone}
              isSetUpMeals={false}
              onClickedMilestone={onMilestoneCardClicked}
            />
          ) : (
            <OrbitEventCard
              id={`${prefix}-l1-60_${String(i)}-$b5`}
              inEventSummary={p.event}
              onClickedEvent={onEventCardClicked}
            />
          )}
        </div>
      )}
    </OSList>
  ) : (
    <OrbitNoInformation id={`${prefix}-$b6`} message={NO_EVENT_MESSAGE} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_OrbitLanding" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction_Menu} />}
        title={<i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />}
        headerRight={
          showMyCalendar ? (
            <i
              className="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x"
              data-icon=""
              style={{ cursor: 'pointer' }}
              onClick={onMyCalendarClicked}
            />
          ) : null
        }
        headerContent={
          <>
            <Household_Members_Selection
              id={`${prefix}-$b3`}
              inHouseholdMembersList={householdMembers}
              onClickedHouseholdMember={onClickedHouseholdMember}
            />
            <div
              className="orbit-landing-passport-cont"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={onViewPassportDetails}
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
                {caret(isFiltersPopupOpen)}
              </div>
              <div
                className="orbit-landing-filters justify-content-flex-end"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={onToggleSortPopup}
              >
                <span className="bold color-orbit-primary-7 text-no-wrap margin-right-s">Sort By</span>
                {caret(isSortPopupOpen)}
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
                  showPopup={isFiltersPopupOpen}
                  style={`top: ${String(popupMeasurements.top)}px;`}
                  rootClassName="backwards-compatibility orbit-landing-filters__popup-backdrop"
                >
                  <Popup_OrbitLanding_Filters
                    id={`${prefix}-$b8`}
                    inOrbitLandingFilter={eventFilter}
                    inYears={yearsSelection}
                    popupTopPlusBottom={popupMeasurements.bottom + popupMeasurements.top}
                    onApplyFilters={onApplyFilters}
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
                  showPopup={isSortPopupOpen}
                  style={`top: ${String(popupMeasurements.top)}px; left: ${String(popupMeasurements.left)}px;`}
                  rootClassName="backwards-compatibility orbit-landing-filters__popup-backdrop"
                >
                  <Popup_OrbitLanding_Sort
                    id={`${prefix}-$b9`}
                    inIsSortASC={sortEventsASC}
                    onApplySort={onApplySort}
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
