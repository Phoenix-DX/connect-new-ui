import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { tagClass } from './Tag';
import * as stories from './Tag.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Tag', () => {
  testCapturedVariants(stories, captures);

  it('Size adds tag-<Size>; IsLight uses the lightest background and darker text', () => {
    expect(tagClass('primary', 'small', 'soft', false, '')).toBe('tag tag-small border-radius-soft background-primary');
    expect(tagClass('red', '', 'rounded', true, 'x')).toBe(
      'tag border-radius-rounded background-red-lightest text-red-darker x',
    );
  });
});
