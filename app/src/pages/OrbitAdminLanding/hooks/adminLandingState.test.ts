import { describe, expect, it } from 'vitest';
import type { Event_Screen } from '@/api/event';
import {
  adminEventsCallInputsOf,
  adminLandingReducer,
  clickEventPayloadOf,
  eventDetailTargetOf,
  INITIAL_ADMIN_LANDING_STATE,
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
    });
  });

  it('the reducer assigns the given variables and keeps the others', () => {
    const next = adminLandingReducer(INITIAL_ADMIN_LANDING_STATE, { isFetchingData: true, userFirstName: 'Matías' });
    expect(next).toEqual({ ...INITIAL_ADMIN_LANDING_STATE, isFetchingData: true, userFirstName: 'Matías' });
    expect(INITIAL_ADMIN_LANDING_STATE.isFetchingData).toBe(false);
  });

  it('Get_AdminEventsList sends IsFetchingData, UserFirstName and UserMemberId', () => {
    const state = { ...INITIAL_ADMIN_LANDING_STATE, isFetchingData: true, userFirstName: 'Matías', userMemberId: '42' };
    expect(adminEventsCallInputsOf(state)).toEqual({
      IsFetchingData: true,
      UserFirstName: 'Matías',
      UserMemberId: '42',
    });
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
