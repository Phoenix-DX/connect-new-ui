import { describe, expect, it } from 'vitest';
import type { OnInitializeSharingScreenResult } from './connectShareActions';
import { connectShareReducer, INITIAL_CONNECT_SHARE_STATE, shareRedirectTarget } from './connectShareState';

const result = (patch: Partial<OnInitializeSharingScreenResult>): OnInitializeSharingScreenResult => ({
  isRedirect: false,
  redirect_ShareObjectTypeId: '',
  showFreeSubscriptionAlert: false,
  statusMessage: '',
  redirect_Share_AttributesId: '',
  ...patch,
});

describe('connectShareReducer', () => {
  it('sharingScreenInitialized keeps the status message and, for a redirect, the type and the id', () => {
    const redirect = connectShareReducer(INITIAL_CONNECT_SHARE_STATE, {
      type: 'sharingScreenInitialized',
      result: result({
        isRedirect: true,
        redirect_ShareObjectTypeId: 'Household',
        redirect_Share_AttributesId: '42438',
      }),
    });
    expect(redirect).toEqual({
      statusMessage: '',
      showFreeSubscriptionAlert: false,
      isRedirect: true,
      redirect: { shareObjectTypeId: 'Household', attributesId: '42438' },
    });
  });

  it('sharingScreenInitialized without a redirect sets StatusMessage only', () => {
    const next = connectShareReducer(INITIAL_CONNECT_SHARE_STATE, {
      type: 'sharingScreenInitialized',
      result: result({
        statusMessage: "You don't have access to shared item",
        showFreeSubscriptionAlert: true,
        redirect_ShareObjectTypeId: 'Household',
        redirect_Share_AttributesId: '42438',
      }),
    });
    expect(next).toEqual({ ...INITIAL_CONNECT_SHARE_STATE, statusMessage: "You don't have access to shared item" });
  });

  it('freeSubscriptionAlertShown sets ShowFreeSubscriptionAlert; redirectCancelled clears IsRedirect only', () => {
    expect(
      connectShareReducer(INITIAL_CONNECT_SHARE_STATE, { type: 'freeSubscriptionAlertShown' })
        .showFreeSubscriptionAlert,
    ).toBe(true);
    const redirect = {
      ...INITIAL_CONNECT_SHARE_STATE,
      isRedirect: true,
      redirect: { shareObjectTypeId: 'Locality', attributesId: '1001' },
    };
    expect(connectShareReducer(redirect, { type: 'redirectCancelled' })).toEqual({ ...redirect, isRedirect: false });
  });
});

describe('shareRedirectTarget (Action_Redirect)', () => {
  it('opens HouseholdDetails for a Household, My Household or Update, with the id as a Long Integer', () => {
    for (const type of ['Household', 'My Household', 'Update']) {
      expect(shareRedirectTarget(type, '42438')).toEqual({
        path: '/UBTConnect/HouseholdDetails',
        params: { HouseholdId: '42438' },
      });
    }
    expect(shareRedirectTarget('Household', 'abc')?.params).toEqual({ HouseholdId: '0' });
  });

  it('opens OneSchoolGlobalDetails, FeedItemDetail (text id) and SupperMeeting_Details', () => {
    expect(shareRedirectTarget('OneSchool Global', '1430')).toEqual({
      path: '/UBTConnect/OneSchoolGlobalDetails',
      params: { In_OneSchoolGlobalId: '1430' },
    });
    expect(shareRedirectTarget('Feed', 'mock-feed-item-1')).toEqual({
      path: '/UBTConnect/FeedItemDetail',
      params: { FeedItemId: 'mock-feed-item-1' },
    });
    expect(shareRedirectTarget('Supper Meeting', '1210')).toEqual({
      path: '/UBTConnect/SupperMeeting_Details',
      params: { In_SubdivsionId: '1210' },
    });
  });

  it('gives null for a type that it does not route', () => {
    expect(shareRedirectTarget('Locality', '1001')).toBeNull();
    expect(shareRedirectTarget('', '')).toBeNull();
  });
});
