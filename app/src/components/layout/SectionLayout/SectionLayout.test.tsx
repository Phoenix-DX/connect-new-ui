import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { SectionLayout } from './SectionLayout';
import * as stories from './SectionLayout.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_Section', () => {
  testCapturedVariants(stories, captures);

  it('section classes, margin from MarginTop, Title in margin-bottom-s, Content after it', () => {
    const { container } = render(
      <SectionLayout marginTop="base" extendedClasses="extra" title="Title" content={<p>Body</p>} />,
    );
    const box = container.querySelector('.ubt-custom-container');
    expect(box).toHaveClass('ubt-sub-layout-section', 'extra', 'margin-top-base');
    expect(box?.children[0]).toHaveClass('margin-bottom-s');
    expect(box?.children[0]).toHaveTextContent('Title');
    expect(screen.getByText('Body').parentElement).toBe(box?.children[1]);
  });

  it('default MarginTop is ExtraSmall', () => {
    const { container } = render(<SectionLayout />);
    expect(container.querySelector('.ubt-custom-container')).toHaveClass('margin-top-xs');
  });
});
