import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { SvgBackground } from './SvgBackground';
import * as stories from './SvgBackground.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SVG_Background_Custom', () => {
  testCapturedVariants(stories, captures);

  it('uses In_Path as is, the input defaults otherwise, and adds In_ExtendedClass to the SVG', () => {
    const { container, rerender } = render(<SvgBackground inPath="M0,0 Z" inExtendedClass="ubt-loading-svg" />);
    expect(container.querySelector('path')).toHaveAttribute('d', 'M0,0 Z');
    expect(container.querySelector('.osui-inline-svg')).toHaveClass('ubt-header-svg', 'ubt-loading-svg');
    rerender(<SvgBackground />);
    expect(container.querySelector('path')).toHaveAttribute('d', 'M0,0 H100 V180 Q50,200 0,180 Z');
  });

  it('raises OnPathCalculated when the path is set', () => {
    const onPath = vi.fn();
    render(<SvgBackground onOnPathCalculated={onPath} />);
    expect(onPath).toHaveBeenCalledTimes(1);
  });
});
