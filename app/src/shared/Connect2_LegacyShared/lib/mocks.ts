import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import {
  childrenText,
  exampleEmail,
  householdName,
  householdsOfSupperMeeting,
  INTERCHANGE,
  LOCALITY,
  SUPPER_MEETINGS,
} from '@/mocks/fictional/directory';
import { MOCK_SIGNED_PHOTO_URL } from '@/components/ui/ResultItemImage/mocks';
import { ORBIT_HOSTED_ROOMS, type OrbitGuestHousehold, type OrbitGuestMember } from '@/mocks/fictional/orbit';
import { wireList } from '@/legacy/os/os-wire';
import type { MemberContactWithTimezone } from './structures';
import {
  defaultCacheableSubdivisionInformation,
  defaultLocalityHouseholdsResultItem,
  defaultActionGetLocalityInformation_Output,
  defaultActionGetUserInformation_Output,
  defaultActionGetUserLocalitiesForCountryCodeWithGPS_Output,
  defaultLocalityResultItemWithGPS,
  defaultSubdivisionsItem,
} from './mockDefaults';

/* Fictional answers of the Connect2_LegacyShared server actions behind the Assemble filters (O-B3; never captured:
   AssembleEvents and Assemble_BrowseByCountry were recorded on the country list only). One consistent world with the
   directory cast (src/mocks/fictional/directory.ts): Argentina's localities are Bahia Blanca (252, its three supper
   meetings, the first the main hall) and its interchange Monte Hermoso (253), plus Córdoba and Neuquén (real cities;
   their accents exercise RemoveDiacritics in the locality search). Other countries have no locality. */

export const MOCK_COUNTRY_LOCALITIES: Record<string, { Id: string; Name: string; SubdivisionsCount: string }[]> = {
  [LOCALITY.countryCode]: [
    { Id: LOCALITY.id, Name: LOCALITY.name, SubdivisionsCount: String(SUPPER_MEETINGS.length) },
    { Id: INTERCHANGE.id, Name: INTERCHANGE.name, SubdivisionsCount: '1' },
    { Id: '254', Name: 'Córdoba', SubdivisionsCount: '2' },
    { Id: '255', Name: 'Neuquén', SubdivisionsCount: '1' },
  ],
};

export const MOCK_LOCALITY_SUBDIVISIONS: Record<string, { Id: string; Name: string; IsMainHall: boolean }[]> = {
  [LOCALITY.id]: SUPPER_MEETINGS.map((s, i) => ({ Id: s.id, Name: s.name, IsMainHall: i === 0 })),
  [INTERCHANGE.id]: [{ Id: '9301', Name: 'Monte Hermoso (Main Meeting Room)', IsMainHall: true }],
  '254': [
    { Id: '9401', Name: 'Alta Córdoba (Main Meeting Room)', IsMainHall: true },
    { Id: '9402', Name: 'Güemes', IsMainHall: false },
  ],
  '255': [{ Id: '9501', Name: 'Neuquén Centro (Main Meeting Room)', IsMainHall: true }],
};

const localities = contractHandler(
  'Connect2_LegacyShared',
  'ActionGetUserLocalitiesForCountryCodeWithGPS',
  ({ CountryCode }) => {
    const out = defaultActionGetUserLocalitiesForCountryCodeWithGPS_Output();
    out.Results.List = (MOCK_COUNTRY_LOCALITIES[CountryCode] ?? []).map((l) => ({
      ...defaultLocalityResultItemWithGPS(),
      ...l,
      Active: true,
    }));
    return out;
  },
);

const localityInformation = contractHandler(
  'Connect2_LegacyShared',
  'ActionGetLocalityInformation',
  ({ LocalityId }) => {
    const out = defaultActionGetLocalityInformation_Output();
    const locality = Object.values(MOCK_COUNTRY_LOCALITIES)
      .flat()
      .find((l) => l.Id === LocalityId);
    const info = out.CacheableLocalityInformation;
    info.Name = locality?.Name ?? '';
    info.CountryCode = locality ? LOCALITY.countryCode : '';
    info.CountryName = locality ? LOCALITY.country : '';
    info.LocalitySubdivisionsList.List = (MOCK_LOCALITY_SUBDIVISIONS[LocalityId] ?? []).map((s) => ({
      ...defaultSubdivisionsItem(),
      ...s,
    }));
    return out;
  },
);

const userInformation = contractHandler('Connect2_LegacyShared', 'ActionGetUserInformation', () => {
  const out = defaultActionGetUserInformation_Output();
  const subscription = out.UserInformation.Subscription;
  subscription.Active = true;
  type SubscribedCountry = (typeof subscription.SubscribedCountries.List)[number];
  // EmptyListItem is generated with every attribute set (mockDefaults.ts), so it is a whole record.
  const country = subscription.SubscribedCountries.EmptyListItem as SubscribedCountry;
  subscription.SubscribedCountries.List = [{ ...country, Code: LOCALITY.countryCode }];
  // The user's own hall (Assemble routes: AssembleEvents title, LocalSubdivisionId, IsUserSubdivision): the main hall of
  // the directory world's locality (SUPPER_MEETINGS[0], Zapiola as the shell mock user's hall).
  out.UserInformation.Subdivision.Id = SUPPER_MEETINGS[0].id;
  out.UserInformation.Subdivision.Name = SUPPER_MEETINGS[0].name;
  return out;
});

/* ---- F11 (CR-MilestoneDetail-2): call popup data (never captured: no phone click in the captures) ----
   The Orbit guests the signed-in household hosts (src/mocks/fictional/orbit.ts ORBIT_HOSTED_ROOMS) have a contact
   record: the card's phone as the mobile number, an e-mail of the directory pattern, their household's locality and
   Argentina's time zone (UTC-3, no daylight saving; the same values as src/mocks/fictional/ldm.ts). Every other member
   has none, so BuildMemberCallData takes its empty-list branch (the card's phone and the locality's time zone).
   Every Argentine locality of the mock world answers that time zone; any other id the empty record. */

const ARGENTINA_TIME_ZONE = { TimezoneLabel: 'ART', OffsetSeconds: '-10800', CountryName: 'Argentina' } as const;

const guests = new Map<string, { member: OrbitGuestMember; household: OrbitGuestHousehold }>();
for (const room of ORBIT_HOSTED_ROOMS)
  for (const { household } of room.guests)
    for (const member of household.members) guests.set(member.MemberId, { member, household });

const ARGENTINE_LOCALITY_IDS = new Set<string>([
  ...(MOCK_COUNTRY_LOCALITIES[LOCALITY.countryCode] ?? []).map((l) => l.Id),
  ...[...guests.values()]
    .filter((g) => g.household.CountryCode === LOCALITY.countryCode)
    .map((g) => g.household.LocalityId),
]);

const memberContact = (id: string): MemberContactWithTimezone | undefined => {
  const guest = guests.get(id);
  if (!guest) return undefined;
  const { member, household } = guest;
  return {
    MobilePhoneNumber: member.Phone,
    HomePhoneNumber: '',
    WorkPhoneNumber: '',
    Email: member.Phone === '' ? '' : exampleEmail(member.FirstName, household.Surname),
    CountryCode: household.CountryCode,
    LocalityId: household.LocalityId,
    HouseholdId: household.HouseholderId,
    Timezone: { TimezoneLabel: ARGENTINA_TIME_ZONE.TimezoneLabel, OffsetSeconds: ARGENTINA_TIME_ZONE.OffsetSeconds },
    ContactDetails: {
      Id: member.MemberId,
      Name: `${member.FirstName} ${household.Surname}`,
      Location: household.Locality,
      AvatarURL: { Bucket: '', Path: '', SignedURL: '', Type: '', CropX: '0', CropY: '0', CropW: '0', CropH: '0' },
      IsBookmarked: false,
      IsDisabled: false,
    },
    LocalityName: household.Locality,
    CountryName: ARGENTINA_TIME_ZONE.CountryName,
  };
};

const memberContacts = contractHandler('Connect2_LegacyShared', 'ActionGetMemberContactByCacheKey', ({ CacheKey }) => ({
  MemberContactList: wireList(
    (CacheKey === '' ? [] : CacheKey.split(','))
      .map(memberContact)
      .filter((c): c is MemberContactWithTimezone => c !== undefined),
  ),
}));

const timezoneInformation = contractHandler(
  'Connect2_LegacyShared',
  'ActionGetTimezoneInformation',
  ({ LocalityId }) => ({
    TimezoneInformation: ARGENTINE_LOCALITY_IDS.has(LocalityId)
      ? {
          TimezoneLabel: 'America/Argentina/Buenos_Aires',
          OffsetSeconds: ARGENTINA_TIME_ZONE.OffsetSeconds,
          TimezoneAbreviation: ARGENTINA_TIME_ZONE.TimezoneLabel,
          CountryName: ARGENTINA_TIME_ZONE.CountryName,
        }
      : { TimezoneLabel: '', OffsetSeconds: '0', TimezoneAbreviation: '', CountryName: '' },
  }),
);

/* ---- F15 (CR-AssembleDetail-1): GetBulkSubdivisions_V2 (never captured: AssembleDetail has no capture) ----
   One record per asked key (a hall id) of the mock world's halls (MOCK_LOCALITY_SUBDIVISIONS: its locality, Argentina's
   country code, IsMainHall). Households: those of the supper meeting in the directory cast (householdsOfSupperMeeting,
   card order; the Bahia Blanca halls 1210, 9202, 9203), as Locality_Details names them (householdName, childrenText,
   "<locality>, <country>"), the neutral placeholder photo, IsBookmarked False (AssembleDetail sets it from the device's
   local bookmarks, Set_SelectedAssembleAttendeeListBookmarks). Halls outside Bahia Blanca use OTHER_HALL_HOUSEHOLDS (directory.ts). An unknown key is
   not answered (the cache gives the record at its default). */
const subdivisionInformation = (subdivisionId: string) => {
  const localityId = Object.keys(MOCK_LOCALITY_SUBDIVISIONS).find((l) =>
    (MOCK_LOCALITY_SUBDIVISIONS[l] ?? []).some((s) => s.Id === subdivisionId),
  );
  if (localityId === undefined) return undefined;
  const hall = (MOCK_LOCALITY_SUBDIVISIONS[localityId] ?? []).find((s) => s.Id === subdivisionId);
  const locality = (MOCK_COUNTRY_LOCALITIES[LOCALITY.countryCode] ?? []).find((l) => l.Id === localityId);
  const households = householdsOfSupperMeeting(subdivisionId);
  const value = defaultCacheableSubdivisionInformation();
  value.Subdivision.Id = subdivisionId;
  value.Subdivision.Name = hall?.Name ?? '';
  value.Subdivision.IsMainHall = hall?.IsMainHall ?? false;
  value.Subdivision.HouseholdCount = String(households.length);
  value.Subdivision.Locality.Id = localityId;
  value.Subdivision.Locality.Name = locality?.Name ?? '';
  value.Subdivision.Locality.Country.Code = LOCALITY.countryCode;
  value.Subdivision.Locality.Country.Name = LOCALITY.country;
  value.HouseholdListResponse.List = households.map((h) => {
    const photo = { ...defaultLocalityHouseholdsResultItem().Photo340, SignedURL: MOCK_SIGNED_PHOTO_URL };
    return {
      ...defaultLocalityHouseholdsResultItem(),
      Id: h.id,
      Name: householdName(h),
      Family: childrenText(h.children),
      Location: `${h.localityName}, ${h.countryName}`,
      Photo: photo,
      Photo340: photo,
    };
  });
  return value;
};

const bulkSubdivisions = contractHandler('Connect2_LegacyShared', 'ActionGetBulkSubdivisions_V2', ({ CacheKeys }) => ({
  Results: wireList(
    CacheKeys.List.flatMap((key) => {
      const value = subdivisionInformation(key);
      return value ? [{ CacheKey: key, Error: '', Value: value }] : [];
    }),
  ),
}));

export const handlers: RequestHandler[] = [
  bulkSubdivisions,
  localities,
  localityInformation,
  userInformation,
  memberContacts,
  timezoneInformation,
];
