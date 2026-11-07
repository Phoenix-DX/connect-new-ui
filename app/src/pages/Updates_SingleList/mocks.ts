import type { RequestHandler } from 'msw';
import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { collection, statefulHandler } from '@/mocks/store';
import { wireList } from '@/lib/os-wire';
import { Choice } from '@/lib/ubtConnect/staticEntities';

/** Connect_Updates_CS.UI_UpdateItem as the server sends it (Long Integers as text, Date "yyyy-MM-dd"). */
type UpdateItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'Updates_SingleList/DataActionFetchUpdates'>
>['UI_UpdateItemList']['List'][number];
/** Connect_Updates_CS.Filter_Updates as the screen sends it (Date "yyyy-MM-dd", the null date 1900-01-01). */
type FilterUpdatesWire = NonNullable<
  ActionInputs<PathOf<'UBTConnect', 'Updates_SingleList/DataActionFetchUpdates'>>['Filter_Updates']
>;

/* DataActionGetDateRanges: the recorded fixture (UBTConnect/DataActionGetDateRanges/02-0400bafb.json, re-recorded
   read-only with the static-entity ids kept: Today, Last 7 Days, Last 30 Days, Older). The answer does not depend on
   the inputs and the recorded CurrentBreakpoint.SectionName is anonymised, so matchInputs is off.
   DataActionFetchUpdates: person data, never recorded (mock-fixtures.md): 88 fictional updates in the order of the TST
   capture of 2026-11-07 (sync wave, dom/default.html): the captured types (Birth / Marriage / Taken), read state (all
   unread), day (days before the capture day 2026-11-07, from data-plus-date, so the date groups "Last 7 Days" 28 rows
   and "Last 30 Days" 60 rows stay as captured on any day) and the gender of each row (the Birth tag is pink for a girl,
   blue for a boy). Texts are meaningful fictional values with the captured word lengths (mock-fixtures.md "Fictional
   text must be meaningful", user 2026-10-16): Birth = child, "City, Country" + ParentsNames "Father & Mother Surname"
   (the item shows "<place> - <parents>"), Marriage = "Groom & Bride Surname", Taken = the person; real place names
   (mock-fixtures.md, Q3 a, user 2026-10-14). HasAccess / HasShare True as HomeFeed's mock. The answer applies
   Filter_Updates as GetUpdateItems of Connect_Updates_CS does (getUpdateItems below), and UnreadCount counts the
   unread rows of the filtered list (BR-C2SVC-331).
   ServiceAPIAction_UI_UpdateItem_MarkAllAsRead: a write, never recorded: marks every update of this collection read
   (P-MUTATION). MarkAsRead / MarkAsUnread are answered by HomeFeed's handlers (shared contract paths), which change the
   HomeFeed collection only: CR-Updates_SingleList-1. */

/* [days before the capture day, type, birth type, read, gender (the Birth tag colour), name, place, parents] */
const ROWS: [number, string, string, boolean, 'F' | 'M', string, string, string][] = [
  [3, 'Birth', '', false, 'F', 'Emily Pearce', 'Kingaroy, Australia', 'Matthew & Clara Pearce'],
  [3, 'Birth', '', false, 'M', 'Andrew Chapman', 'Casino, Australia', 'Benjamin & Abigail Chapman'],
  [3, 'Birth', '', false, 'M', 'Jonathan Graham', 'Bundaberg, Australia', 'Joshua & Chloe Graham'],
  [3, 'Birth', '', false, 'F', 'Hannah Prentice', 'Regina, Canada', 'Nathan & Sophie Prentice'],
  [3, 'Birth', '', false, 'F', 'Louisa Garrett', 'Dunedin, New Zealand', 'Peter & Caroline Garrett'],
  [3, 'Birth', '', false, 'F', 'Bianca Barton', 'Gladstone, Australia', 'James & Laura Barton'],
  [3, 'Birth', '', false, 'F', 'Sarah Harding', 'Wollongong, Australia', 'Nathaniel & Sienna Harding'],
  [3, 'Birth', '', false, 'F', 'Rebecca Archer', 'Bendigo, Australia', 'Gideon & Esther Archer'],
  [3, 'Birth', '', false, 'M', 'Joseph Hargreaves', 'Brisbane, Australia', 'Simon & Isobel Hargreaves'],
  [3, 'Birth', '', false, 'M', 'Aaron Fairweather', 'Saint-Eustache, Canada', 'Daniel & Evelyn Fairweather'],
  [3, 'Birth', '', false, 'M', 'Patrick Gilbert', 'Asheville, United States', 'Jacob & Joanna Gilbert'],
  [4, 'Marriage', '', false, 'M', 'Anthony & Ruth Butler', 'Bangor, United Kingdom', ''],
  [4, 'Marriage', '', false, 'M', 'Michael & Allison Fox', 'Carlisle, United Kingdom', ''],
  [4, 'Marriage', '', false, 'M', 'Ethan & Danielle Maxwell', 'Salisbury, United Kingdom', ''],
  [4, 'Marriage', '', false, 'M', 'Paul & Kirsten Preston', 'Gloucester, United Kingdom', ''],
  [4, 'Marriage', '', false, 'M', 'Timothy & Eloise Morgan', 'Whanganui, New Zealand', ''],
  [4, 'Birth', '', false, 'F', 'Isabella Grant', 'Tralee, Ireland', 'Mark & Amelia Grant'],
  [4, 'Marriage', '', false, 'M', 'Oscar & Ellie Foley', 'Aberdeen, United Kingdom', ''],
  [4, 'Marriage', '', false, 'M', 'Lewis & Beverly Blackwood', 'Gisborne, New Zealand', ''],
  [4, 'Marriage', '', false, 'M', 'Harry & Victoria Kerr', 'Bulawayo, Zimbabwe', ''],
  [4, 'Birth', '', false, 'F', 'Molly Blackmore', 'Saint-Eustache, Canada', 'Stephen & Natalie Blackmore'],
  [5, 'Taken', '', false, 'M', 'Samuel Bennett', 'Masterton, New Zealand', ''],
  [5, 'Birth', '', false, 'M', 'Joseph Lockhart', 'Rotorua, New Zealand', 'Thomas & Daisy Lockhart'],
  [6, 'Birth', '', false, 'F', 'Charlotte Holland', 'Geelong, Australia', 'Martin & Alison Holland'],
  [6, 'Birth', '', false, 'M', 'Henry Patterson', 'Mackay, Australia', 'Shane & Penelope Patterson'],
  [6, 'Taken', '', false, 'M', 'Sebastian Lancaster', 'Hamilton, New Zealand', ''],
  [6, 'Birth', '', false, 'F', 'Lucinda Noble', 'Tauranga, New Zealand', 'Philip & Lucy Noble'],
  [6, 'Birth', '', false, 'M', 'Spencer Chambers', 'Northampton, United Kingdom', 'Robert & Matilda Chambers'],
  [8, 'Birth', '', false, 'F', 'Harriet Collins', 'Adelaide, Australia', 'Lachlan & Clarissa Collins'],
  [8, 'Birth', '', false, 'M', 'Keith Fraser', 'Moree, Australia', 'Graham & Melanie Fraser'],
  [8, 'Birth', '', false, 'F', 'Freya Pemberton', 'Ballina, Australia', 'Bruce & Rosalind Pemberton'],
  [8, 'Birth', '', false, 'F', 'Andrea Watson', 'Busselton, Australia', 'Brian & Beatrice Watson'],
  [8, 'Birth', '', false, 'F', 'Theresa Russell', 'Queenstown, New Zealand', 'Barry & Annette Russell'],
  [8, 'Birth', '', false, 'M', 'Gordon Fuller', 'Knoxville, United States', 'Stuart & Elizabeth Fuller'],
  [9, 'Birth', '', false, 'M', 'Clive Robinson', 'Cairns, Australia', 'Derek & Jessica Robinson'],
  [9, 'Birth', '', false, 'F', 'Norah Fleming', 'Mildura, Australia', 'Rupert & Holly Fleming'],
  [9, 'Birth', '', false, 'M', 'Harvey Steele', 'Ottawa, Canada', 'Neil & Felicity Steele'],
  [10, 'Birth', '', false, 'M', 'Alexander Radcliffe', 'Wangaratta, Australia', 'Adam & Megan Radcliffe'],
  [10, 'Birth', '', false, 'F', 'Georgina Marshall', 'Toowoomba, Australia', 'Nicholas & Alice Marshall'],
  [10, 'Taken', '', false, 'M', 'Grant Wilkes', 'Masvingo, Zimbabwe', ''],
  [10, 'Birth', '', false, 'F', 'Bethany Fisher', 'Indianapolis, United States', 'Callum & Henrietta Fisher'],
  [10, 'Taken', '', false, 'M', 'Joel Reid', 'Ajax, Canada', ''],
  [11, 'Marriage', '', false, 'M', 'Declan & Brenda Ellis', 'Newcastle, Australia', ''],
  [11, 'Marriage', '', false, 'M', 'Jeremy & Jacqueline Worthington', 'Bathurst, Australia', ''],
  [11, 'Marriage', '', false, 'M', 'Joshua & Emily Caldwell', 'Bunbury, Australia', ''],
  [11, 'Marriage', '', false, 'M', 'Jason & Rosalie Quinn', 'Hobart, Australia', ''],
  [11, 'Taken', '', false, 'M', 'Howard Gardner', 'Nelson, New Zealand', ''],
  [11, 'Marriage', '', false, 'M', 'Dennis & Vanessa Holloway', 'Christchurch, New Zealand', ''],
  [11, 'Marriage', '', false, 'M', 'Russell & Deborah Ford', 'Taihape, New Zealand', ''],
  [11, 'Marriage', '', false, 'M', 'Ian & Anna Hill', 'Ryde, United Kingdom', ''],
  [11, 'Birth', '', false, 'F', 'Eleanor Cole', 'Oxford, United Kingdom', 'Kenneth & Frances Cole'],
  [11, 'Birth', '', false, 'F', 'Lily Carter', 'Bude, United Kingdom', 'Jesse & Denise Carter'],
  [12, 'Birth', '', false, 'M', 'Edward Wolfe', 'Albany, Australia', 'Guy & Jade Wolfe'],
  [12, 'Birth', '', false, 'M', 'Oliver Gallagher', 'Bedford, United Kingdom', 'Seth & Rose Gallagher'],
  [12, 'Birth', '', false, 'M', 'Logan Byrne', 'Ashburton, New Zealand', 'Geoffrey & Gloria Byrne'],
  [12, 'Birth', '', false, 'M', 'Elliot Wheeler', 'Invercargill, New Zealand', 'Reuben & Georgia Wheeler'],
  [13, 'Birth', '', false, 'M', 'Hugo Featherston', 'Hope, Canada', 'Kurt & Gillian Featherston'],
  [13, 'Birth', '', false, 'M', 'Alastair Hopkins', 'Norwich, United Kingdom', 'Carl & Antoinette Hopkins'],
  [13, 'Taken', '', false, 'M', 'Douglas Rowley', 'Ajax, Canada', ''],
  [14, 'Birth', '', false, 'F', 'Hazel Kendall', 'Bradford, United Kingdom', 'Lucas & Erin Kendall'],
  [14, 'Birth', '', false, 'F', 'Lillian Campbell', 'Southampton, United Kingdom', 'Miles & Helen Campbell'],
  [15, 'Birth', '', false, 'F', 'Amy Payne', 'Orange, Australia', 'Raymond & Jennifer Payne'],
  [15, 'Birth', '', false, 'F', 'Hayley Whitman', 'Chinhoyi, Zimbabwe', 'Dean & Diana Whitman'],
  [15, 'Birth', '', false, 'M', 'Gareth Turner', 'Mudgee, Australia', 'Nigel & Gwendolyn Turner'],
  [15, 'Birth', '', false, 'F', 'Cora Walker', 'Cambridge, United Kingdom', 'Glen & Marilyn Walker'],
  [15, 'Taken', '', false, 'M', 'Lawrence Harris', 'Durham, United Kingdom', ''],
  [15, 'Birth', '', false, 'M', 'Jeffrey Burke', 'Ipswich, United Kingdom', 'Max & Miranda Burke'],
  [15, 'Birth', '', false, 'M', 'Owen Haywood', 'Hove, United Kingdom', 'Malcolm & Leanne Haywood'],
  [16, 'Birth', '', false, 'M', 'Theodore Whitley', 'Melbourne, Australia', 'Kyle & Paige Whitley'],
  [16, 'Birth', '', false, 'M', 'Warren Ross', 'Nashville, United States', 'Damien & Kelly Ross'],
  [16, 'Birth', '', false, 'F', 'Lauren Templeton', 'Ballarat, Australia', 'Richard & Natasha Templeton'],
  [16, 'Birth', '', false, 'M', 'Bernard Banks', 'Tamworth, Australia', 'Felix & Monica Banks'],
  [16, 'Birth', '', false, 'M', 'Duncan Parker', 'Tulsa, United States', 'Clement & Rachel Parker'],
  [17, 'Birth', '', false, 'M', 'Jack Elliott', 'Lismore, Australia', 'John & Sharon Elliott'],
  [17, 'Birth', '', false, 'F', 'Teresa Hammond', 'Whakatane, New Zealand', 'Matthias & Eve Hammond'],
  [18, 'Birth', '', false, 'M', 'Fraser Mason', 'Murwillumbah, Australia', 'George & Susanna Mason'],
  [18, 'Birth', '', false, 'F', 'Ella Hughes', 'St Helens, Australia', 'Caleb & Tabitha Hughes'],
  [18, 'Marriage', '', false, 'M', 'Isaac & Bella Cooper', 'Geraldton, Australia', ''],
  [18, 'Marriage', '', false, 'M', 'Hamish & Tamsin Lamb', 'Goulburn, Australia', ''],
  [18, 'Marriage', '', false, 'M', 'Tom & Bethan Hale', 'Wick, United Kingdom', ''],
  [18, 'Birth', '', false, 'F', 'Grace Ashworth', 'Wellington, New Zealand', 'Jarrod & Kathleen Ashworth'],
  [18, 'Marriage', '', false, 'M', 'Desmond & Carmen Ward', 'Opua, New Zealand', ''],
  [18, 'Marriage', '', false, 'M', 'Luke & Julia Barrett', 'Moncton, Canada', ''],
  [18, 'Birth', '', false, 'F', 'Davina Whitfield', 'Horsham, Australia', 'Ross & Imogen Whitfield'],
  [19, 'Birth', '', false, 'M', 'Francis Cross', 'Reading, United Kingdom', 'Jonah & Jemima Cross'],
  [19, 'Birth', '', false, 'F', 'Emma Bradley', 'Townsville, Australia', 'Angus & Judith Bradley'],
  [21, 'Birth', '', false, 'F', 'Karen Lee', 'Launceston, Australia', 'Gabriel & Heather Lee'],
  [22, 'Birth', '', false, 'M', 'Colin Baker', 'Hastings, New Zealand', 'Ben & Kirsty Baker'],
];

const BASE_ID = 980100;

function dateOf(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const seed = (): UpdateItemWire[] =>
  ROWS.map(([daysAgo, type, birthType, read, gender, name, place, parents], i) => ({
    UpdateItemId: String(BASE_ID - i),
    UpdateItemTypeId: type,
    HouseholdId: String(880100 - i),
    MemberId: String(770100 - i),
    Name: name,
    Date: dateOf(daysAgo),
    GenderId: gender === 'F' ? 'Gender.FEMALE' : 'Gender.MALE',
    LocationString: place,
    ParentsNames: parents,
    BirthType: birthType,
    IsRead: read,
    HasAccess: true,
    HasShare: true,
  }));

const NULL_DATE = '1900-01-01';
const isNullDate = (date: string) => date === '' || date === NULL_DATE;
/** The default Filter_Updates record, for a call without the input: no filter. */
const NO_FILTER: FilterUpdatesWire = {
  Filter_Date: { Date_From: NULL_DATE, Date_To: NULL_DATE },
  Filter_SearchText: '',
  Filter_UpdateTypeId: '',
  CountryIds: wireList([]),
  LocalitiesIds: wireList([]),
  Filter_ReadOnly: '',
  Sort_ByNewest: '',
};

/** PrepareSearchWords (BR-C2SVC-332): "&" becomes a space, Trim, split on spaces; the words fill Text1, Text2 and
    Text3 in order, and each later word overwrites Text4. */
function prepareSearchWords(searchText: string): string[] {
  const words = ['', '', '', ''];
  for (const token of searchText.replaceAll('&', ' ').trim().split(' ')) {
    if (words[0] === '') words[0] = token;
    else if (words[1] === '') words[1] = token;
    else if (words[2] === '') words[2] = token;
    else words[3] = token;
  }
  return words;
}

/** The filters of GetUpdateItems (Connect_Updates_CS UpdatesItems_GetList) that the fixture rows can take:
    - Date from and to, inclusive; a null date is no bound (BR-C2SVC-323).
    - Every non-empty search word is in the title (BR-C2SVC-325). The mock compares with Name, the title of the row
      (the entity field DisplayTitle is not in UI_UpdateItem), without case (LIKE of the database).
    - The update type, when not null (BR-C2SVC-326).
    - Filter_ReadOnly: null or None all, No unread, Yes read, another value no row (BR-C2SVC-327).
    The subscription, region, hidden, country and locality filters (BR-C2SVC-320, 321, 322, 328) need fields that the
    fixture rows do not have. */
function matchesFilter(row: UpdateItemWire, f: FilterUpdatesWire, words: string[]): boolean {
  if (!isNullDate(f.Filter_Date.Date_From) && row.Date < f.Filter_Date.Date_From) return false;
  if (!isNullDate(f.Filter_Date.Date_To) && row.Date > f.Filter_Date.Date_To) return false;
  const title = row.Name.toLowerCase();
  if (words.some((w) => w !== '' && !title.includes(w.toLowerCase()))) return false;
  if (f.Filter_UpdateTypeId !== '' && row.UpdateItemTypeId !== f.Filter_UpdateTypeId) return false;
  if (f.Filter_ReadOnly === '' || f.Filter_ReadOnly === Choice.None) return true;
  if (f.Filter_ReadOnly === Choice.No) return !row.IsRead;
  if (f.Filter_ReadOnly === Choice.Yes) return row.IsRead;
  return false;
}

/** GetUpdateItems: the rows of the filter, by Date descending, or ascending when Sort_ByNewest = Choice.No
    (BR-C2SVC-329). The direction of the second sort, UpdateItem.Id, is not captured: rows of one date keep the order
    of the fixture. */
export function getUpdateItems(rows: UpdateItemWire[], f: FilterUpdatesWire): UpdateItemWire[] {
  const words = prepareSearchWords(f.Filter_SearchText);
  const ascending = f.Sort_ByNewest === Choice.No;
  return rows
    .filter((row) => matchesFilter(row, f, words))
    .sort((a, b) => (ascending ? a.Date.localeCompare(b.Date) : b.Date.localeCompare(a.Date)));
}

export const updateItems = collection('Updates_SingleList.updateItems', () => seed(), 'UpdateItemId');

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'Updates_SingleList/DataActionGetDateRanges', { matchInputs: false }),
  contractHandler('UBTConnect', 'Updates_SingleList/DataActionFetchUpdates', ({ Filter_Updates }) => {
    const list = getUpdateItems(updateItems.all() as unknown as UpdateItemWire[], Filter_Updates ?? NO_FILTER);
    return { UI_UpdateItemList: wireList(list), UnreadCount: list.filter((u) => !u.IsRead).length };
  }),
  statefulHandler('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAllAsRead', () => {
    for (const row of updateItems.all()) updateItems.upsert({ ...row, IsRead: true });
    return {};
  }),
];
