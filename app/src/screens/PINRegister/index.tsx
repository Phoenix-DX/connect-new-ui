import { OSLink } from '../../shared/lib/OSLink';
import { Block_PINRegister_ContentWrapper } from '../../shared/UBTConnect/Block_PINRegister_ContentWrapper';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../shared/UBTConnectLibrary/IconText';
import { Layout_LoginFlow } from '../../shared/UBTConnectLibrary/Layout_LoginFlow';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { signOut } from '@/platform/session/auth';
import { allowUpcomingNavigation, useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { UBT_Icons2_ArrowLeftAlt, UBT_IconsSize_Base_24 } from './components/staticEntities';

/** UBTConnect App_PIN.PINRegister (p:UBTConnect.App_PIN.PINRegister.mvc.js; view :137-286, controller :292-370).
    No input, no data action, no lifecycle handler (:309, 363-364). Local UseOverlay = True (:13-15).
    - Layout_LoginFlow In_HasOverlay = UseOverlay; header: Link → IconText "Back to login" (Small spacing, Inherit / Small /
      SemiBold) with Icon ArrowLeftAlt (Inherit, Base_24) (:155-231).
    - Content: Block_PINRegister_ContentWrapper (UseOverlay, EnableName True) (:237-241).
    - CommonUI_InsideLayout: In_ShowLockScreen False, In_IgnorePolicy True, In_IgnoreLockScreen True (:260-265). */
export default function PINRegister() {
  const navigate = useOsNavigate();
  const useOverlay = true;

  // OnClick_BackToLogin (:311-345): AllowUpcomingNavigation; AppManager_Logout (the shell's mock signOut(), as Login);
  // Destination /UBTConnect/Login.
  const onClickBackToLogin = async () => {
    allowUpcomingNavigation();
    await signOut();
    navigate(PATHS.login);
  };

  return (
    <Layout_LoginFlow
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
      placeholderContent={<Block_PINRegister_ContentWrapper id="$b4" useOverlay={useOverlay} enableName />}
      placeholderCommonUIInsideLayout={
        <CommonUI_InsideLayout id="$b5" inShowLockScreen={false} inIgnorePolicy inIgnoreLockScreen />
      }
    />
  );
}
