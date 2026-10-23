import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { DirectoryDetailLayout } from './DirectoryDetailLayout';
import * as stories from './DirectoryDetailLayout.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_DirectoryDetailScreen', () => {
  testCapturedVariants(stories, captures);

  it('HideActions: the call-to-action placeholder gets display-none', () => {
    const { container } = render(<DirectoryDetailLayout hideActions placeholderCallToAction="cta" />);
    expect(container.querySelector('.directory-detail-screen')?.children[1]).toHaveClass('display-none');
  });
});
