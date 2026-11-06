import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { GuestArrangementsData, MilestoneTransportItem } from '@/api/event';
import { getFormattedDateTime } from '@/lib/orbit/actions';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { EMPTY_GUEST_ARRANGEMENTS_DATA } from '@/pages/GuestArrangements/hooks/guestArrangementsState';
import { GuestArrangementsView, type GuestArrangementsViewProps } from './GuestArrangementsView';

/* The view with fictional arrangements: the Ortega family visits Rosario by train and leaves by car. */
const transport = (patch: Partial<MilestoneTransportItem['MilestoneTransport']>): MilestoneTransportItem => ({
  MilestoneTransport: {
    Title: 'Train from Córdoba',
    Type: 'Train',
    TravelIdentifier: 'TR 412',
    Notes: '',
    SequenceNo: 1,
    MilestoneInfo: {
      DepartureLocation: 'Córdoba Mitre station',
      ArrivalLocation: 'Rosario Norte station',
      MilestoneStartDateTime: '2026-11-05T22:00:00Z',
      MilestoneEndDateTime: '2026-11-06T07:15:00Z',
    },
    ...patch,
  },
  OrbitMilestoneType: {
    IconTransportArrival: 'orbit-icon-transportation-train-arrival',
    IconTransportDeparture: 'orbit-icon-transportation-train-departure',
  },
});
const data: GuestArrangementsData = {
  ...EMPTY_GUEST_ARRANGEMENTS_DATA,
  MemberId: '770104',
  Title: 'Mr',
  FirstName: 'Tomás',
  LastName: 'Ortega',
  SpecialNeeds: [
    {
      HouseholderId: '770101',
      MemberId: '770102',
      LocalityId: '310',
      Title: 'Mrs',
      FirstName: 'Inés',
      LastName: 'Ortega',
      SignedPhotoURL: '',
      SpecialNeeds: [
        { Category: 'Dietary', Type: 'Vegetarian', Notes: 'No fish either.' },
        { Category: 'Mobility', Type: '', Notes: 'Needs a room near the stairs.' },
        { Category: 'Allergy', Type: 'Pollen', Notes: '' },
      ],
    },
  ],
  ArrivalDetails: [transport({ Notes: 'Gabriel meets them at the platform.' })],
  MealDetails: [
    { MilestoneDateTime: '2026-11-06T12:30:00Z', MiddayMeal: 'Lunch at the hall', EveningMeal: 'Dinner at home' },
    { MilestoneDateTime: '', MiddayMeal: '', EveningMeal: 'Farewell supper' },
  ],
  DepartureDetails: [
    transport({
      Title: 'Car to Córdoba',
      TravelIdentifier: '',
      MilestoneInfo: {
        DepartureLocation: 'Rosario, Santa Fe',
        ArrivalLocation: 'Córdoba',
        MilestoneStartDateTime: '2026-11-08T19:00:00Z',
        MilestoneEndDateTime: '',
      },
    }),
  ],
};

function renderView(patch: Partial<GuestArrangementsViewProps> = {}) {
  const props: GuestArrangementsViewProps = {
    id: '$b1',
    preloadEventName: 'Rosario Spring Conference',
    preloadMilestoneName: 'Hosting the Ortegas',
    orbitMilestoneTypeId: 'accommodation-host',
    skeletonLoadingId: OrbitSkeletonLoading.MilestoneDetailHost,
    isFetchingData: false,
    isDataFetched: true,
    hasData: true,
    guestArrangements: data,
    getSignedImageURL: vi.fn(() => Promise.resolve('')),
    onClickedMember: vi.fn(),
    onContactHelpdesk: vi.fn(),
    ...patch,
  };
  const view = render(
    <MemoryRouter>
      <GuestArrangementsView {...props} />
    </MemoryRouter>,
  );
  return { ...view, props };
}

const sectionTitles = (container: HTMLElement) =>
  [...container.querySelectorAll('.section-expandable-title')].map((t) => t.textContent);
const footer = (container: HTMLElement) =>
  container.querySelector('[data-block="Orbit_Blocks.ContactHelpdesk_Footer"]');

describe('GuestArrangementsView', () => {
  it('shows the skeleton of the milestone type while fetching, without footer', () => {
    const { container } = renderView({ isFetchingData: true, isDataFetched: false, hasData: false });
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_GuestArrangements"]')?.id).toBe('$b1');
    expect(container.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')?.id).toBe('b1-$b14');
    expect(sectionTitles(container)).toEqual([]);
    expect(footer(container)).toBeNull();
    expect(container.textContent).toContain('Rosario Spring Conference');
    expect(container.textContent).toContain('Hosting the Ortegas');
  });

  it('shows no content before the first fetch', () => {
    const { container } = renderView({ isDataFetched: false, hasData: false });
    expect(container.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')).toBeNull();
    expect(container.querySelector('[data-block="Orbit_Generic_Blocks.NoInformation_Orbit"]')).toBeNull();
    expect(container.querySelector('.content-middle')?.textContent).toBe('');
  });

  it('shows the no-information message without data', () => {
    const { container } = renderView({ hasData: false, guestArrangements: EMPTY_GUEST_ARRANGEMENTS_DATA });
    expect(container.querySelector('[data-block="Orbit_Generic_Blocks.NoInformation_Orbit"]')?.id).toBe('b1-$b13');
    expect(container.textContent).toContain('No guest arrangement data has been found.');
    expect(footer(container)).toBeNull();
  });

  it('shows the name and one section per list that is not empty', () => {
    const { container } = renderView();
    expect(container.textContent).toContain('Mr Tomás Ortega');
    expect(sectionTitles(container)).toEqual([
      'Special Need/s',
      'Arrival Details',
      'Meal Details',
      'Departure Details',
    ]);
    const { container: some } = renderView({ guestArrangements: { ...data, SpecialNeeds: [], MealDetails: [] } });
    expect(sectionTitles(some)).toEqual(['Arrival Details', 'Departure Details']);
  });

  it('lists the special needs of a member: "Type: Notes", the notes alone, or the type alone', () => {
    const { container } = renderView();
    const card = container.querySelector('[data-block="Orbit_Blocks.Card_MemberInformation"]');
    expect(card?.id).toBe('b1-l2_0-$b6');
    const needs = [...(card?.querySelectorAll('.orbit-member-list [data-expression]') ?? [])].map((n) => n.textContent);
    expect(needs).toEqual(['Vegetarian: No fish either.', 'Needs a room near the stairs.', 'Pollen']);
    expect(card?.textContent).toContain('Inés');
  });

  it('shows the arrival date (the end), the travel identifier, the arrival place and the notes', () => {
    const { container } = renderView();
    const arrival = container.querySelector('#b1-b8-Content')?.textContent ?? '';
    expect(arrival).toContain(getFormattedDateTime('2026-11-06T07:15:00Z', true, true, false, true, true, false));
    expect(arrival).toContain('TR 412');
    expect(arrival).toContain('Rosario Norte station');
    expect(arrival).toContain('Gabriel meets them at the platform.');
    expect(container.querySelector('#b1-b8-Content .orbit-icon-transportation-train-arrival')).not.toBeNull();
  });

  it('departure: no date row without an end date, "Not available" without a travel identifier', () => {
    const { container } = renderView();
    const departure = container.querySelector('#b1-b12-Content')?.textContent ?? '';
    expect(departure).toBe('Not availableRosario, Santa Fe');
    expect(container.querySelector('#b1-b12-Content .orbit-icon-date-time')).toBeNull();
    expect(container.querySelector('#b1-b12-Content .orbit-icon-transportation-train-departure')).not.toBeNull();
  });

  it('departure: the date row shows the start when the end is set (as compiled)', () => {
    const [first] = data.DepartureDetails;
    if (!first) throw new Error('no departure');
    const info = { ...first.MilestoneTransport.MilestoneInfo, MilestoneEndDateTime: '2026-11-09T02:00:00Z' };
    const { container } = renderView({
      guestArrangements: {
        ...data,
        DepartureDetails: [{ ...first, MilestoneTransport: { ...first.MilestoneTransport, MilestoneInfo: info } }],
      },
    });
    const departure = container.querySelector('#b1-b12-Content')?.textContent ?? '';
    expect(departure).toBe(
      `${getFormattedDateTime('2026-11-08T19:00:00Z', true, true, false, true, true, false)}Not availableRosario, Santa Fe`,
    );
  });

  it('shows the meals per day: the date when set, the midday and the evening meal', () => {
    const { container } = renderView();
    const rows = [...container.querySelectorAll('#b1-b10-Content .list > div')];
    expect(rows).toHaveLength(2);
    expect(rows[0]?.textContent).toBe(
      `${getFormattedDateTime('2026-11-06T12:30:00Z', false, true, false, false, true, false)}Midday Meal: Lunch at the hallEvening Meal: Dinner at home`,
    );
    expect(rows[1]?.textContent).toBe('Midday Meal: Evening Meal: Farewell supper');
    expect(rows[0]?.className).toContain('padding-top-m');
    expect(rows[0]?.className).toContain('border-bottom-neutral-4');
    expect(rows[1]?.className).toContain('padding-bottom-m');
  });

  it('raises ClickedMember with the householder and ContactHelpdesk from the footer', async () => {
    const { container, props } = renderView();
    await act(async () => {
      (container.querySelector('.member-info-img-cont') as HTMLElement).click();
      await Promise.resolve();
    });
    expect(props.onClickedMember).toHaveBeenCalledWith('770101');
    act(() => {
      (container.querySelector('.contact-helpdesk-footer') as HTMLElement).click();
    });
    expect(props.onContactHelpdesk).toHaveBeenCalledTimes(1);
    expect(footer(container)?.id).toBe('b1-$b15');
  });

  it('asks the member cards for their photo through getSignedImageURL', async () => {
    const { props } = renderView();
    await act(() => Promise.resolve());
    expect(props.getSignedImageURL).toHaveBeenCalled();
  });
});
