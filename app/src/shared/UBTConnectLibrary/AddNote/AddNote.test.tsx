import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AddNote } from './AddNote';
import * as stories from './AddNote.stories';

const { CompiledView } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js:100-295). */
describe('AddNote', () => {
  it('a padded container with a top border, Columns_Two: text input + counter | send button', () => {
    const { container } = render(<CompiledView />);
    const box = container.querySelector(
      '[data-block="ConnectPatterns.AddNote"] > [data-block] > .ubt-custom-container',
    );
    expect(box).toHaveClass('padding-x-base', 'padding-top-s', 'border-top-s', 'border-color-neutral-3');
    const input = screen.getByPlaceholderText<HTMLInputElement>('Add a Note');
    expect(input.parentElement).toHaveClass('input-text');
    expect(input).toHaveClass('form-control', 'OSFillParent');
    expect(input).toHaveAttribute('type', 'text');
    expect(input.maxLength).toBe(150);
    expect(container.querySelector('[data-block="ConnectPatterns.InputCounter"]')).toHaveTextContent('0/150');
    expect(container.querySelector('.connect-icon-send')).toHaveClass('text-neutral-7');
  });

  it('the send button is enabled by a non-blank note; it raises OnSubmitRequested, then clears the note', async () => {
    const onOnSubmitRequested = vi.fn(() => Promise.resolve());
    const { container } = render(<AddNote onOnSubmitRequested={onOnSubmitRequested} />);
    const input = screen.getByPlaceholderText<HTMLInputElement>('Add a Note');
    fireEvent.change(input, { target: { value: '   ' } });
    expect(container.querySelector('.connect-icon-send')).toHaveClass('text-neutral-7');
    fireEvent.change(input, { target: { value: 'A sample note' } });
    const send = container.querySelector('.connect-icon-send');
    expect(send).toHaveClass('text-neutral-0');
    if (!send) throw new Error('no send icon');
    await act(async () => {
      fireEvent.click(send);
      await Promise.resolve();
    });
    expect(onOnSubmitRequested).toHaveBeenCalledWith('A sample note');
    expect(input).toHaveValue('');
  });
});
