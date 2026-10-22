import { useFlagOn } from '@/platform/flags/flags';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_OrbitLanding } from './components/ScreenBlock_OrbitLanding';
import { Type_MyCalendarEventSource_Orbit } from './components/staticEntities';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.OrbitLanding (analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow
    .OrbitLanding.mvc.js: view :115-243, controller :270-586). No inputs. ScreenBlock_OrbitLanding with BottomBarMenu
    (default inputs) in its BottomBar and empty Menu / CommonUI_Elements, then CommonUI_InsideLayout. Its NavigateTo_*
    events navigate with the original parameter names; EventDetail, TransportDetail and PassportScan first check
    GetHasOrbitAccess (flag mobileOrbitAccess, default-only on) and otherwise go to HomeFeed (EventDetail and
    TransportDetail with the no-access message after the transition). */
export default function OrbitLanding() {
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');

  /** The no-access branch of OnHandle_NavigateToEventDetail / _TransportDetail (:326-350, :481-505). */
  const noAccess = (withMessage: boolean) => {
    if (withMessage) feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
    navigate('/UBTConnect/HomeFeed', {});
  };

  return (
    <>
      <ScreenBlock_OrbitLanding
        id="$b1"
        bottomBar={<BottomBarMenu id="$b2" />}
        onNavigateToEventDetail={(eventId, eventName, memberId) => {
          // OnHandle_NavigateToEventDetail (:476-510)
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
        }}
        onNavigateToPassportScan={(targetId, loginMemberId) => {
          // OnHandle_NavigateToPassportScan (:413-440)
          if (!hasOrbitAccess) {
            noAccess(false);
            return;
          }
          navigate('/UBTConnect/PassportScan', { LoginMemberId: loginMemberId, TargetId: targetId });
        }}
        onNavigateToTransportDetail={(milestoneId, orbitMilestoneTypeId, milestoneName, memberId, headerClass) => {
          // OnHandle_NavigateToTransportDetail (:321-355)
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
        }}
        onNavigateToMyCalendarOrbit={() => {
          // OnHandle_NavigateToMyCalendarOrbit (:277-295): MemberId is not passed on
          navigate('/UBTConnect/MyEntertaining', { MyCalendarEventSourceId: Type_MyCalendarEventSource_Orbit });
        }}
      />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
