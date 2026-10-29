import { describe, expect, it } from 'vitest';
import {
  descriptionRowClass,
  milestoneDateText,
  textToLongIntegerValidated,
  typeRowClass,
} from './adminMilestoneDetailActions';
import { adminMilestoneInformationInputs, INITIAL_ADMIN_MILESTONE_DETAIL_STATE } from './adminMilestoneDetailState';

/* The pure client logic of ScreenBlock_AdminMilestoneDetail (SB = the compiled block in
   migration/screens/OrbitAdminMilestoneDetail/sources/). */
const NULL = '1900-01-01T00:00:00';

describe('client helpers', () => {
  it('textToLongIntegerValidated: TextToLongIntegerValidate ? TextToLongInteger : NullIdentifier (SB :1292)', () => {
    expect(textToLongIntegerValidated('9100')).toBe('9100');
    expect(textToLongIntegerValidated(' 42 ')).toBe('42');
    expect(textToLongIntegerValidated('')).toBe('0');
    expect(textToLongIntegerValidated('12a')).toBe('0');
    expect(textToLongIntegerValidated('9007199254740993')).toBe('9007199254740993');
  });
});

describe('the milestone rows (SB view :375-488)', () => {
  it('the date row: the date, then the start and end times when both are set', () => {
    const date = '2026-11-14T13:00:00Z';
    const text = milestoneDateText(date, date, '2026-11-14T15:00:00Z');
    expect(text).toMatch(/^\d{1,2} \w+ 2026 \d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M$/);
    expect(milestoneDateText(date, NULL, '2026-11-14T15:00:00Z')).toMatch(/^\d{1,2} \w+ 2026$/);
  });
  it('margin-top-m of the type and description rows', () => {
    expect(typeRowClass(true)).toBe('flex-center-vertical margin-top-m');
    expect(typeRowClass(false)).toBe('flex-center-vertical');
    expect(descriptionRowClass(false, '')).toBe('flex-center-vertical');
    expect(descriptionRowClass(false, 'Meeting')).toBe('flex-center-vertical margin-top-m');
    expect(descriptionRowClass(true, '')).toBe('flex-center-vertical margin-top-m');
  });
});

describe('adminMilestoneInformationInputs (DataActionGet_MilestoneInformation)', () => {
  it('sends the seven inputs and the three Boolean block variables', () => {
    const inputs = {
      In_EventId: '7301',
      In_MilestoneId: '730104',
      In_MilestoneName: 'Conference Meeting',
      In_MilestoneDate: NULL,
      In_MilestoneStartDate: NULL,
      In_MilestoneEndDate: NULL,
      In_MilestoneDescription: '',
    };
    expect(
      adminMilestoneInformationInputs(inputs, { ...INITIAL_ADMIN_MILESTONE_DETAIL_STATE, isFetchingData: true }),
    ).toEqual({ ...inputs, IsFetchingData: true, IsProcessingData: false, QRCodePopupOpened: false });
  });
});
