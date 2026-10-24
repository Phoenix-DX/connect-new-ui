import type { CoordinatorDetails, CoordinatorDetailsData, LdmEventDetail, LdmEventHost } from '@/api/event';
import type { HouseholdCoordinates } from '@/api/household';
import { flipHouseholdName } from '@/shared/Connect2_LegacyShared/lib/actions';
import { getLocalityName } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { cleanAddressForMaps } from '@/shared/UBTConnect_Utils/lib/actions';
import type {
  ContactByPhonePopupData,
  ContactPopupData,
  UI_ContactByMessage_WrapperData,
} from '@/shared/UBTConnect_Utils/lib/structures';

/** The variables of ScreenBlock_EventDetail_V2 that the view reads, the outputs of its two data actions, and the pure
    client actions of its flows. The hook useLdmEventDetail keeps the state with useFlowState.
    @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2 */

/** The block variables and the data action outputs. */
export interface LdmEventDetailState {
  /** IsFetching: true until GetEventByEventId answered. */
  isFetching: boolean;
  /** MinBannerHeight: the banner height in px (the banner corrects it in its OnReady). */
  minBannerHeight: number;
  /** HasInformation: GetEventByEventId.Out_HasContent. */
  hasInformation: boolean;
  /** ContactByPhoneData of ContactPopupByPhone. */
  contactByPhoneData: ContactByPhonePopupData;
  /** ContactByMessagePopupData.UI_ContactByMessage_WrapperData of ContactByMessage (its CountryName is not read). */
  contactByMessageData: UI_ContactByMessage_WrapperData;
  /** The contact of the message popup is the coordinator (Event_IsCoordinator). */
  contactByMessageIsCoordinator: boolean;
  /** GetEventByEventId.EventResponse; null until fetched. */
  event: LdmEventDetail | null;
  /** GetEventByEventId.HasFetchError. */
  hasEventFetchError: boolean;
  /** GetCoordinatorDetails outputs; null until fetched (Out_HasContent defaults to True). */
  coordinator: CoordinatorDetailsData | null;
  /** True after the first assignment. The view cache keeps the block variables from then on: a view that the user
      left before it starts again from OnInitialize on a back navigation, and OnReady fetches again. */
  isSaved: boolean;
}

/** A change of the block variables: the assigned variables. */
export type LdmEventDetailPatch = Partial<Omit<LdmEventDetailState, 'isSaved'>>;

/** SquarePhotoPx, MaxPhotoWidth, MaxPhotoHeight and MinBannerHeight defaults. */
export const SQUARE_PHOTO_PX = 45;
export const MAX_PHOTO_WIDTH = 100;
export const MAX_PHOTO_HEIGHT = 55;
const MIN_BANNER_HEIGHT = 210;

/** The variables after OnInitialize of a new visit. */
export const INITIAL_LDM_EVENT_DETAIL_STATE: LdmEventDetailState = {
  isFetching: true,
  minBannerHeight: MIN_BANNER_HEIGHT,
  hasInformation: false,
  contactByPhoneData: {},
  contactByMessageData: {},
  contactByMessageIsCoordinator: false,
  event: null,
  hasEventFetchError: false,
  coordinator: null,
  isSaved: false,
};

/** Assigns the variables of the patch. */
export const ldmEventDetailReducer = (state: LdmEventDetailState, patch: LdmEventDetailPatch): LdmEventDetailState => ({
  ...state,
  ...patch,
  isSaved: true,
});

/** The phone popup data with the popup closed (ShowPopup False). */
export const closedPhonePopup = (data: ContactByPhonePopupData): ContactByPhonePopupData => ({
  ...data,
  ContactPopupData: { ...data.ContactPopupData, ShowPopup: false },
});

/** The message popup data with the popup closed (ShowPopup False). */
export const closedMessagePopup = (data: UI_ContactByMessage_WrapperData): UI_ContactByMessage_WrapperData => ({
  ...data,
  ContactPopupData: { ...data.ContactPopupData, ShowPopup: false },
});

/** OnInitialize of a view that the view cache restored: both contact popups closed. A view left before the first
    assignment starts from the variables of a new visit. */
export function restoreLdmEventDetail(saved: LdmEventDetailState): LdmEventDetailState {
  if (!saved.isSaved) return INITIAL_LDM_EVENT_DETAIL_STATE;
  return {
    ...saved,
    contactByPhoneData: closedPhonePopup(saved.contactByPhoneData),
    contactByMessageData: closedMessagePopup(saved.contactByMessageData),
  };
}

/** The date part ("YYYY-MM-DD") of an OutSystems Date Time text; '' without one. */
export const datePart = (text: string): string => /^\d{4}-\d{2}-\d{2}/.exec(text)?.[0] ?? '';

/** The coordinator is available: GetCoordinatorDetails.Out_HasContent (True until fetched). */
export const isCoordinatorAvailable = (state: LdmEventDetailState): boolean => state.coordinator?.hasContent ?? true;

/** The event has special needs to show to the host. */
export const hasSpecialNeeds = (needs: LdmEventDetail['SpecialNeeds']): boolean =>
  needs.Mobility.length > 0 || needs.Diet.length > 0 || needs.Other.length > 0;

/** The contact popup data of the host (OnHandle_ContactHost_Message and OnHandle_ContactHost_Call). */
export function hostContactPopupData(host: LdmEventHost | undefined): ContactPopupData {
  return {
    ImageURL: host?.SignedURL ?? '',
    Name: flipHouseholdName(host?.HouseholderName ?? ''),
    Locality: getLocalityName(host?.EventLocalityName ?? ''),
    TimezoneName: host?.Timezone.TimezoneLabel ?? '',
    TimezoneOffset: Number(host?.Timezone.OffsetSeconds ?? '0'),
    ShowPopup: true,
    CountryName: host?.CountryName ?? '',
  };
}

/** OnHandle_ContactHost_Message: the message popup with the host's email and mobile phone. */
export function hostMessageData(host: LdmEventHost | undefined): UI_ContactByMessage_WrapperData {
  return { Email: host?.Email ?? '', Phone: host?.MobilePhone ?? '', ContactPopupData: hostContactPopupData(host) };
}

/** OnHandle_ContactHost_Call: the phone popup with the host's phones. Phone = Host.Phone only when the mobile, home and
    work phones are all empty. */
export function hostPhoneCallData(host: LdmEventHost | undefined): ContactByPhonePopupData {
  const mobile = host?.MobilePhone ?? '';
  const home = host?.HomePhone ?? '';
  const work = host?.WorkPhone ?? '';
  return {
    ContactPopupData: hostContactPopupData(host),
    Phone: mobile + home + work === '' ? (host?.Phone ?? '') : '',
    MobilePhone: mobile,
    HomePhone: home,
    WorkPhone: work,
  };
}

/** OnHandle_ContactOrganiser: the coordinator in the message popup (combined email and phone, the LDM logo as the
    image, "Contact" as the action). */
export function organiserMessageData(
  coordinator: CoordinatorDetails | undefined,
  logoURL: string,
): UI_ContactByMessage_WrapperData {
  return {
    Email: coordinator?.CoordinatorEmail ?? '',
    Phone: coordinator?.CoordinatorPhoneNumber ?? '',
    IsComboEmailAndPhone: true,
    ContactPopupData: {
      ImageURL: logoURL,
      IsAvatarImage: false,
      ActionName: 'Contact',
      Name: coordinator?.CoordinatorName ?? '',
      Locality: coordinator?.LocalityName ?? '',
      TimezoneName: coordinator?.Timezone.TimezoneLabel ?? '',
      TimezoneOffset: Number(coordinator?.Timezone.OffsetSeconds ?? '0'),
      ShowPopup: true,
      DisplayContactNumber: coordinator?.CoordinatorPhoneNumber ?? '',
    },
  };
}

/** Arguments of the event NavigateTo_ContactByEmail. */
export interface ContactByEmailArgs {
  avatarURL: string;
  contactName: string;
  contactLocality: string;
  contactCountry: string;
  emailTo: string;
  isCoordinator: boolean;
  subject: string;
  /** Event_Date: TextToDate(Host.EventDate), "YYYY-MM-DD". */
  date: string;
  locality: string;
}

/** OnHandle_ContactByMessage_ClickedEmail: the data of the message popup, Subject = LDMEventName + " - " + the
    coordinator's event date, and the meal's date and locality. */
export function contactByEmailArgs(state: LdmEventDetailState): ContactByEmailArgs {
  const contact = state.contactByMessageData.ContactPopupData ?? {};
  const coordinator = state.coordinator?.coordinatorDetails;
  return {
    avatarURL: contact.ImageURL ?? '',
    contactName: contact.Name ?? '',
    contactLocality: contact.Locality ?? '',
    contactCountry: contact.CountryName ?? '',
    emailTo: state.contactByMessageData.Email ?? '',
    isCoordinator: state.contactByMessageIsCoordinator,
    subject: `${coordinator?.LDMEventName ?? ''} - ${datePart(coordinator?.EventDate ?? '')}`,
    date: datePart(state.event?.Host.EventDate ?? ''),
    locality: state.event?.Host.EventLocalityName ?? '',
  };
}

/** The host has the addresses that the directions need: its own and the main hall's. */
export const hasDirectionsAddresses = (host: LdmEventHost | undefined): host is LdmEventHost =>
  host !== undefined && host.FormattedAddress !== '' && host.MainHallFormattedAddress !== '';

/** The query of NavigateTo_WebMaps in OnHandle_HostCardAddress: Destination = the household coordinates
    (UseCoordinates, both not 0) or the encoded clean host address; Origin = the main hall coordinates
    (MainHallUseLatLong, both not "") or its encoded clean address. */
export function directionsQuery(host: LdmEventHost, coordinates: Required<HouseholdCoordinates>): string {
  const destination =
    coordinates.UseCoordinates && Number(coordinates.Longitude) !== 0 && Number(coordinates.Latitude) !== 0
      ? `${coordinates.Latitude},${coordinates.Longitude}`
      : encodeURIComponent(cleanAddressForMaps(host.FormattedAddress));
  const origin =
    host.MainHallUseLatLong && host.MainHallLongititude !== '' && host.MainHallLatitude !== ''
      ? `${host.MainHallLatitude},${host.MainHallLongititude}`
      : encodeURIComponent(cleanAddressForMaps(host.MainHallFormattedAddress));
  return `&origin=${origin}&destination=${destination}&travelmode=driving`;
}
