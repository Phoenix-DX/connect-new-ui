import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchNotificationDateRanges, fetchNotifications, type NotificationItem } from '@/api/notification';
import { CommunicationException, SystemException, UserException } from '@/legacy/os/exceptions';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { directory_Updates_RefreshBottomBarCount, scrollTop } from '@/lib/ubtConnect/actions';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { useNotifications } from './useNotifications';

/* The flows of the Notifications screen, with the two data actions, the bottom bar count, the scroll, the bottom
   sheet and the flow handler replaced by spies. The day is fixed (Friday 2026-10-16), so the date ranges are known. */
const ITEMS: NotificationItem[] = [
  { id: '9', title: 'Choir practice moved', dateTimeCreated: '2026-10-16T08:00:00', isRead: false, profileIconURL: '' },
  { id: '8', title: 'Harvest supper', dateTimeCreated: '2026-10-01T10:00:00', isRead: true, profileIconURL: '' },
  { id: '7', title: 'Hall roof workday', dateTimeCreated: '2026-07-01T10:00:00', isRead: false, profileIconURL: '' },
];

vi.mock('@/api/notification', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/notification')>()),
  fetchNotificationDateRanges: vi.fn(() =>
    Promise.resolve([
      { id: 'Today', order: 1 },
      { id: 'Last 7 Days', order: 2 },
      { id: 'Last 30 Days', order: 3 },
      { id: 'Older', order: 4 },
    ]),
  ),
  fetchNotifications: vi.fn(() =>
    Promise.resolve({ items: ITEMS, hasUnreadMessages: true, unreadNotificationsCount: 2 }),
  ),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  directory_Updates_RefreshBottomBarCount: vi.fn(() => Promise.resolve()),
  scrollTop: vi.fn(),
}));
vi.mock('@/components/ui/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/components/ui/lib/actions')>()),
  bottomSheetOpen: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/* The view cache writes of the hook (the setter of useViewState), as a spy that calls the real setter. */
const { setCached } = vi.hoisted(() => ({ setCached: vi.fn() }));
vi.mock('@/platform/navigation', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/platform/navigation')>();
  return {
    ...original,
    useViewState: <T,>(name: string, initial: T) => {
      const [value, setValue] = original.useViewState(name, initial);
      return [
        value,
        (next: T) => {
          setCached(next);
          setValue(next);
        },
      ] as const;
    },
  };
});

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const renderFlows = () => renderHook(() => useNotifications(), { wrapper });
/** A GetDateRanges answer that the test gives later. */
const pendingDateRanges = () => {
  let answer: () => void = () => undefined;
  vi.mocked(fetchNotificationDateRanges).mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        answer = () => {
          resolve([
            { id: 'Today', order: 1 },
            { id: 'Older', order: 4 },
          ]);
        };
      }),
  );
  return () => {
    answer();
  };
};
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(new Date(2026, 9, 16, 9, 30));
});
afterEach(() => {
  vi.useRealTimers();
});

describe('useNotifications', () => {
  it('OnReady: loading, GetDateRanges, the default filter, FetchNotifications, the breakpoints and the bottom bar', async () => {
    const { result } = renderFlows();
    expect(result.current.state.isLoading).toBe(true);
    await settle();
    expect(fetchNotificationDateRanges).toHaveBeenCalledTimes(1);
    expect(vi.mocked(fetchNotifications).mock.calls[0]?.[0].filter_Updates).toEqual({
      dateFrom: '2026-04-16',
      dateTo: '2026-10-16',
      searchText: '',
      updateTypeId: '',
      readOnly: 'None',
      sortByNewest: 'Yes',
    });
    expect(result.current.state).toMatchObject({
      isLoading: false,
      isDataFetched: true,
      items: ITEMS,
      unreadNotificationsCount: 2,
      showMarkAll: true,
    });
    expect(result.current.state.breakpoints.map((b) => [b.sectionName, b.position, b.badgeCount])).toEqual([
      ['Today', 0, 1],
      ['Last 30 Days', 1, 0],
      ['Older', 2, 1],
    ]);
    expect(result.current.state.currentBreakpoint.sectionName).toBe('Today');
    expect(directory_Updates_RefreshBottomBarCount).toHaveBeenCalledWith(true);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('Handler_FilterSearchText: a new text filters, scrolls to the top and refreshes; the same text does not', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onFilterSearchText('supper');
    });
    expect(result.current.state).toMatchObject({ currentSearchString: 'supper', isLoading: true, showMarkAll: false });
    expect(scrollTop).toHaveBeenCalledWith('.active-screen', 'instant');
    await settle();
    expect(fetchNotifications).toHaveBeenCalledTimes(2);
    expect(vi.mocked(fetchNotifications).mock.calls[1]?.[0].filter_Updates.searchText).toBe('supper');
    act(() => {
      result.current.onFilterSearchText('supper');
    });
    await settle();
    expect(fetchNotifications).toHaveBeenCalledTimes(2);
  });

  it('the search input, the toggle, the header scroll and the sheet ids', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onChangeSearchInput('har', true);
    });
    expect(result.current.state).toMatchObject({ currentSearchString: 'har', isToggleSearch: true });
    act(() => {
      result.current.onToggleSearch();
      result.current.onHeaderScrolled(true);
      result.current.onFilterSheetInitialized('sort-sheet');
      result.current.onMoreActionSheetInitialized('more-sheet');
    });
    expect(result.current.state).toMatchObject({
      isToggleSearch: false,
      isHeaderScrolled: true,
      filter_BottomSheetId: 'sort-sheet',
      moreAction_BottomSheetId: 'more-sheet',
    });
    act(() => {
      result.current.onKebab();
    });
    expect(bottomSheetOpen).toHaveBeenCalledWith('more-sheet');
    expect(fetchNotifications).toHaveBeenCalledTimes(1);
  });

  it('Handler_ApplyFilters sets the order and refreshes the list (no ScrollTop since the 2026-10-27 publish)', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onApplyFilters(false);
    });
    expect(scrollTop).not.toHaveBeenCalled();
    expect(result.current.state.isLoading).toBe(true);
    expect(result.current.state.orderByIsAscending).toBe(true);
    await settle();
    expect(fetchNotifications).toHaveBeenCalledTimes(2);
    expect(result.current.state.isLoading).toBe(false);
  });

  it('a user exception of OnReady ends the loading and bubbles as BubbleGenericException', async () => {
    vi.mocked(fetchNotifications).mockRejectedValueOnce(new UserException('No notifications service'));
    const { result } = renderFlows();
    await settle();
    expect(result.current.state.isLoading).toBe(false);
    const error = vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0];
    expect(error).toBeInstanceOf(UserException);
    expect(error).toMatchObject({
      message: 'No notifications service',
      specificType: 'UBTConnect.BubbleGenericException',
    });
  });

  it('a system exception of OnAfterFetch_GetDateRanges goes to the flow handler as it is', async () => {
    const failure = new SystemException('Out of memory');
    vi.mocked(fetchNotifications).mockRejectedValueOnce(failure);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure, expect.anything());
    expect(result.current.state.isLoading).toBe(true);
  });

  it('a failed GetDateRanges goes to the flow handler as it is, without FetchNotifications', async () => {
    const failure = new CommunicationException('Request failed with an error');
    vi.mocked(fetchNotificationDateRanges).mockRejectedValueOnce(failure);
    renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure, expect.anything());
    expect(fetchNotifications).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once and the list comes', async () => {
    const { result } = renderHook(() => useNotifications(), { wrapper: strictWrapper });
    await settle();
    expect(fetchNotificationDateRanges).toHaveBeenCalledTimes(1);
    expect(fetchNotifications).toHaveBeenCalledTimes(1);
    expect(result.current.state).toMatchObject({ isLoading: false, items: ITEMS });
  });

  it('R1: unmount while GetDateRanges is pending: no FetchNotifications, no state write, no raise', async () => {
    const answerDateRanges = pendingDateRanges();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useNotifications();
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    setCached.mockClear();
    answerDateRanges();
    await settle();
    // OnAfterFetch_GetDateRanges (Notifications.js:2254) never starts.
    expect(fetchNotificationDateRanges).toHaveBeenCalledTimes(1);
    expect(fetchNotifications).not.toHaveBeenCalled();
    expect(directory_Updates_RefreshBottomBarCount).not.toHaveBeenCalled();
    expect(setCached).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while FetchNotifications is pending: no bottom bar count, no state write, no raise', async () => {
    let answerList: () => void = () => undefined;
    vi.mocked(fetchNotifications).mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          answerList = () => {
            resolve({ items: ITEMS, hasUnreadMessages: true, unreadNotificationsCount: 2 });
          };
        }),
    );
    const { unmount } = renderHook(() => useNotifications(), { wrapper: strictWrapper });
    await settle();
    expect(fetchNotifications).toHaveBeenCalledTimes(1);
    unmount();
    setCached.mockClear();
    answerList();
    await settle();
    // OnAfterFetch_FetchNotifications (Notifications.js:2511-2548) never starts.
    expect(directory_Updates_RefreshBottomBarCount).not.toHaveBeenCalled();
    expect(setCached).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while FetchNotifications is pending: its failure reaches no handler', async () => {
    let failList: () => void = () => undefined;
    vi.mocked(fetchNotifications).mockImplementationOnce(
      () =>
        new Promise((_resolve, reject) => {
          failList = () => {
            reject(new UserException('No notifications service'));
          };
        }),
    );
    const { unmount } = renderHook(() => useNotifications(), { wrapper: strictWrapper });
    await settle();
    expect(fetchNotifications).toHaveBeenCalledTimes(1);
    unmount();
    setCached.mockClear();
    failList();
    await settle();
    // Without R1, OnAfterFetch would raise BubbleGenericException (a user exception).
    expect(raisedErrors()).toEqual([]);
    expect(setCached).not.toHaveBeenCalled();
  });
});

/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1). */
function raisedErrors() {
  return vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));
}
