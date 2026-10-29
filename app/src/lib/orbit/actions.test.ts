import { describe, expect, it, vi } from 'vitest';
import { getClientVar } from '@/platform/session/session';
import {
  addExtensionToFile,
  deserializeQRCodeInformation,
  getFormattedLocalDateTime,
  checkDirectoryAccess,
  setBookletMaxRows,
  getLocalityName,
  cardMemberInformationOnReady,
  getCSSVarFromMainColor,
  getFormattedDate_Single,
  getFormattedDate_Weekday,
  getFormattedDateTime,
  getFormattedDateTimeById,
  getFormattedTime_FromDateTime,
  getLocalOrbitMilestoneTypeById,
  memberInformationAgeTextStyle,
  memberInformationLocation,
  memberInformationName,
  skeletonNumberOfBlocks,
  syncOrbitMilestoneTypes,
  timeFormatGetWeekDay,
} from './actions';
import { BOOKLET_MAX_ROWS } from '@/mocks/modules/Connect2_OrbitMobile_MUI/mocks';
import { OrbitSkeletonLoading, TimeFormat } from './staticEntities';

describe('Connect2_OrbitMobile_MUI date formatters', () => {
  it('TimeFormat.getWeekDay: full, first letter, abbreviated, comma and the Sunday replacement', () => {
    expect(timeFormatGetWeekDay(1, false, false, false, false)).toBe('Monday');
    expect(timeFormatGetWeekDay(1, false, true, false, false)).toBe('M');
    expect(timeFormatGetWeekDay(3, true, true, true, false)).toBe('Wed,');
    expect(timeFormatGetWeekDay(0, false, false, false, true)).toBe("Lord's Day Meal");
    expect(timeFormatGetWeekDay(0, false, true, false, true)).toBe('L');
  });

  it('GetFormattedDate_Weekday: first letter of the local weekday; "" for the null date', () => {
    expect(getFormattedDate_Weekday('2026-11-23', true, false)).toBe('M');
    expect(getFormattedDate_Weekday('2026-11-29', true, true)).toBe('L');
    expect(getFormattedDate_Weekday('2026-11-29', false, false)).toBe('Sunday');
    expect(getFormattedDate_Weekday('', true, false)).toBe('');
    expect(getFormattedDate_Weekday('1900-01-01', true, false)).toBe('');
  });

  it('GetFormattedDate_Single: day of month for Day; month and year appended with a space', () => {
    expect(getFormattedDate_Single('2026-11-03', TimeFormat.Day)).toBe('3');
    expect(getFormattedDate_Single('2026-11-23', TimeFormat.Weekday)).toBe('');
    expect(getFormattedDate_Single('1900-01-01', TimeFormat.Day)).toBe('');
    const local = new Date(2026, 10, 23);
    const month = String(local.getUTCMonth() + 1).padStart(2, '0');
    expect(getFormattedDate_Single('2026-11-23', TimeFormat.Month)).toBe(` ${month}`);
    expect(getFormattedDate_Single('2026-11-23', TimeFormat.CalendarDate)).toBe(
      `23 ${month} ${local.getUTCFullYear()}`,
    );
  });
});

describe('Skeleton_Loading OnInitialize', () => {
  it('NumberOfBlocks per skeleton id; ids without a list get none', () => {
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.OrbitLanding)).toBe(6);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.TransportDetail)).toBe(15);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.EventDetail)).toBe(4);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.MilestoneDetailGuest)).toBe(12);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.ViewDocument)).toBe(25);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.HostSurvey)).toBe(6);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.HostSurveyHelpers)).toBe(15);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.MilestoneWrapper)).toBe(0);
    expect(skeletonNumberOfBlocks(OrbitSkeletonLoading.SingleItem)).toBe(0);
  });
});

/* ---- Wave 8, batch O-A2, part b (Card_MemberInformation, MilestoneHeader, HostSurvey_PillItem, EventDetail_SubSection) ---- */

describe('Card_MemberInformation actions', () => {
  const user = 'img/user.png';
  it('OnReady: the mock photo URL is kept without a call; a signed URL is asked for Member / Small otherwise', async () => {
    const mock = 'https://publicimageconnect.s3.ap-southeast-2.amazonaws.com/memberMock.png';
    const ask = vi.fn(() => Promise.resolve('https://photos.example.com/1.jpg'));
    expect(await cardMemberInformationOnReady('', { SignedPhotoURL: mock }, user, ask)).toBe(mock);
    expect(ask).not.toHaveBeenCalled();
    expect(await cardMemberInformationOnReady('', { MemberId: '7', SignedPhotoURL: 'x' }, user, ask)).toBe(
      'https://photos.example.com/1.jpg',
    );
    expect(ask).toHaveBeenCalledWith('7', 'Member', 'Small');
  });

  it('OnReady: no signed URL falls back to Images.User; a loaded photo is not reloaded', async () => {
    expect(await cardMemberInformationOnReady('', { MemberId: '7' }, user, () => Promise.resolve(''))).toBe(user);
    const ask = vi.fn(() => Promise.resolve('new'));
    expect(await cardMemberInformationOnReady('old', { MemberId: '7' }, user, ask)).toBe('old');
    expect(ask).not.toHaveBeenCalled();
  });

  it('name, location and age text style expressions', () => {
    expect(memberInformationName({ Title: 'Mr', FirstName: 'Julián', LastName: '' })).toBe('Mr Julián');
    expect(memberInformationName({ Title: 'Mr', FirstName: '', LastName: 'Vitale' })).toBe('Mr Vitale');
    expect(memberInformationLocation({ Locality: 'Bahia Blanca', CountryCode: '' }, '', 'AR')).toBe('Bahia Blanca');
    expect(memberInformationLocation({ Locality: 'Bahia Blanca', CountryCode: 'AR' }, '', '')).toBe(
      'Bahia Blanca - AR',
    );
    expect(memberInformationAgeTextStyle('99')).toBe('');
    expect(memberInformationAgeTextStyle('100')).toBe('font-size: 0.8em; justify-self: start;');
  });
});

describe('SyncOrbitMilestoneTypes / GetLocalOrbitMilestoneTypeById', () => {
  it('stores the synced records (Name = Type, as compiled); an unknown id raises as Entity.get; a sync replaces all', async () => {
    await syncOrbitMilestoneTypes([
      { Id: 'helper-host', Type: 'Host', Name: 'Helper', MainIcon: 'orbit-icon-person-wave', Is_Active: true },
    ]);
    expect(getLocalOrbitMilestoneTypeById('helper-host')).toMatchObject({
      MainIcon: 'orbit-icon-person-wave',
      Type: 'Host',
      Name: 'Host',
    });
    expect(() => getLocalOrbitMilestoneTypeById('nope')).toThrow(
      'OSUSR_HQ9_LOCALORBITMILESTONETYPE with id nope was not found',
    );
    await syncOrbitMilestoneTypes([]);
    expect(() => getLocalOrbitMilestoneTypeById('helper-host')).toThrow('was not found');
  });
});

/* ---- Wave 8, batch O-A2 (Card_Template, Card_Event, Card_Milestone) ---- */
describe('O-A2 formatters', () => {
  it('getCSSVarFromMainColor trims both parts', () => {
    expect(getCSSVarFromMainColor(' purple ', '2')).toBe('var(--orbit-purple-2)');
  });

  it('getFormattedDateTime: null date → ""; weekday, comma, Sunday replacement, time (UTC parts of the wire value)', () => {
    expect(getFormattedDateTime('', true, true)).toBe('');
    expect(getFormattedDateTime('1900-01-01T00:00:00Z', true, true)).toBe('');
    expect(getFormattedDateTime('2026-10-18T00:07:00Z', true, true, false, true, false, false)).toBe(
      'Sun 18 Oct 2026 12:07 AM',
    );
    expect(getFormattedDateTime('2026-10-18T13:30:00Z', false, true, false, false, true, true)).toBe(
      "Lord's Day Meal, 18 Oct 2026",
    );
    expect(getFormattedDateTime('2026-10-16T12:00:00', true, false)).toBe('16 Oct 2026 12:00 PM');
    expect(getFormattedDateTime('2026-10-16T22:15:00+02:00', true, true, true)).toBe('F 16 Oct 2026 8:15 PM');
  });

  it('getFormattedDateTimeById: transport, accommodation, meal, other', () => {
    const dt = '2026-10-17T19:45:00Z';
    expect(getFormattedDateTimeById('transport-train', dt)).toBe('Sat 17 Oct 2026 7:45 PM');
    expect(getFormattedDateTimeById('accommodation-host', dt)).toBe('Saturday, 17 Oct 2026');
    expect(getFormattedDateTimeById('meal-helper', dt)).toBe('Saturday, 17 Oct 2026 7:45 PM');
    expect(getFormattedDateTimeById('meeting-guest', dt)).toBe('');
  });

  it('getFormattedTime_FromDateTime: h:mm AM/PM, "" for the null date', () => {
    expect(getFormattedTime_FromDateTime('2026-10-16T23:59:00Z')).toBe('11:59 PM');
    expect(getFormattedTime_FromDateTime('2026-10-16T12:05:00Z')).toBe('12:05 PM');
    expect(getFormattedTime_FromDateTime('')).toBe('');
  });
});

describe('F11 shared Orbit actions', () => {
  it('CheckDirectoryAccess: HasAccess = not RecordDisabled (mock: every record enabled)', async () => {
    expect(await checkDirectoryAccess('880101', 'Member')).toBe(true);
  });

  it('AddExtensionToFile keeps a name that ends with the extension, else appends it without a dot (as compiled)', () => {
    expect(addExtensionToFile('Rooms.pdf', 'pdf')).toEqual('Rooms.pdf');
    expect(addExtensionToFile('Rooms ', 'pdf')).toEqual('Roomspdf');
    expect(addExtensionToFile('', 'pdf')).toEqual('pdf');
  });

  it('GetLocalityNameJS drops the first bracketed part', () => {
    expect(getLocalityName('Bahia Blanca (Main Hall)')).toEqual('Bahia Blanca');
  });
});

describe('CR-EventBooklet-1 SetBookletMaxRows', () => {
  it('fills the client variables BookletGuestsMaxRows / BookletHelpersMaxRows from the two server actions', async () => {
    localStorage.clear();
    // Type default 0 (Connect2_OrbitMobile_MUI.clientVariables.js:8-19, no compiled default).
    expect(getClientVar('Connect2_OrbitMobile_MUI.BookletGuestsMaxRows')).toBe(0);
    expect(getClientVar('Connect2_OrbitMobile_MUI.BookletHelpersMaxRows')).toBe(0);
    await setBookletMaxRows();
    expect(getClientVar('Connect2_OrbitMobile_MUI.BookletGuestsMaxRows')).toBe(BOOKLET_MAX_ROWS.guests);
    expect(getClientVar('Connect2_OrbitMobile_MUI.BookletHelpersMaxRows')).toBe(BOOKLET_MAX_ROWS.helpers);
  });
});

/* The scan flow of the Orbit admin pages (OrbitAdminEventDetail, OrbitAdminMilestoneDetail; auto decision O2). */
describe('deserializeQRCodeInformation', () => {
  it('reads the event id, the member id and the milestone id of a member QR code', () => {
    expect(deserializeQRCodeInformation('{"eventid":7301,"id":9101,"milestoneid":""}')).toEqual({
      EventId: '7301',
      MemberId: '9101',
      MilestoneId: '',
    });
  });

  it('reads the JSON names in any case and numeric texts', () => {
    expect(deserializeQRCodeInformation('{"EventId":"7301","ID":" 9101 ","MilestoneId":12}')).toEqual({
      EventId: '7301',
      MemberId: '9101',
      MilestoneId: '12',
    });
  });

  it('an empty text and missing fields give the default record', () => {
    expect(deserializeQRCodeInformation('')).toEqual({ EventId: '0', MemberId: '0', MilestoneId: '' });
    expect(deserializeQRCodeInformation('{}')).toEqual({ EventId: '0', MemberId: '0', MilestoneId: '' });
  });

  it('a text that is not JSON or a field that is not a number fails as the JSON deserializer', () => {
    expect(() => deserializeQRCodeInformation('WIFI:S:Hall-Guests;T:WPA;;')).toThrow(
      /^Failed to deserialize JSON to QRCodeInformation/,
    );
    expect(() => deserializeQRCodeInformation('{"eventid":"abc","id":1}')).toThrow(
      'Failed to deserialize JSON to QRCodeInformation: eventid',
    );
  });
});

describe('getFormattedLocalDateTime (Popup_QRCodeScan of both Orbit admin pages)', () => {
  it('gives day, 3-letter month and year on the local parts of the date, and h:mm AM/PM when asked', () => {
    const afternoon = new Date(2026, 9, 29, 14, 5);
    expect(getFormattedLocalDateTime(afternoon, false, false, false, false, false)).toBe('29 Oct 2026');
    expect(getFormattedLocalDateTime(afternoon, true, false, false, false, false)).toBe('29 Oct 2026 2:05 PM');
    expect(getFormattedLocalDateTime(new Date(2026, 0, 3, 0, 30), true, false, false, false, false)).toBe(
      '3 Jan 2026 12:30 AM',
    );
  });
});
