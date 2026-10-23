import type { CountryStatistics } from '@/pages/CountryList/types';

/** GetSkeleton_UI_CountryStatistics (UBTConnect.controller.js:11508-11573): Statistics.Title "Australia",
    Statistics.AvatarURL "-" (its Statistics list of five counts is not read by this screen), everything else empty. */
export function getSkeleton_UI_CountryStatistics(): CountryStatistics {
  return { countryCode: '', title: 'Australia', avatarURL: '-', texts: {} };
}

/** GetSkeletonList_UI_CountryStatistics(ListLength) (UBTConnect.controller.js:12574-12628): ListLength skeleton rows. */
export function getSkeletonList_UI_CountryStatistics(listLength: number): CountryStatistics[] {
  return Array.from({ length: Math.max(0, listLength) }, getSkeleton_UI_CountryStatistics);
}

/** OS TextToLongInteger then LongIntegerToText: the digits of a whole number, "0" for any other text (a country code). */
export function longIntegerTextOf(text: string): string {
  const t = text.trim();
  return /^[+-]?\d+$/.test(t) ? BigInt(t).toString() : '0';
}

/** LongIntegerToText(count) + (count = 1 ? singular : plural) (CountryList.mvc.js:486, :690); an empty count is 0. */
export function countText(count: string, singular: string, plural: string): string {
  const n = longIntegerTextOf(count);
  return n + (n === '1' ? singular : plural);
}
