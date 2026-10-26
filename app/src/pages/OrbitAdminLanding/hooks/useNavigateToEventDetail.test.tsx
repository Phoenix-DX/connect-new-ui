import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchMilestoneScanFF } from '@/api/event';
import { useOsNavigate } from '@/platform/navigation';
import type { EventDetailTarget } from './adminLandingState';
import { orbitAdminEventDetailParams, useNavigateToEventDetail, wireDateTimeParam } from './useNavigateToEventDetail';

vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchMilestoneScanFF: vi.fn(),
}));
const navigate = vi.fn();
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: vi.fn(() => navigate),
}));

/* OnHandle_NavigateToEventDetail of the screen, with GetMilestoneScanFF and the navigation replaced by spies. The
   event is fictional. */
const TARGET: EventDetailTarget = {
  eventId: '7301',
  eventName: 'Weekend Bible Conferences',
  eventStartDate: '2026-11-07T09:00:00Z',
  eventEndDate: '2026-11-08T17:00:00Z',
  eventLocation: 'Bahia Blanca Main Hall',
  eventTypeFriendly: 'Weekend Conference Program',
};

const strictWrapper = ({ children }: { children: ReactNode }) => <StrictMode>{children}</StrictMode>;
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

beforeEach(() => {
  vi.mocked(fetchMilestoneScanFF).mockResolvedValue(false);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useNavigateToEventDetail', () => {
  it('IsScanPerMilestone False: OrbitAdminEventDetail with the inputs in the order of the original', async () => {
    const { result } = renderHook(() => useNavigateToEventDetail());
    await act(() => result.current(TARGET));
    expect(fetchMilestoneScanFF).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/OrbitAdminEventDetail', {
      In_EventId: '7301',
      In_EventStartDate: '2026-11-07T09:00:00.000Z',
      In_EventLocation: 'Bahia Blanca Main Hall',
      In_EventName: 'Weekend Bible Conferences',
      In_EventEndDate: '2026-11-08T17:00:00.000Z',
      In_EventTypeFriendly: 'Weekend Conference Program',
    });
    const [, params] = navigate.mock.calls[0] as [string, Record<string, unknown>];
    expect(Object.keys(params)).toEqual([
      'In_EventId',
      'In_EventStartDate',
      'In_EventLocation',
      'In_EventName',
      'In_EventEndDate',
      'In_EventTypeFriendly',
    ]);
  });

  it('IsScanPerMilestone True: OrbitAdminMilestones with the EventId', async () => {
    vi.mocked(fetchMilestoneScanFF).mockResolvedValueOnce(true);
    const { result } = renderHook(() => useNavigateToEventDetail());
    await act(() => result.current(TARGET));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/OrbitAdminMilestones', { EventId: '7301' });
  });

  it('a failed GetMilestoneScanFF rejects and does not navigate', async () => {
    const error = new Error('offline');
    vi.mocked(fetchMilestoneScanFF).mockRejectedValueOnce(error);
    const { result } = renderHook(() => useNavigateToEventDetail());
    await expect(result.current(TARGET)).rejects.toBe(error);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('W23: after the unmount, the started handler still navigates, once', async () => {
    let answer: (value: boolean) => void = () => undefined;
    vi.mocked(fetchMilestoneScanFF).mockReturnValueOnce(
      new Promise((resolve) => {
        answer = resolve;
      }),
    );
    const { result, unmount } = renderHook(() => useNavigateToEventDetail(), { wrapper: strictWrapper });
    const running = result.current(TARGET);
    unmount();
    answer(false);
    await act(() => running);
    await settle();
    expect(fetchMilestoneScanFF).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate.mock.calls[0]?.[0]).toBe('/UBTConnect/OrbitAdminEventDetail');
    expect(useOsNavigate).toHaveBeenCalled();
  });

  it('the null DateTime and an empty one go in the URL as "1900-01-01T00:00:00"', () => {
    expect(wireDateTimeParam('')).toBe('1900-01-01T00:00:00');
    expect(wireDateTimeParam('1900-01-01T00:00:00Z')).toBe('1900-01-01T00:00:00');
    expect(wireDateTimeParam('2026-11-07T09:00:00Z')).toBe('2026-11-07T09:00:00.000Z');
    expect(orbitAdminEventDetailParams({ ...TARGET, eventStartDate: '', eventEndDate: '' })).toMatchObject({
      In_EventStartDate: '1900-01-01T00:00:00',
      In_EventEndDate: '1900-01-01T00:00:00',
    });
  });
});
