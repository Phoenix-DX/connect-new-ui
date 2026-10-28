import { log } from '@/platform/log/log';

/* The runtime's error page (OS.ErrorHandling handleError → navigateToErrorPage, OutSystems.js): an error that no flow
   handler takes, a system exception that App_Common raises again (ACF:119 `throw ex`), is logged
   (`OS.Logger.error(null, e)`), then the app leaves for `_error.html` with the message of the exception. React has no
   copy of `_error.html` (not captured): app/ErrorPageGate.tsx shows the review marker with the message in place of the
   app (item 2 D1 (b), user 2026-10-28; migration/clarify/review/item2-solution.md §5.1). */

interface ErrorPage {
  message: string;
}

let current: ErrorPage | null = null;
const listeners = new Set<() => void>();

/** navigateToErrorPage(e): log the error, then the error page with its message. */
export function showErrorPage(error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  log.error('error page', { name: error instanceof Error ? error.name : typeof error, message });
  current = { message };
  for (const listener of listeners) listener();
}

export const getErrorPage = (): ErrorPage | null => current;

export function subscribeErrorPage(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Tests: no error page. */
export function resetErrorPage(): void {
  current = null;
  for (const listener of listeners) listener();
}
