import { timeFormatGetWeekDay } from '@/lib/orbit/actions';

/* The client action of Connect2_OrbitMobile_MUI that Popup_QRCodeScan calls (runtime-sources/Connect2_OrbitMobile_MUI
   .controller.js = C, Connect2_OrbitMobile_MUI.TimeFormat.js = TF). The client actions of the scan flow are in
   hooks/adminEventDetailActions.ts. */

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

/** GetFormattedLocalDateTime(In_DateTime, In_IncludeTime, In_IncludeWeekDay, In_AbbreviateWeekDay,
    In_SeparateByCommas, In_ReplaceSunday) (C:3036-3110, JS node C:3171-3189): like GetFormattedDateTime but on the
    local parts of the date: [weekday + " "] + day + " " + 3-letter month (TF.getMonthName, TF:48-51) + " " + year
    [+ " h:mm AM"]. */
export function getFormattedLocalDateTime(
  inDateTime: Date,
  inIncludeTime: boolean,
  inIncludeWeekDay: boolean,
  inAbbreviateWeekDay: boolean,
  inSeparateByCommas: boolean,
  inReplaceSunday: boolean,
): string {
  const weekDay = inIncludeWeekDay
    ? `${timeFormatGetWeekDay(inDateTime.getDay(), inAbbreviateWeekDay, false, inSeparateByCommas, inReplaceSunday)} `
    : '';
  const hours = inDateTime.getHours();
  const minutes = inDateTime.getMinutes();
  const time = inIncludeTime
    ? ` ${hours === 0 ? 12 : hours <= 12 ? hours : hours - 12}:${minutes <= 9 ? `0${minutes}` : minutes}${hours <= 11 ? ' AM' : ' PM'}`
    : '';
  const month = (MONTH_NAMES[inDateTime.getMonth()] ?? '').substring(0, 3);
  return `${weekDay}${inDateTime.getDate()} ${month} ${inDateTime.getFullYear()}${time}`;
}
