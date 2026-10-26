import { describe, expect, it } from 'vitest';
import type { HouseholdMember, MemberRelations } from '@/api/household';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import {
  householdRelationsReducer,
  INITIAL_HOUSEHOLD_RELATIONS_STATE,
  initialHouseholdRelationsState,
  isNotFetched,
  MEMBER_DEFAULTS,
  memberHouseholdToOpen,
  type HouseholdRelationsState,
} from './householdRelationsState';

/* The pure parts of HouseholdRelations_Block. Fictional relatives. */
const member = (patch: Partial<HouseholdMember>): HouseholdMember => ({ ...MEMBER_DEFAULTS, ...patch });

const details: MemberRelations = {
  MemberName: 'Tomás Herrera',
  FamilyName: 'The Herreras',
  Father: member({ Id: '5101', HouseholdId: '5200', Title: 'Ramón Herrera' }),
  Mother: member({ Id: '5102', HouseholdId: '5200', Title: 'Elena Soto' }),
  FormerSpouses: [],
  ParentHouseholdId: '5200',
};

const withStatus = (member: DataFetchStatus, siblings: DataFetchStatus): HouseholdRelationsState => ({
  ...INITIAL_HOUSEHOLD_RELATIONS_STATE,
  Get_MemberDetails: { ...INITIAL_HOUSEHOLD_RELATIONS_STATE.Get_MemberDetails, dataFetchStatus: member },
  Get_ParentHouseholdDetails: {
    ...INITIAL_HOUSEHOLD_RELATIONS_STATE.Get_ParentHouseholdDetails,
    dataFetchStatus: siblings,
  },
});

describe('householdRelationsState', () => {
  it('starts a new view with the skeleton father, mother and two sibling rows (OnInitialize)', () => {
    const state = initialHouseholdRelationsState(false);
    expect(state.Get_MemberDetails.Father).toEqual(member({ Title: 'Loading', Id: '-1', HouseholdId: '-1' }));
    expect(state.Get_MemberDetails.Mother).toEqual(state.Get_MemberDetails.Father);
    expect(state.Get_ParentHouseholdDetails.Out_siblingRelations).toEqual([MEMBER_DEFAULTS, MEMBER_DEFAULTS]);
    expect(state.isLoading).toBe(true);
    expect(state.Get_MemberDetails.dataFetchStatus).toBe(DataFetchStatus.Fetching);
  });

  it('keeps the defaults for a restored view without a saved record', () => {
    expect(initialHouseholdRelationsState(true)).toBe(INITIAL_HOUSEHOLD_RELATIONS_STATE);
    expect(INITIAL_HOUSEHOLD_RELATIONS_STATE.Get_ParentHouseholdDetails.Out_siblingRelations).toEqual([]);
  });

  it('Actions_DefineLoading: a refresh sets isLoading; else isLoading while neither data action ended', () => {
    const refresh = householdRelationsReducer(withStatus(DataFetchStatus.Fetched, DataFetchStatus.Fetched), {
      type: 'loadingDefined',
      isRefresh: true,
    });
    expect(refresh.isLoading).toBe(true);
    const define = (memberStatus: DataFetchStatus, siblingsStatus: DataFetchStatus) =>
      householdRelationsReducer(withStatus(memberStatus, siblingsStatus), { type: 'loadingDefined', isRefresh: false })
        .isLoading;
    expect(define(DataFetchStatus.Fetching, DataFetchStatus.Fetching)).toBe(true);
    expect(define(DataFetchStatus.Fetched, DataFetchStatus.Fetching)).toBe(false);
    expect(define(DataFetchStatus.Fetching, DataFetchStatus.Error)).toBe(false);
    expect(define(DataFetchStatus.Fetched, DataFetchStatus.Fetched)).toBe(false);
  });

  it('records the fetch status and the answers of both data actions', () => {
    let state = householdRelationsReducer(initialHouseholdRelationsState(false), { type: 'memberDetailsFetching' });
    state = householdRelationsReducer(state, { type: 'memberDetailsFetched', details });
    expect(state.Get_MemberDetails).toEqual({ ...details, dataFetchStatus: DataFetchStatus.Fetched });
    state = householdRelationsReducer(state, { type: 'siblingsFetching' });
    expect(state.Get_ParentHouseholdDetails.dataFetchStatus).toBe(DataFetchStatus.Fetching);
    const siblings = [member({ Id: '5103', Title: 'Lucía' })];
    state = householdRelationsReducer(state, { type: 'siblingsFetched', details: { Out_siblingRelations: siblings } });
    expect(state.Get_ParentHouseholdDetails).toEqual({
      Out_siblingRelations: siblings,
      dataFetchStatus: DataFetchStatus.Fetched,
    });
  });

  it('keeps the records of a failed data action and sets its status to Error', () => {
    const start = initialHouseholdRelationsState(false);
    const failed = householdRelationsReducer(householdRelationsReducer(start, { type: 'memberDetailsFailed' }), {
      type: 'siblingsFailed',
    });
    expect(failed.Get_MemberDetails).toEqual({ ...start.Get_MemberDetails, dataFetchStatus: DataFetchStatus.Error });
    expect(failed.Get_ParentHouseholdDetails).toEqual({
      ...start.Get_ParentHouseholdDetails,
      dataFetchStatus: DataFetchStatus.Error,
    });
  });

  it('sets UserAge_Visibility and opens and closes the notes sheet', () => {
    let state = householdRelationsReducer(INITIAL_HOUSEHOLD_RELATIONS_STATE, {
      type: 'userAgeVisibilitySet',
      displayAge: true,
    });
    expect(state.UserAge_Visibility).toBe(true);
    state = householdRelationsReducer(state, { type: 'notesSheetOpened' });
    expect(state.ShowNotesSheet).toBe(true);
    state = householdRelationsReducer(state, { type: 'notesSheetClosed' });
    expect(state.ShowNotesSheet).toBe(false);
  });

  it('replaces the notes and removes a deleted note, with Total = the length of the list', () => {
    const notes = {
      Total: 7,
      Note_Item_List: [
        { Id: '31', Note: 'Met at the regional gathering' },
        { Id: '32', Note: 'Ask about the new workshop' },
      ],
    };
    const changed = householdRelationsReducer(INITIAL_HOUSEHOLD_RELATIONS_STATE, { type: 'notesChanged', notes });
    expect(changed.FetchNotes.Notes).toBe(notes);
    const deleted = householdRelationsReducer(changed, { type: 'noteDeleted', noteId: '31' });
    expect(deleted.FetchNotes.Notes).toEqual({
      Total: 1,
      Note_Item_List: [{ Id: '32', Note: 'Ask about the new workshop' }],
    });
    expect(householdRelationsReducer(deleted, { type: 'noteDeleted', noteId: '99' })).toBe(deleted);
  });

  it('isNotFetched: true only while a data action has neither an answer nor an error', () => {
    expect(isNotFetched(DataFetchStatus.Fetching)).toBe(true);
    expect(isNotFetched(DataFetchStatus.Fetched)).toBe(false);
    expect(isNotFetched(DataFetchStatus.Error)).toBe(false);
  });

  it('OnClick_Member opens nothing for a deceased member, a member without household or without country', () => {
    const relative = member({ HouseholdId: '5200', CountryName: 'Chile', LocalityName: 'Valparaíso' });
    expect(memberHouseholdToOpen(relative, false)).toBe('5200');
    expect(memberHouseholdToOpen(relative, true)).toBeNull();
    expect(memberHouseholdToOpen({ ...relative, HouseholdId: '0' }, false)).toBeNull();
    expect(memberHouseholdToOpen({ ...relative, HouseholdId: undefined }, false)).toBeNull();
    expect(memberHouseholdToOpen({ ...relative, CountryName: '' }, false)).toBeNull();
  });
});
