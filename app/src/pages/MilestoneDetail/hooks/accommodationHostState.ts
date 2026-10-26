import type {
  AccommodationData,
  AccommodationHostCallInputs,
  AccommodationHostDocument,
  AccommodationHostResult,
} from '@/api/event';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

/** The state, the reducer and the client actions of ScreenBlock_AccommodationHost (the client actions are those of
    Connect2_OrbitMobile_MUI). Dates are OutSystems values as text; "" is the null date.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost */

/** The inputs of the block. */
export interface AccommodationHostInputs {
  In_MilestoneId: string;
  In_EventId: string;
  In_HostId: string;
  In_PreloadEventName: string;
  In_PreloadMilestoneName: string;
  In_OrbitMilestoneTypeId: string;
}

/** ContactPopupData of the call popup. */
export type ContactPopupData = NonNullable<ContactByPhonePopupData['ContactPopupData']>;

/** The block variables and the data action outputs that the view reads. */
export interface AccommodationHostState {
  /** AccommodationData: GetAccommodationHost.Response.GetAccommodationHostResponse. */
  accommodationData: AccommodationData;
  isFetchingData: boolean;
  isLoadingDocument: boolean;
  hasDocument: boolean;
  /** Get_Document.AccommodationHostDocument (DocumentURL, DocumentName). */
  document: AccommodationHostDocument;
  /** ContactByPhoneData: the call popup. */
  contactByPhoneData: ContactByPhonePopupData;
  /** GetAccommodationHost.IsDataFetched. */
  isDataFetched: boolean;
  /** GetAccommodationHost.HasData. */
  hasData: boolean;
}

export type AccommodationHostAction =
  /** OnReady: IsFetchingData = True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch of GetAccommodationHost: AccommodationData, IsDataFetched and HasData. */
  | { type: 'accommodationHostFetched'; result: AccommodationHostResult }
  /** Get_DocumentOnAfterFetch: the document, HasDocument = DocumentURL <> "". */
  | { type: 'documentFetched'; document: AccommodationHostDocument }
  /** OnReady, after both refreshes: IsFetchingData = False. */
  | { type: 'fetchFinished' }
  /** IsLoadingDocument. */
  | { type: 'documentLoadingChanged'; isLoadingDocument: boolean }
  /** ContactByPhoneData.ContactPopupData: some attributes. */
  | { type: 'contactPopupChanged'; patch: Partial<ContactPopupData> }
  /** ContactByPhoneData.Phone. */
  | { type: 'contactPhoneSet'; phone: string }
  /** The first member contact of GetCacheableMemberContactList: the three phones and the popup attributes. */
  | {
      type: 'memberContactFetched';
      phones: Pick<ContactByPhonePopupData, 'MobilePhone' | 'HomePhone' | 'WorkPhone'>;
      patch: Partial<ContactPopupData>;
    };

const EMPTY_ACCOMMODATION: AccommodationData = {
  MilestoneId: '',
  MilestoneType: '',
  MilestoneDateTime: '',
  MilestoneTitle: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  SpecialNeedsCount: 0,
  Helpers: [],
  Rooms: [],
};

/** The block variables after OnInitialize (record defaults). */
export const INITIAL_ACCOMMODATION_HOST_STATE: AccommodationHostState = {
  accommodationData: EMPTY_ACCOMMODATION,
  isFetchingData: false,
  isLoadingDocument: false,
  hasDocument: false,
  document: { DocumentURL: '', DocumentName: '' },
  contactByPhoneData: {},
  isDataFetched: false,
  hasData: false,
};

/** OnReady ended in this state: GetAccommodationHost answered and IsFetchingData is False again. A view that the view
    cache restored with it keeps it and makes no call. */
export const hasAccommodationHostData = (state: AccommodationHostState): boolean =>
  state.isDataFetched && !state.isFetchingData;

const withPopup = (state: AccommodationHostState, patch: Partial<ContactPopupData>): ContactByPhonePopupData => ({
  ...state.contactByPhoneData,
  ContactPopupData: { ...state.contactByPhoneData.ContactPopupData, ...patch },
});

export function accommodationHostReducer(
  state: AccommodationHostState,
  action: AccommodationHostAction,
): AccommodationHostState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'accommodationHostFetched':
      return {
        ...state,
        isDataFetched: true,
        hasData: action.result.hasData,
        accommodationData: action.result.accommodationData,
      };
    case 'documentFetched':
      return { ...state, document: action.document, hasDocument: action.document.DocumentURL !== '' };
    case 'fetchFinished':
      return { ...state, isFetchingData: false };
    case 'documentLoadingChanged':
      return { ...state, isLoadingDocument: action.isLoadingDocument };
    case 'contactPopupChanged':
      return { ...state, contactByPhoneData: withPopup(state, action.patch) };
    case 'contactPhoneSet':
      return { ...state, contactByPhoneData: { ...state.contactByPhoneData, Phone: action.phone } };
    case 'memberContactFetched':
      return {
        ...state,
        contactByPhoneData: {
          ...state.contactByPhoneData,
          ...action.phones,
          ContactPopupData: { ...state.contactByPhoneData.ContactPopupData, ...action.patch },
        },
      };
  }
}

/** The block variables that both data actions send (screenData.variables). */
export const accommodationHostCallInputs = (
  state: AccommodationHostState,
  inputs: AccommodationHostInputs,
): AccommodationHostCallInputs => ({
  IsFetchingData: state.isFetchingData,
  IsLoadingDocument: state.isLoadingDocument,
  HasDocument: state.hasDocument,
  In_MilestoneId: inputs.In_MilestoneId,
  In_EventId: inputs.In_EventId,
  In_HostId: inputs.In_HostId,
  In_PreloadEventName: inputs.In_PreloadEventName,
  In_PreloadMilestoneName: inputs.In_PreloadMilestoneName,
  In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
});

/** GetContactHelpdeskSubject_Milestone(MilestoneTypeId, EventName, MilestoneName, DateTime, Location) →
    Out_FormattedSubject: EventName [+ " - " when a name, location or date follows], MilestoneName
    [+ " - " when a location or date follows], Location [+ " - " when a date follows], then
    GetFormattedDateTimeById(MilestoneTypeId, DateTime). */
export function getContactHelpdeskSubject_Milestone(
  milestoneTypeId: string,
  eventName: string,
  milestoneName: string,
  dateTime: string,
  location: string,
): string {
  const hasDate = dateTime !== '';
  const event =
    eventName !== '' ? `${eventName}${milestoneName !== '' || location !== '' || hasDate ? ' - ' : ''}` : '';
  const milestone = milestoneName !== '' ? `${milestoneName}${location !== '' || hasDate ? ' - ' : ''}` : '';
  const place = location !== '' ? `${location}${hasDate ? ' - ' : ''}` : '';
  return `${event}${milestone}${place}${getFormattedDateTimeById(milestoneTypeId, dateTime)}`;
}

/** GetFormattedStringFromHelperType(In_HelperType): first letter kept, the rest lower case, + "/s". */
export const getFormattedStringFromHelperType = (helperType: string): string =>
  `${helperType.substring(0, 1)}${helperType.substring(1).toLowerCase()}/s`;

/** GetSkeletonLoadingIdFromMilestoneTypeId(MilestoneTypeId): guest milestones → MilestoneDetailGuest;
    host milestones and helper → MilestoneDetailHost; transport → TransportDetail; otherwise 0. */
export function getSkeletonLoadingIdFromMilestoneTypeId(milestoneTypeId: string): number {
  const T = OrbitMilestoneType;
  const id = milestoneTypeId;
  if (id === T.AccommodationGuest || id === T.MealGuest) return OrbitSkeletonLoading.MilestoneDetailGuest;
  if (id === T.AccommodationHost || id === T.MealHost || id === T.Helper)
    return OrbitSkeletonLoading.MilestoneDetailHost;
  if (id === T.Boat || id === T.Vehicle || id === T.Train || id === T.Flight)
    return OrbitSkeletonLoading.TransportDetail;
  return 0;
}
