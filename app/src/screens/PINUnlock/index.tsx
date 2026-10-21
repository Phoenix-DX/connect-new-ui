import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { useScreenController_NavigateToPage } from '../../shared/UBTJavaScriptUtils/lib/actions';
import { BlockPinUnlock } from '../../shell/dialogs';
import { replaceOnUpcomingNavigation, useOsNavigate } from '../../shell/navigation';
import { PATHS } from '../../shell/paths';
import { getResumeLoginLink } from '../../shell/resume';
import { getClientVar } from '../../shell/session';

/* PINUnlock (p:UBTConnect.App_PIN.PINUnlock.mvc.js): Block_PINUnlock with In_ForceVisible True, CommonUI_InsideLayout
   (In_IgnoreLockScreen, In_IgnorePolicy) in its placeholder (:128-186). No data action, no lifecycle handler (:210, 280).
   Block_PINUnlockUnlock (:212-262): GetResumeLoginLink; ReplaceOnUpcomingNavigation; link <> "" →
   ScreenController_NavigateToPage(link, True), else ScreenController_NavigateToPage(LastURL, True) (:237-249). The
   shell's PIN redirect writes UBTConnect.LastURL = the opened path, as Splash does (CR-PINUnlock-1 applied), so the
   unlock returns to the screen that was opened, as TST does; an empty LastURL goes to HomeFeed (Q1 answered by the
   user: B). */
export default function PINUnlock() {
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

  return (
    <BlockPinUnlock
      id="$b1"
      inForceVisible
      onUnlock={onUnlock}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b2" inIgnoreLockScreen inIgnorePolicy />}
    />
  );
}
