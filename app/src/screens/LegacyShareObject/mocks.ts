import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { fixtureData } from '../../mocks/fixtures';
import { VITALE, childrenText, householdById, householdName } from '../../mocks/fictional/directory';
import { collection } from '../../mocks/store';
import { mockUserToggles } from '../../shell/mockUser';
import { Type_ShareObject } from './components/staticEntities';
import type { AvailableUserWire, ShareObjectTypeByIdWire } from './types';

/* Mocks of LegacyShareObject (P-MOCKS, P-MUTATION). Scenarios: real (default), empty, error, loading (src/mocks).
   - ScreenDataSetGetShareObjectTypeById: recorded for Household only (fixture 01-585887a6, Label "Household"); any other
     type answers one record whose Label is the type identifier (fictional, Q1 → A pending).
   - GetAvailableUsers: fictional (person data), the captured count (1 row) and text lengths (dom/default.html:136-160);
     the answer keeps the users whose FullName holds every word of SearchFilter (Q2, server rule unknown).
   - GetHouseholdDetails: the household of the directory cast (src/mocks/fictional/directory.ts) for the id, else the
     Vitale household (the captured text lengths, dom/default.html:92-106: Bahia Blanca, Argentina); no members
     (captured empty lists).
   - Get_UI_CommunityBusinessShareCard: not observed (Q4 → A pending), fictional; photo fields empty (coming-soon image).
   - ShareObject: a write, never the real server (Q3 → A pending): stored in the in-memory collection
     LegacyShareObject.shares; IsAllowed = the mock user's subscription is active (?mockuser=expired → not allowed). */

const LABEL = 'Contacts list';

const users: AvailableUserWire[] = [
  {
    Id: '990101',
    Email: 'alice.thornton@example.com',
    FirstName: 'Alice',
    LastName: 'Thornton',
    FullName: 'Alice Thornton',
    LocalityId: '990201',
    LocalityName: 'Las Cruces',
    CountryCode: '',
    CountryName: 'United States',
    Photo: { Bucket: '', Path: '', Type: '', SignedPath: '' },
    CountryId: 'US',
    Source: '',
    MemberId: '990102',
    HasAccess: true,
  },
];

const shares = collection('LegacyShareObject.shares', () => [], 'Id');

const matches = (user: AvailableUserWire, searchFilter: string) =>
  searchFilter
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => user.FullName.toLowerCase().includes(word));

export const handlers: RequestHandler[] = [
  contractHandler(
    'Connect2_LegacyShared',
    'ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById',
    ({ ShareObjectTypeId = '' }) => {
      if (ShareObjectTypeId === Type_ShareObject.Household) {
        return fixtureData(
          'Connect2_LegacyShared',
          'ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById',
        ) as ShareObjectTypeByIdWire;
      }
      const type = { Id: '', Label: ShareObjectTypeId, LabelPrefix: '', Order: 0, Is_Active: false };
      return {
        List: {
          List: ShareObjectTypeId === '' ? [] : [{ Type_ShareObject: { ...type, NotificationTitle: '', APIKey: '' } }],
        },
        Count: -1,
      };
    },
  ),
  contractHandler('Connect2_LegacyShared', 'ProfileList/DataActionGetAvailableUsers', ({ SearchFilter = '' }) => ({
    Label: LABEL,
    Response: { Type: '', Items: { List: users.filter((u) => matches(u, SearchFilter)) } },
  })),
  contractHandler('Connect2_LegacyShared', 'ServiceAPIGetHouseholdDetails', ({ HouseholdId }) => {
    const cast = householdById(HouseholdId) ?? VITALE;
    return {
      UI_Screen_HouseholdDetails: {
        HouseholdCard: {
          Id: HouseholdId,
          Household_Card_Content: {
            Name: householdName(cast),
            FamilyNames: childrenText(cast.children),
            Address: '',
            LocalityName: cast.localityName,
            CountryName: cast.countryName,
            SupperMeetingId: '0',
            SupperMeetingName: '',
            TimezoneName: '',
            TimezoneOffset: 0,
            LocalityId: '0',
            Surname: '',
            DisplayOptions: { IsAncestry: false, IsDeceased: false, IsHidden: false },
          },
        },
        Household_Actions: {
          HasBookmark: false,
          HasUnbookmark: false,
          HasNotes: false,
          HasGift: false,
          HasShare: true,
          HasCall: false,
          HasEmail: false,
          HasViewDetails: false,
        },
      },
      Out_HouseholdMembers: { List: [] },
      Out_NonHouseholdMembers: { List: [] },
      isVisible: true,
    };
  }),
  contractHandler('Connect2_LegacyShared', 'ServiceAPIGet_UI_CommunityBusinessShareCard', () => ({
    Out_UI_CommunityBusiness_ShareCard: {
      Name: 'OneSchool Global Bahia Blanca',
      AreasServed: 'Bahia Blanca',
      CountryName: 'Argentina',
      PhotoBucket: '',
      PhotoPath: '',
      PhotoSignedPath: '',
      PhotoType: '',
      Type: '',
    },
  })),
  contractHandler('Connect2_LegacyShared', 'ActionShareObject', (inputs) => {
    if (mockUserToggles().expired) return { IsAllowed: false, IsSuccess: false, Message: '', ShareId: '0' };
    const row = shares.upsert({
      Id: '',
      ShareObjectTypeId: inputs.In_ShareObjectTypeId,
      SharedObjectId: inputs.In_SharedObjectId,
      TargetCBUserId: inputs.In_TargetCBUserId,
    });
    return { IsAllowed: true, IsSuccess: true, Message: '', ShareId: String(row.Id) };
  }),
];
