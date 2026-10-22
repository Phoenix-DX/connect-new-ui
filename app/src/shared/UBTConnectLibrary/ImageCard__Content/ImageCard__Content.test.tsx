import { describe } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './ImageCard__Content.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ImageCard__Content', () => {
  testCapturedVariants(stories, captures);
});
