import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { PendingPoliciesInputs } from '@/api/policy';
import { contractHandler, raiseUserException } from '@/mocks/contract';
import { isCommunicationException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { freshPage, recordBodies } from '@/test/testSupport';
import { server } from '@/test/setup';
import { usePendingPoliciesForm, type PendingPoliciesFormEvents } from './usePendingPoliciesForm';

/* The flows of Policy_Custom_AcceptPendingPolicies against the MSW mocks of the page (two fictional Connect policies,
   7001 and 7002; ActionAcceptPolicies removes the accepted ids, so the test that accepts runs last). The flow handler
   is replaced by a spy. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

const inputs: PendingPoliciesInputs = {
  policyApplications: ['Connect_Applications.Connect', 'Connect_Applications.Directory', 'Connect_Applications.Orbit'],
  country: 'NZ',
  contentBlockId: 'b1-Main',
};

function renderForm(events: PendingPoliciesFormEvents = {}) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
  return renderHook(() => usePendingPoliciesForm(inputs, events), { wrapper });
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  freshPage();
  vi.mocked(raiseToFlowHandler).mockClear();
  // jsdom has no matchMedia: GetDeviceInfo reads display-mode standalone (a browser tab, not the installed app).
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({ matches: false, media: query }),
  });
});
afterEach(() => {
  vi.useRealTimers();
  sessionStorage.clear();
  Reflect.deleteProperty(window, 'matchMedia');
});

describe('usePendingPoliciesForm (Policy_Custom_AcceptPendingPolicies)', () => {
  it('has no rows until the first fetch ends, then the pending policies, none selected', async () => {
    const { result } = renderForm();
    expect(result.current.rows).toBeUndefined();
    await waitFor(() => {
      expect(result.current.rows?.map((r) => r.id)).toEqual(['7001', '7002']);
    });
    expect(result.current.isAllSelected).toBe(false);
    expect(calls()).toEqual(['DataActionGetPendingPolicies']);
  });

  it('IsAllSelected follows the row checkboxes, and "I agree to all" sets every row', async () => {
    const { result } = renderForm();
    await waitFor(() => {
      expect(result.current.rows).toHaveLength(2);
    });
    act(() => {
      result.current.toggleCheckBox(0);
    });
    expect(result.current.rows?.map((r) => r.isSelected)).toEqual([true, false]);
    expect(result.current.isAllSelected).toBe(false);
    act(() => {
      result.current.toggleCheckBox(1);
    });
    expect(result.current.isAllSelected).toBe(true);
    act(() => {
      result.current.toggleSelectAllCheckBox();
    });
    expect(result.current.rows?.map((r) => r.isSelected)).toEqual([false, false]);
    expect(result.current.isAllSelected).toBe(false);
    act(() => {
      result.current.toggleSelectAllCheckBox();
    });
    expect(result.current.rows?.map((r) => r.isSelected)).toEqual([true, true]);
    expect(result.current.isAllSelected).toBe(true);
    expect(calls()).toEqual(['DataActionGetPendingPolicies']);
  });

  it('a CommunicationException of AcceptPolicies raises NetworkError, not AcceptedAll', async () => {
    const onAcceptedAll = vi.fn();
    const onNetworkError = vi.fn();
    const { result } = renderForm({ onAcceptedAll, onNetworkError });
    await waitFor(() => {
      expect(result.current.rows).toHaveLength(2);
    });
    sessionStorage.setItem('mock:mock', 'error');
    await act(() => result.current.continueOnClick());
    expect(onNetworkError).toHaveBeenCalledTimes(1);
    expect(onAcceptedAll).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('another exception of AcceptPolicies goes to the flow handler', async () => {
    const onAcceptedAll = vi.fn();
    const onNetworkError = vi.fn();
    server.use(
      contractHandler('UBTConnect', 'ActionAcceptPolicies', () => raiseUserException('The policies changed.')),
    );
    const { result } = renderForm({ onAcceptedAll, onNetworkError });
    await waitFor(() => {
      expect(result.current.rows).toHaveLength(2);
    });
    await act(() => result.current.continueOnClick());
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(onNetworkError).not.toHaveBeenCalled();
    expect(onAcceptedAll).not.toHaveBeenCalled();
  });

  it('a failed fetch goes to the flow handler once', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderForm();
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    expect(isCommunicationException(vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0])).toBe(true);
    expect(result.current.rows).toBeUndefined();
  });

  it('an empty list raises AcceptedAll after 5 seconds (GetPendingPoliciesOnAfterFetch)', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    sessionStorage.setItem('mock:mock', 'empty');
    const onAcceptedAll = vi.fn();
    const { result } = renderForm({ onAcceptedAll });
    await waitFor(() => {
      expect(result.current.rows).toEqual([]);
    });
    act(() => {
      vi.advanceTimersByTime(4900);
    });
    expect(onAcceptedAll).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(onAcceptedAll).toHaveBeenCalledTimes(1);
  });

  it('Continue accepts the selected ids with the device details, then raises AcceptedAll', async () => {
    const onAcceptedAll = vi.fn();
    const onNetworkError = vi.fn();
    const bodies = recordBodies('UBTConnect/ActionAcceptPolicies');
    const { result } = renderForm({ onAcceptedAll, onNetworkError });
    await waitFor(() => {
      expect(result.current.rows).toHaveLength(2);
    });
    act(() => {
      result.current.toggleSelectAllCheckBox();
    });
    await act(() => result.current.continueOnClick());
    expect(calls()).toEqual(['DataActionGetPendingPolicies', 'ActionAcceptPolicies']);
    expect(bodies).toEqual([
      {
        Policies: { List: ['7001', '7002'] },
        DeviceDetails: expect.objectContaining({
          ClientIP: '',
          Platform: 'Web',
          Manufacturer: '',
          Model: '',
        }) as unknown,
      },
    ]);
    expect(onAcceptedAll).toHaveBeenCalledTimes(1);
    expect(onNetworkError).not.toHaveBeenCalled();
  });
});
