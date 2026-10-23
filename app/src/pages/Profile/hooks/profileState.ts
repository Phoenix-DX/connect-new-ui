import type { MemberAccountForm } from '@/api/member';
import { osList, wireList } from '@/legacy/os/os-wire';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';

/** The state of the Profile screen and its reducer, with the client actions of the screen as pure functions.
    @origin UBTConnect.App_Profile.Profile */

/** UI_AccountForm (Connect_Household_CS) as the screen keeps it and sends it to Member_EditDetails_Service. Every
    part is plain data, compared field by field (OnChange_Fields). */
export type AccountForm = MemberAccountForm;
type PersonalInformation = AccountForm['AccountForm_PersonalInformation'];
type ContactInformation = AccountForm['AccountForm_ContactInformation'];
/** Custom_Address_Item (APIDomain_Directory_IS). */
type AddressItem = AccountForm['AccountForm_AddressInformation']['Custom_Address_ItemList']['List'][number];

/** The screen variables that the view reads. The OutSystems name of each variable is in brackets. They are not kept
    in the view cache. */
export interface ProfileState {
  /** [LocalCacheControl_UserInformation] The signed-in user; null (the default record) until the cache answers. */
  user: Directory_UserCurrent | null;
  /** [AccountForm] The form that the inputs edit. */
  accountForm: AccountForm;
  /** [AccountFormOriginal] The form as the user information or the last save left it. */
  accountFormOriginal: AccountForm;
  /** [AccountForm_ViewPreview] The form that the household preview shows. */
  accountFormViewPreview: AccountForm;
  /** [isHouseholder] */
  isHouseholder: boolean;
  /** [isSpouse] */
  isSpouse: boolean;
  /** [HasChanges] The Save button is enabled and the back navigation asks to discard. */
  hasChanges: boolean;
  /** [isLoading_Submit] */
  isLoadingSubmit: boolean;
  /** [MainContainerId] The content id that the layout raises on ready; the fixed footer needs it. */
  mainContainerId: string;
  /** [PreviewHousehold_BottomSheetId] The id of the preview bottom sheet, for BottomSheetOpen. */
  previewBottomSheetId: string;
  /** [CurrentCountryCode] The input of GetCountryInfo. */
  currentCountryCode: string;
}

/** The changes of the state. Each one assigns the values that the flow gives, as the screen action does. */
type ProfileAction =
  /** CacheControl_UserInfo_WrapperResult: the user and the form from the user information (`current` is the form
      that the result starts from). */
  | { type: 'userInformationFetched'; user: Directory_UserCurrent; current: AccountForm }
  /** OnChange_Fields: AccountForm, and HasChanges = AccountForm <> `original`. */
  | { type: 'fieldsChanged'; accountForm: AccountForm; original: AccountForm }
  /** AccountForm only: the age switch assigns its variable before the confirmation, and Cancel turns it back. */
  | { type: 'accountFormAssigned'; accountForm: AccountForm }
  /** OnClick_ViewPreview: AccountForm_ViewPreview = AccountForm. */
  | { type: 'viewPreviewAssigned'; accountForm: AccountForm }
  /** OnClick_Save starts: isLoading_Submit True. */
  | { type: 'submitStarted' }
  /** OnClick_Save, DetailsForm is not valid: isLoading_Submit False, HasChanges False. */
  | { type: 'submitInvalid' }
  /** Member_EditDetails_Service answered: isLoading_Submit False, AccountFormOriginal = the form that was sent. */
  | { type: 'submitSaved'; accountForm: AccountForm }
  /** OnClick_Save failed: isLoading_Submit False. */
  | { type: 'submitFailed' }
  /** OnReadyEvent of the layout: MainContainerId. */
  | { type: 'mainContainerReady'; id: string }
  /** OnInitialized of Profile_HouseholdPreview: PreviewHousehold_BottomSheetId. */
  | { type: 'previewSheetInitialized'; id: string };

/** Default UI_AccountForm record (Connect_Household_CS defaults: "" / False / empty list). */
export const EMPTY_ACCOUNT_FORM: AccountForm = {
  AccountForm_PersonalInformation: { Username: '', Email: '', ShowLifeCycleDates: false },
  AccountForm_ContactInformation: {
    HomeNumber: '',
    MobileNumber: '',
    WorkNumber: '',
    ShowMobileNumber: false,
    ShowWorkNumber: false,
  },
  AccountForm_AddressInformation: {
    Custom_Address_ItemList: wireList<AddressItem>([]),
    LocalityId: '',
    LocalityName: '',
    SubdivionId: '',
  },
  AccountForm_IdentificationInformation: { MemberId: '', AccountNumber: '' },
};

/** OnInitialize: the default values of the screen variables. */
export function initialProfileState(): ProfileState {
  return {
    user: null,
    accountForm: EMPTY_ACCOUNT_FORM,
    accountFormOriginal: EMPTY_ACCOUNT_FORM,
    accountFormViewPreview: EMPTY_ACCOUNT_FORM,
    isHouseholder: false,
    isSpouse: false,
    hasChanges: false,
    isLoadingSubmit: false,
    mainContainerId: '',
    previewBottomSheetId: '',
    currentCountryCode: '',
  };
}

interface UserInformationResult {
  accountForm: AccountForm;
  isHouseholder: boolean;
  isSpouse: boolean;
  currentCountryCode: string;
}

/** CacheControl_UserInfo_WrapperResult, the assignments: PersonalInformation, Identification, the visible address
    items (ListFilter Visible, each appended with IsValid True), LocalityId / SubdivionId, ContactInformation; then
    isHouseholder, CurrentCountryCode and isSpouse. The reducer copies the form to AccountFormOriginal and
    AccountForm_ViewPreview. */
export function fromUserInformation(user: Directory_UserCurrent, current: AccountForm): UserInformationResult {
  const visibility = user.Directory_UserCurrent_Visibility;
  const member = user.Directory_UserCurrent_Member;
  const geography = user.Directory_UserCurrent_Geography;
  const address = current.AccountForm_AddressInformation;
  const appended = osList(member.Address.AddressItemsList)
    .filter((item) => item.Visible)
    .map((item) => ({ ...item, IsValid: true }));
  const accountForm: AccountForm = {
    AccountForm_PersonalInformation: {
      Username: user.UserName,
      Email: user.Email,
      ShowLifeCycleDates: visibility.DisplayAge,
    },
    AccountForm_IdentificationInformation: { MemberId: user.MemberID, AccountNumber: user.AccountNumber },
    AccountForm_AddressInformation: {
      ...address,
      // ListAppend to the current list.
      Custom_Address_ItemList: wireList([...osList(address.Custom_Address_ItemList), ...appended]),
      LocalityId: geography.Locality_Id,
      SubdivionId: geography.Subdivision_Id,
    },
    AccountForm_ContactInformation: {
      HomeNumber: user.HomeNumber,
      MobileNumber: user.MobileNumber,
      WorkNumber: user.WorkNumber,
      ShowMobileNumber: visibility.DisplayMobilePhone,
      ShowWorkNumber: visibility.DisplayWorkPhone,
    },
  };
  return {
    accountForm,
    isHouseholder: member.isHouseholder,
    isSpouse: member.SpouseIsHouseholder,
    currentCountryCode: geography.Country_Code,
  };
}

/** Record equality of OutSystems (`AccountForm = AccountFormOriginal`): every attribute compared. */
export const sameRecord = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b);

/** The form with some attributes of AccountForm_PersonalInformation assigned. */
export function withPersonal(form: AccountForm, patch: Partial<PersonalInformation>): AccountForm {
  return { ...form, AccountForm_PersonalInformation: { ...form.AccountForm_PersonalInformation, ...patch } };
}

/** The form with some attributes of AccountForm_ContactInformation assigned. */
export function withContact(form: AccountForm, patch: Partial<ContactInformation>): AccountForm {
  return { ...form, AccountForm_ContactInformation: { ...form.AccountForm_ContactInformation, ...patch } };
}

/** Action_FormatAddress: AddressFormat with "\r\n" replaced by " ", then every "[Address<NumberRef>]" replaced by
    that item's Value (OutSystems Replace: every occurrence). */
export function action_FormatAddress(addressFormat: string, accountForm: AccountForm): string {
  let formatted = addressFormat.split('\r\n').join(' ');
  for (const item of osList(accountForm.AccountForm_AddressInformation.Custom_Address_ItemList)) {
    formatted = formatted.split(`[Address${String(item.NumberRef)}]`).join(item.Value);
  }
  return formatted;
}

/** isRequireRequestCreation: the address part, username, email, home, mobile or work number changed. */
export function isRequireRequestCreation(form: AccountForm, original: AccountForm): boolean {
  const p = form.AccountForm_PersonalInformation;
  const po = original.AccountForm_PersonalInformation;
  const c = form.AccountForm_ContactInformation;
  const co = original.AccountForm_ContactInformation;
  return (
    !sameRecord(form.AccountForm_AddressInformation, original.AccountForm_AddressInformation) ||
    p.Username !== po.Username ||
    p.Email !== po.Email ||
    c.HomeNumber !== co.HomeNumber ||
    c.MobileNumber !== co.MobileNumber ||
    c.WorkNumber !== co.WorkNumber
  );
}

/** Assigns the values. When every value is the same, the state stays the same object, so React does not render
    again (as for a screen variable that gets its own value). */
function assign(state: ProfileState, values: Partial<ProfileState>): ProfileState {
  const keys = Object.keys(values) as (keyof ProfileState)[];
  return keys.every((key) => Object.is(state[key], values[key])) ? state : { ...state, ...values };
}

export function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case 'userInformationFetched': {
      const result = fromUserInformation(action.user, action.current);
      return assign(state, {
        user: action.user,
        accountForm: result.accountForm,
        accountFormOriginal: result.accountForm,
        isHouseholder: result.isHouseholder,
        currentCountryCode: result.currentCountryCode,
        isSpouse: result.isSpouse,
        accountFormViewPreview: result.accountForm,
      });
    }
    case 'fieldsChanged':
      return assign(state, {
        accountForm: action.accountForm,
        hasChanges: !sameRecord(action.accountForm, action.original),
      });
    case 'accountFormAssigned':
      return assign(state, { accountForm: action.accountForm });
    case 'viewPreviewAssigned':
      return assign(state, { accountFormViewPreview: action.accountForm });
    case 'submitStarted':
      return assign(state, { isLoadingSubmit: true });
    case 'submitInvalid':
      return assign(state, { isLoadingSubmit: false, hasChanges: false });
    case 'submitSaved':
      return assign(state, { isLoadingSubmit: false, accountFormOriginal: action.accountForm });
    case 'submitFailed':
      return assign(state, { isLoadingSubmit: false });
    case 'mainContainerReady':
      return assign(state, { mainContainerId: action.id });
    case 'previewSheetInitialized':
      return assign(state, { previewBottomSheetId: action.id });
  }
}
