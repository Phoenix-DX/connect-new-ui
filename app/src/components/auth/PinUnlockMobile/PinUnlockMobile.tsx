/** @origin UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper */
// @os-block UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper
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
  inForceVisible?: boolean;
  inAllowBackNavigation?: boolean;
  inHideFingerprint?: boolean;
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
  /** Event PinUnlockSuccess (PIN or fingerprint). */
  onPinUnlockSuccess?: () => void | Promise<void>;
  /** Event PincodeChange(InputLength). */
  onPincodeChange?: (inputLength: number) => void | Promise<void>;
  /** Event KeyPressed. */
  onKeyPressed?: () => void | Promise<void>;
  /** Event UserLoggedOut. */
  onUserLoggedOut?: () => void | Promise<void>;
  /** Event PinUnlockError(ErrorMessage). */
  onPinUnlockError?: (errorMessage: string) => void | Promise<void>;
  /** Event Timeout. */
  onTimeout?: () => void | Promise<void>;
}

/** AppManager_GetPIN_FingerprintReaderAvailable: no fingerprint reader in a browser (biometric unlock hidden on the
    web, decision U13; the captured PINUnlock / PINChange Option placeholders are empty). */
const fingerprintReaderAvailable = (): boolean => false;

/** Pincode_Unlock with the fingerprint button in its Option placeholder
    (p:UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js view). Every event is forwarded; the scanner's
    Unlock / UnlockError raise PinUnlockSuccess / PinUnlockError. The option container shows only with a reader and
    not In_HideFingerprint. */
export function PinUnlockMobile({
  id,
  inPinLength = 0,
  inExtendedClasses = '',
  inIsScanFingerprintOnReady = false,
  inForceVisible = false,
  inAllowBackNavigation = false,
  inHideFingerprint = false,
  placeholderHeaderBar,
  placeholderTitlePlaceholder,
  placeholderUnlockText,
  placeholderFingerprintIcon,
  placeholderEraseButton,
  placeholderBottomKeyboard,
  placeholderContent,
  onPinUnlockSuccess,
  onPincodeChange,
  onKeyPressed,
  onUserLoggedOut,
  onPinUnlockError,
  onTimeout,
}: PinUnlockMobileProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  return (
    <OSBlock name="Fingerprint.PinUnlock_MobileWrapper" id={id}>
      <PinCodeUnlock
        id={childId(1)}
        inPinLength={inPinLength}
        inForceVisible={inForceVisible}
        inExtendedClasses={inExtendedClasses}
        inAllowBackNavigation={inAllowBackNavigation}
        onPinUnlockSuccess={onPinUnlockSuccess}
        onPincodeChange={onPincodeChange}
        onKeyPressed={onKeyPressed}
        onUserLoggedOut={onUserLoggedOut}
        onPinUnlockError={onPinUnlockError}
        onTimeout={onTimeout}
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
