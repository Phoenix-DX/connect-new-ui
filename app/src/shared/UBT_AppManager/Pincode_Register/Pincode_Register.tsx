// @os-block UBT_AppManager.PIN.Pincode_Register
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { registerPin } from '@/platform/session/pin';
import { currentUserId } from '@/platform/session/session';
import { pIN_ValidateRules } from '../lib/actions';
import { PinCode } from '../PinCode';

export interface Pincode_RegisterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inPinLength?: number;
  inExtendedClasses?: string;
  inAllowBackNavigation?: boolean;
  /** Placeholder HeaderBar. */
  headerBar?: ReactNode;
  /** Placeholder TitlePlaceholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder RegistrationText (first entry). */
  registrationText?: ReactNode;
  /** Placeholder ConfirmationText (second entry). */
  confirmationText?: ReactNode;
  /** Placeholder OptionPlaceholder. */
  optionPlaceholder?: ReactNode;
  /** Placeholder ErasePlaceholder. */
  erasePlaceholder?: ReactNode;
  /** Placeholder ContentPlaceholder. */
  contentPlaceholder?: ReactNode;
  /** Event KeyPressed. */
  onKeyPressed?: () => void | Promise<void>;
  /** Event PinRegistrationSuccess. */
  onPinRegistrationSuccess?: () => void | Promise<void>;
  /** Event PinRegistrationError(ErrorMessage). */
  onPinRegistrationError?: (errorMessage: string) => void | Promise<void>;
}

/** PIN registration, entered twice (p:UBT_AppManager.PIN.Pincode_Register.mvc.js; knowledge/auth.md "PINRegister").
    - OnInitialize: signed out → PinRegistrationError("User not logged in.").
    - OnSetPin, first entry: PIN_ValidateRules; valid → keep it and ShowConfirm (IsFirstUse = False) after a 0 ms
      timeout (DelayChangeJS), invalid → PinRegistrationError(rule message). Second entry: same PIN → PIN_Set,
      PIN_SessionInactivity_Start, PIN_HasUnlocked (the shell's `registerPin`; LockHost restarts the timer), then
      PinRegistrationSuccess; else PinRegistrationError("Confirm PIN does not match Register PIN!").
    - OnDestroy: clears the pending timeout (ClearTimeOutsJS). */
export function Pincode_Register({
  id,
  inPinLength = 0,
  inExtendedClasses = '',
  inAllowBackNavigation = false,
  headerBar,
  titlePlaceholder,
  registrationText,
  confirmationText,
  optionPlaceholder,
  erasePlaceholder,
  contentPlaceholder,
  onKeyPressed,
  onPinRegistrationSuccess,
  onPinRegistrationError,
}: Pincode_RegisterProps) {
  const [isFirstUse, setIsFirstUse] = useState(true);
  const model = useRef({ isFirstUse: true, newPinCode: '' });
  const switchScreen = useRef<number | undefined>(undefined);
  const events = useRef({ onPinRegistrationSuccess, onPinRegistrationError });
  useLayoutEffect(() => {
    events.current = { onPinRegistrationSuccess, onPinRegistrationError };
  });
  useEffect(() => {
    if (currentUserId() === null) void events.current.onPinRegistrationError?.('User not logged in.');
    const timeout = switchScreen;
    return () => {
      window.clearTimeout(timeout.current);
    };
  }, []);

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
        await events.current.onPinRegistrationError?.(rules.Message);
      }
    } else if (pinCode === model.current.newPinCode) {
      await registerPin(pinCode);
      await events.current.onPinRegistrationSuccess?.();
    } else {
      await events.current.onPinRegistrationError?.('Confirm PIN does not match Register PIN!');
    }
  };

  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="PIN.Pincode_Register" id={id}>
      <div className="pincode-registration" data-container="" style={{ textAlign: 'center' }}>
        <PinCode
          id={prefix === undefined ? undefined : `${prefix}-$b1`}
          length={inPinLength}
          inExtendedClasses={inExtendedClasses}
          inAllowBackNavigation={inAllowBackNavigation}
          onKeyPressed={onKeyPressed}
          onSetPin={onSetPin}
          headerBar={
            <div data-container="" style={{ textAlign: 'left' }}>
              <div>{headerBar}</div>
            </div>
          }
          titlePlaceholder={<div>{titlePlaceholder}</div>}
          message={isFirstUse ? <div>{registrationText}</div> : <div>{confirmationText}</div>}
          option={<div className="pincode-button">{optionPlaceholder}</div>}
          erasePlaceholder={<div>{erasePlaceholder}</div>}
          contentPlaceholder={<div className="content-placeholder">{contentPlaceholder}</div>}
        />
      </div>
    </OSBlock>
  );
}
