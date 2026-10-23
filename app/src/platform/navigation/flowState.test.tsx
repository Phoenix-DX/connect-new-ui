import type { ReactNode } from 'react';
import { act, render, renderHook, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from './flowState';
import { useOsNavigate } from './osNavigate';
import { renderRoutes, resetNavigation } from './testRouter';

vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

interface Counter {
  count: number;
}
type CounterAction = { type: 'add'; by: number };

const counterReducer = (state: Counter, action: CounterAction): Counter => ({ count: state.count + action.by });
const INITIAL: Counter = { count: 0 };

const inRouter = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;

beforeEach(() => {
  resetNavigation();
  vi.mocked(raiseToFlowHandler).mockClear();
});

describe('useFlowState state', () => {
  test('dispatch updates latest at once, before the render', () => {
    const { result } = renderHook(
      () => useFlowState({ viewName: 'Counter', reducer: counterReducer, initial: INITIAL, parameters: {} }),
      { wrapper: inRouter },
    );
    act(() => {
      result.current.dispatch({ type: 'add', by: 2 });
      result.current.dispatch({ type: 'add', by: 3 });
      expect(result.current.latest.current).toEqual({ count: 5 });
      expect(result.current.state).toEqual({ count: 0 }); // not rendered yet
    });
    expect(result.current.state).toEqual({ count: 5 });
    expect(result.current.latest.current).toEqual({ count: 5 });
  });

  function CounterScreen() {
    const go = useOsNavigate();
    const { state, dispatch } = useFlowState({
      viewName: 'Counter',
      reducer: counterReducer,
      initial: INITIAL,
      parameters: {},
    });
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'add', by: 1 });
          }}
        >
          count: {state.count}
        </button>
        <button
          type="button"
          onClick={() => {
            go('/UBTConnect/Detail');
          }}
        >
          open detail
        </button>
      </div>
    );
  }

  async function countTwiceThenLeave() {
    const app = renderRoutes(
      { '/UBTConnect/Counter': <CounterScreen />, '/UBTConnect/Detail': <p>detail</p> },
      '/UBTConnect/Counter',
    );
    await userEvent.click(screen.getByText('count: 0'));
    await userEvent.click(screen.getByText('count: 1'));
    await userEvent.click(screen.getByText('open detail'));
    expect(await screen.findByText('detail')).toBeInTheDocument();
    return app;
  }

  test('a back navigation remounts the view with its saved state, and latest continues from it', async () => {
    const { router } = await countTwiceThenLeave();

    await act(() => router.navigate(-1));

    expect(screen.getByText('count: 2')).toBeInTheDocument();
    await userEvent.click(screen.getByText('count: 2'));
    expect(screen.getByText('count: 3')).toBeInTheDocument();
  });

  test('a new visit (push) starts from the initial state', async () => {
    const { router } = await countTwiceThenLeave();

    await act(() => router.navigate('/UBTConnect/Counter'));

    expect(screen.getByText('count: 0')).toBeInTheDocument();
  });

  /** A screen with OnInitialize on a restored view: it adds 10 to the saved count. */
  function RestoringScreen({ restore }: { restore: (saved: Counter) => Counter }) {
    const go = useOsNavigate();
    const { state, dispatch, latest } = useFlowState({
      viewName: 'Counter',
      reducer: counterReducer,
      initial: INITIAL,
      restore,
      parameters: {},
    });
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'add', by: 1 });
          }}
        >
          count: {state.count}, latest: {latest.current.count}
        </button>
        <button
          type="button"
          onClick={() => {
            go('/UBTConnect/Detail');
          }}
        >
          open detail
        </button>
      </div>
    );
  }

  test('restore: a back navigation starts from restore(saved) in the first render; a new visit does not call it', async () => {
    const restore = vi.fn((saved: Counter): Counter => ({ count: saved.count + 10 }));
    const { router } = renderRoutes(
      { '/UBTConnect/Counter': <RestoringScreen restore={restore} />, '/UBTConnect/Detail': <p>detail</p> },
      '/UBTConnect/Counter',
    );
    expect(restore).not.toHaveBeenCalled();
    await userEvent.click(screen.getByText('count: 0, latest: 0'));
    await userEvent.click(screen.getByText('open detail'));
    expect(await screen.findByText('detail')).toBeInTheDocument();

    await act(() => router.navigate(-1));

    expect(restore).toHaveBeenCalledWith({ count: 1 });
    expect(screen.getByText('count: 11, latest: 11')).toBeInTheDocument();
    await userEvent.click(screen.getByText('count: 11, latest: 11'));
    expect(screen.getByText('count: 12, latest: 12')).toBeInTheDocument();

    restore.mockClear();
    await userEvent.click(screen.getByText('open detail'));
    expect(await screen.findByText('detail')).toBeInTheDocument();
    await act(() => router.navigate('/UBTConnect/Counter'));
    expect(restore).not.toHaveBeenCalled();
    expect(screen.getByText('count: 0, latest: 0')).toBeInTheDocument();
  });
});

describe('useFlowState OnParametersChanged', () => {
  const renderWithParameters = (onParametersChanged: (isAlive: IsAlive) => Promise<void>) =>
    renderHook(
      ({ id }: { id: string }) =>
        useFlowState({
          viewName: 'Counter',
          reducer: counterReducer,
          initial: INITIAL,
          parameters: { id },
          onParametersChanged,
        }),
      { wrapper: inRouter, initialProps: { id: 'A' } },
    );

  test('runs only when the parameters key changes, not on the first render', () => {
    const runs: { id: string; isAlive: IsAlive }[] = [];
    const { result, rerender, unmount } = renderWithParameters((isAlive) => {
      runs.push({ id: result.current.parameters.current.id, isAlive });
      return Promise.resolve();
    });
    expect(runs).toHaveLength(0);

    rerender({ id: 'A' }); // a new object with the same key
    expect(runs).toHaveLength(0);

    rerender({ id: 'B' });
    expect(runs.map((run) => run.id)).toEqual(['B']); // the flow reads the new parameters
    expect(runs[0]?.isAlive()).toBe(true);

    rerender({ id: 'B' });
    expect(runs).toHaveLength(1);

    rerender({ id: 'C' });
    expect(runs.map((run) => run.id)).toEqual(['B', 'C']);
    expect(runs[0]?.isAlive()).toBe(false); // the next run makes the previous one stale
    expect(runs[1]?.isAlive()).toBe(true);

    unmount();
    expect(runs[1]?.isAlive()).toBe(false);
  });

  test('calls the flow of the newest render', () => {
    const first = vi.fn(() => Promise.resolve());
    const newest = vi.fn(() => Promise.resolve());
    const { rerender } = renderHook(
      ({ id, flow }: { id: string; flow: (isAlive: IsAlive) => Promise<void> }) =>
        useFlowState({
          viewName: 'Counter',
          reducer: counterReducer,
          initial: INITIAL,
          parameters: { id },
          onParametersChanged: flow,
        }),
      { wrapper: inRouter, initialProps: { id: 'A', flow: first } },
    );

    rerender({ id: 'B', flow: newest });

    expect(first).not.toHaveBeenCalled();
    expect(newest).toHaveBeenCalledTimes(1);
  });

  test('sends a rejection of the flow to the flow handler', async () => {
    const error = new Error('GetHousehold failed');
    const { rerender } = renderWithParameters(() => Promise.reject(error));

    rerender({ id: 'B' });

    await vi.waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    });
  });
});

describe('useFlowState OnReady', () => {
  type ReadyFlow = (isAlive: IsAlive, restored: boolean) => Promise<void>;

  function ReadyScreen({ id, onReady }: { id: string; onReady: ReadyFlow }) {
    useFlowState({ viewName: 'Counter', reducer: counterReducer, initial: INITIAL, parameters: { id }, onReady });
    return <p>rendered {id}</p>;
  }

  test('runs once, after the first render', () => {
    const seen: string[] = [];
    const onReady = (isAlive: IsAlive, restored: boolean) => {
      seen.push(`ready: ${document.body.textContent}, alive ${String(isAlive())}, restored ${String(restored)}`);
      return Promise.resolve();
    };
    const { rerender } = render(<ReadyScreen id="A" onReady={onReady} />, { wrapper: inRouter });
    expect(seen).toEqual(['ready: rendered A, alive true, restored false']);

    rerender(<ReadyScreen id="B" onReady={onReady} />);
    expect(screen.getByText('rendered B')).toBeInTheDocument();
    expect(seen).toHaveLength(1);
  });

  test('isAlive turns false on unmount', () => {
    let isAlive: IsAlive = () => true;
    const { unmount } = render(
      <ReadyScreen
        id="A"
        onReady={(alive) => {
          isAlive = alive;
          return Promise.resolve();
        }}
      />,
      { wrapper: inRouter },
    );
    expect(isAlive()).toBe(true);
    unmount();
    expect(isAlive()).toBe(false);
  });

  test('restored is true after a back-navigation remount, false on a new visit', async () => {
    const restoredValues: boolean[] = [];
    function ListScreen() {
      const go = useOsNavigate();
      useFlowState({
        viewName: 'Counter',
        reducer: counterReducer,
        initial: INITIAL,
        parameters: {},
        onReady: (_isAlive, restored) => {
          restoredValues.push(restored);
          return Promise.resolve();
        },
      });
      return (
        <button
          type="button"
          onClick={() => {
            go('/UBTConnect/Detail');
          }}
        >
          open detail
        </button>
      );
    }
    const { router } = renderRoutes(
      { '/UBTConnect/List': <ListScreen />, '/UBTConnect/Detail': <p>detail</p> },
      '/UBTConnect/List',
    );
    expect(restoredValues).toEqual([false]);

    const openDetail = async () => {
      await userEvent.click(screen.getByText('open detail'));
      expect(await screen.findByText('detail')).toBeInTheDocument();
    };
    await openDetail();
    await act(() => router.navigate(-1));
    expect(restoredValues).toEqual([false, true]);

    await openDetail();
    await act(() => router.navigate('/UBTConnect/List'));
    expect(restoredValues).toEqual([false, true, false]);
  });

  /* React runs the mount effect before it renders again, so the flow of the first commit is the newest one at that
     time. What a flow that awaits must see is the newest parameters and events. */
  test('a running flow calls the newest events and reads the newest parameters', async () => {
    let answer: () => void = () => undefined;
    const answered = new Promise<void>((resolve) => {
      answer = resolve;
    });
    const seen: string[] = [];
    function EventsScreen({ id, onDone }: { id: string; onDone: (id: string) => void }) {
      const { parameters, events } = useFlowState({
        viewName: 'Counter',
        reducer: counterReducer,
        initial: INITIAL,
        parameters: { id },
        events: { onDone },
        onReady: async () => {
          await answered;
          events.current.onDone(parameters.current.id);
        },
      });
      return null;
    }
    const { rerender } = render(<EventsScreen id="A" onDone={(id) => seen.push(`first ${id}`)} />, {
      wrapper: inRouter,
    });
    rerender(<EventsScreen id="B" onDone={(id) => seen.push(`newest ${id}`)} />);

    await act(async () => {
      answer();
      await answered;
    });
    expect(seen).toEqual(['newest B']);
  });

  test('sends a rejection of the flow to the flow handler', async () => {
    const error = new Error('GetUserInformation failed');
    render(<ReadyScreen id="A" onReady={() => Promise.reject(error)} />, { wrapper: inRouter });

    await vi.waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    });
  });
});
