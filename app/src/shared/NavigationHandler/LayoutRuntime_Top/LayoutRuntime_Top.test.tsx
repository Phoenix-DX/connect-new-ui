import { describe } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './LayoutRuntime_Top.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('LayoutRuntime_Top', () => {
  testCapturedVariants(stories, captures);
});
