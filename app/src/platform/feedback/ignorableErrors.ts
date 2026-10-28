import { IgnorableSystemException, isInstanceOf } from '@/legacy/os/os-exceptions';

/* The top-level ignore filter: the TST runtime ignores an IgnorableSystemException that no flow handler took
   (OS.ErrorHandling.ignoreError W324172). Item 8 §2.4: a navigation of a left screen throws OutOfContextException,
   also from a click handler without a `.catch` (`onClick={() => { go('/x'); }}`), and `flow.fetch` and `flow.own`
   throw ControllerDisposedException. The filter keeps them out of the console, as on TST. main.tsx installs it. */

/** Installs the `error` and `unhandledrejection` listeners on the window. Returns the uninstall function. */
export function installIgnorableErrorFilter(): () => void {
  const onError = (event: ErrorEvent): void => {
    if (isInstanceOf(event.error, IgnorableSystemException)) event.preventDefault();
  };
  const onRejection = (event: PromiseRejectionEvent): void => {
    if (isInstanceOf(event.reason, IgnorableSystemException)) event.preventDefault();
  };
  window.addEventListener('error', onError);
  window.addEventListener('unhandledrejection', onRejection);
  return () => {
    window.removeEventListener('error', onError);
    window.removeEventListener('unhandledrejection', onRejection);
  };
}
