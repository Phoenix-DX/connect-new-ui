import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, useLayoutEffect } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchHostSurvey, type HostSurvey, type HostSurveyResult } from '@/api/event';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { orbitStaticEntities } from '@/platform/bootstrap/mocks';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import {
  HostSurveyStep,
  loadOrbitStaticEntities,
  memoryDatabase,
  orbitStaticEntitiesSchemas,
  setOrbitStaticEntitiesDatabase,
  syncAllOrbitStaticEntities,
} from '@/platform/storage/localEntities';
import { setFlags } from '@/test/testSupport';
import { INITIAL_HOST_SURVEY_STATE, SurveyStatus, hostSurveyReducer, type HostSurveyState } from './hostSurveyState';
import { useHostSurvey, type HostSurveyFlows } from './useHostSurvey';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./hostSurveyState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./hostSurveyState')>();
  return { ...actual, hostSurveyReducer: vi.fn(actual.hostSurveyReducer) };
});
/** The data action (fetchHostSurvey of the domain api/event). */
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchHostSurvey: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), with the saved variables. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(name: string, initial: T) => {
      const saved = viewCache.saved as T | undefined;
      return actual.useViewState(name, saved ?? initial);
    },
  };
});

/* The variables and the flows of ScreenBlock_HostSurvey, with the data action and the flow handler replaced by spies,
   and the Orbit local entities of the Sync_Info_GetMain mock (statuses "unable_to_host" and "confirmed", the six
   host survey steps). Fictional event and survey. */
const INPUTS: HostSurveyInputs = {
  In_EventId: '8800',
  In_MemberId: '5120',
  In_EventName: 'Spring Gathering',
  In_EventStartDate: '',
  In_EventEndDate: '',
};

const survey = (status: string, flags = false): HostSurvey => ({
  ...INITIAL_HOST_SURVEY_STATE.hostSurvey,
  SurveyInfo: {
    ...INITIAL_HOST_SURVEY_STATE.hostSurvey.SurveyInfo,
    Id: '91',
    EventId: '8800',
    EventName: 'Spring Gathering',
    HostProfileSurveyStatus: status,
    AccommodationSurvey: flags,
    AccommodationSurveyUpdate: flags,
    MealSurvey: flags,
    MealSurveyUpdate: flags,
  },
});
const answer = (s: HostSurvey, HasError = false): HostSurveyResult => ({ Response: s, HasError });
const CONFIRMED = answer(survey('confirmed'));

const onNavigateToBack = vi.fn();
const renderFlows = () => renderHook(() => useHostSurvey(INPUTS, { onNavigateToBack }), { wrapper: MemoryRouter });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: HostSurveyFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useHostSurvey(INPUTS, { onNavigateToBack });
    return null;
  }
  render(
    <StrictMode>
      <MemoryRouter>
        <Probe />
      </MemoryRouter>
    </StrictMode>,
  );
  return latestResult;
}
/** Lets the calls that started finish and the effects run. */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** GetHostSurvey answers only when the test resolves or rejects it. */
function pending() {
  const call: { resolve: (value: HostSurveyResult) => void; reject: (error: Error) => void } = {
    resolve: () => undefined,
    reject: () => undefined,
  };
  vi.mocked(fetchHostSurvey).mockReturnValue(
    new Promise((resolve, reject) => {
      call.resolve = resolve;
      call.reject = reject;
    }),
  );
  return call;
}
beforeEach(async () => {
  vi.clearAllMocks();
  setFlags({});
  viewCache.restored = false;
  viewCache.saved = undefined;
  setOrbitStaticEntitiesDatabase(null);
  await syncAllOrbitStaticEntities(orbitStaticEntities());
  vi.mocked(fetchHostSurvey).mockResolvedValue(CONFIRMED);
});
afterEach(() => {
  setOrbitStaticEntitiesDatabase(null);
});

describe('useHostSurvey: OnReady and GetHostSurvey', () => {
  it('starts with the skeleton, sends the block variables once, then shows the confirmed summary', async () => {
    const call = pending();
    const { result } = renderFlows();
    expect(result.current.state).toEqual({ ...INITIAL_HOST_SURVEY_STATE, isFetchingData: true });
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
    expect(fetchHostSurvey).toHaveBeenCalledWith({
      IsFetchingData: true,
      IsAddingHelper: false,
      PositionToDelete: 0,
      SurveyDiscarded: false,
      SurveySubmitted: false,
      IsConfirmedSurvey: false,
      HasDataSteps: false,
      IsPostingSurvey: false,
      ...INPUTS,
    });
    call.resolve(CONFIRMED);
    await settle();
    const { state } = result.current;
    expect(state.isFetchingData).toBe(false);
    expect(state.hostSurvey).toEqual(CONFIRMED.Response);
    expect(state.currentStatus.Id).toBe(SurveyStatus.confirmed);
    expect(state.isConfirmedSurvey).toBe(true);
    expect(state.steps.map((s) => s.Id)).toEqual([HostSurveyStep.summary]);
    expect(state.currentStep.step.Id).toBe(HostSurveyStep.summary);
    expect(state.hasDataSteps).toBe(false);
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a survey to answer: every step whose survey is asked, the first one current, HasDataSteps', async () => {
    vi.mocked(fetchHostSurvey).mockResolvedValue(answer(survey('', true)));
    const { result } = renderFlows();
    await settle();
    const { state } = result.current;
    expect(state.isConfirmedSurvey).toBe(false);
    expect(state.currentStatus.Id).toBe(0);
    expect(state.steps.map((s) => s.Id)).toEqual([
      HostSurveyStep.navigation,
      HostSurveyStep.accommodation,
      HostSurveyStep.meal,
      HostSurveyStep.summary,
    ]);
    expect(state.currentStep).toEqual({ step: state.steps[0], rowNumber: 0 });
    expect(state.hasDataSteps).toBe(true);
  });

  it('reads the floors and gender preferences of the local entities (first 4 by Order)', () => {
    const { result } = renderFlows();
    expect(result.current.houseFloors.map((f) => f.JSON_Name)).toEqual(['basement', 'ground', 'first', 'second']);
    expect(result.current.genderPreferences.map((g) => g.JSON_Name)).toEqual(['MALE', 'FEMALE', 'COUPLE', 'EITHER']);
  });

  it('HasError stops the skeleton and keeps the empty survey', async () => {
    vi.mocked(fetchHostSurvey).mockResolvedValue(answer(survey('confirmed'), true));
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toEqual({ ...INITIAL_HOST_SURVEY_STATE, isFetchingData: false });
  });

  it('a failed call keeps the skeleton and reaches no flow handler (as the port before the refactor)', async () => {
    const call = pending();
    const { result } = renderFlows();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(result.current.state).toEqual({ ...INITIAL_HOST_SURVEY_STATE, isFetchingData: true });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('OnReady runs before the first paint (decision W28): the call starts in the layout phase', () => {
    pending();
    const seen: { calls: number }[] = [];
    function Probe() {
      useHostSurvey(INPUTS, { onNavigateToBack });
      // Declared after the hook: runs after its layout effect, before the browser paints.
      useLayoutEffect(() => {
        seen.push({ calls: vi.mocked(fetchHostSurvey).mock.calls.length });
      }, []);
      return null;
    }
    render(
      <MemoryRouter>
        <Probe />
      </MemoryRouter>,
    );
    expect(seen).toEqual([{ calls: 1 }]);
  });

  it('waits for the store when it was not read yet, then goes on after its first read', async () => {
    // The rows that earlier app starts stored; this page has not read them yet (a page opened by URL).
    const database = memoryDatabase(orbitStaticEntitiesSchemas());
    setOrbitStaticEntitiesDatabase(database);
    await syncAllOrbitStaticEntities(orbitStaticEntities());
    setOrbitStaticEntitiesDatabase(database);
    const { result } = renderFlows();
    await settle();
    expect(result.current.state.hostSurvey).toEqual(CONFIRMED.Response);
    expect(result.current.state.isFetchingData).toBe(true);
    // The app start reads every table in one transaction.
    await act(() => loadOrbitStaticEntities());
    await settle();
    expect(result.current.state.isConfirmedSurvey).toBe(true);
    expect(result.current.state.currentStep.step.Id).toBe(HostSurveyStep.summary);
    expect(result.current.state.isFetchingData).toBe(false);
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
  });

  it('a view restored from the view cache keeps its saved variables and makes no call', async () => {
    const saved: HostSurveyState = { ...INITIAL_HOST_SURVEY_STATE, isFetchingData: false, isConfirmedSurvey: true };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toEqual(saved);
    expect(fetchHostSurvey).not.toHaveBeenCalled();
  });

  it('StrictMode makes one call and writes the answer', async () => {
    const result = renderStrict();
    await settle();
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
    expect(result.current?.state.isConfirmedSurvey).toBe(true);
    expect(result.current?.state.isFetchingData).toBe(false);
  });
});

describe('useHostSurvey: unmount while GetHostSurvey runs (decision W23)', () => {
  it('the call runs once to its end and writes no state after the unmount', async () => {
    const call = pending();
    const { unmount } = renderFlows();
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
    vi.mocked(hostSurveyReducer).mockClear();
    unmount();
    call.resolve(CONFIRMED);
    await settle();
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
    expect(hostSurveyReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a failure after the unmount writes no state and reaches no flow handler', async () => {
    const call = pending();
    const { unmount } = renderFlows();
    vi.mocked(hostSurveyReducer).mockClear();
    unmount();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(fetchHostSurvey).toHaveBeenCalledTimes(1);
    expect(hostSurveyReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});

describe('useHostSurvey: the Edit link and the back navigation', () => {
  it('the Edit link selects the step of a survey to answer', async () => {
    vi.mocked(fetchHostSurvey).mockResolvedValue(answer(survey('', true)));
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onEditStep(HostSurveyStep.meal);
    });
    expect(result.current.state.currentStep).toEqual({ step: result.current.state.steps[2], rowNumber: 2 });
    expect(result.current.state.currentStep.step.Id).toBe(HostSurveyStep.meal);
  });

  it('Unable to Host: a back navigation raises NavigateTo_Back', async () => {
    vi.mocked(fetchHostSurvey).mockResolvedValue(answer(survey('unable_to_host')));
    const { result } = renderFlows();
    await settle();
    expect(result.current.state.currentStatus.Id).toBe(SurveyStatus.unableToHost);
    result.current.onBackNavigation();
    expect(onNavigateToBack).toHaveBeenCalledTimes(1);
  });

  it('a confirmed survey lets the back navigation go on without NavigateTo_Back', async () => {
    const { result } = renderFlows();
    await settle();
    result.current.onBackNavigation();
    expect(onNavigateToBack).not.toHaveBeenCalled();
  });
});
