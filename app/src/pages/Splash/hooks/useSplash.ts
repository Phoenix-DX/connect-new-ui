import { useRef, useState } from 'react';
import { allowUpcomingNavigation, useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { pinCheck } from '@/platform/session/pin';
import { getColdStartLinkURL, setResumeLoginLink } from '@/platform/session/resume';
import { clientVar, isSignedIn, useClientVar } from '@/platform/session/session';
import { set_InitialClientVariables } from '@/lib/ubtConnect/actions';
import { useScreenController_NavigateToPage } from '@/lib/jsUtils';
import { useApplicationLoadEvents } from './useApplicationLoadEvents';

/** MinimumDisplayTimeMs of the screen's ApplicationLoadEvents. */
const MINIMUM_DISPLAY_TIME_MS = 1500;

export interface SplashState {
  /** TriggerAnimation: the load is complete, the loading dots merge into the header. */
  triggerAnimation: boolean;
  /** App_PIN_Header_FinalHeightPercentage: the final height and curvature of the loading dots' header. */
  headerFinalHeightPercentage: number;
  /** Handler_OnNavigation, the Navigation event of NavigationHandler. */
  onNavigation: (navigationEvent: Event) => void;
  /** LoadingDotsAnimationComplete, the AnimationComplete event of LoadingDots. */
  onLoadingDotsAnimationComplete: () => void;
}

/** The flows of the splash screen. The application load events run with a minimum display time of 1.5 s; the upgrade
    progress only sets Percentage, which nothing renders. On load complete the loading dots animation starts and
    LastURL becomes the redirect URL, unless a navigation was caught and LastURL is already set. A caught navigation
    is prevented and kept. When the animation is complete: the initial client variables, the PIN check, the cold start
    link (kept as the resume login link while a PIN must be registered or unlocked, or nobody is signed in), the next
    navigation is allowed, then PINRegister or PINUnlock for a signed-in user who needs them, otherwise
    ScreenController_NavigateToPage(cold start link, else LastURL, True) (Q3 answered A: as compiled). Each of these
    navigations replaces the Splash entry, as the TST router does while the splash screen shows.
    @origin UBTConnect.App_Common.Splash */
export function useSplash(): SplashState {
  const navigate = useOsNavigate();
  const screenController_NavigateToPage = useScreenController_NavigateToPage();
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const navigationObject = useRef<Event | null>(null);
  const percentage = useRef(0);
  const headerFinalHeightPercentage = useClientVar(clientVar.pinHeaderFinalHeightPercentage);

  // Handler_OnNavigation: PreventNavigation (stopPropagation and preventDefault), NavigationObject = NavigationEvent.
  const onNavigation = (navigationEvent: Event) => {
    navigationEvent.stopPropagation();
    navigationEvent.preventDefault();
    navigationObject.current = navigationEvent;
  };

  // OnUpgradeProgress: Percentage = Trunc(Completed / Total * 150).
  const onUpgradeProgress = (completed: number, total: number) => {
    percentage.current = Math.trunc((completed / total) * 150);
  };

  // OnLoadComplete: TriggerAnimation = True; LastURL = In_RedirectURL unless a navigation was caught and LastURL is set.
  const onLoadComplete = (redirectUrl: string) => {
    setTriggerAnimation(true);
    if (navigationObject.current !== null && clientVar.lastUrl.get() !== '') return;
    clientVar.lastUrl.set(redirectUrl);
  };

  useApplicationLoadEvents({ minimumDisplayTimeMs: MINIMUM_DISPLAY_TIME_MS, onUpgradeProgress, onLoadComplete });

  // LoadingDotsAnimationComplete
  const onLoadingDotsAnimationComplete = () => {
    set_InitialClientVariables();
    const pin = pinCheck();
    const coldStartLinkUrl = getColdStartLinkURL();
    allowUpcomingNavigation();
    const signedIn = isSignedIn();
    if (coldStartLinkUrl !== '' && (pin.needRegister || pin.needUnlock || !signedIn)) {
      setResumeLoginLink(coldStartLinkUrl);
    }
    // While Splash shows, every navigation replaces its history entry: the router's goTo replaces when
    // isShowingSplashScreen, and Splash is the module SplashScreen (OutSystemsReactView.js; MCP session row 14,
    // user decision (a), 2026-10-29)
    if (signedIn) {
      if (pin.needRegister) {
        navigate(PATHS.pinRegister, undefined, { replace: true });
        return;
      }
      if (pin.needUnlock) {
        navigate(PATHS.pinUnlock, undefined, { replace: true });
        return;
      }
    }
    screenController_NavigateToPage(coldStartLinkUrl !== '' ? coldStartLinkUrl : clientVar.lastUrl.get(), true);
  };

  return { triggerAnimation, headerFinalHeightPercentage, onNavigation, onLoadingDotsAnimationComplete };
}
