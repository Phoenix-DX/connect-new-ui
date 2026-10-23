import { BlankLayout } from '@/components/layout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { NavigationHandler } from '@/shared/NavigationHandler/NavigationHandler';
import { HandleOnResumeOpenLink } from '@/shared/UBTConnect/HandleOnResumeOpenLink';
import { ApplicationLoadEvents } from './components/ApplicationLoadEvents';
import { LoadingDots } from './components/LoadingDots';
import { useSplash } from './hooks/useSplash';

/** The splash screen: the blank layout with the loading dots, the application load events and
    HandleOnResumeOpenLink, and NavigationHandler beside the layout. The flows are `useSplash`. The screen has no
    input and no server call of its own: the calls of its capture (Sync_Info_GetMain, CacheableHouseholds,
    CacheableMapEntities) are the app start's (platform/bootstrap), which also mocks them.
    @origin UBTConnect.App_Common.Splash */
export default function Splash() {
  const { triggerAnimation, headerFinalHeightPercentage, onNavigation, onLoadingDotsAnimationComplete } = useSplash();
  // The blank layout has no CommonUI_InsideLayout: the shell mounts no CommonUI stand-in (CR-Splash-3).
  useNoCommonUi();

  return (
    <>
      <BlankLayout
        id="$b1"
        content={
          <>
            <LoadingDots
              id="$b2"
              isTriggerAnimation={triggerAnimation}
              inFinalCurvaturePercentage={headerFinalHeightPercentage}
              inHeaderFinalHeightPercentage={headerFinalHeightPercentage}
              onAnimationComplete={onLoadingDotsAnimationComplete}
            />
            <ApplicationLoadEvents id="$b3" />
            <HandleOnResumeOpenLink id="$b4" />
          </>
        }
      />
      <NavigationHandler id="$b5" onNavigation={onNavigation} />
    </>
  );
}
