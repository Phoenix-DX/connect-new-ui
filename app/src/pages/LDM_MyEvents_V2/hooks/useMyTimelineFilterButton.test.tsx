import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventFilterLocalities } from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addAuditEvent_LDM } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { useMyTimelineFilterButton } from './useMyTimelineFilterButton';

vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchEventFilterLocalities: vi.fn(),
}));
vi.mock('@/shared/Connect2_OrbitMobile_MUI/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/Connect2_OrbitMobile_MUI/lib/actions')>()),
  addAuditEvent_LDM: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the timeline filter button, with the call and the audit event replaced by spies. Fictional
   localities. */
const LOCALITIES = [
  { IdAsText: '252', Name: 'Bahia Blanca', IsSelected: false },
  { IdAsText: '601', Name: 'Rosario', IsSelected: false },
];
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchEventFilterLocalities).mockResolvedValue(LOCALITIES);
});

describe('useMyTimelineFilterButton', () => {
  it('waits for In_HasLoaded, then fetches the localities once and logs the request time', async () => {
    const { rerender } = renderHook(({ hasLoaded }) => useMyTimelineFilterButton(hasLoaded, true, 24), {
      initialProps: { hasLoaded: false },
    });
    await settle();
    expect(fetchEventFilterLocalities).not.toHaveBeenCalled();
    rerender({ hasLoaded: true });
    await settle();
    rerender({ hasLoaded: false });
    rerender({ hasLoaded: true });
    await settle();
    expect(fetchEventFilterLocalities).toHaveBeenCalledTimes(1);
    expect(fetchEventFilterLocalities).toHaveBeenCalledWith({
      In_HasLoaded: true,
      In_DefaultDateRangeInMonths: 24,
      In_IsShowing: true,
      IsShowFilters: false,
      HasLocalityData: false,
    });
    expect(vi.mocked(addAuditEvent_LDM).mock.calls.map(([name]) => name)).toEqual(['RequestAPI_EventLocalities']);
  });

  it('a failed fetch goes to the flow handler, and the next change of the inputs tries again', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchEventFilterLocalities).mockRejectedValueOnce(error);
    const { result } = renderHook(() => useMyTimelineFilterButton(true, true, 24));
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(addAuditEvent_LDM).not.toHaveBeenCalled();
    act(() => {
      result.current.toggleEventFilters();
    });
    await settle();
    expect(fetchEventFilterLocalities).toHaveBeenCalledTimes(2);
    expect(vi.mocked(fetchEventFilterLocalities).mock.lastCall?.[0].IsShowFilters).toBe(true);
  });

  it('ToggleEventFilters opens and closes the filter popup', () => {
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24));
    expect(result.current.isShowFilters).toBe(false);
    act(() => {
      result.current.toggleEventFilters();
    });
    expect(result.current.isShowFilters).toBe(true);
    act(() => {
      result.current.toggleEventFilters();
    });
    expect(result.current.isShowFilters).toBe(false);
  });
});
