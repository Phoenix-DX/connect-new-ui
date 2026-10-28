import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { OutOfContextException } from '@/legacy/os/os-exceptions';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import type { EventDetailTarget } from './adminLandingState';
import { orbitAdminEventDetailParams, useNavigateToEventDetail, wireDateTimeParam } from './useNavigateToEventDetail';

const navigate = vi.hoisted(() => vi.fn());
/** On: the hook gets the platform navigation with its R4 check (the tests of a screen that the user left). */
const platformNavigation = vi.hoisted(() => ({ on: false }));
vi.mock('@/platform/navigation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation')>();
  return {
    ...actual,
    useOsNavigate: () => {
      const platform = actual.useOsNavigate();
      return platformNavigation.on ? platform : navigate;
    },
  };
});

/* OnHandle_NavigateToEventDetail of the screen, with the navigation replaced by a spy. The event is fictional. */
const TARGET: EventDetailTarget = {
  eventId: '7301',
  eventName: 'Weekend Bible Conferences',
  eventStartDate: '2026-11-07T09:00:00Z',
  eventEndDate: '2026-11-08T17:00:00Z',
  eventLocation: 'Bahia Blanca Main Hall',
  eventTypeFriendly: 'Weekend Conference Program',
};

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
afterEach(() => {
  platformNavigation.on = false;
  resetNavigation();
  vi.clearAllMocks();
});

/** OrbitAdminLanding with the handler in a ref, on the app's frame (NavigationHost) of a memory router. */
function renderScreen() {
  platformNavigation.on = true;
  const handler: { current: ((target: EventDetailTarget) => void) | null } = { current: null };
  function Screen() {
    handler.current = useNavigateToEventDetail();
    return null;
  }
  const view = renderRoutes(
    {
      '/UBTConnect/OrbitAdminLanding': <Screen />,
      '/UBTConnect/OrbitAdminEventDetail': <p>Event detail</p>,
      '/UBTConnect/Updates': <p>Updates</p>,
    },
    '/UBTConnect/OrbitAdminLanding',
  );
  return { ...view, handler };
}

describe('useNavigateToEventDetail', () => {
  it('opens OrbitAdminEventDetail with the inputs in the order of the original, without a server call (TST)', () => {
    const { result } = renderHook(() => useNavigateToEventDetail(), { wrapper });
    act(() => {
      result.current(TARGET);
    });
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

describe('useNavigateToEventDetail on a screen that the user left (flow scope, item 8)', () => {
  it('on the screen that the router shows, the handler opens OrbitAdminEventDetail', () => {
    const { handler, at } = renderScreen();
    act(() => {
      handler.current?.(TARGET);
    });
    expect(at()).toMatch(/^\/UBTConnect\/OrbitAdminEventDetail\?In_EventId=7301&/);
  });

  it('R4: after the user left the screen, the handler does not navigate: OutOfContextException', async () => {
    const { handler, router, at } = renderScreen();
    await act(() => router.navigate('/UBTConnect/Updates'));
    expect(() => {
      handler.current?.(TARGET);
    }).toThrow(OutOfContextException);
    expect(at()).toBe('/UBTConnect/Updates');
  });
});
