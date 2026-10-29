import { useState } from 'react';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { replaceOnUpcomingNavigation, TransitionAnimation, useOsNavigate } from '@/platform/navigation';
import { APP_ID, PATHS } from '@/platform/navigation/paths';
import { useScreenController_NavigateToPage } from '@/lib/jsUtils';
import { appManager_GetCachedUserInfo } from './cachedUserInfo';
import { getResumeLoginLink } from './resume';
import { getClientVar, setClientVar } from './session';
import { usePinCodeRegister, type PinCodeRegisterFlow } from './usePinCodeRegister';

/** The input parameters of Block_PINRegister_ContentWrapper that the flows read. */
export interface PinRegisterContentOptions {
  /** isFromMenu: PIN change from the menu; success goes back to Menu with a message. */
  isFromMenu?: boolean;
  /** EnableName: OnInitialize reads the user's name for "Welcome <name>". */
  enableName?: boolean;
  /** False while the block is not on the screen (PINChange shows it after the unlock): OnInitialize waits for True. */
  enabled?: boolean;
}

/** What PinRegisterContent renders and the SetPin handler of its keypad. */
export interface PinRegisterContentFlow extends PinCodeRegisterFlow {
  /** UserName: FirstName + " " + LastName of the cached user info; empty without EnableName or while the block is not
      enabled. */
  userName: string;
}

/** The flows of Block_PINRegister_ContentWrapper (PINRegister and PINChange) around the flows of Pincode_Register.
    - OnInitialize (:559-580): with EnableName, UserName = FirstName + " " + LastName of AppManager_GetCachedUserInfo,
      the synchronous read of the local AppManager record (no server call).
    - PinRegistrationError → FeedbackMessage_AutoClose(error).
    - PinRegistrationSuccess: ReplaceOnUpcomingNavigation; from the menu → "Your PIN has been changed." (success) and
      Menu (SlideFromRight); else IsNavigateToHomeOnBack = True and the resume link (GetResumeLoginLink), else LastURL,
      both with ScreenController_NavigateToPage (replace); else IsNavigateToHomeOnBack = False and HomeFeed.
    The page calls this hook and gives the result to PinRegisterContent.
    @origin UBTConnect.App_PIN.Block_PINRegister_ContentWrapper */
export function usePinRegisterContent({
  isFromMenu = false,
  enableName = false,
  enabled = true,
}: PinRegisterContentOptions = {}): PinRegisterContentFlow {
  const navigate = useOsNavigate();
  const screenController_NavigateToPage = useScreenController_NavigateToPage();

  const onPinRegistrationSuccess = () => {
    replaceOnUpcomingNavigation();
    if (isFromMenu) {
      feedbackMessageAutoClose({
        title: '',
        message: 'Your PIN has been changed.',
        messageType: 'success',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      navigate(`/${APP_ID}/Menu`, undefined, { transition: TransitionAnimation.SlideFromRight });
      return;
    }
    const resumeLink = getResumeLoginLink();
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', true);
    if (resumeLink !== '') {
      screenController_NavigateToPage(resumeLink, true);
      return;
    }
    const lastUrl = getClientVar('UBTConnect.LastURL');
    if (lastUrl !== '') {
      screenController_NavigateToPage(lastUrl, true);
      return;
    }
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
    navigate(PATHS.home);
  };
  const onPinRegistrationError = (errorMessage: string) => {
    feedbackMessageAutoClose({
      title: '',
      message: errorMessage,
      messageType: 'error',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };
  // Pincode_Register is the inner block: its OnInitialize runs before the OnInitialize below, as in the original.
  const pinCode = usePinCodeRegister({ onPinRegistrationSuccess, onPinRegistrationError }, enabled);

  // OnInitialize runs once, when the block is on the screen (enabled), before its first render: the name is read
  // during the render, not in an effect. An empty record gives " ".
  const [initialized, setInitialized] = useState(enabled);
  const [userName, setUserName] = useState(() => (enabled && enableName ? cachedUserName() : ''));
  if (enabled && !initialized) {
    setInitialized(true);
    if (enableName) setUserName(cachedUserName());
  }

  return {
    userName,
    isFirstUse: pinCode.isFirstUse,
    onSetPin: pinCode.onSetPin,
    onBeforeSetPin: pinCode.onBeforeSetPin,
  };
}

/** UserName = AppManager_GetCachedUserInfo.UserInformation.FirstName + " " + ...LastName (:578-579). */
function cachedUserName(): string {
  const info = appManager_GetCachedUserInfo();
  return info.FirstName + ' ' + info.LastName;
}
