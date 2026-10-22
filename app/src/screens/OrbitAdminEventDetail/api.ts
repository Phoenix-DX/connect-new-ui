import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import {
  cacheKeyPart,
  getCacheableObjectInBulk,
  getCacheKeyParts,
  type BulkCacheResult,
} from '@/platform/storage/memoryCache';
import type {
  AdminEventDetailInputs,
  AdminEventDetailVariablesWire,
  EventInformation,
  ScanEventQRCodeResult,
  ScannedMember,
  ScannedQRCodeInfoWire,
} from './types';

/* SB = migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail
   .mvc.js; SCR = migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js. */

const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime as a URL input (ServerDataConverter.asString of the null date). */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** The screen inputs under their original names (SCR model :9-46, setInputs :88-112): a missing Long Integer is 0,
    a missing DateTime the null date, a missing Text "" (P-PARAMS). */
export function readInputs(params: URLSearchParams): AdminEventDetailInputs {
  const dateTime = (name: string) => params.get(name) || NULL_DATE_TIME;
  return {
    In_EventId: textToLongInteger(params.get('In_EventId') ?? ''),
    In_EventName: params.get('In_EventName') ?? '',
    In_EventStartDate: dateTime('In_EventStartDate'),
    In_EventEndDate: dateTime('In_EventEndDate'),
    In_EventLocation: params.get('In_EventLocation') ?? '',
    In_EventTypeFriendly: params.get('In_EventTypeFriendly') ?? '',
  };
}

/** DataActionGet_EventInformation (data action of ScreenBlock_AdminEventDetail, on demand: RefreshData, SB ctrl
    :840-870, :1321-1354; dataFetchDependenciesOriginal -1 :774-776). No input parameters; the block variables travel
    as screenData.variables. */
export async function getEventInformation(vars: AdminEventDetailVariablesWire): Promise<EventInformation> {
  const out = await callAction(MODULE, 'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation', vars);
  return { hasQRCode: out.HasQRCode, orbitEventType: out.OrbitEventType };
}

/** GetMemberByMemberId(MemberId) (server action of the block, SB ctrl :783-805): the scanned member. */
export async function getMemberByMemberId(memberId: string): Promise<ScannedMember> {
  const out = await callAction(MODULE, 'ActionGetMemberByMemberId', { MemberId: memberId });
  const r = out.Response;
  return {
    Id: r.Id,
    FirstName: r.FirstName,
    Lastname: r.Lastname,
    LocalityName: r.LocalityName,
    CountryName: r.CountryName,
  };
}

/** The scanning admin as ScannerAdminInfo takes it (from the cached user record, SB ctrl :1008-1016). */
export interface ScannerAdmin {
  MemberId: string;
  FirstName: string;
  LastName: string;
  Locality: string;
  Country: string;
}

/** GetScanEventQRCode(ScannedQRCodeInfo) (server action of the block, SB ctrl :806-839): the check-in of the scanned
    member at the event. ScannedQRCodeInfo as OnHandle_ScanCode builds it (SB ctrl :996-1018): EventId, the scanned
    member's id, names, locality and country, and the admin; the other attributes keep their defaults. */
export async function getScanEventQRCode(
  eventId: string,
  memberId: string,
  member: ScannedMember,
  admin: ScannerAdmin,
): Promise<ScanEventQRCodeResult> {
  const scannedQRCodeInfo: ScannedQRCodeInfoWire = {
    EventId: eventId,
    MilestoneId: '',
    MilestoneType: '',
    ScanDate: NULL_DATE_TIME,
    ScannedUserInformation: {
      MemberId: memberId,
      MemberFirstName: member.FirstName,
      MemberLastName: member.Lastname,
      MemberLocality: member.LocalityName,
      MemberCountry: member.CountryName,
      MemberRole: '',
      MemberGuestRole: '',
      MemberTag: '',
      MemberRowAllocation: '',
      MemberRowAllocations: wireList([]),
      MemberSeatingPlan: '',
    },
    ScannerAdminInfo: {
      AdminMemberId: admin.MemberId,
      AdminFirstName: admin.FirstName,
      AdminLastName: admin.LastName,
      AdminLocality: admin.Locality,
      AdminCountry: admin.Country,
    },
  };
  const out = await callAction(MODULE, 'ActionGetScanEventQRCode', { ScannedQRCodeInfo: scannedQRCodeInfo });
  const r = out.Response;
  return {
    UserRole: r.UserRole,
    Seats: osList(r.Seats).map((s) => ({ MilestoneName: s.MilestoneName, SeatAllocation: s.SeatAllocation })),
    Tag: r.Tag,
    GuestRole: r.GuestRole,
    Status: { Success: r.Status.Success, ErrorMessage: r.Status.ErrorMessage },
  };
}

/* Connect2_LegacyShared GetCacheableSignedImageURL (runtime-sources/Connect2_LegacyShared.controller.js, `LS:<n>`),
   called by OnHandle_ScanCode for the scanned member's photo (SB ctrl :972-976). Same port as HelpersDetail's (the
   action is not in src/shared: Card_MemberInformation callers inject it). */
const SIGNED_IMAGE_TTL_SECONDS = 300; // LS:3796-3800 (TimeToLive default)
const SIGNED_IMAGE_TIMEOUT = 10; // LS:3804-3808 (Timeout default)
const SIGNED_IMAGE_BULK_SIZE = 15; // LS:3726

/** GetCacheableSignedImageURLCacheKey (LS:3862-3936): ImagesHousehold for a household, else ImagesMember. */
const signedImageCacheType = (type: string): string =>
  type === 'Household' ? 'DirectoryCacheType.ImagesHousehold' : 'DirectoryCacheType.ImagesMember';

/** GetBulkSignedImageURL (LS:2816-2890): one GetSignedImagesInBulk call for the waiting keys (Id, Type, Size). */
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
