import { describe, expect, it } from 'vitest';
import type { AccommodationHostResult } from '@/api/event';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import {
  accommodationHostCallInputs,
  accommodationHostReducer,
  getContactHelpdeskSubject_Milestone,
  getFormattedStringFromHelperType,
  getSkeletonLoadingIdFromMilestoneTypeId,
  INITIAL_ACCOMMODATION_HOST_STATE as INITIAL,
  type AccommodationHostInputs,
} from './accommodationHostState';

/* The state and the client actions of ScreenBlock_AccommodationHost without React. Fictional event and host. */
const INPUTS: AccommodationHostInputs = {
  In_MilestoneId: '5501-1',
  In_EventId: '5501',
  In_HostId: '770001',
  In_PreloadEventName: 'Spring Youth Weekend - Tandil',
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: 'accommodation-host',
};
const RESULT: AccommodationHostResult = {
  hasData: true,
  accommodationData: {
    MilestoneId: '5501-1',
    MilestoneType: 'accommodation-host',
    MilestoneDateTime: '2026-11-13T18:00:00Z',
    MilestoneTitle: 'Accommodation',
    EventDetails: { Id: '5501', Name: 'Spring Youth Weekend', Location: 'Tandil Hall', StartDate: '', EndDate: '' },
    SpecialNeedsCount: 0,
    Helpers: [],
    Rooms: [],
  },
};

describe('accommodationHostState', () => {
  it('starts with the record defaults', () => {
    expect(INITIAL).toEqual({
      accommodationData: {
        MilestoneId: '',
        MilestoneType: '',
        MilestoneDateTime: '',
        MilestoneTitle: '',
        EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
        SpecialNeedsCount: 0,
        Helpers: [],
        Rooms: [],
      },
      isFetchingData: false,
      isLoadingDocument: false,
      hasDocument: false,
      document: { DocumentURL: '', DocumentName: '' },
      contactByPhoneData: {},
      isDataFetched: false,
      hasData: false,
    });
  });

  it('runs the OnReady writes: fetching, the accommodation, the document, then not fetching', () => {
    let s = accommodationHostReducer(INITIAL, { type: 'fetchStarted' });
    expect(s.isFetchingData).toBe(true);
    s = accommodationHostReducer(s, { type: 'accommodationHostFetched', result: RESULT });
    expect(s).toEqual(
      expect.objectContaining({ isDataFetched: true, hasData: true, accommodationData: RESULT.accommodationData }),
    );
    s = accommodationHostReducer(s, {
      type: 'documentFetched',
      document: { DocumentURL: 'https://files.example.org/rooms.pdf', DocumentName: 'Rooms' },
    });
    expect(s.hasDocument).toBe(true);
    expect(s.document.DocumentName).toBe('Rooms');
    expect(accommodationHostReducer(s, { type: 'documentFetched', document: INITIAL.document }).hasDocument).toBe(
      false,
    );
    expect(accommodationHostReducer(s, { type: 'fetchFinished' }).isFetchingData).toBe(false);
  });

  it('sets IsLoadingDocument', () => {
    const s = accommodationHostReducer(INITIAL, { type: 'documentLoadingChanged', isLoadingDocument: true });
    expect(s.isLoadingDocument).toBe(true);
    expect(
      accommodationHostReducer(s, { type: 'documentLoadingChanged', isLoadingDocument: false }).isLoadingDocument,
    ).toBe(false);
  });

  it('merges the call popup data and keeps the other attributes', () => {
    let s = accommodationHostReducer(INITIAL, {
      type: 'contactPopupChanged',
      patch: { Name: 'Lucía Herrera', ShowPopup: true, IsLoading: true },
    });
    s = accommodationHostReducer(s, { type: 'contactPhoneSet', phone: '+54 291 455 0101' });
    s = accommodationHostReducer(s, { type: 'contactPopupChanged', patch: { IsLoading: false } });
    expect(s.contactByPhoneData).toEqual({
      Phone: '+54 291 455 0101',
      ContactPopupData: { Name: 'Lucía Herrera', ShowPopup: true, IsLoading: false },
    });
    s = accommodationHostReducer(s, {
      type: 'memberContactFetched',
      phones: { MobilePhone: '+54 9 291 411 2233', HomePhone: '', WorkPhone: '' },
      patch: { Locality: 'Bahía Blanca', TimezoneName: 'ART', TimezoneOffset: -10800, CountryName: 'Argentina' },
    });
    expect(s.contactByPhoneData).toEqual({
      Phone: '+54 291 455 0101',
      MobilePhone: '+54 9 291 411 2233',
      HomePhone: '',
      WorkPhone: '',
      ContactPopupData: {
        Name: 'Lucía Herrera',
        ShowPopup: true,
        IsLoading: false,
        Locality: 'Bahía Blanca',
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        CountryName: 'Argentina',
      },
    });
  });

  it('builds the block variables that both data actions send', () => {
    const s = accommodationHostReducer(INITIAL, { type: 'fetchStarted' });
    expect(accommodationHostCallInputs(s, INPUTS)).toEqual({
      IsFetchingData: true,
      IsLoadingDocument: false,
      HasDocument: false,
      In_MilestoneId: '5501-1',
      In_EventId: '5501',
      In_HostId: '770001',
      In_PreloadEventName: 'Spring Youth Weekend - Tandil',
      In_PreloadMilestoneName: 'Accommodation',
      In_OrbitMilestoneTypeId: 'accommodation-host',
    });
  });

  it('builds the helpdesk subject with " - " only between the parts that are set', () => {
    const date = '2026-11-13T18:00:00Z';
    const formatted = getFormattedDateTimeById('accommodation-host', date);
    expect(formatted).not.toBe('');
    expect(
      getContactHelpdeskSubject_Milestone(
        'accommodation-host',
        'Spring Youth Weekend',
        'Accommodation',
        date,
        'Tandil Hall',
      ),
    ).toBe(`Spring Youth Weekend - Accommodation - Tandil Hall - ${formatted}`);
    expect(getContactHelpdeskSubject_Milestone('accommodation-host', 'Spring Youth Weekend', '', '', '')).toBe(
      'Spring Youth Weekend',
    );
    expect(
      getContactHelpdeskSubject_Milestone('accommodation-host', 'Spring Youth Weekend', '', '', 'Tandil Hall'),
    ).toBe('Spring Youth Weekend - Tandil Hall');
    expect(getContactHelpdeskSubject_Milestone('accommodation-host', '', 'Accommodation', date, '')).toBe(
      `Accommodation - ${formatted}`,
    );
  });

  it('formats the helper role: first letter kept, the rest lower case, and "/s"', () => {
    expect(getFormattedStringFromHelperType('CATERING')).toBe('Catering/s');
    expect(getFormattedStringFromHelperType('usher')).toBe('usher/s');
    expect(getFormattedStringFromHelperType('')).toBe('/s');
  });

  it('chooses the skeleton by milestone type', () => {
    expect(getSkeletonLoadingIdFromMilestoneTypeId('accommodation-host')).toBe(
      OrbitSkeletonLoading.MilestoneDetailHost,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId('meal-host')).toBe(OrbitSkeletonLoading.MilestoneDetailHost);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('helper-host')).toBe(OrbitSkeletonLoading.MilestoneDetailHost);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('accommodation-guest')).toBe(
      OrbitSkeletonLoading.MilestoneDetailGuest,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId('meal-guest')).toBe(OrbitSkeletonLoading.MilestoneDetailGuest);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('transport-flight')).toBe(OrbitSkeletonLoading.TransportDetail);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('meeting-host')).toBe(0);
  });
});
