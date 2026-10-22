// @os-block UBTConnect.App_PIN.Block_PINRegister_ContentWrapper
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { replaceOnUpcomingNavigation, TransitionAnimation, useOsNavigate } from '@/platform/navigation';
import { APP_ID, PATHS } from '@/platform/navigation/paths';
import { getResumeLoginLink } from '@/platform/session/resume';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { OSLink } from '@/shared/lib/OSLink';
import { useScreenController_NavigateToPage } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { Pincode_Register } from '@/shared/UBT_AppManager/Pincode_Register';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface Block_PINRegister_ContentWrapperProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UseOverlay: white logo and `ubt-pin-overlay` (default True). */
  useOverlay?: boolean;
  /** isFromMenu: PIN change from the menu (back allowed, no "Need help?", back to Menu on success). */
  isFromMenu?: boolean;
  registerText?: string;
  confirmText?: string;
  /** EnableName: "Welcome <first> <last>" above the texts, which turn regular. */
  enableName?: boolean;
}

/** Registration content of PINRegister / PINChange (p:UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js; view
    :134-506, controller :507-737).
    - OnInitialize (:563-597): with EnableName, UserName = FirstName + " " + LastName of the cached user info.
    - Pincode_Register (length 4): logo, the register / confirm texts, erase icon, "Need help? Contact Us" unless
      isFromMenu. PinRegistrationError → FeedbackMessage_AutoClose(error).
    - PinRegistrationSuccess (:599-680): ReplaceOnUpcomingNavigation; from the menu → "Your PIN has been changed."
      (success) and Menu; else IsNavigateToHomeOnBack = True and GetResumeLoginLink, else LastURL, else
      IsNavigateToHomeOnBack = False and HomeFeed. */
export function Block_PINRegister_ContentWrapper({
  id,
  useOverlay = true,
  isFromMenu = false,
  registerText = 'Register a PIN code',
  confirmText = 'Confirm PIN code',
  enableName = false,
}: Block_PINRegister_ContentWrapperProps) {
  const navigate = useOsNavigate();
  const screenController_NavigateToPage = useScreenController_NavigateToPage();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (!enableName) return;
    getUserInformation().then(
      (info) => {
        setUserName(`${info.Directory_UserCurrent.FirstName} ${info.Directory_UserCurrent.LastName}`);
      },
      () => undefined, // no cached user: the name stays empty, as AppManager_GetCachedUserInfo returns an empty record
    );
  }, [enableName]);

  const onRegistrationSuccess = () => {
    replaceOnUpcomingNavigation();
    if (isFromMenu) {
      feedbackMessageAutoClose({
        title: '',
        message: 'Your PIN has been changed.',
        messageType: 'success',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      navigate(`/${APP_ID}/Menu`, undefined, { transition: TransitionAnimation.SlideFromRight }); // :618
      return;
    }
    const resumeLink = getResumeLoginLink();
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', true);
    if (resumeLink !== '') {
      screenController_NavigateToPage(resumeLink, true); // ScreenController_NavigateToPage2 (:636-640)
      return;
    }
    const lastUrl = getClientVar('UBTConnect.LastURL');
    if (lastUrl !== '') {
      screenController_NavigateToPage(lastUrl, true); // ScreenController_NavigateToPage (:645-649)
      return;
    }
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
    navigate(PATHS.home);
  };
  const onRegistrationError = (errorMessage: string) => {
    feedbackMessageAutoClose({
      title: '',
      message: errorMessage,
      messageType: 'error',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };

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
      <Pincode_Register
        id={childId(1)}
        inAllowBackNavigation={isFromMenu}
        inPinLength={4}
        inExtendedClasses={`connect-pin-screen${useOverlay ? ' ubt-pin-overlay' : ''}`}
        onPinRegistrationSuccess={onRegistrationSuccess}
        onPinRegistrationError={onRegistrationError}
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
