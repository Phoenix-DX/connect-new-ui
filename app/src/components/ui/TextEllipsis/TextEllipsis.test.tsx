import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { TextEllipsis } from './TextEllipsis';
import * as stories from './TextEllipsis.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('TextEllipsis', () => {
  testCapturedVariants(stories, captures);

  it('appends ExtendedClasses', () => {
    const { container } = render(<TextEllipsis text="x" extendedClasses="x-extra" />);
    expect(container.querySelector('span')?.className).toBe('ubt-text-ellipsis text-ellipsis x-extra');
  });
});
