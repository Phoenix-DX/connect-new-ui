import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import templateV1 from '@/components/orbit/OrbitCard/__captures__/v1.html?raw';
import templateV2 from '@/components/orbit/OrbitCard/__captures__/v2.html?raw';
import { testCapturedVariants } from '@/test/capturedVariants';
import { MilestoneCard } from './MilestoneCard';
import * as stories from './MilestoneCard.stories';
import { ACCOMMODATION, FLIGHT, MEAL_HOST, MEETING } from './fixtures';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const template = (container: HTMLElement) => container.querySelector('[data-block="Orbit_Blocks.Card_Template"]');
const infoTexts = (container: HTMLElement) =>
  [...container.querySelectorAll('.orbit-card-content-info')].map((el) => [el.className, el.textContent]);

describe('Card_Milestone', () => {
  testCapturedVariants(stories, captures);

  it('EventDetail accommodation: the nested Card_Template matches Card_Template v1', () => {
    const { container } = render(<MilestoneCard id="b1-l1-142797_2-$b8" inMilestoneSummary={ACCOMMODATION} />);
    expectToMatchCapture(template(container), templateV1);
  });

  it('EventDetail meeting: the nested Card_Template matches Card_Template v2 (time only, "11:59 PM")', () => {
    const { container } = render(<MilestoneCard id="b1-l1-142797_3-$b8" inMilestoneSummary={MEETING} />);
    expectToMatchCapture(template(container), templateV2);
  });

  it('meeting with location and seat: margins follow the next visible rows', () => {
    const milestone = { ...MEETING, MilestoneInfo: { Location: 'Main Hall', Seating: 'Row 4' } };
    const { container } = render(<MilestoneCard inMilestoneSummary={milestone} />);
    expect(infoTexts(container)).toEqual([
      ['orbit-card-content-info margin-bottom-m', 'Main Hall'],
      ['orbit-card-content-info margin-bottom-m', 'Row 4'],
      ['orbit-card-content-info', '11:59 PM'],
    ]);
  });

  it('meal host: host, location, time and View Guests; IsSetUpMeals hides the button', () => {
    const { container, rerender } = render(<MilestoneCard inMilestoneSummary={MEAL_HOST} />);
    expect(infoTexts(container).map(([, t]) => t)).toEqual([
      MEAL_HOST.MilestoneInfo?.MilestoneHost,
      MEAL_HOST.MilestoneInfo?.Location,
      '12:30 PM',
    ]);
    expect(screen.getByText('View Guests')).toHaveStyle({ color: 'var(--orbit-orange-7)' });
    rerender(<MilestoneCard inMilestoneSummary={MEAL_HOST} isSetUpMeals />);
    expect(screen.queryByText('View Guests')).toBeNull();
  });

  it('transport: departure and arrival rows with GetFormattedDateTimeById dates and the type icons', () => {
    const { container } = render(<MilestoneCard inMilestoneSummary={FLIGHT} />);
    const rows = container.querySelectorAll('.orbit-card-content-info');
    expect(rows[0]).toHaveClass('margin-bottom-m');
    expect(rows[0]?.querySelector('i')?.className).toBe('icon orbit-card-content-info-icon orbit-icon-flight-takeoff');
    expect(rows[0]?.querySelector('.bold.margin-bottom-base')?.textContent).toBe('Fri 16 Oct 2026 9:05 AM');
    expect(rows[1]?.textContent).toBe(`Fri 16 Oct 2026 10:40 AMBahia Blanca (BHI)`);
  });

  it('IsOverrideMainColorVar replaces the type colour', () => {
    const { container } = render(<MilestoneCard inMilestoneSummary={MEETING} isOverrideMainColorVar="orange" />);
    expect(container.querySelector('.orbit-card-right-cont')?.getAttribute('style')).toBe(
      'color: var(--orbit-orange-10);',
    );
  });

  it('card click raises ClickedMilestone; View Guests raises it once (the button stops the click)', () => {
    const onClicked = vi.fn();
    const { container } = render(<MilestoneCard inMilestoneSummary={ACCOMMODATION} onClickedMilestone={onClicked} />);
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('View Guests'));
    expect(onClicked).toHaveBeenCalledTimes(2);
    expect(onClicked).toHaveBeenLastCalledWith(ACCOMMODATION);
  });

  it('no MilestoneId: no event; hotel milestone still raises it (MilestoneId compared to the type, as the original)', () => {
    const onClicked = vi.fn();
    const { container, rerender } = render(
      <MilestoneCard inMilestoneSummary={{ ...ACCOMMODATION, MilestoneId: '' }} onClickedMilestone={onClicked} />,
    );
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).not.toHaveBeenCalled();
    const hotel = {
      ...ACCOMMODATION,
      MilestoneId: '8803',
      OrbitMilestoneType: { Id: 'accommodation-hotel', MainColorVar: 'purple' },
    };
    rerender(<MilestoneCard inMilestoneSummary={hotel} onClickedMilestone={onClicked} />);
    expect(container.querySelector('.orbit-icon-hotel')).not.toBeNull();
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('break renders no content; an unknown type id is not an admin type', () => {
    for (const Id of ['break', 'admin-meeting']) {
      const { container, unmount } = render(
        <MilestoneCard inMilestoneSummary={{ ...MEETING, OrbitMilestoneType: { Id, MainColorVar: 'green' } }} />,
      );
      expect(container.querySelector('.orbit-card-content > div')?.childElementCount).toBe(0);
      unmount();
    }
  });

  it('admin types (live TST moduleinfo ids) render description, date and times', () => {
    for (const Id of [
      'meeting-admin',
      'meeting-meal',
      'meal-at-hall-admin',
      'accommodation-admin',
      'transport-vehicle-admin',
      'break-admin',
    ]) {
      const milestone = {
        ...MEETING,
        OrbitMilestoneType: { Id, MainColorVar: 'green' },
        MilestoneInfo: {
          Description: 'Room set-up',
          MilestoneStartDateTime: '2026-10-16T09:00:00Z',
          MilestoneEndDateTime: '2026-10-16T10:30:00Z',
        },
      };
      const { container, unmount } = render(<MilestoneCard inMilestoneSummary={milestone} />);
      const rows = [
        ...container.querySelectorAll('.orbit-card-content-info, [class="orbit-card-content-infomargin-top-m"]'),
      ].map((el) => [el.className, el.textContent]);
      expect(rows).toHaveLength(3);
      expect(rows[0]).toEqual(['orbit-card-content-info', 'Room set-up']);
      expect(rows[1]).toEqual(['orbit-card-content-info', '16 Oct 2026']);
      expect(rows[2]?.[0]).toBe('orbit-card-content-infomargin-top-m');
      expect(rows[2]?.[1]).toMatch(/^\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M$/);
      unmount();
    }
  });
});
