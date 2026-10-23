import { useState } from 'react';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { allowUpcomingNavigation, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';

/** The state and the handlers of the PINChange screen. */
export interface PINChangeFlows {
  /** Local isScreenUnlocked (initially False): False shows the unlock block (current PIN), True the register block
      (new PIN). */
  isScreenUnlocked: boolean;
  /** OnClick_BackToLogin of the header link. */
  onClickBackToLogin: () => void;
  /** Block_PINUnlockUnlock: the Unlock and NavigateTo_PINRegister events of Block_PINUnlock_ContentWrapper. */
  onUnlock: () => void;
}

/** The flows of the PINChange screen. The screen has no input, no data action and no lifecycle handler. The calls of
    its capture come from the shell's app start; the PIN check and the PIN change go through the PIN blocks.
    - OnClick_BackToLogin: AllowUpcomingNavigation, then the Menu screen (default transition).
    - Block_PINUnlockUnlock: isScreenUnlocked = True, then FeedbackMessage_AutoClose("Please provide a new PIN",
      success).
    @origin UBTConnect.App_PIN.PINChange */
export function usePINChange(): PINChangeFlows {
  const navigate = useOsNavigate();
  const [isScreenUnlocked, setIsScreenUnlocked] = useState(false);

  const onClickBackToLogin = () => {
    allowUpcomingNavigation();
    navigate(`/${APP_ID}/Menu`);
  };

  const onUnlock = () => {
    setIsScreenUnlocked(true);
    feedbackMessageAutoClose({
      title: '',
      message: 'Please provide a new PIN',
      messageType: 'success',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };

  return { isScreenUnlocked, onClickBackToLogin, onUnlock };
}
