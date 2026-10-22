import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type {
  AvailableUser,
  AvailableUsers,
  AvailableUserWire,
  AvailableUsersRequest,
  CommunityBusinessShareCard,
  HouseholdCardContent,
  LegacyShareObjectInputs,
  ShareObjectResult,
} from './types';

/** Screen inputs from the query string with the original names (P-PARAMS; LegacyShareObject.mvc.js model :77-87):
    Text inputs, "" when absent. */
export function readInputs(params: URLSearchParams): LegacyShareObjectInputs {
  return {
    In_ShareObjectTypeId: params.get('In_ShareObjectTypeId') ?? '',
    In_ObjectId: params.get('In_ObjectId') ?? '',
    In_CustomTitle: params.get('In_CustomTitle') ?? '',
  };
}

/** OS TextToInteger: the integer value of the text, 0 when it is not a number; sent as a Long Integer (text). */
export function textToLongInteger(text: string): string {
  const n = Number.parseInt(text.trim(), 10);
  return Number.isFinite(n) && /^[+-]?\d+$/.test(text.trim()) ? String(n) : '0';
}

/** Block inputs of ScreenBlock_ShareObject: they are its screen variables sent with the aggregate, and any change
    refreshes it (OnParametersChanged → Refresh GetShareObjectTypeById, ScreenBlock_ShareObject.mvc.js :938-967). */
export interface ShareObjectBlockInputs {
  ShareObjectTypeId: string;
  ObjectId: string;
  In_CustomTitle: string;
  User_AgeVisibility: boolean;
}

/** ScreenDataSetGetShareObjectTypeById (aggregate of ScreenBlock_ShareObject, getShareObjectTypeById$AggrRefresh
    :859-874, max 50 records from 0): fetched at start and on every parameter change. Returns the Label of the current
    (first) record, "" when the list is empty (default record). The previous label stays while a refresh runs. */
export function useShareObjectTypeLabel(inputs: ShareObjectBlockInputs) {
  return useQuery({
    queryKey: ['LegacyShareObject', 'ScreenDataSetGetShareObjectTypeById', inputs],
    queryFn: async () => {
      const out = await callAction(
        'Connect2_LegacyShared',
        'ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById',
        { ...inputs },
      );
      return osList(out.List)[0]?.Type_ShareObject.Label ?? '';
    },
    placeholderData: keepPreviousData,
    retry: false,
  });
}

/** GetHouseholdDetails (block OnReady, Household; ScreenBlock_ShareObject.mvc.js :1039-1078): HouseholdId =
    IntegerToLongInteger(TextToInteger(ObjectId)), CheckVisibility False. Only Household_Card_Content is read. */
export async function getHouseholdDetails(objectId: string, userAgeVisibility: boolean): Promise<HouseholdCardContent> {
  const out = await callAction('Connect2_LegacyShared', 'ServiceAPIGetHouseholdDetails', {
    HouseholdId: textToLongInteger(objectId),
    User_AgeVisibility: userAgeVisibility,
    CheckVisibility: false,
  });
  const c = out.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content;
  return {
    name: c.Name,
    familyNames: c.FamilyNames,
    localityName: c.LocalityName,
    countryName: c.CountryName,
  };
}

/** Get_UI_CommunityBusinessShareCard (block OnReady, Campus&Co / OneSchool Global; :1090-1103): In_CommunityBusinessId
    = IntegerToLongInteger(TextToInteger(ObjectId)). Not observed in the capture (Q4). */
export async function getCommunityBusinessShareCard(objectId: string): Promise<CommunityBusinessShareCard> {
  const out = await callAction('Connect2_LegacyShared', 'ServiceAPIGet_UI_CommunityBusinessShareCard', {
    In_CommunityBusinessId: textToLongInteger(objectId),
  });
  const c = out.Out_UI_CommunityBusiness_ShareCard;
  return {
    name: c.Name,
    areasServed: c.AreasServed,
    countryName: c.CountryName,
    photoBucket: c.PhotoBucket,
    photoPath: c.PhotoPath,
    photoType: c.PhotoType,
    photoSignedPath: c.PhotoSignedPath,
  };
}

const toAvailableUser = (w: AvailableUserWire): AvailableUser => ({
  id: w.Id,
  fullName: w.FullName,
  localityName: w.LocalityName,
  countryName: w.CountryName,
  photo: { bucket: w.Photo.Bucket, path: w.Photo.Path, type: w.Photo.Type, signedPath: w.Photo.SignedPath },
});

/** One request of DataActionGetAvailableUsers: the ProfileList variables at the time of the fetch, and a sequence
    number so a Refresh Query with the same variables fetches again. */
export interface AvailableUsersFetch {
  seq: number;
  vars: AvailableUsersRequest;
}

/** DataActionGetAvailableUsers (data action of ProfileList, getAvailableUsers$DataActRefresh :735-760): fetched at start,
    then on each Refresh Query (SearchProfile, Input_SearchFilterOnChange). Sent with the block's screen variables.
    The previous answer stays while a refresh runs (OutSystems keeps IsDataFetched True). */
export function useGetAvailableUsers(fetch: AvailableUsersFetch) {
  return useQuery({
    queryKey: ['LegacyShareObject', 'DataActionGetAvailableUsers', fetch],
    queryFn: async (): Promise<AvailableUsers> => {
      const out = await callAction('Connect2_LegacyShared', 'ProfileList/DataActionGetAvailableUsers', {
        ...fetch.vars,
      });
      return { label: out.Label, items: osList(out.Response.Items).map(toAvailableUser) };
    },
    placeholderData: keepPreviousData,
    retry: false,
  });
}

/** ShareObject (ProfileList DeferredHandleShareObjectList, :766-923): In_UpdateType "", In_UpdateDate the null date
    (DateTime default sent as a Date). A write: mocked only (P-MUTATION). */
export async function shareObject(inputs: {
  shareObjectTypeId: string;
  sharedObjectId: string;
  sharingProfileName: string;
  targetCBUserId: string;
}): Promise<ShareObjectResult> {
  const out = await callAction('Connect2_LegacyShared', 'ActionShareObject', {
    In_ShareObjectTypeId: inputs.shareObjectTypeId,
    In_SharedObjectId: inputs.sharedObjectId,
    In_SharingProfileName: inputs.sharingProfileName,
    In_TargetCBUserId: inputs.targetCBUserId,
    In_UpdateType: '',
    In_UpdateDate: '1900-01-01',
  });
  return { isSuccess: out.IsSuccess, message: out.Message, isAllowed: out.IsAllowed, shareId: out.ShareId };
}
