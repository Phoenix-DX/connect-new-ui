import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './SupperMeetingHouseholdList.stories';

/* V1 and V2 have captures; Failed is a state that no capture shows. */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, V2, Failed } = composeStories(stories);

describe('SupperMeeting_HouseholdList', () => {
  testCapturedVariants(capturedStories, captures);

  it('shows four skeleton rows, then the fetched households; a click hands back the id and every id', () => {
    const onClick = vi.fn();
    const { container, rerender } = render(<V1 onEventOnClickHousehold={onClick} />);
    expect(container.querySelectorAll('.ubt-image-card')).toHaveLength(4);
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
    rerender(<V2 onEventOnClickHousehold={onClick} />);
    expect(container.querySelectorAll('.ubt-image-card')).toHaveLength(11);
    const second = container.querySelectorAll('.ubt-image-card')[1];
    if (!second) throw new Error('no second card');
    fireEvent.click(second);
    // the households of supper meeting 1210 in the directory cast (src/mocks/fictional/directory.ts)
    expect(onClick).toHaveBeenCalledWith('91004', [
      '42438',
      '91004',
      '91005',
      '91006',
      '91012',
      '91014',
      '91015',
      '91016',
      '91017',
      '91018',
      '91023',
    ]);
  });

  it('keeps the skeleton rows and marks the list as failed when the data action failed', () => {
    const { container } = render(<Failed />);
    expect(container.querySelector('.list-error')).not.toBeNull();
    expect(container.querySelectorAll('.ubt-image-card')).toHaveLength(4);
  });
});
