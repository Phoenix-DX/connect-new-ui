import { osList, wireList } from '../../../lib/os-wire';
import type { Directory_UserCurrent } from '../../../shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import type { AccountForm, AddressItem } from '../types';

/* Client actions of the Profile screen (Profile.mvc.js controller :2818-4100), pure where the original only assigns. */

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

export interface UserInformationResult {
  accountForm: AccountForm;
  isHouseholder: boolean;
  isSpouse: boolean;
  currentCountryCode: string;
}

/** CacheControl_UserInfo_WrapperResult (:3367-3508), the assignments: PersonalInformation, Identification, the visible
    address items (ListFilter Visible, each appended with IsValid True), LocalityId / SubdivionId, ContactInformation;
    then isHouseholder, CurrentCountryCode and isSpouse. The caller copies the form to AccountFormOriginal and
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
      // ListAppend to the current list (:3407-3428)
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

/** Record equality of OutSystems (`AccountForm = AccountFormOriginal`, :3822-3848): every attribute compared. */
export const sameRecord = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b);

/** Action_FormatAddress (:3766-3820): AddressFormat with "\r\n" replaced by " ", then every "[Address<NumberRef>]"
    replaced by that item's Value (OutSystems Replace: every occurrence). */
export function action_FormatAddress(addressFormat: string, accountForm: AccountForm): string {
  let formatted = addressFormat.split('\r\n').join(' ');
  for (const item of osList(accountForm.AccountForm_AddressInformation.Custom_Address_ItemList)) {
    formatted = formatted.split(`[Address${String(item.NumberRef)}]`).join(item.Value);
  }
  return formatted;
}

/** isRequireRequestCreation (:3605-3606): the address part, username, email, home, mobile or work number changed. */
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
