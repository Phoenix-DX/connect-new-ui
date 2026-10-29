import { render } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { ErrorBoundary } from './ErrorBoundary';

/* The boundary around RouterProvider (main.tsx): an error outside the screens is the TST root boundary (T5,
   runtime.handleError → ErrorHandling.handleError without a context → the error page, E3, E4). No marker in any build
   (migration/clarify/review/item9-solution.md §3.3, user 2026-10-29 point 2 (a)). */

function Broken(): never {
  throw new Error('boom');
}

let logs: LogEntry[] = [];
let removeSink: () => void = () => undefined;
let location: { assign: ReturnType<typeof vi.fn> };

beforeEach(() => {
  logs = [];
  removeSink = addLogSink((entry) => logs.push(entry));
  location = { assign: vi.fn() };
  vi.stubGlobal('location', location);
  vi.spyOn(console, 'error').mockImplementation(() => undefined); // React reports the error too
});

afterEach(() => {
  removeSink();
  vi.unstubAllGlobals();
});

test('a render error is logged, then the error page opens; the boundary renders nothing and no marker', () => {
  const { container } = render(
    <ErrorBoundary>
      <Broken />
    </ErrorBoundary>,
  );
  expect(logs.map((entry) => entry.message)).toEqual(['render error', 'error page']);
  expect(logs[0]).toEqual(
    expect.objectContaining({ level: 'error', data: expect.objectContaining({ message: 'boom' }) as unknown }),
  );
  expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
  expect(container).toBeEmptyDOMElement();
  expect(document.body.textContent).not.toContain('Not captured');
});
