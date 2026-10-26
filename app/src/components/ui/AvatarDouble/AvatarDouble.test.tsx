import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AvatarDouble } from './AvatarDouble';
import * as stories from './AvatarDouble.stories';

const { CompiledView } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc.js:171-278). */
describe('AvatarDouble', () => {
  it('renders both avatars at the same size inside the wrapper', () => {
    const { container } = render(<CompiledView />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'ConnectPatterns.AvatarDouble');
    const box = root?.querySelector(':scope > [data-block="BasePatterns.CustomContainer"] > div');
    expect(box?.className).toBe('ubt-custom-container ubt-avatar-double ubt-avatar-image-base inline-block');
    const wrapper = box?.querySelector(':scope > .ubt-avatar-double__wrapper');
    const [first, last] = [...(wrapper?.children ?? [])];
    expect(first).toHaveClass('text-align-left');
    expect(last).toHaveClass('ubt-avatar-double__wrapper__last-avatar');
    expect(first?.querySelector('.ubt-avatar-image__initials')).toHaveTextContent('AB');
    expect(last?.querySelector('.ubt-avatar-image__initials')).toHaveTextContent('CD');
    expect(last?.querySelector('.ubt-avatar-image')).toHaveClass('ubt-avatar-image-base');
  });

  it('keeps the double space of the concatenated class without a size', () => {
    const { container } = render(<AvatarDouble />);
    const box = container.querySelector('.ubt-avatar-double');
    expect(box?.className).toBe('ubt-custom-container ubt-avatar-double  inline-block');
  });
});
