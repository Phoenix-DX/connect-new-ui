import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { UnsupportedVersion_Wrapper } from '@/shared/UBTConnect/UnsupportedVersion_Wrapper';
import { WelcomeToConnect } from '@/shared/UBTConnect/WelcomeToConnect';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Tile } from './Tile';

export interface LoginCardProps {
  /** True: the unsupported-version message instead of the welcome text and the buttons. */
  isUnsupportedSystem: boolean;
  /** "Login with UBT One" shows its spinner; "Forgot Password?" is disabled. */
  isExecutingLogin: boolean;
  /** "Forgot Password?" shows its spinner; "Login with UBT One" is disabled. */
  isResettingPassword: boolean;
  /** Click on "Login with UBT One". */
  onLogin: () => void;
  /** Click on "Forgot Password?". */
  onForgotPassword: () => void;
}

/** The login card: a Tile with the unsupported-version message, or with the welcome text and the two buttons
    ("Login with UBT One", "Forgot Password?"). The instance ids are those of the Login screen ($b2 to $b8).
    @origin UBTConnect.App_Common.Login */
export function LoginCard({
  isUnsupportedSystem,
  isExecutingLogin,
  isResettingPassword,
  onLogin,
  onForgotPassword,
}: LoginCardProps) {
  return (
    <Tile id="$b2" extendedClasses="ubt-zindex-2 connect-login-card">
      <div className="connect-login-card__content" data-container="">
        {isUnsupportedSystem ? (
          <UnsupportedVersion_Wrapper id="$b3" />
        ) : (
          <>
            <WelcomeToConnect id="$b4" />
            <div data-container="">
              <CustomContainer id="$b5" extendedClasses="login-button  " options={{ MarginSize: {} }}>
                <ButtonLoading id="$b6" extendedClass="full-width" showLabelOnLoading isLoading={isExecutingLogin}>
                  <button
                    className="btn btn-primary OSFillParent"
                    data-button=""
                    disabled={isResettingPassword}
                    type="button"
                    onClick={onLogin}
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
                <ButtonLoading id="$b8" showLabelOnLoading extendedClass="full-width" isLoading={isResettingPassword}>
                  <button
                    className="btn OSFillParent"
                    data-button=""
                    disabled={isExecutingLogin}
                    type="button"
                    onClick={onForgotPassword}
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
  );
}
