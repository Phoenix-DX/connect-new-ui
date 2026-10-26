import { describe, expect, it } from 'vitest';
import { readEmailTargetInputs } from './inputs';

describe('readEmailTargetInputs', () => {
  it('gives the OutSystems defaults for an empty query string', () => {
    expect(readEmailTargetInputs(new URLSearchParams())).toEqual({
      In_HouseholdFirstName: '',
      In_HouseholdFullName: '',
      EmailTo: '',
      ContactBusinessType: '',
      InitialEmailSubject: '',
      EmailHost: false,
      IsFromLDM: false,
      EventDate: '',
      EventLocality: '',
    });
  });

  it('reads the texts, the Booleans in any case and the date part of EventDate', () => {
    const params = new URLSearchParams({
      In_HouseholdFirstName: 'Mara',
      In_HouseholdFullName: 'Mara Lindqvist',
      EmailTo: 'mara.lindqvist@example.org',
      ContactBusinessType: 'Campus&Co',
      InitialEmailSubject: 'Supper meeting',
      EmailHost: 'TRUE',
      IsFromLDM: 'False',
      EventDate: '2026-11-08T00:00:00',
      EventLocality: 'Uppsala',
    });
    expect(readEmailTargetInputs(params)).toEqual({
      In_HouseholdFirstName: 'Mara',
      In_HouseholdFullName: 'Mara Lindqvist',
      EmailTo: 'mara.lindqvist@example.org',
      ContactBusinessType: 'Campus&Co',
      InitialEmailSubject: 'Supper meeting',
      EmailHost: true,
      IsFromLDM: false,
      EventDate: '2026-11-08',
      EventLocality: 'Uppsala',
    });
  });

  it('reads the OutSystems null date 1900-01-01 as an empty date', () => {
    expect(readEmailTargetInputs(new URLSearchParams('EventDate=1900-01-01T00:00:00')).EventDate).toBe('');
  });
});
