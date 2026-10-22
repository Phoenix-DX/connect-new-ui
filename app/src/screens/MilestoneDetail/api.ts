import { callAction, type ActionInputs, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type { MemberInformation } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import {
  cacheKeyPart,
  getCacheableObjectInBulk,
  getCacheKeyParts,
  type BulkCacheResult,
} from '@/platform/storage/memoryCache';
import type { AccommodationHostResult, AccommodationHostVariablesWire, MemberInformationWire } from './types';

/** Module and owner of the two data actions (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_AccommodationHost/…). Both are on demand (dataFetchDependenciesOriginal -1, SB :1768-1771): OnReady
    refreshes GetAccommodationHost, then Get_Document (SB :2355-2410), as captured (calls.md #1-2). SB =
    analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js. */
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

/** DataActionGetAccommodationHost (SB :1809-1839): Response.GetAccommodationHostResponse (AccommodationData, set by
    OnAfterFetch_GetAccommodationHost SB :2702-2750) and HasData. The server reads the block variables. */
export async function getAccommodationHost(vars: AccommodationHostVariablesWire): Promise<AccommodationHostResult> {
  const out = await callAction(MODULE, 'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost', vars);
  const r = out.Response.GetAccommodationHostResponse;
  return {
    hasData: out.HasData,
    accommodationData: {
      MilestoneId: r.MilestoneId,
      MilestoneType: r.MilestoneType,
      MilestoneDateTime: date(r.MilestoneDateTime),
      MilestoneTitle: r.MilestoneTitle,
      EventDetails: {
        Id: r.EventDetails.Id,
        Name: r.EventDetails.Name,
        Location: r.EventDetails.Location,
        StartDate: date(r.EventDetails.StartDate),
        EndDate: date(r.EventDetails.EndDate),
      },
      SpecialNeedsCount: osList(r.SpecialNeeds).length,
      Helpers: osList(r.Helpers).map((h) => ({
        Role: h.Role,
        MemberInformation: osList(h.MemberInformation).map(toMember),
      })),
      Rooms: osList(r.Rooms).map((room) => ({
        RoomId: room.RoomId,
        RoomName: room.RoomName,
        RoomInformation: { ...room.RoomInformation },
        Guests: osList(room.Guests).map((g) => ({
          HouseholderId: g.HouseholderId,
          HouseholdName: g.HouseholdName,
          LocalityId: g.LocalityId,
          Locality: g.Locality,
          CountryCode: g.CountryCode,
          DisplayDot: g.DisplayDot,
          MemberInformation: osList(g.MemberInformation).map(toMember),
        })),
      })),
    },
  };
}

/** DataActionGet_Document (SB :1781-1808): the accommodation host document (Get_DocumentOnAfterFetch SB :1840-1860:
    HasDocument = DocumentURL <> ""). */
export async function get_Document(
  vars: AccommodationHostVariablesWire,
): Promise<{ DocumentURL: string; DocumentName: string }> {
  const out = await callAction(MODULE, 'ScreenBlock_AccommodationHost/DataActionGet_Document', vars);
  return { ...out.AccommodationHostDocument };
}

/* Connect2_LegacyShared GetCacheableSignedImageURL (runtime-sources/Connect2_LegacyShared.controller.js, `LS:<n>`), the
   photo source of Card_MemberInformation (its getSignedImageURL input). Captured call #3: one
   Connect2_LegacyShared/ActionGetSignedImagesInBulk for the guests' photos. */
const SIGNED_IMAGE_TTL_SECONDS = 300; // LS:3796-3800 (TimeToLive default)
const SIGNED_IMAGE_TIMEOUT = 10; // LS:3804-3808 (Timeout default)
const SIGNED_IMAGE_BULK_SIZE = 15; // LS:3726

/** GetCacheableSignedImageURLCacheKey (LS:3862-3936): ImagesHousehold for a household, else ImagesMember
    (static entity Connect2_LegacyShared.directoryCacheType). */
const signedImageCacheType = (type: string): string =>
  type === 'Household' ? 'DirectoryCacheType.ImagesHousehold' : 'DirectoryCacheType.ImagesMember';

/** GetBulkSignedImageURL (LS:2816-2890) with GetBulkSignedImageParameters: one GetSignedImagesInBulk call for the
    waiting keys (Id, Type, Size), one answer per image (key, Error, SignedURL). */
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

/** Block variables ScreenBlock_MilestoneWrapper sends with DataActionGetGmpMilestoneHost (screenData.variables). */
type GmpMilestoneHostPath = PathOf<
  'Connect2_OrbitMobile_MUI',
  'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost'
>;
export type MilestoneWrapperVariablesWire = ActionInputs<GmpMilestoneHostPath>;
/** Its answer: GetGmpMilestoneHostResponse (MilestoneType, MilestoneTitle, HostId, Status). */
export type GmpMilestoneHostResponse = ActionOutputs<GmpMilestoneHostPath>['Response'];

/** DataActionGetGmpMilestoneHost (MW :1120-1160, screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost; on demand, dataFetchDependenciesOriginal -1): Response.
    MW = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js. */
export async function getGmpMilestoneHost(vars: MilestoneWrapperVariablesWire): Promise<GmpMilestoneHostResponse> {
  const out = await callAction(MODULE, 'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost', vars);
  return out.Response;
}
