/** @origin UBT_AppManager.PIN.Pincode_Unlock */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PinCode } from '@/components/auth/PinCode';

export interface PinCodeUnlockProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inPinLength?: number;
  inExtendedClasses?: string;
  inAllowBackNavigation?: boolean;
  /** The keypad shows (In_ForceVisible, or PIN_SessionInactivity_Use and PIN_IsLocked); else the InactivityTimer. */
  isKeypadVisible?: boolean;
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
  /** Event PincodeChange(InputLength). */
  onPincodeChange?: (inputLength: number) => void | Promise<void>;
  /** SetPin of the keypad: the block's flow checks the PIN (`usePinCodeUnlock` in platform/session). */
  onSetPin?: (pinCode: string) => void | Promise<void>;
  /** The InactivityTimer block (platform/session), with its instance id; shown while the keypad is hidden. */
  renderInactivityTimer?: (id: string | undefined) => ReactNode;
}

/** PIN unlock: the keypad (PinCode) inside `pincode-unlock` while it shows, else the InactivityTimer. The flows
    (initialize, In_ForceVisible, the PIN check, the timeout) are in the hook `usePinCodeUnlock`; the component that
    renders this block calls it and passes `isKeypadVisible` and `onSetPin`. */
export function PinCodeUnlock({
  id,
  inPinLength = 0,
  inExtendedClasses = '',
  inAllowBackNavigation = false,
  isKeypadVisible = false,
  headerBar,
  titlePlaceholder,
  unlockText,
  option,
  eraseButton,
  placeholderBottomKeyboard,
  contentPlaceholder,
  onKeyPressed,
  onPincodeChange,
  onSetPin,
  renderInactivityTimer,
}: PinCodeUnlockProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  return (
    <OSBlock name="PIN.Pincode_Unlock" id={id}>
      {isKeypadVisible ? (
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
        renderInactivityTimer?.(childId(2))
      )}
    </OSBlock>
  );
}
