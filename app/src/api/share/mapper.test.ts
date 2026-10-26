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
