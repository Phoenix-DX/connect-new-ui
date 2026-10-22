// @os-block UBT_AppManager_Mobile.Fingerprint.FingerprintScanner
import type { ReactNode } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface FingerprintScannerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsScanOnReady (input passed by PinUnlock_MobileWrapper). */
  inIsScanOnReady?: boolean;
  /** Placeholder Content (the fingerprint icon). */
  children?: ReactNode;
  /** Event Unlock. */
  onUnlock?: () => void;
  /** Event UnlockError(Event_ErrorMessage). */
  onUnlockError?: (eventErrorMessage: string) => void;
}

/** Native biometric scan. Neither its DOM nor its compiled code was captured (survey only): PinUnlock_MobileWrapper
    renders it only when AppManager_GetPIN_FingerprintReaderAvailable, which is never the case on the web (biometric
    unlock hidden, decision U13). The inputs and events are those the wrapper passes
    (p:UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js view). */
export function FingerprintScanner({ id, children }: FingerprintScannerProps) {
  return (
    <OSBlock name="Fingerprint.FingerprintScanner" id={id}>
      <NotCaptured name="FingerprintScanner (native biometric scan, hidden on the web: U13)">{children}</NotCaptured>
    </OSBlock>
  );
}
