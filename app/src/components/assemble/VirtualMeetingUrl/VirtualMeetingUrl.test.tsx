import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { MeetingInfoDialogSlot } from './VirtualMeetingUrl';
import * as stories from './VirtualMeetingUrl.stories';

const { WithLink, NoLink } = composeStories(stories);

/* Never captured: the markup follows the compiled view (VirtualMeetingURL.mvc.js :169-382). The dialog itself and
   ConfirmAction are tested with the container (containers/AssembleSummaryCard). */
describe('AssembleCommon_VirtualMeetingURL', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('with a URL: join text, [Tap here] link (target _blank) and the info icon; the dialog slot is in the popup container', () => {
    const { container } = render(<WithLink />);
    const content = container.querySelector('.assemble-summary-row__content-placeholder');
    expect(content?.querySelector('span.display-inline.inline')?.textContent).toBe('Join with Zoom: ');
    expect(content?.querySelector('a[data-link]')).toHaveAttribute('target', '_blank');
    expect(content?.querySelector('a > span.break-word.font-regular')?.textContent).toBe('[Tap here]');
    expect(
      container.querySelector('.assemble-summary-row__icon-placeholder--right .connect-icon-info-fill'),
    ).not.toBeNull();
    expect(
      container.querySelector(
        '.assemble-meeting-info-popup [data-block="ConfirmationDialogs.ActionConfirmationDialog"]',
      ),
    ).toHaveAttribute('id', 'b7-MeetingInfo');
    expect(document.querySelector('[role="dialog"]')).toBeNull();
  });

  it('the MeetingInfo dialog slot gets the dialog id, the meeting details and the dismiss label "Close"', () => {
    const slots: MeetingInfoDialogSlot[] = [];
    const renderMeetingInfoDialog = (slot: MeetingInfoDialogSlot) => {
      slots.push(slot);
      return <div id="dialog-body">{slot.body}</div>;
    };
    const { container } = render(<WithLink renderMeetingInfoDialog={renderMeetingInfoDialog} />);
    expect(slots.at(-1)).toMatchObject({ dialogId: 'b7-MeetingInfo', dismissLabel: 'Close' });
    const body = container.querySelector('.backwards-compatibility.assemble-meeting-info-popup > #dialog-body');
    expect(body?.querySelector('[data-block="Assemble.AssembleCommon_VirtualMeetingDetails"]')).not.toBeNull();
    expect(body?.textContent).toContain('845 2210 6631');
  });

  it('without URL, id or passcode: the unavailable text, no link, no info icon', () => {
    const { container } = render(<NoLink />);
    expect(container.querySelector('span.display-inline')?.textContent).toBe(
      'Link is not available, refer to local signal chat',
    );
    expect(container.querySelector('.assemble-summary-row a')).toBeNull();
  });

  it('MeetingInfo_Toggle: the info icon raises onMeetingInfoToggle with the dialog id', () => {
    const onMeetingInfoToggle = vi.fn();
    const { container } = render(<WithLink onMeetingInfoToggle={onMeetingInfoToggle} />);
    fireEvent.click(container.querySelector('.connect-icon-info-fill') as Element);
    expect(onMeetingInfoToggle).toHaveBeenCalledExactlyOnceWith('b7-MeetingInfo');
  });

  it('LinkVirtualAddressOnClick: Safari opens the link in the same window (IsSelf = IsApple)', () => {
    vi.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    );
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    render(<WithLink />);
    fireEvent.click(screen.getByText('[Tap here]'));
    expect(open).toHaveBeenCalledWith('https://meet.example.com/j/84522106631', '_self');
  });
});
