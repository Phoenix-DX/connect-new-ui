/** @origin UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { OSLink } from '@/components/ui/os/OSLink';
import { PinUnlockMobile } from '@/components/auth/PinUnlockMobile';
import type { CacheControl_PoliciesRec } from '@/legacy/os/cache/PoliciesCacheControl';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
} from '@/lib/ubtConnectLibrary/staticEntities';

type PolicyInformation = CacheControl_PoliciesRec['PolicyInformation_TermsAndConditions'];

export interface PinUnlockContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UseOverlay: white logo and `ubt-pin-overlay` (default True). */
  useOverlay?: boolean;
  unlockText?: string;
  showNeedHelp?: boolean;
  /** isFromMenu: PIN change from the menu (back allowed). */
  isFromMenu?: boolean;
  showForgotPIN?: boolean;
  showPolicy?: boolean;
  /** ShowFingerprintReader (OnInitialize: App_PIN_BiometricEnabled and not isFromMenu). */
  showFingerprintReader?: boolean;
  /** Pincode_Unlock shows the keypad (`usePinCodeUnlock`). */
  isKeypadVisible?: boolean;
  /** The policies of CacheControl_Policies (LocalCacheControlPolicies); null before its Result. */
  policies?: CacheControl_PoliciesRec | null;
  /** CacheControl_Policies raised Result: the policy links replace the skeleton. */
  isPoliciesFetched?: boolean;
  /** The CacheControl_Policies block (ShowPolicy), with its instance id. */
  renderCacheControlPolicies?: (id: string | undefined) => ReactNode;
  /** The InactivityTimer block of Pincode_Unlock, with its instance id. */
  renderInactivityTimer?: (id: string | undefined) => ReactNode;
  /** The PreventBackNavigation block of the keypad (platform/navigation), with its instance id. */
  renderPreventBackNavigation?: (id: string | undefined) => ReactNode;
  /** SetPin of the keypad (`usePinCodeUnlock` onSetPin). */
  onSetPin?: (pinCode: string) => void | Promise<void>;
  /** The keypad runs it before SetPin: ReplaceOnUpcomingNavigation (`usePinCodeUnlock` onBeforeSetPin). */
  onBeforeSetPin?: () => void;
  /** PinUnlockSuccess of the fingerprint scanner: the block's Unlock. */
  onPinUnlockSuccess?: () => void | Promise<void>;
  /** PinUnlockError of the fingerprint scanner (Event_Pincode_PinUnlockError). */
  onPinUnlockError?: (errorMessage: string) => void | Promise<void>;
  /** The Forgot PIN link. */
  onForgotPin?: () => void;
  /** OnClick_TermsAndCondition / OnClick_PrivacyPolicy, with the cached policy of the link. */
  onClickPolicy?: (policy: PolicyInformation | undefined) => void;
}

const policyUrl = (policy: PolicyInformation | undefined) => policy?.Policy_Url ?? '';

/** Unlock content of the PIN screens and the lock dialog. The flows are in the hooks `usePinUnlockContent` and
    `usePinCodeUnlock` (platform/session); the component that renders this block calls them and passes the result.
    - PinUnlock_MobileWrapper with PinLength 4, `connect-pin-screen` (+ ` ubt-pin-overlay`), back allowed from the menu.
    - Title: ConnectLogoWhite (overlay) or ConnectLogo; UnlockText; erase icon; Forgot PIN (ShowForgotPIN).
    - Content: ShowNeedHelp "Need help? Contact Us", else ShowPolicy the two policy links (skeleton until the policies
      are fetched, a link only with its URL) and CacheControl_Policies. */
export function PinUnlockContent({
  id,
  useOverlay = true,
  unlockText = 'Enter your PIN code',
  showNeedHelp = false,
  isFromMenu = false,
  showForgotPIN = false,
  showPolicy = false,
  showFingerprintReader = false,
  isKeypadVisible = false,
  policies = null,
  isPoliciesFetched = false,
  renderCacheControlPolicies,
  renderInactivityTimer,
  renderPreventBackNavigation,
  onSetPin,
  onBeforeSetPin,
  onPinUnlockSuccess,
  onPinUnlockError,
  onForgotPin,
  onClickPolicy,
}: PinUnlockContentProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const policyLink = (n: number, policy: PolicyInformation | undefined, text: string, align: 'left' | 'right') =>
    policyUrl(policy) !== '' && (
      <div data-container="" style={{ textAlign: align }}>
        <OSLink onClick={() => onClickPolicy?.(policy)}>
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
        isKeypadVisible={isKeypadVisible}
        inHideFingerprint={!showFingerprintReader}
        inAllowBackNavigation={isFromMenu}
        inPinLength={4}
        onSetPin={onSetPin}
        onBeforeSetPin={onBeforeSetPin}
        renderInactivityTimer={renderInactivityTimer}
        renderPreventBackNavigation={renderPreventBackNavigation}
        onPinUnlockError={onPinUnlockError}
        onPinUnlockSuccess={onPinUnlockSuccess}
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
              <OSLink onClick={() => onForgotPin?.()}>
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
                <Skeleton id={childId(7)} isLoading={!isPoliciesFetched}>
                  <ColumnsTwo
                    id={childId(8)}
                    left={policyLink(9, policies?.PolicyInformation_TermsAndConditions, 'Terms & Conditions', 'left')}
                    right={policyLink(10, policies?.PolicyInformation_PrivacyPolicy, 'Our Privacy Policy', 'right')}
                  />
                </Skeleton>
                {renderCacheControlPolicies?.(childId(11))}
              </>
            )
          )
        }
      />
    </OSBlock>
  );
}
