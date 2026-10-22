import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Statistics_Icons } from './Statistics_Icons';
import * as stories from './Statistics_Icons.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Statistics_Icons', () => {
  testCapturedVariants(stories, captures);

  it('shows the localities count only when SupperMeetings is ""', () => {
    const { container, rerender } = render(<Statistics_Icons uIStatisticsTexts={{ Localities: '7' }} />);
    expect(container.querySelector('.connect-icon-home_pin.text-error')).not.toBeNull();
    expect(container.querySelector('.connect-icon-house_fill')).toBeNull();
    rerender(<Statistics_Icons uIStatisticsTexts={{ Localities: '7', SupperMeetings: '2' }} />);
    expect(container.querySelector('.connect-icon-home_pin')).toBeNull();
    expect(container.querySelector('.connect-icon-house_fill.text-orange')).not.toBeNull();
  });

  it('renders empty texts with the default (empty) record', () => {
    const { container } = render(<Statistics_Icons />);
    expect(container.querySelectorAll('[data-block="ConnectPatterns.IconText"]')).toHaveLength(5);
  });
});
