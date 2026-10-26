import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LOCALITY_HOUSEHOLDS, ORTIZ } from '@/mocks/fictional/directory';
import { setFlag } from '@/platform/flags/flags';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { diffAgainstCapture } from '@/test/dom';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './HouseholdDetailsContainer.stories';

const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));
/* HasAccessToRegion reads the signed-in user's subscription (shell getUserInformation): stubbed here. */
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(() => Promise.resolve(true)),
}));

/* V1, V2 (wrappers) and V4 (loading) are compared on the first render; V3 and V5 once the data actions answered. */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2, V4: stories.V4 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, V3, V5 } = composeStories(stories);

const rootOf = (container: HTMLElement) => {
  const root = container.firstElementChild;
  if (!root) throw new Error('nothing rendered');
  return root;
};
const matches = async (root: Element, capture: string) => {
  await waitFor(
    () => {
      expect(diffAgainstCapture(root, captures[capture] ?? '')).toEqual([]);
    },
    { timeout: 4000 },
  );
};
const tag = (name: string) => screen.getByText(name, { selector: 'span' });

afterEach(() => {
  setFlag('mobilePhotobook', null);
});

describe('HouseholdDetails_Block', () => {
  testCapturedVariants(capturedStories, captures);

  it('V3 matches __captures__/v3.html (HouseholdDetails/default, fetched, bookmarked)', async () => {
    await V3.load();
    const { container } = render(<V3 />);
    await matches(rootOf(container), './__captures__/v3.html');
  });

  it('V5 matches __captures__/v5.html (Profile/default, fetched, disabled, kebab menu)', async () => {
    const { container } = render(<V5 />);
    await matches(rootOf(container), './__captures__/v5.html');
  });

  it('gives each member with call-to-actions its Directory_EntityDetailsActions (collapsed in the captures)', async () => {
    const { container } = render(<V5 />);
    const members = () =>
      container.querySelector('[data-block="Directory_Household_Blocks.HouseholdDetails_Members_Block"]');
    await waitFor(
      () => {
        const actions = members()?.querySelectorAll(
          '[data-block="Directory_CommonBlocks.Directory_EntityDetailsActions"]',
        );
        expect(actions).toHaveLength(3);
      },
      { timeout: 4000 },
    );
  });

  it('raises HouseholdDataFetched(LocalityName, CountryName, deceased or ancestry) after GetHousehold', async () => {
    const onHouseholdDataFetched = vi.fn();
    render(<V5 onHouseholdDataFetched={onHouseholdDataFetched} />);
    await waitFor(() => {
      expect(onHouseholdDataFetched).toHaveBeenCalledWith('San Marcos', 'United States', false);
    });
  });

  it('Photos tag: gallery title, timeline and Coming soon, Photobook link, members hidden (not captured)', async () => {
    const { container } = render(<V5 isEnabled />);
    await waitFor(() => expect(tag('Photos')).toBeInTheDocument());
    fireEvent.click(tag('Photos'));
    await waitFor(() => expect(screen.getByText('Household gallery')).toBeInTheDocument());
    expect(container.querySelector('[data-block="ConnectPatterns.ComingSoon"]')).not.toBeNull();
    expect(
      container.querySelector('[data-block="Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List"]'),
    ).not.toBeNull();
    expect(screen.getAllByText('Photobook').length).toBeGreaterThan(0);
    expect(container.querySelector('.householdAddress')).toBeNull();
    const members = container.querySelector('[data-block="Directory_Household_Blocks.HouseholdDetails_Members_Block"]');
    expect(members?.parentElement?.className).toBe('hidden');
  });

  it('Photos tag without photobook access hides the call-to-action section (Action_SetHideActionsPhotobook)', async () => {
    setFlag('mobilePhotobook', 'off');
    render(<V5 isEnabled />);
    await waitFor(() => expect(tag('Photos')).toBeInTheDocument());
    expect(screen.getByText('Actions')).toBeInTheDocument();
    fireEvent.click(tag('Photos'));
    await waitFor(() => {
      expect(screen.queryByText('Photobook')).toBeNull();
    });
    expect(screen.queryByText('Actions')).toBeNull();
  });
});

describe('HouseholdDetails_Block navigation', () => {
  it('OnClick_NavigateToLocality: Locality_Details with the label and id', async () => {
    navigate.mockClear();
    render(<V5 isEnabled />);
    fireEvent.click(await screen.findByText('San Marcos'));
    expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/Locality_Details$/), {
      PreloadedLocalityLabel: 'San Marcos',
      LocalityId: '501',
    });
    fireEvent.click(screen.getByText('Kyle'));
    expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/SupperMeeting_Details$/), {
      In_SubdivsionId: '9301',
    });
  });

  it('Handler_OnClickPhotobook: Photobook with the household and its locality', async () => {
    navigate.mockClear();
    render(<V5 isEnabled />);
    await waitFor(() => expect(tag('Photos')).toBeInTheDocument());
    await screen.findByText('San Marcos');
    fireEvent.click(tag('Photos'));
    const links = await screen.findAllByText('Photobook');
    const link = links.at(-1);
    if (!link) throw new Error('no Photobook link');
    fireEvent.click(link);
    expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/Photobook$/), {
      In_HouseholdId: '9002',
      In_LocalityId: '501',
    });
  });

  it('raises Event_NonMemberOnClick for a married child in a region the user can access (not captured)', async () => {
    navigate.mockClear();
    const withMarriedChild = LOCALITY_HOUSEHOLDS[1]?.id ?? '';
    render(<V1 source={{ kind: 'server', householdId: withMarriedChild }} />);
    fireEvent.click(await screen.findByText('Ana', {}, { timeout: 4000 }));
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/HouseholdDetails$/), { HouseholdId: ORTIZ.id });
    });
    expect(hasAccessToRegion).toHaveBeenCalledWith(ORTIZ.localityName, ORTIZ.countryName);
  });
});
