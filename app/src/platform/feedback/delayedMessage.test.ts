import { expect, test, vi } from 'vitest';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { delayedMessageShow } from './delayedMessage';
import * as autoClose from './feedbackMessageAutoClose';

test('a pending delayed message is shown once with the original arguments, then cleared', () => {
  freshPage();
  const spy = vi.spyOn(autoClose, 'feedbackMessageAutoClose').mockImplementation(() => undefined);
  setClientVar(
    'UBT_AppManager.AppManager_DelayedMessage',
    JSON.stringify({ MessageTitle: 'Signed out', Message: 'Please sign in again', Type: 'info' }),
  );
  delayedMessageShow();
  expect(spy).toHaveBeenCalledWith({
    title: 'Signed out',
    message: 'Please sign in again',
    messageType: 'info',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
  expect(getClientVar('UBT_AppManager.AppManager_DelayedMessage')).toBe('');
  delayedMessageShow();
  expect(spy).toHaveBeenCalledTimes(1);
});
