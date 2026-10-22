import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import templateV1 from '@/shared/Connect2_OrbitMobile_MUI/Card_Template/__captures__/v1.html?raw';
import templateV2 from '@/shared/Connect2_OrbitMobile_MUI/Card_Template/__captures__/v2.html?raw';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Card_Milestone } from './Card_Milestone';
import * as stories from './Card_Milestone.stories';
import { ACCOMMODATION, FLIGHT, MEAL_HOST, MEETING } from './fixtures';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const template = (container: HTMLElement) => container.querySelector('[data-block="Orbit_Blocks.Card_Template"]');
const infoTexts = (container: HTMLElement) =>
  [...container.querySelectorAll('.orbit-card-content-info')].map((el) => [el.className, el.textContent]);

describe('Card_Milestone', () => {
  testCapturedVariants(stories, captures);

  it('EventDetail accommodation: the nested Card_Template matches Card_Template v1', () => {
    const { container } = render(<Card_Milestone id="b1-l1-142797_2-$b8" inMilestoneSummary={ACCOMMODATION} />);
    expectToMatchCapture(template(container), templateV1);
  });

  it('EventDetail meeting: the nested Card_Template matches Card_Template v2 (time only, "11:59 PM")', () => {
    const { container } = render(<Card_Milestone id="b1-l1-142797_3-$b8" inMilestoneSummary={MEETING} />);
    expectToMatchCapture(template(container), templateV2);
  });

  it('meeting with location and seat: margins follow the next visible rows', () => {
    const milestone = { ...MEETING, MilestoneInfo: { Location: 'Main Hall', Seating: 'Row 4' } };
    const { container } = render(<Card_Milestone inMilestoneSummary={milestone} />);
    expect(infoTexts(container)).toEqual([
      ['orbit-card-content-info margin-bottom-m', 'Main Hall'],
      ['orbit-card-content-info margin-bottom-m', 'Row 4'],
      ['orbit-card-content-info', '11:59 PM'],
    ]);
  });

  it('meal host: host, location, time and View Guests; IsSetUpMeals hides the button', () => {
    const { container, rerender } = render(<Card_Milestone inMilestoneSummary={MEAL_HOST} />);
    expect(infoTexts(container).map(([, t]) => t)).toEqual([
      MEAL_HOST.MilestoneInfo?.MilestoneHost,
      MEAL_HOST.MilestoneInfo?.Location,
      '12:30 PM',
    ]);
    expect(screen.getByText('View Guests')).toHaveStyle({ color: 'var(--orbit-orange-7)' });
    rerender(<Card_Milestone inMilestoneSummary={MEAL_HOST} isSetUpMeals />);
    expect(screen.queryByText('View Guests')).toBeNull();
  });

  it('transport: departure and arrival rows with GetFormattedDateTimeById dates and the type icons', () => {
    const { container } = render(<Card_Milestone inMilestoneSummary={FLIGHT} />);
    const rows = container.querySelectorAll('.orbit-card-content-info');
    expect(rows[0]).toHaveClass('margin-bottom-m');
    expect(rows[0]?.querySelector('i')?.className).toBe('icon orbit-card-content-info-icon orbit-icon-flight-takeoff');
    expect(rows[0]?.querySelector('.bold.margin-bottom-base')?.textContent).toBe('Fri 16 Oct 2026 9:05 AM');
    expect(rows[1]?.textContent).toBe(`Fri 16 Oct 2026 10:40 AMBahia Blanca (BHI)`);
  });

  it('IsOverrideMainColorVar replaces the type colour', () => {
    const { container } = render(<Card_Milestone inMilestoneSummary={MEETING} isOverrideMainColorVar="orange" />);
    expect(container.querySelector('.orbit-card-right-cont')?.getAttribute('style')).toBe(
      'color: var(--orbit-orange-10);',
    );
  });

  it('card click raises ClickedMilestone; View Guests raises it once (the button stops the click)', () => {
    const onClicked = vi.fn();
    const { container } = render(<Card_Milestone inMilestoneSummary={ACCOMMODATION} onClickedMilestone={onClicked} />);
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('View Guests'));
    expect(onClicked).toHaveBeenCalledTimes(2);
    expect(onClicked).toHaveBeenLastCalledWith(ACCOMMODATION);
  });

  it('no MilestoneId: no event; hotel milestone still raises it (MilestoneId compared to the type, as the original)', () => {
    const onClicked = vi.fn();
    const { container, rerender } = render(
      <Card_Milestone inMilestoneSummary={{ ...ACCOMMODATION, MilestoneId: '' }} onClickedMilestone={onClicked} />,
    );
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).not.toHaveBeenCalled();
    const hotel = {
      ...ACCOMMODATION,
      MilestoneId: '8803',
      OrbitMilestoneType: { Id: 'accommodation-hotel', MainColorVar: 'purple' },
    };
    rerender(<Card_Milestone inMilestoneSummary={hotel} onClickedMilestone={onClicked} />);
    expect(container.querySelector('.orbit-icon-hotel')).not.toBeNull();
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('admin and break types render no content on TST (admin identifiers are not in the TST moduleinfo)', () => {
    for (const Id of ['break', 'admin-meeting']) {
      const { container, unmount } = render(
        <Card_Milestone inMilestoneSummary={{ ...MEETING, OrbitMilestoneType: { Id, MainColorVar: 'green' } }} />,
      );
      expect(container.querySelector('.orbit-card-content > div')?.childElementCount).toBe(0);
      unmount();
    }
  });
});
