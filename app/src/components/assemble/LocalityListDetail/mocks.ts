import type { CountryWithMapPosition } from './types';

/* Countries are reference data (real names, mock-fixtures.md); the counts are fictional, except the ones the capture
   shows unmasked (kept so the DOM test can compare them). Map positions: the country centres. */
const row = (
  Code: string,
  Name: string,
  MembersCount: number,
  HouseholdersCount: number,
  LocalitiesCount: number,
  InitialLatitude: number,
  InitialLongitude: number,
): CountryWithMapPosition => ({
  Code,
  Name,
  MembersCount,
  HouseholdersCount,
  LocalitiesCount,
  InitialLatitude,
  InitialLongitude,
  InitialZoom: 5,
});

export const COUNTRIES: CountryWithMapPosition[] = [
  row('AR', 'Argentina', 412, 118, 6, -38.4, -63.6),
  row('AU', 'Australia', 18240, 5112, 82, -25.3, 133.8),
  row('BB', 'Barbados', 186, 52, 1, 13.2, -59.5),
  row('BR', 'Brazil', 4920, 1310, 20, -14.2, -51.9),
  row('CL', 'Chile', 95, 27, 2, -35.7, -71.5),
  row('DK', 'Denmark', 2860, 790, 9, 56.3, 9.5),
  row('FR', 'France', 640, 171, 4, 46.2, 2.2),
  row('DE', 'Germany', 89, 28, 3, 51.2, 10.5),
  row('IN', 'India', 266, 72, 3, 20.6, 79),
  row('JM', 'Jamaica', 131, 34, 2, 18.1, -77.3),
  row('NZ', 'New Zealand', 6120, 1690, 41, -40.9, 174.9),
  row('PG', 'Papua New Guinea', 74, 27, 1, -6.3, 143.9),
  row('SE', 'Sweden', 480, 133, 5, 60.1, 18.6),
  row('CH', 'Switzerland', 352, 33, 4, 46.8, 8.2),
  row('TZ', 'Tanzania', 74, 20, 1, -6.4, 34.9),
  row('GB', 'United Kingdom', 21350, 5980, 86, 55.4, -3.4),
  row('US', 'United States', 9870, 2710, 29, 37.1, -95.7),
];
