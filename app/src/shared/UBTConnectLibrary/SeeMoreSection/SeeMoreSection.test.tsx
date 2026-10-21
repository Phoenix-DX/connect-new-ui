import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { SeeMoreSection } from './SeeMoreSection';
import * as stories from './SeeMoreSection.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SeeMoreSection', () => {
  testCapturedVariants(stories, captures);
  it('starts expanded by default; the title toggles Hide / See more; disabled title is neutral-7', () => {
    const { container, getByText } = render(<SeeMoreSection isEnabled={false} extendedClasses="x" />);
    expect(container.querySelector('.ubt-see-more-section')).toHaveClass('x', 'expanded');
    expect(getByText('Hide').parentElement).toHaveClass('text-neutral-7');
    fireEvent.click(getByText('Hide'));
    expect(getByText('See more')).toBeInTheDocument();
    expect(container.querySelector('.ubt-see-more-section')).toHaveClass('closed');
  });
});
