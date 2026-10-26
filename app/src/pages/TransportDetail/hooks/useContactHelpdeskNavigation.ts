import type { TransportDetailInputs } from '@/pages/TransportDetail/inputs';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** FeedbackMessageAfterTransition (Connect2_LegacyShared): its JavaScript node shows the message 500 ms later, after
    the navigation that follows. A local copy: a page does not import another page. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** OnHandle_ContactHelpdesk of the screen, the handler of the block event NavigateTo_ContactHelpdesk(Subject,
    EventName). With access to Orbit (GetHasOrbitAccess, the flag mobileOrbitAccess, which the page reads):
    ContactByEmailOrbitHelpdesk with In_TargetMemberId, In_EventId = IntegerToLongInteger(NullIdentifier()) = 0 and
    In_MilestoneId. Without access: the no-access message after the transition, and HomeFeed.
    @origin UBTConnect.Legacy_OrbitEventsFlow.TransportDetail */
export function useContactHelpdeskNavigation(
  { In_TargetMemberId, In_MilestoneId }: Pick<TransportDetailInputs, 'In_TargetMemberId' | 'In_MilestoneId'>,
  hasOrbitAccess: boolean,
): (subject: string, eventName: string) => void {
  const navigate = useOsNavigate();
  return (subject, eventName) => {
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, PLATFORM_MESSAGE_TYPE.error);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
      In_EventName: eventName,
      In_Subject: subject,
      In_TargetMemberId,
      In_EventId: '0',
      In_MilestoneId,
    });
  };
}
