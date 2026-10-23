import {
  CommunicationException,
  SecurityException,
  SystemException,
  UserException,
  isInstanceOf,
} from '@/legacy/os/os-exceptions';
import { showCommunicationExceptionMessage, showExceptionMessage } from '@/platform/feedback';
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
  Exception,
  InvalidLoginException,
  NotRegisteredException,
  SecurityException,
  ServerException,
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

/** OS.Exceptions.getMessage (OutSystems.js:2): an Error's message, else its text. */
export const exceptionMessage = (error: unknown): string => (error instanceof Error ? error.message : String(error));

/**
 * An error a flow did not handle, going up to the screen's handleError and the App_Common flow handler: App_Common
 * OnException (migration/shell/sources/UBTConnect.App_Common.controller.js, "ACF", :12-125). Its branches, in order:
 *   CommunicationException  ShowCommunicationExceptionMessage (ACF:46-59).
 *   SecurityException       InvalidLoginException and NotRegisteredException too (subclasses, OutSystems.js:2).
 *                           Has User Id? (GetUserId() <> NullIdentifier, ACF:66-68):
 *                           - True: ShowExceptionMessage(message, ForceLogout = True) (ACF:69-75): the toast, then
 *                             Connect_Logout (signedOutRemotely, the server ended the session), then a full page load
 *                             of \UBTConnect\Login (exceptionMessages.ts).
 *                           - False: AppManager_SetAppCallback_CurrentLocation (OutSystems_LastURL = the path), then
 *                             /UBTConnect/Login with In_IsFromInvalidPermissions = True and the Default transition
 *                             (ACF:76-85).
 *   any other error         ShowExceptionMessage(message, False) (ACF:91-105; as AcceptPendingPolicies Q2, user
 *                           2026-10-14; Q-W3B-2, user 2026-10-15).
 */
export function raiseToFlowHandler(error: unknown): void {
  if (isCommunicationException(error)) {
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
  void showExceptionMessage(exceptionMessage(error), false);
}
