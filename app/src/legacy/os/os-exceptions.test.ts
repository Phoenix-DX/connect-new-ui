import { describe, expect, test } from 'vitest';
import {
  AbortActivityChangeException,
  CONNECTION_TIMED_OUT,
  CommunicationException,
  DataBaseException,
  InvalidLoginException,
  NotRegisteredException,
  REQUEST_FAILED,
  SecurityException,
  ServerException,
  UserException,
  ViewHasChangedException,
  apiErrorKindOf,
  exceptionOfApiErrorKind,
  type ApiErrorKind,
} from './os-exceptions';

/* The mapping between the OutSystems exceptions of a server call and the kinds of api/client ApiError (P5-1). */

describe('apiErrorKindOf: the kind of the exception that callAction raises', () => {
  test.each([
    ['no answer within the timeout', new CommunicationException(CONNECTION_TIMED_OUT), 'timeout'],
    ['the request failed', new CommunicationException(REQUEST_FAILED), 'network'],
    ['an answer 401 without an exception', new CommunicationException('Request failed with status 401'), 'security'],
    ['an answer 500 without an exception', new CommunicationException('Request failed with status 500'), 'server'],
    ['an answer 503 without an exception', new CommunicationException('Request failed with status 503'), 'server'],
    ['a 404 without an exception', new ViewHasChangedException(), 'viewChanged'],
    ['SecurityException', new SecurityException('Not allowed'), 'security'],
    ['InvalidLoginException', new InvalidLoginException('Invalid login'), 'security'],
    ['NotRegisteredException', new NotRegisteredException('Not registered', 'NotRegistered'), 'security'],
    ['UserException', new UserException('Invalid country id', 'Connect2_LegacyShared.ObjectNotFound'), 'server'],
    ['ServerException', new ServerException('Server error'), 'server'],
    ['DataBaseException', new DataBaseException('Error executing query'), 'server'],
    ['AbortActivityChangeException', new AbortActivityChangeException(), 'server'],
  ] as const)('%s → %s', (_, exception, kind) => {
    expect(apiErrorKindOf(exception)).toBe(kind);
  });

  test('a CommunicationException with another text is a network failure', () => {
    expect(apiErrorKindOf(new CommunicationException('Request failed with status'))).toBe('network');
    expect(apiErrorKindOf(new CommunicationException(''))).toBe('network');
  });
});

describe('exceptionOfApiErrorKind: the exception of a kind', () => {
  test('timeout and network: the CommunicationException texts of the runtime', () => {
    const timeout = exceptionOfApiErrorKind('timeout', 'ignored');
    expect(timeout).toBeInstanceOf(CommunicationException);
    expect(timeout.message).toBe('The connection has timed out');
    const network = exceptionOfApiErrorKind('network');
    expect(network).toBeInstanceOf(CommunicationException);
    expect(network.message).toBe('Request failed with an error');
  });

  test('security: SecurityException with the message', () => {
    const security = exceptionOfApiErrorKind('security', 'Not allowed', 'ignored');
    expect(security).toBeInstanceOf(SecurityException);
    expect(security).toMatchObject({ message: 'Not allowed', specificType: '', exception: 'SecurityException' });
  });

  test('viewChanged: ViewHasChangedException', () => {
    expect(exceptionOfApiErrorKind('viewChanged')).toBeInstanceOf(ViewHasChangedException);
  });

  test('server: ServerException with the message and the specific type', () => {
    const server = exceptionOfApiErrorKind('server', 'Server error', 'UBTConnect.Failed');
    expect(server).toBeInstanceOf(ServerException);
    expect(server).toMatchObject({ message: 'Server error', specificType: 'UBTConnect.Failed' });
  });

  test.each(['timeout', 'network', 'server', 'security', 'viewChanged'] as const satisfies readonly ApiErrorKind[])(
    'both ways: the exception of %s has the same kind',
    (kind) => {
      expect(apiErrorKindOf(exceptionOfApiErrorKind(kind, 'message'))).toBe(kind);
    },
  );
});
