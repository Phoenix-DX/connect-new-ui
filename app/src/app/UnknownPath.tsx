import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { showReviewMarkers } from '@/legacy/os/reviewMarkers';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { log } from '@/platform/log/log';

/* The `*` route: a path that no screen has (item 9 D3 and D4, migration/clarify/review/item9-solution.md §4.3). TST
   never shows the app on such a path. A later navigation is a full page load (N14, P6; useOsNavigate does the same,
   platform/navigation/osNavigate.ts goTo). A first load gets the server's HTTP 404 (P7; the dev and preview servers do
   the same, build/unknownPaths.ts). When the app starts on such a path all the same (a host that serves index.html
   for every path), TST's Root renders nothing: no route matches, so `screenLoader.load` returns null (N5, R267479).
   The "unknown route" marker shows on the dev server with `?review=1` only: from inside the app, this route means a
   `navigate()` call that bypassed goTo. */
export function UnknownPath() {
  const { pathname, search } = useLocation();
  const path = pathname + search;
  useEffect(() => {
    log.error('unknown path', { path });
  }, [path]);
  if (!showReviewMarkers()) return null;
  return (
    <NotCaptured name="unknown route">
      <code className="rv-code">{path}</code>
    </NotCaptured>
  );
}
