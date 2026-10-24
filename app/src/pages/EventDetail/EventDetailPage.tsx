import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useFlagOn } from '@/platform/flags/flags';
import { useOsNavigate } from '@/platform/navigation';
import { EventDetailView } from './components/EventDetailView';
import { useEventDetail } from './hooks/useEventDetail';
import { readEventDetailInputs } from './inputs';

/** Instance id of ScreenBlock_EventDetail on the screen. */
const BLOCK_ID = '$b1';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** helper-host: the In_OrbitMilestoneTypeId of the Helpers navigation (UBTConnect.orbitMilestoneType.helper). */
const ORBIT_MILESTONE_TYPE_HELPER = 'helper-host';

/** Connect2_LegacyShared FeedbackMessageAfterTransition: its JS node shows the message 500 ms later, after the
    navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.EventDetail
    One Orbit event of the member. ScreenBlock_EventDetail (its flows in useEventDetail, its view in EventDetailView)
    with empty Menu and CommonUI_Elements placeholders, then CommonUI_InsideLayout. The page reads the inputs and the
    flags, and handles the NavigateTo_* events of the block with the original parameter names.
    - Every handler except OnHandle_NavigateTo_EventBooklet first checks GetHasOrbitAccess (flag mobileOrbitAccess).
      Without access it shows the no-access message after the transition and goes to HomeFeed.
    - The target screens that are not built yet show as not migrated in the router. */
export default function EventDetail() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readEventDetailInputs(params), [params]);
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const hasOrbitHostSurvey = useFlagOn('mobileOrbitHostSurvey');
  const hasOrbitEventBooklet = useFlagOn('mobileOrbitEventBooklet');
  const { In_MemberId: inMemberId, In_EventId: inEventId, In_EventName: inEventName } = inputs;

  /** The no-access branch of the handlers (for example OnHandle_NavigateToGenerateQRCode). */
  const withOrbitAccess = (go: () => void) => {
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    go();
  };

  const detail = useEventDetail(
    inputs,
    { hasOrbitEventBooklet },
    {
      onNavigateToGenerateQRCode: (start, end, location) => {
        // OnHandle_NavigateToGenerateQRCode
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
      },
      onNavigateToContactHelpdesk: (subject, eventName) => {
        // OnHandle_ContactHelpdesk
        withOrbitAccess(() => {
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_MilestoneId: '',
            In_EventId: inEventId,
            In_Subject: subject,
            In_EventName: eventName,
          });
        });
      },
      onNavigateToViewDocuments: (start, end, location) => {
        // OnHandle_NavigateToViewDocuments
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
      },
      onNavigateToEventBooklet: () => {
        // OnHandle_NavigateTo_EventBooklet: no access check
        navigate('/UBTConnect/EventBooklet', { In_EventName: inEventName, In_EventId: inEventId });
      },
      onNavigateToMilestoneDetail: (milestoneId, eventName, milestoneName, typeId, hostId) => {
        // OnHandle_NavigateToMilestoneDetail: EventId is the screen's In_EventId
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
      },
      onNavigateToHelpers: (eventId, hostId, preloadEventName, preloadMilestoneName) => {
        // OnHandle_NavigateToHelpers
        withOrbitAccess(() => {
          navigate('/UBTConnect/HelpersDetail', {
            In_EventId: eventId,
            In_EventName: preloadEventName,
            In_HostId: hostId,
            In_OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPE_HELPER,
            In_MilestoneName: preloadMilestoneName,
          });
        });
      },
      onNavigateToTransportDetail: (milestoneId, typeId, milestoneName, headerClass) => {
        // OnHandle_NavigateToTransportDetail: the target member is the screen's In_MemberId
        withOrbitAccess(() => {
          navigate('/UBTConnect/TransportDetail', {
            In_HeaderClass: headerClass,
            In_MilestoneName: milestoneName,
            In_MilestoneId: milestoneId,
            In_TargetMemberId: inMemberId,
            In_OrbitMilestoneTypeId: typeId,
          });
        });
      },
      onNavigateToHostSurvey: (householderId, start, end) => {
        // OnHandle_NavigateToHostSurvey
        withOrbitAccess(() => {
          navigate('/UBTConnect/HostSurvey', {
            In_MemberId: householderId,
            In_EventStartDate: start,
            In_EventId: inEventId,
            In_EventName: inEventName,
            In_EventEndDate: end,
          });
        });
      },
    },
  );

  return (
    <>
      <EventDetailView
        id={BLOCK_ID}
        inEventName={inEventName}
        inFromNotification={inputs.In_FromNotification}
        hasOrbitHostSurvey={hasOrbitHostSurvey}
        hasOrbitEventBooklet={hasOrbitEventBooklet}
        state={detail.state}
        {...detail.handlers}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}
