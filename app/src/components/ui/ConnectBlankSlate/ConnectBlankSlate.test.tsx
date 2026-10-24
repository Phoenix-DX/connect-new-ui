import { describe } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './ConnectBlankSlate.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/* The block has no logic: one DOM test per captured variant. */
describe('ConnectBlankSlate', () => {
  testCapturedVariants(stories, captures);
});
