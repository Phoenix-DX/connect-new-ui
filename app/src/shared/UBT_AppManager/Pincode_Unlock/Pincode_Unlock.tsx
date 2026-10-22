// @os-block UBT_AppManager.PIN.Pincode_Unlock
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { lock, verifyPin, type PinUnlockError } from '@/platform/session/pin';
import { currentUserId, useClientVar } from '@/platform/session/session';
import { InactivityTimer } from '../InactivityTimer';
import { PinCode } from '../PinCode';

export interface Pincode_UnlockProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inPinLength?: number;
  inExtendedClasses?: string;
  /** In_ForceVisible: show the keypad even when not locked; when it turns on, the app is locked. */
  inForceVisible?: boolean;
  inAllowBackNavigation?: boolean;
  /** Placeholder HeaderBar. */
  headerBar?: ReactNode;
  /** Placeholder TitlePlaceholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder UnlockText. */
  unlockText?: ReactNode;
  /** Placeholder Option. */
  option?: ReactNode;
  /** Placeholder EraseButton. */
  eraseButton?: ReactNode;
  /** Placeholder Placeholder_BottomKeyboard. */
  placeholderBottomKeyboard?: ReactNode;
  /** Placeholder ContentPlaceholder. */
  contentPlaceholder?: ReactNode;
  /** Event KeyPressed. */
  onKeyPressed?: () => void | Promise<void>;
  /** Event PinUnlockSuccess. */
  onPinUnlockSuccess?: () => void | Promise<void>;
  /** Event PinUnlockError(ErrorMessage): the original texts (`shell/pin.ts` PinUnlockError). */
  onPinUnlockError?: (errorMessage: PinUnlockError) => void | Promise<void>;
  /** Event PincodeChange(InputLength). */
  onPincodeChange?: (inputLength: number) => void | Promise<void>;
  /** Event UserLoggedOut: no signed-in user on initialize. */
  onUserLoggedOut?: () => void | Promise<void>;
  /** Event Timeout (of the InactivityTimer). */
  onTimeout?: () => void | Promise<void>;
}

/** PIN unlock (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js). The keypad shows when In_ForceVisible or
    PIN_SessionInactivity_Use and PIN_IsLocked (:191-196), else the InactivityTimer (:349-381).
    - OnInitialize (:684-760): signed out → UserLoggedOut; else Action_HandleForceVisible (LastForceVisible =
      In_ForceVisible; True → PIN_IsLocked = True). OnParametersChanged calls it again when In_ForceVisible changed.
    - OnSetPin (:508-612): the shell's `verifyPin` (PIN_Get and the comparison) → OnUnlockSuccess (PinUnlockSuccess,
      PIN_HasUnlocked, PIN_IsLocked = False, LastForceVisible = False) or PinUnlockError with the original text.
    - OnTimeout (:652-682): Timeout, then PIN_IsLocked = True. */
export function Pincode_Unlock({
  id,
  inPinLength = 0,
  inExtendedClasses = '',
  inForceVisible = false,
  inAllowBackNavigation = false,
  headerBar,
  titlePlaceholder,
  unlockText,
  option,
  eraseButton,
  placeholderBottomKeyboard,
  contentPlaceholder,
  onKeyPressed,
  onPinUnlockSuccess,
  onPinUnlockError,
  onPincodeChange,
  onUserLoggedOut,
  onTimeout,
}: Pincode_UnlockProps) {
  const inactivityUse = useClientVar('UBT_AppManager.PIN_SessionInactivity_Use');
  const isLocked = useClientVar('UBT_AppManager.PIN_IsLocked');
  const events = useRef({ onPinUnlockSuccess, onPinUnlockError, onUserLoggedOut, onTimeout });
  useLayoutEffect(() => {
    events.current = { onPinUnlockSuccess, onPinUnlockError, onUserLoggedOut, onTimeout };
  });
  const initialized = useRef(false);
  const lastForceVisible = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (currentUserId() === null) {
        void events.current.onUserLoggedOut?.();
        return;
      }
    } else if (inForceVisible === lastForceVisible.current) return;
    lastForceVisible.current = inForceVisible; // Action_HandleForceVisible
    if (inForceVisible) lock();
  }, [inForceVisible]);

  const onSetPin = async (pinCode: string) => {
    const result = await verifyPin(pinCode);
    if (result.status === 'unlocked') {
      await events.current.onPinUnlockSuccess?.();
      lastForceVisible.current = false;
    } else {
      await events.current.onPinUnlockError?.(result.error);
    }
  };
  const onTimeoutHandler = async () => {
    await events.current.onTimeout?.();
    lock();
  };

  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  return (
    <OSBlock name="PIN.Pincode_Unlock" id={id}>
      {inForceVisible || (inactivityUse && isLocked) ? (
        <div className="pincode-unlock" data-container="">
          <PinCode
            id={childId(1)}
            length={inPinLength}
            inExtendedClasses={inExtendedClasses}
            inAllowBackNavigation={inAllowBackNavigation}
            onKeyPressed={onKeyPressed}
            onSetPin={onSetPin}
            onPincodeChange={onPincodeChange}
            headerBar={<div>{headerBar}</div>}
            titlePlaceholder={<div>{titlePlaceholder}</div>}
            message={<div>{unlockText}</div>}
            option={<div>{option}</div>}
            erasePlaceholder={<div>{eraseButton}</div>}
            placeholderBottomKeyboard={<div>{placeholderBottomKeyboard}</div>}
            contentPlaceholder={<div className="content-placeholder">{contentPlaceholder}</div>}
          />
        </div>
      ) : (
        <InactivityTimer id={childId(2)} onTimeout={() => void onTimeoutHandler()} />
      )}
    </OSBlock>
  );
}
