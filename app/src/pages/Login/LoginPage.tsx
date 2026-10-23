/** @origin UBTConnect.App_Common.Login */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useScreenValidationService } from '@/components/ui/os/OSValidation';
import { OSLink } from '@/shared/lib/OSLink';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { get_IsUnsupportedVersion } from '@/shared/UBTConnect/lib/actions';
import { OfflineDataSyncEvents } from '@/shared/UBTConnect/OfflineDataSyncEvents';
import { UnsupportedVersion_Wrapper } from '@/shared/UBTConnect/UnsupportedVersion_Wrapper';
import { WelcomeToConnect } from '@/shared/UBTConnect/WelcomeToConnect';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Layout_LoginFlow } from '@/shared/UBTConnectLibrary/Layout_LoginFlow';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { signOut, useSignIn } from '@/platform/session/auth';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';
import { delayedMessageShow, showExceptionMessage } from '@/platform/feedback';
import { DialogExitConfirmation, useWasRestoredFromCache } from '@/platform/navigation';
import { setAppCallback } from '@/platform/session/resume';
import { readLoginInputs } from './api';
import { AppManager_Events } from './components/AppManager_Events';
import { Tile } from './components/Tile';
import { Version_LoginWrapper } from './components/Version_LoginWrapper';

/** Get_IsUnsupportedSystem (Login OnInitialize, p:UBTConnect.App_Common.Login.mvc.js:940-945): unsupported native app
    version OR unsupported browser version; the WebView version is not included (Q4, TST UBTConnect.controller.js). */
function get_IsUnsupportedSystem(): boolean {
  const v = get_IsUnsupportedVersion();
  return v.Out_IsUnsupportedAppVersion || v.Out_IsUnsupportedBrowserVersion;
}

/** AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice: only compared with CallbackType, never written, so its
    identifier value is not known (opaque constant; shared static-entity convention). */
const DeviceAwareness_InvalidDevice = 'AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice';

/** UBTConnect App_Common.Login (p:UBTConnect.App_Common.Login.mvc.js; view :166-680, controller :683-1277). */
export default function Login() {
  const [params] = useSearchParams();
  const inputs = readLoginInputs(params);
  const signIn = useSignIn();
  const [isUnsupportedSystem] = useState(get_IsUnsupportedSystem);
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const restoredFromCache = useWasRestoredFromCache();
  // The screen's validationServiceInstance. Both buttons have built-in validation: their OnClick runs
  // `_this.validateWidget("")` = validationService.validate("") before the screen action (:355, :456;
  // OutSystemsReactView.js ≈192019). No validation widget renders on this screen, so it changes nothing visible.
  const validation = useScreenValidationService();

  // Login (:702-780), IsResetPassword False: mock sign-in at once (D3(a)/U4), then the shell's destination. With
  // `signOutFirst` (In_IsFromResetPIN, Q2): AppManager_Logout (session and local PIN) before the mock sign-in.
  const login = async (signOutFirst: boolean) => {
    setIsExecutingLogin(true);
    try {
      if (signOutFirst) await signOut();
      await signIn();
    } catch (error) {
      setIsExecutingLogin(false);
      setIsResettingPassword(false);
      await showExceptionMessage(error instanceof Error ? error.message : String(error), false);
      return;
    }
    setIsExecutingLogin(false);
    setIsResettingPassword(false);
  };
  const loginRef = useRef(login);
  useLayoutEffect(() => {
    loginRef.current = login;
  });

  // OnInitialize (:922-990), once: when the system is supported, Login not opened by the signed-out gate clears the
  // sign-in callback location; In_IsFromResetPIN and not restored from the view cache → Login(False) then
  // AppManager_Logout, in the mock signOut() then the mock sign-in (Q2).
  const initialize = useRef({
    done: false,
    isUnsupportedSystem,
    inIsFromInvalidPermissions: inputs.In_IsFromInvalidPermissions,
    inIsFromResetPIN: inputs.In_IsFromResetPIN,
    restoredFromCache,
  });
  useEffect(() => {
    const init = initialize.current;
    if (init.done) return;
    init.done = true;
    if (init.isUnsupportedSystem) return;
    if (!init.inIsFromInvalidPermissions) setAppCallback('');
    if (init.inIsFromResetPIN && !init.restoredFromCache) void loginRef.current(true);
  }, []);

  // OnReady (:783-826): CallbackType = DeviceAwareness_InvalidDevice → AppManager_HandleDeviceAwarenessPopUp (not built,
  // Q3); otherwise DelayedMessage_Show.
  const callbackType = useRef(inputs.CallbackType);
  useEffect(() => {
    if (callbackType.current !== DeviceAwareness_InvalidDevice) delayedMessageShow();
  }, []);

  return (
    <Layout_LoginFlow
      id="$b1"
      inHasOverlay
      placeholderContent={
        <>
          <div className="connect-login-screen" data-container="">
            <div className="connect-login-screen__content" data-container="">
              <Tile id="$b2" extendedClasses="ubt-zindex-2 connect-login-card">
                <div className="connect-login-card__content" data-container="">
                  {isUnsupportedSystem ? (
                    <UnsupportedVersion_Wrapper id="$b3" />
                  ) : (
                    <>
                      <WelcomeToConnect id="$b4" />
                      <div data-container="">
                        <CustomContainer id="$b5" extendedClasses="login-button  " options={{ MarginSize: {} }}>
                          <ButtonLoading
                            id="$b6"
                            extendedClass="full-width"
                            showLabelOnLoading
                            isLoading={isExecutingLogin}
                          >
                            <button
                              className="btn btn-primary OSFillParent"
                              data-button=""
                              disabled={isResettingPassword}
                              type="button"
                              onClick={() => {
                                validation.validate('');
                                void login(false);
                              }}
                            >
                              <div className="osui-btn-loading__spinner-animation" data-container="" />
                              Login with UBT One{' '}
                            </button>
                          </ButtonLoading>
                        </CustomContainer>
                        <CustomContainer
                          id="$b7"
                          extendedClasses="login-button"
                          options={{ MarginSize: { TopSizeId: UBT_Size.Base } }}
                        >
                          <ButtonLoading
                            id="$b8"
                            showLabelOnLoading
                            extendedClass="full-width"
                            isLoading={isResettingPassword}
                          >
                            {/* Built-in validation, then Login(IsResetPassword = True): nothing in the mock phase (Q1). */}
                            <button
                              className="btn OSFillParent"
                              data-button=""
                              disabled={isExecutingLogin}
                              type="button"
                              onClick={() => {
                                validation.validate('');
                              }}
                            >
                              <div className="osui-btn-loading__spinner-animation" data-container="" />
                              Forgot Password?
                            </button>
                          </ButtonLoading>
                        </CustomContainer>
                      </div>
                    </>
                  )}
                </div>
              </Tile>
              <div className="text-align-center" data-container="">
                <div className="need-help-footer" data-container="">
                  Need help?{' '}
                  <OSLink
                    className="font-regular text-underline"
                    style={{ marginLeft: '0px' }}
                    url="/UBTConnect/ContactUsMenu"
                  >
                    Contact Us
                  </OSLink>
                </div>
                <Version_LoginWrapper id="$b9" />
              </div>
            </div>
          </div>
          <DialogExitConfirmation id="$b10" />
        </>
      }
      placeholderCommonUIInsideLayout={
        <>
          <OfflineDataSyncEvents id="$b11" />
          <AppManager_Events id="$b12" />
          <ActionConfirmationDialog
            widgetId="ConfirmationDialog_ResetPassword"
            scope="b13"
            header="Security Warning"
            body={
              <>
                Your Connect account was accessed from a different device or application.
                <br />
                To help keep your account secure, please click ‘Continue’ to reset your password.
              </>
            }
            confirmLabel="Continue"
            dismissLabel="Cancel"
          />
          <CommonUI_InsideLayout id="$b14" inIgnoreLockScreen inIgnorePolicy />
        </>
      }
    />
  );
}
