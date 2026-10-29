import type { RequestHandler } from 'msw';
import type { BookmarkCardItemWire } from '@/api/bookmark';
import { contractHandler } from '@/mocks/contract';
import { scenario } from '@/mocks/scenario';
import { osList, wireList } from '@/lib/os-wire';
import { Choice } from '@/lib/ubtConnect/staticEntities';

/* Mocks of Bookmarks (P-MOCKS). Both handlers are contractHandler (the operations came with the regeneration of the
   contract, I10-6); the cards add the TST fields that the contract's UI_Bookmark_CardItem does not have yet
   (BookmarkCardItemWire of api/bookmark/bookmarkCards.ts).
   - UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds: MOCK ASSUMPTION: the 9 pills that TST
     answered to the test account (capture of 2026-10-29, dom/default.html:169-250), whatever ids are sent. The 5th
     pill is masked in the capture (5 characters): "Feeds" (Feed Item) here.
   - Bookmarks/DataActionGetBookmarks: person data, never recorded. MOCK ASSUMPTION: the mock applies the
     Bookmarks_Filter fields: BookmarkCategoryId ('' = all), SearchText (case-insensitive "contains" on the title),
     Years (the bookmark's year; empty = all), SortByNewest (Choice.No = oldest first), PageNumber / PageSize.
     FICTIONAL: the cards below (no real household, member or school).
   Scenarios: real (the 8 fictional cards with one Feed card with a channel, the demo default), empty (no bookmarks), captured (the 3 cards of the TST
   capture; parity of state default, Bookmarks Q2 (a), user 2026-10-29). */

const PILLS: [string, string][] = [
  ['Households', 'Household'],
  ['OneSchool Global', 'OneSchool Global'],
  ['Assemble', 'Assemble Event'],
  ['Feeds', 'Feed Item'],
  ['Interchange', 'Interchange'],
  ['LDM', 'LDM Event'],
  ['Members', 'Member'],
  ['Orbit', 'Orbit Event'],
  ['Supper Meetings', 'Supper Meeting'],
];

interface FictionalBookmark {
  itemId: string;
  category: string;
  title: string;
  subtitle: string;
  initials: string;
  iconId: string;
  year: string;
  notes: string[];
  /** ChannelName, ChannelLogo and PublishedAt of the card (the channel row of ItemCard_WithNotes); none = "" and
      NullDate. */
  channel?: { name: string; logo: string; publishedAt: string };
}

/** FICTIONAL channel logo of the Feed card: an inline SVG badge (no real channel, no remote image). */
const WESTVALE_GAZETTE_LOGO = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><rect width="52" height="52" rx="10" fill="#1f5f7a"/>' +
    '<text x="26" y="33" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff" ' +
    'text-anchor="middle">WG</text></svg>',
)}`;

/** FICTIONAL bookmarks of the mock user, newest first (titles near the captured lengths, 20 and 23 characters). The
    Feed card has a channel (Bookmarks Q5 (a), user 2026-10-29). MOCK ASSUMPTION: the source header of a Feed Item card
    (label "Feed Item", the channel initial); no capture has one. */
const BOOKMARKS: FictionalBookmark[] = [
  {
    itemId: '88412',
    category: 'Feed Item',
    title: 'Harvest Fair at Westvale',
    subtitle: 'Photos from the weekend',
    initials: 'W',
    iconId: '',
    year: '2026',
    notes: [],
    channel: { name: 'Westvale Gazette', logo: WESTVALE_GAZETTE_LOGO, publishedAt: '2026-10-26T08:30:00' },
  },
  {
    itemId: '41021',
    category: 'Household',
    title: 'Marsh J & K Hartwell',
    subtitle: 'Northbrook Lane Locality',
    initials: 'M',
    iconId: '',
    year: '2026',
    notes: ['Call about the spring visit', 'Bring the photo album'],
  },
  {
    itemId: '41022',
    category: 'Household',
    title: 'Fenwick Household',
    subtitle: 'Ashgrove Fields Locality',
    initials: 'F',
    iconId: '',
    year: '2026',
    notes: [],
  },
  {
    itemId: '7310',
    category: 'OneSchool Global',
    title: 'Riverside Campus',
    subtitle: 'OneSchool Global Westvale',
    initials: '',
    iconId: 'SVG_OneSchoolGlobal',
    year: '2026',
    notes: [],
  },
  {
    itemId: '5204',
    category: 'Supper Meeting',
    title: 'Ashgrove Supper Meeting',
    subtitle: 'Thursday 19:30',
    initials: 'A',
    iconId: '',
    year: '2025',
    notes: ['Host list for March'],
  },
  {
    itemId: '90817',
    category: 'Member',
    title: 'Daniel R Whitcombe',
    subtitle: 'Northbrook Lane Locality',
    initials: 'DW',
    iconId: '',
    year: '2025',
    notes: [],
  },
  {
    itemId: '7311',
    category: 'OneSchool Global',
    title: 'Hillcrest Campus',
    subtitle: 'OneSchool Global Eastmoor',
    initials: '',
    iconId: 'SVG_OneSchoolGlobal',
    year: '2024',
    notes: [],
  },
  {
    itemId: '41057',
    category: 'Household',
    title: 'Pryce T & L Mallory',
    subtitle: 'Kestrel Bay Locality',
    initials: 'P',
    iconId: '',
    year: '2024',
    notes: [],
  },
];

/** Scenario captured (Bookmarks Q2 (a), user 2026-10-29): the 3 cards of the TST capture in their order
    (dom/default.html, cards b8-l1-112_0 to 112_2). FICTIONAL texts with the captured (masked) lengths: card 0 initials
    1, title 20 ("••••• • •••••• •••••"), subtitle 23 ("•••••••• •••••• •••••••"); card 1 initials 1, empty title and
    subtitle; card 2 OneSchool Global (SVG icon, empty title and subtitle) with item id 1430, the school that the TST
    carousel opened from this card. No notes (the total-notes text is empty). */
const CAPTURED: FictionalBookmark[] = [
  {
    itemId: '41063',
    category: 'Household',
    title: 'Hayes D Melton Grove',
    subtitle: 'Ashcombe Valley Meeting',
    initials: 'H',
    iconId: '',
    year: '2026',
    notes: [],
  },
  {
    itemId: '41064',
    category: 'Household',
    title: '',
    subtitle: '',
    initials: 'F',
    iconId: '',
    year: '2026',
    notes: [],
  },
  {
    itemId: '1430',
    category: 'OneSchool Global',
    title: '',
    subtitle: '',
    initials: '',
    iconId: 'SVG_OneSchoolGlobal',
    year: '2026',
    notes: [],
  },
];

const ROWS: Partial<Record<string, FictionalBookmark[]>> = { empty: [], captured: CAPTURED };

const card = (b: FictionalBookmark): BookmarkCardItemWire => ({
  /* The Id of the bookmark record: fictional, the item id (the screen does not read it). */
  Id: b.itemId,
  ItemId: b.itemId,
  BookmarkCategoryId: b.category,
  ChannelName: b.channel?.name ?? '',
  ChannelLogo: b.channel?.logo ?? '',
  EventStartDate: '1900-01-01T00:00:00',
  EventEndDate: '1900-01-01T00:00:00',
  PublishedAt: b.channel?.publishedAt ?? '1900-01-01T00:00:00',
  Bookmark_Card_Content: {
    Title: b.title,
    Subtitle: b.subtitle,
    SourceHeader: { IconId: b.iconId, ImageURL: '', Initials: b.initials, Label: b.category },
    Notes: {
      Total: b.notes.length,
      Note_Item_List: wireList(
        b.notes.map((note, i) => ({
          Id: `${b.itemId}${String(i + 1)}`,
          Note: note,
          DateCreatedUtc: `${b.year}-03-0${String(i + 1)}T09:00:00`,
          DateEditedUtc: '1900-01-01T00:00:00',
        })),
      ),
    },
  },
});

interface BookmarksInputs {
  Bookmarks_Filter?: { BookmarkCategoryId?: string; SearchText?: string; SortByNewest?: string; Years?: unknown };
  PageNumber?: number;
  PageSize?: number;
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_Bookmarks_MCS', 'ActionGet_BookmarkPills_ByBookmarkCategoryIds', () => ({
    Out_BookmarkPills: wireList(PILLS.map(([Text, Identifier]) => ({ Text, Identifier }))),
  })),
  contractHandler('UBTConnect', 'Bookmarks/DataActionGetBookmarks', (inputs) => {
    const { Bookmarks_Filter: f, PageNumber = 1, PageSize = 20 } = inputs as BookmarksInputs;
    const category = f?.BookmarkCategoryId ?? '';
    const term = (f?.SearchText ?? '').toLowerCase();
    const years = osList(f?.Years as { List?: string[] } | undefined);
    const rows = (ROWS[scenario()] ?? BOOKMARKS)
      .filter((b) => category === '' || b.category === category)
      .filter((b) => term === '' || b.title.toLowerCase().includes(term))
      .filter((b) => years.length === 0 || years.includes(b.year));
    const sorted = f?.SortByNewest === Choice.No ? [...rows].reverse() : rows;
    return {
      Out_Bookmarks: {
        Total: String(sorted.length),
        BookmarkCardItemList: wireList(sorted.slice((PageNumber - 1) * PageSize, PageNumber * PageSize).map(card)),
      },
    };
  }),
];
