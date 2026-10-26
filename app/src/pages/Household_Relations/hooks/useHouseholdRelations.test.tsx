import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchMemberRelations,
  fetchSiblingRelations,
  type HouseholdMember,
  type MemberRelations,
  type SiblingRelations,
} from '@/api/household';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { CommunicationException, ViewHasChangedException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { MOCK_USER_ID, mockUserInformation } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { householdRelationsReducer, MEMBER_DEFAULTS } from './householdRelationsState';
import { useHouseholdRelations, type HouseholdRelationsFlows } from './useHouseholdRelations';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./householdRelationsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./householdRelationsState')>();
  return { ...actual, householdRelationsReducer: vi.fn(actual.householdRelationsReducer) };
});
vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchMemberRelations: vi.fn(),
  fetchSiblingRelations: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), read by useFlowState. */
const viewCache = vi.hoisted(() => ({ restored: false }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => viewCache.restored,
}));

/* The flows of HouseholdRelations_Block, with the calls, the user information, the access check and the navigation
   replaced by spies. Fictional relatives. */
const inputs = { householdId: '6100', memberId: '6101' };
const relative = (patch: Partial<HouseholdMember>): HouseholdMember => ({
  ...MEMBER_DEFAULTS,
  HouseholdId: '6200',
  LocalityName: 'Valdivia',
  CountryName: 'Chile',
  ...patch,
});
const memberRelations: MemberRelations = {
  MemberName: 'Matías Fuentes',
  FamilyName: 'The Fuentes',
  Father: relative({ Id: '6201', Title: 'Óscar Fuentes' }),
  Mother: relative({ Id: '6202', Title: 'Carmen Rojas' }),
  FormerSpouses: [],
  ParentHouseholdId: '6200',
};
const siblingRelations: SiblingRelations = {
  Out_siblingRelations: [relative({ Id: '6203', Title: 'Isabel' }), relative({ Id: '6204', Title: 'Joaquín' })],
};

/** The user information with DisplayAge. */
function userWithDisplayAge(displayAge: boolean) {
  const user = mockUserInformation();
  return {
    ...user,
    Directory_UserCurrent: {
      ...user.Directory_UserCurrent,
      Directory_UserCurrent_Visibility: {
        ...user.Directory_UserCurrent.Directory_UserCurrent_Visibility,
        DisplayAge: displayAge,
      },
    },
  };
}

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

const events = { onRelationsDetailsFetched: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useHouseholdRelations(inputs, events), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: HouseholdRelationsFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useHouseholdRelations(inputs, events);
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
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  setSignedInUser(MOCK_USER_ID);
  vi.mocked(getUserInformation).mockResolvedValue(userWithDisplayAge(true));
  vi.mocked(fetchMemberRelations).mockResolvedValue(memberRelations);
  vi.mocked(fetchSiblingRelations).mockResolvedValue(siblingRelations);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('useHouseholdRelations', () => {
  it('shows the skeleton records before the first answer (OnInitialize)', () => {
    vi.mocked(getUserInformation).mockReturnValue(new Promise(() => undefined));
    const { result } = renderFlows();
    expect(result.current.isMemberDetailsLoading).toBe(true);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.father).toMatchObject({ Title: 'Loading', Id: '-1', HouseholdId: '-1' });
    expect(result.current.mother).toMatchObject({ Title: 'Loading', Id: '-1', HouseholdId: '-1' });
    expect(result.current.siblings).toHaveLength(2);
    expect(result.current.formerSpousesFetchStatus).toBe(DataFetchStatus.Fetching);
  });

  it('loads the member, raises RelationsDetails_Fetched, then loads the siblings and ends the loading', async () => {
    const { result } = renderFlows();
    await settle();
    const sent = {
      HouseholdId: '6100',
      MemberId: '6101',
      UserAge_Visibility: true,
      isLoading: true,
      ShowNotesSheet: false,
    };
    expect(fetchMemberRelations).toHaveBeenCalledTimes(1);
    expect(fetchMemberRelations).toHaveBeenCalledWith(sent);
    expect(fetchSiblingRelations).toHaveBeenCalledTimes(1);
    expect(fetchSiblingRelations).toHaveBeenCalledWith(sent);
    expect(vi.mocked(fetchMemberRelations).mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(events.onRelationsDetailsFetched).mock.invocationCallOrder[0] ?? 0,
    );
    expect(vi.mocked(events.onRelationsDetailsFetched).mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(fetchSiblingRelations).mock.invocationCallOrder[0] ?? 0,
    );
    expect(events.onRelationsDetailsFetched).toHaveBeenCalledWith('The Fuentes');
    expect(result.current).toMatchObject({
      isMemberDetailsLoading: false,
      isLoading: false,
      memberName: 'Matías Fuentes',
      father: memberRelations.Father,
      mother: memberRelations.Mother,
      formerSpouses: [],
      formerSpousesFetchStatus: DataFetchStatus.Fetched,
      siblings: siblingRelations.Out_siblingRelations,
      siblingsFetchStatus: DataFetchStatus.Fetched,
    });
  });

  it('a restored view with the same age visibility fetches nothing', async () => {
    viewCache.restored = true;
    vi.mocked(getUserInformation).mockResolvedValue(userWithDisplayAge(false));
    const { result } = renderFlows();
    await settle();
    expect(getUserInformation).toHaveBeenCalledTimes(1);
    expect(fetchMemberRelations).not.toHaveBeenCalled();
    // No skeleton on a restored view: the saved record (here the defaults) stays.
    expect(result.current.siblings).toEqual([]);
  });

  it('a restored view with another age visibility fetches again', async () => {
    viewCache.restored = true;
    const { result } = renderFlows();
    await settle();
    expect(fetchMemberRelations).toHaveBeenCalledTimes(1);
    expect(fetchSiblingRelations).toHaveBeenCalledTimes(1);
    expect(result.current.isLoading).toBe(false);
  });

  it('a failed Get_MemberDetails sets its status to Error and goes to the flow handler', async () => {
    const error = new CommunicationException('The connection has timed out');
    vi.mocked(fetchMemberRelations).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(result.current.isMemberDetailsLoading).toBe(false);
    expect(result.current.formerSpousesFetchStatus).toBe(DataFetchStatus.Error);
    expect(result.current.isLoading).toBe(true);
    expect(fetchSiblingRelations).not.toHaveBeenCalled();
    expect(events.onRelationsDetailsFetched).not.toHaveBeenCalled();
  });

  it('a ViewHasChangedException keeps the status Fetching', async () => {
    vi.mocked(fetchMemberRelations).mockRejectedValue(new ViewHasChangedException());
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(result.current.isMemberDetailsLoading).toBe(true);
  });

  it('a failed Get_ParentHouseholdDetails sets its status to Error and keeps the loading', async () => {
    vi.mocked(fetchSiblingRelations).mockRejectedValue(new CommunicationException('The connection has timed out'));
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(result.current.siblingsFetchStatus).toBe(DataFetchStatus.Error);
    expect(result.current.memberName).toBe('Matías Fuentes');
    expect(result.current.isLoading).toBe(true);
  });

  it('OnClick_Member opens the household of the relative, or the upgrade popup without access', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickMember(memberRelations.Father);
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('Valdivia', 'Chile');
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HouseholdDetails', { HouseholdId: '6200' });

    vi.mocked(hasAccessToRegion).mockResolvedValueOnce(false);
    act(() => {
      result.current.onClickMember(memberRelations.Mother);
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.onClickMember({ ...memberRelations.Mother, CountryName: '' });
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledTimes(2);
  });

  it('opens and closes the notes sheet and keeps the notes that it changes', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onAddNotes();
    });
    expect(result.current.isNotesSheetOpen).toBe(true);
    act(() => {
      result.current.onNotesChanged({ Total: 2, Note_Item_List: [{ Id: '41' }, { Id: '42' }] });
    });
    act(() => {
      result.current.onNoteDeleted('41');
    });
    expect(result.current.notes).toEqual({ Total: 1, Note_Item_List: [{ Id: '42' }] });
    act(() => {
      result.current.onNotesSheetClosed();
    });
    expect(result.current.isNotesSheetOpen).toBe(false);
  });
});

describe('useHouseholdRelations after an unmount and in StrictMode (decision W23)', () => {
  /* W23: `isAlive` guards the state writes. The next steps of these flows are client actions of the block
     (Action_Refresh_Get_MemberDetails, OnAfterFetch_Get_MemberDetails, Actions_DefineLoading), which OutSystems
     refuses on a disposed block (ensureControllerAlive). So, as in the old port, no call and no event follow an
     unmount; a failure still goes to the flow handler. */
  it('after an unmount during GetUserInformation_Wrapper: no call, no state write', async () => {
    const user = pending<ReturnType<typeof userWithDisplayAge>>();
    vi.mocked(getUserInformation).mockReturnValue(user.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(householdRelationsReducer).mockClear();
    user.resolve(userWithDisplayAge(true));
    await settle();
    expect(fetchMemberRelations).not.toHaveBeenCalled();
    expect(householdRelationsReducer).not.toHaveBeenCalled();
  });

  it('after an unmount during Get_MemberDetails: no event, no sibling call, no state write', async () => {
    const answer = pending<MemberRelations>();
    vi.mocked(fetchMemberRelations).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    expect(fetchMemberRelations).toHaveBeenCalledTimes(1);
    unmount();
    vi.mocked(householdRelationsReducer).mockClear();
    answer.resolve(memberRelations);
    await settle();
    expect(events.onRelationsDetailsFetched).not.toHaveBeenCalled();
    expect(fetchSiblingRelations).not.toHaveBeenCalled();
    expect(householdRelationsReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('after an unmount during Get_MemberDetails, a failure still goes to the flow handler once', async () => {
    const answer = pending<MemberRelations>();
    vi.mocked(fetchMemberRelations).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(householdRelationsReducer).mockClear();
    const error = new CommunicationException('The connection has timed out');
    answer.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(householdRelationsReducer).not.toHaveBeenCalled();
  });

  it('after an unmount during Get_ParentHouseholdDetails: no state write', async () => {
    const answer = pending<SiblingRelations>();
    vi.mocked(fetchSiblingRelations).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    expect(events.onRelationsDetailsFetched).toHaveBeenCalledTimes(1);
    unmount();
    vi.mocked(householdRelationsReducer).mockClear();
    answer.resolve(siblingRelations);
    await settle();
    expect(householdRelationsReducer).not.toHaveBeenCalled();
  });

  it('in StrictMode: one Get_MemberDetails, one Get_ParentHouseholdDetails and one event', async () => {
    const result = renderStrict();
    await settle();
    // StrictMode ran OnReady twice; the first run stops at its liveness check after GetUserInformation_Wrapper.
    expect(getUserInformation).toHaveBeenCalledTimes(2);
    expect(fetchMemberRelations).toHaveBeenCalledTimes(1);
    expect(fetchSiblingRelations).toHaveBeenCalledTimes(1);
    expect(events.onRelationsDetailsFetched).toHaveBeenCalledTimes(1);
    expect(result.current?.isLoading).toBe(false);
    expect(result.current?.siblings).toEqual(siblingRelations.Out_siblingRelations);
  });
});
