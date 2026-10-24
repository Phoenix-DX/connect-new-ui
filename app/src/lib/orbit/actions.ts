/* Client actions of Connect2_OrbitMobile_MUI ported 1:1 for the shared blocks. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js; `TF:<n>` = line of the module script
   migration/runtime-sources/Connect2_OrbitMobile_MUI.TimeFormat.js (global `TimeFormat`). A Date is "yyyy-MM-dd",
   handed to the JS nodes as a local-midnight Date (lib/osDateTime.ts parseOsDate). */
import { callAction } from '@/api/client/callAction';
import { fetchBookletGuestsMaxRows, fetchBookletHelpersMaxRows } from '@/api/event';
import { log } from '@/platform/log/log';
import { setClientVar } from '@/platform/session/session';
import { parseOsDate } from '@/lib/osDateTime';
import type { MemberInformation } from './structures';
import {
  DirectoryAPIFilter,
  ImageSigningSize,
  OrbitMilestoneType,
  OrbitSkeletonLoading,
  TimeFormat,
} from './staticEntities';

/** OutSystems NullDate() (1900-01-01), which the formatters treat as "no date". */
const isNullDate = (date: Date) => date.getFullYear() === 1900 && date.getMonth() === 0 && date.getDate() === 1;

/** TimeFormat.getWeekDay (TF:25-40): the weekday name of a JS day number (0 = Sunday), "Lord's Day Meal" for Sunday
    when replaceSunday; abbreviated to 3 letters, else optionally to its first letter; optional trailing comma. */
export function timeFormatGetWeekDay(
  day: number,
  isAbbreviate: boolean,
  isFirstLetter: boolean,
  useComma: boolean,
  replaceSunday: boolean,
): string {
  const days = replaceSunday
    ? ["Lord's Day Meal", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const name = days[day] ?? '';
  const out = isAbbreviate ? name.substring(0, 3) : isFirstLetter ? name.substring(0, 1) : name;
  return useComma ? `${out},` : out;
}

/** GetFormattedDate_Weekday(In_Date, In_IsFirstLetterOnly, In_ReplaceSunday) → Out_Weekday (C:2646-2700, JS node
    CreateFormattedWeekday C:2749-2765): "" for the null date, else TimeFormat.getWeekDay(date.getDay(), false,
    In_IsFirstLetterOnly, false, In_ReplaceSunday). */
export function getFormattedDate_Weekday(
  inDate: string,
  inIsFirstLetterOnly: boolean,
  inReplaceSunday: boolean,
): string {
  const date = parseOsDate(inDate);
  if (isNullDate(date)) return '';
  return timeFormatGetWeekDay(date.getDay(), false, inIsFirstLetterOnly, false, inReplaceSunday);
}

/** GetFormattedDate_Single(In_Date, In_TimeFormatId) → Out_FormattedDate (C:2436-2480, JS node CreateFormattedDate
    C:2531-2549): "" for the null date; else the day of month (Day or CalendarDate), then " " + two-digit month
    (Month or CalendarDate, TimeFormat.getMonth = UTC month, TF:42-46), then " " + UTC year (Year or CalendarDate,
    TF:90-92). The JS concatenates onto "" (a lone day stays a number turned into text). */
export function getFormattedDate_Single(inDate: string, inTimeFormatId: number): string {
  const date = parseOsDate(inDate);
  if (isNullDate(date)) return '';
  const all = inTimeFormatId === TimeFormat.CalendarDate;
  let formatted = '';
  if (inTimeFormatId === TimeFormat.Day || all) formatted = String(date.getDate());
  if (inTimeFormatId === TimeFormat.Month || all) {
    const month = date.getUTCMonth() + 1;
    formatted = `${formatted} ${month < 10 ? `0${month}` : month}`;
  }
  if (inTimeFormatId === TimeFormat.Year || all) formatted = `${formatted} ${date.getUTCFullYear()}`;
  return formatted;
}

/** Skeleton_Loading OnInitialize (Skeleton_Loading.mvc.js:1001-1088): NumberOfBlocks per In_SkeletonLoadingId (the
    rows of the skeleton's List); the other ids return before the list is filled (0 rows). */
export function skeletonNumberOfBlocks(inSkeletonLoadingId: number): number {
  switch (inSkeletonLoadingId) {
    case OrbitSkeletonLoading.OrbitLanding:
      return 6;
    case OrbitSkeletonLoading.TransportDetail:
      return 15;
    case OrbitSkeletonLoading.EventDetail:
      return 4;
    case OrbitSkeletonLoading.MilestoneDetailGuest:
      return 12;
    case OrbitSkeletonLoading.ViewDocument:
      return 25;
    case OrbitSkeletonLoading.HostSurvey:
      return 6;
    case OrbitSkeletonLoading.HostSurveyHelpers:
      return 15;
    default:
      return 0; // MilestoneWrapper sets 0; any other id returns early (:1053-1055)
  }
}

/* ---- Wave 8, batch O-A2 (Card_Template, Card_Event, Card_Milestone) ---- */

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** GetCSSVarFromMainColor(In_MainColor, In_Shade) → Out_ColorVar (C:2234-2262, assign C:2251):
    "var(--orbit-" + Trim(In_MainColor) + "-" + Trim(In_Shade) + ")". */
export function getCSSVarFromMainColor(inMainColor: string, inShade: string): string {
  return `var(--orbit-${inMainColor.trim()}-${inShade.trim()})`;
}

/** `DateTimeToDate(value) = NullDate()`: the OutSystems null DateTime ("" or 1900-01-01). */
const isNullDateTime = (value: string) => value === '' || value.startsWith('1900-01-01');

/** The JS Date an OutSystems DateTime becomes in a JS node. The JS nodes below read only its getUTC* parts, which
    are the parts of the wire value (OutSystems sends DateTime in UTC); a value without a zone is taken as that UTC
    wire value, so the output does not depend on the browser time zone (same as the original). */
function wireDateTime(value: string): Date {
  if (/(?:[zZ]|[+-]\d{2}:?\d{2})$/.test(value)) return new Date(value);
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(value);
  if (!m) return new Date(Date.UTC(1900, 0, 1));
  const [, y, mo, d, h = '0', mi = '0', s = '0'] = m;
  return new Date(Date.UTC(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi), Number(s)));
}

/** TimeFormat.convertHour (TF:11-19): 24 h → 12 h (0 → 12). */
const convertHour = (hour: number) => (hour === 0 ? 12 : hour <= 12 ? hour : hour - 12);
/** TimeFormat.fixMinutes (TF:7-9). */
const fixMinutes = (minutes: number) => (minutes <= 9 ? `0${minutes}` : String(minutes));
/** TimeFormat.getTimeDay (TF:21-23). */
const getTimeDay = (hour: number) => (hour <= 11 ? ' AM' : ' PM');

/** GetFormattedDateTime(In_DateTime, In_IncludeTime, In_IncludeWeekDay, In_WeekDayFirstLetter, In_AbbreviateWeekDay,
    In_SeparateByCommas, In_ReplaceSunday) → Out_FormattedDateTime (C:2770-2917): "" for the null date (C:2792); else
    the JS node CreateFormattedTransportDateTime (C:2918-2938): [weekday + " "] + UTC day + " " + 3-letter month + " " +
    UTC year [+ " h:mm AM"], e.g. "Fri 16 Oct 2026 9:05 AM". */
export function getFormattedDateTime(
  inDateTime: string,
  inIncludeTime: boolean,
  inIncludeWeekDay: boolean,
  inWeekDayFirstLetter = false,
  inAbbreviateWeekDay = false,
  inSeparateByCommas = false,
  inReplaceSunday = false,
): string {
  if (isNullDateTime(inDateTime)) return '';
  const date = wireDateTime(inDateTime);
  const weekDay = inIncludeWeekDay
    ? `${timeFormatGetWeekDay(date.getUTCDay(), inAbbreviateWeekDay, inWeekDayFirstLetter, inSeparateByCommas, inReplaceSunday)} `
    : '';
  const time = inIncludeTime
    ? ` ${convertHour(date.getUTCHours())}:${fixMinutes(date.getUTCMinutes())}${getTimeDay(date.getUTCHours())}`
    : '';
  const month = (MONTH_NAMES[date.getUTCMonth()] ?? '').substring(0, 3);
  return `${weekDay}${date.getUTCDate()} ${month} ${date.getUTCFullYear()}${time}`;
}

/** GetFormattedDateTimeById(In_MilestoneTypeId, In_MilestoneDateTime) → Out_FormattedDateTime (C:2939-3033):
    transport types (boat, flight, train, vehicle; C:2953) → with time and abbreviated weekday; accommodation
    guest/host/helper (C:2962) → no time, full weekday with comma; meal guest/host/helper → with time, full weekday
    with comma; any other type → "". */
export function getFormattedDateTimeById(inMilestoneTypeId: string, inMilestoneDateTime: string): string {
  const T = OrbitMilestoneType;
  const id = inMilestoneTypeId;
  if (id === T.Boat || id === T.Flight || id === T.Train || id === T.Vehicle)
    return getFormattedDateTime(inMilestoneDateTime, true, true, false, true, false, false);
  if (id === T.AccommodationGuest || id === T.AccommodationHost || id === T.AccommodationHelper)
    return getFormattedDateTime(inMilestoneDateTime, false, true, false, false, true, false);
  if (id === T.MealGuest || id === T.MealHost || id === T.MealHelper)
    return getFormattedDateTime(inMilestoneDateTime, true, true, false, false, true, false);
  return '';
}

/** GetFormattedTime_FromDateTime(In_DateTime) → Out_FormattedDateTime (C:3247-3327): "" for the null date; else the
    JS node CreateFormattedTime (C:3328-3341): UTC "h:mm AM". */
export function getFormattedTime_FromDateTime(inDateTime: string): string {
  if (isNullDateTime(inDateTime)) return '';
  const date = wireDateTime(inDateTime);
  return `${convertHour(date.getUTCHours())}:${fixMinutes(date.getUTCMinutes())}${getTimeDay(date.getUTCHours())}`;
}

/* ---- Wave 8, batch O-A2, part b (Card_MemberInformation, MilestoneHeader, HostSurvey_PillItem, EventDetail_SubSection) ---- */

/** Card_MemberInformation.mvc.js = migration/screens/MilestoneDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.
    Orbit_Blocks.Card_MemberInformation.mvc.js (`CMI:<n>`). */

/** GetCacheableSignedImageURL (Connect2_LegacyShared.controller.js:3692-, called at CMI:578-): the signed photo URL of
    an entity ("" when it has none). Connect2_LegacyShared is built by another agent and exposes no such action yet:
    callers inject it, the default knows no photo. */
export type GetCacheableSignedImageURL = (entityId: string, type: string, size: string) => Promise<string>;
const noSignedImageURL: GetCacheableSignedImageURL = () => Promise.resolve('');

/** The photo that a member without a signed URL shows (Images.User, CMI:595). */
export const MEMBER_PHOTO_PLACEHOLDER = 'img/Connect2_LegacyShared.User.png';
/** The mock photo of the original: with it as SignedPhotoURL, OnReady keeps it without asking for a signed URL (CMI:573). */
const MEMBER_MOCK_PHOTO_URL = 'https://publicimageconnect.s3.ap-southeast-2.amazonaws.com/memberMock.png';

/** Card_MemberInformation OnReady (CMI:562-620): LoadedPhotoURL (initially "") is set only while it is "": when
    In_MemberInformation.SignedPhotoURL is not the mock photo URL the signed URL of the member (MemberId, filter
    Member, size Small) is asked, and LoadedPhotoURL = that URL, or Images.User when it is ""; for the mock photo URL
    LoadedPhotoURL = SignedPhotoURL. Returns the new LoadedPhotoURL. `userImage` is Images.User's URL. */
export async function cardMemberInformationOnReady(
  loadedPhotoURL: string,
  memberInformation: MemberInformation,
  userImage: string,
  getSignedImageURL: GetCacheableSignedImageURL = noSignedImageURL,
): Promise<string> {
  if (loadedPhotoURL !== '') return loadedPhotoURL;
  const signedPhotoURL = memberInformation.SignedPhotoURL ?? '';
  if (signedPhotoURL === MEMBER_MOCK_PHOTO_URL) return signedPhotoURL;
  const url = await getSignedImageURL(
    memberInformation.MemberId ?? '',
    DirectoryAPIFilter.Member,
    ImageSigningSize.Small,
  );
  return url !== '' ? url : userImage;
}

/** Name expression (CMI:376-390): Title + " " + FirstName when not "" + " " + LastName when not "". */
export function memberInformationName(m: MemberInformation): string {
  const first = m.FirstName ?? '';
  const last = m.LastName ?? '';
  return `${m.Title ?? ''}${first !== '' ? ` ${first}` : ''}${last !== '' ? ` ${last}` : ''}`;
}

/** Location expression (CMI:416-436): In_HouseholdLocality - In_HouseholdCountryCode when both are not "", else the
    member's Locality + " - " (when CountryCode is not "") + CountryCode. */
export function memberInformationLocation(
  m: MemberInformation,
  householdLocality: string,
  householdCountryCode: string,
): string {
  if (householdLocality !== '' && householdCountryCode !== '') return `${householdLocality} - ${householdCountryCode}`;
  const countryCode = m.CountryCode ?? '';
  return `${m.Locality ?? ''}${countryCode !== '' ? ' - ' : ''}${countryCode}`;
}

/** Style of the age text (CMI:477-481): "" when the age text has 0-2 characters, else "font-size: 0.8em;
    justify-self: start;". */
export function memberInformationAgeTextStyle(age: string): string {
  return age.length >= 0 && age.length < 3 ? '' : 'font-size: 0.8em; justify-self: start;';
}

/* SyncOrbitMilestoneTypes (C:7447-7490) and GetLocalOrbitMilestoneTypeById (C:4104-4140) write and read the local
   entity LocalOrbitMilestoneType, which the shell's app start fills (SyncAllOrbitStaticEntities, CR-EventDetail-1): the
   store (IndexedDB with an in-memory mirror, F12) lives in shell/localEntities/orbitStaticEntities.ts. */
export {
  getLocalOrbitMilestoneTypeById,
  getLocalOrbitMilestoneTypesById,
  localOrbitMilestoneTypesRead,
  syncOrbitMilestoneTypes,
  useOrbitStaticEntitiesVersion,
} from '@/platform/storage/localEntities/orbitStaticEntities';

/* ---- F11 (CR-MilestoneDetail-1, CR-MilestoneDetail-3) ---- */

/** CheckDirectoryAccess(Id, Type) → HasAccess (C:1081-1150): server action GetDirectoryAccess (Id Long Integer, Type
    Text; `Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess`, C:8508-8530); HasAccess = not Response.RecordDisabled. */
export async function checkDirectoryAccess(id: string, type: string): Promise<boolean> {
  const out = await callAction('Connect2_OrbitMobile_MUI', 'ActionGetDirectoryAccess', { Id: id, Type: type });
  return !out.Response.RecordDisabled;
}

/** Set_BookletGuestsMaxRows: the server action GetBookletGuestsMaxRows (no inputs; in the domain api/event,
    fetchBookletGuestsMaxRows), then the client variable BookletGuestsMaxRows = its output (Integer). A server error
    propagates (the flow has no handler). */
export async function set_BookletGuestsMaxRows(): Promise<void> {
  setClientVar('Connect2_OrbitMobile_MUI.BookletGuestsMaxRows', await fetchBookletGuestsMaxRows());
}

/** Set_BookletHelpersMaxRows: the server action GetBookletHelpersMaxRows (in the domain api/event,
    fetchBookletHelpersMaxRows), then the client variable BookletHelpersMaxRows = its output. */
export async function set_BookletHelpersMaxRows(): Promise<void> {
  setClientVar('Connect2_OrbitMobile_MUI.BookletHelpersMaxRows', await fetchBookletHelpersMaxRows());
}

/** SetBookletMaxRows (C:6599-6620): Set_BookletGuestsMaxRows, then Set_BookletHelpersMaxRows (sequential: the second
    call starts after the first one answered; an error of the first skips the second). CR-EventBooklet-1. */
export async function setBookletMaxRows(): Promise<void> {
  await set_BookletGuestsMaxRows();
  await set_BookletHelpersMaxRows();
}

/** OutSystems Substr(Text, Start, Length): "" when Start or Length is negative. */
const substr = (text: string, start: number, length: number): string =>
  start < 0 || length < 0 ? '' : text.substring(start, start + length);

/** AddExtensionToFile(FileName, FileExtensionId) → FileWithExtension (C:523-575): "." + FileExtensionId is assigned
    first and then overwritten: when FileName already ends with FileExtensionId, Trim(FileName); else
    Trim(FileName) + FileExtensionId, without the dot (as compiled: "Report" + "pdf" → "Reportpdf"). */
export function addExtensionToFile(fileName: string, fileExtensionId: string): string {
  const ext = fileExtensionId;
  if (substr(fileName, fileName.length - ext.length, ext.length) === ext) return fileName.trim();
  return fileName.trim() + ext;
}

/* ---- F11 (CR-LDM_EventDetail_V2-1): client actions and JS nodes of the LDM screen blocks ---- */

/** ApplicationEvents_LDM records the LDM routes log (Connect2_OrbitMobile_MUI.model.js staticEntities
    .applicationEvents_LDM): the union of LDM_EventDetail_V2's and LDM_MyEvents_V2's. */
export type ApplicationEvent_LDM =
  | 'RequestAPI_EventDetail'
  | 'RequestAPI_CalendarEvents'
  | 'RequestAPI_EventLocalities'
  | 'HostClickedGuestHousehold'
  | 'GuestClickedOtherGuestHousehold'
  | 'MyTimelineGoogleMapsDirections'
  | 'MyTimelineEventClicked'
  | 'MyTimelineHouseholdClicked'
  | 'MyTimelineApplyFilter'
  | 'ContactEventOrganiser';

/** AddAuditRequestAPIEvent / AddAuditClickedEvent / AddAuditEventDetailEvent / AddAuditEventFilterEvent (C:119-514):
    JSON of the audit payload → zOnApplicationEvent_Wrapper. Telemetry is not wired in the mock phase (decision U17,
    as OrbitLanding): the event goes to the log, without the payload's personal fields. */
export function addAuditEvent_LDM(event: ApplicationEvent_LDM, ids: Record<string, string>): void {
  log.info('ApplicationEvent', { EventId: event, ...ids });
}

/** GetCurrentTimeInMill (C): the current time in milliseconds. */
export const getCurrentTimeInMill = (): number => Date.now();

/** GetLocalityNameJS, the same JS node in EventCard_Guests (OnHandle_ClickedEmail, EventCard_Guests.mvc.js :987-991),
    EventDetail_ListItem (:793-802) and ScreenBlock_EventDetail_V2 (OnHandle_ContactHost_Message / _Call, :2707-2720):
    the locality without a bracketed part. */
export const getLocalityName = (locality: string): string => locality.replace(/\s*\([^)]*\)/, '');
