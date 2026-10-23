import {
  getSkeletonList_UI_SubdivisionHousehold,
  getSkeleton_UI_SubdivisionDetails,
} from '@/shared/UBTConnect/lib/actions';
import type { UI_Screen_SubdivisionDetails, UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/structures';

/** The state of the supper meeting details: the data action of the block SupperMeeting_DetailsBlock and the data action
    of its child block SupperMeeting_HouseholdList.
    @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock */

/** GetSubdivisionHouseholds of SupperMeeting_HouseholdList. */
export interface SupperMeetingHouseholdsState {
  /** IsDataFetched: false until the data action answers (the gallery list shows its skeleton rows). */
  isDataFetched: boolean;
  /** The data fetch status is Error: the data action failed. */
  isError: boolean;
  /** List: GetSkeletonList_UI_SubdivisionHousehold(4) until the data action answers. */
  list: UI_SubdivisionHousehold[];
}

export interface SupperMeetingDetailsState {
  /** GetSubdivision.IsDataFetched: false until the data action answers (the skeleton sections). */
  isDataFetched: boolean;
  /** GetSubdivision.Subdivision: GetSkeleton_UI_SubdivisionDetails until the data action answers. */
  subdivision: UI_Screen_SubdivisionDetails;
  /** GetSubdivisionHouseholds of the child block SupperMeeting_HouseholdList. */
  households: SupperMeetingHouseholdsState;
}

export type SupperMeetingDetailsAction =
  /** DataActionGetSubdivision answered. */
  | { type: 'subdivisionFetched'; subdivision: UI_Screen_SubdivisionDetails }
  /** DataActionGetSubdivisionHouseholds answered. */
  | { type: 'householdsFetched'; list: UI_SubdivisionHousehold[] }
  /** DataActionGetSubdivisionHouseholds failed: the status is Error, the skeleton rows stay. */
  | { type: 'householdsFetchFailed' };

/** The first state: the skeleton supper meeting and four skeleton household rows, which the OnReady of each block
    assigns before its refresh. */
export const INITIAL_SUPPER_MEETING_DETAILS_STATE: SupperMeetingDetailsState = {
  isDataFetched: false,
  subdivision: getSkeleton_UI_SubdivisionDetails(),
  households: { isDataFetched: false, isError: false, list: getSkeletonList_UI_SubdivisionHousehold(4) },
};

/** The pure reducer of the supper meeting details. */
export function supperMeetingDetailsReducer(
  state: SupperMeetingDetailsState,
  action: SupperMeetingDetailsAction,
): SupperMeetingDetailsState {
  switch (action.type) {
    case 'subdivisionFetched':
      return { ...state, isDataFetched: true, subdivision: action.subdivision };
    case 'householdsFetched':
      return { ...state, households: { isDataFetched: true, isError: false, list: action.list } };
    case 'householdsFetchFailed':
      return { ...state, households: { ...state.households, isError: true } };
  }
}
