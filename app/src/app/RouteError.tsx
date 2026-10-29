import { useEffect, useRef } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';
import { showErrorPage } from '@/platform/feedback/errorPage';
import { log } from '@/platform/log/log';

/* errorElement of the root route (router.tsx): an error thrown while rendering or loading a route outside the screen
   boundaries (platform/feedback/RenderErrorBoundary.tsx), so in the AppFrame hosts (AppStart, NavigationHost,
   AppLockHost, CommonUiHost, StylesheetHost). It is the TST root boundary of the Router (T5): runtime.handleError →
   ErrorHandling.handleError without a context, so the error page (E3, E4; P4). It logs, opens the error page and renders
   nothing; no marker in any build (migration/clarify/review/item9-solution.md §3.3, user 2026-10-29 point 2 (a)). The
   errorElement stays: without one, React Router renders its own default error page. */
export function RouteError(): null {
  const error = useRouteError();
  // StrictMode runs the effect twice for the same error: the page opens once (the ref survives the second run)
  const shown = useRef<unknown>(undefined);
  useEffect(() => {
    if (shown.current === error) return;
    shown.current = error;
    const failure = isRouteErrorResponse(error) ? new Error(`${String(error.status)} ${error.statusText}`) : error;
    log.error('route error', { message: failure instanceof Error ? failure.message : String(failure) });
    showErrorPage(failure);
  }, [error]);
  return null;
}
