import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { clearMemoryCache } from '@/api/client/cache';
import { VITALE } from '@/mocks/fictional/directory';
import Profile from './ProfilePage';

/* Opens "Preview Household Profile" from the Profile page (view :183-262 of Profile_HouseholdPreview and
   OnClick_ViewPreview :3073-3102). Uses the default mock user; no part of the page is replaced. */
function renderScreen() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={['/UBTConnect/Profile']}>
        <Routes>
          <Route path="/UBTConnect/Profile" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe('Profile: Preview Household Profile', () => {
  it('opens the HouseholdDetails container in preview mode from the "Preview Household Profile" link', async () => {
    const { container } = renderScreen();
    const trigger = await waitFor(() => {
      const el = container.querySelector<HTMLElement>('[id$="ViewPreview"]');
      expect(el).not.toBeNull();
      return el as HTMLElement;
    });

    const blocks = () =>
      Array.from(container.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));
    await waitFor(() => {
      expect(blocks()).toContain('App_Profile.Profile_HouseholdPreview');
    });

    fireEvent.click(trigger);

    // The sheet carries the title and the inert household container
    await waitFor(() => {
      expect(screen.getAllByText('Preview Household Profile').length).toBeGreaterThan(1);
    });
    const preview = container.querySelector('[data-block="App_Profile.Profile_HouseholdPreview"]') as HTMLElement;
    expect(preview).not.toBeNull();
    const inert = preview.querySelector('[data-container][inert]');
    expect(inert).not.toBeNull();
    // The preview fetches the household by the user's HouseholderId. The default mock user has no household of its
    // own in the mock, so the mock answers the default household (VITALE, see containers/HouseholdDetails/mocks.ts).
    for (const member of VITALE.members) {
      expect(await within(inert as HTMLElement).findByText(member.first, {}, { timeout: 4000 })).toBeInTheDocument();
      expect(within(inert as HTMLElement).getAllByText(member.born).length).toBeGreaterThan(0);
    }
    const text = inert?.textContent ?? '';
    expect(text).toContain('Household gallery');
    expect(text).toContain('Household members');
  });
});

/* The address section of the householder (App_Profile F1, Profile.mvc.js:1269-1716), scenario `address` of mocks.ts:
   the user information of the householder, the recorded localities and the fictional subdivisions. */
describe('Profile: address of the householder', () => {
  afterEach(() => {
    sessionStorage.clear();
    clearMemoryCache();
  });

  it('shows the address lines, then the Locality and Subdivision dropdowns once both caches answered', async () => {
    clearMemoryCache();
    sessionStorage.setItem('mock:mock', 'address');
    sessionStorage.setItem('mock:latency', '0');
    const { container } = renderScreen();
    const input = await waitFor(
      () => {
        const el = container.querySelector<HTMLInputElement>('#l1-37_0-AddressInput');
        expect(el).not.toBeNull();
        return el as HTMLInputElement;
      },
      { timeout: 4000 },
    );
    expect(input).toHaveValue('120 Las Margaritas');
    expect(screen.getByText('Address Information')).toBeInTheDocument();
    const blocks = () =>
      Array.from(container.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));
    expect(blocks()).toEqual(
      expect.arrayContaining(['CacheControl.CacheControl_AllLocalities', 'CacheControl.CacheControl_AllSubdivisions']),
    );
    // The skeleton of the section ends when both caches answered.
    await waitFor(
      () => {
        expect(container.querySelector('#\\$b29 > div')?.className.trim()).toBe('');
      },
      { timeout: 4000 },
    );
    expect(container.querySelector('#LocalityDropdown .osui-dropdown-search')).not.toBeNull();
    expect(container.querySelector('#SubdivisionDropdown .osui-dropdown-search')).not.toBeNull();
  });
});
