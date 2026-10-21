import { http, HttpResponse } from 'msw';
import { expect, test } from 'vitest';
import { callAction } from '../lib/api';
import {
  CommunicationException,
  SecurityException,
  UserException,
  ViewHasChangedException,
  isInstanceOf,
} from '../lib/os-exceptions';
import { server } from '../test/setup';
import { contractHandler, raiseUserException } from './contract';

const unread = () => callAction('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', { DeviceId: 'device-1' });

test('a contract-typed fictional handler answers callAction with the contract shape', async () => {
  server.use(
    contractHandler('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', (inputs) => {
      expect(inputs.DeviceId).toBe('device-1');
      return { NumberPrivateUnreadMessages: '2', NumberPublicUnreadMessages: '5' };
    }),
  );
  const out = await callAction('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', { DeviceId: 'device-1' });
  expect(out).toEqual({ NumberPrivateUnreadMessages: '2', NumberPublicUnreadMessages: '5' });
});

test('wrong fictional shapes do not compile', () => {
  contractHandler('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', () => ({
    // @ts-expect-error Long Integer travels as a string, not a number
    NumberPrivateUnreadMessages: 2,
    NumberPublicUnreadMessages: '5',
  }));
  // @ts-expect-error an action that is not in the contract
  contractHandler('Connect2_LegacyShared', 'ActionDoesNotExist', () => ({}));
  expect(true).toBe(true);
});

test('a server exception thrown by a mock answer reaches callAction typed (OutSystems.js:2-3)', async () => {
  server.use(
    contractHandler('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', () =>
      raiseUserException('Invalid country id', 'Connect2_LegacyShared.ObjectNotFound'),
    ),
  );
  const error: unknown = await unread().catch((e: unknown) => e);
  expect(error).toBeInstanceOf(UserException);
  expect(error).toMatchObject({ message: 'Invalid country id', specificType: 'Connect2_LegacyShared.ObjectNotFound' });
  expect(isInstanceOf(error, UserException, 'Connect2_LegacyShared.ObjectNotFound')).toBe(true);
  expect(isInstanceOf(error, UserException, 'UBTConnect.InvalidAction')).toBe(false);

  server.use(
    contractHandler('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', () => {
      throw new SecurityException('Not allowed');
    }),
  );
  await expect(unread()).rejects.toMatchObject({ exception: 'SecurityException', message: 'Not allowed' });
});

test('failed answers without an exception: 404 → ViewHasChangedException, others and no answer → CommunicationException', async () => {
  const path = '/api/Connect2_LegacyShared/ActionGetNumberUnreadMessages';
  server.use(http.post(path, () => HttpResponse.json({ error: 'x' }, { status: 404 })));
  await expect(unread()).rejects.toBeInstanceOf(ViewHasChangedException);
  server.use(http.post(path, () => HttpResponse.json({ error: 'mock error' }, { status: 500 })));
  await expect(unread()).rejects.toThrow(new CommunicationException('Request failed with status 500'));
  server.use(http.post(path, () => HttpResponse.error()));
  await expect(unread()).rejects.toThrow(new CommunicationException('Request failed with an error'));
});
