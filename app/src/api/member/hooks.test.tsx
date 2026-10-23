import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useAvailableMembersQuery, useEditMemberDetailsMutation, useMemberQuery } from './hooks';
import { memberKeys } from './keys';
import type { AvailableMembersCallInputs, MemberAccountForm } from './types';

const inputs: AvailableMembersCallInputs = {
  In_ShareObjectTypeId: 'Household',
  In_ShareableObjectId: '7001',
  In_UpdateType: '',
  In_UpdateDate: '1900-01-01',
  SearchTerm: 'a',
};

const accountForm: MemberAccountForm = {
  AccountForm_AddressInformation: {
    Custom_Address_ItemList: { List: [] },
    LocalityId: '310',
    LocalityName: 'Wellington',
    SubdivionId: '0',
  },
  AccountForm_ContactInformation: {
    HomeNumber: '',
    MobileNumber: '',
    ShowMobileNumber: false,
    ShowWorkNumber: false,
    WorkNumber: '',
  },
  AccountForm_IdentificationInformation: { AccountNumber: 'NZ-4471', MemberId: '11' },
  AccountForm_PersonalInformation: { Email: 'ada@example.org', ShowLifeCycleDates: false, Username: 'aharlow' },
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

describe('member query keys', () => {
  it('the inputs and the request id are part of the key', () => {
    expect(memberKeys.detail('11')).toEqual(['member', 'detail', '11']);
    expect(memberKeys.availableMembers(inputs, 2)).toEqual(['member', 'availableMembers', inputs, 2]);
  });
});

describe('useAvailableMembersQuery', () => {
  it('does not call the server before the first request (request id 0)', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useAvailableMembersQuery(inputs, 0), { wrapper: providerOf(client) });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });

  it('calls the server for each new request id and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const { result, rerender } = renderHook(({ requestId }) => useAvailableMembersQuery(inputs, requestId), {
      wrapper: providerOf(client),
      initialProps: { requestId: 1 },
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.length).toBeGreaterThan(0);
    rerender({ requestId: 2 });
    await waitFor(() => {
      expect(calls()).toEqual(['DataActionGetAvailableMembers', 'DataActionGetAvailableMembers']);
    });
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: memberKeys.availableMembers(inputs, 1) })).toBeUndefined();
    });
  });

  it('does not retry a failed call by default', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => useAvailableMembersQuery(inputs, 1), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetAvailableMembers']);
  });
});

describe('useMemberQuery', () => {
  it('calls GetMemberByMemberId on each mount and keeps nothing in the cache', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useMemberQuery('990002'), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.Id).toBe('990002');
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: memberKeys.detail('990002') })).toBeUndefined();
    });
    const second = renderHook(() => useMemberQuery('990002'), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['ActionGetMemberByMemberId', 'ActionGetMemberByMemberId']);
  });

  it('does not call the server when the caller disables it', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useMemberQuery('990002', { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });
});

describe('useEditMemberDetailsMutation', () => {
  it('calls Member_EditDetails_Service once per save, without a retry after a failure', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useEditMemberDetailsMutation(), { wrapper: providerOf(client) });
    await act(() => result.current.mutateAsync({ accountForm, isRequireRequestCreation: false }));
    expect(calls()).toEqual(['ServiceAPIMember_EditDetails_Service']);

    sessionStorage.setItem('mock:mock', 'error');
    await act(async () => {
      await expect(result.current.mutateAsync({ accountForm, isRequireRequestCreation: false })).rejects.toThrow(
        'Request failed with status 500',
      );
    });
    expect(calls()).toEqual(['ServiceAPIMember_EditDetails_Service', 'ServiceAPIMember_EditDetails_Service']);
  });
});
