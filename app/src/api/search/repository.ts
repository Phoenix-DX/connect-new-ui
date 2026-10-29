import { callAction } from '@/api/client/callAction';
import {
  toBirthdayOptions,
  toFetchSearchResultsInputs,
  toFilteredRecentClickedResults,
  toGetFilteredRecentClickedResultsInputs,
  toSearchResults,
} from './mapper';
import type {
  FilteredRecentClickedResults,
  RecentClickedResultRow,
  SearchBirthdayOption,
  SearchResults,
  SearchTag,
  SearchVariables,
} from './types';

/** The three calls of the search block Directory_Search.ScreenBlock_Search, with their OutSystems names: the data action
    that searches, the aggregate of the birthday options and the data action of the recent clicked results.
    @origin UBTConnect.Directory_Search.ScreenBlock_Search */

/** DataActionFetchSearchResults (FetchSearchResults): refreshed only by Action_RefreshSearch (refresh -1, no fetch at
    start). It sends the block variables as they are at fetch time; the tag list is the TagList variable. */
export async function fetchSearchResults(
  variables: SearchVariables,
  tagList: SearchTag[],
  isLoading: boolean,
): Promise<SearchResults> {
  return toSearchResults(
    await callAction(
      'UBTConnect',
      'ScreenBlock_Search/DataActionFetchSearchResults',
      toFetchSearchResultsInputs(variables, tagList, isLoading),
    ),
  );
}

/** ScreenDataSetGet_SearchBirthdayOptions (Get_SearchBirthdayOptions): MaxRecords 50, StartIndex 0. */
export async function fetchSearchBirthdayOptions(): Promise<SearchBirthdayOption[]> {
  return toBirthdayOptions(
    await callAction('UBTConnect', 'ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions', {
      MaxRecords: 50,
      StartIndex: 0,
    }),
  );
}

/** DataActionGet_FilteredRecentClickedResults (Get_FilteredRecentClickedResults): only
    Get_RecentClickedResultsOnAfterFetch refreshes it, while it has no data (refresh -1, no fetch at start;
    ScreenBlock_Search.mvc.js:1834, 2354-2400 of the capture of 2026-10-29). It sends the block variables as they are at
    fetch time; the server reads RecentClickedResults. */
export async function getFilteredRecentClickedResults(
  variables: SearchVariables,
  tagList: SearchTag[],
  isLoading: boolean,
  recentClickedResults: RecentClickedResultRow[],
): Promise<FilteredRecentClickedResults> {
  return toFilteredRecentClickedResults(
    await callAction(
      'UBTConnect',
      'ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults',
      toGetFilteredRecentClickedResultsInputs(variables, tagList, isLoading, recentClickedResults),
    ),
  );
}
