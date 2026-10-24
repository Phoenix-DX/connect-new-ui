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
