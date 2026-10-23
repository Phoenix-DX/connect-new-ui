import { describe } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './SupperMeetingCardStatistics.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SupperMeeting_ImageCard_Content_Statistics', () => {
  testCapturedVariants(stories, captures);
});
