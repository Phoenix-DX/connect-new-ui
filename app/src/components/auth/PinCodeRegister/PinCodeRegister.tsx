import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PinCode } from '@/components/auth/PinCode';

export interface PinCodeRegisterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inPinLength?: number;
  inExtendedClasses?: string;
  inAllowBackNavigation?: boolean;
  /** IsFirstUse: True shows RegistrationText (first entry), False shows ConfirmationText (second entry). */
  isFirstUse?: boolean;
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
  /** OnSetPin: the SetPin event of the keypad, with the entered PIN. */
  onSetPin?: (pinCode: string) => void | Promise<void>;
}

/** PIN registration, entered twice: the PinCode keypad (`pincode-registration`) with the registration text on the
    first entry and the confirmation text on the second. The flows (the PIN rules, the confirmation, the registration
    and the PinRegistrationSuccess and PinRegistrationError events) are `usePinCodeRegister` of `platform/session`,
    which gives `isFirstUse` and `onSetPin`.
    @origin UBT_AppManager.PIN.Pincode_Register */
export function PinCodeRegister({
  id,
  inPinLength = 0,
  inExtendedClasses = '',
  inAllowBackNavigation = false,
  isFirstUse = true,
  headerBar,
  titlePlaceholder,
  registrationText,
  confirmationText,
  optionPlaceholder,
  erasePlaceholder,
  contentPlaceholder,
  onKeyPressed,
  onSetPin,
}: PinCodeRegisterProps) {
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
