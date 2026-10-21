import { describe, expect, it } from 'vitest';
import { getClientVar, setClientVar } from '../../../shell/session';
import {
  EMPTY_PRELOAD,
  appendSwippedItem,
  assignFromObject,
  clearSwipeAction,
  directory_Updates_CarouselSwipeAction,
  startingPosition,
  toEntitiesCarouselItems,
} from './logic';

const preload = assignFromObject({
  CarouselHouseholdItem: [
    { Household: '11', SwipeAction: { ActionId: '', Parameters: '' } },
    { Household: '12', SwipeAction: { ActionId: 'UpdatesCarousel_SetIsRead', Parameters: '{"UpdateItemId":501}' } },
  ],
});

describe('HouseholdCarousel OnInitialize', () => {
  it('copies the preload, or keeps the empty list without one (AssignFromObject)', () => {
    expect(preload.CarouselHouseholdItem).toHaveLength(2);
    expect(assignFromObject(null)).toBe(EMPTY_PRELOAD);
    expect(assignFromObject([{ EntityItemId: '1', ListPosition: 0 }])).toBe(EMPTY_PRELOAD);
  });

  it('maps households to carousel items and finds the starting position (default 0)', () => {
    expect(toEntitiesCarouselItems(preload)).toEqual([{ EntityId: '11' }, { EntityId: '12' }]);
    expect(startingPosition(preload, '12')).toBe(1);
    expect(startingPosition(preload, '99')).toBe(0);
  });
});

describe('HouseholdCarousel Handler_EventMoved', () => {
  it('runs the swipe action: mark as read, unread count - 1, Out_ItemId', async () => {
    setClientVar('UBTConnect.Directory_Updates_UnreadCount', 3);
    const marked: string[] = [];
    const id = await directory_Updates_CarouselSwipeAction('{"UpdateItemId":501}', (itemId) => {
      marked.push(itemId);
      return Promise.resolve();
    });
    expect(id).toBe('501');
    expect(marked).toEqual(['501']);
    expect(getClientVar('UBTConnect.Directory_Updates_UnreadCount')).toBe(2);
  });

  it('clears the swipe action and appends a swiped item once', () => {
    expect(clearSwipeAction(preload, 1).CarouselHouseholdItem[1]?.SwipeAction?.ActionId).toBe('');
    const once = appendSwippedItem([], '501', 1);
    expect(once).toEqual([{ EntityItemId: '501', ListPosition: 1 }]);
    expect(appendSwippedItem(once, '501', 1)).toBe(once);
  });
});
