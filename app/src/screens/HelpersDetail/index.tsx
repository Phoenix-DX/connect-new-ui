import { useSearchParams } from 'react-router';
import { useFlagOn } from '../../lib/flags';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_HelperDetails } from './components/ScreenBlock_HelperDetails';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.HelpersDetail (S = analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.
    HelpersDetail.mvc.js: view :167-245, controller :250-420). Inputs In_EventId, In_OrbitMilestoneTypeId,
    In_MilestoneName, In_EventName, In_HostId. ScreenBlock_HelperDetails (In_PreloadEventName = In_EventName,
    In_PreloadMilestoneName = In_MilestoneName; placeholders Menu and CommonUI_Elements empty, S :180-235), then
    CommonUI_InsideLayout (S :236-245). OnHandle_ContactHelpdesk (S :270-320) checks GetHasOrbitAccess (flag
    mobileOrbitAccess, default-only on): ContactByEmailOrbitHelpdesk, otherwise the no-access message after the
    transition and HomeFeed. OnHandle_NavigateToHouseholdDetail (S :335-370) goes straight to HouseholdDetails. */
export default function HelpersDetail() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const inEventId = params.get('In_EventId') ?? '0';

  return (
    <>
      <ScreenBlock_HelperDetails
        id="$b1"
        In_EventId={inEventId}
        In_HostId={params.get('In_HostId') ?? '0'}
        In_OrbitMilestoneTypeId={params.get('In_OrbitMilestoneTypeId') ?? ''}
        In_PreloadEventName={params.get('In_EventName') ?? ''}
        In_PreloadMilestoneName={params.get('In_MilestoneName') ?? ''}
        onNavigateToHouseholdDetail={(householdId) => {
          // OnHandle_NavigateToHouseholdDetail (S :335-370)
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
        }}
        onNavigateToContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (S :270-320): In_MilestoneId "" as compiled
          if (!hasOrbitAccess) {
            feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
            navigate('/UBTConnect/HomeFeed', {});
            return;
          }
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_EventName: eventName,
            In_Subject: subject,
            In_EventId: inEventId,
            In_MilestoneId: '',
          });
        }}
      />
      <CommonUI_InsideLayout id="$b2" />
    </>
  );
}
