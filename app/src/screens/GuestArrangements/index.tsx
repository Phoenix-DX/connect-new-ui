import { useSearchParams } from 'react-router';
import { useFlagOn } from '@/platform/flags/flags';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_GuestArrangements } from './components/ScreenBlock_GuestArrangements';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.GuestArrangements (S = analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.
    GuestArrangements.mvc.js: model :1-127, view :128-276, controller :277-438). Inputs In_MilestoneId, In_EventId,
    In_MemberId, In_HostId, In_OrbitMilestoneTypeId, In_MilestoneTitle, In_EventName (S :12-55).
    ScreenBlock_GuestArrangements (In_PreloadMilestoneName = In_MilestoneTitle, In_PreloadEventName = In_EventName;
    placeholders Menu and CommonUI_Elements empty, S :196-252), then CommonUI_InsideLayout (S :253-268). Reached from
    MilestoneDetail (accommodation host, a guest with guest arrangements). OnHandle_ContactHelpdesk (S :295-345) checks
    GetHasOrbitAccess (flag mobileOrbitAccess, default-only on): ContactByEmailOrbitHelpdesk, otherwise the no-access
    message after the transition and HomeFeed. OnHandle_NavigateToHouseholdDetail (S :361-385) goes straight to
    HouseholdDetails. */
export default function GuestArrangements() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const inEventId = params.get('In_EventId') ?? '0';

  return (
    <>
      <ScreenBlock_GuestArrangements
        id="$b1"
        In_OrbitMilestoneTypeId={params.get('In_OrbitMilestoneTypeId') ?? ''}
        In_PreloadMilestoneName={params.get('In_MilestoneTitle') ?? ''}
        In_HostId={params.get('In_HostId') ?? '0'}
        In_PreloadEventName={params.get('In_EventName') ?? ''}
        In_MemberId={params.get('In_MemberId') ?? '0'}
        In_MilestoneId={params.get('In_MilestoneId') ?? ''}
        In_EventId={inEventId}
        onNavigateToHouseholdDetail={(householdId) => {
          // OnHandle_NavigateToHouseholdDetail (S :361-385)
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
        }}
        onContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (S :295-345): In_MilestoneId "" as compiled
          if (!hasOrbitAccess) {
            feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
            navigate('/UBTConnect/HomeFeed', {});
            return;
          }
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_EventId: inEventId,
            In_Subject: subject,
            In_EventName: eventName,
            In_MilestoneId: '',
          });
        }}
      />
      <CommonUI_InsideLayout id="$b2" />
    </>
  );
}
