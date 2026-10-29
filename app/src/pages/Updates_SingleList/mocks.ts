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
   capture of 2026-10-29 (drift wave, directory row 5, dom/default.html): the captured types (Birth / Marriage / Taken),
   read state (3 read), day (days before the capture day 2026-10-29, so the date groups "Last 7 Days" 31 rows and
   "Last 30 Days" 57 rows stay as captured on any day) and the gender of each row (the Birth tag is pink for a girl, blue
   for a boy). Texts are meaningful fictional values with the captured word lengths (mock-fixtures.md "Fictional text
   must be meaningful", user 2026-10-16): Birth = child, "City, Country" + ParentsNames "Father & Mother Surname" (the
   item shows "<place> - <parents>"), Marriage = "Groom & Bride Surname", Taken = the person; real place names
   (mock-fixtures.md, Q3 a, user 2026-10-14). The 27 rows that TST still shows from the capture of 2026-10-14 keep their
   earlier fictional texts. HasAccess / HasShare True as HomeFeed's mock. The answer applies
   Filter_Updates as GetUpdateItems of Connect_Updates_CS does (getUpdateItems below), and UnreadCount counts the
   unread rows of the filtered list (BR-C2SVC-331).
   ServiceAPIAction_UI_UpdateItem_MarkAllAsRead: a write, never recorded: marks every update of this collection read
   (P-MUTATION). MarkAsRead / MarkAsUnread are answered by HomeFeed's handlers (shared contract paths), which change the
   HomeFeed collection only: CR-Updates_SingleList-1. */

/* [days before the capture day, type, birth type, read, gender (the Birth tag colour), name, place, parents] */
const ROWS: [number, string, string, boolean, 'F' | 'M', string, string, string][] = [
  [1, 'Birth', '', false, 'F', 'Penelope Ashworth', 'Toowoomba, Australia', 'Jonathan & Clara Ashworth'],
  [1, 'Taken', '', false, 'M', 'Peter Graham', 'Bulawayo, Zimbabwe', ''],
  [2, 'Marriage', '', false, 'M', 'Joshua & Emily Caldwell', 'Warwick, Australia', ''],
  [2, 'Marriage', '', false, 'M', 'Aaron & Rebecca Foley', 'Mackay, Australia', ''],
  [2, 'Marriage', '', false, 'M', 'Nathan & Louisa Grant', 'Busselton, Australia', ''],
  [2, 'Marriage', '', false, 'M', 'Gideon & Jacqueline Worthington', 'Bathurst, Australia', ''],
  [2, 'Birth', '', false, 'F', 'Abigail Rowe', 'Bangor, United Kingdom', 'Stewart & Theresa Rowe'],
  [2, 'Birth', '', false, 'F', 'Ruth Pearce', 'Hove, United Kingdom', 'Simon & Esther Pearce'],
  [2, 'Marriage', '', false, 'M', 'Tom & Anna Kerr', 'Ryde, United Kingdom', ''],
  [2, 'Marriage', '', false, 'M', 'Patrick & Bridget Reid', 'Dunedin, New Zealand', ''],
  [3, 'Birth', '', false, 'M', 'Elliot Noble', 'Albany, Australia', 'Ian & Mary Noble'],
  [3, 'Birth', '', false, 'M', 'Harold Blackwood', 'Watford, United Kingdom', 'Neil & Rose Blackwood'],
  [3, 'Birth', '', false, 'M', 'Jasper Kendall', 'Christchurch, New Zealand', 'Gareth & Annette Kendall'],
  [3, 'Birth', '', false, 'M', 'Henry Ellis', 'Ashburton, New Zealand', 'Nicholas & Hannah Ellis'],
  [4, 'Birth', '', false, 'M', 'Noah Fairweather', 'Hope, Canada', 'Paul & Allison Fairweather'],
  [4, 'Birth', '', false, 'M', 'Theodore Ramsden', 'Norwich, United Kingdom', 'Mark & Antoinette Ramsden'],
  [4, 'Taken', '', false, 'M', 'Raymond Fuller', 'Ajax, Canada', ''],
  [5, 'Birth', '', false, 'F', 'Ellie Chapman', 'Carlisle, United Kingdom', 'Peter & Jane Chapman'],
  [5, 'Birth', '', false, 'F', 'Vanessa Prentice', 'Northampton, United Kingdom', 'Lewis & Diana Prentice'],
  [6, 'Birth', '', false, 'F', 'Amy Quinn', 'Bowral, Australia', 'Douglas & Caroline Quinn'],
  [6, 'Birth', '', false, 'F', 'Sophie Garrett', 'Masvingo, Zimbabwe', 'Owen & Helen Garrett'],
  [6, 'Birth', '', false, 'M', 'Oliver Barton', 'Ararat, Australia', 'Jacob & Charlotte Barton'],
  [6, 'Birth', '', false, 'M', 'Gabriel Wolfe', 'Bedford, United Kingdom', 'Tim & Beverly Wolfe'],
  [6, 'Birth', '', false, 'F', 'Lily Archer', 'Lancaster, United Kingdom', 'Adam & Kirsten Archer'],
  [6, 'Taken', '', false, 'M', 'Geoffrey Butler', 'Romsey, United Kingdom', ''],
  [6, 'Birth', '', false, 'M', 'Joel Harding', 'Bude, United Kingdom', 'Stephen & Joanne Harding'],
  [7, 'Birth', '', false, 'M', 'Benedict Langley', 'Katherine, Australia', 'Glen & Naomi Langley'],
  [7, 'Birth', '', false, 'M', 'Samuel Ford', 'Asheville, United States', 'Arthur & Karen Ford'],
  [7, 'Birth', '', false, 'F', 'Hannah Patterson', 'Kingaroy, Australia', 'Russell & Natalie Patterson'],
  [7, 'Birth', '', false, 'M', 'Lachlan Byrne', 'Ballarat, Australia', 'Shane & Monica Byrne'],
  [7, 'Birth', '', false, 'M', 'Wesley Morgan', 'Tulsa, United States', 'Kenneth & Sharon Morgan'],
  [8, 'Birth', '', false, 'M', 'Seth Gilbert', 'Bunbury, Australia', 'Dean & Lauren Gilbert'],
  [8, 'Birth', '', false, 'F', 'Isobel Maxwell', 'Whakatane, New Zealand', 'Matthias & Eve Maxwell'],
  [9, 'Birth', '', false, 'M', 'Reuben Dixon', 'Shellharbour, Australia', 'Warren & Pauline Dixon'],
  [9, 'Birth', '', false, 'F', 'Erin Fraser', 'St Helens, Australia', 'Bruce & Melanie Fraser'],
  [9, 'Marriage', '', false, 'M', 'Jared & Kelly Watson', 'Geraldton, Australia', ''],
  [9, 'Marriage', '', false, 'M', 'Connor & Bianca Hill', 'Goulburn, Australia', ''],
  [9, 'Marriage', '', false, 'M', 'Max & Sienna Cole', 'Wick, United Kingdom', ''],
  [9, 'Birth', '', false, 'F', 'Molly Lockhart', 'Queenstown, New Zealand', 'Damien & Danielle Lockhart'],
  [9, 'Marriage', '', false, 'M', 'Dominic & Tamsin Ross', 'Opua, New Zealand', ''],
  [9, 'Marriage', '', false, 'M', 'Kyle & Paige Preston', 'Calgary, Canada', ''],
  [9, 'Birth', '', false, 'F', 'Evelyn Blackmore', 'Horsham, Australia', 'Kurt & Rachel Blackmore'],
  [10, 'Birth', '', false, 'M', 'Anthony Payne', 'Wrexham, United Kingdom', 'Barry & Denise Payne'],
  [10, 'Birth', '', false, 'F', 'Faye Hopkins', 'Wangaratta, Australia', 'Clive & Leanne Hopkins'],
  [12, 'Birth', '', false, 'F', 'Daisy Fox', 'Kalgoorlie, Australia', 'Vincent & Heather Fox'],
  [13, 'Birth', '', false, 'M', 'Jonah Burke', 'Pukekohe, New Zealand', 'Guy & Hayley Burke'],
  [13, 'Birth', '', false, 'F', 'Ivy Chambers', 'Launceston, Australia', 'Howard & Wendy Chambers'],
  [14, 'Birth', '', false, 'F', 'Jade Steele', 'Gladstone, Australia', 'Bradley & Tracey Steele'],
  [14, 'Birth', '', false, 'M', 'Archie Lamb', 'Inverness, United Kingdom', 'Angus & Christine Lamb'],
  [14, 'Taken', '', false, 'M', 'Leonard Banks', 'Los Angeles, United States', ''],
  [14, 'Birth', '', false, 'M', 'Hugo Robinson', 'Kerikeri, New Zealand', 'Lawrence & Lynette Robinson'],
  [14, 'Birth', '', false, 'M', 'Elijah Mason', 'Knoxville, United States', 'Carl & Dawn Mason'],
  [15, 'Birth', '', false, 'F', 'Sarah Wilkes', 'Penrith, Australia', 'Michael & Andrea Wilkes'],
  [15, 'Birth', '', false, 'F', 'Freya Marshall', 'Ipswich, United Kingdom', 'Robert & Elizabeth Marshall'],
  [15, 'Birth', '', false, 'M', 'Zachary Halliday', 'Hokitika, New Zealand', 'Jeremy & Alison Halliday'],
  [15, 'Birth', '', false, 'F', 'Norah Whitman', 'Lexington, United States', 'Franklin & Brenda Whitman'],
  [15, 'Birth', '', false, 'F', 'Cora Templeton', 'San Antonio, United States', 'Kent & Gloria Templeton'],
  [16, 'Birth', '', false, 'M', 'James Hargreaves', 'Geelong, Australia', 'Thomas & Sophie Hargreaves'],
  [16, 'Marriage', '', true, 'M', 'Daniel & Lucy Fisher', 'Castle Cary, United Kingdom', ''],
  [16, 'Marriage', '', false, 'M', 'Joseph & Chloe Whitley', 'Chelmsford, United Kingdom', ''],
  [17, 'Birth', '', true, 'M', 'Alastair Haywood', 'Rockhampton, Australia', 'Clement & Joyce Haywood'],
  [17, 'Taken', '', false, 'M', 'Martin Bennett', 'Sydney, Australia', ''],
  [17, 'Taken', '', false, 'M', 'Benjamin Holland', 'Leeds, United Kingdom', ''],
  [17, 'Taken', '', false, 'M', 'Frank Holloway', 'Opotiki, New Zealand', ''],
  [18, 'Birth', '', false, 'M', 'Miles Cross', 'Salisbury, United Kingdom', 'Keith & Shirley Cross'],
  [18, 'Birth', '', false, 'M', 'Jesse Campbell', 'Kamloops, Canada', 'Derek & Glenda Campbell'],
  [20, 'Birth', '', false, 'M', 'Lucas Baker', 'Hobart, Australia', 'Henry & Emily Baker'],
  [20, 'Taken', '', false, 'M', 'Matthew Collins', 'Bega, Australia', ''],
  [20, 'Birth', '', false, 'M', 'Stephen Whitfield', 'Rotorua, New Zealand', 'Philip & Isabella Whitfield'],
  [20, 'Birth', '', false, 'F', 'Anna Russell', 'Wexford, Ireland', 'Stuart & Harriet Russell'],
  [20, 'Birth', '', false, 'M', 'Charles Hale', 'Dubbo, Australia', 'Graham & Amelia Hale'],
  [21, 'Birth', '', false, 'M', 'Edward Barker', 'Bristol, United Kingdom', 'Ethan & Florence Barker'],
  [21, 'Birth', '', false, 'M', 'Robert Moore', 'Taihape, New Zealand', 'Gordon & Rachel Moore'],
  [21, 'Birth', '', false, 'M', 'Timothy Blackwell', 'Taunton, United Kingdom', 'Isaac & Rebecca Blackwell'],
  [22, 'Birth', '', false, 'F', 'Natalie Kemp', 'Webster Groves, United States', 'Callum & Lucinda Kemp'],
  [22, 'Birth', '', false, 'F', 'Esther Carter', 'Cairns, Australia', 'Declan & Matilda Carter'],
  [22, 'Birth', '', false, 'F', 'Phoebe Price', 'Edinburgh, United Kingdom', 'Harvey & Eloise Price'],
  [22, 'Birth', '', false, 'F', 'Eleanor Ward', 'Cambridge, United Kingdom', 'Spencer & Alice Ward'],
  [22, 'Birth', '', false, 'F', 'Clare Lloyd', 'Lismore, Australia', 'Ben & Hazel Lloyd'],
  [23, 'Birth', '', false, 'F', 'Joanna Hayes', 'Wollongong, Australia', 'Rupert & Holly Hayes'],
  [23, 'Marriage', '', false, 'M', 'Thomas & Rosalie Lowe', 'Murwillumbah, Australia', ''],
  [23, 'Birth', '', false, 'F', 'Victoria Fleming', 'Exeter, United Kingdom', 'Caleb & Megan Fleming'],
  [23, 'Marriage', '', true, 'M', 'Samuel & Laura Marsh', 'Shrewsbury, United Kingdom', ''],
  [23, 'Marriage', '', false, 'M', 'Noah & Penelope Hargrave', 'Leicester, United Kingdom', ''],
  [23, 'Marriage', '', false, 'M', 'Daniel & Rose Brand', 'Aberdeen, United Kingdom', ''],
  [23, 'Marriage', '', false, 'M', 'Joseph & Louise Doyle', 'Kingston, Canada', ''],
  [23, 'Birth', '', false, 'M', 'Aaron Wheeler', 'Hamilton, New Zealand', 'Andrew & Fiona Wheeler'],
  [23, 'Birth', '', false, 'M', 'Simon Gardner', 'Gloucester, United Kingdom', 'Patrick & Helen Gardner'],
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
