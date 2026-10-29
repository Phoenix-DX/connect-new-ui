import { describe, expect, it } from 'vitest';
import { toBookmarkCardItem, type BookmarkCardItemWire } from './bookmarkCards';

/* UI_Bookmark_CardItem (capture calls.md): the channel fields are on the card item, not in Bookmark_Card_Content;
   Bookmarks_Card_Item passes them to ItemCard_WithNotes (Bookmarks_Card_Item.mvc.js:159, :187, :193). */
const wire: BookmarkCardItemWire = {
  Id: '7101',
  ItemId: '88412',
  BookmarkCategoryId: 'Feed Item',
  ChannelName: 'Westvale Gazette',
  ChannelLogo: '/img/westvale-gazette.svg',
  EventStartDate: '1900-01-01T00:00:00',
  EventEndDate: '1900-01-01T00:00:00',
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
});
