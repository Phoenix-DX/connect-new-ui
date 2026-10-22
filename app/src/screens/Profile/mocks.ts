import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { fixtureData, recordedHandler } from '@/mocks/fixtures';
import { mockDelay, scenario } from '@/mocks/scenario';
import { collection } from '@/mocks/store';
import { PROFILE_SPOUSE_NAME } from '@/mocks/fictional/directory';
import { mockUserInformation, mockUserToggles } from '@/platform/session/mockUser';
import { PROFILE_HOUSEHOLD_ID } from '@/shared/UBTConnect/HouseholdDetails_Block/mockData';

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
   Other scenarios: real, empty, error, loading (src/mocks/scenario.ts). */
type UserInfoCacheOutput = ActionOutputs<PathOf<'UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo'>>;

const editRequests = collection('Profile.editRequests', () => [], 'Id');

const spouseUserInfoCache = http.post(
  '/api/UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo',
  async () => {
    if (scenario() !== 'spouse') return undefined;
    await mockDelay();
    const recorded = fixtureData(
      'UBTConnect_Utils',
      'CacheControl_UserInfo/DataActionGetCacheInfo',
    ) as UserInfoCacheOutput;
    const user = mockUserInformation({ ...mockUserToggles(), householder: false });
    const current = user.Directory_UserCurrent;
    const data: UserInfoCacheOutput = {
      ...recorded,
      CacheControl_Response: {
        ...recorded.CacheControl_Response,
        Directory_UserCurrent: {
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
        },
        HasPoliciesToAccept: user.HasPoliciesToAccept,
      },
    };
    return HttpResponse.json({ data });
  },
);

export const handlers: RequestHandler[] = [
  spouseUserInfoCache,
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
