import { PinUnlockContent } from '@/components/auth/PinUnlockContent';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { InactivityTimer } from '@/platform/session/InactivityTimer';
import { usePinCodeUnlock } from '@/platform/session/usePinCodeUnlock';
import { usePinUnlockContent } from '@/platform/session/usePinUnlockContent';
import { PoliciesCacheControl } from '@/legacy/os/cache/PoliciesCacheControl';

export interface PinUnlockContentContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UseOverlay: white logo and `ubt-pin-overlay` (default True). */
  useOverlay?: boolean;
  /** In_ForceVisible of Pincode_Unlock: the keypad shows without PIN_IsLocked, and the app is locked. */
  inForceVisible?: boolean;
  unlockText?: string;
  showNeedHelp?: boolean;
  /** isFromMenu: PIN change from the menu (back allowed, no fingerprint). */
  isFromMenu?: boolean;
  showForgotPIN?: boolean;
  showPolicy?: boolean;
  /** Event Unlock. */
  onUnlock?: () => void | Promise<void>;
  /** Event NavigateTo_PINRegister ("User not found"). */
  onNavigateToPINRegister?: () => void | Promise<void>;
}

/** The PIN unlock content with its flows, for the lock dialog (BlockPinUnlock) and PINChange. It runs the hooks of
    the content and of its Pincode_Unlock, and renders PinUnlockContent with their result, the InactivityTimer,
    CacheControl_Policies and the PreventBackNavigation block of the keypad (plan v2 §2.3 criterion 2). The flows start and stop with this block, as the block's own
    flows did: the lock dialog does not render it for an unsupported system.
    @origin UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper */
export function PinUnlockContentContainer({
  id,
  useOverlay = true,
  inForceVisible = false,
  unlockText = 'Enter your PIN code',
  showNeedHelp = false,
  isFromMenu = false,
  showForgotPIN = false,
  showPolicy = false,
  onUnlock,
  onNavigateToPINRegister,
}: PinUnlockContentContainerProps) {
  const content = usePinUnlockContent({ isFromMenu, onNavigateToPINRegister });
  const unlock = usePinCodeUnlock(inForceVisible, {
    onPinUnlockSuccess: onUnlock,
    onPinUnlockError: content.onPinUnlockError,
  });
  return (
    <PinUnlockContent
      id={id}
      useOverlay={useOverlay}
      unlockText={unlockText}
      showNeedHelp={showNeedHelp}
      isFromMenu={isFromMenu}
      showForgotPIN={showForgotPIN}
      showPolicy={showPolicy}
      showFingerprintReader={content.showFingerprintReader}
      isKeypadVisible={unlock.isKeypadVisible}
      policies={content.policies}
      isPoliciesFetched={content.isPoliciesFetched}
      renderCacheControlPolicies={(blockId) => (
        <PoliciesCacheControl id={blockId} onResult={content.onPoliciesResult} />
      )}
      renderInactivityTimer={(blockId) => <InactivityTimer id={blockId} onTimeout={() => void unlock.onTimeout()} />}
      renderPreventBackNavigation={(blockId) => <PreventBackNavigation id={blockId} />}
      onSetPin={unlock.onSetPin}
      onBeforeSetPin={unlock.onBeforeSetPin}
      onPinUnlockSuccess={onUnlock}
      onPinUnlockError={content.onPinUnlockError}
      onForgotPin={content.onForgotPin}
      onClickPolicy={content.onClickPolicy}
    />
  );
}
