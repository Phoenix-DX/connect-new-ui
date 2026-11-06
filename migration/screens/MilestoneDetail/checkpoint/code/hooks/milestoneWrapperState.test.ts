import { describe, expect, it } from 'vitest';
import type { GmpMilestoneHost } from '@/api/event';
import type { MilestoneDetailInputs } from '@/pages/MilestoneDetail/inputs';
import {
  EMPTY_GMP_MILESTONE_HOST,
  fetchesAtStart,
  INITIAL_MILESTONE_WRAPPER_STATE,
  milestoneWrapperBody,
  milestoneWrapperReducer,
  textToInteger,
  type MilestoneWrapperState,
} from './milestoneWrapperState';

/* The state of ScreenBlock_MilestoneWrapper without React. Fictional milestone and event. */
const INPUTS: MilestoneDetailInputs = {
  In_FromNotification: false,
  In_MilestoneId: '5501-1',
  In_EventId: '5501',
  In_HostId: '770001',
  In_OrbitMilestoneTypeId: 'accommodation-host',
  In_MilestoneName: 'Accommodation',
  In_EventName: 'Spring Youth Weekend - Tandil',
};
const ANSWER: GmpMilestoneHost = {
  MilestoneType: 'accommodation-host',
  MilestoneTitle: 'Hosted Nights',
  HostId: '770009',
  Status: { Success: true, ErrorMessage: '' },
};
const state = (patch: Partial<MilestoneWrapperState> = {}): MilestoneWrapperState => ({
  ...INITIAL_MILESTONE_WRAPPER_STATE,
  ...patch,
});

describe('milestoneWrapperState', () => {
  it('starts with the record defaults', () => {
    expect(INITIAL_MILESTONE_WRAPPER_STATE).toEqual({
      isFetchingData: false,
      userMemberId: '0',
      response: { MilestoneType: '', MilestoneTitle: '', HostId: '0', Status: { Success: false, ErrorMessage: '' } },
    });
  });

  it('fetches at start from a notification, or when an optional input is missing', () => {
    expect(fetchesAtStart(INPUTS)).toBe(false);
    expect(fetchesAtStart({ ...INPUTS, In_FromNotification: true })).toBe(true);
    expect(fetchesAtStart({ ...INPUTS, In_HostId: '0' })).toBe(true);
    expect(fetchesAtStart({ ...INPUTS, In_OrbitMilestoneTypeId: '' })).toBe(true);
    expect(fetchesAtStart({ ...INPUTS, In_MilestoneName: '' })).toBe(true);
  });

  it('reads TextToInteger: "0" for a text that is not an integer', () => {
    expect(textToInteger('880101')).toBe('880101');
    expect(textToInteger('42abc')).toBe('42');
    expect(textToInteger('')).toBe('0');
    expect(textToInteger('none')).toBe('0');
  });

  it('sets IsFetchingData and UserMemberId at the start, and the answer with IsFetchingData False after it', () => {
    const started = milestoneWrapperReducer(INITIAL_MILESTONE_WRAPPER_STATE, {
      type: 'fetchStarted',
      userMemberId: '880101',
    });
    expect(started).toEqual(state({ isFetchingData: true, userMemberId: '880101' }));
    expect(milestoneWrapperReducer(started, { type: 'gmpMilestoneHostFetched', response: ANSWER })).toEqual(
      state({ isFetchingData: false, userMemberId: '880101', response: ANSWER }),
    );
  });

  describe('milestoneWrapperBody', () => {
    it('shows the accommodation host block with the screen inputs when not from a notification', () => {
      expect(milestoneWrapperBody(state(), INPUTS)).toEqual({
        kind: 'accommodationHost',
        inputs: {
          In_OrbitMilestoneTypeId: 'accommodation-host',
          In_MilestoneId: '5501-1',
          In_PreloadEventName: 'Spring Youth Weekend - Tandil',
          In_PreloadMilestoneName: 'Accommodation',
          In_HostId: '770001',
          In_EventId: '5501',
        },
      });
    });

    it('keeps the inputs when not from a notification, also after an answer', () => {
      const body = milestoneWrapperBody(state({ response: ANSWER }), { ...INPUTS, In_HostId: '0' });
      expect(body.kind === 'accommodationHost' ? body.inputs.In_HostId : null).toBe('0');
    });

    it('from a notification: the skeleton while fetching, then the block with the type, host and title of the answer', () => {
      const fromNotification = { ...INPUTS, In_FromNotification: true, In_OrbitMilestoneTypeId: '' };
      expect(milestoneWrapperBody(state({ isFetchingData: true }), fromNotification)).toEqual({ kind: 'skeleton' });
      expect(milestoneWrapperBody(state({ response: ANSWER }), fromNotification)).toEqual({
        kind: 'accommodationHost',
        inputs: {
          In_OrbitMilestoneTypeId: 'accommodation-host',
          In_MilestoneId: '5501-1',
          In_PreloadEventName: 'Spring Youth Weekend - Tandil',
          In_PreloadMilestoneName: 'Hosted Nights',
          In_HostId: '770009',
          In_EventId: '5501',
        },
      });
    });

    it('from a notification without Success: the Failed layout', () => {
      const fromNotification = { ...INPUTS, In_FromNotification: true };
      expect(milestoneWrapperBody(state(), fromNotification)).toEqual({ kind: 'failed' });
      expect(
        milestoneWrapperBody(state({ response: { ...ANSWER, Status: { Success: false, ErrorMessage: 'x' } } }), {
          ...fromNotification,
        }),
      ).toEqual({ kind: 'failed' });
    });

    it('dispatches the meal and the other accommodation types to their blocks, and shows nothing for other types', () => {
      const blocks = {
        'meal-guest': 'mealGuest',
        'meal-host': 'mealHost',
        'meal-helper': 'mealHelper',
        'accommodation-guest': 'accommodationGuest',
        'accommodation-helper': 'accommodationHelper',
      };
      for (const [type, block] of Object.entries(blocks)) {
        expect(milestoneWrapperBody(state(), { ...INPUTS, In_OrbitMilestoneTypeId: type })).toEqual({
          kind: 'milestoneBlock',
          block,
          inputs: {
            In_OrbitMilestoneTypeId: type,
            In_MilestoneId: INPUTS.In_MilestoneId,
            In_PreloadEventName: INPUTS.In_EventName,
            In_PreloadMilestoneName: INPUTS.In_MilestoneName,
            In_HostId: INPUTS.In_HostId,
            In_EventId: INPUTS.In_EventId,
          },
        });
      }
      expect(milestoneWrapperBody(state(), { ...INPUTS, In_OrbitMilestoneTypeId: 'meeting-host' })).toEqual({
        kind: 'none',
      });
      expect(
        milestoneWrapperBody(
          state({ response: { ...EMPTY_GMP_MILESTONE_HOST, Status: { Success: true, ErrorMessage: '' } } }),
          {
            ...INPUTS,
            In_FromNotification: true,
          },
        ),
      ).toEqual({ kind: 'none' });
    });
  });
});
