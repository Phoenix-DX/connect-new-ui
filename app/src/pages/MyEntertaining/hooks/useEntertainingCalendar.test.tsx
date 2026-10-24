import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { EntertainingConfigInputs } from '@/api/entertaining';
import { log } from '@/platform/log/log';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { useEntertainingCalendar } from './useEntertainingCalendar';

/* The calls of Embedded_MyEntertaining with the MSW mocks of the test setup (pages/MyEntertaining/mocks.ts: the app's
   own origin as BaseURL, no token, an empty ID token). */
const CONFIG = 'UBTConnect_EmbedMyEntertaining/Embedded_MyEntertaining/DataActionGetEntertainingConfig';
const INPUTS: EntertainingConfigInputs = { View: 'timeline', Theme: 'light', Sources: 'ldm', B2CTenant: 'tenant-a' };

function wrapper({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
}

describe('useEntertainingCalendar', () => {
  beforeEach(() => {
    freshPage();
  });

  it('fetches GetEntertainingConfig once with the four block inputs and gives the configuration', async () => {
    const bodies = recordBodies(CONFIG);
    const { result } = renderHook(() => useEntertainingCalendar(INPUTS), { wrapper });
    expect(result.current.config).toBeUndefined();
    await waitFor(() => {
      expect(result.current.config).toEqual({
        token: '',
        baseURL: window.location.origin,
        b2CClientId: '',
        b2CPolicy: '',
      });
    });
    expect(calledActions()).toEqual(['Embedded_MyEntertaining/DataActionGetEntertainingConfig']);
    await waitFor(() => {
      expect(bodies).toEqual([INPUTS]);
    });
    expect(Object.keys(bodies[0] as object)).toEqual(['View', 'Theme', 'Sources', 'B2CTenant']);
  });

  it('does not fetch again when an input changes (OnParametersChanged does not refresh the data action)', async () => {
    const { result, rerender } = renderHook(({ inputs }) => useEntertainingCalendar(inputs), {
      wrapper,
      initialProps: { inputs: INPUTS },
    });
    await waitFor(() => {
      expect(result.current.config).toBeDefined();
    });
    rerender({ inputs: { ...INPUTS, Sources: 'orbit' } });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calledActions()).toEqual(['Embedded_MyEntertaining/DataActionGetEntertainingConfig']);
  });

  it('a failed GetEntertainingConfig is not retried and gives no configuration', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => useEntertainingCalendar(INPUTS), { wrapper });
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(result.current.config).toBeUndefined();
    expect(calledActions()).toEqual(['Embedded_MyEntertaining/DataActionGetEntertainingConfig']);
  });

  it('refreshToken: AppManager_Get_UserIdToken with EspaceName "", then the token goes to the SDK', async () => {
    const bodies = recordBodies('UBTConnect_EmbedMyEntertaining/ActionAppManager_Get_UserIdToken');
    const { result } = renderHook(() => useEntertainingCalendar(INPUTS), { wrapper });
    const apply = vi.fn();
    await result.current.refreshToken(apply);
    expect(apply).toHaveBeenCalledWith('');
    expect(calledActions()).toContain('ActionAppManager_Get_UserIdToken');
    await waitFor(() => {
      expect(bodies).toEqual([{ EspaceName: '' }]);
    });
  });

  it('refreshToken: a failure is logged as a warning and the SDK keeps its token', async () => {
    const warn = vi.spyOn(log, 'warn').mockImplementation(() => undefined);
    const { result } = renderHook(() => useEntertainingCalendar(INPUTS), { wrapper });
    sessionStorage.setItem('mock:mock', 'error');
    const apply = vi.fn();
    await result.current.refreshToken(apply);
    expect(apply).not.toHaveBeenCalled();
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0]?.[0]).toBe('AppManager_Get_UserIdToken failed');
  });
});
