import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { setPreloadObject } from '@/platform/navigation';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { useSupperMeetingCarousel } from './useSupperMeetingCarousel';

/* The variables of SupperMeeting_Carousel. The MSW mocks of the test setup load the route's mocks.ts, so the mock
   preload of the route is registered (pages/SupperMeeting_Carousel/mocks.ts). The view cache restore is covered by
   the page test (SupperMeeting_Carousel.test.tsx). */
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;

beforeEach(() => {
  resetNavigation();
});
afterEach(() => {
  resetNavigation();
});

describe('useSupperMeetingCarousel', () => {
  it('OnInitialize: one item per preloaded supper meeting, starting at In_StartingSupperMeetingId', () => {
    setPreloadObject({ SupperMeetingIds: ['9202', '9203', '9204'] });
    const { result } = renderHook(() => useSupperMeetingCarousel({ In_StartingSupperMeetingId: '9204' }), {
      wrapper,
    });
    expect(result.current.entitiesCarouselItems).toEqual([
      { EntityId: '9202' },
      { EntityId: '9203' },
      { EntityId: '9204' },
    ]);
    expect(result.current.startingPosition).toBe(2);
  });

  it('OnInitialize without a preload object: the mock preload of the route, the start supper meeting first', () => {
    const { result } = renderHook(() => useSupperMeetingCarousel({ In_StartingSupperMeetingId: '2820' }), {
      wrapper,
    });
    expect(result.current.entitiesCarouselItems).toEqual([
      { EntityId: '2820' },
      { EntityId: '9202' },
      { EntityId: '9203' },
    ]);
    expect(result.current.startingPosition).toBe(0);
  });

  it('OnInitialize with a preload object of another shape: no item', () => {
    setPreloadObject({ CarouselHouseholdItem: [{ Household: '42438' }] });
    const { result } = renderHook(() => useSupperMeetingCarousel({ In_StartingSupperMeetingId: '9202' }), {
      wrapper,
    });
    expect(result.current.entitiesCarouselItems).toEqual([]);
    expect(result.current.startingPosition).toBe(0);
  });

  it('keeps the variables of its first render', () => {
    setPreloadObject({ SupperMeetingIds: ['9202', '9203'] });
    const { result, rerender } = renderHook(
      ({ start }: { start: string }) => useSupperMeetingCarousel({ In_StartingSupperMeetingId: start }),
      { wrapper, initialProps: { start: '9203' } },
    );
    const first = result.current.entitiesCarouselItems;
    rerender({ start: '9202' });
    expect(result.current.entitiesCarouselItems).toBe(first);
    expect(result.current.startingPosition).toBe(1);
  });
});
