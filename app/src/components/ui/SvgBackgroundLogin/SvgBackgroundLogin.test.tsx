import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { SvgBackgroundLogin } from './SvgBackgroundLogin';
import * as stories from './SvgBackgroundLogin.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SVG_Background_LoginWrapper', () => {
  testCapturedVariants(stories, captures);

  it('draws the 90 % / 105 % header and forwards OnPathCalculated', () => {
    const onPath = vi.fn();
    const { container } = render(<SvgBackgroundLogin onOnPathCalculated={onPath} />);
    expect(container.querySelector('path')).toHaveAttribute('d', 'M0,0 H100 V160 Q50,181 0,160 Z');
    expect(onPath).toHaveBeenCalledTimes(1);
  });
});
