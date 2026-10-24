import type { PhotoURL } from '@/api/event';
import type { MemberContactWithTimezone } from '@/api/message';
import type { ContactPopupData } from '@/shared/UBTConnect_Utils/lib/structures';

/** The contact record of AssembleEventDetail_ContactList and the client logic that AssembleEventDetail_Contact applies
    to one record. Pure; the flows are in useAssembleEventContactList and useAssembleEventContact.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList */

/** AssembleEventContact: MemberContactWithTimezone mapped field by field. */
export interface AssembleEventContact {
  Email: string;
  CountryCode: string;
  LocalityId: string;
  HouseholdId: string;
  Timezone: { TimezoneLabel: string; OffsetSeconds: string };
  ContactDetails: {
    Id: string;
    Name: string;
    Location: string;
    IsDisabled: boolean;
    IsBookmarked: boolean;
    AvatarURL: PhotoURL;
  };
  MobilePhoneNumber: string;
  HomePhoneNumber: string;
  WorkPhoneNumber: string;
  LocalityName: string;
  CountryName: string;
}

/** An AssembleEventContact at its defaults: the loading row of one contact id. */
export const emptyContact = (): AssembleEventContact => ({
  Email: '',
  CountryCode: '',
  LocalityId: '0',
  HouseholdId: '0',
  Timezone: { TimezoneLabel: '', OffsetSeconds: '0' },
  ContactDetails: {
    Id: '0',
    Name: '',
    Location: '',
    IsDisabled: false,
    IsBookmarked: false,
    AvatarURL: { Bucket: '', Path: '', Type: '', SignedURL: '' },
  },
  MobilePhoneNumber: '',
  HomePhoneNumber: '',
  WorkPhoneNumber: '',
  LocalityName: '',
  CountryName: '',
});

/** A GetCacheableMemberContactList record as an AssembleEventContact (the fields the blocks read). */
export const toAssembleEventContact = (c: MemberContactWithTimezone): AssembleEventContact => ({
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
});

/** UnavailableContactValue of AssembleEventDetail_Contact. */
export const UNAVAILABLE = 'Unavailable';

/** The phone of Person_Contact_Options: the first of mobile, home and work that is not empty, else "Unavailable". */
export const contactPhone = (c: AssembleEventContact): string =>
  c.MobilePhoneNumber !== ''
    ? c.MobilePhoneNumber
    : c.HomePhoneNumber !== ''
      ? c.HomePhoneNumber
      : c.WorkPhoneNumber !== ''
        ? c.WorkPhoneNumber
        : UNAVAILABLE;

/** The e-mail of Person_Contact_Options: the e-mail, else "Unavailable". */
export const contactEmail = (c: AssembleEventContact): string => (c.Email !== '' ? c.Email : UNAVAILABLE);

/** The ContactPopupData of the contact (round avatar, name, locality, time zone and country). */
export const contactPopupData = (c: AssembleEventContact): ContactPopupData => ({
  IsAvatarImage: true,
  Name: c.ContactDetails.Name,
  Locality: c.LocalityName,
  TimezoneName: c.Timezone.TimezoneLabel,
  TimezoneOffset: Number(c.Timezone.OffsetSeconds),
  CountryName: c.CountryName,
});
