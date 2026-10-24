import { describe, expect, it } from 'vitest';
import type { TransportDetails } from '@/api/event';
import { OrbitMilestoneType } from '@/lib/orbit/staticEntities';
import {
  contactHelpdeskEvent,
  EMPTY_TRANSPORT_DETAILS,
  INITIAL_TRANSPORT_DETAIL_STATE,
  initialTransportDetailState,
  transportDetailCallInputs,
  transportDetailReducer,
  type TransportDetailBlockInputs,
} from './transportDetailState';

/* The pure parts of ScreenBlock_TransportDetail. Fictional transport: the Thursday evening train to Rosario. */
const inputs: TransportDetailBlockInputs = {
  In_MilestoneId: '8120-T1',
  In_OrbitMilestoneTypeId: OrbitMilestoneType.Train,
  In_PreloadMilestoneName: 'Train to Rosario',
  In_HeaderClass: 'orbit-transport-detail-train',
};
const train: TransportDetails = {
  MilestoneType: { ...EMPTY_TRANSPORT_DETAILS.MilestoneType, Id: OrbitMilestoneType.Train, IsTransportMilestone: true },
  TransportDetail: {
    ...EMPTY_TRANSPORT_DETAILS.TransportDetail,
    MilestoneId: '8120-T1',
    Title: 'Evening train to Rosario',
    TravelIdentifier: 'TR 2210',
    DepartureLocation: { Location: 'Buenos Aires Retiro', Terminal: 'Platform 4', DateTime: '2026-03-12T18:40:00' },
    TravelInfo: { ...EMPTY_TRANSPORT_DETAILS.TransportDetail.TravelInfo, BookingReference: 'RS4410' },
  },
};

describe('transportDetailState', () => {
  it('OnInitialize of a new view: Title = In_PreloadMilestoneName, the other variables at their defaults', () => {
    expect(initialTransportDetailState('Train to Rosario')).toEqual({
      title: 'Train to Rosario',
      transportDetail: EMPTY_TRANSPORT_DETAILS,
      isFetchingData: false,
      isDataFetched: false,
    });
  });

  it('fetchStarted sets IsFetchingData; fetched keeps the answer, its title and ends the fetch', () => {
    const started = transportDetailReducer(INITIAL_TRANSPORT_DETAIL_STATE, { type: 'fetchStarted' });
    expect(started.isFetchingData).toBe(true);
    expect(transportDetailReducer(started, { type: 'fetched', transportDetail: train })).toEqual({
      title: 'Evening train to Rosario',
      transportDetail: train,
      isFetchingData: false,
      isDataFetched: true,
    });
  });

  it('the data action sends the block variables of the moment', () => {
    const state = transportDetailReducer(initialTransportDetailState('Train to Rosario'), { type: 'fetchStarted' });
    expect(transportDetailCallInputs(state, inputs)).toEqual({
      Title: 'Train to Rosario',
      IsFetchingData: true,
      In_MilestoneId: '8120-T1',
      In_OrbitMilestoneTypeId: OrbitMilestoneType.Train,
      In_PreloadMilestoneName: 'Train to Rosario',
      In_HeaderClass: 'orbit-transport-detail-train',
    });
  });

  it('the helpdesk subject has the booking reference, or the travel identifier for a vehicle', () => {
    const state = transportDetailReducer(INITIAL_TRANSPORT_DETAIL_STATE, { type: 'fetched', transportDetail: train });
    expect(contactHelpdeskEvent(state, inputs)).toEqual({
      subject: 'Train to Rosario - RS4410 - Thu 12 Mar 2026 6:40 PM',
      eventName: 'Train to Rosario',
    });
    const vehicle = { ...inputs, In_OrbitMilestoneTypeId: OrbitMilestoneType.Vehicle };
    expect(contactHelpdeskEvent(state, vehicle).subject).toBe('Train to Rosario - TR 2210 - Thu 12 Mar 2026 6:40 PM');
  });

  it('before the answer the subject has only the milestone name', () => {
    expect(contactHelpdeskEvent(initialTransportDetailState('Train to Rosario'), inputs)).toEqual({
      subject: 'Train to Rosario - ',
      eventName: 'Train to Rosario',
    });
  });
});
