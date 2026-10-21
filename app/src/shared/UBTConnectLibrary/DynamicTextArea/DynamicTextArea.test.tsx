import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { DynamicTextArea } from './DynamicTextArea';
import * as stories from './DynamicTextArea.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const area = (text: string, bounded = false) => (
  <DynamicTextArea inText={text} inIsBounded={bounded}>
    <span>
      <textarea />
    </span>
  </DynamicTextArea>
);

describe('DynamicTextArea', () => {
  testCapturedVariants(stories, captures);

  it('OnReady / OnParametersChanged: data-replicated-value = In_Text on the textarea parent', () => {
    const { container, rerender } = render(area('Hello'));
    const span = container.querySelector('textarea')?.parentElement;
    expect(span).toHaveAttribute('data-replicated-value', 'Hello');
    rerender(area('Hello again'));
    expect(span).toHaveAttribute('data-replicated-value', 'Hello again');
  });

  it('In_IsBounded False: no bounded modifier', () => {
    const { container } = render(area(''));
    expect(container.querySelector('[data-container]')?.className).toBe('resizable-text-area');
  });
});
