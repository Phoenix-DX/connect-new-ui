import { describe, expect, it } from 'vitest';
import type { CoordinatorDetails, LdmEventDetail, LdmEventHost } from '@/api/event';
import { coordinatorDetails, eventCalendarDetail, ldmEventById } from '@/mocks/fictional/ldm';
import {
  closedMessagePopup,
  closedPhonePopup,
  contactByEmailArgs,
  datePart,
  directionsQuery,
  hasDirectionsAddresses,
  hasSpecialNeeds,
  hostContactPopupData,
  hostMessageData,
  hostPhoneCallData,
  INITIAL_LDM_EVENT_DETAIL_STATE,
  isCoordinatorAvailable,
  ldmEventDetailReducer,
  organiserMessageData,
  restoreLdmEventDetail,
  type LdmEventDetailState,
} from './ldmEventDetailState';

/* The pure part of ScreenBlock_EventDetail_V2, with the fictional LDM meals of src/mocks/fictional/ldm.ts: the
   Castillo meal (70342, the user is a guest) and the meal the Vitales host (70388). */
const TODAY = new Date('2026-10-24T10:00:00');

function meal(eventId: string): LdmEventDetail {
  const e = ldmEventById(eventId);
  if (!e) throw new Error(`no meal ${eventId}`);
  const wire = eventCalendarDetail(e, TODAY);
  return {
    Host: wire.Host,
    Guests: wire.Guests.List,
    SpecialNeeds: {
      Diet: wire.SpecialNeeds.Diet.List,
      Mobility: wire.SpecialNeeds.Mobility.List,
      Other: wire.SpecialNeeds.Other.List,
    },
  };
}
function coordinator(eventId: string): CoordinatorDetails {
  const e = ldmEventById(eventId);
  if (!e) throw new Error(`no meal ${eventId}`);
  return coordinatorDetails(e, TODAY);
}
const host = (patch: Partial<LdmEventHost> = {}): LdmEventHost => ({ ...meal('70342').Host, ...patch });

describe('ldmEventDetailReducer and the view cache', () => {
  it('assigns the variables of a patch and marks the state as saved', () => {
    const next = ldmEventDetailReducer(INITIAL_LDM_EVENT_DETAIL_STATE, { minBannerHeight: 230 });
    expect(next).toEqual({ ...INITIAL_LDM_EVENT_DETAIL_STATE, minBannerHeight: 230, isSaved: true });
    expect(INITIAL_LDM_EVENT_DETAIL_STATE.isSaved).toBe(false);
  });

  it('restores a saved view with both contact popups closed', () => {
    const saved = ldmEventDetailReducer(INITIAL_LDM_EVENT_DETAIL_STATE, {
      isFetching: false,
      hasInformation: true,
      contactByPhoneData: { Phone: '+54 291 555 0141', ContactPopupData: { Name: 'Rubén Castillo', ShowPopup: true } },
      contactByMessageData: { Email: 'ruben.castillo@example.com', ContactPopupData: { ShowPopup: true } },
    });
    expect(restoreLdmEventDetail(saved)).toEqual({
      ...saved,
      contactByPhoneData: { Phone: '+54 291 555 0141', ContactPopupData: { Name: 'Rubén Castillo', ShowPopup: false } },
      contactByMessageData: { Email: 'ruben.castillo@example.com', ContactPopupData: { ShowPopup: false } },
    });
  });

  it('starts a view left before the first assignment again from the variables of a new visit', () => {
    expect(restoreLdmEventDetail(INITIAL_LDM_EVENT_DETAIL_STATE)).toBe(INITIAL_LDM_EVENT_DETAIL_STATE);
  });

  it('closes a popup that was never opened with ShowPopup False', () => {
    expect(closedPhonePopup({})).toEqual({ ContactPopupData: { ShowPopup: false } });
    expect(closedMessagePopup({ Email: 'a@example.com' })).toEqual({
      Email: 'a@example.com',
      ContactPopupData: { ShowPopup: false },
    });
  });
});

describe('the read helpers', () => {
  it('datePart keeps "YYYY-MM-DD" of a Date Time text', () => {
    expect(datePart('2026-06-14T12:30:00')).toBe('2026-06-14');
    expect(datePart('')).toBe('');
  });

  it('the coordinator is available until GetCoordinatorDetails answers, then by Out_HasContent', () => {
    expect(isCoordinatorAvailable(INITIAL_LDM_EVENT_DETAIL_STATE)).toBe(true);
    const fetched = (hasContent: boolean): LdmEventDetailState => ({
      ...INITIAL_LDM_EVENT_DETAIL_STATE,
      coordinator: { coordinatorDetails: coordinator('70342'), hasContent },
    });
    expect(isCoordinatorAvailable(fetched(true))).toBe(true);
    expect(isCoordinatorAvailable(fetched(false))).toBe(false);
  });

  it('hasSpecialNeeds is true when one of the three lists has an item', () => {
    expect(hasSpecialNeeds(meal('70388').SpecialNeeds)).toBe(true);
    expect(hasSpecialNeeds(meal('70342').SpecialNeeds)).toBe(false);
  });
});

describe('the contact popups', () => {
  it('shows the host in the message popup with the flipped name and the locality without the bracketed part', () => {
    const h = host({ HouseholderName: 'Castillo, Rubén & Marta', EventLocalityName: 'Bahia Blanca (Centro)' });
    expect(hostMessageData(h)).toEqual({
      Email: h.Email,
      Phone: h.MobilePhone,
      ContactPopupData: {
        ImageURL: h.SignedURL,
        Name: 'Rubén & Marta Castillo',
        Locality: 'Bahia Blanca',
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        ShowPopup: true,
        CountryName: 'Argentina',
      },
    });
  });

  it('sends Host.Phone in the phone popup only when the mobile, home and work phones are empty', () => {
    const withMobile = host({ MobilePhone: '+54 291 555 0201', HomePhone: '', WorkPhone: '' });
    expect(hostPhoneCallData(withMobile)).toMatchObject({ Phone: '', MobilePhone: '+54 291 555 0201' });
    const without = host({ MobilePhone: '', HomePhone: '', WorkPhone: '', Phone: '+54 291 555 0299' });
    expect(hostPhoneCallData(without)).toMatchObject({ Phone: '+54 291 555 0299', MobilePhone: '' });
    expect(hostPhoneCallData(without).ContactPopupData).toEqual(hostContactPopupData(without));
  });

  it('keeps the record defaults without a host', () => {
    expect(hostContactPopupData(undefined)).toEqual({
      ImageURL: '',
      Name: '',
      Locality: '',
      TimezoneName: '',
      TimezoneOffset: 0,
      ShowPopup: true,
      CountryName: '',
    });
  });

  it('shows the coordinator with the LDM logo, "Contact" and the combined email and phone', () => {
    const c = coordinator('70342');
    expect(organiserMessageData(c, '/img/ldm-logo.svg')).toEqual({
      Email: c.CoordinatorEmail,
      Phone: '+54 291 555 0199',
      IsComboEmailAndPhone: true,
      ContactPopupData: {
        ImageURL: '/img/ldm-logo.svg',
        IsAvatarImage: false,
        ActionName: 'Contact',
        Name: 'Gustavo Ríos',
        Locality: c.LocalityName,
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        ShowPopup: true,
        DisplayContactNumber: '+54 291 555 0199',
      },
    });
  });

  it('builds the email arguments from the popup, the coordinator and the meal', () => {
    const event = meal('70342');
    const c = coordinator('70342');
    const state: LdmEventDetailState = {
      ...INITIAL_LDM_EVENT_DETAIL_STATE,
      event,
      coordinator: { coordinatorDetails: c, hasContent: true },
      contactByMessageData: organiserMessageData(c, '/img/ldm-logo.svg'),
      contactByMessageIsCoordinator: true,
    };
    expect(contactByEmailArgs(state)).toEqual({
      avatarURL: '/img/ldm-logo.svg',
      contactName: 'Gustavo Ríos',
      contactLocality: c.LocalityName,
      contactCountry: '',
      emailTo: c.CoordinatorEmail,
      isCoordinator: true,
      subject: `${c.LDMEventName} - ${datePart(c.EventDate)}`,
      date: datePart(event.Host.EventDate),
      locality: event.Host.EventLocalityName,
    });
  });
});

describe('the directions to the host', () => {
  it('needs the host address and the main hall address', () => {
    expect(hasDirectionsAddresses(host())).toBe(true);
    expect(hasDirectionsAddresses(host({ FormattedAddress: '' }))).toBe(false);
    expect(hasDirectionsAddresses(host({ MainHallFormattedAddress: '' }))).toBe(false);
    expect(hasDirectionsAddresses(undefined)).toBe(false);
  });

  it('goes from the main hall coordinates to the household coordinates', () => {
    const h = host({ MainHallUseLatLong: true, MainHallLatitude: '-38.7196', MainHallLongititude: '-62.2724' });
    expect(directionsQuery(h, { Latitude: '-38.7180', Longitude: '-62.2650', UseCoordinates: true })).toBe(
      '&origin=-38.7196,-62.2724&destination=-38.7180,-62.2650&travelmode=driving',
    );
  });

  it('uses the encoded clean addresses without usable coordinates', () => {
    const h = host({
      FormattedAddress: '77 Calle Sarmiento,\nBahia Blanca',
      MainHallUseLatLong: false,
      MainHallFormattedAddress: '1210 Calle Zapiola',
    });
    expect(directionsQuery(h, { Latitude: '0', Longitude: '-62.2650', UseCoordinates: true })).toBe(
      '&origin=1210%20Calle%20Zapiola&destination=77%20Calle%20Sarmiento%2C%20Bahia%20Blanca&travelmode=driving',
    );
    const noLatLong = host({ MainHallUseLatLong: true, MainHallLatitude: '', MainHallLongititude: '-62.2724' });
    expect(directionsQuery(noLatLong, { Latitude: '1', Longitude: '1', UseCoordinates: false })).toBe(
      `&origin=${encodeURIComponent(noLatLong.MainHallFormattedAddress)}` +
        `&destination=${encodeURIComponent(noLatLong.FormattedAddress)}&travelmode=driving`,
    );
  });
});
