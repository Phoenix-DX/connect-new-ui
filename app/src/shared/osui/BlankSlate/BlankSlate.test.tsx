import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { BlankSlate } from './BlankSlate';
import * as stories from './BlankSlate.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('BlankSlate', () => {
  testCapturedVariants(stories, captures);

  it('FullHeight False drops `large`; ExtendedClass is appended', () => {
    const { container } = render(<BlankSlate fullHeight={false} extendedClass="extra" />);
    const region = container.querySelector('[role="region"]');
    expect(region).toHaveClass('blank-slate', 'extra');
    expect(region).not.toHaveClass('large');
  });
});
