import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { highlight_V3 } from './highlight';
import * as stories from './HighlightSearch.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('HighlightSearch', () => {
  testCapturedVariants(stories, captures);

  it('drops stop words, prefers longer terms, honours word bounds', () => {
    expect(highlight_V3('Rome and Paris', 'rome and paris', 'and in', false)).toEqual([
      { text: 'Rome', highlighted: true },
      { text: ' and ', highlighted: false },
      { text: 'Paris', highlighted: true },
    ]);
    expect(highlight_V3('Ann Annabel', 'ann', '', true)).toEqual([
      { text: 'Ann', highlighted: true },
      { text: ' Annabel', highlighted: false },
    ]);
  });

  it('falls back to the first accent-insensitive match, or plain text', () => {
    expect(highlight_V3('Zoë and Zoë', 'zoe', '', false)).toEqual([
      { text: 'Zoë', highlighted: true },
      { text: ' and Zoë', highlighted: false },
    ]);
    expect(highlight_V3('Plain', '', 'and in', false)).toEqual([{ text: 'Plain', highlighted: false }]);
  });
});
