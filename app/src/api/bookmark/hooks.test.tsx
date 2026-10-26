import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useBookmarkGroupQuery, useBookmarkGroupSummariesQuery } from './hooks';
import { bookmarkKeys } from './keys';
import type { BookmarkGroupListCallInputs, BookmarkSummariesVariables } from './types';

const groupInputs: BookmarkGroupListCallInputs = {
  BookmarkGroup: 'Locations',
  ShowSearch: false,
  SearchString: '',
  SortColumn: '',
  IsFetchingBookmarks: true,
  UpdatedTotal: '0',
  WasSearchDone: false,
  SearchString_SearchDone: '',
  IsFromNavigationHistory: false,
  IsShareOpen: false,
  ShareableObjectId: '',
  Type_ShareObjectId: '',
};

const emptySummary = () => ({ group: '', totalCount: '0', bookmarks: [] });
const summariesVariables: BookmarkSummariesVariables = {
  hasBookmarks: false,
  isFetchingBookmarks: true,
  countSize: 4,
  contacts: emptySummary(),
  locations: emptySummary(),
  communityBusinesses: emptySummary(),
  allContacts: [],
  allLocations: [],
  allCommunityBusiness: [],
  isNavigationFromHistory: false,
  hasNetworkError: false,
};

/** A client with the library defaults (retry 3), so the tests see the options of the hooks. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('bookmark query keys', () => {
  it('the inputs are part of the key', () => {
    expect(bookmarkKeys.group(groupInputs)).toEqual(['bookmark', 'group', groupInputs]);
    expect(bookmarkKeys.groupSummaries(summariesVariables)).toEqual(['bookmark', 'groupSummaries', summariesVariables]);
  });
});

describe('useBookmarkGroupQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useBookmarkGroupQuery(groupInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.total).toBe('4');
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: bookmarkKeys.group(groupInputs) })).toBeUndefined();
    });
    const second = renderHook(() => useBookmarkGroupQuery(groupInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetAllBookmarksByGroup', 'DataActionGetAllBookmarksByGroup']);
  });

  it('does not call the server when the caller disables it, and does not retry a failed call', async () => {
    const client = new QueryClient();
    const disabled = renderHook(() => useBookmarkGroupQuery(groupInputs, { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(disabled.result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);

    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useBookmarkGroupQuery(groupInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetAllBookmarksByGroup']);
  });
});

describe('useBookmarkGroupSummariesQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useBookmarkGroupSummariesQuery(summariesVariables), {
      wrapper: providerOf(client),
    });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.contacts.totalCount).toBe('7');
    first.unmount();
    await waitFor(() => {
      expect(
        client.getQueryCache().find({ queryKey: bookmarkKeys.groupSummaries(summariesVariables) }),
      ).toBeUndefined();
    });
    const second = renderHook(() => useBookmarkGroupSummariesQuery(summariesVariables), {
      wrapper: providerOf(client),
    });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetGroupSummaries', 'DataActionGetGroupSummaries']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useBookmarkGroupSummariesQuery(summariesVariables), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetGroupSummaries']);
  });
});
