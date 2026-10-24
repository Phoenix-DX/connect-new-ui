import { describe, expect, it } from 'vitest';
import type { TransportMilestoneType, TravelInfo } from '@/api/event';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import {
  getContactHelpdeskSubject_Transport,
  getFormattedTime_FromTime,
  getFormattedTimeDifference,
  getSkeletonLoadingIdFromMilestoneTypeId,
  transportDetails_ShowGeneralInformation,
} from './actions';

/* The client actions of the TransportDetail blocks. Fictional values: a Thursday evening train from Rosario. */
const T = OrbitMilestoneType;
const NO_TRAVEL_INFO: TravelInfo = {
  BookingReference: '',
  Class: '',
  CodeShareFlight: '',
  CodeShareName: '',
  DriverName: '',
  FareType: '',
  OnboardMeal: '',
  VehicleName: '',
};
const milestoneType = (id: string, isTransportMilestone = true): TransportMilestoneType => ({
  Id: id,
  Name: '',
  MainIcon: '',
  IsTransportMilestone: isTransportMilestone,
  IconTransportDeparture: '',
  IconTransportArrival: '',
  TransportHeaderClass: '',
  TravelInfoHeader: '',
});

describe('getSkeletonLoadingIdFromMilestoneTypeId', () => {
  it('gives the skeleton of the guest, host and transport milestones, else 0', () => {
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.MealGuest)).toBe(OrbitSkeletonLoading.MilestoneDetailGuest);
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.Helper)).toBe(OrbitSkeletonLoading.MilestoneDetailHost);
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.Train)).toBe(OrbitSkeletonLoading.TransportDetail);
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.Vehicle)).toBe(OrbitSkeletonLoading.TransportDetail);
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.Break)).toBe(0);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('')).toBe(0);
  });
});

describe('getContactHelpdeskSubject_Transport', () => {
  it('joins the milestone name, the transport number and the formatted departure', () => {
    expect(getContactHelpdeskSubject_Transport(T.Train, 'Train to Rosario', '2026-03-12T18:40:00', 'TR 2210')).toBe(
      'Train to Rosario - TR 2210 - Thu 12 Mar 2026 6:40 PM',
    );
  });

  it('leaves out an empty transport number, and the null date gives no date', () => {
    expect(getContactHelpdeskSubject_Transport(T.Train, 'Train to Rosario', '2026-03-12T18:40:00', '')).toBe(
      'Train to Rosario - Thu 12 Mar 2026 6:40 PM',
    );
    expect(getContactHelpdeskSubject_Transport(T.Train, 'Train to Rosario', '', '')).toBe('Train to Rosario - ');
  });
});

describe('getFormattedTimeDifference', () => {
  it('gives the hours and minutes between the two dates', () => {
    expect(getFormattedTimeDifference('2026-03-12T21:30:00', '2026-03-12T22:05:00')).toBe('35m');
    expect(getFormattedTimeDifference('2026-03-12T18:40:00', '2026-03-12T21:05:00')).toBe('2h 25m');
    expect(getFormattedTimeDifference('2026-03-12T21:05:00', '2026-03-12T18:40:00')).toBe('2h 25m');
    expect(getFormattedTimeDifference('2026-03-12T18:00:00', '2026-03-12T20:00:00')).toBe('2h 00m');
    expect(getFormattedTimeDifference('2026-03-12T18:00:00', '2026-03-12T18:00:00')).toBe('00m');
  });

  it('gives "Incorrect date values" without both dates', () => {
    expect(getFormattedTimeDifference('', '2026-03-12T22:05:00')).toBe('Incorrect date values');
    expect(getFormattedTimeDifference('2026-03-12T21:30:00', '')).toBe('Incorrect date values');
  });
});

describe('getFormattedTime_FromTime', () => {
  it('gives the hours and minutes of a time, "" for zero or an invalid time', () => {
    expect(getFormattedTime_FromTime('00:30:00')).toBe('30m');
    expect(getFormattedTime_FromTime('02:05:00')).toBe('2h 5m');
    expect(getFormattedTime_FromTime('02:00:00')).toBe('2h 00m');
    expect(getFormattedTime_FromTime('00:00:00')).toBe('');
    expect(getFormattedTime_FromTime('half an hour')).toBe('');
  });
});

describe('transportDetails_ShowGeneralInformation', () => {
  it('is true with a travel identifier or a booking reference', () => {
    expect(transportDetails_ShowGeneralInformation('TR 2210', NO_TRAVEL_INFO, milestoneType(T.Vehicle))).toBe(true);
    expect(
      transportDetails_ShowGeneralInformation('', { ...NO_TRAVEL_INFO, BookingReference: 'RS4410' }, milestoneType('')),
    ).toBe(true);
  });

  it('for a flight reads the codeshare; for a flight, train or boat the fare, meal and class', () => {
    expect(
      transportDetails_ShowGeneralInformation(
        '',
        { ...NO_TRAVEL_INFO, CodeShareName: 'Andes Connect' },
        milestoneType(T.Flight),
      ),
    ).toBe(true);
    expect(
      transportDetails_ShowGeneralInformation('', { ...NO_TRAVEL_INFO, FareType: 'Promo' }, milestoneType(T.Train)),
    ).toBe(true);
    expect(
      transportDetails_ShowGeneralInformation('', { ...NO_TRAVEL_INFO, Class: 'First' }, milestoneType(T.Boat)),
    ).toBe(true);
    expect(transportDetails_ShowGeneralInformation('', NO_TRAVEL_INFO, milestoneType(T.Flight))).toBe(false);
  });

  it('is false for a vehicle with only its names, and for a type that is not a transport', () => {
    expect(
      transportDetails_ShowGeneralInformation(
        '',
        { ...NO_TRAVEL_INFO, VehicleName: 'Grey van', DriverName: 'Lucía Paz' },
        milestoneType(T.Vehicle),
      ),
    ).toBe(false);
    expect(
      transportDetails_ShowGeneralInformation(
        '',
        { ...NO_TRAVEL_INFO, FareType: 'Promo' },
        milestoneType(T.Train, false),
      ),
    ).toBe(false);
  });
});
