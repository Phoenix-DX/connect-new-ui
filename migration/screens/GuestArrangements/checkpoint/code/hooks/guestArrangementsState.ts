import type { GuestArrangementsCallInputs, GuestArrangementsData, GuestArrangementsResult } from '@/api/event';

/** The state of ScreenBlock_GuestArrangements without React: its inputs, its variables with the data action state
    that the view reads, the reducer, and the block variables that the data action sends. useGuestArrangements keeps
    the state with useFlowState.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements */

/** The inputs of the block. The Long Integers are text. */
export interface GuestArrangementsBlockInputs {
  /** In_MemberId: the guest. */
  In_MemberId: string;
  In_EventId: string;
  In_HostId: string;
  In_MilestoneId: string;
  /** In_PreloadEventName: the event name of the header and of the helpdesk subject. */
  In_PreloadEventName: string;
  /** In_PreloadMilestoneName: the milestone name of the header and of the helpdesk subject. */
  In_PreloadMilestoneName: string;
  /** In_OrbitMilestoneTypeId: the header icon, the skeleton and the date format of the helpdesk subject. */
  In_OrbitMilestoneTypeId: string;
}

/** GetGuestArrangements_ScreenRec default: texts "", ids 0, null dates "", empty lists. */
export const EMPTY_GUEST_ARRANGEMENTS_DATA: GuestArrangementsData = {
  MemberId: '0',
  Title: '',
  FirstName: '',
  LastName: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  SpecialNeeds: [],
  ArrivalDetails: [],
  MealDetails: [],
  DepartureDetails: [],
};

/** The block variables and the state of the data action GetGuestArrangements that the view reads. */
export interface GuestArrangementsState {
  /** GuestArrangementsData: the Response of GetGuestArrangements after OnAfterFetch. */
  guestArrangementsData: GuestArrangementsData;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** GetGuestArrangements.IsDataFetched. */
  isDataFetched: boolean;
  /** GetGuestArrangements.HasData. */
  hasData: boolean;
}

/** The state after OnInitialize (the block has none): the defaults. */
export const INITIAL_GUEST_ARRANGEMENTS_STATE: GuestArrangementsState = {
  guestArrangementsData: EMPTY_GUEST_ARRANGEMENTS_DATA,
  isFetchingData: false,
  isDataFetched: false,
  hasData: false,
};

export type GuestArrangementsAction =
  /** RefreshData, before the data action: IsFetchingData = True. */
  | { type: 'fetchStarted' }
  /** GetGuestArrangements answered (IsDataFetched, HasData), then OnAfterFetch_GetGuestArrangements:
      GuestArrangementsData = Response, IsFetchingData = False. */
  | { type: 'guestArrangementsFetched'; result: GuestArrangementsResult };

export function guestArrangementsReducer(
  state: GuestArrangementsState,
  action: GuestArrangementsAction,
): GuestArrangementsState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'guestArrangementsFetched':
      return {
        ...state,
        isDataFetched: true,
        hasData: action.result.HasData,
        guestArrangementsData: action.result.Response,
        isFetchingData: false,
      };
  }
}

/** The block variables that DataActionGetGuestArrangements sends (the server reads them): IsFetchingData and the
    inputs of the block, as they are when the call starts. */
export function guestArrangementsCallInputs(
  state: GuestArrangementsState,
  inputs: GuestArrangementsBlockInputs,
): GuestArrangementsCallInputs {
  return {
    IsFetchingData: state.isFetchingData,
    In_MemberId: inputs.In_MemberId,
    In_EventId: inputs.In_EventId,
    In_HostId: inputs.In_HostId,
    In_MilestoneId: inputs.In_MilestoneId,
    In_PreloadEventName: inputs.In_PreloadEventName,
    In_PreloadMilestoneName: inputs.In_PreloadMilestoneName,
    In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
  };
}
