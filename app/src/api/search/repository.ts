import { callAction } from '@/api/client/callAction';
import { toBirthdayOptions, toFetchSearchResultsInputs, toSearchResults } from './mapper';
import type { SearchBirthdayOption, SearchResults, SearchTag, SearchVariables } from './types';

/** The two calls of the search block Directory_Search.ScreenBlock_Search, with their OutSystems names: the data action
    that searches and the aggregate of the birthday options.
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
