import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { changeWindowLocation } from '../../UBTJavaScriptUtils/lib/actions';
import { testCapturedVariants } from '../../test/capturedVariants';
import { ContactByMessage_Wrapper } from './ContactByMessage_Wrapper';
import * as stories from './ContactByMessage_Wrapper.stories';

vi.mock('../../UBTJavaScriptUtils/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../../UBTJavaScriptUtils/lib/actions')>()),
  changeWindowLocation: vi.fn(),
}));

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ContactByMessage_Wrapper', () => {
  testCapturedVariants(stories, captures);

  it('Email → Event_Email then Event_MessageChannel; no WhatsApp / Signal without the app launcher', () => {
    const onEventEmail = vi.fn();
    const onChannel = vi.fn();
    render(
      <ContactByMessage_Wrapper
        inContactPopupData={{
          Email: 'matias.vitale@example.com',
          Phone: '+54 291 555 0100',
          ContactPopupData: { ShowPopup: true },
        }}
        onEventEmail={onEventEmail}
        onEventMessageChannel={onChannel}
      />,
    );
    expect(screen.queryByText('WhatsApp')).toBeNull();
    expect(screen.queryByText('Signal')).toBeNull();
    fireEvent.click(screen.getByText('Email'));
    expect(onEventEmail).toHaveBeenCalledTimes(1);
    expect(onChannel).toHaveBeenCalledWith('Email');
  });

  it('IsComboEmailAndPhone: Call → Event_Call and tel: + Phone', () => {
    const onEventCall = vi.fn();
    render(
      <ContactByMessage_Wrapper
        inContactPopupData={{
          Phone: '+54 291 555 0109',
          IsComboEmailAndPhone: true,
          ContactPopupData: { ShowPopup: true },
        }}
        onEventCall={onEventCall}
      />,
    );
    fireEvent.click(screen.getByText('Call'));
    expect(onEventCall).toHaveBeenCalledTimes(1);
    expect(changeWindowLocation).toHaveBeenCalledWith('tel:+54 291 555 0109');
  });
});
