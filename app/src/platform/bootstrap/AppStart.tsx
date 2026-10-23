import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { DEFAULT_TRANSITION, transitionState } from '@/platform/navigation/screenTransition';
import { startApp } from './appStartSteps';
import { pinUnlockRedirect, signedOutRedirect } from './startup';
import { applyTestSession } from '@/platform/session/testSession';
import { useShellState } from '@/platform/session/session';

/* Runs the app start once per page load (its end moves the session machine out of `starting`: runAppStart →
   markAppReady), then applies its outcomes to navigation:
   - every screen a signed-out user opens is checked (the screens' checkRegistered, shell-facts U1);
   - the PIN check runs once, after the app-start calls (shell-observed U3).
   Both navigate with the Default transition: App_Common OnException → Login (ACF:81-84), and the TST captures of Login
   and PINUnlock reached this way end with `slide-from-right-enter-done` on the screen container (F18). */
export function AppStart() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { appReady } = useShellState();
  const pinChecked = useRef(false);

  useEffect(() => {
    void applyTestSession().then(startApp);
  }, []);

  useEffect(() => {
    if (!appReady) return;
    let to = signedOutRedirect(pathname);
    if (to === null && !pinChecked.current) to = pinUnlockRedirect(pathname);
    pinChecked.current = true;
    if (to !== null) void navigate(to, { state: transitionState(DEFAULT_TRANSITION) });
  }, [appReady, pathname, navigate]);

  return null;
}
