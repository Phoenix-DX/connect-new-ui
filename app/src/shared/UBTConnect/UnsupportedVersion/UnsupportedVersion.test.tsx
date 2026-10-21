import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnsupportedVersion } from './UnsupportedVersion';

/** The card's own containers (WelcomeToConnect has one of its own). */
const containers = (root: Element) =>
  [...root.querySelectorAll('.ubt-custom-container')].filter(
    (el) => !el.closest('[data-block="App_Common.WelcomeToConnect"]'),
  );

describe('UnsupportedVersion', () => {
  it('renders the card, the message container and the button container (compiled view)', () => {
    const { container } = render(<UnsupportedVersion inExtendedClass="extra">Message</UnsupportedVersion>);
    const [card, message, button] = containers(container);
    expect(card).toHaveClass('unsupported-card', 'extra');
    expect(card?.querySelector('[data-block="App_Common.WelcomeToConnect"]')).not.toBeNull();
    expect(message).toHaveClass('text-neutral-10', 'font-size-s');
    expect(message).toHaveTextContent('Message');
    expect(button).toHaveClass('display-flex', 'justify-content-center');
    expect(button?.querySelector('[data-block="CW_Common.Button"]')).not.toBeNull();
  });

  it('hides the button with In_HideButton', () => {
    const { container } = render(<UnsupportedVersion inHideButton>Message</UnsupportedVersion>);
    expect(containers(container)).toHaveLength(2);
    expect(container.querySelector('[data-block="CW_Common.Button"]')).toBeNull();
  });
});
