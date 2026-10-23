import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { logQueryError } from '@/api/client/queryClient';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { useFeedConfigQuery } from './hooks';
import { feedKeys } from './keys';

/** A client with the library defaults (retry 3, gcTime 5 minutes) and the app's error log, so the tests see the
    options of the hook. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const newClient = () => new QueryClient({ queryCache: new QueryCache({ onError: logQueryError }) });
const calls = () => (window.__osCalls ?? []).map((c) => c.action);
const inputs = { FeedItemId: '', B2CTenant: '' };

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('feed query keys', () => {
  it('the two inputs of the block are part of the key', () => {
    expect(feedKeys.config({ FeedItemId: '7', B2CTenant: 'a' })).toEqual([
      'feed',
      'config',
      { FeedItemId: '7', B2CTenant: 'a' },
    ]);
  });
});

describe('useFeedConfigQuery', () => {
  it('fetches on each mount and keeps nothing in the cache (no cache)', async () => {
    const client = newClient();
    const first = renderHook(() => useFeedConfigQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryData(feedKeys.config(inputs))).toBeUndefined();
    });
    const second = renderHook(() => useFeedConfigQuery(inputs), { wrapper: providerOf(client) });
    expect(second.result.current.data).toBeUndefined();
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetFeedConfig', 'DataActionGetFeedConfig']);
    client.clear();
  });

  it('does not call the server when it is not enabled', async () => {
    const client = newClient();
    const { result } = renderHook(() => useFeedConfigQuery(inputs, false), { wrapper: providerOf(client) });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
    client.clear();
  });

  it('does not retry a failed call and logs "DataActionGetFeedConfig failed"', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const logged: LogEntry[] = [];
    const removeSink = addLogSink((entry) => logged.push(entry));
    const client = newClient();
    const { result } = renderHook(() => useFeedConfigQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetFeedConfig']);
    expect(logged.filter((e) => e.level === 'warn').map((e) => e.message)).toEqual(['DataActionGetFeedConfig failed']);
    removeSink();
    client.clear();
  });
});
