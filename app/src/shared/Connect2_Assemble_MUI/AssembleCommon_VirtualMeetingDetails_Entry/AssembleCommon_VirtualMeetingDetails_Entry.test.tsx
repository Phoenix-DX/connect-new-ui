import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import * as stories from './AssembleCommon_VirtualMeetingDetails_Entry.stories';

const { MeetingLink, Passcode } = composeStories(stories);

/* Never captured: the markup follows the compiled view (Entry.mvc.js :155-276). */
describe('AssembleCommon_VirtualMeetingDetails_Entry', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('IsURL: label, copy icon and the value as a link', () => {
    const { container } = render(<MeetingLink />);
    const root = container.querySelector(
      '[data-block="Assemble.AssembleCommon_VirtualMeetingDetails_Entry"] > .margin-bottom-base',
    );
    expect(root?.querySelector('[data-block="Utility.LabelWithCopyIcon"] .font-semi-bold')?.textContent).toBe(
      'Meeting Link',
    );
    expect(root?.querySelector('i')).toHaveClass(
      'icon',
      'connect-icon-copy',
      'font-size-h5',
      'text-neutral-6',
      'fa-2x',
    );
    const span = root?.querySelector('a[data-link] > span.font-regular');
    expect(span?.textContent).toBe('https://meet.example.com/j/84522106631');
    expect(span).toHaveAttribute('target', '_blank');
  });

  it('IsURL False: the value as text', () => {
    const { container } = render(<Passcode />);
    expect(container.querySelector('a')).toBeNull();
    expect(container.querySelector('span.text-neutral-7')?.textContent).toBe('Hall2026');
  });

  it('LinkVirtualAddressOnClick opens the link in a new window (IsSelf = IsApple, False outside Safari)', () => {
    vi.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.70 Mobile Safari/537.36',
    );
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { container } = render(<MeetingLink />);
    fireEvent.click(container.querySelector('a[data-link]') as Element);
    expect(open).toHaveBeenCalledWith('https://meet.example.com/j/84522106631', '_blank');
  });
});
