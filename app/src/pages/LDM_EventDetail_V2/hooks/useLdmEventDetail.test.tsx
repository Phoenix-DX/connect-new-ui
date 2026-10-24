import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchCoordinatorDetails,
  fetchEventByEventId,
  type CoordinatorDetailsData,
  type EventByEventIdData,
  type LdmEventDetail,
} from '@/api/event';
import { fetchHouseholdCoordinatesById } from '@/api/household';
import { UserException } from '@/legacy/os/exceptions';
import { coordinatorDetails, eventCalendarDetail, ldmEventById } from '@/mocks/fictional/ldm';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addAuditEvent_LDM } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { INITIAL_LDM_EVENT_DETAIL_STATE, ldmEventDetailReducer, type LdmEventDetailState } from './ldmEventDetailState';
import { useLdmEventDetail, type LdmEventDetailEvents } from './useLdmEventDetail';

/* The flows of ScreenBlock_EventDetail_V2, with the calls, the reducer, the audit events, the dialogs, the feedback
   and the flow handler replaced by spies. The meals are the fictional LDM meals of src/mocks/fictional/ldm.ts. */
vi.mock('./ldmEventDetailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./ldmEventDetailState')>();
  return { ...actual, ldmEventDetailReducer: vi.fn(actual.ldmEventDetailReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchCoordinatorDetails: vi.fn(),
  fetchEventByEventId: vi.fn(),
}));
vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchHouseholdCoordinatesById: vi.fn(),
}));
vi.mock('@/shared/Connect2_OrbitMobile_MUI/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/Connect2_OrbitMobile_MUI/lib/actions')>()),
  addAuditEvent_LDM: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores, with the saved block variables, read by useFlowState. */
const viewCache = vi.hoisted(() => {
  const cache: { restored: boolean; saved: unknown } = { restored: false, saved: undefined };
  return cache;
});
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  const { useState } = await import('react');
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(_name: string, initial: T) => useState<T>(() => (viewCache.saved as T | undefined) ?? initial),
  };
});

const TODAY = new Date('2026-10-24T10:00:00');
const INPUTS = { EventHostId: '88154', EventId: '70342' };

/** GetEventByEventId of a fictional meal: 70342 (the user is a guest of the Castillos), 70388 (the Vitales host). */
function eventAnswer(eventId: string, patch: (d: LdmEventDetail) => void = () => undefined): EventByEventIdData {
  const e = ldmEventById(eventId);
  if (!e) throw new Error(`no meal ${eventId}`);
  const wire = eventCalendarDetail(e, TODAY);
  const detail: LdmEventDetail = {
    Host: wire.Host,
    Guests: wire.Guests.List,
    SpecialNeeds: {
      Diet: wire.SpecialNeeds.Diet.List,
      Mobility: wire.SpecialNeeds.Mobility.List,
      Other: wire.SpecialNeeds.Other.List,
    },
  };
  patch(detail);
  return { eventResponse: detail, hasContent: true };
}
function coordinatorAnswer(eventId: string): CoordinatorDetailsData {
  const e = ldmEventById(eventId);
  if (!e) throw new Error(`no meal ${eventId}`);
  return { coordinatorDetails: coordinatorDetails(e, TODAY), hasContent: true };
}

const events: LdmEventDetailEvents = {
  onNavigateToHouseholdCarousel: vi.fn(),
  onNavigateToHouseholdDetail: vi.fn(),
  onNavigateToWebMaps: vi.fn(),
  onNavigateToContactByEmail: vi.fn(),
};
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const renderFlows = (strict = false) =>
  renderHook(() => useLdmEventDetail(INPUTS, events), { wrapper: strict ? strictWrapper : wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** An answer that the test gives later. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve: (value: T) => {
      resolve(value);
    },
    reject: (error: unknown) => {
      reject(error);
    },
  };
}
const reducerCalls = () => vi.mocked(ldmEventDetailReducer).mock.calls.length;
const auditNames = () => vi.mocked(addAuditEvent_LDM).mock.calls.map(([name]) => name);
/** The first audit event is AddAuditRequestAPIEvent(RequestAPI_EventDetail) with the request time in ms. */
function expectRequestAudit() {
  const [name, ids] = vi.mocked(addAuditEvent_LDM).mock.calls[0] ?? [];
  expect(name).toBe('RequestAPI_EventDetail');
  expect(Object.keys(ids ?? {})).toEqual(['RequestTime']);
  expect(ids?.RequestTime).toMatch(/^\d+$/);
}
/** A loaded block of the meal `eventId`. */
async function loaded(eventId = '70342', patch?: (d: LdmEventDetail) => void) {
  vi.mocked(fetchEventByEventId).mockResolvedValueOnce(eventAnswer(eventId, patch));
  vi.mocked(fetchCoordinatorDetails).mockResolvedValueOnce(coordinatorAnswer(eventId));
  const view = renderFlows();
  await settle();
  return view;
}

beforeEach(() => {
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(fetchEventByEventId).mockResolvedValue(eventAnswer('70342'));
  vi.mocked(fetchCoordinatorDetails).mockResolvedValue(coordinatorAnswer('70342'));
  vi.mocked(fetchHouseholdCoordinatesById).mockResolvedValue({
    Latitude: '-38.7180',
    Longitude: '-62.2650',
    UseCoordinates: true,
  });
});
afterEach(() => {
  vi.clearAllMocks();
  vi.restoreAllMocks();
});

describe('useLdmEventDetail: fetch at start and OnReady', () => {
  it('calls GetCoordinatorDetails, then GetEventByEventId with the inputs, then the RequestAPI audit event', async () => {
    const { result } = renderFlows();
    expect(result.current.state).toEqual(INITIAL_LDM_EVENT_DETAIL_STATE);
    await settle();
    expect(fetchCoordinatorDetails).toHaveBeenCalledWith(INPUTS);
    expect(fetchEventByEventId).toHaveBeenCalledWith(INPUTS);
    expect(vi.mocked(fetchCoordinatorDetails).mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(fetchEventByEventId).mock.invocationCallOrder[0] ?? 0,
    );
    expect(result.current.state).toMatchObject({
      isFetching: false,
      hasInformation: true,
      hasEventFetchError: false,
      event: eventAnswer('70342').eventResponse,
      coordinator: coordinatorAnswer('70342'),
    });
    expect(addAuditEvent_LDM).toHaveBeenCalledTimes(1);
    expectRequestAudit();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a meal without content ends the fetching without information', async () => {
    vi.mocked(fetchEventByEventId).mockResolvedValueOnce({ ...eventAnswer('70342'), hasContent: false });
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toMatchObject({ isFetching: false, hasInformation: false });
  });

  it('a GetEventByEventId failure sets HasFetchError, keeps IsFetching and goes to the flow handler', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchEventByEventId).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toMatchObject({ isFetching: true, hasEventFetchError: true });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(addAuditEvent_LDM).not.toHaveBeenCalled();
  });

  it('a GetCoordinatorDetails failure keeps its defaults and does not reach the flow handler', async () => {
    vi.mocked(fetchCoordinatorDetails).mockRejectedValueOnce(new Error('down'));
    const { result } = renderFlows();
    await settle();
    expect(result.current.state.coordinator).toBeNull();
    expect(result.current.state.hasInformation).toBe(true);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: each call and the audit event run once and the state is written', async () => {
    const { result } = renderFlows(true);
    await settle();
    expect(fetchCoordinatorDetails).toHaveBeenCalledTimes(1);
    expect(fetchEventByEventId).toHaveBeenCalledTimes(1);
    expect(addAuditEvent_LDM).toHaveBeenCalledTimes(1);
    expect(result.current.state).toMatchObject({ isFetching: false, hasInformation: true });
    expect(result.current.state.coordinator).not.toBeNull();
  });

  it('StrictMode: a failure goes to the flow handler once', async () => {
    vi.mocked(fetchEventByEventId).mockRejectedValueOnce(new Error('down'));
    const { result } = renderFlows(true);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(result.current.state.hasEventFetchError).toBe(true);
  });

  it('a restored view keeps its variables with both popups closed, and fetches nothing', async () => {
    const saved: LdmEventDetailState = {
      ...INITIAL_LDM_EVENT_DETAIL_STATE,
      isFetching: false,
      hasInformation: true,
      event: eventAnswer('70342').eventResponse,
      contactByMessageData: { Email: 'gustavo.rios@example.com', ContactPopupData: { ShowPopup: true } },
      contactByMessageIsCoordinator: true,
      isSaved: true,
    };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderFlows();
    expect(result.current.state).toEqual({
      ...saved,
      contactByPhoneData: { ContactPopupData: { ShowPopup: false } },
      contactByMessageData: { Email: 'gustavo.rios@example.com', ContactPopupData: { ShowPopup: false } },
    });
    await settle();
    expect(fetchCoordinatorDetails).not.toHaveBeenCalled();
    expect(fetchEventByEventId).not.toHaveBeenCalled();
    expect(addAuditEvent_LDM).not.toHaveBeenCalled();
  });

  it('a restored view that was left before the first assignment fetches again', async () => {
    viewCache.restored = true;
    viewCache.saved = INITIAL_LDM_EVENT_DETAIL_STATE;
    const { result } = renderFlows();
    await settle();
    expect(fetchCoordinatorDetails).toHaveBeenCalledTimes(1);
    expect(fetchEventByEventId).toHaveBeenCalledTimes(1);
    expect(result.current.state.isFetching).toBe(false);
  });
});

describe('useLdmEventDetail: decision W23 (unmount while the flow runs)', () => {
  it('a success after the unmount still sends the audit event once and writes no state', async () => {
    const event = deferred<EventByEventIdData>();
    const coordinator = deferred<CoordinatorDetailsData>();
    vi.mocked(fetchEventByEventId).mockReturnValueOnce(event.promise);
    vi.mocked(fetchCoordinatorDetails).mockReturnValueOnce(coordinator.promise);
    const { unmount } = renderFlows();
    await settle();
    const writes = reducerCalls();
    unmount();
    coordinator.resolve(coordinatorAnswer('70342'));
    event.resolve(eventAnswer('70342'));
    await settle();
    expect(addAuditEvent_LDM).toHaveBeenCalledTimes(1);
    expectRequestAudit();
    expect(reducerCalls()).toBe(writes);
  });

  it('a failure after the unmount still goes to the flow handler once and writes no state', async () => {
    const event = deferred<EventByEventIdData>();
    vi.mocked(fetchEventByEventId).mockReturnValueOnce(event.promise);
    const { unmount } = renderFlows();
    await settle();
    const writes = reducerCalls();
    unmount();
    const error = new Error('down');
    event.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(reducerCalls()).toBe(writes);
  });

  it('the directions started before the unmount still send the audit event and open the maps', async () => {
    const { result, unmount } = await loaded();
    const coordinates = deferred<{ Latitude: string; Longitude: string; UseCoordinates: boolean }>();
    vi.mocked(fetchHouseholdCoordinatesById).mockReturnValueOnce(coordinates.promise);
    act(() => {
      result.current.onHostAddress();
    });
    unmount();
    coordinates.resolve({ Latitude: '-38.7180', Longitude: '-62.2650', UseCoordinates: true });
    await settle();
    expect(auditNames()).toEqual(['RequestAPI_EventDetail', 'MyTimelineGoogleMapsDirections']);
    expect(events.onNavigateToWebMaps).toHaveBeenCalledTimes(1);
  });
});

describe('useLdmEventDetail: the events of the view', () => {
  it('ContactOrganiser: the audit event, then the coordinator in the message popup', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onContactOrganiser();
    });
    const host = eventAnswer('70342').eventResponse.Host;
    expect(addAuditEvent_LDM).toHaveBeenLastCalledWith('ContactEventOrganiser', {
      EventDate: host.EventDate.slice(0, 10),
    });
    expect(result.current.state.contactByMessageIsCoordinator).toBe(true);
    expect(result.current.state.contactByMessageData).toMatchObject({
      IsComboEmailAndPhone: true,
      ContactPopupData: { Name: 'Gustavo Ríos', ActionName: 'Contact', ShowPopup: true },
    });
  });

  it('Email of the message popup closes it and raises NavigateTo_ContactByEmail with the popup data', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onContactOrganiser();
    });
    act(() => {
      result.current.onContactByMessageEmail();
    });
    const coordinator = coordinatorAnswer('70342').coordinatorDetails;
    const host = eventAnswer('70342').eventResponse.Host;
    const args = vi.mocked(events.onNavigateToContactByEmail).mock.lastCall?.[0];
    expect(args?.avatarURL).toContain('LDM_Logo');
    expect({ ...args, avatarURL: '' }).toEqual({
      avatarURL: '',
      contactName: 'Gustavo Ríos',
      contactLocality: coordinator.LocalityName,
      contactCountry: '',
      emailTo: coordinator.CoordinatorEmail,
      isCoordinator: true,
      subject: `${coordinator.LDMEventName} - ${coordinator.EventDate.slice(0, 10)}`,
      date: host.EventDate.slice(0, 10),
      locality: host.EventLocalityName,
    });
    expect(result.current.state.contactByMessageData.ContactPopupData?.ShowPopup).toBe(false);
  });

  it('the host contacts open the message and phone popups, and Cancel closes them', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onContactHostMessage();
    });
    expect(result.current.state.contactByMessageIsCoordinator).toBe(false);
    expect(result.current.state.contactByMessageData.ContactPopupData?.ShowPopup).toBe(true);
    act(() => {
      result.current.onCloseContactByMessage();
    });
    expect(result.current.state.contactByMessageData.ContactPopupData?.ShowPopup).toBe(false);
    act(() => {
      result.current.onContactHostCall();
    });
    expect(result.current.state.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(true);
    act(() => {
      result.current.onCloseContactByPhone();
    });
    expect(result.current.state.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
  });

  it('the guest contacts put their data in the popups', async () => {
    const { result } = await loaded();
    const message = { Email: 'jorge.perez@example.com', ContactPopupData: { Name: 'Jorge Pérez', ShowPopup: true } };
    act(() => {
      result.current.onGuestMessage(message);
    });
    expect(result.current.state.contactByMessageData).toEqual(message);
    const phone = { MobilePhone: '+54 291 555 0122', ContactPopupData: { Name: 'Jorge Pérez', ShowPopup: true } };
    act(() => {
      result.current.onGuestPhoneCall(phone);
    });
    expect(result.current.state.contactByPhoneData).toEqual(phone);
  });

  it('SetContainerHeight assigns only a changed banner height', async () => {
    const { result } = await loaded();
    const writes = reducerCalls();
    act(() => {
      result.current.onSetBannerHeight(INITIAL_LDM_EVENT_DETAIL_STATE.minBannerHeight);
    });
    expect(reducerCalls()).toBe(writes);
    act(() => {
      result.current.onSetBannerHeight(236);
    });
    expect(result.current.state.minBannerHeight).toBe(236);
  });

  it('a guest household: the audit event and NavigateTo_HouseholdCarousel with every guest', async () => {
    const { result } = await loaded();
    const guests = eventAnswer('70342').eventResponse.Guests;
    const [, second] = guests;
    if (!second) throw new Error('no guest');
    await act(async () => {
      result.current.onGuestClicked(second, true);
      await Promise.resolve();
    });
    expect(addAuditEvent_LDM).toHaveBeenLastCalledWith('GuestClickedOtherGuestHousehold', {
      HouseholdId: second.HouseholderID,
    });
    expect(events.onNavigateToHouseholdCarousel).toHaveBeenCalledWith(
      second.HouseholderID,
      guests.map((g) => g.HouseholderID),
    );
  });

  it('the host clicks a guest household: the HostClickedGuestHousehold audit event', async () => {
    const { result } = await loaded('70388');
    const [first] = eventAnswer('70388').eventResponse.Guests;
    if (!first) throw new Error('no guest');
    await act(async () => {
      result.current.onGuestClicked(first, true);
      await Promise.resolve();
    });
    expect(addAuditEvent_LDM).toHaveBeenLastCalledWith('HostClickedGuestHousehold', {
      HouseholdId: first.HouseholderID,
    });
  });

  it('a disabled guest household shows the upgrade popup; a hidden one does nothing', async () => {
    const { result } = await loaded();
    const [first] = eventAnswer('70342').eventResponse.Guests;
    if (!first) throw new Error('no guest');
    await act(async () => {
      result.current.onGuestClicked({ ...first, RecordDisabled: true }, true);
      await Promise.resolve();
    });
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    await act(async () => {
      result.current.onGuestClicked(first, false);
      await Promise.resolve();
    });
    expect(events.onNavigateToHouseholdCarousel).not.toHaveBeenCalled();
    expect(auditNames()).toEqual(['RequestAPI_EventDetail']);
  });

  it('HostInformation: a displayed host opens HouseholdDetails; a disabled host shows the upgrade popup', async () => {
    const { result } = await loaded();
    const host = eventAnswer('70342').eventResponse.Host;
    await act(async () => {
      result.current.onHostInformation(false);
      result.current.onHostInformation(true);
      await Promise.resolve();
    });
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledWith(host.HouseholderID);

    const disabled = await loaded('70342', (d) => {
      d.Host.RecordDisabled = true;
    });
    await act(async () => {
      disabled.result.current.onHostInformation(true);
      await Promise.resolve();
    });
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledTimes(1);
  });
});

describe('useLdmEventDetail: the directions to the host', () => {
  it('GetHouseholdCoordinates, the audit event and NavigateTo_WebMaps(1, the directions query)', async () => {
    const { result } = await loaded();
    const host = eventAnswer('70342').eventResponse.Host;
    act(() => {
      result.current.onHostAddress();
    });
    await settle();
    expect(fetchHouseholdCoordinatesById).toHaveBeenCalledWith(host.HouseholderID);
    expect(addAuditEvent_LDM).toHaveBeenLastCalledWith('MyTimelineGoogleMapsDirections', {
      EventDate: host.EventDate.slice(0, 10),
    });
    expect(events.onNavigateToWebMaps).toHaveBeenCalledWith(
      1,
      `&origin=${host.MainHallLatitude},${host.MainHallLongititude}&destination=-38.7180,-62.2650&travelmode=driving`,
    );
  });

  it('offline: the network message, no call', async () => {
    const { result } = await loaded();
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    act(() => {
      result.current.onHostAddress();
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'Please check your network connection and try again',
      PLATFORM_MESSAGE_TYPE.info,
    );
    expect(fetchHouseholdCoordinatesById).not.toHaveBeenCalled();
  });

  it('without the main hall address: "Map is not available"', async () => {
    const { result } = await loaded('70342', (d) => {
      d.Host.MainHallFormattedAddress = '';
    });
    act(() => {
      result.current.onHostAddress();
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('Map is not available', PLATFORM_MESSAGE_TYPE.info);
    expect(fetchHouseholdCoordinatesById).not.toHaveBeenCalled();
  });

  it('"application not found for uri." raises GoogleMapsNotInstalled, another message UnknownError', async () => {
    const { result } = await loaded();
    vi.mocked(fetchHouseholdCoordinatesById).mockRejectedValueOnce(new UserException('Application not found for uri.'));
    act(() => {
      result.current.onHostAddress();
    });
    await settle();
    const notInstalled = vi.mocked(raiseToFlowHandler).mock.lastCall?.[0] as UserException;
    expect(notInstalled).toBeInstanceOf(UserException);
    expect(notInstalled.message).toBe('Please install and enable Google Maps');
    expect(notInstalled.specificType).toBe('Connect2_OrbitMobile_MUI.GoogleMapsNotInstalled');

    vi.mocked(fetchHouseholdCoordinatesById).mockRejectedValueOnce(new Error('Request failed with status 500'));
    act(() => {
      result.current.onHostAddress();
    });
    await settle();
    const unknown = vi.mocked(raiseToFlowHandler).mock.lastCall?.[0] as UserException;
    expect(unknown.message).toBe('Request failed with status 500');
    expect(unknown.specificType).toBe('Connect2_OrbitMobile_MUI.UnknownError');
    expect(events.onNavigateToWebMaps).not.toHaveBeenCalled();
  });
});
