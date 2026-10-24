import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { MilestoneWrapperBody } from '@/pages/MilestoneDetail/hooks/milestoneWrapperState';
import { MilestoneWrapperView, type AccommodationHostSlot } from './MilestoneWrapperView';

/* The view of ScreenBlock_MilestoneWrapper from props. Fictional event. */
const HOST_INPUTS = {
  In_MilestoneId: '5501-1',
  In_EventId: '5501',
  In_HostId: '770001',
  In_PreloadEventName: 'Spring Youth Weekend - Tandil',
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: 'accommodation-host',
};

function setup(body: MilestoneWrapperBody, eventName = 'Spring Youth Weekend - Tandil') {
  const renderAccommodationHost = vi.fn((slot: AccommodationHostSlot) => (
    <div data-testid="host">
      {slot.id}
      {slot.menu}
      {slot.commonUIElements}
    </div>
  ));
  const view = render(
    <MemoryRouter>
      <MilestoneWrapperView
        id="$b1"
        body={body}
        eventName={eventName}
        commonUIElementsAccomodationHost={<span>common UI</span>}
        renderAccommodationHost={renderAccommodationHost}
      />
    </MemoryRouter>,
  );
  return { ...view, renderAccommodationHost };
}

const block = () => document.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper"]');

describe('MilestoneWrapperView', () => {
  it('shows the skeleton of the wrapper', () => {
    setup({ kind: 'skeleton' });
    expect(document.getElementById('b1-$b9')).not.toBeNull();
    expect(block()?.textContent).not.toContain('could not be found');
  });

  it('shows the Failed layout titled with the event name, or "Event not found"', () => {
    const { unmount } = setup({ kind: 'failed' });
    expect(block()?.textContent).toContain('Spring Youth Weekend - Tandil');
    expect(screen.getByText(/This Event could not be found/)).toBeInTheDocument();
    unmount();
    setup({ kind: 'failed' }, '');
    expect(block()?.textContent).toContain('Event not found');
  });

  it('renders the accommodation host block with its id, inputs and placeholders', () => {
    const { renderAccommodationHost } = setup({ kind: 'accommodationHost', inputs: HOST_INPUTS });
    expect(renderAccommodationHost).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'b1-$b5', inputs: HOST_INPUTS }),
    );
    expect(screen.getByTestId('host').textContent).toBe('b1-$b5common UI');
    expect(document.getElementById('b1-Menu_AccomodationHost')).not.toBeNull();
    expect(document.getElementById('b1-CommonUI_Elements_AccomodationHost')?.textContent).toBe('common UI');
  });

  it('marks a block that was not captured, and shows nothing for other types', () => {
    const { unmount } = setup({ kind: 'notCaptured', milestoneTypeId: 'meal-guest' });
    expect(block()?.textContent).toContain('meal-guest');
    unmount();
    setup({ kind: 'none' });
    expect(block()?.textContent).toBe('');
  });
});
