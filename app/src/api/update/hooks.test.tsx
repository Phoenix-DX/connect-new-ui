import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useFeedUpdatesQuery } from './hooks';
import { updateKeys } from './keys';

/** A client with the library defaults (retry 3, gcTime 5 minutes), so the tests see the options of the hook. */
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

describe('update query keys', () => {
  it('the feed has one key', () => {
    expect(updateKeys.feed()).toEqual(['update', 'feed']);
  });
});

describe('useFeedUpdatesQuery', () => {
  it('fetches on each mount and keeps the items in the cache between two mounts', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useFeedUpdatesQuery(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.map((i) => i.updateItemId)).toEqual(['9101', '9102', '9103']);
    first.unmount();
    expect(client.getQueryData(updateKeys.feed())).toHaveLength(3);

    const second = renderHook(() => useFeedUpdatesQuery(), { wrapper: providerOf(client) });
    expect(second.result.current.data).toHaveLength(3);
    await waitFor(() => {
      expect(calls()).toEqual(['DataActionFetchUpdates', 'DataActionFetchUpdates']);
    });
    await waitFor(() => {
      expect(second.result.current.isFetching).toBe(false);
    });
    client.clear();
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => useFeedUpdatesQuery(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionFetchUpdates']);
    client.clear();
  });
});
