import { describe, expect, it } from 'vitest';
import type { MemberContactWithTimezone } from '@/api/message';
import {
  contactEmail,
  contactPhone,
  contactPopupData,
  emptyContact,
  toAssembleEventContact,
  UNAVAILABLE,
  type AssembleEventContact,
} from './assembleEventContacts';

/* The contact record of AssembleEventDetail_ContactList and the client logic of AssembleEventDetail_Contact.
   Fictional member. */
const contact = (patch: Partial<AssembleEventContact> = {}): AssembleEventContact => ({
  ...emptyContact(),
  Email: 'martin.herrera@example.org',
  CountryCode: 'AR',
  LocalityId: '252',
  HouseholdId: '88010',
  Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
  ContactDetails: {
    Id: '880101',
    Name: 'Martín Herrera',
    Location: 'San Nicolás',
    IsDisabled: false,
    IsBookmarked: false,
    AvatarURL: { Bucket: 'b', Path: 'p/880101.jpg', Type: 'Photo', SignedURL: '' },
  },
  MobilePhoneNumber: '+54 291 455 0101',
  HomePhoneNumber: '+54 291 455 0102',
  WorkPhoneNumber: '+54 291 455 0103',
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
  ...patch,
});

describe('assembleEventContacts', () => {
  it('a loading row has the null ids and empty texts', () => {
    const c = emptyContact();
    expect(c.ContactDetails.Id).toBe('0');
    expect(c.HouseholdId).toBe('0');
    expect(c.LocalityId).toBe('0');
    expect(c.Timezone).toEqual({ TimezoneLabel: '', OffsetSeconds: '0' });
    expect(c.Email).toBe('');
  });

  it('maps a GetCacheableMemberContactList record field by field and drops the other fields', () => {
    const expected = contact();
    const wire = {
      ...expected,
      Timezone: { ...expected.Timezone, TimezoneAbreviation: 'ART' },
      ContactDetails: { ...expected.ContactDetails, Extra: 'x' },
      Unused: 'y',
    } as unknown as MemberContactWithTimezone;
    expect(toAssembleEventContact(wire)).toEqual(expected);
  });

  it('the phone is the first of mobile, home and work that is not empty, else "Unavailable"', () => {
    expect(contactPhone(contact())).toBe('+54 291 455 0101');
    expect(contactPhone(contact({ MobilePhoneNumber: '' }))).toBe('+54 291 455 0102');
    expect(contactPhone(contact({ MobilePhoneNumber: '', HomePhoneNumber: '' }))).toBe('+54 291 455 0103');
    expect(contactPhone(contact({ MobilePhoneNumber: '', HomePhoneNumber: '', WorkPhoneNumber: '' }))).toBe(
      UNAVAILABLE,
    );
  });

  it('the e-mail, else "Unavailable"', () => {
    expect(contactEmail(contact())).toBe('martin.herrera@example.org');
    expect(contactEmail(contact({ Email: '' }))).toBe('Unavailable');
  });

  it('ContactPopupData: round avatar, name, locality, time zone label and offset, country', () => {
    expect(contactPopupData(contact())).toEqual({
      IsAvatarImage: true,
      Name: 'Martín Herrera',
      Locality: 'Bahia Blanca',
      TimezoneName: 'ART',
      TimezoneOffset: -10800,
      CountryName: 'Argentina',
    });
  });
});
