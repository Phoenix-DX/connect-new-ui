import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { fixtureData, recordedHandler } from '@/mocks/fixtures';
import { mockDelay, scenario } from '@/mocks/scenario';
import { collection } from '@/mocks/store';
import { PROFILE_SPOUSE_NAME } from '@/mocks/fictional/directory';
import { wireList } from '@/lib/os-wire';
import { mockUserInformation, mockUserToggles } from '@/platform/session/mockUser';
import { HOUSEHOLD_DETAILS_ID, PROFILE_HOUSEHOLD_ID } from '@/containers/HouseholdDetails/mockData';

/* Profile mocks (P-MOCKS, P-MUTATION).
   - DataActionGetCountryInfo: recorded once (CurrentCountryCode US, fixture UBTConnect/DataActionGetCountryInfo/
     01-c52c670a.json). Any other country answers the same recording (Q4 → A, pending): it only feeds the preview's
     FormattedAddress.
   - ServiceAPIMember_EditDetails_Service: a write, never recorded (guard). Answers success and keeps every submitted
     request in the collection `Profile.editRequests`; the profile data does not change (the original says changes may
     take up to 48 hours; dom/default.html:206) (Q4 → A, pending).
   - Scenario `spouse` (?mock=spouse, Q2 → A, pending): the TST account captured on Profile is a householder's spouse
     (Switch2 / Switch3 and both "Display … on your profile." notes, dom/default.html:362-440; fixture inputs isSpouse
     True, isHouseholder False, CurrentCountryCode US). This scenario answers the shared CacheControl_UserInfo
     GetCacheInfo with the shell's mock user as that spouse: household 9002 (HouseholdDetails_Block mockData, 3
     members as captured: the cast's Ward household), mobile and work numbers shown, country US, the full name of the
     cast's Amanda Ward (the captured word lengths 6 / 4, "•••••• ••••", dom/default.html:128). Every other scenario falls through to the shell handler.
   - Scenario `member` (?mock=member, drift wave M-Q3 a, user 2026-10-29): the TST account of the capture of
     2026-10-29 is neither a householder nor a householder's spouse (no Switch2 / Switch3 and no "Display … on your
     profile." notes: App_Profile.Profile.mvc.js:1974, :2053), and its household has 5 members (2 more than before).
     This scenario answers the shared GetCacheInfo with the shell's mock user as is (Matías Vitale, a son of the
     household) with the Vitale household (HouseholdDetails_Block mockData: 5 members, the parents with actions, three
     children without), country US as captured. The capture default of Profile (capture-plan `scenarios.default`);
     `spouse` stays as a review scenario.
   - Scenario `address` (?mock=address, App_Profile Q1 a): the shell's mock user as the householder, with five
     fictional address items (the line of MOCK_USER.address, Bahia Blanca, Buenos Aires, 8000). TST has no capture of
     the address section (the captured account is a spouse), so the labels and the Required values are fictional.
   - CacheControl_AllSubdivisions GetCacheInfo (never captured): fictional subdivisions of the Argentine localities of
     the recorded CacheControl_AllLocalities answer (Bahia Blanca 585, Buenos Aires 924, Rosario 216). Bahia Blanca has
     the mock user's subdivision 2820 and the cast's two other supper meetings (mocks/fictional/directory.ts); the
     others are real neighbourhoods of each city.
   Other scenarios: real, empty, error, loading (src/mocks/scenario.ts). */
type UserInfoCacheOutput = ActionOutputs<PathOf<'UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo'>>;

const editRequests = collection('Profile.editRequests', () => [], 'Id');

type DirectoryUserCurrent = UserInfoCacheOutput['CacheControl_Response']['Directory_UserCurrent'];

/** The CacheControl_UserInfo GetCacheInfo answer of a scenario: the shell's mock user (with the householder toggle as
    given), changed by `edit`. */
const userInfoCache = (
  name: string,
  householder: boolean,
  edit: (current: DirectoryUserCurrent) => DirectoryUserCurrent,
) =>
  http.post('/api/UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo', async () => {
    if (scenario() !== name) return undefined;
    await mockDelay();
    const recorded = fixtureData(
      'UBTConnect_Utils',
      'CacheControl_UserInfo/DataActionGetCacheInfo',
    ) as UserInfoCacheOutput;
    const user = mockUserInformation({ ...mockUserToggles(), householder });
    const data: UserInfoCacheOutput = {
      ...recorded,
      CacheControl_Response: {
        ...recorded.CacheControl_Response,
        Directory_UserCurrent: edit(user.Directory_UserCurrent),
        HasPoliciesToAccept: user.HasPoliciesToAccept,
      },
    };
    return HttpResponse.json({ data });
  });

const memberUserInfoCache = userInfoCache('member', false, (current) => ({
  ...current,
  Directory_UserCurrent_Geography: { ...current.Directory_UserCurrent_Geography, Country_Code: 'US' },
  Directory_UserCurrent_Member: { ...current.Directory_UserCurrent_Member, HouseholderId: HOUSEHOLD_DETAILS_ID },
}));

const spouseUserInfoCache = userInfoCache('spouse', false, (current) => ({
  ...current,
  FullName: PROFILE_SPOUSE_NAME,
  Directory_UserCurrent_Visibility: {
    ...current.Directory_UserCurrent_Visibility,
    DisplayMobilePhone: true,
    DisplayWorkPhone: true,
  },
  Directory_UserCurrent_Geography: { ...current.Directory_UserCurrent_Geography, Country_Code: 'US' },
  Directory_UserCurrent_Member: {
    ...current.Directory_UserCurrent_Member,
    HouseholderId: PROFILE_HOUSEHOLD_ID,
    SpouseIsHouseholder: true,
  },
}));

type AddressItem =
  UserInfoCacheOutput['CacheControl_Response']['Directory_UserCurrent']['Directory_UserCurrent_Member']['Address']['AddressItemsList']['List'][number];

/** The fictional address of the householder (scenario `address`): NumberRef, Label, Value, Required. */
const ADDRESS_ITEMS: AddressItem[] = (
  [
    [1, 'Street Address', '120 Las Margaritas', true],
    [2, 'Apartment, Suite or Floor', '', false],
    [3, 'City', 'Bahia Blanca', true],
    [4, 'Province', 'Buenos Aires', false],
    [5, 'Postcode', '8000', true],
  ] as const
).map(([NumberRef, Label, Value, Required]) => ({ NumberRef, Label, Value, Required, Visible: true, IsValid: true }));

const addressUserInfoCache = userInfoCache('address', true, (current) => {
  const member = current.Directory_UserCurrent_Member;
  return {
    ...current,
    Directory_UserCurrent_Member: {
      ...member,
      Address: { ...member.Address, AddressItemsList: wireList(ADDRESS_ITEMS) },
    },
  };
});

/** The fictional subdivisions: LocalityId, LocalityName, then SubdivisionId and SubdivisionName. */
const SUBDIVISIONS: [string, string, [string, string][]][] = [
  [
    '585',
    'Bahia Blanca',
    [
      ['2820', 'Zapiola (Main Meeting Room)'],
      ['9202', 'Patagonia'],
      ['9203', 'Ingeniero White'],
    ],
  ],
  [
    '924',
    'Buenos Aires',
    [
      ['9241', 'Palermo'],
      ['9242', 'Belgrano'],
      ['9243', 'Caballito'],
    ],
  ],
  [
    '216',
    'Rosario',
    [
      ['2161', 'Fisherton'],
      ['2162', 'Echesortu'],
    ],
  ],
];

export const handlers: RequestHandler[] = [
  memberUserInfoCache,
  spouseUserInfoCache,
  addressUserInfoCache,
  contractHandler('UBTConnect_Utils', 'CacheControl_AllSubdivisions/DataActionGetCacheInfo', () => ({
    CacheControl_Response: {
      SubdivionsList: {
        List: SUBDIVISIONS.flatMap(([LocalityId, LocalityName, subdivisions]) =>
          subdivisions.map(([SubdivisionId, SubdivisionName]) => ({
            SubdivisionId,
            SubdivisionName,
            LocalityId,
            LocalityName,
          })),
        ),
      },
    },
  })),
  recordedHandler('UBTConnect', 'Profile/DataActionGetCountryInfo', { matchInputs: false }),
  contractHandler(
    'UBTConnect',
    'ServiceAPIMember_EditDetails_Service',
    ({ UI_AccountForm, isRequireRequestCreation }) => {
      editRequests.upsert({ Id: '', UI_AccountForm, isRequireRequestCreation });
      return {};
    },
  ),
];
