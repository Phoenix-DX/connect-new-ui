import { useSearchParams } from 'react-router';
import { useFlagOn } from '../../lib/flags';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { showFeedbackMessage } from '../../shell/feedback';
import { useOsNavigate } from '../../shell/navigation';
import { ScreenBlock_TransportDetail } from './components/ScreenBlock_TransportDetail';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.TransportDetail (S = analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.
    TransportDetail.mvc.js: model :1-107, view :108-239, controller :240-360). No capture (no-capture.json, user
    2026-10-16): built from the compiled code. Inputs In_MilestoneId, In_OrbitMilestoneTypeId, In_MilestoneName,
    In_HeaderClass, In_TargetMemberId. ScreenBlock_TransportDetail (In_PreloadMilestoneName = In_MilestoneName; Menu and
    CommonUI_Elements empty), then CommonUI_InsideLayout. OnHandle_ContactHelpdesk (S :259-307) checks GetHasOrbitAccess
    (flag mobileOrbitAccess, default-only on): ContactByEmailOrbitHelpdesk with In_TargetMemberId, In_EventId
    IntegerToLongInteger(NullIdentifier()) = 0 and In_MilestoneId; otherwise the no-access message after the transition
    and HomeFeed. */
export default function TransportDetail() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const inMilestoneId = params.get('In_MilestoneId') ?? '';

  return (
    <>
      <ScreenBlock_TransportDetail
        id="$b1"
        In_MilestoneId={inMilestoneId}
        In_OrbitMilestoneTypeId={params.get('In_OrbitMilestoneTypeId') ?? ''}
        In_PreloadMilestoneName={params.get('In_MilestoneName') ?? ''}
        In_HeaderClass={params.get('In_HeaderClass') ?? ''}
        onNavigateToContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (S :259-307)
          if (!hasOrbitAccess) {
            feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
            navigate('/UBTConnect/HomeFeed', {});
            return;
          }
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_EventName: eventName,
            In_Subject: subject,
            In_TargetMemberId: params.get('In_TargetMemberId') ?? '0',
            In_EventId: '0',
            In_MilestoneId: inMilestoneId,
          });
        }}
      />
      <CommonUI_InsideLayout id="$b2" />
    </>
  );
}
