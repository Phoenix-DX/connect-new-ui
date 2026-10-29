import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ComingSoon_V2 } from './ComingSoon_V2';

/* Never captured (the Locality Contacts tag of Locality_Details is not a capture state): the markup follows the
   compiled view (live TST of 2026-10-27, UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc.js, View.internalRender). */
describe('ComingSoon_V2', () => {
  it('renders the comingsoon-card container with the block id', () => {
    const { container } = render(<ComingSoon_V2 id="b23-$b1" />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'ConnectPatterns.ComingSoon_V2');
    expect(root).toHaveAttribute('id', 'b23-$b1');
    expect(root?.children).toHaveLength(1);
    expect(root?.firstElementChild).toHaveClass('comingsoon-card', { exact: true });
    expect(root?.firstElementChild).toHaveAttribute('data-container', '');
  });

  it('shows CircleButton_IconPrimary (calendar_fill, neutral-0 on cyan-dark, no label), then "Coming Soon"', () => {
    const { container } = render(<ComingSoon_V2 />);
    const card = container.querySelector('.comingsoon-card');
    expect([...(card?.children ?? [])].map((c) => c.getAttribute('data-block'))).toEqual([
      'ConnectPatterns.CircleButton_IconPrimary',
      'BasePatterns.CustomText',
    ]);
    const button = card?.firstElementChild;
    expect(button?.querySelector('.connect-icon-calendar_fill')).toHaveClass('text-neutral-0');
    expect(button?.querySelector('.background-cyan-dark')).not.toBeNull();
    expect(button?.textContent).toBe('');
    const text = card?.lastElementChild?.firstElementChild;
    expect(text).toHaveClass('text-neutral-9', 'font-semi-bold', 'font-size-base', 'padding-top-base');
    expect(text?.textContent).toBe('Coming Soon');
  });
});
