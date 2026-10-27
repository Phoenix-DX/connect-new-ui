import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventFilterLocalities } from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addAuditEvent_LDM } from '@/lib/orbit/actions';
import { useMyTimelineFilterButton } from './useMyTimelineFilterButton';

vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchEventFilterLocalities: vi.fn(),
}));
vi.mock('@/lib/orbit/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/orbit/actions')>()),
  addAuditEvent_LDM: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the timeline filter button, with the call and the audit event replaced by spies. Fictional
   localities. */
const BAHIA = { IdAsText: '252', Name: 'Bahia Blanca', IsSelected: false };
const ROSARIO = { IdAsText: '601', Name: 'Rosario', IsSelected: false };
const LOCALITIES = [BAHIA, ROSARIO];
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
const blockEvents = () => ({
  onFilter: vi.fn(() => Promise.resolve()),
  onResetFilters: vi.fn(() => Promise.resolve()),
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchEventFilterLocalities).mockResolvedValue(LOCALITIES);
});

describe('useMyTimelineFilterButton', () => {
  it('waits for In_HasLoaded, then fetches the localities once and logs the request time', async () => {
    const { rerender } = renderHook(({ hasLoaded }) => useMyTimelineFilterButton(hasLoaded, true, 24, blockEvents()), {
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
    const { result } = renderHook(() => useMyTimelineFilterButton(true, true, 24, blockEvents()));
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
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24, blockEvents()));
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

  it('the localities go to SelectedFilters, with NullDate dates', async () => {
    const { result } = renderHook(() => useMyTimelineFilterButton(true, true, 24, blockEvents()));
    await settle();
    expect(result.current.selectedFilters).toEqual({
      FromDate: '1900-01-01',
      ToDate: '1900-01-01',
      Localities: LOCALITIES,
    });
  });

  it('ToggleEventFilters does nothing without In_IsShowing', () => {
    const { result } = renderHook(() => useMyTimelineFilterButton(false, false, 24, blockEvents()));
    act(() => {
      result.current.toggleEventFilters();
    });
    expect(result.current.isShowFilters).toBe(false);
  });

  it('OnHandle_Filter closes the popup, raises Filter with the selected localities, then keeps the filters', async () => {
    const events = blockEvents();
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24, events));
    act(() => {
      result.current.toggleEventFilters();
    });
    const chosen = {
      FromDate: '2025-01-01',
      ToDate: '2026-11-03',
      Localities: [BAHIA, { ...ROSARIO, IsSelected: true }],
    };
    await act(() => result.current.onFilter(chosen));
    expect(result.current.isShowFilters).toBe(false);
    expect(events.onFilter).toHaveBeenCalledWith({
      FromDate: '2025-01-01',
      ToDate: '2026-11-03',
      Localities: [{ ...ROSARIO, IsSelected: true }],
    });
    expect(result.current.selectedFilters).toBe(chosen);
  });

  it('OnHandle_ResetFilters keeps the reset filters; OnHandle_Close raises ResetFilters only with In_IsToReset', async () => {
    const events = blockEvents();
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24, events));
    const reset = { FromDate: '2024-10-27', ToDate: '2026-11-03', Localities: LOCALITIES };
    act(() => {
      result.current.toggleEventFilters();
      result.current.onResetFilters(reset);
    });
    await act(() => result.current.onClose(false));
    expect(result.current.isShowFilters).toBe(false);
    expect(events.onResetFilters).not.toHaveBeenCalled();
    act(() => {
      result.current.toggleEventFilters();
    });
    await act(() => result.current.onClose(true));
    expect(result.current.isShowFilters).toBe(false);
    expect(events.onResetFilters).toHaveBeenCalledWith(reset);
  });
});
