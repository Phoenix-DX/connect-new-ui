import { describe, expect, it } from 'vitest';
import type { LocalityStatistics } from '@/api/country';
import { Choice, Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import {
  appliedCountryCode,
  defineList,
  getSkeletonList_UI_LocalityStatistics,
  imageEntityIdOf,
  mapOptionsAt,
  normalizeLongId,
  toMarker,
} from './countryDetailsState';

/* The pure logic of CountryDetails. Fictional localities. */
const locality = (localityId: string, name: string, mainHallSubdivisionId: string): LocalityStatistics => ({
  localityId,
  name,
  latitude: -43.9,
  longitude: 170.5,
  statisticsTitle: `${name} (2)`,
  typedStatisticsTexts: { Members: '24' },
  mainHallSubdivisionId,
});
const OUT = [
  locality('701', 'Lake Tekapo', '9101'),
  locality('702', 'Ōmārama', '9102'),
  locality('703', 'Twizel', '9103'),
];

describe('countryDetailsState', () => {
  it('getSkeletonList_UI_LocalityStatistics: the shared skeleton rows in the screen shape, with the defaults', () => {
    const rows = getSkeletonList_UI_LocalityStatistics(10);
    expect(rows).toHaveLength(10);
    expect(rows[0]).toEqual({
      localityId: '0',
      name: '',
      latitude: 0,
      longitude: 0,
      statisticsTitle: 'Adelaide',
      typedStatisticsTexts: {},
      mainHallSubdivisionId: '0',
    });
    expect(getSkeletonList_UI_LocalityStatistics(0)).toEqual([]);
  });

  it('defineList: all the rows without a search; else the names that contain it, accents and case ignored', () => {
    expect(defineList(OUT, '')).toBe(OUT);
    expect(defineList(OUT, 'TEKA').map((l) => l.name)).toEqual(['Lake Tekapo']);
    expect(defineList(OUT, 'omar').map((l) => l.name)).toEqual(['Ōmārama']);
    expect(defineList(OUT, 'a').map((l) => l.name)).toEqual(['Lake Tekapo', 'Ōmārama']);
    expect(defineList(OUT, 'Dunedin')).toEqual([]);
  });

  it('normalizeLongId: LongIntegerToText(TextToLongInteger(Text)); an invalid number is 0', () => {
    expect(normalizeLongId('701')).toBe('701');
    expect(normalizeLongId(' 0701 ')).toBe('701');
    expect(normalizeLongId('+12')).toBe('12');
    expect(normalizeLongId('9007199254740993')).toBe('9007199254740993');
    expect(normalizeLongId('')).toBe('0');
    expect(normalizeLongId('12a')).toBe('0');
  });

  it('toMarker: a locality marker with the member pin, the title as ExtraData and a popup', () => {
    const [first] = OUT;
    if (!first) throw new Error('no locality');
    expect(toMarker(first)).toEqual({
      Marker: {
        Id: '701',
        Type: Connect_Entity.Locality,
        ExtraData: 'Lake Tekapo (2)',
        Latlng: [-43.9, 170.5],
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

  it('mapOptionsAt: centred on the coordinates, zoom 5, the world bounds', () => {
    expect(mapOptionsAt(-43.9, 170.5)).toEqual({
      Center: [-43.9, 170.5],
      Zoom: 5,
      MinZoom: 2,
      MaxZoom: 20,
      MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 },
      AttributionControl: false,
      MaxBoundsViscosity: 0,
    });
  });

  it('imageEntityIdOf: the row image without a search, the image of the first Out record with a search', () => {
    const [, second] = OUT;
    if (!second) throw new Error('no locality');
    expect(imageEntityIdOf(second, '', OUT)).toBe('9102');
    expect(imageEntityIdOf(second, 'omar', OUT)).toBe('9101');
    expect(imageEntityIdOf(second, 'omar', [])).toBe('0');
  });

  it('appliedCountryCode: the first selected country; the original one when nothing or None is selected', () => {
    expect(appliedCountryCode([{ SelectedIds: ['FJ', 'WS'] }], 'NZ')).toBe('FJ');
    expect(appliedCountryCode([{ SelectedIds: [] }], 'NZ')).toBe('NZ');
    expect(appliedCountryCode([{}], 'NZ')).toBe('NZ');
    expect(appliedCountryCode([], 'NZ')).toBe('NZ');
    expect(appliedCountryCode([{ SelectedIds: [Choice.None] }], 'NZ')).toBe('NZ');
  });
});
