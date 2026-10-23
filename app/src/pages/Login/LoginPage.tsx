import { useSearchParams } from 'react-router';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';
import { DialogExitConfirmation } from '@/platform/navigation';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { OfflineDataSync } from '@/platform/device/OfflineDataSync';
import { LoginLayout } from '@/components/layout/LoginLayout';
import { AppManagerEvents } from './components/AppManagerEvents';
import { LoginCard } from './components/LoginCard';
import { LoginFooter } from './components/LoginFooter';
import { useLogin } from './hooks/useLogin';
import { readLoginInputs } from './inputs';

/** @origin UBTConnect.App_Common.Login
    The sign-in route: the login layout with its overlay, the login card and the footer as content, the exit
    confirmation, and the common UI of the layout (offline data sync events, AppManager_Events, the reset-password
    confirmation and CommonUI_InsideLayout without the lock screen and the policy check). The flows are in
    `useLogin`. */
export default function Login() {
  const [params] = useSearchParams();
  const { isUnsupportedSystem, isExecutingLogin, isResettingPassword, onLogin, onForgotPassword } = useLogin(
    readLoginInputs(params),
  );

  return (
    <LoginLayout
      id="$b1"
      inHasOverlay
      placeholderContent={
        <>
          <div className="connect-login-screen" data-container="">
            <div className="connect-login-screen__content" data-container="">
              <LoginCard
                isUnsupportedSystem={isUnsupportedSystem}
                isExecutingLogin={isExecutingLogin}
                isResettingPassword={isResettingPassword}
                onLogin={onLogin}
                onForgotPassword={onForgotPassword}
              />
              <LoginFooter />
            </div>
          </div>
          <DialogExitConfirmation id="$b10" />
        </>
      }
      placeholderCommonUIInsideLayout={
        <>
          <OfflineDataSync id="$b11" />
          <AppManagerEvents id="$b12" />
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
          <CommonUiLayout id="$b14" inIgnoreLockScreen inIgnorePolicy />
        </>
      }
    />
  );
}
