import { describe, expect, it } from 'vitest';
import type { Household } from '@/api/household';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import {
  handlePreviewData,
  householdDetailsReducer,
  INITIAL_HOUSEHOLD_DETAILS_STATE,
  initialTagsList,
  selectedTagOf,
  selectTimelinePhoto,
  setPhotosTagEnabled,
} from './householdDetailsState';

describe('HouseholdDetails_Block client actions', () => {
  const data: Household = {
    Household: { HouseholdCard: { Id: '1', Household_Card_Content: { Address: 'Old address' } } },
    Out_HouseholdMembers: [{ Id: '11', MobilePhone: 'm', WorkPhone: 'w', HomePhone: 'h' }, { Id: '12' }],
    Out_NonHouseholdMembers: [],
    isVisible: true,
  };
  const accountForm = {
    AccountForm_PersonalInformation: { ShowLifeCycleDates: true, Email: 'e' },
    AccountForm_ContactInformation: {
      ShowMobileNumber: false,
      MobileNumber: 'm2',
      ShowWorkNumber: true,
      WorkNumber: 'w2',
      HomeNumber: 'h2',
    },
  };

  it('Action_HandlePreviewData: nothing without UsePreview', () => {
    expect(handlePreviewData(data, { UsePreview: false, FormattedAddress: 'x' })).toBe(data);
  });

  it('Action_HandlePreviewData: address, then the previewed member (home phone only for a householder)', () => {
    const out = handlePreviewData(data, {
      UsePreview: true,
      FormattedAddress: 'New address',
      HouseholdMemberId: '11',
      UI_AccountForm: accountForm,
    });
    expect(out.Household.HouseholdCard?.Household_Card_Content?.Address).toBe('New address');
    expect(out.Out_HouseholdMembers[0]).toEqual({
      Id: '11',
      DisplayAge: true,
      MobilePhone: '',
      WorkPhone: 'w2',
      Email: 'e',
      HomePhone: 'h',
    });
    const householder = handlePreviewData(data, {
      UsePreview: true,
      HouseholdMemberId: '11',
      isHouseholder: true,
      UI_AccountForm: accountForm,
    });
    expect(householder.Out_HouseholdMembers[0]?.HomePhone).toBe('h2');
    const unknown = handlePreviewData(data, { UsePreview: true, HouseholdMemberId: '99', UI_AccountForm: accountForm });
    expect(unknown.Out_HouseholdMembers).toBe(data.Out_HouseholdMembers);
  });

  it('OnAfterFetch: the Photos tag is disabled for a deceased, ancestry or hidden household', () => {
    const tags = initialTagsList();
    expect(setPhotosTagEnabled(tags, {}).map((t) => t.Enabled)).toEqual([undefined, true]);
    for (const option of ['IsDeceased', 'IsAncestry', 'IsHidden'] as const) {
      expect(setPhotosTagEnabled(tags, { DisplayOptions: { [option]: true } })[1]?.Enabled).toBe(false);
    }
  });

  it('OnChangeTag and Handler_TimelinePhotoSelected', () => {
    expect(selectedTagOf(initialTagsList())).toBe('About');
    expect(selectedTagOf([])).toBe('');
    const images = selectTimelinePhoto([{ Date: '2020-01-01' }, { Date: '2021-01-01', IsCurrent: true }], '2020-01-01');
    expect(images.map((i) => i.IsCurrent)).toEqual([true, false]);
  });
});

describe('householdDetailsReducer', () => {
  const initial = INITIAL_HOUSEHOLD_DETAILS_STATE;

  it('OnReady: the skeleton household with the age visibility and the skeleton-only input, then the two tags', () => {
    const skeleton = { HouseholdCard: { Id: '0' } };
    const ready = householdDetailsReducer(initial, {
      type: 'initialized',
      userAgeVisibility: true,
      skeleton,
      isSkeletonOnly: true,
    });
    expect(ready.userAgeVisibility).toBe(true);
    expect(ready.isSkeletonOnly).toBe(true);
    expect(ready.household.Household).toBe(skeleton);
    expect(ready.household.dataFetchStatus).toBe(DataFetchStatus.Fetching);
    const tagged = householdDetailsReducer(ready, { type: 'tagsInitialized' });
    expect(tagged.tags).toEqual(initialTagsList());
    expect(tagged.selectedTag).toBe('About');
  });

  it('GetHousehold: Fetching, then Fetched with the Photos tag enabled or Error', () => {
    const tagged = householdDetailsReducer(initial, { type: 'tagsInitialized' });
    const started = householdDetailsReducer(tagged, { type: 'householdFetchStarted' });
    expect(started.household.dataFetchStatus).toBe(DataFetchStatus.Fetching);
    expect(householdDetailsReducer(started, { type: 'householdFetchFailed' }).household.dataFetchStatus).toBe(
      DataFetchStatus.Error,
    );
    const household: Household = {
      Household: { HouseholdCard: { Household_Card_Content: { DisplayOptions: { IsDeceased: true } } } },
      Out_HouseholdMembers: [{ Id: '11' }],
      Out_NonHouseholdMembers: [],
      isVisible: true,
    };
    const fetched = householdDetailsReducer(started, { type: 'householdFetched', household });
    expect(fetched.household).toEqual({ ...household, dataFetchStatus: DataFetchStatus.Fetched });
    expect(fetched.tags[1]?.Enabled).toBe(false);
  });

  it('OnChangeTag: the selected tag; the Photos tag without Photobook access hides the call-to-action section', () => {
    const photos = initialTagsList().map((t) => ({ ...t, IsSelected: t.Identifier === 'Photos' }));
    const withAccess = householdDetailsReducer(initial, {
      type: 'tagsChanged',
      tags: photos,
      hasPhotobookAccess: true,
    });
    expect(withAccess.selectedTag).toBe('Photos');
    expect(withAccess.hidePhotobookActions).toBe(false);
    const without = householdDetailsReducer(initial, { type: 'tagsChanged', tags: photos, hasPhotobookAccess: false });
    expect(without.hidePhotobookActions).toBe(true);
    const about = householdDetailsReducer(without, {
      type: 'tagsChanged',
      tags: initialTagsList(),
      hasPhotobookAccess: false,
    });
    expect(about.hidePhotobookActions).toBe(false);
  });

  it('the other variables: preview age visibility, skeleton only, coordinates, bookmark, share sheet, timeline', () => {
    let state = householdDetailsReducer(initial, { type: 'previewAgeVisibilitySet', userAgeVisibility: true });
    expect(state.userAgeVisibility).toBe(true);
    state = householdDetailsReducer({ ...state, isSkeletonOnly: true }, { type: 'skeletonOnlyEnded' });
    expect(state.isSkeletonOnly).toBe(false);
    const coordinates = { Latitude: '1', Longitude: '2', UseCoordinates: true };
    state = householdDetailsReducer(state, { type: 'coordinatesFetched', coordinates });
    expect(state.coordinates).toBe(coordinates);
    state = householdDetailsReducer(state, { type: 'bookmarkChanged', isBookmarked: true });
    expect(state.isBookmarked).toBe(true);
    state = householdDetailsReducer(state, { type: 'shareSheetSet', isOpen: true });
    expect(state.isShareOpen).toBe(true);
    state = householdDetailsReducer(
      { ...state, timelineImages: [{ Date: '2020-01-01' }, { Date: '2021-01-01' }] },
      { type: 'timelinePhotoSelected', date: '2021-01-01' },
    );
    expect(state.timelineImages.map((i) => i.IsCurrent)).toEqual([false, true]);
  });
});
