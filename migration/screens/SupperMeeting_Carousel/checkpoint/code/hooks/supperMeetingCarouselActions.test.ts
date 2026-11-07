import { describe, expect, it } from 'vitest';
import {
  assignFromObject,
  EMPTY_PRELOAD,
  startingPosition,
  supperMeetingCarouselOnInitialize,
  toEntitiesCarouselItems,
} from './supperMeetingCarouselActions';

describe('assignFromObject', () => {
  it('copies the supper meeting ids of a PreloadedSupperMeetings object, as Long Integer texts', () => {
    expect(assignFromObject({ SupperMeetingIds: ['9202', 9203, ' 9204 ', '007'] })).toEqual({
      SupperMeetingIds: ['9202', '9203', '9204', '7'],
    });
  });

  it('leaves the list empty without an object or with an object of another shape', () => {
    expect(assignFromObject(null)).toBe(EMPTY_PRELOAD);
    expect(assignFromObject('9202')).toBe(EMPTY_PRELOAD);
    expect(assignFromObject({ CarouselHouseholdItem: [] })).toBe(EMPTY_PRELOAD);
    expect(assignFromObject({ SupperMeetingIds: '9202' })).toBe(EMPTY_PRELOAD);
  });
});

describe('startingPosition', () => {
  const preload = { SupperMeetingIds: ['9202', '9203', '9204'] };

  it('is the index of In_StartingSupperMeetingId in the list', () => {
    expect(startingPosition(preload, '9203')).toBe(1);
    expect(startingPosition(preload, '09204')).toBe(2);
  });

  it('is 0 when the start supper meeting is not in the list', () => {
    expect(startingPosition(preload, '1')).toBe(0);
    expect(startingPosition(EMPTY_PRELOAD, '9202')).toBe(0);
  });
});

describe('supperMeetingCarouselOnInitialize', () => {
  it('assigns the list, one EntitiesCarousel_Item per id and the starting position', () => {
    expect(supperMeetingCarouselOnInitialize({ SupperMeetingIds: ['9202', '9203'] }, '9203')).toEqual({
      preload: { SupperMeetingIds: ['9202', '9203'] },
      items: [{ EntityId: '9202' }, { EntityId: '9203' }],
      position: 1,
    });
  });

  it('assigns nothing without a preload object', () => {
    expect(supperMeetingCarouselOnInitialize(null, '9202')).toEqual({ preload: EMPTY_PRELOAD, items: [], position: 0 });
  });

  it('toEntitiesCarouselItems keeps the order of the list', () => {
    expect(toEntitiesCarouselItems({ SupperMeetingIds: ['3', '1', '2'] })).toEqual([
      { EntityId: '3' },
      { EntityId: '1' },
      { EntityId: '2' },
    ]);
  });
});
