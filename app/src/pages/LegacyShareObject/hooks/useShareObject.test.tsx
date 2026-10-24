import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchHouseholdShareCard, type HouseholdShareCard } from '@/api/household';
import { fetchCommunityBusinessShareCard, type CommunityBusinessShareCard } from '@/api/locality';
import { UserException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { EMPTY_COMMUNITY_BUSINESS, INITIAL_SHARE_OBJECT_STATE, shareObjectReducer } from './shareObjectState';
import { useShareObject, type ShareObjectParameters } from './useShareObject';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./shareObjectState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./shareObjectState')>();
  return { ...actual, shareObjectReducer: vi.fn(actual.shareObjectReducer) };
});
vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchHouseholdShareCard: vi.fn(),
}));
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchCommunityBusinessShareCard: vi.fn(),
}));
/* useFlowState sends a rejection of OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of ScreenBlock_ShareObject, with the two card calls replaced by spies. The type label comes from the MSW
   mocks of the test setup (pages/LegacyShareObject/mocks.ts). Fictional households and businesses. */
const HOUSEHOLD: HouseholdShareCard = {
  name: 'Tomás & Lucía Ferreyra',
  familyNames: 'Mateo & Julieta',
  localityName: 'Rosario',
  countryName: 'Argentina',
};
const BUSINESS: CommunityBusinessShareCard = {
  ...EMPTY_COMMUNITY_BUSINESS,
  name: 'Campus&Co Rosario',
  areasServed: 'Rosario',
  countryName: 'Argentina',
};

/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}

/** Lets the mocked calls and the MSW answers (latency 0) end. */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
  });
const labelCalls = () =>
  (window.__osCalls ?? []).filter((c) => c.action === 'ScreenDataSetGetShareObjectTypeById').length;

function renderFlows(initialProps: ShareObjectParameters, strict = false) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => {
    const tree = (
      <QueryClientProvider client={client}>
        <MemoryRouter>{children}</MemoryRouter>
      </QueryClientProvider>
    );
    return strict ? <StrictMode>{tree}</StrictMode> : tree;
  };
  return renderHook((props: ShareObjectParameters) => useShareObject(props), { wrapper, initialProps });
}

const household = (objectId = '42438'): ShareObjectParameters => ({
  shareObjectTypeId: 'Household',
  objectId,
  customTitle: '',
  userAgeVisibility: false,
});

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
  vi.mocked(fetchHouseholdShareCard).mockResolvedValue(HOUSEHOLD);
  vi.mocked(fetchCommunityBusinessShareCard).mockResolvedValue(BUSINESS);
});
afterEach(() => {
  sessionStorage.clear();
  vi.clearAllMocks();
});

describe('useShareObject', () => {
  it('OnReady of a household: GetHouseholdDetails with the id as a Long Integer, then the card and no loading', async () => {
    const card = pending<HouseholdShareCard>(vi.mocked(fetchHouseholdShareCard));
    const { result } = renderFlows(household(' 42438 '));
    expect(result.current.state).toEqual(INITIAL_SHARE_OBJECT_STATE);
    await settle();
    expect(fetchHouseholdShareCard).toHaveBeenCalledTimes(1);
    expect(fetchHouseholdShareCard).toHaveBeenCalledWith({
      HouseholdId: '42438',
      User_AgeVisibility: false,
      CheckVisibility: false,
    });
    expect(result.current.state.isLoading).toBe(true);
    card.resolve(HOUSEHOLD);
    await settle();
    expect(result.current.state).toEqual({
      ...INITIAL_SHARE_OBJECT_STATE,
      isLoading: false,
      household: { name: 'Tomás & Lucía Ferreyra', description: 'Mateo & Julieta', tag: 'Rosario, Argentina' },
    });
    await waitFor(() => {
      expect(result.current.shareObjectTypeLabel).toBe('Household');
    });
    expect(fetchCommunityBusinessShareCard).not.toHaveBeenCalled();
  });

  it('OnReady of Campus&Co and OneSchool Global: the share card, with the country after the areas served', async () => {
    for (const shareObjectTypeId of ['Campus&Co', 'OneSchool Global']) {
      vi.mocked(fetchCommunityBusinessShareCard).mockClear();
      const { result, unmount } = renderFlows({ ...household('abc'), shareObjectTypeId });
      await settle();
      expect(fetchCommunityBusinessShareCard).toHaveBeenCalledExactlyOnceWith('0');
      expect(result.current.state.isLoading).toBe(false);
      expect(result.current.state.communityBusiness).toEqual({ ...BUSINESS, areasServed: 'Rosario, Argentina' });
      await waitFor(() => {
        expect(result.current.shareObjectTypeLabel).toBe(shareObjectTypeId);
      });
      unmount();
    }
    expect(fetchHouseholdShareCard).not.toHaveBeenCalled();
  });

  it('OnReady of a feed item or another type: no card call, no loading', async () => {
    for (const shareObjectTypeId of ['Feed', 'Update', '']) {
      const { result, unmount } = renderFlows({ ...household(), shareObjectTypeId, customTitle: 'Item title' });
      await settle();
      expect(result.current.state.isLoading).toBe(false);
      unmount();
    }
    expect(fetchHouseholdShareCard).not.toHaveBeenCalled();
    expect(fetchCommunityBusinessShareCard).not.toHaveBeenCalled();
  });

  it('an exception of OnReady leaves IsLoading True and goes to the flow handler', async () => {
    const error = new UserException('Household not found', 'Connect2_LegacyShared.ObjectNotFound');
    vi.mocked(fetchHouseholdShareCard).mockRejectedValueOnce(error);
    const { result } = renderFlows(household());
    await settle();
    expect(result.current.state.isLoading).toBe(true);
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([e]) => e)).toEqual([error]);
  });

  it('a new User_AgeVisibility fetches the type label again, OnReady does not run again', async () => {
    const { result, rerender } = renderFlows(household());
    await waitFor(() => {
      expect(result.current.shareObjectTypeLabel).toBe('Household');
    });
    expect(labelCalls()).toBe(1);
    rerender({ ...household(), userAgeVisibility: true });
    await settle();
    expect(labelCalls()).toBe(2);
    expect(result.current.shareObjectTypeLabel).toBe('Household');
    expect(fetchHouseholdShareCard).toHaveBeenCalledTimes(1);
  });

  it('StrictMode: OnReady calls once and writes the card', async () => {
    const { result } = renderFlows(household(), true);
    await settle();
    expect(fetchHouseholdShareCard).toHaveBeenCalledTimes(1);
    expect(result.current.state.household.tag).toBe('Rosario, Argentina');
    expect(result.current.state.isLoading).toBe(false);
  });

  it('W23: after the unmount, the started OnReady calls once and writes no state', async () => {
    const card = pending<HouseholdShareCard>(vi.mocked(fetchHouseholdShareCard));
    const { unmount } = renderFlows(household(), true);
    await settle();
    unmount();
    vi.mocked(shareObjectReducer).mockClear();
    card.resolve(HOUSEHOLD);
    await settle();
    expect(fetchHouseholdShareCard).toHaveBeenCalledTimes(1);
    expect(shareObjectReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: an exception after the unmount still goes to the flow handler, once, without a state write', async () => {
    const card = pending<HouseholdShareCard>(vi.mocked(fetchHouseholdShareCard));
    const { unmount } = renderFlows(household(), true);
    await settle();
    unmount();
    vi.mocked(shareObjectReducer).mockClear();
    const error = new UserException('Household not found', 'Connect2_LegacyShared.ObjectNotFound');
    card.reject(error);
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([e]) => e)).toEqual([error]);
    expect(shareObjectReducer).not.toHaveBeenCalled();
  });
});
