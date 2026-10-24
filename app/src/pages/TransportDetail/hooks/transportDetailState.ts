import type { TransportDetailCallInputs, TransportDetails } from '@/api/event';
import { getContactHelpdeskSubject_Transport } from '@/pages/TransportDetail/actions';
import { OrbitMilestoneType } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

/** The variables of ScreenBlock_TransportDetail as one record, its reducer and its pure parts. The view cache keeps the
    record, so a view restored from the cache keeps them.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_TransportDetail */

/** The inputs of the block. */
export interface TransportDetailBlockInputs {
  In_MilestoneId: string;
  In_OrbitMilestoneTypeId: string;
  /** The screen passes its In_MilestoneName. */
  In_PreloadMilestoneName: string;
  In_HeaderClass: string;
}

const EMPTY_LOCATION = { Location: '', Terminal: '', DateTime: '' };

/** The default of a GetTransportDetails_ScreenRec record. */
export const EMPTY_TRANSPORT_DETAILS: TransportDetails = {
  MilestoneType: {
    Id: '',
    Name: '',
    MainIcon: '',
    IsTransportMilestone: false,
    IconTransportDeparture: '',
    IconTransportArrival: '',
    TransportHeaderClass: '',
    TravelInfoHeader: '',
  },
  TransportDetail: {
    MilestoneId: '',
    Title: '',
    Type: '',
    TransportType: '',
    Operator: '',
    TravelIdentifier: '',
    DepartureLocation: EMPTY_LOCATION,
    ArrivalLocation: EMPTY_LOCATION,
    Stops: [],
    Seats: [],
    BaggageAllowance: { CarryOnBaggage: '', CheckedBaggage: '' },
    TripDuration: { TripDurationHours: '0', TripDurationMinutes: '0' },
    TravelInfo: {
      BookingReference: '',
      Class: '',
      CodeShareFlight: '',
      CodeShareName: '',
      DriverName: '',
      FareType: '',
      OnboardMeal: '',
      VehicleName: '',
    },
    Notes: '',
  },
};

/** The block variables and the data action state that the view reads. */
export interface TransportDetailState {
  /** Title: the header title. */
  title: string;
  /** TransportDetail: the answer of Get_TransportDetail. */
  transportDetail: TransportDetails;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** Get_TransportDetail.IsDataFetched: the transport shows. */
  isDataFetched: boolean;
}

/** The variables with their default values. */
export const INITIAL_TRANSPORT_DETAIL_STATE: TransportDetailState = {
  title: '',
  transportDetail: EMPTY_TRANSPORT_DETAILS,
  isFetchingData: false,
  isDataFetched: false,
};

/** OnInitialize of a new view: Title = In_PreloadMilestoneName. A view that the view cache restores keeps its saved
    variables instead (OnInitialize does nothing then). */
export function initialTransportDetailState(preloadMilestoneName: string): TransportDetailState {
  return { ...INITIAL_TRANSPORT_DETAIL_STATE, title: preloadMilestoneName };
}

/** The changes of the block variables. */
export type TransportDetailAction =
  /** OnReady: IsFetchingData = True, before the refresh of Get_TransportDetail. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_GetTransportDetail: TransportDetail = Response, Title = its TransportDetail.Title,
      IsFetchingData = False; Get_TransportDetail.IsDataFetched = True. */
  | { type: 'fetched'; transportDetail: TransportDetails };

/** The reducer of the block variables. */
export function transportDetailReducer(
  state: TransportDetailState,
  action: TransportDetailAction,
): TransportDetailState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'fetched':
      return {
        ...state,
        isDataFetched: true,
        transportDetail: action.transportDetail,
        title: action.transportDetail.TransportDetail.Title,
        isFetchingData: false,
      };
  }
}

/** The block variables that DataActionGet_TransportDetail sends, as they are now. */
export function transportDetailCallInputs(
  state: TransportDetailState,
  inputs: TransportDetailBlockInputs,
): TransportDetailCallInputs {
  return {
    Title: state.title,
    IsFetchingData: state.isFetchingData,
    In_MilestoneId: inputs.In_MilestoneId,
    In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
    In_PreloadMilestoneName: inputs.In_PreloadMilestoneName,
    In_HeaderClass: inputs.In_HeaderClass,
  };
}

/** The values of the event NavigateTo_ContactHelpdesk(Subject, EventName). */
export interface ContactHelpdeskEvent {
  subject: string;
  eventName: string;
}

/** OnHandle_ContactHelpdesk: TransportNumber is the TravelIdentifier for a vehicle, else the booking reference; Subject =
    GetContactHelpdeskSubject_Transport(In_OrbitMilestoneTypeId, In_PreloadMilestoneName, DepartureLocation.DateTime,
    TransportNumber); EventName = In_PreloadMilestoneName. */
export function contactHelpdeskEvent(
  state: TransportDetailState,
  inputs: TransportDetailBlockInputs,
): ContactHelpdeskEvent {
  const t = state.transportDetail.TransportDetail;
  const transportNumber =
    inputs.In_OrbitMilestoneTypeId === OrbitMilestoneType.Vehicle ? t.TravelIdentifier : t.TravelInfo.BookingReference;
  return {
    subject: getContactHelpdeskSubject_Transport(
      inputs.In_OrbitMilestoneTypeId,
      inputs.In_PreloadMilestoneName,
      t.DepartureLocation.DateTime,
      transportNumber,
    ),
    eventName: inputs.In_PreloadMilestoneName,
  };
}
