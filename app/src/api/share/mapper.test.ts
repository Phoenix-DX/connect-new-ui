import { describe, expect, it } from 'vitest';
import { toShareDetails, type ShareDetailsWire } from './mapper';

const emptyPhoto = { Bucket: '', Path: '', SignedPath: '', Type: '' };

/** A fictional answer of Get_ShareDetails: every field, with the values that the mapper reads given. */
const shareWire = (typeId: string, objectId: string, itemId: string, householderId: string): ShareDetailsWire => ({
  IsShareAvailable: true,
  UpdateDate: '1900-01-01',
  ShareObjectType: {
    APIKey: '',
    Id: typeId,
    Is_Active: true,
    Label: typeId,
    LabelPrefix: '',
    NotificationTitle: '',
    Order: 0,
  },
  ShareDetails: {
    Id: '9001',
    DateCreatedUTC: '1900-01-01T00:00:00Z',
    ObjectId: objectId,
    ObjectName: '',
    Details: {
      Sender: {
        CountryCode: '',
        CountryId: '',
        CountryName: '',
        Email: '',
        FirstName: '',
        FullName: '',
        HasAccess: true,
        Id: '',
        LastName: '',
        LocalityId: '',
        LocalityName: '',
        MemberId: '0',
        Photo: emptyPhoto,
        Source: '',
      },
      ShareItem: {
        BirthType: '',
        CanAccess: false,
        CountryName: '',
        DateTime: '1900-01-01T00:00:00Z',
        Description: '',
        Extension: { FullName: '', IsDeceased: false },
        GenderId: '',
        HouseholderId: householderId,
        Id: itemId,
        IsVisible: true,
        Label: '',
        LocalityName: '',
        ParentsName: '',
        Photo: emptyPhoto,
        Subtitle: '',
        Title: '',
        Type: '',
      },
    },
  },
});

describe('share mapper', () => {
  it('toShareDetails keeps the fields that OnInitializeSharingScreen reads', () => {
    expect(toShareDetails(shareWire('Update', '5001', '5001', '42438'))).toEqual({
      isShareAvailable: true,
      shareObjectTypeId: 'Update',
      objectId: '5001',
      shareItemId: '5001',
      canAccess: false,
      householderId: '42438',
    });
  });

  it('toShareDetails gives "0" for a null HouseholderId', () => {
    expect(toShareDetails(shareWire('Household', '42438', '42438', '0')).householderId).toBe('0');
    expect(toShareDetails(shareWire('Household', '42438', '42438', '')).householderId).toBe('0');
  });
});

/* ---- LegacyShareObject: ScreenBlock_ShareObject and ProfileList ---- */

import {
  toAvailableUsers,
  toShareObjectInputs,
  toShareObjectResult,
  toShareObjectTypeLabel,
  type AvailableUserWire,
} from './mapper';

/** A fictional user of GetAvailableUsers, with every field. */
const userWire = (id: string, fullName: string): AvailableUserWire => ({
  Id: id,
  Email: '',
  FirstName: '',
  LastName: '',
  FullName: fullName,
  LocalityId: '0',
  LocalityName: 'Nelson',
  CountryCode: '',
  CountryName: 'New Zealand',
  Photo: { Bucket: 'bucket', Path: 'path', Type: 'image/png', SignedPath: 'signed' },
  CountryId: 'NZ',
  Source: '',
  MemberId: '0',
  HasAccess: true,
});

describe('share mapper (LegacyShareObject)', () => {
  it('toShareObjectTypeLabel gives the Label of the first record, "" for an empty list', () => {
    const type = { Id: 'Feed', Label: 'Feed item', LabelPrefix: '', Order: 0, Is_Active: true };
    const record = { Type_ShareObject: { ...type, NotificationTitle: '', APIKey: '' } };
    expect(toShareObjectTypeLabel({ List: { List: [record, record] }, Count: 2 })).toBe('Feed item');
    expect(toShareObjectTypeLabel({ List: { List: [] }, Count: 0 })).toBe('');
  });

  it('toAvailableUsers keeps the Label and the fields that OnAfterFetch reads', () => {
    const wire = {
      Label: 'Contacts list',
      Response: { Type: '', Items: { List: [userWire('7001', 'Hana Kowalczyk')] } },
    };
    expect(toAvailableUsers(wire)).toEqual({
      label: 'Contacts list',
      items: [
        {
          id: '7001',
          fullName: 'Hana Kowalczyk',
          localityName: 'Nelson',
          countryName: 'New Zealand',
          photo: { bucket: 'bucket', path: 'path', type: 'image/png', signedPath: 'signed' },
        },
      ],
    });
  });

  it('toShareObjectInputs sends In_UpdateType "" and the null date', () => {
    expect(
      toShareObjectInputs({
        shareObjectTypeId: 'Household',
        sharedObjectId: '42438',
        sharingProfileName: 'Kai Andersen',
        targetCBUserId: '7001',
      }),
    ).toEqual({
      In_ShareObjectTypeId: 'Household',
      In_SharedObjectId: '42438',
      In_SharingProfileName: 'Kai Andersen',
      In_TargetCBUserId: '7001',
      In_UpdateType: '',
      In_UpdateDate: '1900-01-01',
    });
  });

  it('toShareObjectResult keeps the four outputs', () => {
    expect(toShareObjectResult({ IsAllowed: true, IsSuccess: false, Message: 'Try later', ShareId: '0' })).toEqual({
      isAllowed: true,
      isSuccess: false,
      message: 'Try later',
      shareId: '0',
    });
  });
});

/* ---- MessageDetail: Share_UI.ShareObjectDetail_ExtendedShare ---- */

import { emptyShareableUpdateItem, toSharedObjectDetailVariablesWire } from './mapper';
import type { ShareableUpdateItem } from './types';

/** ShareableUpdateItem after GetShareOnAfterFetch of a fictional Update share. */
const updateRecord: ShareableUpdateItem = {
  updateItemId: '0',
  updateItemTypeId: 'Birth',
  name: 'Freya Lindqvist',
  date: '2026-10-19',
  genderId: 'F',
  locationString: 'Uppsala',
  isRead: false,
  hasAccess: true,
  hasShare: false,
  householdId: '61208',
  parentsNames: 'Anders and Maja Lindqvist',
  birthType: 'Daughter',
  memberId: '',
};

const loading = 'Loading Shared Object';

describe('share mapper (ShareObjectDetail_ExtendedShare)', () => {
  it('toSharedObjectDetailVariablesWire sends the four block variables with their OutSystems names', () => {
    const wire = toSharedObjectDetailVariablesWire({
      shareId: '9001',
      hasAccessToDeceasedHousehold: true,
      shareableObject: {
        ConnectEntityTypeId: 'Household',
        Id: '61207',
        Location: 'Uppsala',
        SignedURL: 'https://cdn.example.org/lindqvist.jpg',
        Subtitle: 'Anders and Maja Lindqvist',
        Title: 'Lindqvist Household',
      },
      shareableUpdateItem: updateRecord,
    });
    expect(Object.keys(wire)).toEqual([
      'ShareId',
      'HasAccessToDeceasedHousehold',
      'ShareableObject_Generic',
      'ShareableUpdateItem',
    ]);
    expect(wire).toEqual({
      ShareId: '9001',
      HasAccessToDeceasedHousehold: true,
      ShareableObject_Generic: {
        ConnectEntityTypeId: 'Household',
        Id: '61207',
        Location: 'Uppsala',
        SignedURL: 'https://cdn.example.org/lindqvist.jpg',
        Subtitle: 'Anders and Maja Lindqvist',
        Title: 'Lindqvist Household',
      },
      ShareableUpdateItem: {
        UpdateItemId: '0',
        UpdateItemTypeId: 'Birth',
        Name: 'Freya Lindqvist',
        Date: '2026-10-19',
        GenderId: 'F',
        LocationString: 'Uppsala',
        IsRead: false,
        HasAccess: true,
        HasShare: false,
        HouseholdId: '61208',
        ParentsNames: 'Anders and Maja Lindqvist',
        BirthType: 'Daughter',
        MemberId: '',
      },
    });
  });

  it('the Loading card and the empty record give the defaults: "", "0" for a Long Integer, the null date', () => {
    const wire = toSharedObjectDetailVariablesWire({
      shareId: '9001',
      hasAccessToDeceasedHousehold: false,
      shareableObject: { ConnectEntityTypeId: 'Household', Title: loading, Subtitle: loading, Location: loading },
      shareableUpdateItem: emptyShareableUpdateItem(),
    });
    expect(wire.ShareableObject_Generic).toEqual({
      ConnectEntityTypeId: 'Household',
      Id: '',
      Location: loading,
      SignedURL: '',
      Subtitle: loading,
      Title: loading,
    });
    expect(wire.ShareableUpdateItem).toEqual({
      UpdateItemId: '0',
      UpdateItemTypeId: '',
      Name: '',
      Date: '1900-01-01',
      GenderId: '',
      LocationString: '',
      IsRead: false,
      HasAccess: false,
      HasShare: false,
      HouseholdId: '0',
      ParentsNames: '',
      BirthType: '',
      MemberId: '',
    });
    // The _<input>InDataFetchStatus integers are runtime bookkeeping: the contract leaves them out.
    expect(Object.keys(wire).filter((key) => key.endsWith('DataFetchStatus'))).toEqual([]);
  });

  it('toSharedObjectDetailVariablesWire sends an empty Long Integer as "0"', () => {
    const wire = toSharedObjectDetailVariablesWire({
      shareId: '9001',
      hasAccessToDeceasedHousehold: false,
      shareableObject: {},
      shareableUpdateItem: { ...updateRecord, updateItemId: '', householdId: '' },
    });
    expect(wire.ShareableUpdateItem).toMatchObject({ UpdateItemId: '0', HouseholdId: '0' });
  });
});
