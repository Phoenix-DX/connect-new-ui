import { QueryClient, QueryClientProvider, onlineManager } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useFeedUpdatesQuery } from './hooks';
import { updateKeys } from './keys';

/** A client with the library defaults (retry 3), so the tests see the options of the hook. */
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
  it('fetches on each mount and forgets the items when the block closes (Home Q1)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useFeedUpdatesQuery(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.map((i) => i.updateItemId)).toEqual(['9101', '9102', '9103']);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: updateKeys.feed() })).toBeUndefined();
    });

    const second = renderHook(() => useFeedUpdatesQuery(), { wrapper: providerOf(client) });
    expect(second.result.current.isPending).toBe(true);
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionFetchUpdates', 'DataActionFetchUpdates']);
    client.clear();
  });

  it('does not fetch again when the network comes back (Home Q1)', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useFeedUpdatesQuery(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    act(() => {
      onlineManager.setOnline(false);
    });
    act(() => {
      onlineManager.setOnline(true);
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calls()).toEqual(['DataActionFetchUpdates']);
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
