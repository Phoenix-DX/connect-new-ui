import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { OSLink } from '@/shared/lib/OSLink';
import { PinCodeRegister } from '@/components/auth/PinCodeRegister';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface PinRegisterContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UseOverlay: white logo and `ubt-pin-overlay` (default True). */
  useOverlay?: boolean;
  /** isFromMenu: PIN change from the menu (back allowed, no "Need help?"). */
  isFromMenu?: boolean;
  registerText?: string;
  confirmText?: string;
  /** EnableName: "Welcome <UserName>" above the texts, which turn regular. */
  enableName?: boolean;
  /** UserName of OnInitialize (EnableName only). */
  userName?: string;
  /** IsFirstUse of Pincode_Register: the register text, else the confirm text. */
  isFirstUse?: boolean;
  /** OnSetPin: the SetPin event of the keypad, with the entered PIN. */
  onSetPin?: (pinCode: string) => void | Promise<void>;
  /** The keypad runs it before SetPin: ReplaceOnUpcomingNavigation (`usePinRegisterContent` onBeforeSetPin). */
  onBeforeSetPin?: () => void;
  /** The PreventBackNavigation block of the keypad (platform/navigation), with its instance id. */
  renderPreventBackNavigation?: (id: string | undefined) => ReactNode;
}

/** Registration content of PINRegister and PINChange: Pincode_Register (PIN length 4) with the Connect logo, the
    register and confirm texts (with "Welcome <UserName>" when EnableName is set), the erase icon and "Need help?
    Contact Us" unless isFromMenu. The flows (OnInitialize, PinRegistrationSuccess, PinRegistrationError and the flows
    of Pincode_Register) are `usePinRegisterContent` of `platform/session`, which gives `userName`, `isFirstUse`,
    `onSetPin` and `onBeforeSetPin`. The page gives the PreventBackNavigation block.
    @origin UBTConnect.App_PIN.Block_PINRegister_ContentWrapper */
export function PinRegisterContent({
  id,
  useOverlay = true,
  isFromMenu = false,
  registerText = 'Register a PIN code',
  confirmText = 'Confirm PIN code',
  enableName = false,
  userName = '',
  isFirstUse = true,
  onSetPin,
  onBeforeSetPin,
  renderPreventBackNavigation,
}: PinRegisterContentProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const welcome = (n: number) =>
    enableName && (
      <CustomText
        id={childId(n)}
        inText={`Welcome ${userName}`}
        inTextOptions={{ Color: UBT_Color.Inherit, FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
      />
    );
  const textOptions = {
    Color: UBT_Color.Inherit,
    FontSize: UBT_FontSize.Base,
    FontWeight: enableName ? UBT_FontWeight.Regular : UBT_FontWeight.SemiBold,
  };

  return (
    <OSBlock name="App_PIN.Block_PINRegister_ContentWrapper" id={id}>
      <PinCodeRegister
        id={childId(1)}
        inAllowBackNavigation={isFromMenu}
        inPinLength={4}
        inExtendedClasses={`connect-pin-screen${useOverlay ? ' ubt-pin-overlay' : ''}`}
        isFirstUse={isFirstUse}
        onSetPin={onSetPin}
        onBeforeSetPin={onBeforeSetPin}
        renderPreventBackNavigation={renderPreventBackNavigation}
        titlePlaceholder={
          <img
            className="login-screen__connect-logo"
            data-image=""
            src={osImage(useOverlay ? 'img/UBTConnect.ConnectLogoWhite.svg' : 'img/UBTConnect.ConnectLogo.svg')}
          />
        }
        registrationText={
          <>
            {welcome(2)}
            <CustomText id={childId(3)} inTextOptions={textOptions} inText={registerText} />
          </>
        }
        confirmationText={
          <>
            {welcome(4)}
            <CustomText id={childId(5)} inTextOptions={textOptions} inText={confirmText} />
          </>
        }
        erasePlaceholder={
          <Icon
            id={childId(6)}
            inSizeId={UBT_IconsSize.Display_36}
            inIconId={UBT_Icons2.Backspace}
            inColorId={UBT_Color.Inherit}
          />
        }
        contentPlaceholder={
          !isFromMenu && (
            <CustomContainer id={childId(7)} options={{ TextOptions: { Color: UBT_Color.Neutral10 } }}>
              Need help?{' '}
              <OSLink
                className="font-regular text-underline"
                style={{ marginLeft: '0px' }}
                url="/UBTConnect/ContactUsMenu"
              >
                Contact Us
              </OSLink>
            </CustomContainer>
          )
        }
      />
    </OSBlock>
  );
}
