import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { SubLayout_Section } from './SubLayout_Section';
import * as stories from './SubLayout_Section.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_Section', () => {
  testCapturedVariants(stories, captures);

  it('section classes, margin from MarginTop, Title in margin-bottom-s, Content after it', () => {
    const { container } = render(
      <SubLayout_Section marginTop="base" extendedClasses="extra" title="Title" content={<p>Body</p>} />,
    );
    const box = container.querySelector('.ubt-custom-container');
    expect(box).toHaveClass('ubt-sub-layout-section', 'extra', 'margin-top-base');
    expect(box?.children[0]).toHaveClass('margin-bottom-s');
    expect(box?.children[0]).toHaveTextContent('Title');
    expect(screen.getByText('Body').parentElement).toBe(box?.children[1]);
  });

  it('default MarginTop is ExtraSmall', () => {
    const { container } = render(<SubLayout_Section />);
    expect(container.querySelector('.ubt-custom-container')).toHaveClass('margin-top-xs');
  });
});
