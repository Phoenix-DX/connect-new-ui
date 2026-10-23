/** @origin UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PinCodeUnlock } from '@/components/auth/PinCodeUnlock';
import { FingerprintScanner } from '@/components/auth/FingerprintScanner';

export interface PinUnlockMobileProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inPinLength?: number;
  inExtendedClasses?: string;
  inIsScanFingerprintOnReady?: boolean;
  inAllowBackNavigation?: boolean;
  inHideFingerprint?: boolean;
  /** Pincode_Unlock shows the keypad (`usePinCodeUnlock`, from In_ForceVisible and the lock state). */
  isKeypadVisible?: boolean;
  /** Placeholder Placeholder_HeaderBar. */
  placeholderHeaderBar?: ReactNode;
  /** Placeholder Placeholder_TitlePlaceholder. */
  placeholderTitlePlaceholder?: ReactNode;
  /** Placeholder Placeholder_UnlockText. */
  placeholderUnlockText?: ReactNode;
  /** Placeholder Placeholder_FingerprintIcon. */
  placeholderFingerprintIcon?: ReactNode;
  /** Placeholder Placeholder_EraseButton. */
  placeholderEraseButton?: ReactNode;
  /** Placeholder Placeholder_BottomKeyboard. */
  placeholderBottomKeyboard?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
  /** SetPin of the Pincode_Unlock keypad (its flow: `usePinCodeUnlock` onSetPin). */
  onSetPin?: (pinCode: string) => void | Promise<void>;
  /** The InactivityTimer block of Pincode_Unlock, with its instance id. */
  renderInactivityTimer?: (id: string | undefined) => ReactNode;
  /** Event PinUnlockSuccess of the fingerprint scanner (Unlock). The keypad's success comes from its flow. */
  onPinUnlockSuccess?: () => void | Promise<void>;
  /** Event PincodeChange(InputLength). */
  onPincodeChange?: (inputLength: number) => void | Promise<void>;
  /** Event KeyPressed. */
  onKeyPressed?: () => void | Promise<void>;
  /** Event PinUnlockError(ErrorMessage) of the fingerprint scanner (UnlockError). The keypad's errors come from its flow. */
  onPinUnlockError?: (errorMessage: string) => void | Promise<void>;
}

/** AppManager_GetPIN_FingerprintReaderAvailable: no fingerprint reader in a browser (biometric unlock hidden on the
    web, decision U13; the captured PINUnlock / PINChange Option placeholders are empty). */
const fingerprintReaderAvailable = (): boolean => false;

/** Pincode_Unlock with the fingerprint button in its Option placeholder. The keypad events and the InactivityTimer go
    to Pincode_Unlock; the scanner's Unlock / UnlockError raise PinUnlockSuccess / PinUnlockError. The option container
    shows only with a reader and not In_HideFingerprint. */
export function PinUnlockMobile({
  id,
  inPinLength = 0,
  inExtendedClasses = '',
  inIsScanFingerprintOnReady = false,
  inAllowBackNavigation = false,
  inHideFingerprint = false,
  isKeypadVisible = false,
  placeholderHeaderBar,
  placeholderTitlePlaceholder,
  placeholderUnlockText,
  placeholderFingerprintIcon,
  placeholderEraseButton,
  placeholderBottomKeyboard,
  placeholderContent,
  onSetPin,
  renderInactivityTimer,
  onPinUnlockSuccess,
  onPincodeChange,
  onKeyPressed,
  onPinUnlockError,
}: PinUnlockMobileProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  return (
    <OSBlock name="Fingerprint.PinUnlock_MobileWrapper" id={id}>
      <PinCodeUnlock
        id={childId(1)}
        inPinLength={inPinLength}
        isKeypadVisible={isKeypadVisible}
        inExtendedClasses={inExtendedClasses}
        inAllowBackNavigation={inAllowBackNavigation}
        onSetPin={onSetPin}
        renderInactivityTimer={renderInactivityTimer}
        onPincodeChange={onPincodeChange}
        onKeyPressed={onKeyPressed}
        headerBar={<div>{placeholderHeaderBar}</div>}
        titlePlaceholder={<div>{placeholderTitlePlaceholder}</div>}
        unlockText={<div>{placeholderUnlockText}</div>}
        option={
          fingerprintReaderAvailable() &&
          !inHideFingerprint && (
            <div data-container="">
              <FingerprintScanner
                id={childId(2)}
                inIsScanOnReady={inIsScanFingerprintOnReady}
                onUnlock={() => void onPinUnlockSuccess?.()}
                onUnlockError={(message) => void onPinUnlockError?.(message)}
              >
                <div>{placeholderFingerprintIcon}</div>
              </FingerprintScanner>
            </div>
          )
        }
        eraseButton={<div>{placeholderEraseButton}</div>}
        placeholderBottomKeyboard={<div>{placeholderBottomKeyboard}</div>}
        contentPlaceholder={<div>{placeholderContent}</div>}
      />
    </OSBlock>
  );
}
