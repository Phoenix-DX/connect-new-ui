import { QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { useCountryInfoQuery, useCountryLocalityStatisticsQuery } from '@/api/country/hooks';
import { useFeedConfigQuery } from '@/api/feed/hooks';
import { useAvailableMembersQuery, useCommunityPopulationQuery } from '@/api/member/hooks';
import { useSearchBirthdayOptionsQuery } from '@/api/search/hooks';
import { useFeedServicesQuery } from '@/api/service/hooks';
import { useAvailableUsersQuery, useShareObjectTypeLabelQuery } from '@/api/share/hooks';
import { useRecentlySharedQuery } from '@/api/share/shareSheet';
import { useFeedUpdatesQuery } from '@/api/update/hooks';
import { testQueryClient } from '@/platform/navigation/testRouter';
import { server } from '@/test/setup';
import { freshPage } from '@/test/testSupport';
import { resetFeedbackDebounce } from './feedbackMessageAutoClose';
import { getFeedbackMessage, resetFeedbackMessages, subscribeFeedback } from './feedbackStore';

/* Item 2, D4 to D12 (migration/clarify/review/item2-fetch-errors.md §3): a failed fetch of each of these queries shows
   the App_Common message once, as TST does for a failed data action of a screen or a block (E1, E3: the read-only
   probe of 2026-10-28 aborted the reads of FeedBlock_CommunityPopulation, CountryDetails, SupperMeeting_DetailsBlock,
   Embedded_FeedCMS, Embedded_MyEntertaining and ProfileList, and TST showed "Service Interruption" each time). The
   request fails with HTTP 500: a CommunicationException, so ShowCommunicationExceptionMessage (online). */

const SHARE = { In_ShareObjectTypeId: 'Update', In_ShareableObjectId: '1', In_UpdateType: '', In_UpdateDate: '' };

const CASES: [id: string, hook: () => unknown][] = [
  ['D4 FeedBlock_CommunityPopulation DataActionFetchCount', () => useCommunityPopulationQuery()],
  ['D5 Embedded_FeedCMS DataActionGetFeedConfig', () => useFeedConfigQuery({ FeedItemId: '', B2CTenant: 'tenant' })],
  [
    'D6 FeedBlock_Services DataActionGetServices',
    () =>
      useFeedServicesQuery({
        mainElementClass: '',
        servicesPerPage: [],
        externalAppPopUpId: '',
        externalAppPopUpInfo: { appName: '', packageName: '', iconId: '' },
        itemPerPage: 8,
        forceAddService: false,
      }),
  ],
  ['D6 FeedBlock_Updates DataActionFetchUpdates', () => useFeedUpdatesQuery()],
  [
    'D7 CountryDetails DataActionGetLocalityStatistics',
    () =>
      useCountryLocalityStatisticsQuery('GB', () => ({
        originalCountryCode: 'GB',
        searchString: '',
        hasFiltersApplied: false,
        localMapId: '',
      })),
  ],
  ['D8 ShareSheet DataActionGetRecentlyShared', () => useRecentlySharedQuery({ ...SHARE, SearchTerm: '' }, 1)],
  ['D8 ShareSheet DataActionGetAvailableMembers', () => useAvailableMembersQuery({ ...SHARE, SearchTerm: 'ab' }, 1)],
  [
    'D9 ProfileList DataActionGetAvailableUsers',
    () =>
      useAvailableUsersQuery(
        { SearchFilter: 'abc', ShareObjectId: '1', ShareObjectTypeId: 'Feed', MaxRecords: 20, HasSearched: true },
        1,
      ),
  ],
  [
    'D10 ScreenBlock_ShareObject GetShareObjectTypeById',
    () =>
      useShareObjectTypeLabelQuery({
        ShareObjectTypeId: 'Feed',
        ObjectId: '1',
        In_CustomTitle: '',
        User_AgeVisibility: false,
      }),
  ],
  ['D11 Profile DataActionGetCountryInfo', () => useCountryInfoQuery('GB', true)],
  ['D12 ScreenBlock_Search Get_SearchBirthdayOptions', () => useSearchBirthdayOptionsQuery(true)],
];

let shown: string[] = [];
let stop: () => void = () => undefined;

beforeEach(() => {
  freshPage();
  resetFeedbackMessages();
  resetFeedbackDebounce();
  shown = [];
  stop = subscribeFeedback(() => {
    const message = getFeedbackMessage()?.message;
    if (message) shown.push(message);
  });
  server.use(http.post('/api/*', () => HttpResponse.json({}, { status: 500 })));
});

afterEach(() => {
  stop();
});

describe('a failed fetch shows the App_Common communication message once', () => {
  test.each(CASES)('%s', async (_id, hook) => {
    const client = testQueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
    renderHook(hook, { wrapper });
    await waitFor(() => {
      expect(shown).toHaveLength(1);
    });
    expect(shown[0]).toContain("<div class='feedback-message--title'>Service Interruption</div>");
    // nothing more after the failure settles
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(shown).toHaveLength(1);
  });
});
