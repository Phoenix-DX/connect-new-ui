import { useSearchParams } from 'react-router';
import { useFlagOn } from '@/platform/flags/flags';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_EventDetail } from './components/ScreenBlock_EventDetail';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** helper-host: the In_OrbitMilestoneTypeId of the Helpers navigation (UBTConnect.orbitMilestoneType.helper). */
const ORBIT_MILESTONE_TYPE_HELPER = 'helper-host';

/** Boolean input from the query string (OutSystems writes "True" / "False"). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.EventDetail (analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.EventDetail
    .mvc.js: view :157-330, controller :351-960). Inputs In_MemberId, In_EventId, In_EventName, In_FromNotification.
    ScreenBlock_EventDetail with empty Menu / CommonUI_Elements placeholders, then CommonUI_InsideLayout. Its
    NavigateTo_* events navigate with the original parameter names; every one except EventBooklet first checks
    GetHasOrbitAccess (flag mobileOrbitAccess, default-only on) and otherwise shows the no-access message after the
    transition and goes to HomeFeed. The target screens are not built yet: the router shows them as not migrated. */
export default function EventDetail() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const inMemberId = params.get('In_MemberId') ?? '0';
  const inEventId = params.get('In_EventId') ?? '0';
  const inEventName = params.get('In_EventName') ?? '';

  /** The no-access branch shared by the handlers (e.g. OnHandle_NavigateToGenerateQRCode :351-428). */
  const withOrbitAccess = (go: () => void) => {
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    go();
  };

  return (
    <>
      <ScreenBlock_EventDetail
        id="$b1"
        In_MemberId={inMemberId}
        In_EventId={inEventId}
        In_EventName={inEventName}
        In_FromNotification={osBoolean(params.get('In_FromNotification'))}
        onNavigateToGenerateQRCode={(start, end, location) => {
          // OnHandle_NavigateToGenerateQRCode (:351-428)
          withOrbitAccess(() => {
            navigate('/UBTConnect/QRCodeGenerate', {
              In_EventId: inEventId,
              In_MemberId: inMemberId,
              In_EventName: inEventName,
              In_EventStartDate: start,
              In_EventEndDate: end,
              In_EventLocation: location,
            });
          });
        }}
        onNavigateToContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (:429-495)
          withOrbitAccess(() => {
            navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
              In_MilestoneId: '',
              In_EventId: inEventId,
              In_Subject: subject,
              In_EventName: eventName,
            });
          });
        }}
        onNavigateToViewDocuments={(start, end, location) => {
          // OnHandle_NavigateToViewDocuments (:496-573)
          withOrbitAccess(() => {
            navigate('/UBTConnect/ViewDocuments', {
              In_EventEndDate: end,
              In_MemberId: inMemberId,
              In_EventName: inEventName,
              In_EventId: inEventId,
              In_EventLocation: location,
              In_EventStartDate: start,
            });
          });
        }}
        onNavigateToEventBooklet={() => {
          // OnHandle_NavigateTo_EventBooklet (:574-600): no access check
          navigate('/UBTConnect/EventBooklet', { In_EventName: inEventName, In_EventId: inEventId });
        }}
        onNavigateToMilestoneDetail={(milestoneId, eventName, milestoneName, typeId, hostId) => {
          // OnHandle_NavigateToMilestoneDetail (:601-706): EventId is the screen's In_EventId
          withOrbitAccess(() => {
            navigate('/UBTConnect/MilestoneDetail', {
              In_OrbitMilestoneTypeId: typeId,
              In_FromNotification: false,
              In_HostId: hostId,
              In_EventId: inEventId,
              In_MilestoneId: milestoneId,
              In_EventName: eventName,
              In_MilestoneName: milestoneName,
            });
          });
        }}
        onNavigateToHelpers={(eventId, hostId, preloadEventName, preloadMilestoneName) => {
          // OnHandle_NavigateToHelpers (:707-792)
          withOrbitAccess(() => {
            navigate('/UBTConnect/HelpersDetail', {
              In_EventId: eventId,
              In_EventName: preloadEventName,
              In_HostId: hostId,
              In_OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPE_HELPER,
              In_MilestoneName: preloadMilestoneName,
            });
          });
        }}
        onNavigateToTransportDetail={(milestoneId, typeId, milestoneName, headerClass) => {
          // OnHandle_NavigateToTransportDetail (:793-878): the target member is the screen's In_MemberId
          withOrbitAccess(() => {
            navigate('/UBTConnect/TransportDetail', {
              In_HeaderClass: headerClass,
              In_MilestoneName: milestoneName,
              In_MilestoneId: milestoneId,
              In_TargetMemberId: inMemberId,
              In_OrbitMilestoneTypeId: typeId,
            });
          });
        }}
        onNavigateToHostSurvey={(householderId, start, end) => {
          // OnHandle_NavigateToHostSurvey (:879-960)
          withOrbitAccess(() => {
            navigate('/UBTConnect/HostSurvey', {
              In_MemberId: householderId,
              In_EventStartDate: start,
              In_EventId: inEventId,
              In_EventName: inEventName,
              In_EventEndDate: end,
            });
          });
        }}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}
