import { NotRegisteredException, ViewHasChangedException, isInstanceOf } from '@/legacy/os/os-exceptions';

/* The errors of a client action flow, for pages and hooks: plan v2 §2.4 rule 9 lets only platform/, api/ and app/
   import legacy/os/. The barrel of platform/feedback does not export this module, because legacy/os/exceptions
   imports that barrel (an import cycle). */

export { isCommunicationException, raiseToFlowHandler } from '@/legacy/os/exceptions';

/** The server answered that the screen changed version (ViewHasChangedException, an ignorable system exception): a
    data source keeps its fetch status then. */
export const isViewHasChangedException = (error: unknown): boolean => isInstanceOf(error, ViewHasChangedException);

/** A user exception, of one type when `specificType` is set ("Handle Error: <Module>.<UserException>"). */
export { isUserException } from '@/legacy/os/exceptions';

/** The class of a user exception, for a client action that raises one (`new UserException(message, specificType)`). */
export { UserException } from '@/legacy/os/os-exceptions';

/** "Handle Error: NotRegistered": the user is not signed in (NotRegisteredException, a SecurityException). */
export const isNotRegisteredException = (error: unknown): boolean => isInstanceOf(error, NotRegisteredException);

/** OS.Exceptions.isSystem: "Handle Error: AllExceptions" catches every error for which this is false. */
export { isSystemException } from '@/legacy/os/exceptions';
