import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { feedbackMessageAfterTransition } from '@/pages/OrbitLanding/actions';
import { showsMyCalendar } from '@/pages/OrbitLanding/hooks/orbitLandingState';
import { useOrbitLanding } from '@/pages/OrbitLanding/hooks/useOrbitLanding';
import { Type_MyCalendarEventSource_Orbit } from '@/pages/OrbitLanding/staticEntities';
import { useFlagOn } from '@/platform/flags/flags';
import { useOsNavigate } from '@/platform/navigation';
import { OrbitLandingView } from './components/OrbitLandingView';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Instance id of ScreenBlock_OrbitLanding on the screen. */
const BLOCK_ID = '$b1';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding
    The Orbit landing. No inputs. ScreenBlock_OrbitLanding (its flows in useOrbitLanding, its view OrbitLandingView)
    with BottomBarMenu (default inputs) in its BottomBar and empty Menu / CommonUI_Elements, then
    CommonUI_InsideLayout. Its NavigateTo_* events navigate with the original parameter names. EventDetail,
    TransportDetail and PassportScan first check GetHasOrbitAccess (flag mobileOrbitAccess, default-only on) and
    otherwise go to HomeFeed (EventDetail and TransportDetail with the no-access message after the transition). */
export default function OrbitLanding() {
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');

  /** The no-access branch of OnHandle_NavigateToEventDetail and OnHandle_NavigateToTransportDetail (with the
      message) and of OnHandle_NavigateToPassportScan (without it). */
  const noAccess = (withMessage: boolean) => {
    if (withMessage) feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
    navigate('/UBTConnect/HomeFeed', {});
  };

  const orbit = useOrbitLanding({
    // OnHandle_NavigateToEventDetail
    onNavigateToEventDetail: (eventId, eventName, memberId) => {
      if (!hasOrbitAccess) {
        noAccess(true);
        return;
      }
      navigate('/UBTConnect/EventDetail', {
        In_EventId: eventId,
        In_MemberId: memberId,
        In_FromNotification: false,
        In_EventName: eventName,
      });
    },
    // OnHandle_NavigateToPassportScan
    onNavigateToPassportScan: (targetId, loginMemberId) => {
      if (!hasOrbitAccess) {
        noAccess(false);
        return;
      }
      navigate('/UBTConnect/PassportScan', { LoginMemberId: loginMemberId, TargetId: targetId });
    },
    // OnHandle_NavigateToTransportDetail
    onNavigateToTransportDetail: (milestoneId, orbitMilestoneTypeId, milestoneName, memberId, headerClass) => {
      if (!hasOrbitAccess) {
        noAccess(true);
        return;
      }
      navigate('/UBTConnect/TransportDetail', {
        In_TargetMemberId: memberId,
        In_OrbitMilestoneTypeId: orbitMilestoneTypeId,
        In_MilestoneId: milestoneId,
        In_HeaderClass: headerClass,
        In_MilestoneName: milestoneName,
      });
    },
    // OnHandle_NavigateToMyCalendarOrbit: MemberId is not passed on
    onNavigateToMyCalendarOrbit: () => {
      navigate('/UBTConnect/MyEntertaining', { MyCalendarEventSourceId: Type_MyCalendarEventSource_Orbit });
    },
  });
  const { state } = orbit;

  return (
    <>
      <OrbitLandingView
        id={BLOCK_ID}
        householdMembers={state.householdMembersList}
        showMyCalendar={showsMyCalendar(state)}
        isFetchingData={state.isFetchingData}
        isEventsDataFetched={state.isEventsDataFetched}
        eventsSummary={state.eventsSummary}
        eventFilter={state.eventFilter}
        sortEventsASC={state.sortEventsASC}
        yearsSelection={state.yearsSelection}
        isFiltersPopupOpen={state.popup_FiltersOpened}
        isSortPopupOpen={state.popup_SortByOpened}
        popupMeasurements={state.popupMeasurements}
        bottomBar={<BottomBar id="$b2" />}
        onMyCalendarClicked={orbit.onMyCalendarClicked}
        onClickedHouseholdMember={orbit.onClickedHouseholdMember}
        onViewPassportDetails={orbit.onViewPassportDetails}
        onToggleFilterPopup={orbit.onToggleFilterPopup}
        onToggleSortPopup={orbit.onToggleSortPopup}
        onApplyFilters={orbit.onApplyFilters}
        onApplySort={orbit.onApplySort}
        onEventCardClicked={orbit.onEventCardClicked}
        onMilestoneCardClicked={orbit.onMilestoneCardClicked}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}
