import { describe } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './SupperMeetingCardIconText.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SupperMeeting_ImageCard_Content_IconText', () => {
  testCapturedVariants(stories, captures);
});
