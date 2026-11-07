import { describe, expect, it } from 'vitest';
import type { UpdateItem } from '@/api/update';
import { loadingItems, swipedItemsRead, withReadOverrides } from './feedUpdatesState';

const item = (updateItemId: string, isRead: boolean): UpdateItem => ({
  updateItemId,
  updateItemTypeId: 'Birth',
  householdId: '7100',
  memberId: '8100',
  name: 'Lena Moreau',
  date: '2026-10-02',
  genderId: 'F',
  locationString: 'Lyon',
  parentsNames: 'Paul and Claire Moreau',
  birthType: '',
  isRead,
  hasAccess: true,
  hasShare: true,
});

describe('FeedBlock_Updates state', () => {
  it('the loading rows are three read placeholder births of today, with the texts of the compiled code', () => {
    const rows = loadingItems();
    expect(rows).toHaveLength(3);
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    expect(rows[0]).toEqual(
      expect.objectContaining({
        updateItemId: '0',
        name: 'Loadin Name',
        locationString: 'Loadinf Location',
        date: today,
        isRead: true,
        hasAccess: true,
        hasShare: false,
      }),
    );
  });

  it('the items swiped in the carousel are read; other rows of the preload object are skipped', () => {
    expect(swipedItemsRead([{ EntityItemId: 501 }, { Other: 1 }, null, { EntityItemId: '502' }])).toEqual({
      '501': true,
      '502': true,
    });
    expect(swipedItemsRead(null)).toEqual({});
    expect(swipedItemsRead({ CarouselHouseholdItem: [] })).toEqual({});
  });

  it('the read state of the client wins over the read state of the server', () => {
    const items = [item('501', false), item('502', true), item('503', false)];
    expect(withReadOverrides(items, { '501': true, '502': false }).map((u) => u.isRead)).toEqual([true, false, false]);
  });
});
