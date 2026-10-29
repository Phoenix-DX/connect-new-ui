import { QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import { Component, StrictMode, useSyncExternalStore } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { IgnorableSystemException, SystemException } from '@/legacy/os/os-exceptions';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { NavigationHost } from '@/platform/navigation/NavigationHost';
import { ScreenTransitionGroup } from '@/platform/navigation/ScreenTransitionGroup';
import { resetScreenTransition, transitionState } from '@/platform/navigation/screenTransition';
import { resetNavigation, testQueryClient } from '@/platform/navigation/testRouter';
import { FeedbackMessageHost } from './FeedbackMessageHost';
import { resetFeedbackDebounce } from './feedbackMessageAutoClose';
import { getFeedbackMessage, resetFeedbackMessages } from './feedbackStore';
import { isRenderLoopError, RenderErrorBoundary } from './RenderErrorBoundary';

/* Item 9 D1 and D2 (migration/clarify/review/item9-solution.md §2, §3, §9.1; user 2026-10-29, point 1 (a)). TST: the
   ErrorBoundary of the View renders null and never resets (T1, T2); View.onError sends a render loop to the error page
   and every other error to the flow handler (T3), App_Common for UBTConnect (E5, E8). Probes P1 to P3: the View is
   empty, the URL stays, a toast shows the message with a full stop (PRR:u4.outerBlockOwn.toastBoxes). */

const failures = new Map<string, Error>();
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
const emit = () => {
  for (const listener of listeners) listener();
};
/** The next render of the probe of `name` throws `error`. */
function failIn(name: string, error: Error): void {
  failures.set(name, error);
  act(emit);
}

function Probe({ name }: { name: string }) {
  const error = useSyncExternalStore(subscribe, () => failures.get(name));
  if (error) throw error;
  return <p>{name} content</p>;
}

/** A screen element as router.tsx gives it: the boundary around the screen. It re-renders on every emit, so the
    boundary instance gets new props (T2: still nothing after the error). */
function ScreenElement({ name }: { name: string }) {
  useSyncExternalStore(subscribe, () => failures.size);
  return (
    <RenderErrorBoundary name={name}>
      <Probe name={name} />
    </RenderErrorBoundary>
  );
}

let logs: LogEntry[] = [];
let removeSink: () => void = () => undefined;
let location: { assign: ReturnType<typeof vi.fn> };

beforeEach(() => {
  vi.useFakeTimers();
  resetNavigation();
  resetScreenTransition();
  resetFeedbackMessages();
  resetFeedbackDebounce();
  failures.clear();
  logs = [];
  removeSink = addLogSink((entry) => logs.push(entry));
  location = { assign: vi.fn() };
  vi.stubGlobal('location', location);
  vi.spyOn(console, 'error').mockImplementation(() => undefined); // React reports the caught error too
});

afterEach(() => {
  removeSink();
  vi.unstubAllGlobals();
  vi.useRealTimers();
  resetFeedbackMessages();
});

/** The frame of AppFrame.tsx: NavigationHost, the screen containers of ScreenTransitionGroup, the toast host outside
    them (CommonUiHost, AppFrame.tsx:29). */
function setup(path = '/A', { strict = false } = {}) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <div id="transitionContainer">
            <NavigationHost />
            <ScreenTransitionGroup />
            <FeedbackMessageHost />
          </div>
        ),
        children: [
          { path: 'A', element: <ScreenElement name="A" /> },
          { path: 'B', element: <ScreenElement name="B" /> },
        ],
      },
    ],
    { initialEntries: [path] },
  );
  const tree = (
    <QueryClientProvider client={testQueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
  render(strict ? <StrictMode>{tree}</StrictMode> : tree);
  const go = async (to: string) => {
    await act(async () => {
      await router.navigate(to, { state: transitionState('slide-from-right') });
    });
  };
  const advance = async (ms: number) => {
    await act(async () => {
      await vi.advanceTimersByTimeAsync(ms);
    });
  };
  return { router, go, advance };
}

const containers = () => [...document.querySelectorAll('#transitionContainer > .screen-container')];
const logged = (message: string) => logs.filter((entry) => entry.message === message);

describe('RenderErrorBoundary (one per screen route element)', () => {
  test('1, 2, 8: a plain Error: the screen is empty, "render error" logged once, the App_Common toast shows (P3)', () => {
    const { router } = setup();
    expect(screen.getByText('A content')).toBeInTheDocument();

    failIn('A', new Error('Probe U4 outer own'));

    // the container of the entry stays in the document and is empty, the URL stays (P3)
    expect(containers()).toHaveLength(1);
    expect(containers()[0]?.className).toBe('active-screen screen-container');
    expect(containers()[0]?.childNodes).toHaveLength(0);
    expect(router.state.location.pathname).toBe('/A');
    expect(logged('render error')).toEqual([
      expect.objectContaining({ level: 'error', data: expect.objectContaining({ screen: 'A' }) as unknown }),
    ]);
    // ShowExceptionMessage(message, False) (E8): FeedbackMessage_AutoClose adds the full stop (JSU:128-131), the TST
    // text of PRR:u4.outerBlockOwn.toastBoxes
    expect(getFeedbackMessage()?.message).toBe('Probe U4 outer own.');
    // 8: the toast host outside the screen containers still renders the message
    const toast = document.querySelector('#feedbackMessageContainer .feedback-message-error');
    expect(toast?.textContent).toBe('Probe U4 outer own.');
    expect(location.assign).not.toHaveBeenCalled();
  });

  test('StrictMode: one log line and one toast per error', () => {
    setup('/A', { strict: true });
    failIn('A', new Error('Probe U4 inner own'));
    expect(logged('render error')).toHaveLength(1);
    expect(getFeedbackMessage()?.message).toBe('Probe U4 inner own.');
    expect(location.assign).not.toHaveBeenCalled();
  });

  test('3: a SystemException of the active screen: the error page once, no toast (App_Common raises it again)', () => {
    setup();
    failIn('A', new SystemException('The system is unavailable'));
    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
    expect(getFeedbackMessage()).toBeNull();
  });

  test('4: a render loop ("Maximum update depth exceeded", View.isLoopError): the error page, no toast (T3)', () => {
    // a new state on each commit: React stops after its nested update limit and throws the error
    class Loop extends Component<object, { count: number }> {
      override state = { count: 0 };
      override componentDidMount() {
        this.setState(({ count }) => ({ count: count + 1 }));
      }
      override componentDidUpdate() {
        this.setState(({ count }) => ({ count: count + 1 }));
      }
      override render() {
        return <p>{this.state.count}</p>;
      }
    }
    render(
      <RouterProvider
        router={createMemoryRouter([
          {
            path: '/',
            element: (
              <RenderErrorBoundary name="A">
                <Loop />
              </RenderErrorBoundary>
            ),
          },
        ])}
      />,
    );
    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
    expect(logged('error page')).toHaveLength(1);
    expect(getFeedbackMessage()).toBeNull();
  });

  test('4: isRenderLoopError is the TST text test: /Maximum update depth exceeded/i anywhere in the message', () => {
    expect(isRenderLoopError(new Error('Maximum update depth exceeded. This can happen when…'))).toBe(true);
    expect(isRenderLoopError(new Error('Error: maximum UPDATE depth exceeded'))).toBe(true);
    expect(isRenderLoopError({ message: 'Maximum update depth exceeded' })).toBe(true);
    // the production build of React minifies the text (#185), as TST's React does: no match, the flow handler
    expect(isRenderLoopError(new Error('Minified React error #185; visit https://react.dev/errors/185'))).toBe(false);
    expect(isRenderLoopError('Maximum update depth exceeded')).toBe(false);
    expect(isRenderLoopError(null)).toBe(false);
  });

  test('5: an IgnorableSystemException: nothing shows, the log has "render error" only', () => {
    setup();
    failIn('A', new IgnorableSystemException('ignored'));
    expect(containers()[0]?.childNodes).toHaveLength(0);
    expect(getFeedbackMessage()).toBeNull();
    expect(location.assign).not.toHaveBeenCalled();
    expect(logs.map((entry) => entry.message)).toEqual(['render error']);
  });

  test('6: a leaving screen (not the current entry): a SystemException skips the error page (R6)', async () => {
    const { go, advance } = setup();
    await go('/B');
    expect(containers()).toHaveLength(2); // A leaves during the 300 ms transition

    failIn('A', new SystemException('late render'));

    expect(location.assign).not.toHaveBeenCalled();
    expect(logged('error page skipped: out of context')).toHaveLength(1);
    expect(screen.getByText('B content')).toBeInTheDocument();
    await advance(300);
    expect(containers()).toHaveLength(1);
  });

  test('7: after the error the same instance renders nothing (T2); a new entry of the screen renders it again', async () => {
    const { go, advance } = setup();
    failIn('A', new Error('Probe U4 outer own'));
    expect(screen.queryByText('A content')).toBeNull();

    // the error is gone and the boundary re-renders with new props: still nothing (hasError never resets)
    failures.clear();
    act(emit);
    expect(screen.queryByText('A content')).toBeNull();

    await go('/B');
    await advance(300);
    await go('/A');
    await advance(300);
    expect(screen.getByText('A content')).toBeInTheDocument();
  });
});
