import type { RequestHandler } from 'msw';
import { wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '../../mocks/contract';
import { orbitTransportLegs, type OrbitTransportLocation } from '../../mocks/fictional/orbit';
import type { GetTransportDetailWire, TransportLocationWire } from './types';

/* DataActionGet_TransportDetail was never recorded (no capture, no-capture.json): fictional answers from the shared
   Orbit world (src/mocks/fictional/orbit.ts orbitTransportLegs, TransportDetail Q1) in the contract's shape.
   Scenarios:
   - real: the leg of In_MilestoneId (7301-T1 flight with a stop, 7301-T2 vehicle pick-up) with its milestone type; an
     unknown milestone answers the empty record (texts "", null dates, empty lists, as an OutSystems default record).
   - empty (every list emptied: no stops, no seats), loading (never answers: skeleton), error (HTTP 500):
     contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE_TIME = '1900-01-01T00:00:00';

const location = (l: OrbitTransportLocation): TransportLocationWire => ({
  Location: l.Location,
  Terminal: l.Terminal,
  DateTime: l.DateTime === '' ? NULL_DATE_TIME : l.DateTime,
});

const EMPTY_LOCATION: OrbitTransportLocation = { Location: '', Terminal: '', DateTime: '' };

/** The answer for milestone `milestoneId`. */
export function transportDetailAnswer(milestoneId: string): GetTransportDetailWire {
  const leg = orbitTransportLegs().find((l) => l.MilestoneId === milestoneId);
  const type = leg?.milestoneType;
  return {
    Response: {
      MilestoneType: {
        Id: type?.Id ?? '',
        Is_Active: type?.Is_Active ?? false,
        Order: type?.Order ?? 0,
        Type: type?.Type ?? '',
        Name: type?.Name ?? '',
        MainColorVar: type?.MainColorVar ?? '',
        MainIcon: type?.MainIcon ?? '',
        CanHost: type?.CanHost ?? false,
        IsTransportMilestone: type?.IsTransportMilestone ?? false,
        IconTransportDeparture: type?.IconTransportDeparture ?? '',
        IconTransportArrival: type?.IconTransportArrival ?? '',
        TransportHeaderClass: type?.TransportHeaderClass ?? '',
        TravelInfoHeader: type?.TravelInfoHeader ?? '',
        TravelInfoHeaderIcon: type?.TravelInfoHeaderIcon ?? '',
      },
      TransportDetail: {
        MilestoneId: leg?.MilestoneId ?? '',
        Title: leg?.Title ?? '',
        Type: leg?.Type ?? '',
        TransportType: leg?.TransportType ?? '',
        Operator: leg?.Operator ?? '',
        TravelIdentifier: leg?.TravelIdentifier ?? '',
        DepartureLocation: location(leg?.DepartureLocation ?? EMPTY_LOCATION),
        ArrivalLocation: location(leg?.ArrivalLocation ?? EMPTY_LOCATION),
        Stops: wireList(
          (leg?.Stops ?? []).map((s) => ({
            Title: s.Title,
            ArrivalLocation: location(s.ArrivalLocation),
            DepartureLocation: location(s.DepartureLocation),
            StopDurationTime: s.StopDurationTime,
          })),
        ),
        Seats: wireList((leg?.Seats ?? []).map((s) => ({ ...s }))),
        BaggageAllowance: { ...(leg?.BaggageAllowance ?? { CarryOnBaggage: '', CheckedBaggage: '' }) },
        TripDuration: { ...(leg?.TripDuration ?? { TripDurationHours: '0', TripDurationMinutes: '0' }) },
        TravelInfo: {
          BookingReference: leg?.TravelInfo.BookingReference ?? '',
          Class: leg?.TravelInfo.Class ?? '',
          CodeShareFlight: leg?.TravelInfo.CodeShareFlight ?? '',
          CodeShareName: leg?.TravelInfo.CodeShareName ?? '',
          DriverName: leg?.TravelInfo.DriverName ?? '',
          FareType: leg?.TravelInfo.FareType ?? '',
          OnboardMeal: leg?.TravelInfo.OnboardMeal ?? '',
          VehicleName: leg?.TravelInfo.VehicleName ?? '',
        },
        Notes: leg?.Notes ?? '',
      },
    },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_TransportDetail/DataActionGet_TransportDetail', ({ In_MilestoneId }) =>
    transportDetailAnswer(In_MilestoneId ?? ''),
  ),
];
