import { log } from '@/platform/log/log';

/* The runtime's error page (OS.ErrorHandling handleError → navigateToErrorPage, OutSystems.js W322831): an error that
   no flow handler takes, a system exception that App_Common raises again (ACF:119 `throw ex`), is logged
   (`OS.Logger.error(null, e)`), the texts of the page go to sessionStorage, then the window changes to `_error.html`
   (changeWindowLocation). The page is the static document public/UBTConnect/_error.html, outside the React tree, as on
   TST (item 8 design B (a), user 2026-10-28; migration/clarify/review/item8-solution.md §3; facts P1-P7 of
   item8-w23-errorpage.md §2). */

/** ErrorHandling ERROR_PAGE_HTML "_error.html" (W325084) under the application root. */
const ERROR_PAGE_URL = '/UBTConnect/_error.html';

/** ErrorHandlingStorage (W325084) through StorageObject (W38048): "$OS_" + the default storage namespace, which is the
    home module (Application init, W493724) + "$" + the key; the value is JSON. _error.html reads the same keys. */
const storageKey = (key: string) => `$OS_UBTConnect$${key}`;

/** navigateToErrorPage(e): log the error, store the texts of the page, then the page `_error.html`. */
export function showErrorPage(error: unknown): void {
  const name = error instanceof Error ? error.name : undefined;
  const message = error instanceof Error ? error.message : String(error);
  log.error('error page', { name: name ?? typeof error, message });
  try {
    // P7: handleError passes no message and no extra message, so the page shows its default text
    sessionStorage.setItem(storageKey('ErrorPageMessage'), JSON.stringify(''));
    sessionStorage.setItem(storageKey('ErrorPageExtraMessage'), JSON.stringify(''));
    // getExceptionInfo (W45759); the page writes its message to the console only
    sessionStorage.setItem(storageKey('ErrorPageExceptionInfo'), JSON.stringify({ name, message }));
  } catch {
    // no session storage (private mode, quota): the page shows its default texts
  }
  window.location.assign(ERROR_PAGE_URL);
}
