import { describe } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './Columns3.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Columns3', () => {
  testCapturedVariants(stories, captures);
});
