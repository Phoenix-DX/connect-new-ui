import { QueryClient, QueryClientProvider, onlineManager } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { recordBodies } from '@/test/testSupport';
import { usePendingPoliciesQuery } from './hooks';
import { policyKeys } from './keys';
import type { PendingPoliciesInputs } from './types';

const inputs: PendingPoliciesInputs = {
  policyApplications: ['Connect_Applications.Connect'],
  country: 'NZ',
  contentBlockId: '',
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
  onlineManager.setOnline(true);
});

describe('policy query keys', () => {
  it('the pending key has the three input parameters', () => {
    expect(policyKeys.pending(inputs)).toEqual(['policy', 'pending', inputs]);
  });
});

describe('usePendingPoliciesQuery', () => {
  it('reads IsAllSelected when it fetches, and does not refetch when it changes', async () => {
    const bodies = recordBodies('UBTConnect/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies');
    let isAllSelected = true;
    const { result, rerender } = renderHook(() => usePendingPoliciesQuery(inputs, () => isAllSelected), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.map((p) => p.id)).toEqual(['7001', '7002']);
    expect(bodies).toEqual([expect.objectContaining({ IsAllSelected: true })]);
    isAllSelected = false;
    rerender();
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calls()).toEqual(['DataActionGetPendingPolicies']);
  });

  it('refetches when an input parameter changes and keeps the previous data while it runs', async () => {
    const { result, rerender } = renderHook(
      ({ contentBlockId }: { contentBlockId: string }) =>
        usePendingPoliciesQuery({ ...inputs, contentBlockId }, () => false),
      { wrapper: providerOf(new QueryClient()), initialProps: { contentBlockId: '' } },
    );
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    rerender({ contentBlockId: 'b1-Main' });
    expect(result.current.isPlaceholderData).toBe(true);
    expect(result.current.data?.length).toBe(2);
    await waitFor(() => {
      expect(result.current.isPlaceholderData).toBe(false);
    });
    expect(calls()).toEqual(['DataActionGetPendingPolicies', 'DataActionGetPendingPolicies']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => usePendingPoliciesQuery(inputs, () => false), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetPendingPolicies']);
  });

  it('does not fetch again when the network comes back (App_Policies F2)', async () => {
    const { result } = renderHook(() => usePendingPoliciesQuery(inputs, () => false), {
      wrapper: providerOf(new QueryClient()),
    });
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
    expect(calls()).toEqual(['DataActionGetPendingPolicies']);
  });

  it('makes the call when the browser is offline, as OutSystems does (App_Policies F2)', async () => {
    onlineManager.setOnline(false);
    const { result } = renderHook(() => usePendingPoliciesQuery(inputs, () => false), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual(['DataActionGetPendingPolicies']);
  });
});
