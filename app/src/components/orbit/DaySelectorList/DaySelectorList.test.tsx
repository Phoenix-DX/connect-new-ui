import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/test/capturedVariants';
import daySelectorV1 from '@/components/orbit/DaySelector/__captures__/v1.html?raw';
import daySelectorV2 from '@/components/orbit/DaySelector/__captures__/v2.html?raw';
import { DaySelectorList } from './DaySelectorList';
import * as stories from './DaySelectorList.stories';

/* Stories with a capture; the others have their own tests. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, Weekdays } = composeStories(stories);

describe('ListOfDaySelectors', () => {
  testCapturedVariants(capturedStories, captures);

  it('passes IsSelected and the day of month to each DaySelector as captured (EventDetail/default)', () => {
    const { container } = render(<V1 />);
    const days = container.querySelectorAll('[data-block="Orbit_Generic_Blocks.DaySelector"]');
    expectToMatchCapture(days[0] ?? null, daySelectorV1);
    expectToMatchCapture(days[1] ?? null, daySelectorV2);
    expect([...container.querySelectorAll('.event-date-selector-weekday')].map((s) => s.textContent)).toEqual([
      'M',
      'T',
      'W',
    ]);
  });

  it('ShowInWeekday: the weekday letter in the selector, Sunday replaced; no weekday below', () => {
    const { container } = render(<Weekdays />);
    expect([...container.querySelectorAll('.event-date-selector')].map((s) => s.textContent)).toEqual(['S', 'L']);
    expect(container.querySelector('.event-date-selector-weekday')).toBeNull();
  });

  it('raises ClickedDate(DAY, DateGroup, row number) on a day click', () => {
    const onClickedDate = vi.fn();
    const { container } = render(
      <DaySelectorList
        dateList={[{ DateGroup: '2026-11-23', IsSelected: true }, { DateGroup: '2026-11-24' }]}
        onClickedDate={onClickedDate}
      />,
    );
    const second = container.querySelectorAll('.event-date-selector-cont')[1];
    if (second) fireEvent.click(second);
    expect(onClickedDate).toHaveBeenCalledWith('DAY', '2026-11-24', 1);
  });
});
