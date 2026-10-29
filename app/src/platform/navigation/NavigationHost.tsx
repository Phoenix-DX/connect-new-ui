import { useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { QueryClientContext } from '@tanstack/react-query';
import { useBlocker, useLocation, useNavigate, useNavigationType, type BlockerFunction } from 'react-router';
import { commitEntry } from './historyStack';
import { shouldBlockNavigation } from './navigationGate';
import {
  setHostNavigate,
  setNavigationRedirect,
  setScreenCheck,
  type NavigationRedirect,
  type ScreenCheck,
} from './osNavigate';
import { dropViews } from './viewCache';

export interface NavigationHostProps {
  /** the flag redirects of the route table for useOsNavigate (AppFrame: app/routes.ts flagRedirectTarget) */
  redirect?: NavigationRedirect;
  /** the paths that show a screen; useOsNavigate sends any other path to a full page load (AppFrame: app/screens.ts
      showsScreen; item 9 D3, N14) */
  isScreen?: ScreenCheck;
}

/* Mounted once in AppFrame: the router's only blocker runs the navigation gate (back-navigation queue, view cache),
   and every shown entry is recorded in the history stack. A prevented back navigation stays where it is. It also
   gives the router's navigate to osNavigateTo, for the navigations that do not start in a component. */
export function NavigationHost({ redirect, isScreen }: NavigationHostProps): null {
  const location = useLocation();
  const navigationType = useNavigationType();
  const queryClient = useContext(QueryClientContext);
  const navigate = useNavigate();

  const shouldBlock = useCallback<BlockerFunction>(
    (args) =>
      shouldBlockNavigation(args, {
        queryClient,
        goBack: () => {
          void navigate(-1);
        },
        navigateTo: (path, replace, state) => {
          void navigate(path, { replace, state });
        },
      }),
    [queryClient, navigate],
  );
  const blocker = useBlocker(shouldBlock);

  useEffect(() => {
    if (blocker.state === 'blocked') blocker.reset();
  }, [blocker]);

  useLayoutEffect(() => {
    dropViews(commitEntry(location.key, navigationType));
  }, [location.key, navigationType]);

  useLayoutEffect(() => {
    setHostNavigate(navigate);
    return () => {
      setHostNavigate(null);
    };
  }, [navigate]);

  useLayoutEffect(() => {
    if (redirect === undefined) return undefined;
    setNavigationRedirect(redirect);
    return () => {
      setNavigationRedirect(null);
    };
  }, [redirect]);

  useLayoutEffect(() => {
    if (isScreen === undefined) return undefined;
    setScreenCheck(isScreen);
    return () => {
      setScreenCheck(null);
    };
  }, [isScreen]);

  return null;
}
