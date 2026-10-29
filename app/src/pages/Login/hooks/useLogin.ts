import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useScreenValidationService } from '@/components/ui/os/OSValidation';
import { delayedMessageShow, feedbackMessageAutoClose, showExceptionMessage } from '@/platform/feedback';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { resetPassword, signOut, useSignIn } from '@/platform/session/auth';
import { setAppCallback } from '@/platform/session/resume';
import { get_IsUnsupportedSystem } from '@/lib/ubtConnect/unsupportedVersion';
import type { LoginInputs } from '@/pages/Login/inputs';

/** AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice, compared with CallbackType by OnReady: the TST value
    (migration/knowledge/static-entities-tst.json `UBTConnect.appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice`). */
const DeviceAwareness_InvalidDevice = 'DeviceAwareness_InvalidDevice';

/** What the Login page renders and the handlers of its two buttons. */
export interface LoginFlows {
  /** Get_IsUnsupportedSystem of OnInitialize: the unsupported-version message replaces the welcome and the buttons. */
  isUnsupportedSystem: boolean;
  /** IsExecutingLogin: "Login with UBT One" shows its spinner, "Forgot Password?" is disabled. */
  isExecutingLogin: boolean;
  /** IsResettingPassword: "Forgot Password?" shows its spinner, "Login with UBT One" is disabled. */
  isResettingPassword: boolean;
  /** "Login with UBT One": the built-in validation, then Login(IsResetPassword = False). */
  onLogin: () => void;
  /** "Forgot Password?": the built-in validation, then Login(IsResetPassword = True): the reset-password policy of the
      identity provider, then the success toast of the IdP_OnResetPassword callback (user decision 2026-10-27). */
  onForgotPassword: () => void;
}

/** The screen variables and flows of Login: OnInitialize, OnReady and the Login screen action. The variables are not
    kept by the view cache.
    @origin UBTConnect.App_Common.Login */
export function useLogin(inputs: LoginInputs): LoginFlows {
  const signIn = useSignIn();
  const [isUnsupportedSystem] = useState(get_IsUnsupportedSystem);
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const restoredFromCache = useWasRestoredFromCache();
  // The screen's validation service. Both buttons have built-in validation: their OnClick validates the screen ("")
  // before the screen action. No validation widget renders on this screen, so it changes nothing visible.
  const validation = useScreenValidationService();

  // Login, IsResetPassword False: the mock sign-in at once (D3(a), U4), then the destination of the session. With
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
  // Login, IsResetPassword True (Login.mvc.js:719-730): IsResettingPassword, then AppManager_Login(True,
  // ConfirmationDialog_ResetPassword) → the reset-password policy; the dialog id serves the device-awareness pop-up only
  // (not built, Q3). The callback IdP_OnResetPassword (Login.mvc.js:838-868): both flags False, then
  // FeedbackMessage_AutoClose(MessageTitle, Message, Success, True, "", 0, False). The AllExceptions handler of Login
  // (Login.mvc.js:735-745) resets both flags, as for the sign-in.
  const forgotPassword = async () => {
    setIsResettingPassword(true);
    let callback;
    try {
      callback = await resetPassword();
    } catch (error) {
      setIsExecutingLogin(false);
      setIsResettingPassword(false);
      await showExceptionMessage(error instanceof Error ? error.message : String(error), false);
      return;
    }
    setIsExecutingLogin(false);
    setIsResettingPassword(false);
    feedbackMessageAutoClose({
      title: callback.messageTitle,
      message: callback.message,
      messageType: 'success',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  };
  const loginRef = useRef(login);
  useLayoutEffect(() => {
    loginRef.current = login;
  });

  // OnInitialize, once: when the system is supported, Login not opened by the signed-out gate clears the sign-in
  // callback location; In_IsFromResetPIN and not restored from the view cache → Login(False) then AppManager_Logout,
  // in the mock signOut() then the mock sign-in (Q2).
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

  // OnReady: CallbackType = DeviceAwareness_InvalidDevice → AppManager_HandleDeviceAwarenessPopUp (not built, Q3);
  // otherwise DelayedMessage_Show.
  const callbackType = useRef(inputs.CallbackType);
  useEffect(() => {
    if (callbackType.current !== DeviceAwareness_InvalidDevice) delayedMessageShow();
  }, []);

  return {
    isUnsupportedSystem,
    isExecutingLogin,
    isResettingPassword,
    onLogin: () => {
      validation.validate('');
      void login(false);
    },
    onForgotPassword: () => {
      validation.validate('');
      void forgotPassword();
    },
  };
}
