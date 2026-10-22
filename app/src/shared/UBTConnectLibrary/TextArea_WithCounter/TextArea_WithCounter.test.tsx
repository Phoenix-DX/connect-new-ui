import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { TextArea_WithCounter } from './TextArea_WithCounter';
import * as stories from './TextArea_WithCounter.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('TextArea_WithCounter', () => {
  testCapturedVariants(stories, captures);

  it('counts the text area of the placeholder from In_InitialLength', () => {
    const { container } = render(
      <TextArea_WithCounter inInitialLength={4}>
        <span>
          <textarea id="counted" maxLength={100} defaultValue="abcd" />
        </span>
      </TextArea_WithCounter>,
    );
    expect(container.querySelector('[data-block="ConnectPatterns.InputCounter"]')).toHaveTextContent('4/100');
  });

  it('without a text area in the placeholder there is no counter', () => {
    const { container } = render(
      <TextArea_WithCounter>
        <input id="not-a-textarea" />
      </TextArea_WithCounter>,
    );
    expect(container.querySelector('[data-block="ConnectPatterns.InputCounter"]')).toBeNull();
  });
});
