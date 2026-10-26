import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { FixedFooter } from './FixedFooter';
import * as stories from './FixedFooter.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('FixedFooter', () => {
  testCapturedVariants(stories, captures);

  it('sets the footer height and class on the content container (ContactByEmailMember dom), and the bottom bar', () => {
    const height = 'calc(2 * var(--space-base) + var(--ubt-button-height-m))';
    const { container } = render(
      <>
        <div id="content" className="content" />
        <FixedFooter useBottomBar expectedFooterHeight={height} contentContainerId="content" />
      </>,
    );
    const content = container.querySelector('#content');
    expect(content).toHaveClass('content', 'ubt-fixed-footer--content');
    expect(content).toHaveStyle({ '--ubt-fixed-footer---footer-height': height });
    expect(container.querySelector('.ubt-fixed-footer')).not.toHaveClass('ubt-fixed-footer--no-bottom-bar');
  });
});
