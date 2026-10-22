import type { CallPopupData, UI_ContactUsForm } from '@/screens/ContactUsDetails/types';
import { Type_ContactSubject } from './staticEntities';

/* Client actions of ContactUsDetails and the library actions it calls ("P" = analysis/sources/pretty/
   UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js; "UC" = analysis/sources/raw/UBTConnect.controller.js; "UL" =
   analysis/sources/raw/UBTConnectLibrary.controller.js; "JSU" = migration/shell/sources/UBTJavaScriptUtils.controller.js). */

/** UBTConnect Get_ContactUsFormDescription(In_ListMenuOptionId) (UC:3807-4040): the form description per subject (ids
    of Get_LookupContactUsMenu = Type_ContactSubject) and the message prompt, "… regarding <id>." unless overridden. An
    unknown id keeps the empty description. */
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

/** UBTConnectLibrary IsEmailValid(In_Text) → ValidateEmail JS on Trim(In_Text) (UL:7470-7550). */
export function isEmailValid(in_Text: string): boolean {
  return /^[a-z0-9][a-z0-9_&\-.+]{0,31}@[a-z0-9-]{1,}(\.[a-z0-9]{2,20}){1,}$/i.test(in_Text.trim().toLowerCase());
}

/** UBTConnectLibrary IsPhoneNumberValid(In_Text) → CheckFormatPhoneNumber JS on Trim(In_Text) (UL:7551-7640). */
export function isPhoneNumberValid(in_Text: string): boolean {
  return /^\+?(\d+( |-)?)*\d$/.test(in_Text.trim());
}

/** UBTJavaScriptUtils JSUtils_String_CheckNumbers(Text) → Found: the text has a digit (JSU:2922-3002). */
export function jSUtils_String_CheckNumbers(text: string): boolean {
  return /[0-9]/.test(text);
}

/** OnChange_FormInput (P:1747-1784): signed in, IsFormFilled = Message <> "" or (feedback subject and a rate) and
    IsAnyFilled = Message <> ""; signed out, all six trimmed fields filled / any of them filled. */
export function onChange_FormInput(
  isLogged: boolean,
  form: UI_ContactUsForm,
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

/** Connect_Communication_CS UI_ContactUsForm defaults (Action_ResetForm EmptyContactUsForm, P:1814-1855). */
export const emptyContactUsForm = (): UI_ContactUsForm => ({
  FullName: '',
  Email: '',
  PhoneNumber: '',
  Country: '',
  Locality: '',
  Message: '',
});

/** OnClick_SubmitForm first assignments (P:1880-1892): every field trimmed. */
export const trimContactUsForm = (form: UI_ContactUsForm): UI_ContactUsForm => ({
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
