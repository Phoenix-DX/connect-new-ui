import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { ContactPopup_ByMessage } from './ContactPopup_ByMessage';
import * as stories from './ContactPopup_ByMessage.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ContactPopup_ByMessage', () => {
  testCapturedVariants(stories, captures);

  it('one button per Show* flag in Email / WhatsApp / Signal / Call order; click sends the channel Id', () => {
    const onSelected = vi.fn();
    render(
      <ContactPopup_ByMessage
        inContactByMessageData={{
          ContactPopupData: { ShowPopup: true, Name: 'Eleanor Whitfield' },
          ShowEmail: true,
          ShowSignal: true,
          ShowCall: true,
        }}
        onEventSelectedMessageChannel={onSelected}
      />,
    );
    expect(screen.getByText('Message Eleanor Whitfield')).toBeInTheDocument();
    const labels = [
      ...document.body.querySelectorAll(
        '.list .connect-icon-mail_fill, .list .connect-icon-signal, .list .connect-icon-call_fill',
      ),
    ];
    expect(labels).toHaveLength(3);
    expect(screen.queryByText('WhatsApp')).toBeNull();
    fireEvent.click(screen.getByText('Signal'));
    expect(onSelected).toHaveBeenCalledWith('Signal');
  });
});
