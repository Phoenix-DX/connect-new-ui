import { describe, expect, it } from 'vitest';
import { wireList } from '@/lib/os-wire';
import { mockDirectoryUser } from '@/platform/session/mockUser';
import {
  EMPTY_ACCOUNT_FORM,
  action_FormatAddress,
  fromUserInformation,
  initialProfileState,
  isRequireRequestCreation,
  profileReducer,
  sameRecord,
  sortLocalities,
  action_RefreshSubdivionList,
  withAddress,
  withAddressItemValue,
  withAddressItemsChecked,
  withContact,
  withPersonal,
  type AccountForm,
} from './profileState';

type AddressItem = AccountForm['AccountForm_AddressInformation']['Custom_Address_ItemList']['List'][number];

const item = (NumberRef: number, Value: string, Visible: boolean): AddressItem => ({
  IsValid: false,
  Label: `Address ${String(NumberRef)}`,
  NumberRef,
  Required: false,
  Value,
  Visible,
});

/** The spouse of the mock household, with two visible address items and one hidden item. */
function spouse() {
  const user = mockDirectoryUser({ policies: false, expired: false, householder: false });
  return {
    ...user,
    Directory_UserCurrent_Visibility: { DisplayAge: true, DisplayMobilePhone: true, DisplayWorkPhone: false },
    Directory_UserCurrent_Member: {
      ...user.Directory_UserCurrent_Member,
      SpouseIsHouseholder: true,
      Address: {
        ...user.Directory_UserCurrent_Member.Address,
        AddressItemsList: wireList([item(1, '12 Calle Mitre', true), item(2, 'hidden', false), item(3, '8000', true)]),
      },
    },
  };
}

describe('fromUserInformation', () => {
  it('fills the form from the user information and keeps only the visible address items, valid', () => {
    const user = spouse();
    const result = fromUserInformation(user, EMPTY_ACCOUNT_FORM);
    expect(result.isHouseholder).toBe(false);
    expect(result.isSpouse).toBe(true);
    expect(result.currentCountryCode).toBe('AR');
    expect(result.accountForm.AccountForm_PersonalInformation).toEqual({
      Username: user.UserName,
      Email: user.Email,
      ShowLifeCycleDates: true,
    });
    expect(result.accountForm.AccountForm_IdentificationInformation).toEqual({
      MemberId: user.MemberID,
      AccountNumber: user.AccountNumber,
    });
    expect(result.accountForm.AccountForm_ContactInformation).toEqual({
      HomeNumber: user.HomeNumber,
      MobileNumber: user.MobileNumber,
      WorkNumber: '',
      ShowMobileNumber: true,
      ShowWorkNumber: false,
    });
    const address = result.accountForm.AccountForm_AddressInformation;
    expect(address.LocalityId).toBe('585');
    expect(address.SubdivionId).toBe('2820');
    expect(address.Custom_Address_ItemList.List.map((i) => [i.NumberRef, i.IsValid])).toEqual([
      [1, true],
      [3, true],
    ]);
  });

  it('appends the address items to the list of the current form', () => {
    const current: AccountForm = {
      ...EMPTY_ACCOUNT_FORM,
      AccountForm_AddressInformation: {
        ...EMPTY_ACCOUNT_FORM.AccountForm_AddressInformation,
        Custom_Address_ItemList: wireList([item(9, 'kept', true)]),
      },
    };
    const list = fromUserInformation(spouse(), current).accountForm.AccountForm_AddressInformation
      .Custom_Address_ItemList.List;
    expect(list.map((i) => i.NumberRef)).toEqual([9, 1, 3]);
  });
});

describe('client actions', () => {
  it('sameRecord compares every attribute', () => {
    expect(sameRecord(EMPTY_ACCOUNT_FORM, { ...EMPTY_ACCOUNT_FORM })).toBe(true);
    expect(sameRecord(EMPTY_ACCOUNT_FORM, withPersonal(EMPTY_ACCOUNT_FORM, { Email: 'a@example.org' }))).toBe(false);
  });

  it('withPersonal and withContact assign only the given attributes', () => {
    const form = withContact(withPersonal(EMPTY_ACCOUNT_FORM, { Email: 'a@example.org' }), { ShowWorkNumber: true });
    expect(form.AccountForm_PersonalInformation).toEqual({
      Username: '',
      Email: 'a@example.org',
      ShowLifeCycleDates: false,
    });
    expect(form.AccountForm_ContactInformation.ShowWorkNumber).toBe(true);
    expect(form.AccountForm_ContactInformation.MobileNumber).toBe('');
    expect(EMPTY_ACCOUNT_FORM.AccountForm_PersonalInformation.Email).toBe('');
  });

  it('action_FormatAddress replaces the line breaks and every [Address<n>] with the item value', () => {
    const form = fromUserInformation(spouse(), EMPTY_ACCOUNT_FORM).accountForm;
    expect(action_FormatAddress('[Address1]\r\n[Address3] ([Address3])', form)).toBe('12 Calle Mitre 8000 (8000)');
    expect(action_FormatAddress('', form)).toBe('');
  });

  it('isRequireRequestCreation is true for the address, username, email or a number, not for a switch', () => {
    const form = fromUserInformation(spouse(), EMPTY_ACCOUNT_FORM).accountForm;
    expect(isRequireRequestCreation(form, form)).toBe(false);
    expect(isRequireRequestCreation(withContact(form, { ShowMobileNumber: false }), form)).toBe(false);
    expect(isRequireRequestCreation(withPersonal(form, { ShowLifeCycleDates: false }), form)).toBe(false);
    expect(isRequireRequestCreation(withPersonal(form, { Email: 'b@example.org' }), form)).toBe(true);
    expect(isRequireRequestCreation(withPersonal(form, { Username: 'other' }), form)).toBe(true);
    expect(isRequireRequestCreation(withContact(form, { WorkNumber: '+54 291 555 0101' }), form)).toBe(true);
    const moved = {
      ...form,
      AccountForm_AddressInformation: { ...form.AccountForm_AddressInformation, LocalityId: '1' },
    };
    expect(isRequireRequestCreation(moved, form)).toBe(true);
  });
});

describe('profileReducer', () => {
  it('starts with the default values', () => {
    const state = initialProfileState();
    expect(state.user).toBeNull();
    expect(state.accountForm).toBe(EMPTY_ACCOUNT_FORM);
    expect(state.hasChanges).toBe(false);
    expect(state.mainContainerId).toBe('');
  });

  it('the user information fills the form, the original and the preview form', () => {
    const user = spouse();
    const state = profileReducer(initialProfileState(), {
      type: 'userInformationFetched',
      user,
      current: EMPTY_ACCOUNT_FORM,
    });
    expect(state.user).toBe(user);
    expect(state.accountFormOriginal).toBe(state.accountForm);
    expect(state.accountFormViewPreview).toBe(state.accountForm);
    expect(state.isSpouse).toBe(true);
    expect(state.currentCountryCode).toBe('AR');
    expect(state.hasChanges).toBe(false);
  });

  it('fieldsChanged sets HasChanges against the given original', () => {
    const start = initialProfileState();
    const changed = withPersonal(EMPTY_ACCOUNT_FORM, { Email: 'a@example.org' });
    const state = profileReducer(start, { type: 'fieldsChanged', accountForm: changed, original: EMPTY_ACCOUNT_FORM });
    expect(state.accountForm).toBe(changed);
    expect(state.hasChanges).toBe(true);
    const back = profileReducer(state, { type: 'fieldsChanged', accountForm: changed, original: changed });
    expect(back.hasChanges).toBe(false);
  });

  it('the submit actions set isLoading_Submit, HasChanges and the original', () => {
    const changed = withPersonal(EMPTY_ACCOUNT_FORM, { Email: 'a@example.org' });
    let state = profileReducer(initialProfileState(), {
      type: 'fieldsChanged',
      accountForm: changed,
      original: EMPTY_ACCOUNT_FORM,
    });
    state = profileReducer(state, { type: 'submitStarted' });
    expect(state.isLoadingSubmit).toBe(true);
    const invalid = profileReducer(state, { type: 'submitInvalid' });
    expect([invalid.isLoadingSubmit, invalid.hasChanges]).toEqual([false, false]);
    const saved = profileReducer(state, { type: 'submitSaved', accountForm: changed });
    expect([saved.isLoadingSubmit, saved.hasChanges]).toEqual([false, true]);
    expect(saved.accountFormOriginal).toBe(changed);
    expect(profileReducer(state, { type: 'submitFailed' }).isLoadingSubmit).toBe(false);
  });

  it('keeps the same state object when the values do not change', () => {
    const state = profileReducer(initialProfileState(), { type: 'mainContainerReady', id: 'b1-ContentWrapper' });
    expect(state.mainContainerId).toBe('b1-ContentWrapper');
    expect(profileReducer(state, { type: 'mainContainerReady', id: 'b1-ContentWrapper' })).toBe(state);
    expect(profileReducer(state, { type: 'submitFailed' })).toBe(state);
    const sheet = profileReducer(state, { type: 'previewSheetInitialized', id: 'b60-$b1' });
    expect(sheet.previewBottomSheetId).toBe('b60-$b1');
    const preview = withPersonal(EMPTY_ACCOUNT_FORM, { Email: 'p@example.org' });
    expect(profileReducer(sheet, { type: 'viewPreviewAssigned', accountForm: preview }).accountFormViewPreview).toBe(
      preview,
    );
    expect(profileReducer(sheet, { type: 'accountFormAssigned', accountForm: preview }).accountForm).toBe(preview);
  });
});

/* The address section of the householder (App_Profile F1). */
describe('address of the householder', () => {
  const sub = (SubdivisionId: string, LocalityId: string) => ({
    SubdivisionId,
    SubdivisionName: `Hall ${SubdivisionId}`,
    LocalityId,
    LocalityName: '',
  });
  const subdivisions = {
    subdivionsList: [sub('2820', '585'), sub('9202', '585'), sub('9241', '924')],
    isFetched: true,
  };
  const located = withAddress(EMPTY_ACCOUNT_FORM, { LocalityId: '585', SubdivionId: '2820' });

  it('sortLocalities sorts by CountryName + " " + Name with localeCompare (CacheControl_AllLocalitiesResult ListSort)', () => {
    const l = (Name: string, CountryName: string) => ({ LocalityId: Name, Name, CountryName, CountryCode: '' });
    const sorted = sortLocalities([
      l('Rosario', 'Argentina'),
      l('Boston', 'United States'),
      l('Bahia Blanca', 'Argentina'),
    ]);
    expect(sorted.map((x) => x.Name)).toEqual(['Bahia Blanca', 'Rosario', 'Boston']);
  });

  it('action_RefreshSubdivionList: no locality → empty list and SubdivionId ""; fetched → ListFilter; else no change', () => {
    const none = action_RefreshSubdivionList(withAddress(located, { LocalityId: '' }), subdivisions);
    expect(none?.subdivisionFilteredList).toEqual([]);
    expect(none?.accountForm.AccountForm_AddressInformation.SubdivionId).toBe('');
    const filtered = action_RefreshSubdivionList(located, subdivisions);
    expect(filtered?.subdivisionFilteredList.map((s) => s.SubdivisionId)).toEqual(['2820', '9202']);
    expect(filtered?.accountForm).toBe(located);
    expect(action_RefreshSubdivionList(located, { subdivionsList: [], isFetched: false })).toBeNull();
  });

  it('the user information without a locality clears SubdivionId after AccountFormOriginal was assigned', () => {
    const user = mockDirectoryUser({ policies: false, expired: false, householder: true });
    const noLocality = {
      ...user,
      Directory_UserCurrent_Geography: { ...user.Directory_UserCurrent_Geography, Locality_Id: '' },
    };
    const state = profileReducer(initialProfileState(), {
      type: 'userInformationFetched',
      user: noLocality,
      current: EMPTY_ACCOUNT_FORM,
    });
    expect(state.accountForm.AccountForm_AddressInformation.SubdivionId).toBe('');
    expect(state.accountFormOriginal.AccountForm_AddressInformation.SubdivionId).toBe(
      user.Directory_UserCurrent_Geography.Subdivision_Id,
    );
    expect(state.hasChanges).toBe(false);
  });

  it('allSubdivisionsFetched keeps the list, sets isFetched and filters by the locality of the form', () => {
    const start = { ...initialProfileState(), accountForm: located };
    const state = profileReducer(start, {
      type: 'allSubdivisionsFetched',
      subdivionsList: subdivisions.subdivionsList,
    });
    expect(state.localCacheControlAllSubdivisions).toEqual(subdivisions);
    expect(state.subdivisionFilteredList.map((s) => s.SubdivisionId)).toEqual(['2820', '9202']);
  });

  it('localityChanged: LocalityId, SubdivionId "", the filtered list, then HasChanges; back to the original clears it', () => {
    const start = {
      ...initialProfileState(),
      accountForm: located,
      accountFormOriginal: located,
      localCacheControlAllSubdivisions: subdivisions,
    };
    const changed = profileReducer(start, { type: 'localityChanged', localityId: '924' });
    expect(changed.accountForm.AccountForm_AddressInformation).toMatchObject({ LocalityId: '924', SubdivionId: '' });
    expect(changed.subdivisionFilteredList.map((s) => s.SubdivisionId)).toEqual(['9241']);
    expect(changed.hasChanges).toBe(true);
    const back = profileReducer(profileReducer(changed, { type: 'localityChanged', localityId: '585' }), {
      type: 'subdivisionChanged',
      subdivisionId: '2820',
    });
    expect(back.hasChanges).toBe(false);
  });

  it('withAddressItemValue sets one row; withAddressItemsChecked sets IsValid = not (Required and Value = "")', () => {
    const item = (NumberRef: number, Value: string, Required: boolean) => ({
      NumberRef,
      Label: '',
      Value,
      Required,
      Visible: true,
      IsValid: true,
    });
    const form = withAddress(EMPTY_ACCOUNT_FORM, {
      Custom_Address_ItemList: wireList([item(1, '120 Las Margaritas', true), item(2, '', false), item(3, '', true)]),
    });
    const edited = withAddressItemValue(form, 1, 'Floor 2');
    expect(edited.AccountForm_AddressInformation.Custom_Address_ItemList.List.map((i) => i.Value)).toEqual([
      '120 Las Margaritas',
      'Floor 2',
      '',
    ]);
    const checked = withAddressItemsChecked(form);
    expect(checked.AccountForm_AddressInformation.Custom_Address_ItemList.List.map((i) => i.IsValid)).toEqual([
      true,
      true,
      false,
    ]);
  });
});
