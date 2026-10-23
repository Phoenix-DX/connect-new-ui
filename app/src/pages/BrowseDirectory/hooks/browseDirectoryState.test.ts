import { describe, expect, it } from 'vitest';
import type { LocalityCard } from '@/api/locality';
import {
  asLongText,
  browseDirectoryReducer,
  getSkeletonList_UI_LocalityStatistics,
  INITIAL_BROWSE_DIRECTORY_STATE,
  localityLabelOf,
  toMarker,
  type BrowseDirectoryState,
} from './browseDirectoryState';

/* The pure parts of the BrowseDirectory flows. Fictional localities. */
const locality = (patch: Partial<LocalityCard> = {}): LocalityCard => ({
  localityId: '4107',
  name: 'Puerto Madryn',
  latitude: -42.7692,
  longitude: -65.0385,
  statistics: { Title: 'Puerto Madryn', Subtitle: 'Chubut', AvatarURL: '', Statistics: [] },
  ...patch,
});
const second = locality({
  localityId: '4108',
  name: 'Trelew',
  latitude: -43.2489,
  longitude: -65.3051,
  statistics: { Title: 'Trelew', Subtitle: 'Chubut', AvatarURL: '', Statistics: [] },
});

describe('browseDirectoryReducer', () => {
  it('refreshStarted shows 10 skeleton rows and keeps the other variables', () => {
    const state = browseDirectoryReducer(
      { ...INITIAL_BROWSE_DIRECTORY_STATE, countryName: 'Argentina' },
      { type: 'refreshStarted' },
    );
    expect(state.localities).toHaveLength(10);
    expect(state.localities[0]).toEqual({
      localityId: '0',
      name: '',
      latitude: 0,
      longitude: 0,
      statistics: {
        Title: 'Adelaide',
        Subtitle: 'New South Wales',
        AvatarURL: '',
        Statistics: [
          { Name: 'Supper Meetings', Value: '83', IconColorId: '', IconId: '' },
          { Name: 'Bretheren', Value: '15868', IconColorId: '', IconId: '' },
          { Name: 'Households', Value: '4652', IconColorId: '', IconId: '' },
          { Name: 'Brothers', Value: '7934', IconColorId: '', IconId: '' },
          { Name: 'Sisters', Value: '7934', IconColorId: '', IconId: '' },
        ],
      },
    });
    expect(state).toMatchObject({ countryName: 'Argentina', isDataFetched: false, Center: [], MarkersList: [] });
  });

  it('localityStatisticsFetched keeps the outputs, centres on the first row and adds one marker per row', () => {
    const state = browseDirectoryReducer(INITIAL_BROWSE_DIRECTORY_STATE, {
      type: 'localityStatisticsFetched',
      data: { localities: [locality(), second], countryName: 'Argentina' },
    });
    expect(state.localities.map((l) => l.name)).toEqual(['Puerto Madryn', 'Trelew']);
    expect(state.countryName).toBe('Argentina');
    expect(state.isDataFetched).toBe(true);
    expect(state.Center).toEqual([-42.7692, -65.0385]);
    expect(state.MarkersList.map((m) => m.Marker?.Id)).toEqual(['4107', '4108']);
  });

  it('a second answer appends its markers to MarkersList', () => {
    const first = browseDirectoryReducer(INITIAL_BROWSE_DIRECTORY_STATE, {
      type: 'localityStatisticsFetched',
      data: { localities: [locality()], countryName: 'Argentina' },
    });
    const next = browseDirectoryReducer(first, {
      type: 'localityStatisticsFetched',
      data: { localities: [second], countryName: 'Argentina' },
    });
    expect(next.MarkersList.map((m) => m.Marker?.Id)).toEqual(['4107', '4108']);
    expect(next.Center).toEqual([-43.2489, -65.3051]);
  });

  it('an empty answer centres on the default record (0, 0) and adds no marker', () => {
    const state = browseDirectoryReducer(INITIAL_BROWSE_DIRECTORY_STATE, {
      type: 'localityStatisticsFetched',
      data: { localities: [], countryName: '' },
    });
    expect(state.Center).toEqual([0, 0]);
    expect(state.MarkersList).toEqual([]);
    expect(state.isDataFetched).toBe(true);
  });
});

describe('the pure parts of the flows', () => {
  it('GetSkeletonList_UI_LocalityStatistics has 4 rows by default', () => {
    expect(getSkeletonList_UI_LocalityStatistics()).toHaveLength(4);
  });

  it('toMarker gives a locality marker with the member pin and an interactive popup', () => {
    expect(toMarker(locality())).toEqual({
      Marker: {
        Id: '4107',
        Type: 'Locality',
        ExtraData: 'Puerto Madryn',
        Latlng: [-42.7692, -65.0385],
        Options: {
          Icon: {
            iconUrl: '/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg',
            iconSize: [20, 24],
            iconAnchor: [10, 24],
            popupAnchor: [0, -24],
          },
        },
      },
      Popup: { CloseButton: true, AutoClose: false, Interactive: true, Content: 'Dummy' },
    });
  });

  it('asLongText keeps an integer text and gives "0" for any other text', () => {
    expect(asLongText('4107')).toBe('4107');
    expect(asLongText(' 0042 ')).toBe('42');
    expect(asLongText('-7')).toBe('-7');
    expect(asLongText('Trelew')).toBe('0');
    expect(asLongText('')).toBe('0');
  });

  it('localityLabelOf gives "<locality>, <country>" of the first row with the id, or "" when no row has it', () => {
    const state: BrowseDirectoryState = {
      ...INITIAL_BROWSE_DIRECTORY_STATE,
      localities: [locality(), second, locality({ name: 'Rawson' })],
      countryName: 'Argentina',
    };
    expect(localityLabelOf(state, '4107')).toBe('Puerto Madryn, Argentina');
    expect(localityLabelOf(state, '4108')).toBe('Trelew, Argentina');
    expect(localityLabelOf(state, '9999')).toBe('');
  });
});
