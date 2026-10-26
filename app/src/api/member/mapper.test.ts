import { describe, expect, it } from 'vitest';
import { toEditMemberDetailsInputs, toMember, toMemberSearchResults, type AvailableMembersWire } from './mapper';
import type { MemberAccountForm } from './types';

type SearchResultWire = AvailableMembersWire['Out_SearchResultItemList']['List'][number];

/** A search result as the server sends it: every field. */
const searchResultWire = (fields: Partial<SearchResultWire>): SearchResultWire => ({
  AdditionalInformation: '',
  HouseholderId: '0',
  Id: '0',
  Latitude: '0',
  Location: '',
  Longitude: '0',
  Name: '',
  RecordDisabled: false,
  Score: '0',
  Type: '',
  ...fields,
});

/** A fictional account form, as the Profile screen keeps it. */
const accountForm: MemberAccountForm = {
  AccountForm_AddressInformation: {
    Custom_Address_ItemList: {
      List: [{ IsValid: true, Label: 'Street', NumberRef: 1, Required: true, Value: '12 Quay Street', Visible: true }],
    },
    LocalityId: '310',
    LocalityName: 'Wellington',
    SubdivionId: '0',
  },
  AccountForm_ContactInformation: {
    HomeNumber: '04 555 0102',
    MobileNumber: '021 555 0101',
    ShowMobileNumber: true,
    ShowWorkNumber: false,
    WorkNumber: '',
  },
  AccountForm_IdentificationInformation: { AccountNumber: 'NZ-4471', MemberId: '11' },
  AccountForm_PersonalInformation: { Email: 'ada@example.org', ShowLifeCycleDates: true, Username: 'aharlow' },
};

describe('member mapper', () => {
  it('toMemberSearchResults unwraps the list and keeps the fields that the UI reads', () => {
    const wire: AvailableMembersWire = {
      Out_SearchResultItemList: {
        List: [
          searchResultWire({
            Id: '9001',
            HouseholderId: '9101',
            Name: 'Thomas Hargreaves',
            Location: 'Geelong, Australia',
            AdditionalInformation: 'Householder',
            Type: 'Member',
            RecordDisabled: true,
            Score: '12',
            Latitude: '-38.1499',
            Longitude: '144.3617',
          }),
        ],
      },
    };
    expect(toMemberSearchResults(wire)).toEqual([
      {
        Id: '9001',
        HouseholderId: '9101',
        Name: 'Thomas Hargreaves',
        Location: 'Geelong, Australia',
        AdditionalInformation: 'Householder',
        Type: 'Member',
        RecordDisabled: true,
      },
    ]);
  });

  it('toMemberSearchResults answers an empty list for an empty wire list', () => {
    expect(toMemberSearchResults({ Out_SearchResultItemList: { List: [] } })).toEqual([]);
  });

  it('toMember keeps the id, the names, the locality and the country of Response', () => {
    expect(
      toMember({
        Response: {
          Id: '5521',
          FirstName: 'Eleanor',
          Lastname: 'Whitfield',
          LocalityName: 'Christchurch',
          CountryName: 'New Zealand',
        },
      }),
    ).toEqual({
      Id: '5521',
      FirstName: 'Eleanor',
      Lastname: 'Whitfield',
      LocalityName: 'Christchurch',
      CountryName: 'New Zealand',
    });
  });

  it('toEditMemberDetailsInputs sends the account form as it is, with isRequireRequestCreation', () => {
    const inputs = toEditMemberDetailsInputs(accountForm, true);
    expect(inputs).toEqual({ UI_AccountForm: accountForm, isRequireRequestCreation: true });
    expect(inputs.UI_AccountForm).toBe(accountForm);
  });
});
