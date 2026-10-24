import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchAccommodationHost,
  fetchAccommodationHostDocument,
  type AccommodationHostDocument,
  type AccommodationHostResult,
} from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { useWasRestoredFromCache } from '@/platform/navigation/hooks';
import { resetViewCache } from '@/platform/navigation/viewCache';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/lib/legacyShared/actions';
import { checkDirectoryAccess, getFormattedDateTimeById } from '@/lib/orbit/actions';
import { openInApp_TryOpenFileInApp } from '@/lib/ubtConnectUtils/actions';
import { accommodationHostReducer, type AccommodationHostInputs } from './accommodationHostState';
import {
  useAccommodationHost,
  type AccommodationHostEvents,
  type AccommodationHostFlows,
} from './useAccommodationHost';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./accommodationHostState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./accommodationHostState')>();
  return { ...actual, accommodationHostReducer: vi.fn(actual.accommodationHostReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchAccommodationHost: vi.fn(),
  fetchAccommodationHostDocument: vi.fn(),
}));
vi.mock('@/api/image', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/image')>()),
  fetchLegacySignedImageURL: vi.fn(),
}));
vi.mock('@/lib/orbit/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/orbit/actions')>()),
  checkDirectoryAccess: vi.fn(),
}));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableMemberContactList: vi.fn(),
  getCacheableTimezoneInfo: vi.fn(),
}));
vi.mock('@/lib/ubtConnectUtils/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnectUtils/actions')>()),
  openInApp_TryOpenFileInApp: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs/subscription', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs/subscription')>()),
  showUpgradePopUp: vi.fn(),
}));
/** The view cache check that useFlowState reads: a test can say that the view was restored. */
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: vi.fn(() => false),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of ScreenBlock_AccommodationHost with the calls, the dialogs and the flow handler replaced by spies.
   Fictional event, host and guests. */
const INPUTS: AccommodationHostInputs = {
  In_MilestoneId: '5501-1',
  In_EventId: '5501',
  In_HostId: '770001',
  In_PreloadEventName: 'Spring Youth Weekend - Tandil',
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: 'accommodation-host',
};
const DATE = '2026-11-13T18:00:00Z';
const RESULT: AccommodationHostResult = {
  hasData: true,
  accommodationData: {
    MilestoneId: '5501-1',
    MilestoneType: '',
    MilestoneDateTime: DATE,
    MilestoneTitle: 'Hosted Nights',
    EventDetails: { Id: '5501', Name: 'Spring Youth Weekend', Location: 'Tandil Hall', StartDate: '', EndDate: '' },
    SpecialNeedsCount: 0,
    Helpers: [],
    Rooms: [],
  },
};
const NO_DOCUMENT: AccommodationHostDocument = { DocumentURL: '', DocumentName: '' };
const CALL_INPUTS = {
  IsFetchingData: true,
  IsLoadingDocument: false,
  HasDocument: false,
  ...INPUTS,
};

const events = (): AccommodationHostEvents => ({
  onNavigateToHouseholdDetail: vi.fn(),
  onNavigateToContactHelpdesk: vi.fn(),
  onNavigateToGuestArrangements: vi.fn(),
});
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
function renderFlows(handlers: AccommodationHostEvents = events()) {
  const view = renderHook(() => useAccommodationHost(INPUTS, handlers), { wrapper });
  return { ...view, handlers };
}
const settle = () => act(() => Promise.resolve());
const flush = async () => {
  for (let i = 0; i < 6; i++) await settle();
};

/** A call that answers or fails only when the test says so. */
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

let logs: LogEntry[] = [];
let removeSink: () => void = () => undefined;

beforeEach(() => {
  resetViewCache();
  vi.mocked(fetchAccommodationHost).mockResolvedValue(RESULT);
  vi.mocked(fetchAccommodationHostDocument).mockResolvedValue(NO_DOCUMENT);
  vi.mocked(fetchLegacySignedImageURL).mockResolvedValue('https://images.example.org/member-880101.jpg');
  vi.mocked(checkDirectoryAccess).mockResolvedValue(true);
  vi.mocked(showUpgradePopUp).mockResolvedValue(undefined);
  logs = [];
  removeSink = addLogSink((entry) => {
    if (entry.message === 'ApplicationEvent') logs.push(entry);
  });
});
afterEach(() => {
  removeSink();
  vi.clearAllMocks();
});

describe('useAccommodationHost: OnReady', () => {
  it('fetches the accommodation, then the document, and ends with the data', async () => {
    const host = deferred<AccommodationHostResult>();
    vi.mocked(fetchAccommodationHost).mockReturnValue(host.promise);
    const { result } = renderFlows();
    expect(result.current.isFetchingData).toBe(true);
    expect(fetchAccommodationHost).toHaveBeenCalledWith(CALL_INPUTS);
    expect(fetchAccommodationHostDocument).not.toHaveBeenCalled();
    host.resolve(RESULT);
    await flush();
    expect(fetchAccommodationHostDocument).toHaveBeenCalledWith(CALL_INPUTS);
    expect(result.current).toEqual(
      expect.objectContaining({
        isFetchingData: false,
        isDataFetched: true,
        hasData: true,
        hasDocument: false,
        accommodationData: RESULT.accommodationData,
      }),
    );
  });

  it('keeps HasDocument from Get_Document', async () => {
    vi.mocked(fetchAccommodationHostDocument).mockResolvedValue({
      DocumentURL: 'https://files.example.org/rooms.pdf',
      DocumentName: 'Rooms',
    });
    const { result } = renderFlows();
    await flush();
    expect(result.current.hasDocument).toBe(true);
  });

  it('fetches again on a view that the view cache restored, from the record defaults, as the old port (W27)', async () => {
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    const { result } = renderFlows();
    expect(result.current.isFetchingData).toBe(true);
    expect(result.current.isDataFetched).toBe(false);
    await flush();
    vi.mocked(useWasRestoredFromCache).mockReturnValue(false);
    expect(fetchAccommodationHost).toHaveBeenCalledTimes(1);
    expect(fetchAccommodationHostDocument).toHaveBeenCalledTimes(1);
    expect(result.current.isDataFetched).toBe(true);
  });

  it('sends a failure of GetAccommodationHost to the flow handler and does not ask for the document', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchAccommodationHost).mockRejectedValue(error);
    const { result } = renderFlows();
    await flush();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(fetchAccommodationHostDocument).not.toHaveBeenCalled();
    expect(result.current.isFetchingData).toBe(true);
  });
});

describe('useAccommodationHost: events', () => {
  it('opens the household of a member with directory access, then logs ViewHousehold', async () => {
    const { result, handlers } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMember('880100');
    });
    await flush();
    expect(checkDirectoryAccess).toHaveBeenCalledWith('880100', 'Member');
    expect(handlers.onNavigateToHouseholdDetail).toHaveBeenCalledWith('880100');
    expect(logs.map((l) => l.data)).toEqual([
      { Event: 'ViewHousehold', TargetHouseholdId: '880100', MilestoneId: '5501-1', EventId: '5501' },
    ]);
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('shows the upgrade popup without directory access', async () => {
    vi.mocked(checkDirectoryAccess).mockResolvedValue(false);
    const { result, handlers } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMember('880100');
    });
    await flush();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(handlers.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
  });

  it('opens the call popup with the first member contact and the signed photo when the card has none', async () => {
    vi.mocked(getCacheableMemberContactList).mockResolvedValue([
      {
        MobilePhoneNumber: '+54 9 291 411 2233',
        HomePhoneNumber: '+54 291 455 0101',
        WorkPhoneNumber: '',
        LocalityName: 'Bahía Blanca',
        CountryName: 'Argentina',
        Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
      },
    ] as unknown as Awaited<ReturnType<typeof getCacheableMemberContactList>>);
    const { result } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMemberPhone('+54 9 291 411 2233', 'Lucía Herrera', '252', '880101', '');
    });
    expect(result.current.contactByPhoneData.ContactPopupData).toEqual(
      expect.objectContaining({ Name: 'Lucía Herrera', ShowPopup: true, IsLoading: true, IsFetchingTimezone: true }),
    );
    await flush();
    expect(getCacheableMemberContactList).toHaveBeenCalledWith(['880101']);
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('880101', 'Member', 'Small');
    expect(getCacheableTimezoneInfo).not.toHaveBeenCalled();
    expect(result.current.contactByPhoneData).toEqual({
      MobilePhone: '+54 9 291 411 2233',
      HomePhone: '+54 291 455 0101',
      WorkPhone: '',
      ContactPopupData: {
        Name: 'Lucía Herrera',
        ImageURL: 'https://images.example.org/member-880101.jpg',
        ShowPopup: true,
        IsFetchingTimezone: false,
        IsLoading: false,
        Locality: 'Bahía Blanca',
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        CountryName: 'Argentina',
      },
    });
  });

  it('without a member contact keeps the phone and reads the timezone of the locality', async () => {
    vi.mocked(getCacheableMemberContactList).mockResolvedValue([]);
    vi.mocked(getCacheableTimezoneInfo).mockResolvedValue({
      TimezoneLabel: 'Argentina Time',
      OffsetSeconds: '-10800',
      TimezoneAbreviation: 'ART',
      CountryName: '',
    });
    const { result } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMemberPhone('+54 291 455 0101', 'Lucía Herrera', '252', '880101', 'photo.jpg');
    });
    await flush();
    expect(getCacheableTimezoneInfo).toHaveBeenCalledWith('252');
    expect(fetchLegacySignedImageURL).not.toHaveBeenCalled();
    expect(result.current.contactByPhoneData).toEqual({
      Phone: '+54 291 455 0101',
      ContactPopupData: {
        Name: 'Lucía Herrera',
        ImageURL: 'photo.jpg',
        ShowPopup: true,
        IsFetchingTimezone: false,
        IsLoading: false,
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        Locality: '',
        CountryName: '',
      },
    });
  });

  it('does nothing for a member without a phone number', async () => {
    const { result } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMemberPhone('', 'Lucía Herrera', '252', '880101', '');
    });
    await flush();
    expect(getCacheableMemberContactList).not.toHaveBeenCalled();
    expect(result.current.contactByPhoneData).toEqual({});
  });

  it('closes the popup on cancel, and logs CallMember before it closes on call', async () => {
    vi.mocked(getCacheableMemberContactList).mockResolvedValue([]);
    vi.mocked(getCacheableTimezoneInfo).mockResolvedValue({
      TimezoneLabel: '',
      OffsetSeconds: '0',
      TimezoneAbreviation: '',
      CountryName: '',
    });
    const { result } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMemberPhone('+54 291 455 0101', 'Lucía Herrera', '252', '880101', '');
    });
    await flush();
    act(() => {
      result.current.onContactByPhoneCancel();
    });
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
    act(() => {
      result.current.onClickedMemberPhone('+54 291 455 0101', 'Lucía Herrera', '252', '880101', '');
    });
    await flush();
    act(() => {
      result.current.onCallClicked();
    });
    expect(logs.map((l) => l.data)).toEqual([{ Event: 'CallMember', MilestoneId: '5501-1', EventId: '5501' }]);
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
  });

  it('raises NavigateTo_ContactHelpdesk with the subject of the milestone and the preloaded milestone name', async () => {
    const { result, handlers } = renderFlows();
    await flush();
    act(() => {
      result.current.onContactHelpdesk();
    });
    expect(handlers.onNavigateToContactHelpdesk).toHaveBeenCalledWith(
      `Spring Youth Weekend - Tandil - Accommodation - Tandil Hall - ${getFormattedDateTimeById('accommodation-host', DATE)}`,
      'Accommodation',
    );
  });

  it('raises NavigateTo_GuestArrangements only for a guest with arrangements', async () => {
    const { result, handlers } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickGuestArrangements('880101', false);
    });
    expect(handlers.onNavigateToGuestArrangements).not.toHaveBeenCalled();
    act(() => {
      result.current.onClickGuestArrangements('880101', true);
    });
    expect(handlers.onNavigateToGuestArrangements).toHaveBeenCalledWith(
      '880101',
      'accommodation-host',
      'Hosted Nights',
      '770001',
    );
  });

  it('opens the document in the browser and ends loading it', async () => {
    vi.mocked(fetchAccommodationHostDocument).mockResolvedValue({
      DocumentURL: 'https://files.example.org/rooms.pdf',
      DocumentName: 'Rooms',
    });
    vi.mocked(openInApp_TryOpenFileInApp).mockReturnValue({ IsInApp: false, Filepath: '' });
    const { result } = renderFlows();
    await flush();
    vi.mocked(accommodationHostReducer).mockClear();
    act(() => {
      result.current.onClickOpenDocument();
    });
    // AddExtensionToFile adds the extension without the dot, as compiled.
    expect(openInApp_TryOpenFileInApp).toHaveBeenCalledWith(
      'Roomspdf',
      'https://files.example.org/rooms.pdf',
      'orbit-documents',
      'pdf',
    );
    // The reducer runs for `latest` and for the render: compare the distinct writes in order.
    const writes = vi.mocked(accommodationHostReducer).mock.calls.map(([, action]) => JSON.stringify(action));
    expect([...new Set(writes)].map((w) => JSON.parse(w) as unknown)).toEqual([
      { type: 'documentLoadingChanged', isLoadingDocument: true },
      { type: 'documentLoadingChanged', isLoadingDocument: false },
    ]);
    expect(JSON.parse(writes.at(-1) ?? 'null')).toEqual({ type: 'documentLoadingChanged', isLoadingDocument: false });
  });
});

describe('useAccommodationHost after an unmount and in StrictMode (decision W23)', () => {
  it('still asks for the document once when GetAccommodationHost answers after the unmount, and writes no state', async () => {
    const host = deferred<AccommodationHostResult>();
    vi.mocked(fetchAccommodationHost).mockReturnValue(host.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(accommodationHostReducer).mockClear();
    host.resolve(RESULT);
    await flush();
    expect(fetchAccommodationHost).toHaveBeenCalledTimes(1);
    expect(fetchAccommodationHostDocument).toHaveBeenCalledTimes(1);
    expect(fetchAccommodationHostDocument).toHaveBeenCalledWith(CALL_INPUTS);
    expect(accommodationHostReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('opens the household and logs ViewHousehold once when the access check answers after the unmount', async () => {
    const access = deferred<boolean>();
    vi.mocked(checkDirectoryAccess).mockReturnValue(access.promise);
    const { result, unmount, handlers } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMember('880100');
    });
    unmount();
    access.resolve(true);
    await flush();
    expect(handlers.onNavigateToHouseholdDetail).toHaveBeenCalledTimes(1);
    expect(logs).toHaveLength(1);
  });

  it('makes the contact calls of the popup once and writes no state when they answer after the unmount', async () => {
    const contacts = deferred<Awaited<ReturnType<typeof getCacheableMemberContactList>>>();
    vi.mocked(getCacheableMemberContactList).mockReturnValue(contacts.promise);
    vi.mocked(getCacheableTimezoneInfo).mockResolvedValue({
      TimezoneLabel: '',
      OffsetSeconds: '0',
      TimezoneAbreviation: 'ART',
      CountryName: '',
    });
    const { result, unmount } = renderFlows();
    await flush();
    act(() => {
      result.current.onClickedMemberPhone('+54 291 455 0101', 'Lucía Herrera', '252', '880101', '');
    });
    unmount();
    vi.mocked(accommodationHostReducer).mockClear();
    contacts.resolve([]);
    await flush();
    expect(getCacheableMemberContactList).toHaveBeenCalledTimes(1);
    expect(getCacheableTimezoneInfo).toHaveBeenCalledTimes(1);
    expect(accommodationHostReducer).not.toHaveBeenCalled();
  });

  it('makes each call once in StrictMode and still writes the state', async () => {
    const latest: { current: AccommodationHostFlows | null } = { current: null };
    const handlers = events();
    function Probe() {
      latest.current = useAccommodationHost(INPUTS, handlers);
      return null;
    }
    render(
      <StrictMode>
        <MemoryRouter>
          <Probe />
        </MemoryRouter>
      </StrictMode>,
    );
    await flush();
    expect(fetchAccommodationHost).toHaveBeenCalledTimes(1);
    expect(fetchAccommodationHostDocument).toHaveBeenCalledTimes(1);
    expect(latest.current?.isDataFetched).toBe(true);
    expect(latest.current?.isFetchingData).toBe(false);
  });
});
