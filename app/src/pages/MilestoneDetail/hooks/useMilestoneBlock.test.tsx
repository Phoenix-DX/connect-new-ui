import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  EMPTY_HOST_INFORMATION,
  EMPTY_MILESTONE_BLOCK_DATA,
  fetchMilestoneBlock,
  fetchMilestoneBlockCaptions,
  type MilestoneBlockKind,
  type MilestoneBlockResult,
} from '@/api/event/milestoneBlocks';
import { fetchLegacySignedImageURL } from '@/api/image';
import { UserException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useWasRestoredFromCache } from '@/platform/navigation/hooks';
import { enterView, resetViewCache, saveView } from '@/platform/navigation/viewCache';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/lib/legacyShared/actions';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import type { MilestoneBlockInputs } from './milestoneBlockState';
import { useMilestoneBlock, type MilestoneBlockEvents } from './useMilestoneBlock';

vi.mock('@/api/event/milestoneBlocks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event/milestoneBlocks')>()),
  fetchMilestoneBlock: vi.fn(),
  fetchMilestoneBlockCaptions: vi.fn(),
}));
vi.mock('@/api/image', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/image')>()),
  fetchLegacySignedImageURL: vi.fn(),
}));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableMemberContactList: vi.fn(),
  getCacheableTimezoneInfo: vi.fn(),
}));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: vi.fn(() => false),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the five milestone blocks (ScreenBlock_MealGuest, …) with the calls and the flow handler replaced by
   spies. Fictional event, host and guests. The TST line of each behaviour is in useMilestoneBlock.ts. */
const INPUTS: MilestoneBlockInputs = {
  In_MilestoneId: '5501-7',
  In_EventId: '5501',
  In_HostId: '770021',
  In_PreloadEventName: 'Spring Youth Weekend - Tandil',
  In_PreloadMilestoneName: 'Saturday Lunch',
  In_OrbitMilestoneTypeId: 'meal-guest',
};
const DATE = '2026-11-14T12:30:00Z';
const HOST = {
  ...EMPTY_HOST_INFORMATION,
  HouseholdName: 'Ricardo & Lucía',
  HouseholdSurname: 'Fernández',
  HouseholderId: '880301',
  LocalityId: '613',
  LocalityName: 'Azul',
  CountryName: 'Argentina',
  Email: 'fernandez.family@example.com',
  MobilePhone: '+54 9 2281 55 4410',
  Phone: '+54 9 2281 55 4410',
};
const RESULT: MilestoneBlockResult = {
  hasData: true,
  data: {
    ...EMPTY_MILESTONE_BLOCK_DATA,
    MilestoneTitle: 'Saturday Lunch',
    MilestoneDateTime: DATE,
    EventDetails: { Id: '5501', Name: 'Spring Youth Weekend', Location: 'Tandil Hall', StartDate: '', EndDate: '' },
    HostInformation: HOST,
    Meals: true,
  },
};
const CAPTION =
  '<div>Ricardo &amp; Lucía FERNÁNDEZ<br /><nobr><strong>Tomás</strong><sup>14</sup></nobr><br />Azul</div>';
const TIMEZONE = {
  TimezoneLabel: 'Argentina Time',
  OffsetSeconds: '-10800',
  TimezoneAbreviation: 'ART',
  CountryName: 'Argentina',
};

const events = (): MilestoneBlockEvents => ({
  onNavigateToHouseholdDetail: vi.fn(),
  onNavigateToContactHelpdesk: vi.fn(),
  onNavigateToContactByEmail: vi.fn(),
  onNavigateToGuestArrangements: vi.fn(),
});
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
let entryKey = '';
function renderFlows(kind: MilestoneBlockKind = 'mealGuest', handlers: MilestoneBlockEvents = events()) {
  const view = renderHook(
    () => {
      entryKey = useLocation().key;
      return useMilestoneBlock(kind, INPUTS, handlers);
    },
    { wrapper },
  );
  return { ...view, handlers };
}
const settle = () => act(() => Promise.resolve());
const flush = async () => {
  for (let i = 0; i < 8; i++) await settle();
};

beforeEach(() => {
  resetViewCache();
  vi.mocked(fetchMilestoneBlock).mockResolvedValue(RESULT);
  vi.mocked(fetchMilestoneBlockCaptions).mockResolvedValue({ Success: true, PhotobookCaption: CAPTION });
  vi.mocked(fetchLegacySignedImageURL).mockResolvedValue('https://images.example.org/household-880301.jpg');
  vi.mocked(getCacheableTimezoneInfo).mockResolvedValue(TIMEZONE);
  vi.mocked(getCacheableMemberContactList).mockResolvedValue([]);
});
afterEach(() => {
  vi.clearAllMocks();
  vi.mocked(useWasRestoredFromCache).mockReturnValue(false);
});

describe('useMilestoneBlock: OnReady', () => {
  it('MealGuest: RefreshData, then RefreshCaptionsData; HouseholdCaptions = ExtractChildrenNamesFromCaptions', async () => {
    const { result } = renderFlows('mealGuest');
    expect(result.current.isFetchingData).toBe(true);
    expect(fetchMilestoneBlock).toHaveBeenCalledWith('mealGuest', {
      IsFetchingData: true,
      IsFetchingCaptionData: false,
      HouseholdCaptions: '',
      ...INPUTS,
    });
    await flush();
    expect(fetchMilestoneBlockCaptions).toHaveBeenCalledWith(
      'mealGuest',
      expect.objectContaining({ IsFetchingData: false, IsFetchingCaptionData: true }),
    );
    expect(result.current).toEqual(
      expect.objectContaining({
        isFetchingData: false,
        isDataFetched: true,
        hasData: true,
        isFetchingCaptionData: false,
        householdCaptions: '<nobr><strong>Tomás</strong><sup>14</sup></nobr>',
        data: RESULT.data,
      }),
    );
  });

  it('MealHost: no captions, and its data action sends no caption variables', async () => {
    const { result } = renderFlows('mealHost');
    await flush();
    expect(fetchMilestoneBlock).toHaveBeenCalledWith('mealHost', {
      IsFetchingData: true,
      ...INPUTS,
    });
    expect(fetchMilestoneBlockCaptions).not.toHaveBeenCalled();
    expect(result.current.isFetchingCaptionData).toBe(false);
  });

  it('starts with HasData False in the meal blocks and True in the accommodation blocks (model defaults)', () => {
    vi.mocked(fetchMilestoneBlock).mockReturnValue(new Promise(() => undefined));
    expect(renderFlows('mealHelper').result.current.hasData).toBe(false);
    expect(renderFlows('accommodationHelper').result.current.hasData).toBe(true);
  });

  it('keeps the old captions with Success False, and ends IsFetchingCaptionData on UnknownError', async () => {
    vi.mocked(fetchMilestoneBlockCaptions).mockResolvedValue({ Success: false, PhotobookCaption: '' });
    const first = renderFlows('accommodationGuest');
    await flush();
    expect(first.result.current.householdCaptions).toBe('');
    expect(first.result.current.isFetchingCaptionData).toBe(false);
    vi.mocked(fetchMilestoneBlockCaptions).mockRejectedValue(
      new UserException('No caption', 'Connect2_OrbitMobile_MUI.UnknownError'),
    );
    const second = renderFlows('accommodationGuest');
    await flush();
    expect(second.result.current.isFetchingCaptionData).toBe(false);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('sends another failure of GetCaptions to the flow handler', async () => {
    const failure = new Error('network');
    vi.mocked(fetchMilestoneBlockCaptions).mockRejectedValue(failure);
    const { result } = renderFlows('mealHelper');
    await flush();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
    expect(result.current.isFetchingCaptionData).toBe(true);
  });

  it('a restored view with its data makes no call (W34) and closes both popups (OnInitialize)', async () => {
    const first = renderFlows('mealGuest');
    await flush();
    act(() => {
      first.result.current.onClickedHostPhone(HOST.Phone);
    });
    await flush();
    expect(first.result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(true);
    saveView(entryKey, undefined);
    first.unmount();
    enterView(entryKey, true, undefined);
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    const { result } = renderFlows('mealGuest');
    expect(result.current.isDataFetched).toBe(true);
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
    await flush();
    expect(fetchMilestoneBlock).toHaveBeenCalledTimes(1);
  });

  it('a restored MealHost keeps its popup (it has no OnInitialize)', async () => {
    const first = renderFlows('mealHost');
    await flush();
    act(() => {
      first.result.current.onClickedMemberPhone('+54 9 336 455 1020', 'Martín Herrera', '611', '880101', '');
    });
    await flush();
    saveView(entryKey, undefined);
    first.unmount();
    enterView(entryKey, true, undefined);
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    const { result } = renderFlows('mealHost');
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(true);
  });

  it('a restored view without its data fetches again (W34, reads only)', async () => {
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    const { result } = renderFlows('accommodationHelper');
    await waitFor(() => {
      expect(result.current.isDataFetched).toBe(true);
    });
    expect(fetchMilestoneBlock).toHaveBeenCalledTimes(1);
  });
});

describe('useMilestoneBlock: events', () => {
  it('BuildCallDataHost: the host name, phone and country, the timezone, then the household photo', async () => {
    const { result } = renderFlows('mealGuest');
    await flush();
    act(() => {
      result.current.onClickedHostPhone('');
    });
    expect(getCacheableTimezoneInfo).not.toHaveBeenCalled();
    act(() => {
      result.current.onClickedHostPhone(HOST.Phone);
    });
    await flush();
    expect(getCacheableTimezoneInfo).toHaveBeenCalledWith('613');
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('880301', 'Household', 'Medium');
    expect(result.current.contactByPhoneData.Phone).toBe(HOST.Phone);
    expect(result.current.contactByPhoneData.ContactPopupData).toEqual(
      expect.objectContaining({
        Name: 'Ricardo & Lucía Fernández',
        Locality: 'Argentina',
        CountryName: 'Argentina',
        ShowPopup: true,
        IsFetchingTimezone: false,
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        ImageURL: 'https://images.example.org/household-880301.jpg',
      }),
    );
  });

  it('BuildCallDataMember of the accommodation blocks does not sign the photo of a member with a contact', async () => {
    vi.mocked(getCacheableMemberContactList).mockResolvedValue([
      {
        LocalityName: 'San Nicolás',
        MobilePhoneNumber: '+54 9 336 455 1020',
        HomePhoneNumber: '',
        WorkPhoneNumber: '',
        CountryName: 'Argentina',
        Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
      } as never,
    ]);
    const guest = renderFlows('accommodationGuest');
    await flush();
    act(() => {
      guest.result.current.onClickedMemberPhone('+54 9 336 455 1020', 'Martín Herrera', '611', '880101', '');
    });
    await flush();
    expect(fetchLegacySignedImageURL).not.toHaveBeenCalledWith('880101', 'Member', 'Small');
    const meal = renderFlows('mealHelper');
    await flush();
    act(() => {
      meal.result.current.onClickedMemberPhone('+54 9 336 455 1020', 'Martín Herrera', '611', '880101', '');
    });
    await flush();
    expect(fetchLegacySignedImageURL).toHaveBeenCalledWith('880101', 'Member', 'Small');
  });

  it('OnHandle_ContactHostByMessage fills the message popup; ClickedEmail closes it and raises NavigateTo_ContactByEmail', async () => {
    const { result, handlers } = renderFlows('mealGuest');
    await flush();
    act(() => {
      result.current.onContactHostByMessage();
    });
    await flush();
    expect(result.current.contactByMessageData.Phone).toBe(HOST.MobilePhone);
    expect(result.current.contactByMessageData.Email).toBe(HOST.Email);
    expect(result.current.contactByMessageData.ContactPopupData).toEqual(
      expect.objectContaining({
        Name: 'Ricardo & Lucía Fernández',
        Locality: 'Azul',
        CountryName: 'Argentina',
        ShowPopup: true,
        IsLoading: false,
        IsFetchingTimezone: false,
        TimezoneName: 'ART',
        ImageURL: 'https://images.example.org/household-880301.jpg',
      }),
    );
    act(() => {
      result.current.onContactHostByMessageClickedEmail();
    });
    expect(result.current.contactByMessageData.ContactPopupData?.ShowPopup).toBe(false);
    expect(handlers.onNavigateToContactByEmail).toHaveBeenCalledWith(
      'https://images.example.org/household-880301.jpg',
      'Ricardo & Lucía Fernández',
      'Fernández',
      'Azul',
      'Argentina',
      HOST.Email,
      `Spring Youth Weekend - Tandil - Saturday Lunch - Tandil Hall - ${getFormattedDateTimeById('meal-guest', DATE)}`,
      'Saturday Lunch',
      getFormattedDateTimeById('meal-guest', DATE),
    );
  });

  it('the accommodation blocks do not set IsFetchingTimezone in the message popup', async () => {
    const { result } = renderFlows('accommodationHelper');
    await flush();
    act(() => {
      result.current.onContactHostByMessage();
    });
    await flush();
    expect(result.current.contactByMessageData.ContactPopupData?.IsFetchingTimezone).toBeUndefined();
  });

  it('NavigateTo_ContactHelpdesk: the preloaded milestone name, and the preloaded event name in MealHost', async () => {
    const guest = renderFlows('mealGuest');
    await flush();
    guest.result.current.onContactHelpdesk();
    expect(guest.handlers.onNavigateToContactHelpdesk).toHaveBeenCalledWith(expect.any(String), 'Saturday Lunch');
    const host = renderFlows('mealHost');
    await flush();
    host.result.current.onContactHelpdesk();
    expect(host.handlers.onNavigateToContactHelpdesk).toHaveBeenCalledWith(
      expect.any(String),
      'Spring Youth Weekend - Tandil',
    );
  });

  it('NavigateTo_GuestArrangements only for a guest with arrangements', async () => {
    const { result, handlers } = renderFlows('accommodationHelper');
    await flush();
    result.current.onClickGuestArrangements('880102', false);
    expect(handlers.onNavigateToGuestArrangements).not.toHaveBeenCalled();
    result.current.onClickGuestArrangements('880102', true);
    expect(handlers.onNavigateToGuestArrangements).toHaveBeenCalledWith(
      '880102',
      'meal-guest',
      'Saturday Lunch',
      '770021',
    );
  });

  it('closes the call popup on call', async () => {
    const { result } = renderFlows('mealHost');
    await flush();
    act(() => {
      result.current.onClickedMemberPhone('+54 9 336 455 1020', 'Martín Herrera', '611', '880101', '');
    });
    await flush();
    act(() => {
      result.current.onCallClicked('+54 9 336 455 1020');
    });
    expect(result.current.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(false);
  });
});
