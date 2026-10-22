import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { SVG_Background_Custom } from './SVG_Background_Custom';
import * as stories from './SVG_Background_Custom.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SVG_Background_Custom', () => {
  testCapturedVariants(stories, captures);

  it('uses In_Path as is, the input defaults otherwise, and adds In_ExtendedClass to the SVG', () => {
    const { container, rerender } = render(<SVG_Background_Custom inPath="M0,0 Z" inExtendedClass="ubt-loading-svg" />);
    expect(container.querySelector('path')).toHaveAttribute('d', 'M0,0 Z');
    expect(container.querySelector('.osui-inline-svg')).toHaveClass('ubt-header-svg', 'ubt-loading-svg');
    rerender(<SVG_Background_Custom />);
    expect(container.querySelector('path')).toHaveAttribute('d', 'M0,0 H100 V180 Q50,200 0,180 Z');
  });

  it('raises OnPathCalculated when the path is set', () => {
    const onPath = vi.fn();
    render(<SVG_Background_Custom onOnPathCalculated={onPath} />);
    expect(onPath).toHaveBeenCalledTimes(1);
  });
});
