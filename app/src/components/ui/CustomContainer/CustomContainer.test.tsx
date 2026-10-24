import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { CustomContainer } from './CustomContainer';
import * as stories from './CustomContainer.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CustomContainer', () => {
  testCapturedVariants(stories, captures);

  it('raises Clicked', () => {
    const onClicked = vi.fn();
    const { container } = render(<CustomContainer onClicked={onClicked} />);
    const content = container.querySelector('.ubt-custom-container');
    if (!content) throw new Error('content not rendered');
    fireEvent.click(content);
    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('a background image wins over the background opacity (not captured)', () => {
    const { container } = render(
      <CustomContainer
        options={{
          Background: { BackgroundColor: 'neutral-9', Opacity: 0.5, BackgroundImage: { Image: 'none', Size: 'cover' } },
        }}
      />,
    );
    const style = container.querySelector('.ubt-custom-container')?.getAttribute('style') ?? '';
    expect(style).toContain('background-size: cover');
    expect(style).not.toContain('rgba');
  });
});
