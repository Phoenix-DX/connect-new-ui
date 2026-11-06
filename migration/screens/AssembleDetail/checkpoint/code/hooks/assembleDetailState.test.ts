import { describe, expect, it } from 'vitest';
import {
  assembleDetailReducer,
  CURRENT_ITEM_POSITION,
  initializeFromPreload,
  INITIAL_ASSEMBLE_DETAIL_STATE,
  titleUpdate,
} from './assembleDetailState';

/* ScreenBlock_AssembleDetail: OnInitialize_Preload, the title and the UpdateTitle event. */
describe('assembleDetailState', () => {
  it('starts with an empty title, PreloadedFromListIndex 0 and CurrentItemPosition -1', () => {
    expect(INITIAL_ASSEMBLE_DETAIL_STATE).toEqual({ title: '', preloadedFromListIndex: 0 });
    expect(CURRENT_ITEM_POSITION).toBe(-1);
  });

  it('a preloaded meeting gives the title and the list index', () => {
    const preload = {
      AssembleEventSummary: { AssembleEventType: { Title: 'Gospel Preaching' } },
      PreloadedFromListIndex: 7,
    };
    expect(initializeFromPreload(preload, 'Assemble')).toEqual({
      title: 'Gospel Preaching',
      preloadedFromListIndex: 7,
    });
  });

  it('a preloaded record without a title takes the AssembleEventTypeTile input; a missing index is 0', () => {
    expect(initializeFromPreload({ AssembleEventSummary: {} }, 'Prayer Meeting')).toEqual({
      title: 'Prayer Meeting',
      preloadedFromListIndex: 0,
    });
  });

  it('no preload, or a list as preload: only the title, from the input', () => {
    expect(initializeFromPreload(null, 'Reading Meeting')).toEqual({ title: 'Reading Meeting' });
    expect(initializeFromPreload(['91004', '91005'], 'Reading Meeting')).toEqual({ title: 'Reading Meeting' });
  });

  it('UpdateTitle sets a title that is not empty; an empty one changes nothing', () => {
    expect(titleUpdate("Lord's Supper")).toEqual({ title: "Lord's Supper" });
    expect(titleUpdate('')).toBeNull();
  });

  it('the reducer assigns the patch', () => {
    expect(assembleDetailReducer(INITIAL_ASSEMBLE_DETAIL_STATE, { title: 'Ministry Meeting' })).toEqual({
      title: 'Ministry Meeting',
      preloadedFromListIndex: 0,
    });
  });
});
