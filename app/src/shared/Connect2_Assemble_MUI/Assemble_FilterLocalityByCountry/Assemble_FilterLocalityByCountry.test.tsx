import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { contractHandler } from '../../../mocks/contract';
import { LOCALITY } from '../../../mocks/fictional/directory';
import { mockUserInformation } from '@/platform/session/mockUser';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage } from '@/test/testSupport';
import { server } from '../../../test/setup';
import { Assemble_FilterLocalityByCountry } from './Assemble_FilterLocalityByCountry';

/* Compiled view and controller: migration/blocks/sources/Connect2_Assemble_MUI.Assemble
   .Assemble_FilterLocalityByCountry.mvc.js (view :170-535, controller :539-950); data from the fictional
   Connect2_LegacyShared mocks (lib/mocks.ts). Not captured. */
const localityItems = (container: HTMLElement) => [...container.querySelectorAll('.list-item.assemble-list-filter')];
const names = (container: HTMLElement) => localityItems(container).map((i) => i.textContent);
const chevrons = (container: HTMLElement) =>
  localityItems(container).map((i) => (i.querySelector('.fa-chevron-up') ? 'up' : 'down'));
const ALL = ['Bahia Blanca', 'Monte Hermoso', 'Córdoba', 'Neuquén'];

function renderFilter(props: Partial<Parameters<typeof Assemble_FilterLocalityByCountry>[0]> = {}) {
  return render(
    <Assemble_FilterLocalityByCountry
      id="b6-$b1"
      countryCode={LOCALITY.countryCode}
      countryName={LOCALITY.country}
      {...props}
    />,
  );
}

describe('Assemble_FilterLocalityByCountry', () => {
  beforeEach(async () => {
    freshPage();
    window.history.replaceState(null, '', '/UBTConnect/AssembleEvents?mocksession=unlocked');
    await applyTestSession();
  });

  it('OnReady: user info, then the country localities under "View Localities in <CountryName>"', async () => {
    const { container } = renderFilter();
    expect(container.querySelector('#b6-b1-DIV_Title')).toHaveTextContent('View Localities in Argentina');
    await waitFor(() => {
      expect(names(container)).toEqual(ALL);
    });
    expect(chevrons(container)).toEqual(['down', 'down', 'down', 'down']);
    const input = container.querySelector('#b6-b1-Input_SearchTerm');
    expect(input).toHaveAttribute('placeholder', 'Search Locality');
    expect(input).toHaveAttribute('maxlength', '50');
    const actions = (window.__osCalls ?? []).map((c) => c.action);
    expect(actions.indexOf('ActionGetUserInformation')).toBeLessThan(
      actions.indexOf('ActionGetUserLocalitiesForCountryCodeWithGPS'),
    );
  });

  it('search: diacritics and case ignored; "No results found"; "" lists the country again', async () => {
    const { container } = renderFilter();
    await waitFor(() => {
      expect(names(container)).toEqual(ALL);
    });
    const input = container.querySelector('#b6-b1-Input_SearchTerm') as HTMLInputElement;
    fireEvent.change(input, { target: { value: ' CORDOBA ' } });
    expect(names(container)).toEqual(['Córdoba']);
    fireEvent.change(input, { target: { value: 'zz' } });
    expect(screen.getByText('No results found')).toHaveAttribute('id', 'b6-b1-DIV_NoResultsFound');
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(names(container)).toEqual(ALL);
    });
  });

  it('a click opens the locality (chevron-up, its supper meetings) and raises SelectedSubdivision; again closes', async () => {
    const onSelectedSubdivision = vi.fn();
    const { container } = renderFilter({ onSelectedSubdivision });
    await waitFor(() => {
      expect(names(container)).toEqual(ALL);
    });
    fireEvent.click(screen.getByText('Bahia Blanca'));
    await screen.findByText('Patagonia');
    expect(chevrons(container)).toEqual(['up', 'down', 'down', 'down']);
    // ported 1:1: raises the SelectedSubdivisionId kept so far (NullIdentifier on the first opening)
    expect(onSelectedSubdivision).toHaveBeenLastCalledWith('0');
    fireEvent.click(screen.getByText('Patagonia'));
    expect(onSelectedSubdivision).toHaveBeenLastCalledWith('9202');
    fireEvent.click(screen.getByText('Bahia Blanca'));
    await waitFor(() => {
      expect(screen.queryByText('Patagonia')).toBeNull();
    });
    expect(chevrons(container)).toEqual(['down', 'down', 'down', 'down']);
  });

  it('no access to the locality (Free plan, another locality): FreeSubscriptionAlert, nothing opens', async () => {
    server.use(
      contractHandler('UBTConnect_Utils', 'ActionGetUserInformation', () => {
        const info = mockUserInformation();
        info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = 'Free';
        return { UserInformation: info };
      }),
    );
    const onFreeSubscriptionAlert = vi.fn();
    const onSelectedSubdivision = vi.fn();
    const { container } = renderFilter({ onFreeSubscriptionAlert, onSelectedSubdivision });
    await waitFor(() => {
      expect(names(container)).toEqual(ALL);
    });
    fireEvent.click(screen.getByText('Córdoba'));
    await waitFor(() => {
      expect(onFreeSubscriptionAlert).toHaveBeenCalledTimes(1);
    });
    expect(onSelectedSubdivision).not.toHaveBeenCalled();
    expect(chevrons(container)).toEqual(['down', 'down', 'down', 'down']);
  });
});
