import { useEffect, useLayoutEffect, useRef } from 'react';
import { lock, verifyPin, type PinUnlockError } from '@/platform/session/pin';
import { currentUserId, useClientVar } from '@/platform/session/session';

/** The events of Pincode_Unlock that its flows raise. */
export interface PinCodeUnlockEvents {
  /** Event PinUnlockSuccess: the right PIN. */
  onPinUnlockSuccess?: () => void | Promise<void>;
  /** Event PinUnlockError(ErrorMessage): the original texts (`pin.ts` PinUnlockError). */
  onPinUnlockError?: (errorMessage: PinUnlockError) => void | Promise<void>;
  /** Event UserLoggedOut: no signed-in user on initialize. */
  onUserLoggedOut?: () => void | Promise<void>;
  /** Event Timeout (of the InactivityTimer), raised before the app is locked. */
  onTimeout?: () => void | Promise<void>;
}

/** What the PinCodeUnlock component renders and the events it passes on. */
export interface PinCodeUnlockState {
  /** The keypad shows: In_ForceVisible, or PIN_SessionInactivity_Use and PIN_IsLocked; else the InactivityTimer. */
  isKeypadVisible: boolean;
  /** SetPin of the keypad: checks the PIN, then raises PinUnlockSuccess or PinUnlockError. */
  onSetPin: (pinCode: string) => Promise<void>;
  /** Timeout of the InactivityTimer: raises Timeout, then locks the app. */
  onTimeout: () => Promise<void>;
}

/** The flows of the PIN unlock block. Call it in the component that renders PinCodeUnlock, so that the flows start
    and stop with the block.
    - OnInitialize: nobody signed in → UserLoggedOut; else Action_HandleForceVisible (LastForceVisible =
      In_ForceVisible; True → PIN_IsLocked = True). OnParametersChanged runs it again when In_ForceVisible changed.
    - OnSetPin: `verifyPin` (PIN_Get and the comparison) → PinUnlockSuccess (verifyPin already set PIN_HasUnlocked and
      PIN_IsLocked = False), then LastForceVisible = False; or PinUnlockError with the original text.
    - OnTimeout: Timeout, then PIN_IsLocked = True.
    @origin UBT_AppManager.PIN.Pincode_Unlock */
export function usePinCodeUnlock(inForceVisible: boolean, events: PinCodeUnlockEvents): PinCodeUnlockState {
  const inactivityUse = useClientVar('UBT_AppManager.PIN_SessionInactivity_Use');
  const isLocked = useClientVar('UBT_AppManager.PIN_IsLocked');
  const latest = useRef(events);
  useLayoutEffect(() => {
    latest.current = events;
  });
  const initialized = useRef(false);
  const lastForceVisible = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (currentUserId() === null) {
        void latest.current.onUserLoggedOut?.();
        return;
      }
    } else if (inForceVisible === lastForceVisible.current) return;
    lastForceVisible.current = inForceVisible; // Action_HandleForceVisible
    if (inForceVisible) lock();
  }, [inForceVisible]);

  const onSetPin = async (pinCode: string) => {
    const result = await verifyPin(pinCode);
    if (result.status === 'unlocked') {
      await latest.current.onPinUnlockSuccess?.();
      lastForceVisible.current = false;
    } else {
      await latest.current.onPinUnlockError?.(result.error);
    }
  };
  const onTimeout = async () => {
    await latest.current.onTimeout?.();
    lock();
  };

  return { isKeypadVisible: inForceVisible || (inactivityUse && isLocked), onSetPin, onTimeout };
}
