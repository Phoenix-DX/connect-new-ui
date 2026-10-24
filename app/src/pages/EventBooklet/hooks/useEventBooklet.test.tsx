import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchEventBookletFilters,
  fetchEventBookletGuests,
  fetchEventBookletHelpers,
  type EventBookletCallInputs,
  type EventBookletFiltersResponse,
  type EventBookletMember,
} from '@/api/event';
import { UserException } from '@/legacy/os/exceptions';
import type { EventBookletInputs } from '@/pages/EventBooklet/inputs';
import type { PopupFilters } from '@/pages/EventBooklet/types';
import { showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import type { BackNavigationEvent } from '@/platform/navigation';
import { resetViewCache } from '@/platform/navigation/viewCache';
import { setClientVar } from '@/platform/session/session';
import { getLocalHelperRoles, type LocalHelperRole } from '@/platform/storage/localEntities';
import { checkDirectoryAccess, setBookletMaxRows } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { useEventBooklet, type EventBookletEvents, type EventBookletFlows } from './useEventBooklet';

/** Every write of a flow to the screen state (the dispatch of useFlowState). */
const screenWrites = vi.hoisted(() => vi.fn());

vi.mock('@/platform/navigation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation')>();
  return {
    ...actual,
    useFlowState: ((options: Parameters<typeof actual.useFlowState>[0]) => {
      const flow = actual.useFlowState(options);
      return {
        ...flow,
        dispatch: (action: unknown) => {
          screenWrites(action);
          flow.dispatch(action);
        },
      };
    }) as typeof actual.useFlowState,
  };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchEventBookletFilters: vi.fn(),
  fetchEventBookletGuests: vi.fn(),
  fetchEventBookletHelpers: vi.fn(),
}));
vi.mock('@/shared/Connect2_OrbitMobile_MUI/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/Connect2_OrbitMobile_MUI/lib/actions')>()),
  setBookletMaxRows: vi.fn(),
  checkDirectoryAccess: vi.fn(),
}));
vi.mock('@/platform/storage/localEntities', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/storage/localEntities')>()),
  getLocalHelperRoles: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the event booklet block, with the calls, the local roles and the platform actions replaced by spies.
   Fictional members of a fictional event. */

const inputs: EventBookletInputs = { In_EventId: '7301', In_EventName: 'Spring Gathering' };

const member = (id: string, firstName: string, over: Partial<EventBookletMember> = {}): EventBookletMember => ({
  MemberId: id,
  HouseholderId: `${id}0`,
  Title: 'Mr',
  FirstName: firstName,
  LastName: 'Herrera',
  Age: '40',
  Phone: '',
  IsHouseholder: true,
  Country: 'Argentina',
  CountryCode: 'AR',
  Locality: 'Necochea',
  LocalityId: '601',
  IsHostLocality: false,
  Host: 'Mr Julián & Mrs Fiorella Vitale',
  HostHouseholderId: '880100',
  Days: ['2026-11-06'],
  Role: '',
  OrderNo: id,
  ...over,
});
const guests = [member('1', 'Tomás'), member('2', 'Lucía', { Locality: 'Tandil' })];
const helpers = [member('3', 'Diego', { Role: 'USHER' })];
const roles: LocalHelperRole[] = [{ Id: 2, Label: 'Usher', Order: 2, JSON_Name: 'USHER', isReadOnly: true }];
const filters: EventBookletFiltersResponse = {
  EventInfo: {
    EventId: '7301',
    EventName: 'Spring Gathering 2026',
    EventLocation: 'Bahia Blanca',
    EventLocationId: '600',
    EventCountry: 'Argentina',
    EventCountryCode: 'AR',
    EventStartDateTime: '2026-11-06T09:00:00Z',
    EventEndDateTime: '2026-11-08T18:00:00Z',
  },
  Filters: {
    EventDays: ['2026-11-06', '2026-11-07'],
    HelperRoles: ['USHER'],
    Countries: [{ CountryName: 'Argentina', Localities: ['Necochea', 'Tandil'] }],
  },
};

const events: EventBookletEvents = { onNavigateToHouseholdDetail: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useEventBooklet('$b1', inputs, events), { wrapper });
/** Lets the timers 0 and the pending promises of the flows settle. */
const settle = () =>
  act(async () => {
    for (let i = 0; i < 6; i += 1) await new Promise((r) => setTimeout(r, 0));
  });
/** A loaded booklet. */
async function loaded() {
  const view = renderFlows();
  await settle();
  return view;
}

/** A promise that the test settles. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  const promise = new Promise<T>((res) => {
    resolve = res;
  });
  return { promise, resolve };
}
/** The variables that a data action sent in its call `call`. */
const sent = (fn: unknown, call = 0): EventBookletCallInputs | null =>
  vi.mocked(fn as typeof fetchEventBookletGuests).mock.calls[call]?.[0] ?? null;
/** A back navigation event and its PreventNavigation spy. */
function backEvent() {
  const preventDefault = vi.fn();
  return { event: { preventDefault } as unknown as BackNavigationEvent, preventDefault };
}

beforeEach(() => {
  resetViewCache();
  setClientVar('Connect2_OrbitMobile_MUI.BookletGuestsMaxRows', 10);
  setClientVar('Connect2_OrbitMobile_MUI.BookletHelpersMaxRows', 5);
  vi.mocked(setBookletMaxRows).mockResolvedValue(undefined);
  vi.mocked(fetchEventBookletFilters).mockResolvedValue(filters);
  vi.mocked(fetchEventBookletGuests).mockResolvedValue(guests);
  vi.mocked(fetchEventBookletHelpers).mockResolvedValue(helpers);
  vi.mocked(getLocalHelperRoles).mockReturnValue(roles);
  vi.mocked(checkDirectoryAccess).mockResolvedValue(true);
  vi.mocked(showUpgradePopUp).mockResolvedValue(undefined);
});
afterEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  sessionStorage.clear();
});

describe('useEventBooklet: OnInitialize and OnReady', () => {
  it('starts on the guest view, then SetBookletMaxRows and the three refreshes with page 1', async () => {
    const { result } = renderFlows();
    expect(result.current.state.isGuestView).toBe(true);
    expect(result.current.state.currentFilters.IsGuest).toBe(true);
    await settle();
    expect(setBookletMaxRows).toHaveBeenCalledTimes(1);
    expect(getLocalHelperRoles).toHaveBeenCalledWith(20);
    expect(fetchEventBookletFilters).toHaveBeenCalledTimes(1);
    expect(fetchEventBookletGuests).toHaveBeenCalledTimes(1);
    expect(fetchEventBookletHelpers).not.toHaveBeenCalled();
    expect(sent(fetchEventBookletGuests)).toMatchObject({
      In_EventId: '7301',
      In_EventName: 'Spring Gathering',
      IsFetchingData: true,
      IsGuestView: true,
      PaginationSettings: { Guest_MaxRows: 10, Guest_PageNumber: 1, Guest_IsNewSearch: true, Helper_MaxRows: 5 },
    });
    const s = result.current.state;
    expect(s.isFetchingData).toBe(false);
    expect(s.eventInfo.EventName).toBe('Spring Gathering 2026');
    expect(s.guests.map((g) => g.Locality)).toEqual(['Necochea', 'Tandil']);
    expect(s.availableFilters.HelperRoles.map((o) => o.Label)).toEqual(['Usher']);
    expect(s.paginationSettings).toMatchObject({ Guest_IsNewSearch: false, Guest_NoResults: false });
  });

  it('a failed call: IsFetchingData False and UnknownError to the flow handler', async () => {
    vi.mocked(fetchEventBookletGuests).mockRejectedValue(new Error('Request failed with status 500'));
    const { result } = await loaded();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    const error = vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0];
    expect(error).toBeInstanceOf(UserException);
    expect(error).toMatchObject({
      message: 'Request failed with status 500',
      specificType: 'Connect2_OrbitMobile_MUI.UnknownError',
    });
    expect(result.current.state.isFetchingData).toBe(false);
  });
});

describe('useEventBooklet: screen actions', () => {
  it('the search: only once the filter data is fetched; Enter refreshes the view with the term', async () => {
    const hold = pending<EventBookletFiltersResponse>();
    vi.mocked(fetchEventBookletFilters).mockReturnValueOnce(hold.promise);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onSearchIcon();
    });
    expect(result.current.state.isSearchMode).toBe(false);
    hold.resolve(filters);
    await settle();
    act(() => {
      result.current.onSearchIcon();
      result.current.onSearchTermChange('Lu');
      result.current.onSearchTermKeyUp(false);
    });
    expect(result.current.state.isSearchMode).toBe(true);
    expect(fetchEventBookletGuests).toHaveBeenCalledTimes(1);
    act(() => {
      result.current.onSearchTermKeyUp(true);
    });
    await settle();
    expect(fetchEventBookletGuests).toHaveBeenCalledTimes(2);
    expect(sent(fetchEventBookletGuests, 1)?.SelectedFilters.SearchTerm).toBe('Lu');
    expect(result.current.state.hasFiltersApplied).toBe(true);
    act(() => {
      result.current.onClearSearch();
    });
    expect(result.current.state.currentFilters.SearchTerm).toBe('');
    expect(result.current.state.selectedFilters.SearchTerm).toBe('');
  });

  it('the view swap: nothing for the current view, else the other view is refreshed', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onViewSwap(true);
    });
    await settle();
    expect(fetchEventBookletGuests).toHaveBeenCalledTimes(1);
    act(() => {
      result.current.onViewSwap(false);
    });
    await settle();
    expect(fetchEventBookletHelpers).toHaveBeenCalledTimes(1);
    expect(sent(fetchEventBookletHelpers)).toMatchObject({
      IsGuestView: false,
      PaginationSettings: { Helper_MaxRows: 5, Helper_PageNumber: 1, Helper_IsNewSearch: true },
    });
    expect(result.current.state.isGuestView).toBe(false);
    expect(result.current.state.helpers.map((h) => h.Role)).toEqual(['USHER']);
  });

  it('the filters: invalid ones are reset with a message; valid ones refresh the chosen view', async () => {
    const { result } = await loaded();
    const popup: PopupFilters = {
      ...result.current.state.availableFilters,
      IsGuest: false,
      IsHelper: false,
    };
    act(() => {
      result.current.onApplyFilters(popup);
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('The chosen filters were invalid, filters have been reset.', 0);
    act(() => {
      result.current.onToggleFiltersPopUp();
    });
    expect(result.current.state.filtersPopUp).toBe(true);
    act(() => {
      result.current.onApplyFilters({ ...popup, IsHelper: true, HelperRoles: [{ Value: 'USHER', Label: 'Usher' }] });
    });
    await settle();
    expect(result.current.state.filtersPopUp).toBe(false);
    expect(sent(fetchEventBookletHelpers)?.SelectedFilters.HelperRoles).toEqual({ List: ['USHER'] });
    expect(result.current.state.currentFilters.IsHelper).toBe(true);
    expect(result.current.state.hasFiltersApplied).toBe(true);
    act(() => {
      result.current.onClearAllFilters();
    });
    await settle();
    expect(fetchEventBookletHelpers).toHaveBeenCalledTimes(2);
    expect(result.current.state.selectedFilters.HelperRoles).toEqual([]);
  });

  it('a member: the household with access (and the ViewHousehold event), else the upgrade pop-up', async () => {
    const info = vi.spyOn(log, 'info');
    const { result } = await loaded();
    act(() => {
      result.current.onClickedMember('0');
    });
    await settle();
    expect(checkDirectoryAccess).not.toHaveBeenCalled();
    act(() => {
      result.current.onClickedMember('880100');
    });
    await settle();
    expect(checkDirectoryAccess).toHaveBeenCalledWith('880100', 'Member');
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledWith('880100');
    expect(info).toHaveBeenCalledWith('ApplicationEvent', {
      Event: 'ViewHousehold',
      TargetHouseholdId: '880100',
      EventId: '7301',
    });
    vi.mocked(checkDirectoryAccess).mockResolvedValueOnce(false);
    act(() => {
      result.current.onClickedMember('10');
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    info.mockRestore();
  });

  it('a member while the data is fetching: the message only', async () => {
    vi.mocked(fetchEventBookletGuests).mockReturnValue(pending<EventBookletMember[]>().promise);
    const { result } = await loaded();
    act(() => {
      result.current.onClickedMember('880100');
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('Please wait until all data has finished loading', 0);
    expect(checkDirectoryAccess).not.toHaveBeenCalled();
  });

  it('the back navigation closes the popup, then leaves the search mode, then goes on', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onSearchIcon();
      result.current.onToggleFiltersPopUp();
    });
    const first = backEvent();
    act(() => {
      result.current.onBackNavigation(first.event);
    });
    expect(first.preventDefault).toHaveBeenCalled();
    expect(result.current.state.filtersPopUp).toBe(false);
    expect(result.current.state.isSearchMode).toBe(true);
    const second = backEvent();
    act(() => {
      result.current.onBackNavigation(second.event);
    });
    expect(second.preventDefault).toHaveBeenCalled();
    expect(result.current.state.isSearchMode).toBe(false);
    const third = backEvent();
    act(() => {
      result.current.onBackNavigation(third.event);
    });
    expect(third.preventDefault).not.toHaveBeenCalled();
  });
});

describe('useEventBooklet after an unmount and in StrictMode (decision W23)', () => {
  it('OnReady runs on after the unmount: the calls once, with the variables of the flow, and no screen write', async () => {
    const maxRows = pending<undefined>();
    vi.mocked(setBookletMaxRows).mockReturnValue(maxRows.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    screenWrites.mockClear();
    maxRows.resolve(undefined);
    await settle();
    expect(fetchEventBookletFilters).toHaveBeenCalledTimes(1);
    expect(fetchEventBookletGuests).toHaveBeenCalledTimes(1);
    expect(sent(fetchEventBookletGuests)).toMatchObject({
      IsFetchingData: true,
      PaginationSettings: { Guest_MaxRows: 10, Guest_PageNumber: 1, Guest_IsNewSearch: true },
    });
    expect(screenWrites).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a member click runs on after the unmount: the navigation and the event once, no screen write', async () => {
    const info = vi.spyOn(log, 'info');
    const access = pending<boolean>();
    vi.mocked(checkDirectoryAccess).mockReturnValue(access.promise);
    const { result, unmount } = await loaded();
    act(() => {
      result.current.onClickedMember('880100');
    });
    unmount();
    screenWrites.mockClear();
    access.resolve(true);
    await settle();
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledTimes(1);
    expect(info.mock.calls.filter((c) => c[0] === 'ApplicationEvent')).toHaveLength(1);
    expect(screenWrites).not.toHaveBeenCalled();
    info.mockRestore();
  });

  it('a failure after the unmount still goes to the flow handler, as in the old port', async () => {
    let fail: (error: unknown) => void = () => undefined;
    vi.mocked(fetchEventBookletGuests).mockReturnValue(
      new Promise((_, reject) => {
        fail = reject;
      }),
    );
    const { unmount } = await loaded();
    unmount();
    screenWrites.mockClear();
    fail(new Error('Request failed with status 500'));
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(screenWrites).not.toHaveBeenCalled();
  });

  it('runs OnReady once in StrictMode and still writes the state', async () => {
    const latest: { current: EventBookletFlows | null } = { current: null };
    function Probe() {
      latest.current = useEventBooklet('$b1', inputs, events);
      return null;
    }
    render(
      <StrictMode>
        <MemoryRouter>
          <Probe />
        </MemoryRouter>
      </StrictMode>,
    );
    await settle();
    expect(setBookletMaxRows).toHaveBeenCalledTimes(1);
    expect(fetchEventBookletFilters).toHaveBeenCalledTimes(1);
    expect(fetchEventBookletGuests).toHaveBeenCalledTimes(1);
    expect(latest.current?.state.guests).toHaveLength(2);
  });
});
