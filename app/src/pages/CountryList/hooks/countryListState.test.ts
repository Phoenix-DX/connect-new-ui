import { describe, expect, it } from 'vitest';
import { mockDirectoryUser } from '@/platform/session/mockUser';
import {
  countryListReducer,
  countText,
  getSkeletonList_UI_CountryStatistics,
  INITIAL_COUNTRY_LIST_STATE,
  longIntegerTextOf,
  NO_USER_GEOGRAPHY,
  userGeographyOf,
} from './countryListState';

describe('countryListState', () => {
  it('starts with no country, nothing fetched, no user and no sheet id', () => {
    expect(INITIAL_COUNTRY_LIST_STATE).toEqual({
      countries: [],
      fetchStatus: 'notFetched',
      isDataFetched: false,
      hasFetchError: false,
      user: NO_USER_GEOGRAPHY,
      bottomSheetId: '',
    });
    expect(NO_USER_GEOGRAPHY.isFetched).toBe(false);
  });

  it('the reducer assigns the variables of the patch and keeps the others, without a change in place', () => {
    const before = INITIAL_COUNTRY_LIST_STATE;
    const after = countryListReducer(before, { fetchStatus: 'error', hasFetchError: true });
    expect(after).toEqual({ ...before, fetchStatus: 'error', hasFetchError: true });
    expect(before.fetchStatus).toBe('notFetched');
    expect(after).not.toBe(before);
  });

  it('GetSkeletonList_UI_CountryStatistics gives ListLength rows "Australia" with the avatar "-"', () => {
    const rows = getSkeletonList_UI_CountryStatistics(10);
    expect(rows).toHaveLength(10);
    expect(rows[0]).toEqual({ countryCode: '', title: 'Australia', avatarURL: '-', texts: {} });
    expect(rows[0]).not.toBe(rows[1]);
    expect(getSkeletonList_UI_CountryStatistics(0)).toEqual([]);
    expect(getSkeletonList_UI_CountryStatistics(-1)).toEqual([]);
  });

  it('TextToLongInteger then LongIntegerToText: the digits of a whole number, "0" for any other text', () => {
    expect(longIntegerTextOf(' 042 ')).toBe('42');
    expect(longIntegerTextOf('-7')).toBe('-7');
    expect(longIntegerTextOf('AU')).toBe('0');
    expect(longIntegerTextOf('')).toBe('0');
    expect(longIntegerTextOf('3.5')).toBe('0');
  });

  it('countText: the singular for 1, the plural otherwise; an empty count is 0', () => {
    expect(countText('1', ' Locality', ' Localities')).toBe('1 Locality');
    expect(countText('3', ' Locality', ' Localities')).toBe('3 Localities');
    expect(countText('', ' Supper Meeting', ' Supper Meetings')).toBe('0 Supper Meetings');
  });

  it('CacheControl_UserInfo_WrapperResult: the geography of the user, isFetched True', () => {
    expect(userGeographyOf(mockDirectoryUser())).toEqual({
      isFetched: true,
      localityId: '585',
      localityName: 'Bahia Blanca',
      localitySubdivisionCount: '3',
      countryCode: 'AR',
      countryName: 'Argentina',
      countryLocalityCount: '3',
    });
  });
});
