import { describe, expect, it } from 'vitest';
import { dateTimeInput, readHostSurveyInputs } from './inputs';

/* The route inputs of HostSurvey from the query string. */

describe('readHostSurveyInputs', () => {
  it('reads the five inputs by their original names', () => {
    const params = new URLSearchParams(
      'In_EventId=8800&In_MemberId=5120&In_EventName=Spring%20Gathering' +
        '&In_EventStartDate=2026-11-06T09:00:00Z&In_EventEndDate=2026-11-08T17:00:00Z',
    );
    expect(readHostSurveyInputs(params)).toEqual({
      In_EventId: '8800',
      In_MemberId: '5120',
      In_EventName: 'Spring Gathering',
      In_EventStartDate: '2026-11-06T09:00:00Z',
      In_EventEndDate: '2026-11-08T17:00:00Z',
    });
  });

  it('absent inputs: ids 0, name and dates ""', () => {
    expect(readHostSurveyInputs(new URLSearchParams())).toEqual({
      In_EventId: '0',
      In_MemberId: '0',
      In_EventName: '',
      In_EventStartDate: '',
      In_EventEndDate: '',
    });
  });

  it('a DateTime input: "" when absent or the OutSystems null date, else the text as it is', () => {
    expect(dateTimeInput(null)).toBe('');
    expect(dateTimeInput('1900-01-01T00:00:00')).toBe('');
    expect(dateTimeInput('1900-01-01')).toBe('');
    expect(dateTimeInput('2026-11-06T09:00:00Z')).toBe('2026-11-06T09:00:00Z');
  });
});
