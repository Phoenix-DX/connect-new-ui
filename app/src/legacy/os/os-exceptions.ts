import type { components } from '@/api/schema';

/* OutSystems client runtime exceptions (migration/runtime-sources/OutSystems.js:2, module
   OutSystems/ClientRuntime/Exceptions), the classes a ported flow can meet:

     Exception
       ServerException(specificType)        DataBaseException(specificType)      CommunicationException
       SecurityException                    AbortActivityChangeException         UserException(specificType)
         InvalidLoginException
         NotRegisteredException(specificType)
       SystemException
         IgnorableSystemException
           ViewHasChangedException

   CommunicationException, ServerException, UserException and DataBaseException extend Exception, not SystemException,
   so Handle Error: AllExceptions catches them. Every class takes (message, specificType = ''): the runtime takes the
   specific type first, and only for the four classes marked above. Like the runtime, `name` is the specific type when
   there is one, else the class name. `exception` is the class name, the `exception` of the contract's Error answer. */

/** An exception a server or service action raises: the contract's Error.exception (src/api/openapi.yaml). */
export type ServerExceptionName = components['schemas']['Error']['exception'];
/** The contract's error answer: { error: message, exception, specificType? }. */
export type ErrorAnswer = components['schemas']['Error'];

export class Exception extends Error {
  /** UserException, ServerException, DataBaseException, NotRegisteredException: e.g. 'Connect2_LegacyShared.ObjectNotFound'. */
  readonly specificType: string;
  constructor(message = '', specificType = '') {
    super(message);
    this.specificType = specificType;
    this.name = specificType || this.exception;
  }
  /** The OutSystems class name (OutSystems.js:2). */
  get exception(): string {
    return 'Exception';
  }
}

export class ServerException extends Exception {
  override get exception() {
    return 'ServerException' as const;
  }
}
export class DataBaseException extends Exception {
  override get exception() {
    return 'DataBaseException' as const;
  }
}
/** Raised by the client only: the request failed, timed out, or the answer was not a server answer (OutSystems.js:3). */
export class CommunicationException extends Exception {
  override get exception() {
    return 'CommunicationException' as const;
  }
}
/** The message of the CommunicationException a server call raises when it times out: the request's onTimeout
    (OutSystems.js:3, offset 74168). The shell's exception messages and Connect2_LegacyShared IsTimeoutExceptionMessage
    test this text. */
export const CONNECTION_TIMED_OUT = 'The connection has timed out';
export class SecurityException extends Exception {
  override get exception(): string {
    return 'SecurityException';
  }
}
export class InvalidLoginException extends SecurityException {
  override get exception() {
    return 'InvalidLoginException' as const;
  }
}
export class NotRegisteredException extends SecurityException {
  override get exception() {
    return 'NotRegisteredException' as const;
  }
}
export class SystemException extends Exception {
  override get exception(): string {
    return 'SystemException';
  }
}
export class IgnorableSystemException extends SystemException {
  override get exception(): string {
    return 'IgnorableSystemException';
  }
}
/** A server call answered 404 (OutSystems.js:3). The runtime also flags the module for an upgrade; the clone has no
    module versions, so only the exception is kept. */
export class ViewHasChangedException extends IgnorableSystemException {
  override get exception() {
    return 'ViewHasChangedException' as const;
  }
}
export class AbortActivityChangeException extends Exception {
  override get exception() {
    return 'AbortActivityChangeException' as const;
  }
}
export class UserException extends Exception {
  override get exception() {
    return 'UserException' as const;
  }
}

const fromServer: Record<ServerExceptionName, (message: string, specificType: string) => Exception> = {
  AbortActivityChangeException: (m) => new AbortActivityChangeException(m),
  DataBaseException: (m, t) => new DataBaseException(m, t),
  InvalidLoginException: (m) => new InvalidLoginException(m),
  NotRegisteredException: (m, t) => new NotRegisteredException(m, t),
  SecurityException: (m) => new SecurityException(m),
  ServerException: (m, t) => new ServerException(m, t),
  UserException: (m, t) => new UserException(m, t),
};

/** OS.Exceptions.getException (OutSystems.js:2): the exception a server answer names, or null when the body is not
    the contract's error answer. */
export function exceptionOfAnswer(body: unknown): Exception | null {
  if (typeof body !== 'object' || body === null) return null;
  const { error, exception, specificType } = body as Partial<Record<keyof ErrorAnswer, unknown>>;
  if (typeof exception !== 'string' || !Object.hasOwn(fromServer, exception)) return null;
  return fromServer[exception as ServerExceptionName](
    typeof error === 'string' ? error : '',
    typeof specificType === 'string' ? specificType : '',
  );
}

/** An exception a server or service action can raise, i.e. one the contract's error answer can name. */
export const isRaisedByServer = (error: unknown): error is Exception & { exception: ServerExceptionName } =>
  error instanceof Exception && Object.hasOwn(fromServer, error.exception);

/** The contract's error answer of an exception (what a server action, or a mock, sends). */
export function answerOfException(error: Exception & { exception: ServerExceptionName }): ErrorAnswer {
  return error.specificType
    ? { error: error.message, exception: error.exception, specificType: error.specificType }
    : { error: error.message, exception: error.exception };
}

/** A class of the hierarchy above. */
export type ExceptionClass = abstract new (...args: never[]) => Exception;

/** OS.Exceptions.isInstanceOf(ex, type, specificType) (OutSystems.js:2): Exception (AllExceptions) matches anything;
    otherwise the class, and the specific type when one is given (Handle Error on a named user exception). */
export function isInstanceOf(error: unknown, type: ExceptionClass, specificType = ''): boolean {
  return (
    type === Exception ||
    (error instanceof type && (specificType === '' || (!!error.specificType && error.specificType === specificType)))
  );
}
