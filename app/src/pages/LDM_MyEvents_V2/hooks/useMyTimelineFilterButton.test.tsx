import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventFilterLocalities } from '@/api/locality';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '@/lib/orbit/actions';
import { useMyTimelineFilterButton } from './useMyTimelineFilterButton';

vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchEventFilterLocalities: vi.fn(),
}));
vi.mock('@/lib/orbit/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/orbit/actions')>()),
  addAuditEvent_LDM: vi.fn(),
  getCurrentTimeInMill: vi.fn(() => 1000),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the timeline filter button, with the call and the audit event replaced by spies. Fictional
   localities. The block has a flow scope (useFlowScope), which reads the history entry: the hooks render in a
   router. */
const BAHIA = { IdAsText: '252', Name: 'Bahia Blanca', IsSelected: false };
const ROSARIO = { IdAsText: '601', Name: 'Rosario', IsSelected: false };
const LOCALITIES = [BAHIA, ROSARIO];
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** The second argument of a raise: the flow scope of the block. */
const FLOW_SCOPE: unknown = expect.objectContaining({ alive: expect.any(Function) as unknown });
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
      wrapper,
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

  it('a failed fetch goes to the flow handler with the flow scope, and the next change of the inputs tries again', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchEventFilterLocalities).mockRejectedValueOnce(error);
    const { result } = renderHook(() => useMyTimelineFilterButton(true, true, 24, blockEvents()), { wrapper });
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
    expect(addAuditEvent_LDM).not.toHaveBeenCalled();
    act(() => {
      result.current.toggleEventFilters();
    });
    await settle();
    expect(fetchEventFilterLocalities).toHaveBeenCalledTimes(2);
    expect(vi.mocked(fetchEventFilterLocalities).mock.lastCall?.[0].IsShowFilters).toBe(true);
  });

  it('ToggleEventFilters opens and closes the filter popup', () => {
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24, blockEvents()), { wrapper });
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
    const { result } = renderHook(() => useMyTimelineFilterButton(true, true, 24, blockEvents()), { wrapper });
    await settle();
    expect(result.current.selectedFilters).toEqual({
      FromDate: '1900-01-01',
      ToDate: '1900-01-01',
      Localities: LOCALITIES,
    });
  });

  it('ToggleEventFilters does nothing without In_IsShowing', () => {
    const { result } = renderHook(() => useMyTimelineFilterButton(false, false, 24, blockEvents()), { wrapper });
    act(() => {
      result.current.toggleEventFilters();
    });
    expect(result.current.isShowFilters).toBe(false);
  });

  it('OnHandle_Filter closes the popup, raises Filter with the selected localities, then keeps the filters', async () => {
    const events = blockEvents();
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24, events), { wrapper });
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
    const { result } = renderHook(() => useMyTimelineFilterButton(false, true, 24, events), { wrapper });
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

/* Flow scope (item 8, item8-S5a.md Q1 (a)): GetEventLocalitiesForFilter is a data action (IDataAction on the MCP,
   R1). After the unmount its answer is dropped: GetEventLocalitiesData stops at the refresh. */
describe('useMyTimelineFilterButton after an unmount (flow scope, item 8)', () => {
  it('R1: unmount while GetEventLocalitiesForFilter is pending: no state write, no audit, no raise', async () => {
    let answer: (localities: typeof LOCALITIES) => void = () => undefined;
    vi.mocked(fetchEventFilterLocalities).mockReturnValueOnce(
      new Promise((resolve) => {
        answer = resolve;
      }),
    );
    const { unmount } = renderHook(() => useMyTimelineFilterButton(true, true, 24, blockEvents()), { wrapper });
    await settle();
    expect(fetchEventFilterLocalities).toHaveBeenCalledTimes(1);
    expect(getCurrentTimeInMill).toHaveBeenCalledTimes(1);
    unmount();
    answer(LOCALITIES);
    await settle();
    // Nothing after the refresh runs: not the SelectedFilters write, not the request time of the audit.
    expect(getCurrentTimeInMill).toHaveBeenCalledTimes(1);
    expect(addAuditEvent_LDM).not.toHaveBeenCalled();
    expect(
      vi
        .mocked(raiseToFlowHandler)
        .mock.calls.map(([error]) => error)
        .filter((error) => !(error instanceof IgnorableSystemException)),
    ).toEqual([]);
  });
});
