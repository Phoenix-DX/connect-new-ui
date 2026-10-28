import { CancelledError, type QueryClient } from '@tanstack/react-query';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
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

/**
 * A failed fetch of a query goes to the flow handler (`raiseToFlowHandler`), once per failed fetch: the OutSystems
 * runtime flushes the model, then calls the handleError of the screen or block, which ends in the App_Common handler
 * (OutSystems.js executeDataFetchAction: `t.model.flush(),t.handleError(e)`; item2-fetch-errors.md E1–E3, confirmed
 * by a read-only probe on TST for screens and for blocks of UBTConnect and of three other modules). One subscription on
 * the query cache covers
 * every query, so a page does nothing for a failed fetch; the query status still drives the skeleton and the
 * `list-error` classes. A query that a flow awaits (refetch(), fetchQuery) and handles itself carries
 * `meta: { errorFlow: 'caller' }` and is left alone. A cancelled fetch is not a failed fetch, and a fetch that fails
 * after its screen or block unmounted (no observer) raises nothing, as TST (E9). main.tsx installs it on
 * the app client; tests use testQueryClient() (platform/navigation/testRouter.tsx).
 * Design (a) of migration/clarify/review/item2-solution.md, user 2026-10-28. Returns the uninstall function.
 */
export function installQueryErrorsToFlowHandler(client: QueryClient): () => void {
  return client.getQueryCache().subscribe((event) => {
    if (event.type !== 'updated' || event.action.type !== 'error') return;
    const error: unknown = event.action.error;
    if (error instanceof CancelledError || event.query.meta?.errorFlow === 'caller') return;
    // No mounted caller: the user left the screen or block. TST shows no message then (E9, probe
    // probe_fetch_errors.cjs --late; item2-solution.md §8.1, user 2026-10-28).
    if (event.query.getObserversCount() === 0) return;
    raiseToFlowHandler(error);
  });
}
