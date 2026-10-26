import { render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { setDefaults } from '@/lib/sanitizeHtml';
import { SanitizedHtml } from './SanitizedHtml';
import * as stories from './SanitizedHtml.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SanitizedHtml', () => {
  afterEach(() => {
    setDefaults();
  });

  testCapturedVariants(stories, captures);

  it('applies the inputs to the allow lists before sanitizing, and re-sanitizes on change', () => {
    const { container, rerender } = render(
      <SanitizedHtml value="<b>x</b><i>y</i><img src=x onerror=alert(1)>" disallowedTags="b,I" />,
    );
    const span = container.querySelector('span.OSFillParent');
    // tags are matched in upper case (HtmlSanitizer AllowedTags): "b" changes nothing, "I" drops <i> and its text
    expect(span?.innerHTML).toBe('<b>x</b><img src="x">');
    rerender(<SanitizedHtml value="<b>y</b>" resetWhitelist />);
    expect(span?.innerHTML).toBe('<b>y</b>');
  });
});
