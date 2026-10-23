import type {
  ContactUsCallInputs,
  ContactUsCountriesCallInputs,
  ContactUsForm,
  CountryName,
  LocalityTimezone,
} from '@/api/message';
import type { ContactUsDetailsInputs } from '@/pages/ContactUsDetails/inputs';
import { Type_ContactSubject } from '@/pages/ContactUsDetails/staticEntities';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';

/** The state of the ContactUsDetails screen and its reducer, with the client actions of the screen and the library
    actions that it calls as pure functions.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */

/** UBTConnect_Utils ContactByPhonePopupData, the screen variable CallPopupData, complete as OutSystems sends it. */
export type CallPopupData = NonNullable<ContactUsCallInputs['CallPopupData']>;

/** The screen variables. The OutSystems name of each variable is in brackets. They are not kept in the view cache. */
export interface ContactUsDetailsState {
  /** [IgnorePolices] Signed out, or the PIN is not registered: CommonUI_InsideLayout does not check the policies. */
  ignorePolices: boolean;
  /** [Description] The description of the subject. */
  description: string;
  /** [MessagePrompt] The placeholder of the message. */
  messagePrompt: string;
  /** [isLogged] The user is signed in. */
  isLogged: boolean;
  /** [Rate_ShowRate] The feedback subject, signed in: the rate and the "contacted about my feedback" check box show. */
  showRate: boolean;
  /** [isLoadingMainData] Signed in, until CacheControl_UserInfo_Wrapper gives the user information. */
  isLoadingMainData: boolean;
  /** [ContactUsForm] The form that Send sends. */
  contactUsForm: ContactUsForm;
  /** [IsFormFilled] Send is enabled. */
  isFormFilled: boolean;
  /** [IsAnyFilled] A field is filled: Dialog_Navigation asks before the user leaves. */
  isAnyFilled: boolean;
  /** [CountryPhone] The phone number of the user's country: the Support Team call. */
  countryPhone: string;
  /** [isSubmiting] SendContactUsMessage runs. */
  isSubmiting: boolean;
  /** [Rate_SelectedRate] Set by ContactUs_Rate, which is not built (NotCaptured, Q2 → A): it stays 0. */
  selectedRate: number;
  /** [Rate_UserWantToBeContacted] The "contacted about my feedback" check box. */
  userWantToBeContacted: boolean;
  /** [CallPopupData] The input of ContactPopupByPhone. */
  callPopupData: CallPopupData;
  /** The outputs of DataAction_GetLocalityTimezone. */
  timezone: LocalityTimezone;
  /** [DataAction_GetCountriesNames.Countries] The list of Dropdown_Country, signed out (not built, Q1 → A). */
  countries: CountryName[];
}

/** The changes of the state, in the order of the assignments of the screen actions. */
export type ContactUsDetailsAction =
  /** OnAfterFetch of DataAction_GetCountriesNames. */
  | { type: 'countriesFetched'; countries: CountryName[] }
  /** CacheControl_UserInfo_WrapperResult, before the refresh of DataAction_GetLocalityTimezone. */
  | { type: 'userInformationFetched'; user: Directory_UserCurrent }
  /** OnAfterFetch of DataAction_GetLocalityTimezone. */
  | { type: 'timezoneFetched'; timezone: LocalityTimezone }
  /** The message changed, then OnChange_FormInput. */
  | { type: 'messageChanged'; message: string; contactSubjectId: string }
  /** OnClick_SubmitForm: every field trimmed, isSubmiting True. */
  | { type: 'submitStarted' }
  /** OnClick_SubmitForm: IsFormFilled False, after the validations. */
  | { type: 'formFilledCleared' }
  /** OnClick_SubmitForm: isSubmiting False. */
  | { type: 'submitEnded' }
  /** Action_ResetForm. */
  | { type: 'formReset' }
  /** OnClick_SupportTeam, with the URL of the UBT logo. */
  | { type: 'supportTeamClicked'; imageUrl: string }
  /** Handler_CallPopup_Cancel (the events Cancel and Call of the popup). */
  | { type: 'callPopupClosed' }
  /** OnClick_UserWantToBeContacted. */
  | { type: 'wantToBeContactedToggled' };

/** UBTConnect Get_ContactUsFormDescription(In_ListMenuOptionId): the form description per subject (the ids of
    Get_LookupContactUsMenu are Type_ContactSubject) and the message prompt, "… regarding <id>." unless the subject
    has its own. An unknown id keeps the empty description. */
export function get_ContactUsFormDescription(in_ListMenuOptionId: string): {
  out_FormDescription: string;
  out_MessagePrompt: string;
} {
  let out_MessagePrompt =
    'To help us assist you better, please provide your query/ issue regarding ' + in_ListMenuOptionId + '.';
  let out_FormDescription = '';
  const ubtOne =
    'UBT One lets you access all your UBT applications with a single log in. \r\n\r\nUse the same username and password to sign in to the UBT Website, Connect, and more—no need to remember multiple credentials.';
  switch (in_ListMenuOptionId) {
    case Type_ContactSubject.SetupAUBTOneAccount:
      out_FormDescription = ubtOne;
      break;
    case Type_ContactSubject.LoginWithUBTOne:
      out_FormDescription =
        'Where we can help:\r\n • Can’t log in with UBT One\r\n • Reset Password\r\n • Not received your UBT One Verification Code';
      break;
    case Type_ContactSubject.SubscriptionsAndPayments:
      out_FormDescription =
        'Where we can help:\r\n • Purchase Subscription\r\n • Upgrade or downgrade the Subscription \r\n • Subscription Cancellation \r\n • Payment issue \r\n • Adding other family members to my Connect subscription ';
      break;
    case Type_ContactSubject.HouseholdDetailsAndProfile:
      out_FormDescription =
        'Where we can help:\r\n • Household Details \r\n • Address & Map\r\n • My Profile Details\r\n • Ancestry Details';
      break;
    case Type_ContactSubject.CommunityEvents:
      out_FormDescription = 'Where we can help:\r\n • Lord’s Day Meal \r\n • Orbit Travel & Events \r\n • Assemble';
      break;
    case Type_ContactSubject.GeneralQuestions:
      out_FormDescription =
        'We’d love to hear from you! \r\n\r\nWhether you have questions, please reach out and if you’re enjoying Connect, we’d love to know that too. Your feedback helps us improve!';
      out_MessagePrompt = 'To help us assist you better, please provide your question.';
      break;
    case Type_ContactSubject.GeneralSuggestionsFeedbackRating:
      out_FormDescription =
        "We’d love to hear from you! \r\n\r\nPlease let us know your suggestions or feedback, and if you're enjoying Connect, we’d love to know that too. Your suggestions and feedback helps us improve!";
      out_MessagePrompt = 'To help us improve Connect, please share your suggestions or feedback.';
      break;
    case Type_ContactSubject.GeneralQuestionsOrSuggestions:
      out_FormDescription = ubtOne;
      break;
    default:
      break;
  }
  return { out_FormDescription, out_MessagePrompt };
}

/** UBTConnectLibrary IsEmailValid(In_Text): the JS node ValidateEmail on Trim(In_Text). */
export function isEmailValid(in_Text: string): boolean {
  return /^[a-z0-9][a-z0-9_&\-.+]{0,31}@[a-z0-9-]{1,}(\.[a-z0-9]{2,20}){1,}$/i.test(in_Text.trim().toLowerCase());
}

/** UBTConnectLibrary IsPhoneNumberValid(In_Text): the JS node CheckFormatPhoneNumber on Trim(In_Text). */
export function isPhoneNumberValid(in_Text: string): boolean {
  return /^\+?(\d+( |-)?)*\d$/.test(in_Text.trim());
}

/** UBTJavaScriptUtils JSUtils_String_CheckNumbers(Text) → Found: the text has a digit. */
export function jSUtils_String_CheckNumbers(text: string): boolean {
  return /[0-9]/.test(text);
}

/** OnChange_FormInput: signed in, IsFormFilled = Message <> "" or (the feedback subject and a rate), and IsAnyFilled =
    Message <> ""; signed out, all six trimmed fields are filled / any of them is filled. */
export function onChange_FormInput(
  isLogged: boolean,
  form: ContactUsForm,
  in_ContactSubjectId: string,
  rate_SelectedRate: number,
): { isFormFilled: boolean; isAnyFilled: boolean } {
  if (isLogged) {
    return {
      isFormFilled:
        form.Message !== '' ||
        (in_ContactSubjectId === Type_ContactSubject.GeneralSuggestionsFeedbackRating && rate_SelectedRate !== 0),
      isAnyFilled: form.Message !== '',
    };
  }
  const fields = [form.FullName, form.Email, form.PhoneNumber, form.Country, form.Locality, form.Message].map((v) =>
    v.trim(),
  );
  return { isFormFilled: fields.every((v) => v !== ''), isAnyFilled: fields.some((v) => v !== '') };
}

/** Connect_Communication_CS UI_ContactUsForm defaults (EmptyContactUsForm of Action_ResetForm). */
export const emptyContactUsForm = (): ContactUsForm => ({
  FullName: '',
  Email: '',
  PhoneNumber: '',
  Country: '',
  Locality: '',
  Message: '',
});

/** The first assignments of OnClick_SubmitForm: every field trimmed. */
export const trimContactUsForm = (form: ContactUsForm): ContactUsForm => ({
  FullName: form.FullName.trim(),
  Email: form.Email.trim(),
  PhoneNumber: form.PhoneNumber.trim(),
  Country: form.Country.trim(),
  Locality: form.Locality.trim(),
  Message: form.Message.trim(),
});

/** UBTConnect_Utils ContactByPhonePopupData defaults (ContactPopupDataRec), as the recorded GetLocalityTimezone call
    sends them (fixture UBTConnect/DataActionDataAction_GetLocalityTimezone/01). */
export const emptyCallPopupData = (): CallPopupData => ({
  ContactPopupData: {
    ImageURL: '',
    EntityTypeId: '',
    EntityId: '0',
    IsAvatarImage: true,
    ActionName: '',
    Name: '',
    Locality: '',
    TimezoneName: '',
    TimezoneOffset: 0,
    ShowPopup: false,
    DisplayContactNumber: '',
    IsFetchingTimezone: false,
    IsLoading: false,
    ShowTimezone: true,
    ShowImage: true,
    CountryName: '',
    TitleTerminator: '',
  },
  Phone: '',
  MobilePhone: '',
  HomePhone: '',
  WorkPhone: '',
});

/** ScreenEvent_OnInitialize, before the first render: Get_ContactUsFormDescription gives Description and
    MessagePrompt; Rate_ShowRate = the feedback subject and isLogged; isLoadingMainData = isLogged. `ignorePolices` is
    GetUserId = NullIdentifier or PIN_Check.NeedRegister, which the hook reads. */
export function initialContactUsDetailsState(
  inputs: ContactUsDetailsInputs,
  isLogged: boolean,
  ignorePolices: boolean,
): ContactUsDetailsState {
  const description = get_ContactUsFormDescription(inputs.In_ContactSubjectId);
  return {
    ignorePolices,
    description: description.out_FormDescription,
    messagePrompt: description.out_MessagePrompt,
    isLogged,
    showRate: inputs.In_ContactSubjectId === Type_ContactSubject.GeneralSuggestionsFeedbackRating && isLogged,
    isLoadingMainData: isLogged,
    contactUsForm: emptyContactUsForm(),
    isFormFilled: false,
    isAnyFilled: false,
    countryPhone: '',
    isSubmiting: false,
    selectedRate: 0,
    userWantToBeContacted: false,
    callPopupData: emptyCallPopupData(),
    timezone: { timezoneName: '', timezoneOffset: 0 },
    countries: [],
  };
}

/** The screen variables that DataAction_GetCountriesNames sends (ScreenEvent_OnReady, signed out). */
export function countriesCallInputs(
  state: ContactUsDetailsState,
  inputs: ContactUsDetailsInputs,
): ContactUsCountriesCallInputs {
  return {
    isLogged: state.isLogged,
    isLoadingMainData: false,
    IgnorePolices: state.ignorePolices,
    In_ContactSubjectId: inputs.In_ContactSubjectId,
    In_ContactSubjectTitle: inputs.In_ContactSubjectTitle,
    In_ListMenuOptionLabel: inputs.In_ListMenuOptionLabel,
  };
}

/** The screen variables that DataAction_GetLocalityTimezone sends, after CacheControl_UserInfo_WrapperResult has
    assigned the user information: the form flags and isLoadingMainData are False and CallPopupData is the default
    record, as the flow sends them. */
export function localityTimezoneCallInputs(
  state: ContactUsDetailsState,
  inputs: ContactUsDetailsInputs,
): ContactUsCallInputs {
  return {
    IsFormFilled: false,
    IsAnyFilled: false,
    isLogged: state.isLogged,
    CountryPhone: state.countryPhone,
    isSubmiting: false,
    Rate_SelectedRate: state.selectedRate,
    Rate_ShowRate: state.showRate,
    Rate_UserWantToBeContacted: state.userWantToBeContacted,
    CallPopupData: emptyCallPopupData(),
    isLoadingMainData: false,
    IgnorePolices: state.ignorePolices,
    In_ContactSubjectId: inputs.In_ContactSubjectId,
    In_ContactSubjectTitle: inputs.In_ContactSubjectTitle,
    In_ListMenuOptionLabel: inputs.In_ListMenuOptionLabel,
  };
}

/** Assigns some fields of CallPopupData.ContactPopupData. */
function withContactPopupData(
  data: CallPopupData,
  patch: Partial<CallPopupData['ContactPopupData']>,
): CallPopupData['ContactPopupData'] {
  return { ...data.ContactPopupData, ...patch };
}

/** The assignments of the screen actions. */
export function contactUsDetailsReducer(
  state: ContactUsDetailsState,
  action: ContactUsDetailsAction,
): ContactUsDetailsState {
  switch (action.type) {
    case 'countriesFetched':
      return { ...state, countries: action.countries };
    case 'userInformationFetched': {
      // isLoadingMainData False; the form gets the user's name, email, country, locality and home number.
      const geography = action.user.Directory_UserCurrent_Geography;
      return {
        ...state,
        isLoadingMainData: false,
        contactUsForm: {
          ...state.contactUsForm,
          FullName: action.user.FullName,
          Email: action.user.Email,
          Country: geography.Country_Name,
          Locality: geography.Locality_Name,
          PhoneNumber: action.user.HomeNumber,
        },
        countryPhone: geography.Country_Phone,
      };
    }
    case 'timezoneFetched':
      // OnAfterFetch copies the time zone into CallPopupData.
      return {
        ...state,
        timezone: action.timezone,
        callPopupData: {
          ...state.callPopupData,
          ContactPopupData: withContactPopupData(state.callPopupData, {
            TimezoneName: action.timezone.timezoneName,
            TimezoneOffset: action.timezone.timezoneOffset,
          }),
        },
      };
    case 'messageChanged': {
      const contactUsForm = { ...state.contactUsForm, Message: action.message };
      const filled = onChange_FormInput(state.isLogged, contactUsForm, action.contactSubjectId, state.selectedRate);
      return { ...state, contactUsForm, isFormFilled: filled.isFormFilled, isAnyFilled: filled.isAnyFilled };
    }
    case 'submitStarted':
      return { ...state, contactUsForm: trimContactUsForm(state.contactUsForm), isSubmiting: true };
    case 'formFilledCleared':
      return { ...state, isFormFilled: false };
    case 'submitEnded':
      return { ...state, isSubmiting: false };
    case 'formReset':
      return { ...state, contactUsForm: emptyContactUsForm(), isFormFilled: false, isAnyFilled: false };
    case 'supportTeamClicked':
      // The call popup data of the Support Team, then ShowPopup True.
      return {
        ...state,
        callPopupData: {
          ...state.callPopupData,
          ContactPopupData: withContactPopupData(state.callPopupData, {
            ImageURL: action.imageUrl,
            Name: 'Support Team',
            TimezoneName: state.timezone.timezoneName,
            Locality: state.contactUsForm.Locality,
            TimezoneOffset: state.timezone.timezoneOffset,
            DisplayContactNumber: state.countryPhone,
            IsAvatarImage: false,
            CountryName: state.contactUsForm.Country,
            TitleTerminator: '?',
            ShowPopup: true,
          }),
          Phone: state.countryPhone,
        },
      };
    case 'callPopupClosed':
      return {
        ...state,
        callPopupData: {
          ...state.callPopupData,
          ContactPopupData: withContactPopupData(state.callPopupData, { ShowPopup: false }),
        },
      };
    case 'wantToBeContactedToggled':
      return { ...state, userWantToBeContacted: !state.userWantToBeContacted };
  }
}
