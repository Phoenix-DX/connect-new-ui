import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { CommunicationException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { createQueryClient } from '@/api/client/queryClient';
import { installQueryErrorsToFlowHandler } from './flowErrors';

/* A failed fetch of a query goes to the flow handler once per failed fetch (item 2, design (a), user 2026-10-28;
   migration/clarify/review/item2-solution.md §2). OutSystems: the runtime flushes the model, then calls the
   handleError of the screen or block (OutSystems.js executeDataFetchAction; item2-fetch-errors.md E1, E3). */

vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

const FAILURE = new CommunicationException('Request failed with status 500');

function setup(strict = false) {
  const client = createQueryClient();
  const uninstall = installQueryErrorsToFlowHandler(client);
  const wrapper = ({ children }: { children: ReactNode }) => {
    const tree = <QueryClientProvider client={client}>{children}</QueryClientProvider>;
    return strict ? <StrictMode>{tree}</StrictMode> : tree;
  };
  return { client, uninstall, wrapper };
}

const failing = (meta?: { errorFlow: 'screen' | 'caller' }) => () =>
  useQuery({ queryKey: ['probe'], queryFn: () => Promise.reject(FAILURE), meta });

beforeEach(() => {
  vi.mocked(raiseToFlowHandler).mockClear();
});

describe('installQueryErrorsToFlowHandler', () => {
  test('a failed fetch goes to the flow handler once, with the error', async () => {
    const { wrapper } = setup();
    const { result } = renderHook(failing(), { wrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(FAILURE);
  });

  test('StrictMode and a re-render do not raise again', async () => {
    const { wrapper } = setup(true);
    const { result, rerender } = renderHook(failing(), { wrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    rerender();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
  });

  test('each failed refetch raises again, as each failed Refresh calls handleError', async () => {
    const { wrapper } = setup();
    const { result } = renderHook(failing(), { wrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    await act(async () => {
      await result.current.refetch();
    });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(2);
  });

  test('the screen unmounted before the failure: nothing is raised (TST shows no message for a left screen, E9)', async () => {
    const { wrapper } = setup();
    let reject: ((error: unknown) => void) | undefined;
    const usePending = () =>
      useQuery({ queryKey: ['pending'], queryFn: () => new Promise<never>((_resolve, no) => (reject = no)) });
    const { unmount } = renderHook(usePending, { wrapper });
    await waitFor(() => {
      expect(reject).toBeDefined();
    });
    unmount();
    await act(async () => {
      reject?.(FAILURE);
      await Promise.resolve();
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  test('another mounted caller of the same query still raises once', async () => {
    const { wrapper } = setup();
    let reject: ((error: unknown) => void) | undefined;
    const usePending = () =>
      useQuery({ queryKey: ['shared'], queryFn: () => new Promise<never>((_resolve, no) => (reject = no)) });
    const left = renderHook(usePending, { wrapper });
    const stays = renderHook(usePending, { wrapper });
    await waitFor(() => {
      expect(reject).toBeDefined();
    });
    left.unmount();
    await act(async () => {
      reject?.(FAILURE);
      await Promise.resolve();
    });
    await waitFor(() => {
      expect(stays.result.current.isError).toBe(true);
    });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
  });

  test("meta.errorFlow 'caller': the flow that awaits the fetch handles the error, nothing is raised", async () => {
    const { wrapper } = setup();
    const { result } = renderHook(failing({ errorFlow: 'caller' }), { wrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  test('a cancelled fetch is not a failed fetch', async () => {
    const { client } = setup();
    const fetching = client.fetchQuery({ queryKey: ['slow'], queryFn: () => new Promise<never>(() => undefined) });
    await client.cancelQueries({ queryKey: ['slow'] });
    await expect(fetching).rejects.toThrow();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  test('a successful fetch raises nothing; after the uninstall a failure raises nothing', async () => {
    const { client, uninstall } = setup();
    await client.fetchQuery({ queryKey: ['ok'], queryFn: () => Promise.resolve(1) });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
    uninstall();
    await expect(client.fetchQuery({ queryKey: ['late'], queryFn: () => Promise.reject(FAILURE) })).rejects.toBe(
      FAILURE,
    );
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  test('a client without the subscription raises nothing (each client installs it once, main.tsx)', async () => {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    await expect(client.fetchQuery({ queryKey: ['x'], queryFn: () => Promise.reject(FAILURE) })).rejects.toBe(FAILURE);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});
