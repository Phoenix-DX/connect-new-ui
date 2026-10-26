import { useEffect, useState } from 'react';
import { PATHS } from '@/platform/navigation/paths';
import { getClientVar, setClientVar } from '@/platform/session/session';
import {
  useBackHandler,
  useOsNavigate,
  usePreventBackNavigation,
  useViewState,
  useWasRestoredFromCache,
  BACK_PRIORITY,
  TransitionAnimation,
} from '@/platform/navigation';

/* Back handling of UBTConnect App_Common.CommonUI_InsideLayout (HF p:UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js,
   "CUI"), one per screen:
   - OnInitialize, unless the view comes from the cache: keep IsNavigateToHomeOnBack, then clear the client variable
     (CUI:515-529); a cached view keeps its value (useViewState).
   - IsNavigateToHomeOnBack: PreventBackNavigation (lock-screen priority) → OnBackNavigation_RedirectHome: HomeFeed
     (CUI:312-344, 415-441).
   - else BackNavigationHandler at -10000 → OnBackNavigation_MaybeRedirectHome: at the first entry of the tab, prevent
     and run Action_RedirectHome on a 0 ms timeout: HomeFeed (CUI:348-372, 556-603, 456-470, 703-712).
   Transitions as compiled: OnBackNavigation_RedirectHome SlideFromLeft (CUI:427), Action_RedirectHome Default
   (CUI:460). */
export function useCommonUiBackHandler(): void {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [initial] = useState(() => !restored && getClientVar('UBTConnect.IsNavigateToHomeOnBack'));
  const [isNavigateToHomeOnBack] = useViewState('CommonUI_InsideLayout.IsNavigateToHomeOnBack', initial);
  useEffect(() => {
    if (!restored) setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
  }, [restored]);

  usePreventBackNavigation(isNavigateToHomeOnBack, () => {
    navigate(PATHS.home, undefined, { transition: TransitionAnimation.SlideFromLeft });
  });

  useBackHandler(
    BACK_PRIORITY.commonUi,
    (event) => {
      if (!event.isInitialLocation()) return;
      event.preventDefault();
      window.setTimeout(() => {
        navigate(PATHS.home);
      }, 0);
    },
    !isNavigateToHomeOnBack,
  );
}
