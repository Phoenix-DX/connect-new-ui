import type { RequestHandler } from 'msw';
import type { components } from '@/api/schema.d';
import { contractHandler } from '@/mocks/contract';
import { SHARE_MEMBERS } from '@/mocks/fictional/content';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';

type SearchResultWire = components['schemas']['Connect_Search_CS__SearchResult'];

/* ShareSheet calls were never recorded (the sheet is closed in every capture; no fixture). Members are person data:
   plausible fictional names with real place names (src/mocks/fictional/content.ts, mock-fixtures.md), no image URL
   (UBT_LazyImage asks GetSignedImagesInBulk, mocked separately). Six members; the three first are "recently shared". Shares and links are mocked on the success path, with no side effect. */
const member = (n: number, name: string, location: string): SearchResultWire => ({
  Id: String(9000 + n),
  HouseholderId: String(9100 + n),
  Name: name,
  AdditionalInformation: '',
  Location: location,
  Type: Connect_Entity.Member,
  RecordDisabled: false,
  Score: '0',
  Latitude: '0',
  Longitude: '0',
});
const MEMBERS = SHARE_MEMBERS.map(([name, location], i) => member(i + 1, name, location));

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_Utils', 'ShareSheet/DataActionGetRecentlyShared', () => ({
    Out_SearchResultItemList: { List: MEMBERS.slice(0, 3) },
  })),
  contractHandler('UBTConnect_Utils', 'ShareSheet/DataActionGetAvailableMembers', (inputs) => {
    const term = (inputs.SearchTerm ?? '').toLowerCase();
    return { Out_SearchResultItemList: { List: MEMBERS.filter((m) => m.Name.toLowerCase().includes(term)) } };
  }),
  contractHandler('UBTConnect_Utils', 'ActionCS_ShareObject', () => ({
    IsAllowed: true,
    IsSuccess: true,
    Message: '',
    ShareId: '1',
  })),
  contractHandler('UBTConnect_Utils', 'ActionCS_CreateShareProfileLink', () => ({ ShareId: '1', URL: '' })),
];
