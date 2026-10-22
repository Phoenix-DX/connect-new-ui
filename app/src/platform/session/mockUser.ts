import type { components } from '@/api/schema';
import { wireList } from '@/lib/os-wire';
import { LOCALITY, MOCK_USER } from '@/mocks/fictional/directory';
import type { AppManager_CachedUserInfoRec } from './cachedUserInfo';
import { rememberedParam } from '@/platform/storage/storage';

/* The fictional signed-in user (decision U7): Matías Vitale of the directory cast (src/mocks/fictional/directory.ts),
   the eldest son of the Vitale household (not its householder). Person data is invented; the place is a real recorded
   label so Directory
   screens match the fixtures: locality 585 "Bahia Blanca", Argentina (3 localities), main hall subdivision 2820
   "Zapiola (Main Meeting Room)" (fixtures GetLocalityStatistics, GetSubdivision, CacheControl_AllLocalities).
   SubscriptionType "Global" is the label captured on Menu (Menu dom/default.html:265).
   Scenario toggles, off by default, for testing: ?mockuser=policies,expired,householder (remembered for the tab;
   ?mockuser= with no value turns them off again). */
type Schemas = components['schemas'];
export type UserInformation = Schemas['UBTConnect_Utils__CacheControl_UserInformation'];
export type DirectoryUserCurrent = Schemas['APIDomain_Directory_IS__Directory_UserCurrent'];

export interface MockUserToggles {
  /** UserInformation.HasPoliciesToAccept → Policy_Checker sends to AcceptPendingPolicies */
  policies: boolean;
  /** Directory_UserCurrent_Subscription.SubscriptionActive = false */
  expired: boolean;
  /** Directory_UserCurrent_Member.isHouseholder = true */
  householder: boolean;
}

export const MOCK_USER_ID = '990001';
const HOUSEHOLDER_ID = '990002'; // Julián Vitale, householder of the mock user's household (toggle off; GetHousehold
// answers the Vitale household for this unknown id)

export function mockUserToggles(): MockUserToggles {
  const on = new Set((rememberedParam('mockuser') ?? '').split(',').map((t) => t.trim().toLowerCase()));
  return { policies: on.has('policies'), expired: on.has('expired'), householder: on.has('householder') };
}

export function mockDirectoryUser(t: MockUserToggles = mockUserToggles()): DirectoryUserCurrent {
  return {
    Id: MOCK_USER_ID,
    UserName: MOCK_USER.userName,
    Email: MOCK_USER.email,
    AccountEmail: MOCK_USER.email,
    FirstName: MOCK_USER.firstName,
    LastName: MOCK_USER.lastName,
    FullName: `${MOCK_USER.firstName} ${MOCK_USER.lastName}`,
    MemberID: MOCK_USER_ID,
    AccountNumber: MOCK_USER.accountNumber,
    HomeNumber: MOCK_USER.homeNumber,
    MobileNumber: MOCK_USER.mobileNumber,
    WorkNumber: '',
    Directory_UserCurrent_Visibility: { DisplayAge: false, DisplayMobilePhone: false, DisplayWorkPhone: false },
    Directory_UserCurrent_Geography: {
      Country_Code: 'AR',
      Country_Name: 'Argentina',
      Country_Email: 'argentina@example.com',
      Country_Phone: '+54 11 555 0100',
      Country_LocalityCount: '3',
      Locality_Id: '585',
      Locality_Name: 'Bahia Blanca',
      Locality_SubdivisionCount: '3',
      Subdivision_Id: '2820',
      Subdivision_Name: 'Zapiola (Main Meeting Room)',
    },
    Directory_UserCurrent_Subscription: {
      SubscriptionID: `SUB-${MOCK_USER.accountNumber}`,
      SubscriptionType: 'Global',
      // Region 1 "Americas" of the fictional Assemble mock (src/mocks/fictional/assemble.ts, Argentina's RegionId):
      // GetCacheableRegionSubscribedCountries needs a non-empty id, as TST's Global account has one
      // (Assemble_BrowseByCountry analysis/calls.json #4; CR-Assemble_BrowseByCountry-1).
      SubscriptionRegionId: '1',
      SubscriptionRegion: 'Americas',
      SubscriptionManageLink: 'https://example.com/subscription',
      SubscriptionActive: !t.expired,
      SubscribedCountries: wireList<Schemas['APIDomain_Directory_IS__TextTextLongIntegerRecord']>([]),
    },
    Directory_UserCurrent_Member: {
      HouseholderId: t.householder ? MOCK_USER_ID : HOUSEHOLDER_ID,
      isHouseholder: t.householder,
      SpouseId: '',
      SpouseIsHouseholder: false,
      Photo: { Bucket: '', Path: '', Type: '', SignedURL: '' },
      Address: {
        AddressItemsList: wireList<Schemas['APIDomain_Directory_IS__Custom_Address_Item']>([]),
        FormattedAddress: MOCK_USER.address,
        Lat: '-38.717652',
        Long: '-62.265487',
      },
    },
  };
}

/** GetUserInformation.UserInformation (HF types.ts:367-372). */
export function mockUserInformation(t: MockUserToggles = mockUserToggles()): UserInformation {
  return { Directory_UserCurrent: mockDirectoryUser(t), HasPoliciesToAccept: t.policies };
}

/** The AppManager cached user record of the mock user as stored (CR-AcceptPendingPolicies-2): only the place, CountryCode
    "AR" as the mock user's Directory_UserCurrent_Geography.Country_Code. Names, ids, email and phone stay empty: the
    variable lives in localStorage and no personal identifier goes to browser storage (AGENTS.md rule 16). */
export function mockCachedUserInfo(): Partial<AppManager_CachedUserInfoRec> {
  return { CountryCode: mockDirectoryUser().Directory_UserCurrent_Geography.Country_Code };
}

/** The mock user's identity fields of the cached user record, kept in memory only (CR-OrbitAdminLanding-1,
    CR-QRCodeGenerate-1): appManager_GetCachedUserInfo merges them at read time while the app runs on mocks; they are
    never written to AppManager_UserExtended or any browser storage (AGENTS.md rule 16). */
export function mockCachedUserIdentity(): Pick<
  AppManager_CachedUserInfoRec,
  'FirstName' | 'LastName' | 'MemberId' | 'Locality' | 'Country'
> {
  return {
    FirstName: MOCK_USER.firstName,
    LastName: MOCK_USER.lastName,
    MemberId: MOCK_USER_ID,
    Locality: LOCALITY.name,
    Country: LOCALITY.country,
  };
}
