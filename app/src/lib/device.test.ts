import { expect, test } from 'vitest';
import { osToken } from './device';

test('the OS class follows the user agent like OutSystems UI GetOS_Legacy', () => {
  expect(osToken('Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)')).toBe('ios');
  expect(osToken('Mozilla/5.0 (Linux; Android 14; Pixel 8)')).toBe('android');
  expect(osToken('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')).toBe('windows');
  expect(osToken('Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5)')).toBe('osx');
  expect(osToken('Mozilla/5.0 (X11; Linux x86_64)')).toBeNull();
});
