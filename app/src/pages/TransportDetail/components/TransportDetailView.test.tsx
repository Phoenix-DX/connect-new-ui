import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { TransportDetails } from '@/api/event';
import { EMPTY_TRANSPORT_DETAILS } from '@/pages/TransportDetail/hooks/transportDetailState';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { TransportDetailView, type TransportDetailViewProps } from './TransportDetailView';

/* The props-only view of ScreenBlock_TransportDetail. Fictional transport: the Saturday pick-up in Rosario. */
const pickUp: TransportDetails = {
  MilestoneType: {
    ...EMPTY_TRANSPORT_DETAILS.MilestoneType,
    Id: OrbitMilestoneType.Vehicle,
    IsTransportMilestone: true,
    MainIcon: 'orbit-icon-transportation-vehicle',
  },
  TransportDetail: {
    ...EMPTY_TRANSPORT_DETAILS.TransportDetail,
    Title: 'Pick-up from the bus terminal',
    TransportType: 'Minibus',
    TravelInfo: { ...EMPTY_TRANSPORT_DETAILS.TransportDetail.TravelInfo, DriverName: 'Tomás Herrera' },
  },
};
const props: TransportDetailViewProps = {
  id: '$b1',
  headerClass: 'orbit-transport-detail-vehicle',
  title: 'Pick-up to the hall',
  isFetchingData: false,
  isDataFetched: false,
  transportDetail: EMPTY_TRANSPORT_DETAILS,
  skeletonLoadingId: OrbitSkeletonLoading.TransportDetail,
  onContactHelpdesk: () => undefined,
};
const renderView = (patch: Partial<TransportDetailViewProps> = {}) =>
  render(
    <MemoryRouter>
      <TransportDetailView {...props} {...patch} />
    </MemoryRouter>,
  );

const skeleton = (c: HTMLElement) => c.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]');
const transport = (c: HTMLElement) => c.querySelector('[data-block="Orbit_Blocks.TransportDetail"]');

describe('TransportDetailView', () => {
  it('shows the title and the header class of the input, and the skeleton while fetching', () => {
    const { container } = renderView({ isFetchingData: true });
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_TransportDetail"]')?.id).toBe('$b1');
    expect(container.querySelector('.header-title')?.textContent).toBe('Pick-up to the hall');
    expect(container.querySelector('header')?.className).toContain(
      'orbit-detail orbit-header-center orbit-transport-detail orbit-transport-detail-vehicle',
    );
    expect(skeleton(container)?.id).toBe('b1-$b4');
    expect(transport(container)).toBeNull();
  });

  it('shows the transport once fetched', () => {
    const { container } = renderView({ isDataFetched: true, transportDetail: pickUp });
    expect(skeleton(container)).toBeNull();
    expect(transport(container)?.id).toBe('b1-$b3');
    expect(container.textContent).toContain('Minibus');
    expect(container.textContent).toContain('Tomás Herrera');
  });

  it('shows no content before the fetch starts, and always the helpdesk footer', () => {
    const onContactHelpdesk = vi.fn();
    const { container } = renderView({ onContactHelpdesk });
    expect(skeleton(container)).toBeNull();
    expect(transport(container)).toBeNull();
    const footer = container.querySelector('.contact-helpdesk-footer') as HTMLElement;
    expect(footer.textContent).toBe('Contact Orbit Helpdesk');
    fireEvent.click(footer);
    expect(onContactHelpdesk).toHaveBeenCalledTimes(1);
  });
});
