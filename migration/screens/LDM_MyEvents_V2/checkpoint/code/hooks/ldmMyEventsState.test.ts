import { describe, expect, it } from 'vitest';
import type { EventCalendar, TimelineEventGroup } from '@/api/event';
import {
  addDays,
  addMonths,
  canFetchOlderEvents,
  currentFiltersOf,
  diffDays,
  hasPhoneNumber,
  initialLdmMyEventsState,
  ldmMyEventsReducer,
  myTimelineCallInputs,
  olderPastEventFilters,
  restoreLdmMyEventsState,
  toOsDate,
  validateSameFilters,
  type LdmMyEventsState,
} from './ldmMyEventsState';

/* The pure state of the "My Timeline" block. Fictional data. */
const TODAY = new Date(2026, 9, 24); // Saturday, 24 October 2026
const event = (eventHostId: string): EventCalendar =>
  ({ EventHostId: eventHostId, EventId: `7${eventHostId}`, Guests: [] }) as unknown as EventCalendar;
const group = (month: string, ...hostIds: string[]): TimelineEventGroup => ({
  CurrentMonthDate: month,
  EventsCalendar: hostIds.map(event),
});
const initial = (): LdmMyEventsState => initialLdmMyEventsState(TODAY);

describe('date actions', () => {
  it('formats a local date as YYYY-MM-DD', () => {
    expect(toOsDate(new Date(2026, 0, 5))).toBe('2026-01-05');
  });

  it('AddMonths keeps the day, clamped to the last day of the month', () => {
    expect(toOsDate(addMonths(new Date(2026, 2, 31), -1))).toBe('2026-02-28');
    expect(toOsDate(addMonths(TODAY, -24))).toBe('2024-10-24');
  });

  it('AddDays crosses the month end', () => {
    expect(toOsDate(addDays(new Date(2026, 9, 28), 7))).toBe('2026-11-04');
  });

  it('DiffDays counts the days from a date text to a date', () => {
    expect(diffDays('2026-10-14', TODAY)).toBe(10);
    expect(diffDays('2026-10-24', TODAY)).toBe(0);
  });
});

describe('ldmMyEventsState', () => {
  it('OnInitialize sets the past-event window from 24 months back to 7 days ahead', () => {
    expect(initial()).toEqual({
      pastEventsData: [],
      upcomingEventsData: [],
      pastEventFilters: { FromDate: '2024-10-24', ToDate: '2026-10-31', Localities: [] },
      isFetchingMyTimeline: false,
      isFiltering: false,
      hasFetchError: false,
      contactByPhoneData: {},
      contactByMessageData: {},
    });
  });

  it('a restored view closes both contact popups and keeps the rest', () => {
    const saved: LdmMyEventsState = {
      ...initial(),
      pastEventsData: [group('September 2026', '88231')],
      contactByPhoneData: { MobilePhone: '+54 291 555 0121', ContactPopupData: { ShowPopup: true, Name: 'Pérez' } },
      contactByMessageData: { Email: 'jorge.perez@example.com', ContactPopupData: { ShowPopup: true } },
    };
    const restored = restoreLdmMyEventsState(saved);
    expect(restored.pastEventsData).toBe(saved.pastEventsData);
    expect(restored.contactByPhoneData).toEqual({
      MobilePhone: '+54 291 555 0121',
      ContactPopupData: { ShowPopup: false, Name: 'Pérez' },
    });
    expect(restored.contactByMessageData).toEqual({
      Email: 'jorge.perez@example.com',
      ContactPopupData: { ShowPopup: false },
    });
  });

  it('OnAfterFetch appends the answer, or replaces the lists while filtering', () => {
    const before = { ...initial(), pastEventsData: [group('September 2026', '88231')], upcomingEventsData: [] };
    const data = { pastEvents: [group('August 2026', '88197')], upcomingEvents: [event('88300')] };
    const appended = ldmMyEventsReducer({ ...before, hasFetchError: true }, { type: 'fetched', data });
    expect(appended.pastEventsData.map((g) => g.CurrentMonthDate)).toEqual(['September 2026', 'August 2026']);
    expect(appended.upcomingEventsData).toHaveLength(1);
    expect(appended.hasFetchError).toBe(false);
    const replaced = ldmMyEventsReducer({ ...before, isFiltering: true }, { type: 'fetched', data });
    expect(replaced.pastEventsData.map((g) => g.CurrentMonthDate)).toEqual(['August 2026']);
  });

  it('sets and clears the fetch flags', () => {
    const fetching = ldmMyEventsReducer(initial(), { type: 'fetchStarted' });
    expect(fetching.isFetchingMyTimeline).toBe(true);
    const failed = ldmMyEventsReducer(fetching, { type: 'fetchFailed' });
    expect(failed).toMatchObject({ isFetchingMyTimeline: true, hasFetchError: true });
    expect(ldmMyEventsReducer(failed, { type: 'fetchEnded' }).isFetchingMyTimeline).toBe(false);
  });

  it('IncrementMyTimelineDates moves the window 24 months back', () => {
    expect(olderPastEventFilters({ FromDate: '2024-10-24', ToDate: '2026-10-31', Localities: [] })).toEqual({
      FromDate: '2022-10-24',
      ToDate: '2024-10-24',
      Localities: [],
    });
    expect(ldmMyEventsReducer(initial(), { type: 'olderWindowSet' }).pastEventFilters).toMatchObject({
      FromDate: '2022-10-24',
      ToDate: '2024-10-24',
    });
  });

  it('opens and closes the contact popups', () => {
    const phone = { MobilePhone: '+54 291 555 0122', ContactPopupData: { ShowPopup: true } };
    const opened = ldmMyEventsReducer(initial(), { type: 'phonePopupOpened', data: phone });
    expect(opened.contactByPhoneData).toBe(phone);
    expect(ldmMyEventsReducer(opened, { type: 'phonePopupClosed' }).contactByPhoneData).toEqual({
      MobilePhone: '+54 291 555 0122',
      ContactPopupData: { ShowPopup: false },
    });
    const message = { Email: 'nora.acosta@example.com', ContactPopupData: { ShowPopup: true } };
    const shown = ldmMyEventsReducer(initial(), { type: 'messagePopupOpened', data: message });
    expect(shown.contactByMessageData).toBe(message);
    expect(ldmMyEventsReducer(shown, { type: 'messagePopupClosed' }).contactByMessageData).toEqual({
      Email: 'nora.acosta@example.com',
      ContactPopupData: { ShowPopup: false },
    });
  });

  it('sends the block variables to GetEventsForMyTimeline', () => {
    expect(myTimelineCallInputs({ ...initial(), isFetchingMyTimeline: true })).toEqual({
      CurrentEventView: 1,
      DefaultDateRangeInMonths: 24,
      IsFiltering: false,
      IsFetchingMyTimeline: true,
      PastEventFilters: { FromDate: '2024-10-24', ToDate: '2026-10-31', Localities: [] },
    });
  });

  it('fetches an older window only when idle, not filtering and not older than 7300 days', () => {
    expect(canFetchOlderEvents(initial(), TODAY)).toBe(true);
    expect(canFetchOlderEvents({ ...initial(), isFetchingMyTimeline: true }, TODAY)).toBe(false);
    expect(canFetchOlderEvents({ ...initial(), isFiltering: true }, TODAY)).toBe(false);
    const at = (FromDate: string) => ({ ...initial(), pastEventFilters: { FromDate, ToDate: '', Localities: [] } });
    expect(canFetchOlderEvents(at(toOsDate(addDays(TODAY, -7300))), TODAY)).toBe(true);
    expect(canFetchOlderEvents(at(toOsDate(addDays(TODAY, -7301))), TODAY)).toBe(false);
  });

  it('the phone popup needs any phone number', () => {
    expect(hasPhoneNumber({})).toBe(false);
    expect(hasPhoneNumber({ Phone: '', MobilePhone: '', HomePhone: '', WorkPhone: '' })).toBe(false);
    expect(hasPhoneNumber({ HomePhone: '+54 291 555 0130' })).toBe(true);
    expect(hasPhoneNumber({ WorkPhone: '+54 291 555 0131' })).toBe(true);
  });
});

describe('ValidateSameFilters', () => {
  const ROSARIO = { IdAsText: '601', Name: 'Rosario', IsSelected: true };
  it('the same dates and the same locality ids', () => {
    const current = { FromDate: '2024-10-27', ToDate: '2026-11-03', Localities: ['601'] };
    expect(validateSameFilters({ FromDate: '2024-10-27', ToDate: '2026-11-03', Localities: [ROSARIO] }, current)).toBe(
      true,
    );
    expect(validateSameFilters({ FromDate: '2024-10-28', ToDate: '2026-11-03', Localities: [ROSARIO] }, current)).toBe(
      false,
    );
    expect(
      validateSameFilters(
        { FromDate: '2024-10-27', ToDate: '2026-11-03', Localities: [{ ...ROSARIO, IdAsText: '252' }] },
        current,
      ),
    ).toBe(false);
  });

  it('OnHandle_MyTimelineFilter compares with the dates of PastEventFilters and no locality', () => {
    const state = initialLdmMyEventsState(new Date(2026, 9, 27));
    const { FromDate, ToDate } = state.pastEventFilters;
    expect(validateSameFilters({ FromDate, ToDate, Localities: [] }, currentFiltersOf(state))).toBe(true);
    expect(validateSameFilters({ FromDate, ToDate, Localities: [ROSARIO] }, currentFiltersOf(state))).toBe(false);
  });

  it('a filter clears both lists; IsFiltering True on filter, False on reset', () => {
    const filters = { FromDate: '2025-01-01', ToDate: '2026-11-03', Localities: [ROSARIO] };
    const filtered = ldmMyEventsReducer(initialLdmMyEventsState(new Date(2026, 9, 27)), {
      type: 'filterApplied',
      filters,
    });
    expect(filtered).toEqual(
      expect.objectContaining({
        isFiltering: true,
        pastEventsData: [],
        upcomingEventsData: [],
        pastEventFilters: filters,
      }),
    );
    expect(ldmMyEventsReducer(filtered, { type: 'filtersReset', filters }).isFiltering).toBe(false);
  });
});
