import { useEffect } from 'react';
import { startApp } from './appStartSteps';
import { applyTestSession } from '@/platform/session/testSession';

/* Runs the app start once per page load. Its end moves the session machine out of `starting` (runAppStart →
   markAppReady). The redirects that follow it are the route guard's (app/RouteGuard.tsx, mounted next to this host). */
export function AppStart() {
  useEffect(() => {
    void applyTestSession().then(startApp);
  }, []);

  return null;
}
