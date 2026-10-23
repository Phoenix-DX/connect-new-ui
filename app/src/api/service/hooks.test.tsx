import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useUserServicesQuery } from './hooks';
import { serviceKeys } from './keys';

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
