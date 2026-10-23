import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { pIN_ValidateRules } from '@/shared/UBT_AppManager/lib/actions';
import { registerPin } from './pin';
import { currentUserId } from './session';

/** The events of Pincode_Register. */
export interface PinCodeRegisterEvents {
  /** Event PinRegistrationSuccess. */
  onPinRegistrationSuccess?: () => void | Promise<void>;
  /** Event PinRegistrationError(ErrorMessage). */
  onPinRegistrationError?: (errorMessage: string) => void | Promise<void>;
}

/** What PinCodeRegister renders and the SetPin handler of its keypad. */
export interface PinCodeRegisterFlow {
  /** IsFirstUse: True for the first entry (RegistrationText), False for the confirmation (ConfirmationText). */
  isFirstUse: boolean;
  /** OnSetPin: the SetPin event of the keypad, with the entered PIN. */
  onSetPin: (pinCode: string) => Promise<void>;
}

/** The flows of Pincode_Register: the PIN is entered twice (knowledge/auth.md "PINRegister").
    - OnInitialize: signed out → PinRegistrationError("User not logged in.").
    - OnSetPin, first entry: PIN_ValidateRules; valid → keep the PIN and ShowConfirm (IsFirstUse = False) after a 0 ms
      timeout (DelayChangeJS); invalid → PinRegistrationError(rule message). Second entry: the same PIN → PIN_Set,
      PIN_SessionInactivity_Start and PIN_HasUnlocked (`registerPin`; LockHost restarts the timer), then
      PinRegistrationSuccess; another PIN → PinRegistrationError("Confirm PIN does not match Register PIN!").
    - OnDestroy: clears the pending timeout (ClearTimeOutsJS).
    `enabled` False: the block is not on the screen yet (PINChange shows it after the unlock). OnInitialize runs when
    `enabled` turns True, and OnDestroy when it turns False or the caller unmounts.
    @origin UBT_AppManager.PIN.Pincode_Register */
export function usePinCodeRegister(events: PinCodeRegisterEvents, enabled = true): PinCodeRegisterFlow {
  const [isFirstUse, setIsFirstUse] = useState(true);
  const model = useRef({ isFirstUse: true, newPinCode: '' });
  const switchScreen = useRef<number | undefined>(undefined);
  const eventsRef = useRef(events);
  useLayoutEffect(() => {
    eventsRef.current = events;
  });
  useEffect(() => {
    if (!enabled) return;
    if (currentUserId() === null) void eventsRef.current.onPinRegistrationError?.('User not logged in.');
    const timeout = switchScreen;
    return () => {
      window.clearTimeout(timeout.current);
    };
  }, [enabled]);

  const showConfirm = () => {
    model.current.isFirstUse = false;
    setIsFirstUse(false);
  };
  const onSetPin = async (pinCode: string) => {
    if (model.current.isFirstUse) {
      const rules = pIN_ValidateRules(pinCode);
      if (rules.IsValid) {
        model.current.newPinCode = pinCode;
        switchScreen.current = window.setTimeout(showConfirm, 0);
      } else {
        await eventsRef.current.onPinRegistrationError?.(rules.Message);
      }
    } else if (pinCode === model.current.newPinCode) {
      await registerPin(pinCode);
      await eventsRef.current.onPinRegistrationSuccess?.();
    } else {
      await eventsRef.current.onPinRegistrationError?.('Confirm PIN does not match Register PIN!');
    }
  };

  return { isFirstUse, onSetPin };
}
