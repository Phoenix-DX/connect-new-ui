import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { StatisticsIcons } from './StatisticsIcons';
import * as stories from './StatisticsIcons.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Statistics_Icons', () => {
  testCapturedVariants(stories, captures);

  it('shows the localities count only when SupperMeetings is ""', () => {
    const { container, rerender } = render(<StatisticsIcons uIStatisticsTexts={{ Localities: '7' }} />);
    expect(container.querySelector('.connect-icon-home_pin.text-error')).not.toBeNull();
    expect(container.querySelector('.connect-icon-house_fill')).toBeNull();
    rerender(<StatisticsIcons uIStatisticsTexts={{ Localities: '7', SupperMeetings: '2' }} />);
    expect(container.querySelector('.connect-icon-home_pin')).toBeNull();
    expect(container.querySelector('.connect-icon-house_fill.text-orange')).not.toBeNull();
  });

  it('renders empty texts with the default (empty) record', () => {
    const { container } = render(<StatisticsIcons />);
    expect(container.querySelectorAll('[data-block="ConnectPatterns.IconText"]')).toHaveLength(5);
  });
});
