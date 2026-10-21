import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ShareableObject_Generic } from './ShareableObject_Generic';
import * as stories from './ShareableObject_Generic.stories';

const { CompiledView, TitleOnly } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js:133-398). */
describe('ShareableObject_Generic', () => {
  it('image (medium radius, auto size), title, subtitle and location', () => {
    const { container } = render(<CompiledView />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'CW_Share.ShareableObject_Generic');
    expect(container.querySelector('.shareable-object-generic > [data-block="CW_Image.UBT_LazyImage"]')).not.toBeNull();
    expect(container.querySelector('.ubt-lazy-image')).toHaveClass('border-radius-medium');
    expect(container.querySelector('.text-align-left.margin-top-base')).toHaveStyle({ cursor: 'pointer' });
    expect(screen.getByText('Hargreaves Household')).toBeInTheDocument();
    expect(screen.getByText('Thomas & Sophie Hargreaves')).toBeInTheDocument();
    expect(container.querySelector('.connect-icon-home_pin_fill')).toHaveClass('icon-small', 'text-neutral-7');
  });

  it('no subtitle and no location when they are empty', () => {
    const { container } = render(<TitleOnly />);
    expect(container.querySelectorAll('[data-block="BasePatterns.CustomText"]')).toHaveLength(1);
    expect(container.querySelector('[data-block="ConnectPatterns.IconText"]')).toBeNull();
  });

  it('a click on the text raises Event_OnClick', () => {
    const onEventOnClick = vi.fn();
    const { container } = render(
      <ShareableObject_Generic inShareableObject={{ Title: 'T' }} onEventOnClick={onEventOnClick} />,
    );
    const text = container.querySelector('.text-align-left');
    if (!text) throw new Error('no text container');
    fireEvent.click(text);
    expect(onEventOnClick).toHaveBeenCalledTimes(1);
  });
});
