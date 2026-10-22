import { useEffect } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';
import { NotCaptured } from '@/components/NotCaptured';
import { log } from '@/lib/log';

/* errorElement of the root route: errors thrown while rendering or loading a route. Logged, then the review marker
   (the original app's error screen is not captured yet). */
export function RouteError() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : 'unknown error';
  useEffect(() => {
    log.error('route error', { message });
  }, [message]);
  return <NotCaptured name="error screen of the original app (route error)">{message}</NotCaptured>;
}
