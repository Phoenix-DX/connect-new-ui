import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { freshPage } from '@/test/testSupport';
import { server } from '@/test/setup';
import { ApiError, asApiError } from './apiError';
import { callAction } from './callAction';
import {
  CommunicationException,
  SecurityException,
  ServerException,
  UserException,
  ViewHasChangedException,
  answerOfException,
} from '@/legacy/os/os-exceptions';

/* ApiError (P5-1): the kind of each failure that callAction raises, with the OutSystems exception as the cause. */

const PATH = '/api/Connect2_LegacyShared/ActionGetNumberUnreadMessages';
const unread = () => callAction('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', { DeviceId: 'device-1' });
/** The ApiError of the failure of the next call. */
const failure = () => unread().then(() => null, asApiError);

beforeEach(() => {
  freshPage();
});
afterEach(() => {
  vi.useRealTimers();
});

test('no answer within the module timeout: timeout', async () => {
  vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
  server.use(http.post(PATH, () => new Promise<never>(() => undefined)));
  const pending = failure();
  await vi.advanceTimersByTimeAsync(10_000);
  const error = await pending;
  expect(error).toMatchObject({ kind: 'timeout', message: 'The connection has timed out' });
  expect(error?.cause).toBeInstanceOf(CommunicationException);
});

test('the request fails (offline): network', async () => {
  server.use(http.post(PATH, () => HttpResponse.error()));
  const error = await failure();
  expect(error).toMatchObject({ kind: 'network', message: 'Request failed with an error' });
  expect(error?.cause).toBeInstanceOf(CommunicationException);
});

test('an answer that is not ok, without an exception (the error scenario): server', async () => {
  server.use(http.post(PATH, () => HttpResponse.json({ error: 'mock error' }, { status: 500 })));
  const error = await failure();
  expect(error).toMatchObject({ kind: 'server', message: 'Request failed with status 500' });
  expect(error?.cause).toBeInstanceOf(CommunicationException);
});

test('an answer 401 without an exception: security', async () => {
  server.use(http.post(PATH, () => HttpResponse.json({ error: 'x' }, { status: 401 })));
  const error = await failure();
  expect(error).toMatchObject({ kind: 'security', message: 'Request failed with status 401' });
  expect(error?.cause).toBeInstanceOf(CommunicationException);
});

test('a SecurityException answer: security', async () => {
  server.use(
    http.post(PATH, () => HttpResponse.json({ error: 'Not allowed', exception: 'SecurityException' }, { status: 500 })),
  );
  const error = await failure();
  expect(error).toMatchObject({ kind: 'security', message: 'Not allowed' });
  expect(error?.cause).toBeInstanceOf(SecurityException);
});

test('a 404 without an exception: viewChanged', async () => {
  server.use(http.post(PATH, () => HttpResponse.json({ error: 'x' }, { status: 404 })));
  const error = await failure();
  expect(error?.kind).toBe('viewChanged');
  expect(error?.cause).toBeInstanceOf(ViewHasChangedException);
});

test("the server's own exception: server, the exception kept as the cause", async () => {
  const exception = new UserException('Invalid country id', 'Connect2_LegacyShared.ObjectNotFound');
  server.use(http.post(PATH, () => HttpResponse.json(answerOfException(exception), { status: 500 })));
  const error = await failure();
  expect(error).toBeInstanceOf(ApiError);
  expect(error).toMatchObject({ kind: 'server', name: 'ApiError', message: 'Invalid country id' });
  expect(error?.cause).toBeInstanceOf(UserException);
  expect(error?.cause.specificType).toBe('Connect2_LegacyShared.ObjectNotFound');
});

test('callAction still raises the OutSystems exception itself', async () => {
  server.use(http.post(PATH, () => HttpResponse.error()));
  await expect(unread()).rejects.toBeInstanceOf(CommunicationException);
});

test('asApiError keeps an ApiError and returns null for an error that is not a call failure', () => {
  const error = new ApiError(new ServerException('Server error'));
  expect(asApiError(error)).toBe(error);
  expect(asApiError(new TypeError('x is undefined'))).toBeNull();
  expect(asApiError('text')).toBeNull();
});

test('ApiError.ofKind: the cause is the exception of the kind', () => {
  const error = ApiError.ofKind('security', 'Session ended');
  expect(error).toMatchObject({ kind: 'security', message: 'Session ended' });
  expect(error.cause).toBeInstanceOf(SecurityException);
  expect(ApiError.ofKind('timeout').cause.message).toBe('The connection has timed out');
});
