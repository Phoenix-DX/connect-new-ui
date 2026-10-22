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
  GuestArrangementsResult,
  GuestArrangementsVariablesWire,
  MilestoneTransportItem,
  MilestoneTransportScreenWire,
} from './types';

/** Module and owner of the data action (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_GuestArrangements/DataActionGetGuestArrangements). On demand (dataFetchActionNames without a start
    fetch, SB :1463): OnReady → RefreshData (SB :1549-1582). SB = analysis/sources/Connect2_OrbitMobile_MUI.
    Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc.js. */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime / Date: kept as "" for the components (the formatters treat "" as null). */
const dateTime = (value: string): string => (value === '' || value.startsWith('1900-01-01') ? '' : value);

const transport = (w: MilestoneTransportScreenWire): MilestoneTransportItem => {
  const t = w.MilestoneTransport;
  return {
    MilestoneTransport: {
      Title: t.Title,
      Type: t.Type,
      TravelIdentifier: t.TravelIdentifier,
      Notes: t.Notes,
      SequenceNo: t.SequenceNo,
      MilestoneInfo: {
        DepartureLocation: t.MilestoneInfo.DepartureLocation,
        ArrivalLocation: t.MilestoneInfo.ArrivalLocation,
        MilestoneStartDateTime: dateTime(t.MilestoneInfo.MilestoneStartDateTime),
        MilestoneEndDateTime: dateTime(t.MilestoneInfo.MilestoneEndDateTime),
      },
    },
    OrbitMilestoneType: {
      IconTransportDeparture: w.OrbitMilestoneType.IconTransportDeparture,
      IconTransportArrival: w.OrbitMilestoneType.IconTransportArrival,
    },
  };
};

/** DataActionGetGuestArrangements (SB :1435-1460): Response (GetGuestArrangements_ScreenRec), which
    OnAfterFetch_GetGuestArrangements copies into GuestArrangementsData (SB :1521-1548), and HasData (the view's data
    branch and the footer, SB :335, :1342). The server reads the block variables (In_MemberId, In_EventId, …). */
export async function getGuestArrangements(vars: GuestArrangementsVariablesWire): Promise<GuestArrangementsResult> {
  const out = await callAction(MODULE, 'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements', vars);
  const r = out.Response;
  return {
    HasData: out.HasData,
    Response: {
      MemberId: r.MemberId,
      Title: r.Title,
      FirstName: r.FirstName,
      LastName: r.LastName,
      EventDetails: {
        Id: r.EventDetails.Id,
        Name: r.EventDetails.Name,
        Location: r.EventDetails.Location,
        StartDate: dateTime(r.EventDetails.StartDate),
        EndDate: dateTime(r.EventDetails.EndDate),
      },
      SpecialNeeds: osList(r.SpecialNeeds).map((s) => ({
        HouseholderId: s.HouseholderId,
        MemberId: s.MemberId,
        LocalityId: s.LocalityId,
        Title: s.Title,
        FirstName: s.FirstName,
        LastName: s.LastName,
        SignedPhotoURL: s.SignedPhotoURL,
        SpecialNeeds: osList(s.SpecialNeeds).map((n) => ({ Category: n.Category, Type: n.Type, Notes: n.Notes })),
      })),
      ArrivalDetails: osList(r.ArrivalDetails).map(transport),
      MealDetails: osList(r.MealDetails).map((m) => ({
        MilestoneDateTime: dateTime(m.MilestoneDateTime),
        MiddayMeal: m.MiddayMeal,
        EveningMeal: m.EveningMeal,
      })),
      DepartureDetails: osList(r.DepartureDetails).map(transport),
    },
  };
}

/* Connect2_LegacyShared GetCacheableSignedImageURL (runtime-sources/Connect2_LegacyShared.controller.js, `LS:<n>`): the
   photo source of Card_MemberInformation (its getSignedImageURL input), as in HelpersDetail. */
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
