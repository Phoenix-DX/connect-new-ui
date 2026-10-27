import { useEffect, useRef } from 'react';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import {
  IgnorableSystemException,
  NotRegisteredException,
  ViewHasChangedException,
  isInstanceOf,
} from '@/legacy/os/os-exceptions';

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

/** The status of a query that `useFetchErrorToFlowHandler` reads (fields of the TanStack Query result). */
interface FetchErrorStatus {
  isError: boolean;
  error: unknown;
  errorUpdatedAt: number;
}

/**
 * A failed fetch of a screen or block data action goes to the handleError of its screen or block, then to the flow
 * handler (`raiseToFlowHandler`), once per failed fetch. The runtime flushes the model and then calls handleError
 * (OutSystems.js:17, the rejection of a data fetch: `t.model.flush(),t.handleError(e)`). The flow handler ignores an
 * IgnorableSystemException, such as ViewHasChangedException (OS.ErrorHandling.ignoreError, App_Common ACF:24-26).
 * The query status still drives the `list-error` classes and the skeleton of the screen.
 * Decisions: App_Services Q3 (a), Calendar Q1 (a), Directory_SupperMeetings Q1 (a), user 2026-10-27.
 */
export function useFetchErrorToFlowHandler(query: FetchErrorStatus): void {
  const errorAt = query.isError ? query.errorUpdatedAt : 0;
  const { error } = query;
  // The fetch that was raised last: StrictMode runs the effect again on mount, a new render does not raise again.
  const raisedAt = useRef(0);
  useEffect(() => {
    if (errorAt === 0 || errorAt === raisedAt.current) return;
    raisedAt.current = errorAt;
    if (isInstanceOf(error, IgnorableSystemException)) return;
    raiseToFlowHandler(error);
  }, [errorAt, error]);
}
