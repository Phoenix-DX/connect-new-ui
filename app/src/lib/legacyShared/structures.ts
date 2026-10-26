import type { components } from '@/api/schema.d';

/* Structures of Connect2_LegacyShared used by the ported actions; fields named as in OutSystems (the record attributes
   read and written by Connect2_LegacyShared.controller.js), all optional = OutSystems default. */

/** BulkSignedPhotoParameters: one photo asked of GetSignedPhotosInBulk (controller.js:2928-2933). */
export interface BulkSignedPhotoParameters {
  Bucket?: string;
  Path?: string;
  Type?: string;
}

/** BulkSignedPhotoResult: one answer of GetSignedPhotosInBulk (controller.js:3012-3025): the asked photo, its signed
    URL and an error text ("" = none). */
export interface BulkSignedPhotoResult {
  Bucket?: string;
  Path?: string;
  Type?: string;
  SignedURL?: string;
  Error?: string;
}

/* ---- Wave 8 O-B2 (LocalityListDetail) ---- */
/** CountryWithMapPosition (Connect2_LegacyShared.model.js `CountryWithMapPositionRec`): the domain type of api/country,
    which GetRegionSubscribedCountries answers. */
export type { CountryWithMapPosition } from '@/api/country';

/* ---- Wave 8 O-B3 (Assemble filters): records of the server actions, typed by the API contract. ---- */
type Schemas = components['schemas'];
/** LocalityResultItemWithGPS: one locality of GetUserLocalitiesForCountryCodeWithGPS (GetCacheableCountryInfo), with
    the fields that the UI reads (the domain type CountryLocality of api/country). */
export type { CountryLocality as LocalityResultItemWithGPS } from '@/api/country';
/** CacheableLocalityInformation: GetLocalityInformation's locality (GetCacheableLocality). */
export type CacheableLocalityInformation = Schemas['Connect2_LegacyShared__CacheableLocalityInformation'];
/** SubdivisionsItem: one supper meeting of CacheableLocalityInformation.LocalitySubdivisionsList. */
export type SubdivisionsItem = Schemas['Connect2_LegacyShared__SubdivisionsItem'];
/** Users_Current_GETResponse (APIDomain_Directory_IS): GetUserInformation's user (GetCacheableUserInfo). */
export type Users_Current_GETResponse = Schemas['APIDomain_Directory_IS__Users_Current_GETResponse'];

/* ---- F11 (CR-MilestoneDetail-2: call popup data) ---- */

/** MemberContactWithTimezone (Connect2_LegacyShared.model.js:8348-8400): a member's phones, e-mail, locality and
    timezone (Timezone: TextLongIntegerRecord TimezoneLabel / OffsetSeconds), the domain type of api/message. */
export type { MemberContactWithTimezone } from '@/api/message';

/** TimezoneRec (APIDomain_Directory_IS): TimezoneLabel, OffsetSeconds (Long Integer), TimezoneAbreviation,
    CountryName. */
export type Timezone = Schemas['APIDomain_Directory_IS__Timezone'];

/* ---- F15 (CR-AssembleDetail-1, CR-AssembleDetail-2) ---- */
/** CacheableSubdivisionInformation (model.js:5755): the hall (SubdivisionExtended) and its households
    (HouseholdListResponse, LocalityHouseholdsResultItem list), the domain type SubdivisionInformation of api/locality:
    the fields that the UI reads. */
export type { SubdivisionInformation as CacheableSubdivisionInformation } from '@/api/locality';
/** Connect2_MyBookmarks_IS BookmarkItem: a legacy bookmark (AddBookmarkToCache, the MyBookmarks cache). */
export type BookmarkItem = Schemas['Connect2_MyBookmarks_IS__BookmarkItem'];
