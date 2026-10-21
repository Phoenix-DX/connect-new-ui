import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { recordedHandler } from '../../mocks/fixtures';
import { collection, statefulHandler } from '../../mocks/store';
import { wireList } from '../../lib/os-wire';
import type { UpdateItemWire } from './types';

/* DataActionGetDateRanges: the recorded fixture (UBTConnect/DataActionGetDateRanges/02-0400bafb.json, re-recorded
   read-only with the static-entity ids kept: Today, Last 7 Days, Last 30 Days, Older). The answer does not depend on
   the inputs and the recorded CurrentBreakpoint.SectionName is anonymised, so matchInputs is off.
   DataActionFetchUpdates: person data, never recorded (mock-fixtures.md): 88 fictional updates with the captured
   types (Birth / Marriage / Taken, one Birth "Twins"), read state (4 read), day (days before the capture day
   2026-10-14, so the date groups "Last 7 Days" 25 rows and "Last 30 Days" 63 rows stay as captured on any day) and the
   gender the tag colour shows. Texts are meaningful fictional values with the captured word lengths (mock-fixtures.md
   "Fictional text must be meaningful", user 2026-10-16): Birth = child, "City, Country" + ParentsNames "Father &
   Mother Surname" (the item shows "<place> - <parents>"), Marriage = "Groom & Bride Surname", Taken = the person; real
   place names. The last row's place is the place name the capture shows unmasked (place names are kept as real values:
   mock-fixtures.md, Q3 a, user 2026-10-14). HasAccess / HasShare True as HomeFeed's mock.
   ServiceAPIAction_UI_UpdateItem_MarkAllAsRead: a write, never recorded: marks every update of this collection read
   (P-MUTATION). MarkAsRead / MarkAsUnread are answered by HomeFeed's handlers (shared contract paths), which change the
   HomeFeed collection only: CR-Updates_SingleList-1. */

/* [days before today, type, birth type, read, name, place, parents] */
const ROWS: [number, string, string, boolean, string, string, string][] = [
  [1, 'Birth', '', false, 'James Hargreaves', 'Geelong, Australia', 'Thomas & Sophie Hargreaves'],
  [1, 'Marriage', '', false, 'Michael & Hannah Booth', 'Brisbane, Australia', ''],
  [1, 'Marriage', '', false, 'Oscar & Emma Hughes', 'Bendigo, Australia', ''],
  [1, 'Marriage', '', false, 'William & Olivia Turner', 'Mildura, Australia', ''],
  [1, 'Marriage', '', false, 'Jack & Abigail Prescott', 'Colchester, United Kingdom', ''],
  [1, 'Marriage', '', false, 'Liam & Grace Hales', 'Manchester, United Kingdom', ''],
  [1, 'Marriage', '', false, 'Samuel & Sarah Clark', 'Oxford, United Kingdom', ''],
  [1, 'Marriage', '', false, 'Daniel & Lucy Fisher', 'Castle Cary, United Kingdom', ''],
  [1, 'Marriage', '', false, 'Joseph & Chloe Whitley', 'Chelmsford, United Kingdom', ''],
  [1, 'Marriage', '', false, 'Andrew & Ruth Hartley', 'Auckland, New Zealand', ''],
  [2, 'Taken', '', false, 'Martin Bennett', 'Sydney, Australia', ''],
  [2, 'Taken', '', false, 'Benjamin Holland', 'Leeds, United Kingdom', ''],
  [5, 'Birth', '', true, 'Lucas Baker', 'Hobart, Australia', 'Henry & Emily Baker'],
  [5, 'Taken', '', false, 'Matthew Collins', 'Bega, Australia', ''],
  [5, 'Birth', '', false, 'Stephen Whitfield', 'Rotorua, New Zealand', 'Philip & Isabella Whitfield'],
  [5, 'Birth', '', true, 'Anna Russell', 'Wexford, Ireland', 'Stuart & Harriet Russell'],
  [5, 'Birth', '', false, 'Charles Hale', 'Dubbo, Australia', 'Graham & Amelia Hale'],
  [6, 'Birth', '', false, 'Edward Barker', 'Bristol, United Kingdom', 'Ethan & Florence Barker'],
  [6, 'Birth', '', false, 'Robert Moore', 'Taihape, New Zealand', 'Gordon & Rachel Moore'],
  [6, 'Birth', '', false, 'Timothy Blackwell', 'Taunton, United Kingdom', 'Isaac & Rebecca Blackwell'],
  [7, 'Birth', '', true, 'Natalie Kemp', 'Webster Groves, United States', 'Callum & Lucinda Kemp'],
  [7, 'Birth', '', false, 'Esther Carter', 'Cairns, Australia', 'Declan & Matilda Carter'],
  [7, 'Birth', '', false, 'Phoebe Price', 'Edinburgh, United Kingdom', 'Harvey & Eloise Price'],
  [7, 'Birth', '', false, 'Eleanor Ward', 'Cambridge, United Kingdom', 'Spencer & Alice Ward'],
  [7, 'Birth', '', false, 'Clare Lloyd', 'Lismore, Australia', 'Ben & Hazel Lloyd'],
  [8, 'Birth', '', true, 'Joanna Hayes', 'Wollongong, Australia', 'Rupert & Holly Hayes'],
  [8, 'Marriage', '', false, 'Thomas & Rosalie Lowe', 'Murwillumbah, Australia', ''],
  [8, 'Birth', '', false, 'Victoria Fleming', 'Exeter, United Kingdom', 'Caleb & Megan Fleming'],
  [8, 'Marriage', '', false, 'Samuel & Laura Marsh', 'Shrewsbury, United Kingdom', ''],
  [8, 'Marriage', '', false, 'Noah & Penelope Hargrave', 'Leicester, United Kingdom', ''],
  [8, 'Marriage', '', false, 'Daniel & Rose Brand', 'Aberdeen, United Kingdom', ''],
  [8, 'Marriage', '', false, 'Joseph & Louise Doyle', 'Kingston, Canada', ''],
  [8, 'Birth', '', false, 'Aaron Wheeler', 'Hamilton, New Zealand', 'Andrew & Fiona Wheeler'],
  [8, 'Birth', '', false, 'Simon Gardner', 'Gloucester, United Kingdom', 'Patrick & Helen Gardner'],
  [8, 'Marriage', '', false, 'Peter & Naomi Mills', 'Vancouver, Canada', ''],
  [9, 'Birth', '', false, 'Grace Porter', 'Melbourne, Australia', 'Owen & Imogen Porter'],
  [9, 'Birth', '', false, 'Charlotte Barnett', 'Swindon, United Kingdom', 'Tom & Sarah Barnett'],
  [9, 'Taken', '', false, 'David Harper', 'Christchurch, New Zealand', ''],
  [9, 'Birth', '', false, 'Raymond Murray', 'Masterton, New Zealand', 'Martin & Josephine Murray'],
  [9, 'Birth', '', false, 'Bethan Foster', 'Bulawayo, Zimbabwe', 'Philip & Jane Foster'],
  [11, 'Birth', '', false, 'Luke Hammond', 'Motueka, New Zealand', 'Stuart & Kate Hammond'],
  [11, 'Taken', '', false, 'Lewis Rutherford', 'Lancaster, United States', ''],
  [12, 'Birth', '', false, 'Chloe Fletcher', 'Wodonga, Australia', 'Graham & Georgia Fletcher'],
  [12, 'Birth', '', false, 'Emily Pemberton', 'Ballina, Australia', 'Jacob & Patricia Pemberton'],
  [12, 'Birth', '', false, 'Edward Underwood', 'Mackay, Australia', 'Nicholas & Rosemary Underwood'],
  [12, 'Birth', '', false, 'Jessica Sheppard', 'Reading, United Kingdom', 'Gregory & Sophie Sheppard'],
  [12, 'Birth', '', false, 'Jeffrey Gallagher', 'Albury, Australia', 'Adam & Alice Gallagher'],
  [13, 'Birth', '', false, 'Grant Lambert', 'Mudgee, Australia', 'Felix & Hazel Lambert'],
  [13, 'Birth', '', false, 'Brian Bishop', 'Greymouth, New Zealand', 'Jonathan & Hannah Bishop'],
  [14, 'Birth', 'Twins', false, 'James & Harrison Lindsay', 'Bunbury, Australia', 'Malcolm & Olivia Lindsay'],
  [14, 'Birth', '', false, 'Gordon Parks', 'St Albert, Canada', 'Anthony & Margaret Parks'],
  [14, 'Birth', '', false, 'Oscar Hunt', 'St Thomas, Canada', 'Robert & Bridget Hunt'],
  [15, 'Marriage', '', false, 'Desmond & Clarissa Fowler', 'Townsville, Australia', ''],
  [15, 'Marriage', '', false, 'Callum & Felicity Day', 'Adelaide, Australia', ''],
  [15, 'Marriage', '', false, 'Russell & Amelia Pike', 'Shepparton, Australia', ''],
  [15, 'Birth', '', false, 'Harvey Shaw', 'Canberra, Australia', 'Declan & Abigail Shaw'],
  [15, 'Marriage', '', false, 'Rupert & Clare Garner', 'Geelong, Australia', ''],
  [15, 'Marriage', '', false, 'Ryan & Elizabeth Weeks', 'Coventry, United Kingdom', ''],
  [15, 'Marriage', '', false, 'Leonard & Harriet Webb', 'Brighton, United Kingdom', ''],
  [15, 'Marriage', '', false, 'Henry & Holly Crawford', 'Sheffield, United Kingdom', ''],
  [15, 'Marriage', '', false, 'Lucas & Megan Bell', 'Glasgow, United Kingdom', ''],
  [15, 'Marriage', '', false, 'Ethan & Lily Sanders', 'Gisborne, New Zealand', ''],
  [15, 'Birth', '', false, 'Michael Thornton', 'Tauranga, New Zealand', 'Thomas & Beatrice Thornton'],
  [15, 'Birth', '', false, 'Rachel Schwarzenberger', 'Tokoroa, New Zealand', 'Samuel & Laura Schwarzenberger'],
  [16, 'Birth', '', false, 'Isaac Walters', 'Toowoomba, Australia', 'Sam & Fiona Walters'],
  [16, 'Birth', '', false, 'Helen Bradley', 'Newcastle, Australia', 'Daniel & Amy Bradley'],
  [16, 'Birth', '', false, 'Joseph Henderson', 'Sydney, Australia', 'Caleb & Rebecca Henderson'],
  [16, 'Taken', '', false, 'Andrew Holt', 'Bulawayo, Zimbabwe', ''],
  [16, 'Birth', '', false, 'Lucinda Tyler', 'Doncaster, United Kingdom', 'Martin & Esther Tyler'],
  [18, 'Birth', '', false, 'Philip Lockwood', 'Castle Cary, United Kingdom', 'Aaron & Caroline Lockwood'],
  [18, 'Birth', '', false, 'Stuart Whitley', 'Guildford, United Kingdom', 'Seth & Naomi Whitley'],
  [18, 'Taken', '', false, 'William Hartley', 'Darlington, United Kingdom', ''],
  [18, 'Birth', '', false, 'Sarah Dean', 'Wellington, New Zealand', 'Matthew & Grace Dean'],
  [18, 'Birth', '', false, 'Stephen Hart', 'Plymouth, United Kingdom', 'Graham & Eloise Hart'],
  [18, 'Birth', '', false, 'Phoebe Holmes', 'Worcester, United Kingdom', 'Edward & Natalie Holmes'],
  [19, 'Birth', '', false, 'Joanna Hutchison', 'Bendigo, Australia', 'Charles & Chloe Hutchison'],
  [19, 'Birth', '', false, 'Matilda Bennett', 'St Andrews, Canada', 'Gordon & Louise Bennett'],
  [20, 'Birth', '', false, 'Emily Holland', 'Mildura, Australia', 'Robert & Eleanor Holland'],
  [20, 'Taken', '', false, 'Simon Thompson', 'Whangarei, New Zealand', ''],
  [20, 'Birth', '', false, 'Eve Atkinson', 'Whanganui, New Zealand', 'Callum & Philippa Atkinson'],
  [20, 'Birth', '', false, 'Declan Donaldson', 'Granite Falls, United States', 'Joe & Rosalie Donaldson'],
  [20, 'Birth', '', false, 'Ella Ferguson', 'Durham, United Kingdom', 'Theo & Imogen Ferguson'],
  [20, 'Birth', '', false, 'Harvey Townsend', 'Charleston, United States', 'Max & Georgia Townsend'],
  [21, 'Birth', '', false, 'Thomas Collins', 'Victoria, Canada', 'Rupert & Isabella Collins'],
  [21, 'Birth', '', false, 'Daniel Lawson', 'Blenheim, New Zealand', 'Samuel & Mary Lawson'],
  [21, 'Birth', '', false, 'Ian Lane', 'St Austell, United Kingdom', 'Joseph & Alice Lane'],
  [22, 'Marriage', '', false, 'Andrew & Jessica Pembroke', 'Lismore, Australia', ''],
  [22, 'Marriage', '', false, 'Martin & Bethan Morton', 'Orange, Australia', ''],
];

const BASE_ID = 980100;
/* Rows whose captured tag is pink (Birth of a girl: Get_BackgroundColor_Avatar_UpdateItem); the others are MALE. */
const FEMALE_ROWS = new Set([
  15, 20, 21, 22, 23, 24, 25, 27, 35, 36, 39, 42, 43, 45, 63, 65, 68, 72, 74, 75, 76, 77, 79, 81,
]);

function dateOf(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const seed = (): UpdateItemWire[] =>
  ROWS.map(([daysAgo, type, birthType, read, name, place, parents], i) => ({
    UpdateItemId: String(BASE_ID - i),
    UpdateItemTypeId: type,
    HouseholdId: String(880100 - i),
    MemberId: String(770100 - i),
    Name: name,
    Date: dateOf(daysAgo),
    GenderId: FEMALE_ROWS.has(i) ? 'Gender.FEMALE' : 'Gender.MALE',
    LocationString: place,
    ParentsNames: parents,
    BirthType: birthType,
    IsRead: read,
    HasAccess: true,
    HasShare: true,
  }));

export const updateItems = collection('Updates_SingleList.updateItems', () => seed(), 'UpdateItemId');

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'Updates_SingleList/DataActionGetDateRanges', { matchInputs: false }),
  contractHandler('UBTConnect', 'Updates_SingleList/DataActionFetchUpdates', () => {
    const list = updateItems.all() as unknown as UpdateItemWire[];
    return { UI_UpdateItemList: wireList(list), UnreadCount: list.filter((u) => !u.IsRead).length };
  }),
  statefulHandler('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAllAsRead', () => {
    for (const row of updateItems.all()) updateItems.upsert({ ...row, IsRead: true });
    return {};
  }),
];
