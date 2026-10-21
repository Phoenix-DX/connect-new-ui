import { describe } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './InputWithIcon.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('InputWithIcon', () => {
  testCapturedVariants(stories, captures);
});
