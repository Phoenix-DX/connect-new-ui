import { useState } from 'react';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { getClientVar } from '@/platform/session/session';
import type { CacheControl_PoliciesRec } from '@/legacy/os/cache/PoliciesCacheControl';
import { openPolicy, POLICY_NOT_FOUND } from '@/lib/ubtConnectUtils/actions';

/** One cached policy document (LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_<policy>). */
export type PolicyInformation = CacheControl_PoliciesRec['PolicyInformation_TermsAndConditions'];

/** The inputs and events of the PIN unlock content that its flows use. */
export interface PinUnlockContentInputs {
  /** isFromMenu: PIN change from the menu (no fingerprint). */
  isFromMenu: boolean;
  /** Event NavigateTo_PINRegister ("User not found"). */
  onNavigateToPINRegister?: () => void | Promise<void>;
}

/** What the PinUnlockContent component renders and the events it passes on. */
export interface PinUnlockContentState {
  /** ShowFingerprintReader: App_PIN_BiometricEnabled and not isFromMenu, set once on initialize. */
  showFingerprintReader: boolean;
  /** The policies that CacheControl_Policies gave with Result; null before. */
  policies: CacheControl_PoliciesRec | null;
  /** CacheControl_Policies raised Result: the policy links replace the skeleton. */
  isPoliciesFetched: boolean;
  /** Result of CacheControl_Policies. */
  onPoliciesResult: (response: CacheControl_PoliciesRec) => void;
  /** Event_Pincode_PinUnlockError of the keypad or the fingerprint scanner. */
  onPinUnlockError: (errorMessage: string) => Promise<void>;
  /** The Forgot PIN link. */
  onForgotPin: () => void;
  /** OnClick_TermsAndCondition / OnClick_PrivacyPolicy, with the cached policy of the link. */
  onClickPolicy: (policy: PolicyInformation | undefined) => void;
}

/** Event_Pincode_PinUnlockError: the message for an unlock error, and whether NavigateTo_PINRegister follows.
    "Pin does not match" → "Your current PIN is not correct!"; "User not found" → "No matching user. Please Register a
    PIN", then NavigateTo_PINRegister; any other text as is. */
export function pinUnlockErrorFeedback(errorMessage: string): { message: string; navigateToPINRegister: boolean } {
  if (errorMessage === 'Pin does not match') {
    return { message: 'Your current PIN is not correct!', navigateToPINRegister: false };
  }
  if (errorMessage === 'User not found') {
    return { message: 'No matching user. Please Register a PIN', navigateToPINRegister: true };
  }
  return { message: errorMessage, navigateToPINRegister: false };
}

const showError = (message: string) => {
  feedbackMessageAutoClose({
    title: '',
    message,
    messageType: 'error',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
};

/** The flows of the PIN unlock content of the PIN screens and the lock dialog. Call it in the component that renders
    PinUnlockContent, so that the flows start and stop with the block.
    - OnInitialize: ShowFingerprintReader = App_PIN_BiometricEnabled and not isFromMenu.
    - The unlock errors are shown with FeedbackMessage_AutoClose (error); see `pinUnlockErrorFeedback`.
    - Forgot PIN → Login?In_IsFromResetPIN=True.
    - The policy links run OpenPolicy(policy, "This policy couldn't be found.") with the policy of CacheControl_Policies.
    @origin UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper */
export function usePinUnlockContent({
  isFromMenu,
  onNavigateToPINRegister,
}: PinUnlockContentInputs): PinUnlockContentState {
  const navigate = useOsNavigate();
  const [showFingerprintReader] = useState(() => getClientVar('UBTConnect.App_PIN_BiometricEnabled') && !isFromMenu);
  const [policies, setPolicies] = useState<{ response: CacheControl_PoliciesRec | null; isFetched: boolean }>({
    response: null,
    isFetched: false,
  });

  const onPinUnlockError = async (errorMessage: string) => {
    const feedback = pinUnlockErrorFeedback(errorMessage);
    showError(feedback.message);
    if (feedback.navigateToPINRegister) await onNavigateToPINRegister?.();
  };

  return {
    showFingerprintReader,
    policies: policies.response,
    isPoliciesFetched: policies.isFetched,
    onPoliciesResult: (response) => {
      setPolicies({ response, isFetched: true });
    },
    onPinUnlockError,
    onForgotPin: () => {
      navigate(PATHS.login, { In_IsFromResetPIN: true });
    },
    onClickPolicy: (policy) => {
      openPolicy(policy, POLICY_NOT_FOUND);
    },
  };
}
