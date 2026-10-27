import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { http, HttpResponse } from 'msw';
import { CommunicationException, isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { raiseBubbledToFlowHandler } from '@/platform/feedback/bubbleErrors';
import { server } from '@/test/setup';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { FAVOURITE_LIST, SUGGESTION_LIST } from './servicesState';
import { useServices } from './useServices';

/* The flows of the screen with the MSW mocks (the recorded services). Only the paths that the page test cannot reach
   are here: a drag (SortableJS does not run in jsdom) and its failure. */
vi.mock('@/platform/feedback/bubbleErrors', () => ({ raiseBubbledToFlowHandler: vi.fn() }));
vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

const SAVE = 'UBTConnect/ServiceAPIService_ConnectServices_ChangeOrder_Bulk';

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
  vi.mocked(raiseBubbledToFlowHandler).mockClear();
  vi.mocked(raiseToFlowHandler).mockClear();
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

  it('B3: a touch drag to the top of the favourites removes a row, then fails; the removal stays', async () => {
    const { result } = await renderServices();
    // SortableJS: OldIndex 3 and NewIndex 0 (zero-based): ListRemove2 at 2 runs, ListInsert2 at -1 fails
    act(() => {
      result.current.onDragEnd(FAVOURITE_LIST, FAVOURITE_LIST, 3, 0, 'Trove');
    });
    expect(raiseBubbledToFlowHandler).toHaveBeenCalledTimes(1);
    expect(vi.mocked(raiseBubbledToFlowHandler).mock.calls[0]?.[0]).toEqual(
      new Error('Index out of bounds. Index -1 for bounds [0, 4].'),
    );
    // The Orders are not numbered again: the Foreach after the List actions does not run
    expect(result.current.lists.currentServices.map((c) => [c.service.id, c.serviceUser.order])).toEqual([
      ['Orbit', 1],
      ['LDM', 2],
      ['Trove', 4],
      ['MyCalendar', 5],
      ['MyNotes', 6],
    ]);
  });

  it('a failed drag goes to the exception handlers of the action; HasChanges is True, so Save saves', async () => {
    const { result } = await renderServices();
    const before = result.current.lists;
    // SortableJS: a drag of the first favourite to the suggestions gives OldIndex 0, so OldOrder - 1 = -1
    act(() => {
      result.current.onDragEnd(FAVOURITE_LIST, SUGGESTION_LIST, 0, 1, 'Trove');
    });
    expect(raiseBubbledToFlowHandler).toHaveBeenCalledTimes(1);
    expect(vi.mocked(raiseBubbledToFlowHandler).mock.calls[0]?.[0]).toEqual(
      new Error('Index out of bounds. Index -1 for bounds [0, 5].'),
    );
    expect(isUserException(vi.mocked(raiseBubbledToFlowHandler).mock.calls[0]?.[0])).toBe(false);
    expect(result.current.lists).toEqual(before);
    // HasChanges = True ran before the failed ListRemove: OnClick_SaveChanges saves (IsLoading True)
    act(() => {
      result.current.onSaveChanges();
    });
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  // OnClick_SaveChanges exception handlers (Services.mvc.js:1320-1362; F1, Q2 (a), user 2026-10-27)
  it.each([
    ['CommunicationException', { error: 'mock error' }, false],
    [
      'AllExceptions (a ServerException)',
      { error: 'The order could not be saved', exception: 'ServerException' },
      false,
    ],
    ['NotRegistered', { error: 'Not registered', exception: 'NotRegisteredException' }, true],
  ])('a failed save, %s: isLoading is %s afterwards, then the bubble handler', async (_name, answer, keepsLoading) => {
    server.use(http.post(`/api/${SAVE}`, () => HttpResponse.json(answer, { status: 500 })));
    const { result } = await renderServices();
    act(() => {
      result.current.onDragEnd(SUGGESTION_LIST, FAVOURITE_LIST, 0, 2, 'ElGusto');
    });
    act(() => {
      result.current.onSaveChanges();
    });
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(raiseBubbledToFlowHandler).toHaveBeenCalledTimes(1);
    });
    expect(result.current.isLoading).toBe(keepsLoading);
    expect(result.current.isSkeletonLoading).toBe(keepsLoading);
  });

  it('a failed GetServices goes to the flow handler once (F2, Q3 (a)); the lists get the error status', async () => {
    server.use(
      http.post('/api/UBTConnect/Services/DataActionGetServices', () => HttpResponse.json({}, { status: 500 })),
    );
    const { result, rerender } = renderHook(() => useServices(), { wrapper });
    await waitFor(() => {
      expect(result.current.hasFetchError).toBe(true);
    });
    rerender();
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    expect(raiseToFlowHandler).toHaveBeenCalledWith(new CommunicationException('Request failed with status 500'));
    expect(result.current).toEqual(
      expect.objectContaining({ isSkeletonLoading: false, isFetching: false, hasFetchError: true }),
    );
  });
});
