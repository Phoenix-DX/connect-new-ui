import {
  CommunicationException,
  IgnorableSystemException,
  SecurityException,
  SystemException,
  UserException,
  isInstanceOf,
} from '@/legacy/os/os-exceptions';
import { showCommunicationExceptionMessage, showExceptionMessage } from '@/platform/feedback';
import { showErrorPage } from '@/platform/feedback/errorPage';
import { log } from '@/platform/log/log';
import { osNavigateTo } from '@/platform/navigation/osNavigate';
import { PATHS } from '@/platform/navigation/paths';
import { TransitionAnimation } from '@/platform/navigation/screenTransition';
import { setAppCallbackCurrentLocation } from '@/platform/session/resume';
import { currentUserId } from '@/platform/session/session';

/* OutSystems exceptions as client action flows test them (runtime: migration/runtime-sources/OutSystems.js:2,
   OutSystems/ClientRuntime/Exceptions; classes in src/lib/os-exceptions.ts). callAction (src/lib/api.ts) raises the
   server's own exception from the contract's error answer { error, exception, specificType? }, or a
   CommunicationException when the request fails or the answer is not a server answer (OutSystems.js:3). A ported
   Handle Error tests the same class as the original:
     Handle Error: UserException            isUserException(e)          (any user exception)
     Handle Error: <Module>.<UserException>  isUserException(e, '<Module>.<Name>')
     Handle Error: CommunicationException   isCommunicationException(e)
     Handle Error: SecurityException, ...   isInstanceOf(e, SecurityException)
     Handle Error: AllExceptions            !isSystemException(e)       (OS.Exceptions.isSystem) */

export {
  AbortActivityChangeException,
  CommunicationException,
  DataBaseException,
  InvalidLoginException,
  NotRegisteredException,
  SecurityException,
  SystemException,
  UserException,
  isInstanceOf,
} from '@/legacy/os/os-exceptions';

/** OS.Exceptions.isInstanceOf(ex, UserException[, specificType]): any user exception, or the named one. */
export const isUserException = (error: unknown, specificType = ''): error is UserException =>
  isInstanceOf(error, UserException, specificType);

/** OS.Exceptions.isSystem(ex): Handle Error: AllExceptions catches every error for which this is false. */
export const isSystemException = (error: unknown): error is SystemException => isInstanceOf(error, SystemException);

/** CommunicationException: the request failed or timed out, or the answer was not a server answer. */
export const isCommunicationException = (error: unknown): error is CommunicationException =>
  isInstanceOf(error, CommunicationException);

/** The context of a flow for the flow handler: true while the screen of the flow is the active one (R6). The flow
    scope (platform/navigation/flowScope.ts) has this shape. */
interface FlowContext {
  active: () => boolean;
}

/** OS.Exceptions.getMessage (OutSystems.js:2): an Error's message, else its text. */
export const exceptionMessage = (error: unknown): string => (error instanceof Error ? error.message : String(error));

/**
 * An error a flow did not handle, going up to the screen's handleError and the App_Common flow handler: App_Common
 * OnException (migration/shell/sources/UBTConnect.App_Common.controller.js, "ACF", :12-125; the MCP shows the same
 * nodes in the DEV model). In the compiled order:
 *   ignorable error         OS.ErrorHandling.ignoreError first (ACF:24-26): an IgnorableSystemException (such as
 *                           ViewHasChangedException) is ignored silently. Item 2 D1. LicensingException (the
 *                           app-offline page of the runtime) has no class in the clone: no server answer names it.
 *   UBTConnect.BubbleCommunicationException
 *                           ShowCommunicationExceptionMessage (ACF:31-44): the user exception that a screen action
 *                           raises for a CommunicationException (bubbleErrors.ts). App_Common F1.
 *   CommunicationException  ShowCommunicationExceptionMessage (ACF:46-59).
 *   SecurityException       InvalidLoginException and NotRegisteredException too (subclasses, OutSystems.js:2).
 *                           Has User Id? (GetUserId() <> NullIdentifier, ACF:66-68):
 *                           - True: ShowExceptionMessage(message, ForceLogout = True) (ACF:69-75): the toast, then
 *                             Connect_Logout (signedOutRemotely, the server ended the session), then a full page load
 *                             of \UBTConnect\Login (exceptionMessages.ts).
 *                           - False: AppManager_SetAppCallback_CurrentLocation (OutSystems_LastURL = the path), then
 *                             /UBTConnect/Login with In_IsFromInvalidPermissions = True and the Default transition
 *                             (ACF:76-85).
 *   not a system exception  AllExceptions (ACF:91-117): a message that contains "NoteCommunicationError" (case
 *                           sensitive, ACF:98) → ShowCommunicationExceptionMessage (item 2 D3; NotesSheet raises it);
 *                           else ShowExceptionMessage(message, False) (ACF:105-110; as AcceptPendingPolicies Q2, user
 *                           2026-10-14; Q-W3B-2, user 2026-10-15).
 *   a system exception      raised again (ACF:119 `throw ex`): the runtime's error page (errorPage.ts, item 2 D1 (b),
 *                           user 2026-10-28), only from a valid context: navigateToErrorPage returns when the screen
 *                           of the flow is out of context (ErrorHandling W322831, `isValidContext`; R6 of item 8).
 *                           `scope` is the flow scope of the screen or block (platform/navigation/flowScope.ts); a
 *                           caller without one (the app start, the query subscription) keeps the error page.
 */
export function raiseToFlowHandler(error: unknown, scope?: FlowContext): void {
  if (isInstanceOf(error, IgnorableSystemException)) return;
  if (isUserException(error, 'UBTConnect.BubbleCommunicationException') || isCommunicationException(error)) {
    showCommunicationExceptionMessage();
    return;
  }
  if (isInstanceOf(error, SecurityException)) {
    if (currentUserId() !== null) {
      void showExceptionMessage(exceptionMessage(error), true);
      return;
    }
    setAppCallbackCurrentLocation();
    osNavigateTo(PATHS.login, { In_IsFromInvalidPermissions: true }, { transition: TransitionAnimation.Default });
    return;
  }
  if (!isSystemException(error)) {
    const message = exceptionMessage(error);
    if (message.includes('NoteCommunicationError')) showCommunicationExceptionMessage();
    else void showExceptionMessage(message, false);
    return;
  }
  if (scope === undefined || scope.active()) {
    showErrorPage(error);
    return;
  }
  log.error('error page skipped: out of context', {
    name: error instanceof Error ? error.name : typeof error,
    message: exceptionMessage(error),
  });
}
