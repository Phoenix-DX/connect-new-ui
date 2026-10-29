import { QueryClient, QueryClientProvider, onlineManager } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useFeedServicesQuery, useUserServicesQuery } from './hooks';
import { serviceKeys } from './keys';
import type { FeedServicesVariables } from './types';

const FEED_VARIABLES: FeedServicesVariables = {
  mainElementClass: 'ubt-services-carousel',
  servicesPerPage: [],
  externalAppPopUpId: '',
  externalAppPopUpInfo: { appName: '', packageName: '', iconId: '' },
  itemPerPage: 6,
  forceAddService: false,
};

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

describe('service query keys', () => {
  it('the user key has no input', () => {
    expect(serviceKeys.user()).toEqual(['service', 'user']);
  });

  it('the feed key has no input, and is not the user key', () => {
    expect(serviceKeys.feed()).toEqual(['service', 'feed']);
  });
});

describe('useFeedServicesQuery', () => {
  it('forgets the services when the block closes, so the next mount waits for a new fetch (Home Q1)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useFeedServicesQuery(FEED_VARIABLES), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.services).toHaveLength(6);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: serviceKeys.feed() })).toBeUndefined();
    });
    const second = renderHook(() => useFeedServicesQuery(FEED_VARIABLES), { wrapper: providerOf(client) });
    expect(second.result.current.isPending).toBe(true);
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetServices', 'DataActionGetServices']);
  });

  it('does not fetch again when the network comes back (Home Q1)', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useFeedServicesQuery(FEED_VARIABLES), { wrapper: providerOf(client) });
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
    expect(calls()).toEqual(['DataActionGetServices']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => useFeedServicesQuery(FEED_VARIABLES), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetServices']);
  });
});

describe('useUserServicesQuery', () => {
  it('fetches once, and not again on a new render', async () => {
    const { result, rerender } = renderHook(() => useUserServicesQuery(), { wrapper: providerOf(new QueryClient()) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.currentServices).toHaveLength(6);
    rerender();
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calls()).toEqual(['DataActionGetServices']);
  });

  it('forgets the data when the screen closes, so the next visit fetches again', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useUserServicesQuery(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: serviceKeys.user() })).toBeUndefined();
    });
    const second = renderHook(() => useUserServicesQuery(), { wrapper: providerOf(client) });
    expect(second.result.current.isPending).toBe(true);
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetServices', 'DataActionGetServices']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => useUserServicesQuery(), { wrapper: providerOf(new QueryClient()) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetServices']);
  });
});
