import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ServicesFooter } from './ServicesFooter';

describe('ServicesFooter', () => {
  it('"Save changes" raises onSaveChanges, and the footer pads the content container', () => {
    const onSaveChanges = vi.fn();
    render(
      <div>
        <div id="ContentWrapper" />
        <ServicesFooter contentContainerId="ContentWrapper" isLoading={false} onSaveChanges={onSaveChanges} />
      </div>,
    );
    const save = screen.getByRole('button', { name: 'Save changes' });
    expect(save).not.toBeDisabled();
    fireEvent.click(save);
    expect(onSaveChanges).toHaveBeenCalledTimes(1);
    expect(document.getElementById('ContentWrapper')?.classList).toContain('ubt-fixed-footer--content');
  });

  it('while a save runs, the button shows the loading state and is disabled', () => {
    render(<ServicesFooter contentContainerId="ContentWrapper" isLoading onSaveChanges={vi.fn()} />);
    const save = screen.getByRole('button', { name: 'Save changes' });
    expect(save).toBeDisabled();
    expect(save.closest('[aria-busy]')?.getAttribute('aria-busy')).toBe('true');
  });
});
