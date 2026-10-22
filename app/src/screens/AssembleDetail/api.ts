import { callAction } from '@/api/client/callAction';
import { osDate, osList } from '@/legacy/os/os-wire';
import { getCacheableMemberContactList } from '@/shared/Connect2_LegacyShared/lib/actions';
import type {
  AssembleAttendeeGuest,
  AssembleDetailInputs,
  AssembleEventContact,
  GetAssembleEventResult,
  LocalityDetails,
} from './types';

/* Adapters of AssembleDetail (P-DATA / P-CALLS). The data action is called with its owner block and the block
   variables OutSystems sends with it (EventId, SeriesId, Start, DeviceTimezone, IsDataFetched). */

/** Wire shapes (contract schemas Connect2_Assemble_CS__AssembleAttendeeGuest / __LocalityDetails), the fields read. */
interface GuestWire {
  Id: string;
  Name: string;
  FamilyNames: string;
  Location: string;
  IsBookmarked: boolean;
  IsDisabled: boolean;
  AvatarURL: { Bucket: string; Path: string; Type: string; SignedURL: string };
}
interface LocalityWire {
  LocalityId: string;
  LocalityName: string;
  AssembleAttendeeSubdivisionList: {
    List: {
      Id: string;
      Name: string;
      HouseholdCount: string;
      LocalityId: string;
      SubdivisionHouseholdList: { List: GuestWire[] };
    }[];
  };
}

/** Route inputs under their original names (P-PARAMS); Start keeps the wall-clock text of `dateTimeParam`. */
export function readInputs(params: URLSearchParams): AssembleDetailInputs {
  return {
    EventId: params.get('EventId') ?? '',
    SeriesId: params.get('SeriesId') ?? '',
    Start: (params.get('Start') ?? '').replace(/\.\d+Z?$|Z$/, ''),
    AssembleEventTypeTile: params.get('AssembleEventTypeTile') ?? '',
  };
}

const guest = (g: GuestWire): AssembleAttendeeGuest => ({
  Id: g.Id,
  Name: g.Name,
  FamilyNames: g.FamilyNames,
  Location: g.Location,
  IsBookmarked: g.IsBookmarked,
  IsDisabled: g.IsDisabled,
  AvatarURL: {
    Bucket: g.AvatarURL.Bucket,
    Path: g.AvatarURL.Path,
    Type: g.AvatarURL.Type,
    SignedURL: g.AvatarURL.SignedURL,
  },
});

const localities = (list: { List: LocalityWire[] }): LocalityDetails[] =>
  osList(list).map((l) => ({
    LocalityId: l.LocalityId,
    LocalityName: l.LocalityName,
    AssembleAttendeeSubdivisionList: osList(l.AssembleAttendeeSubdivisionList).map((s) => ({
      Id: s.Id,
      Name: s.Name,
      HouseholdCount: Number(s.HouseholdCount),
      LocalityId: s.LocalityId,
      SubdivisionHouseholdList: osList(s.SubdivisionHouseholdList).map(guest),
    })),
  }));

/** AssembleEventDetail DataActionGetAssembleEvent (sources/…AssembleEventDetail.mvc.js:1653-1722) → AssembleEvent,
    IsNotFound. */
export async function getAssembleEvent(vars: {
  EventId: string;
  SeriesId: string;
  Start: string;
  DeviceTimezone: string;
  IsDataFetched: boolean;
}): Promise<GetAssembleEventResult> {
  const out = await callAction('Connect2_Assemble_MUI', 'AssembleEventDetail/DataActionGetAssembleEvent', vars);
  const s = out.AssembleEvent.AssembleEventSummary;
  return {
    IsNotFound: out.IsNotFound,
    AssembleEvent: {
      AssembleEventSummary: {
        ...s,
        DateTime: osDate(s.DateTime) ?? '',
        BrothersCount: Number(s.BrothersCount),
        SistersCount: Number(s.SistersCount),
        HostingSubdivisionLatitude: Number(s.HostingSubdivisionLatitude),
        HostingSubdivisionLongitude: Number(s.HostingSubdivisionLongitude),
      },
      AssembleAttendeeSubdivisionList: localities(out.AssembleEvent.AssembleAttendeeSubdivisionList),
      AssembleSpecialAttendeeSubdivisionList: localities(out.AssembleEvent.AssembleSpecialAttendeeSubdivisionList),
      AssembleAttendeeSpecialGuestList: osList(out.AssembleEvent.AssembleAttendeeSpecialGuestList).map(guest),
      GSMContactList: osList(out.AssembleEvent.GSMContactList).map(String),
    },
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
