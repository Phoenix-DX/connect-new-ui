import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchUpdateDateRangeIds,
  fetchUpdatesList,
  markAllUpdateItemsAsRead,
  markUpdateItemAsRead,
  markUpdateItemAsUnread,
} from '@/api/update';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { directory_Updates_RefreshBottomBarCount } from '@/lib/ubtConnect/actions';
import { captureScrollPosition } from '@/pages/Updates_SingleList/actions';
import { useUpdatesSingleList } from './useUpdatesSingleList';

/* The leave rules of the flows of Updates_SingleList (flow scope, item 8; item8-w23-errorpage.md §1). The data
   actions and the server actions are spies with promises that the tests settle. The live flows are in the page test
   (Updates_SingleList.test.tsx, with the MSW mocks). */

vi.mock('@/api/update', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/update')>()),
  fetchUpdateDateRangeIds: vi.fn(),
  fetchUpdatesList: vi.fn(),
  markUpdateItemAsRead: vi.fn(),
  markUpdateItemAsUnread: vi.fn(),
  markAllUpdateItemsAsRead: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  directory_Updates_RefreshBottomBarCount: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/pages/Updates_SingleList/actions', () => ({ captureScrollPosition: vi.fn(), scrollFix: vi.fn() }));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

const FLAGS = { carousel: true, extendedShare: true };
const wrapper = ({ children }: { children: ReactNode }) => (
  <MemoryRouter initialEntries={['/UBTConnect/Updates_SingleList']}>{children}</MemoryRouter>
);
const renderFlows = () => renderHook(() => useUpdatesSingleList(FLAGS), { wrapper });
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** A call that the test answers. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3, R4). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

/** OnReady to its end: no date range and no update. */
async function loaded() {
  const view = renderFlows();
  await settle();
  expect(directory_Updates_RefreshBottomBarCount).toHaveBeenCalledTimes(1);
  vi.clearAllMocks();
  return view;
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchUpdateDateRangeIds).mockResolvedValue([]);
  vi.mocked(fetchUpdatesList).mockResolvedValue({ items: [], unreadCount: 0 });
});

describe('useUpdatesSingleList after an unmount (flow scope, item 8)', () => {
  it('R1: unmount while GetDateRanges is pending: the answer starts no RefreshUpdates and raises nothing', async () => {
    const call = deferred<string[]>();
    vi.mocked(fetchUpdateDateRangeIds).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    call.resolve([]);
    await settle();
    expect(fetchUpdatesList).not.toHaveBeenCalled();
    expect(directory_Updates_RefreshBottomBarCount).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetDateRanges is pending: its failure reaches no handler', async () => {
    const call = deferred<string[]>();
    vi.mocked(fetchUpdateDateRangeIds).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    call.reject(new Error('Service Interruption'));
    await settle();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while FetchUpdates is pending: no bottom bar count (OnAfterFetch_FetchUpdates), no raise', async () => {
    const call = deferred<never>();
    vi.mocked(fetchUpdatesList).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    expect(fetchUpdatesList).toHaveBeenCalledTimes(1);
    unmount();
    call.resolve({ items: [], unreadCount: 3 } as never);
    await settle();
    expect(directory_Updates_RefreshBottomBarCount).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while FetchUpdates is pending: its failure reaches no handler', async () => {
    const call = deferred<never>();
    vi.mocked(fetchUpdatesList).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    call.reject(new Error('Service Interruption'));
    await settle();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2 + R3: unmount while MarkAsRead or MarkAsUnread is pending: RefreshUpdatesAndFlags stops the flow, no bar count', async () => {
    const { result, unmount } = await loaded();
    const read = deferred<undefined>();
    const unread = deferred<undefined>();
    vi.mocked(markUpdateItemAsRead).mockReturnValueOnce(read.promise);
    vi.mocked(markUpdateItemAsUnread).mockReturnValueOnce(unread.promise);
    act(() => {
      result.current.onItemMarkAsRead('9101', 0);
      result.current.onItemMarkAsUnread('9102', 1);
    });
    unmount();
    read.resolve(undefined);
    unread.resolve(undefined);
    await settle();
    expect(directory_Updates_RefreshBottomBarCount).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2 + R3: unmount while MarkAllAsRead is pending: SetBadgeCountsToZero stops the flow, no bar count, no refresh', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<undefined>();
    vi.mocked(markAllUpdateItemsAsRead).mockReturnValueOnce(call.promise);
    act(() => {
      result.current.onMarkAllAsRead();
    });
    unmount();
    call.resolve(undefined);
    await settle();
    expect(directory_Updates_RefreshBottomBarCount).not.toHaveBeenCalled();
    expect(fetchUpdatesList).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2 + R3: unmount while the MarkAsRead of a tap is pending: no scroll capture, no navigation', async () => {
    const view = renderFlows();
    vi.mocked(fetchUpdatesList).mockResolvedValueOnce({
      items: [{ updateItemId: '9101', householdId: '8101', isRead: false, hasAccess: true }],
      unreadCount: 1,
    } as never);
    await settle();
    const read = deferred<undefined>();
    vi.mocked(markUpdateItemAsRead).mockReturnValueOnce(read.promise);
    act(() => {
      view.result.current.onItemClick(0);
    });
    view.unmount();
    read.resolve(undefined);
    await settle();
    expect(captureScrollPosition).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('a failure of MarkAsRead while the screen is open reaches the flow handler with the scope (R2)', async () => {
    const { result } = await loaded();
    const error = new Error('Service Interruption');
    vi.mocked(markUpdateItemAsRead).mockRejectedValueOnce(error);
    act(() => {
      result.current.onItemMarkAsRead('9101', 0);
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });
});
