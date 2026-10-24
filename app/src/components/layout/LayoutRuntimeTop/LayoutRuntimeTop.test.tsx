import { describe } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './LayoutRuntimeTop.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('LayoutRuntime_Top', () => {
  testCapturedVariants(stories, captures);
});
