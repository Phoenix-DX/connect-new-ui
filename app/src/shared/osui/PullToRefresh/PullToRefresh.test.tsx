import { describe } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './PullToRefresh.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('PullToRefresh', () => {
  testCapturedVariants(stories, captures);
});
