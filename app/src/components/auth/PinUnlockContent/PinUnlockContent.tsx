/** @origin UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper */
// @os-block UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { getClientVar } from '@/platform/session/session';
import { OSLink } from '@/shared/lib/OSLink';
import { PinUnlockMobile } from '@/components/auth/PinUnlockMobile';
import { CacheControl_Policies, type CacheControl_PoliciesRec } from '@/shared/UBTConnect_Utils/CacheControl_Policies';
import { openPolicy, POLICY_NOT_FOUND } from '@/shared/UBTConnect_Utils/lib/actions';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface PinUnlockContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UseOverlay: white logo and `ubt-pin-overlay` (default True). */
  useOverlay?: boolean;
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

type PolicyInformation = CacheControl_PoliciesRec['PolicyInformation_TermsAndConditions'];
const policyUrl = (policy: PolicyInformation | undefined) => policy?.Policy_Url ?? '';

const showError = (message: string) => {
  feedbackMessageAutoClose({
    title: '',
    message,
    messageType: 'error',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
};

/** Unlock content of the PIN screens and the lock container
    (p:UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js; view :165-770, controller :771-1136).
    - OnInitialize: ShowFingerprintReader = App_PIN_BiometricEnabled and not isFromMenu.
    - PinUnlock_MobileWrapper with PinLength 4, `connect-pin-screen` (+ ` ubt-pin-overlay`), back allowed from the menu;
      title: ConnectLogoWhite (overlay) or ConnectLogo; UnlockText; erase icon; Forgot PIN (ShowForgotPIN) →
      Login?In_IsFromResetPIN=True; content: ShowNeedHelp "Need help? Contact Us", else ShowPolicy the two policy links
      from CacheControl_Policies (skeleton until fetched, a link only with its URL).
    - Event_Pincode_PinUnlockError (:831-908): "Pin does not match" → "Your current PIN is not correct!"; "User not
      found" → "No matching user. Please Register a PIN" and NavigateTo_PINRegister; any other text as is; shown with
      FeedbackMessage_AutoClose (error). PinUnlockSuccess → Unlock. */
export function PinUnlockContent({
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
}: PinUnlockContentProps) {
  const navigate = useOsNavigate();
  const [showFingerprintReader] = useState(() => getClientVar('UBTConnect.App_PIN_BiometricEnabled') && !isFromMenu);
  const [policies, setPolicies] = useState<{ response: CacheControl_PoliciesRec | null; isFetched: boolean }>({
    response: null,
    isFetched: false,
  });

  const onPinUnlockError = async (errorMessage: string) => {
    if (errorMessage === 'Pin does not match') {
      showError('Your current PIN is not correct!');
    } else if (errorMessage === 'User not found') {
      showError('No matching user. Please Register a PIN');
      await onNavigateToPINRegister?.();
    } else {
      showError(errorMessage);
    }
  };
  /* OnClick_TermsAndCondition (view :607, controller :969-998) / OnClick_PrivacyPolicy (view :675, :939-968): OpenPolicy(
     LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_<policy>, "This policy couldn't be found."). */
  const onClickPolicy = (policy: PolicyInformation | undefined) => () => {
    openPolicy(policy, POLICY_NOT_FOUND);
  };

  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const policyLink = (n: number, policy: PolicyInformation | undefined, text: string, align: 'left' | 'right') =>
    policyUrl(policy) !== '' && (
      <div data-container="" style={{ textAlign: align }}>
        <OSLink onClick={onClickPolicy(policy)}>
          <CustomText
            id={childId(n)}
            inText={text}
            inTextOptions={{ FontSize: UBT_FontSize.Small, IsUnderlined: true }}
          />
        </OSLink>
      </div>
    );

  return (
    <OSBlock name="App_PIN.Block_PINUnlock_ContentWrapper" id={id}>
      <PinUnlockMobile
        id={childId(1)}
        inExtendedClasses={`connect-pin-screen${useOverlay ? ' ubt-pin-overlay' : ''}`}
        inIsScanFingerprintOnReady={showFingerprintReader}
        inForceVisible={inForceVisible}
        inHideFingerprint={!showFingerprintReader}
        inAllowBackNavigation={isFromMenu}
        inPinLength={4}
        onPinUnlockError={onPinUnlockError}
        onPinUnlockSuccess={onUnlock}
        placeholderTitlePlaceholder={
          <img
            className="login-screen__connect-logo"
            data-image=""
            src={osImage(useOverlay ? 'img/UBTConnect.ConnectLogoWhite.svg' : 'img/UBTConnect.ConnectLogo.svg')}
          />
        }
        placeholderUnlockText={
          <CustomText
            id={childId(2)}
            inTextOptions={{
              Color: UBT_Color.Inherit,
              FontSize: UBT_FontSize.Base,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            inText={unlockText}
          />
        }
        placeholderFingerprintIcon={
          <Icon id={childId(3)} inColorId={UBT_Color.Inherit} inIconId={UBT_Icons2.Fingerprint} />
        }
        placeholderEraseButton={
          <Icon
            id={childId(4)}
            inColorId={UBT_Color.Inherit}
            inIconId={UBT_Icons2.Backspace}
            inSizeId={UBT_IconsSize.Display_36}
          />
        }
        placeholderBottomKeyboard={
          showForgotPIN && (
            <div className="border-bottom-s border-color-neutral-0 OSInline" data-container="">
              <OSLink
                onClick={() => {
                  navigate(PATHS.login, { In_IsFromResetPIN: true });
                }}
              >
                <CustomContainer
                  id={childId(5)}
                  extendedClasses="border-bottom-s border-color-neutral-0"
                  options={{
                    TextOptions: {
                      Color: UBT_Color.Neutral0,
                      FontWeight: UBT_FontWeight.SemiBold,
                      IsUnderlined: false,
                    },
                  }}
                >
                  <span data-expression="">Forgot PIN?</span>
                </CustomContainer>
              </OSLink>
            </div>
          )
        }
        placeholderContent={
          showNeedHelp ? (
            <div data-container="" style={{ textAlign: 'center' }}>
              <CustomContainer id={childId(6)} options={{ TextOptions: { Color: UBT_Color.Neutral10 } }}>
                Need help?{' '}
                <OSLink
                  className="font-regular text-underline"
                  style={{ marginLeft: '0px' }}
                  url="/UBTConnect/ContactUsMenu"
                >
                  Contact Us
                </OSLink>
              </CustomContainer>
            </div>
          ) : (
            showPolicy && (
              <>
                <SkeletonSection id={childId(7)} inIsLoading={!policies.isFetched}>
                  <Columns_Two
                    id={childId(8)}
                    left={policyLink(
                      9,
                      policies.response?.PolicyInformation_TermsAndConditions,
                      'Terms & Conditions',
                      'left',
                    )}
                    right={policyLink(
                      10,
                      policies.response?.PolicyInformation_PrivacyPolicy,
                      'Our Privacy Policy',
                      'right',
                    )}
                  />
                </SkeletonSection>
                <CacheControl_Policies
                  id={childId(11)}
                  onResult={(response) => {
                    setPolicies({ response, isFetched: true });
                  }}
                />
              </>
            )
          )
        }
      />
    </OSBlock>
  );
}
