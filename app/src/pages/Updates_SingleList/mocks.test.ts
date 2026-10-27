import { beforeEach, describe, expect, it } from 'vitest';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { freshPage } from '@/test/testSupport';
import { getUpdateItems, updateItems } from './mocks';

/* The mock of DataActionFetchUpdates applies Filter_Updates over the 88 fictional rows, as GetUpdateItems of
   Connect_Updates_CS does (BR-C2SVC-323…332). */
type Rows = Parameters<typeof getUpdateItems>[0];
type Filter = Parameters<typeof getUpdateItems>[1];

const NO_FILTER: Filter = {
  Filter_Date: { Date_From: '1900-01-01', Date_To: '1900-01-01' },
  Filter_SearchText: '',
  Filter_UpdateTypeId: '',
  CountryIds: { List: [Choice.None] },
  LocalitiesIds: { List: [Choice.None] },
  Filter_ReadOnly: Choice.None,
  Sort_ByNewest: Choice.Yes,
};
const rows = () => updateItems.all() as unknown as Rows;
const ids = (list: Rows) => list.map((r) => r.UpdateItemId);

beforeEach(() => {
  freshPage();
});

describe('Updates_SingleList mock: GetUpdateItems', () => {
  it('without a filter: every row, newest first, in the order of the fixture', () => {
    expect(ids(getUpdateItems(rows(), NO_FILTER))).toEqual(ids(rows()));
    expect(rows()).toHaveLength(88);
  });

  it('the update type of the chips (BR-C2SVC-326)', () => {
    const list = getUpdateItems(rows(), { ...NO_FILTER, Filter_UpdateTypeId: 'Marriage' });
    expect(list.length).toBeGreaterThan(0);
    expect(list.every((r) => r.UpdateItemTypeId === 'Marriage')).toBe(true);
    expect(list).toEqual(rows().filter((r) => r.UpdateItemTypeId === 'Marriage'));
  });

  it('the status: None all, No unread, Yes read, another value no row (BR-C2SVC-327)', () => {
    expect(getUpdateItems(rows(), { ...NO_FILTER, Filter_ReadOnly: '' })).toHaveLength(88);
    expect(getUpdateItems(rows(), { ...NO_FILTER, Filter_ReadOnly: Choice.No })).toHaveLength(84);
    const read = getUpdateItems(rows(), { ...NO_FILTER, Filter_ReadOnly: Choice.Yes });
    expect(read).toHaveLength(4);
    expect(read.every((r) => r.IsRead)).toBe(true);
    expect(getUpdateItems(rows(), { ...NO_FILTER, Filter_ReadOnly: 'Choice.Other' })).toEqual([]);
  });

  it('the search words: "&" is a space, no case, every word in the title (BR-C2SVC-325, 332)', () => {
    const list = getUpdateItems(rows(), { ...NO_FILTER, Filter_SearchText: '  hargreaves & JAMES ' });
    expect(list.map((r) => r.Name)).toEqual(['James Hargreaves']);
    // The fourth word is overwritten by the fifth: "Nowhere" is not searched
    const five = getUpdateItems(rows(), { ...NO_FILTER, Filter_SearchText: 'James Hargreaves James Nowhere James' });
    expect(five.map((r) => r.Name)).toEqual(['James Hargreaves']);
    expect(getUpdateItems(rows(), { ...NO_FILTER, Filter_SearchText: 'Nowhere' })).toEqual([]);
  });

  it('the dates, inclusive; a null date is no bound (BR-C2SVC-323)', () => {
    const day = rows()[0]?.Date ?? '';
    const list = getUpdateItems(rows(), { ...NO_FILTER, Filter_Date: { Date_From: day, Date_To: day } });
    expect(list.length).toBeGreaterThan(0);
    expect(list).toEqual(rows().filter((r) => r.Date === day));
    const older = getUpdateItems(rows(), { ...NO_FILTER, Filter_Date: { Date_From: '1900-01-01', Date_To: day } });
    expect(older).toHaveLength(88);
  });

  it('Sort_ByNewest No: oldest first; the rows of one date keep the order of the fixture (BR-C2SVC-329)', () => {
    const list = getUpdateItems(rows(), { ...NO_FILTER, Sort_ByNewest: Choice.No });
    const dates = list.map((r) => r.Date);
    expect(dates).toEqual([...dates].sort());
    const last = rows()[0]?.Date;
    expect(ids(list.filter((r) => r.Date === last))).toEqual(ids(rows().filter((r) => r.Date === last)));
  });
});

describe('Updates_SingleList mock: DataActionFetchUpdates', () => {
  it('answers the filtered rows and their unread count (BR-C2SVC-331); a filter without rows answers an empty list', async () => {
    const call = async (filter: Filter) => {
      const response = await fetch('/api/UBTConnect/Updates_SingleList/DataActionFetchUpdates', {
        method: 'POST',
        body: JSON.stringify({ Filter_Updates: filter }),
      });
      return ((await response.json()) as { data: { UI_UpdateItemList: { List: Rows }; UnreadCount: number } }).data;
    };
    const read = await call({ ...NO_FILTER, Filter_ReadOnly: Choice.Yes });
    expect(read.UI_UpdateItemList.List).toHaveLength(4);
    expect(read.UnreadCount).toBe(0);
    const unread = await call({ ...NO_FILTER, Filter_UpdateTypeId: 'Birth', Filter_ReadOnly: Choice.No });
    expect(unread.UnreadCount).toBe(unread.UI_UpdateItemList.List.length);
    const none = await call({ ...NO_FILTER, Filter_SearchText: 'Nowhere' });
    expect(none).toEqual({ UI_UpdateItemList: expect.objectContaining({ List: [] }) as unknown, UnreadCount: 0 });
  });
});
