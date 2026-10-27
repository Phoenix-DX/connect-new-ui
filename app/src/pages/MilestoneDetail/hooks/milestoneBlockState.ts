import {
  EMPTY_MILESTONE_BLOCK_DATA,
  type MilestoneBlockCallInputs,
  type MilestoneBlockData,
  type MilestoneBlockKind,
  type MilestoneBlockResult,
} from '@/api/event';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import type { UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import { extractChildrenNamesFromCaptions } from '@/pages/MilestoneDetail/actions';
import type { AccommodationHostInputs, ContactPopupData } from './accommodationHostState';

/** The state, the reducer and the settings of the five milestone blocks that the wrapper shows besides
    ScreenBlock_AccommodationHost: ScreenBlock_MealGuest, _MealHost, _MealHelper, _AccommodationGuest and
    _AccommodationHelper (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks). The five blocks have the same variables (MealHost
    has no caption and no message popup) and the same client actions, with the differences in MILESTONE_BLOCKS.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest */

/** The inputs of a block: the same six inputs as ScreenBlock_AccommodationHost. */
export type MilestoneBlockInputs = AccommodationHostInputs;

/** ContactByMessagePopupData (UI_ContactByMessage_WrapperDataTextRecord): the message popup of the host. */
interface ContactByMessagePopupData {
  CountryName: string;
  UI_ContactByMessage_WrapperData: UI_ContactByMessage_WrapperData;
}

/** The block variables and the data action outputs that the view reads. */
interface MilestoneBlockState {
  /** MealData or AccommodationData: the response of the data action. */
  data: MilestoneBlockData;
  isFetchingData: boolean;
  /** The data action's IsDataFetched. */
  isDataFetched: boolean;
  /** The data action's HasData. */
  hasData: boolean;
  isFetchingCaptionData: boolean;
  /** HouseholdCaptions: the children's names of the host household (ExtractChildrenNamesFromCaptions). */
  householdCaptions: string;
  /** ContactByPhoneData: the call popup. */
  contactByPhoneData: ContactByPhonePopupData;
  /** ContactByMessagePopupData: the message popup of the host. */
  contactByMessagePopupData: ContactByMessagePopupData;
}

export type MilestoneBlockAction =
  /** RefreshData (OnReady of MealHost): IsFetchingData = True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch of the data action: the response, IsFetchingCaptionData True (blocks with captions) and
      IsFetchingData False. */
  | { type: 'dataFetched'; result: MilestoneBlockResult; fetchesCaptions: boolean }
  /** OnAfterFetch_GetCaptions: with Success, HouseholdCaptions; then IsFetchingCaptionData = False. */
  | { type: 'captionsFetched'; success: boolean; photobookCaption: string }
  /** The UnknownError handler of RefreshCaptionsData: IsFetchingCaptionData = False. */
  | { type: 'captionsFailed' }
  /** ContactByPhoneData: some attributes of the popup data and the phones. */
  | {
      type: 'contactByPhoneChanged';
      patch: Partial<ContactPopupData>;
      phones?: Partial<Pick<ContactByPhonePopupData, 'Phone' | 'MobilePhone' | 'HomePhone' | 'WorkPhone'>>;
    }
  /** ContactByMessagePopupData: some attributes. */
  | {
      type: 'contactByMessageChanged';
      patch: Partial<ContactPopupData>;
      wrapper?: Partial<Pick<UI_ContactByMessage_WrapperData, 'Email' | 'Phone'>>;
      countryName?: string;
    };

/** The block variables after OnInitialize (record defaults). The HasData default of the data action is True in the
    two accommodation blocks and False in the three meal blocks (the model of each block). */
export const initialMilestoneBlockState = (kind: MilestoneBlockKind): MilestoneBlockState => ({
  data: EMPTY_MILESTONE_BLOCK_DATA,
  isFetchingData: false,
  isDataFetched: false,
  hasData: kind === 'accommodationGuest' || kind === 'accommodationHelper',
  isFetchingCaptionData: false,
  householdCaptions: '',
  contactByPhoneData: {},
  contactByMessagePopupData: { CountryName: '', UI_ContactByMessage_WrapperData: {} },
});

/** OnReady ended in this state: the data action answered and IsFetchingData is False again. A view that the view
    cache restored with it keeps it and makes no call (decision W34). */
export const hasMilestoneBlockData = (state: MilestoneBlockState): boolean =>
  state.isDataFetched && !state.isFetchingData;

/** OnInitialize (MealGuest, MealHelper) and the start of OnReady (AccommodationGuest, AccommodationHelper): both
    popups closed, also on a view that the view cache restored. MealHost has neither step. */
export const closePopups = (state: MilestoneBlockState): MilestoneBlockState => ({
  ...state,
  contactByPhoneData: {
    ...state.contactByPhoneData,
    ContactPopupData: { ...state.contactByPhoneData.ContactPopupData, ShowPopup: false },
  },
  contactByMessagePopupData: {
    ...state.contactByMessagePopupData,
    UI_ContactByMessage_WrapperData: {
      ...state.contactByMessagePopupData.UI_ContactByMessage_WrapperData,
      ContactPopupData: {
        ...state.contactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData,
        ShowPopup: false,
      },
    },
  },
});

export function milestoneBlockReducer(state: MilestoneBlockState, action: MilestoneBlockAction): MilestoneBlockState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'dataFetched':
      return {
        ...state,
        isDataFetched: true,
        hasData: action.result.hasData,
        data: action.result.data,
        isFetchingCaptionData: action.fetchesCaptions ? true : state.isFetchingCaptionData,
        isFetchingData: false,
      };
    case 'captionsFetched':
      return {
        ...state,
        householdCaptions: action.success
          ? extractChildrenNamesFromCaptions(action.photobookCaption)
          : state.householdCaptions,
        isFetchingCaptionData: false,
      };
    case 'captionsFailed':
      return { ...state, isFetchingCaptionData: false };
    case 'contactByPhoneChanged':
      return {
        ...state,
        contactByPhoneData: {
          ...state.contactByPhoneData,
          ...action.phones,
          ContactPopupData: { ...state.contactByPhoneData.ContactPopupData, ...action.patch },
        },
      };
    case 'contactByMessageChanged': {
      const m = state.contactByMessagePopupData;
      return {
        ...state,
        contactByMessagePopupData: {
          CountryName: action.countryName ?? m.CountryName,
          UI_ContactByMessage_WrapperData: {
            ...m.UI_ContactByMessage_WrapperData,
            ...action.wrapper,
            ContactPopupData: { ...m.UI_ContactByMessage_WrapperData.ContactPopupData, ...action.patch },
          },
        },
      };
    }
  }
}

/** The block variables that the data actions send, as they are now. */
export const milestoneBlockCallInputs = (
  kind: MilestoneBlockKind,
  state: MilestoneBlockState,
  inputs: MilestoneBlockInputs,
): MilestoneBlockCallInputs => ({
  IsFetchingData: state.isFetchingData,
  ...(kind === 'mealHost'
    ? {}
    : { IsFetchingCaptionData: state.isFetchingCaptionData, HouseholdCaptions: state.householdCaptions }),
  In_MilestoneId: inputs.In_MilestoneId,
  In_EventId: inputs.In_EventId,
  In_HostId: inputs.In_HostId,
  In_PreloadEventName: inputs.In_PreloadEventName,
  In_PreloadMilestoneName: inputs.In_PreloadMilestoneName,
  In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
});

/** HouseholdName + If(HouseholdSurname <> "", " " + HouseholdSurname, ""): the host name of both popups. */
export const hostPopupName = (householdName: string, householdSurname: string): string =>
  `${householdName}${householdSurname !== '' ? ` ${householdSurname}` : ''}`;

/** The differences between the five blocks (each one from its compiled controller). */
interface MilestoneBlockSettings {
  /** The view name of the block (the view cache key). */
  viewName: string;
  /** RefreshCaptionsData after the data action (every block but MealHost). */
  hasCaptions: boolean;
  /** Both popups closed on a new and a restored view (OnInitialize or OnReady); not in MealHost. */
  closesPopupsOnStart: boolean;
  /** BuildMemberCallData: with a contact, the signed photo when ImageURL is "" (meal blocks); the accommodation
      blocks' BuildCallDataMember has no such step. */
  memberCallSignsPhoto: boolean;
  /** OnHandle_ContactHostByMessage sets IsFetchingTimezone True, then False (meal blocks only). */
  messagePopupSetsFetchingTimezone: boolean;
  /** BuildCallDataHost: GetCacheableSignedImageURL before GetCacheableTimezoneInfo (AccommodationGuest only). */
  hostCallSignsPhotoFirst: boolean;
  /** OnHandle_ContactHelpdesk: the EventName argument of NavigateTo_ContactHelpdesk is In_PreloadEventName
      (MealHost) or In_PreloadMilestoneName (the other blocks). */
  helpdeskEventNameIsEventName: boolean;
}

export const MILESTONE_BLOCKS: Readonly<Record<MilestoneBlockKind, MilestoneBlockSettings>> = {
  mealGuest: {
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_MealGuest',
    hasCaptions: true,
    closesPopupsOnStart: true,
    memberCallSignsPhoto: true,
    messagePopupSetsFetchingTimezone: true,
    hostCallSignsPhotoFirst: false,
    helpdeskEventNameIsEventName: false,
  },
  mealHost: {
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_MealHost',
    hasCaptions: false,
    closesPopupsOnStart: false,
    memberCallSignsPhoto: true,
    messagePopupSetsFetchingTimezone: false,
    hostCallSignsPhotoFirst: false,
    helpdeskEventNameIsEventName: true,
  },
  mealHelper: {
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_MealHelper',
    hasCaptions: true,
    closesPopupsOnStart: true,
    memberCallSignsPhoto: true,
    messagePopupSetsFetchingTimezone: true,
    hostCallSignsPhotoFirst: false,
    helpdeskEventNameIsEventName: false,
  },
  accommodationGuest: {
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest',
    hasCaptions: true,
    closesPopupsOnStart: true,
    memberCallSignsPhoto: false,
    messagePopupSetsFetchingTimezone: false,
    hostCallSignsPhotoFirst: true,
    helpdeskEventNameIsEventName: false,
  },
  accommodationHelper: {
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper',
    hasCaptions: true,
    closesPopupsOnStart: true,
    memberCallSignsPhoto: false,
    messagePopupSetsFetchingTimezone: false,
    hostCallSignsPhotoFirst: false,
    helpdeskEventNameIsEventName: false,
  },
};
