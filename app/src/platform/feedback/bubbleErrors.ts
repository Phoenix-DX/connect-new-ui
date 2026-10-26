import {
  NotRegisteredException,
  UserException,
  exceptionMessage,
  isCommunicationException,
  isInstanceOf,
  isSystemException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';

/* The exception handlers of a screen action that bubble an error up, for pages and hooks (plan v2 §2.4 rule 9: only
   platform/, api/ and app/ import legacy/os/). A module of its own, not part of flowErrors.ts: the pages that use it
   load it with their own chunk, so the first load of HomeFeed and Login does not grow. The barrel of
   platform/feedback does not export it, because legacy/os/exceptions imports that barrel (an import cycle). */

/** The exception handlers of a screen action that bubble an error up as a UBTConnect user exception, then the flow
    handler. In order: a NotRegisteredException goes up as it is; a CommunicationException becomes
    BubbleCommunicationException; any other error that is not a system exception (AllExceptions) becomes
    BubbleGenericException; a system exception goes up as it is. The new exception keeps the message. */
export function raiseBubbledToFlowHandler(error: unknown): void {
  if (isInstanceOf(error, NotRegisteredException)) {
    raiseToFlowHandler(error);
    return;
  }
  if (isCommunicationException(error)) {
    raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleCommunicationException'));
    return;
  }
  if (!isSystemException(error)) {
    raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleGenericException'));
    return;
  }
  raiseToFlowHandler(error);
}
