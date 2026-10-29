import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmptyListBorderless, EmptyState } from './EmptyState';

const props = { id: 'b3-$b2', iconId: 'notes', title: 'No notes', text: 'Notes you add will show here.' };

describe('EmptyListBorderless (EmptyState borderless preset)', () => {
  it('renders ConnectPatterns.EmptyListBorderless: no border, the primary icon in a cyan-lightest circle', () => {
    const { container } = render(<EmptyListBorderless {...props} />);
    expect(container.firstElementChild?.getAttribute('data-block')).toBe('ConnectPatterns.EmptyListBorderless');
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class="OSBlockWidget" data-block="ConnectPatterns.EmptyListBorderless" id="b3-$b2"><div class="OSBlockWidget" data-block="BasePatterns.CustomContainer"><div class="ubt-custom-container display-flex align-items-center justify-content-center border-radius-large padding-s" style="cursor: pointer;"><div data-container=""><div class="text-align-center ubt-unavailable-image margin-bottom-base" data-container=""><div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton"><div class="ubt-icon-button inline-block ubt-avatar-image-s OSInline" data-container="" style="cursor: pointer;"><div class="OSBlockWidget" data-block="BasePatterns.CustomContainer"><div class="ubt-custom-container ubt-icon-button__icon-container  ubt-skeleton-section__element background-cyan-lightest border-s border-color-cyan-lightest border-radius-circle text-cyan-darker padding-s" style="cursor: pointer;"><div><div class="OSBlockWidget" data-block="ConnectPatterns.Icon"><div class="ubt-icon notes text-primary icon-base" data-container="" style="cursor: pointer;"></div></div></div><div></div></div></div></div></div></div><div class="text-align-center" data-container=""><div data-container=""><div class="font-semi-bold font-size-base text-neutral-9 margin-bottom-xs">No notes</div></div><div data-container=""><div class="font-regular font-size-s text-neutral-10">Notes you add will show here.</div></div></div></div></div></div></div>"`,
    );
  });

  it('is EmptyState with borderless', () => {
    const preset = render(<EmptyListBorderless {...props} />).container.innerHTML;
    const flag = render(<EmptyState {...props} borderless />).container.innerHTML;
    expect(flag).toBe(preset);
  });

  it('keeps ConnectPatterns.EmptyList without borderless', () => {
    const { container } = render(<EmptyState {...props} />);
    expect(container.firstElementChild?.getAttribute('data-block')).toBe('ConnectPatterns.EmptyList');
    expect(container.innerHTML).not.toBe(render(<EmptyListBorderless {...props} />).container.innerHTML);
  });
});
