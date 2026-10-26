import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ORBIT_MEMBERS } from '@/mocks/fictional/orbit';
import { orbitAdminMember } from '@/mocks/fictional/orbitAdmin';
import { collection } from '@/mocks/store';
import {
  editMemberDetails,
  fetchAvailableMembers,
  fetchCommunityPopulation,
  fetchMember,
  requestPhotoUpdate,
} from './repository';
import { fetchUserInformation } from './userInformation';
import type { AvailableMembersCallInputs, MemberAccountForm } from './types';

/* The MSW mocks of the test setup: ShareSheet/mocks.ts (six fictional members, filtered by the search term),
   OrbitAdminEventDetail/mocks.ts (the members that an admin can scan), Profile/mocks.ts (the save is kept in the
   collection Profile.editRequests), Menu/mocks.ts (the answer to the photo update request) and
   CommunityPopulation/mocks.ts (the recorded member count). */
const searchInputs: AvailableMembersCallInputs = {
  In_ShareObjectTypeId: 'Household',
  In_ShareableObjectId: '7001',
  In_UpdateType: '',
  In_UpdateDate: '1900-01-01',
  SearchTerm: 'grace',
};

const accountForm: MemberAccountForm = {
  AccountForm_AddressInformation: {
    Custom_Address_ItemList: { List: [] },
    LocalityId: '310',
    LocalityName: 'Wellington',
    SubdivionId: '0',
  },
  AccountForm_ContactInformation: {
    HomeNumber: '',
    MobileNumber: '021 555 0101',
    ShowMobileNumber: true,
    ShowWorkNumber: false,
    WorkNumber: '',
  },
  AccountForm_IdentificationInformation: { AccountNumber: 'NZ-4471', MemberId: '11' },
  AccountForm_PersonalInformation: { Email: 'ada@example.org', ShowLifeCycleDates: false, Username: 'aharlow' },
};

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('member repository', () => {
  it('fetchAvailableMembers calls DataActionGetAvailableMembers of ShareSheet with the inputs as they are', async () => {
    const members = await fetchAvailableMembers(searchInputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        owner: 'ShareSheet',
        action: 'DataActionGetAvailableMembers',
        inputNames: Object.keys(searchInputs).sort(),
      }),
    ]);
    expect(members).toEqual([
      expect.objectContaining({
        Id: '9004',
        HouseholderId: '9104',
        Name: 'Grace Lindsay',
        Location: 'Bendigo, Australia',
        RecordDisabled: false,
      }),
    ]);
    expect(members[0]).not.toHaveProperty('Score');
  });

  it('fetchMember calls GetMemberByMemberId with MemberId and answers the member', async () => {
    const memberId = ORBIT_MEMBERS[1]?.MemberId ?? '';
    const member = await fetchMember(memberId);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_OrbitMobile_MUI',
        action: 'ActionGetMemberByMemberId',
        inputNames: ['MemberId'],
      }),
    ]);
    expect(member).toEqual(orbitAdminMember(memberId));
    expect(member.FirstName).not.toBe('');
  });

  it('fetchCommunityPopulation calls DataActionFetchCount of FeedBlock_CommunityPopulation and answers the count', async () => {
    const total = await fetchCommunityPopulation();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'FeedBlock_CommunityPopulation',
        action: 'DataActionFetchCount',
        inputNames: [],
      }),
    ]);
    expect(total).toBe('54461'); // the recorded aggregate count (no person data)
  });

  it('editMemberDetails calls Member_EditDetails_Service with the form as it is', async () => {
    const editRequests = collection('Profile.editRequests', () => [], 'Id');
    const before = editRequests.all().length;
    await expect(editMemberDetails(accountForm, true)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIMember_EditDetails_Service',
        inputNames: ['UI_AccountForm', 'isRequireRequestCreation'],
      }),
    ]);
    expect(editRequests.all().slice(before)).toEqual([
      expect.objectContaining({ UI_AccountForm: accountForm, isRequireRequestCreation: true }),
    ]);
  });

  it('requestPhotoUpdate calls RequestPhotoUpdate with no input and answers Out_IsSuccess', async () => {
    expect(await requestPhotoUpdate()).toBe(true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ module: 'UBTConnect', action: 'ActionRequestPhotoUpdate', inputNames: [] }),
    ]);
  });

  it('fetchUserInformation calls ActionGetUserInformation with no input and answers the UserInformation', async () => {
    const info = await fetchUserInformation();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ module: 'UBTConnect_Utils', action: 'ActionGetUserInformation', inputNames: [] }),
    ]);
    expect(info).toHaveProperty('Directory_UserCurrent');
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchAvailableMembers(searchInputs)).rejects.toThrow('Request failed with status 500');
    await expect(fetchMember('1')).rejects.toThrow('Request failed with status 500');
  });
});
