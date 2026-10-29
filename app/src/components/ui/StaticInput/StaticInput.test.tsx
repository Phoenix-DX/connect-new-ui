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
    // Live TST style (Bookmarks Q4 (a), user 2026-10-29): "search-placeholder-ellipsis ubt-static-input " + In_ExtendedClasses.
    expect(input.className).toBe('search-placeholder-ellipsis ubt-static-input x-extra');
    fireEvent.click(input);
    expect(onClickInput).toHaveBeenCalledTimes(1);
  });
});
