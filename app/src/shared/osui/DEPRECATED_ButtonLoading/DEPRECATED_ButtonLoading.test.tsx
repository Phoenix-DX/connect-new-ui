import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DEPRECATED_ButtonLoading } from './DEPRECATED_ButtonLoading';

/* Never captured: behaviour from the compiled view and DisableKeypressOnLoadingJS. */
describe('DEPRECATED_ButtonLoading', () => {
  it('idle: classes, aria-live / atomic, empty role and aria-label', () => {
    const { container } = render(
      <DEPRECATED_ButtonLoading extendedClass="full-width">
        <button type="button">Send email</button>
      </DEPRECATED_ButtonLoading>,
    );
    const wrapper = container.querySelector('.osui-deprecated');
    expect(wrapper).toHaveClass('osui-deprecated', 'full-width', 'OSInline');
    expect(wrapper).not.toHaveClass('is--loading');
    expect(wrapper?.getAttribute('role')).toBe('');
    expect(wrapper?.getAttribute('aria-label')).toBe('');
    expect(wrapper?.getAttribute('aria-live')).toBe('polite');
    expect(wrapper?.getAttribute('aria-atomic')).toBe('true');
  });

  it('loading: is--loading, btn-show-label, role status, aria-label Loading; Enter and Space are cancelled', () => {
    const { container } = render(
      <DEPRECATED_ButtonLoading isLoading showLoadingAndLabel>
        <button type="button">Send email</button>
      </DEPRECATED_ButtonLoading>,
    );
    const wrapper = container.querySelector('.osui-deprecated');
    expect(wrapper).toHaveClass('is--loading', 'btn-show-label');
    expect(wrapper?.getAttribute('role')).toBe('status');
    expect(wrapper?.getAttribute('aria-label')).toBe('Loading');
    const button = screen.getByRole('button');
    expect(fireEvent.keyDown(button, { key: 'Enter' })).toBe(false);
    expect(fireEvent.keyDown(button, { key: ' ' })).toBe(false);
    // Any other key removes the listener (as the original), so Enter passes afterwards.
    expect(fireEvent.keyDown(button, { key: 'a' })).toBe(true);
    expect(fireEvent.keyDown(button, { key: 'Enter' })).toBe(true);
  });
});
