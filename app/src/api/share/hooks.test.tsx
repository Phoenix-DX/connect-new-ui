import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useAvailableUsersQuery, useShareObjectTypeLabelQuery } from './hooks';
import { shareKeys } from './keys';
import type { AvailableUsersCallInputs, ShareObjectTypeCallInputs } from './types';

/* The MSW mocks of the test setup (pages/LegacyShareObject/mocks.ts): a type label is the recorded "Household" or the
   type identifier; the users are one fictional user. */
const typeInputs: ShareObjectTypeCallInputs = {
  ShareObjectTypeId: 'Household',
  ObjectId: '42438',
  In_CustomTitle: '',
  User_AgeVisibility: false,
};
const userInputs: AvailableUsersCallInputs = {
  SearchFilter: '',
  ShareObjectId: '42438',
  ShareObjectTypeId: 'Household',
  MaxRecords: 50,
  HasSearched: false,
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

describe('share query keys', () => {
  it('hold the inputs, and the request number for the users', () => {
    expect(shareKeys.objectTypeLabel(typeInputs)).toEqual(['share', 'objectTypeLabel', typeInputs]);
    expect(shareKeys.availableUsers(userInputs, 3)).toEqual(['share', 'availableUsers', userInputs, 3]);
  });
});

describe('useShareObjectTypeLabelQuery', () => {
  it('fetches again for new block variables and keeps the previous label while it runs', async () => {
    const { result, rerender } = renderHook(
      ({ visibility }: { visibility: boolean }) =>
        useShareObjectTypeLabelQuery({ ...typeInputs, User_AgeVisibility: visibility }),
      { wrapper: providerOf(new QueryClient()), initialProps: { visibility: false } },
    );
    await waitFor(() => {
      expect(result.current.data).toBe('Household');
    });
    rerender({ visibility: true });
    expect(result.current.isPlaceholderData).toBe(true);
    expect(result.current.data).toBe('Household');
    await waitFor(() => {
      expect(result.current.isPlaceholderData).toBe(false);
    });
    expect(calls()).toEqual(['ScreenDataSetGetShareObjectTypeById', 'ScreenDataSetGetShareObjectTypeById']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => useShareObjectTypeLabelQuery(typeInputs), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['ScreenDataSetGetShareObjectTypeById']);
  });
});

describe('useAvailableUsersQuery', () => {
  it('fetches at start, and again for a new request number with the same inputs', async () => {
    const { result, rerender } = renderHook(
      ({ requestId }: { requestId: number }) => useAvailableUsersQuery(userInputs, requestId),
      { wrapper: providerOf(new QueryClient()), initialProps: { requestId: 0 } },
    );
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.items).toHaveLength(50);
    expect(result.current.data?.items[0]?.fullName).toBe('Robert Callahan');
    rerender({ requestId: 1 });
    expect(result.current.isPlaceholderData).toBe(true);
    await waitFor(() => {
      expect(result.current.isPlaceholderData).toBe(false);
    });
    expect(calls()).toEqual(['DataActionGetAvailableUsers', 'DataActionGetAvailableUsers']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => useAvailableUsersQuery(userInputs, 0), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetAvailableUsers']);
  });
});
