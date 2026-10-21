import { beforeEach, expect, test } from 'vitest';
import { fixtureData } from '../mocks/fixtures';
import { mockDirectoryUser, mockUserInformation, mockUserToggles } from './mockUser';
import { freshPage } from './testSupport';

beforeEach(() => {
  freshPage();
  window.history.replaceState(null, '', '/');
});

test('scenario toggles are off by default', () => {
  expect(mockUserToggles()).toEqual({ policies: false, expired: false, householder: false });
  const info = mockUserInformation();
  expect(info.HasPoliciesToAccept).toBe(false);
  expect(info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionActive).toBe(true);
  expect(info.Directory_UserCurrent.Directory_UserCurrent_Member.isHouseholder).toBe(false);
});

test('?mockuser= switches toggles and is remembered for the tab', () => {
  window.history.replaceState(null, '', '/UBTConnect/Menu?mockuser=policies,expired,householder');
  expect(mockUserToggles()).toEqual({ policies: true, expired: true, householder: true });
  window.history.replaceState(null, '', '/UBTConnect/Profile');
  const user = mockUserInformation();
  expect(user.HasPoliciesToAccept).toBe(true);
  expect(user.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionActive).toBe(false);
  expect(user.Directory_UserCurrent.Directory_UserCurrent_Member).toMatchObject({
    isHouseholder: true,
    HouseholderId: user.Directory_UserCurrent.MemberID,
  });
  window.history.replaceState(null, '', '/UBTConnect/Profile?mockuser=');
  expect(mockUserToggles()).toEqual({ policies: false, expired: false, householder: false });
});

test('the mock user lives in a locality of the recorded fixtures', () => {
  const geo = mockDirectoryUser().Directory_UserCurrent_Geography;
  const localities = fixtureData('UBTConnect_Utils', 'CacheControl_AllLocalities/DataActionGetCacheInfo') as {
    CacheControl_Response: { LocalityList: { List: { LocalityId: string; Name: string; CountryCode: string }[] } };
  };
  expect(localities.CacheControl_Response.LocalityList.List).toContainEqual(
    expect.objectContaining({ LocalityId: geo.Locality_Id, Name: geo.Locality_Name, CountryCode: geo.Country_Code }),
  );
  const subdivision = fixtureData('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision') as {
    Subdivision: { Subdivision_Card: { SubdivisionId: string; Subdivision_Card_Content: { Name: string } } };
  };
  expect(subdivision.Subdivision.Subdivision_Card).toMatchObject({
    SubdivisionId: geo.Subdivision_Id,
    Subdivision_Card_Content: { Name: geo.Subdivision_Name },
  });
});
