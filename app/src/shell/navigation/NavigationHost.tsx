import { useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { QueryClientContext } from '@tanstack/react-query';
import { useBlocker, useLocation, useNavigate, useNavigationType, type BlockerFunction } from 'react-router';
import { commitEntry } from './historyStack';
import { shouldBlockNavigation } from './navigationGate';
import { dropViews } from './viewCache';

/* Mounted once in AppFrame: the router's only blocker runs the navigation gate (back-navigation queue, view cache),
   and every shown entry is recorded in the history stack. A prevented back navigation stays where it is. */
export function NavigationHost(): null {
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

  return null;
}
