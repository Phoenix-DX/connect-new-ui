import type { EventEmailCoordinatorData, UserContactRequest } from '@/api/message';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';
import type { ContactByPhonePopupData } from '@/shared/UBTConnect_Utils/lib/structures';
import {
  ApplicationEvents_Directory_EmailHousehold,
  ApplicationEvents_LDM,
} from '@/pages/LDM_Email_V2/components/actions';
import type { EventEmailInputs } from '@/pages/LDM_Email_V2/inputs';

/** @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2
    The variables of the LDM event e-mail block, the reducer of their assignments and the pure rules of its flows.
    Pure: no React, no call. useLdmEventEmail runs the flows with them. */

/** The validation message of an empty or blank Message. */
export const REQUIRED = 'Required Field!';
/** The Info message of a Submit without a network connection. */
export const NO_NETWORK = 'You cannot send emails without a network connection.';
/** The success message, shown 500 ms after the send (after the transition to the previous screen). */
export const MESSAGE_SENT = 'Your message has been sent.';
/** The Info message of "or Call us Directly" when the coordinator has no phone number. */
export const NO_PHONE = 'Phone number is not available';
/** The image of the call popup. */
export const LDM_LOGO = 'img/Connect2_OrbitMobile_MUI.LDM_Logo.svg';

/** The block variables that the view and the flows read. IsSending, CancelPopupBox and DefaultEventName are set by
    the flows but never read by the view, so they are not kept. */
export interface LdmEventEmailState {
  message: string;
  /** The event name and the event date: "<EventName> - <YYYY-MM-DD>". */
  subject: string;
  /** AppManager_GetCachedUserInfo, assigned by OnReady after the fetch. */
  userInfo: AppManager_CachedUserInfoRec | null;
  isFetching: boolean;
  callPopupData: ContactByPhonePopupData;
  /** The GetCoordinatorDetails outputs: null until fetched (the record defaults have Out_HasContent True). */
  coordinator: EventEmailCoordinatorData | null;
  /** GetCoordinatorDetails.HasFetchError. */
  hasFetchError: boolean;
}

/** OnInitialize: every variable at its default. */
export const INITIAL_LDM_EVENT_EMAIL_STATE: LdmEventEmailState = {
  message: '',
  subject: '',
  userInfo: null,
  isFetching: false,
  callPopupData: {},
  coordinator: null,
  hasFetchError: false,
};

/** OnInitialize of a view that the view cache restored. OutSystems clears Message there; the block of this app is not
    kept in the view cache, so a back navigation starts from the defaults, as a new visit does. */
export const restoreLdmEventEmailState = (): LdmEventEmailState => INITIAL_LDM_EVENT_EMAIL_STATE;

/** The GetCoordinatorDetails outputs with the record defaults, for OnReady's "Has null eventId?" branch. */
export function emptyCoordinatorDetailsData(): EventEmailCoordinatorData {
  return {
    coordinatorDetails: {
      CoordinatorName: '',
      CoordinatorEmail: '',
      CoordinatorPhoneNumber: '',
      Latitude: '',
      Longitude: '',
      Address: '',
      LocalityName: '',
      LocalityId: '0',
      CountryCode: '',
      CountryName: '',
      EventDate: '1900-01-01T00:00:00',
      LDMEventName: '',
      Timezone: { TimezoneLabel: '', OffsetSeconds: '0' },
    },
    hasContent: true,
    eventName: '',
    eventDateText: '1900-01-01',
  };
}

/** The assignments of the block flows. */
export type LdmEventEmailAction =
  /** RefreshGetCoordinatorDetails: IsFetching = True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_GetCoordinatorDetails: the outputs, and Subject = EventName + " - " + the event date. */
  | { type: 'fetched'; coordinator: EventEmailCoordinatorData }
  /** A failed GetCoordinatorDetails: HasFetchError = True. */
  | { type: 'fetchFailed' }
  /** OnReady, "Has null eventId?" True: Out_HasContent = False. */
  | { type: 'noContent' }
  /** OnReady after the fetch: UserInfo = AppManager_GetCachedUserInfo. */
  | { type: 'userInfoAssigned'; userInfo: AppManager_CachedUserInfoRec }
  /** OnReady and the TryAgain handler after the fetch: IsFetching = False. */
  | { type: 'fetchEnded' }
  /** TextArea_Message changed. */
  | { type: 'messageChanged'; message: string }
  /** OnSubmit_Email: Message = "" (a blank message, or after the send). */
  | { type: 'messageCleared' }
  /** OnClick_Call with a phone number: the call popup data of the coordinator, ShowPopup = True. */
  | { type: 'callPopupOpened'; imageURL: string }
  /** OnHandle_ContactByPhonePopupEvent_Cancel (and _Call): ShowPopup = False. */
  | { type: 'callPopupClosed' };

/** The coordinator record of the outputs (undefined before the fetch). */
const coordinatorDetailsOf = (state: LdmEventEmailState) => state.coordinator?.coordinatorDetails;

export function ldmEventEmailReducer(state: LdmEventEmailState, action: LdmEventEmailAction): LdmEventEmailState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetching: true };
    case 'fetched':
      return {
        ...state,
        coordinator: action.coordinator,
        hasFetchError: false,
        subject: `${action.coordinator.eventName} - ${action.coordinator.eventDateText}`,
      };
    case 'fetchFailed':
      return { ...state, hasFetchError: true };
    case 'noContent':
      return { ...state, coordinator: { ...(state.coordinator ?? emptyCoordinatorDetailsData()), hasContent: false } };
    case 'userInfoAssigned':
      return { ...state, userInfo: action.userInfo };
    case 'fetchEnded':
      return { ...state, isFetching: false };
    case 'messageChanged':
      return { ...state, message: action.message };
    case 'messageCleared':
      return { ...state, message: '' };
    case 'callPopupOpened': {
      const cd = coordinatorDetailsOf(state);
      const phone = coordinatorPhone(state);
      const data = state.callPopupData;
      return {
        ...state,
        callPopupData: {
          ...data,
          Phone: phone,
          ContactPopupData: {
            ...data.ContactPopupData,
            ImageURL: action.imageURL,
            IsAvatarImage: false,
            Name: (cd?.CoordinatorName ?? '').trim(),
            Locality: cd?.LocalityName ?? '',
            TimezoneName: cd?.Timezone.TimezoneLabel ?? '',
            TimezoneOffset: Number(cd?.Timezone.OffsetSeconds ?? '0'),
            ShowPopup: true,
            DisplayContactNumber: phone,
            CountryName: cd?.CountryName ?? '',
          },
        },
      };
    }
    case 'callPopupClosed': {
      const data = state.callPopupData;
      return { ...state, callPopupData: { ...data, ContactPopupData: { ...data.ContactPopupData, ShowPopup: false } } };
    }
  }
}

/** The ids of the form widgets of the block instance (`$b1` → `b1-…`). */
export function ldmEventEmailIds(blockId: string) {
  const scope = blockId.replace('$', '');
  return {
    scope,
    form: `${scope}-ContactOrganiser_Form`,
    inputFrom: `${scope}-Input_From`,
    inputTo: `${scope}-Input_To`,
    subject: `${scope}-TextArea_Subject`,
    message: `${scope}-TextArea_Message`,
  };
}

/** Trim(Message) <> "": the message is valid, and a navigation asks before it discards the message. */
export const hasTypedMessage = (state: LdmEventEmailState): boolean => state.message.trim() !== '';

/** The coordinator's phone number ("" before the fetch). */
export const coordinatorPhone = (state: LdmEventEmailState): string =>
  coordinatorDetailsOf(state)?.CoordinatorPhoneNumber ?? '';

/** Out_HasContent (True before the fetch: the record default). */
export const hasContent = (state: LdmEventEmailState): boolean => state.coordinator?.hasContent ?? true;

/** The UserContactRequest that EventContact sends: the coordinator as the recipient, the cached user as the sender. */
export function eventContactRequest(state: LdmEventEmailState): UserContactRequest {
  const cd = coordinatorDetailsOf(state);
  const user = state.userInfo;
  return {
    EmailTo: cd?.CoordinatorEmail ?? '',
    ContactMember: cd?.CoordinatorName ?? '',
    FirstNameSender: user?.FirstName ?? '',
    LastNameSender: user?.LastName ?? '',
    Subject: state.subject,
    Message: state.message,
    FirstName: cd?.CoordinatorName ?? '',
    EmailFrom: user?.Email ?? '',
    SenderPhone: user?.Phone ?? '',
    SenderLocality: user?.Locality ?? '',
    SenderCountry: '',
  };
}

/** The EmailEvent record of the application event, serialized: {EmailTo, NameOfSender = LastName + ", " + FirstName}. */
export function emailEventAttachment(state: LdmEventEmailState): string {
  const user = state.userInfo;
  return JSON.stringify({
    EmailTo: coordinatorDetailsOf(state)?.CoordinatorEmail ?? '',
    NameOfSender: `${user?.LastName ?? ''}, ${user?.FirstName ?? ''}`,
  });
}

/** The application event of a sent e-mail: HostMessageGuest, else ContactEventOrganiser, else the Directory
    EmailHousehold event. */
export function emailApplicationEventId(inputs: EventEmailInputs): string {
  if (inputs.In_IsMessageGuest) return ApplicationEvents_LDM.HostMessageGuest;
  if (inputs.In_IsContactOrganiser) return ApplicationEvents_LDM.ContactEventOrganiser;
  return ApplicationEvents_Directory_EmailHousehold;
}
