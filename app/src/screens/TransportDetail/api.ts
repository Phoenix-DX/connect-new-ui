import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { TransportDetails, TransportDetailVariablesWire, TransportLocation, TransportLocationWire } from './types';

/** Module and owner of the data action (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_TransportDetail/DataActionGet_TransportDetail). On demand (dataFetchDependentsGraph without a start
    fetch, SB :397-402): OnReady → Refresh Query (SB :500-511). SB = analysis/sources/Connect2_OrbitMobile_MUI.
    Orbit_ScreenBlocks.ScreenBlock_TransportDetail.mvc.js. */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime: kept as "" for the components (the formatters treat "" as null). */
const dateTime = (value: string): string => (value === '' || value.startsWith('1900-01-01') ? '' : value);

const location = (w: TransportLocationWire): TransportLocation => ({
  Location: w.Location,
  Terminal: w.Terminal,
  DateTime: dateTime(w.DateTime),
});

/** DataActionGet_TransportDetail (SB :408-435): Response (GetTransportDetails_ScreenRec), which OnAfterFetch copies
    into the TransportDetail variable (SB :581-582). The server reads the block variables (In_MilestoneId, …). */
export async function getTransportDetail(vars: TransportDetailVariablesWire): Promise<TransportDetails> {
  const out = await callAction(MODULE, 'ScreenBlock_TransportDetail/DataActionGet_TransportDetail', vars);
  const t = out.Response.TransportDetail;
  const type = out.Response.MilestoneType;
  return {
    MilestoneType: {
      Id: type.Id,
      Name: type.Name,
      MainIcon: type.MainIcon,
      IsTransportMilestone: type.IsTransportMilestone,
      IconTransportDeparture: type.IconTransportDeparture,
      IconTransportArrival: type.IconTransportArrival,
      TransportHeaderClass: type.TransportHeaderClass,
      TravelInfoHeader: type.TravelInfoHeader,
    },
    TransportDetail: {
      MilestoneId: t.MilestoneId,
      Title: t.Title,
      Type: t.Type,
      TransportType: t.TransportType,
      Operator: t.Operator,
      TravelIdentifier: t.TravelIdentifier,
      DepartureLocation: location(t.DepartureLocation),
      ArrivalLocation: location(t.ArrivalLocation),
      Stops: osList(t.Stops).map((s) => ({
        Title: s.Title,
        ArrivalLocation: location(s.ArrivalLocation),
        DepartureLocation: location(s.DepartureLocation),
        StopDurationTime: s.StopDurationTime,
      })),
      Seats: osList(t.Seats).map((s) => ({ Departure: s.Departure, Arrival: s.Arrival, SeatNumber: s.SeatNumber })),
      BaggageAllowance: {
        CarryOnBaggage: t.BaggageAllowance.CarryOnBaggage,
        CheckedBaggage: t.BaggageAllowance.CheckedBaggage,
      },
      TripDuration: {
        TripDurationHours: t.TripDuration.TripDurationHours,
        TripDurationMinutes: t.TripDuration.TripDurationMinutes,
      },
      TravelInfo: { ...t.TravelInfo },
      Notes: t.Notes,
    },
  };
}
