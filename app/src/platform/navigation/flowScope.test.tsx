import { useLayoutEffect } from 'react';
import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { ControllerDisposedException, SystemException } from '@/legacy/os/os-exceptions';
import { showErrorPage } from '@/platform/feedback/errorPage';
import { getFeedbackMessage, resetFeedbackMessages, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowScope, type FlowScope } from './flowScope';
import { useFlowState } from './flowState';
import { renderRoutes, resetNavigation } from './testRouter';

/* The flow scope (migration/clarify/review/item8-solution.md §2, design A, user 2026-10-28): the TST rules R1–R6 of a
   flow after the user left its screen or block (item8-w23-errorpage.md §1). The real flow handler runs; the spy only
   records its calls. */

// The error page is a full window change (platform/feedback/errorPage.ts): recorded only.
vi.mock('@/platform/feedback/errorPage', () => ({ showErrorPage: vi.fn() }));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/platform/feedback/flowErrors')>();
  return { ...original, raiseToFlowHandler: vi.fn(original.raiseToFlowHandler) };
});

interface Counter {
  count: number;
}
type CounterAction = { type: 'add'; by: number };
const counterReducer = (state: Counter, action: CounterAction): Counter => ({ count: state.count + action.by });

/** A call that answers when the test says so. */
function pendingCall<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

const flush = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

/** The scope of the last rendered Probe. */
const probe: { current: FlowScope | null } = { current: null };
function Probe() {
  const flow = useFlowScope();
  useLayoutEffect(() => {
    probe.current = flow;
  });
  return null;
}

beforeEach(() => {
  resetNavigation();
  vi.mocked(showErrorPage).mockClear();
  resetFeedbackMessages();
  vi.mocked(raiseToFlowHandler).mockClear();
});

/** OnReady awaits a data action through `flow.fetch`, then runs its OnAfterFetch body and writes the state. */
function DataActionScreen({
  call,
  afterFetch,
  reducer = counterReducer,
}: {
  call: Promise<number>;
  afterFetch: (value: number) => void;
  reducer?: (state: Counter, action: CounterAction) => Counter;
}) {
  const { state, dispatch, flow } = useFlowState({
    viewName: 'Counter',
    reducer,
    initial: { count: 0 },
    parameters: {},
    onReady: async () => {
      const value = await flow.fetch(call);
      afterFetch(value);
      dispatch({ type: 'add', by: value });
    },
  });
  return <p>count: {state.count}</p>;
}

describe('flow.fetch: a data action or an aggregate (R1, callServerDataSource W533101)', () => {
  test('the screen is there: the answer goes on to the rest of the flow', async () => {
    const call = pendingCall<number>();
    const afterFetch = vi.fn();
    render(<DataActionScreen call={call.promise} afterFetch={afterFetch} />, { wrapper: MemoryRouter });

    call.resolve(5);
    await flush();

    expect(afterFetch).toHaveBeenCalledWith(5);
    expect(screen.getByText('count: 5')).toBeInTheDocument();
  });

  test('1. unmount while pending, the call resolves: the rest of the flow does not run, no dispatch, no raise', async () => {
    const call = pendingCall<number>();
    const afterFetch = vi.fn();
    const reducer = vi.fn(counterReducer);
    const { unmount } = render(<DataActionScreen call={call.promise} afterFetch={afterFetch} reducer={reducer} />, {
      wrapper: MemoryRouter,
    });
    const writes = reducer.mock.calls.length;
    unmount();

    call.resolve(5);
    await flush();

    expect(afterFetch).not.toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledTimes(writes);
    // The stop is a ControllerDisposedException: the flow handler ignores it.
    for (const [error] of vi.mocked(raiseToFlowHandler).mock.calls) {
      expect(error).toBeInstanceOf(ControllerDisposedException);
    }
    expect(showErrorPage).not.toHaveBeenCalled();
    expect(getFeedbackMessage()).toBeNull();
  });

  test('2. unmount while pending, the call rejects: the failure reaches no handler', async () => {
    const call = pendingCall<number>();
    const error = new SystemException('GetMilestone failed');
    const { unmount } = render(<DataActionScreen call={call.promise} afterFetch={vi.fn()} />, {
      wrapper: MemoryRouter,
    });
    unmount();

    call.reject(error);
    await flush();

    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([e]) => e)).not.toContain(error);
    expect(showErrorPage).not.toHaveBeenCalled();
  });

  test('the screen is there, the call rejects: the failure goes on to the flow', async () => {
    render(<Probe />, { wrapper: MemoryRouter });
    const error = new Error('GetHousehold failed');

    await expect(probe.current?.fetch(Promise.reject(error))).rejects.toBe(error);
  });
});

describe('a server action, a toast and an own action (R2, R5, R3)', () => {
  test('3. unmount while a server action is pending: the flow goes on and the toast shows; the own action stops', async () => {
    const serverAction = pendingCall<undefined>();
    const refreshed = vi.fn();
    const afterRefresh = vi.fn();
    function ServerActionScreen() {
      const { flow } = useFlowState({
        viewName: 'Counter',
        reducer: counterReducer,
        initial: { count: 0 },
        parameters: {},
        onReady: async () => {
          await serverAction.promise; // a server action: not wrapped (R2, innerCallServerAction W523585)
          showFeedbackMessage('Saved', 1); // R5: a toast has no context check (W325288)
          refreshMessages(); // R3: ensureControllerAlive (W534313)
          afterRefresh();
        },
      });
      /** An own client action of the screen. */
      const refreshMessages = flow.own(() => {
        refreshed();
      });
      return null;
    }
    const { unmount } = render(<ServerActionScreen />, { wrapper: MemoryRouter });
    unmount();

    serverAction.resolve(undefined);
    await flush();

    expect(getFeedbackMessage()?.message).toBe('Saved');
    expect(refreshed).not.toHaveBeenCalled();
    expect(afterRefresh).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(ControllerDisposedException), expect.anything());
    expect(showErrorPage).not.toHaveBeenCalled();
  });

  test('flow.own runs the action while the instance is there', () => {
    render(<Probe />, { wrapper: MemoryRouter });
    const action = probe.current?.own((a: number, b: number) => a + b);

    expect(action?.(2, 3)).toBe(5);
  });
});

describe('flow.events: the block events (R3)', () => {
  interface BlockEvents {
    onDone: (id: string) => void;
    onClose?: () => void;
  }
  const scope = { current: null as FlowScope<BlockEvents> | null };
  function Block({ onDone }: { onDone: (id: string) => void }) {
    const flow = useFlowScope<BlockEvents>({ onDone });
    useLayoutEffect(() => {
      scope.current = flow;
    });
    return null;
  }

  test('the block is there: the event calls the newest handler of the parent; a missing handler does nothing', () => {
    const first = vi.fn();
    const newest = vi.fn();
    const { rerender } = render(<Block onDone={first} />, { wrapper: MemoryRouter });
    rerender(<Block onDone={newest} />);

    scope.current?.events.onDone('A');
    scope.current?.events.onClose?.();

    expect(first).not.toHaveBeenCalled();
    expect(newest).toHaveBeenCalledWith('A');
  });

  test('4. after the unmount: the parent handler is not called', () => {
    const onDone = vi.fn();
    const { unmount } = render(<Block onDone={onDone} />, { wrapper: MemoryRouter });
    unmount();

    scope.current?.events.onDone('A');

    expect(onDone).not.toHaveBeenCalled();
  });
});

describe('flow.alive, flow.active and flow.run', () => {
  const scopes: Record<string, FlowScope | undefined> = {};
  function Named({ name }: { name: string }) {
    const flow = useFlowScope();
    useLayoutEffect(() => {
      scopes[name] = flow;
    });
    return <p>screen {name}</p>;
  }

  test('alive is true until the unmount; active is true while the entry of the screen is the current one', async () => {
    // B has another root element: React does not reuse the instance of A.
    const { router } = renderRoutes(
      {
        '/UBTConnect/A': <Named name="A" />,
        '/UBTConnect/B': (
          <section>
            <Named name="B" />
          </section>
        ),
      },
      '/UBTConnect/A',
    );
    const a = scopes.A;
    expect(a?.alive()).toBe(true);
    expect(a?.active()).toBe(true);

    await act(() => router.navigate('/UBTConnect/B'));

    expect(screen.getByText('screen B')).toBeInTheDocument();
    expect(a?.alive()).toBe(false);
    expect(a?.active()).toBe(false);
    expect(scopes.B?.active()).toBe(true);
  });

  test('run sends an unhandled error of a widget flow to the flow handler with the scope (R6 context)', async () => {
    const error = new Error('The note could not be saved');
    function Widget() {
      const flow = useFlowScope();
      return (
        <button
          type="button"
          onClick={() => {
            flow.run(() => Promise.reject(error));
          }}
        >
          save
        </button>
      );
    }
    render(<Widget />, { wrapper: MemoryRouter });

    await userEvent.click(screen.getByText('save'));
    await flush();

    expect(raiseToFlowHandler).toHaveBeenCalledWith(
      error,
      expect.objectContaining({ active: expect.any(Function) as unknown }),
    );
  });

  /* User, 2026-10-28 (S3b Q1 (a)): a synchronous throw of the flow goes to the flow handler as a rejection does. */
  test('run sends a synchronous throw of the flow to the flow handler with the scope', () => {
    render(<Probe />, { wrapper: MemoryRouter });
    const scope = probe.current;
    const error = new Error('thrown before the first await');

    expect(() => {
      scope?.run(() => {
        throw error;
      });
    }).not.toThrow();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, scope);
  });

  test('run of an own action after the unmount: its ControllerDisposedException goes to the handler, no error page', () => {
    const { unmount } = render(<Probe />, { wrapper: MemoryRouter });
    const scope = probe.current;
    const refresh = vi.fn(() => Promise.resolve());
    const ownRefresh = scope?.own(refresh) ?? refresh;
    unmount();

    expect(() => {
      scope?.run(ownRefresh);
    }).not.toThrow();
    expect(refresh).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(ControllerDisposedException), scope);
    expect(showErrorPage).not.toHaveBeenCalled();
  });
});

/* S5 (item8-solution.md §9, S1b Q1): a widget that awaits the flow (a list waits for OnScrollEnding, a swipe item
   keeps its class until the flow ends) gets the promise of the flow; the error goes to the flow handler as in run. */
describe('flow.runAwaited: a flow whose promise the widget awaits', () => {
  test('resolves with the value of the flow, and only when the flow settles', async () => {
    render(<Probe />, { wrapper: MemoryRouter });
    const call = pendingCall<number>();
    let settled = false;
    const result = probe.current
      ?.runAwaited(() => call.promise)
      .then((value) => {
        settled = true;
        return value;
      });
    await flush();
    expect(settled).toBe(false);

    call.resolve(7);

    await expect(result).resolves.toBe(7);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  test('a rejection goes to the flow handler with the scope; the promise resolves to undefined', async () => {
    render(<Probe />, { wrapper: MemoryRouter });
    const scope = probe.current;
    const error = new SystemException('GetMessages failed');

    await expect(scope?.runAwaited(() => Promise.reject(error))).resolves.toBeUndefined();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, scope);
  });

  test('a synchronous throw goes to the flow handler with the scope; the promise resolves to undefined', async () => {
    const { unmount } = render(<Probe />, { wrapper: MemoryRouter });
    const scope = probe.current;
    const ownRefresh = scope?.own(() => Promise.resolve('fetched'));
    unmount();

    const result = scope?.runAwaited(() => ownRefresh?.() ?? Promise.resolve(undefined));

    await expect(result).resolves.toBeUndefined();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(ControllerDisposedException), scope);
    expect(showErrorPage).not.toHaveBeenCalled();
  });
});
