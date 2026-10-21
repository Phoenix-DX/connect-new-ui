import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Popup } from './Popup';
import * as stories from './Popup.stories';

const { CompiledView, Closed } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Popup.mvc.js:185-330). */
describe('Popup', () => {
  it('open: popup markup in <body>, top header, title, content in a margin container, footer', () => {
    const { container } = render(<CompiledView />);
    expect(container.querySelector('[data-block="ConnectPatterns.Popup"]')?.childElementCount).toBe(0);
    const dialog = document.body.querySelector('.portal-class > div > .popup-backdrop > [role="dialog"]');
    expect(dialog?.className).toBe('popup-dialog ubt-pop-up popup-dialog');
    const content = dialog?.querySelector(':scope > .popup-content');
    const parts = [...(content?.children ?? [])];
    expect(parts.map((p) => p.className || p.getAttribute('data-block'))).toEqual([
      'text-align-center',
      'ubt-pop-up--title',
      'OSBlockWidget',
      'ubt-pop-up--footer',
    ]);
    expect(parts[0]).toHaveTextContent('Top header');
    expect(parts[1]).toHaveStyle({ textAlign: 'center' });
    expect(parts[1]?.querySelector('[data-block="BasePatterns.CustomText"] .text-neutral-10')).toHaveTextContent(
      'Photo update requested',
    );
    expect(parts[2]?.querySelector('.ubt-custom-container')).toHaveClass('margin-top-base', 'margin-bottom-m');
    expect(parts[2]?.querySelector('.ubt-pop-up--content')).toHaveTextContent(
      'We will let you know when your new photo is ready.',
    );
    expect(parts[3]).toHaveTextContent('Thank you');
  });

  it('closed: nothing rendered; without In_HasTopHeader no top header; ExtendedClasses join the class', () => {
    render(<Closed />);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
    render(<Popup isOpen extendedClasses="x-extra" title="T" topHeader={<span>Top</span>} />);
    expect(document.body.querySelector('.popup-dialog')?.className).toBe(
      'popup-dialog ubt-pop-up x-extra popup-dialog',
    );
    expect(document.body).not.toHaveTextContent('Top');
  });

  it('OnWidgetInitialize on ready; OnClose when the parameters change while closed', () => {
    const onOnWidgetInitialize = vi.fn();
    const onOnClose = vi.fn();
    const { rerender } = render(
      <Popup isOpen onOnWidgetInitialize={onOnWidgetInitialize} onOnClose={onOnClose} title="A" />,
    );
    expect(onOnWidgetInitialize).toHaveBeenCalledTimes(1);
    rerender(<Popup isOpen onOnClose={onOnClose} title="B" />);
    expect(onOnClose).not.toHaveBeenCalled();
    rerender(<Popup isOpen={false} onOnClose={onOnClose} title="B" />);
    expect(onOnClose).toHaveBeenCalledTimes(1);
  });
});
