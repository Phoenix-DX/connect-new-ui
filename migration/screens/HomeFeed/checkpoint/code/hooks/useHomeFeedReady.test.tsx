import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchCommunityStatistics } from '@/api/member';
import { CommunicationException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { useHomeFeedReady } from './useHomeFeedReady';

const STATISTICS = {
  In_Change: 6,
  In_CountriesCount: 17,
  In_HouseholdCount: 19870,
  In_LocalitiesCount: 386,
  In_MembersCount: 48215,
};

vi.mock('@/api/member', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/member')>()),
  fetchCommunityStatistics: vi.fn(() => Promise.resolve(STATISTICS)),
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
    expect(result.current.isScreenInitialized).toBe(false);
    expect(result.current.communityStatistics.isDataFetched).toBe(false);
    await settle();
    expect(result.current.isScreenInitialized).toBe(true);
    expect(fetchCommunityStatistics).toHaveBeenCalledTimes(1);
    expect(fetchCommunityStatistics).toHaveBeenCalledWith('HomeFeed');
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('the answer of GetCommunityStatistics is the data of Directory_CommunityNumbers', async () => {
    const { result } = renderHook(() => useHomeFeedReady(), { wrapper });
    await settle();
    expect(result.current.communityStatistics).toEqual({ isDataFetched: true, out: STATISTICS });
  });

  it('a view that the view cache restored does not fetch', async () => {
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    const { result } = renderHook(() => useHomeFeedReady(), { wrapper });
    await settle();
    expect(result.current.isScreenInitialized).toBe(true);
    expect(fetchCommunityStatistics).not.toHaveBeenCalled();
  });

  it('a failed GetCommunityStatistics goes to the flow handler and stays not fetched', async () => {
    vi.mocked(fetchCommunityStatistics).mockRejectedValueOnce(new CommunicationException('offline'));
    const { result } = renderHook(() => useHomeFeedReady(), { wrapper });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.objectContaining({ message: 'offline' }), expect.anything());
    expect(result.current.communityStatistics.isDataFetched).toBe(false);
  });
});
