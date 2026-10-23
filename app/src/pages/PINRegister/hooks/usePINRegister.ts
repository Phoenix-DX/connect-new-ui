import { allowUpcomingNavigation, useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { signOut } from '@/platform/session/auth';

/** The handlers of the PINRegister screen. */
export interface PINRegisterFlows {
  /** OnClick_BackToLogin of the header link. */
  onClickBackToLogin: () => Promise<void>;
}

/** The flows of the PINRegister screen. The screen has no input, no data action and no lifecycle handler; its only
    screen action is OnClick_BackToLogin: AllowUpcomingNavigation, AppManager_Logout (`signOut`, as on Login), then
    the Login screen.
    @origin UBTConnect.App_PIN.PINRegister */
export function usePINRegister(): PINRegisterFlows {
  const navigate = useOsNavigate();

  const onClickBackToLogin = async () => {
    allowUpcomingNavigation();
    await signOut();
    navigate(PATHS.login);
  };

  return { onClickBackToLogin };
}
