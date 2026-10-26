import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProfileFooter, type ProfileFooterProps } from './ProfileFooter';

function renderFooter(props: Partial<ProfileFooterProps> = {}) {
  const onClose = vi.fn();
  const onSave = vi.fn();
  render(
    <ProfileFooter
      contentContainerId="b1-ContentWrapper"
      isLoadingSubmit={false}
      hasChanges
      onClose={onClose}
      onSave={onSave}
      {...props}
    />,
  );
  const button = (text: string) => screen.getByText(text).closest('button') as HTMLButtonElement;
  return { onClose, onSave, button };
}

describe('ProfileFooter', () => {
  it('Close and Save raise their events when the form has changes', () => {
    const { onClose, onSave, button } = renderFooter();
    fireEvent.click(button('Close'));
    fireEvent.click(button('Save'));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('Save is disabled without changes', () => {
    const { button } = renderFooter({ hasChanges: false });
    expect(button('Save')).toBeDisabled();
    expect(button('Close')).toBeEnabled();
  });

  it('both buttons are disabled while the save runs', () => {
    const { button } = renderFooter({ isLoadingSubmit: true });
    expect(button('Save')).toBeDisabled();
    expect(button('Close')).toBeDisabled();
  });
});
