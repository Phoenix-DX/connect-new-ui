import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { markCarouselUpdateItemAsRead } from '@/api/update';
import { LOCALITY_HOUSEHOLDS } from '@/mocks/fictional/directory';
import { getPreloadObject, setPreloadObject } from '@/platform/navigation';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { Type_CarouselItemSwipeAction } from '@/lib/ubtConnect/staticEntities';
import { useHouseholdCarousel } from './useHouseholdCarousel';

/* The variables and handlers of HouseholdCarousel, with UpdateItem_MarkAsRead and the view cache writes (the setter
   of useViewState) replaced by spies. The preload object is the one Updates_SingleList hands over: the second
   household has the swipe action of an unread update. */
vi.mock('@/api/update', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/update')>()),
  markCarouselUpdateItemAsRead: vi.fn(() => Promise.resolve()),
}));
const { setCached } = vi.hoisted(() => ({ setCached: vi.fn() }));
vi.mock('@/platform/navigation', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/platform/navigation')>();
  return {
    ...original,
    useViewState: <T,>(name: string, initial: T) => {
      const [value, setValue] = original.useViewState(name, initial);
      return [
        value,
        (next: T | ((previous: T) => T)) => {
          setCached(name);
          setValue(next);
        },
      ] as const;
    },
  };
});

const UNREAD = 'UBTConnect.Directory_Updates_UnreadCount';
const PRELOAD = {
  CarouselHouseholdItem: [
    { Household: '91001', SwipeAction: { ActionId: '', Parameters: '' } },
    {
      Household: '91002',
      SwipeAction: {
        ActionId: Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead,
        Parameters: '{"UpdateItemId":9102}',
      },
    },
  ],
};

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

beforeEach(() => {
  resetNavigation();
  setClientVar(UNREAD, 5);
  setCached.mockClear();
  vi.mocked(markCarouselUpdateItemAsRead).mockClear();
});
afterEach(() => {
  resetNavigation();
});

describe('useHouseholdCarousel', () => {
  it('OnInitialize: one item per preloaded household, starting at In_StartingHouseholdId, no header yet', () => {
    setPreloadObject(PRELOAD);
    const { result } = renderHook(() => useHouseholdCarousel({ In_StartingHouseholdId: '91002' }), { wrapper });
    expect(result.current.entitiesCarouselItems).toEqual([{ EntityId: '91001' }, { EntityId: '91002' }]);
    expect(result.current.startingPosition).toBe(1);
    expect(result.current.householdHeader).toBe('');
    expect(result.current.hasSwippedItems).toBe(false);
  });

  it('OnInitialize without a preload object: the mock preload of the route, the start household first', () => {
    const { result } = renderHook(() => useHouseholdCarousel({ In_StartingHouseholdId: '42438' }), { wrapper });
    expect(result.current.entitiesCarouselItems).toHaveLength(23);
    expect(result.current.entitiesCarouselItems.slice(0, 2)).toEqual([
      { EntityId: '42438' },
      { EntityId: LOCALITY_HOUSEHOLDS[1]?.id },
    ]);
    expect(result.current.startingPosition).toBe(0);
  });

  it('Handler_SetHeader: the header of the active slide', () => {
    const { result } = renderHook(() => useHouseholdCarousel({ In_StartingHouseholdId: '0' }), { wrapper });
    act(() => {
      result.current.onSetHeader('Bahia Blanca, Argentina');
    });
    expect(result.current.householdHeader).toBe('Bahia Blanca, Argentina');
  });

  it('Handler_EventMoved: the swipe action marks the update read once, and back hands the swiped update over', async () => {
    setPreloadObject(PRELOAD);
    const { result } = renderHook(() => useHouseholdCarousel({ In_StartingHouseholdId: '91001' }), { wrapper });
    act(() => {
      result.current.onEventMoved(0);
    });
    await settle();
    expect(markCarouselUpdateItemAsRead).not.toHaveBeenCalled();
    act(() => {
      result.current.onEventMoved(1);
    });
    await settle();
    expect(markCarouselUpdateItemAsRead).toHaveBeenCalledTimes(1);
    expect(markCarouselUpdateItemAsRead).toHaveBeenCalledWith('9102');
    expect(getClientVar(UNREAD)).toBe(4);
    expect(result.current.hasSwippedItems).toBe(true);
    // The swipe action of the item is cleared: a second move to it calls nothing.
    act(() => {
      result.current.onEventMoved(1);
    });
    await settle();
    expect(markCarouselUpdateItemAsRead).toHaveBeenCalledTimes(1);
    result.current.onBackNavigation();
    expect(getPreloadObject()).toEqual([{ EntityItemId: '9102', ListPosition: 1 }]);
  });
});

describe('useHouseholdCarousel after an unmount (flow scope, item 8)', () => {
  it('R2: a started swipe action (a module action) still marks the update read and lowers the count once, and writes no variable', async () => {
    let answer: () => void = () => undefined;
    vi.mocked(markCarouselUpdateItemAsRead).mockImplementationOnce(
      () =>
        new Promise<void>((resolve) => {
          answer = resolve;
        }),
    );
    setPreloadObject(PRELOAD);
    let renders = 0;
    const { result, unmount } = renderHook(
      () => {
        renders += 1;
        return useHouseholdCarousel({ In_StartingHouseholdId: '91001' });
      },
      { wrapper: strictWrapper },
    );
    act(() => {
      result.current.onEventMoved(1);
    });
    unmount();
    const rendersAtUnmount = renders;
    setCached.mockClear();
    answer();
    await settle();
    expect(markCarouselUpdateItemAsRead).toHaveBeenCalledTimes(1);
    expect(getClientVar(UNREAD)).toBe(4);
    expect(setCached).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
  });
});
