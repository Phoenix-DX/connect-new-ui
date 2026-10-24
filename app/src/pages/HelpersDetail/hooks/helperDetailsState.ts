import type { HelperData, HelperDetailsCallInputs } from '@/api/event';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';

/** The state of ScreenBlock_HelperDetails and its reducer, with the block variables that the data action sends.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails */

/** The inputs of the block. The screen gives In_PreloadEventName = In_EventName and In_PreloadMilestoneName =
    In_MilestoneName. */
export interface HelperDetailsInputs {
  /** In_EventId (Long Integer, as text). */
  In_EventId: string;
  In_PreloadEventName: string;
  In_PreloadMilestoneName: string;
  In_OrbitMilestoneTypeId: string;
  /** In_HostId (Long Integer, as text): the householder of the hosting household. */
  In_HostId: string;
}

/** ContactPopupData of the call popup (ContactByPhonePopupData.ContactPopupData). */
export type ContactPopupData = NonNullable<ContactByPhonePopupData['ContactPopupData']>;

/** The block variables and the state of the data action that the view reads. The view cache keeps the record. */
export interface HelperDetailsState {
  /** HelperData: the event and its helpers by role. */
  helperData: HelperData;
  isFetchingData: boolean;
  /** IsFetchingPhoneData: no action of the block sets it; it travels with the data action. */
  isFetchingPhoneData: boolean;
  /** ContactByPhoneData: the input of ContactPopup_ByPhone. */
  contactByPhoneData: ContactByPhonePopupData;
  /** GetHelperDetails.IsDataFetched. */
  isDataFetched: boolean;
}

/** The changes of the state, in the order of the assignments of the block actions. */
export type HelperDetailsAction =
  /** RefreshData: IsFetchingData True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_GetHelperHost: the answer of GetHelperDetails. */
  | { type: 'helperDetailsFetched'; helperData: HelperData }
  /** RefreshData: IsFetchingData False. */
  | { type: 'fetchEnded' }
  /** BuildMemberCallData and OnHandle_ContactByPhone_Cancel: some fields of ContactByPhoneData.ContactPopupData. */
  | { type: 'contactPopupChanged'; patch: Partial<ContactPopupData> }
  /** BuildMemberCallData, no contact: ContactByPhoneData.Phone. */
  | { type: 'contactPhoneSet'; phone: string }
  /** BuildMemberCallData, with a contact: the three phone numbers, then the locality, the time zone and the country of
      the popup. */
  | {
      type: 'memberContactFetched';
      phones: Pick<ContactByPhonePopupData, 'MobilePhone' | 'HomePhone' | 'WorkPhone'>;
      patch: Partial<ContactPopupData>;
    };

/** HelperData default: the event record with the null id and no helpers. */
const EMPTY_HELPER_DATA: HelperData = {
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  Helpers: [],
};

/** The block variables before OnReady. */
export const INITIAL_HELPER_DETAILS_STATE: HelperDetailsState = {
  helperData: EMPTY_HELPER_DATA,
  isFetchingData: false,
  isFetchingPhoneData: false,
  contactByPhoneData: {},
  isDataFetched: false,
};

/** Assigns some fields of ContactByPhoneData.ContactPopupData. */
const withPopup = (data: ContactByPhonePopupData, patch: Partial<ContactPopupData>): ContactByPhonePopupData => ({
  ...data,
  ContactPopupData: { ...data.ContactPopupData, ...patch },
});

/** A view that the view cache restores: its saved variables, with the call popup closed. */
export const restoreHelperDetailsState = (saved: HelperDetailsState): HelperDetailsState => ({
  ...saved,
  contactByPhoneData: withPopup(saved.contactByPhoneData, { ShowPopup: false }),
});

/** The block variables that DataActionGetHelperDetails sends, read when the call starts. The record variables
    (OrbitMilestoneType, HelperData, ContactByPhoneData) do not travel. */
export const helperDetailsCallInputs = (
  state: HelperDetailsState,
  inputs: HelperDetailsInputs,
): HelperDetailsCallInputs => ({
  IsFetchingData: state.isFetchingData,
  IsFetchingPhoneData: state.isFetchingPhoneData,
  In_EventId: inputs.In_EventId,
  In_PreloadEventName: inputs.In_PreloadEventName,
  In_PreloadMilestoneName: inputs.In_PreloadMilestoneName,
  In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
  In_HostId: inputs.In_HostId,
});

export function helperDetailsReducer(state: HelperDetailsState, action: HelperDetailsAction): HelperDetailsState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'helperDetailsFetched':
      return { ...state, isDataFetched: true, helperData: action.helperData };
    case 'fetchEnded':
      return { ...state, isFetchingData: false };
    case 'contactPopupChanged':
      return { ...state, contactByPhoneData: withPopup(state.contactByPhoneData, action.patch) };
    case 'contactPhoneSet':
      return { ...state, contactByPhoneData: { ...state.contactByPhoneData, Phone: action.phone } };
    case 'memberContactFetched':
      return {
        ...state,
        contactByPhoneData: withPopup({ ...state.contactByPhoneData, ...action.phones }, action.patch),
      };
  }
}
