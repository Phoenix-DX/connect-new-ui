import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { usePoliciesQuery } from './hooks';
import { appKeys } from './keys';
import type { PoliciesCallInputs } from './types';

const inputs: PoliciesCallInputs = { CacheKey: 'Unique', CacheTypeId: 'Policies', TimeToLiveSeconds: 7200 };

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

describe('app query keys', () => {
  it('the policies key has every input', () => {
    expect(appKeys.policies(inputs)).toEqual(['app', 'policies', inputs]);
  });
});

describe('usePoliciesQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => usePoliciesQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.PolicyInformation_PrivacyPolicy.Policy_ContentType).toBe('application/pdf');
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: appKeys.policies(inputs) })).toBeUndefined();
    });
    const second = renderHook(() => usePoliciesQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetCacheInfo', 'DataActionGetCacheInfo']);
  });

  it('does not call the server when the caller disables it, and does not retry a failed call', async () => {
    const client = new QueryClient();
    const disabled = renderHook(() => usePoliciesQuery(inputs, { enabled: false }), { wrapper: providerOf(client) });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(disabled.result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);

    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => usePoliciesQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetCacheInfo']);
  });
});
