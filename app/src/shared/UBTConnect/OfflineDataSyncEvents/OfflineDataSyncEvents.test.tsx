import { describe } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './OfflineDataSyncEvents.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('OfflineDataSyncEvents', () => {
  testCapturedVariants(stories, captures);
});
