import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { InputCounter } from './InputCounter';
import * as stories from './InputCounter.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('InputCounter', () => {
  testCapturedVariants(stories, captures);

  it('shows In_InitialLength / the maxlength of the input, then the typed length (cut to maxlength)', () => {
    const { container } = render(
      <>
        <textarea id="counted" maxLength={5} />
        <InputCounter inInputId="counted" inInitialLength={2} />
      </>,
    );
    const counter = container.querySelector('.ubt-custom-container');
    expect(counter).toHaveTextContent('2/5');
    const textarea = container.querySelector('textarea');
    if (!textarea) throw new Error('no textarea');
    textarea.removeAttribute('maxlength');
    textarea.value = 'abcdefgh';
    textarea.setAttribute('maxlength', '5');
    fireEvent.input(textarea);
    expect(textarea.value).toBe('abcde');
    expect(counter).toHaveTextContent('5/5');
  });

  it('without the input element the counter keeps In_InitialLength / 0', () => {
    const { container } = render(<InputCounter inInputId="missing" inInitialLength={3} />);
    expect(container).toHaveTextContent('3/0');
  });
});
