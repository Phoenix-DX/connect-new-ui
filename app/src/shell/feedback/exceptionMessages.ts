import { signOut } from '../auth';
import { APP_ID } from '../paths';
import { getClientVar } from '../session';
import { feedbackMessageAutoClose, type UbtMessageType } from './feedbackMessageAutoClose';
import { pageRedirect } from './pageRedirect';

/* UBTConnect ShowCommunicationExceptionMessage and ShowExceptionMessage (HF r:UBTConnect.controller.js, "UC";
   app-shell.spec.md section 6; knowledge/shell-facts.md U10). Texts are the compiled ones, raw `\r\n` and `<br>` included. */

const HIGH_TRAFFIC_TITLE = 'Service Interruption';
/** UC:16096 (shown as HTML because of the title: the line breaks collapse) */
const HIGH_TRAFFIC_TEXT =
  'We’re currently experiencing unusually high traffic, which may affect access to some services.\r\n\r\nOur team is working to restore full functionality as quickly as possible.\r\n\r\nThank you for your patience and understanding.';
const NO_INTERNET_TEXT = 'No internet connection. Please check your network settings and try again.';

/** ShowCommunicationExceptionMessage (UC:16085-16101): no delay, no debounce. */
export function showCommunicationExceptionMessage(): void {
  if (getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent')) {
    feedbackMessageAutoClose({ title: HIGH_TRAFFIC_TITLE, message: HIGH_TRAFFIC_TEXT, messageType: 'info' });
  } else {
    feedbackMessageAutoClose({ message: NO_INTERNET_TEXT, messageType: 'error' });
  }
}

interface Display {
  title?: string;
  message?: string;
  messageType?: UbtMessageType;
  hasTimeout?: boolean;
  forceLogout?: boolean;
}

/** Index(ExceptionMessage, text) <> -1, case sensitive (UC:16136-16440) */
type Rule = [matches: (message: string) => boolean, display: Display | 'communication'];
const has = (text: string) => (message: string) => message.includes(text);
const is =
  (...texts: string[]) =>
  (message: string) =>
    texts.includes(message);

/** The branches of ShowExceptionMessage in their order (UC:16186-16440). */
const RULES: readonly Rule[] = [
  [
    is('Authorization has been denied for this request.'),
    {
      message:
        'Please make sure you have an active Connect plan. For further details, please refer to your regional helpdesk.',
      hasTimeout: true,
      forceLogout: true,
    },
  ],
  [is('The operation has timed out', 'The connection has timed out'), 'communication'],
  [
    (m) =>
      is(
        'Request failed with an error',
        'Request failed with 500 Internal Server Error',
        'Request failed with 404 Not Found',
        'Request failed with 400 Bad Request',
      )(m) || has('The request is invalid')(m),
    'communication',
  ],
  [(m) => has('Resource not found')(m) || has('No HTTP resource')(m), 'communication'],
  [(m) => m.toLowerCase() === 'please install and enable google maps', { hasTimeout: true }],
  [has('distributed transaction'), { hasTimeout: true }],
  [
    has('An error has occurred.'),
    {
      title: HIGH_TRAFFIC_TITLE,
      message:
        'We’re currently experiencing unusually high traffic, which may affect access to some services.<br>\r\nOur team is working to restore full functionality as quickly as possible.<br>\r\nThank you for your patience and understanding.',
      messageType: 'info',
    },
  ],
  [
    has('Error executing query'),
    { title: 'Temporarily Unavailable', message: 'Something went wrong, please try again later' },
  ],
  [
    has('The underlying connection was closed'),
    {
      message:
        "We're sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator.",
    },
  ],
  [has('Your paid subscription has expired'), { title: 'Subscription Status Update', forceLogout: true }],
  [has("We're unable to log you in at this time"), { title: 'Access Unavailable' }],
  [has('Due to multiple unsuccessful login attempts'), { title: 'Account Access Restricted' }],
  [
    has('please log in again or check your active sessions'),
    {
      title: 'Session Ended',
      message:
        "You've been logged out because your account is currently active on another device.\r\n<br> To continue, please log in again or check your active sessions.",
    },
  ],
  [has('unable to create a Free subscription plan'), { title: 'Subscription Status Update' }],
];

/**
 * ShowExceptionMessage(ExceptionMessage, ForceLogout) (UC:16136-16531): maps server texts to a toast (defaults: the
 * message itself, no title, Error, debounce on), 500 ms later for the HasTimeout branches; with ForceLogout:
 * Connect_Logout, then a full page load of `\UBTConnect\Login` (UC:16444-16452).
 */
export async function showExceptionMessage(exceptionMessage: string, forceLogout = false): Promise<void> {
  if (exceptionMessage === 'No role validation found') return; // UC:16140-16142
  const rule = RULES.find(([matches]) => matches(exceptionMessage));
  const display = rule?.[1] ?? {};
  if (display === 'communication') {
    showCommunicationExceptionMessage(); // UC:16353-16356
    return;
  }
  feedbackMessageAutoClose({
    title: display.title ?? '',
    message: display.message ?? exceptionMessage,
    messageType: display.messageType ?? 'error',
    encodedHtml: true,
    extendedClass: '',
    delayMs: display.hasTimeout === true ? 500 : 0,
    useDebounce: true,
  });
  if (forceLogout || display.forceLogout === true) {
    await signOut();
    pageRedirect(`\\${APP_ID}\\Login`, true); // "\" + GetEntryEspaceName() + "\Login"
  }
}
