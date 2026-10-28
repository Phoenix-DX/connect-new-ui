import { useSyncExternalStore, type ReactNode } from 'react';
import { getErrorPage, subscribeErrorPage } from '@/platform/feedback/errorPage';
import { NotCaptured } from '@/platform/feedback/NotCaptured';

/* The app, until the runtime's error page opens (platform/feedback/errorPage.ts): then the review marker of the
   original app's `_error.html` (not captured) with the message, in place of the whole app, as TST leaves the app for
   that page. Item 2 D1 (b), user 2026-10-28. */
export function ErrorPageGate({ children }: { children: ReactNode }) {
  const errorPage = useSyncExternalStore(subscribeErrorPage, getErrorPage);
  if (errorPage) {
    return <NotCaptured name="error screen of the original app (_error.html)">{errorPage.message}</NotCaptured>;
  }
  return <>{children}</>;
}
