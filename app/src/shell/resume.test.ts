import { expect, test } from 'vitest';
import { getColdStartLinkURL, getResumeLoginLink, setResumeLoginLink } from './resume';

test('GetColdStartLinkURL is empty on the web (U14: native deep-link plugins later)', () => {
  expect(getColdStartLinkURL()).toBe('');
});

test('GetResumeLoginLink returns the link once', () => {
  setResumeLoginLink('/UBTConnect/Notes');
  expect(getResumeLoginLink()).toBe('/UBTConnect/Notes');
  expect(getResumeLoginLink()).toBe('');
});
