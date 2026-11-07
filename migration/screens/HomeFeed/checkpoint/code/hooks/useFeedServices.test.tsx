import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ServiceItem } from '@/api/service';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { useFeedServices, type FeedServicesFlags } from './useFeedServices';

/* The flows of FeedBlock_Services, inside a router on HomeFeed, with the MSW mocks: the recorded TST answer of
   GetServices (six favourites, the El Gusto link and the store packages). ConfirmAction is replaced by a spy, because
   the dialog is not rendered here (the page test opens it). */
const spy = vi.hoisted(() => ({ confirmAction: vi.fn<(dialogId: string) => Promise<boolean>>() }));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  confirmAction: spy.confirmAction,
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>{children}</MemoryRouter>
  </QueryClientProvider>
);

async function setup(flags: FeedServicesFlags = { hasNewLDM: true }) {
  const view = renderHook(
    () => ({ flow: useFeedServices({ itemPerPage: 6, forceAddService: false }, flags), at: useLocation() }),
    { wrapper },
  );
  await waitFor(() => {
    expect(view.result.current.flow.isLoading).toBe(false);
  });
  return view;
}
const serviceItem = (id: string): ServiceItem => ({ id, iconId: '', name: id, order: 1 });

beforeEach(() => {
  freshPage();
  resetFeedbackMessages();
  spy.confirmAction.mockReset().mockResolvedValue(true);
});
afterEach(() => {
  sessionStorage.clear();
});

describe('FeedBlock_Services flows (useFeedServices)', () => {
  it('shows the skeleton page until GetServices answers, then the pages of the services', async () => {
    const bodies = recordBodies('UBTConnect/FeedBlock_Services/DataActionGetServices');
    const { result } = renderHook(
      () => useFeedServices({ itemPerPage: 6, forceAddService: false }, { hasNewLDM: true }),
      {
        wrapper,
      },
    );
    expect(result.current.isLoading).toBe(true);
    expect(result.current.hasData).toBe(false);
    expect(result.current.pages[0]?.serviceItems).toHaveLength(5);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    expect(result.current.hasData).toBe(true);
    expect(result.current.pages.map((p) => p.serviceItems.map((s) => s.name))).toEqual([
      ['Orbit', "Lord's Day Meal", 'Assemble', 'Trove', 'My Entertaining', 'My Notes'],
    ]);
    expect(calledActions()).toEqual(['FeedBlock_Services/DataActionGetServices']);
    expect(bodies[0]).toEqual(
      expect.objectContaining({ MainElementClass: 'ubt-services-carousel', ExternalAppPopUp_Id: '', ItemPerPage: 6 }),
    );
  });

  it('a failed GetServices keeps the skeleton page', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { result } = renderHook(
      () => useFeedServices({ itemPerPage: 6, forceAddService: false }, { hasNewLDM: true }),
      {
        wrapper,
      },
    );
    await waitFor(() => {
      expect(calledActions()).toEqual(['FeedBlock_Services/DataActionGetServices']);
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.isLoading).toBe(true);
    expect(result.current.hasData).toBe(false);
  });

  it.each([
    ['Orbit', '/UBTConnect/OrbitLanding'],
    ['LDM', '/UBTConnect/LDM_MyEvents_V2'],
    ['MyCalendar', '/UBTConnect/MyEntertaining'],
    ['Assemble', '/UBTConnect/AssembleEvents'],
    ['OrbitAdmin', '/UBTConnect/OrbitAdminLanding'],
    ['MyNotes', '/UBTConnect/Notes'],
  ])('OnClick_Service %s opens %s', async (id, path) => {
    const { result } = await setup();
    act(() => {
      result.current.flow.onClickService(serviceItem(id));
    });
    expect(result.current.at.pathname).toBe(path);
  });

  it('LDM does nothing when GetHasNewLDM is off (the other branch is not built)', async () => {
    const { result } = await setup({ hasNewLDM: false });
    act(() => {
      result.current.flow.onClickService(serviceItem('LDM'));
    });
    expect(result.current.at.pathname).toBe('/UBTConnect/HomeFeed');
  });

  it('the settings button opens Services', async () => {
    const { result } = await setup();
    act(() => {
      result.current.flow.onClickServiceSettings();
    });
    expect(result.current.at.pathname).toBe('/UBTConnect/Services');
  });

  it('an external app sets the dialog app and asks the dialog that raised OnPopUpReady', async () => {
    const { result } = await setup();
    act(() => {
      result.current.flow.onPopUpReady('b5-b12-PopUp');
    });
    await act(async () => {
      result.current.flow.onClickService(serviceItem('Trove'));
      await Promise.resolve();
    });
    expect(result.current.flow.externalAppPopUpInfo).toEqual({
      appName: 'Trove',
      packageName: 'com.ubtconnectglobal.ubtm.TroveMobile',
      iconId: 'connect-icon-trove',
    });
    expect(spy.confirmAction).toHaveBeenCalledExactlyOnceWith('b5-b12-PopUp');
    await act(async () => {
      result.current.flow.onClickService(serviceItem('HR100'));
      await Promise.resolve();
    });
    expect(result.current.flow.externalAppPopUpInfo).toEqual({
      appName: 'HR100',
      packageName: 'com.ubtconnectglobal.ubtm.HR100Mobile',
      iconId: 'SVG_HR100',
    });
    await act(async () => {
      result.current.flow.onClickService(serviceItem('CommunityTradelink'));
      await Promise.resolve();
    });
    expect(result.current.flow.externalAppPopUpInfo).toEqual({
      appName: 'Community Tradelink',
      packageName: 'xyz.appmaker.bufeqe',
      iconId: 'SVG_CommunityTradelink',
    });
  });

  it('the confirm of the dialog opens the app; in the browser, the "Not available" message of OpenInApp_OpenApp', async () => {
    const { result } = await setup();
    await act(async () => {
      result.current.flow.onClickService(serviceItem('Trove'));
      await Promise.resolve();
    });
    act(() => {
      result.current.flow.onGoToExternalApp();
    });
    expect(getFeedbackMessage()?.message).toContain('Sorry, this app is not available in the platform you are using');
  });

  it('the confirm without a store package shows "Not available" of the dialog', async () => {
    const { result } = await setup();
    act(() => {
      result.current.flow.onGoToExternalApp();
    });
    expect(getFeedbackMessage()?.message).toContain('Sorry, this is not available in the platform you are using');
  });

  it('El Gusto opens its link in a new tab; OneSchoolGlobal shows "Coming soon"; another id does nothing', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { result } = await setup();
    act(() => {
      result.current.flow.onClickService(serviceItem('ElGusto'));
    });
    expect(open).toHaveBeenCalledExactlyOnceWith('https://elgustoglobal.com/', '_blank', 'noopener');
    act(() => {
      result.current.flow.onClickService(serviceItem('OneSchoolGlobal'));
    });
    expect(getFeedbackMessage()?.message).toContain('This feature will be coming soon.');
    resetFeedbackMessages();
    act(() => {
      result.current.flow.onClickService(serviceItem('Atlas'));
    });
    expect(getFeedbackMessage()).toBeNull();
    expect(result.current.at.pathname).toBe('/UBTConnect/HomeFeed');
    expect(spy.confirmAction).not.toHaveBeenCalled();
  });
});
