import { getCacheableMemberContactList } from '@/shared/Connect2_LegacyShared/lib/actions';
import type { AssembleDetailInputs, AssembleEventContact } from './types';

/* Adapters of AssembleDetail (P-DATA / P-CALLS). DataActionGetAssembleEvent (sent with the block variables EventId,
   SeriesId, Start, DeviceTimezone, IsDataFetched) is in the domain api/event. This module keeps the name that the
   screen uses. */
export { fetchAssembleEvent as getAssembleEvent } from '@/api/event';

/** Route inputs under their original names (P-PARAMS); Start keeps the wall-clock text of `dateTimeParam`. */
export function readInputs(params: URLSearchParams): AssembleDetailInputs {
  return {
    EventId: params.get('EventId') ?? '',
    SeriesId: params.get('SeriesId') ?? '',
    Start: (params.get('Start') ?? '').replace(/\.\d+Z?$|Z$/, ''),
    AssembleEventTypeTile: params.get('AssembleEventTypeTile') ?? '',
  };
}

/** GetCacheableMemberContactList(AssembleEventContactIdList) → AssembleEventContactList (ContactList OnReady,
    sources/…ContactList.mvc.js:574-626). */
export async function getAssembleEventContacts(memberIds: readonly string[]): Promise<AssembleEventContact[]> {
  const list = await getCacheableMemberContactList(memberIds);
  return list.map((c) => ({
    Email: c.Email,
    CountryCode: c.CountryCode,
    LocalityId: c.LocalityId,
    HouseholdId: c.HouseholdId,
    Timezone: { TimezoneLabel: c.Timezone.TimezoneLabel, OffsetSeconds: c.Timezone.OffsetSeconds },
    ContactDetails: {
      Id: c.ContactDetails.Id,
      Name: c.ContactDetails.Name,
      Location: c.ContactDetails.Location,
      IsDisabled: c.ContactDetails.IsDisabled,
      IsBookmarked: c.ContactDetails.IsBookmarked,
      AvatarURL: {
        Bucket: c.ContactDetails.AvatarURL.Bucket,
        Path: c.ContactDetails.AvatarURL.Path,
        Type: c.ContactDetails.AvatarURL.Type,
        SignedURL: c.ContactDetails.AvatarURL.SignedURL,
      },
    },
    MobilePhoneNumber: c.MobilePhoneNumber,
    HomePhoneNumber: c.HomePhoneNumber,
    WorkPhoneNumber: c.WorkPhoneNumber,
    LocalityName: c.LocalityName,
    CountryName: c.CountryName,
  }));
}
