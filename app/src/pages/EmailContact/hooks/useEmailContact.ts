import { PLATFORM_MESSAGE_TYPE } from '@/platform/feedback';
import { useNavigateBack, useOsNavigate } from '@/platform/navigation';
import { feedbackMessageAfterTransition } from '@/pages/EmailContact/actions';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.EmailContact
    The screen action of EmailContact: OnHandle_Submitted, the handler of the contact form's Submitted event. The
    screen has no variables and no OnReady. The page calls this hook. */

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** The flags that the screen reads; the page reads them (useFlag). */
export interface EmailContactFlags {
  /** GetHasOrbitAccess: the flag mobileOrbitAccess. */
  hasOrbitAccess: boolean;
}

/** The screen's handlers. */
export interface EmailContactFlows {
  /** OnHandle_Submitted. */
  onSubmitted: () => void;
}

export function useEmailContact({ hasOrbitAccess }: EmailContactFlags): EmailContactFlows {
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  /* OnHandle_Submitted: with Orbit access, the previous screen; otherwise the no-access message (Error) after the
     transition, and HomeFeed. */
  const onSubmitted = () => {
    if (hasOrbitAccess) {
      navigateBack();
      return;
    }
    feedbackMessageAfterTransition(NO_ORBIT_ACCESS, PLATFORM_MESSAGE_TYPE.error);
    navigate('/UBTConnect/HomeFeed', {});
  };
  return { onSubmitted };
}
