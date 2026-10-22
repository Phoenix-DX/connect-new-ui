import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type { MemberInformation } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import {
  cacheKeyPart,
  getCacheableObjectInBulk,
  getCacheKeyParts,
  type BulkCacheResult,
} from '@/platform/storage/memoryCache';
import type { HelperData, HelperDetailsVariablesWire, MemberInformationWire } from './types';

/** Module and owner of the data action (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_HelperDetails/DataActionGetHelperDetails). On demand (dataFetchDependentsGraph without a start fetch,
    HB :718-720): OnReady → RefreshData (HB :1309-1342), as captured (calls.md #1). HB =
    analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc.js. */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime / Date: kept as "" for the components (lib/actions.ts formatters treat "" as null). */
const date = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

/** MemberInformationRec → the record Card_MemberInformation takes (same field names). */
const toMember = (w: MemberInformationWire): MemberInformation => ({
  HouseholderId: w.HouseholderId,
  MemberId: w.MemberId,
  LocalityId: w.LocalityId,
  Locality: w.Locality,
  CountryCode: w.CountryCode,
  FirstName: w.FirstName,
  LastName: w.LastName,
  Title: w.Title,
  IsHouseholder: w.IsHouseholder,
  IsSpouse: w.IsSpouse,
  Age: w.Age,
  Phone: w.Phone,
  MiddayMeal: w.MiddayMeal,
  EveningMeal: w.EveningMeal,
  HasGuestArrangements: w.HasGuestArrangements,
  HasOrbitAdminRole: w.HasOrbitAdminRole,
  SignedPhotoURL: w.SignedPhotoURL,
});

/** DataActionGetHelperDetails (HB :726-752): Response.GetHelperHost_Response, the HelperData of OnAfterFetch_GetHelperHost
    (HB :757-785). The server reads the block variables (In_EventId, In_HostId). */
export async function getHelperDetails(vars: HelperDetailsVariablesWire): Promise<HelperData> {
  const out = await callAction(MODULE, 'ScreenBlock_HelperDetails/DataActionGetHelperDetails', vars);
  const r = out.Response.GetHelperHost_Response;
  return {
    EventDetails: {
      Id: r.EventDetails.Id,
      Name: r.EventDetails.Name,
      Location: r.EventDetails.Location,
      StartDate: date(r.EventDetails.StartDate),
      EndDate: date(r.EventDetails.EndDate),
    },
    Helpers: osList(r.Helpers).map((h) => ({
      Role: h.Role,
      MemberInformation: osList(h.MemberInformation).map(toMember),
    })),
  };
}

/* Connect2_LegacyShared GetCacheableSignedImageURL (runtime-sources/Connect2_LegacyShared.controller.js, `LS:<n>`): the
   photo source of Card_MemberInformation (its getSignedImageURL input) and of BuildMemberCallData (HB :1043-1060). */
const SIGNED_IMAGE_TTL_SECONDS = 300; // LS:3796-3800 (TimeToLive default)
const SIGNED_IMAGE_TIMEOUT = 10; // LS:3804-3808 (Timeout default)
const SIGNED_IMAGE_BULK_SIZE = 15; // LS:3726

/** GetCacheableSignedImageURLCacheKey (LS:3862-3936): ImagesHousehold for a household, else ImagesMember
    (static entity Connect2_LegacyShared.directoryCacheType). */
const signedImageCacheType = (type: string): string =>
  type === 'Household' ? 'DirectoryCacheType.ImagesHousehold' : 'DirectoryCacheType.ImagesMember';

/** GetBulkSignedImageURL (LS:2816-2890): one GetSignedImagesInBulk call for the waiting keys (Id, Type, Size), one
    answer per image (key, Error, SignedURL). */
async function getBulkSignedImageURL(cacheKeys: string[]): Promise<BulkCacheResult<string>[]> {
  const parameters = cacheKeys.map((key) => {
    const [Id = '', Type = '', Size = ''] = getCacheKeyParts(key);
    return { Id: textToLongInteger(Id), Type, Size };
  });
  const out = await callAction('Connect2_LegacyShared', 'ActionGetSignedImagesInBulk', {
    BulkSignedImagesParameters: wireList(parameters),
  });
  return osList(out.Results).map((result) => ({
    key: cacheKeyPart(result.Id) + cacheKeyPart(result.Type) + cacheKeyPart(result.Size),
    error: result.Error,
    value: result.SignedURL,
  }));
}

/** GetCacheableSignedImageURL(EntityId, Type, Size) (LS:3692-3837): "" for a null entity id or an empty type; else
    GetCacheableObjectInBulk (TTL 300 s, timeout 10, bulk of 15) and ResultURL: Object || "". */
export async function getCacheableSignedImageURL(entityId: string, type: string, size: string): Promise<string> {
  const id = textToLongInteger(entityId);
  if (id === '0' || type === '') return '';
  const object = await getCacheableObjectInBulk(
    signedImageCacheType(type),
    cacheKeyPart(id) + cacheKeyPart(type) + cacheKeyPart(size),
    SIGNED_IMAGE_TTL_SECONDS,
    SIGNED_IMAGE_TIMEOUT,
    getBulkSignedImageURL,
    SIGNED_IMAGE_BULK_SIZE,
  );
  return object ?? '';
}
