import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContactUsDetailsHeader, type ContactUsDetailsHeaderProps } from './ContactUsDetailsHeader';

function renderHeader(props: Partial<ContactUsDetailsHeaderProps> = {}) {
  const onSupportTeam = vi.fn();
  const view = render(
    <ContactUsDetailsHeader
      label="Set up a UBT One account"
      description="UBT One lets you access all your UBT applications with a single log in."
      showSupportTeamCall
      onSupportTeam={onSupportTeam}
      {...props}
    />,
  );
  return { ...view, onSupportTeam };
}

describe('ContactUsDetailsHeader', () => {
  it('shows the label and the description of the subject', () => {
    renderHeader();
    expect(screen.getByText('Set up a UBT One account')).toBeInTheDocument();
    expect(screen.getByText(/UBT One lets you access all your UBT applications/)).toBeInTheDocument();
  });

  it('the Support Team link raises onSupportTeam and does not follow its href', () => {
    const { onSupportTeam } = renderHeader();
    expect(screen.getByText(/Prefer to speak with someone\?/)).toBeInTheDocument();
    const link = screen.getByText('Support Team');
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    fireEvent(link, event);
    expect(event.defaultPrevented).toBe(true);
    expect(onSupportTeam).toHaveBeenCalledTimes(1);
  });

  it('has no call link without a country phone or signed out', () => {
    renderHeader({ showSupportTeamCall: false });
    expect(screen.queryByText('Support Team')).toBeNull();
    expect(screen.queryByText(/Prefer to speak with someone\?/)).toBeNull();
  });
});
