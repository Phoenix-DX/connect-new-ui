import { describe } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './Columns2.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Columns2', () => {
  testCapturedVariants(stories, captures);
});
