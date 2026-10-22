import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ASSEMBLE_COUNTRIES } from '@/mocks/fictional/assemble';
import { SUPPER_MEETINGS } from '@/mocks/fictional/directory';
import { mockUserInformation } from '@/platform/session/mockUser';
import { resetNavigation, renderRoutes } from '@/platform/navigation/testRouter';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage } from '@/test/testSupport';
import Assemble_BrowseByCountry from './index';

/* Compiled view and controller: analysis/sources/pretty/Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter
   .mvc.js. The mock user's SubscriptionRegionId is '' until CR-Assemble_BrowseByCountry-1; these tests give it the
   CR's value '1' (as TST's Global account has one, calls.json #4). */
const PATH = '/UBTConnect/Assemble_BrowseByCountry';
const countryNames = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-block="Directory.LocalityListDetail"] .landing-country-list-item')].map(
    (row) => row.querySelector('span')?.textContent,
  );
const title = (container: HTMLElement) => container.querySelector('#b2-ScreenTitle2')?.textContent;

/* Cache_UserInfo_Get (the shell's user-info cache) with the subscription region of the test. */
const region = vi.hoisted(() => ({ id: '1' }));
vi.mock('@/platform/session/userInfo', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/session/userInfo')>();
  return {
    ...actual,
    getUserInformation: () => {
      const info = mockUserInformation();
      info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId = region.id;
      return Promise.resolve(info);
    },
  };
});

function withRegion(regionId: string) {
  region.id = regionId;
}

function renderScreen() {
  return renderRoutes(
    { [PATH]: <Assemble_BrowseByCountry />, '/UBTConnect/AssembleEvents': <div id="assemble-events" /> },
    PATH,
  );
}

describe('Assemble_BrowseByCountry', () => {
  beforeEach(async () => {
    freshPage();
    resetNavigation();
    window.history.replaceState(null, '', `${PATH}?mocksession=unlocked`);
    await applyTestSession();
  });

  it('OnReady: Spinner, then the subscribed countries under "Browse by Country"; the search filters by name', async () => {
    withRegion('1');
    const { container } = renderScreen();
    expect(container.querySelector('[data-block="Reusable.Spinner"]')).not.toBeNull();
    await waitFor(() => {
      expect(countryNames(container)).toEqual(ASSEMBLE_COUNTRIES.map((c) => c.name));
    });
    expect(title(container)).toBe('Browse by Country');
    expect(container.querySelector('#b2-DIV_StickyBottom')).toBeNull();

    const input = container.querySelector<HTMLInputElement>('#b2-Input_SearchTearm');
    if (!input) throw new Error('no search input');
    fireEvent.change(input, { target: { value: ' ZEA' } });
    expect(countryNames(container)).toEqual(['New Zealand']);
    fireEvent.change(input, { target: { value: 'Atlantis' } });
    expect(container.querySelector('#b2-DIV_NoResultsFound')).toHaveTextContent('No results found');
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(countryNames(container)).toHaveLength(ASSEMBLE_COUNTRIES.length);
    });
  });

  it('a country opens its localities; a supper meeting enables Apply, which opens AssembleEvents', async () => {
    withRegion('1');
    const { container, at } = renderScreen();
    await waitFor(() => {
      expect(countryNames(container)).toHaveLength(ASSEMBLE_COUNTRIES.length);
    });
    fireEvent.click(screen.getByText('Argentina'));
    await waitFor(() => {
      expect(title(container)).toBe('Filter by Locality');
    });
    expect(container.querySelector('[data-block="Assemble.Assemble_FilterLocalityByCountry"]')).not.toBeNull();
    const apply = container.querySelector<HTMLButtonElement>('#b2-ButtonApply');
    expect(apply).toBeDisabled();

    fireEvent.click(await screen.findByText('Bahia Blanca'));
    const meeting = SUPPER_MEETINGS[1];
    fireEvent.click(await screen.findByText(meeting.name));
    await waitFor(() => {
      expect(apply).toBeEnabled();
    });
    fireEvent.click(apply as HTMLButtonElement);
    await waitFor(() => {
      expect(at()).toBe(
        `/UBTConnect/AssembleEvents?ShowBackNavigation=True&SubdivisionId=${meeting.id}&IsUserSubdivision=False`,
      );
    });
  });

  it('back while the localities show returns to the country list (PreventNavigation), then leaves', async () => {
    withRegion('1');
    const { container, router, at } = renderRoutes(
      { [PATH]: <Assemble_BrowseByCountry />, '/UBTConnect/HomeFeed': <div id="home" /> },
      '/UBTConnect/HomeFeed',
    );
    await act(() => router.navigate(PATH));
    await waitFor(() => {
      expect(countryNames(container)).toHaveLength(ASSEMBLE_COUNTRIES.length);
    });
    fireEvent.click(screen.getByText('Australia'));
    await waitFor(() => {
      expect(title(container)).toBe('Filter by Locality');
    });
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(title(container)).toBe('Browse by Country');
    });
    expect(at()).toBe(PATH);
    expect(countryNames(container)).toHaveLength(ASSEMBLE_COUNTRIES.length);
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HomeFeed');
    });
  });

  it("an empty SubscriptionRegionId (today's mock user) raises ObjectNotFound: the Spinner stays", async () => {
    withRegion('');
    const { container } = renderScreen();
    await new Promise((r) => setTimeout(r, 50));
    expect(container.querySelector('[data-block="Reusable.Spinner"]')).not.toBeNull();
    expect(container.querySelector('[data-block="Directory.LocalityListDetail"]')).toBeNull();
  });
});
