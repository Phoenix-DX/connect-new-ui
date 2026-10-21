import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './AssembleCommon_VirtualMeetingDetails.stories';

const { AllDetails, LinkOnly } = composeStories(stories);

const labels = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-block="Utility.LabelWithCopyIcon"] .font-semi-bold')].map((l) => l.textContent);

/* Never captured: the markup follows the compiled view (VirtualMeetingDetails.mvc.js :155-289). */
describe('AssembleCommon_VirtualMeetingDetails', () => {
  it('one entry per non-empty value, in the order link, id, passcode, inside NewConnectContent', () => {
    const { container } = render(<AllDetails />);
    const content = container.querySelector(
      '[data-block="Reusable.NewConnectContent"] > .ignore-backwards-compatibility-content',
    );
    expect([...(content?.children ?? [])].map((c) => c.className)).toEqual(['break-word', '', '']);
    expect(labels(container)).toEqual(['Meeting Link', 'Meeting Id', 'Passcode']);
  });

  it('empty values hide their container', () => {
    const { container } = render(<LinkOnly />);
    expect(labels(container)).toEqual(['Meeting Link']);
  });
});
