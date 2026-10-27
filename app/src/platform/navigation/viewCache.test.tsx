import { act, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { useViewState, useWasRestoredFromCache } from './hooks';
import { useOsNavigate } from './osNavigate';
import { renderRoutes, resetNavigation } from './testRouter';
import { savedViewCount } from './viewCache';

/* jsdom does not keep scroll offsets: store them per element for these tests. */
const offsets = new WeakMap<Element, number>();

beforeEach(() => {
  resetNavigation();
  Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
    configurable: true,
    get(this: HTMLElement) {
      return offsets.get(this) ?? 0;
    },
    set(this: HTMLElement, value: number) {
      offsets.set(this, value);
    },
  });
});

afterEach(() => {
  Reflect.deleteProperty(HTMLElement.prototype, 'scrollTop');
});

const fetchItems = vi.fn(() => Promise.resolve(['Item A', 'Item B']));

function List() {
  const go = useOsNavigate();
  const items = useQuery({ queryKey: ['items'], queryFn: fetchItems, gcTime: 0 });
  const [tab, setTab] = useViewState('tab', 'all');
  const restored = useWasRestoredFromCache();
  return (
    <div>
      <p>restored: {String(restored)}</p>
      <button
        type="button"
        onClick={() => {
          setTab('mine');
        }}
      >
        tab: {tab}
      </button>
      <div data-testid="scroller">
        {items.isPending ? <p>Loading</p> : items.data?.map((item) => <p key={item}>{item}</p>)}
      </div>
      <button
        type="button"
        onClick={() => {
          go('/UBTConnect/Detail');
        }}
      >
        open detail
      </button>
      <button
        type="button"
        onClick={() => {
          setTab('flushed');
          go('/UBTConnect/Detail');
        }}
      >
        set and open detail
      </button>
    </div>
  );
}

function Detail() {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        go('/UBTConnect/Other');
      }}
    >
      open other
    </button>
  );
}

const routes = {
  '/UBTConnect/List': <List />,
  '/UBTConnect/Detail': <Detail />,
  '/UBTConnect/Other': <p>other</p>,
};

async function openListThenDetail() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const app = renderRoutes(routes, '/UBTConnect/List', queryClient);
  expect(await screen.findByText('Item A')).toBeInTheDocument();
  expect(screen.getByText('restored: false')).toBeInTheDocument();
  await userEvent.click(screen.getByText('tab: all'));
  screen.getByTestId('scroller').scrollTop = 240;
  await userEvent.click(screen.getByText('open detail'));
  // gcTime 0: the list query leaves the client once its screen is gone
  await waitFor(() => {
    expect(queryClient.getQueryCache().find({ queryKey: ['items'] })).toBeUndefined();
  });
  return app;
}

test('back restores the screen with its data (no loading state), scroll and view state, then refreshes', async () => {
  fetchItems.mockClear();
  const { router } = await openListThenDetail();

  await act(() => router.navigate(-1));

  expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  expect(screen.getByText('Item A')).toBeInTheDocument();
  expect(screen.getByTestId('scroller').scrollTop).toBe(240);
  expect(screen.getByText('tab: mine')).toBeInTheDocument();
  expect(screen.getByText('restored: true')).toBeInTheDocument();
  await waitFor(() => {
    expect(fetchItems).toHaveBeenCalledTimes(2);
  });
});

test('a view-state value set in the same tick as the navigation is saved (ScreenModel_Flush before a navigation)', async () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const { router } = renderRoutes(routes, '/UBTConnect/List', queryClient);
  expect(await screen.findByText('Item A')).toBeInTheDocument();
  await userEvent.click(screen.getByText('set and open detail')); // setTab, then the navigation, before a render

  await act(() => router.navigate(-1));

  expect(screen.getByText('tab: flushed')).toBeInTheDocument();
});

test('a new visit (push) starts fresh', async () => {
  const { router } = await openListThenDetail();

  await act(() => router.navigate('/UBTConnect/List'));

  expect(screen.getByText('Loading')).toBeInTheDocument();
  expect(screen.getByText('tab: all')).toBeInTheDocument();
  expect(screen.getByText('restored: false')).toBeInTheDocument();
});

test('every entry of the history stack is kept; entries dropped from the history are forgotten', async () => {
  const { router } = await openListThenDetail();
  await userEvent.click(screen.getByText('open other'));
  expect(savedViewCount()).toBe(2); // List and Detail

  await act(() => router.navigate(-2));
  expect(screen.getByText('Item A')).toBeInTheDocument();
  await userEvent.click(screen.getByText('open detail')); // Detail and Other leave the history
  expect(savedViewCount()).toBe(1); // List only
});
