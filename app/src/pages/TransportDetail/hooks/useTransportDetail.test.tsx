import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchTransportDetail, type TransportDetails } from '@/api/event';
import { CommunicationException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import {
  EMPTY_TRANSPORT_DETAILS,
  transportDetailReducer,
  type TransportDetailBlockInputs,
  type TransportDetailState,
} from './transportDetailState';
import { useTransportDetail, type TransportDetailFlows } from './useTransportDetail';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./transportDetailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./transportDetailState')>();
  return { ...actual, transportDetailReducer: vi.fn(actual.transportDetailReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchTransportDetail: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores, with the saved variables of the block, read by useFlowState. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  const { useState } = await import('react');
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(_name: string, initial: T) => useState<T>(() => (viewCache.saved as T | undefined) ?? initial),
  };
});

/* The flows of ScreenBlock_TransportDetail with the call replaced by a spy. Fictional transport: the Saturday morning
   pick-up from the Rosario bus terminal to the conference hall. */
const inputs: TransportDetailBlockInputs = {
  In_MilestoneId: '8120-T2',
  In_OrbitMilestoneTypeId: OrbitMilestoneType.Vehicle,
  In_PreloadMilestoneName: 'Pick-up to the hall',
  In_HeaderClass: 'orbit-transport-detail-vehicle',
};
const pickUp: TransportDetails = {
  MilestoneType: {
    ...EMPTY_TRANSPORT_DETAILS.MilestoneType,
    Id: OrbitMilestoneType.Vehicle,
    Name: 'Vehicle',
    IsTransportMilestone: true,
  },
  TransportDetail: {
    ...EMPTY_TRANSPORT_DETAILS.TransportDetail,
    MilestoneId: '8120-T2',
    Title: 'Pick-up from the bus terminal',
    TravelIdentifier: 'AF 204 JR',
    DepartureLocation: { Location: 'Rosario bus terminal', Terminal: '', DateTime: '2026-03-14T08:15:00' },
    ArrivalLocation: { Location: 'Rosario conference hall', Terminal: '', DateTime: '2026-03-14T08:50:00' },
    TravelInfo: { ...EMPTY_TRANSPORT_DETAILS.TransportDetail.TravelInfo, DriverName: 'Tomás Herrera' },
  },
};

/** A promise that the test resolves or rejects. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

const events = { onNavigateToContactHelpdesk: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useTransportDetail(inputs, events), { wrapper });
/** Renders the hook and keeps the result of every render (the first one is the first paint). */
function renderRecorded(strict = false) {
  const renders: TransportDetailFlows[] = [];
  function Probe() {
    renders.push(useTransportDetail(inputs, events));
    return null;
  }
  const tree = (
    <MemoryRouter>
      <Probe />
    </MemoryRouter>
  );
  const view = render(strict ? <StrictMode>{tree}</StrictMode> : tree);
  return { renders, ...view };
}
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(fetchTransportDetail).mockResolvedValue(pickUp);
});

describe('useTransportDetail', () => {
  it('OnInitialize sets the preload title; OnReady then shows the skeleton of a transport and calls once', () => {
    vi.mocked(fetchTransportDetail).mockReturnValue(new Promise(() => undefined));
    const { renders } = renderRecorded();
    expect(renders[0]).toMatchObject({
      title: 'Pick-up to the hall',
      isFetchingData: false,
      isDataFetched: false,
      transportDetail: EMPTY_TRANSPORT_DETAILS,
      skeletonLoadingId: OrbitSkeletonLoading.TransportDetail,
    });
    expect(renders[1]).toMatchObject({ title: 'Pick-up to the hall', isFetchingData: true, isDataFetched: false });
    expect(fetchTransportDetail).toHaveBeenCalledTimes(1);
  });

  it('OnReady sends the block variables, then keeps the answer and its title and ends the fetch', async () => {
    const { result } = renderFlows();
    await settle();
    expect(fetchTransportDetail).toHaveBeenCalledTimes(1);
    expect(fetchTransportDetail).toHaveBeenCalledWith({
      Title: 'Pick-up to the hall',
      IsFetchingData: true,
      In_MilestoneId: '8120-T2',
      In_OrbitMilestoneTypeId: OrbitMilestoneType.Vehicle,
      In_PreloadMilestoneName: 'Pick-up to the hall',
      In_HeaderClass: 'orbit-transport-detail-vehicle',
    });
    expect(result.current).toMatchObject({
      title: 'Pick-up from the bus terminal',
      isFetchingData: false,
      isDataFetched: true,
      transportDetail: pickUp,
    });
  });

  it('a failed Get_TransportDetail keeps the skeleton and goes to the flow handler once', async () => {
    const error = new CommunicationException('The connection has timed out');
    vi.mocked(fetchTransportDetail).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(result.current).toMatchObject({ title: 'Pick-up to the hall', isFetchingData: true, isDataFetched: false });
  });

  it('a restored view starts from its saved variables, and OnReady shows the skeleton and fetches again', async () => {
    const saved: TransportDetailState = {
      title: 'Pick-up from the old terminal',
      transportDetail: {
        ...pickUp,
        TransportDetail: { ...pickUp.TransportDetail, Title: 'Pick-up from the old terminal' },
      },
      isFetchingData: false,
      isDataFetched: true,
    };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { renders } = renderRecorded();
    expect(renders[0]).toMatchObject({
      title: 'Pick-up from the old terminal',
      isFetchingData: false,
      isDataFetched: true,
    });
    expect(renders[1]).toMatchObject({
      title: 'Pick-up from the old terminal',
      isFetchingData: true,
      isDataFetched: true,
    });
    await settle();
    expect(fetchTransportDetail).toHaveBeenCalledTimes(1);
    expect(fetchTransportDetail).toHaveBeenCalledWith(
      expect.objectContaining({ Title: 'Pick-up from the old terminal', IsFetchingData: true }),
    );
    expect(renders.at(-1)).toMatchObject({ title: 'Pick-up from the bus terminal', isFetchingData: false });
  });

  it('OnHandle_ContactHelpdesk raises NavigateTo_ContactHelpdesk with the subject of the transport', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onContactHelpdesk();
    });
    expect(events.onNavigateToContactHelpdesk).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToContactHelpdesk).toHaveBeenCalledWith(
      'Pick-up to the hall - AF 204 JR - Sat 14 Mar 2026 8:15 AM',
      'Pick-up to the hall',
    );
  });
});

describe('useTransportDetail after an unmount and in StrictMode (decision W23)', () => {
  /* W23: `isAlive` guards the state writes only. The flow has no app-level side effect after its call: the call that
     started runs to its end, and a failure still goes to the flow handler. */
  it('after an unmount during Get_TransportDetail: one call, no state write, no event', async () => {
    const answer = pending<TransportDetails>();
    vi.mocked(fetchTransportDetail).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    expect(fetchTransportDetail).toHaveBeenCalledTimes(1);
    unmount();
    vi.mocked(transportDetailReducer).mockClear();
    answer.resolve(pickUp);
    await settle();
    expect(fetchTransportDetail).toHaveBeenCalledTimes(1);
    expect(transportDetailReducer).not.toHaveBeenCalled();
    expect(events.onNavigateToContactHelpdesk).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('after an unmount during Get_TransportDetail, a failure still goes to the flow handler once', async () => {
    const answer = pending<TransportDetails>();
    vi.mocked(fetchTransportDetail).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(transportDetailReducer).mockClear();
    const error = new CommunicationException('The connection has timed out');
    answer.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(transportDetailReducer).not.toHaveBeenCalled();
  });

  it('in StrictMode: one Get_TransportDetail, and its answer is written', async () => {
    const { renders } = renderRecorded(true);
    await settle();
    expect(fetchTransportDetail).toHaveBeenCalledTimes(1);
    expect(renders.at(-1)).toMatchObject({
      title: 'Pick-up from the bus terminal',
      isFetchingData: false,
      isDataFetched: true,
    });
  });
});
