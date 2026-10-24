import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { changeWindowLocation } from '@/lib/jsUtils';
import { testCapturedVariants } from '@/test/capturedVariants';
import { ContactPopupByPhone } from './ContactPopupByPhone';
import * as stories from './ContactPopupByPhone.stories';

vi.mock('@/lib/jsUtils', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/jsUtils')>()),
  changeWindowLocation: vi.fn(),
}));

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ContactPopup_ByPhone', () => {
  testCapturedVariants(stories, captures);

  it('Phone set: one generic "Call" button; title "Call <Name>"; click raises Event_Call then goes to tel:', () => {
    const onEventCall = vi.fn();
    render(
      <ContactPopupByPhone
        inCallPopupData={{
          ContactPopupData: { ShowPopup: true, Name: 'Samuel Prescott' },
          Phone: '+54 291 555 0100',
          MobilePhone: '+54 291 555 0101',
        }}
        onEventCall={onEventCall}
      />,
    );
    expect(screen.getByText('Call Samuel Prescott')).toBeInTheDocument();
    expect(screen.queryByText('Mobile')).toBeNull();
    fireEvent.click(screen.getByText('Call'));
    expect(onEventCall).toHaveBeenCalledWith('+54 291 555 0100');
    expect(changeWindowLocation).toHaveBeenCalledWith('tel:+54 291 555 0100');
  });

  it('no Phone: Mobile / Home / Work buttons for the non-empty numbers, with their icons', () => {
    const onEventCall = vi.fn();
    render(
      <ContactPopupByPhone
        inCallPopupData={{
          ContactPopupData: { ShowPopup: true, ActionName: 'Ring' },
          MobilePhone: '+54 291 555 0101',
          WorkPhone: '+54 291 555 0104',
        }}
        onEventCall={onEventCall}
      />,
    );
    expect(screen.getByText('Ring')).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeNull();
    expect(document.body.querySelector('.connect-icon-enterprise')).not.toBeNull();
    fireEvent.click(screen.getByText('Work'));
    expect(onEventCall).toHaveBeenCalledWith('+54 291 555 0104');
  });
});
