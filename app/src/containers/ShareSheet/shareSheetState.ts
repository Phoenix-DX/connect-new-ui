/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';

/* The constants, the local variables and the list helpers of the ShareSheet block. The flows: useShareSheet.ts. */

/* Local variables reset by Action_ResetLocalVariables (ShareSheet.mvc.js:2868-2910). */
export interface Locals {
  searchTerm: string;
  isSearching: boolean;
  isSearchStep: boolean;
  currentExternalShareIdOption: string;
  sharingRecentMemberId: string;
  /** IsSubmitting: True while CS_ShareObject runs (Action_SubmitShare); it disables Send (survey mvc.js:1759). */
  isSubmitting: boolean;
}
export const RESET: Locals = {
  searchTerm: '',
  isSearching: false,
  isSearchStep: false,
  currentExternalShareIdOption: '',
  sharingRecentMemberId: '',
  isSubmitting: false,
};
/** SearchPromt default (ShareSheet.mvc.js:80). */
export const SEARCH_PROMPT = 'Search';
/** Action_CreateSkeletonList (:2630-2696): five "Loading Name" members (Id "0"), shown while a list loads. */
export const SKELETON: SearchResult[] = Array.from({ length: 5 }, () => ({
  Id: '0',
  HouseholderId: '0',
  Name: 'Loading Name',
  Location: 'Locality, Country',
  Type: Connect_Entity.Member,
}));
export const MAX_RECIPIENTS = 50;
export const horizontalList =
  'list list-group display-flex overflow-horizontal gap-base connect-share-sheet__horizontal-list';
export const lastPadding = (index: number, length: number) =>
  'lazy-image-middle ' + (index === length - 1 ? 'padding-right-base' : '');
