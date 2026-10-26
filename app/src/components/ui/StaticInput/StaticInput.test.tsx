import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { StaticInput } from './StaticInput';
import * as stories from './StaticInput.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('StaticInput', () => {
  testCapturedVariants(stories, captures);

  it('appends In_ExtendedClasses and raises Click_Input', () => {
    const onClickInput = vi.fn();
    const { container } = render(<StaticInput inExtendedClasses="x-extra" onClickInput={onClickInput} />);
    const input = container.querySelector('.ubt-static-input');
    if (!input) throw new Error('input not rendered');
    expect(input).toHaveClass('x-extra');
    fireEvent.click(input);
    expect(onClickInput).toHaveBeenCalledTimes(1);
  });
});
