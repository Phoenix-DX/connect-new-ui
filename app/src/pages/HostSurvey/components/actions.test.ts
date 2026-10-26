import { describe, expect, it } from 'vitest';
import type { LocalLabelledRecord } from '@/platform/storage/localEntities';
import { getFormattedDate_Survey, getGenderPreferenceByJSON_Name, getHouseFloorByJSON_Name } from './actions';

/* The client actions that the HostSurvey pills call. */

const FLOORS: LocalLabelledRecord[] = [
  { Id: 5, Label: 'Ground Floor', JSON_Name: 'ground', Order: 1 },
  { Id: 6, Label: 'First Floor', JSON_Name: 'first', Order: 2 },
];
const EMPTY: LocalLabelledRecord = { Id: 0, Label: '', JSON_Name: '', Order: 0 };

describe('HostSurvey client actions', () => {
  it('GetHouseFloorByJSON_Name and GetGenderPreferenceByJSON_Name: the first match, else the empty record', () => {
    expect(getHouseFloorByJSON_Name('first', FLOORS)).toEqual(FLOORS[1]);
    expect(getHouseFloorByJSON_Name('attic', FLOORS)).toEqual(EMPTY);
    const genders: LocalLabelledRecord[] = [{ Id: 2, Label: 'Couple', JSON_Name: 'COUPLE', Order: 1 }];
    expect(getGenderPreferenceByJSON_Name('COUPLE', genders).Label).toBe('Couple');
    expect(getGenderPreferenceByJSON_Name('', genders)).toEqual(EMPTY);
  });

  it('GetFormattedDate_Survey: "" for the null date; else UTC day / two-digit UTC month / UTC year of the local midnight', () => {
    expect(getFormattedDate_Survey('')).toBe('');
    const local = new Date(2026, 10, 7);
    const month = local.getUTCMonth() + 1;
    expect(getFormattedDate_Survey('2026-11-07')).toBe(
      `${String(local.getUTCDate())}/${month < 10 ? `0${String(month)}` : String(month)}/${String(local.getUTCFullYear())}`,
    );
    expect(getFormattedDate_Survey('2026-11-07')).toMatch(/^(6|7)\/11\/2026$/);
  });
});
