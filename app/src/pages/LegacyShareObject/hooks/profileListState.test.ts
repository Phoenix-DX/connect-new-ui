import { describe, expect, it } from 'vitest';
import type { AvailableUser, AvailableUsers } from '@/api/share';
import {
  availableUsersFetched,
  availableUsersInputs,
  INITIAL_PROFILE_LIST_STATE,
  profileListReducer,
  profileListResults,
  profileShared,
  profileShareFailed,
  type ProfileListState,
  type ShareProfile,
} from './profileListState';

const NO_PHOTO = { bucket: '', path: '', type: '', signedPath: '' };
const user = (id: string, fullName: string): AvailableUser => ({
  id,
  fullName,
  localityName: 'Nelson',
  countryName: 'New Zealand',
  photo: NO_PHOTO,
});
const row = (profileId: string, isShared: boolean): ShareProfile => ({
  profileId,
  name: `User ${profileId}`,
  description: 'Nelson, New Zealand',
  cdn: NO_PHOTO,
  isShared,
});
const answer = (...items: AvailableUser[]): AvailableUsers => ({ label: 'Locality Members', items });

describe('profileListState', () => {
  it('the request sends the block variables of the time, with MaxRecords 50', () => {
    const state: ProfileListState = { ...INITIAL_PROFILE_LIST_STATE, searchFilter: 'hana', hasSearched: true };
    expect(availableUsersInputs(state, '42438', 'Household')).toEqual({
      SearchFilter: 'hana',
      ShareObjectId: '42438',
      ShareObjectTypeId: 'Household',
      MaxRecords: 50,
      HasSearched: true,
    });
  });

  it('OnAfterFetch: the message, the shared rows kept in SharedProfileIds, the rows built again', () => {
    const state: ProfileListState = {
      ...INITIAL_PROFILE_LIST_STATE,
      searchFilter: 'ko',
      sharedProfileIds: ['7003'],
      shareProfiles: [row('7001', true), row('7002', false)],
    };
    const data = answer(user('7001', 'Hana Kowalczyk'), user('7002', 'Ana Kovač'), user('7003', 'Iko Mbatha'));
    expect(availableUsersFetched(state, data)).toEqual({
      fetched: data,
      noResultsFoundMessage: "No results found for 'ko'",
      sharedProfileIds: ['7003', '7001'],
      shareProfiles: [
        {
          profileId: '7001',
          name: 'Hana Kowalczyk',
          description: 'Nelson, New Zealand',
          cdn: NO_PHOTO,
          isShared: true,
        },
        { profileId: '7002', name: 'Ana Kovač', description: 'Nelson, New Zealand', cdn: NO_PHOTO, isShared: false },
        { profileId: '7003', name: 'Iko Mbatha', description: 'Nelson, New Zealand', cdn: NO_PHOTO, isShared: true },
      ],
    });
  });

  it('a share that succeeded marks the row of the target as shared', () => {
    const state = { ...INITIAL_PROFILE_LIST_STATE, shareProfiles: [row('7001', false), row('7002', false)] };
    expect(profileShared(state, '7002').shareProfiles?.map((p) => p.isShared)).toEqual([false, true]);
    expect(profileShared(state, '9999').shareProfiles?.map((p) => p.isShared)).toEqual([false, false]);
  });

  it('a share that failed takes the target out of SharedProfileIds and unmarks its row', () => {
    const state = {
      ...INITIAL_PROFILE_LIST_STATE,
      sharedProfileIds: ['7001', '7002'],
      shareProfiles: [row('7001', true), row('7002', true)],
    };
    const patch = profileShareFailed(state, '7002');
    expect(patch.sharedProfileIds).toEqual(['7001']);
    expect(patch.shareProfiles?.map((p) => p.isShared)).toEqual([true, false]);
  });

  it('the results area: the list or no result once fetched, else the error or the search in progress', () => {
    expect(profileListResults(answer(user('7001', 'Hana Kowalczyk')), true)).toBe('list');
    expect(profileListResults(answer(), false)).toBe('noResults');
    expect(profileListResults(null, true)).toBe('error');
    expect(profileListResults(null, false)).toBe('searching');
  });

  it('the reducer applies an assignment and keeps the other variables', () => {
    expect(profileListReducer(INITIAL_PROFILE_LIST_STATE, { searchFilter: 'a' })).toEqual({
      ...INITIAL_PROFILE_LIST_STATE,
      searchFilter: 'a',
    });
  });
});
