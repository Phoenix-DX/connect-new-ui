import { describe, expect, it } from 'vitest';
import type { AdminEventItem, Event_Screen, YearItem } from '@/api/event';
import { OrbitLandingFilter } from '@/pages/OrbitAdminLanding/staticEntities';
import {
  adminEventsCallInputsOf,
  adminLandingReducer,
  clickEventPayloadOf,
  eventDetailTargetOf,
  eventFilterLabelOf,
  filterEvents,
  getPopupMeasurements,
  INITIAL_ADMIN_LANDING_STATE,
  RESET_FILTERS_AND_SORT,
  textToLongIntegerOrNull,
} from './adminLandingState';

/* The pure part of ScreenBlock_AdminLanding: the variables, the call inputs and the client actions of a card click.
   The event is fictional. */
const EVENT: Event_Screen = {
  EventId: '7301',
  Type: 'Admin',
  Title: 'Weekend Bible Conferences',
  EventInfo: {
    StartEventDate: '2026-11-07T09:00:00Z',
    EndEventDate: '2026-11-08T17:00:00Z',
    EventLocation: 'Bahia Blanca Main Hall',
  },
};

describe('adminLandingState', () => {
  it('starts with the defaults of the block variables', () => {
    expect(INITIAL_ADMIN_LANDING_STATE).toEqual({
      isFetchingData: false,
      eventsSummary: [],
      userFirstName: '',
      userMemberId: '0',
      isDataFetched: false,
      eventFilter: 0,
      sortEventsASC: true,
      yearsSelection: [],
      popupFiltersOpened: false,
      popupSortByOpened: false,
      popupMeasurements: { Top: 0, Left: 0, Bottom: 0 },
    });
  });

  it('ResetFiltersAndSort: SortEventsASC True, EventFilter UpcomingEvents, no year', () => {
    expect(RESET_FILTERS_AND_SORT).toEqual({
      sortEventsASC: true,
      eventFilter: OrbitLandingFilter.UpcomingEvents,
      yearsSelection: [],
    });
  });

  it('the filter label: Past Events for PastEvents, else Upcoming Events', () => {
    expect(eventFilterLabelOf(OrbitLandingFilter.PastEvents)).toBe('Past Events');
    expect(eventFilterLabelOf(OrbitLandingFilter.UpcomingEvents)).toBe('Upcoming Events');
    expect(eventFilterLabelOf(0)).toBe('Upcoming Events');
  });

  describe('FilterEvents (EndEventDate against CurrDate() - 22 days)', () => {
    const TODAY = new Date(2026, 10, 30, 15, 30);
    const row = (eventId: string, endEventDate?: string, startEventDate?: string): AdminEventItem => ({
      event: {
        EventId: eventId,
        EventInfo: {
          ...(endEventDate === undefined ? {} : { EndEventDate: endEventDate }),
          ...(startEventDate === undefined ? {} : { StartEventDate: startEventDate }),
        },
      },
      typeFriendly: 'Youth Day',
      dateTime: startEventDate ?? '',
    });
    const NO_YEAR: YearItem[] = [];
    // The local midnight of 2026-11-08 is the cutoff (2026-11-30 - 22 days).
    const AT_CUTOFF = row('7301', new Date(2026, 10, 8).toISOString());
    const BEFORE_CUTOFF = row('7302', new Date(2026, 10, 7, 23, 59).toISOString());
    const FUTURE = row('7303', new Date(2026, 11, 5, 9).toISOString());
    const NO_DATE = row('7304');
    const NULL_DATE = row('7305', '1900-01-01T00:00:00Z');
    const RESPONSE = [AT_CUTOFF, BEFORE_CUTOFF, FUTURE, NO_DATE, NULL_DATE];

    it('UpcomingEvents: the rows that end on or after the cutoff', () => {
      expect(filterEvents(RESPONSE, OrbitLandingFilter.UpcomingEvents, NO_YEAR, TODAY)).toEqual([AT_CUTOFF, FUTURE]);
    });

    it('PastEvents (no selected year): the rows that end before the cutoff, with the null dates', () => {
      expect(filterEvents(RESPONSE, OrbitLandingFilter.PastEvents, NO_YEAR, TODAY)).toEqual([
        BEFORE_CUTOFF,
        NO_DATE,
        NULL_DATE,
      ]);
    });

    it('PastEvents with selected years: the past rows of each selected year (UTC start year), in the year order', () => {
      const IN_2024 = row('7280', '2024-06-02T18:00:00Z', '2024-06-01T09:00:00Z');
      const IN_2025 = row('7290', '2025-03-09T18:00:00Z', '2025-03-08T09:00:00Z');
      const NEW_YEAR_UTC = row('7291', '2025-01-01T05:00:00Z', '2025-01-01T01:00:00Z');
      const years: YearItem[] = [
        { year: '2025', isSelected: true, count: 2 },
        { year: '2024', isSelected: true, count: 1 },
        { year: '2023', isSelected: false, count: 4 },
      ];
      expect(
        filterEvents([IN_2024, IN_2025, NEW_YEAR_UTC, FUTURE], OrbitLandingFilter.PastEvents, years, TODAY),
      ).toEqual([IN_2025, NEW_YEAR_UTC, IN_2024]);
    });

    it('an empty Response stays the EventsSummary; another filter assigns nothing', () => {
      expect(filterEvents([], OrbitLandingFilter.UpcomingEvents, NO_YEAR, TODAY)).toEqual([]);
      expect(filterEvents(RESPONSE, 0, NO_YEAR, TODAY)).toBeNull();
    });
  });

  it('the reducer assigns the given variables and keeps the others', () => {
    const next = adminLandingReducer(INITIAL_ADMIN_LANDING_STATE, { isFetchingData: true, userFirstName: 'Matías' });
    expect(next).toEqual({ ...INITIAL_ADMIN_LANDING_STATE, isFetchingData: true, userFirstName: 'Matías' });
    expect(INITIAL_ADMIN_LANDING_STATE.isFetchingData).toBe(false);
  });

  it('Get_AdminEventsList sends the block variables (with the filter, sort and popup ones)', () => {
    const state = {
      ...INITIAL_ADMIN_LANDING_STATE,
      isFetchingData: true,
      userFirstName: 'Matías',
      userMemberId: '42',
      eventFilter: OrbitLandingFilter.UpcomingEvents,
      yearsSelection: [{ year: '2026', isSelected: false, count: 3 }],
      popupMeasurements: { Top: 86, Left: 185, Bottom: 56 },
    };
    expect(adminEventsCallInputsOf(state)).toEqual({
      IsFetchingData: true,
      UserFirstName: 'Matías',
      UserMemberId: '42',
      EventFilter: OrbitLandingFilter.UpcomingEvents,
      SortEventsASC: true,
      YearsSelection: [{ year: '2026', isSelected: false, count: 3 }],
      Popup_SortByOpened: false,
      Popup_FiltersOpened: false,
      PopupMeasurements: { Top: 86, Left: 185, Bottom: 56 },
    });
  });

  it('GetPopupMeasurements: header height, half the header width less 10, footer height; 0 without them', () => {
    expect(getPopupMeasurements(document.implementation.createHTMLDocument())).toEqual({ Top: 0, Left: 0, Bottom: 0 });
    const doc = document.implementation.createHTMLDocument();
    const header = doc.createElement('header');
    header.className = 'header';
    const footer = doc.createElement('div');
    footer.className = 'footer';
    Object.defineProperty(header, 'offsetHeight', { value: 86 });
    Object.defineProperty(header, 'offsetWidth', { value: 390 });
    Object.defineProperty(footer, 'offsetHeight', { value: 56 });
    doc.body.append(header, footer);
    expect(getPopupMeasurements(doc)).toEqual({ Top: 86, Left: 185, Bottom: 56 });
  });

  it('TextToLongIntegerValidate: a whole number as a Long Integer, else the null identifier', () => {
    expect(textToLongIntegerOrNull('12345')).toBe('12345');
    expect(textToLongIntegerOrNull(' 007 ')).toBe('7');
    expect(textToLongIntegerOrNull('-3')).toBe('-3');
    expect(textToLongIntegerOrNull('9007199254740993')).toBe('9007199254740993');
    expect(textToLongIntegerOrNull('')).toBe('0');
    expect(textToLongIntegerOrNull('12a')).toBe('0');
  });

  it('a card click: the NavigateTo_EventDetail arguments with the TypeFriendly of the row', () => {
    expect(eventDetailTargetOf(EVENT, 'Weekend Conference Program')).toEqual({
      eventId: '7301',
      eventName: 'Weekend Bible Conferences',
      eventStartDate: '2026-11-07T09:00:00Z',
      eventEndDate: '2026-11-08T17:00:00Z',
      eventLocation: 'Bahia Blanca Main Hall',
      eventTypeFriendly: 'Weekend Conference Program',
    });
    expect(eventDetailTargetOf({}, '')).toEqual({
      eventId: '0',
      eventName: '',
      eventStartDate: '',
      eventEndDate: '',
      eventLocation: '',
      eventTypeFriendly: '',
    });
  });

  it('a card click: the AuditPayload_ClickEvent record', () => {
    expect(clickEventPayloadOf(EVENT)).toEqual({
      EventId: '7301',
      EventTitle: 'Weekend Bible Conferences',
      EventLocation: 'Bahia Blanca Main Hall',
      EventStartDate: '2026-11-07T09:00:00Z',
      EventEndDate: '2026-11-08T17:00:00Z',
    });
    expect(clickEventPayloadOf({})).toEqual({
      EventId: '0',
      EventTitle: '',
      EventLocation: '',
      EventStartDate: '',
      EventEndDate: '',
    });
  });
});
