import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type KeyboardEvent, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { shareObject, type ShareObjectResult } from '@/api/share';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { recordBodies } from '@/test/testSupport';
import { profileListReducer } from './profileListState';
import { useProfileList, type ProfileListEvents, type ProfileListFlows } from './useProfileList';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./profileListState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./profileListState')>();
  return { ...actual, profileListReducer: vi.fn(actual.profileListReducer) };
});
vi.mock('@/api/share', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/share')>()),
  shareObject: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/session/cachedUserInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of ProfileList. GetAvailableUsers comes from the MSW mocks of the test setup (pages/LegacyShareObject/
   mocks.ts: Label "Contacts list", one fictional user, Alice Thornton, filtered by the search words); ShareObject, the
   cached user, the feedback message and the flow handler are spies. */
const ALICE = '990101';
const ALLOWED: ShareObjectResult = { isAllowed: true, isSuccess: true, message: '', shareId: '501' };

/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res) => {
      resolve = res;
    }),
  );
  return { resolve };
}

/** Lets the pending promises of the spies end. */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

/** A keyup of the search input; `blur` is a spy. */
function keyUp(key: string) {
  const blur = vi.fn();
  return { event: { key, currentTarget: { blur } } as unknown as KeyboardEvent<HTMLInputElement>, blur };
}

let events: ProfileListEvents;
function renderFlows(strict = false) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => {
    const tree = (
      <QueryClientProvider client={client}>
        <MemoryRouter>{children}</MemoryRouter>
      </QueryClientProvider>
    );
    return strict ? <StrictMode>{tree}</StrictMode> : tree;
  };
  return renderHook(() => useProfileList({ shareObjectId: '42438', shareObjectTypeId: 'Household' }, events), {
    wrapper,
  });
}

/** Waits until the flows satisfy `check`. */
const until = (result: { current: ProfileListFlows }, check: (flows: ProfileListFlows) => void) =>
  waitFor(() => {
    check(result.current);
  });
const availableUsersCalls = () =>
  (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetAvailableUsers').length;

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
  events = { onSubscriptionDenied: vi.fn(() => Promise.resolve()) };
  vi.mocked(shareObject).mockResolvedValue(ALLOWED);
  vi.mocked(appManager_GetCachedUserInfo).mockReturnValue({
    isCommunityMember: true,
    ContactBaseId: '',
    MemberId: '7100',
    FirstName: 'Kai',
    LastName: 'Andersen',
    Locality: 'Nelson',
    Country: 'New Zealand',
    CountryCode: 'NZ',
    UserExternalId: '',
    Username: '',
    Email: '',
    Phone: '',
  });
});
afterEach(() => {
  sessionStorage.clear();
  vi.clearAllMocks();
});

describe('useProfileList', () => {
  it('fetches GetAvailableUsers at start: searching, then the label and the rows', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ProfileList/DataActionGetAvailableUsers');
    const { result } = renderFlows();
    expect(result.current.results).toBe('searching');
    expect(result.current.label).toBe('');
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    expect(bodies).toEqual([
      { SearchFilter: '', ShareObjectId: '42438', ShareObjectTypeId: 'Household', MaxRecords: 50, HasSearched: false },
    ]);
    expect(result.current.label).toBe('Contacts list');
    expect(result.current.shareProfiles).toEqual([
      {
        profileId: ALICE,
        name: 'Alice Thornton',
        description: 'Las Cruces, United States',
        cdn: { bucket: '', path: '', type: '', signedPath: '' },
        isShared: false,
      },
    ]);
  });

  it('Enter searches with the filter and blurs; clearing the filter after a search fetches all again', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ProfileList/DataActionGetAvailableUsers');
    const { result } = renderFlows();
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    act(() => {
      result.current.onSearchFilterChange('nobody');
    });
    expect(result.current.searchFilter).toBe('nobody');
    const enter = keyUp('Enter');
    act(() => {
      result.current.onSearchFilterKeyUp(enter.event);
    });
    expect(enter.blur).toHaveBeenCalledTimes(1);
    await until(result, (flows) => {
      expect(flows.results).toBe('noResults');
    });
    expect(result.current.noResultsFoundMessage).toBe("No results found for 'nobody'");
    act(() => {
      result.current.onSearchFilterChange(' ');
    });
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    // The search is over (HasSearched False): an empty filter does not fetch again.
    act(() => {
      result.current.onSearchFilterChange('');
    });
    await settle();
    expect(bodies.map((b) => (b as { SearchFilter: string }).SearchFilter)).toEqual(['', 'nobody', ' ']);
    expect(bodies.map((b) => (b as { HasSearched: boolean }).HasSearched)).toEqual([false, false, true]);
  });

  it('another key does nothing', async () => {
    const { result } = renderFlows();
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    const other = keyUp('a');
    act(() => {
      result.current.onSearchFilterKeyUp(other.event);
    });
    await settle();
    expect(other.blur).not.toHaveBeenCalled();
    expect(availableUsersCalls()).toBe(1);
  });

  it('a failed first fetch shows the error blank slate', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderFlows();
    await until(result, (flows) => {
      expect(flows.results).toBe('error');
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a share that succeeds marks the row; ShareObject gets the name of the cached user', async () => {
    const { result } = renderFlows();
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    act(() => {
      result.current.onShare(ALICE);
    });
    await until(result, (flows) => {
      expect(flows.shareProfiles[0]?.isShared).toBe(true);
    });
    expect(shareObject).toHaveBeenCalledExactlyOnceWith({
      shareObjectTypeId: 'Household',
      sharedObjectId: '42438',
      sharingProfileName: 'Kai Andersen',
      targetCBUserId: ALICE,
    });
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    expect(events.onSubscriptionDenied).not.toHaveBeenCalled();
  });

  it('a share that is not allowed unmarks the row and raises SubscriptionDenied', async () => {
    vi.mocked(shareObject).mockResolvedValueOnce({ isAllowed: false, isSuccess: false, message: '', shareId: '0' });
    const { result } = renderFlows();
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    act(() => {
      result.current.onShare(ALICE);
    });
    await settle();
    expect(result.current.shareProfiles[0]?.isShared).toBe(false);
    expect(events.onSubscriptionDenied).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('a share that fails shows its message as an error and unmarks the row', async () => {
    vi.mocked(shareObject).mockResolvedValueOnce({
      isAllowed: true,
      isSuccess: false,
      message: 'The share failed',
      shareId: '0',
    });
    const { result } = renderFlows();
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    act(() => {
      result.current.onShare(ALICE);
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledExactlyOnceWith('The share failed', PLATFORM_MESSAGE_TYPE.error);
    expect(result.current.shareProfiles[0]?.isShared).toBe(false);
    expect(events.onSubscriptionDenied).not.toHaveBeenCalled();
  });

  it('StrictMode: one fetch at start', async () => {
    const { result } = renderFlows(true);
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    expect(availableUsersCalls()).toBe(1);
  });

  it('W23: a share that ends after the unmount raises SubscriptionDenied once and writes no state', async () => {
    const { result, unmount } = renderFlows(true);
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    const refused = pending<ShareObjectResult>(vi.mocked(shareObject));
    act(() => {
      result.current.onShare(ALICE);
    });
    unmount();
    vi.mocked(profileListReducer).mockClear();
    refused.resolve({ isAllowed: false, isSuccess: false, message: '', shareId: '0' });
    await settle();
    expect(shareObject).toHaveBeenCalledTimes(1);
    expect(events.onSubscriptionDenied).toHaveBeenCalledTimes(1);
    expect(profileListReducer).not.toHaveBeenCalled();
  });

  it('W23: a failed share that ends after the unmount still shows its message once', async () => {
    const { result, unmount } = renderFlows(true);
    await until(result, (flows) => {
      expect(flows.results).toBe('list');
    });
    const failed = pending<ShareObjectResult>(vi.mocked(shareObject));
    act(() => {
      result.current.onShare(ALICE);
    });
    unmount();
    vi.mocked(profileListReducer).mockClear();
    failed.resolve({ isAllowed: true, isSuccess: false, message: 'The share failed', shareId: '0' });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledExactlyOnceWith('The share failed', PLATFORM_MESSAGE_TYPE.error);
    expect(profileListReducer).not.toHaveBeenCalled();
  });
});
