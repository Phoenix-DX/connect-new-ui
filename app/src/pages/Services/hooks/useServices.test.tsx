import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { isUserException } from '@/legacy/os/exceptions';
import { raiseBubbledToFlowHandler } from '@/platform/feedback/bubbleErrors';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { FAVOURITE_LIST, SUGGESTION_LIST } from './servicesState';
import { useServices } from './useServices';

/* The flows of the screen with the MSW mocks (the recorded services). Only the paths that the page test cannot reach
   are here: a drag (SortableJS does not run in jsdom) and its failure. */
vi.mock('@/platform/feedback/bubbleErrors', () => ({ raiseBubbledToFlowHandler: vi.fn() }));

function wrapper({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
}

async function renderServices() {
  const view = renderHook(() => useServices(), { wrapper });
  await waitFor(() => {
    expect(view.result.current.isSkeletonLoading).toBe(false);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  setSignedInUser(MOCK_USER_ID);
});

describe('useServices', () => {
  it('shows the skeleton and the loading lists until GetServices answers', async () => {
    const { result } = renderHook(() => useServices(), { wrapper });
    expect(result.current).toEqual(
      expect.objectContaining({ isSkeletonLoading: true, isFetching: true, hasFetchError: false, isLoading: false }),
    );
    expect(result.current.lists).toEqual({ currentServices: [], availableServices: [] });
    await waitFor(() => {
      expect(result.current.isSkeletonLoading).toBe(false);
    });
    expect(result.current.isFetching).toBe(false);
    expect(result.current.lists.currentServices).toHaveLength(6);
  });

  it('a drag from the suggestions to the favourites adds the service as a new choice of the signed-in user', async () => {
    const { result } = await renderServices();
    // SortableJS: OldIndex 0 of the suggestions, NewIndex 2 of the favourites (zero-based)
    act(() => {
      result.current.onDragEnd(SUGGESTION_LIST, FAVOURITE_LIST, 0, 2, 'ElGusto');
    });
    expect(result.current.lists.currentServices.map((c) => c.service.id)).toEqual([
      'Orbit',
      'ElGusto',
      'LDM',
      'Assemble',
      'Trove',
      'MyCalendar',
      'MyNotes',
    ]);
    expect(result.current.lists.currentServices[1]?.serviceUser).toEqual({
      id: null,
      connectServiceId: 'ElGusto',
      userId: Number(MOCK_USER_ID),
      order: 2,
      lastChangedOn: null,
    });
    expect(result.current.lists.availableServices.map((s) => s.id)).toEqual(['HR100', 'CommunityTradelink']);
  });

  it('a drop at the same index changes nothing', async () => {
    const { result } = await renderServices();
    const before = result.current.lists;
    act(() => {
      result.current.onDragEnd(FAVOURITE_LIST, FAVOURITE_LIST, 3, 3, 'Trove');
    });
    expect(result.current.lists).toBe(before);
  });

  it('a failed drag goes to the exception handlers of the action, and the lists stay', async () => {
    const { result } = await renderServices();
    const before = result.current.lists;
    // SortableJS: a drag of the first favourite to the suggestions gives OldIndex 0, so OldOrder - 1 = -1
    act(() => {
      result.current.onDragEnd(FAVOURITE_LIST, SUGGESTION_LIST, 0, 1, 'Trove');
    });
    expect(raiseBubbledToFlowHandler).toHaveBeenCalledTimes(1);
    expect(vi.mocked(raiseBubbledToFlowHandler).mock.calls[0]?.[0]).toEqual(new Error('Index out of range'));
    expect(isUserException(vi.mocked(raiseBubbledToFlowHandler).mock.calls[0]?.[0])).toBe(false);
    expect(result.current.lists).toBe(before);
  });
});
