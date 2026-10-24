import type { TransportMilestoneType, TravelInfo } from '@/api/event';
import { getFormattedDateTimeById } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

/* Client actions of Connect2_OrbitMobile_MUI that the TransportDetail blocks call, ported 1:1. The flows of the page
   (hooks/) and its components (components/) both call them, so they sit at the page root. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js, `TF:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.TimeFormat.js (global TimeFormat). DateTimes are OutSystems
   values as text, "" = NullDate(). */

/** A wire DateTime as the JS Date a JS node receives (an instant; a value without a zone is the UTC wire value). */
function wireInstant(value: string): Date {
  if (/(?:[zZ]|[+-]\d{2}:?\d{2})$/.test(value)) return new Date(value);
  return new Date(`${value.replace(' ', 'T')}Z`);
}

/** GetSkeletonLoadingIdFromMilestoneTypeId(MilestoneTypeId) (C:4526-4590): guest milestones → MilestoneDetailGuest;
    host milestones and helper → MilestoneDetailHost; transport → TransportDetail; otherwise 0. */
export function getSkeletonLoadingIdFromMilestoneTypeId(milestoneTypeId: string): number {
  const T = OrbitMilestoneType;
  const id = milestoneTypeId;
  if (id === T.AccommodationGuest || id === T.MealGuest) return OrbitSkeletonLoading.MilestoneDetailGuest;
  if (id === T.AccommodationHost || id === T.MealHost || id === T.Helper)
    return OrbitSkeletonLoading.MilestoneDetailHost;
  if (id === T.Boat || id === T.Vehicle || id === T.Train || id === T.Flight)
    return OrbitSkeletonLoading.TransportDetail;
  return 0;
}

/** GetContactHelpdeskSubject_Transport(MilestoneTypeId, MilestoneName, DateTime, TransportNumber) →
    Out_FormattedSubject (C:2149-2177, assign C:2164-2167): MilestoneName + " - " + [TransportNumber + " - "] +
    GetFormattedDateTimeById(MilestoneTypeId, DateTime). */
export function getContactHelpdeskSubject_Transport(
  milestoneTypeId: string,
  milestoneName: string,
  dateTime: string,
  transportNumber: string,
): string {
  const number = transportNumber !== '' ? `${transportNumber} - ` : '';
  return `${milestoneName} - ${number}${getFormattedDateTimeById(milestoneTypeId, dateTime)}`;
}

/** GetFormattedTimeDifference(In_DateTimeDeparture, In_DateTimeArrival) → Out_FormattedTimeDifference (C:3424-3470):
    both dates set → JS node CreateFormattedTimeDifference (C:3517-3521) = TimeFormat.getTimeDifferenceInHours
    (TF:52-75): the absolute difference in hours rounded to 2 decimals, "<h>h <m>m" or "<m>m" (minutes "00" when 0),
    "00m" when equal; otherwise "Incorrect date values". */
export function getFormattedTimeDifference(departure: string, arrival: string): string {
  if (departure === '' || arrival === '') return 'Incorrect date values';
  const date1 = wireInstant(departure).getTime() / 1000;
  const date2 = wireInstant(arrival).getTime() / 1000;
  let diff = Math.abs(date1 - date2);
  if (diff === 0) return '00m';
  diff = parseFloat((diff / 60 / 60).toFixed(2));
  const hour = Math.floor(diff);
  const rounded = Math.round(60 * (diff - hour));
  const minutes = rounded === 0 ? '00' : String(rounded);
  return hour !== 0 ? `${hour}h ${minutes}m` : `${minutes}m`;
}

/** GetFormattedTime_FromTime(In_Time) → Out_FormattedElapsedTime (C:3344-3378): JS node CreateFormattedElapsedTime
    (C:3416-3420) = TimeFormat.formatTime(TimeToText(In_Time)) (TF:76-89): "<h>h <m>m" or "<m>m" of the UTC parts of
    1970-01-01T<time>Z (hours 0 → none, minutes 0 → "00m"); "" for an invalid or zero time. */
export function getFormattedTime_FromTime(time: string): string {
  const tempDateTime = new Date(`1970-01-01T${time}Z`);
  if (Number.isNaN(tempDateTime.getTime())) return '';
  const validHours = tempDateTime.getUTCHours() === 0 ? '' : `${tempDateTime.getUTCHours()}h`;
  const validMinutes = tempDateTime.getUTCMinutes() === 0 ? '00m' : `${tempDateTime.getUTCMinutes()}m`;
  if (validHours === '' && validMinutes === '00m') return '';
  return validHours !== '' ? `${validHours} ${validMinutes}` : validMinutes;
}

/** TransportDetails_ShowGeneralInformation(In_TravelIdentifier, In_TravelInfo, In_MilestoneType) → IsShow
    (C:7795-7846): a travel identifier or booking reference → True; else a flight → a codeshare flight or name; else a
    flight, train or boat → a fare type, onboard meal or class; else False. */
export function transportDetails_ShowGeneralInformation(
  travelIdentifier: string,
  travelInfo: TravelInfo,
  milestoneType: TransportMilestoneType,
): boolean {
  const T = OrbitMilestoneType;
  if (travelIdentifier !== '' || travelInfo.BookingReference !== '') return true;
  if (milestoneType.IsTransportMilestone && milestoneType.Id === T.Flight)
    return travelInfo.CodeShareFlight !== '' || travelInfo.CodeShareName !== '';
  if (
    milestoneType.IsTransportMilestone &&
    (milestoneType.Id === T.Flight || milestoneType.Id === T.Train || milestoneType.Id === T.Boat)
  )
    return travelInfo.FareType !== '' || travelInfo.OnboardMeal !== '' || travelInfo.Class !== '';
  return false;
}
