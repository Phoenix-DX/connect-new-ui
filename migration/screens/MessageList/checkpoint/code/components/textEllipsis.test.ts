import { describe, expect, it } from 'vitest';
import { textEllipsis } from './textEllipsis';

describe('textEllipsis (OutSystemsUI TextEllipsis)', () => {
  it('keeps a text of at most NumberOfChars characters', () => {
    expect(textEllipsis('Newest to Oldest', 30)).toBe('Newest to Oldest');
    expect(textEllipsis('abc', 3)).toBe('abc');
  });

  it('cuts a longer text and adds "..."', () => {
    expect(textEllipsis('Summer assembly hall security marshals', 30)).toBe('Summer assembly hall security ...');
  });
});
