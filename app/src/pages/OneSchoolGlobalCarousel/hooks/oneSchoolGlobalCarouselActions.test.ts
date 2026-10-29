import { afterEach, describe, expect, it } from 'vitest';
import { clearPreloadObject, getPreloadObject } from '@/platform/navigation/preload';
import {
  assignFromObject,
  EMPTY_PRELOAD,
  handlerBackNavigation,
  oneSchoolGlobalCarouselOnInitialize,
  startingPosition,
  toEntitiesCarouselItems,
} from './oneSchoolGlobalCarouselActions';

afterEach(() => {
  clearPreloadObject();
});

describe('OneSchoolGlobalCarousel OnInitialize', () => {
  it('copies the item ids of a PreloadedCarousel object as Long Integer texts (AssignFromObject)', () => {
    expect(assignFromObject({ CarouselItemIds: ['1431', 1432, ' 1433 ', '01430'] })).toEqual({
      CarouselItemIds: ['1431', '1432', '1433', '1430'],
    });
  });

  it('keeps the empty list without an object or with an object of another shape', () => {
    expect(assignFromObject(null)).toBe(EMPTY_PRELOAD);
    expect(assignFromObject({ SupperMeetingIds: ['1'] })).toBe(EMPTY_PRELOAD);
    expect(assignFromObject({ CarouselItemIds: '1431' })).toBe(EMPTY_PRELOAD);
  });

  it('StartingPosition is the index of In_StartingObjectId, else 0 (ListIndexOf)', () => {
    const preload = { CarouselItemIds: ['1430', '1431', '1432'] };
    expect(startingPosition(preload, '1432')).toBe(2);
    expect(startingPosition(preload, '01431')).toBe(1);
    expect(startingPosition(preload, '9')).toBe(0);
    expect(startingPosition(EMPTY_PRELOAD, '1430')).toBe(0);
  });

  it('appends one EntitiesCarousel_Item per id, in the list order (ListAppend)', () => {
    expect(toEntitiesCarouselItems({ CarouselItemIds: ['1432', '1430'] })).toEqual([
      { EntityId: '1432' },
      { EntityId: '1430' },
    ]);
  });

  it('assigns PreloadedCarousel, EntitiesCarousel_Items and StartingPosition; nothing without a preload', () => {
    expect(oneSchoolGlobalCarouselOnInitialize({ CarouselItemIds: ['1430', '1431'] }, '1431')).toEqual({
      preload: { CarouselItemIds: ['1430', '1431'] },
      items: [{ EntityId: '1430' }, { EntityId: '1431' }],
      position: 1,
    });
    expect(oneSchoolGlobalCarouselOnInitialize(null, '1430')).toEqual({
      preload: EMPTY_PRELOAD,
      items: [],
      position: 0,
    });
  });
});

describe('OneSchoolGlobalCarousel Handler_BackNavigation', () => {
  it('sets the preload object to SwippedItems (SetPreloadObject keeps only a set object)', () => {
    handlerBackNavigation([{ EntityItemId: '1431', ListPosition: 1 }]);
    expect(getPreloadObject()).toEqual([{ EntityItemId: '1431', ListPosition: 1 }]);
  });
});
