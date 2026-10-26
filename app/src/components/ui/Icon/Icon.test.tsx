import { describe } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './Icon.stories';
import { fireEvent, render } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { Icon } from './Icon';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Icon', () => {
  testCapturedVariants(stories, captures);

  it('raises Click', () => {
    const onClick = vi.fn();
    const { container } = render(<Icon inIconId="connect-icon-home" onClick={onClick} />);
    const icon = container.querySelector('.ubt-icon');
    if (!icon) throw new Error('icon not rendered');
    fireEvent.click(icon);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
