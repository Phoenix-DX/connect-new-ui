import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchHomeFeedCommunityStatistics } from '@/api/country';
import { CommunicationException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { useHomeFeedReady } from './useHomeFeedReady';

vi.mock('@/api/country', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/country')>()),
  fetchHomeFeedCommunityStatistics: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useWasRestoredFromCache: vi.fn(() => false),
}));

/* ScreenEvent_OnReady of HomeFeed, with the data action, the view cache check and the flow handler replaced by spies. */
const wrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

afterEach(() => {
  vi.clearAllMocks();
  vi.mocked(useWasRestoredFromCache).mockReturnValue(false);
});

describe('useHomeFeedReady', () => {
  it('IsScreenInitialized turns True after the first render; GetCommunityStatistics once (StrictMode too)', async () => {
    const { result } = renderHook(() => useHomeFeedReady(), { wrapper });
    expect(result.current).toBe(false);
    await settle();
    expect(result.current).toBe(true);
    expect(fetchHomeFeedCommunityStatistics).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a view that the view cache restored does not fetch', async () => {
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    const { result } = renderHook(() => useHomeFeedReady(), { wrapper });
    await settle();
    expect(result.current).toBe(true);
    expect(fetchHomeFeedCommunityStatistics).not.toHaveBeenCalled();
  });

  it('a failed GetCommunityStatistics goes to the flow handler', async () => {
    vi.mocked(fetchHomeFeedCommunityStatistics).mockRejectedValueOnce(new CommunicationException('offline'));
    renderHook(() => useHomeFeedReady(), { wrapper });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.objectContaining({ message: 'offline' }), expect.anything());
  });
});
