import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InputCounter } from './InputCounter';

describe('InputCounter', () => {
  it('renders the original classes with NoteInitialLength / the maxlength of the input', () => {
    const { container } = render(
      <>
        <textarea id="counted" maxLength={5} />
        <InputCounter inputId="counted" noteInitialLength={2} id="b1-$b2" />
      </>,
    );
    const block = container.querySelector('[data-block="Reusable.InputCounter"]');
    expect(block).toHaveAttribute('id', 'b1-$b2');
    expect(block?.firstElementChild).toHaveClass('text-align-right');
    const span = block?.querySelector('span');
    expect(span).toHaveClass('text-neutral-6', 'font-size-0-75em', 'margin-top-s');
    expect(span).toHaveTextContent('2/5');
  });

  it('typing updates the count and cuts the value to maxlength', () => {
    const { container } = render(
      <>
        <textarea id="counted" maxLength={5} />
        <InputCounter inputId="counted" />
      </>,
    );
    const textarea = container.querySelector('textarea');
    if (!textarea) throw new Error('no textarea');
    textarea.value = 'abcdefgh';
    fireEvent.input(textarea);
    expect(textarea.value).toBe('abcde');
    expect(container.querySelector('span')).toHaveTextContent('5/5');
  });

  it('without the input element the counter keeps NoteInitialLength / 0', () => {
    const { container } = render(<InputCounter inputId="missing" noteInitialLength={3} />);
    expect(container).toHaveTextContent('3/0');
  });
});
