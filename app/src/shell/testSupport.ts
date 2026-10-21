import { server } from '../test/setup';
import { pinSessionInactivityDestroy } from './inactivity';
import { setOrbitStaticEntitiesDatabase } from './localEntities/orbitStaticEntities';
import { setRecentSearchDatabase } from './localEntities/recentSearch';
import { clearMemoryCache } from './memoryCache';
import { getResumeLoginLink } from './resume';
import { setReviewMarkers } from './reviewMarkers';
import { resetAppStart } from './startup';
import { writeItem } from './storage';
import { TAB_STARTED } from './testSession';

/* Test helpers of the shell: a fresh page (empty storage, no in-memory state) and the calls the app made. Tabs count as
   already started, so tests see the original app without the demo-default mock session (testSession.ts), and review
   markers are on, as with `?review=1` (reviewMarkers.ts). */
function markTabStarted(): void {
  writeItem('session', TAB_STARTED, true);
  setReviewMarkers(true);
}

export function freshPage(): void {
  localStorage.clear();
  sessionStorage.clear();
  sessionStorage.setItem('mock:latency', '0');
  markTabStarted();
  window.__osCalls = [];
  server.events.removeAllListeners();
  clearMemoryCache();
  getResumeLoginLink();
  resetAppStart();
  pinSessionInactivityDestroy();
  setRecentSearchDatabase(null);
  setOrbitStaticEntitiesDatabase(null);
}

/** A reload or a new tab: the in-memory state goes; a new tab also loses sessionStorage. */
export function reloadPage({ newTab = false } = {}): void {
  if (newTab) {
    sessionStorage.clear();
    sessionStorage.setItem('mock:latency', '0');
    markTabStarted();
  }
  window.__osCalls = [];
  clearMemoryCache();
  resetAppStart();
  pinSessionInactivityDestroy();
}

/** Actions called so far, in call order (data actions as Owner/Action). */
export const calledActions = (): string[] =>
  (window.__osCalls ?? []).map((c) => (c.owner ? `${c.owner}/${c.action}` : c.action));

/** Request bodies sent to one action, in order. */
export function recordBodies(actionPath: string): unknown[] {
  const bodies: unknown[] = [];
  server.events.on('request:start', ({ request }) => {
    if (new URL(request.url).pathname !== `/api/${actionPath}`) return;
    const index = bodies.push(undefined) - 1;
    void request
      .clone()
      .json()
      .then((body: unknown) => {
        bodies[index] = body;
      });
  });
  return bodies;
}
