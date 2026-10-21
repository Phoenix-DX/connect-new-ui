// @os-block Connect2_LegacyShared.Reusable.Warning_PrivateMessage
import { OSBlock } from '../../../components/OSBlock';

export interface Warning_PrivateMessageProps {
  id?: string;
  /** Input Message. */
  message: string;
  /** Event NavigateTo_Login (button Login). */
  onNavigateToLogin: () => void;
  /** Event Dismiss (button Dismiss). */
  onDismiss: () => void;
}

/** Warning_PrivateMessage (survey source Connect2_LegacyShared.Reusable.Warning_PrivateMessage.mvc.js view): a
    `card warning-card` with the lock icon, the message and the Dismiss / Login buttons. Shown only to a signed-out
    user (ShowWarning False); not captured: built from the compiled view. */
export function Warning_PrivateMessage({ id, message, onNavigateToLogin, onDismiss }: Warning_PrivateMessageProps) {
  return (
    <OSBlock name="Reusable.Warning_PrivateMessage" id={id}>
      <div className="card warning-card" data-container="">
        <div data-container="">
          <div data-container="">
            <i className="icon fa fa-lock fa-1x" data-icon="" />
          </div>
          <div data-container="">
            <span data-expression="">{message}</span>
          </div>
        </div>
        <div data-container="">
          <button className="btn" type="button" onClick={onDismiss}>
            Dismiss
          </button>
          <button className="btn ThemeGrid_MarginGutter" type="button" onClick={onNavigateToLogin}>
            Login
          </button>
        </div>
      </div>
    </OSBlock>
  );
}
