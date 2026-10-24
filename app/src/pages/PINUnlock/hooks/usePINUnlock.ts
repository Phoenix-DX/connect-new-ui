import { replaceOnUpcomingNavigation, useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { getResumeLoginLink } from '@/platform/session/resume';
import { getClientVar } from '@/platform/session/session';
import { useScreenController_NavigateToPage } from '@/lib/jsUtils';

export interface PINUnlockState {
  /** Block_PINUnlockUnlock, the Unlock event of Block_PINUnlock (the right PIN). */
  onUnlock: () => void;
}

/** The flows of the PIN unlock screen. The screen has no input, no data action and no lifecycle handler.
    On unlock: GetResumeLoginLink and ReplaceOnUpcomingNavigation; then ScreenController_NavigateToPage(resume link,
    True), else ScreenController_NavigateToPage(LastURL, True). The shell's PIN redirect sets LastURL to the opened
    path, as Splash does (CR-PINUnlock-1), so the unlock goes back to the screen that was opened, as TST does; an empty
    LastURL goes to HomeFeed (Q1 answered by the user: B).
    @origin UBTConnect.App_PIN.PINUnlock */
export function usePINUnlock(): PINUnlockState {
  const navigate = useOsNavigate();
  const screenController_NavigateToPage = useScreenController_NavigateToPage();

  const onUnlock = () => {
    const resumeLink = getResumeLoginLink();
    replaceOnUpcomingNavigation();
    if (resumeLink !== '') {
      screenController_NavigateToPage(resumeLink, true);
      return;
    }
    const lastUrl = getClientVar('UBTConnect.LastURL');
    if (lastUrl !== '') screenController_NavigateToPage(lastUrl, true);
    else navigate(PATHS.home, undefined, { replace: true });
  };

  return { onUnlock };
}
