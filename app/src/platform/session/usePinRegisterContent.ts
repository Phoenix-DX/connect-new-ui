import { useEffect, useState } from 'react';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { replaceOnUpcomingNavigation, TransitionAnimation, useOsNavigate } from '@/platform/navigation';
import { APP_ID, PATHS } from '@/platform/navigation/paths';
import { useScreenController_NavigateToPage } from '@/lib/jsUtils';
import { getResumeLoginLink } from './resume';
import { getClientVar, setClientVar } from './session';
import { usePinCodeRegister, type PinCodeRegisterFlow } from './usePinCodeRegister';
import { getUserInformation } from './userInfo';

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
  /** UserName: FirstName + " " + LastName of the cached user info; empty without EnableName or before it is read. */
  userName: string;
}

/** The flows of Block_PINRegister_ContentWrapper (PINRegister and PINChange) around the flows of Pincode_Register.
    - OnInitialize: with EnableName, UserName = FirstName + " " + LastName of the cached user info.
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
  const [userName, setUserName] = useState('');

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

  useEffect(() => {
    if (!enabled || !enableName) return;
    getUserInformation().then(
      (info) => {
        setUserName(`${info.Directory_UserCurrent.FirstName} ${info.Directory_UserCurrent.LastName}`);
      },
      () => undefined, // no cached user: the name stays empty, as AppManager_GetCachedUserInfo returns an empty record
    );
  }, [enabled, enableName]);

  return {
    userName,
    isFirstUse: pinCode.isFirstUse,
    onSetPin: pinCode.onSetPin,
    onBeforeSetPin: pinCode.onBeforeSetPin,
  };
}
