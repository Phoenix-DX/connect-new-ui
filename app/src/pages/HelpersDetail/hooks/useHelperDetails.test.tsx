import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchHelperDetails, type HelperData } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { ControllerDisposedException, IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/lib/legacyShared/actions';
import type { MemberContactWithTimezone } from '@/lib/legacyShared/structures';
import { checkDirectoryAccess } from '@/lib/orbit/actions';
import { onApplicationEvent_CallMember, onApplicationEvent_ViewHousehold } from './helperDetailsActions';
import { helperDetailsReducer } from './helperDetailsState';
import { useHelperDetails, type HelperDetailsFlows } from './useHelperDetails';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./helperDetailsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./helperDetailsState')>();
  return { ...actual, helperDetailsReducer: vi.fn(actual.helperDetailsReducer) };
});
vi.mock('./helperDetailsActions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./helperDetailsActions')>()),
  onApplicationEvent_CallMember: vi.fn(),
  onApplicationEvent_ViewHousehold: vi.fn(),
}));
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchHelperDetails: vi.fn(),
}));
vi.mock('@/api/image', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/image')>()),
  fetchLegacySignedImageURL: vi.fn(() => Promise.resolve('https://images.example/lucia.jpg')),
}));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableMemberContactList: vi.fn(),
  getCacheableTimezoneInfo: vi.fn(),
}));
vi.mock('@/lib/orbit/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/orbit/actions')>()),
  checkDirectoryAccess: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache). */
const viewCache = vi.hoisted(() => ({ restored: false }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => viewCache.restored,
}));

/* The flows of ScreenBlock_HelperDetails, with the calls, the access check and the dialogs replaced by spies.
   Fictional helpers of an Orbit conference. */
const inputs = {
  In_EventId: '7301',
  In_PreloadEventName: 'Weekend Conference',
  In_PreloadMilestoneName: 'Helper',
  In_OrbitMilestoneTypeId: 'helper-host',
  In_HostId: '42438',
};
const helperData: HelperData = {
  EventDetails: {
    Id: '7301',
    Name: 'Weekend Conference',
    Location: 'Mar del Plata',
    StartDate: '2026-03-13T09:00:00Z',
    EndDate: '2026-03-15T17:00:00Z',
  },
  Helpers: [
    { Role: 'CATERING', MemberInformation: [{ MemberId: '91011', FirstName: 'Lucía', HouseholderId: '91010' }] },
  ],
};
const contact = (patch: Partial<MemberContactWithTimezone> = {}): MemberContactWithTimezone => ({
  MobilePhoneNumber: '+54 223 555 0101',
  HomePhoneNumber: '+54 223 555 0102',
  WorkPhoneNumber: '',
  Email: 'lucia.suarez@example.com',
  CountryCode: 'AR',
  CountryName: 'Argentina',
  LocalityId: '5101',
  LocalityName: 'Mar del Plata',
  HouseholdId: '91010',
  Timezone: { TimezoneLabel: 'Argentina Time', OffsetSeconds: '-10800' },
  ContactDetails: {
    Id: '91011',
    Name: 'Lucía Suárez',
    Location: 'Mar del Plata',
    AvatarURL: { Bucket: '', Path: '', SignedURL: '', Type: '', CropX: '0', CropY: '0', CropW: '0', CropH: '0' },
    IsBookmarked: false,
    IsDisabled: false,
  },
  ...patch,
});

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

const events = { onNavigateToHouseholdDetail: vi.fn(), onNavigateToContactHelpdesk: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useHelperDetails(inputs, events), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  vi.mocked(fetchHelperDetails).mockResolvedValue(helperData);
  vi.mocked(checkDirectoryAccess).mockResolvedValue(true);
  vi.mocked(getCacheableMemberContactList).mockResolvedValue([contact()]);
  vi.mocked(getCacheableTimezoneInfo).mockResolvedValue({
    CountryName: 'Argentina',
    OffsetSeconds: '-10800',
    TimezoneAbreviation: 'ART',
    TimezoneLabel: 'Argentina Time',
  });
});

describe('useHelperDetails: OnReady', () => {
  it('shows the skeleton at the first render, then the helpers of the answer', async () => {
    const { result } = renderFlows();
    // OnReady runs before the first paint: the first rendered state is already fetching.
    expect(result.current.isFetchingData).toBe(true);
    expect(result.current.isDataFetched).toBe(false);
    await settle();
    expect(fetchHelperDetails).toHaveBeenCalledTimes(1);
    expect(fetchHelperDetails).toHaveBeenCalledWith({
      IsFetchingData: true,
      IsFetchingPhoneData: false,
      ...inputs,
    });
    expect(result.current).toMatchObject({ isFetchingData: false, isDataFetched: true, helperData });
  });

  it('makes one call under StrictMode and writes its answer', async () => {
    const latest: { current: HelperDetailsFlows | null } = { current: null };
    function Probe() {
      latest.current = useHelperDetails(inputs, events);
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
    expect(fetchHelperDetails).toHaveBeenCalledTimes(1);
    expect(latest.current).toMatchObject({ isFetchingData: false, isDataFetched: true, helperData });
  });

  it('does nothing on a view restored from the cache', async () => {
    viewCache.restored = true;
    const { result } = renderFlows();
    await settle();
    expect(fetchHelperDetails).not.toHaveBeenCalled();
    expect(result.current.isFetchingData).toBe(false);
  });

  it('sends a failure to the flow handler and keeps the skeleton', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchHelperDetails).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current).toMatchObject({ isFetchingData: true, isDataFetched: false });
  });
});

/** The errors that reach the flow handler, without the ignorable ones (ControllerDisposedException of a left block). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

describe('useHelperDetails: flow scope, item 8 (unmount while a flow runs)', () => {
  it('R1: unmount while GetHelperDetails is pending: the call runs once, no state write, no raise', async () => {
    const answer = pending<HelperData>();
    vi.mocked(fetchHelperDetails).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    unmount();
    const writes = vi.mocked(helperDetailsReducer).mock.calls.length;
    answer.resolve(helperData);
    await settle();
    expect(fetchHelperDetails).toHaveBeenCalledTimes(1);
    expect(vi.mocked(helperDetailsReducer).mock.calls.length).toBe(writes);
  });

  it('R1: unmount while GetHelperDetails is pending: its failure reaches no handler', async () => {
    const answer = pending<HelperData>();
    vi.mocked(fetchHelperDetails).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    unmount();
    const writes = vi.mocked(helperDetailsReducer).mock.calls.length;
    answer.reject(new Error('Service Interruption'));
    await settle();
    expect(raisedErrors()).toEqual([]);
    expect(vi.mocked(helperDetailsReducer).mock.calls.length).toBe(writes);
  });

  it('R2 then R3: unmount while CheckDirectoryAccess is pending: no navigation event, no application event', async () => {
    const access = pending<boolean>();
    vi.mocked(checkDirectoryAccess).mockReturnValue(access.promise);
    const { result, unmount } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('91010');
    });
    unmount();
    const writes = vi.mocked(helperDetailsReducer).mock.calls.length;
    access.resolve(true);
    await settle();
    expect(checkDirectoryAccess).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
    expect(onApplicationEvent_ViewHousehold).not.toHaveBeenCalled();
    expect(vi.mocked(helperDetailsReducer).mock.calls.length).toBe(writes);
    // The own action NavigateTo_HouseholdDetail ends the flow with an ignorable exception.
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([error]) => error)).toEqual([
      expect.any(ControllerDisposedException),
    ]);
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: unmount while CheckDirectoryAccess is pending, without access: the upgrade popup still opens', async () => {
    const access = pending<boolean>();
    vi.mocked(checkDirectoryAccess).mockReturnValue(access.promise);
    const { result, unmount } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('91010');
    });
    unmount();
    access.resolve(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
  });

  it('R2: BuildMemberCallData: the module actions run to the end and no state changes after the unmount', async () => {
    const contacts = pending<MemberContactWithTimezone[]>();
    vi.mocked(getCacheableMemberContactList).mockReturnValue(contacts.promise);
    const { result, unmount } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', '');
    });
    unmount();
    const writes = vi.mocked(helperDetailsReducer).mock.calls.length;
    contacts.resolve([contact()]);
    await settle();
    expect(fetchLegacySignedImageURL).toHaveBeenCalledTimes(1);
    expect(vi.mocked(helperDetailsReducer).mock.calls.length).toBe(writes);
  });
});

describe('useHelperDetails: member cards', () => {
  it('OnHandle_ClickedMember with access: NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('91010');
    });
    await settle();
    expect(checkDirectoryAccess).toHaveBeenCalledWith('91010', 'Member');
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledWith('91010');
    expect(onApplicationEvent_ViewHousehold).toHaveBeenCalledWith('91010', '7301');
    expect(vi.mocked(events.onNavigateToHouseholdDetail).mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(onApplicationEvent_ViewHousehold).mock.invocationCallOrder[0] ?? 0,
    );
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('OnHandle_ClickedMember without access: the upgrade popup', async () => {
    vi.mocked(checkDirectoryAccess).mockResolvedValue(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('91010');
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
  });

  it('OnHandle_ClickedMemberPhone without a number does nothing', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('', 'Lucía Suárez', '5101', '91011', '');
    });
    await settle();
    expect(getCacheableMemberContactList).not.toHaveBeenCalled();
    expect(result.current.contactByPhoneData).toEqual({});
  });

  it('BuildMemberCallData with a contact: the signed photo, then the phones and the locality of the contact', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', '');
    });
    expect(result.current.contactByPhoneData.ContactPopupData).toEqual({
      Name: 'Lucía Suárez',
      ImageURL: '',
      ShowPopup: true,
      IsFetchingTimezone: true,
      IsLoading: true,
    });
    await settle();
    expect(getCacheableMemberContactList).toHaveBeenCalledWith(['91011']);
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('91011', 'Member', 'Small');
    expect(getCacheableTimezoneInfo).not.toHaveBeenCalled();
    expect(result.current.contactByPhoneData).toEqual({
      ContactPopupData: {
        Name: 'Lucía Suárez',
        ImageURL: 'https://images.example/lucia.jpg',
        ShowPopup: true,
        IsFetchingTimezone: false,
        IsLoading: false,
        Locality: 'Mar del Plata',
        TimezoneName: 'Argentina Time',
        TimezoneOffset: -10800,
        CountryName: 'Argentina',
      },
      MobilePhone: '+54 223 555 0101',
      HomePhone: '+54 223 555 0102',
      WorkPhone: '',
    });
  });

  it('BuildMemberCallData keeps the photo of the card when it has one', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', 'blob:card-photo');
    });
    await settle();
    expect(fetchLegacySignedImageURL).not.toHaveBeenCalledWith('91011', 'Member', 'Small');
    expect(result.current.contactByPhoneData.ContactPopupData?.ImageURL).toBe('blob:card-photo');
  });

  it('BuildMemberCallData without a contact: the phone, then the time zone of the locality', async () => {
    vi.mocked(getCacheableMemberContactList).mockResolvedValue([]);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', '');
    });
    await settle();
    expect(getCacheableTimezoneInfo).toHaveBeenCalledWith('5101');
    expect(result.current.contactByPhoneData).toEqual({
      ContactPopupData: {
        Name: 'Lucía Suárez',
        ImageURL: '',
        ShowPopup: true,
        IsFetchingTimezone: false,
        IsLoading: false,
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        Locality: 'Argentina',
        CountryName: 'Argentina',
      },
      Phone: '+54 223 555 0101',
    });
  });

  it('a failed BuildMemberCallData goes to the flow handler', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(getCacheableMemberContactList).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', '');
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });
});

describe('useHelperDetails: call popup and helpdesk', () => {
  it('OnHandle_CallClicked: OnApplicationEvent_CallMember, then the popup closes', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', '');
    });
    await settle();
    act(() => {
      result.current.onCallClicked();
    });
    expect(onApplicationEvent_CallMember).toHaveBeenCalledWith('7301');
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
  });

  it('OnHandle_ContactByPhone_Cancel closes the popup', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMemberPhone('+54 223 555 0101', 'Lucía Suárez', '5101', '91011', '');
    });
    await settle();
    act(() => {
      result.current.onContactByPhoneCancel();
    });
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
    expect(onApplicationEvent_CallMember).not.toHaveBeenCalled();
  });

  it('OnHandle_ContactHelpdesk: the subject of the event and the preloaded event name', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onContactHelpdesk();
    });
    expect(events.onNavigateToContactHelpdesk).toHaveBeenCalledWith(
      'Weekend Conference - Mar del Plata - Fri 13 Mar 2026 - Sun 15 Mar 2026',
      'Weekend Conference',
    );
  });

  it('gives the member cards the signed photo of Connect2_LegacyShared', () => {
    const { result } = renderFlows();
    expect(result.current.getSignedImageURL).toBe(fetchLegacySignedImageURL);
  });
});
