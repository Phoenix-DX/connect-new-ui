import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { TransportDetails } from '@/api/event';
import { EMPTY_TRANSPORT_DETAILS } from '@/pages/TransportDetail/hooks/transportDetailState';
import { OrbitMilestoneType } from '@/lib/orbit/staticEntities';
import { TransportDetail } from './TransportDetail';

/* The TransportDetail block and its TransportDetail_TravelInfo block, props only. Fictional transports: the Thursday
   train from Buenos Aires to Rosario with a stop at San Nicolás, and the Saturday pick-up in Rosario. */
const NO_INFO = EMPTY_TRANSPORT_DETAILS.TransportDetail.TravelInfo;
const train: TransportDetails = {
  MilestoneType: {
    Id: OrbitMilestoneType.Train,
    Name: 'Train',
    MainIcon: 'orbit-icon-transportation-train',
    IsTransportMilestone: true,
    IconTransportDeparture: 'orbit-icon-transportation-train-departure',
    IconTransportArrival: 'orbit-icon-transportation-train-arrival',
    TransportHeaderClass: 'orbit-transport-detail-train',
    TravelInfoHeader: 'Train Number',
  },
  TransportDetail: {
    ...EMPTY_TRANSPORT_DETAILS.TransportDetail,
    Title: 'Train to Rosario',
    TransportType: 'Intercity train',
    Operator: 'Trenes del Litoral',
    TravelIdentifier: 'TR 2210',
    DepartureLocation: { Location: 'Buenos Aires Retiro', Terminal: 'Platform 4', DateTime: '2026-03-12T18:40:00' },
    ArrivalLocation: { Location: 'Rosario Norte', Terminal: '', DateTime: '2026-03-12T22:10:00' },
    Stops: [
      {
        Title: 'San Nicolás',
        ArrivalLocation: { Location: '', Terminal: 'Platform 1', DateTime: '2026-03-12T20:30:00' },
        DepartureLocation: { Location: '', Terminal: 'Platform 1', DateTime: '2026-03-12T20:45:00' },
        StopDurationTime: '00:15:00',
      },
    ],
    Seats: [
      { Departure: 'RET', Arrival: 'SNI', SeatNumber: '22A' },
      { Departure: 'SNI', Arrival: 'ROS', SeatNumber: '22A' },
    ],
    BaggageAllowance: { CarryOnBaggage: '1 bag, 10 kg', CheckedBaggage: '1 suitcase, 20 kg' },
    TripDuration: { TripDurationHours: '3', TripDurationMinutes: '0' },
    TravelInfo: { ...NO_INFO, BookingReference: 'RS4410', FareType: 'Standard', OnboardMeal: 'Snack', Class: 'First' },
    Notes: 'The family meets Matías at the Rosario Norte exit.',
  },
};
const pickUp: TransportDetails = {
  MilestoneType: {
    ...train.MilestoneType,
    Id: OrbitMilestoneType.Vehicle,
    Name: 'Vehicle',
    MainIcon: 'orbit-icon-transportation-vehicle',
    TravelInfoHeader: 'Number Plate',
  },
  TransportDetail: {
    ...EMPTY_TRANSPORT_DETAILS.TransportDetail,
    Title: 'Pick-up to the hall',
    TransportType: 'Minibus',
    TravelIdentifier: 'AF 204 JR',
    DepartureLocation: { Location: 'Rosario bus terminal', Terminal: '', DateTime: '2026-03-14T08:15:00' },
    ArrivalLocation: { Location: 'Rosario conference hall', Terminal: '', DateTime: '2026-03-14T08:50:00' },
    Seats: [{ Departure: '', Arrival: '', SeatNumber: '' }],
    TravelInfo: { ...NO_INFO, DriverName: 'Tomás Herrera', VehicleName: 'White minibus' },
  },
};

/** The bold label and value texts of each detail row, in order. */
const rows = (c: HTMLElement) => [...c.querySelectorAll('.transport-detail-item')].map((row) => row.textContent);

describe('TransportDetail', () => {
  it('shows the rows of a train with its travel info, trip duration, stop, seats and notes', () => {
    const { container } = render(<TransportDetail id="b1-$b3" TransportDetail={train} />);
    expect(rows(container)).toEqual([
      'OperatorTrenes del Litoral',
      'TypeIntercity train',
      'Departure LocationBuenos Aires RetiroPlatform 4Thu 12 Mar 2026 6:40 PM',
      'Arrival LocationRosario NorteThu 12 Mar 2026 10:10 PM',
      'Baggage AllowanceCarry-on: 1 bag, 10 kgChecked: 1 suitcase, 20 kg',
      'Train NumberTR 2210Booking ReferenceRS4410Fare TypeStandardOnboard Meal TypeSnackClassFirst',
      'Trip Duration3h 00m',
      'StopsSan NicolásStopover Arrival TerminalPlatform 1Thu 12 Mar 2026 8:30 PMStopover Departure TerminalPlatform 1Thu 12 Mar 2026 8:45 PM',
      'Stop Duration15m',
      'SeatsRET → SNI: 22ASNI → ROS: 22A',
    ]);
    expect(container.textContent).toContain('NotesThe family meets Matías at the Rosario Norte exit.');
    expect(container.querySelector('.orbit-icon-transportation-train-departure')).not.toBeNull();
  });

  it('shows a vehicle with its trip duration from the times, its names and no seat without a seat number', () => {
    const { container } = render(<TransportDetail id="b1-$b3" TransportDetail={pickUp} />);
    expect(rows(container)).toEqual([
      'TypeMinibus',
      'Departure LocationRosario bus terminalSat 14 Mar 2026 8:15 AM',
      'Arrival LocationRosario conference hallSat 14 Mar 2026 8:50 AM',
      'Number PlateAF 204 JR',
      'Vehicle NameWhite minibus',
      'Driver NameTomás Herrera',
      'Trip Duration35m',
    ]);
  });

  it('shows nothing for the empty record', () => {
    const { container } = render(<TransportDetail id="b1-$b3" TransportDetail={EMPTY_TRANSPORT_DETAILS} />);
    expect(rows(container)).toEqual([]);
    expect(container.querySelector('.transport-detail-cont')?.textContent).toBe('');
  });
});
