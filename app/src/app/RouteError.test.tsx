import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { RouteError } from './RouteError';

/* errorElement of the root route (router.tsx): an error outside the screen boundaries (the AppFrame hosts) is the TST
   root boundary of the Router (T5): ErrorHandling.handleError without a context, so the error page (E3, E4; P4).
   No marker in any build (migration/clarify/review/item9-solution.md §3.3, user 2026-10-29 point 2 (a)). */

function Broken(): never {
  throw new Error('host failed');
}

let logs: LogEntry[] = [];
let removeSink: () => void = () => undefined;
let location: { assign: ReturnType<typeof vi.fn> };

beforeEach(() => {
  logs = [];
  removeSink = addLogSink((entry) => logs.push(entry));
  location = { assign: vi.fn() };
  vi.stubGlobal('location', location);
  vi.spyOn(console, 'error').mockImplementation(() => undefined); // React Router and React report the error too
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

afterEach(() => {
  removeSink();
  vi.unstubAllGlobals();
});

const brokenRouter = () =>
  createMemoryRouter([{ path: '/', element: <Broken />, errorElement: <RouteError /> }], { initialEntries: ['/'] });

test('a route error is logged, then the error page opens; RouteError renders nothing and no marker', () => {
  const { container } = render(<RouterProvider router={brokenRouter()} />);
  expect(logs.map((entry) => entry.message)).toEqual(['route error', 'error page']);
  expect(logs[0]?.data).toEqual({ message: 'host failed' });
  expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
  expect(container).toBeEmptyDOMElement();
  expect(document.body.textContent).not.toContain('Not captured');
});

test('StrictMode runs the effect twice: the error page opens once per error', () => {
  render(
    <StrictMode>
      <RouterProvider router={brokenRouter()} />
    </StrictMode>,
  );
  expect(location.assign).toHaveBeenCalledOnce();
  expect(logs.filter((entry) => entry.message === 'route error')).toHaveLength(1);
});

test('a route error response (status and text) goes to the error page with that text', () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        loader: () => {
          // eslint-disable-next-line @typescript-eslint/only-throw-error -- React Router: a thrown Response is a route error response
          throw new Response(null, { status: 503, statusText: 'Service Unavailable' });
        },
        element: <p>never</p>,
        errorElement: <RouteError />,
      },
    ],
    { initialEntries: ['/'] },
  );
  render(<RouterProvider router={router} />);
  return vi.waitFor(() => {
    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
    expect(logs[0]?.data).toEqual({ message: '503 Service Unavailable' });
  });
});
