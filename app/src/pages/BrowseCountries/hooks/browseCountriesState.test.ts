import { describe, expect, it } from 'vitest';
import type { CountryCard } from '@/api/country';
import { getFlagURLByCountryCode } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  browseCountriesReducer,
  getSkeletonList_UI_CountryStatistics,
  INITIAL_BROWSE_COUNTRIES_STATE,
  onAfterFetch_GetCountriesStatistics,
  toStatisticsRecords,
} from './browseCountriesState';

/* The state and the client actions of BrowseCountries, without React. Fictional counts. */
const country = (countryCode: string, title: string): CountryCard => ({
  countryCode,
  statistics: {
    Title: title,
    Subtitle: '',
    AvatarURL: '',
    Statistics: [{ Name: 'Localities', Value: '4', IconColorId: '', IconId: '' }],
  },
});

describe('browseCountriesState', () => {
  it('GetSkeletonList_UI_CountryStatistics gives the fixed skeleton row as often as asked, none below 1', () => {
    const rows = getSkeletonList_UI_CountryStatistics(10);
    expect(rows).toHaveLength(10);
    expect(rows[0]).toEqual({
      countryCode: '',
      statistics: {
        Title: 'Australia',
        Subtitle: '',
        AvatarURL: '-',
        Statistics: [
          { Name: 'Locality', Value: '83', IconColorId: '', IconId: '' },
          { Name: 'Bretheren', Value: '15868', IconColorId: '', IconId: '' },
          { Name: 'Households', Value: '4652', IconColorId: '', IconId: '' },
          { Name: 'Brothers', Value: '7934', IconColorId: '', IconId: '' },
          { Name: 'Sisters', Value: '7934', IconColorId: '', IconId: '' },
        ],
      },
    });
    expect(rows[9]).toEqual(rows[0]);
    expect(rows[9]).not.toBe(rows[0]);
    expect(getSkeletonList_UI_CountryStatistics(0)).toEqual([]);
    expect(getSkeletonList_UI_CountryStatistics(-2)).toEqual([]);
  });

  it('OnAfterFetch_GetCountriesStatistics sets the flag of each country, "" for a code without a flag', () => {
    const fetched = [country('NZ', 'New Zealand'), country('ZZ', 'Nowhere')];
    const rows = onAfterFetch_GetCountriesStatistics(fetched);
    expect(rows[0]?.statistics.AvatarURL).toBe(getFlagURLByCountryCode('NZ'));
    expect(rows[0]?.statistics.AvatarURL).not.toBe('');
    expect(rows[0]?.statistics.Title).toBe('New Zealand');
    expect(rows[0]?.statistics.Statistics).toEqual(fetched[0]?.statistics.Statistics);
    expect(rows[1]?.statistics.AvatarURL).toBe('');
    // The fetched rows do not change.
    expect(fetched[0]?.statistics.AvatarURL).toBe('');
  });

  it('In_Statistics of StatisticsList is the country code and the statistics card of each row', () => {
    const rows = [country('SE', 'Sweden'), country('CH', 'Switzerland')];
    expect(toStatisticsRecords(rows)).toEqual([
      { Id: 'SE', StatisticsOptions: rows[0]?.statistics },
      { Id: 'CH', StatisticsOptions: rows[1]?.statistics },
    ]);
  });

  it('starts with no rows, shows 10 skeleton rows on a refresh, and keeps IsDataFetched', () => {
    expect(INITIAL_BROWSE_COUNTRIES_STATE).toEqual({ countriesStatistics: [], isDataFetched: false });
    const refreshing = browseCountriesReducer(INITIAL_BROWSE_COUNTRIES_STATE, { type: 'refreshStarted' });
    expect(refreshing.countriesStatistics).toEqual(getSkeletonList_UI_CountryStatistics(10));
    expect(refreshing.isDataFetched).toBe(false);
    const fetched = { countriesStatistics: [country('IT', 'Italy')], isDataFetched: true };
    expect(browseCountriesReducer(fetched, { type: 'refreshStarted' }).isDataFetched).toBe(true);
  });

  it('keeps the fetched countries with their flags and sets IsDataFetched', () => {
    const refreshing = browseCountriesReducer(INITIAL_BROWSE_COUNTRIES_STATE, { type: 'refreshStarted' });
    const countries = [country('DK', 'Denmark'), country('FR', 'France')];
    expect(browseCountriesReducer(refreshing, { type: 'countriesStatisticsFetched', countries })).toEqual({
      isDataFetched: true,
      countriesStatistics: onAfterFetch_GetCountriesStatistics(countries),
    });
  });
});
