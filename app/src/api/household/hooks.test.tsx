import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useHouseholdCoordinatesQuery, useHouseholdQuery } from './hooks';
import { householdKeys } from './keys';
import type { HouseholdCallInputs } from './types';

const inputs: HouseholdCallInputs = {
  HouseholdId: '0',
  isEnabled: true,
  In_ShowKebabMenu: false,
  In_CheckVisibility: false,
  In_IsSkeletonOnly: false,
  In_HideActions: false,
  UserAge_Visibility: false,
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

describe('household query keys', () => {
  it('the inputs are part of the key, and detail and coordinates differ', () => {
    expect(householdKeys.detail(inputs)).toEqual(['household', 'detail', inputs]);
    expect(householdKeys.coordinates(inputs)).toEqual(['household', 'coordinates', inputs]);
  });
});

describe('household query hooks', () => {
  it('useHouseholdQuery calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useHouseholdQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.Out_HouseholdMembers).toHaveLength(5);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: householdKeys.detail(inputs) })).toBeUndefined();
    });
    const second = renderHook(() => useHouseholdQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetHousehold', 'DataActionGetHousehold']);
  });

  it('useHouseholdQuery does not call the server when the caller disables it', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useHouseholdQuery(inputs, { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });

  it('useHouseholdQuery does not retry a failed call by default', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => useHouseholdQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetHousehold']);
  });

  it('useHouseholdCoordinatesQuery answers the coordinates of DataActionGetHousehold_Coordinates', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useHouseholdCoordinatesQuery(inputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data).toEqual({ Latitude: '-33.8688', Longitude: '151.2093', UseCoordinates: true });
    expect(calls()).toEqual(['DataActionGetHousehold_Coordinates']);
  });
});
