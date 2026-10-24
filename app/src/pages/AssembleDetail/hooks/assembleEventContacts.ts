import type { PhotoURL } from '@/api/event';
import type { MemberContactWithTimezone } from '@/api/message';
import type { ContactByPhonePopupData, ContactPopupData } from '@/lib/ubtConnectUtils/structures';

/** The contact record of AssembleEventDetail_ContactList, the variables of both blocks with their reducers, and the
    client logic that AssembleEventDetail_Contact applies to one record. Pure; the flows are in
    useAssembleEventContactList and useAssembleEventContact.
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

/** The variables of the block AssembleEventDetail_ContactList. The view cache keeps them. */
export interface AssembleEventContactListState {
  /** AssembleEventContactList. */
  contacts: AssembleEventContact[];
  /** IsDataFetched. */
  isDataFetched: boolean;
}

/** The assignment of the block AssembleEventDetail_ContactList: GetCacheableMemberContactList answered. */
export type AssembleEventContactListAction = { type: 'contactsFetched'; contacts: AssembleEventContact[] };

/** The variables of a new visit: OnReady appends one empty contact per id (the loading rows), IsDataFetched False. */
export const initialAssembleEventContactListState = (contactIds: readonly string[]): AssembleEventContactListState => ({
  contacts: contactIds.map(emptyContact),
  isDataFetched: false,
});

/** AssembleEventContactList = the contacts, then IsDataFetched = True. */
export const assembleEventContactListReducer = (
  _state: AssembleEventContactListState,
  action: AssembleEventContactListAction,
): AssembleEventContactListState => ({ contacts: action.contacts, isDataFetched: true });

/** The variables of the block AssembleEventDetail_Contact. The view cache keeps them. */
export interface AssembleEventContactState {
  /** ContactPopupData of ContactByMessage_Wrapper. */
  contactPopupData: ContactPopupData;
  /** CallPopup of ContactPopup_ByPhone. */
  callPopup: ContactByPhonePopupData;
}

/** The assignments of the block AssembleEventDetail_Contact. */
export type AssembleEventContactAction =
  /** ContactPopupData = the record. */
  | { type: 'contactPopupDataSet'; contactPopupData: ContactPopupData }
  /** ContactPopupData.ShowPopup = False. */
  | { type: 'contactPopupClosed' }
  /** CallPopup = the record. */
  | { type: 'callPopupSet'; callPopup: ContactByPhonePopupData }
  /** CallPopup.ContactPopupData.ShowPopup = False. */
  | { type: 'callPopupClosed' };

/** The variables of a new visit (record defaults). */
export const INITIAL_ASSEMBLE_EVENT_CONTACT_STATE: AssembleEventContactState = { contactPopupData: {}, callPopup: {} };

/** The variables after an assignment. */
export function assembleEventContactReducer(
  state: AssembleEventContactState,
  action: AssembleEventContactAction,
): AssembleEventContactState {
  switch (action.type) {
    case 'contactPopupDataSet':
      return { ...state, contactPopupData: action.contactPopupData };
    case 'contactPopupClosed':
      return { ...state, contactPopupData: { ...state.contactPopupData, ShowPopup: false } };
    case 'callPopupSet':
      return { ...state, callPopup: action.callPopup };
    case 'callPopupClosed':
      return {
        ...state,
        callPopup: { ...state.callPopup, ContactPopupData: { ...state.callPopup.ContactPopupData, ShowPopup: false } },
      };
  }
}

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
