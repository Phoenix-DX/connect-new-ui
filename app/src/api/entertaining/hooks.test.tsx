import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useEntertainingConfigQuery } from './hooks';
import { entertainingKeys } from './keys';
import type { EntertainingConfigInputs } from './types';

const INPUTS: EntertainingConfigInputs = { View: 'timeline', Theme: 'light', Sources: 'assemble', B2CTenant: '' };

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

describe('entertaining query keys', () => {
  it('the config key has no input', () => {
    expect(entertainingKeys.config()).toEqual(['entertaining', 'config']);
  });
});

describe('useEntertainingConfigQuery', () => {
  it('fetches once; a new render with other inputs does not fetch again', async () => {
    const { result, rerender } = renderHook(({ inputs }) => useEntertainingConfigQuery(inputs), {
      wrapper: providerOf(new QueryClient()),
      initialProps: { inputs: INPUTS },
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.baseURL).toBe(window.location.origin);
    rerender({ inputs: { ...INPUTS, Sources: 'orbit' } });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calls()).toEqual(['DataActionGetEntertainingConfig']);
  });

  it('drops the data when the block closes, so the next mount fetches again', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useEntertainingConfigQuery(INPUTS), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    first.unmount();
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(client.getQueryData(entertainingKeys.config())).toBeUndefined();
    const second = renderHook(() => useEntertainingConfigQuery(INPUTS), { wrapper: providerOf(client) });
    expect(second.result.current.data).toBeUndefined();
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetEntertainingConfig', 'DataActionGetEntertainingConfig']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(() => useEntertainingConfigQuery(INPUTS), {
      wrapper: providerOf(new QueryClient()),
    });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetEntertainingConfig']);
  });
});
