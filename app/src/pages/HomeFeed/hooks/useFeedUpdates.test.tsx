import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, renderHook, waitFor } from '@testing-library/react';
import { useState, type ReactNode } from 'react';
import { createMemoryRouter, MemoryRouter, RouterProvider, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { UpdateItem } from '@/api/update';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { clearPreloadObject, getPreloadObject } from '@/platform/navigation/preload';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage } from '@/test/testSupport';
import { useFeedUpdates, type FeedUpdatesEvents, type FeedUpdatesFlags, type FeedUpdatesView } from './useFeedUpdates';

/* The flows of FeedBlock_Updates, inside a router on HomeFeed, with the MSW mocks: the three fictional unread update
   items of HomeFeed (all with access); MarkAsRead and MarkAsUnread change the collection. */
const FLAGS: FeedUpdatesFlags = { hasCarouselEnabled: true, hasExtendedShare: true };

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>{children}</MemoryRouter>
  </QueryClientProvider>
);

function setup(events: FeedUpdatesEvents = {}, flags = FLAGS) {
  return renderHook(() => ({ flow: useFeedUpdates(events, flags), at: useLocation() }), { wrapper });
}
async function loaded(events: FeedUpdatesEvents = {}, flags = FLAGS) {
  const view = setup(events, flags);
  await waitFor(() => {
    expect(view.result.current.flow.hasData).toBe(true);
  });
  return view;
}
const first = (flow: FeedUpdatesView) => flow.items[0] as UpdateItem;

beforeEach(() => {
  freshPage();
  resetFeedbackMessages();
  clearPreloadObject();
});
afterEach(() => {
  sessionStorage.clear();
  resetNavigation();
});
const BAR_COUNT = 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All';

describe('FeedBlock_Updates flows (useFeedUpdates)', () => {
  it('shows three loading rows in the skeleton until FetchUpdates answers, then the items', async () => {
    const { result } = setup();
    expect(result.current.flow.isLoading).toBe(true);
    expect(result.current.flow.hasData).toBe(false);
    expect(result.current.flow.items.map((u) => u.name)).toEqual(['Loadin Name', 'Loadin Name', 'Loadin Name']);
    await waitFor(() => {
      expect(result.current.flow.hasData).toBe(true);
    });
    expect(result.current.flow.isLoading).toBe(false);
    expect(result.current.flow.items.map((u) => u.updateItemId)).toEqual(['9101', '9102', '9103']);
    expect(calledActions()).toEqual(['FeedBlock_Updates/DataActionFetchUpdates']);
  });

  it('an empty answer raises Event_NoUpdates once', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    const onEventNoUpdates = vi.fn();
    const { result } = await loaded({ onEventNoUpdates });
    expect(result.current.flow.items).toEqual([]);
    expect(onEventNoUpdates).toHaveBeenCalledOnce();
  });

  it('a failed fetch shows the error list with the loading rows, and no skeleton', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = setup();
    await waitFor(() => {
      expect(result.current.flow.hasFetchError).toBe(true);
    });
    expect(result.current.flow.isLoading).toBe(false);
    expect(result.current.flow.items).toHaveLength(3);
  });

  it('a click on an item marks it read, sets the carousel households and opens HouseholdCarousel', async () => {
    const { result } = await loaded();
    const item = first(result.current.flow);
    act(() => {
      result.current.flow.onItemClick(item);
    });
    await waitFor(() => {
      expect(result.current.at.pathname).toBe('/UBTConnect/HouseholdCarousel');
    });
    expect(result.current.at.search).toContain(`In_StartingHouseholdId=${item.householdId}`);
    expect(calledActions()).toEqual([
      'FeedBlock_Updates/DataActionFetchUpdates',
      'ServiceAPIAction_UI_UpdateItem_MarkAsRead',
    ]);
    const preload = getPreloadObject() as { CarouselHouseholdItem: { Household: string }[] };
    expect(preload.CarouselHouseholdItem.map((h) => h.Household)).toEqual(['8101', '8102', '8103']);
  });

  it('with the carousel off, a click only marks the item read (the other branch is not built)', async () => {
    const { result } = await loaded({}, { ...FLAGS, hasCarouselEnabled: false });
    act(() => {
      result.current.flow.onItemClick(first(result.current.flow));
    });
    await waitFor(() => {
      expect(calledActions()).toContain('ServiceAPIAction_UI_UpdateItem_MarkAsRead');
    });
    expect(result.current.at.pathname).toBe('/UBTConnect/HomeFeed');
  });

  it('a click on an item without access opens no screen and marks nothing', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.flow.onItemClick({ ...first(result.current.flow), hasAccess: false });
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calledActions()).toEqual(['FeedBlock_Updates/DataActionFetchUpdates']);
    expect(result.current.at.pathname).toBe('/UBTConnect/HomeFeed');
  });

  it('mark as read and mark as unread call the service action, change the read state, then refresh the bottom bar count (N2)', async () => {
    const { result } = await loaded();
    const item = first(result.current.flow);
    act(() => {
      result.current.flow.onMarkAsRead(item);
    });
    await waitFor(() => {
      expect(calledActions()).toHaveLength(3);
    });
    expect(first(result.current.flow).isRead).toBe(true);
    act(() => {
      result.current.flow.onMarkAsUnread(item);
    });
    await waitFor(() => {
      expect(calledActions()).toHaveLength(5);
    });
    expect(first(result.current.flow).isRead).toBe(false);
    // Event_MarkAsRead :801-820 and Event_MarkAsUnread :751-770: Directory_Updates_RefreshBottomBarCount(True).
    expect(calledActions().slice(1)).toEqual([
      'ServiceAPIAction_UI_UpdateItem_MarkAsRead',
      BAR_COUNT,
      'ServiceAPIAction_UI_UpdateItem_MarkAsUnread',
      BAR_COUNT,
    ]);
  });

  it('R2: the block closes while MarkAsRead runs: the bottom bar count still refreshes (a module action)', async () => {
    const { result, unmount } = await loaded();
    sessionStorage.setItem('mock:latency', '30');
    act(() => {
      result.current.flow.onMarkAsRead(first(result.current.flow));
    });
    unmount();
    await waitFor(() => {
      expect(calledActions()).toContain(BAR_COUNT);
    });
    expect(calledActions().slice(1)).toEqual(['ServiceAPIAction_UI_UpdateItem_MarkAsRead', BAR_COUNT]);
  });

  it('share raises Event_Share only with GetHasExtendedShare; send gift shows "Send gift"', async () => {
    const onEventShare = vi.fn();
    const on = await loaded({ onEventShare });
    const item = first(on.result.current.flow);
    act(() => {
      on.result.current.flow.onShare(item);
    });
    expect(onEventShare).toHaveBeenCalledExactlyOnceWith(item.updateItemId, item);
    on.unmount();
    const off = await loaded({ onEventShare }, { ...FLAGS, hasExtendedShare: false });
    act(() => {
      off.result.current.flow.onShare(first(off.result.current.flow));
    });
    expect(onEventShare).toHaveBeenCalledOnce();
    act(() => {
      off.result.current.flow.onSendGift();
    });
    expect(getFeedbackMessage()?.message).toBe('Send gift');
  });

  it('R2: when only the block closes while MarkAsRead runs (HomeFeed stays active), HouseholdCarousel opens, once', async () => {
    const queryClient = new QueryClient();
    const latest: { flow: FeedUpdatesView | null; hide: (() => void) | null } = { flow: null, hide: null };
    function Block() {
      latest.flow = useFeedUpdates({}, FLAGS);
      return null;
    }
    function Host() {
      const [shown, setShown] = useState(true);
      latest.hide = () => {
        setShown(false);
      };
      return shown ? <Block /> : null;
    }
    const router = createMemoryRouter([{ path: '*', element: <Host /> }], {
      initialEntries: ['/UBTConnect/HomeFeed'],
    });
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(latest.flow?.hasData).toBe(true);
    });
    const flow = latest.flow as FeedUpdatesView;
    sessionStorage.setItem('mock:latency', '30');
    const navigations: string[] = [];
    router.subscribe((state) => {
      navigations.push(state.location.pathname);
    });
    act(() => {
      flow.onItemClick(first(flow));
      latest.hide?.();
    });
    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/UBTConnect/HouseholdCarousel');
    });
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(navigations.filter((p) => p === '/UBTConnect/HouseholdCarousel')).toHaveLength(1);
    expect(calledActions().filter((a) => a === 'ServiceAPIAction_UI_UpdateItem_MarkAsRead')).toHaveLength(1);
  });

  it('R4: the user leaves HomeFeed while MarkAsRead runs: no navigation to HouseholdCarousel, no message', async () => {
    const latest: { flow: FeedUpdatesView | null } = { flow: null };
    function Block() {
      latest.flow = useFeedUpdates({}, FLAGS);
      return null;
    }
    const { router, at } = renderRoutes(
      { '/UBTConnect/HomeFeed': <Block />, '/UBTConnect/Menu': <p>Menu</p> },
      '/UBTConnect/HomeFeed',
    );
    await waitFor(() => {
      expect(latest.flow?.hasData).toBe(true);
    });
    const flow = latest.flow as FeedUpdatesView;
    sessionStorage.setItem('mock:latency', '30');
    act(() => {
      flow.onItemClick(first(flow));
    });
    await act(() => router.navigate('/UBTConnect/Menu'));
    await waitFor(() => {
      expect(calledActions()).toContain('ServiceAPIAction_UI_UpdateItem_MarkAsRead');
    });
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(at()).toBe('/UBTConnect/Menu');
    expect(getFeedbackMessage()).toBeFalsy();
  });
});
