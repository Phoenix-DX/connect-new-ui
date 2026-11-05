import { describe, expect, it } from 'vitest';
import { toBookmarkCardItem, type BookmarkCardItemWire } from './bookmarkCards';

/* UI_Bookmark_CardItem (live Connect_Bookmarks_CS.model.js of 2026-11-05): ItemId Text, ItemId2, HasDetailAccess and
   the channel fields are on the card item, not in Bookmark_Card_Content; Bookmarks_Card_Item passes the channel to
   ItemCard_WithNotes and the ids and HasDetailAccess to OnClickCardItem (live Bookmarks_Card_List.mvc.js:402-409). */
const wire: BookmarkCardItemWire = {
  Id: '7101',
  ItemId: '88412',
  ItemId2: '',
  HasDetailAccess: true,
  BookmarkCategoryId: 'Feed Item',
  ChannelName: 'Westvale Gazette',
  ChannelLogo: '/img/westvale-gazette.svg',
  PublishedAt: '2026-10-26T08:30:00',
  Bookmark_Card_Content: {
    Title: 'Harvest Fair at Westvale',
    Subtitle: 'Photos from the weekend',
    SourceHeader: { IconId: '', ImageURL: '', Initials: 'W', Label: 'Feed Item' },
    Notes: { Total: 0, Note_Item_List: { List: [] } },
  },
};

describe('toBookmarkCardItem', () => {
  it('maps the channel name, the channel logo and PublishedAt of the card item', () => {
    expect(toBookmarkCardItem(wire)).toEqual({
      itemId: '88412',
      itemId2: '',
      hasDetailAccess: true,
      bookmarkCategoryId: 'Feed Item',
      channelName: 'Westvale Gazette',
      channelLogo: '/img/westvale-gazette.svg',
      publishedAt: '2026-10-26T08:30:00',
      title: 'Harvest Fair at Westvale',
      subtitle: 'Photos from the weekend',
      sourceHeader: { iconId: '', imageURL: '', initials: 'W', label: 'Feed Item' },
      notes: { Total: 0, Note_Item_List: [] },
    });
  });

  it('maps ItemId2 and HasDetailAccess of a Member card without detail access', () => {
    const item = toBookmarkCardItem({ ...wire, ItemId: '90817', ItemId2: '42438', HasDetailAccess: false });
    expect(item).toMatchObject({ itemId: '90817', itemId2: '42438', hasDetailAccess: false });
  });
});
