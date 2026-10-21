import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { SubLayout_DirectoryDetailScreen } from './SubLayout_DirectoryDetailScreen';
import * as stories from './SubLayout_DirectoryDetailScreen.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_DirectoryDetailScreen', () => {
  testCapturedVariants(stories, captures);

  it('HideActions: the call-to-action placeholder gets display-none', () => {
    const { container } = render(<SubLayout_DirectoryDetailScreen hideActions placeholderCallToAction="cta" />);
    expect(container.querySelector('.directory-detail-screen')?.children[1]).toHaveClass('display-none');
  });
});
