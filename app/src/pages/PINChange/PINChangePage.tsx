import { OSLink } from '@/shared/lib/OSLink';
import { PinRegisterContent } from '@/components/auth/PinRegisterContent';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { LoginLayout } from '@/components/layout/LoginLayout';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { PinUnlockContentContainer, useNoCommonUi } from '@/platform/feedback/dialogs';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { usePinRegisterContent } from '@/platform/session/usePinRegisterContent';
import { usePINChange } from './hooks/usePINChange';

/** @origin UBTConnect.App_PIN.PINChange
    The PIN change route of the menu: the login layout with its overlay (local UseOverlay = True) and the class
    `ubt-lock-screen` until the screen is unlocked, and the "Change PIN" link (IconText with the ArrowLeftAlt icon) as
    header.
    - Content before the unlock: Block_PINUnlock_ContentWrapper ("Enter your current PIN", from the menu, ForceVisible,
      no Forgot PIN, no policy, no Need help). Its Unlock and NavigateTo_PINRegister events both unlock the screen.
    - Content after the unlock: Block_PINRegister_ContentWrapper ("Enter new PIN", "Confirm new PIN", from the menu).
      No capture shows it.
    - The CommonUI placeholder of the layout is empty, so the page calls `useNoCommonUi()` (shell guide).
    The screen flows are in `usePINChange`, the flows of the register block in `usePinRegisterContent`. */
export default function PINChange() {
  useNoCommonUi();
  const useOverlay = true;
  const { isScreenUnlocked, onClickBackToLogin, onUnlock } = usePINChange();
  // Block_PINRegister_ContentWrapper is on the screen only after the unlock: its flows wait for it.
  const registration = usePinRegisterContent({ isFromMenu: true, enabled: isScreenUnlocked });

  return (
    <LoginLayout
      id="$b1"
      inHasOverlay={useOverlay}
      inExtendedClass={isScreenUnlocked ? '' : 'ubt-lock-screen'}
      placeholderHeader={
        <OSLink onClick={onClickBackToLogin}>
          <IconText
            id="$b2"
            text="Change PIN"
            spacingSize={UBT_Size.Small}
            textOptions={{
              Color: UBT_Color.Inherit,
              FontSize: UBT_FontSize.Small,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
          >
            <Icon
              id="$b3"
              inColorId={UBT_Color.Inherit}
              inSizeId={UBT_IconsSize.Base_24}
              inIconId={UBT_Icons2.ArrowLeftAlt}
            />
          </IconText>
        </OSLink>
      }
      placeholderContent={
        isScreenUnlocked ? (
          <PinRegisterContent
            id="$b4"
            registerText="Enter new PIN"
            confirmText="Confirm new PIN"
            isFromMenu
            useOverlay={useOverlay}
            isFirstUse={registration.isFirstUse}
            onSetPin={registration.onSetPin}
            onBeforeSetPin={registration.onBeforeSetPin}
            renderPreventBackNavigation={(blockId) => <PreventBackNavigation id={blockId} />}
          />
        ) : (
          <PinUnlockContentContainer
            id="$b5"
            showForgotPIN={false}
            inForceVisible
            showPolicy={false}
            useOverlay={useOverlay}
            unlockText="Enter your current PIN"
            showNeedHelp={false}
            isFromMenu
            onUnlock={onUnlock}
            onNavigateToPINRegister={onUnlock}
          />
        )
      }
    />
  );
}
