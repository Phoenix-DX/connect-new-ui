import { describe, expect, it } from 'vitest';
import type { AssembleEventResult } from '@/api/event';
import {
  assembleEventDetailReducer,
  initialAssembleEventDetailState,
  isMeetingNotFound,
  withMeetingDateTime,
} from './assembleEventDetailState';

/* AssembleEventDetail: the variables, GetAssembleEvent_OnAfterFetch and the error condition. Fictional meeting. */
const result = (summary: Partial<AssembleEventResult['AssembleEvent']['AssembleEventSummary']>, isNotFound = false) =>
  ({
    IsNotFound: isNotFound,
    AssembleEvent: {
      AssembleEventSummary: { EventId: '1210-20260920-3', DateTime: '2026-09-20T18:00:00', Notes: '', ...summary },
      AssembleAttendeeSubdivisionList: [],
      AssembleSpecialAttendeeSubdivisionList: [],
      AssembleAttendeeSpecialGuestList: [],
      GSMContactList: [],
    },
  }) satisfies AssembleEventResult;

describe('assembleEventDetailState', () => {
  it('OnInitialize: the device time zone, not fetched, no meeting', () => {
    expect(initialAssembleEventDetailState('America/Argentina/Buenos_Aires')).toEqual({
      deviceTimezone: 'America/Argentina/Buenos_Aires',
      isDataFetched: false,
      getAssembleEvent: null,
    });
  });

  it('the reducer assigns the patch', () => {
    const state = initialAssembleEventDetailState('Europe/London');
    expect(assembleEventDetailReducer(state, { isDataFetched: true })).toEqual({ ...state, isDataFetched: true });
  });

  it('OnAfterFetch keeps the DateTime of the meeting (wall-clock text, no offset)', () => {
    const fetched = result({ DateTime: '2026-09-20T18:00:00' });
    expect(withMeetingDateTime(fetched, '2026-09-21T06:00:00').AssembleEvent.AssembleEventSummary.DateTime).toBe(
      '2026-09-20T18:00:00',
    );
  });

  it('OnAfterFetch: the null DateTime ("") takes the Start input', () => {
    const fetched = result({ DateTime: '' });
    const out = withMeetingDateTime(fetched, '2026-09-21T06:00:00');
    expect(out.AssembleEvent.AssembleEventSummary.DateTime).toBe('2026-09-21T06:00:00');
    expect(fetched.AssembleEvent.AssembleEventSummary.DateTime).toBe('');
  });

  it('"Meeting not found" shows for IsNotFound or an IsUnavailable meeting, not before the fetch', () => {
    expect(isMeetingNotFound(null)).toBe(false);
    expect(isMeetingNotFound(result({}))).toBe(false);
    expect(isMeetingNotFound(result({}, true))).toBe(true);
    expect(isMeetingNotFound(result({ IsUnavailable: true }))).toBe(true);
  });
});
