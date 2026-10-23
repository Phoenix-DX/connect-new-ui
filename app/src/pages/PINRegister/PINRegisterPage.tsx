import { OSLink } from '@/shared/lib/OSLink';
import { PinRegisterContent } from '@/components/auth/PinRegisterContent';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { LoginLayout } from '@/components/layout/LoginLayout';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { usePinRegisterContent } from '@/platform/session/usePinRegisterContent';
import { usePINRegister } from './hooks/usePINRegister';
import { UBT_Icons2_ArrowLeftAlt, UBT_IconsSize_Base_24 } from './staticEntities';

/** @origin UBTConnect.App_PIN.PINRegister
    The PIN registration route after the first sign-in: the login layout with its overlay (local UseOverlay = True),
    the "Back to login" link (IconText with the ArrowLeftAlt icon) as header, Block_PINRegister_ContentWrapper with
    the user's name as content, and CommonUI_InsideLayout without the lock screen and the policy check. The screen
    flow is in `usePINRegister`, the flows of the block in `usePinRegisterContent`. */
export default function PINRegister() {
  const useOverlay = true;
  const { onClickBackToLogin } = usePINRegister();
  const registration = usePinRegisterContent({ enableName: true });

  return (
    <LoginLayout
      id="$b1"
      inHasOverlay={useOverlay}
      placeholderHeader={
        <OSLink
          onClick={() => {
            void onClickBackToLogin();
          }}
        >
          <IconText
            id="$b2"
            text="Back to login"
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
              inSizeId={UBT_IconsSize_Base_24}
              inIconId={UBT_Icons2_ArrowLeftAlt}
            />
          </IconText>
        </OSLink>
      }
      placeholderContent={
        <PinRegisterContent
          id="$b4"
          useOverlay={useOverlay}
          enableName
          userName={registration.userName}
          isFirstUse={registration.isFirstUse}
          onSetPin={registration.onSetPin}
          onBeforeSetPin={registration.onBeforeSetPin}
          renderPreventBackNavigation={(blockId) => <PreventBackNavigation id={blockId} />}
        />
      }
      placeholderCommonUIInsideLayout={
        <CommonUiLayout id="$b5" inShowLockScreen={false} inIgnorePolicy inIgnoreLockScreen />
      }
    />
  );
}
