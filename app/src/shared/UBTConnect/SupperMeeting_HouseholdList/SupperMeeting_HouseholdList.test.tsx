import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { describe, expect, it, vi } from 'vitest';
import { server } from '../../../test/setup';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './SupperMeeting_HouseholdList.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2 } = composeStories(stories);
const URL = '/api/UBTConnect/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds';

describe('SupperMeeting_HouseholdList', () => {
  testCapturedVariants(stories, captures);

  it('shows four skeleton rows, then the fetched households; a click hands back the id and every id', async () => {
    const onClick = vi.fn();
    const { container } = render(<V2 onEventOnClickHousehold={onClick} />);
    expect(container.querySelectorAll('.ubt-image-card')).toHaveLength(4);
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
    await waitFor(() => {
      expect(container.querySelectorAll('.ubt-image-card')).toHaveLength(11);
    });
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

  it('keeps the skeleton rows and marks the list as failed when the data action fails', async () => {
    server.use(http.post(URL, () => HttpResponse.json({ message: 'down' }, { status: 500 })));
    const { container } = render(<V2 />);
    await waitFor(() => {
      expect(container.querySelector('.list-error')).not.toBeNull();
    });
    expect(container.querySelectorAll('.ubt-image-card')).toHaveLength(4);
  });
});
