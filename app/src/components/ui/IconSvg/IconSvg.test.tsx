import { describe } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './IconSvg.stories';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import { IconSvg } from './IconSvg';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('IconSVG', () => {
  testCapturedVariants(stories, captures);

  it('renders no image for an icon it does not know', () => {
    const { container } = render(<IconSvg inIconId="connect-icon-home" />);
    expect(container.querySelector('img')).toBeNull();
  });
});
