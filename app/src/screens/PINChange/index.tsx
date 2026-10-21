import { useState } from 'react';
import { OSLink } from '../../shared/lib/OSLink';
import { Block_PINRegister_ContentWrapper } from '../../shared/UBTConnect/Block_PINRegister_ContentWrapper';
import { Block_PINUnlock_ContentWrapper } from '../../shared/UBTConnect/Block_PINUnlock_ContentWrapper';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../shared/UBTConnectLibrary/IconText';
import { Layout_LoginFlow } from '../../shared/UBTConnectLibrary/Layout_LoginFlow';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { useNoCommonUi } from '../../shell/dialogs';
import { feedbackMessageAutoClose } from '../../shell/feedback';
import { allowUpcomingNavigation, useOsNavigate } from '../../shell/navigation';
import { APP_ID } from '../../shell/paths';

/** UBTConnect App_PIN.PINChange (p:UBTConnect.App_PIN.PINChange.mvc.js; view :122-326, controller :331-443).
    No input, no data action, no lifecycle handler (:61, 348, 427-431). Locals isScreenUnlocked = False, UseOverlay = True
    (:13-18).
    - Layout_LoginFlow In_HasOverlay = UseOverlay, In_ExtendedClass = If(isScreenUnlocked, "", "ubt-lock-screen")
      (:135-141); header: Link → IconText "Change PIN" (Small spacing, Inherit / Small / SemiBold) with Icon ArrowLeftAlt
      (Inherit, Base_24) (:159-238).
    - Content: isScreenUnlocked → Block_PINRegister_ContentWrapper ("Enter new PIN", "Confirm new PIN", isFromMenu, UseOverlay)
      (:239-262, not captured: Q1 → A pending); else Block_PINUnlock_ContentWrapper (no Forgot PIN, ForceVisible, no policy,
      UseOverlay, "Enter your current PIN", no Need help, isFromMenu) whose Unlock and NavigateTo_PINRegister both run
      Block_PINUnlockUnlock (:263-320).
    - Placeholder_CommonUI_Inside_Layout is empty (:321): no CommonUI, so `useNoCommonUi()` (shell guide). */
export default function PINChange() {
  useNoCommonUi();
  const navigate = useOsNavigate();
  const [isScreenUnlocked, setIsScreenUnlocked] = useState(false);
  const useOverlay = true;

  // OnClick_BackToLogin (:350-376): AllowUpcomingNavigation; Destination /UBTConnect/Menu (Default transition).
  const onClickBackToLogin = () => {
    allowUpcomingNavigation();
    navigate(`/${APP_ID}/Menu`);
  };

  // Block_PINUnlockUnlock (:377-404): isScreenUnlocked = True; FeedbackMessage_AutoClose("", "Please provide a new PIN",
  // Success, True, "", 0, False).
  const block_PINUnlockUnlock = () => {
    setIsScreenUnlocked(true);
    feedbackMessageAutoClose({
      title: '',
      message: 'Please provide a new PIN',
      messageType: 'success',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };

  return (
    <Layout_LoginFlow
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
          <Block_PINRegister_ContentWrapper
            id="$b4"
            registerText="Enter new PIN"
            confirmText="Confirm new PIN"
            isFromMenu
            useOverlay={useOverlay}
          />
        ) : (
          <Block_PINUnlock_ContentWrapper
            id="$b5"
            showForgotPIN={false}
            inForceVisible
            showPolicy={false}
            useOverlay={useOverlay}
            unlockText="Enter your current PIN"
            showNeedHelp={false}
            isFromMenu
            onUnlock={block_PINUnlockUnlock}
            onNavigateToPINRegister={block_PINUnlockUnlock}
          />
        )
      }
    />
  );
}
