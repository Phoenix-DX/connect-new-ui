import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchMessageInstanceExists,
  fetchMessages,
  markMessageAsClear,
  markMessageAsRead,
  type MessageClearResult,
  type MessagesResult,
} from '@/api/message';
import { markAllNotificationsAsRead } from '@/api/notification';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { synchronizeNumberUnreadMessages } from '@/platform/bootstrap/startup';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { decrementReadMessagesCounter } from '@/platform/session/unreadCounters';
import { setUnreadNotificationsNumber } from './unreadNotifications';
import { useMessageList, type MessageListEvents } from './useMessageList';

/* The leave rules of the flows of ScreenBlock_MessageList (flow scope, item 8; item8-w23-errorpage.md §1). The data
   actions and the server actions are spies with promises that the tests settle. The live flows are in the page test
   (MessageList.test.tsx, with the MSW mocks). */

vi.mock('@/api/message', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/message')>()),
  fetchMessages: vi.fn(),
  fetchMessageInstanceExists: vi.fn(),
  markMessageAsRead: vi.fn(),
  markMessageAsClear: vi.fn(),
}));
vi.mock('@/api/notification', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/notification')>()),
  markAllNotificationsAsRead: vi.fn(),
}));
vi.mock('@/platform/bootstrap/startup', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/bootstrap/startup')>()),
  synchronizeNumberUnreadMessages: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/session/unreadCounters', () => ({ decrementReadMessagesCounter: vi.fn() }));
vi.mock('./unreadNotifications', () => ({ setUnreadNotificationsNumber: vi.fn() }));

const NO_MESSAGES: MessagesResult = { messages: [], hasUnreadMessages: false, countUnreadMessages: 0 };

let events: MessageListEvents;
function renderFlows(strict = false) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => {
    const tree = (
      <QueryClientProvider client={client}>
        <MemoryRouter initialEntries={['/UBTConnect/MessageList']}>{children}</MemoryRouter>
      </QueryClientProvider>
    );
    return strict ? <StrictMode>{tree}</StrictMode> : tree;
  };
  return renderHook(
    ({ triggerPullToRefresh }: { triggerPullToRefresh: boolean }) =>
      useMessageList({ signedIn: true, triggerPullToRefresh }, events),
    { wrapper, initialProps: { triggerPullToRefresh: false } },
  );
}
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

/** The second argument of a raise: the flow scope of the block. */
const FLOW_SCOPE: unknown = expect.objectContaining({
  alive: expect.any(Function) as unknown,
  active: expect.any(Function) as unknown,
});

/** OnReady to its end: GetMessages answers an empty list. */
async function loaded(strict = false) {
  const view = renderFlows(strict);
  await settle();
  expect(fetchMessages).toHaveBeenCalledTimes(1);
  vi.clearAllMocks();
  return view;
}

beforeEach(() => {
  vi.clearAllMocks();
  events = { onNavigateToMessageDetail: vi.fn(), onPullToRefreshTriggered: vi.fn() };
  vi.mocked(fetchMessages).mockResolvedValue(NO_MESSAGES);
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('useMessageList after an unmount (flow scope, item 8)', () => {
  it('R1: unmount while GetMessages of OnReady is pending: no unread number (OnAfterFetch_GetMessages), no raise', async () => {
    const call = deferred<MessagesResult>();
    vi.mocked(fetchMessages).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    expect(fetchMessages).toHaveBeenCalledTimes(1);
    unmount();
    call.resolve({ ...NO_MESSAGES, countUnreadMessages: 7 });
    await settle();
    expect(setUnreadNotificationsNumber).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetMessages is pending: its failure reaches no handler', async () => {
    const call = deferred<MessagesResult>();
    vi.mocked(fetchMessages).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    call.reject(new Error('Service Interruption'));
    await settle();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: OnParametersChanged, unmount during PullToRefresh: PullToRefreshTriggered is not triggered', async () => {
    const { rerender, unmount } = await loaded();
    const call = deferred<MessagesResult>();
    vi.mocked(fetchMessages).mockReturnValueOnce(call.promise);
    rerender({ triggerPullToRefresh: true });
    await settle();
    expect(fetchMessages).toHaveBeenCalledTimes(1);
    unmount();
    call.resolve(NO_MESSAGES);
    await settle();
    expect(events.onPullToRefreshTriggered).not.toHaveBeenCalled();
    expect(setUnreadNotificationsNumber).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount during RefreshMessages(True) of a search: no ScrollToTop', async () => {
    const content = document.createElement('div');
    content.className = 'content';
    document.body.append(content);
    const scrollTop = vi.fn();
    Object.defineProperty(content, 'scrollTop', { configurable: true, get: () => 50, set: scrollTop });
    const { result, unmount } = await loaded();
    const call = deferred<MessagesResult>();
    vi.mocked(fetchMessages).mockReturnValueOnce(call.promise);
    act(() => {
      result.current.onSearchSubmit();
    });
    unmount();
    call.resolve(NO_MESSAGES);
    await settle();
    expect(scrollTop).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetMessageInstanceById2 is pending: no NavigateTo_MessageDetail, no message, no refresh', async () => {
    const { result, unmount } = await loaded();
    const exists = deferred<boolean>();
    const gone = deferred<boolean>();
    vi.mocked(fetchMessageInstanceExists).mockReturnValueOnce(exists.promise).mockReturnValueOnce(gone.promise);
    let first: Promise<void> = Promise.resolve();
    let second: Promise<void> = Promise.resolve();
    act(() => {
      first = result.current.onGoToMessageDetail('81003');
      second = result.current.onGoToMessageDetail('81004');
    });
    unmount();
    exists.resolve(true);
    gone.resolve(false);
    await act(() => Promise.all([first, second]));
    expect(events.onNavigateToMessageDetail).not.toHaveBeenCalled();
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    expect(fetchMessages).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetMessageInstanceById2 is pending: its failure reaches no handler', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<boolean>();
    vi.mocked(fetchMessageInstanceExists).mockReturnValueOnce(call.promise);
    let done: Promise<void> = Promise.resolve();
    act(() => {
      done = result.current.onGoToMessageDetail('81003');
    });
    unmount();
    call.reject(new Error('Service Interruption'));
    await act(() => done);
    expect(raisedErrors()).toEqual([]);
  });

  it('R2 + R3: unmount while Wrapper_MarkAllAsReadNotifications is pending: RefreshMessages stops the flow', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<number>();
    vi.mocked(markAllNotificationsAsRead).mockReturnValueOnce(call.promise);
    act(() => {
      result.current.onMarkAllRead();
    });
    expect(markAllNotificationsAsRead).toHaveBeenCalledTimes(1);
    unmount();
    call.resolve(4);
    await settle();
    expect(fetchMessages).not.toHaveBeenCalled();
    expect(synchronizeNumberUnreadMessages).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: a Wrapper_MarkAllAsReadNotifications failure after the unmount reaches the handler with the scope', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<number>();
    vi.mocked(markAllNotificationsAsRead).mockReturnValueOnce(call.promise);
    act(() => {
      result.current.onMarkAllRead();
    });
    unmount();
    const error = new Error('Service Interruption');
    call.reject(error);
    await settle();
    expect(raisedErrors()).toEqual([error]);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });

  it('R2 + R3: unmount while MarkMessageAsRead is pending: UpdateMessageRead stops, no counter decrement', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<boolean>();
    vi.mocked(markMessageAsRead).mockReturnValueOnce(call.promise);
    let done: Promise<void> = Promise.resolve();
    act(() => {
      done = result.current.onSwipeEventsRead('81003');
    });
    unmount();
    call.resolve(true);
    await act(() => done);
    expect(decrementReadMessagesCounter).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2 + R3: unmount while MarkMessageAsClear is pending: UpdateMessageClear stops, no counter decrement', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<MessageClearResult>();
    vi.mocked(markMessageAsClear).mockReturnValueOnce(call.promise);
    let done: Promise<void> = Promise.resolve();
    act(() => {
      done = result.current.onSwipeEventsClear('81003');
    });
    unmount();
    call.resolve({ hasUnreadMessages: true, isHaveMessage: true, isRead: false });
    await act(() => done);
    expect(decrementReadMessagesCounter).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount during the load-more refresh (OnScrollEnding): the Promise settles, no unread number', async () => {
    const { result, unmount } = await loaded();
    const call = deferred<MessagesResult>();
    vi.mocked(fetchMessages).mockReturnValueOnce(call.promise);
    let done: Promise<void> = Promise.resolve();
    act(() => {
      done = result.current.onScrollEnding();
    });
    unmount();
    call.resolve(NO_MESSAGES);
    await act(() => done);
    expect(fetchMessages).toHaveBeenCalledTimes(1);
    expect(setUnreadNotificationsNumber).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});

describe('useMessageList while the block lives', () => {
  it('StrictMode: OnReady runs GetMessages once', async () => {
    await loaded(true);
  });

  it('a GetMessages failure reaches the flow handler with the scope', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchMessages).mockRejectedValueOnce(error);
    renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
  });

  /* S2c Q1 (a): RefreshMessages has no exception handler and the catch of OnScrollEnding throws again
     (item8-w23-errorpage.md §6): a failed GetMessages stops the calling flow, and the error reaches the flow handler
     once. */
  it('a failed GetMessages stops OnScrollEnding before isLoadMore = False; one raise; the Promise settles', async () => {
    const { result } = await loaded();
    const error = new Error('Service Interruption');
    vi.mocked(fetchMessages).mockRejectedValueOnce(error);
    let done: Promise<void> = Promise.resolve();
    act(() => {
      done = result.current.onScrollEnding();
    });
    await act(() => done);
    expect(result.current.variables.isLoadMore).toBe(true);
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
  });

  it('a failed GetMessages stops OnHandle_SearchHistorySelectedItem: no ScrollToTop; one raise', async () => {
    const content = document.createElement('div');
    content.className = 'content';
    document.body.append(content);
    const scrollTop = vi.fn();
    Object.defineProperty(content, 'scrollTop', { configurable: true, get: () => 50, set: scrollTop });
    const { result } = await loaded();
    const error = new Error('Service Interruption');
    vi.mocked(fetchMessages).mockRejectedValueOnce(error);
    act(() => {
      result.current.onSearchSubmit();
    });
    await settle();
    expect(scrollTop).not.toHaveBeenCalled();
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
  });

  it('a failed GetMessages stops OnParametersChanged before the PullToRefreshTriggered event; one raise', async () => {
    const { rerender } = await loaded();
    const error = new Error('Service Interruption');
    vi.mocked(fetchMessages).mockRejectedValueOnce(error);
    rerender({ triggerPullToRefresh: true });
    await settle();
    expect(fetchMessages).toHaveBeenCalledTimes(1);
    expect(events.onPullToRefreshTriggered).not.toHaveBeenCalled();
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
  });

  it('a failed GetMessages of OnClick_ApplyFilters keeps the filters open; one raise', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onFilter();
    });
    const error = new Error('Service Interruption');
    vi.mocked(fetchMessages).mockRejectedValueOnce(error);
    act(() => {
      result.current.onApplyFilters();
    });
    await settle();
    expect(result.current.variables.ShowFilters).toBe(true);
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
  });

  it('the own actions run: UpdateMessageRead and UpdateMessageClear (not read) decrement the counter', async () => {
    const { result } = await loaded();
    vi.mocked(markMessageAsRead).mockResolvedValueOnce(true);
    vi.mocked(markMessageAsClear)
      .mockResolvedValueOnce({ hasUnreadMessages: true, isHaveMessage: true, isRead: false })
      .mockResolvedValueOnce({ hasUnreadMessages: false, isHaveMessage: false, isRead: true });
    await act(() => result.current.onSwipeEventsRead('81003'));
    await act(() => result.current.onSwipeEventsClear('81004'));
    await act(() => result.current.onSwipeEventsClear('81005'));
    expect(decrementReadMessagesCounter).toHaveBeenCalledTimes(2);
    expect(result.current.messagesList.hasUnreadMessages).toBe(false);
    expect(result.current.variables.IsEmptyMessage).toBe(true);
  });

  it('a gone message: the info message and a GetMessages refresh, no NavigateTo_MessageDetail', async () => {
    const { result } = await loaded();
    vi.mocked(fetchMessageInstanceExists).mockResolvedValueOnce(false);
    await act(() => result.current.onGoToMessageDetail('81003'));
    expect(showFeedbackMessage).toHaveBeenCalledWith('This message is no longer available', PLATFORM_MESSAGE_TYPE.info);
    expect(fetchMessages).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToMessageDetail).not.toHaveBeenCalled();
  });

  it('Mark All as Read with changes: RefreshMessages, then SynchronizeNumberUnreadMessages', async () => {
    const { result } = await loaded();
    vi.mocked(markAllNotificationsAsRead).mockResolvedValueOnce(2);
    act(() => {
      result.current.onMarkAllRead();
    });
    await settle();
    expect(fetchMessages).toHaveBeenCalledTimes(1);
    expect(synchronizeNumberUnreadMessages).toHaveBeenCalledTimes(1);
    expect(result.current.variables.IsShowLoading).toBe(false);
  });
});
