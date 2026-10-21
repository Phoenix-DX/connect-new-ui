import { useRef, useState } from 'react';
import { HandleOnResumeOpenLink } from '../../shared/UBTConnect/HandleOnResumeOpenLink';
import { set_InitialClientVariables } from '../../shared/UBTConnect/lib/actions';
import { NavigationHandler } from '../../shared/NavigationHandler/NavigationHandler';
import { useScreenController_NavigateToPage } from '../../shared/UBTJavaScriptUtils/lib/actions';
import { allowUpcomingNavigation, useOsNavigate } from '../../shell/navigation';
import { PATHS } from '../../shell/paths';
import { pinCheck } from '../../shell/pin';
import { getColdStartLinkURL, setResumeLoginLink } from '../../shell/resume';
import { getClientVar, isSignedIn, setClientVar, useClientVar } from '../../shell/session';
import { ApplicationLoadEvents } from './components/ApplicationLoadEvents';
import { LayoutBlank } from './components/LayoutBlank';
import { LoadingDots } from './components/LoadingDots';

/** UBTConnect App_Common.Splash (p:UBTConnect.App_Common.Splash.mvc.js; view :137-300, controller :324-560). */
export default function Splash() {
  const navigate = useOsNavigate();
  const screenController_NavigateToPage = useScreenController_NavigateToPage();
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const navigationObject = useRef<Event | null>(null);
  const percentage = useRef(0);
  const headerFinalHeightPercentage = useClientVar('UBTConnect.App_PIN_Header_FinalHeightPercentage');

  // Handler_OnNavigation (:324-350): PreventNavigation (stopPropagation + preventDefault, NavigationHandler.controller.js
  // :1543-1548), NavigationObject = NavigationEvent.
  const handlerOnNavigation = (navigationEvent: Event) => {
    navigationEvent.stopPropagation();
    navigationEvent.preventDefault();
    navigationObject.current = navigationEvent;
  };

  // OnUpgradeProgress (:364-390): Percentage = Trunc(Completed / Total * 150); nothing renders it (:191-195).
  const onUpgradeProgress = (completed: number, total: number) => {
    percentage.current = Math.trunc((completed / total) * 150);
  };

  // OnLoadComplete (:410-435): TriggerAnimation = True; LastURL = In_RedirectURL unless a navigation was caught and
  // LastURL is set.
  const onLoadComplete = (redirectUrl: string) => {
    setTriggerAnimation(true);
    if (navigationObject.current !== null && getClientVar('UBTConnect.LastURL') !== '') return;
    setClientVar('UBTConnect.LastURL', redirectUrl);
  };

  // LoadingDotsAnimationComplete (:455-524).
  const loadingDotsAnimationComplete = () => {
    set_InitialClientVariables();
    const pin = pinCheck();
    const coldStartLinkUrl = getColdStartLinkURL();
    allowUpcomingNavigation();
    const signedIn = isSignedIn();
    if (coldStartLinkUrl !== '' && (pin.needRegister || pin.needUnlock || !signedIn)) {
      setResumeLoginLink(coldStartLinkUrl);
    }
    if (signedIn) {
      if (pin.needRegister) {
        navigate(PATHS.pinRegister);
        return;
      }
      if (pin.needUnlock) {
        navigate(PATHS.pinUnlock);
        return;
      }
    }
    // ScreenController_NavigateToPage(link, else LastURL, True) (Q3 answered A: as compiled).
    screenController_NavigateToPage(
      coldStartLinkUrl !== '' ? coldStartLinkUrl : getClientVar('UBTConnect.LastURL'),
      true,
    );
  };

  return (
    <>
      <LayoutBlank
        id="$b1"
        content={
          <>
            <LoadingDots
              id="$b2"
              isTriggerAnimation={triggerAnimation}
              inFinalCurvaturePercentage={headerFinalHeightPercentage}
              inHeaderFinalHeightPercentage={headerFinalHeightPercentage}
              onAnimationComplete={loadingDotsAnimationComplete}
            />
            <ApplicationLoadEvents
              id="$b3"
              minimumDisplayTimeMs={1500}
              onUpgradeProgress={onUpgradeProgress}
              onLoadComplete={onLoadComplete}
            />
            <HandleOnResumeOpenLink id="$b4" />
          </>
        }
      />
      <NavigationHandler id="$b5" onNavigation={handlerOnNavigation} />
    </>
  );
}
